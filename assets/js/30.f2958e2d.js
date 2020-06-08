(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(e,t,o){"use strict";o.r(t);var s=o(43),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"migrating-your-questnet-entity-for-the-amber-network"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-your-questnet-entity-for-the-amber-network"}},[e._v("#")]),e._v(" Migrating Your QuestNet Entity for the Amber Network")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),o("p",[e._v("The deadline for Amber Network Entity Packages is 2020-06-15T23:59:00 UTC. You\nmust migrate your entity before then.")])]),e._v(" "),o("p",[e._v("For those who have previously participated in The Quest, you must create\nan entity package for the Amber Network derived from your Quest entity. A\nmigration is required due to breaking changes in the node descriptor format used\nbetween The Quest and the Amber Network.")]),e._v(" "),o("p",[e._v("To summarize, the steps required for migration are as follows:")]),e._v(" "),o("ol",[o("li",[e._v("Backup all of your entity/node artifacts.")]),e._v(" "),o("li",[e._v("Create a set of new node artifacts.\n"),o("ul",[o("li",[e._v("This will effectively delete your old node. While it might be possible to\nuse the same node identity with the Amber Network, for simplicity's sake,\nwe will not include those instructions. If you attempt to do so, it is at\nyour own discretion.")])])]),e._v(" "),o("li",[e._v("Update your entity with the new node descriptor.\n"),o("ul",[o("li",[e._v("This removes the old node descriptor.")])])]),e._v(" "),o("li",[e._v("Create and submit your Entity Package")]),e._v(" "),o("li",[e._v("Start your node with the new node artifacts when the Amber Network\nstarts.")])]),e._v(" "),o("h2",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),o("ul",[o("li",[e._v("Your "),o("code",[e._v("/localhostdir")]),e._v(" "),o("ul",[o("li",[e._v("We are assuming that you had previously followed our setup guides and\ncreated an entity/node in a directory called "),o("code",[e._v("/localhostdir")])])])]),e._v(" "),o("li",[e._v("Your "),o("code",[e._v("/localhostdir/entity")]),e._v(" containing your "),o("code",[e._v("entity.pem")]),e._v(" (Your entity private key)")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://github.com/oasisprotocol/oasis-core/releases/download/v20.7/oasis_core_20.7_linux_amd64.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[e._v("oasis-node v20.7"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"step-1-backup-all-of-your-entity-node-artifacts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-1-backup-all-of-your-entity-node-artifacts"}},[e._v("#")]),e._v(" Step 1: Backup all of your entity/node artifacts")]),e._v(" "),o("p",[e._v("While this step is not strictly required, the steps in this guide are\npotentially destructive. Please backup the entirety of your\n"),o("code",[e._v("/localhostdir/entity")]),e._v(" and "),o("code",[e._v("/localhostdir/node")]),e._v(" directories just in case you\nmake a mistake.")]),e._v(" "),o("h2",{attrs:{id:"step-2-create-a-new-set-of-node-artifacts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-a-new-set-of-node-artifacts"}},[e._v("#")]),e._v(" Step 2: Create a new set of node artifacts")]),e._v(" "),o("p",[e._v("As explained previously, the node descriptor format has breaking changes\nbetween The Quest and the Amber Network. To simplify migration, it is best to\ndelete the old node artifacts and create new ones. Execute the following\ncommands in the "),o("code",[e._v("/localhostdir")]),e._v(" directory.")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[o("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -r node\n"),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" node\n"),o("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" node\n"),o("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("STATIC_IP")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("STATIC_IP"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# this is the ip to your sentry or validator node")]),e._v("\noasis-node registry node init "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --signer.backend "),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --signer.dir /localhostdir/entity "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --node.consensus_address "),o("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$STATIC_IP")]),e._v(":26656 "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --node.is_self_signed "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --node.role validator\n")])])]),o("p",[e._v("After you've completed these steps your "),o("code",[e._v("/localhostdir/node")]),e._v(" directory should\ninclude the following files. As before, please be mindful of the files you\n"),o("em",[e._v("should not share")]),e._v(".")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("consensus.pem")]),e._v(": The node's consensus private key. "),o("strong",[e._v("DO NOT SHARE")])]),e._v(" "),o("li",[o("code",[e._v("consensus_pub.pem")]),e._v(": The node's consensus public key.")]),e._v(" "),o("li",[o("code",[e._v("identity.pem")]),e._v(": The node's identity private key. "),o("strong",[e._v("DO NOT SHARE")])]),e._v(" "),o("li",[o("code",[e._v("identity_pub.pem")]),e._v(": The node's identity public key.")]),e._v(" "),o("li",[o("code",[e._v("node_genesis.json")]),e._v(": The node's details if you wish to include this node in\nthe genesis file of the network.")]),e._v(" "),o("li",[o("code",[e._v("p2p.pem")]),e._v(": The node's private key for libp2p. "),o("strong",[e._v("DO NOT SHARE")])]),e._v(" "),o("li",[o("code",[e._v("p2p_pub.pem")]),e._v(": The node's public key for libp2p.")]),e._v(" "),o("li",[o("code",[e._v("tls_identity.pem")]),e._v(": The node's TLS private key for securing gRPC\nconnections. "),o("strong",[e._v("DO NOT SHARE")])]),e._v(" "),o("li",[o("code",[e._v("tls_identity_cert.pem")]),e._v(": The node's TLS certificate for securing gRPC\nconnections.")])]),e._v(" "),o("h2",{attrs:{id:"step-3-update-your-entity-with-the-new-node-descriptor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-3-update-your-entity-with-the-new-node-descriptor"}},[e._v("#")]),e._v(" Step 3: Update your entity with the new node descriptor")]),e._v(" "),o("p",[e._v("Now that we have initialized a new node, we need to add it to the entity\ndescriptor so that it can properly register itself when the node starts up.")]),e._v(" "),o("p",[e._v("Execute the following command in the "),o("code",[e._v("/localhostdir/node")]),e._v(" directory:")]),e._v(" "),o("div",{staticClass:"language-bash extra-class"},[o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",[e._v("oasis-node registry entity update "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --signer.dir /localhostdir/entity "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --entity.node.descriptor node_genesis.json\n")])])]),o("p",[e._v("You may be wondering if you need to remove the old node from the entity. The\n"),o("code",[e._v("oasis-node registry entity update")]),e._v(" command includes only explicitly specified\nnode descriptors into the entity descriptor. As we do not specify the old\n"),o("code",[e._v("node_genesis.json")]),e._v(" here, the old node is removed from the entity.")]),e._v(" "),o("h2",{attrs:{id:"step-4-create-and-submit-your-entity-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-4-create-and-submit-your-entity-package"}},[e._v("#")]),e._v(" Step 4: Create and submit your Entity Package")]),e._v(" "),o("p",[e._v("Once you've completed the steps above, follow the guide in "),o("RouterLink",{attrs:{to:"/operators/creating-an-entity-package.html"}},[e._v("Creating an Entity\nPackage")]),e._v(" "),o("em",[e._v("before the beginning of the Amber Network")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"step-5-update-your-node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#step-5-update-your-node"}},[e._v("#")]),e._v(" Step 5: Update your node")]),e._v(" "),o("p",[e._v("At the time you wish to upgrade your node to participate in the Amber\nNetwork, you must ensure that the "),o("code",[e._v("/localhostdir/node")]),e._v(" artifacts are uploaded to\nyour "),o("code",[e._v("/serverdir/node")]),e._v(" directory.")])])}),[],!1,null,null,null);t.default=n.exports}}]);