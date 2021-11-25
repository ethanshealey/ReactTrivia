import { decode } from 'html-entities'

const categories = [
    'Any Category',
    'General Knowledge',
    'Books',
    'Film',
    'Music',
    'Musicals & Theatres',
    'Television',
    'Video Games',
    'Board Games',
    'Science & Nature',
    'Computers',
    'Mathematics',
    'Mythology',
    'Sports',
    'Geography',
    'History',
    'Politics',
    'Art',
    'Celebrities',
    'Animals',
    'Vehicles',
    'Comics',
    'Gadgets',
    'Japanese Anime & Manga',
    'Cartoon & Animations'
]

const difficulties = [
    'Any Difficulty',
    'Easy',
    'Medium',
    'Hard'
]

const types = [
    'Any Type',
    'Multiple Choice',
    'True and False'
]

const getCategoryCode = (cat) => {
    switch(cat) {
        case 'Any Category':
            return null
        case 'General Knowledge':
            return 9
        case 'Books':
            return 10
        case 'Film':
            return 11
        case 'Music':
            return 12
        case 'Musicals & Theatres':
            return 13
        case 'Television':
            return 14
        case 'Video Games':
            return 15
        case 'Board Games':
            return 16
        case 'Science & Nature':
            return 17
        case 'Computers':
            return 18
        case 'Mathematics':
            return 19
        case 'Mythology':
            return 20
        case 'Sports':
            return 21
        case 'Geography':
            return 22
        case 'History':
            return 23
        case 'Politics':
            return 24
        case 'Art':
            return 25
        case 'Celebrities':
            return 26
        case 'Animals':
            return 27
        case 'Vehicles':
            return 28
        case 'Comics':
            return 29
        case 'Gadgets':
            return 30
        case 'Japanese Anime & Manga':
            return 31
        case 'Cartoon & Animations':
            return 32
    }
}

const getDiffCode = (diff) => {
    switch(diff) {
        case 'Any Difficulty':
            return null
        case 'Easy':
            return 'easy'
        case 'Medium':
            return 'medium'
        case 'Hard':
            return 'hard'
    }
}

const getTypeCode = (ty) => {
    switch(ty) {
        case 'Any Type':
            return null
        case 'Multiple Choice':
            return 'multiple'
        case 'True and False':
            return 'boolean'
    }
}

const shuff = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

const getData = async (cat, diff, ty) => {
    return fetch(`https://opentdb.com/api.php?amount=1${ getCategoryCode(cat) ? '&category=' + getCategoryCode(cat) : '' }${ getDiffCode(diff) ? '&difficulty=' + getDiffCode(diff) : '' }${ getTypeCode(ty) ? '&type=' + getTypeCode(ty) : '' }`)
            .then(res => res.json())
            .then(json => {
                json = json.results[0]    

                const answer_list = json.incorrect_answers.concat(json.correct_answer)
                
                for(let i = 0; i < answer_list.length; i++) {
                    answer_list[i] = decode(answer_list[i])
                }

                return [
                    decode(json.category),
                    decode(json.question),
                    shuff(answer_list),
                    decode(json.correct_answer),
                    decode(json.difficulty[0].toUpperCase() + json.difficulty.slice(1)),
                    decode(json.type),
                    json.difficulty === 'easy' ? 'green' : json.difficulty === 'medium' ? 'orange' : 'red'
                ]
            })
}

export { categories, difficulties, types, getData }