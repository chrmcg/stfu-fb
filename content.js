var killNode = node => node.parentNode.removeChild(node);
killNode(
    document.getElementById('pagelet_bluebar')
);
killNode(
    document.getElementById('pagelet_sidebar')
);
killNode(
    document.getElementById('pagelet_dock')
);