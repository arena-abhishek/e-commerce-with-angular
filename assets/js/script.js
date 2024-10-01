function makeElement(
  myElem = "div",
  myClass,
  attribute = "",
  value = "",
  content = ""
) {
  let i = 0;
  let elem = document.createElement(myElem);
  if (content) {
    elem.innerHTML = content;
  }
  elem.className = myClass;
  if (attribute) {
    attribute.forEach((element) => {
      elem.setAttribute(element, value[i]);
      i++;
    });
  }
  return elem;
}

document.addEventListener("DOMContentLoaded", function () {});

let header = document.querySelector(".header");
let content1 = `
 <nav class="navbar navbar-expand-lg navbar-light "
          aria-label="Offcanvas navbar large" id="dhara-plants-nav">
          <div class="container">
            <a class="navbar-brand" href="#">
              <img class="brand-logo-img" src="assets/img/logo1.png"
                alt="brands-logo" height="80">
            </a>
            <button class="navbar-toggler py-2"
              type="button" data-bs-toggle="offcanvas"
              data-bs-target="#myOffcanvasNavbar"
              aria-controls="myOffcanvasNavbar">
              <i class="bi bi-list"></i>
            </button>
            <div class="sidebar offcanvas offcanvas-start   magic-bg"
              tabindex="-1"
              id="myOffcanvasNavbar" aria-labelledby="myOffcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="myOffcanvasNavbarLabel">Menu</h5>
                <button type="button" class="btn-close btn-close-black me-2"
                  data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
  
              <div class="offcanvas-body align-items-md-center">
                <ul class="navbar-nav  justify-content-center flex-grow-1 pe-3">
                  <li class="nav-item p-1 p-md-3 icons ">
                    <a class="nav-link" href="#">Home</a>
                  </li>
  
                  <li class="nav-item p-1 p-md-3 icons">
                    <a class="nav-link" href="#">Contact</a>
                  </li>
                  <li class="nav-item p-1 p-md-3 icons">
                    <a class="nav-link" href="#">About</a>
                  </li>
                  <li class="nav-item p-1 p-md-3 icons">
                    <a class="nav-link" href="#">Sign up</a>
                  </li>
                </ul>
  
                <div class="search-group d-flex align-items-baseline">
                  <form class="input-group d-flex mt-3 mt-lg-0" role="search">
                    <input class="form-control" type="search"
                      placeholder="What are you looking for?"
                      aria-label="Search">
                    <button class="btn btn-outline-dark" type="submit"
                      title="search">
                      <i class="fa fa-search"></i>
                    </button>
                  </form>
                  <button type="button"
                    class="btn  rounded-pill ms-md-2  d-none d-sm-block">
                    <i class="fa-regular icons fa-heart"></i>
                  </button>
                  <button type="button"
                    class="btn  rounded-pill ms-md-1 me-md-2 d-none d-sm-block">
                    <i class="bi icons bi-cart3"></i>
                  </button>
                  <a href="#"
                    class="btn  rounded-circle d-none d-sm-block"
                    title="user-login"><i
                      class="fa-regular icons fa-user"></i></a>
                </div>
              </div>
            </div>
          </div>
        </nav>
`;
myHeader = makeElement("div", "container-xxl", "", "", content1);
header.append(myHeader);

let footer = document.querySelector(".footer");
let content2 = ` <div class="container-xxl py-5">
        <div class="row">
          <div class="col-md-3  mb-3">
            <form>
              <h5 class="text-light">Ap studios</h5>
              <h5 class="text-secondary">Subscribe</h5>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">Email
                  address</label>
                <input id="newsletter1" type="text" class="form-control"
                  placeholder="Email address">

              </div>
            </form>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <h5 class="text-light">Support</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">111, Govindpuri
                  kalkaji</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">exclusive@gmail.com</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">+91
                  8872446878</a></li>

            </ul>
          </div>

          <div class="col-6 col-md-3 mb-3">
            <h5 class="text-light">Account</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">My Acccount</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Login/Register</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Cart</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Whislist</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Shop</a></li>
            </ul>
          </div>
          <div class="col-6 col-md-3 mb-3">
            <h5 class="text-light">Quick link</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Privacy policy</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Terms of use</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#"
                  class="nav-link p-0 text-secondary">Contacts</a></li>

            </ul>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg
                  class="bi" width="24" height="24"><use
                    xlink:href="#twitter"></use></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg
                  class="bi" width="24" height="24"><use
                    xlink:href="#instagram"></use></svg></a></li>
            <li class="ms-3"><a class="link-body-emphasis" href="#"><svg
                  class="bi" width="24" height="24"><use
                    xlink:href="#facebook"></use></svg></a></li>
          </ul>
        </div>
      </div>`;
myFooter = makeElement("section", "container-fluid bg-black", "", "", content2);
footer.append(myFooter);