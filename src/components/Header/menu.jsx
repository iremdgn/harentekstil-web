import React, { useEffect, useState } from "react";
import {
  Nav,
  NavDropdown,
  Navbar,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import Image from "next/image";

import { getNoToken } from "/src/services/request";
import { apiConfig } from "/config";

function Menu() {
  const [categories, setCategories] = useState([]);
  const getTopCategories = async () => {
    const response = await getNoToken(
      apiConfig.api + "/api/product-category/getCategoryMenu/"
    );
    console.log("Not", response);
    if (response.status == 200 && response.data.isSuccess) {
      setCategories(response.data.cat[0].product_categories);
    }
  };
  useEffect(() => {
    getTopCategories();
  }, []);

  return (
    <>
      <Nav className="desktop-navbar justify-content-center">
        <Nav.Link href="/home" eventKey="link-1">
          ANASAYFA
        </Nav.Link>

        <NavDropdown title="ÜRÜNLERİMİZ" className="cat-menu">
          <NavDropdown.Item className="dropdown title" href="/products">
            KATEGORİLER <span></span>
          </NavDropdown.Item>
          {categories.length > 0 &&
            categories.map((item, key) => {
              return (
                <NavDropdown.Item
                  key={key}
                  className="dropdown subtitle "
                  href={`/kategori/${item.route}`}
                >
                  {" "}
                  {item.Name}
                </NavDropdown.Item>
              );
            })}
          <NavDropdown.Item
            className="dropdown subtitle-image pt-4"
            href="/product"
          >
            <Image
              className="dropdown-image"
              src="/assets/images/slider3.jpg"
              alt="slider1"
              width="180"
              height="120"
            />
            <p className="img-text pt-2">Tüm Ürün Gruplarımız</p>
          </NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="HAKKIMIZDA" id="basic-nav-dropdown">
          <NavDropdown.Item className="dropdown title" href="/hakkimizda">
            HAKKIMIZDA <span></span>
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown subtitle " href="/hakkimizda">
            Biz Kimiz?
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown subtitle " href="/hakkimizda">
            Vizyon/Misyon
          </NavDropdown.Item>
          <NavDropdown.Item
            className="dropdown subtitle "
            href="/hakkimizda"
          >
            Hizmetlerimiz
          </NavDropdown.Item>
          <NavDropdown.Item className="dropdown pt-4" href="">
            <Image
              className="dropdown-image"
              src="/assets/images/slider3.jpg"
              alt="slider1"
              width="180"
              height="120"
            />
            <p className="img-text pt-2">Bizi Tanıyın</p>
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Link href="/blog" eventKey="link-4">
          BLOG
        </Nav.Link>

        <Nav.Link href="/iletisim" eventKey="link-4">
          İLETİŞİM
        </Nav.Link>
      </Nav>

      {/* Mobile Navbar */}

      <Navbar className="mobile-navbar d-none " expand={false}>
        <div className="d-flex ">
          <Navbar.Toggle
            className="mx-2 pt-3"
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Body>
              <Nav className="justify-content-center">
                <Nav.Link href="/" eventKey="link-1">
                  ANASAYFA
                </Nav.Link>

                <NavDropdown title="ÜRÜNLERİMİZ" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dropdown title" href="/products">
                    KATEGORİLER <span></span>
                  </NavDropdown.Item>
                  {categories.length > 0 &&
                    categories.map((item, key) => {
                      return (
                        <NavDropdown.Item
                          key={key}
                          className="dropdown subtitle "
                          href={`/kategori/${item.route}`}
                        >
                          {" "}
                          {item.Name}
                        </NavDropdown.Item>
                      );
                    })}
                  <NavDropdown.Item
                    className="dropdown subtitle-image pt-4"
                    href="/product"
                  >
                    <Image
                      className="dropdown-image"
                      src="/assets/images/slider3.jpg"
                      alt="slider1"
                      width="180"
                      height="120"
                    />
                    <p className="img-text pt-2">Ürünleri İnceleyin</p>
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="HAKKIMIZDA" id="basic-nav-dropdown">
                  <NavDropdown.Item className="dropdown title" href="/hakkimizda">
                    HAKKIMIZDA <span></span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown subtitle "
                    href="/hakkimizda"
                  >
                    Biz Kimiz?
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown subtitle "
                    href="/hakkimizda"
                  >
                    Vizyon/Misyon
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    className="dropdown subtitle "
                    href="/hakkimizda"
                  >
                    Hizmetlerimiz
                  </NavDropdown.Item>
                  <NavDropdown.Item className="dropdown pt-4" href="">
                    <Image
                      className="dropdown-image"
                      src="/assets/images/slider3.jpg"
                      alt="slider1"
                      width="180"
                      height="120"
                    />
                    <p className="img-text pt-2">Bizi Tanıyın</p>
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link href="/blog" eventKey="link-4">
                  BLOG
                </Nav.Link>

                <Nav.Link href="/iletisim" eventKey="link-4">
                  İLETİŞİM
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand href="#">
            <span>HAREN</span>
            <span className="mx-2">
              <Image
                src="/assets/images/logo.jpg"
                alt="logo"
                width="40"
                height="40"
              />
            </span>
            <span className="ps-1">TEKSTİL</span>
          </Navbar.Brand>
        </div>
      </Navbar>
    </>
  );
}

export default Menu;
