import{_ as f,o as c,c as h,d as y,z as v,A as I,s as r,b as t,D as k,E as x,n as S,h as L,i as B,v as C,p as D,a as w}from"./index-igKMN37_.js";const A={};function N(s,u){return c(),h("i")}const V=f(A,[["render",N],["__scopeId","data-v-efbdbfa5"]]),b=s=>(D("data-v-8c91554d"),s=s(),w(),s),z=b(()=>t("h1",null,"登录",-1)),E=["disabled"],T=b(()=>t("span",null,"登录",-1)),J=y({__name:"Login",setup(s){const u=JSON.parse(v.decrypt(I)||"[]"),e=r(""),l=r(!1),o=r(!1),g=C();function d(i){i.preventDefault(),e.value.trim()&&(o.value=!0,u.some(a=>{var n,p,m;return a.name===e.value||a.pname===e.value||(Array.isArray(a.mate)?(n=a.mate)==null?void 0:n.some(_=>_.name===e.value||_.pname===e.value):((p=a.mate)==null?void 0:p.name)===e.value||((m=a.mate)==null?void 0:m.pname)===e.value)})?(localStorage.setItem("token",v.encrypt(e.value+"|"+Date.now())),g.push("/branch")):(l.value=!0,setTimeout(()=>{l.value=!1},200)),o.value=!1)}return(i,a)=>(c(),h("section",null,[z,t("form",{action:"#",onSubmit:d},[k(t("input",{placeholder:"请输入你的姓名",type:"text",name:"username","onUpdate:modelValue":a[0]||(a[0]=n=>e.value=n),class:S({error:l.value})},null,2),[[x,e.value]]),t("button",{onClick:d,disabled:!e.value.trim()||o.value},[o.value?(c(),L(V,{key:0})):B("",!0),T],8,E)],32)]))}}),O=f(J,[["__scopeId","data-v-8c91554d"]]);export{O as default};
