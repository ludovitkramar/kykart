onmessage = function(e) {
  primes = [2];
  //b should be received from the main page
  b = e.data;
  outputHTML = '';
  for(sus = 3;sus<=b-1;sus++){
    isPrime = true;
    for(i = 0;i<primes.length;i++){
      if(sus/primes[i]%1==0){
        isPrime = false;
        break;
      }
    }
    if(isPrime == true){
      primes.push(sus);
    }
  }
  postMessage(primes);
}
