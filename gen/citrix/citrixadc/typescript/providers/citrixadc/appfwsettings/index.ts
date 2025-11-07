// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppfwsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#ceflogging Appfwsettings#ceflogging}
  */
  readonly ceflogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#centralizedlearning Appfwsettings#centralizedlearning}
  */
  readonly centralizedlearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#clientiploggingheader Appfwsettings#clientiploggingheader}
  */
  readonly clientiploggingheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#cookieflags Appfwsettings#cookieflags}
  */
  readonly cookieflags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#cookiepostencryptprefix Appfwsettings#cookiepostencryptprefix}
  */
  readonly cookiepostencryptprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#defaultprofile Appfwsettings#defaultprofile}
  */
  readonly defaultprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#entitydecoding Appfwsettings#entitydecoding}
  */
  readonly entitydecoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#geolocationlogging Appfwsettings#geolocationlogging}
  */
  readonly geolocationlogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#id Appfwsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#importsizelimit Appfwsettings#importsizelimit}
  */
  readonly importsizelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#learnratelimit Appfwsettings#learnratelimit}
  */
  readonly learnratelimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#logmalformedreq Appfwsettings#logmalformedreq}
  */
  readonly logmalformedreq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#malformedreqaction Appfwsettings#malformedreqaction}
  */
  readonly malformedreqaction?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#proxypassword Appfwsettings#proxypassword}
  */
  readonly proxypassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#proxyport Appfwsettings#proxyport}
  */
  readonly proxyport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#proxyserver Appfwsettings#proxyserver}
  */
  readonly proxyserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#proxyusername Appfwsettings#proxyusername}
  */
  readonly proxyusername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#sessioncookiename Appfwsettings#sessioncookiename}
  */
  readonly sessioncookiename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#sessionlifetime Appfwsettings#sessionlifetime}
  */
  readonly sessionlifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#sessionlimit Appfwsettings#sessionlimit}
  */
  readonly sessionlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#sessiontimeout Appfwsettings#sessiontimeout}
  */
  readonly sessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#signatureautoupdate Appfwsettings#signatureautoupdate}
  */
  readonly signatureautoupdate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#signatureurl Appfwsettings#signatureurl}
  */
  readonly signatureurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#undefaction Appfwsettings#undefaction}
  */
  readonly undefaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#useconfigurablesecretkey Appfwsettings#useconfigurablesecretkey}
  */
  readonly useconfigurablesecretkey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings citrixadc_appfwsettings}
