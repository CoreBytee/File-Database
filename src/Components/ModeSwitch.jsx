export default function ModeSwitch( { state } ) {
    return (
        <div id="usermodeswitch" class={`ModeSwitch ${!!state ? "disabled" : "enabled"}`} hx-post="/api/v1/htmx/usermodeswitch" hx-swap="outerHTML" hx-include="[name='usermodeswitch']">
            <input type="number" name="usermodeswitch" value={!!state ? 0 : 1} hidden/>
        </div>
    )
}