// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppPolicyQueuingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#id AppPolicyQueuingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#parameters AppPolicyQueuingProfile#parameters}
  */
  readonly parameters?: AppPolicyQueuingProfileParameters[] | cdktf.IResolvable;
}
export interface AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings {
}

export function appPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToTerraform(struct?: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToHclTerraform(struct?: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth_percentage - computed: true, optional: false, required: false
  public get bandwidthPercentage() {
    return this.getNumberAttribute('bandwidth_percentage');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
}

export class AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference {
    return new AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClauses {
}

export function appPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesToTerraform(struct?: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClauses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesToHclTerraform(struct?: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClauses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClauses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClauses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // interface_speed - computed: true, optional: false, required: false
  public get interfaceSpeed() {
    return this.getStringAttribute('interface_speed');
  }

  // tc_bandwidth_settings - computed: true, optional: false, required: false
  private _tcBandwidthSettings = new AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList(this, "tc_bandwidth_settings", false);
  public get tcBandwidthSettings() {
    return this._tcBandwidthSettings;
  }
}

export class AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesOutputReference {
    return new AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileItemClauseTcDscpSettings {
}

export function appPolicyQueuingProfileItemClauseTcDscpSettingsToTerraform(struct?: AppPolicyQueuingProfileItemClauseTcDscpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyQueuingProfileItemClauseTcDscpSettingsToHclTerraform(struct?: AppPolicyQueuingProfileItemClauseTcDscpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyQueuingProfileItemClauseTcDscpSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppPolicyQueuingProfileItemClauseTcDscpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileItemClauseTcDscpSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getStringAttribute('dscp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // traffic_class - computed: true, optional: false, required: false
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
}

export class AppPolicyQueuingProfileItemClauseTcDscpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyQueuingProfileItemClauseTcDscpSettingsOutputReference {
    return new AppPolicyQueuingProfileItemClauseTcDscpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileItemClause {
}

export function appPolicyQueuingProfileItemClauseToTerraform(struct?: AppPolicyQueuingProfileItemClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyQueuingProfileItemClauseToHclTerraform(struct?: AppPolicyQueuingProfileItemClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyQueuingProfileItemClauseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppPolicyQueuingProfileItemClause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileItemClause | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // interface_speed_bandwidth_clauses - computed: true, optional: false, required: false
  private _interfaceSpeedBandwidthClauses = new AppPolicyQueuingProfileItemClauseInterfaceSpeedBandwidthClausesList(this, "interface_speed_bandwidth_clauses", false);
  public get interfaceSpeedBandwidthClauses() {
    return this._interfaceSpeedBandwidthClauses;
  }

  // is_common_between_all_interface_speeds - computed: true, optional: false, required: false
  public get isCommonBetweenAllInterfaceSpeeds() {
    return this.getStringAttribute('is_common_between_all_interface_speeds');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // tc_dscp_settings - computed: true, optional: false, required: false
  private _tcDscpSettings = new AppPolicyQueuingProfileItemClauseTcDscpSettingsList(this, "tc_dscp_settings", false);
  public get tcDscpSettings() {
    return this._tcDscpSettings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AppPolicyQueuingProfileItemClauseList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyQueuingProfileItemClauseOutputReference {
    return new AppPolicyQueuingProfileItemClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileItem {
}

export function appPolicyQueuingProfileItemToTerraform(struct?: AppPolicyQueuingProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function appPolicyQueuingProfileItemToHclTerraform(struct?: AppPolicyQueuingProfileItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AppPolicyQueuingProfileItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AppPolicyQueuingProfileItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfs_change_info - computed: true, optional: false, required: false
  public get cfsChangeInfo() {
    return this.getListAttribute('cfs_change_info');
  }

  // clause - computed: true, optional: false, required: false
  private _clause = new AppPolicyQueuingProfileItemClauseList(this, "clause", false);
  public get clause() {
    return this._clause;
  }

  // contract_classifier - computed: true, optional: false, required: false
  public get contractClassifier() {
    return this.getListAttribute('contract_classifier');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // custom_provisions - computed: true, optional: false, required: false
  public get customProvisions() {
    return this.getListAttribute('custom_provisions');
  }

  // deployed - computed: true, optional: false, required: false
  public get deployed() {
    return this.getStringAttribute('deployed');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // gen_id - computed: true, optional: false, required: false
  public get genId() {
    return this.getNumberAttribute('gen_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_created_on - computed: true, optional: false, required: false
  public get instanceCreatedOn() {
    return this.getNumberAttribute('instance_created_on');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_updated_on - computed: true, optional: false, required: false
  public get instanceUpdatedOn() {
    return this.getNumberAttribute('instance_updated_on');
  }

  // instance_version - computed: true, optional: false, required: false
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }

  // internal - computed: true, optional: false, required: false
  public get internal() {
    return this.getStringAttribute('internal');
  }

  // is_deleted - computed: true, optional: false, required: false
  public get isDeleted() {
    return this.getStringAttribute('is_deleted');
  }

  // is_seeded - computed: true, optional: false, required: false
  public get isSeeded() {
    return this.getStringAttribute('is_seeded');
  }

  // is_stale - computed: true, optional: false, required: false
  public get isStale() {
    return this.getStringAttribute('is_stale');
  }

  // ise_reserved - computed: true, optional: false, required: false
  public get iseReserved() {
    return this.getStringAttribute('ise_reserved');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // pushed - computed: true, optional: false, required: false
  public get pushed() {
    return this.getStringAttribute('pushed');
  }

  // qualifier - computed: true, optional: false, required: false
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getNumberAttribute('resource_version');
  }

  // target_id_list - computed: true, optional: false, required: false
  public get targetIdList() {
    return this.getListAttribute('target_id_list');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class AppPolicyQueuingProfileItemList extends cdktf.ComplexList {

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
  public get(index: number): AppPolicyQueuingProfileItemOutputReference {
    return new AppPolicyQueuingProfileItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings {
  /**
  * Bandwidth percentage
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#bandwidth_percentage AppPolicyQueuingProfile#bandwidth_percentage}
  */
  readonly bandwidthPercentage?: number;
  /**
  * Instance id
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#instance_id AppPolicyQueuingProfile#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Traffic Class
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#traffic_class AppPolicyQueuingProfile#traffic_class}
  */
  readonly trafficClass?: string;
}

export function appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_percentage: cdktf.numberToTerraform(struct!.bandwidthPercentage),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    traffic_class: cdktf.stringToTerraform(struct!.trafficClass),
  }
}


export function appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToHclTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPercentage = this._bandwidthPercentage;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthPercentage = undefined;
      this._instanceId = undefined;
      this._trafficClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthPercentage = value.bandwidthPercentage;
      this._instanceId = value.instanceId;
      this._trafficClass = value.trafficClass;
    }
  }

  // bandwidth_percentage - computed: true, optional: true, required: false
  private _bandwidthPercentage?: number; 
  public get bandwidthPercentage() {
    return this.getNumberAttribute('bandwidth_percentage');
  }
  public set bandwidthPercentage(value: number) {
    this._bandwidthPercentage = value;
  }
  public resetBandwidthPercentage() {
    this._bandwidthPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPercentageInput() {
    return this._bandwidthPercentage;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // traffic_class - computed: true, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }
}

export class AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList extends cdktf.ComplexList {
  public internalValue? : AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference {
    return new AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses {
  /**
  * Instance id
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#instance_id AppPolicyQueuingProfile#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Interface speed
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#interface_speed AppPolicyQueuingProfile#interface_speed}
  */
  readonly interfaceSpeed?: string;
  /**
  * tc_bandwidth_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#tc_bandwidth_settings AppPolicyQueuingProfile#tc_bandwidth_settings}
  */
  readonly tcBandwidthSettings?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings[] | cdktf.IResolvable;
}

export function appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesToTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    interface_speed: cdktf.stringToTerraform(struct!.interfaceSpeed),
    tc_bandwidth_settings: cdktf.listMapper(appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToTerraform, true)(struct!.tcBandwidthSettings),
  }
}


export function appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesToHclTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface_speed: {
      value: cdktf.stringToHclTerraform(struct!.interfaceSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tc_bandwidth_settings: {
      value: cdktf.listMapperHcl(appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToHclTerraform, true)(struct!.tcBandwidthSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._interfaceSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSpeed = this._interfaceSpeed;
    }
    if (this._tcBandwidthSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcBandwidthSettings = this._tcBandwidthSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._interfaceSpeed = undefined;
      this._tcBandwidthSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._interfaceSpeed = value.interfaceSpeed;
      this._tcBandwidthSettings.internalValue = value.tcBandwidthSettings;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // interface_speed - computed: true, optional: true, required: false
  private _interfaceSpeed?: string; 
  public get interfaceSpeed() {
    return this.getStringAttribute('interface_speed');
  }
  public set interfaceSpeed(value: string) {
    this._interfaceSpeed = value;
  }
  public resetInterfaceSpeed() {
    this._interfaceSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSpeedInput() {
    return this._interfaceSpeed;
  }

  // tc_bandwidth_settings - computed: false, optional: true, required: false
  private _tcBandwidthSettings = new AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList(this, "tc_bandwidth_settings", false);
  public get tcBandwidthSettings() {
    return this._tcBandwidthSettings;
  }
  public putTcBandwidthSettings(value: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings[] | cdktf.IResolvable) {
    this._tcBandwidthSettings.internalValue = value;
  }
  public resetTcBandwidthSettings() {
    this._tcBandwidthSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcBandwidthSettingsInput() {
    return this._tcBandwidthSettings.internalValue;
  }
}

export class AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesList extends cdktf.ComplexList {
  public internalValue? : AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesOutputReference {
    return new AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings {
  /**
  * Dscp value
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#dscp AppPolicyQueuingProfile#dscp}
  */
  readonly dscp?: string;
  /**
  * Instance id
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#instance_id AppPolicyQueuingProfile#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Traffic Class
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#traffic_class AppPolicyQueuingProfile#traffic_class}
  */
  readonly trafficClass?: string;
}

export function appPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsToTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dscp: cdktf.stringToTerraform(struct!.dscp),
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    traffic_class: cdktf.stringToTerraform(struct!.trafficClass),
  }
}


export function appPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsToHclTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dscp: {
      value: cdktf.stringToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.trafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._trafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficClass = this._trafficClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dscp = undefined;
      this._instanceId = undefined;
      this._trafficClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dscp = value.dscp;
      this._instanceId = value.instanceId;
      this._trafficClass = value.trafficClass;
    }
  }

  // dscp - computed: true, optional: true, required: false
  private _dscp?: string; 
  public get dscp() {
    return this.getStringAttribute('dscp');
  }
  public set dscp(value: string) {
    this._dscp = value;
  }
  public resetDscp() {
    this._dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // traffic_class - computed: true, optional: true, required: false
  private _trafficClass?: string; 
  public get trafficClass() {
    return this.getStringAttribute('traffic_class');
  }
  public set trafficClass(value: string) {
    this._trafficClass = value;
  }
  public resetTrafficClass() {
    this._trafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficClassInput() {
    return this._trafficClass;
  }
}

export class AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsList extends cdktf.ComplexList {
  public internalValue? : AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsOutputReference {
    return new AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileParametersPayloadClause {
  /**
  * Instance id
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#instance_id AppPolicyQueuingProfile#instance_id}
  */
  readonly instanceId?: number;
  /**
  * Is common between all interface speeds
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#is_common_between_all_interface_speeds AppPolicyQueuingProfile#is_common_between_all_interface_speeds}
  */
  readonly isCommonBetweenAllInterfaceSpeeds?: string;
  /**
  * Type
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#type AppPolicyQueuingProfile#type}
  */
  readonly type?: string;
  /**
  * interface_speed_bandwidth_clauses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#interface_speed_bandwidth_clauses AppPolicyQueuingProfile#interface_speed_bandwidth_clauses}
  */
  readonly interfaceSpeedBandwidthClauses?: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses[] | cdktf.IResolvable;
  /**
  * tc_dscp_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#tc_dscp_settings AppPolicyQueuingProfile#tc_dscp_settings}
  */
  readonly tcDscpSettings?: AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings[] | cdktf.IResolvable;
}

export function appPolicyQueuingProfileParametersPayloadClauseToTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_id: cdktf.numberToTerraform(struct!.instanceId),
    is_common_between_all_interface_speeds: cdktf.stringToTerraform(struct!.isCommonBetweenAllInterfaceSpeeds),
    type: cdktf.stringToTerraform(struct!.type),
    interface_speed_bandwidth_clauses: cdktf.listMapper(appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesToTerraform, true)(struct!.interfaceSpeedBandwidthClauses),
    tc_dscp_settings: cdktf.listMapper(appPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsToTerraform, true)(struct!.tcDscpSettings),
  }
}


export function appPolicyQueuingProfileParametersPayloadClauseToHclTerraform(struct?: AppPolicyQueuingProfileParametersPayloadClause | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_id: {
      value: cdktf.numberToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_common_between_all_interface_speeds: {
      value: cdktf.stringToHclTerraform(struct!.isCommonBetweenAllInterfaceSpeeds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_speed_bandwidth_clauses: {
      value: cdktf.listMapperHcl(appPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesToHclTerraform, true)(struct!.interfaceSpeedBandwidthClauses),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesList",
    },
    tc_dscp_settings: {
      value: cdktf.listMapperHcl(appPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsToHclTerraform, true)(struct!.tcDscpSettings),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersPayloadClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyQueuingProfileParametersPayloadClause | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._isCommonBetweenAllInterfaceSpeeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCommonBetweenAllInterfaceSpeeds = this._isCommonBetweenAllInterfaceSpeeds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._interfaceSpeedBandwidthClauses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceSpeedBandwidthClauses = this._interfaceSpeedBandwidthClauses?.internalValue;
    }
    if (this._tcDscpSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcDscpSettings = this._tcDscpSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParametersPayloadClause | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceId = undefined;
      this._isCommonBetweenAllInterfaceSpeeds = undefined;
      this._type = undefined;
      this._interfaceSpeedBandwidthClauses.internalValue = undefined;
      this._tcDscpSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceId = value.instanceId;
      this._isCommonBetweenAllInterfaceSpeeds = value.isCommonBetweenAllInterfaceSpeeds;
      this._type = value.type;
      this._interfaceSpeedBandwidthClauses.internalValue = value.interfaceSpeedBandwidthClauses;
      this._tcDscpSettings.internalValue = value.tcDscpSettings;
    }
  }

  // instance_id - computed: true, optional: true, required: false
  private _instanceId?: number; 
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }
  public set instanceId(value: number) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_common_between_all_interface_speeds - computed: true, optional: true, required: false
  private _isCommonBetweenAllInterfaceSpeeds?: string; 
  public get isCommonBetweenAllInterfaceSpeeds() {
    return this.getStringAttribute('is_common_between_all_interface_speeds');
  }
  public set isCommonBetweenAllInterfaceSpeeds(value: string) {
    this._isCommonBetweenAllInterfaceSpeeds = value;
  }
  public resetIsCommonBetweenAllInterfaceSpeeds() {
    this._isCommonBetweenAllInterfaceSpeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCommonBetweenAllInterfaceSpeedsInput() {
    return this._isCommonBetweenAllInterfaceSpeeds;
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

  // interface_speed_bandwidth_clauses - computed: false, optional: true, required: false
  private _interfaceSpeedBandwidthClauses = new AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClausesList(this, "interface_speed_bandwidth_clauses", false);
  public get interfaceSpeedBandwidthClauses() {
    return this._interfaceSpeedBandwidthClauses;
  }
  public putInterfaceSpeedBandwidthClauses(value: AppPolicyQueuingProfileParametersPayloadClauseInterfaceSpeedBandwidthClauses[] | cdktf.IResolvable) {
    this._interfaceSpeedBandwidthClauses.internalValue = value;
  }
  public resetInterfaceSpeedBandwidthClauses() {
    this._interfaceSpeedBandwidthClauses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceSpeedBandwidthClausesInput() {
    return this._interfaceSpeedBandwidthClauses.internalValue;
  }

  // tc_dscp_settings - computed: false, optional: true, required: false
  private _tcDscpSettings = new AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettingsList(this, "tc_dscp_settings", false);
  public get tcDscpSettings() {
    return this._tcDscpSettings;
  }
  public putTcDscpSettings(value: AppPolicyQueuingProfileParametersPayloadClauseTcDscpSettings[] | cdktf.IResolvable) {
    this._tcDscpSettings.internalValue = value;
  }
  public resetTcDscpSettings() {
    this._tcDscpSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcDscpSettingsInput() {
    return this._tcDscpSettings.internalValue;
  }
}

export class AppPolicyQueuingProfileParametersPayloadClauseList extends cdktf.ComplexList {
  public internalValue? : AppPolicyQueuingProfileParametersPayloadClause[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyQueuingProfileParametersPayloadClauseOutputReference {
    return new AppPolicyQueuingProfileParametersPayloadClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AppPolicyQueuingProfileParametersPayload {
  /**
  * Free test description
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#description AppPolicyQueuingProfile#description}
  */
  readonly description?: string;
  /**
  * Id of Queueing profile
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#id AppPolicyQueuingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Queueing profile name
  * 									
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#name AppPolicyQueuingProfile#name}
  */
  readonly name?: string;
  /**
  * clause block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#clause AppPolicyQueuingProfile#clause}
  */
  readonly clause?: AppPolicyQueuingProfileParametersPayloadClause[] | cdktf.IResolvable;
}

export function appPolicyQueuingProfileParametersPayloadToTerraform(struct?: AppPolicyQueuingProfileParametersPayloadOutputReference | AppPolicyQueuingProfileParametersPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    clause: cdktf.listMapper(appPolicyQueuingProfileParametersPayloadClauseToTerraform, true)(struct!.clause),
  }
}


export function appPolicyQueuingProfileParametersPayloadToHclTerraform(struct?: AppPolicyQueuingProfileParametersPayloadOutputReference | AppPolicyQueuingProfileParametersPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    clause: {
      value: cdktf.listMapperHcl(appPolicyQueuingProfileParametersPayloadClauseToHclTerraform, true)(struct!.clause),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyQueuingProfileParametersPayloadClauseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppPolicyQueuingProfileParametersPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._clause?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clause = this._clause?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParametersPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._clause.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._clause.internalValue = value.clause;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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

  // clause - computed: false, optional: true, required: false
  private _clause = new AppPolicyQueuingProfileParametersPayloadClauseList(this, "clause", false);
  public get clause() {
    return this._clause;
  }
  public putClause(value: AppPolicyQueuingProfileParametersPayloadClause[] | cdktf.IResolvable) {
    this._clause.internalValue = value;
  }
  public resetClause() {
    this._clause.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clauseInput() {
    return this._clause.internalValue;
  }
}
export interface AppPolicyQueuingProfileParameters {
  /**
  * payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#payload AppPolicyQueuingProfile#payload}
  */
  readonly payload: AppPolicyQueuingProfileParametersPayload;
}

export function appPolicyQueuingProfileParametersToTerraform(struct?: AppPolicyQueuingProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    payload: appPolicyQueuingProfileParametersPayloadToTerraform(struct!.payload),
  }
}


export function appPolicyQueuingProfileParametersToHclTerraform(struct?: AppPolicyQueuingProfileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    payload: {
      value: appPolicyQueuingProfileParametersPayloadToHclTerraform(struct!.payload),
      isBlock: true,
      type: "list",
      storageClassType: "AppPolicyQueuingProfileParametersPayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppPolicyQueuingProfileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AppPolicyQueuingProfileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.payload = this._payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppPolicyQueuingProfileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._payload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._payload.internalValue = value.payload;
    }
  }

  // payload - computed: false, optional: false, required: true
  private _payload = new AppPolicyQueuingProfileParametersPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }
  public putPayload(value: AppPolicyQueuingProfileParametersPayload) {
    this._payload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadInput() {
    return this._payload.internalValue;
  }
}

export class AppPolicyQueuingProfileParametersList extends cdktf.ComplexList {
  public internalValue? : AppPolicyQueuingProfileParameters[] | cdktf.IResolvable

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
  public get(index: number): AppPolicyQueuingProfileParametersOutputReference {
    return new AppPolicyQueuingProfileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile dnacenter_app_policy_queuing_profile}
*/
export class AppPolicyQueuingProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_app_policy_queuing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppPolicyQueuingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppPolicyQueuingProfile to import
  * @param importFromId The id of the existing AppPolicyQueuingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppPolicyQueuingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_app_policy_queuing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/app_policy_queuing_profile dnacenter_app_policy_queuing_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppPolicyQueuingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AppPolicyQueuingProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_app_policy_queuing_profile',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new AppPolicyQueuingProfileItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new AppPolicyQueuingProfileParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: AppPolicyQueuingProfileParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(appPolicyQueuingProfileParametersToTerraform, true)(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: cdktf.listMapperHcl(appPolicyQueuingProfileParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppPolicyQueuingProfileParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
