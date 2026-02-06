---
title: "Tools"
description: "Web3 tools and platforms used in Regenerant Catalunya"
showSidebars: false
---

# Tools

Regenerant Catalunya utilizes a suite of Web3 tools designed to support transparent, decentralized governance and impact tracking. These tools enable projects and networks to manage resources, document impact, and make collective decisions.

---

## Required Tools (Phase 1)

### Karma GAP

**What it is:** On-chain activity and impact reporting platform that enables grantees to build verifiable reputation through transparent documentation of their work and outcomes.

[[Karma GAP]] (Grantee Accountability and Reputation Protocol) creates a living, public "project resume" that makes impact visible and verifiable on-chain. Projects document their activities, achievements, and outcomes, building a transparent record that can be evaluated by funders and the community.

**Purpose:** Create a living, public "project resume" making impact visible and verifiable

**Key Features:**

- Transparent activity logging with on-chain records
- Impact documentation aligned with Common Approach frameworks
- On-chain reputation building through verified contributions
- Public project profiles showcasing work and outcomes
- Verifiable accountability for grant recipients
- Integration with Gitcoin and Octant ecosystems

**Use cases:**

- Documenting project activities and milestones
- Building on-chain reputation for future funding
- Transparent impact reporting to funders
- Creating verifiable project histories
- Enabling community evaluation of work

**Interoperability:** [[Karma GAP]] integrates with Gitcoin Grants and Octant funding mechanisms, allowing projects to build reputation that can influence future grant allocations. Impact data documented in Karma can be referenced by other tools like [[Hypercerts]] for creating verifiable impact credentials.

