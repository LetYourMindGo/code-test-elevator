import * as React from "react";
import axios from "axios";
import { MyState } from "../../types"
import Elevator from "../../components/elevator/Elevator";
import * as css from "./ImplementationPage.module.scss";

class ImplementationPage extends React.Component {

    state: MyState = {
        elevators: [],
        floors: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    };

    loadElevators = async () => {
        const data = await axios.get('http://localhost:3000/elevators');
        this.setState({
            elevators: data.data
        });
    };

    callElevator = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const data = await axios.post('http://localhost:3000/elevators', {"level": e.currentTarget.value});
        
        if(data.data === "All elevators are unavailable") {
            alert("All elevators are unavailable");
        } else {
            this.setState({
                elevators: data.data
            });
        }; 
    };

    async componentDidMount() {
        await this.loadElevators();
    };

    public render() {
        return (
            <>
                <div className={css.building}>
                    <div className={css.button_panel}>
                        {this.state.floors.map(floor => (
                            <button key={floor} className={css.button} value={floor} onClick={this.callElevator}>{floor}</button>
                        ))}
                    </div>
                    <div className={css.shaft}>
                        {this.state.elevators.map(elevator => (
                            <Elevator key={elevator.id} elevator={elevator}/>)
                        )}
                    </div>
                </div>
            </>
        );
    };
};

export default ImplementationPage;

