import { Item } from './Item'
/**
 * ボタン情報の型
 * @property id - ボタンのID
 * @property name - ボタンの名前
 */
type ItemInfo = {
  id: string,
  name: string
};

/**
 * 要素の型
 * @property imgId - 画像のID
 */
type EleInfoProps = { selectItemInfoArray: ItemInfo[]; itemClickFnc: (id: string) => void; };
export const SideMenu: React.FC<EleInfoProps> = (props) => {
// export default function Img ({ imgId }: { imgId: string }) {
  return (
    <div className="item-area">
      アイテムエリア
      {props.selectItemInfoArray.map((ele: ItemInfo) => {
        return (
          <Item key={ele.id} id={ele.id} itemName={ele.name} itemClickFnc={() => props.itemClickFnc(ele.id)}></Item>
        );
      })}
    </div>
  );
}