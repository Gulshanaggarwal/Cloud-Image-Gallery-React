import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore ,timestamp} from '../firebase/config'
import shortUrl from 'node-url-shortener'

function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, seturl] = useState('');
    useEffect(() => {

        // reference for file

        

           
                let storageRef = projectStorage.ref(file.name);
                console.log(storageRef);
                let collectionRef = projectFirestore.collection('my-gallery');

                storageRef.put(file).on('state_changed', (snap) => {
                    let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                    setProgress(percentage);

                }, (err) => {
                    setError(err);
                }, async () => {
                    let url = await storageRef.getDownloadURL();
                    const createdAt = timestamp();
                    shortUrl.short(url,(err,newUrl)=>{
                        collectionRef.add({ url:newUrl,createdAt});
                        seturl(newUrl);
                    })
                   
                })


    },[file]);

    return { progress, error, url };


}
export default useStorage;