// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceSubinterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the device this resource needs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#device_id DeviceSubinterfaces#device_id}
  */
  readonly deviceId: string;
  /**
  * IPv6 address enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#enable_ipv6 DeviceSubinterfaces#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Enable this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#enabled DeviceSubinterfaces#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#id DeviceSubinterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of chosen interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ifname DeviceSubinterfaces#ifname}
  */
  readonly ifname?: string;
  /**
  * IPv4 DHCP enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv4_dhcp_enabled DeviceSubinterfaces#ipv4_dhcp_enabled}
  */
  readonly ipv4DhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv4 DHCP Route Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv4_dhcp_route_metric DeviceSubinterfaces#ipv4_dhcp_route_metric}
  */
  readonly ipv4DhcpRouteMetric?: number;
  /**
  * IPv4 Static address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv4_static_address DeviceSubinterfaces#ipv4_static_address}
  */
  readonly ipv4StaticAddress?: string;
  /**
  * IPv4 Static address netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv4_static_netmask DeviceSubinterfaces#ipv4_static_netmask}
  */
  readonly ipv4StaticNetmask?: number;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv6_address DeviceSubinterfaces#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 EnforceEUI64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv6_enforce_eui DeviceSubinterfaces#ipv6_enforce_eui}
  */
  readonly ipv6EnforceEui?: boolean | cdktf.IResolvable;
  /**
  * IPv6 netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#ipv6_prefix DeviceSubinterfaces#ipv6_prefix}
  */
  readonly ipv6Prefix?: number;
  /**
  * Managenment only or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#management_only DeviceSubinterfaces#management_only}
  */
  readonly managementOnly?: boolean | cdktf.IResolvable;
  /**
  * The mode of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#mode DeviceSubinterfaces#mode}
  */
  readonly mode?: string;
  /**
  * The mtu value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#mtu DeviceSubinterfaces#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of the physical interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#name DeviceSubinterfaces#name}
  */
  readonly name: string;
  /**
  * The type of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#priority DeviceSubinterfaces#priority}
  */
  readonly priority?: number;
  /**
  * Security Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#security_zone_id DeviceSubinterfaces#security_zone_id}
  */
  readonly securityZoneId?: string;
  /**
  * The ID this resource needs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#subinterface_id DeviceSubinterfaces#subinterface_id}
  */
  readonly subinterfaceId: number;
  /**
  * The Vlan ID needed for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#vlan_id DeviceSubinterfaces#vlan_id}
  */
  readonly vlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces fmc_device_subinterfaces}
