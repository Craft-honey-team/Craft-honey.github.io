import{_ as p,o as s,d as n,F as u,e as g,a as t,t as x,r as d,c as _,w as h,f}from"./index-40e98e02.js";const b={data:()=>({DATA:[{id:1,name:"med1",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:2,name:"med2",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:3,name:"med3",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:4,name:"med4",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:5,name:"med5",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:6,name:"med6",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"},{id:7,name:"med7",image:"https://tea.ua/upload/blog/1221/2112/honey/2.png"}]}),methods:{async getdata(){const o=await(await fetch("http://localhost:3000/products")).json();this.DATA=await o,console.log(this.DATA)}},mounted(){}},y={class:"max-[1000px]:gap-[60px] max-[1000px]:grid-cols-2 max-[370px]:gap-[40px] max-[500px]:gap-[40px] max-[500px]:grid-cols-1 grid grid-cols-4 gap-[40px]"},$={class:"justify-self-center"},v={class:"rounded-[14px] max-[500px]:w-[220px] w-440 h-650 bg-gradient-to-bl p-[3px] from-[#FB9D01] to-[#66FC01]"},w={class:"bg-white rounded-[12px] p-2"},A={class:"text-[25px]"},L=["src"],D=t("div",{class:"grid grid-cols-2 text-[20px]"},[t("p",{class:"self-center"},"Lorem ipsum dolor."),t("div",{class:"grid grid-cols-1 justify-self-end"},[t("span",null,"1000c"),t("button",{class:"text-[#FF9900]"},"Купить")])],-1);function F(a,o,c,i,l,r){return s(),n("div",y,[(s(!0),n(u,null,g(a.DATA,e=>(s(),n("div",$,[t("div",v,[t("div",w,[t("div",A,[t("h1",null,x(e.name),1)]),t("img",{class:"rounded-[10px]",src:e.image},null,8,L),D])])]))),256))])}const B=p(b,[["render",F]]),k={components:{ProductList:B}},P=t("div",{class:"pt-[20px] mt-[20px] mb-[40px] border-t-[3px] border-black"},[t("p",{class:"text-[50px]"},"Каталог")],-1);function T(a,o,c,i,l,r){const e=d("ProductList"),m=d("Layout");return s(),_(m,null,{default:h(()=>[t("div",null,[P,f(e)])]),_:1})}const C=p(k,[["render",T]]);export{C as default};
