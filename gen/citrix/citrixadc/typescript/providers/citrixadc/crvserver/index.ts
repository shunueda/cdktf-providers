// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CrvserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#appflowlog Crvserver#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#arp Crvserver#arp}
  */
  readonly arp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#backendssl Crvserver#backendssl}
  */
  readonly backendssl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#backupvserver Crvserver#backupvserver}
  */
  readonly backupvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#cachetype Crvserver#cachetype}
  */
  readonly cachetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#cachevserver Crvserver#cachevserver}
  */
  readonly cachevserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#clttimeout Crvserver#clttimeout}
  */
  readonly clttimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#comment Crvserver#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#destinationvserver Crvserver#destinationvserver}
  */
  readonly destinationvserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#disableprimaryondown Crvserver#disableprimaryondown}
  */
  readonly disableprimaryondown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#disallowserviceaccess Crvserver#disallowserviceaccess}
  */
  readonly disallowserviceaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#dnsvservername Crvserver#dnsvservername}
  */
  readonly dnsvservername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#domain Crvserver#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#downstateflush Crvserver#downstateflush}
  */
  readonly downstateflush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#format Crvserver#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#ghost Crvserver#ghost}
  */
  readonly ghost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#httpprofilename Crvserver#httpprofilename}
  */
  readonly httpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#icmpvsrresponse Crvserver#icmpvsrresponse}
  */
  readonly icmpvsrresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#id Crvserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#ipset Crvserver#ipset}
  */
  readonly ipset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#ipv46 Crvserver#ipv46}
  */
  readonly ipv46?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#l2conn Crvserver#l2conn}
  */
  readonly l2Conn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#listenpolicy Crvserver#listenpolicy}
  */
  readonly listenpolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#listenpriority Crvserver#listenpriority}
  */
  readonly listenpriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#map Crvserver#map}
  */
  readonly map?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#name Crvserver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#netprofile Crvserver#netprofile}
  */
  readonly netprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#onpolicymatch Crvserver#onpolicymatch}
  */
  readonly onpolicymatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#originusip Crvserver#originusip}
  */
  readonly originusip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#port Crvserver#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#precedence Crvserver#precedence}
  */
  readonly precedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#probeport Crvserver#probeport}
  */
  readonly probeport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#probeprotocol Crvserver#probeprotocol}
  */
  readonly probeprotocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#probesuccessresponsecode Crvserver#probesuccessresponsecode}
  */
  readonly probesuccessresponsecode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#range Crvserver#range}
  */
  readonly range?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#redirect Crvserver#redirect}
  */
  readonly redirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#redirecturl Crvserver#redirecturl}
  */
  readonly redirecturl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#reuse Crvserver#reuse}
  */
  readonly reuse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#rhistate Crvserver#rhistate}
  */
  readonly rhistate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#servicetype Crvserver#servicetype}
  */
  readonly servicetype: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#sopersistencetimeout Crvserver#sopersistencetimeout}
  */
  readonly sopersistencetimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#sothreshold Crvserver#sothreshold}
  */
  readonly sothreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#srcipexpr Crvserver#srcipexpr}
  */
  readonly srcipexpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#state Crvserver#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#tcpprobeport Crvserver#tcpprobeport}
  */
  readonly tcpprobeport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#tcpprofilename Crvserver#tcpprofilename}
  */
  readonly tcpprofilename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#td Crvserver#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#useoriginipportforcache Crvserver#useoriginipportforcache}
  */
  readonly useoriginipportforcache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#useportrange Crvserver#useportrange}
  */
  readonly useportrange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#via Crvserver#via}
  */
  readonly via?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver citrixadc_crvserver}
