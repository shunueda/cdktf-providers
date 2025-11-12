// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#basicauth Systemparameter#basicauth}
  */
  readonly basicauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#cliloglevel Systemparameter#cliloglevel}
  */
  readonly cliloglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#daystoexpire Systemparameter#daystoexpire}
  */
  readonly daystoexpire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#doppler Systemparameter#doppler}
  */
  readonly doppler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#fipsusermode Systemparameter#fipsusermode}
  */
  readonly fipsusermode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#forcepasswordchange Systemparameter#forcepasswordchange}
  */
  readonly forcepasswordchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#googleanalytics Systemparameter#googleanalytics}
  */
  readonly googleanalytics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#id Systemparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#localauth Systemparameter#localauth}
  */
  readonly localauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#maxclient Systemparameter#maxclient}
  */
  readonly maxclient?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#maxsessionperuser Systemparameter#maxsessionperuser}
  */
  readonly maxsessionperuser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#minpasswordlen Systemparameter#minpasswordlen}
  */
  readonly minpasswordlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#natpcbforceflushlimit Systemparameter#natpcbforceflushlimit}
  */
  readonly natpcbforceflushlimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#natpcbrstontimeout Systemparameter#natpcbrstontimeout}
  */
  readonly natpcbrstontimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#passwordhistorycontrol Systemparameter#passwordhistorycontrol}
  */
  readonly passwordhistorycontrol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#promptstring Systemparameter#promptstring}
  */
  readonly promptstring?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#pwdhistorycount Systemparameter#pwdhistorycount}
  */
  readonly pwdhistorycount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#rbaonresponse Systemparameter#rbaonresponse}
  */
  readonly rbaonresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#reauthonauthparamchange Systemparameter#reauthonauthparamchange}
  */
  readonly reauthonauthparamchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#removesensitivefiles Systemparameter#removesensitivefiles}
  */
  readonly removesensitivefiles?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#restrictedtimeout Systemparameter#restrictedtimeout}
  */
  readonly restrictedtimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#strongpassword Systemparameter#strongpassword}
  */
  readonly strongpassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#timeout Systemparameter#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#totalauthtimeout Systemparameter#totalauthtimeout}
  */
  readonly totalauthtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#wafprotection Systemparameter#wafprotection}
  */
  readonly wafprotection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#warnpriorndays Systemparameter#warnpriorndays}
  */
  readonly warnpriorndays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter citrixadc_systemparameter}
