export default function Divder({h,bt,bb}){
    return(
        <div className={`w-full h-${h?h:10} border-t-[${bt?bt:''}] border-b-[${bb?bb:''}] `}></div>
    )
}