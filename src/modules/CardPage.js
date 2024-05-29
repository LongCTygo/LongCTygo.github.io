// CardPage.js
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardInfo from "../partials/CardInfo";
import CardNumberPriceRow from "../partials/CardNumberPriceRow";

const CardPage = () => {
  const { password } = useParams();
  const [cardName, setCardName] = useState("");
  const [card, setCard] = useState({});
  const [prices, setPrices] = useState([]);
  const [wikiText, setWikiText] = useState("");

  //Card Info
  useEffect(() => {
    if (password.length === 0) {
      return;
    }
    console.log(password);
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
        params: {
          id: password,
        },
      })
      .then((result) => {
        const card = result.data.data[0];
        setCard(card);
        setCardName(card.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [password]);

  //WikiText
  useEffect(() => {
    const getWikiText = () => {
      if (cardName.length === 0) {
        return;
      }
      axios
        .get("https://yugipedia.com/api.php", {
          params: {
            action: "query",
            prop: "revisions",
            titles: cardName,
            rvprop: "content",
            format: "json",
          },
        })
        .then((result) => {
          const pages = result.data.query.pages;
          const pageValue = Object.values(pages)[0];
          setWikiText(pageValue.revisions[0]["*"]);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getWikiText();
  }, [cardName]);

  useEffect(() => {
    document.title = cardName.length > 0 ? cardName : "Loading...";
  }, [cardName]);

  //Sets
  useEffect(() => {
    if (wikiText.length === 0) {
      return;
    }
    console.log(wikiText);
    //Get all sets
    const sets = [...wikiText.matchAll("[A-Z0-9]{3,4}-JP[A-Z0-9]{3}")];
    const allPrices = [];
    for (const key in sets) {
      const set = sets[key];
      allPrices.push({
        cardNumber: set[0],
        lowest: -1,
        highest: -1,
        average: -1,
        stock: false,
      });
    }
    setPrices(allPrices);
    console.log(sets);
  }, [wikiText]);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-1">
          <div className="mb-4">
            <Link className="btn btn-primary py-2 px-5" to="/jp-price">
              Back
            </Link>
          </div>
          <div>
            <img
              src={
                card.card_images != null
                  ? card.card_images[0].image_url_small
                  : ""
              }
              alt={card.name}
              className="h-64 object-cover"
            />
            <div className="mt-4">
              <h2 className="text-xl font-bold">{card.name}</h2>
              <CardInfo card={card} />
              {card.desc === undefined
                ? ""
                : card.desc
                    .split("\n")
                    .map((line) => (
                      <p className="text-primary">{line}</p>
                    ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          <h1 className="text-2xl text-center font-bold mb-4">
            Bigweb (
            <a className="text-secondary" href="https://bigweb.co.jp">
              bigweb.co.jp
            </a>
            )
          </h1>
          <table className="w-full text-center border-collapse border table">
            <thead>
              <tr>
                <th className="border p-2">Set Number</th>
                <th className="border p-2">Lowest</th>
                <th className="border p-2">Highest</th>
                <th className="border p-2">Average</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price) => (
                <CardNumberPriceRow key={price.cardNumber} price={price} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
