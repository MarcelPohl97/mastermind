import React, { useState } from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = (props) => {
    const [showModal, setshowModal] = useState(false);
    const [loadModal, setloadModal] = useState(null);
    const [loadBgColor, setloadBgColor] = useState({
        colors: '',
    });

    const [gradients, setGradients] = useState(null);

    const get_Modal = (component) => {
        setloadModal(component)
        setshowModal(true);
    };

    const hide_Modal = () => {
        setshowModal(false);
    }

    const [priorities, setPriorities] = useState([
        {
            id:1,
            priority:'Low',
            color:'bg-green-500',
        },
        {
            id:2,
            priority:'Medium',
            color:'bg-blue-500',
        },
        {
            id:3,
            priority:'High',
            color:'bg-yellow-500',
        },
        {
            id:4,
            priority:'Critical',
            color:'bg-red-500',
        },
        
    ])

    const [boards, setBoards] = useState( 
    [
        {
        id:1,
        emoji:'🤼',
        title:'Card Talk',
        protected: true,
        created:'Flower Powers',
        },
        {
        id:2,
        emoji:'☘',
        title:'YugiOh Strats',
        protected: false,
        created:'Players',
        },
        {
        id:3,
        emoji:'☕',
        title:'Meal Planning',
        protected: true,
        created:'Bäckerei',
        },
        {
        id:4,
        emoji:'⛽',
        title:'Walkie Talkie',
        protected: true,
        created:'Talkies',
        },
        {
        id:5,
        emoji:'⛷',
        title:'Kinds',
        protected: true,
        created:'Kindas',
        },
        {
        id:6,
        emoji:'⛳',
        title:'Wirklars',
        protected: false,
        created:'Wirk',
        },
        {
        id:7,
        emoji:'⚽',
        title:'Lorem Ipsum',
        protected: false,
        created:'Lorem',
        },
        {
        id:8,
        emoji:'✏',
        title:'Design UI',
        protected: true,
        created:'Dribble',
        },
    ]
    )

    const [cards, setCards] = useState(
        [
        {
            id:1,
            name:'Test1',
            style:'shadow-lg rounded w-52 h-10 p-1 absolute top-80 left-80 break-words h-auto',
            creator:'Marcellus',
            board_id:1,
            priority:'bg-white',
        },
        {
            id:2,
            name:'Test2',
            style:'shadow-lg rounded w-52 h-10 p-1 absolute inset-y-16 break-words h-auto',
            creator:'Realtor',
            board_id:1,
            priority:'bg-red-500',
        },
        {
            id:3,
            name:'Test3',
            style:'shadow-lg rounded w-52 h-10 p-1 absolute inset-40 break-words h-auto',
            creator:'Marcellus',
            board_id:2,
            priority:'bg-blue-500',
        },
        {
            id:4,
            name:'Test4',
            style:'shadow-lg rounded w-52 h-10 p-1 absolute inset-x-60 break-words h-auto',
            creator:'Marcellus',
            board_id:2,
            priority:'bg-yellow-500',
        },
        {
            id:5,
            name:'Test4',
            style:'shadow-lg rounded w-52 h-10 p-1 absolute inset-x-60 break-words h-auto',
            creator:'Marcellus',
            board_id:3,
            priority:'bg-green-500',
        },
        ]
        )
        const [shapes, setShapes] = useState([
            {
                id:1,
                css_classes: "rounded-full bg-white opacity-25 w-24 h-24 absolute inset-20"
    
            },
            {
                id:2,
                css_classes: "rounded-full bg-white opacity-50 w-14 h-14 absolute inset-2/3"
    
            },
            {
                id:3,
                css_classes: "rounded-full bg-white opacity-30 w-11 h-11 absolute inset-1/4"
    
            },
            {
                id:4,
                css_classes: "rounded-full bg-white opacity-50 w-14 h-14 absolute inset-x-3/4 inset-y-1/4"
    
            },
            {
                id:5,
                css_classes: "rounded-full bg-white opacity-25 w-32 h-32 absolute inset-96"
    
            },
            {
                id:6,
                css_classes: "rounded-full bg-white opacity-40 w-16 h-16 absolute inset-80"
    
            },
            {
                id:7,
                css_classes: "rounded-full bg-white opacity-25 w-16 h-16 absolute inset-y-1/3 inset-x-2/3"
    
            },
            {
                id:8,
                css_classes: "rounded-full bg-white opacity-25 w-28 h-28 absolute inset-y-2/3 inset-x-3/4"
    
            },
            {
                id:9,
                css_classes: "rounded-full bg-white opacity-25 w-12 h-12 absolute inset-x-96 inset-y-3/4"
    
            },
            
        ]);
  

  return (
    <GlobalContext.Provider
      value={{
        showModal, 
        setshowModal,
        loadModal,
        setloadModal,
        loadBgColor,
        setloadBgColor,
        get_Modal,
        hide_Modal, 
        gradients,
        setGradients,
        boards,
        setBoards,
        cards,
        setCards,
        shapes,
        priorities, 
        setPriorities,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalProvider};