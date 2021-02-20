import profileReducer, { addPostCreator } from "./profileReducer"


let state = {
    posts:[
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: 'It\'s my first post', likesCount: 11 }
    ],
}


it('new post should be added', () => {
    let action = addPostCreator('add new post')
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3);
})