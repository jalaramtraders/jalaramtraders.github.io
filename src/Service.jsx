import React from 'react';
import Sdata from './Sdata';
import Card from './Card';

const Services = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Our Services </h1>
      </div>
      <div className='container-fluid mb-5'>
        {/* TODO: Remove style={{ height: '55vh' }} once data map is used */}
        <div className='row' style={{ height: '55vh' }}>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              <h2 className='text-center'>Service Page Under Development</h2>

              {/* {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
