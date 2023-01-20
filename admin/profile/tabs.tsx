import React from "react";
import { useTranslation } from "react-i18next";

import { FavoriteIcon } from "../../../core/icon";

import { TabsHeader, TabLabel, TabPanel } from "../../../core/components";

export default function Tabs() {
  const { t } = useTranslation(["market", "game"]);
  const [value, setValue] = React.useState(0);

  return (
    <div style={{ paddingTop: "20px" }}>
      <TabsHeader value={value} setValue={setValue}>
        <TabLabel index={2} icon={<FavoriteIcon />} label={t("favorites")} />
      </TabsHeader>
      <TabPanel value={value} index={0}>
        {t("favorites")}
      </TabPanel>
    </div>
  );
}
