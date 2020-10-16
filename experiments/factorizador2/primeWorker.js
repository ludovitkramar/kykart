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
  for(sus = 3;sus<=b;sus++){
    isPrime = true;
    for(i = 0;i<primes.length;i++){
      if(sus/primes[i]%1==0){
        isPrime = false;
        break;
      }
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
  console.log('Done with: '+b);
  console.log(primes);
}
