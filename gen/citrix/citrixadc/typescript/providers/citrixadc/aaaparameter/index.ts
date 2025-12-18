// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaaparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#aaadloglevel Aaaparameter#aaadloglevel}
  */
  readonly aaadloglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#aaadnatip Aaaparameter#aaadnatip}
  */
  readonly aaadnatip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#aaasessionloglevel Aaaparameter#aaasessionloglevel}
  */
  readonly aaasessionloglevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#apitokencache Aaaparameter#apitokencache}
  */
  readonly apitokencache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#defaultauthtype Aaaparameter#defaultauthtype}
  */
  readonly defaultauthtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#defaultcspheader Aaaparameter#defaultcspheader}
  */
  readonly defaultcspheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#dynaddr Aaaparameter#dynaddr}
  */
  readonly dynaddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#enableenhancedauthfeedback Aaaparameter#enableenhancedauthfeedback}
  */
  readonly enableenhancedauthfeedback?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#enablesessionstickiness Aaaparameter#enablesessionstickiness}
  */
  readonly enablesessionstickiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#enablestaticpagecaching Aaaparameter#enablestaticpagecaching}
  */
  readonly enablestaticpagecaching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#enhancedepa Aaaparameter#enhancedepa}
  */
  readonly enhancedepa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#failedlogintimeout Aaaparameter#failedlogintimeout}
  */
  readonly failedlogintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#ftmode Aaaparameter#ftmode}
  */
  readonly ftmode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#httponlycookie Aaaparameter#httponlycookie}
  */
  readonly httponlycookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#id Aaaparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#loginencryption Aaaparameter#loginencryption}
  */
  readonly loginencryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#maxaaausers Aaaparameter#maxaaausers}
  */
  readonly maxaaausers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#maxkbquestions Aaaparameter#maxkbquestions}
  */
  readonly maxkbquestions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#maxloginattempts Aaaparameter#maxloginattempts}
  */
  readonly maxloginattempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#maxsamldeflatesize Aaaparameter#maxsamldeflatesize}
  */
  readonly maxsamldeflatesize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#persistentloginattempts Aaaparameter#persistentloginattempts}
  */
  readonly persistentloginattempts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#pwdexpirynotificationdays Aaaparameter#pwdexpirynotificationdays}
  */
  readonly pwdexpirynotificationdays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#samesite Aaaparameter#samesite}
  */
  readonly samesite?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#securityinsights Aaaparameter#securityinsights}
  */
  readonly securityinsights?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#tokenintrospectioninterval Aaaparameter#tokenintrospectioninterval}
  */
  readonly tokenintrospectioninterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#wafprotection Aaaparameter#wafprotection}
  */
  readonly wafprotection?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter citrixadc_aaaparameter}
