export default function Textarea({ label, ...props }){
    return (
        <div className="textarea-element">
            <label className="input-label">
                {label}
            </label>
            <textarea
                {...props}
            />
        </div>
    )
}


