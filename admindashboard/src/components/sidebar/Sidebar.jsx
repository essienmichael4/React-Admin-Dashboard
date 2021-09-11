import './sidebar.css'
import { Assessment, AttachMoney, DynamicFeed, LineStyle, LocalMall, Mail, Message, PermIdentity, Report, Timeline, TrendingUp } from '@material-ui/icons';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">
                        Dashboard
                    </h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyle />
                            Home
                        </li>
                        <li className="sidebarListItem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">
                        Quick Menu
                    </h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <PermIdentity />
                            User
                        </li>
                        <li className="sidebarListItem">
                            <LineStyle />
                            products
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <Assessment />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">
                        Notifications
                    </h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Mail />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed />
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h2 className="sidebarTitle">
                        Staff
                    </h2>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LocalMall/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;