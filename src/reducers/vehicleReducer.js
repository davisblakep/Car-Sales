

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500, added: false },
      { id: 2, name: 'Racing detail package', price: 1500, added: false },
      { id: 3, name: 'Premium sound system', price: 500, added: false },
      { id: 4, name: 'Rear spoiler', price: 250, added: false }
    ]
  };

export const vehicleReducer = (state = initialState, action) => {
    switch(action.type){
        case "TOGGLE_ADD":
            // return {
            //     ...state,
            //     additionalPrice: action.payload
            // }
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.map(item => 
                        item.id === action.payload ? {...item, added: !item.added}  : item),

                // additionalPrice: state.additionalPrice + state.additionalFeatures.filter(item => 
                //     item.id === action.payload ? item.price : 0)

                // additionalPrice: state.additionalFeatures.filter(item =>
                //     item.added === true && item.price.reduce((a, b) => {return a + b}, 0))
                // car: {
                //     features: state.additionalFeatures.map(item => 
                //         item.id === action.payload ? {...item, item} : item  )
                // },
                
                
            }

            case "TOGGLE_REMOVE":
                return {
                    ...state,
                    additionalFeatures: state.additionalFeatures.map(item => 
                            item.id === action.payload ? {...item, added: !item.added}  : item),
                    }
        default: 
            return state;
    }
}
