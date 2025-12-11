// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFusionAppsFusionEnvironmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#compartment_id DataOciFusionAppsFusionEnvironments#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#display_name DataOciFusionAppsFusionEnvironments#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#fusion_environment_family_id DataOciFusionAppsFusionEnvironments#fusion_environment_family_id}
  */
  readonly fusionEnvironmentFamilyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#id DataOciFusionAppsFusionEnvironments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#state DataOciFusionAppsFusionEnvironments#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#filter DataOciFusionAppsFusionEnvironments#filter}
  */
  readonly filter?: DataOciFusionAppsFusionEnvironmentsFilter[] | cdktf.IResolvable;
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_key_id - computed: true, optional: false, required: false
  public get activeKeyId() {
    return this.getStringAttribute('active_key_id');
  }

  // active_key_version - computed: true, optional: false, required: false
  public get activeKeyVersion() {
    return this.getStringAttribute('active_key_version');
  }

  // current_key_lifecycle_state - computed: true, optional: false, required: false
  public get currentKeyLifecycleState() {
    return this.getStringAttribute('current_key_lifecycle_state');
  }

  // scheduled_key_id - computed: true, optional: false, required: false
  public get scheduledKeyId() {
    return this.getStringAttribute('scheduled_key_id');
  }

  // scheduled_key_status - computed: true, optional: false, required: false
  public get scheduledKeyStatus() {
    return this.getStringAttribute('scheduled_key_status');
  }

  // scheduled_key_version - computed: true, optional: false, required: false
  public get scheduledKeyVersion() {
    return this.getStringAttribute('scheduled_key_version');
  }

  // scheduled_lifecycle_state - computed: true, optional: false, required: false
  public get scheduledLifecycleState() {
    return this.getStringAttribute('scheduled_lifecycle_state');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // begin_times_value - computed: true, optional: false, required: false
  public get beginTimesValue() {
    return this.getStringAttribute('begin_times_value');
  }

  // override_type - computed: true, optional: false, required: false
  public get overrideType() {
    return this.getStringAttribute('override_type');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_maintenance_override - computed: true, optional: false, required: false
  public get environmentMaintenanceOverride() {
    return this.getStringAttribute('environment_maintenance_override');
  }

  // monthly_patching_override - computed: true, optional: false, required: false
  public get monthlyPatchingOverride() {
    return this.getStringAttribute('monthly_patching_override');
  }

  // quarterly_upgrade_begin_times - computed: true, optional: false, required: false
  private _quarterlyUpgradeBeginTimes = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyQuarterlyUpgradeBeginTimesList(this, "quarterly_upgrade_begin_times", false);
  public get quarterlyUpgradeBeginTimes() {
    return this._quarterlyUpgradeBeginTimes;
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefresh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_fusion_environment_id - computed: true, optional: false, required: false
  public get sourceFusionEnvironmentId() {
    return this.getStringAttribute('source_fusion_environment_id');
  }

  // time_finished - computed: true, optional: false, required: false
  public get timeFinished() {
    return this.getStringAttribute('time_finished');
  }

  // time_of_restoration_point - computed: true, optional: false, required: false
  public get timeOfRestorationPoint() {
    return this.getStringAttribute('time_of_restoration_point');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attribute_name - computed: true, optional: false, required: false
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }

  // attribute_value - computed: true, optional: false, required: false
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_language_packs - computed: true, optional: false, required: false
  public get additionalLanguagePacks() {
    return this.getListAttribute('additional_language_packs');
  }

  // applied_patch_bundles - computed: true, optional: false, required: false
  public get appliedPatchBundles() {
    return this.getListAttribute('applied_patch_bundles');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // create_fusion_environment_admin_user_details - computed: true, optional: false, required: false
  private _createFusionEnvironmentAdminUserDetails = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsCreateFusionEnvironmentAdminUserDetailsList(this, "create_fusion_environment_admin_user_details", false);
  public get createFusionEnvironmentAdminUserDetails() {
    return this._createFusionEnvironmentAdminUserDetails;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // dns_prefix - computed: true, optional: false, required: false
  public get dnsPrefix() {
    return this.getStringAttribute('dns_prefix');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // fusion_environment_family_id - computed: true, optional: false, required: false
  public get fusionEnvironmentFamilyId() {
    return this.getStringAttribute('fusion_environment_family_id');
  }

  // fusion_environment_type - computed: true, optional: false, required: false
  public get fusionEnvironmentType() {
    return this.getStringAttribute('fusion_environment_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_domain_url - computed: true, optional: false, required: false
  public get idcsDomainUrl() {
    return this.getStringAttribute('idcs_domain_url');
  }

  // is_break_glass_enabled - computed: true, optional: false, required: false
  public get isBreakGlassEnabled() {
    return this.getBooleanAttribute('is_break_glass_enabled');
  }

  // is_ipv6dual_stack_enabled - computed: true, optional: false, required: false
  public get isIpv6DualStackEnabled() {
    return this.getBooleanAttribute('is_ipv6dual_stack_enabled');
  }

  // kms_key_id - computed: true, optional: false, required: false
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }

  // kms_key_info - computed: true, optional: false, required: false
  private _kmsKeyInfo = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsKmsKeyInfoList(this, "kms_key_info", false);
  public get kmsKeyInfo() {
    return this._kmsKeyInfo;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // lockbox_id - computed: true, optional: false, required: false
  public get lockboxId() {
    return this.getStringAttribute('lockbox_id');
  }

  // maintenance_policy - computed: true, optional: false, required: false
  private _maintenancePolicy = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsMaintenancePolicyList(this, "maintenance_policy", false);
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }

  // public_url - computed: true, optional: false, required: false
  public get publicUrl() {
    return this.getStringAttribute('public_url');
  }

  // refresh - computed: true, optional: false, required: false
  private _refresh = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRefreshList(this, "refresh", false);
  public get refresh() {
    return this._refresh;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return this.getListAttribute('subscription_ids');
  }

  // system_name - computed: true, optional: false, required: false
  public get systemName() {
    return this.getStringAttribute('system_name');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_upcoming_maintenance - computed: true, optional: false, required: false
  public get timeUpcomingMaintenance() {
    return this.getStringAttribute('time_upcoming_maintenance');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection {
}

export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFusionAppsFusionEnvironmentsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#name DataOciFusionAppsFusionEnvironments#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#regex DataOciFusionAppsFusionEnvironments#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#values DataOciFusionAppsFusionEnvironments#values}
  */
  readonly values: string[];
}

export function dataOciFusionAppsFusionEnvironmentsFilterToTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciFusionAppsFusionEnvironmentsFilterToHclTerraform(struct?: DataOciFusionAppsFusionEnvironmentsFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciFusionAppsFusionEnvironmentsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFusionAppsFusionEnvironmentsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFusionAppsFusionEnvironmentsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciFusionAppsFusionEnvironmentsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFusionAppsFusionEnvironmentsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFusionAppsFusionEnvironmentsFilterOutputReference {
    return new DataOciFusionAppsFusionEnvironmentsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments oci_fusion_apps_fusion_environments}
*/
export class DataOciFusionAppsFusionEnvironments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fusion_apps_fusion_environments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFusionAppsFusionEnvironments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFusionAppsFusionEnvironments to import
  * @param importFromId The id of the existing DataOciFusionAppsFusionEnvironments that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFusionAppsFusionEnvironments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fusion_apps_fusion_environments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fusion_apps_fusion_environments oci_fusion_apps_fusion_environments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFusionAppsFusionEnvironmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFusionAppsFusionEnvironmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fusion_apps_fusion_environments',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._fusionEnvironmentFamilyId = config.fusionEnvironmentFamilyId;
    this._id = config.id;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fusion_environment_collection - computed: true, optional: false, required: false
  private _fusionEnvironmentCollection = new DataOciFusionAppsFusionEnvironmentsFusionEnvironmentCollectionList(this, "fusion_environment_collection", false);
  public get fusionEnvironmentCollection() {
    return this._fusionEnvironmentCollection;
  }

  // fusion_environment_family_id - computed: false, optional: true, required: false
  private _fusionEnvironmentFamilyId?: string; 
  public get fusionEnvironmentFamilyId() {
    return this.getStringAttribute('fusion_environment_family_id');
  }
  public set fusionEnvironmentFamilyId(value: string) {
    this._fusionEnvironmentFamilyId = value;
  }
  public resetFusionEnvironmentFamilyId() {
    this._fusionEnvironmentFamilyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fusionEnvironmentFamilyIdInput() {
    return this._fusionEnvironmentFamilyId;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFusionAppsFusionEnvironmentsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFusionAppsFusionEnvironmentsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      fusion_environment_family_id: cdktf.stringToTerraform(this._fusionEnvironmentFamilyId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciFusionAppsFusionEnvironmentsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fusion_environment_family_id: {
        value: cdktf.stringToHclTerraform(this._fusionEnvironmentFamilyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFusionAppsFusionEnvironmentsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFusionAppsFusionEnvironmentsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
