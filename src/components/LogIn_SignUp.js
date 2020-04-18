import Redux from "redux";

class LogIn_SignUp extends React_Compoent{
    constructor(props){
        super(props);
        this.state={
            login:null,
            password: null
        }
        this.logInSubmit=this.logInSubmit.bind(this);
    }

    logInSubmit(){
            
    }
    render(){
        return(
            <div>
                <form onSubmit={this.logInSubmit}>
                <p>User name</p>
                    <input type="text" value={this.state.userName} onChange={this.userNameHandler} placeholder="user name"/>
                <p>Password</p>
                <input
                </form>
            </div>
        )
    }
}
<form onSubmit={this.submitButton}>
              <div className="form">
                <p>Enter wine name</p>
                <input type='text' value= {this.state.name} onChange={this.nameHandler} placeholder="wine name"/>
              </div>
              <div className="form">
                <p>Enter wine url link</p>
                <input type='text' value= {this.state.pictureURL} onChange={this.pictureURLHandler} placeholder="picture url"/>
              </div>
              <div className="form">
                <p>Enter year</p>
                <input type='text' value= {this.state.year} onChange={this.yearHandler} placeholder="year"/>
              </div>
              <div className="form">
                <p>Enter type of grapes</p>
                <input type='text' value= {this.state.grapes} onChange={this.grapesHandler} placeholder="grapes type"/>
              </div>
              <div className="form">
                <p>Enter contry of origin</p>
                <input type='text' value= {this.state.country} onChange={this.countryHandler} placeholder="country"/>
              </div>
              <div className="form">
                <p>Enter region of origin</p>
                <input type='text' value= {this.state.region} onChange={this.regionHandler}  placeholder="region"/>
              </div>
              <div className="form">
                <p>Enter price of wine</p>
                <input type='text' value= {this.state.price} onChange={this.priceHandler}  placeholder="price"/>
              </div>
              <div className="form">
                <p>Enter wine description</p>
                <input type='text' value= {this.state.description} onChange={this.descriptionHandler}  placeholder="description"/>
                <input type="submit" />
              </div>
           </form>