import { SelectButton } from './SelectButton'
/**
 * ボタン情報の型
 * @property id - ボタンのID
 * @property name - ボタンの名前
 */
type BtnInfo = {
  id: string,
  name: string
};

// export default function TextContent({ btnClickFnc, selectBtnInfoArray }: { btnClickFnc: (id: string) => void; selectBtnInfoArray: BtnInfo[] }) {
type ButtonInfoProps = { btnClickFnc: (id: string) => void; selectBtnInfoArray: BtnInfo[]; contentStr: string };
export const TextContent: React.FC<ButtonInfoProps> = (props) => {

  return (
    <div id="text_content_area">
      <div id="text_content">
        <p>{props.contentStr}</p>
      </div>
      <div id="btn_area">
        {props.selectBtnInfoArray.map((ele: BtnInfo) => {
          return (
            <SelectButton key={ele.id} id={ele.id} buttonName={ele.name} btnClickFnc={() => props.btnClickFnc(ele.id)}></SelectButton>
          );
        })}
      </div>
    </div>
  );
};