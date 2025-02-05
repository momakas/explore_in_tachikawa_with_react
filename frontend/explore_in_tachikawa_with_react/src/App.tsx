import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { MainContents } from './component/MainContents'
import { SideMenu } from './component/SideMenu'

export const App: React.FC = () => {
  // サンプルのコード
  const [count, setCount] = useState(0)
  // サンプルのコード_終わり

  const [pageId, setPageId] = useState('page_1')
  const [mapId, setMapId] = useState('map_1');
  const [imgId, setImgId] = useState('img_1');
  const [contentId, setContentId] = useState('content_1');
  const [selectBtnInfoArray, setSelectBtnInfoArray] = useState(
    [
      {
        id: 'select_btn_1_1',
        name: 'ボタン1'
      },
      {
        id: 'select_btn_1_2',
        name: 'ボタン2'
      },
      {
        id: 'select_btn_1_3',
        name: 'ボタン3'
      }
    ]
  );
  const [clickedId, setClickedId] = useState('1');

  const [selectItemInfoArray, setSelectItemInfoArray] = useState(
    [
      {
        id: 'select_item_1_1',
        name: 'アイテムなし'
      },
    ]
  );
  const [clickedItemId, setClickedItemId] = useState('1');
  const [contentStr, setContentStr] = useState('本文エリア');
  
  // ボタンクリック時イベント
  type BtnClickFnc = (selectBtnId: string) => void;
  const btnClickFnc: BtnClickFnc = (selectBtnId) => {
    console.log('mapId, imgId, selectBtnInfoArray, selectBtnId', mapId, imgId, selectBtnInfoArray, selectBtnId);
    // 選択肢によってコンポーネント切り替え
    setClickedId(selectBtnId);
    // 選択肢から次のページを設定
    let nextPageInfo = getNextPage(pageId, selectBtnId);
    setPageId(nextPageInfo.pageId);
    setSelectBtnInfoArray(nextPageInfo.nextSelectBtnInfoArray);
    let pageInfo = pageInfoObj[nextPageInfo.pageId];
    setContentId(pageInfo.contentId)
    setContentStr(contentStrObj[pageInfo.contentId]);
    setMapId(pageInfo.mapId);
    setImgId(pageInfo.imgId);
  };

  type ItemClickFnc = (selectItemId: string) => void;
  /**
   * アイテムクリック時イベント
   * @param selectItemId 選択アイテムID
   */
  const itemClickFnc: ItemClickFnc = (selectItemId) => {
    console.log('mapId, imgId, selectBtnInfoArray, selectBtnId', mapId, imgId, selectBtnInfoArray, selectItemId);
    // 選択したアイテムによってコンポーネント切り替え
    // ・・・
  };

  type NextPage = (pageId: string, selectBtnId: string) => {pageId: string; nextSelectBtnInfoArray: {id: string; name: string}[]};
  /**
   * 次ページを設定
   * @param pageId ページID
   * @param selectBtnId 選択ボタンID
   * @returns 次ページ情報
   */
  const getNextPage: NextPage = (pageId, selectBtnId) => {
    let nextPageInfo: {
      pageId: string; nextSelectBtnInfoArray: {id: string; name: string}[]
    } = {
      pageId: '', nextSelectBtnInfoArray: []
    };
    let nextPageId: string = '';
    let nextSelectBtnInfoArray: {id: string; name: string}[] = [];
    switch(pageId) {
      case 'page_1': {
        switch(selectBtnId) {
          case `select_btn_${pageId.replace('page_', '')}_1`: {
            nextPageId = 'page_2';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_2`: {
            nextPageId = 'page_3';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_3`: {
            nextPageId = 'page_4';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
            ];
            break;
          }
        }
        break;
      }
      case 'page_2': {
        switch(selectBtnId) {
          case `select_btn_${pageId.replace('page_', '')}_1`: {
            nextPageId = 'page_3';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_2`: {
            nextPageId = 'page_4';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_3`: {
            nextPageId = 'page_5';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
        }
        break;
      }
      case 'page_3': {
        switch(selectBtnId) {
          case `select_btn_${pageId.replace('page_', '')}_1`: {
            nextPageId = 'page_2';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_2`: {
            nextPageId = 'page_4';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_3`: {
            nextPageId = 'page_5';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
        }
        break;
      }
      case 'page_4': {
        switch(selectBtnId) {
          case `select_btn_${pageId.replace('page_', '')}_1`: {
            nextPageId = 'page_2';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_2`: {
            nextPageId = 'page_3';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
        }
        break;
      }
      case 'page_5': {
        switch(selectBtnId) {
          case `select_btn_${pageId.replace('page_', '')}_1`: {
            nextPageId = 'page_2';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_2`: {
            nextPageId = 'page_3';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_3`,
                name: 'ボタン3'
              }
            ];
            break;
          }
          case `select_btn_${pageId.replace('page_', '')}_3`: {
            nextPageId = 'page_4';
            nextSelectBtnInfoArray = [
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_1`,
                name: 'ボタン1'
              },
              {
                id: `select_btn_${nextPageId.replace('page_', '')}_2`,
                name: 'ボタン2'
              },
            ];
            break;
          }
        }
        break;
      }
    }
    nextPageInfo.pageId = nextPageId;
    nextPageInfo.nextSelectBtnInfoArray = nextSelectBtnInfoArray;
    return nextPageInfo;
  };

  // コンポーネントの返却
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
      <div id={pageId}>
        <SideMenu selectItemInfoArray={selectItemInfoArray} itemClickFnc={itemClickFnc}></SideMenu>
        <MainContents mapId={mapId} imgId={imgId} btnClickFnc={btnClickFnc} selectBtnInfoArray={selectBtnInfoArray} contentId={contentId} contentStr={contentStr} ></MainContents>
      </div>
      
    </>
  )
}

// ページ情報のオブジェクト
interface PageInfoObj{
  [key: string]: PageInfo
}
interface PageInfo{
  mapId: string; imgId: string; contentId: string; contentStr: string
}
const pageInfoObj: PageInfoObj = {
  page_1: {
    mapId:      'map_1',
    imgId:      'img_1',
    contentId:  'content_1',
    contentStr: '',
  },
  page_2: {
    mapId:      'map_2',
    imgId:      'img_2',
    contentId:  'content_2',
    contentStr: '',
  },
  page_3: {
    mapId:      'map_3',
    imgId:      'img_3',
    contentId:  'content_3',
    contentStr: '',
  },
  page_4: {
    mapId:      'map_4',
    imgId:      'img_4',
    contentId:  'content_4',
    contentStr: '',
  },
  page_5: {
    mapId:      'map_5',
    imgId:      'img_5',
    contentId:  'content_5',
    contentStr: '',
  },
  page_6: {
    mapId:      'map_6',
    imgId:      'img_6',
    contentId:  'content_6',
    contentStr: '',
  },
};

// 本文情報のオブジェクト
interface ContentStrObj{
  [key: string]: string
}
const contentStrObj: ContentStrObj = {
  content_1: '本文１\n2行目',
  content_2: '本文２\n2行目',
  content_3: '本文３\n2行目',
  content_4: '本文４\n2行目',
  content_5: '本文５\n2行目',
  content_6: '本文６\n2行目',
};