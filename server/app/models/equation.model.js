module.exports = mongoose => {
    const Equation = mongoose.model(
        "equation",
        mongoose.Schema(
            {
                expression: String,
            },
            { timestamps: true }
        )
    );
    return Equation;
}