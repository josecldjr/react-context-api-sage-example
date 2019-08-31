import React, {useEffect} from 'react'


Text = (show) => {

    useEffect(() =>{
        console.log('MOUNT');
        return () => {
            console.log('Un-MOUNT');
            
        }
    })

    return (
    <div>
        <label> AAA</label>

    </div>)
}

export default React.memo(Text)