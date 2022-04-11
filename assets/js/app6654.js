abi = [{
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'constructor'
}, {
    "\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'grantor',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'beneficiary',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'amount',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'onGrant',
    "\x74\x79\x70\x65": 'event'
}, {
    "\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'investor',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'amount',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'onInvest',
    "\x74\x79\x70\x65": 'event'
}, {
    "\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x64\x65\x78\x65\x64": true,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'previousOwner',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x64\x65\x78\x65\x64": true,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'newOwner',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'onOwnershipTransferred',
    "\x74\x79\x70\x65": 'event'
}, {
    "\x61\x6E\x6F\x6E\x79\x6D\x6F\x75\x73": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'investor',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x64\x65\x78\x65\x64": false,
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'amount',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'onWithdraw',
    "\x74\x79\x70\x65": 'event'
}, {
    "\x70\x61\x79\x61\x62\x6C\x65": true,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'payable',
    "\x74\x79\x70\x65": 'fallback'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'DEVELOPER_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'MARKETING_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'MINIMUM',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERENCE_LEVEL1_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERENCE_LEVEL2_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERENCE_LEVEL3_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERENCE_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERENCE_SELF_RATE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'REFERRER_CODE',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'address2UID',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'checkIn',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getBalance',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getCurrentPlans',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getDeveloperAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '_uid',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'getInvestmentPlanByUID',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'bool[]',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'bool[]'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '_uid',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'getInvestorInfoByUID',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p1',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p2',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p3',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p4',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p5',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p6',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'p7',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": 'p8',
        "\x74\x79\x70\x65": 'uint256[]'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256[]',
        "\x6E\x61\x6D\x65": 'p9',
        "\x74\x79\x70\x65": 'uint256[]'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getMarketingAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getReferenceAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'getTotalInvestments',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '_addr',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'getUIDByAddress',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'addr',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '_planId',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'grant',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": true,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'payable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '_referrerCode',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '_planId',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'invest',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": true,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'payable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'latestReferrerCode',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'owner',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address payable',
        "\x6E\x61\x6D\x65": '_newDeveloperAccount',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'setDeveloperAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address payable',
        "\x6E\x61\x6D\x65": '_newMarketingAccount',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'setMarketingAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address payable',
        "\x6E\x61\x6D\x65": '_newReferenceAccount',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'setReferenceAccount',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": '_newOwner',
        "\x74\x79\x70\x65": 'address'
    }],
    "\x6E\x61\x6D\x65": 'transferOwnership',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'nonpayable',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": true,
    "\x69\x6E\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": '',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x6E\x61\x6D\x65": 'uid2Investor',
    "\x6F\x75\x74\x70\x75\x74\x73": [{
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'address',
        "\x6E\x61\x6D\x65": 'addr',
        "\x74\x79\x70\x65": 'address'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'referrerEarnings',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'availableReferrerEarnings',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'referrer',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'planCount',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'level1RefCount',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'level2RefCount',
        "\x74\x79\x70\x65": 'uint256'
    }, {
        "\x69\x6E\x74\x65\x72\x6E\x61\x6C\x54\x79\x70\x65": 'uint256',
        "\x6E\x61\x6D\x65": 'level3RefCount',
        "\x74\x79\x70\x65": 'uint256'
    }],
    "\x70\x61\x79\x61\x62\x6C\x65": false,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'view',
    "\x74\x79\x70\x65": 'function'
}, {
    "\x63\x6F\x6E\x73\x74\x61\x6E\x74": false,
    "\x69\x6E\x70\x75\x74\x73": [],
    "\x6E\x61\x6D\x65": 'withdraw',
    "\x6F\x75\x74\x70\x75\x74\x73": [],
    "\x70\x61\x79\x61\x62\x6C\x65": true,
    "\x73\x74\x61\x74\x65\x4D\x75\x74\x61\x62\x69\x6C\x69\x74\x79": 'payable',
    "\x74\x79\x70\x65": 'function'
}];
var contractAddress = '0x0c5eB67b59dfb152D492751d75426B0C59e55c21';
var prev_account;
var ref = 0;
var account = '0x0000000000000000000000000000000000000000';
var UID = 0;
var oldInvestment;
var plans = ['4.5% Daily ROI', '50.5% Daily ROI', '20.8% Daily ROI', '11% Daily ROI'];
var plans_rus = ['4.5% \u0432 \u0434\u0435\u043D\u044C', '50.5% \u0432 \u0434\u0435\u043D\u044C', '20.8% \u0432 \u0434\u0435\u043D\u044C', '11% \u0432 \u0434\u0435\u043D\u044C'];
var plans_cn = ['\u6BCF\u5929\4.5%', '\u6BCF\u5929\50.5%', '\u6BCF\u5929\20.8%', '\u6BCF\u5929\11%'];

