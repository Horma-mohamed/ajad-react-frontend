function Gallery(params) {useEffect(()=>{
    
            fetch('http://localhost:8000/api-auth/Files/')
            .then((res)=>{
                    return res.json()
            })
            .then((data)=>{
                setData(data)
                console.log(data)
                setGallery(data)
                //console.log(data)
            })
        },[])
    return 
}