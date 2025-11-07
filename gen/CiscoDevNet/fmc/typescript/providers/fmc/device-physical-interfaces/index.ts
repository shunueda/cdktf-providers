// https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevicePhysicalInterfacesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Physical Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#description DevicePhysicalInterfaces#description}
  */
  readonly description?: string;
  /**
  * The ID of the Physical Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#device_id DevicePhysicalInterfaces#device_id}
  */
  readonly deviceId: string;
  /**
  * enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#enabled DevicePhysicalInterfaces#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#id DevicePhysicalInterfaces#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of chosen interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#if_name DevicePhysicalInterfaces#if_name}
  */
  readonly ifName?: string;
  /**
  * IPv4 DHCP enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv4_dhcp_enabled DevicePhysicalInterfaces#ipv4_dhcp_enabled}
  */
  readonly ipv4DhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * IPv4 DHCP Route Metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv4_dhcp_route_metric DevicePhysicalInterfaces#ipv4_dhcp_route_metric}
  */
  readonly ipv4DhcpRouteMetric?: number;
  /**
  * IPv4 Static address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv4_static_address DevicePhysicalInterfaces#ipv4_static_address}
  */
  readonly ipv4StaticAddress?: string;
  /**
  * IPv4 Static address netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv4_static_netmask DevicePhysicalInterfaces#ipv4_static_netmask}
  */
  readonly ipv4StaticNetmask?: number;
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv6_address DevicePhysicalInterfaces#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * IPv6 EnforceEUI64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv6_enforce_eui DevicePhysicalInterfaces#ipv6_enforce_eui}
  */
  readonly ipv6EnforceEui?: boolean | cdktf.IResolvable;
  /**
  * IPv6 netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#ipv6_prefix DevicePhysicalInterfaces#ipv6_prefix}
  */
  readonly ipv6Prefix?: number;
  /**
  * Physical Interface Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#mode DevicePhysicalInterfaces#mode}
  */
  readonly mode?: string;
  /**
  * Physical Interface MTU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#mtu DevicePhysicalInterfaces#mtu}
  */
  readonly mtu?: number;
  /**
  * Name of chosen interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#name DevicePhysicalInterfaces#name}
  */
  readonly name?: string;
  /**
  * The ID of the physical interface this resource needs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#physical_interface_id DevicePhysicalInterfaces#physical_interface_id}
  */
  readonly physicalInterfaceId: string;
  /**
  * Physical Interface Security Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#security_zone_id DevicePhysicalInterfaces#security_zone_id}
  */
  readonly securityZoneId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces fmc_device_physical_interfaces}
*/
export class DevicePhysicalInterfaces extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmc_device_physical_interfaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevicePhysicalInterfaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevicePhysicalInterfaces to import
  * @param importFromId The id of the existing DevicePhysicalInterfaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevicePhysicalInterfaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmc_device_physical_interfaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/fmc/1.5.2/docs/resources/device_physical_interfaces fmc_device_physical_interfaces} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevicePhysicalInterfacesConfig
  */
  public constructor(scope: Construct, id: string, config: DevicePhysicalInterfacesConfig) {
    super(scope, id, {
      terraformResourceType: 'fmc_device_physical_interfaces',
      terraformGeneratorMetadata: {
        providerName: 'fmc',
        providerVersion: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceId = config.deviceId;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ifName = config.ifName;
    this._ipv4DhcpEnabled = config.ipv4DhcpEnabled;
    this._ipv4DhcpRouteMetric = config.ipv4DhcpRouteMetric;
    this._ipv4StaticAddress = config.ipv4StaticAddress;
    this._ipv4StaticNetmask = config.ipv4StaticNetmask;
    this._ipv6Address = config.ipv6Address;
    this._ipv6EnforceEui = config.ipv6EnforceEui;
    this._ipv6Prefix = config.ipv6Prefix;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._physicalInterfaceId = config.physicalInterfaceId;
    this._securityZoneId = config.securityZoneId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // if_name - computed: false, optional: true, required: false
  private _ifName?: string; 
  public get ifName() {
    return this.getStringAttribute('if_name');
  }
  public set ifName(value: string) {
    this._ifName = value;
  }
  public resetIfName() {
    this._ifName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifNameInput() {
    return this._ifName;
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

  // name - computed: false, optional: true, required: false
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

  // physical_interface_id - computed: false, optional: false, required: true
  private _physicalInterfaceId?: string; 
  public get physicalInterfaceId() {
    return this.getStringAttribute('physical_interface_id');
  }
  public set physicalInterfaceId(value: string) {
    this._physicalInterfaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get physicalInterfaceIdInput() {
    return this._physicalInterfaceId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_id: cdktf.stringToTerraform(this._deviceId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      if_name: cdktf.stringToTerraform(this._ifName),
      ipv4_dhcp_enabled: cdktf.booleanToTerraform(this._ipv4DhcpEnabled),
      ipv4_dhcp_route_metric: cdktf.numberToTerraform(this._ipv4DhcpRouteMetric),
      ipv4_static_address: cdktf.stringToTerraform(this._ipv4StaticAddress),
      ipv4_static_netmask: cdktf.numberToTerraform(this._ipv4StaticNetmask),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      ipv6_enforce_eui: cdktf.booleanToTerraform(this._ipv6EnforceEui),
      ipv6_prefix: cdktf.numberToTerraform(this._ipv6Prefix),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      physical_interface_id: cdktf.stringToTerraform(this._physicalInterfaceId),
      security_zone_id: cdktf.stringToTerraform(this._securityZoneId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_id: {
        value: cdktf.stringToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      if_name: {
        value: cdktf.stringToHclTerraform(this._ifName),
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
      physical_interface_id: {
        value: cdktf.stringToHclTerraform(this._physicalInterfaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_zone_id: {
        value: cdktf.stringToHclTerraform(this._securityZoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
