(this["webpackJsonpwh2-jeopardy"]=this["webpackJsonpwh2-jeopardy"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"row1":[{"id":1,"value":"100","question":"Question1 Row1","answer":"Answer1","isAnswered":false},{"id":2,"value":"100","question":"Question2 Row1","answer":"Answer2","isAnswered":false},{"id":3,"value":"100","question":"Question3 Row1","answer":"Answer3","isAnswered":false},{"id":4,"value":"100","question":"Question4 Row1","answer":"Answer4","isAnswered":false},{"id":5,"value":"100","question":"Question5 Row1","answer":"Answer5","isAnswered":false}],"row2":[{"id":1,"value":"200","question":"Question1 Row2","answer":"Answer1","isAnswered":false},{"id":2,"value":"200","question":"Question2 Row2","answer":"Answer2","isAnswered":false},{"id":3,"value":"200","question":"Question3 Row2","answer":"Answer3","isAnswered":false},{"id":4,"value":"200","question":"Question4 Row2","answer":"Answer4","isAnswered":false},{"id":5,"value":"200","question":"Question5 Row2","answer":"Answer5","isAnswered":false}],"row3":[{"id":1,"value":"300","question":"Question1 Row3","answer":"Answer1","isAnswered":false},{"id":2,"value":"300","question":"Question2 Row3","answer":"Answer2","isAnswered":false},{"id":3,"value":"300","question":"Question3 Row3","answer":"Answer3","isAnswered":false},{"id":4,"value":"300","question":"Question4 Row3","answer":"Answer4","isAnswered":false},{"id":5,"value":"300","question":"Question5 Row3","answer":"Answer5","isAnswered":false}],"row4":[{"id":1,"value":"400","question":"Question1 Row4","answer":"Answer1","isAnswered":false},{"id":2,"value":"400","question":"Question2 Row4","answer":"Answer2","isAnswered":false},{"id":3,"value":"400","question":"Question3 Row4","answer":"Answer3","isAnswered":false},{"id":4,"value":"400","question":"Question4 Row4","answer":"Answer4","isAnswered":false},{"id":5,"value":"400","question":"Question5 Row4","answer":"Answer5","isAnswered":false}],"row5":[{"id":1,"value":"500","question":"Question1 Row5","answer":"Answer1","isAnswered":false},{"id":2,"value":"500","question":"Question2 Row5","answer":"Answer2","isAnswered":false},{"id":3,"value":"500","question":"Question3 Row5","answer":"Answer3","isAnswered":false},{"id":4,"value":"500","question":"Question4 Row5","answer":"Answer4","isAnswered":false},{"id":5,"value":"500","question":"Question5 Row5","answer":"Answer5","isAnswered":false}]}')},function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(11);var s=n(0),a=n.n(s),r=n(8),o=n.n(r),i=(n(16),n(6)),l=n(1),u=n(2),c=n(3),w=n(5),d=n(4),m=(n(17),n(9)),h=(n(18),function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).player1=a.a.createRef(),e.player2=a.a.createRef(),e.onSubmit=function(t){var n=[{name:e.player1.current.value},{name:e.player2.current.value}];e.props.onSubmit(n),t.preventDefault()},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"fade-in d-flex align-items-center min-vh-100 text-responsive"},a.a.createElement("div",{className:"container"},a.a.createElement("form",{onSubmit:this.onSubmit},a.a.createElement("div",{className:"form-row justify-content-center"},a.a.createElement("div",{className:"form-group form-group-lg col-md-3 m-2 "},a.a.createElement("label",{htmlFor:"player1"},"Player 1"),a.a.createElement("input",{type:"text",ref:this.player1,className:"form-control input-lg",required:!0,placeholder:"Name"})),a.a.createElement("div",{className:"form-group col-md-3 m-2"},a.a.createElement("label",{htmlFor:"player1"},"Player 2"),a.a.createElement("input",{type:"text",ref:this.player2,className:"form-control input-lg",required:!0,placeholder:"Name"})),a.a.createElement("div",{className:"form-group col-md-12 m-2 text-center"},a.a.createElement("button",{type:"submit",className:"btn btn-dark btn-lg m-2"},a.a.createElement("div",{className:"text-responsive"},"SUBMIT")))))))}}]),n}(s.Component)),p=function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onIncrement=function(){e.props.onIncrement(e.props.player)},e.onDecrement=function(){e.props.onDecrement(e.props.player)},e.getBadgeClasses=function(){var t="badge m-2 badge-";return e.props.player.value<0?t+"danger":0===e.props.player.value?t+"warning":t+"primary"},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"table-dark border fade-in visible"},a.a.createElement("div",{className:"m-2 ml-3 mr-3"},a.a.createElement("span",null,this.props.player.name),a.a.createElement("span",{className:this.getBadgeClasses()},this.props.player.value),a.a.createElement("button",{onClick:this.onIncrement,className:"btn btn-primary btn-lg m-1"},"+"),a.a.createElement("button",{onClick:this.onDecrement,className:"btn btn-danger btn-lg"},"-")))}}]),n}(s.Component),v=function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"d-flex justify-content-center fixed-bottom invisible text-responsive"},this.props.players.map((function(t){return a.a.createElement(p,{key:t.id,id:t.id,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,player:t})})))}}]),n}(s.Component),f=function(e){return a.a.createElement("tr",null,e.categories.map((function(e){return a.a.createElement("th",{scope:"col",className:"cell-width align-middle",key:e.id},e.value)})))},b=function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){e.props.onShowQuestion("showQuestion",e.props.question.question,e.props.question.answer,e.props.rowId,e.props.id),e.props.onAnswered(e.props.rowId,e.props.id)},e}return Object(c.a)(n,[{key:"render",value:function(){return this.props.isAnswered?a.a.createElement("td",{className:"cell-width align-middle bordered"},a.a.createElement("div",{className:"opacity-10"},this.props.question.value)):a.a.createElement("td",{className:"cell-width align-middle bordered pointer",onClick:this.handleClick},a.a.createElement("div",{className:""},this.props.question.value))}}]),n}(s.Component),y=function(e){for(var t=[],n=0;n<5;n++)t.push(a.a.createElement(b,{key:n,id:n,rowId:e.id,isAnswered:e.questions[n].isAnswered,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,question:e.questions[n]}));return a.a.createElement("tr",null,t)},A=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,{key:1,id:1,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,questions:e.questions.row1}),a.a.createElement(y,{key:2,id:2,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,questions:e.questions.row2}),a.a.createElement(y,{key:3,id:3,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,questions:e.questions.row3}),a.a.createElement(y,{key:4,id:4,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,questions:e.questions.row4}),a.a.createElement(y,{key:5,id:5,onShowQuestion:e.onShowQuestion,onAnswered:e.onAnswered,questions:e.questions.row5}))},q=function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{style:{height:"90vh"},className:"container-fluid text-responsive table-dark fade-in"},a.a.createElement("div",{className:"col-12 fade-in text-center mb-5 mt-5 pt-5 testare1"},this.props.question),this.props.showAnswer&&a.a.createElement("div",{className:"col-12 fade-in text-center mb-5 mt-5 pt-5 testare2"},this.props.answer))}},{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.props.onKeyPress,!1)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.props.onKeyPress,!1)}}]),n}(s.Component),E=function(e){Object(w.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={players:[{id:1,value:0,name:"Player 1"},{id:2,value:0,name:"Player 2"}],categories:[{id:1,value:"Stats"},{id:2,value:"Abilities"},{id:3,value:"Match-Ups"},{id:4,value:"Maps"},{id:5,value:"Tournaments"}],questions:m,showPlayerForm:!0,showPlayers:!1,showTable:!1,showQuestion:!1,showAnswer:!1},e.handleKeyPress=function(t){" "===t.key&&e.state.showQuestion&&(e.state.showAnswer,e.handleHide("showAnswer"))},e.handleHide=function(t,n,s){switch(t){case"showPlayerForm":e.setState({showPlayerForm:!e.state.showPlayerForm});break;case"showPlayers":e.setState({showPlayers:!e.state.showPlayers});break;case"showTable":e.setState({showTable:!e.state.showTable});break;case"showQuestion":e.setState({showTable:!e.state.showTable,showQuestion:!e.state.showQuestion,question:n,answer:s});break;case"showAnswer":e.state.showQuestion&&(e.state.showAnswer&&e.handleHide("showQuestion"),e.setState({showAnswer:!e.state.showAnswer}));break;default:console.log("Nothing to show/hide!")}},e.handleIsAnswered=function(t,n){var s="row".concat(t),a=Object(l.a)(Object(l.a)({},e.state.questions),{},Object(i.a)({},s,Object(l.a)(Object(l.a)({},e.state.questions[s]),{},Object(i.a)({},n,Object(l.a)(Object(l.a)({},e.state.questions[s][n]),{},{isAnswered:!0})))));e.setState({questions:a})},e.handleSubmit=function(t){var n=e.state.players.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{name:t["".concat(e.id-1)].name})}));e.setState({players:n}),e.handleHide("showPlayerForm"),e.handleHide("showPlayers"),e.handleHide("showTable")},e.handleIncrement=function(t){var n=e.state.players.map((function(e){return e!==t?e:Object(l.a)(Object(l.a)({},e),{},{value:t.value+100})}));e.setState({players:n})},e.handleDecrement=function(t){var n=e.state.players.map((function(e){return e!==t?e:Object(l.a)(Object(l.a)({},e),{},{value:t.value-100})}));e.setState({players:n})},e}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,this.state.showPlayerForm&&a.a.createElement(h,{players:this.state.players,onSubmit:this.handleSubmit}),this.state.showPlayers&&a.a.createElement(v,{players:this.state.players,onIncrement:this.handleIncrement,onDecrement:this.handleDecrement}),this.state.showTable&&a.a.createElement("div",{className:"container-fluid bg-light fade-in text-responsive"},a.a.createElement("table",{style:{height:"90vh"},className:"table text-center m-0 no-collapse"},a.a.createElement("thead",null,a.a.createElement(f,{categories:this.state.categories})),a.a.createElement("tbody",{className:"table-dark"},a.a.createElement(A,{questions:this.state.questions,onShowQuestion:this.handleHide,onAnswered:this.handleIsAnswered})))),this.state.showQuestion&&a.a.createElement(q,{onKeyPress:this.handleKeyPress,question:this.state.question,answer:this.state.answer,showAnswer:this.state.showAnswer}))}}]),n}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.1d9f1526.chunk.js.map