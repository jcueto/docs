(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{370:function(e,t,n){"use strict";n.r(t);var o=n(43),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"oasis-network-incentives-a-proposal-for-the-network-at-time-of-launch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#oasis-network-incentives-a-proposal-for-the-network-at-time-of-launch"}},[e._v("#")]),e._v(" Oasis Network Incentives: A Proposal for the Network at Time of Launch")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),n("p",[e._v("This is a draft proposal and is subject to change pending the outcome of an\neconomic audit, feedback from the community, and the results of the Oasis\nFoundation’s staking competition.")])]),e._v(" "),n("p",[e._v("Below is a proposal of the initial incentive model for the Oasis Network at the\ntime of Mainnet launch. To submit your feedback and comments to the proposal\nplease reach out to us on "),n("a",{attrs:{href:"https://www.oasis-protocol.org/slack",target:"_blank",rel:"noopener noreferrer"}},[e._v("Slack"),n("OutboundLink")],1),e._v(" or via "),n("a",{attrs:{href:"https://github.com/oasislabs/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),n("OutboundLink")],1),e._v(".\nWhen designing and running stress tests, audits, and simulations, the\nunderlying goal has been to develop an incentive model that encourages both the\ndevelopment of a healthy and active developer ecosystem as well as a secure,\ndecentralized network through an engaged and diverse node operator community.")]),e._v(" "),n("p",[e._v("The core focus of this incentive documentation is to outline a proposal for\nparameters and rewards around staking and delegation.\nIn future documentation we will provide more detail on the proposed roadmap and\nrewards that expand beyond this activity.")]),e._v(" "),n("p",[n("em",[e._v("Note that following network launch, all changes to the protocol will be\ndetermined by the community based on the consensus mechanism of the Oasis network.")])]),e._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Estimated staking rewards")]),e._v(": 15% annual rewards at launch, tapering to 10%\nby end of year.")]),e._v(" "),n("li",[n("strong",[e._v("Slashing")]),e._v(": Slash for double-signing only")]),e._v(" "),n("li",[n("strong",[e._v("Number of validators to participate in any given consensus committee (and\nreceive staking rewards) at launch")]),e._v(": up to 100 validators")]),e._v(" "),n("li",[n("strong",[e._v("Minimum stake")]),e._v(": 100 tokens")])]),e._v(" "),n("h2",{attrs:{id:"overview-of-the-oasis-consensus-layer"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview-of-the-oasis-consensus-layer"}},[e._v("#")]),e._v(" Overview of the Oasis Consensus Layer")]),e._v(" "),n("p",[e._v("The Oasis Network is based on a Proof-of-Stake (PoS) consensus model. Tokens\ncan be self-delegated directly by each node operator or delegated to a node\noperator by other token holders. While the Oasis Network is designed with a\nmodular architecture that can use any consensus system that satisfies these\nproperties, it currently uses "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint"),n("OutboundLink")],1),e._v(" as its consensus algorithm.")]),e._v(" "),n("p",[e._v("At the time of the initial Mainnet launch, node operators will primarily serve\nas validators for this consensus layer. They will have the ability to sign\nblocks, earn transaction fees, stake, and receive delegation. Similar to the\nPoS design implemented by Cosmos, up to 100 validators with the most stake will\nbe active validators participating in the consensus process.")]),e._v(" "),n("p",[e._v("The system will disincentivize bad behavior via slashing for double-signing, as\nwell as via the cost to dominate the network, in terms of the number of staked\ntokens.")]),e._v(" "),n("h2",{attrs:{id:"nuts-and-bolts-of-staking-rewards"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nuts-and-bolts-of-staking-rewards"}},[e._v("#")]),e._v(" Nuts and Bolts of Staking Rewards")]),e._v(" "),n("h3",{attrs:{id:"staking-conditions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#staking-conditions"}},[e._v("#")]),e._v(" Staking Conditions")]),e._v(" "),n("p",[e._v("As a public, permissionless blockchain platform, our goal is to make the\nexperience of setting up a node as seamless as possible for any member of our\ncommunity who wants to contribute to the Oasis Network. To that end, we’ve put\na lot of thought into ensuring our staking conditions minimize barriers to\nentry and encourage meaningful engagement on the network. A few key parameters:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Number of validators to participate in consensus committee (and receive\nstaking rewards) at launch")]),e._v(": Up to 100 validators")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Minimum stake")]),e._v(": 100 tokens")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Selection to the consensus committee")]),e._v(": Each entity can have at most one\nnode elected to the consensus committee at a time. The probability of\nselection to the consensus committee is proportional to the stake of all\nnodes run by one entity.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Annual rewards")]),e._v(": The network is targeted to hit ~15% annual rewards at\nlaunch (based on the number of blocks produced, so timing could vary) and then\ntaper down to 10% by end of year. This will happen over a gradual taper rather\nthan a step function change to avoid creating some sort of cliff.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Slashing")]),e._v(": At the time of Mainnet launch, the network will only slash for\ndouble-signing. The network would slash the minimum stake amount (100 tokens)\nand freeze the node. Freezing the node is a precaution in order to prevent\nthe node from being over-penalized. The Network will not slash for liveness\nor uptime at launch.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Staking rewards")]),e._v(": The goal initially is to offer rewards that will help\nbootstrap the network effectively. To start, rewards will be proportional to\nthe stake and awarded on a per-entity basis. In order to be eligible for\nstaking rewards per epoch, a node would need to sign at least 75% of blocks\nin that epoch.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Unbonding period")]),e._v(": The network will have a ~14 day unbonding period.\nDuring this time, staked tokens are at risk of getting slashed for\ndouble-signing and do not accrue rewards during this time.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Consensus voting power")]),e._v(": The current voting power mechanism is stake-weighted.\nThis means that the consensus voting power of a validator is proportional to\nits stake. In this model, the network will require signatures by validators\nrepresenting +2/3 of the total stake of the committee to sign a block. Note\nthat in Tendermint, a validator's opportunities to propose a block in the\nround-robin block proposer order are also proportional to its voting power.")])])]),e._v(" "),n("h3",{attrs:{id:"delegation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#delegation"}},[e._v("#")]),e._v(" Delegation")]),e._v(" "),n("p",[e._v("As the Oasis Network gets closer to Mainnet, we’ll continue to share with our\ncommunity plenty of additional information on the delegation process and how to\ndo easily delegate on the network. In the meantime, here are a few thoughts on\ndelegation more generally:")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Slashing")]),e._v(": Delegated funds can be slashed for double-signing.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Reward disbursement")]),e._v(": Rewards from delegated funds are distributed\ndirectly to the delegator. Rewards are automatically added to their stakes\n(i.e. reinvested), so the rewards will have to go through the ~14 day\nunbonding period.")])])]),e._v(" "),n("h3",{attrs:{id:"commission-rates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#commission-rates"}},[e._v("#")]),e._v(" Commission Rates")]),e._v(" "),n("p",[e._v("There is currently no plan to require a minimum or maximum commission rate for\ndelegation, but we would like to set parameters around the transparency and\nnotification of commission rates.")]),e._v(" "),n("p",[e._v("When a node sets up on network, it will be able to share its current commission\nrate, as well as the range with which that rate could change (e.g. + / - 10%).\nCommission rates can be adjusted once per day.")]),e._v(" "),n("h3",{attrs:{id:"transaction-fee-distribution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transaction-fee-distribution"}},[e._v("#")]),e._v(" Transaction Fee Distribution")]),e._v(" "),n("p",[e._v("Most likely, transaction fees will be distributed equally among validators who\nsigned the block containing that specific transaction.")]),e._v(" "),n("h2",{attrs:{id:"glossary-of-commonly-used-terms"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#glossary-of-commonly-used-terms"}},[e._v("#")]),e._v(" Glossary of Commonly Used Terms")]),e._v(" "),n("ul",[n("li",[n("p",[n("strong",[e._v("Entity")]),e._v(": That’s you! (Or your organization.) On the Oasis Network, you’re\nidentified by your public key. Your private key controls your wallet, which\nmaintains a token balance. Each entity can also have a token amount staked,\nwhich is a separate balance that permits it to run "),n("em",[e._v("nodes")]),e._v(".\nSee "),n("RouterLink",{attrs:{to:"/operators/architecture-overview.html#entities-and-key-management"}},[e._v("Entities and Key Management")]),e._v(" for further information.")],1)]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Node")]),e._v(": This is your computer (VM, bare metal, container, etc.), running\nthe Oasis Network software. It’s identified by another public key, separate\nfrom your entity public key. On the Oasis Network, each node is owned by a\nsingle entity. For each node that an entity registers on the network, the\nentity must have a certain additional token amount "),n("em",[e._v("staked")]),e._v(".")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Staking")]),e._v(": A token amount "),n("em",[e._v("staked")]),e._v(" with an entity is separate from the\nentity’s token balance and contributes to the entity’s eligibility to run\nnodes. Entities can "),n("em",[e._v("stake")]),e._v(" tokens with themselves or with other entities,\nthe latter is referred to as "),n("em",[e._v("delegation")]),e._v(". The network keeps track of which\nentities delegated what proportion of an entity’s staked token amount.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Consensus committee")]),e._v(": The consensus committee is a group of nodes that the\nnetwork elects to maintain its state by executing a Byzantine-fault-tolerant\n(BFT) consensus protocol.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Validator")]),e._v(": A validator is a node participating in the consensus\ncommittee. To be eligible to have your node selected as a validator, your\nentity must be within the Top K staked entities. Entities with a node serving\nas a validator receive "),n("em",[e._v("staking rewards")]),e._v(", which are shared with delegators,\nas well as "),n("em",[e._v("transaction fees")]),e._v(", which are deposited only into their own\nwallet. Each validator has a private key that is used for signing operations\nduring block production and a public key, or Node Identity, used for\nidentification. See "),n("RouterLink",{attrs:{to:"/operators/architecture-overview.html#entities-and-key-management"}},[e._v("Entities and Key Management")]),e._v(" for further information.")],1)]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Top K")]),e._v(": The top-ranked entities by token amount staked. These entities’\nnodes are eligible to participate in the consensus committee and receive\nstaking rewards.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Transaction fee")]),e._v(": The reward that a validator receives from processing a\ntransaction that runs on the network (separate from staking rewards).")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Commission rate")]),e._v(": The fee that a validator chooses to charge to\ndelegators.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Unbonding period")]),e._v(": A period of time when a validator or delegator wants to\nstop staking tokens, but cannot move them. During this waiting period, tokens\ndo not accrue staking rewards but cannot be withdrawn.")])])]),e._v(" "),n("hr"),e._v(" "),n("p",[e._v("For more information and for the latest updates, please visit our website.\nWe also invite you to join our Slack community to share your feedback and help\nshape the future of our network.")]),e._v(" "),n("p",[e._v("If you’re new to Oasis, here are some resources you may find useful:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.oasis-protocol.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oasis Foundation Website"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.oasis.dev/operators/joining-the-testnet.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testnet Documentation"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://docs.oasis.dev/operators/overview.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Operator Documentation"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.github.com/oasislabs",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/oasis-protocol-project",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blog"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);