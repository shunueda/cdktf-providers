// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataintegrationWorkspaceApplicationPatchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#application_key DataintegrationWorkspaceApplicationPatch#application_key}
  */
  readonly applicationKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#description DataintegrationWorkspaceApplicationPatch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#id DataintegrationWorkspaceApplicationPatch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#identifier DataintegrationWorkspaceApplicationPatch#identifier}
  */
  readonly identifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#model_version DataintegrationWorkspaceApplicationPatch#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#name DataintegrationWorkspaceApplicationPatch#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#object_keys DataintegrationWorkspaceApplicationPatch#object_keys}
  */
  readonly objectKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#object_status DataintegrationWorkspaceApplicationPatch#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#patch_type DataintegrationWorkspaceApplicationPatch#patch_type}
  */
  readonly patchType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#workspace_id DataintegrationWorkspaceApplicationPatch#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * registry_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#registry_metadata DataintegrationWorkspaceApplicationPatch#registry_metadata}
  */
  readonly registryMetadata?: DataintegrationWorkspaceApplicationPatchRegistryMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#timeouts DataintegrationWorkspaceApplicationPatch#timeouts}
  */
  readonly timeouts?: DataintegrationWorkspaceApplicationPatchTimeouts;
}
export interface DataintegrationWorkspaceApplicationPatchDependentObjectMetadata {
}

