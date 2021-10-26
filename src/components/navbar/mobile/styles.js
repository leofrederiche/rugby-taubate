import { AppColors } from "../../../assets/style/colors"

const width = window.innerWidth

export const Styles = {
    navbar: {
        position: "fixed",
        flex: 1,
        top: 0,
        width: "80%",
        padding: "10px 10%",
        backgroundColor: AppColors.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 0px 6px rgba(0,0,0,0.6)",
    },

    leftSide: {
        flex: 1,
    },

    logo: {
        width: 80,     
        float: "left",
        marginRight: 20,           
    },

    title: {
        display: width < 1024 ? "none" : "block",
    },

    rightSide: {
        display: "flex",
    },

    menu: {
        backgroundColor: AppColors.incolor,
        color: AppColors.primary,
        border: "1px solid black",
        width: 50,
        height: 50,        
    },

    menuContainer: {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "80%",
        right: 0,
        top: 110,
        height: "100vh",
        backgroundColor: AppColors.light,
    },

    navbarLink: {
        color: AppColors.dark,
        textDecoration: "none",  
        padding: 20,      
    }
}