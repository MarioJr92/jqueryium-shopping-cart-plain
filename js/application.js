const calculateTotalCost = (el) => {
  let jerseyPrice = $(el).find('.price').text().substring(1);
  let jerseyQuantity = parseFloat($(el).find('.quantity input').val());

  if (isNaN(jerseyQuantity)) {
    jerseyQuantity = 0;
  }

  let totalCost = jerseyPrice * jerseyQuantity;
  return totalCost;
};

const updateTotalCost = (el) => {
  let prices = [];

  $('tbody tr').each((i, el) => {
    let totalCost = parseFloat(calculateTotalCost(el));
    prices.push(totalCost);
    $(el).children('.cost').html(`$${totalCost.toFixed(2)}`);
  });

  console.log(prices);
  return prices;
};

const sum = (x, y) => {
  return x + y;
};

const updateTotal = () => {
  let totalCost = updateTotalCost().reduce(sum).toFixed(2);
  $('#totalCost').html(totalCost);
};