// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfUserFarmMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configurations of the EquivalentFarmSets that will be assigned to the UserFarmMapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#equivalent_farm_sets StfUserFarmMapping#equivalent_farm_sets}
  */
  readonly equivalentFarmSets: StfUserFarmMappingEquivalentFarmSets[] | cdktf.IResolvable;
  /**
  * The Windows groups to which the UserFarmMapping will apply. Not specifying this field will assign all users to the UserFarmMapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#group_members StfUserFarmMapping#group_members}
  */
  readonly groupMembers?: StfUserFarmMappingGroupMembers[] | cdktf.IResolvable;
  /**
  * The unique name used to identify the UserFarmMapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#name StfUserFarmMapping#name}
  */
  readonly name: string;
  /**
  * The IIS VirtualPath at which the Store is configured to be accessed by Receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#store_virtual_path StfUserFarmMapping#store_virtual_path}
  */
  readonly storeVirtualPath: string;
}
export interface StfUserFarmMappingEquivalentFarmSets {
  /**
  * The AggregationGroupName used to de-duplicate applications and desktops that are available on multiple EquivalentFarmSets. Where multiple EquivalentFarmSets are defined the AggregationGroup will prevent the user seeing the application multiple times if it exists in both places.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#aggregation_group_name StfUserFarmMapping#aggregation_group_name}
  */
  readonly aggregationGroupName: string;
  /**
  * The BackupFarms. The farm names should match those defined in the Store Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#backup_farms StfUserFarmMapping#backup_farms}
  */
  readonly backupFarms?: string[];
  /**
  * Whether the PrimaryFarms in the EquivalentFarmSet all publish identical resources. Set to true if all resources are identical on all primary farms. Set to false if the deployment has some unique resources per farm. Default to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#farms_are_identical StfUserFarmMapping#farms_are_identical}
  */
  readonly farmsAreIdentical?: boolean | cdktf.IResolvable;
  /**
  * The load balance mode, either `Failover` or `LoadBalanced`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#load_balance_mode StfUserFarmMapping#load_balance_mode}
  */
  readonly loadBalanceMode: string;
  /**
  * The unique Name used to identify the EquivalentFarmSet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#name StfUserFarmMapping#name}
  */
  readonly name: string;
  /**
  * The PrimaryFarms. The farm names should match those defined in the Store service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#primary_farms StfUserFarmMapping#primary_farms}
  */
  readonly primaryFarms: string[];
}

export function stfUserFarmMappingEquivalentFarmSetsToTerraform(struct?: StfUserFarmMappingEquivalentFarmSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_group_name: cdktf.stringToTerraform(struct!.aggregationGroupName),
    backup_farms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupFarms),
    farms_are_identical: cdktf.booleanToTerraform(struct!.farmsAreIdentical),
    load_balance_mode: cdktf.stringToTerraform(struct!.loadBalanceMode),
    name: cdktf.stringToTerraform(struct!.name),
    primary_farms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.primaryFarms),
  }
}


