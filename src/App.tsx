import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

//Components
import Card from './components/Card';
import Loading from './components/Loading'

const App = () => {
  const [dataList, setDataList] = React.useState([])
  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL || '');

    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    })

    socket.on('list', (data: any) => setDataList(data))

    socket.on('disconnect', () => setDataList([]))

  }, [])
  return (
    <div className="App">
      {
        dataList.length === 0 ?
          <Loading />
          :
          <div className='container'>
            {
              dataList.map((data: any) => <Card key={data.key} dataSet={data} />)
            }
          </div>
      }
    </div>
  )
}

export default App;