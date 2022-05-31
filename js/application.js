const calculateTotalCost = (el) => {
  let jerseyPrice = $(el).find('.price').text().substring(1);
  let jerseyQuantity = parseFloat($(el).find('.quantity input').val());

  if (isNaN(jerseyQuantity)) {
    jerseyQuantity = 0;
  }

  let totalCost = jerseyPrice * jerseyQuantity;
  return totalCost;
};