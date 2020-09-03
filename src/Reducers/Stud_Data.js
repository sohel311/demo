import {Add_data} from '../Action/StudAction.js';
import {Add} from '../Action/ActionTypes.js';
const initialstate =[
	{
		id:"1",
		name:"Rahul",
		RollNo:"22",
	},
	{
		id:"2",
		name:"Sonu",
		RollNo:"26",
	},
	{
		id:"3",
		name:"Jay",
		RollNo:"29",
	},
];

const Stud = (state = { details: initialstate },action) =>{
    switch(action.type)
    {
        case Add:
        return{
            details: [action.payload, ...state.details]
        }
        break;
        default:

        break;
    }

		return state;
}



export default Stud;
