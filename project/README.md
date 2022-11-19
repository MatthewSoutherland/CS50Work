# YOUR PROJECT TITLE
Harvard final
#### Video Demo:  <https://www.youtube.com/watch?v=9lcuBTCN8eY>
#### Description:
    My profession is a senior machinist/programmer for an avaition/defence manufacturing company. My final project was build around
making my job a little more efficient. The main focus would be less footsteps during the day. How did I do that?....

    Templates:
    calculator has some basic calculations that every beginner needs to learn. Converting surface footage to RPM and vice versa.
It also has a right angle triangle, in which you provide two peices of information and it will make the remaining calculations for
you. Not much benefit to me, except the occasional math explaination.

    Chips is a template that will send a text message to our material handler person. It requires your name which is implemented by
the session, your work center, and type of material you will be machining. This is a huge deal because I have spent too much time
walking the plant looking for the guy.

    mz4 is the machine I work on. It will take a work piece pickup (x and z) and calculate the rotation around each machines particular
theoretical center lines (x and z). The machines centerlines can be changed with the mz4cl template, which there is a link to in the
mz4 template. The centerlines are wrote to csv files. This program took a second to make, but this double check of such intensive math
is long over due. Before this program we would make these calculations on a calculator. These calculations we make everyday and human
error is a very real factor that has led to hundreds of thousands of dollars of scrap over the years.

    ports contains some common port specification data and its interactive. Because I couldnt obtain all of the specs, I included
a google search inside the page.

    taps_drills is a page that has a lot of data within. These items are very commonly searched by the machinists, so I build a page
containing all this data. This page is also very interactive, making searching for things quick. If you start typing the major diameter
of the selected item, it will automatically focus on and highlight the item. You can also click with the mouse to highlight or
unhighlight items on the page.

    toollist is a page that simiulates the paper version of tool lists that we create and turn into the tool crib. This page will
automatically send an email to the toolcrib, and that email is in an html table format. Everyday I make multiple trips to the toolcrib
for one or two tools, this feature is going to save a ton of time and energy.

    home.html explains the various nav bar link items.

    login.html allows you to log in under any name which will be placed in a session, however the password is controlled.

    There are a few other templates which were made to redirect after an email or text was sent. I would like to add that the page
is responsive. I used a fair amount of bootstrap and over 500 lines of css logic to make it happen, But I wanted to use this app on
my cell phone. This app runs live at: https://matthewsoutherland.pythonanywhere.com/. password to get in is wb04. any user name will
work.

