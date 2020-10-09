onmessage = function(e) {
  console.log('Worker received:'+e.data);
  primes = [2];
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
  console.log('Done with: '+b);
  console.log(primes);
}
