
const categories:resumeCategory[] = [
    {
        name: "Education",
        path: "education"
    },
    {
        name: "Experience",
        path: "experience"
    },
    {
        name: "Skills",
        path: "skills"
    }
]

function Experience(){
    /*
    Should consist of a nicely laid out resume(with addition of my normal resume), also implement a navigation thing, have some nice widgets for skills or smth(inspired by the mldangelo site)
    */
   
    return(
        <div className = "h-[36rem]">
            <Navbar/>
            <div className = "p-2 pt-4 overflow-y-scroll">
            <section className = "mb-3" id = "education">
                <SectionHead txt = {"Education"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus egestas. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Morbi tristique senectus et netus et malesuada. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Urna id volutpat lacus laoreet non curabitur gravida. Est lorem ipsum dolor sit amet. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Gravida rutrum quisque non tellus orci ac auctor augue. Purus semper eget duis at tellus. Nunc sed augue lacus viverra vitae congue eu consequat ac.

Dolor sit amet consectetur adipiscing elit duis tristique. Ultrices in iaculis nunc sed augue lacus viverra. Ultricies leo integer malesuada nunc vel risus commodo viverra. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Lectus arcu bibendum at varius vel pharetra vel. Ut sem viverra aliquet eget sit amet tellus. Nec nam aliquam sem et tortor consequat id porta. Lacinia at quis risus sed. Venenatis urna cursus eget nunc. Faucibus ornare suspendisse sed nisi lacus sed. Tellus in metus vulputate eu scelerisque felis. Consectetur purus ut faucibus pulvinar. Massa enim nec dui nunc mattis enim. Nisl purus in mollis nunc sed. Tincidunt id aliquet risus feugiat in ante metus. Eu augue ut lectus arcu bibendum at varius vel pharetra. Scelerisque mauris pellentesque pulvinar pellentesque. Id porta nibh venenatis cras sed felis eget velit.

Faucibus purus in massa tempor. Morbi tempus iaculis urna id volutpat lacus laoreet non. Sed risus ultricies tristique nulla aliquet enim tortor at. Tempus egestas sed sed risus pretium quam. Dictum at tempor commodo ullamcorper a lacus vestibulum. In tellus integer feugiat scelerisque. Ac tortor vitae purus faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Ut porttitor leo a diam sollicitudin tempor id. Proin sed libero enim sed faucibus. Dui faucibus in ornare quam viverra orci sagittis. Bibendum est ultricies integer quis auctor elit sed vulputate. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Turpis massa sed elementum tempus egestas sed sed risus pretium. Malesuada fames ac turpis egestas. Faucibus nisl tincidunt eget nullam non nisi est sit. Massa id neque aliquam vestibulum morbi blandit cursus. Nisl purus in mollis nunc sed id semper risus in. Nulla at volutpat diam ut venenatis tellus in metus.

Feugiat in ante metus dictum at tempor commodo. Sit amet luctus venenatis lectus magna. Vitae auctor eu augue ut lectus arcu. Condimentum vitae sapien pellentesque habitant morbi. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Facilisi morbi tempus iaculis urna id volutpat. Eu volutpat odio facilisis mauris sit amet. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Bibendum est ultricies integer quis auctor elit sed vulputate. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nec feugiat nisl pretium fusce. Nunc congue nisi vitae suscipit tellus mauris a diam. Vel pharetra vel turpis nunc eget. Id porta nibh venenatis cras.

Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ut eu sem integer vitae justo eget. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Arcu ac tortor dignissim convallis aenean et tortor at risus. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar elementum integer enim neque. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Proin nibh nisl condimentum id venenatis a. Ultricies integer quis auctor elit sed. Sed felis eget velit aliquet sagittis id consectetur purus ut. Duis at tellus at urna condimentum mattis pellentesque id. Quis enim lobortis scelerisque fermentum dui. Leo in vitae turpis massa sed elementum tempus egestas.</p>
            </section>

            <section className = "mb-3" id = "experience">
                <SectionHead txt = {"Experience"}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus egestas. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Morbi tristique senectus et netus et malesuada. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Urna id volutpat lacus laoreet non curabitur gravida. Est lorem ipsum dolor sit amet. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Gravida rutrum quisque non tellus orci ac auctor augue. Purus semper eget duis at tellus. Nunc sed augue lacus viverra vitae congue eu consequat ac.

Dolor sit amet consectetur adipiscing elit duis tristique. Ultrices in iaculis nunc sed augue lacus viverra. Ultricies leo integer malesuada nunc vel risus commodo viverra. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Lectus arcu bibendum at varius vel pharetra vel. Ut sem viverra aliquet eget sit amet tellus. Nec nam aliquam sem et tortor consequat id porta. Lacinia at quis risus sed. Venenatis urna cursus eget nunc. Faucibus ornare suspendisse sed nisi lacus sed. Tellus in metus vulputate eu scelerisque felis. Consectetur purus ut faucibus pulvinar. Massa enim nec dui nunc mattis enim. Nisl purus in mollis nunc sed. Tincidunt id aliquet risus feugiat in ante metus. Eu augue ut lectus arcu bibendum at varius vel pharetra. Scelerisque mauris pellentesque pulvinar pellentesque. Id porta nibh venenatis cras sed felis eget velit.

Faucibus purus in massa tempor. Morbi tempus iaculis urna id volutpat lacus laoreet non. Sed risus ultricies tristique nulla aliquet enim tortor at. Tempus egestas sed sed risus pretium quam. Dictum at tempor commodo ullamcorper a lacus vestibulum. In tellus integer feugiat scelerisque. Ac tortor vitae purus faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Ut porttitor leo a diam sollicitudin tempor id. Proin sed libero enim sed faucibus. Dui faucibus in ornare quam viverra orci sagittis. Bibendum est ultricies integer quis auctor elit sed vulputate. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Turpis massa sed elementum tempus egestas sed sed risus pretium. Malesuada fames ac turpis egestas. Faucibus nisl tincidunt eget nullam non nisi est sit. Massa id neque aliquam vestibulum morbi blandit cursus. Nisl purus in mollis nunc sed id semper risus in. Nulla at volutpat diam ut venenatis tellus in metus.

Feugiat in ante metus dictum at tempor commodo. Sit amet luctus venenatis lectus magna. Vitae auctor eu augue ut lectus arcu. Condimentum vitae sapien pellentesque habitant morbi. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Facilisi morbi tempus iaculis urna id volutpat. Eu volutpat odio facilisis mauris sit amet. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Bibendum est ultricies integer quis auctor elit sed vulputate. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nec feugiat nisl pretium fusce. Nunc congue nisi vitae suscipit tellus mauris a diam. Vel pharetra vel turpis nunc eget. Id porta nibh venenatis cras.

Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ut eu sem integer vitae justo eget. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Arcu ac tortor dignissim convallis aenean et tortor at risus. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar elementum integer enim neque. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Proin nibh nisl condimentum id venenatis a. Ultricies integer quis auctor elit sed. Sed felis eget velit aliquet sagittis id consectetur purus ut. Duis at tellus at urna condimentum mattis pellentesque id. Quis enim lobortis scelerisque fermentum dui. Leo in vitae turpis massa sed elementum tempus egestas.</p>
            </section>

            <section className = "mb-3" id = "skills">
                <SectionHead txt = {"Skills"}/>
                <h2 className = "text-2xl">Programming Languages</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo in vitae turpis massa sed elementum tempus egestas. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Morbi tristique senectus et netus et malesuada. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Urna id volutpat lacus laoreet non curabitur gravida. Est lorem ipsum dolor sit amet. Et malesuada fames ac turpis egestas maecenas pharetra convallis. Gravida rutrum quisque non tellus orci ac auctor augue. Purus semper eget duis at tellus. Nunc sed augue lacus viverra vitae congue eu consequat ac.

Dolor sit amet consectetur adipiscing elit duis tristique. Ultrices in iaculis nunc sed augue lacus viverra. Ultricies leo integer malesuada nunc vel risus commodo viverra. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Lectus arcu bibendum at varius vel pharetra vel. Ut sem viverra aliquet eget sit amet tellus. Nec nam aliquam sem et tortor consequat id porta. Lacinia at quis risus sed. Venenatis urna cursus eget nunc. Faucibus ornare suspendisse sed nisi lacus sed. Tellus in metus vulputate eu scelerisque felis. Consectetur purus ut faucibus pulvinar. Massa enim nec dui nunc mattis enim. Nisl purus in mollis nunc sed. Tincidunt id aliquet risus feugiat in ante metus. Eu augue ut lectus arcu bibendum at varius vel pharetra. Scelerisque mauris pellentesque pulvinar pellentesque. Id porta nibh venenatis cras sed felis eget velit.

Faucibus purus in massa tempor. Morbi tempus iaculis urna id volutpat lacus laoreet non. Sed risus ultricies tristique nulla aliquet enim tortor at. Tempus egestas sed sed risus pretium quam. Dictum at tempor commodo ullamcorper a lacus vestibulum. In tellus integer feugiat scelerisque. Ac tortor vitae purus faucibus. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum. Ut porttitor leo a diam sollicitudin tempor id. Proin sed libero enim sed faucibus. Dui faucibus in ornare quam viverra orci sagittis. Bibendum est ultricies integer quis auctor elit sed vulputate. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Turpis massa sed elementum tempus egestas sed sed risus pretium. Malesuada fames ac turpis egestas. Faucibus nisl tincidunt eget nullam non nisi est sit. Massa id neque aliquam vestibulum morbi blandit cursus. Nisl purus in mollis nunc sed id semper risus in. Nulla at volutpat diam ut venenatis tellus in metus.

Feugiat in ante metus dictum at tempor commodo. Sit amet luctus venenatis lectus magna. Vitae auctor eu augue ut lectus arcu. Condimentum vitae sapien pellentesque habitant morbi. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Facilisi morbi tempus iaculis urna id volutpat. Eu volutpat odio facilisis mauris sit amet. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Bibendum est ultricies integer quis auctor elit sed vulputate. Diam ut venenatis tellus in metus vulputate eu scelerisque. Nec feugiat nisl pretium fusce. Nunc congue nisi vitae suscipit tellus mauris a diam. Vel pharetra vel turpis nunc eget. Id porta nibh venenatis cras.

Bibendum est ultricies integer quis auctor elit sed vulputate mi. Ut eu sem integer vitae justo eget. Enim eu turpis egestas pretium aenean pharetra magna ac placerat. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Arcu ac tortor dignissim convallis aenean et tortor at risus. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Pulvinar elementum integer enim neque. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Proin nibh nisl condimentum id venenatis a. Ultricies integer quis auctor elit sed. Sed felis eget velit aliquet sagittis id consectetur purus ut. Duis at tellus at urna condimentum mattis pellentesque id. Quis enim lobortis scelerisque fermentum dui. Leo in vitae turpis massa sed elementum tempus egestas.</p>
            </section>
            <div>
                Resume in pdf form: <a href="/other_files/Resume-1.pdf" download className = "bg-secondary text-primary hover:bg-transparent hover:text-secondary hover:border-b-2 hover:border-b-secondary">download</a>
            </div>
            </div>


           
        </div>

    );
}

interface resumeCategory{
    name: string;
    path: string;
}



function Navbar(){
    /* sections should include the basic resume stuff, I'll refactor later, 
    */
   return(
    <ul className = "pt-1 text-xl relative top-0 bg-secondary text-primary border-b-secondary border-b-2" >
        {categories.map((category: resumeCategory, index) =>
        <li key = {index} className = "inline p-2 bg-transparent">
            {category.name}</li>
        )}
    </ul>
   );

}
export default Experience;


interface headstr{
    txt: string
}

function SectionHead({txt}: headstr){
    return(
    <h1 className = "text-3xl">{txt}</h1>
    );
}