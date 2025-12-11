// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#serial DeviceManagementInterface#serial}
  */
  readonly serial: string;
  /**
  * Up to two DNS IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_static_dns DeviceManagementInterface#wan1_static_dns}
  */
  readonly wan1StaticDns?: string[];
  /**
  * The IP of the gateway on the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_static_gateway_ip DeviceManagementInterface#wan1_static_gateway_ip}
  */
  readonly wan1StaticGatewayIp?: string;
  /**
  * The IP the device should use on the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_static_ip DeviceManagementInterface#wan1_static_ip}
  */
  readonly wan1StaticIp?: string;
  /**
  * The subnet mask for the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_static_subnet_mask DeviceManagementInterface#wan1_static_subnet_mask}
  */
  readonly wan1StaticSubnetMask?: string;
  /**
  * Configure the interface to have static IP settings or use DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_using_static_ip DeviceManagementInterface#wan1_using_static_ip}
  */
  readonly wan1UsingStaticIp?: boolean | cdktf.IResolvable;
  /**
  * The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_vlan DeviceManagementInterface#wan1_vlan}
  */
  readonly wan1Vlan?: number;
  /**
  * Enable or disable the interface (only for MX devices). Valid values are `enabled`, `disabled`, and `not configured`.
  *   - Choices: `disabled`, `enabled`, `not configured`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan1_wan_enabled DeviceManagementInterface#wan1_wan_enabled}
  */
  readonly wan1WanEnabled?: string;
  /**
  * Up to two DNS IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_static_dns DeviceManagementInterface#wan2_static_dns}
  */
  readonly wan2StaticDns?: string[];
  /**
  * The IP of the gateway on the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_static_gateway_ip DeviceManagementInterface#wan2_static_gateway_ip}
  */
  readonly wan2StaticGatewayIp?: string;
  /**
  * The IP the device should use on the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_static_ip DeviceManagementInterface#wan2_static_ip}
  */
  readonly wan2StaticIp?: string;
  /**
  * The subnet mask for the WAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_static_subnet_mask DeviceManagementInterface#wan2_static_subnet_mask}
  */
  readonly wan2StaticSubnetMask?: string;
  /**
  * Configure the interface to have static IP settings or use DHCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_using_static_ip DeviceManagementInterface#wan2_using_static_ip}
  */
  readonly wan2UsingStaticIp?: boolean | cdktf.IResolvable;
  /**
  * The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_vlan DeviceManagementInterface#wan2_vlan}
  */
  readonly wan2Vlan?: number;
  /**
  * Enable or disable the interface (only for MX devices). Valid values are `enabled`, `disabled`, and `not configured`.
  *   - Choices: `disabled`, `enabled`, `not configured`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#wan2_wan_enabled DeviceManagementInterface#wan2_wan_enabled}
  */
  readonly wan2WanEnabled?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface meraki_device_management_interface}
