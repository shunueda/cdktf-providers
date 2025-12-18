// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#advancedanalyticsstats Nsparam#advancedanalyticsstats}
  */
  readonly advancedanalyticsstats?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#aftpallowrandomsourceport Nsparam#aftpallowrandomsourceport}
  */
  readonly aftpallowrandomsourceport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#cip Nsparam#cip}
  */
  readonly cip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#cipheader Nsparam#cipheader}
  */
  readonly cipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#cookieversion Nsparam#cookieversion}
  */
  readonly cookieversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#crportrange Nsparam#crportrange}
  */
  readonly crportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#exclusivequotamaxclient Nsparam#exclusivequotamaxclient}
  */
  readonly exclusivequotamaxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#exclusivequotaspillover Nsparam#exclusivequotaspillover}
  */
  readonly exclusivequotaspillover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#ftpportrange Nsparam#ftpportrange}
  */
  readonly ftpportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#grantquotamaxclient Nsparam#grantquotamaxclient}
  */
  readonly grantquotamaxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#grantquotaspillover Nsparam#grantquotaspillover}
  */
  readonly grantquotaspillover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#icaports Nsparam#icaports}
  */
  readonly icaports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#id Nsparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#internaluserlogin Nsparam#internaluserlogin}
  */
  readonly internaluserlogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#ipttl Nsparam#ipttl}
  */
  readonly ipttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#maxconn Nsparam#maxconn}
  */
  readonly maxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#maxreq Nsparam#maxreq}
  */
  readonly maxreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#mgmthttpport Nsparam#mgmthttpport}
  */
  readonly mgmthttpport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#mgmthttpsport Nsparam#mgmthttpsport}
  */
  readonly mgmthttpsport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#pmtumin Nsparam#pmtumin}
  */
  readonly pmtumin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#pmtutimeout Nsparam#pmtutimeout}
  */
  readonly pmtutimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#proxyprotocol Nsparam#proxyprotocol}
  */
  readonly proxyprotocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#securecookie Nsparam#securecookie}
  */
  readonly securecookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#secureicaports Nsparam#secureicaports}
  */
  readonly secureicaports?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#servicepathingressvlan Nsparam#servicepathingressvlan}
  */
  readonly servicepathingressvlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#tcpcip Nsparam#tcpcip}
  */
  readonly tcpcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#timezone Nsparam#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#useproxyport Nsparam#useproxyport}
  */
  readonly useproxyport?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam citrixadc_nsparam}
