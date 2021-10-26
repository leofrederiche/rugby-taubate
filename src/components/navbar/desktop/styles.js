import { AppColors } from "../../../assets/style/colors"

export const Styles = {
    navbar: {
        flex: 1,
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

    rightSide: {
        
    },

    navbarLink: {
        color: AppColors.dark,
        textDecoration: "none",
        fontWeight: "lighter",
        marginLeft: 10,
    }
}