*/
export class DeviceSubinterfaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_subinterfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceSubinterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceSubinterfaces to import
  * @param importFromId The id of the existing DeviceSubinterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceSubinterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_subinterfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_subinterfaces fmc_device_subinterfaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceSubinterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceSubinterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_subinterfaces',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceId = config.deviceId;
    this._enableIpv6 = config.enableIpv6;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ifname = config.ifname;
    this._ipv4DhcpEnabled = config.ipv4DhcpEnabled;
    this._ipv4DhcpRouteMetric = config.ipv4DhcpRouteMetric;
    this._ipv4StaticAddress = config.ipv4StaticAddress;
    this._ipv4StaticNetmask = config.ipv4StaticNetmask;
    this._ipv6Address = config.ipv6Address;
    this._ipv6EnforceEui = config.ipv6EnforceEui;
    this._ipv6Prefix = config.ipv6Prefix;
    this._managementOnly = config.managementOnly;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._priority = config.priority;
    this._securityZoneId = config.securityZoneId;
    this._subinterfaceId = config.subinterfaceId;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_id - computed: false, optional: false, required: true
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ifname - computed: false, optional: true, required: false
  private _ifname?: string; 
  public get ifname() {
    return this.getStringAttribute('ifname');
  }
  public set ifname(value: string) {
    this._ifname = value;
  }
  public resetIfname() {
    this._ifname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnameInput() {
    return this._ifname;
  }

  // ipv4_dhcp_enabled - computed: false, optional: true, required: false
  private _ipv4DhcpEnabled?: boolean | cdktf.IResolvable; 
  public get ipv4DhcpEnabled() {
    return this.getBooleanAttribute('ipv4_dhcp_enabled');
  }
  public set ipv4DhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._ipv4DhcpEnabled = value;
  }
  public resetIpv4DhcpEnabled() {
    this._ipv4DhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpEnabledInput() {
    return this._ipv4DhcpEnabled;
  }

  // ipv4_dhcp_route_metric - computed: false, optional: true, required: false
  private _ipv4DhcpRouteMetric?: number; 
  public get ipv4DhcpRouteMetric() {
    return this.getNumberAttribute('ipv4_dhcp_route_metric');
  }
  public set ipv4DhcpRouteMetric(value: number) {
    this._ipv4DhcpRouteMetric = value;
  }
  public resetIpv4DhcpRouteMetric() {
    this._ipv4DhcpRouteMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpRouteMetricInput() {
    return this._ipv4DhcpRouteMetric;
  }

  // ipv4_static_address - computed: false, optional: true, required: false
  private _ipv4StaticAddress?: string; 
  public get ipv4StaticAddress() {
    return this.getStringAttribute('ipv4_static_address');
  }
  public set ipv4StaticAddress(value: string) {
    this._ipv4StaticAddress = value;
  }
  public resetIpv4StaticAddress() {
    this._ipv4StaticAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticAddressInput() {
    return this._ipv4StaticAddress;
  }

  // ipv4_static_netmask - computed: false, optional: true, required: false
  private _ipv4StaticNetmask?: number; 
  public get ipv4StaticNetmask() {
    return this.getNumberAttribute('ipv4_static_netmask');
  }
  public set ipv4StaticNetmask(value: number) {
    this._ipv4StaticNetmask = value;
  }
  public resetIpv4StaticNetmask() {
    this._ipv4StaticNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4StaticNetmaskInput() {
    return this._ipv4StaticNetmask;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // ipv6_enforce_eui - computed: false, optional: true, required: false
  private _ipv6EnforceEui?: boolean | cdktf.IResolvable; 
  public get ipv6EnforceEui() {
    return this.getBooleanAttribute('ipv6_enforce_eui');
  }
  public set ipv6EnforceEui(value: boolean | cdktf.IResolvable) {
    this._ipv6EnforceEui = value;
  }
  public resetIpv6EnforceEui() {
    this._ipv6EnforceEui = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnforceEuiInput() {
    return this._ipv6EnforceEui;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: number; 
  public get ipv6Prefix() {
    return this.getNumberAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: number) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // management_only - computed: false, optional: true, required: false
  private _managementOnly?: boolean | cdktf.IResolvable; 
  public get managementOnly() {
    return this.getBooleanAttribute('management_only');
  }
  public set managementOnly(value: boolean | cdktf.IResolvable) {
    this._managementOnly = value;
  }
  public resetManagementOnly() {
    this._managementOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementOnlyInput() {
    return this._managementOnly;
  }

  // mode - computed: false, optional: true, required: false
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // security_zone_id - computed: false, optional: true, required: false
  private _securityZoneId?: string; 
  public get securityZoneId() {
    return this.getStringAttribute('security_zone_id');
  }
  public set securityZoneId(value: string) {
    this._securityZoneId = value;
  }
  public resetSecurityZoneId() {
    this._securityZoneId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneIdInput() {
    return this._securityZoneId;
  }

  // subinterface_id - computed: false, optional: false, required: true
  private _subinterfaceId?: number; 
  public get subinterfaceId() {
    return this.getNumberAttribute('subinterface_id');
  }
  public set subinterfaceId(value: number) {
    this._subinterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceIdInput() {
    return this._subinterfaceId;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_id: cdktf.stringToTerraform(this._deviceId),
      enable_ipv6: cdktf.booleanToTerraform(this._enableIpv6),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ifname: cdktf.stringToTerraform(this._ifname),
      ipv4_dhcp_enabled: cdktf.booleanToTerraform(this._ipv4DhcpEnabled),
      ipv4_dhcp_route_metric: cdktf.numberToTerraform(this._ipv4DhcpRouteMetric),
      ipv4_static_address: cdktf.stringToTerraform(this._ipv4StaticAddress),
      ipv4_static_netmask: cdktf.numberToTerraform(this._ipv4StaticNetmask),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_enforce_eui: cdktf.booleanToTerraform(this._ipv6EnforceEui),
      ipv6_prefix: cdktf.numberToTerraform(this._ipv6Prefix),
      management_only: cdktf.booleanToTerraform(this._managementOnly),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      security_zone_id: cdktf.stringToTerraform(this._securityZoneId),
      subinterface_id: cdktf.numberToTerraform(this._subinterfaceId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_ipv6: {
        value: cdktf.booleanToHclTerraform(this._enableIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      ifname: {
        value: cdktf.stringToHclTerraform(this._ifname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv4DhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv4_dhcp_route_metric: {
        value: cdktf.numberToHclTerraform(this._ipv4DhcpRouteMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv4_static_address: {
        value: cdktf.stringToHclTerraform(this._ipv4StaticAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_static_netmask: {
        value: cdktf.numberToHclTerraform(this._ipv4StaticNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enforce_eui: {
        value: cdktf.booleanToHclTerraform(this._ipv6EnforceEui),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_prefix: {
        value: cdktf.numberToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      management_only: {
        value: cdktf.booleanToHclTerraform(this._managementOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      security_zone_id: {
        value: cdktf.stringToHclTerraform(this._securityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subinterface_id: {
        value: cdktf.numberToHclTerraform(this._subinterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
