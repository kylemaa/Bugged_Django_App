export const updateObject = (oldObject, updatedProperties) => {
    return {
        // Replace old object set with a new set
        ...oldObject,
        ...updatedProperties
    }
}