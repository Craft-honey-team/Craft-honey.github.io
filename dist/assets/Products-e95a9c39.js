import{_ as g,u,o as i,c as _,b as t,F as h,f as x,t as c,r as f,e as v,w as m,a as C}from"./index-51f8cd84.js";import{_ as b}from"./Group19-49c36de6.js";const y={data(){return{data:u().data,dataOpt:u().dataOpt,store:u()}},methods:{incrementProductCount(e,n){let s;n=="orders"?s=this.data:s=this.dataOpt,s[e].quantity++},decrementProductCount(e,n){let s;n=="orders"?s=this.data:s=this.dataOpt,s[e].quantity>1&&s[e].quantity--},addToCart(e,n){console.log(e);let s;n=="orders"?s=this.data:s=this.dataOpt;try{this.store.cart[e].quantity+=s[e].quantity}catch(a){console.log(a),console.log(typeof this.store.cart),this.store.cart[e]=JSON.parse(JSON.stringify(s[e]))}this.store.uid!=""?fetch("/api/usersAddCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:parseInt(e),2:this.store.uid,3:n,4:s[e].quantity})}).then(a=>console.log("ok")).catch(a=>console.log(a)):localStorage.setItem("cart",JSON.stringify(this.store.cart))}}},w=t("div",{class:"flex justify-center"},[t("div",{class:"border-b-black border-b-[3px] w-fit mb-20"},[t("h2",{class:"text-[40px] max-[900px]:text-center"},"Розничная продукция")])],-1),k={class:"mb-[40px] flex flex-wrap justify-around"},A={class:"w-[320px] mb-[40px]"},O={class:"bg-white rounded-[12px]"},P={class:"text-[25px]"},j={class:"mb-[10px]"},$=t("img",{class:"rounded-[5px] mb-[10px]",src:b},null,-1),q={class:"grid grid-flow-row gap-4"},B={class:"grid grid-cols-2 gap-[50px] text-[20px]"},S={class:"justify-self-end"},D={class:""},E={class:"grid grid-cols-2 gap-[20px]"},F=t("p",{class:"text-[20px] leading-none self-center"},"Количество товаров:",-1),L={class:"grid grid-flow-col self-center justify-self-end gap-[2px] px-1"},N=["onClick"],T=t("p",null,"-",-1),J=[T],I={class:"text-[20px]"},V=["onClick"],z=t("p",null,"+",-1),G=[z],H=["onClick"],K=t("button",null,"Купить",-1),M=[K],Q=t("div",{class:"flex justify-center"},[t("div",{class:"border-b-black border-b-[3px] w-fit mb-20"},[t("h2",{class:"text-[40px] max-[900px]:text-center"},"Оптовая продукция")])],-1),R={class:"mb-[40px] flex flex-wrap justify-around"},U={class:"w-[320px]"},W={class:"bg-white rounded-[12px]"},X={class:"text-[25px]"},Y={class:"mb-[10px]"},Z=t("img",{class:"rounded-[5px] mb-[10px]",src:b},null,-1),tt={class:"grid grid-flow-row gap-4"},st={class:"grid grid-cols-2 gap-[20px] text-[20px]"},et={class:"justify-self-end"},ot={class:""},rt={class:"grid grid-cols-2 gap-[20px]"},ct=t("p",{class:"text-[20px] leading-none self-center"},"Количество товаров:",-1),nt={class:"grid grid-flow-col self-center justify-self-end gap-[2px] px-1"},dt=["onClick"],at=t("p",{class:"relative mb-[10px]"},"-",-1),it=[at],lt={class:"text-[20px]"},_t=["onClick"],pt=t("p",{class:"relative mb-[10px]"},"+",-1),ut=[pt],ht=["onClick"],xt=t("button",{class:""},"Купить",-1),ft=[xt];function gt(e,n,s,a,p,d){return i(),_(h,null,[w,t("div",k,[(i(!0),_(h,null,x(p.store.data,(o,r)=>(i(),_("div",A,[t("div",O,[t("div",P,[t("h1",j,c(o.name),1)]),$,t("div",q,[t("div",B,[t("span",null,"Объем: "+c(o.volume)+"л",1),t("span",S,"Цена: "+c(o.price)+"kgs",1)]),t("div",D,[t("div",E,[F,t("div",L,[t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:l=>d.decrementProductCount(r,"orders")},J,8,N),t("p",I,c(o.quantity)+" шт",1),t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:l=>d.incrementProductCount(r,"orders")},G,8,V)])])]),t("div",{onClick:l=>d.addToCart(r,"orders"),class:"flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},M,8,H)])])]))),256))]),Q,t("div",R,[(i(!0),_(h,null,x(p.store.dataOpt,(o,r)=>(i(),_("div",U,[t("div",W,[t("div",X,[t("h1",Y,c(o.name),1)]),Z,t("div",tt,[t("div",st,[t("span",null,"Объем: "+c(o.volume)+"л",1),t("span",et,"Цена: "+c(o.price)+"kgs",1)]),t("div",ot,[t("div",rt,[ct,t("div",nt,[t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:l=>d.decrementProductCount(r,"opt")},it,8,dt),t("p",lt,c(o.quantity)+" шт",1),t("button",{class:"w-[30px] h-[30px] border-solid border-2 border-[#1C1B1F] rounded-full hover:bg-[#EAAD02]",onClick:l=>d.incrementProductCount(r,"opt")},ut,8,_t)])])]),t("div",{onClick:l=>d.addToCart(r,"ordersOpt"),class:"flex justify-center align-center bg-[#EAAD02] h-[35px] rounded-[6px] px-2 text-center text-white hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},ft,8,ht)])])]))),256))])],64)}const bt=g(y,[["render",gt]]),vt={data(){return{store:u()}},components:{ProductList:bt}},mt={class:"my-[40px] max-[900px]:text-center"},Ct={class:"text-[50px]"};function yt(e,n,s,a,p,d){const o=f("ProductList"),r=f("Layout");return i(),v(r,null,{default:m(()=>[t("div",null,[t("div",mt,[t("p",Ct,c(p.store.langProp.catalogue),1)]),C(o)])]),_:1})}const At=g(vt,[["render",yt]]);export{At as default};
