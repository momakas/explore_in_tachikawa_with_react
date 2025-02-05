import { Map } from './Map';
import { Img } from './Img';
import { TextContent } from './TextContent';

/**
 * ボタン情報の型
 * @property id - ボタンのID
 * @property name - ボタンの名前
 */
type BtnInfo = {
  id: string,
  name: string
};

/**
 * 要素の型
 * @property mapId - 地図のID
 * @property imgId - 画像のID
 * @property btnClickFnc - 画像のID
 */
type EleInfoProps = { mapId: string; imgId: string; btnClickFnc: (id: string) => void; selectBtnInfoArray: BtnInfo[]; contentId: string; contentStr: string; };
export const MainContents: React.FC<EleInfoProps> = (props) => {
// export default function Img ({ imgId }: { imgId: string }) {
  return (
    <>
      <Map mapId={props.mapId}></Map>
      <Img imgId={props.imgId}></Img>
      <TextContent btnClickFnc={props.btnClickFnc} selectBtnInfoArray={props.selectBtnInfoArray} contentId={props.contentId} contentStr={props.contentStr}></TextContent>
    </>
  );
}