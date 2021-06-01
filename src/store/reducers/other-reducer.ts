import shaki1 from "../../images/shaki/shaki1.jpg"
import shaki2 from "../../images/shaki/shaki2.jpg"
import shaki3 from "../../images/shaki/shaki3.jpg"
import shaki4 from "../../images/shaki/shaki4.jpg"




const otherInitialState={
     others : [
        {
            name: "Շաքի Ջրվեժ",
            text: `Շաքի գյուղի մոտակայքում Որոտան գետի վտակները միմյանց են միանում փոքր, բայց գեղեցիկ ջրվեժի միջոցով: Գյուղի մոտակայքում է գտնվում նաեւ Շաքի վանքի ավերակները: Ըստ առասպելի այս տեղանքը անվանվել է Շաքի, 93 կույսերից մեկի պատվին, որը հրաշքով փրկվել էր ջրհեղեղից:`,
            photos: [shaki1, shaki2, shaki3, shaki4]
        }
        

    ] 
}

type OtherInitialStateType = typeof otherInitialState


export const otherReducer = (state:OtherInitialStateType= otherInitialState,action:any):OtherInitialStateType=>{
    switch(action.type){

    }
    return state
}


