// Motion settings
const transition = {
  duration: 0.8,
  ease: "easeInOut",
}

const fadeIn = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
  exit: {
    opacity: 0,
  },
}

const fadeUp = {
  visible: {
    opacity: 1,
    y: [50, -3, 0],
  },
  hidden: { opacity: 0, y: 50 },
  exit: {
    opacity: 0,
  },
}

const fadeUpLarge = {
  visible: {
    opacity: 1,
    y: [200, -3, 0],
  },
  hidden: { opacity: 0, y: 200 },
  exit: {
    opacity: 0,
  },
}

const fadeRight = {
  visible: {
    opacity: 1,
    x: [-50, 3, 0],
  },
  hidden: { opacity: 0, x: -50 },
  exit: {
    opacity: 0,
  },
}

const fadeUpList = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const fadeUpItem = {
  visible: i => ({
    opacity: 1,
    y: [50, -3, 0],
    transition: {
      delay: (i / 10) + 0.4,
    },
  }),
  hidden: { opacity: 0, y: 50 },
}

const item = {
  visible: { opacity: 1, y: [50, -3, 0] },
  hidden: { opacity: 0, y: 50 },
}

export {transition, fadeIn, fadeUp, fadeUpList, item, fadeUpItem, fadeRight, fadeUpLarge}