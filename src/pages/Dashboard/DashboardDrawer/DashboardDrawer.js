import * as React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { AppBar, Box, CssBaseline, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { MenuIcon, PlusSmIcon, HomeIcon, DocumentTextIcon, PencilIcon, CreditCardIcon, ShoppingBagIcon, AnnotationIcon, LogoutIcon, UserAddIcon } from '@heroicons/react/outline';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import AddProducts from '../AddProducts/AddProducts';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import useAuth from '../../../Hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../SignIN/AdminRoute/AdminRoute';

const drawerWidth = 240;

function DashboardDrawer(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const history = useHistory();

    const handleLogOut = () => {
        logOut();
        history.replace('/')

    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="bg-indigo-600 h-screen text-white">
            <Toolbar />
            <List>
                <Link to='/'>
                    <ListItem button>
                        <ListItemIcon>
                            <HomeIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                {
                    !admin &&
                    <div>
                        <Link to={`${url}`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <ShoppingBagIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="My Orders" />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/payment`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <CreditCardIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Payment" />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/review`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <AnnotationIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Review" />
                            </ListItem>
                        </Link>
                    </div>
                }
                {
                    admin &&
                    <div><Link to={`${url}/manage-orders`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DocumentTextIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </ListItemIcon>
                            <ListItemText primary="Manage orders" />
                        </ListItem>
                    </Link>
                        <Link to={`${url}/manage-products`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PencilIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Manage Products" />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/add-products`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <PlusSmIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Add a Product" />
                            </ListItem>
                        </Link>
                        <Link to={`${url}/make-admin`}>
                            <ListItem button>
                                <ListItemIcon>
                                    <UserAddIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                </ListItemIcon>
                                <ListItemText primary="Make Admin" />
                            </ListItem>
                        </Link>
                    </div>
                }
                <ListItem button onClick={handleLogOut}>
                    <ListItemIcon>
                        <LogoutIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </ListItemIcon>
                    <ListItemText primary="Sign Out" />
                </ListItem>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar className="bg-white">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </IconButton>
                    <Typography className="text-gray-600" variant="h5" noWrap component="div">
                        <p className="font-bold">Hello, {user?.displayName}</p>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <AdminRoute path={`${path}/manage-orders`}>
                        <ManageOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-products`}>
                        <AddProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

DashboardDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardDrawer;