**Website:** [Karma GAP Documentation](https://discuss.octant.app/t/karma-gap-grantee-accountability-and-reputation-protocol/232)

**Training:** Provided in Workshop #2 (December 8-14, 2025)

**Support:** Office hours December 4-19, 2025

---

### Web3 Wallets on Celo

Secure wallets for receiving and managing funds on the Celo blockchain. These wallets enable projects to receive grants, manage treasury funds, and interact with Celo-based dApps and DeFi protocols.

**Recommended (Social Recovery):**

- **[[Valora]]** — [valoraapp.com](https://valoraapp.com/)
  - Mobile-first wallet designed for Celo
  - Social recovery mechanism to prevent key loss
  - Built-in support for Celo stablecoins (cUSD, cEUR)
  - User-friendly interface for non-technical users
  - Available on iOS and Android

- **[[Minipay]]** — Stablecoin-focused wallet with social recovery
  - Integrated into Opera Mini browser
  - Built specifically for Celo stablecoins
  - Social recovery via Google account
  - Low transaction fees optimized for stablecoin transfers
  - Currently available in select regions (e.g., Kenya)

**Also Supported:**

- **Prosperity Pass** — Social recovery option
  - Celo-native wallet with social recovery features
  - Designed for financial inclusion use cases

- **MetaMask** — [metamask.io](https://metamask.io/)
  - Browser extension and mobile app
  - Supports Celo network (requires manual network configuration)
  - Widely used multi-chain wallet
  - Extensive dApp ecosystem compatibility

- **Zerion** — [zerion.io](https://zerion.io/)
  - Multi-chain wallet supporting Celo
  - Portfolio tracking across multiple chains
  - DeFi dashboard integration
  - Available as browser extension and mobile app

- **Rainbow** — [rainbow.me](https://rainbow.me/)
  - User-friendly wallet interface
  - Supports Celo network
  - Mobile-first design
  - Available on iOS and Android

**Interoperability:** All Celo-compatible wallets can interact with the same Celo dApps, DeFi protocols, and smart contracts. Wallets can connect to tools like [[Safe]] multisigs for treasury management, [[Gardens]] for governance participation, and other Celo-based applications. Social recovery wallets ([[Valora]], [[Minipay]]) reduce the risk of fund loss, making them ideal for projects managing grant funds.

**Training:** Provided in Workshop #1 (November 17-21, 2025)

**Security:** We provide comprehensive support for wallet setup, security, backups, and practical use. Off-ramp support is also provided (without legal liabilities).

---

## Network-Level Tools (Phase 2)

### Gardens

**What it is:** Conviction voting platform for community funding and governance that enables decentralized decision-making through time-weighted voting.

[[Gardens]] is a governance platform built by 1Hive that uses conviction voting—a mechanism where voting power increases the longer someone holds their position. This creates more thoughtful, long-term funding decisions compared to simple majority voting, as it requires sustained support rather than brief majorities.

**Purpose:** Enable communities to make collective funding and governance decisions through transparent, on-chain voting mechanisms

**Key Features:**

- Conviction voting mechanism (time-weighted voting power)
- Proposal creation and voting interface
- Transparent on-chain decision records
- Integration with token-based governance
- Support for multiple networks including Celo
- Template system for projects and volunteers

**Use cases:**

- Community funding decisions for network resources
- Bounties and rewards distribution for contributors
- Template creation for projects and volunteers
- Collective resource allocation
- Governance proposals and voting
- Long-term project funding commitments

**Interoperability:** [[Gardens]] can integrate with [[Safe]] multisigs to execute approved funding proposals, with [[Sarafu Network]] for local currency-based governance, and with [[Karma GAP]] to document governance decisions and their outcomes. [[Gardens]] works with any ERC-20 token, making it compatible with Celo's native assets.

**Website:** [gardens.1hive.org](https://gardens.1hive.org/)

**Training:** Covered in Workshop #4 (January 2026)

---

### Safe (Multisigs)

**What it is:** Multi-signature wallet for secure, transparent fund management that requires multiple approvals before transactions can be executed.

[[Safe]] (formerly Gnosis Safe) is a smart contract wallet that enables secure, transparent treasury management. Instead of a single private key controlling funds, [[Safe]] requires multiple signers to approve transactions, reducing the risk of fund loss or misuse. All transactions are recorded on-chain for full transparency.

**Purpose:** Provide secure, transparent fund management requiring multiple approvals for all transactions

**Key Features:**

- Multi-signature transaction approval (configurable threshold)
- On-chain transaction history and transparency
- Support for multiple networks including Celo
- Integration with governance tools and dApps
- Mobile and web interfaces
- Programmable transaction execution

**Use cases:**

- Network treasury management with shared control
- Transparent fund disbursements requiring multiple approvals
- Requiring multiple signers for security
- On-chain transaction records for accountability
- Integration with governance platforms like [[Gardens]]
- Coordinated fund management across team members

**Interoperability:** [[Safe]] multisigs integrate seamlessly with [[Gardens]] for executing approved funding proposals, with individual wallets for receiving disbursements, and with other Celo dApps for DeFi operations. [[Safe]] can hold Celo native assets (CELO, cUSD, cEUR) and any Celo-based tokens. The program treasury address can receive funds from various sources and disburse them according to governance decisions.

**Website:** [safe.global](https://safe.global/)

**Program Treasury:** 0x91889ea97FeD05180fb5A70cB9570630f3C0Be77 (on Celo)

**Training:** Covered in Workshop #4 (January 2026)

---

### Sarafu Network

**What it is:** Local currency and commitment pooling platform that enables communities to create their own digital currencies and pool commitments for collective projects.

[[Sarafu Network]], developed by Grassroots Economics, provides tools for communities to establish local currency systems that strengthen local economic flows. The platform enables commitment pooling, where community members can commit resources (time, goods, services) to collective projects before funds are needed, creating a more resilient local economy.

**Purpose:** Strengthen local economic flows and enable community resource sharing through digital local currencies and commitment pooling

**Key Features:**

- Digital local currency creation and management
- Commitment pooling for collective projects
- Community-based economic coordination
- Mobile-friendly interface
- Integration with Celo blockchain
- Transparent transaction records

**Use cases:**

- Creating local currency systems for community economic resilience
- Commitment pooling for collective projects before funding
- Strengthening local economic flows and reducing dependency on external currency
- Community resource sharing and mutual support
- Coordinating local economic activities
- Building community economic networks

**Interoperability:** [[Sarafu Network]] can integrate with [[Gardens]] for governance of local currency parameters, with [[Safe]] multisigs for managing community treasuries, and with [[Cycles]] for clearing between different local currency networks. Local currencies can be used within [[Gardens]] for community funding decisions, creating a complete local economic governance system.

**Website:** [sarafu.network](https://sarafu.network/)

**Training:** Covered in Workshop #4 (January 2026)

---

### Cycles

**What it is:** Open clearing protocol for mutual credit and circular economy that enables value exchange coordination between network members without requiring external currency.

[[Cycles]] provides a protocol for mutual credit systems and circular economy flows, allowing network members to exchange value through credit relationships rather than requiring external currency. The protocol enables clearing between different participants, creating resilient local and regional economic networks.

**Purpose:** Enable mutual credit systems and circular economy flows through decentralized clearing protocols

**Key Features:**

- Mutual credit system infrastructure
- Clearing protocol for value exchange
- Circular economy flow coordination
- Network-based economic coordination
- Open protocol for interoperability
- Support for multiple value types

**Use cases:**

- Creating circular economy flows within networks
- Mutual credit systems for local economic resilience
- Clearing between network members without external currency
- Value exchange coordination across projects and communities
- Building resilient economic networks
- Coordinating resource flows in regenerative systems

**Interoperability:** [[Cycles]] can integrate with [[Sarafu Network]] for clearing between different local currencies, with [[Gardens]] for governance of credit parameters, and with [[Safe]] multisigs for managing network reserves. The protocol enables value exchange coordination across the Regenerant Catalunya network, allowing projects to exchange resources and services efficiently.

**Website:** [cycles.so](https://www.cycles.so/)

**Note:** The Cycles domain may be inactive. Alternative sources and documentation may be available through community channels or GitHub repositories.

**Training:** Covered in Workshop #4 (January 2026)

---

## Optional Pilot Tools

Projects can opt-in to pilot these tools for enhanced capabilities. These tools provide advanced features for impact tracking, verification, and specialized use cases in regenerative work.

---

### Silvi

**What it is:** Tree planting and stewardship dMRV (digital Measurement, Reporting, and Verification) platform that enables transparent tracking of reforestation projects from planting to maturity.

[[Silvi]] is a Web3 platform that enables projects to document tree planting and stewardship activities on-chain, creating verifiable records of reforestation impact. The platform supports projects ranging from large-scale reforestation initiatives to individual backyard tree planting, with compensation mechanisms for verified stewardship activities.

**Purpose:** Enable transparent, verifiable tracking of tree planting and stewardship activities with on-chain documentation

**Key Features:**

- Tree planting and stewardship event logging
- Smart contract-based compensation for verified activities
- Integration with Ecological Benefits Framework (EBF) for impact reporting
- Support for various project scales (large-scale to individual)
- Plant-to-earn mechanisms
- On-chain verification of tree growth and stewardship

**Use cases:**

- Documenting reforestation projects with verifiable impact
- Tracking individual tree stewardship from planting to maturity
- Creating transparent records for carbon offset projects
- Enabling plant-to-earn campaigns for community engagement
- Verifying tree planting activities for funding and reporting
- Building on-chain reputation for reforestation work

**Interoperability:** [[Silvi]] integrates with Opera [[Minipay]] for plant-to-earn campaigns, uses the Ecological Benefits Framework (EBF) for standardized impact reporting, and can work with [[Hypercerts]] to create verifiable impact credentials for reforestation projects. [[Silvi]] data can complement [[Karma GAP]] documentation by providing specific tree planting metrics and verification.

**Potential Use Cases:** Projects can combine [[Silvi]] with [[Hypercerts]] to create verifiable impact credentials for reforestation work, integrate with [[Karma GAP]] to document comprehensive environmental impact, and use [[Silvi]] data to support funding applications and impact reporting.

**Website:** [silvi.earth](https://www.silvi.earth/)

**Documentation:** Available through Silvi App and Treekipedia resources

---

### Hypercerts

**What it is:** Impact credential system that creates verifiable, tradable certificates representing positive impacts using blockchain technology.

[[Hypercerts]] are semi-fungible tokens (ERC-1155) that represent verifiable impact claims. They enable projects to create transparent, immutable records of their contributions to public goods, allowing funders to purchase fractions of hypercerts to claim a share of the represented impact. This creates a market for positive externalities and enables better coordination and funding of impactful initiatives.

**Purpose:** Create verifiable, tradable impact credentials that enable transparent funding and recognition of positive contributions

**Key Features:**

- Verifiable impact credential creation
- Fractional ownership and trading of impact claims
- Immutable on-chain records of impact
- Integration with various impact measurement frameworks
- Support for multiple impact types (environmental, social, etc.)
- Transparent impact markets

**Use cases:**

- Creating verifiable impact credentials for project outcomes
- Enabling impact-based funding and investment
- Documenting contributions to public goods
- Building transparent impact markets
- Verifying environmental and social impact claims
- Enabling fractional ownership of impact

**Interoperability:** [[Hypercerts]] can integrate with [[Karma GAP]] to create verifiable credentials from documented activities, with [[Silvi]] to certify reforestation impact, and with [[Gainforest]] for forest conservation credentials. [[Hypercerts]] can be used alongside [[Gardens]] for impact-based funding decisions and with [[Safe]] multisigs for managing impact credential treasuries.

**Potential Use Cases:** Projects can mint hypercerts based on [[Karma GAP]] documentation to create verifiable impact credentials, combine [[Silvi]] tree planting data with [[Hypercerts]] for certified reforestation impact, and use [[Hypercerts]] with [[Gardens]] to enable impact-based community funding decisions.

**Website:** [hypercerts.org](https://www.hypercerts.org/)

**Documentation:** Available through official documentation portal

---

### Ecocerts

**What it is:** Impact credential system focused on environmental certifications, providing verifiable credentials for ecological and sustainability achievements.

[[Ecocerts]] (also referred to as EcoCerts or environmental hypercerts) are impact credentials specifically designed for environmental and sustainability projects. They provide a mechanism for creating verifiable, tradable certificates representing positive environmental impacts, enabling transparent recognition and funding of ecological initiatives.

**Purpose:** Create verifiable environmental impact credentials for sustainability and ecological projects

**Key Features:**

- Environmental impact credential creation
- Verification mechanisms for ecological claims
- Integration with environmental measurement frameworks
- Support for various environmental impact types
- Transparent credential markets
- Blockchain-based verification

**Use cases:**

- Certifying environmental restoration projects
- Creating verifiable credentials for sustainability achievements
- Documenting carbon sequestration and offset activities
- Verifying biodiversity conservation efforts
- Enabling environmental impact-based funding
- Building transparent environmental impact markets

**Interoperability:** [[Ecocerts]] can integrate with [[Silvi]] for tree planting certifications, with [[Gainforest]] for forest conservation credentials, and with [[Karma GAP]] to create verifiable environmental impact records. [[Ecocerts]] can work alongside [[Hypercerts]] for comprehensive impact credential systems, and integrate with [[Gardens]] for environmental impact-based governance decisions.

**Potential Use Cases:** Projects can use [[Ecocerts]] with [[Silvi]] to create certified reforestation credentials, combine with [[Gainforest]] for verified forest conservation impact, and integrate with [[Karma GAP]] to build comprehensive environmental impact portfolios.

**Website:** Documentation and resources available through environmental hypercert platforms and community channels

**Note:** Ecocerts may refer to environmental-specific implementations of hypercert technology or related environmental credential systems.

---

### Gainforest

**What it is:** Decentralized fund using artificial intelligence to measure and reward sustainable nature stewardship, enabling trustless donations to Indigenous communities and forest conservation projects.

[[Gainforest]] is an open platform that empowers sustainable nature stewardship by unifying accessible and automated monitoring, auditable and decentralized payments, and stakeholder engagement. Private stakeholders can pledge funds to Indigenous communities and forest conservation projects through smart contracts. The platform automatically releases donations when monitored environmental milestones are achieved, using AI-powered oracles that leverage satellite imagery, drone data, and field data to detect ecological changes. [[Gainforest]] issues dynamic impact certificates (NFTrees™) that continuously update with conservation area data, allowing donors to track impact over time.

**Purpose:** Enable frictionless, transparent conservation funding through AI-powered monitoring and automated milestone-based payments

**Key Features:**

- Decentralized green fund with smart contracts for conservation projects
- AI-powered oracles using machine learning, satellite imagery, and drone data
- Automated fund releases upon verified environmental milestones
- Dynamic impact certificates (NFTrees™) that continuously update
- Token-based incentives for stakeholder engagement
- Transparent, real-time verification of conservation efforts
- Focus on Indigenous communities and forest conservation projects

**Use cases:**

- Pledging funds to Indigenous communities and forest conservation projects
- Automated funding based on AI-verified environmental milestones
- Tracking conservation impact through dynamic NFTrees certificates
- Engaging stakeholders with token-based incentives
- Building transparent conservation funding mechanisms
- Real-time monitoring and verification of conservation outcomes

**Interoperability:** [[Gainforest]]'s decentralized fund and smart contracts can integrate with other blockchain-based conservation initiatives, enhancing transparency and efficiency in environmental funding. The platform can work with [[Hypercerts]]/[[Ecocerts]] for impact credential systems, with [[Karma GAP]] to document conservation activities, and with [[Gardens]] for community governance of conservation funding decisions. [[Gainforest]]'s AI monitoring data can complement other MRV tools like [[Silvi]] for comprehensive conservation tracking.

**Potential Use Cases:** Projects can use [[Gainforest]] for automated milestone-based funding of forest conservation work, integrate [[Gainforest]]'s NFTrees with [[Hypercerts]] for comprehensive impact credentialing, and combine [[Gainforest]]'s AI monitoring with [[Karma GAP]] for detailed conservation impact documentation.

**Website:** [gainforest.earth](https://gainforest.earth/)

**Documentation:** Available through [docs.gainforest.earth](https://docs.gainforest.earth/)

---

### Kokonut Network

**What it is:** Syntropic agroforestry design platform that uses blockchain technology to support regenerative agriculture and community-based farming initiatives.

[[Kokonut Network]] is a distributed network cooperative focused on syntropic agroforestry—a regenerative farming approach that mimics natural forest ecosystems. The platform enables communities to establish and manage agroforestry projects, democratizing investment in real-world regenerative agriculture while promoting biodiversity and soil restoration.

**Purpose:** Support syntropic agroforestry projects through blockchain-based coordination and funding mechanisms

**Key Features:**

- Syntropic agroforestry project design and management
- Blockchain-based project coordination
- Community investment mechanisms
- Regenerative agriculture documentation
- Biodiversity and soil restoration tracking
- Transparent project governance

**Use cases:**

- Designing and managing syntropic agroforestry systems
- Coordinating community-based regenerative agriculture projects
- Documenting regenerative farming practices and outcomes
- Enabling transparent investment in agroforestry projects
- Building regenerative agriculture networks
- Tracking biodiversity and soil health improvements

**Interoperability:** [[Kokonut Network]] can integrate with [[Karma GAP]] to document agroforestry activities and outcomes, with [[Hypercerts]]/[[Ecocerts]] to create verifiable regenerative agriculture credentials, and with [[Gardens]] for community governance of agroforestry projects. The platform can work with [[Sarafu Network]] for local economic coordination around regenerative agriculture.

**Potential Use Cases:** Projects can combine [[Kokonut Network]] agroforestry design with [[Silvi]] tree planting for comprehensive forest restoration, use [[Kokonut Network]] data with [[Hypercerts]] to create certified regenerative agriculture credentials, and integrate with [[Karma GAP]] for detailed agroforestry impact documentation.

**Website:** [kokonut.network](https://kokonut.network/)

**Note:** The Kokonut Network website may be temporarily unavailable. Alternative documentation may be available through community channels or GitHub repositories.

---

### Learn More

- [Resources](/resources) - Complete tool documentation and guides
- [Project Guidebook](/program/project-guidebook) - Detailed setup instructions
- [Network Guidebook](/program/network-guidebook) - Network-level tool usage
- [Program Timeline](/program/timeline) - Workshop schedule
