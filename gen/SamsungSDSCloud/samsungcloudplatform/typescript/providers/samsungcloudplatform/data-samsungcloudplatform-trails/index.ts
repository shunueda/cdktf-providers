// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSamsungcloudplatformTrailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#id DataSamsungcloudplatformTrails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Search my trail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#is_mine DataSamsungcloudplatformTrails#is_mine}
  */
  readonly isMine?: boolean | cdktf.IResolvable;
  /**
  * Logging target region list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#logging_target_regions DataSamsungcloudplatformTrails#logging_target_regions}
  */
  readonly loggingTargetRegions?: string[];
  /**
  * Logging target resource ID list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#logging_target_resource_ids DataSamsungcloudplatformTrails#logging_target_resource_ids}
  */
  readonly loggingTargetResourceIds?: string[];
  /**
  * Trail name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#name DataSamsungcloudplatformTrails#name}
  */
  readonly name?: string;
  /**
  * State (ACTIVE | STOPPED)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#state DataSamsungcloudplatformTrails#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#filter DataSamsungcloudplatformTrails#filter}
  */
  readonly filter?: DataSamsungcloudplatformTrailsFilter[] | cdktf.IResolvable;
}
export interface DataSamsungcloudplatformTrailsContentsLoggingTargetUsers {
}

