    // instalamos axios con npm i axios
import axios from 'axios';
import { ref } from 'vue';

export const categoryArray = [
    {id:1, cat:"Creatures",name:"creatures", url:"https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"},
    {id:2, cat:"Equipment",name:"equipment", url:"https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment"},
    {id:3, cat:"Materials",name:"materials", url:"https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials"},
    {id:4, cat:"Monsters",name:"monsters", url:"https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters"},
    {id:5, cat:"Treasure",name:"treasure", url:"https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure"},
]

export const firstMayusc = (cadena) =>{
    cadena = cadena[0].toUpperCase() + cadena.substring(1);
    return cadena;
}

export const useGetData = () => {
    const data = ref(null); //no sabemos qué datos nos devolverá
    const loading = ref(true); //mientras cargan los datos
    const error = ref(null);

    const getData = async(url) => {

        // console.log("url: ", url);
        loading.value = true;
        try {
            const res = await axios.get(url);
            data.value = res.data.data;
            // console.log("datos: ", data.value);
        }catch(e){
            console.log(e);
            error.value = 'Error de servidor';
        }finally{
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading,
        error
    }
}