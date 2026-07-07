const Agent = require('../models/agents');

exports.createAgent = async (req, res) => {
    try {
        const agents = await Agent.create(req.body);
        res.status(201).json({
            success: true,
            message: "Agent added successfully",
            data: agents
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getAgents = async (req, res) => {
    try {
        const agents = await Agent.find();
        res.status(201).json({
            success: true,
            message: "Agent fetched successfully",
            data: agents
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getSingleAgent = async (req, res) => {
    try {
        const agent = await Agent.findById(req.params.id);

        if (!agent) {
            res.status(404).json({
                success: false,
                message: "Agent not found"
            })
        }

        res.status(201).json({
            success: true,
            message: "Agent fetched successfully",
            data: agent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.updateAgent = async (req, res) => {
    try {
        const agent = await Agent.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        if (!agent) {
            res.status(404).json({
                success: false,
                message: "Agent not found"
            })
        }

        res.status(201).json({
            success: true,
            message: "Agent updated successfully",
            data: agent
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

exports.deleteAgent = async (req, res) => {
    try {
        const agent = await Agent.findByIdAndDelete(req.params.id);
        if (!agent) {
            res.status(404).json({
                success: false,
                message: "Agent not found"
            })
        }

        res.status(201).json({
            success:true,
            message:"Agent deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}