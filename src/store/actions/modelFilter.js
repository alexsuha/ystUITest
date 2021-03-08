let modelFilter = {
    models: [],
  };
  
export const addModel = (brand) => {
    modelFilter.models = [brand, ...modelFilter.models];
}

export const removeModel = (brand) => {
    modelFilter.models = modelFilter.models.filter(p => p !== brand);
}

export const getModels = () => {
    return modelFilter.models;
}
  