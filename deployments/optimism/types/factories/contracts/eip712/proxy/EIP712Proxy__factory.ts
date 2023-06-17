/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  EIP712Proxy,
  EIP712ProxyInterface,
} from "../../../../contracts/eip712/proxy/EIP712Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEAS",
        name: "eas",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadlineExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidEAS",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLength",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotFound",
    type: "error",
  },
  {
    inputs: [],
    name: "UsedSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "VERSION",
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
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct EIP712Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyAttestationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "attestByDelegation",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAttestTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
    ],
    name: "getAttester",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getEAS",
    outputs: [
      {
        internalType: "contract IEAS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getName",
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
    name: "getRevokeTypeHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "address",
                name: "recipient",
                type: "address",
              },
              {
                internalType: "uint64",
                name: "expirationTime",
                type: "uint64",
              },
              {
                internalType: "bool",
                name: "revocable",
                type: "bool",
              },
              {
                internalType: "bytes32",
                name: "refUID",
                type: "bytes32",
              },
              {
                internalType: "bytes",
                name: "data",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct AttestationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct EIP712Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "attester",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyAttestationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiAttestByDelegation",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData[]",
            name: "data",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct EIP712Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct MultiDelegatedProxyRevocationRequest[]",
        name: "multiDelegatedRequests",
        type: "tuple[]",
      },
    ],
    name: "multiRevokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "schema",
            type: "bytes32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "uid",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            internalType: "struct RevocationRequestData",
            name: "data",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
            ],
            internalType: "struct EIP712Signature",
            name: "signature",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "revoker",
            type: "address",
          },
          {
            internalType: "uint64",
            name: "deadline",
            type: "uint64",
          },
        ],
        internalType: "struct DelegatedProxyRevocationRequest",
        name: "delegatedRequest",
        type: "tuple",
      },
    ],
    name: "revokeByDelegation",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101606040523480156200001257600080fd5b50604051620026ed380380620026ed833981016040819052620000359162000156565b6040805180820182526003815262302e3160e81b60209182015282518382012060e08190527f8cd160c72d102a6747abd189ac21d4a1f802e3fcc1bb8fc78cc4d558df0c7c216101008190524660a081815285517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818701819052818801959095526060810193909352608080840192909252308382018190528651808503909201825260c09384019096528051940193909320909252919052610120526001600160a01b0382166200011b576040516341bc07ff60e11b815260040160405180910390fd5b6001600160a01b038216610140526000620001378282620002db565b505050620003a7565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200016a57600080fd5b82516001600160a01b03811681146200018257600080fd5b602084810151919350906001600160401b0380821115620001a257600080fd5b818601915086601f830112620001b757600080fd5b815181811115620001cc57620001cc62000140565b604051601f8201601f19908116603f01168101908382118183101715620001f757620001f762000140565b8160405282815289868487010111156200021057600080fd5b600093505b8284101562000234578484018601518185018701529285019262000215565b60008684830101528096505050505050509250929050565b600181811c908216806200026157607f821691505b6020821081036200028257634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002d657600081815260208120601f850160051c81016020861015620002b15750805b601f850160051c820191505b81811015620002d257828155600101620002bd565b5050505b505050565b81516001600160401b03811115620002f757620002f762000140565b6200030f816200030884546200024c565b8462000288565b602080601f8311600181146200034757600084156200032e5750858301515b600019600386901b1c1916600185901b178555620002d2565b600085815260208120601f198616915b82811015620003785788860151825594840194600190910190840162000357565b5085821015620003975787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60805160a05160c05160e0516101005161012051610140516122cf6200041e600039600081816101c4015281816104d1015281816105e8015281816109520152610b2d015260006110b501526000611104015260006110df01526000611038015260006110620152600061108c01526122cf6000f3fe6080604052600436106100bc5760003560e01c806365c40b9c11610074578063b83010d31161004e578063b83010d31461021b578063ed24911d1461024e578063ffa1ad741461026357600080fd5b806365c40b9c146101b557806395411525146101e8578063a6d4dbc71461020857600080fd5b806312b11a17116100a557806312b11a171461014357806317d7de7c146101805780633c042715146101a257600080fd5b80630eabf660146100c157806310d736d5146100d6575b600080fd5b6100d46100cf3660046115ed565b6102ac565b005b3480156100e257600080fd5b506101196100f136600461162f565b60009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b34801561014f57600080fd5b507f4120d3b28306666b714826ad7cb70744d9658ad3e6cd873411bedadcf55afda75b60405190815260200161013a565b34801561018c57600080fd5b5061019561053f565b60405161013a91906116b6565b6101726101b03660046116d0565b6105d1565b3480156101c157600080fd5b507f0000000000000000000000000000000000000000000000000000000000000000610119565b6101fb6101f63660046115ed565b61071c565b60405161013a919061170b565b6100d461021636600461174f565b610b14565b34801561022757600080fd5b507f96bdbea8fa280f8a0d0835587e1fbb1470e81d05c44514158443340cea40a05d610172565b34801561025a57600080fd5b50610172610c14565b34801561026f57600080fd5b506101956040518060400160405280600381526020017f302e31000000000000000000000000000000000000000000000000000000000081525081565b60008167ffffffffffffffff8111156102c7576102c7611768565b60405190808252806020026020018201604052801561030d57816020015b6040805180820190915260008152606060208201528152602001906001900390816102e55790505b50905060005b8281101561049357600084848381811061032f5761032f611797565b905060200281019061034191906117c6565b61034a90611a33565b602081015180519192509015806103675750816040015151815114155b1561039e576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b81518110156104495760008282815181106103be576103be611797565b602002602001015190506104406040518060a0016040528086600001518152602001838152602001866040015185815181106103fc576103fc611797565b60200260200101518152602001866060015173ffffffffffffffffffffffffffffffffffffffff168152602001866080015167ffffffffffffffff16815250610c23565b506001016103a1565b506040518060400160405280836000015181526020018281525084848151811061047557610475611797565b6020026020010181905250505061048c8160010190565b9050610313565b506040517f4cb7e9e500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001690634cb7e9e5903490610508908590600401611b2e565b6000604051808303818588803b15801561052157600080fd5b505af1158015610535573d6000803e3d6000fd5b5050505050505050565b60606000805461054e90611bfd565b80601f016020809104026020016040519081016040528092919081815260200182805461057a90611bfd565b80156105c75780601f1061059c576101008083540402835291602001916105c7565b820191906000526020600020905b8154815290600101906020018083116105aa57829003601f168201915b5050505050905090565b60006105e46105df83611d6e565b610e56565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f17325e7346040518060400160405280876000013581526020018780602001906106489190611de7565b61065190611e1b565b8152506040518363ffffffff1660e01b81526004016106709190611e9a565b60206040518083038185885af115801561068e573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106b39190611ec7565b90506106c560c0840160a08501611ee0565b600082815260016020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905592915050565b606060008267ffffffffffffffff81111561073957610739611768565b60405190808252806020026020018201604052801561077f57816020015b6040805180820190915260008152606060208201528152602001906001900390816107575790505b50905060005b8381101561094d57368585838181106107a0576107a0611797565b90506020028101906107b291906117c6565b90503660006107c46020840184611efb565b90925090508015806107e457506107de6040840184611f63565b82141590505b1561081b576040517f947d5a8400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60005b818110156108fc576108f46040518060a001604052808660000135815260200185858581811061085057610850611797565b90506020028101906108629190611de7565b61086b90611e1b565b815260200161087d6040880188611f63565b8581811061088d5761088d611797565b9050606002018036038101906108a39190611fca565b81526020016108b86080880160608901611ee0565b73ffffffffffffffffffffffffffffffffffffffff1681526020016108e360a0880160808901611fe6565b67ffffffffffffffff169052610e56565b60010161081e565b506040805180820190915283358152602081016109198385612001565b81525085858151811061092e5761092e611797565b60200260200101819052505050506109468160010190565b9050610785565b5060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344adc90e34846040518363ffffffff1660e01b81526004016109aa9190612075565b60006040518083038185885af11580156109c8573d6000803e3d6000fd5b50505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a0f9190810190612168565b90506000805b85811015610b095736878783818110610a3057610a30611797565b9050602002810190610a4291906117c6565b9050366000610a546020840184611efb565b9150915060005b81811015610af457610a736080850160608601611ee0565b60016000898981518110610a8957610a89611797565b6020026020010151815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550856001019550610aed8160010190565b9050610a5b565b50505050610b028160010190565b9050610a15565b509095945050505050565b610b2b610b26368390038301836121f9565b610c23565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663469262673460405180604001604052808560000135815260200185602001803603810190610b919190612265565b90526040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815281516004820152602091820151805160248301529091015160448201526064016000604051808303818588803b158015610bf857600080fd5b505af1158015610c0c573d6000803e3d6000fd5b505050505050565b6000610c1e61101e565b905090565b608081015167ffffffffffffffff1615801590610c5857504267ffffffffffffffff16816080015167ffffffffffffffff1611155b15610c8f576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208082015180516000908152600190925260409091205473ffffffffffffffffffffffffffffffffffffffff1680610cf4576040517fc5723b5100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81163314610d43576040517f4ca8886700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040830151610d5181611152565b835183516080860151604051600093610dcd93610db2937f96bdbea8fa280f8a0d0835587e1fbb1470e81d05c44514158443340cea40a05d936020019384526020840192909252604083015267ffffffffffffffff16606082015260800190565b60405160208183030381529060405280519060200120611260565b9050846060015173ffffffffffffffffffffffffffffffffffffffff16610e02828460000151856020015186604001516112cf565b73ffffffffffffffffffffffffffffffffffffffff1614610e4f576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050505050565b608081015167ffffffffffffffff1615801590610e8b57504267ffffffffffffffff16816080015167ffffffffffffffff1611155b15610ec2576040517f1ab7da6b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208101516040820151610ed581611152565b6000610f967f4120d3b28306666b714826ad7cb70744d9658ad3e6cd873411bedadcf55afda760001b856000015185600001518660200151876040015188606001518960800151805190602001208b60800151604051602001610db2989796959493929190978852602088019690965273ffffffffffffffffffffffffffffffffffffffff94909416604087015267ffffffffffffffff9283166060870152901515608086015260a085015260c08401919091521660e08201526101000190565b9050836060015173ffffffffffffffffffffffffffffffffffffffff16610fcb828460000151856020015186604001516112cf565b73ffffffffffffffffffffffffffffffffffffffff1614611018576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050565b60003073ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001614801561108457507f000000000000000000000000000000000000000000000000000000000000000046145b156110ae57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8051602080830151604080850151905160f89490941b7fff0000000000000000000000000000000000000000000000000000000000000016928401929092526021830152604182015260009060610160405160208183030381529060405290506002816040516111c29190612281565b9081526040519081900360200190205460ff161561120c576040517fcce9a82400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600160028260405161121e9190612281565b90815260405190819003602001902080549115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff009092169190911790555050565b60006112c961126d61101e565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b92915050565b60008060006112e0878787876112f7565b915091506112ed816113e6565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561132e57506000905060036113dd565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611382573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166113d6576000600192509250506113dd565b9150600090505b94509492505050565b60008160048111156113fa576113fa612293565b036114025750565b600181600481111561141657611416612293565b03611482576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064015b60405180910390fd5b600281600481111561149657611496612293565b036114fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401611479565b600381600481111561151157611511612293565b0361159e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608401611479565b50565b60008083601f8401126115b357600080fd5b50813567ffffffffffffffff8111156115cb57600080fd5b6020830191508360208260051b85010111156115e657600080fd5b9250929050565b6000806020838503121561160057600080fd5b823567ffffffffffffffff81111561161757600080fd5b611623858286016115a1565b90969095509350505050565b60006020828403121561164157600080fd5b5035919050565b60005b8381101561166357818101518382015260200161164b565b50506000910152565b60008151808452611684816020860160208601611648565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006116c9602083018461166c565b9392505050565b6000602082840312156116e257600080fd5b813567ffffffffffffffff8111156116f957600080fd5b820160e081850312156116c957600080fd5b6020808252825182820181905260009190848201906040850190845b8181101561174357835183529284019291840191600101611727565b50909695505050505050565b6000610100828403121561176257600080fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff618336030181126117fa57600080fd5b9190910192915050565b60405160a0810167ffffffffffffffff8111828210171561182757611827611768565b60405290565b60405160c0810167ffffffffffffffff8111828210171561182757611827611768565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561189757611897611768565b604052919050565b600067ffffffffffffffff8211156118b9576118b9611768565b5060051b60200190565b6000604082840312156118d557600080fd5b6040516040810181811067ffffffffffffffff821117156118f8576118f8611768565b604052823581526020928301359281019290925250919050565b60006060828403121561192457600080fd5b6040516060810181811067ffffffffffffffff8211171561194757611947611768565b604052905080823560ff8116811461195e57600080fd5b8082525060208301356020820152604083013560408201525092915050565b600082601f83011261198e57600080fd5b813560206119a361199e8361189f565b611850565b828152606092830285018201928282019190878511156119c257600080fd5b8387015b858110156119e5576119d88982611912565b84529284019281016119c6565b5090979650505050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611a1657600080fd5b919050565b803567ffffffffffffffff81168114611a1657600080fd5b600060a08236031215611a4557600080fd5b611a4d611804565b8235815260208084013567ffffffffffffffff80821115611a6d57600080fd5b9085019036601f830112611a8057600080fd5b8135611a8e61199e8261189f565b81815260069190911b83018401908481019036831115611aad57600080fd5b938501935b82851015611ad657611ac436866118c3565b82528582019150604085019450611ab2565b80868801525050506040860135925080831115611af257600080fd5b5050611b003682860161197d565b604083015250611b12606084016119f2565b6060820152611b2360808401611a1b565b608082015292915050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015611bee578984037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0018652825180518552880151888501889052805188860181905290890190839060608701905b80831015611bd957611bc582855180518252602090810151910152565b928b019260019290920191908a0190611ba8565b50978a01979550505091870191600101611b56565b50919998505050505050505050565b600181811c90821680611c1157607f821691505b602082108103611762577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600082601f830112611c5b57600080fd5b813567ffffffffffffffff811115611c7557611c75611768565b611ca660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611850565b818152846020838601011115611cbb57600080fd5b816020850160208301376000918101602001919091529392505050565b600060c08284031215611cea57600080fd5b611cf261182d565b9050611cfd826119f2565b8152611d0b60208301611a1b565b602082015260408201358015158114611d2357600080fd5b604082015260608281013590820152608082013567ffffffffffffffff811115611d4c57600080fd5b611d5884828501611c4a565b60808301525060a082013560a082015292915050565b600060e08236031215611d8057600080fd5b611d88611804565b82358152602083013567ffffffffffffffff811115611da657600080fd5b611db236828601611cd8565b602083015250611dc53660408501611912565b6040820152611dd660a084016119f2565b6060820152611b2360c08401611a1b565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff418336030181126117fa57600080fd5b60006112c93683611cd8565b73ffffffffffffffffffffffffffffffffffffffff815116825267ffffffffffffffff6020820151166020830152604081015115156040830152606081015160608301526000608082015160c06080850152611e8660c085018261166c565b60a093840151949093019390935250919050565b602081528151602082015260006020830151604080840152611ebf6060840182611e27565b949350505050565b600060208284031215611ed957600080fd5b5051919050565b600060208284031215611ef257600080fd5b6116c9826119f2565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f3057600080fd5b83018035915067ffffffffffffffff821115611f4b57600080fd5b6020019150600581901b36038213156115e657600080fd5b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611f9857600080fd5b83018035915067ffffffffffffffff821115611fb357600080fd5b60200191506060810236038213156115e657600080fd5b600060608284031215611fdc57600080fd5b6116c98383611912565b600060208284031215611ff857600080fd5b6116c982611a1b565b600061200f61199e8461189f565b80848252602080830192508560051b85013681111561202d57600080fd5b855b8181101561206957803567ffffffffffffffff81111561204f5760008081fd5b61205b36828a01611cd8565b86525093820193820161202f565b50919695505050505050565b602080825282518282018190526000919060409081850190600581811b8701840188860187805b85811015612158577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08b85030187528251805185528901518985018990528051898601819052908a0190606081881b870181019190870190855b81811015612142577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0898503018352612130848651611e27565b948e01949350918d01916001016120f6565b505050978a01979450509188019160010161209c565b50919a9950505050505050505050565b6000602080838503121561217b57600080fd5b825167ffffffffffffffff81111561219257600080fd5b8301601f810185136121a357600080fd5b80516121b161199e8261189f565b81815260059190911b820183019083810190878311156121d057600080fd5b928401925b828410156121ee578351825292840192908401906121d5565b979650505050505050565b6000610100828403121561220c57600080fd5b612214611804565b8235815261222584602085016118c3565b60208201526122378460608501611912565b604082015261224860c084016119f2565b606082015261225960e08401611a1b565b60808201529392505050565b60006040828403121561227757600080fd5b6116c983836118c3565b600082516117fa818460208701611648565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fdfea164736f6c6343000813000a";

type EIP712ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EIP712ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EIP712Proxy__factory extends ContractFactory {
  constructor(...args: EIP712ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    eas: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<EIP712Proxy> {
    return super.deploy(eas, name, overrides || {}) as Promise<EIP712Proxy>;
  }
  override getDeployTransaction(
    eas: PromiseOrValue<string>,
    name: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(eas, name, overrides || {});
  }
  override attach(address: string): EIP712Proxy {
    return super.attach(address) as EIP712Proxy;
  }
  override connect(signer: Signer): EIP712Proxy__factory {
    return super.connect(signer) as EIP712Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EIP712ProxyInterface {
    return new utils.Interface(_abi) as EIP712ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EIP712Proxy {
    return new Contract(address, _abi, signerOrProvider) as EIP712Proxy;
  }
}
