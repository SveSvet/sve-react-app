(this.webpackJsonplearn=this.webpackJsonplearn||[]).push([[0],{101:function(e,t,a){e.exports=a(167)},11:function(e,t,a){e.exports={section:"About_section__JfYl_",content__user:"About_content__user__1-yFs",content__user_error:"About_content__user_error__3fcdM",info:"About_info__3f1VT",info__avatar:"About_info__avatar__2kRF-",desc:"About_desc__1cApd",desc__login:"About_desc__login__3wTB5",desc__bio:"About_desc__bio__yccwg",desc__mail:"About_desc__mail__BJUlt",desk__mail_img:"About_desk__mail_img__5vnm8",desc__tg:"About_desc__tg__1qwt5",desk__tg_img:"About_desk__tg_img__WYVNa",contacts:"About_contacts__2upzg",contacts__link:"About_contacts__link__3Prbw",content:"About_content__1F1V-"}},167:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(34),s=a.n(o),c=a(12),i=a(23),l=a(13),_=a(14),u=a(32),p=a.n(u),m=a(11),d=a.n(m),f=a(4),b=a.n(f),k=a(193),g=a(188),v=a(51),E=a.n(v),h=new E.a,N=function(e){Object(l.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,isError:!1,errorText:"",repoList:[],firstRepo:0,lastRepo:5},e.onClickNext=function(){e.setState({firstRepo:e.state.firstRepo+4,lastRepo:e.state.lastRepo+4})},e.onClickBack=function(){e.setState({firstRepo:e.state.firstRepo-4,lastRepo:e.state.lastRepo-4})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.repos.listForUser({username:"SveSvet"}).then((function(t){var a=t.data;e.setState({repoList:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0,errorText:"User is not found"})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.isError,o=t.errorText,s=t.repoList,c=(t.onClickBack,t.onClickNext,t.firstRepo),i=t.lastRepo;return r.a.createElement(k.a,{className:b.a.wrap},a?r.a.createElement(g.a,{className:b.a.preloader}):r.a.createElement("div",{className:b.a.wrap__repos},r.a.createElement("h1",{className:b.a.wrap__title},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0438 \u043d\u0430 github.com"),n?r.a.createElement("div",{className:b.a.error},r.a.createElement("p",{className:b.a.error__text},o)):r.a.createElement("div",{className:b.a.repositories},s.length<4?r.a.createElement("div",{className:b.a.repository__list},s.map((function(e){return r.a.createElement("ul",{key:e.id},r.a.createElement("div",{className:b.a.repository},r.a.createElement("div",{className:b.a["about-repository-wrapper"]},r.a.createElement("a",{className:b.a["about-repository-link"],href:e.svn_url,rel:"noopener noreferrer",target:"_blank"},e.name),r.a.createElement("div",{className:b.a["info-about-repo"]},r.a.createElement("div",{className:b.a["info_about-repo__language-icon"]},r.a.createElement("div",{className:b.a["info-about-repo__".concat(e.language,"-icon").toLowerCase()]}),r.a.createElement("p",{className:b.a["info-about-repo__language"]},e.language)),r.a.createElement("p",{className:b.a["info-about-repo__star"]},e.stargazers_count),r.a.createElement("p",{className:b.a["info-about-repo__forks"]},e.forks),r.a.createElement("span",null,"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d: ",new Date(e.updated_at).toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"}))))))}))," "):r.a.createElement("div",{className:b.a.repo__button},r.a.createElement("div",{className:b.a.repository__list},s.slice(c,i).map((function(e){return r.a.createElement("ul",{key:e.id},r.a.createElement("div",{className:b.a.repository},r.a.createElement("div",{className:b.a["about-repository-wrapper"]},r.a.createElement("a",{className:b.a["about-repository-link"],href:e.svn_url,rel:"noopener noreferrer",target:"_blank"},e.name),r.a.createElement("div",{className:b.a["info-about-repo"]},r.a.createElement("div",{className:b.a["info_about-repo__language-icon"]},r.a.createElement("div",{className:b.a["info-about-repo__".concat(e.language,"-icon").toLowerCase()]}),r.a.createElement("p",{className:b.a["info-about-repo__language"]},e.language)),r.a.createElement("p",{className:b.a["info-about-repo__star"]},e.stargazers_count),r.a.createElement("p",{className:b.a["info-about-repo__forks"]},e.forks),r.a.createElement("span",{className:b.a["info-about-repo__update"]},"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d: ",new Date(e.updated_at).toLocaleString("en-US",{day:"numeric",month:"short",year:"numeric"}))))))}))),r.a.createElement("div",{className:b.a.buttons_wrap},r.a.createElement("button",{className:b.a.button,onClick:function(){return e.onClickBack()},disabled:c<3},"\u041d\u0430\u0437\u0430\u0434"),r.a.createElement("button",{className:b.a.button,onClick:function(){return e.onClickNext()},disabled:s.length-i<=0},"\u0414\u0430\u043b\u0435\u0435"))))))}}]),a}(r.a.Component),C=a(85),I=a.n(C),y=a(86),R=a.n(y),O=a(87),j=a.n(O),w=a(88),x=a.n(w),S=a(89),D=a.n(S),A=new E.a,T=function(e){Object(l.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,isError:!1,errorText:"",User:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.users.getByUsername({username:"SveSvet"}).then((function(t){var a=t.data;e.setState({User:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,isError:!0,errorText:"User is not found :("})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isError,n=e.errorText,o=e.User;return r.a.createElement("section",{className:d.a.section},r.a.createElement(k.a,{className:d.a.content__user},t?r.a.createElement(g.a,null):r.a.createElement("div",{className:d.a.content__user_wrap},a?r.a.createElement("div",{className:d.a.content__user_error},n):r.a.createElement("div",{className:d.a.info},r.a.createElement("img",{className:d.a.info__avatar,src:o.avatar_url,alt:"avatar"}),r.a.createElement("div",{className:d.a.desc},r.a.createElement("p",{className:d.a.desc__login},"\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430 \u041c\u0438\u0442\u044e\u0445\u0438\u043d\u0430"),r.a.createElement("p",{className:d.a.desc__bio},o.bio),r.a.createElement("a",{className:d.a.desc__mail,href:"mailto: svetlana.mit.dev@gmail.com"},r.a.createElement("img",{src:I.a,alt:"mail",className:d.a.desk__mail_img}),"svetlana.mit.dev@gmail.com"),r.a.createElement("a",{className:d.a.desc__tg,href:"tg://resolve?domain=nasariolet"},r.a.createElement("img",{src:R.a,alt:"telegram",className:d.a.desk__tg_img}),"+7 999 828 27 15"),r.a.createElement("div",{className:d.a.contacts},r.a.createElement("a",{href:"https://github.com/SveSvet",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:j.a,alt:"github",className:d.a.contacts__link})),r.a.createElement("a",{href:"https://vk.com/id70672243",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:x.a,alt:"vk",className:d.a.contacts__link})),r.a.createElement("a",{href:"https://www.facebook.com/sveta.mityukhina",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:D.a,alt:"facebook",className:d.a.contacts__link}))))))),r.a.createElement(N,null))}}]),a}(r.a.Component),L=a(96),B=a(64),F=a(194),W=a(65),U=a.n(W),V=a(5),H=a(27),M=a.n(H),z=a(190),J=a(28),q=a.n(J),K=a(91),P=a.n(K),G=a(90),Q=a.n(G),X=a(191),Y=a(192),Z="card",$=r.a.forwardRef((function(e,t){var a,o,s,c=e.isDragging,i=e.connectDropTarget,l=e.connectDragSource,_=(e.isOver,e.canDrop,e.value),u=e.isDone,p=e.isImportant,m=(e.classes,e.onClickDone),d=e.onClickDelete,f=e.onClickImportant,b=e.id,k=Object(n.useRef)(null);l(k),i(k);var g=c?0:1;return Object(n.useImperativeHandle)(t,(function(){return{getNode:function(){return k.current}}})),r.a.createElement("div",{ref:k,style:{opacity:g},className:M()((a={},Object(V.a)(a,q.a.wrapper,!0),Object(V.a)(a,q.a.isImportant,p),a))},r.a.createElement("div",{className:q.a.wrapper__text},r.a.createElement(z.a,{color:"primary",checked:u,tabIndex:-1,onClick:function(){return m(b)}}),r.a.createElement("span",{className:M()((o={},Object(V.a)(o,q.a.item,!0),Object(V.a)(o,q.a.done,u),o))}," ",_," ")),r.a.createElement("div",{className:q.a.wrapper__icon},r.a.createElement(Q.a,{onClick:function(){return f(b)},className:M()((s={},Object(V.a)(s,q.a.importantIcon,!0),Object(V.a)(s,q.a.isImportant,p),s))}),r.a.createElement(P.a,{onClick:function(){return d(b)},className:q.a.deleteIcon})))})),ee=Object(X.a)(Z,{hover:function(e,t,a){if(!a)return null;var n=a.getNode();if(!n)return null;var r=t.getItem().index,o=e.index;if(r!==o){var s=n.getBoundingClientRect(),c=(s.bottom-s.top)/2,i=t.getClientOffset().y-s.top;r<o&&i<c||r>o&&i>c||(e.moveCard(r,o),t.getItem().index=o)}}},(function(e){return{connectDropTarget:e.dropTarget()}}))(Object(Y.a)(Z,{beginDrag:function(e){return{id:e.id,index:e.index}}},(function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))($)),te=function(e){var t=e.filtered,a=e.onClickDone,n=e.onClickDelete,o=e.onClickImportant,s=e.moveCard;return 0===t.length?r.a.createElement("div",{className:U.a.ItemListWrapEmpty}):r.a.createElement(F.a,{className:U.a.ItemListWrap},t.map((function(e,t){return r.a.createElement("li",{key:e.id},r.a.createElement(ee,{value:e.value,isDone:e.isDone,isImportant:e.isImportant,id:e.id,index:t,onClickDone:a,onClickDelete:n,onClickImportant:o,moveCard:s}))})))},ae=a(40),ne=a.n(ae),re=a(93),oe=a.n(re),se=function(e){Object(l.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",inputError:!1},e.onLabelChange=function(t){e.setState({inputValue:t.target.value})},e.onSubmit=function(t){t.preventDefault(),""===e.state.inputValue?e.setState({inputError:!0}):(e.setState({inputValue:"",inputError:!1}),e.props.onClickAdd(e.state.inputValue))},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this.state,a=t.inputValue,n=t.inputError,o=this.props.classNameForInputRepeat;return r.a.createElement("form",{className:M()((e={},Object(V.a)(e,ne.a.inputWrap,!0),Object(V.a)(e,ne.a.inputError,n),Object(V.a)(e,ne.a.inputRepeat,o),e)),onSubmit:this.onSubmit},r.a.createElement("input",{onChange:this.onLabelChange,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",className:ne.a.input,value:a}),r.a.createElement("button",{className:ne.a.inputButton},r.a.createElement("img",{src:oe.a,alt:""})))}}]),a}(r.a.Component),ce=a(22),ie=a.n(ce),le=function(e){var t,a,n,o=e.tasks,s=e.onClickFilteredTasks,c=e.filtered,i=o.length,l=o.filter((function(e){return e.isDone})).length,_=o.filter((function(e){return!e.isDone})).length;return r.a.createElement("div",{className:ie.a.calcTasksWrapper},r.a.createElement("button",{className:M()((t={},Object(V.a)(t,ie.a.button,!0),Object(V.a)(t,ie.a.selected,"\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),t)),onClick:function(){return s("\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")}},"\u0421\u0434\u0435\u043b\u0430\u043d\u043e:",r.a.createElement("span",{className:ie.a.tasksCount},l)),r.a.createElement("button",{className:M()((a={},Object(V.a)(a,ie.a.button,!0),Object(V.a)(a,ie.a.selected,"\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435"===c),a)),onClick:function(){return s("\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435")}},"\u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c:",r.a.createElement("span",{className:ie.a.tasksCount},_)),r.a.createElement("button",{className:M()((n={},Object(V.a)(n,ie.a.button,!0),Object(V.a)(n,ie.a.selected,"\u0412\u0441\u0435"===c),n)),onClick:function(){return s("\u0412\u0441\u0435")}},"\u0412\u0441\u0435:",r.a.createElement("span",{className:ie.a.tasksCount},i)))},_e=a(59),ue=a.n(_e),pe=a(94),me=a.n(pe),de=a(189),fe=a(95),be="\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",ke="\u041d\u0435\u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044b\u0435",ge="\u0412\u0441\u0435",ve=function(e){Object(l.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).maxId=100,e.state={tasks:JSON.parse(localStorage.getItem("editedList")||'[{"value":"\u0418\u0437\u0443\u0447\u0438\u0442\u044c React","isDone":false, "isImportant": true,"id":1},{"value":"\u041d\u0430\u0439\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0443","isDone":false, "isImportant": true,"id":2}]'),count:3,filtered:ge,classNameForInputRepeat:!1},e.moveCard=function(t,a){var n=e.state.tasks[t];e.setState(me()(e.state,{tasks:{$splice:[[t,1],[a,0,n]]}}))},e.onClickDone=function(t){var a=e.state.tasks.map((function(e){var a=Object(B.a)({},e);return e.id===t&&(a.isDone=!e.isDone),a}));e.setState({tasks:a})},e.onClickImportant=function(t){var a=e.state.tasks.map((function(e){var a=Object(B.a)({},e);return e.id===t&&(a.isImportant=!e.isImportant),a}));e.setState({tasks:a})},e.onClickDelete=function(t){var a=e.state.tasks.filter((function(e){return e.id!==t}));e.setState({tasks:a}),e.setState((function(e){return e-1}))},e.onClickAdd=function(t){0===e.state.tasks.filter((function(e){return e.value===t})).length?e.setState((function(e){return{tasks:[].concat(Object(L.a)(e.tasks),[{value:t,isDone:!1,isImportant:!1,id:e.count+1}]),count:e.count+1,classNameForInputRepeat:!1}})):e.setState({classNameForInputRepeat:!0})},e.onClickFilteredTasks=function(t){return e.setState({filtered:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=JSON.stringify(this.state.tasks);switch(localStorage.setItem("editedList",t),this.state.filtered){case be:e=this.state.tasks.filter((function(e){return e.isDone}));break;case ke:e=this.state.tasks.filter((function(e){return!e.isDone}));break;case ge:e=this.state.tasks}return r.a.createElement(k.a,{className:ue.a.container},r.a.createElement(de.a,{backend:fe.a},r.a.createElement("div",null,r.a.createElement("div",{className:ue.a.todoHeader},r.a.createElement("h1",{className:ue.a.todoHeaderTitle},"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0434\u0435\u043b"),r.a.createElement(le,{tasks:this.state.tasks,onClickFilteredTasks:this.onClickFilteredTasks,filtered:this.state.filtered})),r.a.createElement(te,{filtered:e,filteredValue:this.state.filtered,onClickDone:this.onClickDone,onClickImportant:this.onClickImportant,onClickDelete:this.onClickDelete,moveCard:this.moveCard}),r.a.createElement(se,{items:this.state.tasks,classNameForInputRepeat:this.state.classNameForInputRepeat,onClickAdd:this.onClickAdd}))))}}]),a}(r.a.Component),Ee=a(60),he=a(7),Ne=function(e){Object(l.a)(a,e);var t=Object(_.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(Ee.a,null,r.a.createElement("html",null,r.a.createElement("body",{className:p.a.body},r.a.createElement("header",{className:p.a.header},r.a.createElement(Ee.b,{to:"/",exact:!0,className:p.a.header__link,activeClassName:p.a["header__about-me"]},"\u041e\u0431\u043e \u043c\u043d\u0435"),r.a.createElement(Ee.b,{to:"/todo",className:p.a.header__link,activeClassName:p.a.header__todos},"\u0414\u0435\u043b\u0430")),r.a.createElement("div",{className:p.a.content},r.a.createElement(he.a,{path:"/",exact:!0,component:T}),r.a.createElement(he.a,{path:"/todo",component:ve})))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(Ne,null),document.getElementById("root"))},22:function(e,t,a){e.exports={calcTasksWrapper:"CalcTodo_calcTasksWrapper__-FZwH",button:"CalcTodo_button__3BBA_",tasksCount:"CalcTodo_tasksCount__2g2NU",selected:"CalcTodo_selected__1p850",todoHeaderTitle:"CalcTodo_todoHeaderTitle__3-DCp"}},28:function(e,t,a){e.exports={wrapper:"Item_wrapper__H3Op6",wrapper__text:"Item_wrapper__text__1sqWj",wrapper__icon:"Item_wrapper__icon__1pXRr",item:"Item_item__18_IT",done:"Item_done__3dapk",deleteIcon:"Item_deleteIcon__30yae",importantIcon:"Item_importantIcon__1Cwuc",isImportant:"Item_isImportant__1b8FW","MuiSvgIcon-root":"Item_MuiSvgIcon-root__1FELk","MuiSvgIcon-fontSizeLarge":"Item_MuiSvgIcon-fontSizeLarge__2aUxE"}},32:function(e,t,a){e.exports={body:"App_body__2z6v5",header:"App_header__1WUKC",header__link:"App_header__link__1o9qc","header__about-me":"App_header__about-me__3C6DT",header__todos:"App_header__todos__3Vp5j",content:"App_content__1E5n0"}},4:function(e,t,a){e.exports={wrap:"Repos_wrap__J9e46",wrap__repos:"Repos_wrap__repos__RO0kt",wrap__title:"Repos_wrap__title__q8-5-",error:"Repos_error__1nUVC",error__text:"Repos_error__text__hejPe",repositories:"Repos_repositories__10eQj",repository:"Repos_repository__2wQ3G","about-repository-wrapper":"Repos_about-repository-wrapper__1IcAt","about-repository-link":"Repos_about-repository-link___ja_K","info-about-repo":"Repos_info-about-repo__2bjiq","info_about-repo__language-icon":"Repos_info_about-repo__language-icon__3KeXO","info-about-repo__null-icon":"Repos_info-about-repo__null-icon__3CRBv","info-about-repo__html-icon":"Repos_info-about-repo__html-icon__XcN4q","info-about-repo__css-icon":"Repos_info-about-repo__css-icon__3-Uh6","info-about-repo__javascript-icon":"Repos_info-about-repo__javascript-icon__1cuAL","info-about-repo__language":"Repos_info-about-repo__language__t9EL-","info-about-repo__star":"Repos_info-about-repo__star__2dcdK","info-about-repo__forks":"Repos_info-about-repo__forks__P53AH","info-about-repo__update":"Repos_info-about-repo__update__1_B0D",repo__button:"Repos_repo__button__2fEMB",buttons_wrap:"Repos_buttons_wrap__1Gxmr",button:"Repos_button__3H3xe"}},40:function(e,t,a){e.exports={inputWrap:"Input_inputWrap__3ktRn",input:"Input_input__2f43l",inputError:"Input_inputError__4n94P",inputRepeat:"Input_inputRepeat__u10Wu",inputButton:"Input_inputButton__1oVzR"}},59:function(e,t,a){e.exports={container:"Todo_container__3YDkr",todoHeader:"Todo_todoHeader__3OiN0",todoHeaderTitle:"Todo_todoHeaderTitle__158tM"}},65:function(e,t,a){e.exports={ItemListWrap:"ItemList_ItemListWrap__2GQOV",ItemListWrapEmpty:"ItemList_ItemListWrapEmpty__1IOBV"}},85:function(e,t,a){e.exports=a.p+"static/media/mail.9262307f.svg"},86:function(e,t,a){e.exports=a.p+"static/media/telegram.8ea80a8c.svg"},87:function(e,t,a){e.exports=a.p+"static/media/github.f9f45406.svg"},88:function(e,t,a){e.exports=a.p+"static/media/vk.8cd6dc13.svg"},89:function(e,t,a){e.exports=a.p+"static/media/facebook.ed09d0dd.svg"},93:function(e,t,a){e.exports=a.p+"static/media/button.2cb86fca.svg"}},[[101,1,2]]]);
//# sourceMappingURL=main.66f2deba.chunk.js.map