import { useState } from "react"
export const useAPICall = (func: Function | Function[], call: boolean = true) => {
    const [state, setState] = useState({
        loading: true,
        fetch: (...data : any[]) => {
            setState({...state, loading : true, error : null, data : null})
            //@ts-ignore
            func.call(func, ...data).then(data => {
                setState({...state, loading :false, error : null, data})
            }).catch(err => {
                setState({...state, loading : false, error : err, data : null})
            })
        },

        fetchMultiple : function() {
            if(Array.isArray(func)){
                setState({...state, loading : true, error : null, data : null})
                let promiseArr : Promise<any>[] = []
                if(arguments.length === 0){
                    func.forEach(fn => {
                        promiseArr.push(fn())
                    })
                } else if(Array.isArray(arguments[0])){
                    let arr = [...arguments[0]]
                    func.forEach((fn,i) => {
                        promiseArr.push(fn.apply(fn, arr[i]))
                    })
                } else {
                    let arr = [...arguments]
                    func.forEach(fn => {
                        promiseArr.push(fn.apply(fn, arr))
                    })
                }

                Promise.all(promiseArr).then(data => {
                    //@ts-ignore
                    setState({...state, loading :false, error : null, data})
                }).catch(err => {
                    setState({...state, loading : false, error : err, data : null})
                })
            }
        },
        data: null,
        error: null
    })

    if (call) {
        if(typeof func === "function"){
            func().then(data => {
                setState({ ...state, data, loading: false, error: null })
            }).catch(err => {
                setState({...state, error : err, data : null, loading : false})
            })
        } else if(Array.isArray(func)) {
            let promiseArr : Promise<any>[] = []
            func.forEach(fn => {
                promiseArr.push(fn())
            })
            Promise.all(promiseArr).then(data => {
                //@ts-ignore
                setState({ ...state, data, loading: false, error: null })
            }).catch(err => {
                setState({...state, error : err, data : null, loading : false})
            })
        }
       
    }

    return state

}