const initialState = [
    {
        id:0,
        name:"Amulya",
        number:9032041433,
        email:"amulyapadmavathi.gunda@gmail.com"
    },
    {
        id:1,
        name:"Abhi",
        number:7801007513,
        email:"abhi2004@gmail.com",
    },
    {
        id:2,
        name:"Manvi",
        number:7018007522,
        email:"abhi2004@gmail.com",
    }
];

const contactReducer = (state =initialState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            state = [...state ,action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=> contact.id===action.payload.id ? action.payload:contact);
            state = updateState; 
            return state;
        case "DELECT_CONTACT":
            const delectState = state.filter(contact=> contact.id !== action.payload && contact);
            state = delectState;
            return state;
        default:
            return state;
    }
};
export default contactReducer;