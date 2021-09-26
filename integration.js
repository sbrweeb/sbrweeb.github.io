contractAddress = '0x32aA774e671aaf4926f312bCB9498A34b9f50768';
contractAbi =[
	{
		"inputs": [],
		"name": "stakeTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unstakeTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract Dattrajresume",
				"name": "_dattarajresume",
				"type": "address"
			},
			{
				"internalType": "contract DATT",
				"name": "_Dattcoin",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "dattarajresume",
		"outputs": [
			{
				"internalType": "contract Dattrajresume",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "Dattcoin",
		"outputs": [
			{
				"internalType": "contract DATT",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "duration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "hasStaked",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isStaking",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "stakefees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "stakers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "stakingBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "unstakefees",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userStakingStart",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

async function loadweb3(){
    if(window.ethereum){
        window.web3=new Web3(window.ethereum);
        window.ethereum.enable(); 
    } 
} 

   
 async function loadContract(){
      //ABI & address of owner who deployed it on metamask network in RemixIDE
    var ABI = contractAbi
    var Address = contractAddress
      return await new window.web3.eth.Contract( ABI, Address); 
  } 
  
    
  async function load(){
        await loadweb3();
     window.contract = await loadContract();
    }
     
  
load();  
async function staketokens()
{
          
          web3.eth.getAccounts().then(function(accountsA){
              var accA = accountsA[0];

              //Here we call the smart contract method that we defined earlier methodOne(userInputArgument)
              return contract.methods.stakeTokens().send({from:accA});                                         

                            
          })
 } 

 async function unstakeTokens( )
 {
		   
		   web3.eth.getAccounts().then(function(accountsA){
			   var accA = accountsA[0];
			   return contract.methods.unstakeTokens().send({from:accA});
  
			   //Here we call the smart contract method that we defined earlier methodOne(userInputArgument)
			                                            
 
							 
		   })
  }  







const connectWallet = document.getElementById("BTNconnect"); 
connectWallet.onclick = loadweb3();
const elonstake = document.getElementById("BTNmint");
elonstake.onclick = staketokens;
const elonUnstake = document.getElementById("BTNunstake");
elonUnstake.onclick = unstakeTokens;



web3.eth.getAccounts().then(function(accountsA){
	var accA = accountsA[0];
	return contract.methods.stakingBalance(accA).call({from:accA}).then(function(bal){
     hideElement =(Element)=> Element.style.display="none"; 
	 bal>1?(
		 hideElement(elonstake)
	 ):(
		 hideElement(elonUnstake)
	 );
	});
})



