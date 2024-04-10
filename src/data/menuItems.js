import {create} from "zustand";

export const useStore = create((set) => ({

menuItems: [
    {
      id: 1,
      name: "Köttbullar med Potatismos",
      image: "https://mylla.se/cdn/shop/products/kottbullar-med-potatismos-maten-e-klar-434097_700x700.webp?v=1676900287",
      price: 150,
      description: "Svenska köttbullar serverade med potatismos, brunsås, lingon och pressgurka."
    },
    {
      id: 2,
      name: "Korvstroganoff",
      image: "https://res.cloudinary.com/coopsverige/image/upload/f_auto,fl_progressive,q_90,g_center,h_800,w_800/v1669215786/cloud/267500.jpg",
      price: 120,
      description: "En klassisk rätt gjord på strimlad korv i en stroganoff-sås, serverad med ris."
    },
    {
      id: 3,
      name: "Panerad fisk med koktpotatis",
      image: "https://matinspo.se/wp-content/uploads/2020/03/20200225_184135-scaled.jpg",
      price: 150,
      description: "Panerad vit fisk som serveras med kokt potatis och remouladsås."
    },
    {
      id: 4,
      name: "Pyttipanna",
      image: "https://static.cdn-expressen.se/images/37/f4/37f4f860949644e4892e80f84bcad97a/4x3/1920@80.jpg",
      price: 120,
      description: "Traditionell pyttipanna med tärnad potatis, korv och lök, toppad med stekt ägg och rödbetor."
    },
    {
      id: 5,
      name: "Pannbiffar",
      image: "https://eu-central-1.linodeobjects.com/tasteline/2015/08/klassiska_pannbiffar_med_klyftpotatis_och_broccoli.jpg",
      price: 150,
      description: "Hemlagade pannbiffar med löksky, serverade med potatispuré och lingon."
    },
    {
      id: 6,
      name: "Biff Wallenberg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCuBSuTaP2ltpSdehEdGBVWvZ5qk1jrPRnHFw4Uv8_A&s",
      price: 150,
      description: "Klassisk Biff Wallenberg serverad med potatispuré, ärtor, lingon och skirat smör."
    }
  ],

  addFood: (item) =>
  set((state) => ({
    menuItems: [
      ...state.menuItems,
      {
        name: item.name,
        id: item.name,
        image: item.image,
        price: item.price,
        description: item.description
      }
    ]
  })),

  deleteItem: (id) =>
  set((state) => ({
    menuItems: state.menuItems.filter((item) => item.id !== id)
  })),

  updateItem: (updatedItem) =>
  set((state) => ({
    menuItems: state.menuItems.map((item) => item.id === updatedItem.id ? {
      ...item,

      name: updatedItem.name,
      description: updatedItem.description,
      image: updatedItem.image,
    } : item)
  }))

}));