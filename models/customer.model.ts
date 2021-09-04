// module.exports = mongoose => {
//     //   const Customer = mongoose.model(
//     //     'customer',
//     //     mongoose.Schema(
//     //       {
//     //         name: String,
//     //         surname: String,
//     //       },
//     //       { timestamps: true }
//     //     )
//     //   );

//     // If you use this app with a front - end that needs id field instead of _id,
//     // you have to override toJSON method that map default object to a custom object.
//     // So the Mongoose model could be modified as following code:

//     const schema = mongoose.Schema(
//         {
//             name: String,
//             surname: String
//         },
//         {timestamps: true}
//     );

//     schema.method("toJSON", function() {
//         const {__v, _id, ...object} = this.toObject();
//         object.id = _id;
//         return object;
//     });

//     const Customer = mongoose.model("customer", schema);

//     return Customer;
// };
