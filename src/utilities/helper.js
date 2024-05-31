export const loadThumbnail = (levelCode) => {
    try {
      return require(`../img/small/${levelCode}.jpg`)
    } catch (error) {
      
    }
    console.log(`The thumbnail of level "${levelCode}" was not found. Using TGR's API to retrieve the thumbnail.`)
    return `https://tgrcode.com/mm2/level_thumbnail/${levelCode}`
  }

  export const loadEntireThumbnail = (levelCode) => {
    try {
      return require(`../img/large/${levelCode}.jpg`)
    } catch (error) {
      
    }
    console.log(`The thumbnail of level "${levelCode}" was not found. Using TGR's API to retrieve the thumbnail.`)
    return `https://tgrcode.com/mm2/level_entire_thumbnail/${levelCode}`
  }

  export const formatLevelCode = (input) => {
    // Define the regular expression for the desired format
    const desiredFormat = /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/;

    // If the input already matches the desired format, return it unchanged
    if (desiredFormat.test(input)) {
        return input;
    }

    // Define the regular expression for the unformatted input
    const unformattedPattern = /^([A-Z0-9]{3})([A-Z0-9]{3})([A-Z0-9]{3})$/;

    // Format the input string if it matches the unformatted pattern
    if (unformattedPattern.test(input)) {
        return input.replace(unformattedPattern, '$1-$2-$3');
    }

    // If the input doesn't match the expected pattern, return it unchanged or handle it as needed
    return input;
}