export function dataintegrationWorkspaceApplicationPatchDependentObjectMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationPatchDependentObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchDependentObjectMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchDependentObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchDependentObjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchDependentObjectMetadata | undefined) {
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_path - computed: true, optional: false, required: false
  public get namePath() {
    return this.getStringAttribute('name_path');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference {
    return new DataintegrationWorkspaceApplicationPatchDependentObjectMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchMetadataAggregator {
}

export function dataintegrationWorkspaceApplicationPatchMetadataAggregatorToTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchMetadataAggregatorToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchMetadataAggregator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataintegrationWorkspaceApplicationPatchMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference {
    return new DataintegrationWorkspaceApplicationPatchMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_count - computed: true, optional: false, required: false
  public get objectCount() {
    return this.getStringAttribute('object_count');
  }

  // object_type - computed: true, optional: false, required: false
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
}

export class DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchMetadataCountStatistics {
}

export function dataintegrationWorkspaceApplicationPatchMetadataCountStatisticsToTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchMetadataCountStatisticsToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference {
    return new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchMetadata {
}

export function dataintegrationWorkspaceApplicationPatchMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataintegrationWorkspaceApplicationPatchMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataintegrationWorkspaceApplicationPatchMetadataCountStatisticsList(this, "count_statistics", false);
  public get countStatistics() {
    return this._countStatistics;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_by_name - computed: true, optional: false, required: false
  public get createdByName() {
    return this.getStringAttribute('created_by_name');
  }

  // identifier_path - computed: true, optional: false, required: false
  public get identifierPath() {
    return this.getStringAttribute('identifier_path');
  }

  // info_fields - computed: true, optional: false, required: false
  private _infoFields = new cdktf.StringMap(this, "info_fields");
  public get infoFields() {
    return this._infoFields;
  }

  // is_favorite - computed: true, optional: false, required: false
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // registry_version - computed: true, optional: false, required: false
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_by_name - computed: true, optional: false, required: false
  public get updatedByName() {
    return this.getStringAttribute('updated_by_name');
  }
}

export class DataintegrationWorkspaceApplicationPatchMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchMetadataOutputReference {
    return new DataintegrationWorkspaceApplicationPatchMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchParentRef {
}

export function dataintegrationWorkspaceApplicationPatchParentRefToTerraform(struct?: DataintegrationWorkspaceApplicationPatchParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchParentRefToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // root_doc_id - computed: true, optional: false, required: false
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
}

export class DataintegrationWorkspaceApplicationPatchParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchParentRefOutputReference {
    return new DataintegrationWorkspaceApplicationPatchParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchPatchObjectMetadata {
}

export function dataintegrationWorkspaceApplicationPatchPatchObjectMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationPatchPatchObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceApplicationPatchPatchObjectMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchPatchObjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceApplicationPatchPatchObjectMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchPatchObjectMetadata | undefined) {
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

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_path - computed: true, optional: false, required: false
  public get namePath() {
    return this.getStringAttribute('name_path');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference {
    return new DataintegrationWorkspaceApplicationPatchPatchObjectMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceApplicationPatchRegistryMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#aggregator_key DataintegrationWorkspaceApplicationPatch#aggregator_key}
  */
  readonly aggregatorKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#is_favorite DataintegrationWorkspaceApplicationPatch#is_favorite}
  */
  readonly isFavorite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#key DataintegrationWorkspaceApplicationPatch#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#labels DataintegrationWorkspaceApplicationPatch#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#registry_version DataintegrationWorkspaceApplicationPatch#registry_version}
  */
  readonly registryVersion?: number;
}

export function dataintegrationWorkspaceApplicationPatchRegistryMetadataToTerraform(struct?: DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference | DataintegrationWorkspaceApplicationPatchRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregator_key: cdktf.stringToTerraform(struct!.aggregatorKey),
    is_favorite: cdktf.booleanToTerraform(struct!.isFavorite),
    key: cdktf.stringToTerraform(struct!.key),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    registry_version: cdktf.numberToTerraform(struct!.registryVersion),
  }
}


export function dataintegrationWorkspaceApplicationPatchRegistryMetadataToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference | DataintegrationWorkspaceApplicationPatchRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregator_key: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_favorite: {
      value: cdktf.booleanToHclTerraform(struct!.isFavorite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    registry_version: {
      value: cdktf.numberToHclTerraform(struct!.registryVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationPatchRegistryMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregatorKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorKey = this._aggregatorKey;
    }
    if (this._isFavorite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFavorite = this._isFavorite;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._registryVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryVersion = this._registryVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchRegistryMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregatorKey = undefined;
      this._isFavorite = undefined;
      this._key = undefined;
      this._labels = undefined;
      this._registryVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregatorKey = value.aggregatorKey;
      this._isFavorite = value.isFavorite;
      this._key = value.key;
      this._labels = value.labels;
      this._registryVersion = value.registryVersion;
    }
  }

  // aggregator_key - computed: true, optional: true, required: false
  private _aggregatorKey?: string; 
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }
  public set aggregatorKey(value: string) {
    this._aggregatorKey = value;
  }
  public resetAggregatorKey() {
    this._aggregatorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorKeyInput() {
    return this._aggregatorKey;
  }

  // is_favorite - computed: true, optional: true, required: false
  private _isFavorite?: boolean | cdktf.IResolvable; 
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }
  public set isFavorite(value: boolean | cdktf.IResolvable) {
    this._isFavorite = value;
  }
  public resetIsFavorite() {
    this._isFavorite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFavoriteInput() {
    return this._isFavorite;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // registry_version - computed: true, optional: true, required: false
  private _registryVersion?: number; 
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }
  public set registryVersion(value: number) {
    this._registryVersion = value;
  }
  public resetRegistryVersion() {
    this._registryVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryVersionInput() {
    return this._registryVersion;
  }
}
export interface DataintegrationWorkspaceApplicationPatchTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#create DataintegrationWorkspaceApplicationPatch#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#delete DataintegrationWorkspaceApplicationPatch#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#update DataintegrationWorkspaceApplicationPatch#update}
  */
  readonly update?: string;
}

export function dataintegrationWorkspaceApplicationPatchTimeoutsToTerraform(struct?: DataintegrationWorkspaceApplicationPatchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataintegrationWorkspaceApplicationPatchTimeoutsToHclTerraform(struct?: DataintegrationWorkspaceApplicationPatchTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataintegrationWorkspaceApplicationPatchTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceApplicationPatchTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch oci_dataintegration_workspace_application_patch}
*/
export class DataintegrationWorkspaceApplicationPatch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_application_patch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataintegrationWorkspaceApplicationPatch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataintegrationWorkspaceApplicationPatch to import
  * @param importFromId The id of the existing DataintegrationWorkspaceApplicationPatch that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataintegrationWorkspaceApplicationPatch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_application_patch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_application_patch oci_dataintegration_workspace_application_patch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataintegrationWorkspaceApplicationPatchConfig
  */
  public constructor(scope: Construct, id: string, config: DataintegrationWorkspaceApplicationPatchConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_application_patch',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationKey = config.applicationKey;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._key = config.key;
    this._modelVersion = config.modelVersion;
    this._name = config.name;
    this._objectKeys = config.objectKeys;
    this._objectStatus = config.objectStatus;
    this._patchType = config.patchType;
    this._workspaceId = config.workspaceId;
    this._registryMetadata.internalValue = config.registryMetadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_key - computed: false, optional: false, required: true
  private _applicationKey?: string; 
  public get applicationKey() {
    return this.getStringAttribute('application_key');
  }
  public set applicationKey(value: string) {
    this._applicationKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationKeyInput() {
    return this._applicationKey;
  }

  // application_version - computed: true, optional: false, required: false
  public get applicationVersion() {
    return this.getNumberAttribute('application_version');
  }

  // dependent_object_metadata - computed: true, optional: false, required: false
  private _dependentObjectMetadata = new DataintegrationWorkspaceApplicationPatchDependentObjectMetadataList(this, "dependent_object_metadata", false);
  public get dependentObjectMetadata() {
    return this._dependentObjectMetadata;
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

  // error_messages - computed: true, optional: false, required: false
  private _errorMessages = new cdktf.StringMap(this, "error_messages");
  public get errorMessages() {
    return this._errorMessages;
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

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // key_map - computed: true, optional: false, required: false
  private _keyMap = new cdktf.StringMap(this, "key_map");
  public get keyMap() {
    return this._keyMap;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataintegrationWorkspaceApplicationPatchMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: true, required: false
  private _modelVersion?: string; 
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }
  public set modelVersion(value: string) {
    this._modelVersion = value;
  }
  public resetModelVersion() {
    this._modelVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelVersionInput() {
    return this._modelVersion;
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

  // object_keys - computed: true, optional: true, required: false
  private _objectKeys?: string[]; 
  public get objectKeys() {
    return this.getListAttribute('object_keys');
  }
  public set objectKeys(value: string[]) {
    this._objectKeys = value;
  }
  public resetObjectKeys() {
    this._objectKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeysInput() {
    return this._objectKeys;
  }

  // object_status - computed: true, optional: true, required: false
  private _objectStatus?: number; 
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
  public set objectStatus(value: number) {
    this._objectStatus = value;
  }
  public resetObjectStatus() {
    this._objectStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStatusInput() {
    return this._objectStatus;
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataintegrationWorkspaceApplicationPatchParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // patch_object_metadata - computed: true, optional: false, required: false
  private _patchObjectMetadata = new DataintegrationWorkspaceApplicationPatchPatchObjectMetadataList(this, "patch_object_metadata", false);
  public get patchObjectMetadata() {
    return this._patchObjectMetadata;
  }

  // patch_status - computed: true, optional: false, required: false
  public get patchStatus() {
    return this.getStringAttribute('patch_status');
  }

  // patch_type - computed: false, optional: false, required: true
  private _patchType?: string; 
  public get patchType() {
    return this.getStringAttribute('patch_type');
  }
  public set patchType(value: string) {
    this._patchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeInput() {
    return this._patchType;
  }

  // time_patched - computed: true, optional: false, required: false
  public get timePatched() {
    return this.getStringAttribute('time_patched');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // registry_metadata - computed: false, optional: true, required: false
  private _registryMetadata = new DataintegrationWorkspaceApplicationPatchRegistryMetadataOutputReference(this, "registry_metadata");
  public get registryMetadata() {
    return this._registryMetadata;
  }
  public putRegistryMetadata(value: DataintegrationWorkspaceApplicationPatchRegistryMetadata) {
    this._registryMetadata.internalValue = value;
  }
  public resetRegistryMetadata() {
    this._registryMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMetadataInput() {
    return this._registryMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataintegrationWorkspaceApplicationPatchTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataintegrationWorkspaceApplicationPatchTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_key: cdktf.stringToTerraform(this._applicationKey),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      key: cdktf.stringToTerraform(this._key),
      model_version: cdktf.stringToTerraform(this._modelVersion),
      name: cdktf.stringToTerraform(this._name),
      object_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._objectKeys),
      object_status: cdktf.numberToTerraform(this._objectStatus),
      patch_type: cdktf.stringToTerraform(this._patchType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      registry_metadata: dataintegrationWorkspaceApplicationPatchRegistryMetadataToTerraform(this._registryMetadata.internalValue),
      timeouts: dataintegrationWorkspaceApplicationPatchTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_key: {
        value: cdktf.stringToHclTerraform(this._applicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_version: {
        value: cdktf.stringToHclTerraform(this._modelVersion),
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
      object_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._objectKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      object_status: {
        value: cdktf.numberToHclTerraform(this._objectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      patch_type: {
        value: cdktf.stringToHclTerraform(this._patchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_metadata: {
        value: dataintegrationWorkspaceApplicationPatchRegistryMetadataToHclTerraform(this._registryMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceApplicationPatchRegistryMetadataList",
      },
      timeouts: {
        value: dataintegrationWorkspaceApplicationPatchTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataintegrationWorkspaceApplicationPatchTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
