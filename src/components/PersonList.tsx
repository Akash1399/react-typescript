import React from "react";
type personsListProps = {
  personsList: {
    firstName: string;
    lastName: string;
  }[];
};
function PersonList(props: personsListProps) {
  return (
    <div>
      {props.personsList.map((person, index) => (
        <h2 key={index}>
          {person.firstName} {person.lastName}
        </h2>
      ))}
    </div>
  );
}

export default PersonList;
