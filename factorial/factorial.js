function calculo(x)
{

  if (x === 0)
 {
    return 1;
 }
  return x * calculo(x-1);

}
console.log(calculo(5));
