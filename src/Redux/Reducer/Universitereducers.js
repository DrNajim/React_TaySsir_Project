import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
    name: "Universite",
    initialState: {
        Universites: [
            { Université: "Université Mohamed V - Rabat",Region:"Rabat", image:"um5.png", Site_web: "www.um5.ac.ma" },
            { Université: "Université Hassan II - Casablanca",Region:"Casablanca",image:"uh2m.png",  Site_web: "www.univh2c.ma" },
            { Université: "Université Sidi Mohammed Ben Abdellah - Fès",Region:"Fès",image:"usmba.png",  Site_web: "www.usmba.ac.ma"},
            { Université: "Université Mohammed Premier - Oujda",Region:"Oujda",image:"ump.png",  Site_web: "www.ump.ma" },
            { Université: "Université Cadi Ayyad - Marrakech",Region:"Marrakech",image:"uca.png",  Site_web: "www.uca.ma" },
            { Université: "Université Moulay Smail - Meknès",Region:"Meknès",image:"umi.png",  Site_web: "www.umi.ac.ma" },
            { Université: "Université Abdelmalek Essaadi - Tétouan",Region:"Tétouan",image:"uae.png",  Site_web: "www.uae.ma" },
            { Université: "Université Chouaib Doukkali – El jadida",Region:"El jadida",image:"usd.png",  Site_web: "www.ucd.ac.ma" },
            { Université: "Université Ibn Tofail – Kénitra",Region:"Kénitra",image:"uit.png",  Site_web: "www.uit.ac.ma" },
            { Université: "Université Ibn Zohr - Agadir",Region:"Agadir",image:"uiz.png",  Site_web: "www.uiz.ac.ma" },
            { Université: "Université Hassan Premier - Settat",Region:"Settat",image:"uh1.png",  Site_web: "www.uh1.ac.ma" },
            { Université: "Université Sultan Moulay Slimane – Béni Mellal",Region:"Béni Mellal",image:"usms.png",  Site_web: "www.usms.ac.ma" }
        ]
    },
    reducers: {
    }
})
export default ListSlice.reducer