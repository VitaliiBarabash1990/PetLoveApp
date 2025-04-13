import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations.js";

const initialState = {
	news: [],
	totalPages: null,
	isLoading: false,
	isError: false,
};

export const newSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.isError = false;
				state.news = payload.results;
				state.totalPages = payload.totalPages;
			})
			.addCase(fetchNews.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(fetchNews.rejected, (state) => {
				state.isLoading = false;
				state.isError = true;
			});
	},
});

export const NewsReducer = newSlice.reducer;
