// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicegroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#appflowlog Servicegroup#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#autodelayedtrofs Servicegroup#autodelayedtrofs}
  */
  readonly autodelayedtrofs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#autodisabledelay Servicegroup#autodisabledelay}
  */
  readonly autodisabledelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#autodisablegraceful Servicegroup#autodisablegraceful}
  */
  readonly autodisablegraceful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#autoscale Servicegroup#autoscale}
  */
  readonly autoscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#bootstrap Servicegroup#bootstrap}
  */
  readonly bootstrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cacheable Servicegroup#cacheable}
  */
  readonly cacheable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cachetype Servicegroup#cachetype}
  */
  readonly cachetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cip Servicegroup#cip}
  */
  readonly cip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cipheader Servicegroup#cipheader}
  */
  readonly cipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cka Servicegroup#cka}
  */
  readonly cka?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#clttimeout Servicegroup#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#cmp Servicegroup#cmp}
  */
  readonly cmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#comment Servicegroup#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#customserverid Servicegroup#customserverid}
  */
  readonly customserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#dbsttl Servicegroup#dbsttl}
  */
  readonly dbsttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#delay Servicegroup#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#downstateflush Servicegroup#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#dupweight Servicegroup#dupweight}
  */
  readonly dupweight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#graceful Servicegroup#graceful}
  */
  readonly graceful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#hashid Servicegroup#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#healthmonitor Servicegroup#healthmonitor}
  */
  readonly healthmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#httpprofilename Servicegroup#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#id Servicegroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#includemembers Servicegroup#includemembers}
  */
  readonly includemembers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#lbmonitor Servicegroup#lbmonitor}
  */
  readonly lbmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#lbvservers Servicegroup#lbvservers}
  */
  readonly lbvservers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#maxbandwidth Servicegroup#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#maxclient Servicegroup#maxclient}
  */
  readonly maxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#maxreq Servicegroup#maxreq}
  */
  readonly maxreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#memberport Servicegroup#memberport}
  */
  readonly memberport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#monconnectionclose Servicegroup#monconnectionclose}
  */
  readonly monconnectionclose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#monitornamesvc Servicegroup#monitornamesvc}
  */
  readonly monitornamesvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#monthreshold Servicegroup#monthreshold}
  */
  readonly monthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#nameserver Servicegroup#nameserver}
  */
  readonly nameserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#netprofile Servicegroup#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#pathmonitor Servicegroup#pathmonitor}
  */
  readonly pathmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#pathmonitorindv Servicegroup#pathmonitorindv}
  */
  readonly pathmonitorindv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#port Servicegroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#quicprofilename Servicegroup#quicprofilename}
  */
  readonly quicprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#riseapbrstatsmsgcode Servicegroup#riseapbrstatsmsgcode}
  */
  readonly riseapbrstatsmsgcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#rtspsessionidremap Servicegroup#rtspsessionidremap}
  */
  readonly rtspsessionidremap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#serverid Servicegroup#serverid}
  */
  readonly serverid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#servername Servicegroup#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#servicegroupmembers Servicegroup#servicegroupmembers}
  */
  readonly servicegroupmembers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#servicegroupmembers_by_servername Servicegroup#servicegroupmembers_by_servername}
  */
  readonly servicegroupmembersByServername?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#servicegroupname Servicegroup#servicegroupname}
  */
  readonly servicegroupname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#servicetype Servicegroup#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#sp Servicegroup#sp}
  */
  readonly sp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#state Servicegroup#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#svrtimeout Servicegroup#svrtimeout}
  */
  readonly svrtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#tcpb Servicegroup#tcpb}
  */
  readonly tcpb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#tcpprofilename Servicegroup#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#td Servicegroup#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#topicname Servicegroup#topicname}
  */
  readonly topicname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#useproxyport Servicegroup#useproxyport}
  */
  readonly useproxyport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#usip Servicegroup#usip}
  */
  readonly usip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#weight Servicegroup#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup citrixadc_servicegroup}
