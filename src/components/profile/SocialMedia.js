import React from 'react'

    const SocialMedia = props => {
        const { arrayList } = props;
        const column = 12 / arrayList.length;
  return (
    <div>
        <div className='row'>
         {arrayList &&
            arrayList.length > 0 &&
            arrayList.map(data => (
              <div className={`col-${column}`}>
                <div className="row">
                  <div className="col3">
                    <img src={data.img} width="50px" />
                  </div>
                </div>
                </div>
          
            ))}
            </div>
    </div>
  )
}

export default SocialMedia