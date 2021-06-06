import {useEffect} from 'react'
import { projectFirestore } from '../firebase/config'

function useDeleteStore(ID){
    useEffect(()=>{
        projectFirestore.collection("my-gallery").doc(ID).delete().then(() => {
            alert("deleted successfully!")
        }).catch((error) => {
            alert("error! can't delete Try again!");
        });

    },[ID]);


}
export default useDeleteStore;