const Contact = () => {
  return (
    <div className="text-center m-auto">
      <h1 className="font-bold text-2xl m-2 p-2 ">Contact Us </h1>
      <div>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="border border-black m-2 p-2"
          ></input>
          <br></br>
          <input
            type="text"
            placeholder="Message"
            className="border border-black m-2 p-2"
          ></input>
          <br></br>
          <button className="border border-black bg-gray-100 px-3 py-2 m-3 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
