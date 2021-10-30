import { AppColors } from "../../../assets/style/colors"

export const Styles = {
    navbar: {
        position: "fixed",
        width: "80%",
        top: 0,        
        padding: "10px 10%",
        backgroundColor: AppColors.light,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 0px 6px rgba(0,0,0,0.6)",
        height: "12vh",
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
        color: AppColors.color2,
    },

    rightSide: {
        
    },

    navbarLink: {
        color: AppColors.dark,
        textDecoration: "none",
        fontWeight: "lighter",
        marginLeft: "3vw",
    }
}