*/
export class Systemparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_systemparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Systemparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Systemparameter to import
  * @param importFromId The id of the existing Systemparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Systemparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_systemparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/systemparameter citrixadc_systemparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_systemparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._basicauth = config.basicauth;
    this._cliloglevel = config.cliloglevel;
    this._daystoexpire = config.daystoexpire;
    this._doppler = config.doppler;
    this._fipsusermode = config.fipsusermode;
    this._forcepasswordchange = config.forcepasswordchange;
    this._googleanalytics = config.googleanalytics;
    this._id = config.id;
    this._localauth = config.localauth;
    this._maxclient = config.maxclient;
    this._maxsessionperuser = config.maxsessionperuser;
    this._minpasswordlen = config.minpasswordlen;
    this._natpcbforceflushlimit = config.natpcbforceflushlimit;
    this._natpcbrstontimeout = config.natpcbrstontimeout;
    this._passwordhistorycontrol = config.passwordhistorycontrol;
    this._promptstring = config.promptstring;
    this._pwdhistorycount = config.pwdhistorycount;
    this._rbaonresponse = config.rbaonresponse;
    this._reauthonauthparamchange = config.reauthonauthparamchange;
    this._removesensitivefiles = config.removesensitivefiles;
    this._restrictedtimeout = config.restrictedtimeout;
    this._strongpassword = config.strongpassword;
    this._timeout = config.timeout;
    this._totalauthtimeout = config.totalauthtimeout;
    this._wafprotection = config.wafprotection;
    this._warnpriorndays = config.warnpriorndays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basicauth - computed: true, optional: true, required: false
  private _basicauth?: string; 
  public get basicauth() {
    return this.getStringAttribute('basicauth');
  }
  public set basicauth(value: string) {
    this._basicauth = value;
  }
  public resetBasicauth() {
    this._basicauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicauthInput() {
    return this._basicauth;
  }

  // cliloglevel - computed: true, optional: true, required: false
  private _cliloglevel?: string; 
  public get cliloglevel() {
    return this.getStringAttribute('cliloglevel');
  }
  public set cliloglevel(value: string) {
    this._cliloglevel = value;
  }
  public resetCliloglevel() {
    this._cliloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliloglevelInput() {
    return this._cliloglevel;
  }

  // daystoexpire - computed: true, optional: true, required: false
  private _daystoexpire?: number; 
  public get daystoexpire() {
    return this.getNumberAttribute('daystoexpire');
  }
  public set daystoexpire(value: number) {
    this._daystoexpire = value;
  }
  public resetDaystoexpire() {
    this._daystoexpire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daystoexpireInput() {
    return this._daystoexpire;
  }

  // doppler - computed: true, optional: true, required: false
  private _doppler?: string; 
  public get doppler() {
    return this.getStringAttribute('doppler');
  }
  public set doppler(value: string) {
    this._doppler = value;
  }
  public resetDoppler() {
    this._doppler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dopplerInput() {
    return this._doppler;
  }

  // fipsusermode - computed: true, optional: true, required: false
  private _fipsusermode?: string; 
  public get fipsusermode() {
    return this.getStringAttribute('fipsusermode');
  }
  public set fipsusermode(value: string) {
    this._fipsusermode = value;
  }
  public resetFipsusermode() {
    this._fipsusermode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsusermodeInput() {
    return this._fipsusermode;
  }

  // forcepasswordchange - computed: true, optional: true, required: false
  private _forcepasswordchange?: string; 
  public get forcepasswordchange() {
    return this.getStringAttribute('forcepasswordchange');
  }
  public set forcepasswordchange(value: string) {
    this._forcepasswordchange = value;
  }
  public resetForcepasswordchange() {
    this._forcepasswordchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcepasswordchangeInput() {
    return this._forcepasswordchange;
  }

  // googleanalytics - computed: true, optional: true, required: false
  private _googleanalytics?: string; 
  public get googleanalytics() {
    return this.getStringAttribute('googleanalytics');
  }
  public set googleanalytics(value: string) {
    this._googleanalytics = value;
  }
  public resetGoogleanalytics() {
    this._googleanalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleanalyticsInput() {
    return this._googleanalytics;
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

  // localauth - computed: true, optional: true, required: false
  private _localauth?: string; 
  public get localauth() {
    return this.getStringAttribute('localauth');
  }
  public set localauth(value: string) {
    this._localauth = value;
  }
  public resetLocalauth() {
    this._localauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localauthInput() {
    return this._localauth;
  }

  // maxclient - computed: true, optional: true, required: false
  private _maxclient?: string; 
  public get maxclient() {
    return this.getStringAttribute('maxclient');
  }
  public set maxclient(value: string) {
    this._maxclient = value;
  }
  public resetMaxclient() {
    this._maxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxclientInput() {
    return this._maxclient;
  }

  // maxsessionperuser - computed: true, optional: true, required: false
  private _maxsessionperuser?: number; 
  public get maxsessionperuser() {
    return this.getNumberAttribute('maxsessionperuser');
  }
  public set maxsessionperuser(value: number) {
    this._maxsessionperuser = value;
  }
  public resetMaxsessionperuser() {
    this._maxsessionperuser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsessionperuserInput() {
    return this._maxsessionperuser;
  }

  // minpasswordlen - computed: true, optional: true, required: false
  private _minpasswordlen?: number; 
  public get minpasswordlen() {
    return this.getNumberAttribute('minpasswordlen');
  }
  public set minpasswordlen(value: number) {
    this._minpasswordlen = value;
  }
  public resetMinpasswordlen() {
    this._minpasswordlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpasswordlenInput() {
    return this._minpasswordlen;
  }

  // natpcbforceflushlimit - computed: true, optional: true, required: false
  private _natpcbforceflushlimit?: number; 
  public get natpcbforceflushlimit() {
    return this.getNumberAttribute('natpcbforceflushlimit');
  }
  public set natpcbforceflushlimit(value: number) {
    this._natpcbforceflushlimit = value;
  }
  public resetNatpcbforceflushlimit() {
    this._natpcbforceflushlimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natpcbforceflushlimitInput() {
    return this._natpcbforceflushlimit;
  }

  // natpcbrstontimeout - computed: true, optional: true, required: false
  private _natpcbrstontimeout?: string; 
  public get natpcbrstontimeout() {
    return this.getStringAttribute('natpcbrstontimeout');
  }
  public set natpcbrstontimeout(value: string) {
    this._natpcbrstontimeout = value;
  }
  public resetNatpcbrstontimeout() {
    this._natpcbrstontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natpcbrstontimeoutInput() {
    return this._natpcbrstontimeout;
  }

  // passwordhistorycontrol - computed: true, optional: true, required: false
  private _passwordhistorycontrol?: string; 
  public get passwordhistorycontrol() {
    return this.getStringAttribute('passwordhistorycontrol');
  }
  public set passwordhistorycontrol(value: string) {
    this._passwordhistorycontrol = value;
  }
  public resetPasswordhistorycontrol() {
    this._passwordhistorycontrol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordhistorycontrolInput() {
    return this._passwordhistorycontrol;
  }

  // promptstring - computed: true, optional: true, required: false
  private _promptstring?: string; 
  public get promptstring() {
    return this.getStringAttribute('promptstring');
  }
  public set promptstring(value: string) {
    this._promptstring = value;
  }
  public resetPromptstring() {
    this._promptstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptstringInput() {
    return this._promptstring;
  }

  // pwdhistorycount - computed: true, optional: true, required: false
  private _pwdhistorycount?: number; 
  public get pwdhistorycount() {
    return this.getNumberAttribute('pwdhistorycount');
  }
  public set pwdhistorycount(value: number) {
    this._pwdhistorycount = value;
  }
  public resetPwdhistorycount() {
    this._pwdhistorycount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdhistorycountInput() {
    return this._pwdhistorycount;
  }

  // rbaonresponse - computed: true, optional: true, required: false
  private _rbaonresponse?: string; 
  public get rbaonresponse() {
    return this.getStringAttribute('rbaonresponse');
  }
  public set rbaonresponse(value: string) {
    this._rbaonresponse = value;
  }
  public resetRbaonresponse() {
    this._rbaonresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbaonresponseInput() {
    return this._rbaonresponse;
  }

  // reauthonauthparamchange - computed: true, optional: true, required: false
  private _reauthonauthparamchange?: string; 
  public get reauthonauthparamchange() {
    return this.getStringAttribute('reauthonauthparamchange');
  }
  public set reauthonauthparamchange(value: string) {
    this._reauthonauthparamchange = value;
  }
  public resetReauthonauthparamchange() {
    this._reauthonauthparamchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthonauthparamchangeInput() {
    return this._reauthonauthparamchange;
  }

  // removesensitivefiles - computed: true, optional: true, required: false
  private _removesensitivefiles?: string; 
  public get removesensitivefiles() {
    return this.getStringAttribute('removesensitivefiles');
  }
  public set removesensitivefiles(value: string) {
    this._removesensitivefiles = value;
  }
  public resetRemovesensitivefiles() {
    this._removesensitivefiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removesensitivefilesInput() {
    return this._removesensitivefiles;
  }

  // restrictedtimeout - computed: true, optional: true, required: false
  private _restrictedtimeout?: string; 
  public get restrictedtimeout() {
    return this.getStringAttribute('restrictedtimeout');
  }
  public set restrictedtimeout(value: string) {
    this._restrictedtimeout = value;
  }
  public resetRestrictedtimeout() {
    this._restrictedtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedtimeoutInput() {
    return this._restrictedtimeout;
  }

  // strongpassword - computed: true, optional: true, required: false
  private _strongpassword?: string; 
  public get strongpassword() {
    return this.getStringAttribute('strongpassword');
  }
  public set strongpassword(value: string) {
    this._strongpassword = value;
  }
  public resetStrongpassword() {
    this._strongpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strongpasswordInput() {
    return this._strongpassword;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // totalauthtimeout - computed: true, optional: true, required: false
  private _totalauthtimeout?: number; 
  public get totalauthtimeout() {
    return this.getNumberAttribute('totalauthtimeout');
  }
  public set totalauthtimeout(value: number) {
    this._totalauthtimeout = value;
  }
  public resetTotalauthtimeout() {
    this._totalauthtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalauthtimeoutInput() {
    return this._totalauthtimeout;
  }

  // wafprotection - computed: true, optional: true, required: false
  private _wafprotection?: string[]; 
  public get wafprotection() {
    return this.getListAttribute('wafprotection');
  }
  public set wafprotection(value: string[]) {
    this._wafprotection = value;
  }
  public resetWafprotection() {
    this._wafprotection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafprotectionInput() {
    return this._wafprotection;
  }

  // warnpriorndays - computed: true, optional: true, required: false
  private _warnpriorndays?: number; 
  public get warnpriorndays() {
    return this.getNumberAttribute('warnpriorndays');
  }
  public set warnpriorndays(value: number) {
    this._warnpriorndays = value;
  }
  public resetWarnpriorndays() {
    this._warnpriorndays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnpriorndaysInput() {
    return this._warnpriorndays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      basicauth: cdktf.stringToTerraform(this._basicauth),
      cliloglevel: cdktf.stringToTerraform(this._cliloglevel),
      daystoexpire: cdktf.numberToTerraform(this._daystoexpire),
      doppler: cdktf.stringToTerraform(this._doppler),
      fipsusermode: cdktf.stringToTerraform(this._fipsusermode),
      forcepasswordchange: cdktf.stringToTerraform(this._forcepasswordchange),
      googleanalytics: cdktf.stringToTerraform(this._googleanalytics),
      id: cdktf.stringToTerraform(this._id),
      localauth: cdktf.stringToTerraform(this._localauth),
      maxclient: cdktf.stringToTerraform(this._maxclient),
      maxsessionperuser: cdktf.numberToTerraform(this._maxsessionperuser),
      minpasswordlen: cdktf.numberToTerraform(this._minpasswordlen),
      natpcbforceflushlimit: cdktf.numberToTerraform(this._natpcbforceflushlimit),
      natpcbrstontimeout: cdktf.stringToTerraform(this._natpcbrstontimeout),
      passwordhistorycontrol: cdktf.stringToTerraform(this._passwordhistorycontrol),
      promptstring: cdktf.stringToTerraform(this._promptstring),
      pwdhistorycount: cdktf.numberToTerraform(this._pwdhistorycount),
      rbaonresponse: cdktf.stringToTerraform(this._rbaonresponse),
      reauthonauthparamchange: cdktf.stringToTerraform(this._reauthonauthparamchange),
      removesensitivefiles: cdktf.stringToTerraform(this._removesensitivefiles),
      restrictedtimeout: cdktf.stringToTerraform(this._restrictedtimeout),
      strongpassword: cdktf.stringToTerraform(this._strongpassword),
      timeout: cdktf.numberToTerraform(this._timeout),
      totalauthtimeout: cdktf.numberToTerraform(this._totalauthtimeout),
      wafprotection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wafprotection),
      warnpriorndays: cdktf.numberToTerraform(this._warnpriorndays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      basicauth: {
        value: cdktf.stringToHclTerraform(this._basicauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cliloglevel: {
        value: cdktf.stringToHclTerraform(this._cliloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      daystoexpire: {
        value: cdktf.numberToHclTerraform(this._daystoexpire),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      doppler: {
        value: cdktf.stringToHclTerraform(this._doppler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fipsusermode: {
        value: cdktf.stringToHclTerraform(this._fipsusermode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forcepasswordchange: {
        value: cdktf.stringToHclTerraform(this._forcepasswordchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      googleanalytics: {
        value: cdktf.stringToHclTerraform(this._googleanalytics),
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
      localauth: {
        value: cdktf.stringToHclTerraform(this._localauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxclient: {
        value: cdktf.stringToHclTerraform(this._maxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxsessionperuser: {
        value: cdktf.numberToHclTerraform(this._maxsessionperuser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minpasswordlen: {
        value: cdktf.numberToHclTerraform(this._minpasswordlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      natpcbforceflushlimit: {
        value: cdktf.numberToHclTerraform(this._natpcbforceflushlimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      natpcbrstontimeout: {
        value: cdktf.stringToHclTerraform(this._natpcbrstontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordhistorycontrol: {
        value: cdktf.stringToHclTerraform(this._passwordhistorycontrol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      promptstring: {
        value: cdktf.stringToHclTerraform(this._promptstring),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwdhistorycount: {
        value: cdktf.numberToHclTerraform(this._pwdhistorycount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rbaonresponse: {
        value: cdktf.stringToHclTerraform(this._rbaonresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauthonauthparamchange: {
        value: cdktf.stringToHclTerraform(this._reauthonauthparamchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removesensitivefiles: {
        value: cdktf.stringToHclTerraform(this._removesensitivefiles),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrictedtimeout: {
        value: cdktf.stringToHclTerraform(this._restrictedtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strongpassword: {
        value: cdktf.stringToHclTerraform(this._strongpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      totalauthtimeout: {
        value: cdktf.numberToHclTerraform(this._totalauthtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wafprotection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wafprotection),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      warnpriorndays: {
        value: cdktf.numberToHclTerraform(this._warnpriorndays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
