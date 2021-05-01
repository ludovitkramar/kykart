//This worker receives a number and returns an array with its factors, except for 1, the calling code should handle 1 and 0.
onmessage = function(e) {
  console.log('Worker received:'+e.data);
  primes = [2];
  factors = [];
  b = e.data;
  outputHTML = '';
  while (b%2 == 0) {
    b /= 2;
    factors.push(2);
  };
  for(sus = 3;sus<=b;sus+=2){
    isPrime = true;
    max = primes[-1]**2;
    for(i = 0;i<primes.length;i++){
      if(sus/primes[i]%1==0){
        isPrime = false;
        break;
      };
      if(sus*(sus-1)>b){
        break;
      };
      if(sus<max){
        break;
      };
    }
    if(isPrime == true){
      primes.push(sus);
      while (b%sus == 0) {
        b /= sus;
        factors.push(sus);
      };
    }
  }
  postMessage(factors);
  console.log('Factor:');
  console.log(factors);
  console.log('Primes calculated: ')
  console.log(primes);
}
