const wrapping = (giftsList) => {
    let wrapped = [];
    
    giftsList.forEach(gift => {                              
    const paper = gift.length+2;
    let wrapp = '';
    while (wrapp.length < paper) {
    wrapp += "*";
   }
  
    wrapped.push(`${wrapp}\n*${gift}*\n${wrapp}`);
    
    }) 
    return wrapped
  }
   
  
  const giftss = ['book', 'game', 'socks'];
  const wrapped = wrapping(giftss);
  console.log(wrapped);