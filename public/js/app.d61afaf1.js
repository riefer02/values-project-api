(function(e){function a(a){for(var n,o,s=a[0],l=a[1],u=a[2],d=0,h=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(a);while(h.length)h.shift()();return r.push.apply(r,u||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],n=!0,s=1;s<t.length;s++){var l=t[s];0!==i[l]&&(n=!1)}n&&(r.splice(a--,1),e=o(o.s=t[0]))}return e}var n={},i={app:0},r=[];function o(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=n,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)o.d(t,n,function(a){return e[a]}.bind(null,n));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var c=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"0a1f":function(e,a,t){"use strict";var n=t("28e6"),i=t.n(n);i.a},"0dc6":function(e,a,t){"use strict";var n=t("3a65"),i=t.n(n);i.a},"28e6":function(e,a,t){},"3a65":function(e,a,t){},"4ae1":function(e,a,t){},"4e2b":function(e,a,t){"use strict";var n=t("8884"),i=t.n(n);i.a},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-app",[t("Navbar",{attrs:{items:e.items},model:{value:e.drawer,callback:function(a){e.drawer=a},expression:"drawer"}}),t("v-app-bar",{attrs:{app:"",color:"#039e9e",dark:"",dense:""}},[t("v-app-bar-nav-icon",{on:{click:function(a){a.stopPropagation(),e.drawer=!e.drawer}}}),t("v-spacer"),t("v-toolbar-title",[e._v("The Values Project")])],1),t("v-main",[t("transition",{attrs:{name:"fade"}},[t("router-view")],1)],1),t("v-footer",{attrs:{color:"#039e9e",elevation:"4",app:""}},[t("span",{staticClass:"white--text"},[e._v("© "+e._s((new Date).getFullYear())+" The Values Project")])])],1)},r=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("v-navigation-drawer",{attrs:{app:"",value:e.value},on:{input:function(a){return e.$emit("input",a)}}},[t("v-list",{attrs:{dense:""}},e._l(e.items,(function(a){return t("v-list-item",{key:a.text,attrs:{link:"",to:a.route}},[t("v-list-item-action",[t("v-icon",[e._v("mdi-"+e._s(a.icon))])],1),t("v-list-item-content",[t("v-list-item",[e._v(e._s(a.text))])],1)],1)})),1)],1)],1)},s=[],l={name:"Navbar",props:{source:String,items:{type:Array,required:!0},value:{type:Boolean,default:!1}},data:function(){return{drawer:null}}},u=l,c=t("2877"),d=t("6544"),h=t.n(d),m=t("132d"),f=t("8860"),p=t("da13"),v=t("1800"),g=t("5d23"),b=t("f774"),y=Object(c["a"])(u,o,s,!1,null,null,null),S=y.exports;h()(y,{VIcon:m["a"],VList:f["a"],VListItem:p["a"],VListItemAction:v["a"],VListItemContent:g["a"],VNavigationDrawer:b["a"]});var C={components:{Navbar:S},data:function(){return{drawer:!1,items:[{icon:"home",text:"Home",route:"/"},{icon:"frequently-asked-questions",text:"FAQ",route:"/faq"},{icon:"test-tube",text:"Submit",route:"/signup"},{icon:"database",text:"Data",route:"/data"}]}}},w=C,M=(t("5c0b"),t("7496")),I=t("40dc"),V=t("5bc1"),O=t("553a"),P=t("f6c4"),k=t("2fa4"),T=t("2a7f"),x=Object(c["a"])(w,i,r,!1,null,null,null),A=x.exports;h()(x,{VApp:M["a"],VAppBar:I["a"],VAppBarNavIcon:V["a"],VFooter:O["a"],VMain:P["a"],VSpacer:k["a"],VToolbarTitle:T["a"]});var B=t("8c4f"),_=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("v-container",[t("LogoValues"),t("h1",[e._v("Welcome to the Values Project")]),t("v-row",{attrs:{justify:"space-around"}},[t("v-col",{attrs:{cols:"12",sm:"4"}},[t("v-sheet",[t("p",[e._v(" The Values Project is a sociological study seeking to find relationships between human values and environmental influences. These relationships will shed insight on subtle differences between cultures to foster an active conversation with the goal of reaching understanding and unity. ")]),t("router-link",{attrs:{to:"/faq"}},[t("v-btn",{attrs:{text:"",color:"#039e9e"}},[e._v(" Learn More ")])],1)],1)],1)],1)],1)],1)},R=[],E=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("v-row",{staticClass:"mt-3",attrs:{justify:"center"}},[n("v-img",{attrs:{src:t("cf05"),"max-width":"220","max-height":"220",alt:"Values Project Logo","lazy-src":""}})],1)},N=[],G={},j=G,F=t("adda"),L=t("0fd9"),D=Object(c["a"])(j,E,N,!1,null,"fcf9aa3a",null),$=D.exports;h()(D,{VImg:F["a"],VRow:L["a"]});var H={name:"Home",components:{LogoValues:$}},z=H,U=(t("86b2"),t("8336")),K=t("62ad"),q=t("a523"),W=t("8dd9"),J=Object(c["a"])(z,_,R,!1,null,"7c01aeb2",null),Z=J.exports;h()(J,{VBtn:U["a"],VCol:K["a"],VContainer:q["a"],VRow:L["a"],VSheet:W["a"]});var Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",[t("AboutExpansionPanel")],1)],1)},Q=[],X=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-expansion-panels",e._l(e.items,(function(a,n){return t("v-expansion-panel",{key:n},[t("v-expansion-panel-header",{staticClass:"subtitle-1"},[e._v(e._s(a.name))]),t("v-expansion-panel-content",{staticClass:"text-body-2"},[e._v(" "+e._s(a.content)+" ")])],1)})),1)},ee=[],ae={data:function(){return{items:[{name:"What is the purpose of this project?",content:"The Values Project is a data project designed to collect people's values. The Values Project does not ask about race or ethnicity, only age, the user's country of origin, and their parent's country of origin. The project theorizes that differences in values separate cultures from assimilating."},{name:"What are the project's goals?",content:"The Values Project is a sociological study seeking to find relationships between human values and environmental influences. These relationships will shed insight on subtle differences between cultures to foster an active conversation with the goal of reaching understanding and unity."},{name:"Why should I participate?",content:"You will be able to share your personal values which will create meaningful data. With more participants, the accuracy and validity of the study will yield greater insights about cultural values, communities, and human behavior."},{name:"What is the use of the data?",content:"The data will be used to reveal blindspots or target areas of further study into the values of communities across the world. As data grows, new questions and stages of the Values Project will begin to flourish and develop."},{name:"Who will have access to the data?",content:"Currently, the Values Project is run by an independent anthropologist/developer. Details about him can be found below."},{name:"Is my data and privacy protected?",content:"The Values Project requests the user's email to ensure there are no duplicate entries and maintain the authenticity of data. Names are collected to see if possible trends emerge between family names and values. User's full names will never be revealed in reports, data models, or publication."},{name:"Will I have access to the data?",content:"As the Values Project grows data models will be added to the Values Project website. Visitors will be able to explore the data using a variety of filters and/or retrieve information for their own research."},{name:"How long will it take to complete?",content:"The Values Project has no end date in mind and will hopefully flourish into a larger program that aims to promote unity and understanding for humans across the planet."},{name:"Who is the author/developer?",content:"Andrew Riefenstahl has been teaching students in classrooms for over six years. His educational background in anthropology, geology, and recently computer science has given him a broad base from which to approach many topics. He is also a musician, writer, and avid dog dad. He enjoys researching cultural aspects of human society to find insights for a better tomorrow."},{name:"How can I give feedback or input?",content:"If you would like to give feedback or offer a suggestion for the Values Project please direct message via twitter @Values_Project"}]}}},te=ae,ne=t("cd55"),ie=t("49e2"),re=t("c865"),oe=t("0393"),se=Object(c["a"])(te,X,ee,!1,null,null,null),le=se.exports;h()(se,{VExpansionPanel:ne["a"],VExpansionPanelContent:ie["a"],VExpansionPanelHeader:re["a"],VExpansionPanels:oe["a"]});var ue={components:{AboutExpansionPanel:le}},ce=ue,de=Object(c["a"])(ce,Y,Q,!1,null,"dae9b9d6",null),he=de.exports;h()(de,{VContainer:q["a"],VRow:L["a"]});var me=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"sign-up"},[t("SignUpForm"),t("transition",{attrs:{name:"fade"}},[e.showModal?t("ModalWarning",{attrs:{modalData:this.$store.state.errorMessages}}):e._e()],1)],1)},fe=[],pe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-form",{on:{submit:e.formSubmit},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{rules:e.nameRules,counter:20,label:"First name",required:""},model:{value:e.form.firstname,callback:function(a){e.$set(e.form,"firstname",a)},expression:"form.firstname"}})],1),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{rules:e.nameRules,counter:20,label:"Last name",required:""},model:{value:e.form.lastname,callback:function(a){e.$set(e.form,"lastname",a)},expression:"form.lastname"}})],1),t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.form.email,callback:function(a){e.$set(e.form,"email",a)},expression:"form.email"}})],1)],1),t("v-row",[t("CountryOfOriginInput",{model:{value:e.form.countryOfOrigin,callback:function(a){e.$set(e.form,"countryOfOrigin",a)},expression:"form.countryOfOrigin"}}),t("ParentOneCountryOfOrigin",{model:{value:e.form.parentOneCountryOfOrigin,callback:function(a){e.$set(e.form,"parentOneCountryOfOrigin",a)},expression:"form.parentOneCountryOfOrigin"}}),t("ParentTwoCountryOfOrigin",{model:{value:e.form.parentTwoCountryOfOrigin,callback:function(a){e.$set(e.form,"parentTwoCountryOfOrigin",a)},expression:"form.parentTwoCountryOfOrigin"}}),t("AgeInput",{model:{value:e.form.userAge,callback:function(a){e.$set(e.form,"userAge",e._n(a))},expression:"form.userAge"}}),t("FirstValuesInput",{model:{value:e.form.values.first,callback:function(a){e.$set(e.form.values,"first",a)},expression:"form.values.first"}}),t("SecondValuesInput",{model:{value:e.form.values.second,callback:function(a){e.$set(e.form.values,"second",a)},expression:"form.values.second"}}),t("ThirdValuesInput",{model:{value:e.form.values.third,callback:function(a){e.$set(e.form.values,"third",a)},expression:"form.values.third"}})],1),t("v-row",{staticClass:"my-2 d-flex justify-center"},[t("v-col",{attrs:{cols:"12",md:"4"}},[t("v-btn",{attrs:{"x-large":"",color:"#039e9e",dark:"",type:"submit"}},[e._v("Submit")])],1)],1)],1)],1)},ve=[],ge=(t("d81d"),t("d3b7"),t("ac1f"),t("1276"),t("498a"),t("ddb0"),function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{items:e.items,label:"Country of Origin"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)}),be=[],ye={name:"CountryOfOriginInput",props:{},data:function(){return{selected:"",value:"",items:["Please Select One","United States of America","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},Se=ye,Ce=t("b974"),we=Object(c["a"])(Se,ge,be,!1,null,null,null),Me=we.exports;h()(we,{VCol:K["a"],VSelect:Ce["a"]});var Ie=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{items:e.items,label:"Parent 1 - Country of Origin"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},Ve=[],Oe={name:"ParentOneCountryOfOriginInput",data:function(){return{selected:"",value:"",items:["Not Applicable","United States of America","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},Pe=Oe,ke=Object(c["a"])(Pe,Ie,Ve,!1,null,null,null),Te=ke.exports;h()(ke,{VCol:K["a"],VSelect:Ce["a"]});var xe=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",md:"4"}},[t("v-select",{attrs:{items:e.items,label:"Parent 2 - Country of Origin"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},Ae=[],Be={name:"ParentTwoCountryOfOriginInput",data:function(){return{selected:"",value:"",items:["Not Applicable","United States of America","Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas (the)","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia (Plurinational State of)","Bonaire, Sint Eustatius and Saba","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory (the)","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Cayman Islands (the)","Central African Republic (the)","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands (the)","Colombia","Comoros (the)","Congo (the Democratic Republic of the)","Congo (the)","Cook Islands (the)","Costa Rica","Croatia","Cuba","Curaçao","Cyprus","Czechia","Côte d'Ivoire","Denmark","Djibouti","Dominica","Dominican Republic (the)","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Falkland Islands (the) [Malvinas]","Faroe Islands (the)","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories (the)","Gabon","Gambia (the)","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Heard Island and McDonald Islands","Holy See (the)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran (Islamic Republic of)","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea (the Democratic People's Republic of)","Korea (the Republic of)","Kuwait","Kyrgyzstan","Lao People's Democratic Republic (the)","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands (the)","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia (Federated States of)","Moldova (the Republic of)","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands (the)","New Caledonia","New Zealand","Nicaragua","Niger (the)","Nigeria","Niue","Norfolk Island","Northern Mariana Islands (the)","Norway","Oman","Pakistan","Palau","Palestine, State of","Panama","Papua New Guinea","Paraguay","Peru","Philippines (the)","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Republic of North Macedonia","Romania","Russian Federation (the)","Rwanda","Réunion","Saint Barthélemy","Saint Helena, Ascension and Tristan da Cunha","Saint Kitts and Nevis","Saint Lucia","Saint Martin (French part)","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten (Dutch part)","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and the South Sandwich Islands","South Sudan","Spain","Sri Lanka","Sudan (the)","Suriname","Svalbard and Jan Mayen","Sweden","Switzerland","Syrian Arab Republic","Taiwan","Tajikistan","Tanzania, United Republic of","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands (the)","Tuvalu","Uganda","Ukraine","United Arab Emirates (the)","United Kingdom of Great Britain and Northern Ireland (the)","United States Minor Outlying Islands (the)","Uruguay","Uzbekistan","Vanuatu","Venezuela (Bolivarian Republic of)","Viet Nam","Virgin Islands (British)","Virgin Islands (U.S.)","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe","Åland Islands"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},_e=Be,Re=Object(c["a"])(_e,xe,Ae,!1,null,null,null),Ee=Re.exports;h()(Re,{VCol:K["a"],VSelect:Ce["a"]});var Ne=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{attrs:{cols:"12"}},[t("v-subheader",{staticClass:"pl-0"},[e._v("User's Age")]),t("v-slider",{staticClass:"pl-0",attrs:{color:"teal lighten-1","thumb-label":"always"},on:{end:e.emitSliderValue},model:{value:e.slider,callback:function(a){e.slider=a},expression:"slider"}})],1)},Ge=[],je={data:function(){return{slider:26}},methods:{emitSliderValue:function(){console.log("child value changed: "+this.slider),this.$emit("input",this.slider)}}},Fe=je,Le=(t("67da"),t("ba0d")),De=t("e0c7"),$e=Object(c["a"])(Fe,Ne,Ge,!1,null,"17665e55",null),He=$e.exports;h()($e,{VCol:K["a"],VSlider:Le["a"],VSubheader:De["a"]});var ze=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"4"}},[t("v-select",{attrs:{items:e.items,label:"1st Value"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},Ue=[],Ke={data:function(){return{selected:"",items:["Wealth","Love","Power","Prestige","Education","Community","Tradition","Faith","Family","Intelligence","Health","Art","Beauty","Security","Loyalty","Friendship","Respect","Obedience","Nature","Privacy","Hedonism"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},qe=Ke,We=Object(c["a"])(qe,ze,Ue,!1,null,null,null),Je=We.exports;h()(We,{VCol:K["a"],VSelect:Ce["a"]});var Ze=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"4"}},[t("v-select",{attrs:{items:e.items,label:"2nd Value"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},Ye=[],Qe={data:function(){return{selected:"",items:["Wealth","Love","Power","Prestige","Education","Community","Tradition","Faith","Family","Intelligence","Health","Art","Beauty","Security","Loyalty","Friendship","Respect","Obedience","Nature","Privacy","Hedonism"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},Xe=Qe,ea=Object(c["a"])(Xe,Ze,Ye,!1,null,null,null),aa=ea.exports;h()(ea,{VCol:K["a"],VSelect:Ce["a"]});var ta=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-col",{staticClass:"d-flex",attrs:{cols:"12",sm:"4"}},[t("v-select",{attrs:{items:e.items,label:"3rd Value"},on:{change:e.emitSelectedValue},model:{value:e.selected,callback:function(a){e.selected=a},expression:"selected"}})],1)},na=[],ia={data:function(){return{selected:"",items:["Wealth","Love","Power","Prestige","Education","Community","Tradition","Faith","Family","Intelligence","Health","Art","Beauty","Security","Loyalty","Friendship","Respect","Obedience","Nature","Privacy","Hedonism"]}},methods:{emitSelectedValue:function(){console.log("child value changed: "+this.selected),this.$emit("input",this.selected)}}},ra=ia,oa=Object(c["a"])(ra,ta,na,!1,null,null,null),sa=oa.exports;h()(oa,{VCol:K["a"],VSelect:Ce["a"]});var la={components:{CountryOfOriginInput:Me,ParentOneCountryOfOrigin:Te,ParentTwoCountryOfOrigin:Ee,AgeInput:He,FirstValuesInput:Je,SecondValuesInput:aa,ThirdValuesInput:sa},data:function(){return{valid:!1,form:{firstname:"",lastname:"",countryOfOrigin:"",parentOneCountryOfOrigin:"",parentTwoCountryOfOrigin:"",userAge:null,values:{first:"",second:"",third:""}},nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=20||"Name must be less than 20 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}]}},methods:{formSubmit:function(e){e.preventDefault();var a=this;this.axios.post("/api/v1/submit",{firstname:this.form.firstname,lastname:this.form.lastname,email:this.form.email,countryOfOrigin:this.form.countryOfOrigin,parentOneCountryOfOrigin:this.form.parentOneCountryOfOrigin,parentTwoCountryOfOrigin:this.form.parentTwoCountryOfOrigin,userAge:this.form.userAge,values:{first:this.form.values.first,second:this.form.values.second,third:this.form.values.third}}).then((function(e){console.log(e.data),a.$router.push("/thankyou")})).catch((function(e){if(e.response){var t=e.response.data.message.split(".").map((function(e){return e.trim()}));a.$store.commit("writeErrors",t),a.$store.commit("toggleModal")}else e.request?console.log(e.request):console.log("Error",e.message)}))}}},ua=la,ca=(t("a87b"),t("4bd4")),da=t("8654"),ha=Object(c["a"])(ua,pe,ve,!1,null,"5896d22d",null),ma=ha.exports;h()(ha,{VBtn:U["a"],VCol:K["a"],VContainer:q["a"],VForm:ca["a"],VRow:L["a"],VTextField:da["a"]});var fa=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal"},[t("v-card",{staticClass:"container"},[t("v-card-title",{staticClass:"modal__title"},[e._v("Validation Errors")]),t("div",{staticClass:"modal__message"},[t("v-list",e._l(e.modalData,(function(a){return t("v-list-item-title",{key:a},[e._v(e._s(a))])})),1)],1),t("v-btn",{staticClass:"mt-4",attrs:{"x-large":"",ripple:""},on:{click:e.changeModalState}},[e._v("Close")])],1)],1)},pa=[],va={name:"Modal",props:{modalData:{type:Array}},methods:{changeModalState:function(){this.$store.commit("toggleModal")}}},ga=va,ba=(t("0a1f"),t("b0af")),ya=t("99d9"),Sa=Object(c["a"])(ga,fa,pa,!1,null,"0e6558de",null),Ca=Sa.exports;h()(Sa,{VBtn:U["a"],VCard:ba["a"],VCardTitle:ya["a"],VList:f["a"],VListItemTitle:g["b"]});var wa={name:"SignUp",components:{SignUpForm:ma,ModalWarning:Ca},computed:{showModal:function(){return this.$store.state.showModal}}},Ma=wa,Ia=(t("0dc6"),Object(c["a"])(Ma,me,fe,!1,null,null,null)),Va=Ia.exports,Oa=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"data"},[t("CompiledData")],1)},Pa=[],ka=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-container",[t("v-row",[t("v-col",[t("v-sheet",{staticClass:"elevation-1"},[t("p",[e._v(" This data table reflects the total selections for each value in the database from submissions. ")])]),t("CountDataModel")],1)],1)],1)},Ta=[],xa=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.valueData,"items-per-page":20,"hide-default-footer":""},scopedSlots:e._u([{key:"item",fn:function(a){return[t("tr",{staticClass:"text-left"},[t("td",[e._v(e._s(a.item.name||"data unknown"))]),t("td",[e._v(e._s(a.item.count||0))])])]}}])})},Aa=[],Ba=(t("25f0"),{name:"CountedDataModel",data:function(){return{valueData:[],headers:[{text:"Value",align:"start",sortable:!0,value:"name"},{text:"Count",value:"count"}],error:null,loading:!1}},mounted:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;this.error=this.valueData=null,this.loading=!0,this.valueData=[];var a=this;this.axios.get("/api/v1/data/values").then((function(t){e.loading=!1,a.valueData=t.data.totalValues,console.log("Values Data Updated")})).catch((function(a){e.error=a.toString()}))}}}),_a=Ba,Ra=(t("4e2b"),t("8fea")),Ea=Object(c["a"])(_a,xa,Aa,!1,null,"6b7b115d",null),Na=Ea.exports;h()(Ea,{VDataTable:Ra["a"]});var Ga={name:"CompiledData",components:{CountDataModel:Na}},ja=Ga,Fa=Object(c["a"])(ja,ka,Ta,!1,null,null,null),La=Fa.exports;h()(Fa,{VCol:K["a"],VContainer:q["a"],VRow:L["a"],VSheet:W["a"]});var Da={components:{CompiledData:La}},$a=Da,Ha=Object(c["a"])($a,Oa,Pa,!1,null,null,null),za=Ha.exports,Ua=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},Ka=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"thank-you mt-3"},[t("h1",[e._v("Thank you for sharing your values.")])])}],qa={},Wa=Object(c["a"])(qa,Ua,Ka,!1,null,null,null),Ja=Wa.exports;n["a"].use(B["a"]);var Za=[{path:"/",name:"Home",component:Z},{path:"/faq",name:"FAQ",component:he},{path:"/signup",name:"SignUp",component:Va},{path:"/thankyou",name:"ThankYou",component:Ja},{path:"/data",name:"Data",component:za}],Ya=new B["a"]({mode:"history",base:"",routes:Za}),Qa=Ya,Xa=t("2f62");n["a"].use(Xa["a"]);var et=new Xa["a"].Store({state:{errorMessages:{},showModal:!1},mutations:{toggleModal:function(e){e.showModal=!e.showModal},writeErrors:function(e,a){e.errorMessages=a}},getters:{showModal:function(e){return e.showModal}},actions:{},modules:{}}),at=t("f309");n["a"].use(at["a"]);var tt=new at["a"]({}),nt=t("bc3a"),it=t.n(nt),rt=t("a7fe"),ot=t.n(rt);n["a"].use(ot.a,it.a),n["a"].config.productionTip=!1,new n["a"]({router:Qa,store:et,vuetify:tt,render:function(e){return e(A)}}).$mount("#app")},"5c0b":function(e,a,t){"use strict";var n=t("9c0c"),i=t.n(n);i.a},"67da":function(e,a,t){"use strict";var n=t("8d16"),i=t.n(n);i.a},"7d26":function(e,a,t){},"86b2":function(e,a,t){"use strict";var n=t("4ae1"),i=t.n(n);i.a},8884:function(e,a,t){},"8d16":function(e,a,t){},"9c0c":function(e,a,t){},a87b:function(e,a,t){"use strict";var n=t("7d26"),i=t.n(n);i.a},cf05:function(e,a,t){e.exports=t.p+"img/logo.70b84b4f.png"}});
//# sourceMappingURL=app.d61afaf1.js.map