import React, { useState } from 'react';
import { Tabs, Tab } from "@material-ui/core";

function ServiceTabs (props) {
    const [tabValue, setTabValue] = useState(props.tabValue);

    const onTabsChange = (event, newValue) => {
        setTabValue(newValue);
        props.onTabChange(newValue);
    };

    return (
        <Tabs
            value={tabValue}
            onChange={onTabsChange}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="1. Trade-in" />
            <Tab label="2. Cash/Finance" />
            <Tab label="3. Delievery method" />
            <Tab label="4. Review & Payment" />
        </Tabs>
    );
}

export default ServiceTabs;