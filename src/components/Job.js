const Job = ({ title, position, from, to, notes }) => {
    title = title.toUpperCase()
    
    return <div className='job'>
        <h1 className='position'>{position}</h1>
        <h2 className='title'>{title}</h2>
        <h3 className='from-to'>{from} - {to}</h3>
        <div className='notes'>
            {notes.map((note, index) => <div key={title + index} className='note'>
                <i class="fas fa-angle-double-right"></i> <p>{note}</p>
            </div>)}
        </div>
    </div>
}

export default Job
