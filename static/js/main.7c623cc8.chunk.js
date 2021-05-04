(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(29),i=n.n(s),a=n(18),o=n(5),r=(n(36),n.p+"static/media/list.2b422bc7.svg"),l=n(12),d=n.n(l),u=n(13),j=(n(37),n(0)),b=function(t){var e=t.color,n=t.onClick,c=t.className;return Object(j.jsx)("i",{onClick:n,className:d()("badge",Object(u.a)({},"badge--".concat(e),e),c)})},m=n(10),f=n(30).create({withCredentials:!0,baseURL:"http://my-json-server.typicode.com/KhmaraD/todo-app/blob/master/"}),h=function(t){return f.get("lists?_expand=color&_embed=tasks").then((function(e){return t(e.data)}))},k=function(t,e){return f.delete("lists/".concat(t.id)).then((function(){e(t.id)}))},p=function(t,e){return f.patch("lists/".concat(t.id),{name:e}).catch((function(){alert("Failed to update list title")}))},O=function(t,e,n,c,s,i){return f.post("lists",{name:t,colorId:n}).then((function(t){var i=e.filter((function(t){return t.id===n}))[0],a=Object(m.a)(Object(m.a)({},t.data),{},{color:i,tasks:[]});c(a),s()})).catch((function(){alert("Error adding list!")})).finally((function(){i(!1)}))},x=function(t,e){return f.patch("tasks/".concat(t.id),{text:e}).catch((function(){alert("Failed to update task")}))},v=function(t){return f.delete("tasks/".concat(t)).catch((function(){alert("Failed to delete task")}))},C=function(t,e){return f.patch("tasks/".concat(t),{completed:e}).catch((function(){alert("Failed to update task")}))},g=function(t,e,n,c,s){return f.post("tasks",t).then((function(t){var s=t.data;console.log(s),e(n.id,s),c()})).catch((function(){alert("error adding task!")})).finally((function(){s(!1)}))},w=function(t){return f.get("colors").then((function(e){return t(e.data)}))},N=n.p+"static/media/remove.f5660af3.svg",_=(n(57),function(t){var e=t.items,n=t.isRemovable,c=t.onClick,s=t.onRemove,i=t.onClickItem,a=t.activeItem;return Object(j.jsx)("ul",{onClick:c,className:"list",children:e.map((function(t,e){return Object(j.jsxs)("li",{className:d()(t.className,{active:t.active?t.active:a&&a.id===t.id}),onClick:i?function(){return i(t)}:null,children:[Object(j.jsx)("i",{children:t.icon?t.icon:Object(j.jsx)(b,{color:t.color.name})}),Object(j.jsxs)("span",{children:[t.name,t.tasks&&" (".concat(t.tasks.length,")")]}),n&&Object(j.jsx)("img",{className:"list__remove-icon",src:N,alt:"Remove icon",onClick:function(){return function(t){window.confirm("Delete list?")&&k(t,s)}(t)}})]},e)}))})}),L=n.p+"static/media/close.b83c2023.svg",T=(n(58),function(t){var e=t.colors,n=t.onAdd,s=Object(c.useState)(!1),i=Object(o.a)(s,2),a=i[0],r=i[1],l=Object(c.useState)(3),d=Object(o.a)(l,2),u=d[0],m=d[1],f=Object(c.useState)(!1),h=Object(o.a)(f,2),k=h[0],p=h[1],x=Object(c.useState)(""),v=Object(o.a)(x,2),C=v[0],g=v[1];Object(c.useEffect)((function(){Array.isArray(e)&&m(e[0].id)}),[e]);var w=function(){r(!1),g(""),m(e[0].id)};return Object(j.jsxs)("div",{className:"add-list",children:[Object(j.jsx)(_,{onClick:function(){return r(!0)},items:[{className:"list__add-button",icon:Object(j.jsxs)("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M8 1V15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),Object(j.jsx)("path",{d:"M1 8H15",stroke:"black",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),name:"Add list"}]}),a&&Object(j.jsxs)("div",{className:"add-list__popup",children:[Object(j.jsx)("img",{onClick:w,src:L,alt:"Close button",className:"add-list__popup-close-btn"}),Object(j.jsx)("input",{value:C,onChange:function(t){return g(t.target.value)},className:"field",type:"text",placeholder:"List name"}),Object(j.jsx)("div",{className:"add-list__popup-colors",children:e.map((function(t){return Object(j.jsx)(b,{onClick:function(){return m(t.id)},color:t.name,className:u===t.id&&"active"},t.id)}))}),Object(j.jsx)("button",{onClick:function(){C?(p(!0),O(C,e,u,n,w,p)):alert("Enter the name of the list")},className:"button",children:k?"Adding...":"Add"})]})]})}),A=n(8),E=n.p+"static/media/edit.1bda04de.svg",y=(n(59),n.p+"static/media/add.c4fa83e1.svg"),R=function(t){var e=t.list,n=t.onAddTask,s=Object(c.useState)(!1),i=Object(o.a)(s,2),a=i[0],r=i[1],l=Object(c.useState)(""),d=Object(o.a)(l,2),u=d[0],b=d[1],m=Object(c.useState)(!1),f=Object(o.a)(m,2),h=f[0],k=f[1],p=function(){r(!a),b("")};return Object(j.jsx)("div",{className:"tasks__form",children:a?Object(j.jsxs)("div",{className:"tasks__form-block",children:[Object(j.jsx)("input",{value:u,className:"field",type:"text",placeholder:"Task name",onChange:function(t){return b(t.target.value)}}),Object(j.jsx)("button",{disabled:h,onClick:function(){var t={listId:e.id,text:u,completed:!1};k(!0),g(t,n,e,p,k)},className:"button",children:h?"Adding...":"Add task"}),Object(j.jsx)("button",{onClick:p,className:"button button--grey",children:"Cancel"})]}):Object(j.jsxs)("div",{onClick:p,className:"tasks__form-new",children:[Object(j.jsx)("img",{src:y,alt:"Add icon"}),Object(j.jsx)("span",{children:"New task"})]})})},S=function(t){var e=t.id,n=t.text,c=t.completed,s=t.list,i=t.onRemove,a=t.onEdit,o=t.onComplete;return Object(j.jsxs)("div",{className:"tasks__items-row",children:[Object(j.jsxs)("div",{className:"checkbox",children:[Object(j.jsx)("input",{onChange:function(t){o(s.id,e,t.target.checked)},id:"task-".concat(e),type:"checkbox",checked:c}),Object(j.jsx)("label",{htmlFor:"task-".concat(e),children:Object(j.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"#000",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Object(j.jsx)("p",{children:n}),Object(j.jsxs)("div",{className:"tasks__items-row-actions",children:[Object(j.jsx)("div",{onClick:function(){return a(s.id,{id:e,text:n})},children:Object(j.jsx)("svg",{width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M0 12.0504V14.5834C0 14.8167 0.183308 15 0.41661 15H2.9496C3.05792 15 3.16624 14.9583 3.24123 14.875L12.34 5.78458L9.21542 2.66001L0.124983 11.7504C0.0416611 11.8338 0 11.9337 0 12.0504ZM14.7563 3.36825C14.8336 3.29116 14.8949 3.1996 14.9367 3.0988C14.9785 2.99801 15 2.88995 15 2.78083C15 2.6717 14.9785 2.56365 14.9367 2.46285C14.8949 2.36205 14.8336 2.27049 14.7563 2.19341L12.8066 0.24367C12.7295 0.166428 12.638 0.105146 12.5372 0.0633343C12.4364 0.021522 12.3283 0 12.2192 0C12.1101 0 12.002 0.021522 11.9012 0.0633343C11.8004 0.105146 11.7088 0.166428 11.6318 0.24367L10.107 1.76846L13.2315 4.89304L14.7563 3.36825V3.36825Z",fill:"black"})})}),Object(j.jsx)("div",{onClick:function(){return i(s.id,e)},children:Object(j.jsx)("svg",{width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(j.jsx)("path",{d:"M6.87215 5.5L10.7129 1.65926C10.8952 1.47731 10.9977 1.23039 10.9979 0.972832C10.9982 0.715276 10.8961 0.468178 10.7141 0.285898C10.5321 0.103617 10.2852 0.00108525 10.0277 0.000857792C9.77011 0.000630336 9.52302 0.102726 9.34074 0.284685L5.5 4.12542L1.65926 0.284685C1.47698 0.102404 1.22976 0 0.971974 0C0.714191 0 0.466965 0.102404 0.284685 0.284685C0.102404 0.466965 0 0.714191 0 0.971974C0 1.22976 0.102404 1.47698 0.284685 1.65926L4.12542 5.5L0.284685 9.34074C0.102404 9.52302 0 9.77024 0 10.028C0 10.2858 0.102404 10.533 0.284685 10.7153C0.466965 10.8976 0.714191 11 0.971974 11C1.22976 11 1.47698 10.8976 1.65926 10.7153L5.5 6.87458L9.34074 10.7153C9.52302 10.8976 9.77024 11 10.028 11C10.2858 11 10.533 10.8976 10.7153 10.7153C10.8976 10.533 11 10.2858 11 10.028C11 9.77024 10.8976 9.52302 10.7153 9.34074L6.87215 5.5Z",fill:"black"})})})]})]},e)},I=function(t){var e=t.list,n=t.onEditTitle,c=t.onAddTask,s=t.onRemoveTask,i=t.onEditTask,a=t.onCompleteTask,o=t.withoutEmpty;return Object(j.jsxs)("div",{className:"tasks",children:[Object(j.jsx)(A.b,{to:"/lists/".concat(e.id),children:Object(j.jsxs)("h2",{style:{color:e.color.hex},className:"tasks__title",children:[e.name,Object(j.jsx)("img",{onClick:function(){var t=window.prompt("List name",e.name);t&&(n(e.id,t),p(e,t))},src:E,alt:"Edit icon"})]})}),Object(j.jsxs)("div",{className:"tasks__items",children:[!o&&e.tasks&&!e.tasks.length&&Object(j.jsx)("h2",{children:"There are no tasks"}),e.tasks&&e.tasks.map((function(t){return Object(j.jsx)(S,Object(m.a)({list:e,onEdit:i,onRemove:s,onComplete:a},t),t.id)})),Object(j.jsx)(R,{list:e,onAddTask:c},e.id)]})]})},M=n(2),B=function(){var t=Object(c.useState)(null),e=Object(o.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(null),l=Object(o.a)(i,2),d=l[0],u=l[1],b=Object(c.useState)(null),m=Object(o.a)(b,2),f=m[0],k=m[1],p=Object(M.e)();Object(M.f)();Object(c.useEffect)((function(){h(s),w(u)}),[]);var O=function(t,e){var c=n.map((function(n){return n.id===t&&(n.tasks=[].concat(Object(a.a)(n.tasks),[e])),n}));s(c)},g=function(t,e){var c=n.map((function(n){return n.id===t&&(n.name=e),n}));s(c)},N=function(t,e){var c=window.prompt("Task text",e.text);if(c){var i=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.map((function(t){return t.id===e.id&&(t.text=c),t}))),n}));s(i),x(e,c)}},L=function(t,e){if(window.confirm("Are you sure you want to delete the task?")){var c=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.filter((function(t){return t.id!==e}))),n}));s(c),v(e)}},A=function(t,e,c){var i=n.map((function(n){return n.id===t&&(n.tasks=n.tasks.map((function(t){return t.id===e&&(t.completed=c),t}))),n}));s(i),C(e,c)};return Object(c.useEffect)((function(){var t=p.location.pathname.split("lists/")[1];if(n){var e=n.find((function(e){return e.id===Number(t)}));k(e)}}),[n,p.location.pathname]),Object(j.jsxs)("div",{className:"todo",children:[Object(j.jsxs)("div",{className:"todo__sidebar",children:[Object(j.jsx)(_,{onClickItem:function(t){p.push("/")},items:[{active:!f,icon:Object(j.jsx)("img",{src:r,alt:"list icon"}),name:"All tasks"}]}),n?Object(j.jsx)(_,{items:n,onRemove:function(t){var e=n.filter((function(e){return e.id!==t}));s(e)},onClickItem:function(t){p.push("/lists/".concat(t.id))},activeItem:f,isRemovable:!0}):"Loading...",Object(j.jsx)(T,{onAdd:function(t){var e=[].concat(Object(a.a)(n),[t]);s(e)},colors:d})]}),Object(j.jsxs)("div",{className:"todo__tasks",children:[Object(j.jsx)(M.a,{exact:!0,path:"/",children:n&&n.map((function(t){return Object(j.jsx)(I,{list:t,onAddTask:O,onEditTitle:g,onRemoveTask:L,onEditTask:N,onCompleteTask:A,withoutEmpty:!0},t.id)}))}),Object(j.jsx)(M.a,{path:"/lists/:id",children:n&&f&&Object(j.jsx)(I,{list:f,onAddTask:O,onEditTitle:g,onRemoveTask:L,onEditTask:N,onCompleteTask:A})})]})]})};n(65);i.a.render(Object(j.jsx)(A.a,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7c623cc8.chunk.js.map