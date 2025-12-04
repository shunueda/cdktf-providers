// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceL2TpClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#___path___ InterfaceL2TpClient#___path___}
  */
  readonly path?: string;
  /**
  * Whether to add L2TP remote address as a default route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#add_default_route InterfaceL2TpClient#add_default_route}
  */
  readonly addDefaultRoute?: boolean | cdktf.IResolvable;
  /**
  * Allowed authentication methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#allow InterfaceL2TpClient#allow}
  */
  readonly allow?: string[];
  /**
  * Whether to allow FastPath processing. Must be disabled if IPsec tunneling is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#allow_fast_path InterfaceL2TpClient#allow_fast_path}
  */
  readonly allowFastPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#comment InterfaceL2TpClient#comment}
  */
  readonly comment?: string;
  /**
  * Remote address of L2TP server (if the address is in VRF table, VRF should be specified) `/interface l2tp-client`
  * `add connect-to=192.168.88.1@vrf1 name=l2tp-out1 user=l2tp-client`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#connect_to InterfaceL2TpClient#connect_to}
  */
  readonly connectTo?: string;
  /**
  * Since v6.2, sets distance value applied to auto created default route, if add-default-route is also selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#default_route_distance InterfaceL2TpClient#default_route_distance}
  */
  readonly defaultRouteDistance?: number;
  /**
  * Connects only when outbound traffic is generated. If selected, then route with gateway address from `10.112.112.0/24` network will be added while connection is not established.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#dial_on_demand InterfaceL2TpClient#dial_on_demand}
  */
  readonly dialOnDemand?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#disabled InterfaceL2TpClient#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#id InterfaceL2TpClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Preshared key used when use-ipsec is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#ipsec_secret InterfaceL2TpClient#ipsec_secret}
  */
  readonly ipsecSecret?: string;
  /**
  * Since v6.0rc13, tunnel keepalive timeout in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#keepalive_timeout InterfaceL2TpClient#keepalive_timeout}
  */
  readonly keepaliveTimeout?: number;
  /**
  * Specify protocol version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#l2tp_proto_version InterfaceL2TpClient#l2tp_proto_version}
  */
  readonly l2TpProtoVersion?: string;
  /**
  * Set the virtual circuit identifier to bind the one end of the L2TPv3 control channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#l2tpv3_circuit_id InterfaceL2TpClient#l2tpv3_circuit_id}
  */
  readonly l2Tpv3CircuitId?: string;
  /**
  * Configures an L2TPv3 pseudowire static session cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#l2tpv3_cookie_length InterfaceL2TpClient#l2tpv3_cookie_length}
  */
  readonly l2Tpv3CookieLength?: number;
  /**
  * Specifies which hash function to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#l2tpv3_digest_hash InterfaceL2TpClient#l2tpv3_digest_hash}
  */
  readonly l2Tpv3DigestHash?: string;
  /**
  * Maximum Receive Unit. Max packet size that L2TP interface will be able to receive without packet fragmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#max_mru InterfaceL2TpClient#max_mru}
  */
  readonly maxMru?: number;
  /**
  * Maximum Transmission Unit. Max packet size that L2TP interface will be able to send without packet fragmentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#max_mtu InterfaceL2TpClient#max_mtu}
  */
  readonly maxMtu?: number;
  /**
  * Maximum packet size that can be received on the link. If a packet is bigger than tunnel MTU, it will be split into multiple packets, allowing full size IP or Ethernet packets to be sent over the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#mrru InterfaceL2TpClient#mrru}
  */
  readonly mrru?: string;
  /**
  * Descriptive name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#name InterfaceL2TpClient#name}
  */
  readonly name: string;
  /**
  * Password used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#password InterfaceL2TpClient#password}
  */
  readonly password?: string;
  /**
  * Specifies which PPP profile configuration will be used when establishing the tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#profile InterfaceL2TpClient#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#random_source_port InterfaceL2TpClient#random_source_port}
  */
  readonly randomSourcePort?: boolean | cdktf.IResolvable;
  /**
  * Specify source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#src_address InterfaceL2TpClient#src_address}
  */
  readonly srcAddress?: string;
  /**
  * When this option is enabled, dynamic IPSec peer configuration and policy (transport mode) is added to encapsulate L2TP connection into IPSec tunnel. Multiple L2tp/ipsec clients behind the same NAT will not work in this mode. To achieve such scenario, disable use-ipsec and set static policies for clients with enabled `tunnel=yes`, `level=unique` settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#use_ipsec InterfaceL2TpClient#use_ipsec}
  */
  readonly useIpsec?: boolean | cdktf.IResolvable;
  /**
  * To use peer dns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#use_peer_dns InterfaceL2TpClient#use_peer_dns}
  */
  readonly usePeerDns?: string;
  /**
  * User name used for authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#user InterfaceL2TpClient#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client routeros_interface_l2tp_client}
*/
export class InterfaceL2TpClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_l2tp_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceL2TpClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceL2TpClient to import
  * @param importFromId The id of the existing InterfaceL2TpClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceL2TpClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_l2tp_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/interface_l2tp_client routeros_interface_l2tp_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceL2TpClientConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceL2TpClientConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_l2tp_client',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._addDefaultRoute = config.addDefaultRoute;
    this._allow = config.allow;
    this._allowFastPath = config.allowFastPath;
    this._comment = config.comment;
    this._connectTo = config.connectTo;
    this._defaultRouteDistance = config.defaultRouteDistance;
    this._dialOnDemand = config.dialOnDemand;
    this._disabled = config.disabled;
    this._id = config.id;
    this._ipsecSecret = config.ipsecSecret;
    this._keepaliveTimeout = config.keepaliveTimeout;
    this._l2TpProtoVersion = config.l2TpProtoVersion;
    this._l2Tpv3CircuitId = config.l2Tpv3CircuitId;
    this._l2Tpv3CookieLength = config.l2Tpv3CookieLength;
    this._l2Tpv3DigestHash = config.l2Tpv3DigestHash;
    this._maxMru = config.maxMru;
    this._maxMtu = config.maxMtu;
    this._mrru = config.mrru;
    this._name = config.name;
    this._password = config.password;
    this._profile = config.profile;
    this._randomSourcePort = config.randomSourcePort;
    this._srcAddress = config.srcAddress;
    this._useIpsec = config.useIpsec;
    this._usePeerDns = config.usePeerDns;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // add_default_route - computed: false, optional: true, required: false
  private _addDefaultRoute?: boolean | cdktf.IResolvable; 
  public get addDefaultRoute() {
    return this.getBooleanAttribute('add_default_route');
  }
  public set addDefaultRoute(value: boolean | cdktf.IResolvable) {
    this._addDefaultRoute = value;
  }
  public resetAddDefaultRoute() {
    this._addDefaultRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addDefaultRouteInput() {
    return this._addDefaultRoute;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: string[]; 
  public get allow() {
    return cdktf.Fn.tolist(this.getListAttribute('allow'));
  }
  public set allow(value: string[]) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_fast_path - computed: false, optional: true, required: false
  private _allowFastPath?: boolean | cdktf.IResolvable; 
  public get allowFastPath() {
    return this.getBooleanAttribute('allow_fast_path');
  }
  public set allowFastPath(value: boolean | cdktf.IResolvable) {
    this._allowFastPath = value;
  }
  public resetAllowFastPath() {
    this._allowFastPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowFastPathInput() {
    return this._allowFastPath;
  }

  // comment - computed: false, optional: true, required: false
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

  // connect_to - computed: false, optional: true, required: false
  private _connectTo?: string; 
  public get connectTo() {
    return this.getStringAttribute('connect_to');
  }
  public set connectTo(value: string) {
    this._connectTo = value;
  }
  public resetConnectTo() {
    this._connectTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectToInput() {
    return this._connectTo;
  }

  // default_route_distance - computed: false, optional: true, required: false
  private _defaultRouteDistance?: number; 
  public get defaultRouteDistance() {
    return this.getNumberAttribute('default_route_distance');
  }
  public set defaultRouteDistance(value: number) {
    this._defaultRouteDistance = value;
  }
  public resetDefaultRouteDistance() {
    this._defaultRouteDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRouteDistanceInput() {
    return this._defaultRouteDistance;
  }

  // dial_on_demand - computed: false, optional: true, required: false
  private _dialOnDemand?: boolean | cdktf.IResolvable; 
  public get dialOnDemand() {
    return this.getBooleanAttribute('dial_on_demand');
  }
  public set dialOnDemand(value: boolean | cdktf.IResolvable) {
    this._dialOnDemand = value;
  }
  public resetDialOnDemand() {
    this._dialOnDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dialOnDemandInput() {
    return this._dialOnDemand;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // ipsec_secret - computed: false, optional: true, required: false
  private _ipsecSecret?: string; 
  public get ipsecSecret() {
    return this.getStringAttribute('ipsec_secret');
  }
  public set ipsecSecret(value: string) {
    this._ipsecSecret = value;
  }
  public resetIpsecSecret() {
    this._ipsecSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecSecretInput() {
    return this._ipsecSecret;
  }

  // keepalive_timeout - computed: false, optional: true, required: false
  private _keepaliveTimeout?: number; 
  public get keepaliveTimeout() {
    return this.getNumberAttribute('keepalive_timeout');
  }
  public set keepaliveTimeout(value: number) {
    this._keepaliveTimeout = value;
  }
  public resetKeepaliveTimeout() {
    this._keepaliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveTimeoutInput() {
    return this._keepaliveTimeout;
  }

  // l2tp_proto_version - computed: false, optional: true, required: false
  private _l2TpProtoVersion?: string; 
  public get l2TpProtoVersion() {
    return this.getStringAttribute('l2tp_proto_version');
  }
  public set l2TpProtoVersion(value: string) {
    this._l2TpProtoVersion = value;
  }
  public resetL2TpProtoVersion() {
    this._l2TpProtoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2TpProtoVersionInput() {
    return this._l2TpProtoVersion;
  }

  // l2tpv3_circuit_id - computed: false, optional: true, required: false
  private _l2Tpv3CircuitId?: string; 
  public get l2Tpv3CircuitId() {
    return this.getStringAttribute('l2tpv3_circuit_id');
  }
  public set l2Tpv3CircuitId(value: string) {
    this._l2Tpv3CircuitId = value;
  }
  public resetL2Tpv3CircuitId() {
    this._l2Tpv3CircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Tpv3CircuitIdInput() {
    return this._l2Tpv3CircuitId;
  }

  // l2tpv3_cookie_length - computed: false, optional: true, required: false
  private _l2Tpv3CookieLength?: number; 
  public get l2Tpv3CookieLength() {
    return this.getNumberAttribute('l2tpv3_cookie_length');
  }
  public set l2Tpv3CookieLength(value: number) {
    this._l2Tpv3CookieLength = value;
  }
  public resetL2Tpv3CookieLength() {
    this._l2Tpv3CookieLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Tpv3CookieLengthInput() {
    return this._l2Tpv3CookieLength;
  }

  // l2tpv3_digest_hash - computed: false, optional: true, required: false
  private _l2Tpv3DigestHash?: string; 
  public get l2Tpv3DigestHash() {
    return this.getStringAttribute('l2tpv3_digest_hash');
  }
  public set l2Tpv3DigestHash(value: string) {
    this._l2Tpv3DigestHash = value;
  }
  public resetL2Tpv3DigestHash() {
    this._l2Tpv3DigestHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2Tpv3DigestHashInput() {
    return this._l2Tpv3DigestHash;
  }

  // max_mru - computed: false, optional: true, required: false
  private _maxMru?: number; 
  public get maxMru() {
    return this.getNumberAttribute('max_mru');
  }
  public set maxMru(value: number) {
    this._maxMru = value;
  }
  public resetMaxMru() {
    this._maxMru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMruInput() {
    return this._maxMru;
  }

  // max_mtu - computed: false, optional: true, required: false
  private _maxMtu?: number; 
  public get maxMtu() {
    return this.getNumberAttribute('max_mtu');
  }
  public set maxMtu(value: number) {
    this._maxMtu = value;
  }
  public resetMaxMtu() {
    this._maxMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMtuInput() {
    return this._maxMtu;
  }

  // mrru - computed: false, optional: true, required: false
  private _mrru?: string; 
  public get mrru() {
    return this.getStringAttribute('mrru');
  }
  public set mrru(value: string) {
    this._mrru = value;
  }
  public resetMrru() {
    this._mrru = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrruInput() {
    return this._mrru;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // random_source_port - computed: false, optional: true, required: false
  private _randomSourcePort?: boolean | cdktf.IResolvable; 
  public get randomSourcePort() {
    return this.getBooleanAttribute('random_source_port');
  }
  public set randomSourcePort(value: boolean | cdktf.IResolvable) {
    this._randomSourcePort = value;
  }
  public resetRandomSourcePort() {
    this._randomSourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomSourcePortInput() {
    return this._randomSourcePort;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // use_ipsec - computed: false, optional: true, required: false
  private _useIpsec?: boolean | cdktf.IResolvable; 
  public get useIpsec() {
    return this.getBooleanAttribute('use_ipsec');
  }
  public set useIpsec(value: boolean | cdktf.IResolvable) {
    this._useIpsec = value;
  }
  public resetUseIpsec() {
    this._useIpsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpsecInput() {
    return this._useIpsec;
  }

  // use_peer_dns - computed: false, optional: true, required: false
  private _usePeerDns?: string; 
  public get usePeerDns() {
    return this.getStringAttribute('use_peer_dns');
  }
  public set usePeerDns(value: string) {
    this._usePeerDns = value;
  }
  public resetUsePeerDns() {
    this._usePeerDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePeerDnsInput() {
    return this._usePeerDns;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      add_default_route: cdktf.booleanToTerraform(this._addDefaultRoute),
      allow: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allow),
      allow_fast_path: cdktf.booleanToTerraform(this._allowFastPath),
      comment: cdktf.stringToTerraform(this._comment),
      connect_to: cdktf.stringToTerraform(this._connectTo),
      default_route_distance: cdktf.numberToTerraform(this._defaultRouteDistance),
      dial_on_demand: cdktf.booleanToTerraform(this._dialOnDemand),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      ipsec_secret: cdktf.stringToTerraform(this._ipsecSecret),
      keepalive_timeout: cdktf.numberToTerraform(this._keepaliveTimeout),
      l2tp_proto_version: cdktf.stringToTerraform(this._l2TpProtoVersion),
      l2tpv3_circuit_id: cdktf.stringToTerraform(this._l2Tpv3CircuitId),
      l2tpv3_cookie_length: cdktf.numberToTerraform(this._l2Tpv3CookieLength),
      l2tpv3_digest_hash: cdktf.stringToTerraform(this._l2Tpv3DigestHash),
      max_mru: cdktf.numberToTerraform(this._maxMru),
      max_mtu: cdktf.numberToTerraform(this._maxMtu),
      mrru: cdktf.stringToTerraform(this._mrru),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      random_source_port: cdktf.booleanToTerraform(this._randomSourcePort),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      use_ipsec: cdktf.booleanToTerraform(this._useIpsec),
      use_peer_dns: cdktf.stringToTerraform(this._usePeerDns),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      add_default_route: {
        value: cdktf.booleanToHclTerraform(this._addDefaultRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allow),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_fast_path: {
        value: cdktf.booleanToHclTerraform(this._allowFastPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_to: {
        value: cdktf.stringToHclTerraform(this._connectTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_route_distance: {
        value: cdktf.numberToHclTerraform(this._defaultRouteDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dial_on_demand: {
        value: cdktf.booleanToHclTerraform(this._dialOnDemand),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_secret: {
        value: cdktf.stringToHclTerraform(this._ipsecSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_timeout: {
        value: cdktf.numberToHclTerraform(this._keepaliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2tp_proto_version: {
        value: cdktf.stringToHclTerraform(this._l2TpProtoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2tpv3_circuit_id: {
        value: cdktf.stringToHclTerraform(this._l2Tpv3CircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2tpv3_cookie_length: {
        value: cdktf.numberToHclTerraform(this._l2Tpv3CookieLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l2tpv3_digest_hash: {
        value: cdktf.stringToHclTerraform(this._l2Tpv3DigestHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_mru: {
        value: cdktf.numberToHclTerraform(this._maxMru),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_mtu: {
        value: cdktf.numberToHclTerraform(this._maxMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mrru: {
        value: cdktf.stringToHclTerraform(this._mrru),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random_source_port: {
        value: cdktf.booleanToHclTerraform(this._randomSourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_ipsec: {
        value: cdktf.booleanToHclTerraform(this._useIpsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_peer_dns: {
        value: cdktf.stringToHclTerraform(this._usePeerDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
