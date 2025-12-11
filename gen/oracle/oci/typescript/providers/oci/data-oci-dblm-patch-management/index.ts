// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDblmPatchManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#compartment_id DataOciDblmPatchManagement#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#database_release DataOciDblmPatchManagement#database_release}
  */
  readonly databaseRelease?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#id DataOciDblmPatchManagement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#time_started_greater_than_or_equal_to DataOciDblmPatchManagement#time_started_greater_than_or_equal_to}
  */
  readonly timeStartedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#time_started_less_than DataOciDblmPatchManagement#time_started_less_than}
  */
  readonly timeStartedLessThan?: string;
}
export interface DataOciDblmPatchManagementImagesPatchRecommendationSummary {
}

export function dataOciDblmPatchManagementImagesPatchRecommendationSummaryToTerraform(struct?: DataOciDblmPatchManagementImagesPatchRecommendationSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementImagesPatchRecommendationSummaryToHclTerraform(struct?: DataOciDblmPatchManagementImagesPatchRecommendationSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementImagesPatchRecommendationSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementImagesPatchRecommendationSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementImagesPatchRecommendationSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // image_patch_recommendations_count - computed: true, optional: false, required: false
  public get imagePatchRecommendationsCount() {
    return this.getNumberAttribute('image_patch_recommendations_count');
  }

  // total_images_count - computed: true, optional: false, required: false
  public get totalImagesCount() {
    return this.getNumberAttribute('total_images_count');
  }

  // up_to_date_images_count - computed: true, optional: false, required: false
  public get upToDateImagesCount() {
    return this.getNumberAttribute('up_to_date_images_count');
  }
}

export class DataOciDblmPatchManagementImagesPatchRecommendationSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementImagesPatchRecommendationSummaryOutputReference {
    return new DataOciDblmPatchManagementImagesPatchRecommendationSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementPatchOperationsSummary {
}

export function dataOciDblmPatchManagementPatchOperationsSummaryToTerraform(struct?: DataOciDblmPatchManagementPatchOperationsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementPatchOperationsSummaryToHclTerraform(struct?: DataOciDblmPatchManagementPatchOperationsSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementPatchOperationsSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementPatchOperationsSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementPatchOperationsSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_patch_ops_count - computed: true, optional: false, required: false
  public get failedPatchOpsCount() {
    return this.getNumberAttribute('failed_patch_ops_count');
  }

  // running_patch_ops_count - computed: true, optional: false, required: false
  public get runningPatchOpsCount() {
    return this.getNumberAttribute('running_patch_ops_count');
  }

  // scheduled_patch_ops_count - computed: true, optional: false, required: false
  public get scheduledPatchOpsCount() {
    return this.getNumberAttribute('scheduled_patch_ops_count');
  }

  // successful_patch_ops_count - computed: true, optional: false, required: false
  public get successfulPatchOpsCount() {
    return this.getNumberAttribute('successful_patch_ops_count');
  }

  // warnings_patch_ops_count - computed: true, optional: false, required: false
  public get warningsPatchOpsCount() {
    return this.getNumberAttribute('warnings_patch_ops_count');
  }
}

export class DataOciDblmPatchManagementPatchOperationsSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementPatchOperationsSummaryOutputReference {
    return new DataOciDblmPatchManagementPatchOperationsSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementResourcesHostInfo {
}

export function dataOciDblmPatchManagementResourcesHostInfoToTerraform(struct?: DataOciDblmPatchManagementResourcesHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementResourcesHostInfoToHclTerraform(struct?: DataOciDblmPatchManagementResourcesHostInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementResourcesHostInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementResourcesHostInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementResourcesHostInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_cores - computed: true, optional: false, required: false
  public get hostCores() {
    return this.getNumberAttribute('host_cores');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
}

export class DataOciDblmPatchManagementResourcesHostInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementResourcesHostInfoOutputReference {
    return new DataOciDblmPatchManagementResourcesHostInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementResources {
}

export function dataOciDblmPatchManagementResourcesToTerraform(struct?: DataOciDblmPatchManagementResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementResourcesToHclTerraform(struct?: DataOciDblmPatchManagementResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // connector_id - computed: true, optional: false, required: false
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }

  // db_platform_type - computed: true, optional: false, required: false
  public get dbPlatformType() {
    return this.getStringAttribute('db_platform_type');
  }

  // db_version - computed: true, optional: false, required: false
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }

  // deployment_type - computed: true, optional: false, required: false
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }

  // host_info - computed: true, optional: false, required: false
  private _hostInfo = new DataOciDblmPatchManagementResourcesHostInfoList(this, "host_info", false);
  public get hostInfo() {
    return this._hostInfo;
  }

  // is_cluster_db - computed: true, optional: false, required: false
  public get isClusterDb() {
    return this.getBooleanAttribute('is_cluster_db');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // resource_compartment_id - computed: true, optional: false, required: false
  public get resourceCompartmentId() {
    return this.getStringAttribute('resource_compartment_id');
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciDblmPatchManagementResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementResourcesOutputReference {
    return new DataOciDblmPatchManagementResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementResourcesPatchComplianceSummary {
}

export function dataOciDblmPatchManagementResourcesPatchComplianceSummaryToTerraform(struct?: DataOciDblmPatchManagementResourcesPatchComplianceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementResourcesPatchComplianceSummaryToHclTerraform(struct?: DataOciDblmPatchManagementResourcesPatchComplianceSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementResourcesPatchComplianceSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementResourcesPatchComplianceSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementResourcesPatchComplianceSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // non_compliant_resources_count - computed: true, optional: false, required: false
  public get nonCompliantResourcesCount() {
    return this.getNumberAttribute('non_compliant_resources_count');
  }

  // not_dblm_registered_resources_count - computed: true, optional: false, required: false
  public get notDblmRegisteredResourcesCount() {
    return this.getNumberAttribute('not_dblm_registered_resources_count');
  }

  // not_subscribed_resources_count - computed: true, optional: false, required: false
  public get notSubscribedResourcesCount() {
    return this.getNumberAttribute('not_subscribed_resources_count');
  }

  // total_resources_count - computed: true, optional: false, required: false
  public get totalResourcesCount() {
    return this.getNumberAttribute('total_resources_count');
  }

  // up_to_date_resources_count - computed: true, optional: false, required: false
  public get upToDateResourcesCount() {
    return this.getNumberAttribute('up_to_date_resources_count');
  }
}

export class DataOciDblmPatchManagementResourcesPatchComplianceSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementResourcesPatchComplianceSummaryOutputReference {
    return new DataOciDblmPatchManagementResourcesPatchComplianceSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management oci_dblm_patch_management}
*/
export class DataOciDblmPatchManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dblm_patch_management";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDblmPatchManagement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDblmPatchManagement to import
  * @param importFromId The id of the existing DataOciDblmPatchManagement that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDblmPatchManagement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dblm_patch_management", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management oci_dblm_patch_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDblmPatchManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDblmPatchManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dblm_patch_management',
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
    this._databaseRelease = config.databaseRelease;
    this._id = config.id;
    this._timeStartedGreaterThanOrEqualTo = config.timeStartedGreaterThanOrEqualTo;
    this._timeStartedLessThan = config.timeStartedLessThan;
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

  // database_release - computed: false, optional: true, required: false
  private _databaseRelease?: string; 
  public get databaseRelease() {
    return this.getStringAttribute('database_release');
  }
  public set databaseRelease(value: string) {
    this._databaseRelease = value;
  }
  public resetDatabaseRelease() {
    this._databaseRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseReleaseInput() {
    return this._databaseRelease;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // images_patch_recommendation_summary - computed: true, optional: false, required: false
  private _imagesPatchRecommendationSummary = new DataOciDblmPatchManagementImagesPatchRecommendationSummaryList(this, "images_patch_recommendation_summary", false);
  public get imagesPatchRecommendationSummary() {
    return this._imagesPatchRecommendationSummary;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // patch_operations_summary - computed: true, optional: false, required: false
  private _patchOperationsSummary = new DataOciDblmPatchManagementPatchOperationsSummaryList(this, "patch_operations_summary", false);
  public get patchOperationsSummary() {
    return this._patchOperationsSummary;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new DataOciDblmPatchManagementResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // resources_patch_compliance_summary - computed: true, optional: false, required: false
  private _resourcesPatchComplianceSummary = new DataOciDblmPatchManagementResourcesPatchComplianceSummaryList(this, "resources_patch_compliance_summary", false);
  public get resourcesPatchComplianceSummary() {
    return this._resourcesPatchComplianceSummary;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_enabled - computed: true, optional: false, required: false
  public get timeEnabled() {
    return this.getStringAttribute('time_enabled');
  }

  // time_started_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeStartedGreaterThanOrEqualTo?: string; 
  public get timeStartedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_started_greater_than_or_equal_to');
  }
  public set timeStartedGreaterThanOrEqualTo(value: string) {
    this._timeStartedGreaterThanOrEqualTo = value;
  }
  public resetTimeStartedGreaterThanOrEqualTo() {
    this._timeStartedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartedGreaterThanOrEqualToInput() {
    return this._timeStartedGreaterThanOrEqualTo;
  }

  // time_started_less_than - computed: false, optional: true, required: false
  private _timeStartedLessThan?: string; 
  public get timeStartedLessThan() {
    return this.getStringAttribute('time_started_less_than');
  }
  public set timeStartedLessThan(value: string) {
    this._timeStartedLessThan = value;
  }
  public resetTimeStartedLessThan() {
    this._timeStartedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartedLessThanInput() {
    return this._timeStartedLessThan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      database_release: cdktf.stringToTerraform(this._databaseRelease),
      id: cdktf.stringToTerraform(this._id),
      time_started_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeStartedGreaterThanOrEqualTo),
      time_started_less_than: cdktf.stringToTerraform(this._timeStartedLessThan),
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
      database_release: {
        value: cdktf.stringToHclTerraform(this._databaseRelease),
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
      time_started_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeStartedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_started_less_than: {
        value: cdktf.stringToHclTerraform(this._timeStartedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
