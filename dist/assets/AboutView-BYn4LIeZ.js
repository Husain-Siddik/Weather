import{d as w,c as m,a as e,w as y,v as x,u as o,b as f,t as r,o as v}from"./index-vaaD1dH4.js";const g=w("weather",{state:()=>({apiKey:"baf209e30b3a49b6b4665406241106",location_quiry:"",weather:{}}),getters:{},actions:{LodeWeather(){this.location_quiry.length!=0&&fetch(`https://api.weatherapi.com/v1/current.json?key=baf209e30b3a49b6b4665406241106&q=${this.location_quiry}&aqi=no`).then(s=>s.json()).then(s=>{this.data=s,this.weather=s}).catch(s=>{console.error("Error fetching data:",s)})}}}),k={class:"about"},q={class:"mx-auto xlg:w-1/5 lg:w-1/5 md:w-2/5 border border-neutral-400 px-5 py-8 bg-[url('../assets/night-weather.png')]"},C=e("h4",{class:"text-center font-extrabold text-2xl capitalize mb-4"}," Weather app",-1),j={class:"flex justify-center items-center"},S={class:"text-center py-4 text-3xl"},W={class:"py-6"},B={class:"p-3"},K={class:""},L=e("h2",{class:"border-solid border-2 mt-10 rounded-md p-4 text-white"},"weather conditon",-1),V={class:"flex mt-5 h-12 justify-between border border-dashed"},$={class:"pl-3"},D=["src"],T={__name:"AboutView",setup(s){const t=g();return(E,n)=>{var i,l,c,d,h,u,p,_,b;return v(),m("div",k,[e("div",q,[C,e("div",j,[e("div",null,[y(e("input",{"onUpdate:modelValue":n[0]||(n[0]=a=>o(t).location_quiry=a),type:"text",placeholder:"City Name..",class:"input input-bordered input-primary w-full mx-auto",onKeyup:n[1]||(n[1]=f(a=>o(t).LodeWeather(),["enter"]))},null,544),[[x,o(t).location_quiry]])]),e("div",null,[e("button",{class:"btn btn-accent lg:hidden md:hidden ml-3",onClick:n[2]||(n[2]=a=>o(t).LodeWeather())},"Check")])]),e("div",S,[e("div",W,[e("h2",B,"City:"+r((i=o(t).weather.location)==null?void 0:i.name),1),e("h3",null,"Country: "+r((l=o(t).weather.location)==null?void 0:l.country),1)]),e("div",K,[e("h2",null,"Temp:"+r((c=o(t).weather.current)==null?void 0:c.temp_c)+"°C",1),e("h3",null," but feels like "+r((d=o(t).weather.current)==null?void 0:d.feelslike_c),1),e("h4",null,r((h=o(t).weather.current)==null?void 0:h.cloud),1)]),e("div",null,[L,e("div",V,[e("h3",$,r((p=(u=o(t).weather.current)==null?void 0:u.condition)==null?void 0:p.text),1),e("img",{class:"",src:(b=(_=o(t).weather.current)==null?void 0:_.condition)==null?void 0:b.icon,alt:"",srcset:""},null,8,D)])])])])])}}};export{T as default};