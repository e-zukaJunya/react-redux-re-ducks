import React from 'react'

const IgnoreAuth = () => {
    return (
        <div>
            <h1>認証状態を問わないページ</h1>
        </div>
    )
}

export default React.memo(IgnoreAuth)
