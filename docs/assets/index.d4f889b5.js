import{M as u}from"./vendor.5ce06ced.js";const f=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};f();const d=document.querySelector(".searchbox form");document.querySelector(".saved_pics");const a=document.querySelector(".search_pics");let s=[];const l=()=>{a.innerHTML=s.reduce((o,e,n)=>o+`
      <div class="pic" style="width: ${e.images.fixed_width.width}px" data-index="${n}">
        <h3>${e.title}</h3>
        <img src="${e.images.fixed_width.url}" alt="${e.title}" height="${e.images.fixed_width.height}" width="${e.images.fixed_width.width}">
      </div>
    `,""),new u(a,{itemSelector:".pic",gutter:10}),h()},h=()=>{const o=a.querySelectorAll(".pic");for(const e of o)e.addEventListener("click",n=>{const i=+e.dataset.index;console.log(s[i])})},m=()=>{d.addEventListener("submit",o=>{o.preventDefault();const e=o.currentTarget.elements.search.value;p(e)}),d.addEventListener("reset",o=>{d.reset(),s=[],l()})},p=async o=>{const e="https://api.giphy.com/v1/gifs/search?api_key=UtuKhPQIF6QLKjo5GLsj70dDKXQKF7Sf&q="+o,n=await fetch(e).then(i=>i.json()).then(i=>i);console.log(n),s=n.data,l()};window.addEventListener("load",()=>{m()});