// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbservicegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#appflowlog Gslbservicegroup#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#autoscale Gslbservicegroup#autoscale}
  */
  readonly autoscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#cip Gslbservicegroup#cip}
  */
  readonly cip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#cipheader Gslbservicegroup#cipheader}
  */
  readonly cipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#clttimeout Gslbservicegroup#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#comment Gslbservicegroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#delay Gslbservicegroup#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#downstateflush Gslbservicegroup#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#dupweight Gslbservicegroup#dupweight}
  */
  readonly dupweight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#graceful Gslbservicegroup#graceful}
  */
  readonly graceful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#hashid Gslbservicegroup#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#healthmonitor Gslbservicegroup#healthmonitor}
  */
  readonly healthmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#id Gslbservicegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#includemembers Gslbservicegroup#includemembers}
  */
  readonly includemembers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#maxbandwidth Gslbservicegroup#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#maxclient Gslbservicegroup#maxclient}
  */
  readonly maxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#monitornamesvc Gslbservicegroup#monitornamesvc}
  */
  readonly monitornamesvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#monthreshold Gslbservicegroup#monthreshold}
  */
  readonly monthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#port Gslbservicegroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#publicip Gslbservicegroup#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#publicport Gslbservicegroup#publicport}
  */
  readonly publicport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#servername Gslbservicegroup#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#servicegroupname Gslbservicegroup#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#servicetype Gslbservicegroup#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#sitename Gslbservicegroup#sitename}
  */
  readonly sitename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#sitepersistence Gslbservicegroup#sitepersistence}
  */
  readonly sitepersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#siteprefix Gslbservicegroup#siteprefix}
  */
  readonly siteprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#state Gslbservicegroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#svrtimeout Gslbservicegroup#svrtimeout}
  */
  readonly svrtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#weight Gslbservicegroup#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup citrixadc_gslbservicegroup}
