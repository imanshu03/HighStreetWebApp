const properties = {
  desktop: {
    root: null,
    threshold: 0.8,
    rootMargin: "10px",
  },
  mobile: {
    root: null,
    threshold: 0.3,
    rootMargin: "10px",
  },
};

export const isMobileDevice = (userAgent) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent
    )
  ) {
    return true;
  } else {
    return false;
  }
};

export const callbacks = {
  show: function (ref) {
    const { classname } = ref.dataset;
    ref.classList.toggle(classname, true);
  },
  timeoutShow: function (ref) {
    const { classname, delay = 0 } = ref.dataset;
    setTimeout(() => {
      ref.classList.toggle(classname, true);
    }, Number(delay));
  },
};

export const initializeObserver = (userAgent) => {
  const options = isMobileDevice(userAgent)
    ? properties.mobile
    : properties.desktop;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const { func = "show" } = entry.target.dataset;
        callbacks[func](entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  return observer;
};