*/
export class Servicegroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_servicegroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Servicegroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Servicegroup to import
  * @param importFromId The id of the existing Servicegroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Servicegroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_servicegroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/servicegroup citrixadc_servicegroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicegroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServicegroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_servicegroup',
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
    this._appflowlog = config.appflowlog;
    this._autodelayedtrofs = config.autodelayedtrofs;
    this._autodisabledelay = config.autodisabledelay;
    this._autodisablegraceful = config.autodisablegraceful;
    this._autoscale = config.autoscale;
    this._bootstrap = config.bootstrap;
    this._cacheable = config.cacheable;
    this._cachetype = config.cachetype;
    this._cip = config.cip;
    this._cipheader = config.cipheader;
    this._cka = config.cka;
    this._clttimeout = config.clttimeout;
    this._cmp = config.cmp;
    this._comment = config.comment;
    this._customserverid = config.customserverid;
    this._dbsttl = config.dbsttl;
    this._delay = config.delay;
    this._downstateflush = config.downstateflush;
    this._dupweight = config.dupweight;
    this._graceful = config.graceful;
    this._hashid = config.hashid;
    this._healthmonitor = config.healthmonitor;
    this._httpprofilename = config.httpprofilename;
    this._id = config.id;
    this._includemembers = config.includemembers;
    this._lbmonitor = config.lbmonitor;
    this._lbvservers = config.lbvservers;
    this._maxbandwidth = config.maxbandwidth;
    this._maxclient = config.maxclient;
    this._maxreq = config.maxreq;
    this._memberport = config.memberport;
    this._monconnectionclose = config.monconnectionclose;
    this._monitornamesvc = config.monitornamesvc;
    this._monthreshold = config.monthreshold;
    this._nameserver = config.nameserver;
    this._netprofile = config.netprofile;
    this._pathmonitor = config.pathmonitor;
    this._pathmonitorindv = config.pathmonitorindv;
    this._port = config.port;
    this._quicprofilename = config.quicprofilename;
    this._riseapbrstatsmsgcode = config.riseapbrstatsmsgcode;
    this._rtspsessionidremap = config.rtspsessionidremap;
    this._serverid = config.serverid;
    this._servername = config.servername;
    this._servicegroupmembers = config.servicegroupmembers;
    this._servicegroupmembersByServername = config.servicegroupmembersByServername;
    this._servicegroupname = config.servicegroupname;
    this._servicetype = config.servicetype;
    this._sp = config.sp;
    this._state = config.state;
    this._svrtimeout = config.svrtimeout;
    this._tcpb = config.tcpb;
    this._tcpprofilename = config.tcpprofilename;
    this._td = config.td;
    this._topicname = config.topicname;
    this._useproxyport = config.useproxyport;
    this._usip = config.usip;
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

  // autodelayedtrofs - computed: true, optional: true, required: false
  private _autodelayedtrofs?: string; 
  public get autodelayedtrofs() {
    return this.getStringAttribute('autodelayedtrofs');
  }
  public set autodelayedtrofs(value: string) {
    this._autodelayedtrofs = value;
  }
  public resetAutodelayedtrofs() {
    this._autodelayedtrofs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodelayedtrofsInput() {
    return this._autodelayedtrofs;
  }

  // autodisabledelay - computed: true, optional: true, required: false
  private _autodisabledelay?: number; 
  public get autodisabledelay() {
    return this.getNumberAttribute('autodisabledelay');
  }
  public set autodisabledelay(value: number) {
    this._autodisabledelay = value;
  }
  public resetAutodisabledelay() {
    this._autodisabledelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodisabledelayInput() {
    return this._autodisabledelay;
  }

  // autodisablegraceful - computed: true, optional: true, required: false
  private _autodisablegraceful?: string; 
  public get autodisablegraceful() {
    return this.getStringAttribute('autodisablegraceful');
  }
  public set autodisablegraceful(value: string) {
    this._autodisablegraceful = value;
  }
  public resetAutodisablegraceful() {
    this._autodisablegraceful = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodisablegracefulInput() {
    return this._autodisablegraceful;
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

  // bootstrap - computed: true, optional: true, required: false
  private _bootstrap?: string; 
  public get bootstrap() {
    return this.getStringAttribute('bootstrap');
  }
  public set bootstrap(value: string) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // cacheable - computed: true, optional: true, required: false
  private _cacheable?: string; 
  public get cacheable() {
    return this.getStringAttribute('cacheable');
  }
  public set cacheable(value: string) {
    this._cacheable = value;
  }
  public resetCacheable() {
    this._cacheable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheableInput() {
    return this._cacheable;
  }

  // cachetype - computed: true, optional: true, required: false
  private _cachetype?: string; 
  public get cachetype() {
    return this.getStringAttribute('cachetype');
  }
  public set cachetype(value: string) {
    this._cachetype = value;
  }
  public resetCachetype() {
    this._cachetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachetypeInput() {
    return this._cachetype;
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

  // cka - computed: true, optional: true, required: false
  private _cka?: string; 
  public get cka() {
    return this.getStringAttribute('cka');
  }
  public set cka(value: string) {
    this._cka = value;
  }
  public resetCka() {
    this._cka = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ckaInput() {
    return this._cka;
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

  // cmp - computed: true, optional: true, required: false
  private _cmp?: string; 
  public get cmp() {
    return this.getStringAttribute('cmp');
  }
  public set cmp(value: string) {
    this._cmp = value;
  }
  public resetCmp() {
    this._cmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmpInput() {
    return this._cmp;
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

  // customserverid - computed: true, optional: true, required: false
  private _customserverid?: string; 
  public get customserverid() {
    return this.getStringAttribute('customserverid');
  }
  public set customserverid(value: string) {
    this._customserverid = value;
  }
  public resetCustomserverid() {
    this._customserverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customserveridInput() {
    return this._customserverid;
  }

  // dbsttl - computed: true, optional: true, required: false
  private _dbsttl?: number; 
  public get dbsttl() {
    return this.getNumberAttribute('dbsttl');
  }
  public set dbsttl(value: number) {
    this._dbsttl = value;
  }
  public resetDbsttl() {
    this._dbsttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbsttlInput() {
    return this._dbsttl;
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

  // httpprofilename - computed: true, optional: true, required: false
  private _httpprofilename?: string; 
  public get httpprofilename() {
    return this.getStringAttribute('httpprofilename');
  }
  public set httpprofilename(value: string) {
    this._httpprofilename = value;
  }
  public resetHttpprofilename() {
    this._httpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpprofilenameInput() {
    return this._httpprofilename;
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

  // lbmonitor - computed: false, optional: true, required: false
  private _lbmonitor?: string; 
  public get lbmonitor() {
    return this.getStringAttribute('lbmonitor');
  }
  public set lbmonitor(value: string) {
    this._lbmonitor = value;
  }
  public resetLbmonitor() {
    this._lbmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbmonitorInput() {
    return this._lbmonitor;
  }

  // lbvservers - computed: false, optional: true, required: false
  private _lbvservers?: string[]; 
  public get lbvservers() {
    return cdktf.Fn.tolist(this.getListAttribute('lbvservers'));
  }
  public set lbvservers(value: string[]) {
    this._lbvservers = value;
  }
  public resetLbvservers() {
    this._lbvservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvserversInput() {
    return this._lbvservers;
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

  // memberport - computed: true, optional: true, required: false
  private _memberport?: number; 
  public get memberport() {
    return this.getNumberAttribute('memberport');
  }
  public set memberport(value: number) {
    this._memberport = value;
  }
  public resetMemberport() {
    this._memberport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberportInput() {
    return this._memberport;
  }

  // monconnectionclose - computed: true, optional: true, required: false
  private _monconnectionclose?: string; 
  public get monconnectionclose() {
    return this.getStringAttribute('monconnectionclose');
  }
  public set monconnectionclose(value: string) {
    this._monconnectionclose = value;
  }
  public resetMonconnectionclose() {
    this._monconnectionclose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monconnectioncloseInput() {
    return this._monconnectionclose;
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

  // nameserver - computed: true, optional: true, required: false
  private _nameserver?: string; 
  public get nameserver() {
    return this.getStringAttribute('nameserver');
  }
  public set nameserver(value: string) {
    this._nameserver = value;
  }
  public resetNameserver() {
    this._nameserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserverInput() {
    return this._nameserver;
  }

  // netprofile - computed: true, optional: true, required: false
  private _netprofile?: string; 
  public get netprofile() {
    return this.getStringAttribute('netprofile');
  }
  public set netprofile(value: string) {
    this._netprofile = value;
  }
  public resetNetprofile() {
    this._netprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netprofileInput() {
    return this._netprofile;
  }

  // pathmonitor - computed: true, optional: true, required: false
  private _pathmonitor?: string; 
  public get pathmonitor() {
    return this.getStringAttribute('pathmonitor');
  }
  public set pathmonitor(value: string) {
    this._pathmonitor = value;
  }
  public resetPathmonitor() {
    this._pathmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathmonitorInput() {
    return this._pathmonitor;
  }

  // pathmonitorindv - computed: true, optional: true, required: false
  private _pathmonitorindv?: string; 
  public get pathmonitorindv() {
    return this.getStringAttribute('pathmonitorindv');
  }
  public set pathmonitorindv(value: string) {
    this._pathmonitorindv = value;
  }
  public resetPathmonitorindv() {
    this._pathmonitorindv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathmonitorindvInput() {
    return this._pathmonitorindv;
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

  // quicprofilename - computed: true, optional: true, required: false
  private _quicprofilename?: string; 
  public get quicprofilename() {
    return this.getStringAttribute('quicprofilename');
  }
  public set quicprofilename(value: string) {
    this._quicprofilename = value;
  }
  public resetQuicprofilename() {
    this._quicprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicprofilenameInput() {
    return this._quicprofilename;
  }

  // riseapbrstatsmsgcode - computed: true, optional: true, required: false
  private _riseapbrstatsmsgcode?: number; 
  public get riseapbrstatsmsgcode() {
    return this.getNumberAttribute('riseapbrstatsmsgcode');
  }
  public set riseapbrstatsmsgcode(value: number) {
    this._riseapbrstatsmsgcode = value;
  }
  public resetRiseapbrstatsmsgcode() {
    this._riseapbrstatsmsgcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseapbrstatsmsgcodeInput() {
    return this._riseapbrstatsmsgcode;
  }

  // rtspsessionidremap - computed: true, optional: true, required: false
  private _rtspsessionidremap?: string; 
  public get rtspsessionidremap() {
    return this.getStringAttribute('rtspsessionidremap');
  }
  public set rtspsessionidremap(value: string) {
    this._rtspsessionidremap = value;
  }
  public resetRtspsessionidremap() {
    this._rtspsessionidremap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspsessionidremapInput() {
    return this._rtspsessionidremap;
  }

  // serverid - computed: true, optional: true, required: false
  private _serverid?: number; 
  public get serverid() {
    return this.getNumberAttribute('serverid');
  }
  public set serverid(value: number) {
    this._serverid = value;
  }
  public resetServerid() {
    this._serverid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveridInput() {
    return this._serverid;
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

  // servicegroupmembers - computed: false, optional: true, required: false
  private _servicegroupmembers?: string[]; 
  public get servicegroupmembers() {
    return cdktf.Fn.tolist(this.getListAttribute('servicegroupmembers'));
  }
  public set servicegroupmembers(value: string[]) {
    this._servicegroupmembers = value;
  }
  public resetServicegroupmembers() {
    this._servicegroupmembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupmembersInput() {
    return this._servicegroupmembers;
  }

  // servicegroupmembers_by_servername - computed: false, optional: true, required: false
  private _servicegroupmembersByServername?: string[]; 
  public get servicegroupmembersByServername() {
    return cdktf.Fn.tolist(this.getListAttribute('servicegroupmembers_by_servername'));
  }
  public set servicegroupmembersByServername(value: string[]) {
    this._servicegroupmembersByServername = value;
  }
  public resetServicegroupmembersByServername() {
    this._servicegroupmembersByServername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupmembersByServernameInput() {
    return this._servicegroupmembersByServername;
  }

  // servicegroupname - computed: true, optional: true, required: false
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  public resetServicegroupname() {
    this._servicegroupname = undefined;
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

  // sp - computed: true, optional: true, required: false
  private _sp?: string; 
  public get sp() {
    return this.getStringAttribute('sp');
  }
  public set sp(value: string) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
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

  // tcpb - computed: true, optional: true, required: false
  private _tcpb?: string; 
  public get tcpb() {
    return this.getStringAttribute('tcpb');
  }
  public set tcpb(value: string) {
    this._tcpb = value;
  }
  public resetTcpb() {
    this._tcpb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpbInput() {
    return this._tcpb;
  }

  // tcpprofilename - computed: true, optional: true, required: false
  private _tcpprofilename?: string; 
  public get tcpprofilename() {
    return this.getStringAttribute('tcpprofilename');
  }
  public set tcpprofilename(value: string) {
    this._tcpprofilename = value;
  }
  public resetTcpprofilename() {
    this._tcpprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpprofilenameInput() {
    return this._tcpprofilename;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // topicname - computed: true, optional: true, required: false
  private _topicname?: string; 
  public get topicname() {
    return this.getStringAttribute('topicname');
  }
  public set topicname(value: string) {
    this._topicname = value;
  }
  public resetTopicname() {
    this._topicname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicnameInput() {
    return this._topicname;
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

  // usip - computed: true, optional: true, required: false
  private _usip?: string; 
  public get usip() {
    return this.getStringAttribute('usip');
  }
  public set usip(value: string) {
    this._usip = value;
  }
  public resetUsip() {
    this._usip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usipInput() {
    return this._usip;
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
      autodelayedtrofs: cdktf.stringToTerraform(this._autodelayedtrofs),
      autodisabledelay: cdktf.numberToTerraform(this._autodisabledelay),
      autodisablegraceful: cdktf.stringToTerraform(this._autodisablegraceful),
      autoscale: cdktf.stringToTerraform(this._autoscale),
      bootstrap: cdktf.stringToTerraform(this._bootstrap),
      cacheable: cdktf.stringToTerraform(this._cacheable),
      cachetype: cdktf.stringToTerraform(this._cachetype),
      cip: cdktf.stringToTerraform(this._cip),
      cipheader: cdktf.stringToTerraform(this._cipheader),
      cka: cdktf.stringToTerraform(this._cka),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      cmp: cdktf.stringToTerraform(this._cmp),
      comment: cdktf.stringToTerraform(this._comment),
      customserverid: cdktf.stringToTerraform(this._customserverid),
      dbsttl: cdktf.numberToTerraform(this._dbsttl),
      delay: cdktf.numberToTerraform(this._delay),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      dupweight: cdktf.numberToTerraform(this._dupweight),
      graceful: cdktf.stringToTerraform(this._graceful),
      hashid: cdktf.numberToTerraform(this._hashid),
      healthmonitor: cdktf.stringToTerraform(this._healthmonitor),
      httpprofilename: cdktf.stringToTerraform(this._httpprofilename),
      id: cdktf.stringToTerraform(this._id),
      includemembers: cdktf.booleanToTerraform(this._includemembers),
      lbmonitor: cdktf.stringToTerraform(this._lbmonitor),
      lbvservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._lbvservers),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      maxclient: cdktf.numberToTerraform(this._maxclient),
      maxreq: cdktf.numberToTerraform(this._maxreq),
      memberport: cdktf.numberToTerraform(this._memberport),
      monconnectionclose: cdktf.stringToTerraform(this._monconnectionclose),
      monitornamesvc: cdktf.stringToTerraform(this._monitornamesvc),
      monthreshold: cdktf.numberToTerraform(this._monthreshold),
      nameserver: cdktf.stringToTerraform(this._nameserver),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      pathmonitor: cdktf.stringToTerraform(this._pathmonitor),
      pathmonitorindv: cdktf.stringToTerraform(this._pathmonitorindv),
      port: cdktf.numberToTerraform(this._port),
      quicprofilename: cdktf.stringToTerraform(this._quicprofilename),
      riseapbrstatsmsgcode: cdktf.numberToTerraform(this._riseapbrstatsmsgcode),
      rtspsessionidremap: cdktf.stringToTerraform(this._rtspsessionidremap),
      serverid: cdktf.numberToTerraform(this._serverid),
      servername: cdktf.stringToTerraform(this._servername),
      servicegroupmembers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicegroupmembers),
      servicegroupmembers_by_servername: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servicegroupmembersByServername),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sp: cdktf.stringToTerraform(this._sp),
      state: cdktf.stringToTerraform(this._state),
      svrtimeout: cdktf.numberToTerraform(this._svrtimeout),
      tcpb: cdktf.stringToTerraform(this._tcpb),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      td: cdktf.numberToTerraform(this._td),
      topicname: cdktf.stringToTerraform(this._topicname),
      useproxyport: cdktf.stringToTerraform(this._useproxyport),
      usip: cdktf.stringToTerraform(this._usip),
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
      autodelayedtrofs: {
        value: cdktf.stringToHclTerraform(this._autodelayedtrofs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autodisabledelay: {
        value: cdktf.numberToHclTerraform(this._autodisabledelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autodisablegraceful: {
        value: cdktf.stringToHclTerraform(this._autodisablegraceful),
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
      bootstrap: {
        value: cdktf.stringToHclTerraform(this._bootstrap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cacheable: {
        value: cdktf.stringToHclTerraform(this._cacheable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachetype: {
        value: cdktf.stringToHclTerraform(this._cachetype),
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
      cka: {
        value: cdktf.stringToHclTerraform(this._cka),
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
      cmp: {
        value: cdktf.stringToHclTerraform(this._cmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customserverid: {
        value: cdktf.stringToHclTerraform(this._customserverid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbsttl: {
        value: cdktf.numberToHclTerraform(this._dbsttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      httpprofilename: {
        value: cdktf.stringToHclTerraform(this._httpprofilename),
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
      lbmonitor: {
        value: cdktf.stringToHclTerraform(this._lbmonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbvservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._lbvservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      maxreq: {
        value: cdktf.numberToHclTerraform(this._maxreq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memberport: {
        value: cdktf.numberToHclTerraform(this._memberport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monconnectionclose: {
        value: cdktf.stringToHclTerraform(this._monconnectionclose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      nameserver: {
        value: cdktf.stringToHclTerraform(this._nameserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netprofile: {
        value: cdktf.stringToHclTerraform(this._netprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pathmonitor: {
        value: cdktf.stringToHclTerraform(this._pathmonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pathmonitorindv: {
        value: cdktf.stringToHclTerraform(this._pathmonitorindv),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quicprofilename: {
        value: cdktf.stringToHclTerraform(this._quicprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      riseapbrstatsmsgcode: {
        value: cdktf.numberToHclTerraform(this._riseapbrstatsmsgcode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rtspsessionidremap: {
        value: cdktf.stringToHclTerraform(this._rtspsessionidremap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverid: {
        value: cdktf.numberToHclTerraform(this._serverid),
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
      servicegroupmembers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servicegroupmembers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      servicegroupmembers_by_servername: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servicegroupmembersByServername),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      sp: {
        value: cdktf.stringToHclTerraform(this._sp),
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
      tcpb: {
        value: cdktf.stringToHclTerraform(this._tcpb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpprofilename: {
        value: cdktf.stringToHclTerraform(this._tcpprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      topicname: {
        value: cdktf.stringToHclTerraform(this._topicname),
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
      usip: {
        value: cdktf.stringToHclTerraform(this._usip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
