import React from "react";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from "@fortawesome/react-native-fontawesome";
import { library, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, far);

export type ShortPrefix = "r" | "s";

export default ({
  icon,
  type,
  style,
  size,
}: {
  icon: IconName;
  type?: ShortPrefix;
  style?: FontAwesomeIconStyle;
  size: number;
}) => (
  <FontAwesomeIcon
    size={size}
    style={style}
    icon={[`fa${type || "s"}` as IconPrefix, icon]}
  />
);
