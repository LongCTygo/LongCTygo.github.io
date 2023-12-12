import axios from "axios";
import { useEffect, useState } from "react";

const CardNumberPriceRow = ({ price }) => {
  const [failed, setFailed] = useState(false);
  const [lowest, setLowest] = useState(-1);
  const [highest, setHighest] = useState(-1);
  const [average, setAverage] = useState(-1);
  const [count, setCount] = useState(-1);

  useEffect(() => {
    axios
      .get("https://api.bigweb.co.jp/products", {
        params: {
          game_id: 9,
          name: price.cardNumber,
        },
      })
      .then((result) => {
        const items = result.data.items;
        //Set
        let lowest = -1;
        let highest = -1;
        let sum = 0;
        let count = 0;
        items.forEach((item) => {
          if (item.condition.id !== 216) {
            console.log(
              `Skipped an item in ${item.cardNumber} because it's condition is not 'For Play'.`
            );
            return;
          }
          if (item.is_sold_out) {
            console.log(
              `Skipped an item in ${item.cardNumber} because it's not in stock.`
            );
            return;
          }
          const price = item.price;
          console.log(price);
          sum += price;
          count += 1;
          if (price > highest) {
            highest = price;
          }
          if (lowest === -1 || price < lowest) {
            lowest = price;
          }
        });
        if (count !== 0) {
          let average = Math.round(sum / count);
          setLowest(lowest);
          setHighest(highest);
          setAverage(average);
        }
        setCount(count);
      })
      .catch((error) => {
        console.log(error);
        setFailed(true);
      }, []);
  });

  if (count === -1) {
    return (
      <tr key={price.cardNumber}>
        <td className="border border-gray-300 p-2 text-secondary">
          <a
            href={`https://bigweb.co.jp/ja/products/yugioh/list?name=${price.cardNumber}&is_box=0&is_supply=0&is_purchase=0`}
          >
            {price.cardNumber}
          </a>
        </td>
        <td className="border border-gray-300 p-2">
          <span className="loading loading-dots loading-sm"></span>
        </td>
        <td className="border border-gray-300 p-2">
          <span className="loading loading-dots loading-sm"></span>
        </td>
        <td className="border border-gray-300 p-2">
          <span className="loading loading-dots loading-sm"></span>
        </td>
      </tr>
    );
  }

  if (failed) {
    return (
      <tr key={price.cardNumber}>
        <td className="border border-gray-300 p-2 text-secondary">
          <a
            href={`https://bigweb.co.jp/ja/products/yugioh/list?name=${price.cardNumber}&is_box=0&is_supply=0&is_purchase=0`}
          >
            {price.cardNumber}
          </a>
        </td>
        <td colSpan="3" className="border border-gray-300 text-error p-2">
          An error occured
        </td>
      </tr>
    );
  }
  if (count === 0) {
    return (
      <tr key={price.cardNumber}>
        <td className="border border-gray-300 p-2 text-secondary">
          <a
            href={`https://bigweb.co.jp/ja/products/yugioh/list?name=${price.cardNumber}&is_box=0&is_supply=0&is_purchase=0`}
          >
            {price.cardNumber}
          </a>
        </td>
        <td colSpan="3" className="border border-gray-300 text-error p-2">
          Out of stock
        </td>
      </tr>
    );
  }

  return (
    <tr key={price.cardNumber}>
      <td className="border border-gray-300 p-2 text-secondary">
        <a
          href={`https://bigweb.co.jp/ja/products/yugioh/list?name=${price.cardNumber}&is_box=0&is_supply=0&is_purchase=0`}
        >
          {price.cardNumber}
        </a>
      </td>
      <td className="border border-gray-300 p-2">{lowest}円</td>
      <td className="border border-gray-300 p-2">{highest}円</td>
      <td className="border border-gray-300 p-2">{average}円</td>
    </tr>
  );
};

export default CardNumberPriceRow;
