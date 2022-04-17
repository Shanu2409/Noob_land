// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')

// MESSAGE
const messageNotification = document.querySelector('#message-notifications')
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

// THEME
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSize = document.querySelectorAll('.choose-size span')
const colorPalette = document.querySelectorAll('.choose-color span')
const backgroundColor = document.querySelectorAll('.choose-bg div')
const root = document.querySelector(':root')

// =================== SIDEBAR ============================

// remove 'active' class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

// click item add 'active' class
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem()
        item.classList.add('active')
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none'
        } else {
            document.querySelector('.notification-popup').style.display = 'block'
                // remove notification count
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

// =================== MESSAGE ============================

// SEARCHES CHATS
const searchMessage = () => {
        const val = messageSearch.value.toLowerCase()
        message.forEach(chat => {
            let name = chat.querySelector('h5').textContent.toLocaleLowerCase()
            if (name.indexOf(val) != -1) {
                chat.style.display = 'flex'
            } else {
                chat.style.display = 'none'
            }
        })
    }
    // SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage)

//
messageNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messageNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})

// =================== THEME ============================

// open theme modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}

// handle open modal
theme.addEventListener('click', openThemeModal)

// close theme modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}

// handle open modal
themeModal.addEventListener('click', closeThemeModal)

// ------------------ FONT SIZE ----------------------

// remove all font size 'active' class
const removeFontSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeFontSizeSelector()

        size.classList.toggle('active')

        let fontSize

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px'
            root.style.setProperty('--sticky-top-left', '5.4rem')
            root.style.setProperty('--sticky-top-right', '5.4rem')
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px'
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px'
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px'
            root.style.setProperty('--sticky-top-left', '5rem')
            root.style.setProperty('--sticky-top-right', '-25rem')
        }

        // change html font size
        document.querySelector('html').style.fontSize = fontSize
    })
})

// ------------------ COLOR -----------------------

// remove selector color 'actvie' class
const removeColorSelector = () => {
    colorPalette.forEach(color => {
        color.classList.remove('active')
    })
}

// change primary color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelector()

        color.classList.toggle('active')

        if (color.classList.contains('color-1')) {
            root.style.setProperty('--color-primary', 'hsl(252, 75%, 60%)')
        } else if (color.classList.contains('color-2')) {
            root.style.setProperty('--color-primary', 'hsl(129, 82%, 58%)')
        } else if (color.classList.contains('color-3')) {
            root.style.setProperty('--color-primary', 'hsl(352, 75%, 60%)')
        } else if (color.classList.contains('color-4')) {
            root.style.setProperty('--color-primary', 'hsl(152, 75%, 60%)')
        } else if (color.classList.contains('color-5')) {
            root.style.setProperty('--color-primary', 'hsl(202, 75%, 60%)')
        }
    })
})

// -------------- BACKGROUND COLOR -----------------

// remove selector bg color 'actvie' class
const removeBgColorSelector = () => {
    backgroundColor.forEach(color => {
        color.classList.remove('active')
    })
}

// change background color
backgroundColor.forEach(color => {
    color.addEventListener('click', () => {
        removeBgColorSelector()

        color.classList.toggle('active')

        if (color.classList.contains('bg-1')) {
            root.style.setProperty('--color-white', 'hsl(252, 30%, 100%)')
            root.style.setProperty('--color-light', 'hsl(252, 30%, 90%)')
            root.style.setProperty('--color-dark', 'hsl(252, 30%, 17%)')
        } else if (color.classList.contains('bg-2')) {
            root.style.setProperty('--color-white', 'hsl(252, 30%, 20%)')
            root.style.setProperty('--color-light', 'hsl(252, 30%, 15%)')
            root.style.setProperty('--color-dark', 'hsl(252, 30%, 95%)')
        } else if (color.classList.contains('bg-3')) {
            root.style.setProperty('--color-white', 'hsl(252, 30%, 10%)')
            root.style.setProperty('--color-light', 'hsl(252, 30%, 0%)')
            root.style.setProperty('--color-dark', 'hsl(252, 30%, 95%)')
        }
    })
})