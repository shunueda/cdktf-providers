// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#aggregate_algorithm SystemInterface#aggregate_algorithm}
  */
  readonly aggregateAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#aggregate_mode SystemInterface#aggregate_mode}
  */
  readonly aggregateMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#allowaccess SystemInterface#allowaccess}
  */
  readonly allowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dedicate_to_management SystemInterface#dedicate_to_management}
  */
  readonly dedicateToManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#default_gw SystemInterface#default_gw}
  */
  readonly defaultGw?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dhcp_gateway SystemInterface#dhcp_gateway}
  */
  readonly dhcpGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dhcp_gw_distance SystemInterface#dhcp_gw_distance}
  */
  readonly dhcpGwDistance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dhcp_gw_override SystemInterface#dhcp_gw_override}
  */
  readonly dhcpGwOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dhcp_ip_overlap SystemInterface#dhcp_ip_overlap}
  */
  readonly dhcpIpOverlap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#disc_retry_timeout SystemInterface#disc_retry_timeout}
  */
  readonly discRetryTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#dns_server_override SystemInterface#dns_server_override}
  */
  readonly dnsServerOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#floating SystemInterface#floating}
  */
  readonly floating?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#floating_ip SystemInterface#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#floating_ip6 SystemInterface#floating_ip6}
  */
  readonly floatingIp6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#id SystemInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#interface SystemInterface#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#ip SystemInterface#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#ip6 SystemInterface#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#mkey SystemInterface#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#mode SystemInterface#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#mtu SystemInterface#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#password SystemInterface#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#redundant_member SystemInterface#redundant_member}
  */
  readonly redundantMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#secondary_ip SystemInterface#secondary_ip}
  */
  readonly secondaryIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#speed SystemInterface#speed}
  */
  readonly speed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#status SystemInterface#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#traffic_group SystemInterface#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#trust_ip SystemInterface#trust_ip}
  */
  readonly trustIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#type SystemInterface#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#username SystemInterface#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#vdom SystemInterface#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#vlanid SystemInterface#vlanid}
  */
  readonly vlanid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#wccp SystemInterface#wccp}
  */
  readonly wccp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface fortiadc_system_interface}
