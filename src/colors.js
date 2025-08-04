export const gradientBgBase = 'bg-gradient-to-tr'
export const gradientBgPurplePink = `${gradientBgBase} from-violet-500 via-pink-400 to-amber-300`
export const gradientBgDark = `${gradientBgBase} from-slate-800 via-gray-900 to-neutral-800`
export const gradientBgPurpleLight = `${gradientBgBase} from-purple-300 via-blue-400 to-cyan-300`
export const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-rose-500 to-red-500`
export const colorsBgLight = {
  white: 'bg-rose-50 text-indigo-900',
  light: 'bg-amber-50 text-gray-800 dark:bg-zinc-800/90 dark:text-gray-50',
  contrast: 'bg-stone-900 text-amber-100 dark:bg-amber-100 dark:text-stone-900',
  success: 'bg-lime-500 border-lime-500 text-white',
  danger: 'bg-fuchsia-600 border-fuchsia-600 text-white',
  warning: 'bg-orange-300 border-orange-300 text-gray-800',
  info: 'bg-cyan-400 border-cyan-400 text-white'
}
export const colorsText = {
  white: 'text-gray-700 dark:text-rose-100',
  light: 'text-gray-500 dark:text-zinc-200',
  contrast: 'dark:text-gray-50',
  success: 'text-green-500',
  danger: 'text-pink-700',
  warning: 'text-amber-600',
  info: 'text-sky-500'
}
export const infoText = {
  white: 'text-gray-800',
  light: 'text-gray-600 dark:text-slate-200',
  contrast: 'dark:text-gray-50',
  success: 'text-emerald-500',
  danger: 'text-rose-600',
  warning: 'text-yellow-600',
  info: 'text-blue-400'
}
export const colorsOutline = {
  white: 'border-white text-white',
  light: 'border-gray-100 text-gray-100 dark:border-slate-800 dark:text-slate-800',
  contrast: 'border-gray-800 text-gray-800 dark:border-white dark:text-white',
  success: 'border-lime-500 text-lime-500',
  danger: 'border-fuchsia-600 text-fuchsia-600',
  warning: 'border-orange-400 text-orange-400',
  info: 'border-cyan-400 text-cyan-400'
}
export const getButtonColor = (color, isOutlined, hasHover, isActive = false) => {
  const colors = {
    ring: {
      white: 'ring-gray-300 dark:ring-gray-400',
      whiteDark: 'ring-gray-300 dark:ring-gray-400',
      lightDark: 'ring-gray-300 dark:ring-gray-400',
      contrast: 'ring-gray-400 dark:ring-gray-300',
      success: 'ring-lime-400 dark:ring-lime-600',
      danger: 'ring-fuchsia-400 dark:ring-fuchsia-600',
      warning: 'ring-orange-400 dark:ring-orange-600',
      info: 'ring-cyan-400 dark:ring-cyan-600'
    },
    active: {
      white: 'bg-gray-200',
      whiteDark: 'bg-gray-200 dark:bg-zinc-700',
      lightDark: 'bg-gray-300 dark:bg-zinc-600',
      contrast: 'bg-stone-800 dark:bg-amber-200',
      success: 'bg-lime-600 dark:bg-lime-500',
      danger: 'bg-fuchsia-700 dark:bg-fuchsia-500',
      warning: 'bg-orange-500 dark:bg-orange-400',
      info: 'bg-cyan-500 dark:bg-cyan-400'
    },
    bg: {
      white: 'bg-white text-black',
      whiteDark: 'bg-white text-black dark:bg-zinc-800 dark:text-white',
      lightDark: 'bg-amber-100 text-black dark:bg-zinc-700 dark:text-white',
      contrast: 'bg-stone-900 text-white dark:bg-white dark:text-black',
      success: 'bg-lime-500 dark:bg-lime-400 text-white',
      danger: 'bg-fuchsia-600 dark:bg-fuchsia-400 text-white',
      warning: 'bg-orange-400 dark:bg-orange-300 text-white',
      info: 'bg-cyan-400 dark:bg-cyan-300 text-white'
    },
    bgHover: {
      white: 'hover:bg-gray-200',
      whiteDark: 'hover:bg-gray-200 hover:dark:bg-zinc-700',
      lightDark: 'hover:bg-gray-300 hover:dark:bg-zinc-600',
      contrast: 'hover:bg-stone-800 hover:dark:bg-amber-200',
      success:
        'hover:bg-lime-600 hover:border-lime-600 hover:dark:bg-lime-500 hover:dark:border-lime-500',
      danger:
        'hover:bg-fuchsia-700 hover:border-fuchsia-700 hover:dark:bg-fuchsia-500 hover:dark:border-fuchsia-500',
      warning:
        'hover:bg-orange-500 hover:border-orange-500 hover:dark:bg-orange-400 hover:dark:border-orange-400',
      info: 'hover:bg-cyan-500 hover:border-cyan-500 hover:dark:bg-cyan-400 hover:dark:border-cyan-400'
    },
    borders: {
      white: 'border-white',
      whiteDark: 'border-white dark:border-zinc-800',
      lightDark: 'border-amber-100 dark:border-zinc-700',
      contrast: 'border-stone-900 dark:border-white',
      success: 'border-lime-500 dark:border-lime-400',
      danger: 'border-fuchsia-600 dark:border-fuchsia-400',
      warning: 'border-orange-400 dark:border-orange-300',
      info: 'border-cyan-400 dark:border-cyan-300'
    },
    text: {
      contrast: 'dark:text-stone-100',
      success: 'text-lime-500 dark:text-lime-400',
      danger: 'text-fuchsia-600 dark:text-fuchsia-400',
      warning: 'text-orange-400 dark:text-orange-300',
      info: 'text-cyan-400 dark:text-cyan-300'
    },
    outlineHover: {
      contrast:
        'hover:bg-stone-900 hover:text-amber-100 hover:dark:bg-amber-200 hover:dark:text-black',
      success:
        'hover:bg-lime-500 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-lime-500',
      danger:
        'hover:bg-fuchsia-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-fuchsia-600',
      warning:
        'hover:bg-orange-400 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-orange-400',
      info: 'hover:bg-cyan-400 hover:text-white hover:dark:text-white hover:dark:border-cyan-400'
    }
  }

  if (!colors.bg[color]) {
    return color
  }

  const isOutlinedProcessed = isOutlined && ['white', 'whiteDark', 'lightDark'].indexOf(color) < 0

  const base = [colors.borders[color], colors.ring[color]]

  if (isActive) {
    base.push(colors.active[color])
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color])
  }

  if (hasHover) {
    base.push(isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color])
  }

  return base
}
