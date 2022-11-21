import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./tuits-service"

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) =>
        await service.createTuit(tuit)
)

export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () => {
        const response = await service.findTuits()
        return response
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    })
