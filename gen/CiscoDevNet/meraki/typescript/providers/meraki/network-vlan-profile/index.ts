// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVlanProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * IName of the profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#iname NetworkVlanProfile#iname}
  */
  readonly iname: string;
  /**
  * Name of the profile, string length must be from 1 to 255 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#name NetworkVlanProfile#name}
  */
  readonly name: string;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#network_id NetworkVlanProfile#network_id}
  */
  readonly networkId: string;
  /**
  * An array of VLAN groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#vlan_groups NetworkVlanProfile#vlan_groups}
  */
  readonly vlanGroups: NetworkVlanProfileVlanGroups[] | cdktf.IResolvable;
  /**
  * An array of named VLANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#vlan_names NetworkVlanProfile#vlan_names}
  */
  readonly vlanNames: NetworkVlanProfileVlanNames[] | cdktf.IResolvable;
}
export interface NetworkVlanProfileVlanGroups {
  /**
  * Name of the VLAN, string length must be from 1 to 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#name NetworkVlanProfile#name}
  */
  readonly name: string;
  /**
  * Comma-separated VLAN IDs or ID ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#vlan_ids NetworkVlanProfile#vlan_ids}
  */
  readonly vlanIds: string;
}

export function networkVlanProfileVlanGroupsToTerraform(struct?: NetworkVlanProfileVlanGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vlan_ids: cdktf.stringToTerraform(struct!.vlanIds),
  }
}


export function networkVlanProfileVlanGroupsToHclTerraform(struct?: NetworkVlanProfileVlanGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_ids: {
      value: cdktf.stringToHclTerraform(struct!.vlanIds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanProfileVlanGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanProfileVlanGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanProfileVlanGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vlanIds = value.vlanIds;
    }
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

  // vlan_ids - computed: false, optional: false, required: true
  private _vlanIds?: string; 
  public get vlanIds() {
    return this.getStringAttribute('vlan_ids');
  }
  public set vlanIds(value: string) {
    this._vlanIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class NetworkVlanProfileVlanGroupsList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanProfileVlanGroups[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanProfileVlanGroupsOutputReference {
    return new NetworkVlanProfileVlanGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkVlanProfileVlanNames {
  /**
  * Adaptive Policy Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#adaptive_policy_group_id NetworkVlanProfile#adaptive_policy_group_id}
  */
  readonly adaptivePolicyGroupId?: string;
  /**
  * Name of the VLAN, string length must be from 1 to 32 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#name NetworkVlanProfile#name}
  */
  readonly name: string;
  /**
  * VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#vlan_id NetworkVlanProfile#vlan_id}
  */
  readonly vlanId: string;
}

export function networkVlanProfileVlanNamesToTerraform(struct?: NetworkVlanProfileVlanNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adaptive_policy_group_id: cdktf.stringToTerraform(struct!.adaptivePolicyGroupId),
    name: cdktf.stringToTerraform(struct!.name),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function networkVlanProfileVlanNamesToHclTerraform(struct?: NetworkVlanProfileVlanNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adaptive_policy_group_id: {
      value: cdktf.stringToHclTerraform(struct!.adaptivePolicyGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVlanProfileVlanNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkVlanProfileVlanNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adaptivePolicyGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adaptivePolicyGroupId = this._adaptivePolicyGroupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVlanProfileVlanNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adaptivePolicyGroupId = undefined;
      this._name = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adaptivePolicyGroupId = value.adaptivePolicyGroupId;
      this._name = value.name;
      this._vlanId = value.vlanId;
    }
  }

  // adaptive_policy_group_id - computed: false, optional: true, required: false
  private _adaptivePolicyGroupId?: string; 
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }
  public set adaptivePolicyGroupId(value: string) {
    this._adaptivePolicyGroupId = value;
  }
  public resetAdaptivePolicyGroupId() {
    this._adaptivePolicyGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptivePolicyGroupIdInput() {
    return this._adaptivePolicyGroupId;
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

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class NetworkVlanProfileVlanNamesList extends cdktf.ComplexList {
  public internalValue? : NetworkVlanProfileVlanNames[] | cdktf.IResolvable

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
  public get(index: number): NetworkVlanProfileVlanNamesOutputReference {
    return new NetworkVlanProfileVlanNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile meraki_network_vlan_profile}
*/
export class NetworkVlanProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_vlan_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVlanProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVlanProfile to import
  * @param importFromId The id of the existing NetworkVlanProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVlanProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_vlan_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/network_vlan_profile meraki_network_vlan_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVlanProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVlanProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_vlan_profile',
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
    this._iname = config.iname;
    this._name = config.name;
    this._networkId = config.networkId;
    this._vlanGroups.internalValue = config.vlanGroups;
    this._vlanNames.internalValue = config.vlanNames;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // iname - computed: false, optional: false, required: true
  private _iname?: string; 
  public get iname() {
    return this.getStringAttribute('iname');
  }
  public set iname(value: string) {
    this._iname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inameInput() {
    return this._iname;
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

  // vlan_groups - computed: false, optional: false, required: true
  private _vlanGroups = new NetworkVlanProfileVlanGroupsList(this, "vlan_groups", false);
  public get vlanGroups() {
    return this._vlanGroups;
  }
  public putVlanGroups(value: NetworkVlanProfileVlanGroups[] | cdktf.IResolvable) {
    this._vlanGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanGroupsInput() {
    return this._vlanGroups.internalValue;
  }

  // vlan_names - computed: false, optional: false, required: true
  private _vlanNames = new NetworkVlanProfileVlanNamesList(this, "vlan_names", false);
  public get vlanNames() {
    return this._vlanNames;
  }
  public putVlanNames(value: NetworkVlanProfileVlanNames[] | cdktf.IResolvable) {
    this._vlanNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNamesInput() {
    return this._vlanNames.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      iname: cdktf.stringToTerraform(this._iname),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      vlan_groups: cdktf.listMapper(networkVlanProfileVlanGroupsToTerraform, false)(this._vlanGroups.internalValue),
      vlan_names: cdktf.listMapper(networkVlanProfileVlanNamesToTerraform, false)(this._vlanNames.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      iname: {
        value: cdktf.stringToHclTerraform(this._iname),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_groups: {
        value: cdktf.listMapperHcl(networkVlanProfileVlanGroupsToHclTerraform, false)(this._vlanGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanProfileVlanGroupsList",
      },
      vlan_names: {
        value: cdktf.listMapperHcl(networkVlanProfileVlanNamesToHclTerraform, false)(this._vlanNames.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVlanProfileVlanNamesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
