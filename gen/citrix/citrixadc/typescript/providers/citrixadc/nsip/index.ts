// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#advertiseondefaultpartition Nsip#advertiseondefaultpartition}
  */
  readonly advertiseondefaultpartition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#arp Nsip#arp}
  */
  readonly arp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#arpresponse Nsip#arpresponse}
  */
  readonly arpresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#bgp Nsip#bgp}
  */
  readonly bgp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#decrementttl Nsip#decrementttl}
  */
  readonly decrementttl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#dynamicrouting Nsip#dynamicrouting}
  */
  readonly dynamicrouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ftp Nsip#ftp}
  */
  readonly ftp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#gui Nsip#gui}
  */
  readonly gui?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#hostroute Nsip#hostroute}
  */
  readonly hostroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#hostrtgw Nsip#hostrtgw}
  */
  readonly hostrtgw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#icmp Nsip#icmp}
  */
  readonly icmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#icmpresponse Nsip#icmpresponse}
  */
  readonly icmpresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#id Nsip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ipaddress Nsip#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#metric Nsip#metric}
  */
  readonly metric?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#mgmtaccess Nsip#mgmtaccess}
  */
  readonly mgmtaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#mptcpadvertise Nsip#mptcpadvertise}
  */
  readonly mptcpadvertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#netmask Nsip#netmask}
  */
  readonly netmask: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#networkroute Nsip#networkroute}
  */
  readonly networkroute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ospf Nsip#ospf}
  */
  readonly ospf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ospfarea Nsip#ospfarea}
  */
  readonly ospfarea?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ospflsatype Nsip#ospflsatype}
  */
  readonly ospflsatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ownerdownresponse Nsip#ownerdownresponse}
  */
  readonly ownerdownresponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ownernode Nsip#ownernode}
  */
  readonly ownernode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#restrictaccess Nsip#restrictaccess}
  */
  readonly restrictaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#rip Nsip#rip}
  */
  readonly rip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#snmp Nsip#snmp}
  */
  readonly snmp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#ssh Nsip#ssh}
  */
  readonly ssh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#state Nsip#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#tag Nsip#tag}
  */
  readonly tag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#td Nsip#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#telnet Nsip#telnet}
  */
  readonly telnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#type Nsip#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#vrid Nsip#vrid}
  */
  readonly vrid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#vserver Nsip#vserver}
  */
  readonly vserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#vserverrhilevel Nsip#vserverrhilevel}
  */
  readonly vserverrhilevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#vserverrhimode Nsip#vserverrhimode}
  */
  readonly vserverrhimode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip citrixadc_nsip}
