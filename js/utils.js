/**
 * Common Utility Functions
 */

const sgd = n => 'S$' + n.toLocaleString(undefined, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

function nomineeCost(miles) {
  if (!miles) return '--';
  let rate = 20.5;
  if (miles >= 200000 && miles < 500000) rate = 19.5;
  if (miles >= 500000) rate = 18.5;
  return sgd((miles / 1000) * rate);
}
