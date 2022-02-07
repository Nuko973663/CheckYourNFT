/**
 * NukoWeb3.js
 */

import Web3 from "web3";

/**
 * NukoApi
 */
export class NukoWeb3 {
  web3s = {};
  chain = [
    {
      chainId: "1",
      name: "Ethereum Network",
      shortName: "Ethereum",
      rpcNode: [
        "https://speedy-nodes-nyc.moralis.io/3e336936ccd6ec0af99dc191/eth/mainnet",
      ],
    },
    {
      chainId: "56",
      name: "Binance Smart Chain",
      shortName: "BSC",
      rpcNode: [
        "https://bsc-dataseed.binance.org/",
        "https://bsc-dataseed1.defibit.io/",
        "https://bsc-dataseed1.ninicoin.io/",
      ],
    },
    {
      chainId: "137",
      name: "Polygon Network",
      shortName: "Polygon",
      rpcNode: ["https://polygon-rpc.com/"],
    },
    {
      chainId: "42161",
      name: "Arbitrum",
      shortName: "Arbitrum",
      rpcNode: [
        "https://speedy-nodes-nyc.moralis.io/3e336936ccd6ec0af99dc191/arbitrum/mainnet",
      ],
    },
  ];

  getWeb3(chainId) {
    if (this.web3s[chainId] === undefined) {
      let chain = this.chain.find((chain) => {
        return chain.chainId === chainId;
      });

      this.web3s[chainId] = new Web3(chain.rpcNode[0]);
    }
    return this.web3s[chainId];
  }

  async getName(chainId, address) {
    let web3 = this.getWeb3(chainId);
    let ret;
    let contract = new web3.eth.Contract(this.ABIs.abiERC721, address);
    await contract.methods
      .name()
      .call()
      .then((values) => {
        ret = values;
        console.log(values);
      });
    return ret;
  }

  async getSymbol(chainId, address) {
    let web3 = this.getWeb3(chainId);
    let ret;
    let contract = new web3.eth.Contract(this.ABIs.abiERC721, address);
    await contract.methods
      .symbol()
      .call()
      .then((values) => {
        ret = values;
        console.log(values);
      });
    return ret;
  }

  async getTokenURI(chainId, address, tokenId) {
    let web3 = this.getWeb3(chainId);
    let ret;
    let contract = new web3.eth.Contract(this.ABIs.abiERC721, address);
    await contract.methods
      .tokenURI(tokenId)
      .call()
      .then((values) => {
        ret = values;
        console.log(values);
      });
    return ret;
  }

  async getUri(chainId, address, tokenId) {
    let web3 = this.getWeb3(chainId);
    let ret;
    let contract = new web3.eth.Contract(this.ABIs.abiERC1155, address);
    await contract.methods
      .uri(tokenId)
      .call()
      .then((values) => {
        ret = values;
        console.log(values);
      });
    return ret;
  }

  // ABIs
  ABIs = {
    abiERC721: [
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },

      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceId",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },

      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "tokenURI",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
    abiERC1155: [
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address[]",
            name: "accounts",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
        ],
        name: "balanceOfBatch",
        outputs: [
          {
            internalType: "uint256[]",
            name: "",
            type: "uint256[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_id",
            type: "uint256",
          },
        ],
        name: "uri",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  };
}
