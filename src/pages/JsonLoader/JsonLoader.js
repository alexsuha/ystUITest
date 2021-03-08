import React, { useEffect, useState } from 'react'

const JsonLoader = () => {
    const [data,setData]=useState([]);
    const getData=()=>{
        // fetch('https://carnexcdn.azureedge.net/public/WP1AA2AY4KDA105740/ex_interior.json'
        // fetch('https://carnexcdn.azureedge.net/public/WP1AA2AY4KDA105740/chassis.json'
        fetch('https://carnexcdn.azureedge.net/public/WP1AA2AY4KDA105740/roadtest.json'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
        const str = "[\"BACKUP CAMERA\",\"AUX\",\"POWER SUNROOF\",\"BANG & OLUFSEN AUDIO\", \"BLUETOOTH\"]";
        const jdata = JSON.parse(str);
        console.log(jdata);
    },[])
    return (
        <div className="JsonLoader">
        {
        data && data.length>0 && data.map((item)=><p>{item.name}{":"}{item.status}{":"}{item.msg}</p>)
        }
        </div>
    );
}

export default JsonLoader
