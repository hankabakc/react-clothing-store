import React, { useState } from 'react';
import SidebarCartMenu from './SidebarCartMenu';
import AddToCardButton from '../UI/AddToCardButton';

function AddToCardLayout() {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSidebar = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div>
            <SidebarCartMenu isToggled={isToggled} toggleSidebar={toggleSidebar} />
            <AddToCardButton toggleSidebar={toggleSidebar} />
        </div>
    );
}

export default AddToCardLayout;