*/
export class SystemInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterface to import
  * @param importFromId The id of the existing SystemInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface fortiadc_system_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_interface',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregateAlgorithm = config.aggregateAlgorithm;
    this._aggregateMode = config.aggregateMode;
    this._allowaccess = config.allowaccess;
    this._dedicateToManagement = config.dedicateToManagement;
    this._defaultGw = config.defaultGw;
    this._dhcpGateway = config.dhcpGateway;
    this._dhcpGwDistance = config.dhcpGwDistance;
    this._dhcpGwOverride = config.dhcpGwOverride;
    this._dhcpIpOverlap = config.dhcpIpOverlap;
    this._discRetryTimeout = config.discRetryTimeout;
    this._dnsServerOverride = config.dnsServerOverride;
    this._floating = config.floating;
    this._floatingIp = config.floatingIp;
    this._floatingIp6 = config.floatingIp6;
    this._id = config.id;
    this._interface = config.interface;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._mkey = config.mkey;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._password = config.password;
    this._redundantMember = config.redundantMember;
    this._secondaryIp = config.secondaryIp;
    this._speed = config.speed;
    this._status = config.status;
    this._trafficGroup = config.trafficGroup;
    this._trustIp = config.trustIp;
    this._type = config.type;
    this._username = config.username;
    this._vdom = config.vdom;
    this._vlanid = config.vlanid;
    this._wccp = config.wccp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_algorithm - computed: true, optional: true, required: false
  private _aggregateAlgorithm?: string; 
  public get aggregateAlgorithm() {
    return this.getStringAttribute('aggregate_algorithm');
  }
  public set aggregateAlgorithm(value: string) {
    this._aggregateAlgorithm = value;
  }
  public resetAggregateAlgorithm() {
    this._aggregateAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateAlgorithmInput() {
    return this._aggregateAlgorithm;
  }

  // aggregate_mode - computed: true, optional: true, required: false
  private _aggregateMode?: string; 
  public get aggregateMode() {
    return this.getStringAttribute('aggregate_mode');
  }
  public set aggregateMode(value: string) {
    this._aggregateMode = value;
  }
  public resetAggregateMode() {
    this._aggregateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateModeInput() {
    return this._aggregateMode;
  }

  // allowaccess - computed: true, optional: true, required: false
  private _allowaccess?: string; 
  public get allowaccess() {
    return this.getStringAttribute('allowaccess');
  }
  public set allowaccess(value: string) {
    this._allowaccess = value;
  }
  public resetAllowaccess() {
    this._allowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowaccessInput() {
    return this._allowaccess;
  }

  // dedicate_to_management - computed: true, optional: true, required: false
  private _dedicateToManagement?: string; 
  public get dedicateToManagement() {
    return this.getStringAttribute('dedicate_to_management');
  }
  public set dedicateToManagement(value: string) {
    this._dedicateToManagement = value;
  }
  public resetDedicateToManagement() {
    this._dedicateToManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicateToManagementInput() {
    return this._dedicateToManagement;
  }

  // default_gw - computed: true, optional: true, required: false
  private _defaultGw?: string; 
  public get defaultGw() {
    return this.getStringAttribute('default_gw');
  }
  public set defaultGw(value: string) {
    this._defaultGw = value;
  }
  public resetDefaultGw() {
    this._defaultGw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGwInput() {
    return this._defaultGw;
  }

  // dhcp_gateway - computed: true, optional: true, required: false
  private _dhcpGateway?: string; 
  public get dhcpGateway() {
    return this.getStringAttribute('dhcp_gateway');
  }
  public set dhcpGateway(value: string) {
    this._dhcpGateway = value;
  }
  public resetDhcpGateway() {
    this._dhcpGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGatewayInput() {
    return this._dhcpGateway;
  }

  // dhcp_gw_distance - computed: true, optional: true, required: false
  private _dhcpGwDistance?: string; 
  public get dhcpGwDistance() {
    return this.getStringAttribute('dhcp_gw_distance');
  }
  public set dhcpGwDistance(value: string) {
    this._dhcpGwDistance = value;
  }
  public resetDhcpGwDistance() {
    this._dhcpGwDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGwDistanceInput() {
    return this._dhcpGwDistance;
  }

  // dhcp_gw_override - computed: true, optional: true, required: false
  private _dhcpGwOverride?: string; 
  public get dhcpGwOverride() {
    return this.getStringAttribute('dhcp_gw_override');
  }
  public set dhcpGwOverride(value: string) {
    this._dhcpGwOverride = value;
  }
  public resetDhcpGwOverride() {
    this._dhcpGwOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGwOverrideInput() {
    return this._dhcpGwOverride;
  }

  // dhcp_ip_overlap - computed: true, optional: true, required: false
  private _dhcpIpOverlap?: string; 
  public get dhcpIpOverlap() {
    return this.getStringAttribute('dhcp_ip_overlap');
  }
  public set dhcpIpOverlap(value: string) {
    this._dhcpIpOverlap = value;
  }
  public resetDhcpIpOverlap() {
    this._dhcpIpOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpIpOverlapInput() {
    return this._dhcpIpOverlap;
  }

  // disc_retry_timeout - computed: true, optional: true, required: false
  private _discRetryTimeout?: string; 
  public get discRetryTimeout() {
    return this.getStringAttribute('disc_retry_timeout');
  }
  public set discRetryTimeout(value: string) {
    this._discRetryTimeout = value;
  }
  public resetDiscRetryTimeout() {
    this._discRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discRetryTimeoutInput() {
    return this._discRetryTimeout;
  }

  // dns_server_override - computed: true, optional: true, required: false
  private _dnsServerOverride?: string; 
  public get dnsServerOverride() {
    return this.getStringAttribute('dns_server_override');
  }
  public set dnsServerOverride(value: string) {
    this._dnsServerOverride = value;
  }
  public resetDnsServerOverride() {
    this._dnsServerOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerOverrideInput() {
    return this._dnsServerOverride;
  }

  // floating - computed: true, optional: true, required: false
  private _floating?: string; 
  public get floating() {
    return this.getStringAttribute('floating');
  }
  public set floating(value: string) {
    this._floating = value;
  }
  public resetFloating() {
    this._floating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingInput() {
    return this._floating;
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip6 - computed: true, optional: true, required: false
  private _floatingIp6?: string; 
  public get floatingIp6() {
    return this.getStringAttribute('floating_ip6');
  }
  public set floatingIp6(value: string) {
    this._floatingIp6 = value;
  }
  public resetFloatingIp6() {
    this._floatingIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIp6Input() {
    return this._floatingIp6;
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

  // interface - computed: true, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
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

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // password - computed: true, optional: true, required: false
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

  // redundant_member - computed: true, optional: true, required: false
  private _redundantMember?: string; 
  public get redundantMember() {
    return this.getStringAttribute('redundant_member');
  }
  public set redundantMember(value: string) {
    this._redundantMember = value;
  }
  public resetRedundantMember() {
    this._redundantMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redundantMemberInput() {
    return this._redundantMember;
  }

  // secondary_ip - computed: true, optional: true, required: false
  private _secondaryIp?: string; 
  public get secondaryIp() {
    return this.getStringAttribute('secondary_ip');
  }
  public set secondaryIp(value: string) {
    this._secondaryIp = value;
  }
  public resetSecondaryIp() {
    this._secondaryIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpInput() {
    return this._secondaryIp;
  }

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // traffic_group - computed: true, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
  }

  // trust_ip - computed: true, optional: true, required: false
  private _trustIp?: string; 
  public get trustIp() {
    return this.getStringAttribute('trust_ip');
  }
  public set trustIp(value: string) {
    this._trustIp = value;
  }
  public resetTrustIp() {
    this._trustIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustIpInput() {
    return this._trustIp;
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

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vlanid - computed: true, optional: true, required: false
  private _vlanid?: string; 
  public get vlanid() {
    return this.getStringAttribute('vlanid');
  }
  public set vlanid(value: string) {
    this._vlanid = value;
  }
  public resetVlanid() {
    this._vlanid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanidInput() {
    return this._vlanid;
  }

  // wccp - computed: true, optional: true, required: false
  private _wccp?: string; 
  public get wccp() {
    return this.getStringAttribute('wccp');
  }
  public set wccp(value: string) {
    this._wccp = value;
  }
  public resetWccp() {
    this._wccp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wccpInput() {
    return this._wccp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregate_algorithm: cdktf.stringToTerraform(this._aggregateAlgorithm),
      aggregate_mode: cdktf.stringToTerraform(this._aggregateMode),
      allowaccess: cdktf.stringToTerraform(this._allowaccess),
      dedicate_to_management: cdktf.stringToTerraform(this._dedicateToManagement),
      default_gw: cdktf.stringToTerraform(this._defaultGw),
      dhcp_gateway: cdktf.stringToTerraform(this._dhcpGateway),
      dhcp_gw_distance: cdktf.stringToTerraform(this._dhcpGwDistance),
      dhcp_gw_override: cdktf.stringToTerraform(this._dhcpGwOverride),
      dhcp_ip_overlap: cdktf.stringToTerraform(this._dhcpIpOverlap),
      disc_retry_timeout: cdktf.stringToTerraform(this._discRetryTimeout),
      dns_server_override: cdktf.stringToTerraform(this._dnsServerOverride),
      floating: cdktf.stringToTerraform(this._floating),
      floating_ip: cdktf.stringToTerraform(this._floatingIp),
      floating_ip6: cdktf.stringToTerraform(this._floatingIp6),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      mkey: cdktf.stringToTerraform(this._mkey),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      password: cdktf.stringToTerraform(this._password),
      redundant_member: cdktf.stringToTerraform(this._redundantMember),
      secondary_ip: cdktf.stringToTerraform(this._secondaryIp),
      speed: cdktf.stringToTerraform(this._speed),
      status: cdktf.stringToTerraform(this._status),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      trust_ip: cdktf.stringToTerraform(this._trustIp),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      vdom: cdktf.stringToTerraform(this._vdom),
      vlanid: cdktf.stringToTerraform(this._vlanid),
      wccp: cdktf.stringToTerraform(this._wccp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregate_algorithm: {
        value: cdktf.stringToHclTerraform(this._aggregateAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aggregate_mode: {
        value: cdktf.stringToHclTerraform(this._aggregateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowaccess: {
        value: cdktf.stringToHclTerraform(this._allowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dedicate_to_management: {
        value: cdktf.stringToHclTerraform(this._dedicateToManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gw: {
        value: cdktf.stringToHclTerraform(this._defaultGw),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_gateway: {
        value: cdktf.stringToHclTerraform(this._dhcpGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_gw_distance: {
        value: cdktf.stringToHclTerraform(this._dhcpGwDistance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_gw_override: {
        value: cdktf.stringToHclTerraform(this._dhcpGwOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_ip_overlap: {
        value: cdktf.stringToHclTerraform(this._dhcpIpOverlap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disc_retry_timeout: {
        value: cdktf.stringToHclTerraform(this._discRetryTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_server_override: {
        value: cdktf.stringToHclTerraform(this._dnsServerOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating: {
        value: cdktf.stringToHclTerraform(this._floating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip: {
        value: cdktf.stringToHclTerraform(this._floatingIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip6: {
        value: cdktf.stringToHclTerraform(this._floatingIp6),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      redundant_member: {
        value: cdktf.stringToHclTerraform(this._redundantMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_ip: {
        value: cdktf.stringToHclTerraform(this._secondaryIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_ip: {
        value: cdktf.stringToHclTerraform(this._trustIp),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlanid: {
        value: cdktf.stringToHclTerraform(this._vlanid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wccp: {
        value: cdktf.stringToHclTerraform(this._wccp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
