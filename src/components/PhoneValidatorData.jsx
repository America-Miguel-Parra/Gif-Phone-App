import React, { useEffect, useState } from 'react'

const PhoneValidatorData = () => {

    const [validator, setValidator] = useState([])
  
    useEffect(() => {
      const PhoneData = async () => {
        const response = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=104ce7d0cc014b719d864ff19ea7171a&phone=14152007986`)
        const data = await response.json()
        console.log(data)
        // setValidator(data.data)
      }
  
      PhoneData()
    }, [])
  
    return (
      <div>PhoneValidator</div>
    )
  }

export default PhoneValidatorData