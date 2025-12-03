// https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWirelessConnectListConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#___path___ InterfaceWirelessConnectList#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#___ts___ InterfaceWirelessConnectList#___ts___}
  */
  readonly ts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#allow_signal_out_of_range InterfaceWirelessConnectList#allow_signal_out_of_range}
  */
  readonly allowSignalOutOfRange?: string;
  /**
  * Rule matches if area value of AP (a proprietary extension) begins with specified value.area value is a proprietary extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#area_prefix InterfaceWirelessConnectList#area_prefix}
  */
  readonly areaPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#comment InterfaceWirelessConnectList#comment}
  */
  readonly comment?: string;
  /**
  * Available options: yes - Connect to access point that matches this rule. no - Do not connect to any access point that matches this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#connect InterfaceWirelessConnectList#connect}
  */
  readonly connect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#disabled InterfaceWirelessConnectList#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#id InterfaceWirelessConnectList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#interface InterfaceWirelessConnectList#interface}
  */
  readonly interface: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#interworking InterfaceWirelessConnectList#interworking}
  */
  readonly interworking?: string;
  /**
  * Additional Steps Required for Access. Set to yes, if a user should take additional steps to access the internet, like the walled garden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_asra InterfaceWirelessConnectList#iw_asra}
  */
  readonly iwAsra?: string;
  /**
  * This property is only effective when `asra` is set to `yes`. Value of `url` is optional and not needed if `dns-redirection` or `online-enrollment` is selected. To set the value of `url` to empty string use double quotes. For example: `authentication-types=online-enrollment:""`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_authentication_types InterfaceWirelessConnectList#iw_authentication_types}
  */
  readonly iwAuthenticationTypes?: string;
  /**
  * This option allows to provide information about the allowed IP protocols and ports. This information can be provided in ANQP response. The first number represents the IP protocol number, the second number represents a port number.
  *   * closed - set if protocol and port combination is not allowed;
  *   * open - set if protocol and port combination is allowed;
  *   * unknown - set if protocol and port combination is either open or closed.
  * 
  * Example: `connection-capabilities=6:80:open,17:5060:closed`Setting such a value on an Access Point informs the Wireless client, which is connecting to the Access Point, that HTTP (6 - TCP, 80 - HTTP) is allowed and VoIP (17 - UDP; 5060 - VoIP) is not allowed. This property does not restrict or allow usage of these protocols and ports, it only gives information to station device which is connecting to Access Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_connection_capabilities InterfaceWirelessConnectList#iw_connection_capabilities}
  */
  readonly iwConnectionCapabilities?: string;
  /**
  * Emergency services reachable (ESR). Set to yes in order to indicate that emergency services are reachable through the access point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_esr InterfaceWirelessConnectList#iw_esr}
  */
  readonly iwEsr?: string;
  /**
  * Homogenous extended service set identifier (HESSID). Devices that provide access to same external networks are in one homogenous extended service set. This service set can be identified by HESSID that is the same on all access points in this set. 6-byte value of HESSID is represented as MAC address. It should be globally unique, therefore it is advised to use one of the MAC address of access point in the service set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_hessid InterfaceWirelessConnectList#iw_hessid}
  */
  readonly iwHessid?: string;
  /**
  * Indicate Hotspot 2.0 capability of the Access Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_hotspot20 InterfaceWirelessConnectList#iw_hotspot20}
  */
  readonly iwHotspot20?: string;
  /**
  * Downstream Group-Addressed Forwarding (DGAF). Sets value of DGAF bit to indicate whether multicast and broadcast frames to clients are disabled or enabled.
  *   * yes - multicast and broadcast frames to clients are enabled;
  *   * no - multicast and broadcast frames to clients are disabled.
  * To disable multicast and broadcast frames set `multicast-helper=full`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_hotspot20_dgaf InterfaceWirelessConnectList#iw_hotspot20_dgaf}
  */
  readonly iwHotspot20Dgaf?: string;
  /**
  * Whether the internet is available through this connection or not. This information is included in the Interworking element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_internet InterfaceWirelessConnectList#iw_internet}
  */
  readonly iwInternet?: string;
  /**
  * Information about what IPv4 address and access are available.
  *   * not-available - Address type not available;
  *   * public - public IPv4 address available;
  *   * port-restricted - port-restricted IPv4 address available;
  *   * single-nated - single NATed private IPv4 address available;
  *   * double-nated - double NATed private IPv4 address available;
  *   * port-restricted-single-nated -port-restricted IPv4 address and single NATed IPv4 address available;
  *   * port-restricted-double-nated - port-restricted IPv4 address and double NATed IPv4 address available;
  *   * unknown - availability of the address type is not known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_ipv4_availability InterfaceWirelessConnectList#iw_ipv4_availability}
  */
  readonly iwIpv4Availability?: string;
  /**
  * Information about what IPv6 address and access are available.
  *   * not-available - Address type not available;
  *   * available - address type available;
  *   * unknown - availability of the address type is not known.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_ipv6_availability InterfaceWirelessConnectList#iw_ipv6_availability}
  */
  readonly iwIpv6Availability?: string;
  /**
  * Information about network access type.
  *   * emergency-only - a network dedicated and limited to accessing emergency services;
  *   * personal-device - a network of personal devices. An example of this type of network is a camera that is attached to a printer, thereby forming a network for the purpose of printing pictures;
  *   * private - network for users with user accounts. Usually used in enterprises for employees, not guests;
  *   * private-with-guest - same as private, but guest accounts are available;
  *   * public-chargeable - a network that is available to anyone willing to pay. For example, a subscription to Hotspot 2.0 service or in-room internet access in a hotel;
  *   * public-free - network is available to anyone without any fee. For example, municipal network in city or airport Hotspot;
  *   * test - network used for testing and experimental uses. Not used in production;
  *   * wildcard - is used on Wireless clients. Sending probe request with a wildcard as network type value will make all Interworking Access Points respond despite their actual network-type setting.
  * 
  * A client sends a probe request frame with network-type set to value it is interested in. It will receive replies only from access points with the same value (except the case of wildcard).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_network_type InterfaceWirelessConnectList#iw_network_type}
  */
  readonly iwNetworkType?: string;
  /**
  * Information about supported realms and the corresponding EAP method. `realms=example.com:eap-tls,foo.ba:not-specified`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_realms InterfaceWirelessConnectList#iw_realms}
  */
  readonly iwRealms?: string;
  /**
  * Organization identifier (OI) usually are 24-bit is unique identifiers like organizationally unique identifier (OUI) or company identifier (CID). In some cases, OI is longer for example OUI-36.A subscription service provider (SSP) can be specified by its OI. roaming-ois property can contain zero or more SSPs OIs whose networks are accessible via this AP. Length of OI should be specified before OI itself. For example, to set E4-8D-8C and 6C-3B-6B: `roaming-ois=03E48D8C036C3B6B`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_roaming_ois InterfaceWirelessConnectList#iw_roaming_ois}
  */
  readonly iwRoamingOis?: string;
  /**
  * Unauthenticated emergency service accessible (UESA).
  *   * no - indicates that no unauthenticated emergency services are reachable through this Access Point;
  *   * yes - indicates that higher layer unauthenticated emergency services are reachable through this Access Point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_uesa InterfaceWirelessConnectList#iw_uesa}
  */
  readonly iwUesa?: string;
  /**
  * Specify the venue in which the Access Point is located. Choose the value from available ones. Some examples:
  *    ```
  *   venue=business-bank
  *   venue=mercantile-shopping-mall
  *   venue=educational-university-or-college
  *    ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#iw_venue InterfaceWirelessConnectList#iw_venue}
  */
  readonly iwVenue?: string;
  /**
  * Rule matches only AP with the specified MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#mac_address InterfaceWirelessConnectList#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Name of security profile that is used when connecting to matching access points, If value of this property is none, then security profile specified in the interface configuration will be used. In station mode, rule will match only access points that can support specified security profile. Value none will match access point that supports security profile that is specified in the interface configuration. In access point mode value of this property will not be used to match remote devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#security_profile InterfaceWirelessConnectList#security_profile}
  */
  readonly securityProfile?: string;
  /**
  * Rule matches if signal strength of the access point is within the range. If station establishes connection to access point that is matched by this rule, it will disconnect from that access point when signal strength goes out of the specified range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#signal_range InterfaceWirelessConnectList#signal_range}
  */
  readonly signalRange?: string;
  /**
  * Rule matches access points that have this SSID. Empty value matches any SSID. This property has effect only when station mode interface ssid is empty, or when access point mode interface has wds-ignore-ssid=yes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#ssid InterfaceWirelessConnectList#ssid}
  */
  readonly ssid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#three_gpp InterfaceWirelessConnectList#three_gpp}
  */
  readonly threeGpp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#wireless_protocol InterfaceWirelessConnectList#wireless_protocol}
  */
  readonly wirelessProtocol?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list routeros_interface_wireless_connect_list}
