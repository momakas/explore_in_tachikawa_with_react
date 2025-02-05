import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Map } from './component/Map'
import { Img } from './component/Img'
import { TextContent } from './component/TextContent'

export const App: React.FC = () => {
  // サンプルのコード
  const [count, setCount] = useState(0)
  // サンプルのコード_終わり

  const [mapId, setMapId] = useState('map_1');
  const [imgId, setImgId] = useState('img_1');
  const [selectBtnInfoArray, setSelectBtnInfoArray] = useState(
    [
      {
        id: 'select_btn_id_1_1',
        name: 'ボタン1'
      },
      {
        id: 'select_btn_id_1_2',
        name: 'ボタン2'
      },
      {
        id: 'select_btn_id_1_3',
        name: 'ボタン3'
      }
    ]
  );
  const [clicked_id, setClickedId] = useState('1');
  const [contentStr, setContentStr] = useState('本文エリア');
  
  type BtnClickFnc = (selectBtnId: string) => void;
  const btnClickFnc: BtnClickFnc = (selectBtnId) => {
    console.log('mapId, imgId, selectBtnInfoArray, selectBtnId', mapId, imgId, selectBtnInfoArray, selectBtnId);
    // 選択肢によってコンポーネント切り替え
    setClickedId(selectBtnId);
    setContentStr(getContentString(selectBtnId));
    // ・・・
  };
  return (
    <>
      {/* サンプルのコード */}
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* サンプルのコード_終わり */}

      <hr />
      <Map mapId={mapId}></Map>
      <Img imgId={imgId}></Img>
      <TextContent btnClickFnc={btnClickFnc} selectBtnInfoArray={selectBtnInfoArray} contentStr={contentStr}></TextContent>

    </>
  )
}

/**
 * 押下した選択肢ボタンから本文を取得する
 * @param selectBtnId - 押下された選択肢ボタン
 * @returns - 変更される本文
 */
function getContentString(selectBtnId: string) {
  let content: string;
  switch(selectBtnId) {
    case 'select_btn_id_1_1': {
      content = '本文エリア１';
      break;
    }
    case 'select_btn_id_1_2': {
      content = '本文エリア２';
      break;
    }
    case 'select_btn_id_1_3': {
      content = '本文エリア３';
      break;
    }
    default: {
      content = '本文エリア';
    }
  }
  return content;
}