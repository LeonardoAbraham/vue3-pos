export default function useImage() {

    const onFileChange = e => {
        console.log(e.target.files[0])
    }

    return {
        onFileChange
    }
}