*/
export class DeviceManagementInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_device_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceManagementInterface to import
  * @param importFromId The id of the existing DeviceManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_device_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/device_management_interface meraki_device_management_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceManagementInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceManagementInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_device_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._serial = config.serial;
    this._wan1StaticDns = config.wan1StaticDns;
    this._wan1StaticGatewayIp = config.wan1StaticGatewayIp;
    this._wan1StaticIp = config.wan1StaticIp;
    this._wan1StaticSubnetMask = config.wan1StaticSubnetMask;
    this._wan1UsingStaticIp = config.wan1UsingStaticIp;
    this._wan1Vlan = config.wan1Vlan;
    this._wan1WanEnabled = config.wan1WanEnabled;
    this._wan2StaticDns = config.wan2StaticDns;
    this._wan2StaticGatewayIp = config.wan2StaticGatewayIp;
    this._wan2StaticIp = config.wan2StaticIp;
    this._wan2StaticSubnetMask = config.wan2StaticSubnetMask;
    this._wan2UsingStaticIp = config.wan2UsingStaticIp;
    this._wan2Vlan = config.wan2Vlan;
    this._wan2WanEnabled = config.wan2WanEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // wan1_static_dns - computed: false, optional: true, required: false
  private _wan1StaticDns?: string[]; 
  public get wan1StaticDns() {
    return this.getListAttribute('wan1_static_dns');
  }
  public set wan1StaticDns(value: string[]) {
    this._wan1StaticDns = value;
  }
  public resetWan1StaticDns() {
    this._wan1StaticDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1StaticDnsInput() {
    return this._wan1StaticDns;
  }

  // wan1_static_gateway_ip - computed: false, optional: true, required: false
  private _wan1StaticGatewayIp?: string; 
  public get wan1StaticGatewayIp() {
    return this.getStringAttribute('wan1_static_gateway_ip');
  }
  public set wan1StaticGatewayIp(value: string) {
    this._wan1StaticGatewayIp = value;
  }
  public resetWan1StaticGatewayIp() {
    this._wan1StaticGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1StaticGatewayIpInput() {
    return this._wan1StaticGatewayIp;
  }

  // wan1_static_ip - computed: false, optional: true, required: false
  private _wan1StaticIp?: string; 
  public get wan1StaticIp() {
    return this.getStringAttribute('wan1_static_ip');
  }
  public set wan1StaticIp(value: string) {
    this._wan1StaticIp = value;
  }
  public resetWan1StaticIp() {
    this._wan1StaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1StaticIpInput() {
    return this._wan1StaticIp;
  }

  // wan1_static_subnet_mask - computed: false, optional: true, required: false
  private _wan1StaticSubnetMask?: string; 
  public get wan1StaticSubnetMask() {
    return this.getStringAttribute('wan1_static_subnet_mask');
  }
  public set wan1StaticSubnetMask(value: string) {
    this._wan1StaticSubnetMask = value;
  }
  public resetWan1StaticSubnetMask() {
    this._wan1StaticSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1StaticSubnetMaskInput() {
    return this._wan1StaticSubnetMask;
  }

  // wan1_using_static_ip - computed: false, optional: true, required: false
  private _wan1UsingStaticIp?: boolean | cdktf.IResolvable; 
  public get wan1UsingStaticIp() {
    return this.getBooleanAttribute('wan1_using_static_ip');
  }
  public set wan1UsingStaticIp(value: boolean | cdktf.IResolvable) {
    this._wan1UsingStaticIp = value;
  }
  public resetWan1UsingStaticIp() {
    this._wan1UsingStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1UsingStaticIpInput() {
    return this._wan1UsingStaticIp;
  }

  // wan1_vlan - computed: false, optional: true, required: false
  private _wan1Vlan?: number; 
  public get wan1Vlan() {
    return this.getNumberAttribute('wan1_vlan');
  }
  public set wan1Vlan(value: number) {
    this._wan1Vlan = value;
  }
  public resetWan1Vlan() {
    this._wan1Vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1VlanInput() {
    return this._wan1Vlan;
  }

  // wan1_wan_enabled - computed: false, optional: true, required: false
  private _wan1WanEnabled?: string; 
  public get wan1WanEnabled() {
    return this.getStringAttribute('wan1_wan_enabled');
  }
  public set wan1WanEnabled(value: string) {
    this._wan1WanEnabled = value;
  }
  public resetWan1WanEnabled() {
    this._wan1WanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan1WanEnabledInput() {
    return this._wan1WanEnabled;
  }

  // wan2_static_dns - computed: false, optional: true, required: false
  private _wan2StaticDns?: string[]; 
  public get wan2StaticDns() {
    return this.getListAttribute('wan2_static_dns');
  }
  public set wan2StaticDns(value: string[]) {
    this._wan2StaticDns = value;
  }
  public resetWan2StaticDns() {
    this._wan2StaticDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2StaticDnsInput() {
    return this._wan2StaticDns;
  }

  // wan2_static_gateway_ip - computed: false, optional: true, required: false
  private _wan2StaticGatewayIp?: string; 
  public get wan2StaticGatewayIp() {
    return this.getStringAttribute('wan2_static_gateway_ip');
  }
  public set wan2StaticGatewayIp(value: string) {
    this._wan2StaticGatewayIp = value;
  }
  public resetWan2StaticGatewayIp() {
    this._wan2StaticGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2StaticGatewayIpInput() {
    return this._wan2StaticGatewayIp;
  }

  // wan2_static_ip - computed: false, optional: true, required: false
  private _wan2StaticIp?: string; 
  public get wan2StaticIp() {
    return this.getStringAttribute('wan2_static_ip');
  }
  public set wan2StaticIp(value: string) {
    this._wan2StaticIp = value;
  }
  public resetWan2StaticIp() {
    this._wan2StaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2StaticIpInput() {
    return this._wan2StaticIp;
  }

  // wan2_static_subnet_mask - computed: false, optional: true, required: false
  private _wan2StaticSubnetMask?: string; 
  public get wan2StaticSubnetMask() {
    return this.getStringAttribute('wan2_static_subnet_mask');
  }
  public set wan2StaticSubnetMask(value: string) {
    this._wan2StaticSubnetMask = value;
  }
  public resetWan2StaticSubnetMask() {
    this._wan2StaticSubnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2StaticSubnetMaskInput() {
    return this._wan2StaticSubnetMask;
  }

  // wan2_using_static_ip - computed: false, optional: true, required: false
  private _wan2UsingStaticIp?: boolean | cdktf.IResolvable; 
  public get wan2UsingStaticIp() {
    return this.getBooleanAttribute('wan2_using_static_ip');
  }
  public set wan2UsingStaticIp(value: boolean | cdktf.IResolvable) {
    this._wan2UsingStaticIp = value;
  }
  public resetWan2UsingStaticIp() {
    this._wan2UsingStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2UsingStaticIpInput() {
    return this._wan2UsingStaticIp;
  }

  // wan2_vlan - computed: false, optional: true, required: false
  private _wan2Vlan?: number; 
  public get wan2Vlan() {
    return this.getNumberAttribute('wan2_vlan');
  }
  public set wan2Vlan(value: number) {
    this._wan2Vlan = value;
  }
  public resetWan2Vlan() {
    this._wan2Vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2VlanInput() {
    return this._wan2Vlan;
  }

  // wan2_wan_enabled - computed: false, optional: true, required: false
  private _wan2WanEnabled?: string; 
  public get wan2WanEnabled() {
    return this.getStringAttribute('wan2_wan_enabled');
  }
  public set wan2WanEnabled(value: string) {
    this._wan2WanEnabled = value;
  }
  public resetWan2WanEnabled() {
    this._wan2WanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wan2WanEnabledInput() {
    return this._wan2WanEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      serial: cdktf.stringToTerraform(this._serial),
      wan1_static_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wan1StaticDns),
      wan1_static_gateway_ip: cdktf.stringToTerraform(this._wan1StaticGatewayIp),
      wan1_static_ip: cdktf.stringToTerraform(this._wan1StaticIp),
      wan1_static_subnet_mask: cdktf.stringToTerraform(this._wan1StaticSubnetMask),
      wan1_using_static_ip: cdktf.booleanToTerraform(this._wan1UsingStaticIp),
      wan1_vlan: cdktf.numberToTerraform(this._wan1Vlan),
      wan1_wan_enabled: cdktf.stringToTerraform(this._wan1WanEnabled),
      wan2_static_dns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wan2StaticDns),
      wan2_static_gateway_ip: cdktf.stringToTerraform(this._wan2StaticGatewayIp),
      wan2_static_ip: cdktf.stringToTerraform(this._wan2StaticIp),
      wan2_static_subnet_mask: cdktf.stringToTerraform(this._wan2StaticSubnetMask),
      wan2_using_static_ip: cdktf.booleanToTerraform(this._wan2UsingStaticIp),
      wan2_vlan: cdktf.numberToTerraform(this._wan2Vlan),
      wan2_wan_enabled: cdktf.stringToTerraform(this._wan2WanEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan1_static_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wan1StaticDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wan1_static_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._wan1StaticGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan1_static_ip: {
        value: cdktf.stringToHclTerraform(this._wan1StaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan1_static_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._wan1StaticSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan1_using_static_ip: {
        value: cdktf.booleanToHclTerraform(this._wan1UsingStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wan1_vlan: {
        value: cdktf.numberToHclTerraform(this._wan1Vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan1_wan_enabled: {
        value: cdktf.stringToHclTerraform(this._wan1WanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan2_static_dns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wan2StaticDns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wan2_static_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._wan2StaticGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan2_static_ip: {
        value: cdktf.stringToHclTerraform(this._wan2StaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan2_static_subnet_mask: {
        value: cdktf.stringToHclTerraform(this._wan2StaticSubnetMask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan2_using_static_ip: {
        value: cdktf.booleanToHclTerraform(this._wan2UsingStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wan2_vlan: {
        value: cdktf.numberToHclTerraform(this._wan2Vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wan2_wan_enabled: {
        value: cdktf.stringToHclTerraform(this._wan2WanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
