export default function ScrollContainer({children}: {children: React.ReactNode}) {
    return(
        <div className="scroll-container">
            <div className="item-container">
                {children}
            </div>
        </div>
    );
}