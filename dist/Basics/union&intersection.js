"use strict";
// union |
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User dashboard";
    }
    else {
        return "guest dashboard";
    }
};
const candidate = {
    id: "001",
    name: "nishat",
    phoneNo: "01832-000000",
    designation: "candidate",
};
//# sourceMappingURL=union&intersection.js.map