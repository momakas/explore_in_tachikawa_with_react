/**
 * 要素の型
 * @property id - ボタンのID
 * @property buttonName - ボタンの名前
 * @property btnClickFnc - ボタン押下時に呼び出される関数
 */
type EleInfoProps = { id: string; buttonName: string; btnClickFnc: () => void };
export const SelectButton: React.FC<EleInfoProps> = (props) => {
// export default function SelectButton ({ id, buttonName, btnClickFnc }: {id: string; buttonName: string; btnClickFnc: () => void}) {
  return (
    <button id={props.id} onClick={props.btnClickFnc}>
      <label>{props.buttonName}</label>
    </button>
  );
}