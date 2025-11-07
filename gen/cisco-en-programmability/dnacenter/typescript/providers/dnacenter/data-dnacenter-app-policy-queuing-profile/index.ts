// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterAppPolicyQueuingProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile#id DataDnacenterAppPolicyQueuingProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name query parameter. queuing profile name
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile#name DataDnacenterAppPolicyQueuingProfile#name}
  */
  readonly name?: string;
}
export interface DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings {
}

export function dataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsToHclTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettings | undefined) {
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

export class DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference {
    return new DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClauses {
}

export function dataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesToTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClauses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesToHclTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClauses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClauses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClauses | undefined) {
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
  private _tcBandwidthSettings = new DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesTcBandwidthSettingsList(this, "tc_bandwidth_settings", false);
  public get tcBandwidthSettings() {
    return this._tcBandwidthSettings;
  }
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesOutputReference {
    return new DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettings {
}

export function dataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsToTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsToHclTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettings | undefined) {
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

export class DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsOutputReference {
    return new DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAppPolicyQueuingProfileItemsClause {
}

export function dataDnacenterAppPolicyQueuingProfileItemsClauseToTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAppPolicyQueuingProfileItemsClauseToHclTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItemsClause): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAppPolicyQueuingProfileItemsClause | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAppPolicyQueuingProfileItemsClause | undefined) {
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
  private _interfaceSpeedBandwidthClauses = new DataDnacenterAppPolicyQueuingProfileItemsClauseInterfaceSpeedBandwidthClausesList(this, "interface_speed_bandwidth_clauses", false);
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
  private _tcDscpSettings = new DataDnacenterAppPolicyQueuingProfileItemsClauseTcDscpSettingsList(this, "tc_dscp_settings", false);
  public get tcDscpSettings() {
    return this._tcDscpSettings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataDnacenterAppPolicyQueuingProfileItemsClauseList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAppPolicyQueuingProfileItemsClauseOutputReference {
    return new DataDnacenterAppPolicyQueuingProfileItemsClauseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterAppPolicyQueuingProfileItems {
}

export function dataDnacenterAppPolicyQueuingProfileItemsToTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterAppPolicyQueuingProfileItemsToHclTerraform(struct?: DataDnacenterAppPolicyQueuingProfileItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterAppPolicyQueuingProfileItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterAppPolicyQueuingProfileItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterAppPolicyQueuingProfileItems | undefined) {
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
  private _clause = new DataDnacenterAppPolicyQueuingProfileItemsClauseList(this, "clause", false);
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

export class DataDnacenterAppPolicyQueuingProfileItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterAppPolicyQueuingProfileItemsOutputReference {
    return new DataDnacenterAppPolicyQueuingProfileItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile dnacenter_app_policy_queuing_profile}
*/
export class DataDnacenterAppPolicyQueuingProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_app_policy_queuing_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterAppPolicyQueuingProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterAppPolicyQueuingProfile to import
  * @param importFromId The id of the existing DataDnacenterAppPolicyQueuingProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterAppPolicyQueuingProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_app_policy_queuing_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/app_policy_queuing_profile dnacenter_app_policy_queuing_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterAppPolicyQueuingProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterAppPolicyQueuingProfileConfig = {}) {
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
    this._name = config.name;
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

  // items - computed: true, optional: false, required: false
  private _items = new DataDnacenterAppPolicyQueuingProfileItemsList(this, "items", false);
  public get items() {
    return this._items;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
