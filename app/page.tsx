"use client";

import { useCompletion } from "ai/react";

export default function Completion() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  // Function to parse completion result and render bold text properly
  const renderCompletionText = (text: string) => {
    return text.split("**").map((chunk, index) => {
      return index % 2 === 0 ? (
        <span key={index}>{chunk}</span>
      ) : (
        <strong key={index}>{chunk}</strong>
      );
    });
  };

  return (
    <div className="mx-auto w-full max-w-md py-8 px-4 md:px-0 flex flex-col items-center">
      <div className="chat-bubble bg-gray-900 p-4 rounded-lg mb-4">
        <span className="text-white text-lg">Bot:</span>{" "}
        {renderCompletionText(completion)}
      </div>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        {/* <label className="block mb-4">
          <span className="text-gray-900">Say something...</span>
          <input
            className="mt-1 block w-full rounded-md border-gray-900 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            value={input}
            onChange={handleInputChange}
          />
        </label> */}

        <label className="input input-bordered flex items-center gap-2 mb-5">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={input}
            onChange={handleInputChange}
          />
          <kbd className="kbd kbd-sm"> ↵ </kbd>
          {/* <kbd className="kbd kbd-sm">K</kbd> */}
        </label>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={stop}
            className="btn btn-outline btn-default text-blue relative"
          >
            {isLoading && (
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.373A8.001 8.001 0 0112 4v4a4 4 0 00-4 4H6zm10-2v4a4 4 0 004-4h-4zm0-4a8.001 8.001 0 01-7.373 7.995L10 17.372V20a4 4 0 004-4h4zm-2-7.373A8.001 8.001 0 0120 12h-4a4 4 0 00-4-4V6z"
                  ></path>
                </svg>
              </span>
            )}
            Stop
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="btn glass text-blue btn-outline btn-secondary"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}