*/
export class Nsparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsparam to import
  * @param importFromId The id of the existing Nsparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/nsparam citrixadc_nsparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsparam',
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
    this._advancedanalyticsstats = config.advancedanalyticsstats;
    this._aftpallowrandomsourceport = config.aftpallowrandomsourceport;
    this._cip = config.cip;
    this._cipheader = config.cipheader;
    this._cookieversion = config.cookieversion;
    this._crportrange = config.crportrange;
    this._exclusivequotamaxclient = config.exclusivequotamaxclient;
    this._exclusivequotaspillover = config.exclusivequotaspillover;
    this._ftpportrange = config.ftpportrange;
    this._grantquotamaxclient = config.grantquotamaxclient;
    this._grantquotaspillover = config.grantquotaspillover;
    this._icaports = config.icaports;
    this._id = config.id;
    this._internaluserlogin = config.internaluserlogin;
    this._ipttl = config.ipttl;
    this._maxconn = config.maxconn;
    this._maxreq = config.maxreq;
    this._mgmthttpport = config.mgmthttpport;
    this._mgmthttpsport = config.mgmthttpsport;
    this._pmtumin = config.pmtumin;
    this._pmtutimeout = config.pmtutimeout;
    this._proxyprotocol = config.proxyprotocol;
    this._securecookie = config.securecookie;
    this._secureicaports = config.secureicaports;
    this._servicepathingressvlan = config.servicepathingressvlan;
    this._tcpcip = config.tcpcip;
    this._timezone = config.timezone;
    this._useproxyport = config.useproxyport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advancedanalyticsstats - computed: true, optional: true, required: false
  private _advancedanalyticsstats?: string; 
  public get advancedanalyticsstats() {
    return this.getStringAttribute('advancedanalyticsstats');
  }
  public set advancedanalyticsstats(value: string) {
    this._advancedanalyticsstats = value;
  }
  public resetAdvancedanalyticsstats() {
    this._advancedanalyticsstats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedanalyticsstatsInput() {
    return this._advancedanalyticsstats;
  }

  // aftpallowrandomsourceport - computed: true, optional: true, required: false
  private _aftpallowrandomsourceport?: string; 
  public get aftpallowrandomsourceport() {
    return this.getStringAttribute('aftpallowrandomsourceport');
  }
  public set aftpallowrandomsourceport(value: string) {
    this._aftpallowrandomsourceport = value;
  }
  public resetAftpallowrandomsourceport() {
    this._aftpallowrandomsourceport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aftpallowrandomsourceportInput() {
    return this._aftpallowrandomsourceport;
  }

  // cip - computed: true, optional: true, required: false
  private _cip?: string; 
  public get cip() {
    return this.getStringAttribute('cip');
  }
  public set cip(value: string) {
    this._cip = value;
  }
  public resetCip() {
    this._cip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipInput() {
    return this._cip;
  }

  // cipheader - computed: true, optional: true, required: false
  private _cipheader?: string; 
  public get cipheader() {
    return this.getStringAttribute('cipheader');
  }
  public set cipheader(value: string) {
    this._cipheader = value;
  }
  public resetCipheader() {
    this._cipheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cipheaderInput() {
    return this._cipheader;
  }

  // cookieversion - computed: true, optional: true, required: false
  private _cookieversion?: string; 
  public get cookieversion() {
    return this.getStringAttribute('cookieversion');
  }
  public set cookieversion(value: string) {
    this._cookieversion = value;
  }
  public resetCookieversion() {
    this._cookieversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieversionInput() {
    return this._cookieversion;
  }

  // crportrange - computed: true, optional: true, required: false
  private _crportrange?: string; 
  public get crportrange() {
    return this.getStringAttribute('crportrange');
  }
  public set crportrange(value: string) {
    this._crportrange = value;
  }
  public resetCrportrange() {
    this._crportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crportrangeInput() {
    return this._crportrange;
  }

  // exclusivequotamaxclient - computed: true, optional: true, required: false
  private _exclusivequotamaxclient?: number; 
  public get exclusivequotamaxclient() {
    return this.getNumberAttribute('exclusivequotamaxclient');
  }
  public set exclusivequotamaxclient(value: number) {
    this._exclusivequotamaxclient = value;
  }
  public resetExclusivequotamaxclient() {
    this._exclusivequotamaxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivequotamaxclientInput() {
    return this._exclusivequotamaxclient;
  }

  // exclusivequotaspillover - computed: true, optional: true, required: false
  private _exclusivequotaspillover?: number; 
  public get exclusivequotaspillover() {
    return this.getNumberAttribute('exclusivequotaspillover');
  }
  public set exclusivequotaspillover(value: number) {
    this._exclusivequotaspillover = value;
  }
  public resetExclusivequotaspillover() {
    this._exclusivequotaspillover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivequotaspilloverInput() {
    return this._exclusivequotaspillover;
  }

  // ftpportrange - computed: true, optional: true, required: false
  private _ftpportrange?: string; 
  public get ftpportrange() {
    return this.getStringAttribute('ftpportrange');
  }
  public set ftpportrange(value: string) {
    this._ftpportrange = value;
  }
  public resetFtpportrange() {
    this._ftpportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpportrangeInput() {
    return this._ftpportrange;
  }

  // grantquotamaxclient - computed: true, optional: true, required: false
  private _grantquotamaxclient?: number; 
  public get grantquotamaxclient() {
    return this.getNumberAttribute('grantquotamaxclient');
  }
  public set grantquotamaxclient(value: number) {
    this._grantquotamaxclient = value;
  }
  public resetGrantquotamaxclient() {
    this._grantquotamaxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantquotamaxclientInput() {
    return this._grantquotamaxclient;
  }

  // grantquotaspillover - computed: true, optional: true, required: false
  private _grantquotaspillover?: number; 
  public get grantquotaspillover() {
    return this.getNumberAttribute('grantquotaspillover');
  }
  public set grantquotaspillover(value: number) {
    this._grantquotaspillover = value;
  }
  public resetGrantquotaspillover() {
    this._grantquotaspillover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantquotaspilloverInput() {
    return this._grantquotaspillover;
  }

  // icaports - computed: true, optional: true, required: false
  private _icaports?: string[]; 
  public get icaports() {
    return this.getListAttribute('icaports');
  }
  public set icaports(value: string[]) {
    this._icaports = value;
  }
  public resetIcaports() {
    this._icaports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icaportsInput() {
    return this._icaports;
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

  // internaluserlogin - computed: true, optional: true, required: false
  private _internaluserlogin?: string; 
  public get internaluserlogin() {
    return this.getStringAttribute('internaluserlogin');
  }
  public set internaluserlogin(value: string) {
    this._internaluserlogin = value;
  }
  public resetInternaluserlogin() {
    this._internaluserlogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internaluserloginInput() {
    return this._internaluserlogin;
  }

  // ipttl - computed: true, optional: true, required: false
  private _ipttl?: number; 
  public get ipttl() {
    return this.getNumberAttribute('ipttl');
  }
  public set ipttl(value: number) {
    this._ipttl = value;
  }
  public resetIpttl() {
    this._ipttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipttlInput() {
    return this._ipttl;
  }

  // maxconn - computed: true, optional: true, required: false
  private _maxconn?: number; 
  public get maxconn() {
    return this.getNumberAttribute('maxconn');
  }
  public set maxconn(value: number) {
    this._maxconn = value;
  }
  public resetMaxconn() {
    this._maxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxconnInput() {
    return this._maxconn;
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

  // mgmthttpport - computed: true, optional: true, required: false
  private _mgmthttpport?: number; 
  public get mgmthttpport() {
    return this.getNumberAttribute('mgmthttpport');
  }
  public set mgmthttpport(value: number) {
    this._mgmthttpport = value;
  }
  public resetMgmthttpport() {
    this._mgmthttpport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmthttpportInput() {
    return this._mgmthttpport;
  }

  // mgmthttpsport - computed: true, optional: true, required: false
  private _mgmthttpsport?: number; 
  public get mgmthttpsport() {
    return this.getNumberAttribute('mgmthttpsport');
  }
  public set mgmthttpsport(value: number) {
    this._mgmthttpsport = value;
  }
  public resetMgmthttpsport() {
    this._mgmthttpsport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmthttpsportInput() {
    return this._mgmthttpsport;
  }

  // pmtumin - computed: true, optional: true, required: false
  private _pmtumin?: number; 
  public get pmtumin() {
    return this.getNumberAttribute('pmtumin');
  }
  public set pmtumin(value: number) {
    this._pmtumin = value;
  }
  public resetPmtumin() {
    this._pmtumin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtuminInput() {
    return this._pmtumin;
  }

  // pmtutimeout - computed: true, optional: true, required: false
  private _pmtutimeout?: number; 
  public get pmtutimeout() {
    return this.getNumberAttribute('pmtutimeout');
  }
  public set pmtutimeout(value: number) {
    this._pmtutimeout = value;
  }
  public resetPmtutimeout() {
    this._pmtutimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtutimeoutInput() {
    return this._pmtutimeout;
  }

  // proxyprotocol - computed: true, optional: true, required: false
  private _proxyprotocol?: string; 
  public get proxyprotocol() {
    return this.getStringAttribute('proxyprotocol');
  }
  public set proxyprotocol(value: string) {
    this._proxyprotocol = value;
  }
  public resetProxyprotocol() {
    this._proxyprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyprotocolInput() {
    return this._proxyprotocol;
  }

  // securecookie - computed: true, optional: true, required: false
  private _securecookie?: string; 
  public get securecookie() {
    return this.getStringAttribute('securecookie');
  }
  public set securecookie(value: string) {
    this._securecookie = value;
  }
  public resetSecurecookie() {
    this._securecookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securecookieInput() {
    return this._securecookie;
  }

  // secureicaports - computed: true, optional: true, required: false
  private _secureicaports?: string[]; 
  public get secureicaports() {
    return this.getListAttribute('secureicaports');
  }
  public set secureicaports(value: string[]) {
    this._secureicaports = value;
  }
  public resetSecureicaports() {
    this._secureicaports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureicaportsInput() {
    return this._secureicaports;
  }

  // servicepathingressvlan - computed: true, optional: true, required: false
  private _servicepathingressvlan?: number; 
  public get servicepathingressvlan() {
    return this.getNumberAttribute('servicepathingressvlan');
  }
  public set servicepathingressvlan(value: number) {
    this._servicepathingressvlan = value;
  }
  public resetServicepathingressvlan() {
    this._servicepathingressvlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicepathingressvlanInput() {
    return this._servicepathingressvlan;
  }

  // tcpcip - computed: true, optional: true, required: false
  private _tcpcip?: string; 
  public get tcpcip() {
    return this.getStringAttribute('tcpcip');
  }
  public set tcpcip(value: string) {
    this._tcpcip = value;
  }
  public resetTcpcip() {
    this._tcpcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpcipInput() {
    return this._tcpcip;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // useproxyport - computed: true, optional: true, required: false
  private _useproxyport?: string; 
  public get useproxyport() {
    return this.getStringAttribute('useproxyport');
  }
  public set useproxyport(value: string) {
    this._useproxyport = value;
  }
  public resetUseproxyport() {
    this._useproxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useproxyportInput() {
    return this._useproxyport;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advancedanalyticsstats: cdktf.stringToTerraform(this._advancedanalyticsstats),
      aftpallowrandomsourceport: cdktf.stringToTerraform(this._aftpallowrandomsourceport),
      cip: cdktf.stringToTerraform(this._cip),
      cipheader: cdktf.stringToTerraform(this._cipheader),
      cookieversion: cdktf.stringToTerraform(this._cookieversion),
      crportrange: cdktf.stringToTerraform(this._crportrange),
      exclusivequotamaxclient: cdktf.numberToTerraform(this._exclusivequotamaxclient),
      exclusivequotaspillover: cdktf.numberToTerraform(this._exclusivequotaspillover),
      ftpportrange: cdktf.stringToTerraform(this._ftpportrange),
      grantquotamaxclient: cdktf.numberToTerraform(this._grantquotamaxclient),
      grantquotaspillover: cdktf.numberToTerraform(this._grantquotaspillover),
      icaports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._icaports),
      id: cdktf.stringToTerraform(this._id),
      internaluserlogin: cdktf.stringToTerraform(this._internaluserlogin),
      ipttl: cdktf.numberToTerraform(this._ipttl),
      maxconn: cdktf.numberToTerraform(this._maxconn),
      maxreq: cdktf.numberToTerraform(this._maxreq),
      mgmthttpport: cdktf.numberToTerraform(this._mgmthttpport),
      mgmthttpsport: cdktf.numberToTerraform(this._mgmthttpsport),
      pmtumin: cdktf.numberToTerraform(this._pmtumin),
      pmtutimeout: cdktf.numberToTerraform(this._pmtutimeout),
      proxyprotocol: cdktf.stringToTerraform(this._proxyprotocol),
      securecookie: cdktf.stringToTerraform(this._securecookie),
      secureicaports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secureicaports),
      servicepathingressvlan: cdktf.numberToTerraform(this._servicepathingressvlan),
      tcpcip: cdktf.stringToTerraform(this._tcpcip),
      timezone: cdktf.stringToTerraform(this._timezone),
      useproxyport: cdktf.stringToTerraform(this._useproxyport),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advancedanalyticsstats: {
        value: cdktf.stringToHclTerraform(this._advancedanalyticsstats),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aftpallowrandomsourceport: {
        value: cdktf.stringToHclTerraform(this._aftpallowrandomsourceport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cip: {
        value: cdktf.stringToHclTerraform(this._cip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cipheader: {
        value: cdktf.stringToHclTerraform(this._cipheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookieversion: {
        value: cdktf.stringToHclTerraform(this._cookieversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crportrange: {
        value: cdktf.stringToHclTerraform(this._crportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclusivequotamaxclient: {
        value: cdktf.numberToHclTerraform(this._exclusivequotamaxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclusivequotaspillover: {
        value: cdktf.numberToHclTerraform(this._exclusivequotaspillover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ftpportrange: {
        value: cdktf.stringToHclTerraform(this._ftpportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grantquotamaxclient: {
        value: cdktf.numberToHclTerraform(this._grantquotamaxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      grantquotaspillover: {
        value: cdktf.numberToHclTerraform(this._grantquotaspillover),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icaports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._icaports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internaluserlogin: {
        value: cdktf.stringToHclTerraform(this._internaluserlogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipttl: {
        value: cdktf.numberToHclTerraform(this._ipttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxconn: {
        value: cdktf.numberToHclTerraform(this._maxconn),
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
      mgmthttpport: {
        value: cdktf.numberToHclTerraform(this._mgmthttpport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmthttpsport: {
        value: cdktf.numberToHclTerraform(this._mgmthttpsport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pmtumin: {
        value: cdktf.numberToHclTerraform(this._pmtumin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pmtutimeout: {
        value: cdktf.numberToHclTerraform(this._pmtutimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyprotocol: {
        value: cdktf.stringToHclTerraform(this._proxyprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      securecookie: {
        value: cdktf.stringToHclTerraform(this._securecookie),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secureicaports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secureicaports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      servicepathingressvlan: {
        value: cdktf.numberToHclTerraform(this._servicepathingressvlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpcip: {
        value: cdktf.stringToHclTerraform(this._tcpcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useproxyport: {
        value: cdktf.stringToHclTerraform(this._useproxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