export function dataSamsungcloudplatformTrailsContentsLoggingTargetUsersToTerraform(struct?: DataSamsungcloudplatformTrailsContentsLoggingTargetUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTrailsContentsLoggingTargetUsersToHclTerraform(struct?: DataSamsungcloudplatformTrailsContentsLoggingTargetUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTrailsContentsLoggingTargetUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailsContentsLoggingTargetUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailsContentsLoggingTargetUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login_id - computed: true, optional: false, required: false
  public get loginId() {
    return this.getStringAttribute('login_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataSamsungcloudplatformTrailsContentsLoggingTargetUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformTrailsContentsLoggingTargetUsersOutputReference {
    return new DataSamsungcloudplatformTrailsContentsLoggingTargetUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStruct {
}

export function dataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructToTerraform(struct?: DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructToHclTerraform(struct?: DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logging_item - computed: true, optional: false, required: false
  public get loggingItem() {
    return this.getStringAttribute('logging_item');
  }

  // resource_type_name - computed: true, optional: false, required: false
  public get resourceTypeName() {
    return this.getStringAttribute('resource_type_name');
  }
}

export class DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructOutputReference {
    return new DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformTrailsContents {
}

export function dataSamsungcloudplatformTrailsContentsToTerraform(struct?: DataSamsungcloudplatformTrailsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSamsungcloudplatformTrailsContentsToHclTerraform(struct?: DataSamsungcloudplatformTrailsContents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSamsungcloudplatformTrailsContentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailsContents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailsContents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_logging_target_all_region - computed: true, optional: false, required: false
  public get isLoggingTargetAllRegion() {
    return this.getStringAttribute('is_logging_target_all_region');
  }

  // is_logging_target_all_resource - computed: true, optional: false, required: false
  public get isLoggingTargetAllResource() {
    return this.getStringAttribute('is_logging_target_all_resource');
  }

  // is_logging_target_all_user - computed: true, optional: false, required: false
  public get isLoggingTargetAllUser() {
    return this.getStringAttribute('is_logging_target_all_user');
  }

  // is_trail_deleted - computed: true, optional: false, required: false
  public get isTrailDeleted() {
    return this.getStringAttribute('is_trail_deleted');
  }

  // last_digest_file_create_dt - computed: true, optional: false, required: false
  public get lastDigestFileCreateDt() {
    return this.getStringAttribute('last_digest_file_create_dt');
  }

  // logging_target_regions - computed: true, optional: false, required: false
  public get loggingTargetRegions() {
    return this.getListAttribute('logging_target_regions');
  }

  // logging_target_resource_ids - computed: true, optional: false, required: false
  public get loggingTargetResourceIds() {
    return this.getListAttribute('logging_target_resource_ids');
  }

  // logging_target_users - computed: true, optional: false, required: false
  private _loggingTargetUsers = new DataSamsungcloudplatformTrailsContentsLoggingTargetUsersList(this, "logging_target_users", false);
  public get loggingTargetUsers() {
    return this._loggingTargetUsers;
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_by_name - computed: true, optional: false, required: false
  public get modifiedByName() {
    return this.getStringAttribute('modified_by_name');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // object_storage_folder_name - computed: true, optional: false, required: false
  public get objectStorageFolderName() {
    return this.getStringAttribute('object_storage_folder_name');
  }

  // object_storage_name - computed: true, optional: false, required: false
  public get objectStorageName() {
    return this.getStringAttribute('object_storage_name');
  }

  // obs_bucket_id - computed: true, optional: false, required: false
  public get obsBucketId() {
    return this.getStringAttribute('obs_bucket_id');
  }

  // obs_bucket_name - computed: true, optional: false, required: false
  public get obsBucketName() {
    return this.getStringAttribute('obs_bucket_name');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // target_logging_resource_list - computed: true, optional: false, required: false
  private _targetLoggingResourceList = new DataSamsungcloudplatformTrailsContentsTargetLoggingResourceListStructList(this, "target_logging_resource_list", false);
  public get targetLoggingResourceList() {
    return this._targetLoggingResourceList;
  }

  // trail_batch_end_dt - computed: true, optional: false, required: false
  public get trailBatchEndDt() {
    return this.getStringAttribute('trail_batch_end_dt');
  }

  // trail_batch_first_start_dt - computed: true, optional: false, required: false
  public get trailBatchFirstStartDt() {
    return this.getStringAttribute('trail_batch_first_start_dt');
  }

  // trail_batch_last_success_dt - computed: true, optional: false, required: false
  public get trailBatchLastSuccessDt() {
    return this.getStringAttribute('trail_batch_last_success_dt');
  }

  // trail_batch_start_dt - computed: true, optional: false, required: false
  public get trailBatchStartDt() {
    return this.getStringAttribute('trail_batch_start_dt');
  }

  // trail_batch_state - computed: true, optional: false, required: false
  public get trailBatchState() {
    return this.getStringAttribute('trail_batch_state');
  }

  // trail_id - computed: true, optional: false, required: false
  public get trailId() {
    return this.getStringAttribute('trail_id');
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }

  // trail_save_type - computed: true, optional: false, required: false
  public get trailSaveType() {
    return this.getStringAttribute('trail_save_type');
  }

  // trail_state - computed: true, optional: false, required: false
  public get trailState() {
    return this.getStringAttribute('trail_state');
  }

  // validation_yn - computed: true, optional: false, required: false
  public get validationYn() {
    return this.getStringAttribute('validation_yn');
  }
}

export class DataSamsungcloudplatformTrailsContentsList extends cdktf.ComplexList {

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
  public get(index: number): DataSamsungcloudplatformTrailsContentsOutputReference {
    return new DataSamsungcloudplatformTrailsContentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSamsungcloudplatformTrailsFilter {
  /**
  * Filtering target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#name DataSamsungcloudplatformTrails#name}
  */
  readonly name: string;
  /**
  * Enable regex match for values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#use_regex DataSamsungcloudplatformTrails#use_regex}
  */
  readonly useRegex?: boolean | cdktf.IResolvable;
  /**
  * Filtering values. Each matching value is appended. (OR rule)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#values DataSamsungcloudplatformTrails#values}
  */
  readonly values: string[];
}

export function dataSamsungcloudplatformTrailsFilterToTerraform(struct?: DataSamsungcloudplatformTrailsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    use_regex: cdktf.booleanToTerraform(struct!.useRegex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataSamsungcloudplatformTrailsFilterToHclTerraform(struct?: DataSamsungcloudplatformTrailsFilter | cdktf.IResolvable): any {
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
    use_regex: {
      value: cdktf.booleanToHclTerraform(struct!.useRegex),
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

export class DataSamsungcloudplatformTrailsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSamsungcloudplatformTrailsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._useRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRegex = this._useRegex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSamsungcloudplatformTrailsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._useRegex = undefined;
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
      this._useRegex = value.useRegex;
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

  // use_regex - computed: false, optional: true, required: false
  private _useRegex?: boolean | cdktf.IResolvable; 
  public get useRegex() {
    return this.getBooleanAttribute('use_regex');
  }
  public set useRegex(value: boolean | cdktf.IResolvable) {
    this._useRegex = value;
  }
  public resetUseRegex() {
    this._useRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRegexInput() {
    return this._useRegex;
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

export class DataSamsungcloudplatformTrailsFilterList extends cdktf.ComplexList {
  public internalValue? : DataSamsungcloudplatformTrailsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataSamsungcloudplatformTrailsFilterOutputReference {
    return new DataSamsungcloudplatformTrailsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails samsungcloudplatform_trails}
*/
export class DataSamsungcloudplatformTrails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_trails";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSamsungcloudplatformTrails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSamsungcloudplatformTrails to import
  * @param importFromId The id of the existing DataSamsungcloudplatformTrails that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSamsungcloudplatformTrails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_trails", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/data-sources/trails samsungcloudplatform_trails} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSamsungcloudplatformTrailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSamsungcloudplatformTrailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_trails',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
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
    this._isMine = config.isMine;
    this._loggingTargetRegions = config.loggingTargetRegions;
    this._loggingTargetResourceIds = config.loggingTargetResourceIds;
    this._name = config.name;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: true, optional: false, required: false
  private _contents = new DataSamsungcloudplatformTrailsContentsList(this, "contents", false);
  public get contents() {
    return this._contents;
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

  // is_mine - computed: false, optional: true, required: false
  private _isMine?: boolean | cdktf.IResolvable; 
  public get isMine() {
    return this.getBooleanAttribute('is_mine');
  }
  public set isMine(value: boolean | cdktf.IResolvable) {
    this._isMine = value;
  }
  public resetIsMine() {
    this._isMine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMineInput() {
    return this._isMine;
  }

  // logging_target_regions - computed: false, optional: true, required: false
  private _loggingTargetRegions?: string[]; 
  public get loggingTargetRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('logging_target_regions'));
  }
  public set loggingTargetRegions(value: string[]) {
    this._loggingTargetRegions = value;
  }
  public resetLoggingTargetRegions() {
    this._loggingTargetRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTargetRegionsInput() {
    return this._loggingTargetRegions;
  }

  // logging_target_resource_ids - computed: false, optional: true, required: false
  private _loggingTargetResourceIds?: string[]; 
  public get loggingTargetResourceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('logging_target_resource_ids'));
  }
  public set loggingTargetResourceIds(value: string[]) {
    this._loggingTargetResourceIds = value;
  }
  public resetLoggingTargetResourceIds() {
    this._loggingTargetResourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingTargetResourceIdsInput() {
    return this._loggingTargetResourceIds;
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

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataSamsungcloudplatformTrailsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataSamsungcloudplatformTrailsFilter[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      is_mine: cdktf.booleanToTerraform(this._isMine),
      logging_target_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingTargetRegions),
      logging_target_resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loggingTargetResourceIds),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataSamsungcloudplatformTrailsFilterToTerraform, true)(this._filter.internalValue),
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
      is_mine: {
        value: cdktf.booleanToHclTerraform(this._isMine),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      logging_target_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loggingTargetRegions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      logging_target_resource_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loggingTargetResourceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
        value: cdktf.listMapperHcl(dataSamsungcloudplatformTrailsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataSamsungcloudplatformTrailsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