*/
export class Aaaparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaaparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Aaaparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Aaaparameter to import
  * @param importFromId The id of the existing Aaaparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Aaaparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaaparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaaparameter citrixadc_aaaparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaaparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AaaparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaaparameter',
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
    this._aaadloglevel = config.aaadloglevel;
    this._aaadnatip = config.aaadnatip;
    this._aaasessionloglevel = config.aaasessionloglevel;
    this._apitokencache = config.apitokencache;
    this._defaultauthtype = config.defaultauthtype;
    this._defaultcspheader = config.defaultcspheader;
    this._dynaddr = config.dynaddr;
    this._enableenhancedauthfeedback = config.enableenhancedauthfeedback;
    this._enablesessionstickiness = config.enablesessionstickiness;
    this._enablestaticpagecaching = config.enablestaticpagecaching;
    this._enhancedepa = config.enhancedepa;
    this._failedlogintimeout = config.failedlogintimeout;
    this._ftmode = config.ftmode;
    this._httponlycookie = config.httponlycookie;
    this._id = config.id;
    this._loginencryption = config.loginencryption;
    this._maxaaausers = config.maxaaausers;
    this._maxkbquestions = config.maxkbquestions;
    this._maxloginattempts = config.maxloginattempts;
    this._maxsamldeflatesize = config.maxsamldeflatesize;
    this._persistentloginattempts = config.persistentloginattempts;
    this._pwdexpirynotificationdays = config.pwdexpirynotificationdays;
    this._samesite = config.samesite;
    this._securityinsights = config.securityinsights;
    this._tokenintrospectioninterval = config.tokenintrospectioninterval;
    this._wafprotection = config.wafprotection;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaadloglevel - computed: true, optional: true, required: false
  private _aaadloglevel?: string; 
  public get aaadloglevel() {
    return this.getStringAttribute('aaadloglevel');
  }
  public set aaadloglevel(value: string) {
    this._aaadloglevel = value;
  }
  public resetAaadloglevel() {
    this._aaadloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaadloglevelInput() {
    return this._aaadloglevel;
  }

  // aaadnatip - computed: true, optional: true, required: false
  private _aaadnatip?: string; 
  public get aaadnatip() {
    return this.getStringAttribute('aaadnatip');
  }
  public set aaadnatip(value: string) {
    this._aaadnatip = value;
  }
  public resetAaadnatip() {
    this._aaadnatip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaadnatipInput() {
    return this._aaadnatip;
  }

  // aaasessionloglevel - computed: true, optional: true, required: false
  private _aaasessionloglevel?: string; 
  public get aaasessionloglevel() {
    return this.getStringAttribute('aaasessionloglevel');
  }
  public set aaasessionloglevel(value: string) {
    this._aaasessionloglevel = value;
  }
  public resetAaasessionloglevel() {
    this._aaasessionloglevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaasessionloglevelInput() {
    return this._aaasessionloglevel;
  }

  // apitokencache - computed: true, optional: true, required: false
  private _apitokencache?: string; 
  public get apitokencache() {
    return this.getStringAttribute('apitokencache');
  }
  public set apitokencache(value: string) {
    this._apitokencache = value;
  }
  public resetApitokencache() {
    this._apitokencache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apitokencacheInput() {
    return this._apitokencache;
  }

  // defaultauthtype - computed: true, optional: true, required: false
  private _defaultauthtype?: string; 
  public get defaultauthtype() {
    return this.getStringAttribute('defaultauthtype');
  }
  public set defaultauthtype(value: string) {
    this._defaultauthtype = value;
  }
  public resetDefaultauthtype() {
    this._defaultauthtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultauthtypeInput() {
    return this._defaultauthtype;
  }

  // defaultcspheader - computed: true, optional: true, required: false
  private _defaultcspheader?: string; 
  public get defaultcspheader() {
    return this.getStringAttribute('defaultcspheader');
  }
  public set defaultcspheader(value: string) {
    this._defaultcspheader = value;
  }
  public resetDefaultcspheader() {
    this._defaultcspheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultcspheaderInput() {
    return this._defaultcspheader;
  }

  // dynaddr - computed: true, optional: true, required: false
  private _dynaddr?: string; 
  public get dynaddr() {
    return this.getStringAttribute('dynaddr');
  }
  public set dynaddr(value: string) {
    this._dynaddr = value;
  }
  public resetDynaddr() {
    this._dynaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynaddrInput() {
    return this._dynaddr;
  }

  // enableenhancedauthfeedback - computed: true, optional: true, required: false
  private _enableenhancedauthfeedback?: string; 
  public get enableenhancedauthfeedback() {
    return this.getStringAttribute('enableenhancedauthfeedback');
  }
  public set enableenhancedauthfeedback(value: string) {
    this._enableenhancedauthfeedback = value;
  }
  public resetEnableenhancedauthfeedback() {
    this._enableenhancedauthfeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableenhancedauthfeedbackInput() {
    return this._enableenhancedauthfeedback;
  }

  // enablesessionstickiness - computed: true, optional: true, required: false
  private _enablesessionstickiness?: string; 
  public get enablesessionstickiness() {
    return this.getStringAttribute('enablesessionstickiness');
  }
  public set enablesessionstickiness(value: string) {
    this._enablesessionstickiness = value;
  }
  public resetEnablesessionstickiness() {
    this._enablesessionstickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablesessionstickinessInput() {
    return this._enablesessionstickiness;
  }

  // enablestaticpagecaching - computed: true, optional: true, required: false
  private _enablestaticpagecaching?: string; 
  public get enablestaticpagecaching() {
    return this.getStringAttribute('enablestaticpagecaching');
  }
  public set enablestaticpagecaching(value: string) {
    this._enablestaticpagecaching = value;
  }
  public resetEnablestaticpagecaching() {
    this._enablestaticpagecaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablestaticpagecachingInput() {
    return this._enablestaticpagecaching;
  }

  // enhancedepa - computed: true, optional: true, required: false
  private _enhancedepa?: string; 
  public get enhancedepa() {
    return this.getStringAttribute('enhancedepa');
  }
  public set enhancedepa(value: string) {
    this._enhancedepa = value;
  }
  public resetEnhancedepa() {
    this._enhancedepa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedepaInput() {
    return this._enhancedepa;
  }

  // failedlogintimeout - computed: true, optional: true, required: false
  private _failedlogintimeout?: number; 
  public get failedlogintimeout() {
    return this.getNumberAttribute('failedlogintimeout');
  }
  public set failedlogintimeout(value: number) {
    this._failedlogintimeout = value;
  }
  public resetFailedlogintimeout() {
    this._failedlogintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedlogintimeoutInput() {
    return this._failedlogintimeout;
  }

  // ftmode - computed: true, optional: true, required: false
  private _ftmode?: string; 
  public get ftmode() {
    return this.getStringAttribute('ftmode');
  }
  public set ftmode(value: string) {
    this._ftmode = value;
  }
  public resetFtmode() {
    this._ftmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftmodeInput() {
    return this._ftmode;
  }

  // httponlycookie - computed: true, optional: true, required: false
  private _httponlycookie?: string; 
  public get httponlycookie() {
    return this.getStringAttribute('httponlycookie');
  }
  public set httponlycookie(value: string) {
    this._httponlycookie = value;
  }
  public resetHttponlycookie() {
    this._httponlycookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httponlycookieInput() {
    return this._httponlycookie;
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

  // loginencryption - computed: true, optional: true, required: false
  private _loginencryption?: string; 
  public get loginencryption() {
    return this.getStringAttribute('loginencryption');
  }
  public set loginencryption(value: string) {
    this._loginencryption = value;
  }
  public resetLoginencryption() {
    this._loginencryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginencryptionInput() {
    return this._loginencryption;
  }

  // maxaaausers - computed: true, optional: true, required: false
  private _maxaaausers?: number; 
  public get maxaaausers() {
    return this.getNumberAttribute('maxaaausers');
  }
  public set maxaaausers(value: number) {
    this._maxaaausers = value;
  }
  public resetMaxaaausers() {
    this._maxaaausers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxaaausersInput() {
    return this._maxaaausers;
  }

  // maxkbquestions - computed: true, optional: true, required: false
  private _maxkbquestions?: number; 
  public get maxkbquestions() {
    return this.getNumberAttribute('maxkbquestions');
  }
  public set maxkbquestions(value: number) {
    this._maxkbquestions = value;
  }
  public resetMaxkbquestions() {
    this._maxkbquestions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxkbquestionsInput() {
    return this._maxkbquestions;
  }

  // maxloginattempts - computed: true, optional: true, required: false
  private _maxloginattempts?: number; 
  public get maxloginattempts() {
    return this.getNumberAttribute('maxloginattempts');
  }
  public set maxloginattempts(value: number) {
    this._maxloginattempts = value;
  }
  public resetMaxloginattempts() {
    this._maxloginattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxloginattemptsInput() {
    return this._maxloginattempts;
  }

  // maxsamldeflatesize - computed: true, optional: true, required: false
  private _maxsamldeflatesize?: number; 
  public get maxsamldeflatesize() {
    return this.getNumberAttribute('maxsamldeflatesize');
  }
  public set maxsamldeflatesize(value: number) {
    this._maxsamldeflatesize = value;
  }
  public resetMaxsamldeflatesize() {
    this._maxsamldeflatesize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsamldeflatesizeInput() {
    return this._maxsamldeflatesize;
  }

  // persistentloginattempts - computed: true, optional: true, required: false
  private _persistentloginattempts?: string; 
  public get persistentloginattempts() {
    return this.getStringAttribute('persistentloginattempts');
  }
  public set persistentloginattempts(value: string) {
    this._persistentloginattempts = value;
  }
  public resetPersistentloginattempts() {
    this._persistentloginattempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentloginattemptsInput() {
    return this._persistentloginattempts;
  }

  // pwdexpirynotificationdays - computed: true, optional: true, required: false
  private _pwdexpirynotificationdays?: number; 
  public get pwdexpirynotificationdays() {
    return this.getNumberAttribute('pwdexpirynotificationdays');
  }
  public set pwdexpirynotificationdays(value: number) {
    this._pwdexpirynotificationdays = value;
  }
  public resetPwdexpirynotificationdays() {
    this._pwdexpirynotificationdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdexpirynotificationdaysInput() {
    return this._pwdexpirynotificationdays;
  }

  // samesite - computed: true, optional: true, required: false
  private _samesite?: string; 
  public get samesite() {
    return this.getStringAttribute('samesite');
  }
  public set samesite(value: string) {
    this._samesite = value;
  }
  public resetSamesite() {
    this._samesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteInput() {
    return this._samesite;
  }

  // securityinsights - computed: true, optional: true, required: false
  private _securityinsights?: string; 
  public get securityinsights() {
    return this.getStringAttribute('securityinsights');
  }
  public set securityinsights(value: string) {
    this._securityinsights = value;
  }
  public resetSecurityinsights() {
    this._securityinsights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityinsightsInput() {
    return this._securityinsights;
  }

  // tokenintrospectioninterval - computed: true, optional: true, required: false
  private _tokenintrospectioninterval?: number; 
  public get tokenintrospectioninterval() {
    return this.getNumberAttribute('tokenintrospectioninterval');
  }
  public set tokenintrospectioninterval(value: number) {
    this._tokenintrospectioninterval = value;
  }
  public resetTokenintrospectioninterval() {
    this._tokenintrospectioninterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenintrospectionintervalInput() {
    return this._tokenintrospectioninterval;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaadloglevel: cdktf.stringToTerraform(this._aaadloglevel),
      aaadnatip: cdktf.stringToTerraform(this._aaadnatip),
      aaasessionloglevel: cdktf.stringToTerraform(this._aaasessionloglevel),
      apitokencache: cdktf.stringToTerraform(this._apitokencache),
      defaultauthtype: cdktf.stringToTerraform(this._defaultauthtype),
      defaultcspheader: cdktf.stringToTerraform(this._defaultcspheader),
      dynaddr: cdktf.stringToTerraform(this._dynaddr),
      enableenhancedauthfeedback: cdktf.stringToTerraform(this._enableenhancedauthfeedback),
      enablesessionstickiness: cdktf.stringToTerraform(this._enablesessionstickiness),
      enablestaticpagecaching: cdktf.stringToTerraform(this._enablestaticpagecaching),
      enhancedepa: cdktf.stringToTerraform(this._enhancedepa),
      failedlogintimeout: cdktf.numberToTerraform(this._failedlogintimeout),
      ftmode: cdktf.stringToTerraform(this._ftmode),
      httponlycookie: cdktf.stringToTerraform(this._httponlycookie),
      id: cdktf.stringToTerraform(this._id),
      loginencryption: cdktf.stringToTerraform(this._loginencryption),
      maxaaausers: cdktf.numberToTerraform(this._maxaaausers),
      maxkbquestions: cdktf.numberToTerraform(this._maxkbquestions),
      maxloginattempts: cdktf.numberToTerraform(this._maxloginattempts),
      maxsamldeflatesize: cdktf.numberToTerraform(this._maxsamldeflatesize),
      persistentloginattempts: cdktf.stringToTerraform(this._persistentloginattempts),
      pwdexpirynotificationdays: cdktf.numberToTerraform(this._pwdexpirynotificationdays),
      samesite: cdktf.stringToTerraform(this._samesite),
      securityinsights: cdktf.stringToTerraform(this._securityinsights),
      tokenintrospectioninterval: cdktf.numberToTerraform(this._tokenintrospectioninterval),
      wafprotection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wafprotection),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaadloglevel: {
        value: cdktf.stringToHclTerraform(this._aaadloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaadnatip: {
        value: cdktf.stringToHclTerraform(this._aaadnatip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaasessionloglevel: {
        value: cdktf.stringToHclTerraform(this._aaasessionloglevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apitokencache: {
        value: cdktf.stringToHclTerraform(this._apitokencache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultauthtype: {
        value: cdktf.stringToHclTerraform(this._defaultauthtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaultcspheader: {
        value: cdktf.stringToHclTerraform(this._defaultcspheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynaddr: {
        value: cdktf.stringToHclTerraform(this._dynaddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enableenhancedauthfeedback: {
        value: cdktf.stringToHclTerraform(this._enableenhancedauthfeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablesessionstickiness: {
        value: cdktf.stringToHclTerraform(this._enablesessionstickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablestaticpagecaching: {
        value: cdktf.stringToHclTerraform(this._enablestaticpagecaching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhancedepa: {
        value: cdktf.stringToHclTerraform(this._enhancedepa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failedlogintimeout: {
        value: cdktf.numberToHclTerraform(this._failedlogintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftmode: {
        value: cdktf.stringToHclTerraform(this._ftmode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      httponlycookie: {
        value: cdktf.stringToHclTerraform(this._httponlycookie),
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
      loginencryption: {
        value: cdktf.stringToHclTerraform(this._loginencryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxaaausers: {
        value: cdktf.numberToHclTerraform(this._maxaaausers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxkbquestions: {
        value: cdktf.numberToHclTerraform(this._maxkbquestions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxloginattempts: {
        value: cdktf.numberToHclTerraform(this._maxloginattempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxsamldeflatesize: {
        value: cdktf.numberToHclTerraform(this._maxsamldeflatesize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistentloginattempts: {
        value: cdktf.stringToHclTerraform(this._persistentloginattempts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pwdexpirynotificationdays: {
        value: cdktf.numberToHclTerraform(this._pwdexpirynotificationdays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      samesite: {
        value: cdktf.stringToHclTerraform(this._samesite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securityinsights: {
        value: cdktf.stringToHclTerraform(this._securityinsights),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tokenintrospectioninterval: {
        value: cdktf.numberToHclTerraform(this._tokenintrospectioninterval),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
