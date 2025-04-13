export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectPets = (state) => state.auth.pets;
export const selectViewedNotices = (state) => state.auth.noticesViewed;
export const selectFavoritesNotices = (state) => state.auth.noticesFavorites;
