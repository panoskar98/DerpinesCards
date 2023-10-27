function ParseComments(inputString) {
    const commentsArray = [];
  
    // Split the input string by commas
    const commentPairs = inputString.split(',');
  
    commentPairs.forEach((commentPair) => {
      // Split each comment pair by a colon to separate the product and comment
      const [product, comment] = commentPair.split(':');
  
      // Trim any leading or trailing white spaces
      const productTrimmed = product.trim();
      const commentTrimmed = comment.trim();
  
      // Create an object for each comment pair and add it to the array
      commentsArray.push({ product: productTrimmed, comment: commentTrimmed });
    });
  
    return commentsArray;
  }
  
  export default ParseComments;