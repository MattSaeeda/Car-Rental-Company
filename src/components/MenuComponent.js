import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, InputGroupAddon, InputGroup
    , Input} from 'reactstrap';
import getWeb3 from "./utils/getWeb3";   

class Menu extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            selectedCar: null,
            rentPeriod: 0,

        };

        this.handleChange = this.handleChange.bind(this);
    }  
        
    handleChange(event) {
            const newRentPeriod = event.target.value;
            console.log(newRentPeriod)
            this.setState({
                rentPeriod : newRentPeriod,
            })
        }


        componentDidMount = async () => {
            try {
              // Get network provider and web3 instance.
              const web3 = await getWeb3();
        
              // Use web3 to get the user's accounts.
              const accounts = await web3.eth.getAccounts();
        
              // Get the contract instance.
              const Contract = truffleContract(SimpleStorageContract);
              Contract.setProvider(web3.currentProvider);
              const instance = await Contract.deployed();
        
              // Set web3, accounts, and contract to the state, and then proceed with an
              // example of interacting with the contract's methods.
              this.setState({ web3, accounts, contract: instance }, this.runExample);
            } catch (error) {
              // Catch any errors for any of the above operations.
              alert(
                `Failed to load web3, accounts, or contract. Check console for details.`
              );
              console.log(error);
            }
          };




        
render() {

    const menu = this.props.cars.map((car) => {
    
        return (
            <div key={car.id} className = "shadow p-3 col-12 col-md-4">
                <Card >
                    <CardImg  top width="100%" src={car.picture}/>
                    <CardBody>
                        <CardTitle>{car.name}</CardTitle>
                        <CardText>{car.pricePerDay} Ethers Per day</CardText>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">Please enter the rent period: </InputGroupAddon>
                            <Input placeholder="Days" type="number" step="1" onChange={this.handleChange} />                          
                        </InputGroup>
                        <br />
                        <cardText>Estimated total cost: {car.pricePerDay*this.state.rentPeriod}</cardText>
                        <br/>
                        <CardText>You'll earn {car.CRTTokenPerDay*this.state.rentPeriod} CRT Tokens</CardText>
                        <Button color="primary">Rent</Button>
                        <Button color="danger">Return</Button>
                        <Button color="success">Show my CRT balance</Button>
                    </CardBody>
                </Card>
            </div>
        );
    });
    return (
        <div className="container-fluid" color>
            <div className="row">
                {menu}
            </div>
            
        </div>
    )
}
}
        
        // handleChange(event) {
        //     const newRentPeriod = event.target.value;
        //     this.setState({
        //         rentPeriod : newRentPeriod,
        //         estimatedCost:  newRentPeriod*CARS.pricePerDay})
        // }

        // handleRent(event) {
        //     componentDidMount = async () => {
        //         try {
        //           // Get network provider and web3 instance.
        //           const web3 = await getWeb3();
            
        //           // Use web3 to get the user's accounts.
        //           const accounts = await web3.eth.getAccounts();
            
        //           // Get the contract instance.
        //           const Contract = truffleContract(Rent);
        //           Contract.setProvider(web3.currentProvider);
        //           const instance = await Contract.deployed();
            
        //           // Set web3, accounts, and contract to the state, and then proceed with an
        //           // example of interacting with the contract's methods.
        //           this.setState({ web3, accounts, contract: instance }, this.runExample(event));
        //         } catch (error) {
        //           // Catch any errors for any of the above operations.
        //           alert(
        //             `Failed to load web3, accounts, or contract. Check console for details.`
        //           );
        //           console.log(error);
        //         }
        //       };

        // }

        // runExample = async (_car) => {
        //     const { accounts, contract } = this.state;
        
        //     await contract.rent(CARS.id);
        //     await contract.transfer(this.account, account[0])
        
        //     // Get the value from the contract to prove it worked.
        //     const response = await contract.get();
        
        //     // Update state with the result.
        //     this.setState({ storageValue: response.toNumber() });
        //   };
    

    // render() {

    //     const menu = this.props.cars.map((car) => {
    //         return (
    //             <div key={car.id} className = "shadow p-3 col-12 col-md-4">
    //                 <Card >
    //                     <CardImg  top width="100%" src={car.picture}/>
    //                     <CardBody>
    //                         <CardTitle>{car.name}</CardTitle>
    //                         <CardText>{car.pricePerDay} Ether Per day</CardText>
    //                         <InputGroup>
    //                             <InputGroupAddon addonType="prepend">Please enter the rent period: </InputGroupAddon>
    //                             <Input placeholder="Days" type="number" step="1" />                          
    //                         </InputGroup>
    //                         <br />
    //                         <InputGroup>
    //                             <InputGroupAddon addonType="prepend">Estimated total cost: </InputGroupAddon>
    //                             <Input placeholder= {this.state.estimatedCost} type="number"  />
    //                             <InputGroupAddon addonType="append">Ethers</InputGroupAddon> 
    //                         </InputGroup>
    //                         <br/>
    //                         <CardText>You'll earn {car.CRTTokenPerDay*this.rentPeriod} CRT Tokens</CardText> */}
    //                         {/* <Button color="primary" onClick={() => this.handleRent(car)}>Rent</Button> */}
    //                         <Button color="danger">Return</Button>
    //                         <Button color="success">Show my CRT balance</Button>
    //                     </CardBody>
    //                 </Card>
    //             </div>
    //         );
    //     });

    //     return (
    //         <div className="container-fluid" color>
    //             <div className="row">
    //                 {menu}
    //             </div>
    //             <div className="col">
    //                 {this.renderPost(this.state.selectedPost)}
    //             </div>
    //         </div>
    //     )
    // }


export default Menu