function main() {
    var _0x92e6xb = '';
    if (localStorage['getItem']('ref')) {
        _0x92e6xb = localStorage['getItem']('ref')
    };
    if (_0x92e6xb > 0) {
        ref = _0x92e6xb
    } else {
        _0x92e6xb = getQueryVariable('ref');
        if (_0x92e6xb > 0) {
            localStorage['setItem']('ref', _0x92e6xb);
            ref = _0x92e6xb
        } else {
            ref = 0
        }
    }
}
main();

function invest(_0x92e6xd) {
    if (!web3['eth']['accounts'][0]) {
        return
    };
    _0x92e6xd = Number(_0x92e6xd);
    if (_0x92e6xd >= 0 && _0x92e6xd <= 3) {
        var _0x92e6xe = Number($('#trxForPlan' + _0x92e6xd)['val']()) * 1e18;
        if (_0x92e6xe > 0) {
            var _0x92e6xf = web3['eth']['contract'](abi);
            var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
            var _0x92e6x11 = _0x92e6x10['invest']['getData'](ref, _0x92e6xd);
            web3['eth']['sendTransaction']({
                to: contractAddress,
                from: web3['eth']['accounts'][0],
                data: _0x92e6x11,
                value: _0x92e6xe
            }, function(_0x92e6x12, _0x92e6x13) {
                if (!_0x92e6x12) {
                    $('#trxForPlan' + _0x92e6xd)['val'](inProcessing);
                    setTimeout(function() {
                        $('#trxForPlan' + _0x92e6xd)['val']('0');
                        $('html, body')['animate']({
                            scrollTop: $('#widget-2')['offset']()['top']
                        }, 1000)
                    }, 5000)
                } else {
                    console['log']('error :(')
                }
            })
        } else {
            $('#trxForPlan' + _0x92e6xd)['val'](error1);
            setTimeout(function() {
                $('#trxForPlan' + _0x92e6xd)['val']('0')
            }, 5000)
        }
    }
}

function withdraw() {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['withdraw']['getData']();
    web3['eth']['sendTransaction']({
        to: contractAddress,
        from: web3['eth']['accounts'][0],
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            $('#withdrawButton')['html'](inProcessing);
            setTimeout(function() {
                $('#withdrawButton')['html']('WITHDRAW')
            }, 5000)
        } else {
            console['log']('error :(')
        }
    })
}

function prettyNum(_0x92e6x16) {
    return _0x92e6x16;
    var _0x92e6x17 = _0x92e6x16.toString();
    var _0x92e6x18 = _0x92e6x17['substr'](_0x92e6x17['length'] - 3, 3);
    var _0x92e6x19 = _0x92e6x17['substr'](_0x92e6x17['length'] - 6, 3);
    var _0x92e6x1a;
    if (_0x92e6x17['length'] == 7) {
        _0x92e6x1a = _0x92e6x17['substr'](0, 1)
    };
    if (_0x92e6x17['length'] == 8) {
        _0x92e6x1a = _0x92e6x17['substr'](0, 2)
    };
    var _0x92e6x13 = '';
    if (_0x92e6x1a) {
        _0x92e6x13 += _0x92e6x1a + ','
    };
    if (_0x92e6x19) {
        _0x92e6x13 += _0x92e6x19 + ','
    };
    _0x92e6x13 += _0x92e6x18;
    return _0x92e6x13
}

function getQueryVariable(_0x92e6x1c) {
    var _0x92e6x1d = window['location']['search']['substring'](1);
    var _0x92e6x1e = _0x92e6x1d['split']('&');
    for (var _0x92e6x1f = 0; _0x92e6x1f < _0x92e6x1e['length']; _0x92e6x1f++) {
        var _0x92e6x20 = _0x92e6x1e[_0x92e6x1f]['split']('=');
        if (_0x92e6x20[0] == _0x92e6x1c) {
            return _0x92e6x20[1]
        }
    };
    return (false)
}

function copyRef() {
    var _0x92e6x22 = document['getElementById']('yourRefLink');
    var _0x92e6x23 = document['createRange']();
    _0x92e6x23['selectNode'](_0x92e6x22);
    window['getSelection']()['addRange'](_0x92e6x23);
    try {
        document['execCommand']('copy');
        document.querySelector(".widget-4 .copy-ref .fas").classList.toggle("active");
        setTimeout(function() {
            document.querySelector(".widget-4 .copy-ref .fas").classList.toggle("active");
        }, 3000)
    } catch (err) {
        console.log(err)
        console['log']('Can`t copy')
    };
    window['getSelection']()['removeAllRanges']()
}

