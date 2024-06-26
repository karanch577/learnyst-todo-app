import React, { Component } from "react";

class TodoActiveTabs extends Component {
  render() {
    const { activeTab, handleTabClick } = this.props;

    return (
      <div className="tabs text-[14px] font-medium space-x-2 sm:space-x-3.5 text-blue-dark mb-9 mt-8">
        <button
          className={`${
            activeTab === "All" ? "bg-blue-dark text-white" : "border-bg-dark"
          } w-[30%] sm:w-[101px] py-1.5 rounded-[8px] border border-blue-dark`}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        <button
          className={`${
            activeTab === "Done" ? "bg-blue-dark text-white" : "border-bg-dark"
          } w-[30%] sm:w-[101px] py-1.5 rounded-[8px] border border-blue-dark`}
          onClick={() => handleTabClick("Done")}
        >
          Done
        </button>
        <button
          className={`${
            activeTab === "To Do" ? "bg-blue-dark text-white" : "border-bg-dark"
          } w-[30%] sm:w-[101px] py-1.5 rounded-[8px] border border-blue-dark`}
          onClick={() => handleTabClick("To Do")}
        >
          To Do
        </button>
      </div>
    );
  }
}

export default TodoActiveTabs;