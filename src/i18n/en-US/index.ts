export default {
  menu: {
    portfolio: 'Portfolio',
    assets: 'Assets',
    stats: 'Stats',
    validators: 'Validators',
    proposals: 'Proposals',
    transactions: 'Transactions',
    bridge: 'Bridge'
  },
  general: {
    sendTo: 'send to',
    delegateTo: 'Delegate to',
    delegateFrom: 'Delegate from',
    delegateAmount: 'Amount to delegate',
    undelegateTo: 'Undelegate to',
    undelegateFrom: 'Undelegate from',
    undelegateAmount: 'Amount to undelegate',
    redelegateTo: 'Redelegate to',
    redelegateFrom: 'Redelegate from',
    redelegateAmount: 'Amount to redelegate',
    to: 'To',
    from: 'From',
    addressTo: 'To address',
    addressFrom: 'From address',
    amount: 'amount',
    publicAddress: 'Public address',
    address: 'address',
    total: 'total',
    delegated: 'Delegated ({ denom })',
    available: 'Available ({ denom })',
    availableTable: 'Available',
    availableCoins: 'Available: {amount}',
    rewards: 'Rewards ({ denom })',
    name: 'Name',
    undelegated: 'Undelegated ({ denom })',
    remainingTime: 'Remaining Time',
    price: 'price',
    totalAssets: 'total assets',
    totalStaked: 'total staked',
    circulatingSupply: 'circulating supply',
    totalSupply: 'total supply',
    communityPool: 'community pool',
    marketCap: 'market cap',
    totalVolume: 'total volume',
    apr: 'apr',
    tokenBonded: 'token bonded',
    annualInflation: 'annual inflation',
    active: 'active',
    all: 'all',
    deposit: 'deposit',
    voting: 'voting',
    passed: 'passed',
    rejected: 'rejected',
    status: 'status',
    votingPower: 'voting power',
    voted: 'voted',
    quorum: 'quorum',
    soon: 'soon',
    yes: 'yes',
    no: 'no',
    noWithVeto: 'no with veto',
    abstain: 'abstain',
    created: 'created',
    depositperiodends: 'deposit period ends',
    votingperiodstarts: 'voting period starts',
    votingperiodends: 'voting period ends',
    selfStake: 'self stake',
    stakers: 'stakers',
    myRewards: 'my rewards',
    myDelegation: 'my delegation',
    disclaimer: 'Use this software at your own risk, never enter your seed phrase into untrusted software.',
    disclaimerFull: 'Use this software at your own risk, never enter your seed phrase into untrusted software. Beware of phishing scams and spoof sites.',
    disclaimerBridge: 'This is a newly developed tool and Bitsong assumes no responsibility for bugs or token losses due to inappropriate use of it.\n\nBefore executing transactions with a large amount of tokens it is highly recommended to test the tool with smaller amounts.',
    risk: 'I have read the alert and understood the risks',
    note: 'Note',
    typology: 'Typology',
    initialDeposit: 'Initial deposit',
    textProposal: 'Text Proposal',
    draft: 'draft',
    txhash: 'hash',
    time: 'time',
    receiverAddress: 'receiver address',
    coingecko: 'Price Data by CoinGecko',
    nextRefresh: 'Next refresh in {time} seconds'
  },
  actions: {
    receive: 'Receive',
    send: 'Send',
    claim: 'Claim',
    claimRewards: 'Claim Rewards',
    delegate: 'delegate',
    undelegate: 'undelegate',
    redelegate: 'redelegate',
    vote: 'vote',
    copyLink: 'Copy link',
    copy: 'copy',
    cancel: 'cancel',
    max: 'max',
    showAdvanced: 'show advanced',
    hideAdvanced: 'hide advanced',
    close: 'close',
    signout: 'signout',
    explore: 'explore',
    transactions: 'See your transaction',
    back: 'back',
    deposit: 'deposit',
    approve: 'approve',
    proceed: 'proceed',
    createNew: 'create new',
    publish: 'publish',
    saveDraft: 'save draft',
    connectWallet: 'connect metamask',
    pendingTx: 'Pending Tx'
  },
  errors: {
    title: 'Error!',
    required: 'Field is required',
    invalidAddress: 'Invalid address',
    emptyValidators: 'No validators available',
    emptyBalances: 'No assets available',
    nan: 'Amount must be a decimal value',
    gtnZero: 'Amount must be a greater then zero',
    balanceMissing: 'You don\'t have enough coins',
    negative: 'Amount must be greater then zero',
    general: 'Something went wrong, please try again later',
    minimumAmount: 'Minimum amount required {amount} {symbol}'
  },
  success: {
    title: 'Success!',
    withdraw: 'Successful withdrawal!',
    withdrawDescription: 'You have successfully withdrawn your rewards.',
    send: 'You have successfully send your {symbol}s.',
    copy: 'Text copied to the clipboard',
    delegateTitle: 'Successfully delegate',
    delegateDescription: 'You have successfully delegated your {symbol}s.',
    undelegateTitle: 'Successfully undelegated',
    unelegateDescription: 'You have successfully undelegated your {symbol}s.',
    redelegateTitle: 'Successfully redelegated',
    redelegateDescription: 'You have successfully redelegated your {symbol}s.',
    depositDescription: 'You have successfully deposited your {symbol}s.',
    proposalDescription: 'Proposal submission success!',
    transferDescription: 'You have successfully transferred your {symbol}s.'
  },
  portfolio: {
    balanceTitle: 'Your Balances',
    undelegatedTitle: 'Undelegated',
    delegationsTitle: 'Your Delegations',
    emptyValidators: 'No validators in your portfolio.\nHead over the validator list to start staking.',
    validatorList: 'Validator List'
  },
  proposals: {
    empty: 'No voting proposals at this moment.\nCome back in days to see what’s changed.',
    allProposals: 'see all proposals'
  },
  assets: {
    ibcTokens: 'IBC Tokens',
    emptyIbcTokens: 'No IBC Tokens in your portfolio.'
  },
  stats: {
    title: 'Chain Stats',
  },
  validators: {
    filterActive: 'active',
    search: 'Search validator'
  },
  validator: {
    operatorAddress: 'operator address',
    accountAddress: 'account address',
    uptime: 'uptime',
    currentCommissionRate: 'current commission rate',
    maxCommissionRate: 'max commission rate',
    maxDailyCommissionChange: 'max daily commission change',
    lastCommissionChange: 'last commission change',
    ago: '{time} ago'
  },
  proposal: {
    vote: 'Vote',
    timeline: 'Timeline',
    description: 'Description'
  },
  proposalSubmit: {
    title: 'Create New Proposals',
  },
  login: {
    title: 'welcome',
    explore: 'Explore with any address',
    keplr: 'Keplr Browser Extension',
    extension: 'Bitsong Browser Extension',
    mobile: 'Ledger Bitsong App'
  },
  disclaimer: {
    title: 'Before you begin using the wallet',
    description: 'BitSong is a decentralized blockchain ecosystem built for the music industry.\nThe BitSong blockchain and the BitSong wallet are based on public, open-source software. Your use of the BitSong wallet involves various risks, including, but not limited to, financial exposure to the volatility of cryptocurrencies and/or potential misuse of wallet credentials. Blockchain transactions are irreversible and BitSong accepts no liability for any transaction resulting from the use of this wallet. Before using the BitSong wallet, please ensure that you have read and understood all relevant documentation and are satisfied that you accept the risks of investing in digital assets.',
  }
};
