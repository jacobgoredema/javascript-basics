class EasyHTTP{
    // Make an http get request
    // get(url){
    //     return new Promise((resolve, reject) =>{
    //         fetch(url)
    //             .then(res => res.json())
    //             .then(data => resolve(data))
    //             .catch(err => reject(err));

    //     });
    // }

    // Make an http POST request
    // post(url, data){
    //     return new Promise((resolve, reject) => {
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //         .then(res => res.json())
    //         .then(data => resolve(data))
    //         .catch(err => reject(err));
    //     });
    // }

    // Make an HTTP PUT Request
    put(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data = resolve(data))
            .then(err => reject(err));
        });
    }


    // Mdke an http Delete Request
    delete(url){
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'Application/json'
                }
            })
            .then(res =>res.json())
            .then(() => resolve('Resource Deleted...'))
            .catch(err => reject(err));
        });
    }
}