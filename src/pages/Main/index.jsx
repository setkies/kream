import { useCallback, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Product from "../../components/Product";
import Slider from "../../components/Slider";
import { cardData } from "../../data/card";
import { productData, popularData } from "../../data/product";
import { brandData } from "../../data/brand"
import { styleData } from "../../data/styles"
import * as S from "./style";
import banner01 from "../../assets/banner/banner01.webp"
import banner02 from "../../assets/banner/banner02.webp"
import StyleCard from "../../components/StyleCard";

const Main = () => {
    const [more, setMore] = useState(false);
    const toggleMore = useCallback(() => {
        setMore((prev) => !prev);
    }, []);
    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Header />
            <S.Container>
                <Slider></Slider>
                <S.ShortCut>
                    <S.Cards>
                        {cardData.slice(0, 5).map((card, index) => (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                    <S.Cards>
                        {cardData.slice(5, 10).map((card, index) => (
                            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                <S.Card image={card.image} />
                                <S.CardTitle>{card.title}</S.CardTitle>
                            </div>
                        ))}
                    </S.Cards>
                </S.ShortCut>
                <S.Horz></S.Horz>
                <S.HomeProduct>
                    <S.ProductTitle>Just Dropped</S.ProductTitle>
                    <S.ProductSubTitle>발매 상품</S.ProductSubTitle>
                    <S.Products>
                        {productData.slice(0, 4).map((product, index) => (
                            <Product
                                image={product.image}
                                color={product.color}
                                brand={product.brand}
                                name={product.name}
                                price={product.price}
                            />
                        ))}
                    </S.Products>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
                        {!more ? <><S.ViewMore onClick={toggleMore}>더보기</S.ViewMore><S.Horz /></> : null}
                    </div>
                    {
                        more ? <><S.Products>
                            {productData.slice(4, 8).map((product, index) => (
                                <Product
                                    image={product.image}
                                    color={product.color}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))}
                        </S.Products><S.Horz /> </> : <></>
                    }
                </S.HomeProduct>
                <S.HomeProduct>
                    <S.ProductTitle>Brand Focus</S.ProductTitle>
                    <S.ProductSubTitle>추천 브랜드</S.ProductSubTitle>
                    <S.Brands>
                        {
                            brandData.slice(0, 5).map((brand, index) => (
                                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                    <S.Card image={brand.image} />
                                    <S.CardTitle>{brand.title}</S.CardTitle>
                                </div>
                            ))
                        }
                    </S.Brands>
                    <S.Brands>
                        {
                            brandData.slice(5, 10).map((brand, index) => (
                                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                    <S.Card image={brand.image} />
                                    <S.CardTitle>{brand.title}</S.CardTitle>
                                </div>
                            ))
                        }
                    </S.Brands>
                    <S.Brands>
                        {
                            brandData.slice(10, 15).map((brand, index) => (
                                <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                                    <S.Card image={brand.image} />
                                    <S.CardTitle>{brand.title}</S.CardTitle>
                                </div>
                            ))
                        }
                    </S.Brands>
                </S.HomeProduct>
                <S.Banner src={banner01} />
                <S.HomeProduct>
                    <S.ProductTitle>Just Dropped</S.ProductTitle>
                    <S.ProductSubTitle>발매 상품</S.ProductSubTitle>
                    <S.Products>
                        {popularData.slice(0, 4).map((popular, index) => (
                            <Product
                                image={popular.image}
                                color={popular.color}
                                brand={popular.brand}
                                name={popular.name}
                                price={popular.price}
                            />
                        ))}
                    </S.Products>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
                        {!more ? <><S.ViewMore onClick={toggleMore}>더보기</S.ViewMore><S.Horz /></> : null}
                    </div>
                    {
                        more ? <><S.Products>
                            {popularData.slice(4, 8).map((product, index) => (
                                <Product
                                    image={product.image}
                                    color={product.color}
                                    brand={product.brand}
                                    name={product.name}
                                    price={product.price}
                                />
                            ))}
                        </S.Products><S.Horz /> </> : <></>
                    }
                </S.HomeProduct>
                <S.HomeProduct>
                    <S.ProductTitle style={{marginBottom: "10px"}}>비 와도 패션은 맑음! #장마철코디</S.ProductTitle>
                    <S.Styles>
                        {styleData.map((style, index) => (
                            <StyleCard 
                                profile = {style.profile}
                                background = {style.background}
                            />
                        ))}
                    </S.Styles>
                </S.HomeProduct>
                <S.Banner src={banner02}/>
            </S.Container>
            <Footer />
        </div>
    );
};

export default Main;