export function stfUserFarmMappingEquivalentFarmSetsToHclTerraform(struct?: StfUserFarmMappingEquivalentFarmSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_group_name: {
      value: cdktf.stringToHclTerraform(struct!.aggregationGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_farms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupFarms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    farms_are_identical: {
      value: cdktf.booleanToHclTerraform(struct!.farmsAreIdentical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balance_mode: {
      value: cdktf.stringToHclTerraform(struct!.loadBalanceMode),
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
    primary_farms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.primaryFarms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfUserFarmMappingEquivalentFarmSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StfUserFarmMappingEquivalentFarmSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationGroupName = this._aggregationGroupName;
    }
    if (this._backupFarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupFarms = this._backupFarms;
    }
    if (this._farmsAreIdentical !== undefined) {
      hasAnyValues = true;
      internalValueResult.farmsAreIdentical = this._farmsAreIdentical;
    }
    if (this._loadBalanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalanceMode = this._loadBalanceMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryFarms !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryFarms = this._primaryFarms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfUserFarmMappingEquivalentFarmSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregationGroupName = undefined;
      this._backupFarms = undefined;
      this._farmsAreIdentical = undefined;
      this._loadBalanceMode = undefined;
      this._name = undefined;
      this._primaryFarms = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregationGroupName = value.aggregationGroupName;
      this._backupFarms = value.backupFarms;
      this._farmsAreIdentical = value.farmsAreIdentical;
      this._loadBalanceMode = value.loadBalanceMode;
      this._name = value.name;
      this._primaryFarms = value.primaryFarms;
    }
  }

  // aggregation_group_name - computed: false, optional: false, required: true
  private _aggregationGroupName?: string; 
  public get aggregationGroupName() {
    return this.getStringAttribute('aggregation_group_name');
  }
  public set aggregationGroupName(value: string) {
    this._aggregationGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationGroupNameInput() {
    return this._aggregationGroupName;
  }

  // backup_farms - computed: true, optional: true, required: false
  private _backupFarms?: string[]; 
  public get backupFarms() {
    return this.getListAttribute('backup_farms');
  }
  public set backupFarms(value: string[]) {
    this._backupFarms = value;
  }
  public resetBackupFarms() {
    this._backupFarms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupFarmsInput() {
    return this._backupFarms;
  }

  // farms_are_identical - computed: true, optional: true, required: false
  private _farmsAreIdentical?: boolean | cdktf.IResolvable; 
  public get farmsAreIdentical() {
    return this.getBooleanAttribute('farms_are_identical');
  }
  public set farmsAreIdentical(value: boolean | cdktf.IResolvable) {
    this._farmsAreIdentical = value;
  }
  public resetFarmsAreIdentical() {
    this._farmsAreIdentical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get farmsAreIdenticalInput() {
    return this._farmsAreIdentical;
  }

  // load_balance_mode - computed: false, optional: false, required: true
  private _loadBalanceMode?: string; 
  public get loadBalanceMode() {
    return this.getStringAttribute('load_balance_mode');
  }
  public set loadBalanceMode(value: string) {
    this._loadBalanceMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceModeInput() {
    return this._loadBalanceMode;
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

  // primary_farms - computed: false, optional: false, required: true
  private _primaryFarms?: string[]; 
  public get primaryFarms() {
    return this.getListAttribute('primary_farms');
  }
  public set primaryFarms(value: string[]) {
    this._primaryFarms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFarmsInput() {
    return this._primaryFarms;
  }
}

export class StfUserFarmMappingEquivalentFarmSetsList extends cdktf.ComplexList {
  public internalValue? : StfUserFarmMappingEquivalentFarmSets[] | cdktf.IResolvable

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
  public get(index: number): StfUserFarmMappingEquivalentFarmSetsOutputReference {
    return new StfUserFarmMappingEquivalentFarmSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StfUserFarmMappingGroupMembers {
  /**
  * Sid of the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#account_sid StfUserFarmMapping#account_sid}
  */
  readonly accountSid: string;
  /**
  * A display only group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#group_name StfUserFarmMapping#group_name}
  */
  readonly groupName: string;
}

export function stfUserFarmMappingGroupMembersToTerraform(struct?: StfUserFarmMappingGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_sid: cdktf.stringToTerraform(struct!.accountSid),
    group_name: cdktf.stringToTerraform(struct!.groupName),
  }
}


export function stfUserFarmMappingGroupMembersToHclTerraform(struct?: StfUserFarmMappingGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_sid: {
      value: cdktf.stringToHclTerraform(struct!.accountSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfUserFarmMappingGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StfUserFarmMappingGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountSid = this._accountSid;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfUserFarmMappingGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountSid = undefined;
      this._groupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountSid = value.accountSid;
      this._groupName = value.groupName;
    }
  }

  // account_sid - computed: false, optional: false, required: true
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }
}

export class StfUserFarmMappingGroupMembersList extends cdktf.ComplexList {
  public internalValue? : StfUserFarmMappingGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): StfUserFarmMappingGroupMembersOutputReference {
    return new StfUserFarmMappingGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping citrix_stf_user_farm_mapping}
*/
export class StfUserFarmMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_user_farm_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfUserFarmMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfUserFarmMapping to import
  * @param importFromId The id of the existing StfUserFarmMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfUserFarmMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_user_farm_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_user_farm_mapping citrix_stf_user_farm_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfUserFarmMappingConfig
  */
  public constructor(scope: Construct, id: string, config: StfUserFarmMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_user_farm_mapping',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._equivalentFarmSets.internalValue = config.equivalentFarmSets;
    this._groupMembers.internalValue = config.groupMembers;
    this._name = config.name;
    this._storeVirtualPath = config.storeVirtualPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // equivalent_farm_sets - computed: false, optional: false, required: true
  private _equivalentFarmSets = new StfUserFarmMappingEquivalentFarmSetsList(this, "equivalent_farm_sets", false);
  public get equivalentFarmSets() {
    return this._equivalentFarmSets;
  }
  public putEquivalentFarmSets(value: StfUserFarmMappingEquivalentFarmSets[] | cdktf.IResolvable) {
    this._equivalentFarmSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get equivalentFarmSetsInput() {
    return this._equivalentFarmSets.internalValue;
  }

  // group_members - computed: false, optional: true, required: false
  private _groupMembers = new StfUserFarmMappingGroupMembersList(this, "group_members", false);
  public get groupMembers() {
    return this._groupMembers;
  }
  public putGroupMembers(value: StfUserFarmMappingGroupMembers[] | cdktf.IResolvable) {
    this._groupMembers.internalValue = value;
  }
  public resetGroupMembers() {
    this._groupMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembersInput() {
    return this._groupMembers.internalValue;
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

  // store_virtual_path - computed: false, optional: false, required: true
  private _storeVirtualPath?: string; 
  public get storeVirtualPath() {
    return this.getStringAttribute('store_virtual_path');
  }
  public set storeVirtualPath(value: string) {
    this._storeVirtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeVirtualPathInput() {
    return this._storeVirtualPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      equivalent_farm_sets: cdktf.listMapper(stfUserFarmMappingEquivalentFarmSetsToTerraform, false)(this._equivalentFarmSets.internalValue),
      group_members: cdktf.listMapper(stfUserFarmMappingGroupMembersToTerraform, false)(this._groupMembers.internalValue),
      name: cdktf.stringToTerraform(this._name),
      store_virtual_path: cdktf.stringToTerraform(this._storeVirtualPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      equivalent_farm_sets: {
        value: cdktf.listMapperHcl(stfUserFarmMappingEquivalentFarmSetsToHclTerraform, false)(this._equivalentFarmSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StfUserFarmMappingEquivalentFarmSetsList",
      },
      group_members: {
        value: cdktf.listMapperHcl(stfUserFarmMappingGroupMembersToHclTerraform, false)(this._groupMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StfUserFarmMappingGroupMembersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_virtual_path: {
        value: cdktf.stringToHclTerraform(this._storeVirtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
