const addStyle = (href) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = href;
    link.className = 'dynamic-style';
    document.head.appendChild(link);
}

const removeStyle = (href) => {
    const links = document.getElementsByClassName('dynamic-style');
    for (let i = links.length - 1; i >= 0; i--) {
        if (links[i].href.includes(href)) {
            document.head.removeChild(links[i]);
        }
    }
}

export {
    addStyle,
    removeStyle
}