(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{222:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"checking-your-account-nonce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-your-account-nonce"}},[t._v("#")]),t._v(" Checking Your Account nonce")]),t._v(" "),s("p",[t._v("If you need to submit new transactions to the network you will need to know your\nlatest account nonce in order for the transaction submission to succeed. To\ndetermine your current nonce, execute the following on your testnet node:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ oasis-node stake account info "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --stake.account.id "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ACCOUNT_ID_HEX")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -a unix:/serverdir/node/internal.sock\n")])])]),s("p",[t._v("The output will be json that looks something like this (the output will be\nunformatted):")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SOMEBASE64VALUEFORYOURACCOUNT11111111111111="')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"general_balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1000000000000000000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"escrow_balance"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"nonce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("nonce")]),t._v(" field will contain the nonce for your account. Use this value, "),s("code",[t._v("101")]),t._v("\nin this example, when generating transactions like so:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ oasis-node stake account gen_escrow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --genesis.file "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$GENESIS_FILE_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --entity "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ENTITY_DIR_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --stake.escrow.account "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ACCOUNT_ID")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --stake.amount "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000000000000000000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --transaction.file "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OUTPUT_TX_FILE_PATH")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --transaction.fee.gas "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --transaction.fee.amount "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --transaction.nonce "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=e.exports}}]);