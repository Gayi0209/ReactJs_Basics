function ReviewList() {
    const list = [
        { name: "ramya", review: "The product is good" },
        { name: "rashi", review: "The product is moderate" },
        { name: "raji", review: "The product is bad" },
        { name: "rani", review: "The product is good" }
      ];
    return (
        <div>
          <h1>Reviews & Description List</h1>
          <ul>
            {list.map((customer, index) => (
              <li key={index}>
                <div>{customer.name}</div>
                <div>{customer.review}</div>
                <img src="/dress.png" alt="cloth" width="200" height="auto"/>
              </li>
            ))}
          </ul>
        </div>
      );
    }

export default ReviewList