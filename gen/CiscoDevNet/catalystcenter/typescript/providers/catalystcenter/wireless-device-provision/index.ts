// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessDeviceProvisionConfig extends cdktf.TerraformMetaArguments {
  /**
  * AP Authorization List Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#ap_authorization_list_name WirelessDeviceProvision#ap_authorization_list_name}
  */
  readonly apAuthorizationListName?: string;
  /**
  * AP Reboot Percentage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#ap_reboot_percentage WirelessDeviceProvision#ap_reboot_percentage}
  */
  readonly apRebootPercentage?: number;
  /**
  * True if Mesh and Non-Mesh Access Points are authorized, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#authorize_mesh_and_non_mesh_access_points WirelessDeviceProvision#authorize_mesh_and_non_mesh_access_points}
  */
  readonly authorizeMeshAndNonMeshAccessPoints?: boolean | cdktf.IResolvable;
  /**
  * True if Rolling AP Upgrade is enabled, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#enable_rolling_ap_upgrade WirelessDeviceProvision#enable_rolling_ap_upgrade}
  */
  readonly enableRollingApUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Dynamic Interface Details. The required attributes depend on the device type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#interfaces WirelessDeviceProvision#interfaces}
  */
  readonly interfaces?: WirelessDeviceProvisionInterfaces[] | cdktf.IResolvable;
  /**
  * Network Device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#network_device_id WirelessDeviceProvision#network_device_id}
  */
  readonly networkDeviceId: string;
  /**
  * Flag to indicate whether the device should be reprovisioned. If set to `true`, reprovisioning will be triggered on every Terraform apply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#reprovision WirelessDeviceProvision#reprovision}
  */
  readonly reprovision?: boolean | cdktf.IResolvable;
  /**
  * True if Skip AP Provision is enabled, else False
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#skip_ap_provision WirelessDeviceProvision#skip_ap_provision}
  */
  readonly skipApProvision?: boolean | cdktf.IResolvable;
}
export interface WirelessDeviceProvisionInterfaces {
  /**
  * Interface Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#interface_gateway WirelessDeviceProvision#interface_gateway}
  */
  readonly interfaceGateway?: string;
  /**
  * Interface IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#interface_ip_address WirelessDeviceProvision#interface_ip_address}
  */
  readonly interfaceIpAddress?: string;
  /**
  * Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#interface_name WirelessDeviceProvision#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Interface Netmask In CIDR
  *   - Range: `1`-`30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#interface_netmask WirelessDeviceProvision#interface_netmask}
  */
  readonly interfaceNetmask?: number;
  /**
  * LAG or Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#lag_or_port_number WirelessDeviceProvision#lag_or_port_number}
  */
  readonly lagOrPortNumber?: number;
  /**
  * VLAN ID
  *   - Range: `1`-`4094`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#vlan_id WirelessDeviceProvision#vlan_id}
  */
  readonly vlanId: number;
}

