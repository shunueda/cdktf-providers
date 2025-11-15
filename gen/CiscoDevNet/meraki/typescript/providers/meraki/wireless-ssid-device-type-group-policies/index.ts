// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidDeviceTypeGroupPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of device type policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#device_type_policies WirelessSsidDeviceTypeGroupPolicies#device_type_policies}
  */
  readonly deviceTypePolicies?: WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies[] | cdktf.IResolvable;
  /**
  * If true, the SSID device type group policies are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#enabled WirelessSsidDeviceTypeGroupPolicies#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#network_id WirelessSsidDeviceTypeGroupPolicies#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#number WirelessSsidDeviceTypeGroupPolicies#number}
  */
  readonly number: string;
}
export interface WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies {
  /**
  * The device policy. Can be one of `Allowed`, `Blocked` or `Group policy`
  *   - Choices: `Allowed`, `Blocked`, `Group policy`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#device_policy WirelessSsidDeviceTypeGroupPolicies#device_policy}
  */
  readonly devicePolicy: string;
  /**
  * The device type. Can be one of `Android`, `BlackBerry`, `Chrome OS`, `iPad`, `iPhone`, `iPod`, `Mac OS X`, `Windows`, `Windows Phone`, `B&N Nook` or `Other OS`
  *   - Choices: `Android`, `B&N Nook`, `BlackBerry`, `Chrome OS`, `Mac OS X`, `Other OS`, `Windows`, `Windows Phone`, `iPad`, `iPhone`, `iPod`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#device_type WirelessSsidDeviceTypeGroupPolicies#device_type}
  */
  readonly deviceType: string;
  /**
  * ID of the group policy object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#group_policy_id WirelessSsidDeviceTypeGroupPolicies#group_policy_id}
  */
  readonly groupPolicyId?: number;
}

export function wirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesToTerraform(struct?: WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_policy: cdktf.stringToTerraform(struct!.devicePolicy),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    group_policy_id: cdktf.numberToTerraform(struct!.groupPolicyId),
  }
}


export function wirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesToHclTerraform(struct?: WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_policy: {
      value: cdktf.stringToHclTerraform(struct!.devicePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_policy_id: {
      value: cdktf.numberToHclTerraform(struct!.groupPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePolicy = this._devicePolicy;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._groupPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPolicyId = this._groupPolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePolicy = undefined;
      this._deviceType = undefined;
      this._groupPolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePolicy = value.devicePolicy;
      this._deviceType = value.deviceType;
      this._groupPolicyId = value.groupPolicyId;
    }
  }

  // device_policy - computed: false, optional: false, required: true
  private _devicePolicy?: string; 
  public get devicePolicy() {
    return this.getStringAttribute('device_policy');
  }
  public set devicePolicy(value: string) {
    this._devicePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy;
  }

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // group_policy_id - computed: false, optional: true, required: false
  private _groupPolicyId?: number; 
  public get groupPolicyId() {
    return this.getNumberAttribute('group_policy_id');
  }
  public set groupPolicyId(value: number) {
    this._groupPolicyId = value;
  }
  public resetGroupPolicyId() {
    this._groupPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPolicyIdInput() {
    return this._groupPolicyId;
  }
}

export class WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesOutputReference {
    return new WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies meraki_wireless_ssid_device_type_group_policies}
*/
export class WirelessSsidDeviceTypeGroupPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_device_type_group_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidDeviceTypeGroupPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidDeviceTypeGroupPolicies to import
  * @param importFromId The id of the existing WirelessSsidDeviceTypeGroupPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidDeviceTypeGroupPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_device_type_group_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/wireless_ssid_device_type_group_policies meraki_wireless_ssid_device_type_group_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidDeviceTypeGroupPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidDeviceTypeGroupPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_device_type_group_policies',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceTypePolicies.internalValue = config.deviceTypePolicies;
    this._enabled = config.enabled;
    this._networkId = config.networkId;
    this._number = config.number;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type_policies - computed: false, optional: true, required: false
  private _deviceTypePolicies = new WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesList(this, "device_type_policies", false);
  public get deviceTypePolicies() {
    return this._deviceTypePolicies;
  }
  public putDeviceTypePolicies(value: WirelessSsidDeviceTypeGroupPoliciesDeviceTypePolicies[] | cdktf.IResolvable) {
    this._deviceTypePolicies.internalValue = value;
  }
  public resetDeviceTypePolicies() {
    this._deviceTypePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypePoliciesInput() {
    return this._deviceTypePolicies.internalValue;
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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type_policies: cdktf.listMapper(wirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesToTerraform, false)(this._deviceTypePolicies.internalValue),
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type_policies: {
        value: cdktf.listMapperHcl(wirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesToHclTerraform, false)(this._deviceTypePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidDeviceTypeGroupPoliciesDeviceTypePoliciesList",
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
