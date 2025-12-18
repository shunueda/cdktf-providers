// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NshttpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#adpttimeout Nshttpprofile#adpttimeout}
  */
  readonly adpttimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#allowonlywordcharactersandhyphen Nshttpprofile#allowonlywordcharactersandhyphen}
  */
  readonly allowonlywordcharactersandhyphen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#altsvc Nshttpprofile#altsvc}
  */
  readonly altsvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#altsvcvalue Nshttpprofile#altsvcvalue}
  */
  readonly altsvcvalue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#apdexcltresptimethreshold Nshttpprofile#apdexcltresptimethreshold}
  */
  readonly apdexcltresptimethreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#clientiphdrexpr Nshttpprofile#clientiphdrexpr}
  */
  readonly clientiphdrexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#cmponpush Nshttpprofile#cmponpush}
  */
  readonly cmponpush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#conmultiplex Nshttpprofile#conmultiplex}
  */
  readonly conmultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#dropextracrlf Nshttpprofile#dropextracrlf}
  */
  readonly dropextracrlf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#dropextradata Nshttpprofile#dropextradata}
  */
  readonly dropextradata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#dropinvalreqs Nshttpprofile#dropinvalreqs}
  */
  readonly dropinvalreqs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#grpcholdlimit Nshttpprofile#grpcholdlimit}
  */
  readonly grpcholdlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#grpcholdtimeout Nshttpprofile#grpcholdtimeout}
  */
  readonly grpcholdtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#grpclengthdelimitation Nshttpprofile#grpclengthdelimitation}
  */
  readonly grpclengthdelimitation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#hostheadervalidation Nshttpprofile#hostheadervalidation}
  */
  readonly hostheadervalidation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2 Nshttpprofile#http2}
  */
  readonly http2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2altsvcframe Nshttpprofile#http2altsvcframe}
  */
  readonly http2Altsvcframe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2direct Nshttpprofile#http2direct}
  */
  readonly http2Direct?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2extendedconnect Nshttpprofile#http2extendedconnect}
  */
  readonly http2Extendedconnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2headertablesize Nshttpprofile#http2headertablesize}
  */
  readonly http2Headertablesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2initialconnwindowsize Nshttpprofile#http2initialconnwindowsize}
  */
  readonly http2Initialconnwindowsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2initialwindowsize Nshttpprofile#http2initialwindowsize}
  */
  readonly http2Initialwindowsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxconcurrentstreams Nshttpprofile#http2maxconcurrentstreams}
  */
  readonly http2Maxconcurrentstreams?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxemptyframespermin Nshttpprofile#http2maxemptyframespermin}
  */
  readonly http2Maxemptyframespermin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxframesize Nshttpprofile#http2maxframesize}
  */
  readonly http2Maxframesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxheaderlistsize Nshttpprofile#http2maxheaderlistsize}
  */
  readonly http2Maxheaderlistsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxpingframespermin Nshttpprofile#http2maxpingframespermin}
  */
  readonly http2Maxpingframespermin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxresetframespermin Nshttpprofile#http2maxresetframespermin}
  */
  readonly http2Maxresetframespermin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxrxresetframespermin Nshttpprofile#http2maxrxresetframespermin}
  */
  readonly http2Maxrxresetframespermin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2maxsettingsframespermin Nshttpprofile#http2maxsettingsframespermin}
  */
  readonly http2Maxsettingsframespermin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2minseverconn Nshttpprofile#http2minseverconn}
  */
  readonly http2Minseverconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http2strictcipher Nshttpprofile#http2strictcipher}
  */
  readonly http2Strictcipher?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3 Nshttpprofile#http3}
  */
  readonly http3?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3maxheaderblockedstreams Nshttpprofile#http3maxheaderblockedstreams}
  */
  readonly http3Maxheaderblockedstreams?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3maxheaderfieldsectionsize Nshttpprofile#http3maxheaderfieldsectionsize}
  */
  readonly http3Maxheaderfieldsectionsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3maxheadertablesize Nshttpprofile#http3maxheadertablesize}
  */
  readonly http3Maxheadertablesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3minseverconn Nshttpprofile#http3minseverconn}
  */
  readonly http3Minseverconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#http3webtransport Nshttpprofile#http3webtransport}
  */
  readonly http3Webtransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#httppipelinebuffsize Nshttpprofile#httppipelinebuffsize}
  */
  readonly httppipelinebuffsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#id Nshttpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#incomphdrdelay Nshttpprofile#incomphdrdelay}
  */
  readonly incomphdrdelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#markconnreqinval Nshttpprofile#markconnreqinval}
  */
  readonly markconnreqinval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#markhttp09inval Nshttpprofile#markhttp09inval}
  */
  readonly markhttp09Inval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#markhttpheaderextrawserror Nshttpprofile#markhttpheaderextrawserror}
  */
  readonly markhttpheaderextrawserror?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#markrfc7230noncompliantinval Nshttpprofile#markrfc7230noncompliantinval}
  */
  readonly markrfc7230Noncompliantinval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#marktracereqinval Nshttpprofile#marktracereqinval}
  */
  readonly marktracereqinval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#maxduplicateheaderfields Nshttpprofile#maxduplicateheaderfields}
  */
  readonly maxduplicateheaderfields?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#maxheaderfieldlen Nshttpprofile#maxheaderfieldlen}
  */
  readonly maxheaderfieldlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#maxheaderlen Nshttpprofile#maxheaderlen}
  */
  readonly maxheaderlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#maxreq Nshttpprofile#maxreq}
  */
  readonly maxreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#maxreusepool Nshttpprofile#maxreusepool}
  */
  readonly maxreusepool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#minreusepool Nshttpprofile#minreusepool}
  */
  readonly minreusepool?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#name Nshttpprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#passprotocolupgrade Nshttpprofile#passprotocolupgrade}
  */
  readonly passprotocolupgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#persistentetag Nshttpprofile#persistentetag}
  */
  readonly persistentetag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#reqtimeout Nshttpprofile#reqtimeout}
  */
  readonly reqtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#reqtimeoutaction Nshttpprofile#reqtimeoutaction}
  */
  readonly reqtimeoutaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#reusepooltimeout Nshttpprofile#reusepooltimeout}
  */
  readonly reusepooltimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#rtsptunnel Nshttpprofile#rtsptunnel}
  */
  readonly rtsptunnel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#weblog Nshttpprofile#weblog}
  */
  readonly weblog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#websocket Nshttpprofile#websocket}
  */
  readonly websocket?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile citrixadc_nshttpprofile}
