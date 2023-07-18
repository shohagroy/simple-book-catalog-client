const Footer = () => {
  return (
    <section className="mt-8 p-3 lg:p-0 mx-auto max-w-[1440px] ">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        <div>
          <img
            src={
              "https://www.bookweb.org/sites/default/files/BookshopLogoTeaserJanuary2019.png"
            }
            alt="logo"
            className="w-[200px]"
          />

          <p className="text-gray-500 w-[250px] my-2">
            The home and elements needed to create beautiful products.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Company</h2>
          <div className="mt-4 text-gray-500">
            <ul>
              <li>About Us</li>
              <li>Careers Store </li>
              <li> Store Locations </li>
              <li> Our Blog </li>
              <li> Reviews</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Shop</h2>
          <div className="mt-4 text-gray-500">
            <ul>
              <li>Game & Video</li>
              <li>Phone &Tablets</li>
              <li> Computers & Laptop</li>
              <li> Sport Watches </li>
              <li> Discounts</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold">Support</h2>
          <div className="mt-4 text-gray-500">
            <ul>
              <li>FAQs</li>
              <li>Reviews</li>
              <li>Contact Us</li>
              <li> Shipping </li>
              <li> Returns</li>
            </ul>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Talk To Us</h2>
          <div className="mt-4 text-gray-500">
            <p>
              Find a location nearest you. <br /> See{" "}
              <span className="text-red-600">Our Stores</span>
            </p>

            <p className="text-2xl font-bold text-black py-3">
              +880 1760 567 555
            </p>

            <p>shohagroy@yahoo.com</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="border-t py-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center ">
            <p className="text-sm lg:text-md py-2">
              Copyright © 2023 by{" "}
              <span className="text-red-600">Shohag Roy </span> rights reserved.
            </p>

            <div className="my- lg:my-0">
              <img
                src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
