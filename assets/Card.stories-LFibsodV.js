import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{r as h}from"./index-DJO9vBfz.js";import{c as f}from"./clsx-B-dksMZM.js";const _="_root_yh44o_1",g={root:_},C=(n,l)=>{const{as:u="div",className:x,...y}=n;return e.jsx(u,{className:f(g.root,x),...y,ref:l})},r=h.forwardRef(C);r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{as:{required:!1,tsType:{name:"T"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N="_input_t47yg_1",a={input:N},T={argTypes:{},component:r,parameters:{layout:"center"},tags:["autodocs"],title:"Components/Card"},t=n=>e.jsx(r,{style:{height:"100px",width:"420px"}}),s=n=>e.jsxs(r,{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"35px 24px",width:"420px"},children:[e.jsx("h1",{children:"Card"}),e.jsx("input",{className:a.input,type:"text"}),e.jsx("input",{className:a.input,type:"search"}),e.jsx("input",{className:a.input,type:"password"})]});t.__docgenInfo={description:"",methods:[],displayName:"Default"};s.__docgenInfo={description:"",methods:[],displayName:"WithContent"};var o,p,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(_: StoryProps) => {
  return <Card style={{
    height: '100px',
    width: '420px'
  }}></Card>;
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,d,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(_: StoryProps) => {
  return <Card style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '35px 24px',
    width: '420px'
  }}>\r
      <h1>\r
        Card\r
      </h1>\r
      <input className={s.input} type={'text'} />\r
      <input className={s.input} type={'search'} />\r
      <input className={s.input} type={'password'} />\r
    </Card>;
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Default","WithContent"];export{t as Default,s as WithContent,S as __namedExportsOrder,T as default};
