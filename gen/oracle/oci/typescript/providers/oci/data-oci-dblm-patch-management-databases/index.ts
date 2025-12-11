// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDblmPatchManagementDatabasesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#compartment_id DataOciDblmPatchManagementDatabases#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#database_release DataOciDblmPatchManagementDatabases#database_release}
  */
  readonly databaseRelease?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#database_type DataOciDblmPatchManagementDatabases#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#display_name DataOciDblmPatchManagementDatabases#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#drifter_patch_id DataOciDblmPatchManagementDatabases#drifter_patch_id}
  */
  readonly drifterPatchId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#id DataOciDblmPatchManagementDatabases#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#image_compliance DataOciDblmPatchManagementDatabases#image_compliance}
  */
  readonly imageCompliance?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#image_id DataOciDblmPatchManagementDatabases#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#severity_type DataOciDblmPatchManagementDatabases#severity_type}
  */
  readonly severityType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#state DataOciDblmPatchManagementDatabases#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#filter DataOciDblmPatchManagementDatabases#filter}
  */
  readonly filter?: DataOciDblmPatchManagementDatabasesFilter[] | cdktf.IResolvable;
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatches {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatches): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatches | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatches | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // patch_id - computed: true, optional: false, required: false
  public get patchId() {
    return this.getNumberAttribute('patch_id');
  }

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetails {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetails | undefined) {
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

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // image_owner - computed: true, optional: false, required: false
  public get imageOwner() {
    return this.getStringAttribute('image_owner');
  }

  // image_status - computed: true, optional: false, required: false
  public get imageStatus() {
    return this.getStringAttribute('image_status');
  }

  // image_version - computed: true, optional: false, required: false
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }

  // subscribed_image - computed: true, optional: false, required: false
  public get subscribedImage() {
    return this.getStringAttribute('subscribed_image');
  }

  // time_image_creation - computed: true, optional: false, required: false
  public get timeImageCreation() {
    return this.getStringAttribute('time_image_creation');
  }

  // up_to_date_image_version - computed: true, optional: false, required: false
  public get upToDateImageVersion() {
    return this.getStringAttribute('up_to_date_image_version');
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetails {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deploy_operation_id - computed: true, optional: false, required: false
  public get deployOperationId() {
    return this.getStringAttribute('deploy_operation_id');
  }

  // deploy_status - computed: true, optional: false, required: false
  public get deployStatus() {
    return this.getStringAttribute('deploy_status');
  }

  // deploy_task_id - computed: true, optional: false, required: false
  public get deployTaskId() {
    return this.getStringAttribute('deploy_task_id');
  }

  // migrate_listener_operation_id - computed: true, optional: false, required: false
  public get migrateListenerOperationId() {
    return this.getStringAttribute('migrate_listener_operation_id');
  }

  // migrate_listener_status - computed: true, optional: false, required: false
  public get migrateListenerStatus() {
    return this.getStringAttribute('migrate_listener_status');
  }

  // migrate_listener_task_id - computed: true, optional: false, required: false
  public get migrateListenerTaskId() {
    return this.getStringAttribute('migrate_listener_task_id');
  }

  // update_operation_id - computed: true, optional: false, required: false
  public get updateOperationId() {
    return this.getStringAttribute('update_operation_id');
  }

  // update_status - computed: true, optional: false, required: false
  public get updateStatus() {
    return this.getStringAttribute('update_status');
  }

  // update_task_id - computed: true, optional: false, required: false
  public get updateTaskId() {
    return this.getStringAttribute('update_task_id');
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetails {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // patch_compliance_status - computed: true, optional: false, required: false
  public get patchComplianceStatus() {
    return this.getStringAttribute('patch_compliance_status');
  }

  // patch_compliance_version - computed: true, optional: false, required: false
  public get patchComplianceVersion() {
    return this.getStringAttribute('patch_compliance_version');
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummary {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getNumberAttribute('critical');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getNumberAttribute('high');
  }

  // info - computed: true, optional: false, required: false
  public get info() {
    return this.getNumberAttribute('info');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getNumberAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getNumberAttribute('medium');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItems {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_patches - computed: true, optional: false, required: false
  private _additionalPatches = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsAdditionalPatchesList(this, "additional_patches", false);
  public get additionalPatches() {
    return this._additionalPatches;
  }

  // current_patch_watermark - computed: true, optional: false, required: false
  public get currentPatchWatermark() {
    return this.getStringAttribute('current_patch_watermark');
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getStringAttribute('database_id');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
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

  // host_or_cluster - computed: true, optional: false, required: false
  public get hostOrCluster() {
    return this.getStringAttribute('host_or_cluster');
  }

  // image_details - computed: true, optional: false, required: false
  private _imageDetails = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsImageDetailsList(this, "image_details", false);
  public get imageDetails() {
    return this._imageDetails;
  }

  // oracle_home_path - computed: true, optional: false, required: false
  public get oracleHomePath() {
    return this.getStringAttribute('oracle_home_path');
  }

  // patch_activity_details - computed: true, optional: false, required: false
  private _patchActivityDetails = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchActivityDetailsList(this, "patch_activity_details", false);
  public get patchActivityDetails() {
    return this._patchActivityDetails;
  }

  // patch_compliance_details - computed: true, optional: false, required: false
  private _patchComplianceDetails = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsPatchComplianceDetailsList(this, "patch_compliance_details", false);
  public get patchComplianceDetails() {
    return this._patchComplianceDetails;
  }

  // patch_user - computed: true, optional: false, required: false
  public get patchUser() {
    return this.getStringAttribute('patch_user');
  }

  // release - computed: true, optional: false, required: false
  public get release() {
    return this.getStringAttribute('release');
  }

  // release_full_version - computed: true, optional: false, required: false
  public get releaseFullVersion() {
    return this.getStringAttribute('release_full_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // sudo_file_path - computed: true, optional: false, required: false
  public get sudoFilePath() {
    return this.getStringAttribute('sudo_file_path');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // vulnerabilities_summary - computed: true, optional: false, required: false
  private _vulnerabilitiesSummary = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsVulnerabilitiesSummaryList(this, "vulnerabilities_summary", false);
  public get vulnerabilitiesSummary() {
    return this._vulnerabilitiesSummary;
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesPatchDatabasesCollection {
}

export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionToTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDblmPatchManagementDatabasesPatchDatabasesCollectionToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesPatchDatabasesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesPatchDatabasesCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDblmPatchManagementDatabasesPatchDatabasesCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionOutputReference {
    return new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDblmPatchManagementDatabasesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#name DataOciDblmPatchManagementDatabases#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#regex DataOciDblmPatchManagementDatabases#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#values DataOciDblmPatchManagementDatabases#values}
  */
  readonly values: string[];
}

export function dataOciDblmPatchManagementDatabasesFilterToTerraform(struct?: DataOciDblmPatchManagementDatabasesFilter | cdktf.IResolvable): any {
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


export function dataOciDblmPatchManagementDatabasesFilterToHclTerraform(struct?: DataOciDblmPatchManagementDatabasesFilter | cdktf.IResolvable): any {
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

export class DataOciDblmPatchManagementDatabasesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDblmPatchManagementDatabasesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDblmPatchManagementDatabasesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDblmPatchManagementDatabasesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDblmPatchManagementDatabasesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDblmPatchManagementDatabasesFilterOutputReference {
    return new DataOciDblmPatchManagementDatabasesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases oci_dblm_patch_management_databases}
*/
export class DataOciDblmPatchManagementDatabases extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dblm_patch_management_databases";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDblmPatchManagementDatabases resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDblmPatchManagementDatabases to import
  * @param importFromId The id of the existing DataOciDblmPatchManagementDatabases that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDblmPatchManagementDatabases to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dblm_patch_management_databases", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/dblm_patch_management_databases oci_dblm_patch_management_databases} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDblmPatchManagementDatabasesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciDblmPatchManagementDatabasesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_dblm_patch_management_databases',
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
    this._databaseType = config.databaseType;
    this._displayName = config.displayName;
    this._drifterPatchId = config.drifterPatchId;
    this._id = config.id;
    this._imageCompliance = config.imageCompliance;
    this._imageId = config.imageId;
    this._severityType = config.severityType;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
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

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
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

  // drifter_patch_id - computed: false, optional: true, required: false
  private _drifterPatchId?: number; 
  public get drifterPatchId() {
    return this.getNumberAttribute('drifter_patch_id');
  }
  public set drifterPatchId(value: number) {
    this._drifterPatchId = value;
  }
  public resetDrifterPatchId() {
    this._drifterPatchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drifterPatchIdInput() {
    return this._drifterPatchId;
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

  // image_compliance - computed: false, optional: true, required: false
  private _imageCompliance?: string; 
  public get imageCompliance() {
    return this.getStringAttribute('image_compliance');
  }
  public set imageCompliance(value: string) {
    this._imageCompliance = value;
  }
  public resetImageCompliance() {
    this._imageCompliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageComplianceInput() {
    return this._imageCompliance;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // patch_databases_collection - computed: true, optional: false, required: false
  private _patchDatabasesCollection = new DataOciDblmPatchManagementDatabasesPatchDatabasesCollectionList(this, "patch_databases_collection", false);
  public get patchDatabasesCollection() {
    return this._patchDatabasesCollection;
  }

  // severity_type - computed: false, optional: true, required: false
  private _severityType?: string[]; 
  public get severityType() {
    return this.getListAttribute('severity_type');
  }
  public set severityType(value: string[]) {
    this._severityType = value;
  }
  public resetSeverityType() {
    this._severityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityTypeInput() {
    return this._severityType;
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
  private _filter = new DataOciDblmPatchManagementDatabasesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDblmPatchManagementDatabasesFilter[] | cdktf.IResolvable) {
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
      database_release: cdktf.stringToTerraform(this._databaseRelease),
      database_type: cdktf.stringToTerraform(this._databaseType),
      display_name: cdktf.stringToTerraform(this._displayName),
      drifter_patch_id: cdktf.numberToTerraform(this._drifterPatchId),
      id: cdktf.stringToTerraform(this._id),
      image_compliance: cdktf.stringToTerraform(this._imageCompliance),
      image_id: cdktf.stringToTerraform(this._imageId),
      severity_type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityType),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciDblmPatchManagementDatabasesFilterToTerraform, true)(this._filter.internalValue),
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
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
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
      drifter_patch_id: {
        value: cdktf.numberToHclTerraform(this._drifterPatchId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_compliance: {
        value: cdktf.stringToHclTerraform(this._imageCompliance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity_type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityType),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDblmPatchManagementDatabasesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDblmPatchManagementDatabasesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
