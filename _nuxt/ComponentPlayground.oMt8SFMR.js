import{M as m,I as p,d as c,a9 as i,r as l,N as e,l as u}from"./entry.Dwwi-BMp.js";import{u as d}from"./asyncData.BWsl0Fd9.js";import f from"./Ellipsis.BLTBvpvm.js";import y from"./ComponentPlaygroundData.Dbgxugrh.js";import"./TabsHeader.BMlnT0AX.js";import"./ComponentPlaygroundProps.DBO_Z9QL.js";import"./ProseH4.BcfRLTna.js";import"./ProseCodeInline.CVzVcyxm.js";import"./Badge.DAVZ0R8v.js";import"./MDCSlot.DJ5fR4WG.js";import"./slot.BFsSiZu4.js";import"./ProseP.Cz1CoLnV.js";import"./index.BWaKwpMe.js";import"./ComponentPlaygroundSlots.vue.CPxhf5KO.js";import"./ComponentPlaygroundTokens.vue.DcqKKnkM.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=l({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),V=u(h,[["__scopeId","data-v-9ca9b996"]]);export{V as default};