const getMajidMedia = () => {
    const p1 = document.getElementById("p1Bm").value || 0
    const p2 = document.getElementById("p2Bm").value || 0
    const Ex = document.getElementById("ExBm").value || 0

    let media1 = (5 * p1 + 5 * p2) / 10
    let media2 = (4 * p1 + 4 * p2 + 2 * Ex) / 10

    if (media1 >= media2) {
        if (media1 < 5 && media1 >= 4) return media1 + " - D"
        else if (media1 < 7 && media1 >= 5) return media1 + " - C"
        else if (media1 < 8.5 && media1 >= 7) return media1 + " - B"
        else if (media1 >= 8.5) return media1 + " - A"
        else return media1 + " - F"
    } else if (media1 < media2) {
        if (media2 < 5 && media2 >= 4) return media2 +" - D"
        else if (media2 < 7 && media2 >= 5) return media2 + " - C"
        else if (media2 < 8.5 && media2 >= 7) return media2 + " - B"
        else if (media2 >= 8.5) return media2 + " - A"
        else return media2 + " - F"
    }
}

const getPieterMedia = () => {
    const p1 = document.getElementById("p1Em").value || 0
    const p2 = document.getElementById("p2Em").value || 0
    const Ex = document.getElementById("ExEm").value || 0

    let media = (0.35 * p1 + 0.35 * p2 + 0.3 * Ex)

    if (media < 5.5 && media >= 5) return media + " - D"
    else if (media < 7 && media >= 5.5) return media + " - C"
    else if (media < 9 && media >= 7) return media + " - B"
    else if (media >= 9) return media + " - A"
    else return media + " - F"
}

const getJoaoMedia = () => {
    const p1 = document.getElementById("p1Bce").value || 0
    const p2 = document.getElementById("p2Bce").value || 0

    let media = (p1 + p2) / 2

    if (media < 4.9 && media >= 4) return media + " - D"
    else if (media < 6.9 && media >= 5) return media + " - C"
    else if (media < 8.9 && media >= 7) return media + " - B"
    else if (media >= 9) return media + " - A"
    else return media + " - F"
}

const getJiriMedia = () => {
    const p1 = document.getElementById("p1Edvt").value || 0
    const p2 = document.getElementById("p2Edvt").value || 0
    const Ex = document.getElementById("ExEdvt").value || 0

    let media = (0.7 * (p1+p2) + 0.3 * Ex)

    if (media < 6.4 && media >= 5) return media + " - D"
    else if (media < 7.4 && media >= 6.5) return media + " - C"
    else if (media < 8.9 && media >= 7.5) return media + " - B"
    else if (media >= 9) return media + " - A"
    else return media + " - F"
}

const getDeboraMedia = () => {
    const p1 = document.getElementById("p1Bcc").value || 0
    const p2 = document.getElementById("p2Bcc").value || 0

    let media = (0.75 * p1 + 0.25 * p2)

    if (media < 6 && media >= 5) return media + " - D"
    else if (media < 7 && media >= 6) return media + " - C"
    else if (media < 8.5 && media >= 7) return media + " - B"
    else if (media >= 8.5) return media + " - A"
    else return media + " - F"
}

const writeMedia = () => {
    document.getElementById("conceitoBm").innerHTML = getMajidMedia();
    document.getElementById("conceitoEm").innerHTML = getPieterMedia();
    document.getElementById("conceitoBce").innerHTML = getJoaoMedia();
    document.getElementById("conceitoEdvt").innerHTML = getJiriMedia();
    document.getElementById("conceitoBcc").innerHTML = getDeboraMedia();
}