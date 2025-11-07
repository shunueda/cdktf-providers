// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optionally allow number of occurrences of the own AS number in received prefix AS-path. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#allowasin Bgp#allowasin}
  */
  readonly allowasin?: number;
  /**
  * Valid value is `enabled` or `disabled`. Default value is `disabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#bfd Bgp#bfd}
  */
  readonly bfd?: string;
  /**
  * BGP session password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#bgppassword Bgp#bgppassword}
  */
  readonly bgppassword?: string;
  /**
  * Connect timer is the amount of time in seconds which BGP waits between connection attempts to a neighbor. Default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#connecttimer Bgp#connecttimer}
  */
  readonly connecttimer?: number;
  /**
  * Originate default route to current neighbor. Default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#defaultoriginate Bgp#defaultoriginate}
  */
  readonly defaultoriginate?: boolean | cdktf.IResolvable;
  /**
  * BGP session description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#description Bgp#description}
  */
  readonly description?: string;
  /**
  * Defines hardware for Layer-3 and BGP session termination. Valid value is hardware name or `auto` when BGP is terminated on VNet. Default value is `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#hardware Bgp#hardware}
  */
  readonly hardware?: string;
  /**
  * Hello timer is the frequency (seconds) of sending `Hello` messages. Default value is `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#hellotimer Bgp#hellotimer}
  */
  readonly hellotimer?: number;
  /**
  * Hold timer is the amount of time in seconds to keep BGP session up after the last received `Hello` message. This value must be at least 3 times bigger than `Hello` timer. Default value is `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#holdtimer Bgp#holdtimer}
  */
  readonly holdtimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#id Bgp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Reference to route-map resource. Valid value is route-map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#inboundroutemap Bgp#inboundroutemap}
  */
  readonly inboundroutemap?: number;
  /**
  * Local Autonomous System Number for the BGP speaker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#localasn Bgp#localasn}
  */
  readonly localasn?: string;
  /**
  * BGP session local IP. Example `10.0.1.1/24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#localip Bgp#localip}
  */
  readonly localip: string;
  /**
  * BGP session local preference. Default value is `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#localpreference Bgp#localpreference}
  */
  readonly localpreference?: number;
  /**
  * Multihop BGP session configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#multihop Bgp#multihop}
  */
  readonly multihop?: { [key: string]: string };
  /**
  * User assigned name of BGP session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#name Bgp#name}
  */
  readonly name: string;
  /**
  * BGP neighbor AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#neighboras Bgp#neighboras}
  */
  readonly neighboras?: number;
  /**
  * Reference to route-map resource. Valid value is route-map name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#outboundroutemap Bgp#outboundroutemap}
  */
  readonly outboundroutemap?: number;
  /**
  * Port ID where BGP neighbor cable is connected. Can't be used together `vnetid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#portid Bgp#portid}
  */
  readonly portid?: number;
  /**
  * BGP session will be interrupted if neighbor advertises more prefixes than defined. Equal to `1000` if BGP session is terminated on hardware type of switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#prefixinboundmax Bgp#prefixinboundmax}
  */
  readonly prefixinboundmax?: string;
  /**
  * List of inbound prefix list. Example `["deny 127.0.0.0/8 le 32", "permit 0.0.0.0/0 le 24"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#prefixlistinbound Bgp#prefixlistinbound}
  */
  readonly prefixlistinbound?: string[];
  /**
  * List of outbound prefix list, if not defined autogenerated prefix list will apply which will permit defined allocations and assignments, and will deny all private addresses. Example `["permit 192.0.2.0/24 le 26"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#prefixlistoutbound Bgp#prefixlistoutbound}
  */
  readonly prefixlistoutbound?: string[];
  /**
  * Number of times to prepend self AS to as-path of received prefix advertisements. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#prependinbound Bgp#prependinbound}
  */
  readonly prependinbound?: number;
  /**
  * Number of times to prepend self AS to as-path being advertised to neighbors. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#prependoutbound Bgp#prependoutbound}
  */
  readonly prependoutbound?: number;
  /**
  * BGP session remote IP. Example `10.0.1.2/24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#remoteip Bgp#remoteip}
  */
  readonly remoteip: string;
  /**
  * When Enabled, Netris will remove all private ASNs from the AS path when advertising routes to a BGP neighbor. Valid value is `enabled` or `disabled`. Default value is `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#removeprivateas Bgp#removeprivateas}
  */
  readonly removeprivateas?: string;
  /**
  * Send BGP Community Unconditionally advertise defined list of BGP communities towards BGP neighbor. Format: AA:NN Community number in AA:NN format (where AA and NN are (0-65535)) or local-AS. Example `["65501:777"]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#sendbgpcommunity Bgp#sendbgpcommunity}
  */
  readonly sendbgpcommunity?: string[];
  /**
  * Site (data center) ID where this BGP session should be terminated on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#siteid Bgp#siteid}
  */
  readonly siteid: number;
  /**
  * Valid value is `enabled` or `disabled`; enabled - initiating and waiting for BGP connections, disabled - disable Layer-2 tunnel and Layer-3 address. Default value is `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#state Bgp#state}
  */
  readonly state?: string;
  /**
  * Untag ethernet frames on BGP neighbor facing ethernet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#untagged Bgp#untagged}
  */
  readonly untagged?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID for tagging BGP neighbor facing ethernet frames. Valid values should be in range 2-4094.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#vlanid Bgp#vlanid}
  */
  readonly vlanid?: number;
  /**
  * Existing VNet service ID to terminate E-BGP on. Can't be used together `portid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#vnetid Bgp#vnetid}
  */
  readonly vnetid?: number;
  /**
  * ID of VPC. If not specified, the BGP will be created in the VPC marked as a default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#vpcid Bgp#vpcid}
  */
  readonly vpcid?: number;
  /**
  * BGP session weight. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#weight Bgp#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp netris_bgp}
*/
export class Bgp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_bgp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Bgp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Bgp to import
  * @param importFromId The id of the existing Bgp that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Bgp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_bgp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/bgp netris_bgp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpConfig
  */
  public constructor(scope: Construct, id: string, config: BgpConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_bgp',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowasin = config.allowasin;
    this._bfd = config.bfd;
    this._bgppassword = config.bgppassword;
    this._connecttimer = config.connecttimer;
    this._defaultoriginate = config.defaultoriginate;
    this._description = config.description;
    this._hardware = config.hardware;
    this._hellotimer = config.hellotimer;
    this._holdtimer = config.holdtimer;
    this._id = config.id;
    this._inboundroutemap = config.inboundroutemap;
    this._localasn = config.localasn;
    this._localip = config.localip;
    this._localpreference = config.localpreference;
    this._multihop = config.multihop;
    this._name = config.name;
    this._neighboras = config.neighboras;
    this._outboundroutemap = config.outboundroutemap;
    this._portid = config.portid;
    this._prefixinboundmax = config.prefixinboundmax;
    this._prefixlistinbound = config.prefixlistinbound;
    this._prefixlistoutbound = config.prefixlistoutbound;
    this._prependinbound = config.prependinbound;
    this._prependoutbound = config.prependoutbound;
    this._remoteip = config.remoteip;
    this._removeprivateas = config.removeprivateas;
    this._sendbgpcommunity = config.sendbgpcommunity;
    this._siteid = config.siteid;
    this._state = config.state;
    this._untagged = config.untagged;
    this._vlanid = config.vlanid;
    this._vnetid = config.vnetid;
    this._vpcid = config.vpcid;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowasin - computed: false, optional: true, required: false
  private _allowasin?: number; 
  public get allowasin() {
    return this.getNumberAttribute('allowasin');
  }
  public set allowasin(value: number) {
    this._allowasin = value;
  }
  public resetAllowasin() {
    this._allowasin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowasinInput() {
    return this._allowasin;
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: string; 
  public get bfd() {
    return this.getStringAttribute('bfd');
  }
  public set bfd(value: string) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bgppassword - computed: false, optional: true, required: false
  private _bgppassword?: string; 
  public get bgppassword() {
    return this.getStringAttribute('bgppassword');
  }
  public set bgppassword(value: string) {
    this._bgppassword = value;
  }
  public resetBgppassword() {
    this._bgppassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgppasswordInput() {
    return this._bgppassword;
  }

  // connecttimer - computed: false, optional: true, required: false
  private _connecttimer?: number; 
  public get connecttimer() {
    return this.getNumberAttribute('connecttimer');
  }
  public set connecttimer(value: number) {
    this._connecttimer = value;
  }
  public resetConnecttimer() {
    this._connecttimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connecttimerInput() {
    return this._connecttimer;
  }

  // defaultoriginate - computed: true, optional: true, required: false
  private _defaultoriginate?: boolean | cdktf.IResolvable; 
  public get defaultoriginate() {
    return this.getBooleanAttribute('defaultoriginate');
  }
  public set defaultoriginate(value: boolean | cdktf.IResolvable) {
    this._defaultoriginate = value;
  }
  public resetDefaultoriginate() {
    this._defaultoriginate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultoriginateInput() {
    return this._defaultoriginate;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hardware - computed: false, optional: true, required: false
  private _hardware?: string; 
  public get hardware() {
    return this.getStringAttribute('hardware');
  }
  public set hardware(value: string) {
    this._hardware = value;
  }
  public resetHardware() {
    this._hardware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareInput() {
    return this._hardware;
  }

  // hellotimer - computed: false, optional: true, required: false
  private _hellotimer?: number; 
  public get hellotimer() {
    return this.getNumberAttribute('hellotimer');
  }
  public set hellotimer(value: number) {
    this._hellotimer = value;
  }
  public resetHellotimer() {
    this._hellotimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hellotimerInput() {
    return this._hellotimer;
  }

  // holdtimer - computed: false, optional: true, required: false
  private _holdtimer?: number; 
  public get holdtimer() {
    return this.getNumberAttribute('holdtimer');
  }
  public set holdtimer(value: number) {
    this._holdtimer = value;
  }
  public resetHoldtimer() {
    this._holdtimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdtimerInput() {
    return this._holdtimer;
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

  // inboundroutemap - computed: false, optional: true, required: false
  private _inboundroutemap?: number; 
  public get inboundroutemap() {
    return this.getNumberAttribute('inboundroutemap');
  }
  public set inboundroutemap(value: number) {
    this._inboundroutemap = value;
  }
  public resetInboundroutemap() {
    this._inboundroutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundroutemapInput() {
    return this._inboundroutemap;
  }

  // localasn - computed: false, optional: true, required: false
  private _localasn?: string; 
  public get localasn() {
    return this.getStringAttribute('localasn');
  }
  public set localasn(value: string) {
    this._localasn = value;
  }
  public resetLocalasn() {
    this._localasn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localasnInput() {
    return this._localasn;
  }

  // localip - computed: false, optional: false, required: true
  private _localip?: string; 
  public get localip() {
    return this.getStringAttribute('localip');
  }
  public set localip(value: string) {
    this._localip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localipInput() {
    return this._localip;
  }

  // localpreference - computed: true, optional: true, required: false
  private _localpreference?: number; 
  public get localpreference() {
    return this.getNumberAttribute('localpreference');
  }
  public set localpreference(value: number) {
    this._localpreference = value;
  }
  public resetLocalpreference() {
    this._localpreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localpreferenceInput() {
    return this._localpreference;
  }

  // multihop - computed: false, optional: true, required: false
  private _multihop?: { [key: string]: string }; 
  public get multihop() {
    return this.getStringMapAttribute('multihop');
  }
  public set multihop(value: { [key: string]: string }) {
    this._multihop = value;
  }
  public resetMultihop() {
    this._multihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihopInput() {
    return this._multihop;
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

  // neighboras - computed: false, optional: true, required: false
  private _neighboras?: number; 
  public get neighboras() {
    return this.getNumberAttribute('neighboras');
  }
  public set neighboras(value: number) {
    this._neighboras = value;
  }
  public resetNeighboras() {
    this._neighboras = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborasInput() {
    return this._neighboras;
  }

  // outboundroutemap - computed: false, optional: true, required: false
  private _outboundroutemap?: number; 
  public get outboundroutemap() {
    return this.getNumberAttribute('outboundroutemap');
  }
  public set outboundroutemap(value: number) {
    this._outboundroutemap = value;
  }
  public resetOutboundroutemap() {
    this._outboundroutemap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundroutemapInput() {
    return this._outboundroutemap;
  }

  // portid - computed: false, optional: true, required: false
  private _portid?: number; 
  public get portid() {
    return this.getNumberAttribute('portid');
  }
  public set portid(value: number) {
    this._portid = value;
  }
  public resetPortid() {
    this._portid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portidInput() {
    return this._portid;
  }

  // prefixinboundmax - computed: true, optional: true, required: false
  private _prefixinboundmax?: string; 
  public get prefixinboundmax() {
    return this.getStringAttribute('prefixinboundmax');
  }
  public set prefixinboundmax(value: string) {
    this._prefixinboundmax = value;
  }
  public resetPrefixinboundmax() {
    this._prefixinboundmax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixinboundmaxInput() {
    return this._prefixinboundmax;
  }

  // prefixlistinbound - computed: true, optional: true, required: false
  private _prefixlistinbound?: string[]; 
  public get prefixlistinbound() {
    return this.getListAttribute('prefixlistinbound');
  }
  public set prefixlistinbound(value: string[]) {
    this._prefixlistinbound = value;
  }
  public resetPrefixlistinbound() {
    this._prefixlistinbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixlistinboundInput() {
    return this._prefixlistinbound;
  }

  // prefixlistoutbound - computed: true, optional: true, required: false
  private _prefixlistoutbound?: string[]; 
  public get prefixlistoutbound() {
    return this.getListAttribute('prefixlistoutbound');
  }
  public set prefixlistoutbound(value: string[]) {
    this._prefixlistoutbound = value;
  }
  public resetPrefixlistoutbound() {
    this._prefixlistoutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixlistoutboundInput() {
    return this._prefixlistoutbound;
  }

  // prependinbound - computed: true, optional: true, required: false
  private _prependinbound?: number; 
  public get prependinbound() {
    return this.getNumberAttribute('prependinbound');
  }
  public set prependinbound(value: number) {
    this._prependinbound = value;
  }
  public resetPrependinbound() {
    this._prependinbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependinboundInput() {
    return this._prependinbound;
  }

  // prependoutbound - computed: true, optional: true, required: false
  private _prependoutbound?: number; 
  public get prependoutbound() {
    return this.getNumberAttribute('prependoutbound');
  }
  public set prependoutbound(value: number) {
    this._prependoutbound = value;
  }
  public resetPrependoutbound() {
    this._prependoutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependoutboundInput() {
    return this._prependoutbound;
  }

  // remoteip - computed: false, optional: false, required: true
  private _remoteip?: string; 
  public get remoteip() {
    return this.getStringAttribute('remoteip');
  }
  public set remoteip(value: string) {
    this._remoteip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteipInput() {
    return this._remoteip;
  }

  // removeprivateas - computed: false, optional: true, required: false
  private _removeprivateas?: string; 
  public get removeprivateas() {
    return this.getStringAttribute('removeprivateas');
  }
  public set removeprivateas(value: string) {
    this._removeprivateas = value;
  }
  public resetRemoveprivateas() {
    this._removeprivateas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeprivateasInput() {
    return this._removeprivateas;
  }

  // sendbgpcommunity - computed: true, optional: true, required: false
  private _sendbgpcommunity?: string[]; 
  public get sendbgpcommunity() {
    return this.getListAttribute('sendbgpcommunity');
  }
  public set sendbgpcommunity(value: string[]) {
    this._sendbgpcommunity = value;
  }
  public resetSendbgpcommunity() {
    this._sendbgpcommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendbgpcommunityInput() {
    return this._sendbgpcommunity;
  }

  // siteid - computed: false, optional: false, required: true
  private _siteid?: number; 
  public get siteid() {
    return this.getNumberAttribute('siteid');
  }
  public set siteid(value: number) {
    this._siteid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidInput() {
    return this._siteid;
  }

  // state - computed: false, optional: true, required: false
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

  // untagged - computed: false, optional: true, required: false
  private _untagged?: boolean | cdktf.IResolvable; 
  public get untagged() {
    return this.getBooleanAttribute('untagged');
  }
  public set untagged(value: boolean | cdktf.IResolvable) {
    this._untagged = value;
  }
  public resetUntagged() {
    this._untagged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedInput() {
    return this._untagged;
  }

  // vlanid - computed: false, optional: true, required: false
  private _vlanid?: number; 
  public get vlanid() {
    return this.getNumberAttribute('vlanid');
  }
  public set vlanid(value: number) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // vnetid - computed: false, optional: true, required: false
  private _vnetid?: number; 
  public get vnetid() {
    return this.getNumberAttribute('vnetid');
  }
  public set vnetid(value: number) {
    this._vnetid = value;
  }
  public resetVnetid() {
    this._vnetid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetidInput() {
    return this._vnetid;
  }

  // vpcid - computed: false, optional: true, required: false
  private _vpcid?: number; 
  public get vpcid() {
    return this.getNumberAttribute('vpcid');
  }
  public set vpcid(value: number) {
    this._vpcid = value;
  }
  public resetVpcid() {
    this._vpcid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcidInput() {
    return this._vpcid;
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
      allowasin: cdktf.numberToTerraform(this._allowasin),
      bfd: cdktf.stringToTerraform(this._bfd),
      bgppassword: cdktf.stringToTerraform(this._bgppassword),
      connecttimer: cdktf.numberToTerraform(this._connecttimer),
      defaultoriginate: cdktf.booleanToTerraform(this._defaultoriginate),
      description: cdktf.stringToTerraform(this._description),
      hardware: cdktf.stringToTerraform(this._hardware),
      hellotimer: cdktf.numberToTerraform(this._hellotimer),
      holdtimer: cdktf.numberToTerraform(this._holdtimer),
      id: cdktf.stringToTerraform(this._id),
      inboundroutemap: cdktf.numberToTerraform(this._inboundroutemap),
      localasn: cdktf.stringToTerraform(this._localasn),
      localip: cdktf.stringToTerraform(this._localip),
      localpreference: cdktf.numberToTerraform(this._localpreference),
      multihop: cdktf.hashMapper(cdktf.stringToTerraform)(this._multihop),
      name: cdktf.stringToTerraform(this._name),
      neighboras: cdktf.numberToTerraform(this._neighboras),
      outboundroutemap: cdktf.numberToTerraform(this._outboundroutemap),
      portid: cdktf.numberToTerraform(this._portid),
      prefixinboundmax: cdktf.stringToTerraform(this._prefixinboundmax),
      prefixlistinbound: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixlistinbound),
      prefixlistoutbound: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prefixlistoutbound),
      prependinbound: cdktf.numberToTerraform(this._prependinbound),
      prependoutbound: cdktf.numberToTerraform(this._prependoutbound),
      remoteip: cdktf.stringToTerraform(this._remoteip),
      removeprivateas: cdktf.stringToTerraform(this._removeprivateas),
      sendbgpcommunity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sendbgpcommunity),
      siteid: cdktf.numberToTerraform(this._siteid),
      state: cdktf.stringToTerraform(this._state),
      untagged: cdktf.booleanToTerraform(this._untagged),
      vlanid: cdktf.numberToTerraform(this._vlanid),
      vnetid: cdktf.numberToTerraform(this._vnetid),
      vpcid: cdktf.numberToTerraform(this._vpcid),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowasin: {
        value: cdktf.numberToHclTerraform(this._allowasin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bfd: {
        value: cdktf.stringToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgppassword: {
        value: cdktf.stringToHclTerraform(this._bgppassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connecttimer: {
        value: cdktf.numberToHclTerraform(this._connecttimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      defaultoriginate: {
        value: cdktf.booleanToHclTerraform(this._defaultoriginate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hardware: {
        value: cdktf.stringToHclTerraform(this._hardware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hellotimer: {
        value: cdktf.numberToHclTerraform(this._hellotimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      holdtimer: {
        value: cdktf.numberToHclTerraform(this._holdtimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inboundroutemap: {
        value: cdktf.numberToHclTerraform(this._inboundroutemap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      localasn: {
        value: cdktf.stringToHclTerraform(this._localasn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localip: {
        value: cdktf.stringToHclTerraform(this._localip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      localpreference: {
        value: cdktf.numberToHclTerraform(this._localpreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multihop: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._multihop),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighboras: {
        value: cdktf.numberToHclTerraform(this._neighboras),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outboundroutemap: {
        value: cdktf.numberToHclTerraform(this._outboundroutemap),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      portid: {
        value: cdktf.numberToHclTerraform(this._portid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefixinboundmax: {
        value: cdktf.stringToHclTerraform(this._prefixinboundmax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefixlistinbound: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixlistinbound),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prefixlistoutbound: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prefixlistoutbound),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      prependinbound: {
        value: cdktf.numberToHclTerraform(this._prependinbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prependoutbound: {
        value: cdktf.numberToHclTerraform(this._prependoutbound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remoteip: {
        value: cdktf.stringToHclTerraform(this._remoteip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      removeprivateas: {
        value: cdktf.stringToHclTerraform(this._removeprivateas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sendbgpcommunity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sendbgpcommunity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      untagged: {
        value: cdktf.booleanToHclTerraform(this._untagged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlanid: {
        value: cdktf.numberToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vnetid: {
        value: cdktf.numberToHclTerraform(this._vnetid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpcid: {
        value: cdktf.numberToHclTerraform(this._vpcid),
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
