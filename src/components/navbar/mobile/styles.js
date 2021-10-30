import { AppColors } from "../../../assets/style/colors"

const width = window.innerWidth

export const Styles = {
    navbar: {
        position: "fixed",
        top: 0,    
        width: "80%",
        padding: "10px 10%",
        backgroundColor: AppColors.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 0px 6px rgba(0,0,0,0.6)",
        height: "10vh",
    },

    leftSide: {
        flex: 1,
    },

    logo: {
        height: "12vh",
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
        //border: "1px solid black",
        border: "none",
        fontSize: "2em",
        width: 50,
        height: 50,
        zIndex: 10,        
    },

    menuContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        top: "0",
        height: "100vh",
        backgroundColor: AppColors.light,
    },

    navbarLink: {
        color: AppColors.dark,
        textDecoration: "none",  
        padding: 20, 
        borderBottom: `1px solid ${AppColors.main}`,
        width: "60vw",
        margin: 10,
        textAlign: "center",
    }
}