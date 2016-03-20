// TLE info for projecting orbits of satellites
// https://en.wikipedia.org/wiki/Two-line_element_set

// planet labs satellite data pulled from
// http://spaceflight101.com/flock/ and 
// from https://www.space-track.org

// this should be replaced with something to pull sat info dynamically from space-track
// because these satellites will eventually de-orbit and new ones will be added 
tles = [
    {
      name: "ISS",
      line_1: "1 25544U 98067A   16080.57099640  .00004748  00000-0  78714-4 0  9999",
      line_2: "2 25544  51.6445 139.9891 0002135 332.4842 138.5604 15.54200193991190"
    },
    {
      name: "FLOCK 1C 1",
      line_1: "1 40027U 14033T   16079.29507496  .00000664  00000-0  78449-4 0  9991",
      line_2: "2 40027  97.9415 345.4090 0013714   3.7241 356.4064 14.88003317 94857",
    },
    {
      name: "FLOCK 1C 2",
      line_1: "1 40029U 14033V   16079.78676979  .00001160  00000-0  13245-3 0  9994",
      line_2: "2 40029  97.9420 345.8200 0014864 358.7535   1.3615 14.87951267 94918",
    },
    {
      name: "FLOCK 1C 3",
      line_1: "1 40041U 14033AH  16079.78689128  .00000896  00000-0  10415-3 0  9999",
      line_2: "2 40041  97.9458 345.9086 0013645 349.4705  10.6212 14.87819266 94905",
    },
    {
      name: "FLOCK 1C 4",
      line_1: "1 40031U 14033X   16079.78215459  .00000935  00000-0  10809-3 0  9991",
      line_2: "2 40031  97.9415 345.8391 0015264 356.2903   3.8200 14.87931331 94909",
    },
    {
      name: "FLOCK 1C 5",
      line_1: "1 40038U 14033AE  16079.78787652  .00001034  00000-0  11831-3 0  9994",
      line_2: "2 40038  97.9432 345.9678 0014766 352.3044   7.7936 14.88123667 94919",
    },
    {
      name: "FLOCK 1C 6",
      line_1: "1 40036U 14033AC  16079.77739385  .00000836  00000-0  96787-4 0  9994",
      line_2: "2 40036  97.9445 346.0699 0012747 352.9572   7.1498 14.88142801 94924",
    },
    {
      name: "FLOCK 1C 7",
      line_1: "1 40026U 14033S   16079.79075854  .00002834  00000-0  31174-3 0  9997",
      line_2: "2 40026  97.9419 346.0045 0012339   4.6460 355.4865 14.88363913 94930",
    },
    {
      name: "FLOCK 1C 8",
      line_1: "1 40040U 14033AG  16079.73737507  .00002803  00000-0  29813-3 0  9990",
      line_2: "2 40040  97.9440 346.5872 0013595 345.3609  14.7173 14.89731533 94944",
    },
    {
      name: "FLOCK 1C 9",
      line_1: "1 40035U 14033AB  16079.72305896  .00001004  00000-0  11536-3 0  9990",
      line_2: "2 40035  97.9431 345.9306 0012455 352.6124   7.4911 14.88009710 94909",
    },
    {
      line_1: "1 40023U 14033P   16079.69697251  .00000744  00000-0  87399-4 0  9993",
      line_2: "2 40023  97.9407 345.7370 0013788   5.2391 354.9019 14.87853042 94908",
      name: "FLOCK 1C 10",
    },
    {
      name: "FLOCK 1C 11",
      line_1: '1 40033U 14033Z   16079.39224997  .00002829  00000-0  30617-3 0  9990',
      line_2: '2 40033  97.9422 345.7946 0012587 356.2132   3.8959 14.89030204 94882',
    },

    // {
    //   line: "FLOCK 1E-2",
    //   line_1: "1 40722U 98067GE  16065.55779821  .47056096  12829-4  35318-3 0  9993",
    //   line_2: "2 40722  51.6158 187.3602 0006346 336.4790  29.3138 16.52362311 37030",
    // },
    // {
    //   line: "FLOCK 1E-1",
    //   line_1: "1 40723U 98067GF  16079.51504867  .00174938  00000-0  83333-3 0  9990",
    //   line_2: "2 40723  51.6302 125.9723 0006513  21.3843 119.9121 15.81791196 39048",
    // },
    {
      name: "FLOCK 1E-4",
      line_1: "1 40724U 98067GG  16079.32943679  .00106539  00000-0  58861-3 0  9998",
      line_2: "2 40724  51.6367 127.9518 0004037  51.5469   6.5801 15.78796347 39003",
    },
    {
      name: "FLOCK 1E-3",
      line_1: "1 40725U 98067GH  16079.60117885  .00103487  00000-0  48206-3 0  9993",
      line_2: "2 40725  51.6318 122.7831 0008009  26.7146 110.3943 15.82491359 39067",
    },
    {
      name: "FLOCK 1E-7",
      line_1: "1 40726U 98067GJ  16079.62131559  .00079764  00000-0  50456-3 0  9990",
      line_2: "2 40726  51.6353 127.4977 0003767  34.6082 101.3550 15.75867194 38882",
    },
    {
      name: "FLOCK 1E-8",
      line_1: "1 40727U 98067GK  16079.76278054  .00095493  00000-0  50802-3 0  9990",
      line_2: "2 40727  51.6375 124.7408 0004256  45.5636  62.6559 15.79674733 38928",
    },
    {
      name: "FLOCK 1E-5",
      line_1: "1 40728U 98067GL  16079.57479280  .00077052  00000-0  47027-3 0  9990",
      line_2: "2 40728  51.6350 127.1239 0006217  51.9327 104.4235 15.76679180 38887",
    },
    {
      name: "FLOCK 1E-6",
      line_1: "1 40729U 98067GM  16079.74516297  .00082451  00000-0  47241-3 0  9997",
      line_2: "2 40729  51.6354 125.3549 0006875  36.5652  66.4164 15.78068550 38935",
    },
    {
      name: "FLOCK 1E-10",
      line_1: "1 40737U 98067GP  16079.56527729  .00075073  00000-0  47196-3 0  9999",
      line_2: "2 40737  51.6344 127.8277 0003586  37.5378 119.7652 15.76033355 38869",
    },
    {
      name: "FLOCK 1E-11",
      line_1: "1 40738U 98067GQ  16079.62620638  .00068390  00000-0  39654-3 0  9994",
      line_2: "2 40738  51.6319 124.6065 0006953  33.3204  43.2972 15.77875206 38737",
    },
    {
      name: "FLOCK 1E-12",
      line_1: "1 40739U 98067GR  16079.75064966  .00072445  00000-0  45342-3 0  9992",
      line_2: "2 40739  51.6354 126.9319 0005861  47.5031  56.0246 15.76134791 38727",
    },
    {
      name: "FLOCK 1E-13",
      line_1: "1 40740U 98067GS  16079.75291847  .00057839  00000-0  36911-3 0  9996",
      line_2: "2 40740  51.6344 126.1859 0002822  63.5668  41.1463 15.75798701 38718",
    },
    {
      name: "FLOCK 1E-14",
      line_1: "1 40741U 98067GT  16079.61314604  .00079397  00000-0  47869-3 0  9996",
      line_2: "2 40741  51.6332 126.6966 0003708  43.3556  93.2948 15.76960553 38685",
    }

]