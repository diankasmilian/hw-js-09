function e(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setInterval((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(function(t){t.preventDefault();const o=Number(t.target.delay.value),n=Number(t.target.step.value),r=Number(t.target.amount.value);for(let t=0;t<r;t++){e(t+1,o+t*n).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.9b75ebd6.js.map
