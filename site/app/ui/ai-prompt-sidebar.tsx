

export default function GlobalSidebar({children,}: {children : React.ReactNode}) {
    return(
        <div className="ai-prompt-sidebar">
            {children}
        </div>
    );
}