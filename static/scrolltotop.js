const scrollToTopBtn = document.querySelector(".scrollToTopBtn");

const rootElement = document.documentElement;

const handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

  if (rootElement.scrollTop / scrollTotal > 0.25) {
    scrollToTopBtn.classList.add("isVisible");
  } else {
    scrollToTopBtn.classList.remove("isVisible");
  }
};

document.addEventListener("scroll", handleScroll);
