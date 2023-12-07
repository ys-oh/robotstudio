// This Source Code Form is subject to the terms of the Mozilla Public
// License, v2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at http://mozilla.org/MPL/2.0/

import { SvgIcon, SvgIconProps } from "@mui/material";

export function FoxgloveLogo(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon viewBox="0 0 400 400" {...props}>
      <title>Foxglove</title>
      <g fill="currentColor">
        <path stroke="#FFFFFF" stroke-width="2" fill="#B5B5B5" d="M 26.7 140.62 C 26.7 92.56 97.9 92.56 97.9 140.62 L 97.9 140.62 L 97.9 265.22 C 97.9 313.28 26.7 313.28 26.7 265.22 L 26.7 140.62 M 263.44 121.04 C 297.26 85.44 348.88 135.28 311.5 174.44 L 208.26 286.58 C 174.44 322.18 119.26 274.12 154.86 236.74 L 263.44 121.04Z"></path>
        <path stroke="#FFFFFF" stroke-width="2" fill="#FF3E10" d="M 309.72 270.56 C 274.12 238.52 313.28 195.8 348.88 227.84 L 363.12 240.3 C 396.94 274.12 359.56 315.06 323.96 283.02 L 309.72 270.56Z"></path>
      </g>
    </SvgIcon>
  );
}
