var _ = require('lodash');
var async = require('async');
var request = require('request');

var numbers = ['2193319264','2193646226','2194276889','2195122280','2196597904','2196781415','2198082875','2199245309','2247953566','3122170145','3124056308','3125095706','3125329458','3125431041','3126249457','3126517904','3127304653','3127653422','3128600229','3129125835','3129297017','6304058956','6366672805','7082007145','7087309097','7088907404','7088951523','7203384079','7642042889','7732067994','7732185512','7732210769','7732210938','7732214971','7732215122','7732216815','7732217829','7732218241','7732261093','7732333680','7732400889','7732409638','7732504021','7732535928','7732646182','7732706919','7732940111','7733122037','7733122038','7733157712','7733195942','7733197668','7733222697','7733364441','7733365671','7733414842','7733418344','7733541638','7733569849','7733661085','7733740061','7733740728','7733747869','7733748171','7733751661','7733752084','7733752227','7733752779','7733753256','7733756768','7733756784','7733757231','7733758527','7733870931','7733877970','7733964399','7734015091','7734018961','7734018971','7734128064','7734152291','7734180417','7734260405','7734373245','7734503092','7734508998','7734566747','7734597037','7734746009','7734802540','7734944907','7735109449','7735160333','7735161426','7735205438','7735247326','7735300464','7735300485','7735300901','7735304504','7735430436','7735441281','7735444233','7735444682','7735512494','7735517349','7735573883','7735639124','7735711472','7735711725','7735776620','7735800896','7735954921','7736005516','7736033380','7736143977','7736155581','7736175575','7736190506','7736213281','7736213669','7736276219','7736278008','7736329375','7736460091','7736460126','7736460189','7736460590','7736460668','7736469731','7736552590','7736641453','7736729631','7736732970','7736805440','7736838147','7736915623','7736991229','7736997094','7737040330','7737093092','7737150177','7737215193','7737215340','7737217723','7737218270','7737218694','7737219083','7737219880','7737310091','7737310687','7737311905','7737318753','7737318962','7737325361','7737336479','7737341317','7737341845','7737343745','7737345168','7737345727','7737448325','7737464710','7737682928','7737682969','7737684705','7737685378','7737687293','7737687725','7737688124','7737689601','7737974027','7738052851','7738078135','7738146995','7738164207','7738173512','7738174067','7738196317','7738225261','7738273079','7738352794','7738411286','7738422103','7738514614','7738582994','7738608752','7738679729','7738701989','7738759556','7738860353','7739086248','7739160058','7739181381','7739192794','7739331539','7739467689','7739493511','7739510534','7739712221','7739781213','7739781924','7739782805','7739785225','7739786597','7739872436','7739875691','7739886890','7739910613','8169845734','8472249427','8475322305','8478463425','8722262510','9374898233'];

// var numbers = ['8476449168', '7737267272', '2163719516'];

var funcs = [];
_.each(numbers, function(number){
  var func = function(next){
    request.post({
      url: 'http://localhost:3000/api/subscribers',
      form: {phone: number}
    }, function(err, resp, body){
      if (err) process.stdout.write(err);
      if (resp.statusCode != 200) {
        process.stdout.write("\n" + resp.statusCode + " - " + body + "\n");
      }
      process.stdout.write('.')
      
      setTimeout(next, 1000);
    })
  }
  funcs.push(func);
})

async.series(funcs, function(err, rslt){
  if (err) process.stdout.write(err);
})