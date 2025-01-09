const Footer = () => {
  return (
      <footer className="w-full  bg-black text-white pl-6 py-8">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                  <h4 className="font-bold mb-2">Creators</h4>
                  <ul>
                      <li>Podcasters</li>
                      <li>Video creators</li>
                      <li>Musicians</li>
                      <li>Artists</li>
                      <li>Game devs</li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-bold mb-2">Features</h4>
                  <ul>
                      <li>Create on your terms</li>
                      <li>Where real community thrives</li>
                      <li>Grow your community</li>
                      <li>Support for your business</li>
                      <li>Earning made easy</li>
                      <li>Start a membership</li>
                      <li>Set up a shop</li>
                  </ul>
              </div>
             
              <div>
                  <h4 className="font-bold mb-2">Resources</h4>
                  <ul>
                      <li>Creator Hub</li>
                      <li>Newsroom</li>
                      <li>Help Center & FAQ</li>
                      <li>Partners & integrations</li>
                      <li>Mobile</li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-bold mb-2">Company</h4>
                  <ul>
                      <li>About</li>
                      <li>Press</li>
                      <li>Careers</li>
                      <li>Terms of Use & policies</li>
                      <li>Privacy policy</li>
                      <li>Cookie policy</li>
                      <li>Accessibility</li>
                      <li>Impressum</li>
                      <li>Brand assets & guidelines</li>
                  </ul>
              </div>
          </div>
          <h3 className="text-center">Developed By - Praveen Kumar </h3>
      </footer>
  );
};

export default Footer;