export function wirelessDeviceProvisionInterfacesToTerraform(struct?: WirelessDeviceProvisionInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_gateway: cdktf.stringToTerraform(struct!.interfaceGateway),
    interface_ip_address: cdktf.stringToTerraform(struct!.interfaceIpAddress),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_netmask: cdktf.numberToTerraform(struct!.interfaceNetmask),
    lag_or_port_number: cdktf.numberToTerraform(struct!.lagOrPortNumber),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function wirelessDeviceProvisionInterfacesToHclTerraform(struct?: WirelessDeviceProvisionInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_gateway: {
      value: cdktf.stringToHclTerraform(struct!.interfaceGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.interfaceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_netmask: {
      value: cdktf.numberToHclTerraform(struct!.interfaceNetmask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lag_or_port_number: {
      value: cdktf.numberToHclTerraform(struct!.lagOrPortNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessDeviceProvisionInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessDeviceProvisionInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceGateway = this._interfaceGateway;
    }
    if (this._interfaceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceIpAddress = this._interfaceIpAddress;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNetmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNetmask = this._interfaceNetmask;
    }
    if (this._lagOrPortNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.lagOrPortNumber = this._lagOrPortNumber;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessDeviceProvisionInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceGateway = undefined;
      this._interfaceIpAddress = undefined;
      this._interfaceName = undefined;
      this._interfaceNetmask = undefined;
      this._lagOrPortNumber = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceGateway = value.interfaceGateway;
      this._interfaceIpAddress = value.interfaceIpAddress;
      this._interfaceName = value.interfaceName;
      this._interfaceNetmask = value.interfaceNetmask;
      this._lagOrPortNumber = value.lagOrPortNumber;
      this._vlanId = value.vlanId;
    }
  }

  // interface_gateway - computed: false, optional: true, required: false
  private _interfaceGateway?: string; 
  public get interfaceGateway() {
    return this.getStringAttribute('interface_gateway');
  }
  public set interfaceGateway(value: string) {
    this._interfaceGateway = value;
  }
  public resetInterfaceGateway() {
    this._interfaceGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceGatewayInput() {
    return this._interfaceGateway;
  }

  // interface_ip_address - computed: false, optional: true, required: false
  private _interfaceIpAddress?: string; 
  public get interfaceIpAddress() {
    return this.getStringAttribute('interface_ip_address');
  }
  public set interfaceIpAddress(value: string) {
    this._interfaceIpAddress = value;
  }
  public resetInterfaceIpAddress() {
    this._interfaceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceIpAddressInput() {
    return this._interfaceIpAddress;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_netmask - computed: false, optional: true, required: false
  private _interfaceNetmask?: number; 
  public get interfaceNetmask() {
    return this.getNumberAttribute('interface_netmask');
  }
  public set interfaceNetmask(value: number) {
    this._interfaceNetmask = value;
  }
  public resetInterfaceNetmask() {
    this._interfaceNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNetmaskInput() {
    return this._interfaceNetmask;
  }

  // lag_or_port_number - computed: false, optional: true, required: false
  private _lagOrPortNumber?: number; 
  public get lagOrPortNumber() {
    return this.getNumberAttribute('lag_or_port_number');
  }
  public set lagOrPortNumber(value: number) {
    this._lagOrPortNumber = value;
  }
  public resetLagOrPortNumber() {
    this._lagOrPortNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagOrPortNumberInput() {
    return this._lagOrPortNumber;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class WirelessDeviceProvisionInterfacesList extends cdktf.ComplexList {
  public internalValue? : WirelessDeviceProvisionInterfaces[] | cdktf.IResolvable

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
  public get(index: number): WirelessDeviceProvisionInterfacesOutputReference {
    return new WirelessDeviceProvisionInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision catalystcenter_wireless_device_provision}
*/
export class WirelessDeviceProvision extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_wireless_device_provision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessDeviceProvision resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessDeviceProvision to import
  * @param importFromId The id of the existing WirelessDeviceProvision that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessDeviceProvision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_wireless_device_provision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/wireless_device_provision catalystcenter_wireless_device_provision} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessDeviceProvisionConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessDeviceProvisionConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_wireless_device_provision',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2',
        providerVersionConstraint: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apAuthorizationListName = config.apAuthorizationListName;
    this._apRebootPercentage = config.apRebootPercentage;
    this._authorizeMeshAndNonMeshAccessPoints = config.authorizeMeshAndNonMeshAccessPoints;
    this._enableRollingApUpgrade = config.enableRollingApUpgrade;
    this._interfaces.internalValue = config.interfaces;
    this._networkDeviceId = config.networkDeviceId;
    this._reprovision = config.reprovision;
    this._skipApProvision = config.skipApProvision;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ap_authorization_list_name - computed: false, optional: true, required: false
  private _apAuthorizationListName?: string; 
  public get apAuthorizationListName() {
    return this.getStringAttribute('ap_authorization_list_name');
  }
  public set apAuthorizationListName(value: string) {
    this._apAuthorizationListName = value;
  }
  public resetApAuthorizationListName() {
    this._apAuthorizationListName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apAuthorizationListNameInput() {
    return this._apAuthorizationListName;
  }

  // ap_reboot_percentage - computed: false, optional: true, required: false
  private _apRebootPercentage?: number; 
  public get apRebootPercentage() {
    return this.getNumberAttribute('ap_reboot_percentage');
  }
  public set apRebootPercentage(value: number) {
    this._apRebootPercentage = value;
  }
  public resetApRebootPercentage() {
    this._apRebootPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apRebootPercentageInput() {
    return this._apRebootPercentage;
  }

  // authorize_mesh_and_non_mesh_access_points - computed: false, optional: true, required: false
  private _authorizeMeshAndNonMeshAccessPoints?: boolean | cdktf.IResolvable; 
  public get authorizeMeshAndNonMeshAccessPoints() {
    return this.getBooleanAttribute('authorize_mesh_and_non_mesh_access_points');
  }
  public set authorizeMeshAndNonMeshAccessPoints(value: boolean | cdktf.IResolvable) {
    this._authorizeMeshAndNonMeshAccessPoints = value;
  }
  public resetAuthorizeMeshAndNonMeshAccessPoints() {
    this._authorizeMeshAndNonMeshAccessPoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeMeshAndNonMeshAccessPointsInput() {
    return this._authorizeMeshAndNonMeshAccessPoints;
  }

  // enable_rolling_ap_upgrade - computed: false, optional: true, required: false
  private _enableRollingApUpgrade?: boolean | cdktf.IResolvable; 
  public get enableRollingApUpgrade() {
    return this.getBooleanAttribute('enable_rolling_ap_upgrade');
  }
  public set enableRollingApUpgrade(value: boolean | cdktf.IResolvable) {
    this._enableRollingApUpgrade = value;
  }
  public resetEnableRollingApUpgrade() {
    this._enableRollingApUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRollingApUpgradeInput() {
    return this._enableRollingApUpgrade;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new WirelessDeviceProvisionInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: WirelessDeviceProvisionInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // network_device_id - computed: false, optional: false, required: true
  private _networkDeviceId?: string; 
  public get networkDeviceId() {
    return this.getStringAttribute('network_device_id');
  }
  public set networkDeviceId(value: string) {
    this._networkDeviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceIdInput() {
    return this._networkDeviceId;
  }

  // reprovision - computed: false, optional: true, required: false
  private _reprovision?: boolean | cdktf.IResolvable; 
  public get reprovision() {
    return this.getBooleanAttribute('reprovision');
  }
  public set reprovision(value: boolean | cdktf.IResolvable) {
    this._reprovision = value;
  }
  public resetReprovision() {
    this._reprovision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reprovisionInput() {
    return this._reprovision;
  }

  // skip_ap_provision - computed: false, optional: true, required: false
  private _skipApProvision?: boolean | cdktf.IResolvable; 
  public get skipApProvision() {
    return this.getBooleanAttribute('skip_ap_provision');
  }
  public set skipApProvision(value: boolean | cdktf.IResolvable) {
    this._skipApProvision = value;
  }
  public resetSkipApProvision() {
    this._skipApProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipApProvisionInput() {
    return this._skipApProvision;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ap_authorization_list_name: cdktf.stringToTerraform(this._apAuthorizationListName),
      ap_reboot_percentage: cdktf.numberToTerraform(this._apRebootPercentage),
      authorize_mesh_and_non_mesh_access_points: cdktf.booleanToTerraform(this._authorizeMeshAndNonMeshAccessPoints),
      enable_rolling_ap_upgrade: cdktf.booleanToTerraform(this._enableRollingApUpgrade),
      interfaces: cdktf.listMapper(wirelessDeviceProvisionInterfacesToTerraform, false)(this._interfaces.internalValue),
      network_device_id: cdktf.stringToTerraform(this._networkDeviceId),
      reprovision: cdktf.booleanToTerraform(this._reprovision),
      skip_ap_provision: cdktf.booleanToTerraform(this._skipApProvision),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ap_authorization_list_name: {
        value: cdktf.stringToHclTerraform(this._apAuthorizationListName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ap_reboot_percentage: {
        value: cdktf.numberToHclTerraform(this._apRebootPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorize_mesh_and_non_mesh_access_points: {
        value: cdktf.booleanToHclTerraform(this._authorizeMeshAndNonMeshAccessPoints),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_rolling_ap_upgrade: {
        value: cdktf.booleanToHclTerraform(this._enableRollingApUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interfaces: {
        value: cdktf.listMapperHcl(wirelessDeviceProvisionInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessDeviceProvisionInterfacesList",
      },
      network_device_id: {
        value: cdktf.stringToHclTerraform(this._networkDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reprovision: {
        value: cdktf.booleanToHclTerraform(this._reprovision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      skip_ap_provision: {
        value: cdktf.booleanToHclTerraform(this._skipApProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