function parseTimestamp(_0x92e6x25) {
    var _0x92e6x26 = new Date(Number(_0x92e6x25) * 1000);
    var _0x92e6x27 = _0x92e6x26['getDate']();
    var _0x92e6x28 = _0x92e6x26['getMonth']() + 1;
    var _0x92e6x29 = _0x92e6x26['getFullYear']();
    var _0x92e6x2a = _0x92e6x26['getHours']();
    var _0x92e6x2b = _0x92e6x26['getMinutes']();
    if (_0x92e6x27 < 10) {
        _0x92e6x27 = '0' + _0x92e6x27
    };
    if (_0x92e6x28 < 10) {
        _0x92e6x28 = '0' + _0x92e6x28
    };
    if (_0x92e6x2a < 10) {
        _0x92e6x2a = '0' + _0x92e6x2a
    };
    if (_0x92e6x2b < 10) {
        _0x92e6x2b = '0' + _0x92e6x2b
    };
    var _0x92e6x2c = _0x92e6x27 + '/' + _0x92e6x28 + '/' + _0x92e6x29 + ' ' + _0x92e6x2a + ':' + _0x92e6x2b;
    return _0x92e6x2c
}

function startLoop() {
    refreshData();
    updateStat();
    setTimeout(startLoop, 5000)
}

function startLoop2() {
    updateStat();
    $('#yourAcc')['html']('MetaMask required...');
    setTimeout(startLoop2, 20000)
}

function refreshData() {
    if (!account) {
        $('.no-account')['show']()
    } else {
        $('.no-account')['hide']()
    };
    if (web3['eth']['accounts'][0] && web3['eth']['accounts'][0] != prev_account) {
        account = web3['eth']['accounts'][0];
        prev_account = web3['eth']['accounts'][0];
        $('#yourAcc')['html'](account['substr'](0, 12) + '...')
    };
    web3['eth']['getBalance'](account, (_0x92e6x30, _0x92e6x31) => {
        if (_0x92e6x30) {
            console['log'](`${'getBalance error: '}${_0x92e6x30}${''}`)
        } else {
            balance = Number(`${''}${web3['fromWei'](_0x92e6x31,'ether')}${''}`);
            $('#accBalance')['html'](balance['toFixed'](3))
        }
    })
}

function updateStat() {
    web3['eth']['getBalance'](contractAddress, (_0x92e6x30, _0x92e6x31) => {
        if (_0x92e6x30) {
            console['log'](`${'getBalance error: '}${_0x92e6x30}${''}`)
        } else {
            balance = Number(`${''}${web3['fromWei'](_0x92e6x31,'ether')}${''}`);
            $('#contractBalance')['html'](balance['toFixed'](3) + ' BNB')
        }
    });
    getUID()
}

function getUID() {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getUIDByAddress']['getData'](account);
    web3['eth']['call']({
        to: contractAddress,
        from: null,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            if (UID > 0) {
                $('#yourRefLink')['html']('https://bnbrocket.app/?ref=' + UID)
            } else {
                $('#yourRefLink')['html']('no link...')
            };
            UID = Number(_0x92e6x13);
            if (UID >= 0) {
                getInvestorInfo(UID)
            }
        } else {
            console['log']('getUID err')
        }
    })
}

function getInvestorInfo(UID) {
    console['log'](UID);
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getInvestorInfoByUID']['getData'](UID);
    web3['eth']['call']({
        to: contractAddress,
        from: account,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            currentDividendsArr = parseDataArr(_0x92e6x13, 9);
            newDividendsArr = parseDataArr(_0x92e6x13, 9 + 1 + currentDividendsArr['length']);
            $('#referrerEarnings')['html'](parseData(_0x92e6x13, 0));
            $('#availableReferrerEarnings')['html'](weiToDisplay(parseData(_0x92e6x13, 1)));
            $('#level1RefCount')['html'](parseData(_0x92e6x13, 3));
            $('#level2RefCount')['html'](parseData(_0x92e6x13, 4));
            $('#level3RefCount')['html'](parseData(_0x92e6x13, 5));
            var _0x92e6x35 = 0;
            for (i = 0; i < currentDividendsArr['length']; i++) {
                _0x92e6x35 += Number(weiToDisplay(currentDividendsArr[i]))
            };
            var _0x92e6x36 = 0;
            for (i = 0; i < newDividendsArr['length']; i++) {
                _0x92e6x36 += Number(weiToDisplay(newDividendsArr[i]))
            };
            $('#withdrawable')['html'](Number(_0x92e6x36 + weiToDisplay(parseData(_0x92e6x13, 1)))['toFixed'](6));
            $('.totalDivs')['html'](Number(_0x92e6x36 + _0x92e6x35)['toFixed'](2));
            getInvestmentPlan(UID, newDividendsArr)
        } else {
            console['log']('getInvestorInfo err')
        }
    })
}