*/
export class Crvserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_crvserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Crvserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Crvserver to import
  * @param importFromId The id of the existing Crvserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Crvserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_crvserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/crvserver citrixadc_crvserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CrvserverConfig
  */
  public constructor(scope: Construct, id: string, config: CrvserverConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_crvserver',
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
    this._appflowlog = config.appflowlog;
    this._arp = config.arp;
    this._backendssl = config.backendssl;
    this._backupvserver = config.backupvserver;
    this._cachetype = config.cachetype;
    this._cachevserver = config.cachevserver;
    this._clttimeout = config.clttimeout;
    this._comment = config.comment;
    this._destinationvserver = config.destinationvserver;
    this._disableprimaryondown = config.disableprimaryondown;
    this._disallowserviceaccess = config.disallowserviceaccess;
    this._dnsvservername = config.dnsvservername;
    this._domain = config.domain;
    this._downstateflush = config.downstateflush;
    this._format = config.format;
    this._ghost = config.ghost;
    this._httpprofilename = config.httpprofilename;
    this._icmpvsrresponse = config.icmpvsrresponse;
    this._id = config.id;
    this._ipset = config.ipset;
    this._ipv46 = config.ipv46;
    this._l2Conn = config.l2Conn;
    this._listenpolicy = config.listenpolicy;
    this._listenpriority = config.listenpriority;
    this._map = config.map;
    this._name = config.name;
    this._netprofile = config.netprofile;
    this._onpolicymatch = config.onpolicymatch;
    this._originusip = config.originusip;
    this._port = config.port;
    this._precedence = config.precedence;
    this._probeport = config.probeport;
    this._probeprotocol = config.probeprotocol;
    this._probesuccessresponsecode = config.probesuccessresponsecode;
    this._range = config.range;
    this._redirect = config.redirect;
    this._redirecturl = config.redirecturl;
    this._reuse = config.reuse;
    this._rhistate = config.rhistate;
    this._servicetype = config.servicetype;
    this._sopersistencetimeout = config.sopersistencetimeout;
    this._sothreshold = config.sothreshold;
    this._srcipexpr = config.srcipexpr;
    this._state = config.state;
    this._tcpprobeport = config.tcpprobeport;
    this._tcpprofilename = config.tcpprofilename;
    this._td = config.td;
    this._useoriginipportforcache = config.useoriginipportforcache;
    this._useportrange = config.useportrange;
    this._via = config.via;
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

  // arp - computed: true, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // backendssl - computed: true, optional: true, required: false
  private _backendssl?: string; 
  public get backendssl() {
    return this.getStringAttribute('backendssl');
  }
  public set backendssl(value: string) {
    this._backendssl = value;
  }
  public resetBackendssl() {
    this._backendssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsslInput() {
    return this._backendssl;
  }

  // backupvserver - computed: true, optional: true, required: false
  private _backupvserver?: string; 
  public get backupvserver() {
    return this.getStringAttribute('backupvserver');
  }
  public set backupvserver(value: string) {
    this._backupvserver = value;
  }
  public resetBackupvserver() {
    this._backupvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupvserverInput() {
    return this._backupvserver;
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

  // cachevserver - computed: true, optional: true, required: false
  private _cachevserver?: string; 
  public get cachevserver() {
    return this.getStringAttribute('cachevserver');
  }
  public set cachevserver(value: string) {
    this._cachevserver = value;
  }
  public resetCachevserver() {
    this._cachevserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachevserverInput() {
    return this._cachevserver;
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

  // destinationvserver - computed: true, optional: true, required: false
  private _destinationvserver?: string; 
  public get destinationvserver() {
    return this.getStringAttribute('destinationvserver');
  }
  public set destinationvserver(value: string) {
    this._destinationvserver = value;
  }
  public resetDestinationvserver() {
    this._destinationvserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationvserverInput() {
    return this._destinationvserver;
  }

  // disableprimaryondown - computed: true, optional: true, required: false
  private _disableprimaryondown?: string; 
  public get disableprimaryondown() {
    return this.getStringAttribute('disableprimaryondown');
  }
  public set disableprimaryondown(value: string) {
    this._disableprimaryondown = value;
  }
  public resetDisableprimaryondown() {
    this._disableprimaryondown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableprimaryondownInput() {
    return this._disableprimaryondown;
  }

  // disallowserviceaccess - computed: true, optional: true, required: false
  private _disallowserviceaccess?: string; 
  public get disallowserviceaccess() {
    return this.getStringAttribute('disallowserviceaccess');
  }
  public set disallowserviceaccess(value: string) {
    this._disallowserviceaccess = value;
  }
  public resetDisallowserviceaccess() {
    this._disallowserviceaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowserviceaccessInput() {
    return this._disallowserviceaccess;
  }

  // dnsvservername - computed: true, optional: true, required: false
  private _dnsvservername?: string; 
  public get dnsvservername() {
    return this.getStringAttribute('dnsvservername');
  }
  public set dnsvservername(value: string) {
    this._dnsvservername = value;
  }
  public resetDnsvservername() {
    this._dnsvservername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsvservernameInput() {
    return this._dnsvservername;
  }

  // domain - computed: true, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // ghost - computed: true, optional: true, required: false
  private _ghost?: string; 
  public get ghost() {
    return this.getStringAttribute('ghost');
  }
  public set ghost(value: string) {
    this._ghost = value;
  }
  public resetGhost() {
    this._ghost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ghostInput() {
    return this._ghost;
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

  // icmpvsrresponse - computed: true, optional: true, required: false
  private _icmpvsrresponse?: string; 
  public get icmpvsrresponse() {
    return this.getStringAttribute('icmpvsrresponse');
  }
  public set icmpvsrresponse(value: string) {
    this._icmpvsrresponse = value;
  }
  public resetIcmpvsrresponse() {
    this._icmpvsrresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpvsrresponseInput() {
    return this._icmpvsrresponse;
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

  // ipset - computed: true, optional: true, required: false
  private _ipset?: string; 
  public get ipset() {
    return this.getStringAttribute('ipset');
  }
  public set ipset(value: string) {
    this._ipset = value;
  }
  public resetIpset() {
    this._ipset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsetInput() {
    return this._ipset;
  }

  // ipv46 - computed: true, optional: true, required: false
  private _ipv46?: string; 
  public get ipv46() {
    return this.getStringAttribute('ipv46');
  }
  public set ipv46(value: string) {
    this._ipv46 = value;
  }
  public resetIpv46() {
    this._ipv46 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv46Input() {
    return this._ipv46;
  }

  // l2conn - computed: true, optional: true, required: false
  private _l2Conn?: string; 
  public get l2Conn() {
    return this.getStringAttribute('l2conn');
  }
  public set l2Conn(value: string) {
    this._l2Conn = value;
  }
  public resetL2Conn() {
    this._l2Conn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ConnInput() {
    return this._l2Conn;
  }

  // listenpolicy - computed: true, optional: true, required: false
  private _listenpolicy?: string; 
  public get listenpolicy() {
    return this.getStringAttribute('listenpolicy');
  }
  public set listenpolicy(value: string) {
    this._listenpolicy = value;
  }
  public resetListenpolicy() {
    this._listenpolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpolicyInput() {
    return this._listenpolicy;
  }

  // listenpriority - computed: true, optional: true, required: false
  private _listenpriority?: number; 
  public get listenpriority() {
    return this.getNumberAttribute('listenpriority');
  }
  public set listenpriority(value: number) {
    this._listenpriority = value;
  }
  public resetListenpriority() {
    this._listenpriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenpriorityInput() {
    return this._listenpriority;
  }

  // map - computed: true, optional: true, required: false
  private _map?: string; 
  public get map() {
    return this.getStringAttribute('map');
  }
  public set map(value: string) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // onpolicymatch - computed: true, optional: true, required: false
  private _onpolicymatch?: string; 
  public get onpolicymatch() {
    return this.getStringAttribute('onpolicymatch');
  }
  public set onpolicymatch(value: string) {
    this._onpolicymatch = value;
  }
  public resetOnpolicymatch() {
    this._onpolicymatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpolicymatchInput() {
    return this._onpolicymatch;
  }

  // originusip - computed: true, optional: true, required: false
  private _originusip?: string; 
  public get originusip() {
    return this.getStringAttribute('originusip');
  }
  public set originusip(value: string) {
    this._originusip = value;
  }
  public resetOriginusip() {
    this._originusip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originusipInput() {
    return this._originusip;
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

  // precedence - computed: true, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // probeport - computed: true, optional: true, required: false
  private _probeport?: number; 
  public get probeport() {
    return this.getNumberAttribute('probeport');
  }
  public set probeport(value: number) {
    this._probeport = value;
  }
  public resetProbeport() {
    this._probeport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeportInput() {
    return this._probeport;
  }

  // probeprotocol - computed: true, optional: true, required: false
  private _probeprotocol?: string; 
  public get probeprotocol() {
    return this.getStringAttribute('probeprotocol');
  }
  public set probeprotocol(value: string) {
    this._probeprotocol = value;
  }
  public resetProbeprotocol() {
    this._probeprotocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeprotocolInput() {
    return this._probeprotocol;
  }

  // probesuccessresponsecode - computed: true, optional: true, required: false
  private _probesuccessresponsecode?: string; 
  public get probesuccessresponsecode() {
    return this.getStringAttribute('probesuccessresponsecode');
  }
  public set probesuccessresponsecode(value: string) {
    this._probesuccessresponsecode = value;
  }
  public resetProbesuccessresponsecode() {
    this._probesuccessresponsecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probesuccessresponsecodeInput() {
    return this._probesuccessresponsecode;
  }

  // range - computed: true, optional: true, required: false
  private _range?: number; 
  public get range() {
    return this.getNumberAttribute('range');
  }
  public set range(value: number) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // redirect - computed: true, optional: true, required: false
  private _redirect?: string; 
  public get redirect() {
    return this.getStringAttribute('redirect');
  }
  public set redirect(value: string) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // redirecturl - computed: true, optional: true, required: false
  private _redirecturl?: string; 
  public get redirecturl() {
    return this.getStringAttribute('redirecturl');
  }
  public set redirecturl(value: string) {
    this._redirecturl = value;
  }
  public resetRedirecturl() {
    this._redirecturl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirecturlInput() {
    return this._redirecturl;
  }

  // reuse - computed: true, optional: true, required: false
  private _reuse?: string; 
  public get reuse() {
    return this.getStringAttribute('reuse');
  }
  public set reuse(value: string) {
    this._reuse = value;
  }
  public resetReuse() {
    this._reuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseInput() {
    return this._reuse;
  }

  // rhistate - computed: true, optional: true, required: false
  private _rhistate?: string; 
  public get rhistate() {
    return this.getStringAttribute('rhistate');
  }
  public set rhistate(value: string) {
    this._rhistate = value;
  }
  public resetRhistate() {
    this._rhistate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhistateInput() {
    return this._rhistate;
  }

  // servicetype - computed: false, optional: false, required: true
  private _servicetype?: string; 
  public get servicetype() {
    return this.getStringAttribute('servicetype');
  }
  public set servicetype(value: string) {
    this._servicetype = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicetypeInput() {
    return this._servicetype;
  }

  // sopersistencetimeout - computed: true, optional: true, required: false
  private _sopersistencetimeout?: number; 
  public get sopersistencetimeout() {
    return this.getNumberAttribute('sopersistencetimeout');
  }
  public set sopersistencetimeout(value: number) {
    this._sopersistencetimeout = value;
  }
  public resetSopersistencetimeout() {
    this._sopersistencetimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sopersistencetimeoutInput() {
    return this._sopersistencetimeout;
  }

  // sothreshold - computed: true, optional: true, required: false
  private _sothreshold?: number; 
  public get sothreshold() {
    return this.getNumberAttribute('sothreshold');
  }
  public set sothreshold(value: number) {
    this._sothreshold = value;
  }
  public resetSothreshold() {
    this._sothreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sothresholdInput() {
    return this._sothreshold;
  }

  // srcipexpr - computed: true, optional: true, required: false
  private _srcipexpr?: string; 
  public get srcipexpr() {
    return this.getStringAttribute('srcipexpr');
  }
  public set srcipexpr(value: string) {
    this._srcipexpr = value;
  }
  public resetSrcipexpr() {
    this._srcipexpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipexprInput() {
    return this._srcipexpr;
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

  // tcpprobeport - computed: true, optional: true, required: false
  private _tcpprobeport?: number; 
  public get tcpprobeport() {
    return this.getNumberAttribute('tcpprobeport');
  }
  public set tcpprobeport(value: number) {
    this._tcpprobeport = value;
  }
  public resetTcpprobeport() {
    this._tcpprobeport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpprobeportInput() {
    return this._tcpprobeport;
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

  // useoriginipportforcache - computed: true, optional: true, required: false
  private _useoriginipportforcache?: string; 
  public get useoriginipportforcache() {
    return this.getStringAttribute('useoriginipportforcache');
  }
  public set useoriginipportforcache(value: string) {
    this._useoriginipportforcache = value;
  }
  public resetUseoriginipportforcache() {
    this._useoriginipportforcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useoriginipportforcacheInput() {
    return this._useoriginipportforcache;
  }

  // useportrange - computed: true, optional: true, required: false
  private _useportrange?: string; 
  public get useportrange() {
    return this.getStringAttribute('useportrange');
  }
  public set useportrange(value: string) {
    this._useportrange = value;
  }
  public resetUseportrange() {
    this._useportrange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useportrangeInput() {
    return this._useportrange;
  }

  // via - computed: true, optional: true, required: false
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  public resetVia() {
    this._via = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      arp: cdktf.stringToTerraform(this._arp),
      backendssl: cdktf.stringToTerraform(this._backendssl),
      backupvserver: cdktf.stringToTerraform(this._backupvserver),
      cachetype: cdktf.stringToTerraform(this._cachetype),
      cachevserver: cdktf.stringToTerraform(this._cachevserver),
      clttimeout: cdktf.numberToTerraform(this._clttimeout),
      comment: cdktf.stringToTerraform(this._comment),
      destinationvserver: cdktf.stringToTerraform(this._destinationvserver),
      disableprimaryondown: cdktf.stringToTerraform(this._disableprimaryondown),
      disallowserviceaccess: cdktf.stringToTerraform(this._disallowserviceaccess),
      dnsvservername: cdktf.stringToTerraform(this._dnsvservername),
      domain: cdktf.stringToTerraform(this._domain),
      downstateflush: cdktf.stringToTerraform(this._downstateflush),
      format: cdktf.stringToTerraform(this._format),
      ghost: cdktf.stringToTerraform(this._ghost),
      httpprofilename: cdktf.stringToTerraform(this._httpprofilename),
      icmpvsrresponse: cdktf.stringToTerraform(this._icmpvsrresponse),
      id: cdktf.stringToTerraform(this._id),
      ipset: cdktf.stringToTerraform(this._ipset),
      ipv46: cdktf.stringToTerraform(this._ipv46),
      l2conn: cdktf.stringToTerraform(this._l2Conn),
      listenpolicy: cdktf.stringToTerraform(this._listenpolicy),
      listenpriority: cdktf.numberToTerraform(this._listenpriority),
      map: cdktf.stringToTerraform(this._map),
      name: cdktf.stringToTerraform(this._name),
      netprofile: cdktf.stringToTerraform(this._netprofile),
      onpolicymatch: cdktf.stringToTerraform(this._onpolicymatch),
      originusip: cdktf.stringToTerraform(this._originusip),
      port: cdktf.numberToTerraform(this._port),
      precedence: cdktf.stringToTerraform(this._precedence),
      probeport: cdktf.numberToTerraform(this._probeport),
      probeprotocol: cdktf.stringToTerraform(this._probeprotocol),
      probesuccessresponsecode: cdktf.stringToTerraform(this._probesuccessresponsecode),
      range: cdktf.numberToTerraform(this._range),
      redirect: cdktf.stringToTerraform(this._redirect),
      redirecturl: cdktf.stringToTerraform(this._redirecturl),
      reuse: cdktf.stringToTerraform(this._reuse),
      rhistate: cdktf.stringToTerraform(this._rhistate),
      servicetype: cdktf.stringToTerraform(this._servicetype),
      sopersistencetimeout: cdktf.numberToTerraform(this._sopersistencetimeout),
      sothreshold: cdktf.numberToTerraform(this._sothreshold),
      srcipexpr: cdktf.stringToTerraform(this._srcipexpr),
      state: cdktf.stringToTerraform(this._state),
      tcpprobeport: cdktf.numberToTerraform(this._tcpprobeport),
      tcpprofilename: cdktf.stringToTerraform(this._tcpprofilename),
      td: cdktf.numberToTerraform(this._td),
      useoriginipportforcache: cdktf.stringToTerraform(this._useoriginipportforcache),
      useportrange: cdktf.stringToTerraform(this._useportrange),
      via: cdktf.stringToTerraform(this._via),
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
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backendssl: {
        value: cdktf.stringToHclTerraform(this._backendssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backupvserver: {
        value: cdktf.stringToHclTerraform(this._backupvserver),
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
      cachevserver: {
        value: cdktf.stringToHclTerraform(this._cachevserver),
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
      destinationvserver: {
        value: cdktf.stringToHclTerraform(this._destinationvserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disableprimaryondown: {
        value: cdktf.stringToHclTerraform(this._disableprimaryondown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disallowserviceaccess: {
        value: cdktf.stringToHclTerraform(this._disallowserviceaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dnsvservername: {
        value: cdktf.stringToHclTerraform(this._dnsvservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      format: {
        value: cdktf.stringToHclTerraform(this._format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ghost: {
        value: cdktf.stringToHclTerraform(this._ghost),
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
      icmpvsrresponse: {
        value: cdktf.stringToHclTerraform(this._icmpvsrresponse),
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
      ipset: {
        value: cdktf.stringToHclTerraform(this._ipset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv46: {
        value: cdktf.stringToHclTerraform(this._ipv46),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2conn: {
        value: cdktf.stringToHclTerraform(this._l2Conn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpolicy: {
        value: cdktf.stringToHclTerraform(this._listenpolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listenpriority: {
        value: cdktf.numberToHclTerraform(this._listenpriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      map: {
        value: cdktf.stringToHclTerraform(this._map),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      onpolicymatch: {
        value: cdktf.stringToHclTerraform(this._onpolicymatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      originusip: {
        value: cdktf.stringToHclTerraform(this._originusip),
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
      precedence: {
        value: cdktf.stringToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probeport: {
        value: cdktf.numberToHclTerraform(this._probeport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      probeprotocol: {
        value: cdktf.stringToHclTerraform(this._probeprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      probesuccessresponsecode: {
        value: cdktf.stringToHclTerraform(this._probesuccessresponsecode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.numberToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      redirect: {
        value: cdktf.stringToHclTerraform(this._redirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirecturl: {
        value: cdktf.stringToHclTerraform(this._redirecturl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse: {
        value: cdktf.stringToHclTerraform(this._reuse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rhistate: {
        value: cdktf.stringToHclTerraform(this._rhistate),
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
      sopersistencetimeout: {
        value: cdktf.numberToHclTerraform(this._sopersistencetimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sothreshold: {
        value: cdktf.numberToHclTerraform(this._sothreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      srcipexpr: {
        value: cdktf.stringToHclTerraform(this._srcipexpr),
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
      tcpprobeport: {
        value: cdktf.numberToHclTerraform(this._tcpprobeport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      useoriginipportforcache: {
        value: cdktf.stringToHclTerraform(this._useoriginipportforcache),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      useportrange: {
        value: cdktf.stringToHclTerraform(this._useportrange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      via: {
        value: cdktf.stringToHclTerraform(this._via),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
