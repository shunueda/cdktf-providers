// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessAlternateManagementInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Array of access point serial number and IP assignment. Note: accessPoints IP assignment is not applicable for template networks, in other words, do not put `accessPoints` in the body when updating template networks. Also, an empty `accessPoints` array will remove all previous static IP assignments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#access_points WirelessAlternateManagementInterface#access_points}
  */
  readonly accessPoints?: WirelessAlternateManagementInterfaceAccessPoints[] | cdktf.IResolvable;
  /**
  * Boolean value to enable or disable alternate management interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#enabled WirelessAlternateManagementInterface#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#network_id WirelessAlternateManagementInterface#network_id}
  */
  readonly networkId: string;
  /**
  * Can be one or more of the following values: `radius`, `snmp`, `syslog` or `ldap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#protocols WirelessAlternateManagementInterface#protocols}
  */
  readonly protocols?: string[];
  /**
  * Alternate management interface VLAN, must be between 1 and 4094
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#vlan_id WirelessAlternateManagementInterface#vlan_id}
  */
  readonly vlanId?: number;
}
export interface WirelessAlternateManagementInterfaceAccessPoints {
  /**
  * Wireless alternate management interface device IP. Provide an empty string to remove alternate management IP assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#alternate_management_ip WirelessAlternateManagementInterface#alternate_management_ip}
  */
  readonly alternateManagementIp: string;
  /**
  * Primary DNS must be in IP format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#dns1 WirelessAlternateManagementInterface#dns1}
  */
  readonly dns1?: string;
  /**
  * Optional secondary DNS must be in IP format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#dns2 WirelessAlternateManagementInterface#dns2}
  */
  readonly dns2?: string;
  /**
  * Gateway must be in IP format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#gateway WirelessAlternateManagementInterface#gateway}
  */
  readonly gateway?: string;
  /**
  * Serial number of access point to be configured with alternate management IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#serial WirelessAlternateManagementInterface#serial}
  */
  readonly serial: string;
  /**
  * Subnet mask must be in IP format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#subnet_mask WirelessAlternateManagementInterface#subnet_mask}
  */
  readonly subnetMask?: string;
}

export function wirelessAlternateManagementInterfaceAccessPointsToTerraform(struct?: WirelessAlternateManagementInterfaceAccessPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alternate_management_ip: cdktf.stringToTerraform(struct!.alternateManagementIp),
    dns1: cdktf.stringToTerraform(struct!.dns1),
    dns2: cdktf.stringToTerraform(struct!.dns2),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    serial: cdktf.stringToTerraform(struct!.serial),
    subnet_mask: cdktf.stringToTerraform(struct!.subnetMask),
  }
}


export function wirelessAlternateManagementInterfaceAccessPointsToHclTerraform(struct?: WirelessAlternateManagementInterfaceAccessPoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alternate_management_ip: {
      value: cdktf.stringToHclTerraform(struct!.alternateManagementIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns1: {
      value: cdktf.stringToHclTerraform(struct!.dns1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns2: {
      value: cdktf.stringToHclTerraform(struct!.dns2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_mask: {
      value: cdktf.stringToHclTerraform(struct!.subnetMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessAlternateManagementInterfaceAccessPointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WirelessAlternateManagementInterfaceAccessPoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alternateManagementIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alternateManagementIp = this._alternateManagementIp;
    }
    if (this._dns1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns1 = this._dns1;
    }
    if (this._dns2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns2 = this._dns2;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._subnetMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetMask = this._subnetMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessAlternateManagementInterfaceAccessPoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alternateManagementIp = undefined;
      this._dns1 = undefined;
      this._dns2 = undefined;
      this._gateway = undefined;
      this._serial = undefined;
      this._subnetMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alternateManagementIp = value.alternateManagementIp;
      this._dns1 = value.dns1;
      this._dns2 = value.dns2;
      this._gateway = value.gateway;
      this._serial = value.serial;
      this._subnetMask = value.subnetMask;
    }
  }

  // alternate_management_ip - computed: false, optional: false, required: true
  private _alternateManagementIp?: string; 
  public get alternateManagementIp() {
    return this.getStringAttribute('alternate_management_ip');
  }
  public set alternateManagementIp(value: string) {
    this._alternateManagementIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alternateManagementIpInput() {
    return this._alternateManagementIp;
  }

  // dns1 - computed: false, optional: true, required: false
  private _dns1?: string; 
  public get dns1() {
    return this.getStringAttribute('dns1');
  }
  public set dns1(value: string) {
    this._dns1 = value;
  }
  public resetDns1() {
    this._dns1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns1Input() {
    return this._dns1;
  }

  // dns2 - computed: false, optional: true, required: false
  private _dns2?: string; 
  public get dns2() {
    return this.getStringAttribute('dns2');
  }
  public set dns2(value: string) {
    this._dns2 = value;
  }
  public resetDns2() {
    this._dns2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dns2Input() {
    return this._dns2;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // subnet_mask - computed: false, optional: true, required: false
  private _subnetMask?: string; 
  public get subnetMask() {
    return this.getStringAttribute('subnet_mask');
  }
  public set subnetMask(value: string) {
    this._subnetMask = value;
  }
  public resetSubnetMask() {
    this._subnetMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetMaskInput() {
    return this._subnetMask;
  }
}

export class WirelessAlternateManagementInterfaceAccessPointsList extends cdktf.ComplexList {
  public internalValue? : WirelessAlternateManagementInterfaceAccessPoints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): WirelessAlternateManagementInterfaceAccessPointsOutputReference {
    return new WirelessAlternateManagementInterfaceAccessPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface meraki_wireless_alternate_management_interface}
*/
export class WirelessAlternateManagementInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_alternate_management_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessAlternateManagementInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessAlternateManagementInterface to import
  * @param importFromId The id of the existing WirelessAlternateManagementInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessAlternateManagementInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_alternate_management_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_alternate_management_interface meraki_wireless_alternate_management_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessAlternateManagementInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessAlternateManagementInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_alternate_management_interface',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPoints.internalValue = config.accessPoints;
    this._enabled = config.enabled;
    this._networkId = config.networkId;
    this._protocols = config.protocols;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_points - computed: false, optional: true, required: false
  private _accessPoints = new WirelessAlternateManagementInterfaceAccessPointsList(this, "access_points", false);
  public get accessPoints() {
    return this._accessPoints;
  }
  public putAccessPoints(value: WirelessAlternateManagementInterfaceAccessPoints[] | cdktf.IResolvable) {
    this._accessPoints.internalValue = value;
  }
  public resetAccessPoints() {
    this._accessPoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointsInput() {
    return this._accessPoints.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
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
      access_points: cdktf.listMapper(wirelessAlternateManagementInterfaceAccessPointsToTerraform, false)(this._accessPoints.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_points: {
        value: cdktf.listMapperHcl(wirelessAlternateManagementInterfaceAccessPointsToHclTerraform, false)(this._accessPoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessAlternateManagementInterfaceAccessPointsList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
