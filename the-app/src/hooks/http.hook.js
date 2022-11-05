import { useCallback, useState } from "react"

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        console.log("body", body);
        try {
            if (body) {
                body = JSON.stringify(body)
                // console.log("body1", body);
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так ')
            } 
            setLoading(false)
            return data

        } catch (error) {
            setLoading(false)
            setError(error.message)
            throw error
        }

        
    }, [])

    const clearError = () => setError(null)

    return { loading, request, error, clearError}
}

export const postData = async (url = '', data = {}) => {
    console.log('3333333333333333', data);
    const response =  await fetch('http://localhost:5000/api/booksearch',
        {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
              },
            //   redirect: 'follow',
              body: JSON.stringify(data)
        })
        console.log('111111111', response);
      return response.json()
    }
      