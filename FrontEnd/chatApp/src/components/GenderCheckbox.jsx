const GenderCheckbox = () => {
    return (
      <div className="flex">
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text text-white">Male</span>
            <input
              type="checkbox"
              className="checkbox appearance-none border border-white bg-transparent h-6 w-6 rounded checked:bg-white checked:border-transparent"
            />
          </label>
        </div>
        <div className="form-control">
          <label className={`label gap-2 cursor-pointer`}>
            <span className="label-text text-white">Female</span>
            <input
              type="checkbox"
              className="checkbox appearance-none border border-white bg-transparent h-6 w-6 rounded checked:bg-white checked:border-transparent"
            />
          </label>
        </div>
      </div>
    );
  };
  
  export default GenderCheckbox;
  