*/
export class Nshttpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nshttpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nshttpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nshttpprofile to import
  * @param importFromId The id of the existing Nshttpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nshttpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nshttpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nshttpprofile citrixadc_nshttpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NshttpprofileConfig
  */
  public constructor(scope: Construct, id: string, config: NshttpprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nshttpprofile',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adpttimeout = config.adpttimeout;
    this._allowonlywordcharactersandhyphen = config.allowonlywordcharactersandhyphen;
    this._altsvc = config.altsvc;
    this._altsvcvalue = config.altsvcvalue;
    this._apdexcltresptimethreshold = config.apdexcltresptimethreshold;
    this._clientiphdrexpr = config.clientiphdrexpr;
    this._cmponpush = config.cmponpush;
    this._conmultiplex = config.conmultiplex;
    this._dropextracrlf = config.dropextracrlf;
    this._dropextradata = config.dropextradata;
    this._dropinvalreqs = config.dropinvalreqs;
    this._grpcholdlimit = config.grpcholdlimit;
    this._grpcholdtimeout = config.grpcholdtimeout;
    this._grpclengthdelimitation = config.grpclengthdelimitation;
    this._hostheadervalidation = config.hostheadervalidation;
    this._http2 = config.http2;
    this._http2Altsvcframe = config.http2Altsvcframe;
    this._http2Direct = config.http2Direct;
    this._http2Extendedconnect = config.http2Extendedconnect;
    this._http2Headertablesize = config.http2Headertablesize;
    this._http2Initialconnwindowsize = config.http2Initialconnwindowsize;
    this._http2Initialwindowsize = config.http2Initialwindowsize;
    this._http2Maxconcurrentstreams = config.http2Maxconcurrentstreams;
    this._http2Maxemptyframespermin = config.http2Maxemptyframespermin;
    this._http2Maxframesize = config.http2Maxframesize;
    this._http2Maxheaderlistsize = config.http2Maxheaderlistsize;
    this._http2Maxpingframespermin = config.http2Maxpingframespermin;
    this._http2Maxresetframespermin = config.http2Maxresetframespermin;
    this._http2Maxrxresetframespermin = config.http2Maxrxresetframespermin;
    this._http2Maxsettingsframespermin = config.http2Maxsettingsframespermin;
    this._http2Minseverconn = config.http2Minseverconn;
    this._http2Strictcipher = config.http2Strictcipher;
    this._http3 = config.http3;
    this._http3Maxheaderblockedstreams = config.http3Maxheaderblockedstreams;
    this._http3Maxheaderfieldsectionsize = config.http3Maxheaderfieldsectionsize;
    this._http3Maxheadertablesize = config.http3Maxheadertablesize;
    this._http3Minseverconn = config.http3Minseverconn;
    this._http3Webtransport = config.http3Webtransport;
    this._httppipelinebuffsize = config.httppipelinebuffsize;
    this._id = config.id;
    this._incomphdrdelay = config.incomphdrdelay;
    this._markconnreqinval = config.markconnreqinval;
    this._markhttp09Inval = config.markhttp09Inval;
    this._markhttpheaderextrawserror = config.markhttpheaderextrawserror;
    this._markrfc7230Noncompliantinval = config.markrfc7230Noncompliantinval;
    this._marktracereqinval = config.marktracereqinval;
    this._maxduplicateheaderfields = config.maxduplicateheaderfields;
    this._maxheaderfieldlen = config.maxheaderfieldlen;
    this._maxheaderlen = config.maxheaderlen;
    this._maxreq = config.maxreq;
    this._maxreusepool = config.maxreusepool;
    this._minreusepool = config.minreusepool;
    this._name = config.name;
    this._passprotocolupgrade = config.passprotocolupgrade;
    this._persistentetag = config.persistentetag;
    this._reqtimeout = config.reqtimeout;
    this._reqtimeoutaction = config.reqtimeoutaction;
    this._reusepooltimeout = config.reusepooltimeout;
    this._rtsptunnel = config.rtsptunnel;
    this._weblog = config.weblog;
    this._websocket = config.websocket;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adpttimeout - computed: true, optional: true, required: false
  private _adpttimeout?: string; 
  public get adpttimeout() {
    return this.getStringAttribute('adpttimeout');
  }
  public set adpttimeout(value: string) {
    this._adpttimeout = value;
  }
  public resetAdpttimeout() {
    this._adpttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adpttimeoutInput() {
    return this._adpttimeout;
  }

  // allowonlywordcharactersandhyphen - computed: true, optional: true, required: false
  private _allowonlywordcharactersandhyphen?: string; 
  public get allowonlywordcharactersandhyphen() {
    return this.getStringAttribute('allowonlywordcharactersandhyphen');
  }
  public set allowonlywordcharactersandhyphen(value: string) {
    this._allowonlywordcharactersandhyphen = value;
  }
  public resetAllowonlywordcharactersandhyphen() {
    this._allowonlywordcharactersandhyphen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowonlywordcharactersandhyphenInput() {
    return this._allowonlywordcharactersandhyphen;
  }

  // altsvc - computed: true, optional: true, required: false
  private _altsvc?: string; 
  public get altsvc() {
    return this.getStringAttribute('altsvc');
  }
  public set altsvc(value: string) {
    this._altsvc = value;
  }
  public resetAltsvc() {
    this._altsvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altsvcInput() {
    return this._altsvc;
  }

  // altsvcvalue - computed: true, optional: true, required: false
  private _altsvcvalue?: string; 
  public get altsvcvalue() {
    return this.getStringAttribute('altsvcvalue');
  }
  public set altsvcvalue(value: string) {
    this._altsvcvalue = value;
  }
  public resetAltsvcvalue() {
    this._altsvcvalue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altsvcvalueInput() {
    return this._altsvcvalue;
  }

  // apdexcltresptimethreshold - computed: true, optional: true, required: false
  private _apdexcltresptimethreshold?: number; 
  public get apdexcltresptimethreshold() {
    return this.getNumberAttribute('apdexcltresptimethreshold');
  }
  public set apdexcltresptimethreshold(value: number) {
    this._apdexcltresptimethreshold = value;
  }
  public resetApdexcltresptimethreshold() {
    this._apdexcltresptimethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apdexcltresptimethresholdInput() {
    return this._apdexcltresptimethreshold;
  }

  // clientiphdrexpr - computed: true, optional: true, required: false
  private _clientiphdrexpr?: string; 
  public get clientiphdrexpr() {
    return this.getStringAttribute('clientiphdrexpr');
  }
  public set clientiphdrexpr(value: string) {
    this._clientiphdrexpr = value;
  }
  public resetClientiphdrexpr() {
    this._clientiphdrexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientiphdrexprInput() {
    return this._clientiphdrexpr;
  }

  // cmponpush - computed: true, optional: true, required: false
  private _cmponpush?: string; 
  public get cmponpush() {
    return this.getStringAttribute('cmponpush');
  }
  public set cmponpush(value: string) {
    this._cmponpush = value;
  }
  public resetCmponpush() {
    this._cmponpush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmponpushInput() {
    return this._cmponpush;
  }

  // conmultiplex - computed: true, optional: true, required: false
  private _conmultiplex?: string; 
  public get conmultiplex() {
    return this.getStringAttribute('conmultiplex');
  }
  public set conmultiplex(value: string) {
    this._conmultiplex = value;
  }
  public resetConmultiplex() {
    this._conmultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conmultiplexInput() {
    return this._conmultiplex;
  }

  // dropextracrlf - computed: true, optional: true, required: false
  private _dropextracrlf?: string; 
  public get dropextracrlf() {
    return this.getStringAttribute('dropextracrlf');
  }
  public set dropextracrlf(value: string) {
    this._dropextracrlf = value;
  }
  public resetDropextracrlf() {
    this._dropextracrlf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropextracrlfInput() {
    return this._dropextracrlf;
  }

  // dropextradata - computed: true, optional: true, required: false
  private _dropextradata?: string; 
  public get dropextradata() {
    return this.getStringAttribute('dropextradata');
  }
  public set dropextradata(value: string) {
    this._dropextradata = value;
  }
  public resetDropextradata() {
    this._dropextradata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropextradataInput() {
    return this._dropextradata;
  }

  // dropinvalreqs - computed: true, optional: true, required: false
  private _dropinvalreqs?: string; 
  public get dropinvalreqs() {
    return this.getStringAttribute('dropinvalreqs');
  }
  public set dropinvalreqs(value: string) {
    this._dropinvalreqs = value;
  }
  public resetDropinvalreqs() {
    this._dropinvalreqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropinvalreqsInput() {
    return this._dropinvalreqs;
  }

  // grpcholdlimit - computed: true, optional: true, required: false
  private _grpcholdlimit?: number; 
  public get grpcholdlimit() {
    return this.getNumberAttribute('grpcholdlimit');
  }
  public set grpcholdlimit(value: number) {
    this._grpcholdlimit = value;
  }
  public resetGrpcholdlimit() {
    this._grpcholdlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcholdlimitInput() {
    return this._grpcholdlimit;
  }

  // grpcholdtimeout - computed: true, optional: true, required: false
  private _grpcholdtimeout?: number; 
  public get grpcholdtimeout() {
    return this.getNumberAttribute('grpcholdtimeout');
  }
  public set grpcholdtimeout(value: number) {
    this._grpcholdtimeout = value;
  }
  public resetGrpcholdtimeout() {
    this._grpcholdtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcholdtimeoutInput() {
    return this._grpcholdtimeout;
  }

  // grpclengthdelimitation - computed: true, optional: true, required: false
  private _grpclengthdelimitation?: string; 
  public get grpclengthdelimitation() {
    return this.getStringAttribute('grpclengthdelimitation');
  }
  public set grpclengthdelimitation(value: string) {
    this._grpclengthdelimitation = value;
  }
  public resetGrpclengthdelimitation() {
    this._grpclengthdelimitation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpclengthdelimitationInput() {
    return this._grpclengthdelimitation;
  }

  // hostheadervalidation - computed: true, optional: true, required: false
  private _hostheadervalidation?: string; 
  public get hostheadervalidation() {
    return this.getStringAttribute('hostheadervalidation');
  }
  public set hostheadervalidation(value: string) {
    this._hostheadervalidation = value;
  }
  public resetHostheadervalidation() {
    this._hostheadervalidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostheadervalidationInput() {
    return this._hostheadervalidation;
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: string; 
  public get http2() {
    return this.getStringAttribute('http2');
  }
  public set http2(value: string) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // http2altsvcframe - computed: true, optional: true, required: false
  private _http2Altsvcframe?: string; 
  public get http2Altsvcframe() {
    return this.getStringAttribute('http2altsvcframe');
  }
  public set http2Altsvcframe(value: string) {
    this._http2Altsvcframe = value;
  }
  public resetHttp2Altsvcframe() {
    this._http2Altsvcframe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2AltsvcframeInput() {
    return this._http2Altsvcframe;
  }

  // http2direct - computed: true, optional: true, required: false
  private _http2Direct?: string; 
  public get http2Direct() {
    return this.getStringAttribute('http2direct');
  }
  public set http2Direct(value: string) {
    this._http2Direct = value;
  }
  public resetHttp2Direct() {
    this._http2Direct = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2DirectInput() {
    return this._http2Direct;
  }

  // http2extendedconnect - computed: true, optional: true, required: false
  private _http2Extendedconnect?: string; 
  public get http2Extendedconnect() {
    return this.getStringAttribute('http2extendedconnect');
  }
  public set http2Extendedconnect(value: string) {
    this._http2Extendedconnect = value;
  }
  public resetHttp2Extendedconnect() {
    this._http2Extendedconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ExtendedconnectInput() {
    return this._http2Extendedconnect;
  }

  // http2headertablesize - computed: true, optional: true, required: false
  private _http2Headertablesize?: number; 
  public get http2Headertablesize() {
    return this.getNumberAttribute('http2headertablesize');
  }
  public set http2Headertablesize(value: number) {
    this._http2Headertablesize = value;
  }
  public resetHttp2Headertablesize() {
    this._http2Headertablesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2HeadertablesizeInput() {
    return this._http2Headertablesize;
  }

  // http2initialconnwindowsize - computed: true, optional: true, required: false
  private _http2Initialconnwindowsize?: number; 
  public get http2Initialconnwindowsize() {
    return this.getNumberAttribute('http2initialconnwindowsize');
  }
  public set http2Initialconnwindowsize(value: number) {
    this._http2Initialconnwindowsize = value;
  }
  public resetHttp2Initialconnwindowsize() {
    this._http2Initialconnwindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2InitialconnwindowsizeInput() {
    return this._http2Initialconnwindowsize;
  }

  // http2initialwindowsize - computed: true, optional: true, required: false
  private _http2Initialwindowsize?: number; 
  public get http2Initialwindowsize() {
    return this.getNumberAttribute('http2initialwindowsize');
  }
  public set http2Initialwindowsize(value: number) {
    this._http2Initialwindowsize = value;
  }
  public resetHttp2Initialwindowsize() {
    this._http2Initialwindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2InitialwindowsizeInput() {
    return this._http2Initialwindowsize;
  }

  // http2maxconcurrentstreams - computed: true, optional: true, required: false
  private _http2Maxconcurrentstreams?: number; 
  public get http2Maxconcurrentstreams() {
    return this.getNumberAttribute('http2maxconcurrentstreams');
  }
  public set http2Maxconcurrentstreams(value: number) {
    this._http2Maxconcurrentstreams = value;
  }
  public resetHttp2Maxconcurrentstreams() {
    this._http2Maxconcurrentstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxconcurrentstreamsInput() {
    return this._http2Maxconcurrentstreams;
  }

  // http2maxemptyframespermin - computed: true, optional: true, required: false
  private _http2Maxemptyframespermin?: number; 
  public get http2Maxemptyframespermin() {
    return this.getNumberAttribute('http2maxemptyframespermin');
  }
  public set http2Maxemptyframespermin(value: number) {
    this._http2Maxemptyframespermin = value;
  }
  public resetHttp2Maxemptyframespermin() {
    this._http2Maxemptyframespermin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxemptyframesperminInput() {
    return this._http2Maxemptyframespermin;
  }

  // http2maxframesize - computed: true, optional: true, required: false
  private _http2Maxframesize?: number; 
  public get http2Maxframesize() {
    return this.getNumberAttribute('http2maxframesize');
  }
  public set http2Maxframesize(value: number) {
    this._http2Maxframesize = value;
  }
  public resetHttp2Maxframesize() {
    this._http2Maxframesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxframesizeInput() {
    return this._http2Maxframesize;
  }

  // http2maxheaderlistsize - computed: true, optional: true, required: false
  private _http2Maxheaderlistsize?: number; 
  public get http2Maxheaderlistsize() {
    return this.getNumberAttribute('http2maxheaderlistsize');
  }
  public set http2Maxheaderlistsize(value: number) {
    this._http2Maxheaderlistsize = value;
  }
  public resetHttp2Maxheaderlistsize() {
    this._http2Maxheaderlistsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxheaderlistsizeInput() {
    return this._http2Maxheaderlistsize;
  }

  // http2maxpingframespermin - computed: true, optional: true, required: false
  private _http2Maxpingframespermin?: number; 
  public get http2Maxpingframespermin() {
    return this.getNumberAttribute('http2maxpingframespermin');
  }
  public set http2Maxpingframespermin(value: number) {
    this._http2Maxpingframespermin = value;
  }
  public resetHttp2Maxpingframespermin() {
    this._http2Maxpingframespermin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxpingframesperminInput() {
    return this._http2Maxpingframespermin;
  }

  // http2maxresetframespermin - computed: true, optional: true, required: false
  private _http2Maxresetframespermin?: number; 
  public get http2Maxresetframespermin() {
    return this.getNumberAttribute('http2maxresetframespermin');
  }
  public set http2Maxresetframespermin(value: number) {
    this._http2Maxresetframespermin = value;
  }
  public resetHttp2Maxresetframespermin() {
    this._http2Maxresetframespermin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxresetframesperminInput() {
    return this._http2Maxresetframespermin;
  }

  // http2maxrxresetframespermin - computed: true, optional: true, required: false
  private _http2Maxrxresetframespermin?: number; 
  public get http2Maxrxresetframespermin() {
    return this.getNumberAttribute('http2maxrxresetframespermin');
  }
  public set http2Maxrxresetframespermin(value: number) {
    this._http2Maxrxresetframespermin = value;
  }
  public resetHttp2Maxrxresetframespermin() {
    this._http2Maxrxresetframespermin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxrxresetframesperminInput() {
    return this._http2Maxrxresetframespermin;
  }

  // http2maxsettingsframespermin - computed: true, optional: true, required: false
  private _http2Maxsettingsframespermin?: number; 
  public get http2Maxsettingsframespermin() {
    return this.getNumberAttribute('http2maxsettingsframespermin');
  }
  public set http2Maxsettingsframespermin(value: number) {
    this._http2Maxsettingsframespermin = value;
  }
  public resetHttp2Maxsettingsframespermin() {
    this._http2Maxsettingsframespermin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MaxsettingsframesperminInput() {
    return this._http2Maxsettingsframespermin;
  }

  // http2minseverconn - computed: true, optional: true, required: false
  private _http2Minseverconn?: number; 
  public get http2Minseverconn() {
    return this.getNumberAttribute('http2minseverconn');
  }
  public set http2Minseverconn(value: number) {
    this._http2Minseverconn = value;
  }
  public resetHttp2Minseverconn() {
    this._http2Minseverconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2MinseverconnInput() {
    return this._http2Minseverconn;
  }

  // http2strictcipher - computed: true, optional: true, required: false
  private _http2Strictcipher?: string; 
  public get http2Strictcipher() {
    return this.getStringAttribute('http2strictcipher');
  }
  public set http2Strictcipher(value: string) {
    this._http2Strictcipher = value;
  }
  public resetHttp2Strictcipher() {
    this._http2Strictcipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2StrictcipherInput() {
    return this._http2Strictcipher;
  }

  // http3 - computed: true, optional: true, required: false
  private _http3?: string; 
  public get http3() {
    return this.getStringAttribute('http3');
  }
  public set http3(value: string) {
    this._http3 = value;
  }
  public resetHttp3() {
    this._http3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3Input() {
    return this._http3;
  }

  // http3maxheaderblockedstreams - computed: true, optional: true, required: false
  private _http3Maxheaderblockedstreams?: number; 
  public get http3Maxheaderblockedstreams() {
    return this.getNumberAttribute('http3maxheaderblockedstreams');
  }
  public set http3Maxheaderblockedstreams(value: number) {
    this._http3Maxheaderblockedstreams = value;
  }
  public resetHttp3Maxheaderblockedstreams() {
    this._http3Maxheaderblockedstreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3MaxheaderblockedstreamsInput() {
    return this._http3Maxheaderblockedstreams;
  }

  // http3maxheaderfieldsectionsize - computed: true, optional: true, required: false
  private _http3Maxheaderfieldsectionsize?: number; 
  public get http3Maxheaderfieldsectionsize() {
    return this.getNumberAttribute('http3maxheaderfieldsectionsize');
  }
  public set http3Maxheaderfieldsectionsize(value: number) {
    this._http3Maxheaderfieldsectionsize = value;
  }
  public resetHttp3Maxheaderfieldsectionsize() {
    this._http3Maxheaderfieldsectionsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3MaxheaderfieldsectionsizeInput() {
    return this._http3Maxheaderfieldsectionsize;
  }

  // http3maxheadertablesize - computed: true, optional: true, required: false
  private _http3Maxheadertablesize?: number; 
  public get http3Maxheadertablesize() {
    return this.getNumberAttribute('http3maxheadertablesize');
  }
  public set http3Maxheadertablesize(value: number) {
    this._http3Maxheadertablesize = value;
  }
  public resetHttp3Maxheadertablesize() {
    this._http3Maxheadertablesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3MaxheadertablesizeInput() {
    return this._http3Maxheadertablesize;
  }

  // http3minseverconn - computed: true, optional: true, required: false
  private _http3Minseverconn?: number; 
  public get http3Minseverconn() {
    return this.getNumberAttribute('http3minseverconn');
  }
  public set http3Minseverconn(value: number) {
    this._http3Minseverconn = value;
  }
  public resetHttp3Minseverconn() {
    this._http3Minseverconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3MinseverconnInput() {
    return this._http3Minseverconn;
  }

  // http3webtransport - computed: true, optional: true, required: false
  private _http3Webtransport?: string; 
  public get http3Webtransport() {
    return this.getStringAttribute('http3webtransport');
  }
  public set http3Webtransport(value: string) {
    this._http3Webtransport = value;
  }
  public resetHttp3Webtransport() {
    this._http3Webtransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3WebtransportInput() {
    return this._http3Webtransport;
  }

  // httppipelinebuffsize - computed: true, optional: true, required: false
  private _httppipelinebuffsize?: number; 
  public get httppipelinebuffsize() {
    return this.getNumberAttribute('httppipelinebuffsize');
  }
  public set httppipelinebuffsize(value: number) {
    this._httppipelinebuffsize = value;
  }
  public resetHttppipelinebuffsize() {
    this._httppipelinebuffsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httppipelinebuffsizeInput() {
    return this._httppipelinebuffsize;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // incomphdrdelay - computed: true, optional: true, required: false
  private _incomphdrdelay?: number; 
  public get incomphdrdelay() {
    return this.getNumberAttribute('incomphdrdelay');
  }
  public set incomphdrdelay(value: number) {
    this._incomphdrdelay = value;
  }
  public resetIncomphdrdelay() {
    this._incomphdrdelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomphdrdelayInput() {
    return this._incomphdrdelay;
  }

  // markconnreqinval - computed: true, optional: true, required: false
  private _markconnreqinval?: string; 
  public get markconnreqinval() {
    return this.getStringAttribute('markconnreqinval');
  }
  public set markconnreqinval(value: string) {
    this._markconnreqinval = value;
  }
  public resetMarkconnreqinval() {
    this._markconnreqinval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markconnreqinvalInput() {
    return this._markconnreqinval;
  }

  // markhttp09inval - computed: true, optional: true, required: false
  private _markhttp09Inval?: string; 
  public get markhttp09Inval() {
    return this.getStringAttribute('markhttp09inval');
  }
  public set markhttp09Inval(value: string) {
    this._markhttp09Inval = value;
  }
  public resetMarkhttp09Inval() {
    this._markhttp09Inval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markhttp09InvalInput() {
    return this._markhttp09Inval;
  }

  // markhttpheaderextrawserror - computed: true, optional: true, required: false
  private _markhttpheaderextrawserror?: string; 
  public get markhttpheaderextrawserror() {
    return this.getStringAttribute('markhttpheaderextrawserror');
  }
  public set markhttpheaderextrawserror(value: string) {
    this._markhttpheaderextrawserror = value;
  }
  public resetMarkhttpheaderextrawserror() {
    this._markhttpheaderextrawserror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markhttpheaderextrawserrorInput() {
    return this._markhttpheaderextrawserror;
  }

  // markrfc7230noncompliantinval - computed: true, optional: true, required: false
  private _markrfc7230Noncompliantinval?: string; 
  public get markrfc7230Noncompliantinval() {
    return this.getStringAttribute('markrfc7230noncompliantinval');
  }
  public set markrfc7230Noncompliantinval(value: string) {
    this._markrfc7230Noncompliantinval = value;
  }
  public resetMarkrfc7230Noncompliantinval() {
    this._markrfc7230Noncompliantinval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markrfc7230NoncompliantinvalInput() {
    return this._markrfc7230Noncompliantinval;
  }

  // marktracereqinval - computed: true, optional: true, required: false
  private _marktracereqinval?: string; 
  public get marktracereqinval() {
    return this.getStringAttribute('marktracereqinval');
  }
  public set marktracereqinval(value: string) {
    this._marktracereqinval = value;
  }
  public resetMarktracereqinval() {
    this._marktracereqinval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marktracereqinvalInput() {
    return this._marktracereqinval;
  }

  // maxduplicateheaderfields - computed: true, optional: true, required: false
  private _maxduplicateheaderfields?: number; 
  public get maxduplicateheaderfields() {
    return this.getNumberAttribute('maxduplicateheaderfields');
  }
  public set maxduplicateheaderfields(value: number) {
    this._maxduplicateheaderfields = value;
  }
  public resetMaxduplicateheaderfields() {
    this._maxduplicateheaderfields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxduplicateheaderfieldsInput() {
    return this._maxduplicateheaderfields;
  }

  // maxheaderfieldlen - computed: true, optional: true, required: false
  private _maxheaderfieldlen?: number; 
  public get maxheaderfieldlen() {
    return this.getNumberAttribute('maxheaderfieldlen');
  }
  public set maxheaderfieldlen(value: number) {
    this._maxheaderfieldlen = value;
  }
  public resetMaxheaderfieldlen() {
    this._maxheaderfieldlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxheaderfieldlenInput() {
    return this._maxheaderfieldlen;
  }

  // maxheaderlen - computed: true, optional: true, required: false
  private _maxheaderlen?: number; 
  public get maxheaderlen() {
    return this.getNumberAttribute('maxheaderlen');
  }
  public set maxheaderlen(value: number) {
    this._maxheaderlen = value;
  }
  public resetMaxheaderlen() {
    this._maxheaderlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxheaderlenInput() {
    return this._maxheaderlen;
  }

  // maxreq - computed: true, optional: true, required: false
  private _maxreq?: number; 
  public get maxreq() {
    return this.getNumberAttribute('maxreq');
  }
  public set maxreq(value: number) {
    this._maxreq = value;
  }
  public resetMaxreq() {
    this._maxreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxreqInput() {
    return this._maxreq;
  }

  // maxreusepool - computed: true, optional: true, required: false
  private _maxreusepool?: number; 
  public get maxreusepool() {
    return this.getNumberAttribute('maxreusepool');
  }
  public set maxreusepool(value: number) {
    this._maxreusepool = value;
  }
  public resetMaxreusepool() {
    this._maxreusepool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxreusepoolInput() {
    return this._maxreusepool;
  }

  // minreusepool - computed: true, optional: true, required: false
  private _minreusepool?: number; 
  public get minreusepool() {
    return this.getNumberAttribute('minreusepool');
  }
  public set minreusepool(value: number) {
    this._minreusepool = value;
  }
  public resetMinreusepool() {
    this._minreusepool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minreusepoolInput() {
    return this._minreusepool;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // passprotocolupgrade - computed: true, optional: true, required: false
  private _passprotocolupgrade?: string; 
  public get passprotocolupgrade() {
    return this.getStringAttribute('passprotocolupgrade');
  }
  public set passprotocolupgrade(value: string) {
    this._passprotocolupgrade = value;
  }
  public resetPassprotocolupgrade() {
    this._passprotocolupgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passprotocolupgradeInput() {
    return this._passprotocolupgrade;
  }

  // persistentetag - computed: true, optional: true, required: false
  private _persistentetag?: string; 
  public get persistentetag() {
    return this.getStringAttribute('persistentetag');
  }
  public set persistentetag(value: string) {
    this._persistentetag = value;
  }
  public resetPersistentetag() {
    this._persistentetag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentetagInput() {
    return this._persistentetag;
  }

  // reqtimeout - computed: true, optional: true, required: false
  private _reqtimeout?: number; 
  public get reqtimeout() {
    return this.getNumberAttribute('reqtimeout');
  }
  public set reqtimeout(value: number) {
    this._reqtimeout = value;
  }
  public resetReqtimeout() {
    this._reqtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqtimeoutInput() {
    return this._reqtimeout;
  }

  // reqtimeoutaction - computed: true, optional: true, required: false
  private _reqtimeoutaction?: string; 
  public get reqtimeoutaction() {
    return this.getStringAttribute('reqtimeoutaction');
  }
  public set reqtimeoutaction(value: string) {
    this._reqtimeoutaction = value;
  }
  public resetReqtimeoutaction() {
    this._reqtimeoutaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqtimeoutactionInput() {
    return this._reqtimeoutaction;
  }

  // reusepooltimeout - computed: true, optional: true, required: false
  private _reusepooltimeout?: number; 
  public get reusepooltimeout() {
    return this.getNumberAttribute('reusepooltimeout');
  }
  public set reusepooltimeout(value: number) {
    this._reusepooltimeout = value;
  }
  public resetReusepooltimeout() {
    this._reusepooltimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reusepooltimeoutInput() {
    return this._reusepooltimeout;
  }

  // rtsptunnel - computed: true, optional: true, required: false
  private _rtsptunnel?: string; 
  public get rtsptunnel() {
    return this.getStringAttribute('rtsptunnel');
  }
  public set rtsptunnel(value: string) {
    this._rtsptunnel = value;
  }
  public resetRtsptunnel() {
    this._rtsptunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtsptunnelInput() {
    return this._rtsptunnel;
  }

  // weblog - computed: true, optional: true, required: false
  private _weblog?: string; 
  public get weblog() {
    return this.getStringAttribute('weblog');
  }
  public set weblog(value: string) {
    this._weblog = value;
  }
  public resetWeblog() {
    this._weblog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weblogInput() {
    return this._weblog;
  }

  // websocket - computed: true, optional: true, required: false
  private _websocket?: string; 
  public get websocket() {
    return this.getStringAttribute('websocket');
  }
  public set websocket(value: string) {
    this._websocket = value;
  }
  public resetWebsocket() {
    this._websocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketInput() {
    return this._websocket;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adpttimeout: cdktf.stringToTerraform(this._adpttimeout),
      allowonlywordcharactersandhyphen: cdktf.stringToTerraform(this._allowonlywordcharactersandhyphen),
      altsvc: cdktf.stringToTerraform(this._altsvc),
      altsvcvalue: cdktf.stringToTerraform(this._altsvcvalue),
      apdexcltresptimethreshold: cdktf.numberToTerraform(this._apdexcltresptimethreshold),
      clientiphdrexpr: cdktf.stringToTerraform(this._clientiphdrexpr),
      cmponpush: cdktf.stringToTerraform(this._cmponpush),
      conmultiplex: cdktf.stringToTerraform(this._conmultiplex),
      dropextracrlf: cdktf.stringToTerraform(this._dropextracrlf),
      dropextradata: cdktf.stringToTerraform(this._dropextradata),
      dropinvalreqs: cdktf.stringToTerraform(this._dropinvalreqs),
      grpcholdlimit: cdktf.numberToTerraform(this._grpcholdlimit),
      grpcholdtimeout: cdktf.numberToTerraform(this._grpcholdtimeout),
      grpclengthdelimitation: cdktf.stringToTerraform(this._grpclengthdelimitation),
      hostheadervalidation: cdktf.stringToTerraform(this._hostheadervalidation),
      http2: cdktf.stringToTerraform(this._http2),
      http2altsvcframe: cdktf.stringToTerraform(this._http2Altsvcframe),
      http2direct: cdktf.stringToTerraform(this._http2Direct),
      http2extendedconnect: cdktf.stringToTerraform(this._http2Extendedconnect),
      http2headertablesize: cdktf.numberToTerraform(this._http2Headertablesize),
      http2initialconnwindowsize: cdktf.numberToTerraform(this._http2Initialconnwindowsize),
      http2initialwindowsize: cdktf.numberToTerraform(this._http2Initialwindowsize),
      http2maxconcurrentstreams: cdktf.numberToTerraform(this._http2Maxconcurrentstreams),
      http2maxemptyframespermin: cdktf.numberToTerraform(this._http2Maxemptyframespermin),
      http2maxframesize: cdktf.numberToTerraform(this._http2Maxframesize),
      http2maxheaderlistsize: cdktf.numberToTerraform(this._http2Maxheaderlistsize),
      http2maxpingframespermin: cdktf.numberToTerraform(this._http2Maxpingframespermin),
      http2maxresetframespermin: cdktf.numberToTerraform(this._http2Maxresetframespermin),
      http2maxrxresetframespermin: cdktf.numberToTerraform(this._http2Maxrxresetframespermin),
      http2maxsettingsframespermin: cdktf.numberToTerraform(this._http2Maxsettingsframespermin),
      http2minseverconn: cdktf.numberToTerraform(this._http2Minseverconn),
      http2strictcipher: cdktf.stringToTerraform(this._http2Strictcipher),
      http3: cdktf.stringToTerraform(this._http3),
      http3maxheaderblockedstreams: cdktf.numberToTerraform(this._http3Maxheaderblockedstreams),
      http3maxheaderfieldsectionsize: cdktf.numberToTerraform(this._http3Maxheaderfieldsectionsize),
      http3maxheadertablesize: cdktf.numberToTerraform(this._http3Maxheadertablesize),
      http3minseverconn: cdktf.numberToTerraform(this._http3Minseverconn),
      http3webtransport: cdktf.stringToTerraform(this._http3Webtransport),
      httppipelinebuffsize: cdktf.numberToTerraform(this._httppipelinebuffsize),
      id: cdktf.stringToTerraform(this._id),
      incomphdrdelay: cdktf.numberToTerraform(this._incomphdrdelay),
      markconnreqinval: cdktf.stringToTerraform(this._markconnreqinval),
      markhttp09inval: cdktf.stringToTerraform(this._markhttp09Inval),
      markhttpheaderextrawserror: cdktf.stringToTerraform(this._markhttpheaderextrawserror),
      markrfc7230noncompliantinval: cdktf.stringToTerraform(this._markrfc7230Noncompliantinval),
      marktracereqinval: cdktf.stringToTerraform(this._marktracereqinval),
      maxduplicateheaderfields: cdktf.numberToTerraform(this._maxduplicateheaderfields),
      maxheaderfieldlen: cdktf.numberToTerraform(this._maxheaderfieldlen),
      maxheaderlen: cdktf.numberToTerraform(this._maxheaderlen),
      maxreq: cdktf.numberToTerraform(this._maxreq),
      maxreusepool: cdktf.numberToTerraform(this._maxreusepool),
      minreusepool: cdktf.numberToTerraform(this._minreusepool),
      name: cdktf.stringToTerraform(this._name),
      passprotocolupgrade: cdktf.stringToTerraform(this._passprotocolupgrade),
      persistentetag: cdktf.stringToTerraform(this._persistentetag),
      reqtimeout: cdktf.numberToTerraform(this._reqtimeout),
      reqtimeoutaction: cdktf.stringToTerraform(this._reqtimeoutaction),
      reusepooltimeout: cdktf.numberToTerraform(this._reusepooltimeout),
      rtsptunnel: cdktf.stringToTerraform(this._rtsptunnel),
      weblog: cdktf.stringToTerraform(this._weblog),
      websocket: cdktf.stringToTerraform(this._websocket),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adpttimeout: {
        value: cdktf.stringToHclTerraform(this._adpttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowonlywordcharactersandhyphen: {
        value: cdktf.stringToHclTerraform(this._allowonlywordcharactersandhyphen),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      altsvc: {
        value: cdktf.stringToHclTerraform(this._altsvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      altsvcvalue: {
        value: cdktf.stringToHclTerraform(this._altsvcvalue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apdexcltresptimethreshold: {
        value: cdktf.numberToHclTerraform(this._apdexcltresptimethreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clientiphdrexpr: {
        value: cdktf.stringToHclTerraform(this._clientiphdrexpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cmponpush: {
        value: cdktf.stringToHclTerraform(this._cmponpush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conmultiplex: {
        value: cdktf.stringToHclTerraform(this._conmultiplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropextracrlf: {
        value: cdktf.stringToHclTerraform(this._dropextracrlf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropextradata: {
        value: cdktf.stringToHclTerraform(this._dropextradata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dropinvalreqs: {
        value: cdktf.stringToHclTerraform(this._dropinvalreqs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grpcholdlimit: {
        value: cdktf.numberToHclTerraform(this._grpcholdlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grpcholdtimeout: {
        value: cdktf.numberToHclTerraform(this._grpcholdtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grpclengthdelimitation: {
        value: cdktf.stringToHclTerraform(this._grpclengthdelimitation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostheadervalidation: {
        value: cdktf.stringToHclTerraform(this._hostheadervalidation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2: {
        value: cdktf.stringToHclTerraform(this._http2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2altsvcframe: {
        value: cdktf.stringToHclTerraform(this._http2Altsvcframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2direct: {
        value: cdktf.stringToHclTerraform(this._http2Direct),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2extendedconnect: {
        value: cdktf.stringToHclTerraform(this._http2Extendedconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http2headertablesize: {
        value: cdktf.numberToHclTerraform(this._http2Headertablesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2initialconnwindowsize: {
        value: cdktf.numberToHclTerraform(this._http2Initialconnwindowsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2initialwindowsize: {
        value: cdktf.numberToHclTerraform(this._http2Initialwindowsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxconcurrentstreams: {
        value: cdktf.numberToHclTerraform(this._http2Maxconcurrentstreams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxemptyframespermin: {
        value: cdktf.numberToHclTerraform(this._http2Maxemptyframespermin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxframesize: {
        value: cdktf.numberToHclTerraform(this._http2Maxframesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxheaderlistsize: {
        value: cdktf.numberToHclTerraform(this._http2Maxheaderlistsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxpingframespermin: {
        value: cdktf.numberToHclTerraform(this._http2Maxpingframespermin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxresetframespermin: {
        value: cdktf.numberToHclTerraform(this._http2Maxresetframespermin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxrxresetframespermin: {
        value: cdktf.numberToHclTerraform(this._http2Maxrxresetframespermin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2maxsettingsframespermin: {
        value: cdktf.numberToHclTerraform(this._http2Maxsettingsframespermin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2minseverconn: {
        value: cdktf.numberToHclTerraform(this._http2Minseverconn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http2strictcipher: {
        value: cdktf.stringToHclTerraform(this._http2Strictcipher),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http3: {
        value: cdktf.stringToHclTerraform(this._http3),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http3maxheaderblockedstreams: {
        value: cdktf.numberToHclTerraform(this._http3Maxheaderblockedstreams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http3maxheaderfieldsectionsize: {
        value: cdktf.numberToHclTerraform(this._http3Maxheaderfieldsectionsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http3maxheadertablesize: {
        value: cdktf.numberToHclTerraform(this._http3Maxheadertablesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http3minseverconn: {
        value: cdktf.numberToHclTerraform(this._http3Minseverconn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http3webtransport: {
        value: cdktf.stringToHclTerraform(this._http3Webtransport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httppipelinebuffsize: {
        value: cdktf.numberToHclTerraform(this._httppipelinebuffsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incomphdrdelay: {
        value: cdktf.numberToHclTerraform(this._incomphdrdelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      markconnreqinval: {
        value: cdktf.stringToHclTerraform(this._markconnreqinval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      markhttp09inval: {
        value: cdktf.stringToHclTerraform(this._markhttp09Inval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      markhttpheaderextrawserror: {
        value: cdktf.stringToHclTerraform(this._markhttpheaderextrawserror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      markrfc7230noncompliantinval: {
        value: cdktf.stringToHclTerraform(this._markrfc7230Noncompliantinval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      marktracereqinval: {
        value: cdktf.stringToHclTerraform(this._marktracereqinval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxduplicateheaderfields: {
        value: cdktf.numberToHclTerraform(this._maxduplicateheaderfields),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxheaderfieldlen: {
        value: cdktf.numberToHclTerraform(this._maxheaderfieldlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxheaderlen: {
        value: cdktf.numberToHclTerraform(this._maxheaderlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxreq: {
        value: cdktf.numberToHclTerraform(this._maxreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxreusepool: {
        value: cdktf.numberToHclTerraform(this._maxreusepool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minreusepool: {
        value: cdktf.numberToHclTerraform(this._minreusepool),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passprotocolupgrade: {
        value: cdktf.stringToHclTerraform(this._passprotocolupgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistentetag: {
        value: cdktf.stringToHclTerraform(this._persistentetag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reqtimeout: {
        value: cdktf.numberToHclTerraform(this._reqtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reqtimeoutaction: {
        value: cdktf.stringToHclTerraform(this._reqtimeoutaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reusepooltimeout: {
        value: cdktf.numberToHclTerraform(this._reusepooltimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtsptunnel: {
        value: cdktf.stringToHclTerraform(this._rtsptunnel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weblog: {
        value: cdktf.stringToHclTerraform(this._weblog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      websocket: {
        value: cdktf.stringToHclTerraform(this._websocket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
