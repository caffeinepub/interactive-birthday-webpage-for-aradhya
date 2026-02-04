import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  public type AppState = {
    screen : Nat;
    balloonsPopped : [Bool];
  };

  var currentState : AppState = {
    screen = 1;
    balloonsPopped = [false, false, false, false];
  };

  public shared ({ caller }) func nextScreen(screenNum : Nat) : async () {
    if (screenNum < 1 or screenNum > 7) {
      Runtime.trap("Invalid screen number");
    };
    currentState := {
      screen = screenNum;
      balloonsPopped = [false, false, false, false];
    };
  };

  public shared ({ caller }) func popBalloon(index : Nat) : async Bool {
    if (index >= 4) {
      Runtime.trap("Invalid balloon index");
    };
    if (currentState.balloonsPopped[index]) {
      Runtime.trap("Balloon already popped");
    };
    let newBalloons = Array.tabulate(
      4,
      func(i) {
        if (i == index) { true } else { currentState.balloonsPopped[i] };
      },
    );
    currentState := {
      screen = currentState.screen;
      balloonsPopped = newBalloons;
    };
    true;
  };

  public query ({ caller }) func getState() : async AppState {
    currentState;
  };
};
