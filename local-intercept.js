const { Targetables } = require("@magento/pwa-buildpack");

function localIntercept(targets) {

    const targetables = Targetables.using(targets);


    // Like button intercept

    const ProductFullDetailComponent = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductFullDetail/productFullDetail.js'
    );
    
    const ProductFullDetailLike = ProductFullDetailComponent.addImport("{ CustomLike } from 'likeElement'");

    ProductFullDetailComponent.appendJSX(
        '<section className={classes.actions} />',
        `<${ ProductFullDetailLike } />`
    );

}

module.exports = localIntercept;    