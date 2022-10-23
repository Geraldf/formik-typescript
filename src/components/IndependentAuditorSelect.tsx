import { BetterSelect } from "./StyledFields";

const IndependentAuditorSelect = ({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) => {
  return (
    <>
      <BetterSelect onChange={(e) => onChange(e.target.value)} value={value}>
        <option>Peter Jorgensen</option>
        <option>Fred Hunger</option>
        <option>Anna Kline</option>
        <option>Julia Levenstein</option>
      </BetterSelect>
    </>
  );
};

export default IndependentAuditorSelect;
