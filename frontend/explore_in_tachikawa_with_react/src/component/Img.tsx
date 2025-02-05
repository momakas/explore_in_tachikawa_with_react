/**
 * 要素の型
 * @property imgId - 画像のID
 */
type EleInfoProps = { imgId: string };
export const Img: React.FC<EleInfoProps> = (props) => {
// export default function Img ({ imgId }: { imgId: string }) {
  return (
    <div className="img-area" id={props.imgId}>イメージエリア</div>
  );
}