/**
 * 要素の型
 * @property itemId - アイテムのID
 */
type EleInfoProps = { id: string; itemName: string; itemClickFnc: () => void };
export const Item: React.FC<EleInfoProps> = (props) => {
// export default function Img ({ id, itemName, itemClickFnc }: { id: string }) {
  return (
    <div className="item" id={props.id} onClick={props.itemClickFnc}>{props.itemName}</div>
  );
}