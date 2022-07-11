import {
    messagesReducer,
    deleteMessage,
    getMessagesStart,
    getMessagesSuccess,
    getMessagesError,
    createMessageStart,
    createMessageSuccess,
    createMessageError
} from "../../messages"

describe("messages reducer", () => {

    describe("other types", () => {

        describe("create message", () => {
            it("start", () => {
                const state = messagesReducer(
                    { pending: false, error: "error" },
                    createMessageStart(),
                );
    
                expect(state.pending).toBe(true);
                expect(state.error).toBe(null);
            });

            it("success", () => {

                const MESSAGE = { author: "BOT", message: "hi" };

                const state = messagesReducer(
                    { pending: true, messages: {} },
                    createMessageSuccess("Auto", MESSAGE)
                );
    
                expect(state.pending).toBe(true);
                expect(state.messages.Auto).toBeDefined();
            });

            it("error", () => {
                const ERROR = "test error";
    
                const state = messagesReducer(
                    { pending: true, error: null },
                    createMessageError(ERROR)
                );
    
                expect(state.pending).toBe(false);
                expect(state.error).toBe(ERROR);
            });
        })

        // it("send message", () => {

        //     const MESSAGE = { author: "Bot", message: "test" }
        //     const state = messagesReducer({ messages: {} },
        //         sendMessage("room1", MESSAGE)
        //     );

        //     expect(state.messages.room1).toBeDefined();
        //     expect(state.messages.room1.length).toBe(1);
        //     expect(state.messages.room1[0].author).toBe(MESSAGE.author);
        //     expect(state.messages.room1[0].message).toBe(MESSAGE.message);
        // });
        it("delete message", () => {
            const ID = 1
            const state = messagesReducer({
                messages: {
                    room1: [{ id: 1 }, { id: 2 }]
                }
            },
                deleteMessage("room1", ID)
            );

            expect(state.messages.room1.length).toBe(1)
            expect(state.messages.room1.find((i) => i.id === ID)).toBeUndefined()

        })
    });
    describe("get messages types", () => {
        it("start", () => {
            const state = messagesReducer(
                { pending: false, error: "error" },
                getMessagesStart()
            );

            expect(state.pending).toBe(true);
            expect(state.error).toBe(null);
        });

        it("success", () => {
            const MESSAGES = "test messages";

            const state = messagesReducer(
                { pending: true, messages: {} },
                getMessagesSuccess(MESSAGES)
            );

            expect(state.pending).toBe(false);
            expect(state.messages).toBe(MESSAGES);
        });

        it("error", () => {
            const ERROR = "test error";

            const state = messagesReducer(
                { pending: true, error: null },
                getMessagesError(ERROR)
            );

            expect(state.pending).toBe(false);
            expect(state.error).toBe(ERROR);
        });
    });

})