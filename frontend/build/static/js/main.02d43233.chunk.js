(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(t,e,a){t.exports=a(380)},120:function(t,e,a){},121:function(t,e,a){},380:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),l=a(14),c=a.n(l),o=(a(120),a(68)),s=a(108),r=a(109),d=a(18),m=a(115),h=a(114),u=(a(121),a(122),function(t){Object(m.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={todoList:[],activeItem:{id:null,title:"",completed:!1},editing:!1},n.fetchTasks=n.fetchTasks.bind(Object(d.a)(n)),n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n.deleteItem=n.deleteItem.bind(Object(d.a)(n)),n.strikeUnstrike=n.strikeUnstrike.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"componentWillMount",value:function(){this.fetchTasks()}},{key:"fetchTasks",value:function(){var t=this;console.log("Fetching Tasks...."),fetch("http://localhost:8000/api/task-list/").then((function(t){return t.json()})).then((function(e){return t.setState({todoList:e})}))}},{key:"handleChange",value:function(t){var e=t.target.name,a=t.target.value;console.log("Name",e),console.log("Value:",a),this.setState({activeItem:Object(o.a)(Object(o.a)({},this.state.activeItem),{},{title:a})})}},{key:"handleSubmit",value:function(t){var e=this;t.preventDefault(),console.log("Item:",this.state.activeItem);var a="http://localhost:8000/api/task-create/";!0===this.state.editing&&(a="http://localhost:8000/api/task-update/".concat(this.state.activeItem.id,"/"),this.setState({editing:!1})),fetch(a,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(this.state.activeItem)}).then((function(t){e.fetchTasks(),e.setState({activeItem:{id:null,title:"",completed:!1}})})).catch((function(t){console.log("ERROR:",t)}))}},{key:"startEdit",value:function(t){this.setState({activeItem:t,editing:!0})}},{key:"deleteItem",value:function(t){var e=this;fetch("http://localhost:8000/api/task-delete/".concat(t.id,"/"),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(t){e.fetchTasks()}))}},{key:"strikeUnstrike",value:function(t){var e=this;t.completed=!t.completed,console.log("TASK:",t.completed),fetch("http://localhost:8000/api/task-update/".concat(t.id,"/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({completed:t.completed,title:t.title})}).then((function(){e.fetchTasks()}))}},{key:"render",value:function(){var t=this.state.todoList,e=this;return i.a.createElement("div",{className:"container"},i.a.createElement("div",{id:"task-container"},i.a.createElement("div",{id:"form-wrapper"},i.a.createElement("form",{onSubmit:this.handleSubmit,id:"form"},i.a.createElement("div",{className:"flex-wrapper"},i.a.createElement("div",{style:{flex:6}},i.a.createElement("input",{onChange:this.handleChange,type:"text",className:"form-control",name:"title",value:this.state.activeItem.title,id:"title",placeholder:"Add Task"})),i.a.createElement("div",{style:{flex:1}},i.a.createElement("input",{id:"submit",className:"btn btn-success",type:"submit",value:"Submit",name:"add"}))))),i.a.createElement("div",{id:"list-wrapper"},t.map((function(t,a){return i.a.createElement("div",{key:a,className:"task-wrapper flex-wrapper"},i.a.createElement("div",{onClick:function(){return e.strikeUnstrike(t)},style:{flex:7}},!1===t.completed?i.a.createElement("span",null,t.title):i.a.createElement("strike",null,t.title)),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return e.startEdit(t)},className:"btn btn-sm btn-outline-info edit"},"Edit")),i.a.createElement("div",{style:{flex:1}},i.a.createElement("button",{onClick:function(){return e.deleteItem(t)},className:"btn btn-sm btn-outline-dark delete"},"-")))})))))}}]),a}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[116,1,2]]]);
//# sourceMappingURL=main.02d43233.chunk.js.map