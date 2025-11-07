// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#accessdown Service#accessdown}
  */
  readonly accessdown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#all Service#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#appflowlog Service#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cacheable Service#cacheable}
  */
  readonly cacheable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cachetype Service#cachetype}
  */
  readonly cachetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cip Service#cip}
  */
  readonly cip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cipheader Service#cipheader}
  */
  readonly cipheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cka Service#cka}
  */
  readonly cka?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cleartextport Service#cleartextport}
  */
  readonly cleartextport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#clttimeout Service#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#cmp Service#cmp}
  */
  readonly cmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#comment Service#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#commonname Service#commonname}
  */
  readonly commonname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#contentinspectionprofilename Service#contentinspectionprofilename}
  */
  readonly contentinspectionprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#customserverid Service#customserverid}
  */
  readonly customserverid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#delay Service#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#disabled_poll_delay Service#disabled_poll_delay}
  */
  readonly disabledPollDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#disabled_poll_interval Service#disabled_poll_interval}
  */
  readonly disabledPollInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#disabled_timeout Service#disabled_timeout}
  */
  readonly disabledTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#dnsprofilename Service#dnsprofilename}
  */
  readonly dnsprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#downstateflush Service#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#graceful Service#graceful}
  */
  readonly graceful?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#hashid Service#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#healthmonitor Service#healthmonitor}
  */
  readonly healthmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#httpprofilename Service#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#id Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#internal Service#internal}
  */
  readonly internal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#ip Service#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#ipaddress Service#ipaddress}
  */
  readonly ipaddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#lbmonitor Service#lbmonitor}
  */
  readonly lbmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#lbvserver Service#lbvserver}
  */
  readonly lbvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#maxbandwidth Service#maxbandwidth}
  */
  readonly maxbandwidth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#maxclient Service#maxclient}
  */
  readonly maxclient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#maxreq Service#maxreq}
  */
  readonly maxreq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#monconnectionclose Service#monconnectionclose}
  */
  readonly monconnectionclose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#monitornamesvc Service#monitornamesvc}
  */
  readonly monitornamesvc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#monthreshold Service#monthreshold}
  */
  readonly monthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#name Service#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#netprofile Service#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#pathmonitor Service#pathmonitor}
  */
  readonly pathmonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#pathmonitorindv Service#pathmonitorindv}
  */
  readonly pathmonitorindv?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#port Service#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#processlocal Service#processlocal}
  */
  readonly processlocal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#riseapbrstatsmsgcode Service#riseapbrstatsmsgcode}
  */
  readonly riseapbrstatsmsgcode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#rtspsessionidremap Service#rtspsessionidremap}
  */
  readonly rtspsessionidremap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#serverid Service#serverid}
  */
  readonly serverid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#servername Service#servername}
  */
  readonly servername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#servicetype Service#servicetype}
  */
  readonly servicetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#snienable Service#snienable}
  */
  readonly snienable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#sp Service#sp}
  */
  readonly sp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#state Service#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#svrtimeout Service#svrtimeout}
  */
  readonly svrtimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#tcpb Service#tcpb}
  */
  readonly tcpb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#tcpprofilename Service#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#td Service#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#useproxyport Service#useproxyport}
  */
  readonly useproxyport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#usip Service#usip}
  */
  readonly usip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#wait_until_disabled Service#wait_until_disabled}
  */
  readonly waitUntilDisabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#weight Service#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service citrixadc_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/service citrixadc_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_service',
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
    this._accessdown = config.accessdown;
    this._all = config.all;
    this._appflowlog = config.appflowlog;
    this._cacheable = config.cacheable;
    this._cachetype = config.cachetype;
    this._cip = config.cip;
    this._cipheader = config.cipheader;
    this._cka = config.cka;
    this._cleartextport = config.cleartextport;
    this._clttimeout = config.clttimeout;
    this._cmp = config.cmp;
    this._comment = config.comment;
    this._commonname = config.commonname;
    this._contentinspectionprofilename = config.contentinspectionprofilename;
    this._customserverid = config.customserverid;
    this._delay = config.delay;
    this._disabledPollDelay = config.disabledPollDelay;
    this._disabledPollInterval = config.disabledPollInterval;
    this._disabledTimeout = config.disabledTimeout;
    this._dnsprofilename = config.dnsprofilename;
    this._downstateflush = config.downstateflush;
    this._graceful = config.graceful;
    this._hashid = config.hashid;
    this._healthmonitor = config.healthmonitor;
    this._httpprofilename = config.httpprofilename;
    this._id = config.id;
    this._internal = config.internal;
    this._ip = config.ip;
    this._ipaddress = config.ipaddress;
    this._lbmonitor = config.lbmonitor;
    this._lbvserver = config.lbvserver;
    this._maxbandwidth = config.maxbandwidth;
    this._maxclient = config.maxclient;
    this._maxreq = config.maxreq;
    this._monconnectionclose = config.monconnectionclose;
    this._monitornamesvc = config.monitornamesvc;
    this._monthreshold = config.monthreshold;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._pathmonitor = config.pathmonitor;
    this._pathmonitorindv = config.pathmonitorindv;
    this._port = config.port;
    this._processlocal = config.processlocal;
    this._riseapbrstatsmsgcode = config.riseapbrstatsmsgcode;
    this._rtspsessionidremap = config.rtspsessionidremap;
    this._serverid = config.serverid;
    this._servername = config.servername;
    this._servicetype = config.servicetype;
    this._snienable = config.snienable;
    this._sp = config.sp;
    this._state = config.state;
    this._svrtimeout = config.svrtimeout;
    this._tcpb = config.tcpb;
    this._tcpprofilename = config.tcpprofilename;
    this._td = config.td;
    this._useproxyport = config.useproxyport;
    this._usip = config.usip;
    this._waitUntilDisabled = config.waitUntilDisabled;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessdown - computed: true, optional: true, required: false
  private _accessdown?: string; 
  public get accessdown() {
    return this.getStringAttribute('accessdown');
  }
  public set accessdown(value: string) {
    this._accessdown = value;
  }
  public resetAccessdown() {
    this._accessdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessdownInput() {
    return this._accessdown;
  }

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

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

  // cleartextport - computed: true, optional: true, required: false
  private _cleartextport?: number; 
  public get cleartextport() {
    return this.getNumberAttribute('cleartextport');
  }
  public set cleartextport(value: number) {
    this._cleartextport = value;
  }
  public resetCleartextport() {
    this._cleartextport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextportInput() {
    return this._cleartextport;
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

  // commonname - computed: true, optional: true, required: false
  private _commonname?: string; 
  public get commonname() {
    return this.getStringAttribute('commonname');
  }
  public set commonname(value: string) {
    this._commonname = value;
  }
  public resetCommonname() {
    this._commonname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonnameInput() {
    return this._commonname;
  }

  // contentinspectionprofilename - computed: true, optional: true, required: false
  private _contentinspectionprofilename?: string; 
  public get contentinspectionprofilename() {
    return this.getStringAttribute('contentinspectionprofilename');
  }
  public set contentinspectionprofilename(value: string) {
    this._contentinspectionprofilename = value;
  }
  public resetContentinspectionprofilename() {
    this._contentinspectionprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentinspectionprofilenameInput() {
    return this._contentinspectionprofilename;
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

  // disabled_poll_delay - computed: false, optional: true, required: false
  private _disabledPollDelay?: string; 
  public get disabledPollDelay() {
    return this.getStringAttribute('disabled_poll_delay');
  }
  public set disabledPollDelay(value: string) {
    this._disabledPollDelay = value;
  }
  public resetDisabledPollDelay() {
    this._disabledPollDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledPollDelayInput() {
    return this._disabledPollDelay;
  }

  // disabled_poll_interval - computed: false, optional: true, required: false
  private _disabledPollInterval?: string; 
  public get disabledPollInterval() {
    return this.getStringAttribute('disabled_poll_interval');
  }
  public set disabledPollInterval(value: string) {
    this._disabledPollInterval = value;
  }
  public resetDisabledPollInterval() {
    this._disabledPollInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledPollIntervalInput() {
    return this._disabledPollInterval;
  }

  // disabled_timeout - computed: false, optional: true, required: false
  private _disabledTimeout?: string; 
  public get disabledTimeout() {
    return this.getStringAttribute('disabled_timeout');
  }
  public set disabledTimeout(value: string) {
    this._disabledTimeout = value;
  }
  public resetDisabledTimeout() {
    this._disabledTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledTimeoutInput() {
    return this._disabledTimeout;
  }

  // dnsprofilename - computed: true, optional: true, required: false
  private _dnsprofilename?: string; 
  public get dnsprofilename() {
    return this.getStringAttribute('dnsprofilename');
  }
  public set dnsprofilename(value: string) {
    this._dnsprofilename = value;
  }
  public resetDnsprofilename() {
    this._dnsprofilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsprofilenameInput() {
    return this._dnsprofilename;
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

  // internal - computed: true, optional: true, required: false
  private _internal?: boolean | cdktf.IResolvable; 
  public get internal() {
    return this.getBooleanAttribute('internal');
  }
  public set internal(value: boolean | cdktf.IResolvable) {
    this._internal = value;
  }
  public resetInternal() {
    this._internal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipaddress - computed: true, optional: true, required: false
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  public resetIpaddress() {
    this._ipaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // lbmonitor - computed: true, optional: true, required: false
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

  // lbvserver - computed: false, optional: true, required: false
  private _lbvserver?: string; 
  public get lbvserver() {
    return this.getStringAttribute('lbvserver');
  }
  public set lbvserver(value: string) {
    this._lbvserver = value;
  }
  public resetLbvserver() {
    this._lbvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbvserverInput() {
    return this._lbvserver;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // processlocal - computed: true, optional: true, required: false
  private _processlocal?: string; 
  public get processlocal() {
    return this.getStringAttribute('processlocal');
  }
  public set processlocal(value: string) {
    this._processlocal = value;
  }
  public resetProcesslocal() {
    this._processlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processlocalInput() {
    return this._processlocal;
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

  // snienable - computed: true, optional: true, required: false
  private _snienable?: string; 
  public get snienable() {
    return this.getStringAttribute('snienable');
  }
  public set snienable(value: string) {
    this._snienable = value;
  }
  public resetSnienable() {
    this._snienable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snienableInput() {
    return this._snienable;
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

  // wait_until_disabled - computed: true, optional: true, required: false
  private _waitUntilDisabled?: boolean | cdktf.IResolvable; 
  public get waitUntilDisabled() {
    return this.getBooleanAttribute('wait_until_disabled');
  }
  public set waitUntilDisabled(value: boolean | cdktf.IResolvable) {
    this._waitUntilDisabled = value;
  }
  public resetWaitUntilDisabled() {
    this._waitUntilDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilDisabledInput() {
    return this._waitUntilDisabled;
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
      accessdown: cdktf.stringToTerraform(this._accessdown),
      all: cdktf.booleanToTerraform(this._all),
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      cacheable: cdktf.stringToTerraform(this._cacheable),
      cachetype: cdktf.stringToTerraform(this._cachetype),
      cip: cdktf.stringToTerraform(this._cip),
      cipheader: cdktf.stringToTerraform(this._cipheader),
      cka: cdktf.stringToTerraform(this._cka),
      cleartextport: cdktf.numberToTerraform(this._cleartextport),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      cmp: cdktf.stringToTerraform(this._cmp),
      comment: cdktf.stringToTerraform(this._comment),
      commonname: cdktf.stringToTerraform(this._commonname),
      contentinspectionprofilename: cdktf.stringToTerraform(this._contentinspectionprofilename),
      customserverid: cdktf.stringToTerraform(this._customserverid),
      delay: cdktf.numberToTerraform(this._delay),
      disabled_poll_delay: cdktf.stringToTerraform(this._disabledPollDelay),
      disabled_poll_interval: cdktf.stringToTerraform(this._disabledPollInterval),
      disabled_timeout: cdktf.stringToTerraform(this._disabledTimeout),
      dnsprofilename: cdktf.stringToTerraform(this._dnsprofilename),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      graceful: cdktf.stringToTerraform(this._graceful),
      hashid: cdktf.numberToTerraform(this._hashid),
      healthmonitor: cdktf.stringToTerraform(this._healthmonitor),
      httpprofilename: cdktf.stringToTerraform(this._httpprofilename),
      id: cdktf.stringToTerraform(this._id),
      internal: cdktf.booleanToTerraform(this._internal),
      ip: cdktf.stringToTerraform(this._ip),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      lbmonitor: cdktf.stringToTerraform(this._lbmonitor),
      lbvserver: cdktf.stringToTerraform(this._lbvserver),
      maxbandwidth: cdktf.numberToTerraform(this._maxbandwidth),
      maxclient: cdktf.numberToTerraform(this._maxclient),
      maxreq: cdktf.numberToTerraform(this._maxreq),
      monconnectionclose: cdktf.stringToTerraform(this._monconnectionclose),
      monitornamesvc: cdktf.stringToTerraform(this._monitornamesvc),
      monthreshold: cdktf.numberToTerraform(this._monthreshold),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      pathmonitor: cdktf.stringToTerraform(this._pathmonitor),
      pathmonitorindv: cdktf.stringToTerraform(this._pathmonitorindv),
      port: cdktf.numberToTerraform(this._port),
      processlocal: cdktf.stringToTerraform(this._processlocal),
      riseapbrstatsmsgcode: cdktf.numberToTerraform(this._riseapbrstatsmsgcode),
      rtspsessionidremap: cdktf.stringToTerraform(this._rtspsessionidremap),
      serverid: cdktf.numberToTerraform(this._serverid),
      servername: cdktf.stringToTerraform(this._servername),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      snienable: cdktf.stringToTerraform(this._snienable),
      sp: cdktf.stringToTerraform(this._sp),
      state: cdktf.stringToTerraform(this._state),
      svrtimeout: cdktf.numberToTerraform(this._svrtimeout),
      tcpb: cdktf.stringToTerraform(this._tcpb),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      td: cdktf.numberToTerraform(this._td),
      useproxyport: cdktf.stringToTerraform(this._useproxyport),
      usip: cdktf.stringToTerraform(this._usip),
      wait_until_disabled: cdktf.booleanToTerraform(this._waitUntilDisabled),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accessdown: {
        value: cdktf.stringToHclTerraform(this._accessdown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
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
      cleartextport: {
        value: cdktf.numberToHclTerraform(this._cleartextport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      commonname: {
        value: cdktf.stringToHclTerraform(this._commonname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contentinspectionprofilename: {
        value: cdktf.stringToHclTerraform(this._contentinspectionprofilename),
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
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disabled_poll_delay: {
        value: cdktf.stringToHclTerraform(this._disabledPollDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_poll_interval: {
        value: cdktf.stringToHclTerraform(this._disabledPollInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled_timeout: {
        value: cdktf.stringToHclTerraform(this._disabledTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsprofilename: {
        value: cdktf.stringToHclTerraform(this._dnsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstateflush: {
        value: cdktf.stringToHclTerraform(this._downstateflush),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      internal: {
        value: cdktf.booleanToHclTerraform(this._internal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbmonitor: {
        value: cdktf.stringToHclTerraform(this._lbmonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lbvserver: {
        value: cdktf.stringToHclTerraform(this._lbvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      processlocal: {
        value: cdktf.stringToHclTerraform(this._processlocal),
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
      servicetype: {
        value: cdktf.stringToHclTerraform(this._servicetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snienable: {
        value: cdktf.stringToHclTerraform(this._snienable),
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
      wait_until_disabled: {
        value: cdktf.booleanToHclTerraform(this._waitUntilDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
