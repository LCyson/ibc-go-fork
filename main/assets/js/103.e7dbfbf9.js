(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{666:function(t,e,l){"use strict";l.r(e);var o=l(1),d=Object(o.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"bind-ports"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#bind-ports"}},[t._v("#")]),t._v(" Bind ports")]),t._v(" "),l("p",{attrs:{synopsis:""}},[t._v("Learn what changes to make to bind modules to their ports on initialization.")]),t._v(" "),l("h2",{attrs:{id:"pre-requisites-readings"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites-readings"}},[t._v("#")]),t._v(" Pre-requisites Readings")]),t._v(" "),l("ul",[l("li",{attrs:{prereq:""}},[l("RouterLink",{attrs:{to:"/ibc/overview.html"}},[t._v("IBC Overview")]),t._v(")")],1),t._v(" "),l("li",{attrs:{prereq:""}},[l("RouterLink",{attrs:{to:"/ibc/integration.html"}},[t._v("IBC default integration")])],1)]),t._v(" "),l("p",[t._v("Currently, ports must be bound on app initialization. In order to bind modules to their respective ports on initialization, the following needs to be implemented:")]),t._v(" "),l("blockquote",[l("p",[t._v("Note that "),l("code",[t._v("portID")]),t._v(" does not refer to a certain numerical ID, like "),l("code",[t._v("localhost:8080")]),t._v(" with a "),l("code",[t._v("portID")]),t._v(" 8080. Rather it refers to the application module the port binds. For IBC Modules built with the Cosmos SDK, it defaults to the module's name and for Cosmwasm contracts it defaults to the contract address.")])]),t._v(" "),l("ol",[l("li",[t._v("Add port ID to the "),l("code",[t._v("GenesisState")]),t._v(" proto definition:")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBHZW5lc2lzU3RhdGUgewogIHN0cmluZyBwb3J0X2lkID0gMTsKICAvLyBvdGhlciBmaWVsZHMKfQo="}}),t._v(" "),l("ol",[l("li",[t._v("Add port ID as a key to the module store:")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC8mbHQ7bW9kdWxlTmFtZSZndDsvdHlwZXMva2V5cy5nbwpjb25zdCAoCiAgLy8gTW9kdWxlTmFtZSBkZWZpbmVzIHRoZSBJQkMgTW9kdWxlIG5hbWUKICBNb2R1bGVOYW1lID0gJnF1b3Q7bW9kdWxlTmFtZSZxdW90OwoKICAvLyBWZXJzaW9uIGRlZmluZXMgdGhlIGN1cnJlbnQgdmVyc2lvbiB0aGUgSUJDCiAgLy8gbW9kdWxlIHN1cHBvcnRzCiAgVmVyc2lvbiA9ICZxdW90O21vZHVsZVZlcnNpb24tMSZxdW90OwoKICAvLyBQb3J0SUQgaXMgdGhlIGRlZmF1bHQgcG9ydCBpZCB0aGF0IG1vZHVsZSBiaW5kcyB0bwogIFBvcnRJRCA9ICZxdW90O3BvcnRJRCZxdW90OwoKICAvLyAuLi4KKQo="}}),t._v(" "),l("ol",[l("li",[t._v("Add port ID to "),l("code",[t._v("x/<moduleName>/types/genesis.go")]),t._v(":")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gaW4geC8mbHQ7bW9kdWxlTmFtZSZndDsvdHlwZXMvZ2VuZXNpcy5nbwoKLy8gRGVmYXVsdEdlbmVzaXNTdGF0ZSByZXR1cm5zIGEgR2VuZXNpc1N0YXRlIHdpdGggJnF1b3Q7dHJhbnNmZXImcXVvdDsgYXMgdGhlIGRlZmF1bHQgUG9ydElELgpmdW5jIERlZmF1bHRHZW5lc2lzU3RhdGUoKSAqR2VuZXNpc1N0YXRlIHsKICByZXR1cm4gJmFtcDtHZW5lc2lzU3RhdGV7CiAgICBQb3J0SWQ6ICAgICAgUG9ydElELAogICAgLy8gYWRkaXRpb25hbCBrLXYgZmllbGRzCiAgfQp9CgovLyBWYWxpZGF0ZSBwZXJmb3JtcyBiYXNpYyBnZW5lc2lzIHN0YXRlIHZhbGlkYXRpb24gcmV0dXJuaW5nIGFuIGVycm9yIHVwb24gYW55Ci8vIGZhaWx1cmUuCmZ1bmMgKGdzIEdlbmVzaXNTdGF0ZSkgVmFsaWRhdGUoKSBlcnJvciB7CiAgaWYgZXJyIDo9IGhvc3QuUG9ydElkZW50aWZpZXJWYWxpZGF0b3IoZ3MuUG9ydElkKTsgZXJyICE9IG5pbCB7CiAgICByZXR1cm4gZXJyCiAgfQogIC8vYWRkdGlvbmFsIHZhbGlkYXRpb25zCgogIHJldHVybiBncy5QYXJhbXMuVmFsaWRhdGUoKQp9Cg=="}}),t._v(" "),l("ol",[l("li",[t._v("Bind to port(s) in the module keeper's "),l("code",[t._v("InitGenesis")]),t._v(":")])]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSW5pdEdlbmVzaXMgaW5pdGlhbGl6ZXMgdGhlIGliYy1tb2R1bGUgc3RhdGUgYW5kIGJpbmRzIHRvIFBvcnRJRC4KZnVuYyAoayBLZWVwZXIpIEluaXRHZW5lc2lzKGN0eCBzZGsuQ29udGV4dCwgc3RhdGUgdHlwZXMuR2VuZXNpc1N0YXRlKSB7CiAgay5TZXRQb3J0KGN0eCwgc3RhdGUuUG9ydElkKQoKICAvLyAuLi4KCiAgLy8gT25seSB0cnkgdG8gYmluZCB0byBwb3J0IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGJvdW5kLCBzaW5jZSB3ZSBtYXkgYWxyZWFkeSBvd24KICAvLyBwb3J0IGNhcGFiaWxpdHkgZnJvbSBjYXBhYmlsaXR5IEluaXRHZW5lc2lzCiAgaWYgIWsuSGFzQ2FwYWJpbGl0eShjdHgsIHN0YXRlLlBvcnRJZCkgewogICAgLy8gdHJhbnNmZXIgbW9kdWxlIGJpbmRzIHRvIHRoZSB0cmFuc2ZlciBwb3J0IG9uIEluaXRDaGFpbgogICAgLy8gYW5kIGNsYWltcyB0aGUgcmV0dXJuZWQgY2FwYWJpbGl0eQogICAgZXJyIDo9IGsuQmluZFBvcnQoY3R4LCBzdGF0ZS5Qb3J0SWQpCiAgICBpZiBlcnIgIT0gbmlsIHsKICAgICAgcGFuaWMoZm10LlNwcmludGYoJnF1b3Q7Y291bGQgbm90IGNsYWltIHBvcnQgY2FwYWJpbGl0eTogJXYmcXVvdDssIGVycikpCiAgICB9CiAgfQoKICAvLyAuLi4KfQo="}}),t._v(" "),l("p",[t._v("With:")]),t._v(" "),l("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gSXNCb3VuZCBjaGVja3MgaWYgdGhlICBtb2R1bGUgaXMgYWxyZWFkeSBib3VuZCB0byB0aGUgZGVzaXJlZCBwb3J0CmZ1bmMgKGsgS2VlcGVyKSBJc0JvdW5kKGN0eCBzZGsuQ29udGV4dCwgcG9ydElEIHN0cmluZykgYm9vbCB7CiAgXywgb2sgOj0gay5zY29wZWRLZWVwZXIuR2V0Q2FwYWJpbGl0eShjdHgsIGhvc3QuUG9ydFBhdGgocG9ydElEKSkKICByZXR1cm4gb2sKfQoKLy8gQmluZFBvcnQgZGVmaW5lcyBhIHdyYXBwZXIgZnVuY3Rpb24gZm9yIHRoZSBwb3J0IEtlZXBlcidzIGZ1bmN0aW9uIGluCi8vIG9yZGVyIHRvIGV4cG9zZSBpdCB0byBtb2R1bGUncyBJbml0R2VuZXNpcyBmdW5jdGlvbgpmdW5jIChrIEtlZXBlcikgQmluZFBvcnQoY3R4IHNkay5Db250ZXh0LCBwb3J0SUQgc3RyaW5nKSBlcnJvciB7CiAgY2FwIDo9IGsucG9ydEtlZXBlci5CaW5kUG9ydChjdHgsIHBvcnRJRCkKICByZXR1cm4gay5DbGFpbUNhcGFiaWxpdHkoY3R4LCBjYXAsIGhvc3QuUG9ydFBhdGgocG9ydElEKSkKfQo="}}),t._v(" "),l("p",[t._v("The module binds to the desired port(s) and returns the capabilities.")]),t._v(" "),l("p",[t._v("In the above we find reference to keeper methods that wrap other keeper functionality, in the next section the keeper methods that need to be implemented will be defined.")])],1)}),[],!1,null,null,null);e.default=d.exports}}]);