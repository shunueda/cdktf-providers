// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nsip6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#advertiseondefaultpartition Nsip6#advertiseondefaultpartition}
  */
  readonly advertiseondefaultpartition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#decrementhoplimit Nsip6#decrementhoplimit}
  */
  readonly decrementhoplimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#dynamicrouting Nsip6#dynamicrouting}
  */
  readonly dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ftp Nsip6#ftp}
  */
  readonly ftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#gui Nsip6#gui}
  */
  readonly gui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#hostroute Nsip6#hostroute}
  */
  readonly hostroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#icmp Nsip6#icmp}
  */
  readonly icmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#id Nsip6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ip6hostrtgw Nsip6#ip6hostrtgw}
  */
  readonly ip6Hostrtgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ipv6address Nsip6#ipv6address}
  */
  readonly ipv6Address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#map Nsip6#map}
  */
  readonly map?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#metric Nsip6#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#mgmtaccess Nsip6#mgmtaccess}
  */
  readonly mgmtaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#mptcpadvertise Nsip6#mptcpadvertise}
  */
  readonly mptcpadvertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#nd Nsip6#nd}
  */
  readonly nd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#networkroute Nsip6#networkroute}
  */
  readonly networkroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ospf6lsatype Nsip6#ospf6lsatype}
  */
  readonly ospf6Lsatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ospfarea Nsip6#ospfarea}
  */
  readonly ospfarea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ownerdownresponse Nsip6#ownerdownresponse}
  */
  readonly ownerdownresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ownernode Nsip6#ownernode}
  */
  readonly ownernode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#restrictaccess Nsip6#restrictaccess}
  */
  readonly restrictaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#scope Nsip6#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#snmp Nsip6#snmp}
  */
  readonly snmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#ssh Nsip6#ssh}
  */
  readonly ssh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#state Nsip6#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#tag Nsip6#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#td Nsip6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#telnet Nsip6#telnet}
  */
  readonly telnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#type Nsip6#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#vlan Nsip6#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#vrid6 Nsip6#vrid6}
  */
  readonly vrid6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#vserver Nsip6#vserver}
  */
  readonly vserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#vserverrhilevel Nsip6#vserverrhilevel}
  */
  readonly vserverrhilevel?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6 citrixadc_nsip6}
