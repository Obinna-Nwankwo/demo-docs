export const useUtils = () => {
    const sayHello = () => console.log("hello from useUtils");

    const  onClickOutside = () => {}

    return {
        sayHello,
    };
};