*/
export class Appfwsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appfwsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appfwsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appfwsettings to import
  * @param importFromId The id of the existing Appfwsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appfwsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appfwsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/appfwsettings citrixadc_appfwsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppfwsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppfwsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appfwsettings',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ceflogging = config.ceflogging;
    this._centralizedlearning = config.centralizedlearning;
    this._clientiploggingheader = config.clientiploggingheader;
    this._cookieflags = config.cookieflags;
    this._cookiepostencryptprefix = config.cookiepostencryptprefix;
    this._defaultprofile = config.defaultprofile;
    this._entitydecoding = config.entitydecoding;
    this._geolocationlogging = config.geolocationlogging;
    this._id = config.id;
    this._importsizelimit = config.importsizelimit;
    this._learnratelimit = config.learnratelimit;
    this._logmalformedreq = config.logmalformedreq;
    this._malformedreqaction = config.malformedreqaction;
    this._proxypassword = config.proxypassword;
    this._proxyport = config.proxyport;
    this._proxyserver = config.proxyserver;
    this._proxyusername = config.proxyusername;
    this._sessioncookiename = config.sessioncookiename;
    this._sessionlifetime = config.sessionlifetime;
    this._sessionlimit = config.sessionlimit;
    this._sessiontimeout = config.sessiontimeout;
    this._signatureautoupdate = config.signatureautoupdate;
    this._signatureurl = config.signatureurl;
    this._undefaction = config.undefaction;
    this._useconfigurablesecretkey = config.useconfigurablesecretkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ceflogging - computed: true, optional: true, required: false
  private _ceflogging?: string; 
  public get ceflogging() {
    return this.getStringAttribute('ceflogging');
  }
  public set ceflogging(value: string) {
    this._ceflogging = value;
  }
  public resetCeflogging() {
    this._ceflogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefloggingInput() {
    return this._ceflogging;
  }

  // centralizedlearning - computed: true, optional: true, required: false
  private _centralizedlearning?: string; 
  public get centralizedlearning() {
    return this.getStringAttribute('centralizedlearning');
  }
  public set centralizedlearning(value: string) {
    this._centralizedlearning = value;
  }
  public resetCentralizedlearning() {
    this._centralizedlearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get centralizedlearningInput() {
    return this._centralizedlearning;
  }

  // clientiploggingheader - computed: true, optional: true, required: false
  private _clientiploggingheader?: string; 
  public get clientiploggingheader() {
    return this.getStringAttribute('clientiploggingheader');
  }
  public set clientiploggingheader(value: string) {
    this._clientiploggingheader = value;
  }
  public resetClientiploggingheader() {
    this._clientiploggingheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientiploggingheaderInput() {
    return this._clientiploggingheader;
  }

  // cookieflags - computed: true, optional: true, required: false
  private _cookieflags?: string; 
  public get cookieflags() {
    return this.getStringAttribute('cookieflags');
  }
  public set cookieflags(value: string) {
    this._cookieflags = value;
  }
  public resetCookieflags() {
    this._cookieflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieflagsInput() {
    return this._cookieflags;
  }

  // cookiepostencryptprefix - computed: true, optional: true, required: false
  private _cookiepostencryptprefix?: string; 
  public get cookiepostencryptprefix() {
    return this.getStringAttribute('cookiepostencryptprefix');
  }
  public set cookiepostencryptprefix(value: string) {
    this._cookiepostencryptprefix = value;
  }
  public resetCookiepostencryptprefix() {
    this._cookiepostencryptprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookiepostencryptprefixInput() {
    return this._cookiepostencryptprefix;
  }

  // defaultprofile - computed: true, optional: true, required: false
  private _defaultprofile?: string; 
  public get defaultprofile() {
    return this.getStringAttribute('defaultprofile');
  }
  public set defaultprofile(value: string) {
    this._defaultprofile = value;
  }
  public resetDefaultprofile() {
    this._defaultprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultprofileInput() {
    return this._defaultprofile;
  }

  // entitydecoding - computed: true, optional: true, required: false
  private _entitydecoding?: string; 
  public get entitydecoding() {
    return this.getStringAttribute('entitydecoding');
  }
  public set entitydecoding(value: string) {
    this._entitydecoding = value;
  }
  public resetEntitydecoding() {
    this._entitydecoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitydecodingInput() {
    return this._entitydecoding;
  }

  // geolocationlogging - computed: true, optional: true, required: false
  private _geolocationlogging?: string; 
  public get geolocationlogging() {
    return this.getStringAttribute('geolocationlogging');
  }
  public set geolocationlogging(value: string) {
    this._geolocationlogging = value;
  }
  public resetGeolocationlogging() {
    this._geolocationlogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocationloggingInput() {
    return this._geolocationlogging;
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

  // importsizelimit - computed: true, optional: true, required: false
  private _importsizelimit?: number; 
  public get importsizelimit() {
    return this.getNumberAttribute('importsizelimit');
  }
  public set importsizelimit(value: number) {
    this._importsizelimit = value;
  }
  public resetImportsizelimit() {
    this._importsizelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importsizelimitInput() {
    return this._importsizelimit;
  }

  // learnratelimit - computed: true, optional: true, required: false
  private _learnratelimit?: number; 
  public get learnratelimit() {
    return this.getNumberAttribute('learnratelimit');
  }
  public set learnratelimit(value: number) {
    this._learnratelimit = value;
  }
  public resetLearnratelimit() {
    this._learnratelimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learnratelimitInput() {
    return this._learnratelimit;
  }

  // logmalformedreq - computed: true, optional: true, required: false
  private _logmalformedreq?: string; 
  public get logmalformedreq() {
    return this.getStringAttribute('logmalformedreq');
  }
  public set logmalformedreq(value: string) {
    this._logmalformedreq = value;
  }
  public resetLogmalformedreq() {
    this._logmalformedreq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmalformedreqInput() {
    return this._logmalformedreq;
  }

  // malformedreqaction - computed: true, optional: true, required: false
  private _malformedreqaction?: string[]; 
  public get malformedreqaction() {
    return this.getListAttribute('malformedreqaction');
  }
  public set malformedreqaction(value: string[]) {
    this._malformedreqaction = value;
  }
  public resetMalformedreqaction() {
    this._malformedreqaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedreqactionInput() {
    return this._malformedreqaction;
  }

  // proxypassword - computed: true, optional: true, required: false
  private _proxypassword?: string; 
  public get proxypassword() {
    return this.getStringAttribute('proxypassword');
  }
  public set proxypassword(value: string) {
    this._proxypassword = value;
  }
  public resetProxypassword() {
    this._proxypassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxypasswordInput() {
    return this._proxypassword;
  }

  // proxyport - computed: true, optional: true, required: false
  private _proxyport?: number; 
  public get proxyport() {
    return this.getNumberAttribute('proxyport');
  }
  public set proxyport(value: number) {
    this._proxyport = value;
  }
  public resetProxyport() {
    this._proxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyportInput() {
    return this._proxyport;
  }

  // proxyserver - computed: true, optional: true, required: false
  private _proxyserver?: string; 
  public get proxyserver() {
    return this.getStringAttribute('proxyserver');
  }
  public set proxyserver(value: string) {
    this._proxyserver = value;
  }
  public resetProxyserver() {
    this._proxyserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyserverInput() {
    return this._proxyserver;
  }

  // proxyusername - computed: true, optional: true, required: false
  private _proxyusername?: string; 
  public get proxyusername() {
    return this.getStringAttribute('proxyusername');
  }
  public set proxyusername(value: string) {
    this._proxyusername = value;
  }
  public resetProxyusername() {
    this._proxyusername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyusernameInput() {
    return this._proxyusername;
  }

  // sessioncookiename - computed: true, optional: true, required: false
  private _sessioncookiename?: string; 
  public get sessioncookiename() {
    return this.getStringAttribute('sessioncookiename');
  }
  public set sessioncookiename(value: string) {
    this._sessioncookiename = value;
  }
  public resetSessioncookiename() {
    this._sessioncookiename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessioncookienameInput() {
    return this._sessioncookiename;
  }

  // sessionlifetime - computed: true, optional: true, required: false
  private _sessionlifetime?: number; 
  public get sessionlifetime() {
    return this.getNumberAttribute('sessionlifetime');
  }
  public set sessionlifetime(value: number) {
    this._sessionlifetime = value;
  }
  public resetSessionlifetime() {
    this._sessionlifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlifetimeInput() {
    return this._sessionlifetime;
  }

  // sessionlimit - computed: true, optional: true, required: false
  private _sessionlimit?: number; 
  public get sessionlimit() {
    return this.getNumberAttribute('sessionlimit');
  }
  public set sessionlimit(value: number) {
    this._sessionlimit = value;
  }
  public resetSessionlimit() {
    this._sessionlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionlimitInput() {
    return this._sessionlimit;
  }

  // sessiontimeout - computed: true, optional: true, required: false
  private _sessiontimeout?: number; 
  public get sessiontimeout() {
    return this.getNumberAttribute('sessiontimeout');
  }
  public set sessiontimeout(value: number) {
    this._sessiontimeout = value;
  }
  public resetSessiontimeout() {
    this._sessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontimeoutInput() {
    return this._sessiontimeout;
  }

  // signatureautoupdate - computed: true, optional: true, required: false
  private _signatureautoupdate?: string; 
  public get signatureautoupdate() {
    return this.getStringAttribute('signatureautoupdate');
  }
  public set signatureautoupdate(value: string) {
    this._signatureautoupdate = value;
  }
  public resetSignatureautoupdate() {
    this._signatureautoupdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureautoupdateInput() {
    return this._signatureautoupdate;
  }

  // signatureurl - computed: true, optional: true, required: false
  private _signatureurl?: string; 
  public get signatureurl() {
    return this.getStringAttribute('signatureurl');
  }
  public set signatureurl(value: string) {
    this._signatureurl = value;
  }
  public resetSignatureurl() {
    this._signatureurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureurlInput() {
    return this._signatureurl;
  }

  // undefaction - computed: true, optional: true, required: false
  private _undefaction?: string; 
  public get undefaction() {
    return this.getStringAttribute('undefaction');
  }
  public set undefaction(value: string) {
    this._undefaction = value;
  }
  public resetUndefaction() {
    this._undefaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactionInput() {
    return this._undefaction;
  }

  // useconfigurablesecretkey - computed: true, optional: true, required: false
  private _useconfigurablesecretkey?: string; 
  public get useconfigurablesecretkey() {
    return this.getStringAttribute('useconfigurablesecretkey');
  }
  public set useconfigurablesecretkey(value: string) {
    this._useconfigurablesecretkey = value;
  }
  public resetUseconfigurablesecretkey() {
    this._useconfigurablesecretkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useconfigurablesecretkeyInput() {
    return this._useconfigurablesecretkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ceflogging: cdktf.stringToTerraform(this._ceflogging),
      centralizedlearning: cdktf.stringToTerraform(this._centralizedlearning),
      clientiploggingheader: cdktf.stringToTerraform(this._clientiploggingheader),
      cookieflags: cdktf.stringToTerraform(this._cookieflags),
      cookiepostencryptprefix: cdktf.stringToTerraform(this._cookiepostencryptprefix),
      defaultprofile: cdktf.stringToTerraform(this._defaultprofile),
      entitydecoding: cdktf.stringToTerraform(this._entitydecoding),
      geolocationlogging: cdktf.stringToTerraform(this._geolocationlogging),
      id: cdktf.stringToTerraform(this._id),
      importsizelimit: cdktf.numberToTerraform(this._importsizelimit),
      learnratelimit: cdktf.numberToTerraform(this._learnratelimit),
      logmalformedreq: cdktf.stringToTerraform(this._logmalformedreq),
      malformedreqaction: cdktf.listMapper(cdktf.stringToTerraform, false)(this._malformedreqaction),
      proxypassword: cdktf.stringToTerraform(this._proxypassword),
      proxyport: cdktf.numberToTerraform(this._proxyport),
      proxyserver: cdktf.stringToTerraform(this._proxyserver),
      proxyusername: cdktf.stringToTerraform(this._proxyusername),
      sessioncookiename: cdktf.stringToTerraform(this._sessioncookiename),
      sessionlifetime: cdktf.numberToTerraform(this._sessionlifetime),
      sessionlimit: cdktf.numberToTerraform(this._sessionlimit),
      sessiontimeout: cdktf.numberToTerraform(this._sessiontimeout),
      signatureautoupdate: cdktf.stringToTerraform(this._signatureautoupdate),
      signatureurl: cdktf.stringToTerraform(this._signatureurl),
      undefaction: cdktf.stringToTerraform(this._undefaction),
      useconfigurablesecretkey: cdktf.stringToTerraform(this._useconfigurablesecretkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ceflogging: {
        value: cdktf.stringToHclTerraform(this._ceflogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      centralizedlearning: {
        value: cdktf.stringToHclTerraform(this._centralizedlearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientiploggingheader: {
        value: cdktf.stringToHclTerraform(this._clientiploggingheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookieflags: {
        value: cdktf.stringToHclTerraform(this._cookieflags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookiepostencryptprefix: {
        value: cdktf.stringToHclTerraform(this._cookiepostencryptprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultprofile: {
        value: cdktf.stringToHclTerraform(this._defaultprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entitydecoding: {
        value: cdktf.stringToHclTerraform(this._entitydecoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geolocationlogging: {
        value: cdktf.stringToHclTerraform(this._geolocationlogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      importsizelimit: {
        value: cdktf.numberToHclTerraform(this._importsizelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      learnratelimit: {
        value: cdktf.numberToHclTerraform(this._learnratelimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logmalformedreq: {
        value: cdktf.stringToHclTerraform(this._logmalformedreq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      malformedreqaction: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._malformedreqaction),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      proxypassword: {
        value: cdktf.stringToHclTerraform(this._proxypassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyport: {
        value: cdktf.numberToHclTerraform(this._proxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyserver: {
        value: cdktf.stringToHclTerraform(this._proxyserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyusername: {
        value: cdktf.stringToHclTerraform(this._proxyusername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessioncookiename: {
        value: cdktf.stringToHclTerraform(this._sessioncookiename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessionlifetime: {
        value: cdktf.numberToHclTerraform(this._sessionlifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessionlimit: {
        value: cdktf.numberToHclTerraform(this._sessionlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sessiontimeout: {
        value: cdktf.numberToHclTerraform(this._sessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signatureautoupdate: {
        value: cdktf.stringToHclTerraform(this._signatureautoupdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signatureurl: {
        value: cdktf.stringToHclTerraform(this._signatureurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefaction: {
        value: cdktf.stringToHclTerraform(this._undefaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useconfigurablesecretkey: {
        value: cdktf.stringToHclTerraform(this._useconfigurablesecretkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
