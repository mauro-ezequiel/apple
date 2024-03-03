import { CardP } from "./card";

export function Products() {
  return (
    <>
      <section className="row">
        <div className="col-6" id="product-col">
          <div className="row">
            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666"
                }
                title={"Mac"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>
            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=200&hei=130&fmt=png-alpha&.v=1692971740190"
                }
                title={"iphon"}
                url={"https://www.apple.com/shop/buy-iphone"}
              />
            </div>

            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437"
                }
                title={"Ipad"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>

            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1693703822208"
                }
                title={"aple watch"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>
          </div>
        </div>

        <div className="col-6" id="product-col">
          <div className="row">
            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=200&hei=130&fmt=png-alpha&.v=1702403595269"
                }
                title={"aple vision pro"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>

            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885"
                }
                title={"airpods"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>
            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000"
                }
                title={"Air tag"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>
            <div className="col-3">
              <CardP
                img={
                  "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484"
                }
                title={"Apple tv 4K"}
                url={"https://www.apple.com/shop/buy-mac"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