*/
export class Nsip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsip to import
  * @param importFromId The id of the existing Nsip that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsip citrixadc_nsip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsipConfig
  */
  public constructor(scope: Construct, id: string, config: NsipConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsip',
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
    this._arp = config.arp;
    this._arpresponse = config.arpresponse;
    this._bgp = config.bgp;
    this._decrementttl = config.decrementttl;
    this._dynamicrouting = config.dynamicrouting;
    this._ftp = config.ftp;
    this._gui = config.gui;
    this._hostroute = config.hostroute;
    this._hostrtgw = config.hostrtgw;
    this._icmp = config.icmp;
    this._icmpresponse = config.icmpresponse;
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._metric = config.metric;
    this._mgmtaccess = config.mgmtaccess;
    this._mptcpadvertise = config.mptcpadvertise;
    this._netmask = config.netmask;
    this._networkroute = config.networkroute;
    this._ospf = config.ospf;
    this._ospfarea = config.ospfarea;
    this._ospflsatype = config.ospflsatype;
    this._ownerdownresponse = config.ownerdownresponse;
    this._ownernode = config.ownernode;
    this._restrictaccess = config.restrictaccess;
    this._rip = config.rip;
    this._snmp = config.snmp;
    this._ssh = config.ssh;
    this._state = config.state;
    this._tag = config.tag;
    this._td = config.td;
    this._telnet = config.telnet;
    this._type = config.type;
    this._vrid = config.vrid;
    this._vserver = config.vserver;
    this._vserverrhilevel = config.vserverrhilevel;
    this._vserverrhimode = config.vserverrhimode;
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

  // arpresponse - computed: true, optional: true, required: false
  private _arpresponse?: string; 
  public get arpresponse() {
    return this.getStringAttribute('arpresponse');
  }
  public set arpresponse(value: string) {
    this._arpresponse = value;
  }
  public resetArpresponse() {
    this._arpresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpresponseInput() {
    return this._arpresponse;
  }

  // bgp - computed: true, optional: true, required: false
  private _bgp?: string; 
  public get bgp() {
    return this.getStringAttribute('bgp');
  }
  public set bgp(value: string) {
    this._bgp = value;
  }
  public resetBgp() {
    this._bgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpInput() {
    return this._bgp;
  }

  // decrementttl - computed: true, optional: true, required: false
  private _decrementttl?: string; 
  public get decrementttl() {
    return this.getStringAttribute('decrementttl');
  }
  public set decrementttl(value: string) {
    this._decrementttl = value;
  }
  public resetDecrementttl() {
    this._decrementttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decrementttlInput() {
    return this._decrementttl;
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

  // hostrtgw - computed: true, optional: true, required: false
  private _hostrtgw?: string; 
  public get hostrtgw() {
    return this.getStringAttribute('hostrtgw');
  }
  public set hostrtgw(value: string) {
    this._hostrtgw = value;
  }
  public resetHostrtgw() {
    this._hostrtgw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostrtgwInput() {
    return this._hostrtgw;
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

  // icmpresponse - computed: true, optional: true, required: false
  private _icmpresponse?: string; 
  public get icmpresponse() {
    return this.getStringAttribute('icmpresponse');
  }
  public set icmpresponse(value: string) {
    this._icmpresponse = value;
  }
  public resetIcmpresponse() {
    this._icmpresponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpresponseInput() {
    return this._icmpresponse;
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

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
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

  // netmask - computed: false, optional: false, required: true
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
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

  // ospf - computed: true, optional: true, required: false
  private _ospf?: string; 
  public get ospf() {
    return this.getStringAttribute('ospf');
  }
  public set ospf(value: string) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
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

  // ospflsatype - computed: true, optional: true, required: false
  private _ospflsatype?: string; 
  public get ospflsatype() {
    return this.getStringAttribute('ospflsatype');
  }
  public set ospflsatype(value: string) {
    this._ospflsatype = value;
  }
  public resetOspflsatype() {
    this._ospflsatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospflsatypeInput() {
    return this._ospflsatype;
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
  private _ownernode?: string; 
  public get ownernode() {
    return this.getStringAttribute('ownernode');
  }
  public set ownernode(value: string) {
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

  // rip - computed: true, optional: true, required: false
  private _rip?: string; 
  public get rip() {
    return this.getStringAttribute('rip');
  }
  public set rip(value: string) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
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

  // vrid - computed: true, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
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

  // vserverrhimode - computed: true, optional: true, required: false
  private _vserverrhimode?: string; 
  public get vserverrhimode() {
    return this.getStringAttribute('vserverrhimode');
  }
  public set vserverrhimode(value: string) {
    this._vserverrhimode = value;
  }
  public resetVserverrhimode() {
    this._vserverrhimode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverrhimodeInput() {
    return this._vserverrhimode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertiseondefaultpartition: cdktf.stringToTerraform(this._advertiseondefaultpartition),
      arp: cdktf.stringToTerraform(this._arp),
      arpresponse: cdktf.stringToTerraform(this._arpresponse),
      bgp: cdktf.stringToTerraform(this._bgp),
      decrementttl: cdktf.stringToTerraform(this._decrementttl),
      dynamicrouting: cdktf.stringToTerraform(this._dynamicrouting),
      ftp: cdktf.stringToTerraform(this._ftp),
      gui: cdktf.stringToTerraform(this._gui),
      hostroute: cdktf.stringToTerraform(this._hostroute),
      hostrtgw: cdktf.stringToTerraform(this._hostrtgw),
      icmp: cdktf.stringToTerraform(this._icmp),
      icmpresponse: cdktf.stringToTerraform(this._icmpresponse),
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      metric: cdktf.numberToTerraform(this._metric),
      mgmtaccess: cdktf.stringToTerraform(this._mgmtaccess),
      mptcpadvertise: cdktf.stringToTerraform(this._mptcpadvertise),
      netmask: cdktf.stringToTerraform(this._netmask),
      networkroute: cdktf.stringToTerraform(this._networkroute),
      ospf: cdktf.stringToTerraform(this._ospf),
      ospfarea: cdktf.numberToTerraform(this._ospfarea),
      ospflsatype: cdktf.stringToTerraform(this._ospflsatype),
      ownerdownresponse: cdktf.stringToTerraform(this._ownerdownresponse),
      ownernode: cdktf.stringToTerraform(this._ownernode),
      restrictaccess: cdktf.stringToTerraform(this._restrictaccess),
      rip: cdktf.stringToTerraform(this._rip),
      snmp: cdktf.stringToTerraform(this._snmp),
      ssh: cdktf.stringToTerraform(this._ssh),
      state: cdktf.stringToTerraform(this._state),
      tag: cdktf.numberToTerraform(this._tag),
      td: cdktf.numberToTerraform(this._td),
      telnet: cdktf.stringToTerraform(this._telnet),
      type: cdktf.stringToTerraform(this._type),
      vrid: cdktf.numberToTerraform(this._vrid),
      vserver: cdktf.stringToTerraform(this._vserver),
      vserverrhilevel: cdktf.stringToTerraform(this._vserverrhilevel),
      vserverrhimode: cdktf.stringToTerraform(this._vserverrhimode),
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
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arpresponse: {
        value: cdktf.stringToHclTerraform(this._arpresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp: {
        value: cdktf.stringToHclTerraform(this._bgp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decrementttl: {
        value: cdktf.stringToHclTerraform(this._decrementttl),
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
      hostrtgw: {
        value: cdktf.stringToHclTerraform(this._hostrtgw),
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
      icmpresponse: {
        value: cdktf.stringToHclTerraform(this._icmpresponse),
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
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
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
      ospf: {
        value: cdktf.stringToHclTerraform(this._ospf),
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
      ospflsatype: {
        value: cdktf.stringToHclTerraform(this._ospflsatype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownerdownresponse: {
        value: cdktf.stringToHclTerraform(this._ownerdownresponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownernode: {
        value: cdktf.stringToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restrictaccess: {
        value: cdktf.stringToHclTerraform(this._restrictaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rip: {
        value: cdktf.stringToHclTerraform(this._rip),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
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
      vserverrhimode: {
        value: cdktf.stringToHclTerraform(this._vserverrhimode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
