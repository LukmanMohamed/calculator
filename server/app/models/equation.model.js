module.exports = mongoose => {
    const Equation = mongoose.model(
        "equation",
        mongoose.Schema(
            {
                title: String,
                description: String,
                published: Boolean
            },
            { timestamps: true }
        )
    );
    return Equation;
}