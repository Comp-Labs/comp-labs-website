import * as React from 'react';

export function AppPage() {
    return (
        <>
        <h2>{app.name}</h2>
        <h6>Tech Fiddle</h6>
        <p>Contains ads | In-app purchases</p>
        <p>Reviews | Downloads | Ratings</p>
        <a href={app.download} className="button button--primary">Install</a>
        <img src={app.image} alt={app.name} title={{app.name} + "Icon"} />
        <p>Divider</p>
        <p>Screenshots</p> <p>Developer Contact - Website, Email</p>
        <p>
        <p>About this app 'arrow' br description, updated on, tags</p>
        <p>Version, Updated on, Compatibility, Downloads Count, In-App Purchases, Content Rating, Permissions, Released, Offered By</p>
        </p>
        <p>What's New</p>
        </>
    )
}