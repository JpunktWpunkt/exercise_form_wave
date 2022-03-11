 const labels = document.querySelectorAll('.form-control label')

 labels.forEach(label => {
     label.innerHTML = label.innerText
         .split('')                                                    //split the string
         .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)        //put every letter in a span
         .join('' )                                                            //get it out
 })