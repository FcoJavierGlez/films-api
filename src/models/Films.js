import { Schema, model } from "mongoose";

const FILMS_SCHEMA = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    cover: {
        type: String,
        default: '',
        triem: true
    },
    duration: {
        type: Number,
        default: 1
    },
    date: {
        type: Number, //type: Date,
        required: true
    },
    genres: {
        type: [String],
        required: true
    },
    values: {
        type: [Number],
        default: []
    },
    synopsis: {
        type: String,
        default: '',
        trim: true
    },
    photos: {
        type: [String],  //type: Array,
        default: []
    },
    videos: {
        type: [Object],  //type: Array,
        default: []
    },
    directors: {
        type: [Object],  //type: Array,
        default: []
    },
    stars: {
        type: [Object],  //type: Array,
        default: [],
    },
    writters: {
        type: [Object],  //type: Array,
        default: [],
    },
}, {
    versionKey: false,
    timestamps: true
});

export default model( 'Films', FILMS_SCHEMA );