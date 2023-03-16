(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{643:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-004-lock-fee-module-upon-escrow-out-of-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-004-lock-fee-module-upon-escrow-out-of-balance"}},[e._v("#")]),e._v(" ADR 004: Lock fee module upon escrow out of balance")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("03/03/2022: initial draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The fee module maintains an escrow account for all fees escrowed to incentivize packet relays.\nIt also tracks each packet fee escrowed separately from the escrow account. This is because the escrow account only maintains a total balance. It has no reference for which coins belonged to which packet fee.\nIn the presence of a severe bug, it is possible the escrow balance will become out of sync with the packet fees marked as escrowed.\nThe ICS29 module should be capable of elegantly handling such a scenario.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v('We will allow for the ICS29 module to become "locked" if the escrow balance is determined to be out of sync with the packet fees marked as escrowed.\nA "locked" fee module will not allow for packet escrows to occur nor will it distribute fees. All IBC callbacks will skip performing fee logic, similar to fee disabled channels.')]),e._v(" "),a("p",[e._v("Manual intervention will be needed to unlock the fee module.")]),e._v(" "),a("h3",{attrs:{id:"sending-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-side"}},[e._v("#")]),e._v(" Sending side")]),e._v(" "),a("p",[e._v("Special behaviour will have to be accounted for in "),a("code",[e._v("OnAcknowledgementPacket")]),e._v(". Since the counterparty will continue to send incentivized acknowledgements for fee enabled channels, the acknowledgement will still need to be unmarshalled into an incentivized acknowledgement before calling the underlying application "),a("code",[e._v("OnAcknowledgePacket")]),e._v(" callback.")]),e._v(" "),a("p",[e._v("When distributing fees, a cached context should be used. If the escrow account balance would become negative, the current state changes should be discarded and the fee module should be locked using the uncached context. This prevents fees from being partially distributed for a given packetID.")]),e._v(" "),a("h3",{attrs:{id:"receiving-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-side"}},[e._v("#")]),e._v(" Receiving side")]),e._v(" "),a("p",[a("code",[e._v("OnRecvPacket")]),e._v(" should remain unaffected by the fee module becoming locked since escrow accounts only affect the sending side.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("p",[e._v("The fee module can be elegantly disabled in the presence of severe bugs.")]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("p",[e._v("Extra logic is added to account for edge cases which are only possible in the presence of bugs.")]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("Issues:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/821",target:"_blank",rel:"noopener noreferrer"}},[e._v("#821"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/issues/860",target:"_blank",rel:"noopener noreferrer"}},[e._v("#860"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("PR's:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1031",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1031"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1029",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1029"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/1056",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1056"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);