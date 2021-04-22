export function Modal(){
    return <div class="modal">
        <div class="modal-header">
            <h4 class="modal-title">Save to...</h4>
            <img src="./images/delete.svg" alt="close-icon" class="close-icon" />
        </div>
        <hr />
        <div class="modal-body">
            <label><input type="checkbox"></input>Watch Later</label>
        </div>
        <hr />
        <div class="modal-body">
            <button>+ Create PlayList</button>
        </div>
        <hr />
        <div>
            <input placeholder="Enter Playlist Name"></input>
            <button class="primary-btn">Create</button>
        </div>
    </div>
}