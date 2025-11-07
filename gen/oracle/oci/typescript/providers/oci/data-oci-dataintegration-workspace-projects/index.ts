// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceProjectsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#fields DataOciDataintegrationWorkspaceProjects#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#id DataOciDataintegrationWorkspaceProjects#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#identifier DataOciDataintegrationWorkspaceProjects#identifier}
  */
  readonly identifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#name DataOciDataintegrationWorkspaceProjects#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#name_contains DataOciDataintegrationWorkspaceProjects#name_contains}
  */
  readonly nameContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#workspace_id DataOciDataintegrationWorkspaceProjects#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#filter DataOciDataintegrationWorkspaceProjects#filter}
  */
  readonly filter?: DataOciDataintegrationWorkspaceProjectsFilter[] | cdktf.IResolvable;
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregator {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregator | undefined) {
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

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
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

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatistics {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadata {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataCountStatisticsList(this, "count_statistics", false);
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

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRef {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadata {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // is_favorite - computed: true, optional: false, required: false
  public get isFavorite() {
    return this.getBooleanAttribute('is_favorite');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // registry_version - computed: true, optional: false, required: false
  public get registryVersion() {
    return this.getNumberAttribute('registry_version');
  }
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItems {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItems | undefined) {
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

  // key_map - computed: true, optional: false, required: false
  private _keyMap = new cdktf.StringMap(this, "key_map");
  public get keyMap() {
    return this._keyMap;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }

  // object_version - computed: true, optional: false, required: false
  public get objectVersion() {
    return this.getNumberAttribute('object_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // project_key - computed: true, optional: false, required: false
  public get projectKey() {
    return this.getStringAttribute('project_key');
  }

  // registry_metadata - computed: true, optional: false, required: false
  private _registryMetadata = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsRegistryMetadataList(this, "registry_metadata", false);
  public get registryMetadata() {
    return this._registryMetadata;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsProjectSummaryCollection {
}

export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsProjectSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceProjectsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#name DataOciDataintegrationWorkspaceProjects#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#regex DataOciDataintegrationWorkspaceProjects#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#values DataOciDataintegrationWorkspaceProjects#values}
  */
  readonly values: string[];
}

export function dataOciDataintegrationWorkspaceProjectsFilterToTerraform(struct?: DataOciDataintegrationWorkspaceProjectsFilter | cdktf.IResolvable): any {
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


export function dataOciDataintegrationWorkspaceProjectsFilterToHclTerraform(struct?: DataOciDataintegrationWorkspaceProjectsFilter | cdktf.IResolvable): any {
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

export class DataOciDataintegrationWorkspaceProjectsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceProjectsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataintegrationWorkspaceProjectsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataintegrationWorkspaceProjectsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataintegrationWorkspaceProjectsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataintegrationWorkspaceProjectsFilterOutputReference {
    return new DataOciDataintegrationWorkspaceProjectsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects oci_dataintegration_workspace_projects}
*/
export class DataOciDataintegrationWorkspaceProjects extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_projects";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataintegrationWorkspaceProjects resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataintegrationWorkspaceProjects to import
  * @param importFromId The id of the existing DataOciDataintegrationWorkspaceProjects that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataintegrationWorkspaceProjects to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_projects", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/dataintegration_workspace_projects oci_dataintegration_workspace_projects} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceProjectsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceProjectsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_projects',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fields = config.fields;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._nameContains = config.nameContains;
    this._workspaceId = config.workspaceId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string[]; 
  public get identifier() {
    return this.getListAttribute('identifier');
  }
  public set identifier(value: string[]) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // name_contains - computed: false, optional: true, required: false
  private _nameContains?: string; 
  public get nameContains() {
    return this.getStringAttribute('name_contains');
  }
  public set nameContains(value: string) {
    this._nameContains = value;
  }
  public resetNameContains() {
    this._nameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameContainsInput() {
    return this._nameContains;
  }

  // project_summary_collection - computed: true, optional: false, required: false
  private _projectSummaryCollection = new DataOciDataintegrationWorkspaceProjectsProjectSummaryCollectionList(this, "project_summary_collection", false);
  public get projectSummaryCollection() {
    return this._projectSummaryCollection;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataintegrationWorkspaceProjectsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataintegrationWorkspaceProjectsFilter[] | cdktf.IResolvable) {
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
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      name_contains: cdktf.stringToTerraform(this._nameContains),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      filter: cdktf.listMapper(dataOciDataintegrationWorkspaceProjectsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identifier),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_contains: {
        value: cdktf.stringToHclTerraform(this._nameContains),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciDataintegrationWorkspaceProjectsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataintegrationWorkspaceProjectsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
