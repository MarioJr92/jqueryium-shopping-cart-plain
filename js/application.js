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

$(document).ready(function() {
  updateTotal();

  let timeout;
  $(document).on('input', 'tr input', function() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      updateTotal();
    }, 800);
  });

  $(document).on('click', '.remove', function(event) {
    $(this).closest('tr').remove();
    updateTotal();
  });

  $('#itemToAdd').on('submit', function(event) {
    event.preventDefault();
    let jersey = $(this).children('[name=jerseyName]').val();
    let price = parseFloat($(this).children('[name=price]').val()).toFixed(2);

    $('tbody').append(`<tr><td class="jersey">${jersey}</td><td class="price">$${price}</td><td class="quantity"><input type="number" min="0" max="20"></td><td class="cost"></td><td><button class="remove">Remove</button></td></tr>`
    );

    updateTotal();
    $(this).children('[name=jerseyName]').val('');
    $(this).children('name=price').val('');
  });

});