*/
export class Nsip6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsip6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsip6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsip6 to import
  * @param importFromId The id of the existing Nsip6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsip6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsip6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip6 citrixadc_nsip6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nsip6Config
  */
  public constructor(scope: Construct, id: string, config: Nsip6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsip6',
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
    this._advertiseondefaultpartition = config.advertiseondefaultpartition;
    this._decrementhoplimit = config.decrementhoplimit;
    this._dynamicrouting = config.dynamicrouting;
    this._ftp = config.ftp;
    this._gui = config.gui;
    this._hostroute = config.hostroute;
    this._icmp = config.icmp;
    this._id = config.id;
    this._ip6Hostrtgw = config.ip6Hostrtgw;
    this._ipv6Address = config.ipv6Address;
    this._map = config.map;
    this._metric = config.metric;
    this._mgmtaccess = config.mgmtaccess;
    this._mptcpadvertise = config.mptcpadvertise;
    this._nd = config.nd;
    this._networkroute = config.networkroute;
    this._ospf6Lsatype = config.ospf6Lsatype;
    this._ospfarea = config.ospfarea;
    this._ownerdownresponse = config.ownerdownresponse;
    this._ownernode = config.ownernode;
    this._restrictaccess = config.restrictaccess;
    this._scope = config.scope;
    this._snmp = config.snmp;
    this._ssh = config.ssh;
    this._state = config.state;
    this._tag = config.tag;
    this._td = config.td;
    this._telnet = config.telnet;
    this._type = config.type;
    this._vlan = config.vlan;
    this._vrid6 = config.vrid6;
    this._vserver = config.vserver;
    this._vserverrhilevel = config.vserverrhilevel;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertiseondefaultpartition - computed: true, optional: true, required: false
  private _advertiseondefaultpartition?: string; 
  public get advertiseondefaultpartition() {
    return this.getStringAttribute('advertiseondefaultpartition');
  }
  public set advertiseondefaultpartition(value: string) {
    this._advertiseondefaultpartition = value;
  }
  public resetAdvertiseondefaultpartition() {
    this._advertiseondefaultpartition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseondefaultpartitionInput() {
    return this._advertiseondefaultpartition;
  }

  // decrementhoplimit - computed: true, optional: true, required: false
  private _decrementhoplimit?: string; 
  public get decrementhoplimit() {
    return this.getStringAttribute('decrementhoplimit');
  }
  public set decrementhoplimit(value: string) {
    this._decrementhoplimit = value;
  }
  public resetDecrementhoplimit() {
    this._decrementhoplimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementhoplimitInput() {
    return this._decrementhoplimit;
  }

  // dynamicrouting - computed: true, optional: true, required: false
  private _dynamicrouting?: string; 
  public get dynamicrouting() {
    return this.getStringAttribute('dynamicrouting');
  }
  public set dynamicrouting(value: string) {
    this._dynamicrouting = value;
  }
  public resetDynamicrouting() {
    this._dynamicrouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicroutingInput() {
    return this._dynamicrouting;
  }

  // ftp - computed: true, optional: true, required: false
  private _ftp?: string; 
  public get ftp() {
    return this.getStringAttribute('ftp');
  }
  public set ftp(value: string) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // gui - computed: true, optional: true, required: false
  private _gui?: string; 
  public get gui() {
    return this.getStringAttribute('gui');
  }
  public set gui(value: string) {
    this._gui = value;
  }
  public resetGui() {
    this._gui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiInput() {
    return this._gui;
  }

  // hostroute - computed: true, optional: true, required: false
  private _hostroute?: string; 
  public get hostroute() {
    return this.getStringAttribute('hostroute');
  }
  public set hostroute(value: string) {
    this._hostroute = value;
  }
  public resetHostroute() {
    this._hostroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostrouteInput() {
    return this._hostroute;
  }

  // icmp - computed: true, optional: true, required: false
  private _icmp?: string; 
  public get icmp() {
    return this.getStringAttribute('icmp');
  }
  public set icmp(value: string) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
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

  // ip6hostrtgw - computed: true, optional: true, required: false
  private _ip6Hostrtgw?: string; 
  public get ip6Hostrtgw() {
    return this.getStringAttribute('ip6hostrtgw');
  }
  public set ip6Hostrtgw(value: string) {
    this._ip6Hostrtgw = value;
  }
  public resetIp6Hostrtgw() {
    this._ip6Hostrtgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6HostrtgwInput() {
    return this._ip6Hostrtgw;
  }

  // ipv6address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // metric - computed: true, optional: true, required: false
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // mgmtaccess - computed: true, optional: true, required: false
  private _mgmtaccess?: string; 
  public get mgmtaccess() {
    return this.getStringAttribute('mgmtaccess');
  }
  public set mgmtaccess(value: string) {
    this._mgmtaccess = value;
  }
  public resetMgmtaccess() {
    this._mgmtaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtaccessInput() {
    return this._mgmtaccess;
  }

  // mptcpadvertise - computed: true, optional: true, required: false
  private _mptcpadvertise?: string; 
  public get mptcpadvertise() {
    return this.getStringAttribute('mptcpadvertise');
  }
  public set mptcpadvertise(value: string) {
    this._mptcpadvertise = value;
  }
  public resetMptcpadvertise() {
    this._mptcpadvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mptcpadvertiseInput() {
    return this._mptcpadvertise;
  }

  // nd - computed: true, optional: true, required: false
  private _nd?: string; 
  public get nd() {
    return this.getStringAttribute('nd');
  }
  public set nd(value: string) {
    this._nd = value;
  }
  public resetNd() {
    this._nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndInput() {
    return this._nd;
  }

  // networkroute - computed: true, optional: true, required: false
  private _networkroute?: string; 
  public get networkroute() {
    return this.getStringAttribute('networkroute');
  }
  public set networkroute(value: string) {
    this._networkroute = value;
  }
  public resetNetworkroute() {
    this._networkroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkrouteInput() {
    return this._networkroute;
  }

  // ospf6lsatype - computed: true, optional: true, required: false
  private _ospf6Lsatype?: string; 
  public get ospf6Lsatype() {
    return this.getStringAttribute('ospf6lsatype');
  }
  public set ospf6Lsatype(value: string) {
    this._ospf6Lsatype = value;
  }
  public resetOspf6Lsatype() {
    this._ospf6Lsatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospf6LsatypeInput() {
    return this._ospf6Lsatype;
  }

  // ospfarea - computed: true, optional: true, required: false
  private _ospfarea?: number; 
  public get ospfarea() {
    return this.getNumberAttribute('ospfarea');
  }
  public set ospfarea(value: number) {
    this._ospfarea = value;
  }
  public resetOspfarea() {
    this._ospfarea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfareaInput() {
    return this._ospfarea;
  }

  // ownerdownresponse - computed: true, optional: true, required: false
  private _ownerdownresponse?: string; 
  public get ownerdownresponse() {
    return this.getStringAttribute('ownerdownresponse');
  }
  public set ownerdownresponse(value: string) {
    this._ownerdownresponse = value;
  }
  public resetOwnerdownresponse() {
    this._ownerdownresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerdownresponseInput() {
    return this._ownerdownresponse;
  }

  // ownernode - computed: true, optional: true, required: false
  private _ownernode?: number; 
  public get ownernode() {
    return this.getNumberAttribute('ownernode');
  }
  public set ownernode(value: number) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // restrictaccess - computed: true, optional: true, required: false
  private _restrictaccess?: string; 
  public get restrictaccess() {
    return this.getStringAttribute('restrictaccess');
  }
  public set restrictaccess(value: string) {
    this._restrictaccess = value;
  }
  public resetRestrictaccess() {
    this._restrictaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictaccessInput() {
    return this._restrictaccess;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // snmp - computed: true, optional: true, required: false
  private _snmp?: string; 
  public get snmp() {
    return this.getStringAttribute('snmp');
  }
  public set snmp(value: string) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // ssh - computed: true, optional: true, required: false
  private _ssh?: string; 
  public get ssh() {
    return this.getStringAttribute('ssh');
  }
  public set ssh(value: string) {
    this._ssh = value;
  }
  public resetSsh() {
    this._ssh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshInput() {
    return this._ssh;
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

  // tag - computed: true, optional: true, required: false
  private _tag?: number; 
  public get tag() {
    return this.getNumberAttribute('tag');
  }
  public set tag(value: number) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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

  // telnet - computed: true, optional: true, required: false
  private _telnet?: string; 
  public get telnet() {
    return this.getStringAttribute('telnet');
  }
  public set telnet(value: string) {
    this._telnet = value;
  }
  public resetTelnet() {
    this._telnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telnetInput() {
    return this._telnet;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vrid6 - computed: true, optional: true, required: false
  private _vrid6?: number; 
  public get vrid6() {
    return this.getNumberAttribute('vrid6');
  }
  public set vrid6(value: number) {
    this._vrid6 = value;
  }
  public resetVrid6() {
    this._vrid6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrid6Input() {
    return this._vrid6;
  }

  // vserver - computed: true, optional: true, required: false
  private _vserver?: string; 
  public get vserver() {
    return this.getStringAttribute('vserver');
  }
  public set vserver(value: string) {
    this._vserver = value;
  }
  public resetVserver() {
    this._vserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverInput() {
    return this._vserver;
  }

  // vserverrhilevel - computed: true, optional: true, required: false
  private _vserverrhilevel?: string; 
  public get vserverrhilevel() {
    return this.getStringAttribute('vserverrhilevel');
  }
  public set vserverrhilevel(value: string) {
    this._vserverrhilevel = value;
  }
  public resetVserverrhilevel() {
    this._vserverrhilevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverrhilevelInput() {
    return this._vserverrhilevel;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertiseondefaultpartition: cdktf.stringToTerraform(this._advertiseondefaultpartition),
      decrementhoplimit: cdktf.stringToTerraform(this._decrementhoplimit),
      dynamicrouting: cdktf.stringToTerraform(this._dynamicrouting),
      ftp: cdktf.stringToTerraform(this._ftp),
      gui: cdktf.stringToTerraform(this._gui),
      hostroute: cdktf.stringToTerraform(this._hostroute),
      icmp: cdktf.stringToTerraform(this._icmp),
      id: cdktf.stringToTerraform(this._id),
      ip6hostrtgw: cdktf.stringToTerraform(this._ip6Hostrtgw),
      ipv6address: cdktf.stringToTerraform(this._ipv6Address),
      map: cdktf.stringToTerraform(this._map),
      metric: cdktf.numberToTerraform(this._metric),
      mgmtaccess: cdktf.stringToTerraform(this._mgmtaccess),
      mptcpadvertise: cdktf.stringToTerraform(this._mptcpadvertise),
      nd: cdktf.stringToTerraform(this._nd),
      networkroute: cdktf.stringToTerraform(this._networkroute),
      ospf6lsatype: cdktf.stringToTerraform(this._ospf6Lsatype),
      ospfarea: cdktf.numberToTerraform(this._ospfarea),
      ownerdownresponse: cdktf.stringToTerraform(this._ownerdownresponse),
      ownernode: cdktf.numberToTerraform(this._ownernode),
      restrictaccess: cdktf.stringToTerraform(this._restrictaccess),
      scope: cdktf.stringToTerraform(this._scope),
      snmp: cdktf.stringToTerraform(this._snmp),
      ssh: cdktf.stringToTerraform(this._ssh),
      state: cdktf.stringToTerraform(this._state),
      tag: cdktf.numberToTerraform(this._tag),
      td: cdktf.numberToTerraform(this._td),
      telnet: cdktf.stringToTerraform(this._telnet),
      type: cdktf.stringToTerraform(this._type),
      vlan: cdktf.numberToTerraform(this._vlan),
      vrid6: cdktf.numberToTerraform(this._vrid6),
      vserver: cdktf.stringToTerraform(this._vserver),
      vserverrhilevel: cdktf.stringToTerraform(this._vserverrhilevel),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertiseondefaultpartition: {
        value: cdktf.stringToHclTerraform(this._advertiseondefaultpartition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrementhoplimit: {
        value: cdktf.stringToHclTerraform(this._decrementhoplimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamicrouting: {
        value: cdktf.stringToHclTerraform(this._dynamicrouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftp: {
        value: cdktf.stringToHclTerraform(this._ftp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gui: {
        value: cdktf.stringToHclTerraform(this._gui),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostroute: {
        value: cdktf.stringToHclTerraform(this._hostroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp: {
        value: cdktf.stringToHclTerraform(this._icmp),
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
      ip6hostrtgw: {
        value: cdktf.stringToHclTerraform(this._ip6Hostrtgw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      map: {
        value: cdktf.stringToHclTerraform(this._map),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.numberToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgmtaccess: {
        value: cdktf.stringToHclTerraform(this._mgmtaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mptcpadvertise: {
        value: cdktf.stringToHclTerraform(this._mptcpadvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nd: {
        value: cdktf.stringToHclTerraform(this._nd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networkroute: {
        value: cdktf.stringToHclTerraform(this._networkroute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospf6lsatype: {
        value: cdktf.stringToHclTerraform(this._ospf6Lsatype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ospfarea: {
        value: cdktf.numberToHclTerraform(this._ospfarea),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ownerdownresponse: {
        value: cdktf.stringToHclTerraform(this._ownerdownresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownernode: {
        value: cdktf.numberToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restrictaccess: {
        value: cdktf.stringToHclTerraform(this._restrictaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp: {
        value: cdktf.stringToHclTerraform(this._snmp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh: {
        value: cdktf.stringToHclTerraform(this._ssh),
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
      tag: {
        value: cdktf.numberToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      telnet: {
        value: cdktf.stringToHclTerraform(this._telnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vrid6: {
        value: cdktf.numberToHclTerraform(this._vrid6),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vserver: {
        value: cdktf.stringToHclTerraform(this._vserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vserverrhilevel: {
        value: cdktf.stringToHclTerraform(this._vserverrhilevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