*/
export class InterfaceWirelessConnectList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireless_connect_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWirelessConnectList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWirelessConnectList to import
  * @param importFromId The id of the existing InterfaceWirelessConnectList that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWirelessConnectList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireless_connect_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.96.0/docs/resources/interface_wireless_connect_list routeros_interface_wireless_connect_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWirelessConnectListConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceWirelessConnectListConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireless_connect_list',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.96.0',
        providerVersionConstraint: '1.96.0'
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
    this._ts = config.ts;
    this._allowSignalOutOfRange = config.allowSignalOutOfRange;
    this._areaPrefix = config.areaPrefix;
    this._comment = config.comment;
    this._connect = config.connect;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._interworking = config.interworking;
    this._iwAsra = config.iwAsra;
    this._iwAuthenticationTypes = config.iwAuthenticationTypes;
    this._iwConnectionCapabilities = config.iwConnectionCapabilities;
    this._iwEsr = config.iwEsr;
    this._iwHessid = config.iwHessid;
    this._iwHotspot20 = config.iwHotspot20;
    this._iwHotspot20Dgaf = config.iwHotspot20Dgaf;
    this._iwInternet = config.iwInternet;
    this._iwIpv4Availability = config.iwIpv4Availability;
    this._iwIpv6Availability = config.iwIpv6Availability;
    this._iwNetworkType = config.iwNetworkType;
    this._iwRealms = config.iwRealms;
    this._iwRoamingOis = config.iwRoamingOis;
    this._iwUesa = config.iwUesa;
    this._iwVenue = config.iwVenue;
    this._macAddress = config.macAddress;
    this._securityProfile = config.securityProfile;
    this._signalRange = config.signalRange;
    this._ssid = config.ssid;
    this._threeGpp = config.threeGpp;
    this._wirelessProtocol = config.wirelessProtocol;
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

  // ___ts___ - computed: false, optional: true, required: false
  private _ts?: string; 
  public get ts() {
    return this.getStringAttribute('___ts___');
  }
  public set ts(value: string) {
    this._ts = value;
  }
  public resetTs() {
    this._ts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsInput() {
    return this._ts;
  }

  // allow_signal_out_of_range - computed: false, optional: true, required: false
  private _allowSignalOutOfRange?: string; 
  public get allowSignalOutOfRange() {
    return this.getStringAttribute('allow_signal_out_of_range');
  }
  public set allowSignalOutOfRange(value: string) {
    this._allowSignalOutOfRange = value;
  }
  public resetAllowSignalOutOfRange() {
    this._allowSignalOutOfRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSignalOutOfRangeInput() {
    return this._allowSignalOutOfRange;
  }

  // area_prefix - computed: false, optional: true, required: false
  private _areaPrefix?: string; 
  public get areaPrefix() {
    return this.getStringAttribute('area_prefix');
  }
  public set areaPrefix(value: string) {
    this._areaPrefix = value;
  }
  public resetAreaPrefix() {
    this._areaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaPrefixInput() {
    return this._areaPrefix;
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

  // connect - computed: false, optional: true, required: false
  private _connect?: boolean | cdktf.IResolvable; 
  public get connect() {
    return this.getBooleanAttribute('connect');
  }
  public set connect(value: boolean | cdktf.IResolvable) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
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

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interworking - computed: false, optional: true, required: false
  private _interworking?: string; 
  public get interworking() {
    return this.getStringAttribute('interworking');
  }
  public set interworking(value: string) {
    this._interworking = value;
  }
  public resetInterworking() {
    this._interworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interworkingInput() {
    return this._interworking;
  }

  // iw_asra - computed: false, optional: true, required: false
  private _iwAsra?: string; 
  public get iwAsra() {
    return this.getStringAttribute('iw_asra');
  }
  public set iwAsra(value: string) {
    this._iwAsra = value;
  }
  public resetIwAsra() {
    this._iwAsra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwAsraInput() {
    return this._iwAsra;
  }

  // iw_authentication_types - computed: false, optional: true, required: false
  private _iwAuthenticationTypes?: string; 
  public get iwAuthenticationTypes() {
    return this.getStringAttribute('iw_authentication_types');
  }
  public set iwAuthenticationTypes(value: string) {
    this._iwAuthenticationTypes = value;
  }
  public resetIwAuthenticationTypes() {
    this._iwAuthenticationTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwAuthenticationTypesInput() {
    return this._iwAuthenticationTypes;
  }

  // iw_connection_capabilities - computed: false, optional: true, required: false
  private _iwConnectionCapabilities?: string; 
  public get iwConnectionCapabilities() {
    return this.getStringAttribute('iw_connection_capabilities');
  }
  public set iwConnectionCapabilities(value: string) {
    this._iwConnectionCapabilities = value;
  }
  public resetIwConnectionCapabilities() {
    this._iwConnectionCapabilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwConnectionCapabilitiesInput() {
    return this._iwConnectionCapabilities;
  }

  // iw_esr - computed: false, optional: true, required: false
  private _iwEsr?: string; 
  public get iwEsr() {
    return this.getStringAttribute('iw_esr');
  }
  public set iwEsr(value: string) {
    this._iwEsr = value;
  }
  public resetIwEsr() {
    this._iwEsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwEsrInput() {
    return this._iwEsr;
  }

  // iw_hessid - computed: false, optional: true, required: false
  private _iwHessid?: string; 
  public get iwHessid() {
    return this.getStringAttribute('iw_hessid');
  }
  public set iwHessid(value: string) {
    this._iwHessid = value;
  }
  public resetIwHessid() {
    this._iwHessid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwHessidInput() {
    return this._iwHessid;
  }

  // iw_hotspot20 - computed: false, optional: true, required: false
  private _iwHotspot20?: string; 
  public get iwHotspot20() {
    return this.getStringAttribute('iw_hotspot20');
  }
  public set iwHotspot20(value: string) {
    this._iwHotspot20 = value;
  }
  public resetIwHotspot20() {
    this._iwHotspot20 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwHotspot20Input() {
    return this._iwHotspot20;
  }

  // iw_hotspot20_dgaf - computed: false, optional: true, required: false
  private _iwHotspot20Dgaf?: string; 
  public get iwHotspot20Dgaf() {
    return this.getStringAttribute('iw_hotspot20_dgaf');
  }
  public set iwHotspot20Dgaf(value: string) {
    this._iwHotspot20Dgaf = value;
  }
  public resetIwHotspot20Dgaf() {
    this._iwHotspot20Dgaf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwHotspot20DgafInput() {
    return this._iwHotspot20Dgaf;
  }

  // iw_internet - computed: false, optional: true, required: false
  private _iwInternet?: string; 
  public get iwInternet() {
    return this.getStringAttribute('iw_internet');
  }
  public set iwInternet(value: string) {
    this._iwInternet = value;
  }
  public resetIwInternet() {
    this._iwInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwInternetInput() {
    return this._iwInternet;
  }

  // iw_ipv4_availability - computed: false, optional: true, required: false
  private _iwIpv4Availability?: string; 
  public get iwIpv4Availability() {
    return this.getStringAttribute('iw_ipv4_availability');
  }
  public set iwIpv4Availability(value: string) {
    this._iwIpv4Availability = value;
  }
  public resetIwIpv4Availability() {
    this._iwIpv4Availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwIpv4AvailabilityInput() {
    return this._iwIpv4Availability;
  }

  // iw_ipv6_availability - computed: false, optional: true, required: false
  private _iwIpv6Availability?: string; 
  public get iwIpv6Availability() {
    return this.getStringAttribute('iw_ipv6_availability');
  }
  public set iwIpv6Availability(value: string) {
    this._iwIpv6Availability = value;
  }
  public resetIwIpv6Availability() {
    this._iwIpv6Availability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwIpv6AvailabilityInput() {
    return this._iwIpv6Availability;
  }

  // iw_network_type - computed: false, optional: true, required: false
  private _iwNetworkType?: string; 
  public get iwNetworkType() {
    return this.getStringAttribute('iw_network_type');
  }
  public set iwNetworkType(value: string) {
    this._iwNetworkType = value;
  }
  public resetIwNetworkType() {
    this._iwNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwNetworkTypeInput() {
    return this._iwNetworkType;
  }

  // iw_realms - computed: false, optional: true, required: false
  private _iwRealms?: string; 
  public get iwRealms() {
    return this.getStringAttribute('iw_realms');
  }
  public set iwRealms(value: string) {
    this._iwRealms = value;
  }
  public resetIwRealms() {
    this._iwRealms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwRealmsInput() {
    return this._iwRealms;
  }

  // iw_roaming_ois - computed: false, optional: true, required: false
  private _iwRoamingOis?: string; 
  public get iwRoamingOis() {
    return this.getStringAttribute('iw_roaming_ois');
  }
  public set iwRoamingOis(value: string) {
    this._iwRoamingOis = value;
  }
  public resetIwRoamingOis() {
    this._iwRoamingOis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwRoamingOisInput() {
    return this._iwRoamingOis;
  }

  // iw_uesa - computed: false, optional: true, required: false
  private _iwUesa?: string; 
  public get iwUesa() {
    return this.getStringAttribute('iw_uesa');
  }
  public set iwUesa(value: string) {
    this._iwUesa = value;
  }
  public resetIwUesa() {
    this._iwUesa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwUesaInput() {
    return this._iwUesa;
  }

  // iw_venue - computed: false, optional: true, required: false
  private _iwVenue?: string; 
  public get iwVenue() {
    return this.getStringAttribute('iw_venue');
  }
  public set iwVenue(value: string) {
    this._iwVenue = value;
  }
  public resetIwVenue() {
    this._iwVenue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iwVenueInput() {
    return this._iwVenue;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile?: string; 
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }
  public set securityProfile(value: string) {
    this._securityProfile = value;
  }
  public resetSecurityProfile() {
    this._securityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile;
  }

  // signal_range - computed: false, optional: true, required: false
  private _signalRange?: string; 
  public get signalRange() {
    return this.getStringAttribute('signal_range');
  }
  public set signalRange(value: string) {
    this._signalRange = value;
  }
  public resetSignalRange() {
    this._signalRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalRangeInput() {
    return this._signalRange;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // three_gpp - computed: false, optional: true, required: false
  private _threeGpp?: string; 
  public get threeGpp() {
    return this.getStringAttribute('three_gpp');
  }
  public set threeGpp(value: string) {
    this._threeGpp = value;
  }
  public resetThreeGpp() {
    this._threeGpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threeGppInput() {
    return this._threeGpp;
  }

  // wireless_protocol - computed: false, optional: true, required: false
  private _wirelessProtocol?: string; 
  public get wirelessProtocol() {
    return this.getStringAttribute('wireless_protocol');
  }
  public set wirelessProtocol(value: string) {
    this._wirelessProtocol = value;
  }
  public resetWirelessProtocol() {
    this._wirelessProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessProtocolInput() {
    return this._wirelessProtocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___ts___: cdktf.stringToTerraform(this._ts),
      allow_signal_out_of_range: cdktf.stringToTerraform(this._allowSignalOutOfRange),
      area_prefix: cdktf.stringToTerraform(this._areaPrefix),
      comment: cdktf.stringToTerraform(this._comment),
      connect: cdktf.booleanToTerraform(this._connect),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      interworking: cdktf.stringToTerraform(this._interworking),
      iw_asra: cdktf.stringToTerraform(this._iwAsra),
      iw_authentication_types: cdktf.stringToTerraform(this._iwAuthenticationTypes),
      iw_connection_capabilities: cdktf.stringToTerraform(this._iwConnectionCapabilities),
      iw_esr: cdktf.stringToTerraform(this._iwEsr),
      iw_hessid: cdktf.stringToTerraform(this._iwHessid),
      iw_hotspot20: cdktf.stringToTerraform(this._iwHotspot20),
      iw_hotspot20_dgaf: cdktf.stringToTerraform(this._iwHotspot20Dgaf),
      iw_internet: cdktf.stringToTerraform(this._iwInternet),
      iw_ipv4_availability: cdktf.stringToTerraform(this._iwIpv4Availability),
      iw_ipv6_availability: cdktf.stringToTerraform(this._iwIpv6Availability),
      iw_network_type: cdktf.stringToTerraform(this._iwNetworkType),
      iw_realms: cdktf.stringToTerraform(this._iwRealms),
      iw_roaming_ois: cdktf.stringToTerraform(this._iwRoamingOis),
      iw_uesa: cdktf.stringToTerraform(this._iwUesa),
      iw_venue: cdktf.stringToTerraform(this._iwVenue),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      security_profile: cdktf.stringToTerraform(this._securityProfile),
      signal_range: cdktf.stringToTerraform(this._signalRange),
      ssid: cdktf.stringToTerraform(this._ssid),
      three_gpp: cdktf.stringToTerraform(this._threeGpp),
      wireless_protocol: cdktf.stringToTerraform(this._wirelessProtocol),
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
      ___ts___: {
        value: cdktf.stringToHclTerraform(this._ts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_signal_out_of_range: {
        value: cdktf.stringToHclTerraform(this._allowSignalOutOfRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area_prefix: {
        value: cdktf.stringToHclTerraform(this._areaPrefix),
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
      connect: {
        value: cdktf.booleanToHclTerraform(this._connect),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interworking: {
        value: cdktf.stringToHclTerraform(this._interworking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_asra: {
        value: cdktf.stringToHclTerraform(this._iwAsra),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_authentication_types: {
        value: cdktf.stringToHclTerraform(this._iwAuthenticationTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_connection_capabilities: {
        value: cdktf.stringToHclTerraform(this._iwConnectionCapabilities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_esr: {
        value: cdktf.stringToHclTerraform(this._iwEsr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_hessid: {
        value: cdktf.stringToHclTerraform(this._iwHessid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_hotspot20: {
        value: cdktf.stringToHclTerraform(this._iwHotspot20),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_hotspot20_dgaf: {
        value: cdktf.stringToHclTerraform(this._iwHotspot20Dgaf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_internet: {
        value: cdktf.stringToHclTerraform(this._iwInternet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_ipv4_availability: {
        value: cdktf.stringToHclTerraform(this._iwIpv4Availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_ipv6_availability: {
        value: cdktf.stringToHclTerraform(this._iwIpv6Availability),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_network_type: {
        value: cdktf.stringToHclTerraform(this._iwNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_realms: {
        value: cdktf.stringToHclTerraform(this._iwRealms),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_roaming_ois: {
        value: cdktf.stringToHclTerraform(this._iwRoamingOis),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_uesa: {
        value: cdktf.stringToHclTerraform(this._iwUesa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iw_venue: {
        value: cdktf.stringToHclTerraform(this._iwVenue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile: {
        value: cdktf.stringToHclTerraform(this._securityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_range: {
        value: cdktf.stringToHclTerraform(this._signalRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      three_gpp: {
        value: cdktf.stringToHclTerraform(this._threeGpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_protocol: {
        value: cdktf.stringToHclTerraform(this._wirelessProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
