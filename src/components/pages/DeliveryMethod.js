import React from 'react';
import ServiceTabs from '../ServiceTabs';

function DeliveryMethod(props) {
    return <ServiceTabs
                tabValue={props.tabValue}
                onTabChange={props.onTabChange}
            />
}

export default DeliveryMethod;