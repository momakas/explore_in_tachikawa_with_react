/**
 * 要素の型
 * @property mapId - 地図のID
 */
type EleInfoProps = { mapId: string };
export const Map: React.FC<EleInfoProps> = (props) => {
// export default function Map ({ mapId }: { mapId: string }) {
  return (
    <div className="map-area" id={props.mapId}>マップエリア</div>
  );
}