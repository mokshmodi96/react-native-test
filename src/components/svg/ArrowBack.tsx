import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

function ArrowBack(props: SvgProps) {
  return (
    <Svg width={28} height={24} viewBox="0 0 12 8" fill="none" {...props}>
      <Path
        d="M3.858 4.167l2.15-2.159L4.833.833.667 5l4.166 4.167 1.175-1.175-2.15-2.159h13.475V4.167H3.858z"
        fill="#FFF"
      />
    </Svg>
  );
}

export default ArrowBack;