*/
export class Gslbservicegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbservicegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Gslbservicegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Gslbservicegroup to import
  * @param importFromId The id of the existing Gslbservicegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Gslbservicegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbservicegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/gslbservicegroup citrixadc_gslbservicegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbservicegroupConfig
  */
  public constructor(scope: Construct, id: string, config: GslbservicegroupConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbservicegroup',
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
    this._appflowlog = config.appflowlog;
    this._autoscale = config.autoscale;
    this._cip = config.cip;
    this._cipheader = config.cipheader;
    this._clttimeout = config.clttimeout;
    this._comment = config.comment;
    this._delay = config.delay;
    this._downstateflush = config.downstateflush;
    this._dupweight = config.dupweight;
    this._graceful = config.graceful;
    this._hashid = config.hashid;
    this._healthmonitor = config.healthmonitor;
    this._id = config.id;
    this._includemembers = config.includemembers;
    this._maxbandwidth = config.maxbandwidth;
    this._maxclient = config.maxclient;
    this._monitornamesvc = config.monitornamesvc;
    this._monthreshold = config.monthreshold;
    this._port = config.port;
    this._publicip = config.publicip;
    this._publicport = config.publicport;
    this._servername = config.servername;
    this._servicegroupname = config.servicegroupname;
    this._servicetype = config.servicetype;
    this._sitename = config.sitename;
    this._sitepersistence = config.sitepersistence;
    this._siteprefix = config.siteprefix;
    this._state = config.state;
    this._svrtimeout = config.svrtimeout;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appflowlog - computed: true, optional: true, required: false
  private _appflowlog?: string; 
  public get appflowlog() {
    return this.getStringAttribute('appflowlog');
  }
  public set appflowlog(value: string) {
    this._appflowlog = value;
  }
  public resetAppflowlog() {
    this._appflowlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowlogInput() {
    return this._appflowlog;
  }

  // autoscale - computed: true, optional: true, required: false
  private _autoscale?: string; 
  public get autoscale() {
    return this.getStringAttribute('autoscale');
  }
  public set autoscale(value: string) {
    this._autoscale = value;
  }
  public resetAutoscale() {
    this._autoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleInput() {
    return this._autoscale;
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

  // clttimeout - computed: true, optional: true, required: false
  private _clttimeout?: number; 
  public get clttimeout() {
    return this.getNumberAttribute('clttimeout');
  }
  public set clttimeout(value: number) {
    this._clttimeout = value;
  }
  public resetClttimeout() {
    this._clttimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clttimeoutInput() {
    return this._clttimeout;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // downstateflush - computed: true, optional: true, required: false
  private _downstateflush?: string; 
  public get downstateflush() {
    return this.getStringAttribute('downstateflush');
  }
  public set downstateflush(value: string) {
    this._downstateflush = value;
  }
  public resetDownstateflush() {
    this._downstateflush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstateflushInput() {
    return this._downstateflush;
  }

  // dupweight - computed: true, optional: true, required: false
  private _dupweight?: number; 
  public get dupweight() {
    return this.getNumberAttribute('dupweight');
  }
  public set dupweight(value: number) {
    this._dupweight = value;
  }
  public resetDupweight() {
    this._dupweight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dupweightInput() {
    return this._dupweight;
  }

  // graceful - computed: true, optional: true, required: false
  private _graceful?: string; 
  public get graceful() {
    return this.getStringAttribute('graceful');
  }
  public set graceful(value: string) {
    this._graceful = value;
  }
  public resetGraceful() {
    this._graceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulInput() {
    return this._graceful;
  }

  // hashid - computed: true, optional: true, required: false
  private _hashid?: number; 
  public get hashid() {
    return this.getNumberAttribute('hashid');
  }
  public set hashid(value: number) {
    this._hashid = value;
  }
  public resetHashid() {
    this._hashid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashidInput() {
    return this._hashid;
  }

  // healthmonitor - computed: true, optional: true, required: false
  private _healthmonitor?: string; 
  public get healthmonitor() {
    return this.getStringAttribute('healthmonitor');
  }
  public set healthmonitor(value: string) {
    this._healthmonitor = value;
  }
  public resetHealthmonitor() {
    this._healthmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthmonitorInput() {
    return this._healthmonitor;
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

  // includemembers - computed: true, optional: true, required: false
  private _includemembers?: boolean | cdktf.IResolvable; 
  public get includemembers() {
    return this.getBooleanAttribute('includemembers');
  }
  public set includemembers(value: boolean | cdktf.IResolvable) {
    this._includemembers = value;
  }
  public resetIncludemembers() {
    this._includemembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includemembersInput() {
    return this._includemembers;
  }

  // maxbandwidth - computed: true, optional: true, required: false
  private _maxbandwidth?: number; 
  public get maxbandwidth() {
    return this.getNumberAttribute('maxbandwidth');
  }
  public set maxbandwidth(value: number) {
    this._maxbandwidth = value;
  }
  public resetMaxbandwidth() {
    this._maxbandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbandwidthInput() {
    return this._maxbandwidth;
  }

  // maxclient - computed: true, optional: true, required: false
  private _maxclient?: number; 
  public get maxclient() {
    return this.getNumberAttribute('maxclient');
  }
  public set maxclient(value: number) {
    this._maxclient = value;
  }
  public resetMaxclient() {
    this._maxclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxclientInput() {
    return this._maxclient;
  }

  // monitornamesvc - computed: true, optional: true, required: false
  private _monitornamesvc?: string; 
  public get monitornamesvc() {
    return this.getStringAttribute('monitornamesvc');
  }
  public set monitornamesvc(value: string) {
    this._monitornamesvc = value;
  }
  public resetMonitornamesvc() {
    this._monitornamesvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornamesvcInput() {
    return this._monitornamesvc;
  }

  // monthreshold - computed: true, optional: true, required: false
  private _monthreshold?: number; 
  public get monthreshold() {
    return this.getNumberAttribute('monthreshold');
  }
  public set monthreshold(value: number) {
    this._monthreshold = value;
  }
  public resetMonthreshold() {
    this._monthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthresholdInput() {
    return this._monthreshold;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // publicport - computed: true, optional: true, required: false
  private _publicport?: number; 
  public get publicport() {
    return this.getNumberAttribute('publicport');
  }
  public set publicport(value: number) {
    this._publicport = value;
  }
  public resetPublicport() {
    this._publicport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicportInput() {
    return this._publicport;
  }

  // servername - computed: true, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // servicegroupname - computed: false, optional: false, required: true
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupnameInput() {
    return this._servicegroupname;
  }

  // servicetype - computed: true, optional: true, required: false
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  public resetServicetype() {
    this._servicetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
  }

  // sitename - computed: true, optional: true, required: false
  private _sitename?: string; 
  public get sitename() {
    return this.getStringAttribute('sitename');
  }
  public set sitename(value: string) {
    this._sitename = value;
  }
  public resetSitename() {
    this._sitename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitenameInput() {
    return this._sitename;
  }

  // sitepersistence - computed: true, optional: true, required: false
  private _sitepersistence?: string; 
  public get sitepersistence() {
    return this.getStringAttribute('sitepersistence');
  }
  public set sitepersistence(value: string) {
    this._sitepersistence = value;
  }
  public resetSitepersistence() {
    this._sitepersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitepersistenceInput() {
    return this._sitepersistence;
  }

  // siteprefix - computed: true, optional: true, required: false
  private _siteprefix?: string; 
  public get siteprefix() {
    return this.getStringAttribute('siteprefix');
  }
  public set siteprefix(value: string) {
    this._siteprefix = value;
  }
  public resetSiteprefix() {
    this._siteprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteprefixInput() {
    return this._siteprefix;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // svrtimeout - computed: true, optional: true, required: false
  private _svrtimeout?: number; 
  public get svrtimeout() {
    return this.getNumberAttribute('svrtimeout');
  }
  public set svrtimeout(value: number) {
    this._svrtimeout = value;
  }
  public resetSvrtimeout() {
    this._svrtimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrtimeoutInput() {
    return this._svrtimeout;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      autoscale: cdktf.stringToTerraform(this._autoscale),
      cip: cdktf.stringToTerraform(this._cip),
      cipheader: cdktf.stringToTerraform(this._cipheader),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      comment: cdktf.stringToTerraform(this._comment),
      delay: cdktf.numberToTerraform(this._delay),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      dupweight: cdktf.numberToTerraform(this._dupweight),
      graceful: cdktf.stringToTerraform(this._graceful),
      hashid: cdktf.numberToTerraform(this._hashid),
      healthmonitor: cdktf.stringToTerraform(this._healthmonitor),
      id: cdktf.stringToTerraform(this._id),
      includemembers: cdktf.booleanToTerraform(this._includemembers),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      maxclient: cdktf.numberToTerraform(this._maxclient),
      monitornamesvc: cdktf.stringToTerraform(this._monitornamesvc),
      monthreshold: cdktf.numberToTerraform(this._monthreshold),
      port: cdktf.numberToTerraform(this._port),
      publicip: cdktf.stringToTerraform(this._publicip),
      publicport: cdktf.numberToTerraform(this._publicport),
      servername: cdktf.stringToTerraform(this._servername),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sitename: cdktf.stringToTerraform(this._sitename),
      sitepersistence: cdktf.stringToTerraform(this._sitepersistence),
      siteprefix: cdktf.stringToTerraform(this._siteprefix),
      state: cdktf.stringToTerraform(this._state),
      svrtimeout: cdktf.numberToTerraform(this._svrtimeout),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscale: {
        value: cdktf.stringToHclTerraform(this._autoscale),
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
      clttimeout: {
        value: cdktf.numberToHclTerraform(this._clttimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      downstateflush: {
        value: cdktf.stringToHclTerraform(this._downstateflush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dupweight: {
        value: cdktf.numberToHclTerraform(this._dupweight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful: {
        value: cdktf.stringToHclTerraform(this._graceful),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hashid: {
        value: cdktf.numberToHclTerraform(this._hashid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      healthmonitor: {
        value: cdktf.stringToHclTerraform(this._healthmonitor),
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
      includemembers: {
        value: cdktf.booleanToHclTerraform(this._includemembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maxbandwidth: {
        value: cdktf.numberToHclTerraform(this._maxbandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxclient: {
        value: cdktf.numberToHclTerraform(this._maxclient),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitornamesvc: {
        value: cdktf.stringToHclTerraform(this._monitornamesvc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monthreshold: {
        value: cdktf.numberToHclTerraform(this._monthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicport: {
        value: cdktf.numberToHclTerraform(this._publicport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitename: {
        value: cdktf.stringToHclTerraform(this._sitename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitepersistence: {
        value: cdktf.stringToHclTerraform(this._sitepersistence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteprefix: {
        value: cdktf.stringToHclTerraform(this._siteprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      svrtimeout: {
        value: cdktf.numberToHclTerraform(this._svrtimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
