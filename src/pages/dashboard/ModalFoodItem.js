import React, { useEffect, useState, useRef } from "react";
import {
  VIOLATION_PRONUNCIATION,
  VIOLATION_NO_ORDINARY_INGREDIENTS,
  VIOLATION_HEALTH_CLAIM_WORDS,
  VIOLATION_UNIVERSAL_NAME,
  VIOLATION_AVOID_HFCS,
  VIOLATION_ADDED_SUGAR,
} from "./constants";

const ModalFoodItem = (props) => {
  const {
    currItem,
    setCurrItem,
    shoppingList,
    setShoppingList,
    closeModal,
  } = props;

  // display warning on modal popup
  function findWarning() {
    try {
      let warnings = [];
      if (currItem[0].ingredientNumber > 5) {
        warnings.push(<div>WARNING: More than 5 ingredients found</div>);
      }

      let violations = currItem[0].violationsList;
      console.log("ALL VIOLATIONS");
      console.log(violations);
      if (
        violations == null ||
        violations === undefined ||
        typeof violations === "undefined"
      ) {
        return;
      }

      for (let i = 0; i < violations.length; i++) {
        let violation = violations[i];
        if (violation === null) {
          continue;
        }

        if (violation.name === "VIOLATION_PRONUNCIATION") {
          warnings.push(<div>WARNING: {VIOLATION_PRONUNCIATION}</div>);
        }
        if (violation.name === "VIOLATION_NO_ORDINARY_INGREDIENTS") {
          warnings.push(
            <div>WARNING: {VIOLATION_NO_ORDINARY_INGREDIENTS}</div>
          );
        }
        if (violation.name === "VIOLATION_HEALTH_CLAIM_WORDS") {
          warnings.push(<div>WARNING: {VIOLATION_HEALTH_CLAIM_WORDS}</div>);
        }
        if (violation.name === "VIOLATION_UNIVERSAL_NAME") {
          warnings.push(<div>WARNING: {VIOLATION_UNIVERSAL_NAME}</div>);
        }
        if (violation.name === "VIOLATION_AVOID_HFCS") {
          warnings.push(<div>WARNING: {VIOLATION_AVOID_HFCS}</div>);
        }
        if (violation.name === "VIOLATION_ADDED_SUGAR") {
          warnings.push(<div>WARNING: {VIOLATION_ADDED_SUGAR}</div>);
        }
      }

      console.log(warnings);
      return warnings;
    } catch (err) {
      console.log(err);
      return;
    }

    // TODO: filter through currItem[0].violationsList

    // recalled food item found
    console.log(`recall: ${currItem[0].recall}`);
  }

  function returnNumIngredients() {
    console.log(`test: ${currItem[0].ingredientListStr}`);
    if (
      currItem[0].ingredientNumber == null ||
      currItem[0].ingredientNumber === undefined ||
      typeof currItem[0].ingredientNumber === "undefined"
    ) {
      return "None Found";
    } else {
      return currItem[0].ingredientNumber;
    }
  }

  function returnIngredients() {
    if (
      currItem[0].ingredientListStr == null ||
      currItem[0].ingredientListStr === undefined ||
      typeof currItem[0].ingredientListStr === "undefined"
    ) {
      return "None Found";
    } else {
      return currItem[0].ingredientListStr;
    }
  }

  return (
    <>
      <h5>{currItem[0].name}</h5>
      <div className="approveBody">
        <div
          className="warningLabel"
          style={{ color: "red", fontStyle: "italic" }}
        >
          {findWarning()}
        </div>
        <div>
          <strong>Number of ingredients: </strong>{" "}
          {/* {currItem[0].ingredientNumber} */}
          {returnNumIngredients()}
        </div>
        <div>
          <strong>Ingredient list: </strong>
          {/* {currItem[0].ingredientListStr} */}
          {returnIngredients()}
        </div>
      </div>
    </>
  );
};

export default ModalFoodItem;