function getInvestmentPlan(UID, _0x92e6x38) {
    var _0x92e6xf = web3['eth']['contract'](abi);
    var _0x92e6x10 = _0x92e6xf['at'](contractAddress);
    var _0x92e6x11 = _0x92e6x10['getInvestmentPlanByUID']['getData'](UID);
    web3['eth']['call']({
        to: contractAddress,
        from: account,
        data: _0x92e6x11
    }, function(_0x92e6x12, _0x92e6x13) {
        if (!_0x92e6x12) {
            var _0x92e6x39 = '';
            var _0x92e6x3a = 0;
            arrlen = 5;
            planIds = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + planIds['length'];
            investmentDates = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + investmentDates['length'];
            investments = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + investments['length'];
            currentDividends = parseDataArr(_0x92e6x13, arrlen);
            arrlen = arrlen + 1 + currentDividends['length'];
            isExpireds = parseDataArr(_0x92e6x13, arrlen);
            for (i = 0; i < planIds['length']; i++) {
                if (lang == 'rus') {
                    _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans_rus[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                    _0x92e6x39 += '<br>\u0412\u044B\u043F\u043B\u0430\u0447\u0435\u043D\u043E <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>\u0414\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430 <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                } else {
                    if (lang == 'cn') {
                        _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans_cn[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                        _0x92e6x39 += '<br>\u603B\u6536\u5165 <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>\u7D2F\u8BA1\u7EA2\u5229 <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                    } else {
                        _0x92e6x39 += '<p class=\'myInv\'><b><span class=\'blue\'>' + weiToDisplay(investments[i]) + ' BNB</span> - <span style=\'color:#db2b61\'>' + plans[planIds[i]] + '</span></b> <span>' + parseTimestamp(Number(investmentDates[i])) + '</span>';
                        _0x92e6x39 += '<br>Payout <b>' + Number(weiToDisplay(currentDividends[i]))['toFixed'](4) + '</b> BNB | <span>Withdrawable <b>' + Number(weiToDisplay(_0x92e6x38[i]))['toFixed'](4) + '</b> BNB</span></p><br><br>'
                    }
                };
                _0x92e6x3a += Number(weiToDisplay(investments[i]))
            };
            $('#myIvestments')['html'](_0x92e6x39);
            $('.totalInvestment')['html'](_0x92e6x3a['toFixed'](2))
        } else {
            console['log']('getInvestmentPlan err')
        }
    })
}

function weiToDisplay(_0x92e6x3c) {
    return formatEthValue(web3['fromWei'](_0x92e6x3c, 'ether'))
}

function formatEthValue(_0x92e6x3e) {
    return parseFloat(parseFloat(_0x92e6x3e)['toFixed'](6))
}

function parseData(_0x92e6x13, _0x92e6x40) {
    return Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64))
}

function parseDataArr(_0x92e6x13, _0x92e6x40) {
    keys = Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64));
    var _0x92e6x42 = [];
    for (i = 0; i < keys; i++) {
        _0x92e6x40++;
        ArrValue = Number('0x' + _0x92e6x13['substr'](64 * _0x92e6x40 + 2, 64));
        _0x92e6x42[i] = ArrValue
    };
    return _0x92e6x42
}
window['addEventListener']('load', async () => {
    if (window['ethereum']) {
        window['web3'] = new Web3(ethereum);
        try {
            await ethereum['enable']();
            startLoop()
        } catch (error) {
            console['log']('User denied account access...' + error)
        }
    } else {
        if (window['web3']) {
            console['log']('Legacy dapp browsers...');
            window['web3'] = new Web3(web3['currentProvider']);
            account = web3['eth']['accounts'][0];
            startLoop();
            console['log']('1042')
        } else {
            console['log']('Non-Ethereum browser detected. You should consider trying MetaMask!');
            window['web3'] = new Web3(new Web3['providers'].HttpProvider('https://bsc-dataseed.binance.org/'));
            startLoop2()
        }
    }
})
