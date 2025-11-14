// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataintegrationWorkspaceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#api_call_mode DataintegrationWorkspaceTask#api_call_mode}
  */
  readonly apiCallMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#description DataintegrationWorkspaceTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#id DataintegrationWorkspaceTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#identifier DataintegrationWorkspaceTask#identifier}
  */
  readonly identifier: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#is_single_load DataintegrationWorkspaceTask#is_single_load}
  */
  readonly isSingleLoad?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#operation DataintegrationWorkspaceTask#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parallel_load_limit DataintegrationWorkspaceTask#parallel_load_limit}
  */
  readonly parallelLoadLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#workspace_id DataintegrationWorkspaceTask#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#auth_config DataintegrationWorkspaceTask#auth_config}
  */
  readonly authConfig?: DataintegrationWorkspaceTaskAuthConfig;
  /**
  * cancel_rest_call_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#cancel_rest_call_config DataintegrationWorkspaceTask#cancel_rest_call_config}
  */
  readonly cancelRestCallConfig?: DataintegrationWorkspaceTaskCancelRestCallConfig;
  /**
  * config_provider_delegate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_provider_delegate DataintegrationWorkspaceTask#config_provider_delegate}
  */
  readonly configProviderDelegate?: DataintegrationWorkspaceTaskConfigProviderDelegate;
  /**
  * execute_rest_call_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#execute_rest_call_config DataintegrationWorkspaceTask#execute_rest_call_config}
  */
  readonly executeRestCallConfig?: DataintegrationWorkspaceTaskExecuteRestCallConfig;
  /**
  * input_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#input_ports DataintegrationWorkspaceTask#input_ports}
  */
  readonly inputPorts?: DataintegrationWorkspaceTaskInputPorts[] | cdktf.IResolvable;
  /**
  * op_config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#op_config_values DataintegrationWorkspaceTask#op_config_values}
  */
  readonly opConfigValues?: DataintegrationWorkspaceTaskOpConfigValues;
  /**
  * output_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#output_ports DataintegrationWorkspaceTask#output_ports}
  */
  readonly outputPorts?: DataintegrationWorkspaceTaskOutputPorts[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameters DataintegrationWorkspaceTask#parameters}
  */
  readonly parameters?: DataintegrationWorkspaceTaskParameters[] | cdktf.IResolvable;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskParentRef;
  /**
  * poll_rest_call_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_rest_call_config DataintegrationWorkspaceTask#poll_rest_call_config}
  */
  readonly pollRestCallConfig?: DataintegrationWorkspaceTaskPollRestCallConfig;
  /**
  * registry_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#registry_metadata DataintegrationWorkspaceTask#registry_metadata}
  */
  readonly registryMetadata: DataintegrationWorkspaceTaskRegistryMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#timeouts DataintegrationWorkspaceTask#timeouts}
  */
  readonly timeouts?: DataintegrationWorkspaceTaskTimeouts;
  /**
  * typed_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#typed_expressions DataintegrationWorkspaceTask#typed_expressions}
  */
  readonly typedExpressions?: DataintegrationWorkspaceTaskTypedExpressions[] | cdktf.IResolvable;
}
export interface DataintegrationWorkspaceTaskMetadataAggregator {
}

export function dataintegrationWorkspaceTaskMetadataAggregatorToTerraform(struct?: DataintegrationWorkspaceTaskMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceTaskMetadataAggregatorToHclTerraform(struct?: DataintegrationWorkspaceTaskMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceTaskMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskMetadataAggregator | undefined) {
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

export class DataintegrationWorkspaceTaskMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceTaskMetadataAggregatorOutputReference {
    return new DataintegrationWorkspaceTaskMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
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

export class DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskMetadataCountStatistics {
}

export function dataintegrationWorkspaceTaskMetadataCountStatisticsToTerraform(struct?: DataintegrationWorkspaceTaskMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceTaskMetadataCountStatisticsToHclTerraform(struct?: DataintegrationWorkspaceTaskMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceTaskMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataintegrationWorkspaceTaskMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataintegrationWorkspaceTaskMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceTaskMetadataCountStatisticsOutputReference {
    return new DataintegrationWorkspaceTaskMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskMetadata {
}

export function dataintegrationWorkspaceTaskMetadataToTerraform(struct?: DataintegrationWorkspaceTaskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataintegrationWorkspaceTaskMetadataToHclTerraform(struct?: DataintegrationWorkspaceTaskMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataintegrationWorkspaceTaskMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataintegrationWorkspaceTaskMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataintegrationWorkspaceTaskMetadataCountStatisticsList(this, "count_statistics", false);
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

export class DataintegrationWorkspaceTaskMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataintegrationWorkspaceTaskMetadataOutputReference {
    return new DataintegrationWorkspaceTaskMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskAuthConfigParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskAuthConfigParentRefToTerraform(struct?: DataintegrationWorkspaceTaskAuthConfigParentRefOutputReference | DataintegrationWorkspaceTaskAuthConfigParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskAuthConfigParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskAuthConfigParentRefOutputReference | DataintegrationWorkspaceTaskAuthConfigParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskAuthConfigParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskAuthConfigParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskAuthConfigParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#resource_principal_source DataintegrationWorkspaceTask#resource_principal_source}
  */
  readonly resourcePrincipalSource?: string;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskAuthConfigParentRef;
}

export function dataintegrationWorkspaceTaskAuthConfigToTerraform(struct?: DataintegrationWorkspaceTaskAuthConfigOutputReference | DataintegrationWorkspaceTaskAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    resource_principal_source: cdktf.stringToTerraform(struct!.resourcePrincipalSource),
    parent_ref: dataintegrationWorkspaceTaskAuthConfigParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskAuthConfigToHclTerraform(struct?: DataintegrationWorkspaceTaskAuthConfigOutputReference | DataintegrationWorkspaceTaskAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_principal_source: {
      value: cdktf.stringToHclTerraform(struct!.resourcePrincipalSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskAuthConfigParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskAuthConfigParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._resourcePrincipalSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePrincipalSource = this._resourcePrincipalSource;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._resourcePrincipalSource = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._resourcePrincipalSource = value.resourcePrincipalSource;
      this._parentRef.internalValue = value.parentRef;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // resource_principal_source - computed: true, optional: true, required: false
  private _resourcePrincipalSource?: string; 
  public get resourcePrincipalSource() {
    return this.getStringAttribute('resource_principal_source');
  }
  public set resourcePrincipalSource(value: string) {
    this._resourcePrincipalSource = value;
  }
  public resetResourcePrincipalSource() {
    this._resourcePrincipalSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePrincipalSourceInput() {
    return this._resourcePrincipalSource;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskAuthConfigParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskAuthConfigParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
  /**
  * data_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#data_param DataintegrationWorkspaceTask#data_param}
  */
  readonly dataParam?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_param: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct!.dataParam),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_param: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct!.dataParam),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataParam = this._dataParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataParam.internalValue = value.dataParam;
    }
  }

  // data_param - computed: false, optional: true, required: false
  private _dataParam = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this, "data_param");
  public get dataParam() {
    return this._dataParam;
  }
  public putDataParam(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam) {
    this._dataParam.internalValue = value;
  }
  public resetDataParam() {
    this._dataParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataParamInput() {
    return this._dataParam.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    config_values: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._configValues.internalValue = value.configValues;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct!.refValue),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterValue = undefined;
      this._refValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterValue = value.parameterValue;
      this._refValue.internalValue = value.refValue;
    }
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues {
  /**
  * request_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_payload DataintegrationWorkspaceTask#request_payload}
  */
  readonly requestPayload?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload;
  /**
  * request_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_url DataintegrationWorkspaceTask#request_url}
  */
  readonly requestUrl?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_payload: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct!.requestPayload),
    request_url: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct!.requestUrl),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_payload: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct!.requestPayload),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadList",
    },
    request_url: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct!.requestUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayload = this._requestPayload?.internalValue;
    }
    if (this._requestUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUrl = this._requestUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestPayload.internalValue = undefined;
      this._requestUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestPayload.internalValue = value.requestPayload;
      this._requestUrl.internalValue = value.requestUrl;
    }
  }

  // request_payload - computed: false, optional: true, required: false
  private _requestPayload = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this, "request_payload");
  public get requestPayload() {
    return this._requestPayload;
  }
  public putRequestPayload(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload) {
    this._requestPayload.internalValue = value;
  }
  public resetRequestPayload() {
    this._requestPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayloadInput() {
    return this._requestPayload.internalValue;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this, "request_url");
  public get requestUrl() {
    return this._requestUrl;
  }
  public putRequestUrl(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl) {
    this._requestUrl.internalValue = value;
  }
  public resetRequestUrl() {
    this._requestUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskCancelRestCallConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#method_type DataintegrationWorkspaceTask#method_type}
  */
  readonly methodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_headers DataintegrationWorkspaceTask#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues;
}

export function dataintegrationWorkspaceTaskCancelRestCallConfigToTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    method_type: cdktf.stringToTerraform(struct!.methodType),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    config_values: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskCancelRestCallConfigToHclTerraform(struct?: DataintegrationWorkspaceTaskCancelRestCallConfigOutputReference | DataintegrationWorkspaceTaskCancelRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_type: {
      value: cdktf.stringToHclTerraform(struct!.methodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskCancelRestCallConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskCancelRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._methodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodType = this._methodType;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskCancelRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._methodType = undefined;
      this._modelType = undefined;
      this._requestHeaders = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._methodType = value.methodType;
      this._modelType = value.modelType;
      this._requestHeaders = value.requestHeaders;
      this._configValues.internalValue = value.configValues;
    }
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

  // method_type - computed: true, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // request_headers - computed: true, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskCancelRestCallConfigConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskCancelRestCallConfigConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
}

export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueToTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
  }
}


export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueToHclTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._objectStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._objectStatus = value.objectStatus;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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
}
export interface DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#simple_value DataintegrationWorkspaceTask#simple_value}
  */
  readonly simpleValue?: string;
  /**
  * root_object_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_value DataintegrationWorkspaceTask#root_object_value}
  */
  readonly rootObjectValue?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue;
}

export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesToTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    simple_value: cdktf.stringToTerraform(struct!.simpleValue),
    root_object_value: dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueToTerraform(struct!.rootObjectValue),
  }
}


export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    simple_value: {
      value: cdktf.stringToHclTerraform(struct!.simpleValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_object_value: {
      value: dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueToHclTerraform(struct!.rootObjectValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._simpleValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleValue = this._simpleValue;
    }
    if (this._rootObjectValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectValue = this._rootObjectValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._simpleValue = undefined;
      this._rootObjectValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._simpleValue = value.simpleValue;
      this._rootObjectValue.internalValue = value.rootObjectValue;
    }
  }

  // simple_value - computed: true, optional: true, required: false
  private _simpleValue?: string; 
  public get simpleValue() {
    return this.getStringAttribute('simple_value');
  }
  public set simpleValue(value: string) {
    this._simpleValue = value;
  }
  public resetSimpleValue() {
    this._simpleValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleValueInput() {
    return this._simpleValue;
  }

  // root_object_value - computed: false, optional: true, required: false
  private _rootObjectValue = new DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference(this, "root_object_value");
  public get rootObjectValue() {
    return this._rootObjectValue;
  }
  public putRootObjectValue(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesRootObjectValue) {
    this._rootObjectValue.internalValue = value;
  }
  public resetRootObjectValue() {
    this._rootObjectValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectValueInput() {
    return this._rootObjectValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskConfigProviderDelegateBindings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * parameter_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_values DataintegrationWorkspaceTask#parameter_values}
  */
  readonly parameterValues?: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues;
}

export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsToTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    parameter_values: dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesToTerraform(struct!.parameterValues),
  }
}


export function dataintegrationWorkspaceTaskConfigProviderDelegateBindingsToHclTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_values: {
      value: dataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesToHclTerraform(struct!.parameterValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskConfigProviderDelegateBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskConfigProviderDelegateBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._parameterValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValues = this._parameterValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._parameterValues.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._parameterValues.internalValue = value.parameterValues;
    }
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

  // parameter_values - computed: false, optional: true, required: false
  private _parameterValues = new DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValuesOutputReference(this, "parameter_values");
  public get parameterValues() {
    return this._parameterValues;
  }
  public putParameterValues(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindingsParameterValues) {
    this._parameterValues.internalValue = value;
  }
  public resetParameterValues() {
    this._parameterValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValuesInput() {
    return this._parameterValues.internalValue;
  }
}

export class DataintegrationWorkspaceTaskConfigProviderDelegateBindingsList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceTaskConfigProviderDelegateBindings[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceTaskConfigProviderDelegateBindingsOutputReference {
    return new DataintegrationWorkspaceTaskConfigProviderDelegateBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskConfigProviderDelegate {
  /**
  * bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#bindings DataintegrationWorkspaceTask#bindings}
  */
  readonly bindings?: DataintegrationWorkspaceTaskConfigProviderDelegateBindings[] | cdktf.IResolvable;
}

export function dataintegrationWorkspaceTaskConfigProviderDelegateToTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bindings: cdktf.listMapper(dataintegrationWorkspaceTaskConfigProviderDelegateBindingsToTerraform, true)(struct!.bindings),
  }
}


export function dataintegrationWorkspaceTaskConfigProviderDelegateToHclTerraform(struct?: DataintegrationWorkspaceTaskConfigProviderDelegateOutputReference | DataintegrationWorkspaceTaskConfigProviderDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bindings: {
      value: cdktf.listMapperHcl(dataintegrationWorkspaceTaskConfigProviderDelegateBindingsToHclTerraform, true)(struct!.bindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskConfigProviderDelegateBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskConfigProviderDelegateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskConfigProviderDelegate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindings = this._bindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskConfigProviderDelegate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindings.internalValue = value.bindings;
    }
  }

  // bindings - computed: false, optional: true, required: false
  private _bindings = new DataintegrationWorkspaceTaskConfigProviderDelegateBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
  public putBindings(value: DataintegrationWorkspaceTaskConfigProviderDelegateBindings[] | cdktf.IResolvable) {
    this._bindings.internalValue = value;
  }
  public resetBindings() {
    this._bindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingsInput() {
    return this._bindings.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
  /**
  * data_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#data_param DataintegrationWorkspaceTask#data_param}
  */
  readonly dataParam?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_param: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct!.dataParam),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_param: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct!.dataParam),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataParam = this._dataParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataParam.internalValue = value.dataParam;
    }
  }

  // data_param - computed: false, optional: true, required: false
  private _dataParam = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this, "data_param");
  public get dataParam() {
    return this._dataParam;
  }
  public putDataParam(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam) {
    this._dataParam.internalValue = value;
  }
  public resetDataParam() {
    this._dataParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataParamInput() {
    return this._dataParam.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    config_values: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._configValues.internalValue = value.configValues;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct!.refValue),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterValue = undefined;
      this._refValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterValue = value.parameterValue;
      this._refValue.internalValue = value.refValue;
    }
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues {
  /**
  * request_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_payload DataintegrationWorkspaceTask#request_payload}
  */
  readonly requestPayload?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload;
  /**
  * request_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_url DataintegrationWorkspaceTask#request_url}
  */
  readonly requestUrl?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_payload: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct!.requestPayload),
    request_url: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct!.requestUrl),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_payload: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct!.requestPayload),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadList",
    },
    request_url: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct!.requestUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayload = this._requestPayload?.internalValue;
    }
    if (this._requestUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUrl = this._requestUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestPayload.internalValue = undefined;
      this._requestUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestPayload.internalValue = value.requestPayload;
      this._requestUrl.internalValue = value.requestUrl;
    }
  }

  // request_payload - computed: false, optional: true, required: false
  private _requestPayload = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this, "request_payload");
  public get requestPayload() {
    return this._requestPayload;
  }
  public putRequestPayload(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload) {
    this._requestPayload.internalValue = value;
  }
  public resetRequestPayload() {
    this._requestPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayloadInput() {
    return this._requestPayload.internalValue;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this, "request_url");
  public get requestUrl() {
    return this._requestUrl;
  }
  public putRequestUrl(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl) {
    this._requestUrl.internalValue = value;
  }
  public resetRequestUrl() {
    this._requestUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskExecuteRestCallConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#method_type DataintegrationWorkspaceTask#method_type}
  */
  readonly methodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_headers DataintegrationWorkspaceTask#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues;
}

export function dataintegrationWorkspaceTaskExecuteRestCallConfigToTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    method_type: cdktf.stringToTerraform(struct!.methodType),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    config_values: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskExecuteRestCallConfigToHclTerraform(struct?: DataintegrationWorkspaceTaskExecuteRestCallConfigOutputReference | DataintegrationWorkspaceTaskExecuteRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_type: {
      value: cdktf.stringToHclTerraform(struct!.methodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskExecuteRestCallConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskExecuteRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._methodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodType = this._methodType;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskExecuteRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._methodType = undefined;
      this._modelType = undefined;
      this._requestHeaders = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._methodType = value.methodType;
      this._modelType = value.modelType;
      this._requestHeaders = value.requestHeaders;
      this._configValues.internalValue = value.configValues;
    }
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

  // method_type - computed: true, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // request_headers - computed: true, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskExecuteRestCallConfigConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_value DataintegrationWorkspaceTask#root_object_value}
  */
  readonly rootObjectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
    object_value: cdktf.stringToTerraform(struct!.objectValue),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: cdktf.stringToTerraform(struct!.refValue),
    root_object_value: cdktf.stringToTerraform(struct!.rootObjectValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_value: {
      value: cdktf.stringToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: cdktf.stringToHclTerraform(struct!.refValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_object_value: {
      value: cdktf.stringToHclTerraform(struct!.rootObjectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue;
    }
    if (this._rootObjectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectValue = this._rootObjectValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
      this._objectValue = undefined;
      this._parameterValue = undefined;
      this._refValue = undefined;
      this._rootObjectValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
      this._objectValue = value.objectValue;
      this._parameterValue = value.parameterValue;
      this._refValue = value.refValue;
      this._rootObjectValue = value.rootObjectValue;
      this._stringValue = value.stringValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: string; 
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }
  public set objectValue(value: string) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: true, optional: true, required: false
  private _refValue?: string; 
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }
  public set refValue(value: string) {
    this._refValue = value;
  }
  public resetRefValue() {
    this._refValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue;
  }

  // root_object_value - computed: true, optional: true, required: false
  private _rootObjectValue?: string; 
  public get rootObjectValue() {
    return this.getStringAttribute('root_object_value');
  }
  public set rootObjectValue(value: string) {
    this._rootObjectValue = value;
  }
  public resetRootObjectValue() {
    this._rootObjectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectValueInput() {
    return this._rootObjectValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskInputPortsConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskInputPortsConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskInputPortsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskInputPortsConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskInputPortsConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskInputPortsConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskInputPortsConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskInputPortsConfigValuesOutputReference | DataintegrationWorkspaceTaskInputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskInputPortsConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskInputPortsConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskInputPortsConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskInputPortsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskInputPortsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskInputPortsConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskInputPortsConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskInputPortsConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskInputPortsParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskInputPortsParentRefToTerraform(struct?: DataintegrationWorkspaceTaskInputPortsParentRefOutputReference | DataintegrationWorkspaceTaskInputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskInputPortsParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskInputPortsParentRefOutputReference | DataintegrationWorkspaceTaskInputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskInputPortsParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskInputPortsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskInputPortsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskInputPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#description DataintegrationWorkspaceTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#fields DataintegrationWorkspaceTask#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#port_type DataintegrationWorkspaceTask#port_type}
  */
  readonly portType?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskInputPortsConfigValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskInputPortsParentRef;
}

export function dataintegrationWorkspaceTaskInputPortsToTerraform(struct?: DataintegrationWorkspaceTaskInputPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
    port_type: cdktf.stringToTerraform(struct!.portType),
    config_values: dataintegrationWorkspaceTaskInputPortsConfigValuesToTerraform(struct!.configValues),
    parent_ref: dataintegrationWorkspaceTaskInputPortsParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskInputPortsToHclTerraform(struct?: DataintegrationWorkspaceTaskInputPorts | cdktf.IResolvable): any {
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
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_type: {
      value: cdktf.stringToHclTerraform(struct!.portType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskInputPortsConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskInputPortsConfigValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskInputPortsParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskInputPortsParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskInputPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskInputPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    if (this._portType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portType = this._portType;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskInputPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fields = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
      this._portType = undefined;
      this._configValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fields = value.fields;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
      this._portType = value.portType;
      this._configValues.internalValue = value.configValues;
      this._parentRef.internalValue = value.parentRef;
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

  // fields - computed: true, optional: true, required: false
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

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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

  // port_type - computed: true, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskInputPortsConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskInputPortsConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskInputPortsParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskInputPortsParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}

export class DataintegrationWorkspaceTaskInputPortsList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceTaskInputPorts[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceTaskInputPortsOutputReference {
    return new DataintegrationWorkspaceTaskInputPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
}

export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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
}
export interface DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
}

export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._objectStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._objectStatus = value.objectStatus;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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
}
export interface DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue;
  /**
  * root_object_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_value DataintegrationWorkspaceTask#root_object_value}
  */
  readonly rootObjectValue?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue;
}

export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
    object_value: cdktf.stringToTerraform(struct!.objectValue),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    ref_value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct!.refValue),
    root_object_value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct!.rootObjectValue),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_value: {
      value: cdktf.stringToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueList",
    },
    root_object_value: {
      value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct!.rootObjectValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    if (this._rootObjectValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectValue = this._rootObjectValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
      this._objectValue = undefined;
      this._parameterValue = undefined;
      this._stringValue = undefined;
      this._refValue.internalValue = undefined;
      this._rootObjectValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
      this._objectValue = value.objectValue;
      this._parameterValue = value.parameterValue;
      this._stringValue = value.stringValue;
      this._refValue.internalValue = value.refValue;
      this._rootObjectValue.internalValue = value.rootObjectValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: string; 
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }
  public set objectValue(value: string) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }

  // root_object_value - computed: false, optional: true, required: false
  private _rootObjectValue = new DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference(this, "root_object_value");
  public get rootObjectValue() {
    return this._rootObjectValue;
  }
  public putRootObjectValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue) {
    this._rootObjectValue.internalValue = value;
  }
  public resetRootObjectValue() {
    this._rootObjectValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectValueInput() {
    return this._rootObjectValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * config_param_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_value DataintegrationWorkspaceTask#config_param_value}
  */
  readonly configParamValue?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue;
}

export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    config_param_value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueToTerraform(struct!.configParamValue),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_param_value: {
      value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct!.configParamValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._configParamValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValue = this._configParamValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._configParamValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._configParamValue.internalValue = value.configParamValue;
    }
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

  // config_param_value - computed: false, optional: true, required: false
  private _configParamValue = new DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValueOutputReference(this, "config_param_value");
  public get configParamValue() {
    return this._configParamValue;
  }
  public putConfigParamValue(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesConfigParamValue) {
    this._configParamValue.internalValue = value;
  }
  public resetConfigParamValue() {
    this._configParamValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValueInput() {
    return this._configParamValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskOpConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskOpConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskOpConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskOpConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskOpConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskOpConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskOpConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesOutputReference | DataintegrationWorkspaceTaskOpConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskOpConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskOpConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskOpConfigValuesOutputReference | DataintegrationWorkspaceTaskOpConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskOpConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOpConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOpConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOpConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskOpConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskOpConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskOpConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskOpConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_value DataintegrationWorkspaceTask#root_object_value}
  */
  readonly rootObjectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
    object_value: cdktf.stringToTerraform(struct!.objectValue),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: cdktf.stringToTerraform(struct!.refValue),
    root_object_value: cdktf.stringToTerraform(struct!.rootObjectValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_value: {
      value: cdktf.stringToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: cdktf.stringToHclTerraform(struct!.refValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_object_value: {
      value: cdktf.stringToHclTerraform(struct!.rootObjectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue;
    }
    if (this._rootObjectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectValue = this._rootObjectValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
      this._objectValue = undefined;
      this._parameterValue = undefined;
      this._refValue = undefined;
      this._rootObjectValue = undefined;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
      this._objectValue = value.objectValue;
      this._parameterValue = value.parameterValue;
      this._refValue = value.refValue;
      this._rootObjectValue = value.rootObjectValue;
      this._stringValue = value.stringValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: string; 
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }
  public set objectValue(value: string) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: true, optional: true, required: false
  private _refValue?: string; 
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }
  public set refValue(value: string) {
    this._refValue = value;
  }
  public resetRefValue() {
    this._refValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue;
  }

  // root_object_value - computed: true, optional: true, required: false
  private _rootObjectValue?: string; 
  public get rootObjectValue() {
    return this.getStringAttribute('root_object_value');
  }
  public set rootObjectValue(value: string) {
    this._rootObjectValue = value;
  }
  public resetRootObjectValue() {
    this._rootObjectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectValueInput() {
    return this._rootObjectValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskOutputPortsConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskOutputPortsConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskOutputPortsConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsConfigValuesOutputReference | DataintegrationWorkspaceTaskOutputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOutputPortsConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOutputPortsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOutputPortsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskOutputPortsConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskOutputPortsConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskOutputPortsParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskOutputPortsParentRefToTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsParentRefOutputReference | DataintegrationWorkspaceTaskOutputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskOutputPortsParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskOutputPortsParentRefOutputReference | DataintegrationWorkspaceTaskOutputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOutputPortsParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskOutputPortsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOutputPortsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskOutputPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#description DataintegrationWorkspaceTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#fields DataintegrationWorkspaceTask#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#port_type DataintegrationWorkspaceTask#port_type}
  */
  readonly portType?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskOutputPortsConfigValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskOutputPortsParentRef;
}

export function dataintegrationWorkspaceTaskOutputPortsToTerraform(struct?: DataintegrationWorkspaceTaskOutputPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fields),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
    port_type: cdktf.stringToTerraform(struct!.portType),
    config_values: dataintegrationWorkspaceTaskOutputPortsConfigValuesToTerraform(struct!.configValues),
    parent_ref: dataintegrationWorkspaceTaskOutputPortsParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskOutputPortsToHclTerraform(struct?: DataintegrationWorkspaceTaskOutputPorts | cdktf.IResolvable): any {
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
    fields: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fields),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_type: {
      value: cdktf.stringToHclTerraform(struct!.portType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskOutputPortsConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOutputPortsConfigValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskOutputPortsParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskOutputPortsParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskOutputPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskOutputPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fields !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    if (this._portType !== undefined) {
      hasAnyValues = true;
      internalValueResult.portType = this._portType;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskOutputPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fields = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
      this._portType = undefined;
      this._configValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fields = value.fields;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
      this._portType = value.portType;
      this._configValues.internalValue = value.configValues;
      this._parentRef.internalValue = value.parentRef;
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

  // fields - computed: true, optional: true, required: false
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

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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

  // port_type - computed: true, optional: true, required: false
  private _portType?: string; 
  public get portType() {
    return this.getStringAttribute('port_type');
  }
  public set portType(value: string) {
    this._portType = value;
  }
  public resetPortType() {
    this._portType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypeInput() {
    return this._portType;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskOutputPortsConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskOutputPortsConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskOutputPortsParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskOutputPortsParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}

export class DataintegrationWorkspaceTaskOutputPortsList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceTaskOutputPorts[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceTaskOutputPortsOutputReference {
    return new DataintegrationWorkspaceTaskOutputPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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
}
export interface DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._objectStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._objectStatus = value.objectStatus;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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
}
export interface DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue;
  /**
  * root_object_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_value DataintegrationWorkspaceTask#root_object_value}
  */
  readonly rootObjectValue?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
    object_value: cdktf.stringToTerraform(struct!.objectValue),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    ref_value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct!.refValue),
    root_object_value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct!.rootObjectValue),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_value: {
      value: cdktf.stringToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueList",
    },
    root_object_value: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct!.rootObjectValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    if (this._rootObjectValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectValue = this._rootObjectValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
      this._objectValue = undefined;
      this._parameterValue = undefined;
      this._stringValue = undefined;
      this._refValue.internalValue = undefined;
      this._rootObjectValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
      this._objectValue = value.objectValue;
      this._parameterValue = value.parameterValue;
      this._stringValue = value.stringValue;
      this._refValue.internalValue = value.refValue;
      this._rootObjectValue.internalValue = value.rootObjectValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: string; 
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }
  public set objectValue(value: string) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }

  // root_object_value - computed: false, optional: true, required: false
  private _rootObjectValue = new DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference(this, "root_object_value");
  public get rootObjectValue() {
    return this._rootObjectValue;
  }
  public putRootObjectValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue) {
    this._rootObjectValue.internalValue = value;
  }
  public resetRootObjectValue() {
    this._rootObjectValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectValueInput() {
    return this._rootObjectValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * config_param_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_value DataintegrationWorkspaceTask#config_param_value}
  */
  readonly configParamValue?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    config_param_value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueToTerraform(struct!.configParamValue),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_param_value: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct!.configParamValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._configParamValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValue = this._configParamValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._configParamValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._configParamValue.internalValue = value.configParamValue;
    }
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

  // config_param_value - computed: false, optional: true, required: false
  private _configParamValue = new DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValueOutputReference(this, "config_param_value");
  public get configParamValue() {
    return this._configParamValue;
  }
  public putConfigParamValue(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesConfigParamValue) {
    this._configParamValue.internalValue = value;
  }
  public resetConfigParamValue() {
    this._configParamValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValueInput() {
    return this._configParamValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskParametersConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskParametersConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskParametersConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskParametersConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskParametersConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesOutputReference | DataintegrationWorkspaceTaskParametersConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskParametersConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskParametersConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersConfigValuesOutputReference | DataintegrationWorkspaceTaskParametersConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskParametersConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskParametersConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskParametersConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskParametersParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskParametersParentRefToTerraform(struct?: DataintegrationWorkspaceTaskParametersParentRefOutputReference | DataintegrationWorkspaceTaskParametersParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskParametersParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskParametersParentRefOutputReference | DataintegrationWorkspaceTaskParametersParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParametersParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParametersParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#default_value DataintegrationWorkspaceTask#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#description DataintegrationWorkspaceTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#is_input DataintegrationWorkspaceTask#is_input}
  */
  readonly isInput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#is_output DataintegrationWorkspaceTask#is_output}
  */
  readonly isOutput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#output_aggregation_type DataintegrationWorkspaceTask#output_aggregation_type}
  */
  readonly outputAggregationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_object_default_value DataintegrationWorkspaceTask#root_object_default_value}
  */
  readonly rootObjectDefaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#type DataintegrationWorkspaceTask#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#type_name DataintegrationWorkspaceTask#type_name}
  */
  readonly typeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#used_for DataintegrationWorkspaceTask#used_for}
  */
  readonly usedFor?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskParametersConfigValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskParametersParentRef;
}

export function dataintegrationWorkspaceTaskParametersToTerraform(struct?: DataintegrationWorkspaceTaskParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    is_input: cdktf.booleanToTerraform(struct!.isInput),
    is_output: cdktf.booleanToTerraform(struct!.isOutput),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
    output_aggregation_type: cdktf.stringToTerraform(struct!.outputAggregationType),
    root_object_default_value: cdktf.stringToTerraform(struct!.rootObjectDefaultValue),
    type: cdktf.stringToTerraform(struct!.type),
    type_name: cdktf.stringToTerraform(struct!.typeName),
    used_for: cdktf.stringToTerraform(struct!.usedFor),
    config_values: dataintegrationWorkspaceTaskParametersConfigValuesToTerraform(struct!.configValues),
    parent_ref: dataintegrationWorkspaceTaskParametersParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskParametersToHclTerraform(struct?: DataintegrationWorkspaceTaskParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_input: {
      value: cdktf.booleanToHclTerraform(struct!.isInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_output: {
      value: cdktf.booleanToHclTerraform(struct!.isOutput),
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
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    output_aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.outputAggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_object_default_value: {
      value: cdktf.stringToHclTerraform(struct!.rootObjectDefaultValue),
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
    type_name: {
      value: cdktf.stringToHclTerraform(struct!.typeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    used_for: {
      value: cdktf.stringToHclTerraform(struct!.usedFor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskParametersConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersConfigValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskParametersParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskParametersParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.isInput = this._isInput;
    }
    if (this._isOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.isOutput = this._isOutput;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    if (this._outputAggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputAggregationType = this._outputAggregationType;
    }
    if (this._rootObjectDefaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootObjectDefaultValue = this._rootObjectDefaultValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeName = this._typeName;
    }
    if (this._usedFor !== undefined) {
      hasAnyValues = true;
      internalValueResult.usedFor = this._usedFor;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._isInput = undefined;
      this._isOutput = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
      this._outputAggregationType = undefined;
      this._rootObjectDefaultValue = undefined;
      this._type = undefined;
      this._typeName = undefined;
      this._usedFor = undefined;
      this._configValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._isInput = value.isInput;
      this._isOutput = value.isOutput;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
      this._outputAggregationType = value.outputAggregationType;
      this._rootObjectDefaultValue = value.rootObjectDefaultValue;
      this._type = value.type;
      this._typeName = value.typeName;
      this._usedFor = value.usedFor;
      this._configValues.internalValue = value.configValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // is_input - computed: true, optional: true, required: false
  private _isInput?: boolean | cdktf.IResolvable; 
  public get isInput() {
    return this.getBooleanAttribute('is_input');
  }
  public set isInput(value: boolean | cdktf.IResolvable) {
    this._isInput = value;
  }
  public resetIsInput() {
    this._isInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInputInput() {
    return this._isInput;
  }

  // is_output - computed: true, optional: true, required: false
  private _isOutput?: boolean | cdktf.IResolvable; 
  public get isOutput() {
    return this.getBooleanAttribute('is_output');
  }
  public set isOutput(value: boolean | cdktf.IResolvable) {
    this._isOutput = value;
  }
  public resetIsOutput() {
    this._isOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOutputInput() {
    return this._isOutput;
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

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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

  // output_aggregation_type - computed: true, optional: true, required: false
  private _outputAggregationType?: string; 
  public get outputAggregationType() {
    return this.getStringAttribute('output_aggregation_type');
  }
  public set outputAggregationType(value: string) {
    this._outputAggregationType = value;
  }
  public resetOutputAggregationType() {
    this._outputAggregationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputAggregationTypeInput() {
    return this._outputAggregationType;
  }

  // root_object_default_value - computed: true, optional: true, required: false
  private _rootObjectDefaultValue?: string; 
  public get rootObjectDefaultValue() {
    return this.getStringAttribute('root_object_default_value');
  }
  public set rootObjectDefaultValue(value: string) {
    this._rootObjectDefaultValue = value;
  }
  public resetRootObjectDefaultValue() {
    this._rootObjectDefaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootObjectDefaultValueInput() {
    return this._rootObjectDefaultValue;
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

  // type_name - computed: true, optional: true, required: false
  private _typeName?: string; 
  public get typeName() {
    return this.getStringAttribute('type_name');
  }
  public set typeName(value: string) {
    this._typeName = value;
  }
  public resetTypeName() {
    this._typeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeNameInput() {
    return this._typeName;
  }

  // used_for - computed: true, optional: true, required: false
  private _usedFor?: string; 
  public get usedFor() {
    return this.getStringAttribute('used_for');
  }
  public set usedFor(value: string) {
    this._usedFor = value;
  }
  public resetUsedFor() {
    this._usedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usedForInput() {
    return this._usedFor;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskParametersConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskParametersConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskParametersParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskParametersParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}

export class DataintegrationWorkspaceTaskParametersList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceTaskParameters[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceTaskParametersOutputReference {
    return new DataintegrationWorkspaceTaskParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataintegrationWorkspaceTaskParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskParentRefToTerraform(struct?: DataintegrationWorkspaceTaskParentRefOutputReference | DataintegrationWorkspaceTaskParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskParentRefOutputReference | DataintegrationWorkspaceTaskParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#expr_string DataintegrationWorkspaceTask#expr_string}
  */
  readonly exprString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr_string: cdktf.stringToTerraform(struct!.exprString),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expr_string: {
      value: cdktf.stringToHclTerraform(struct!.exprString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exprString !== undefined) {
      hasAnyValues = true;
      internalValueResult.exprString = this._exprString;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exprString = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exprString = value.exprString;
      this._key = value.key;
      this._modelType = value.modelType;
      this._name = value.name;
    }
  }

  // expr_string - computed: true, optional: true, required: false
  private _exprString?: string; 
  public get exprString() {
    return this.getStringAttribute('expr_string');
  }
  public set exprString(value: string) {
    this._exprString = value;
  }
  public resetExprString() {
    this._exprString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exprStringInput() {
    return this._exprString;
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // name - computed: true, optional: true, required: false
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
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToTerraform(struct!.refValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterValue = undefined;
      this._refValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterValue = value.parameterValue;
      this._refValue.internalValue = value.refValue;
    }
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: number;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_value: cdktf.numberToTerraform(struct!.objectValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_value: {
      value: cdktf.numberToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectValue = value.objectValue;
    }
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: number; 
  public get objectValue() {
    return this.getNumberAttribute('object_value');
  }
  public set objectValue(value: number) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_value DataintegrationWorkspaceTask#object_value}
  */
  readonly objectValue?: number;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_value: cdktf.numberToTerraform(struct!.objectValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_value: {
      value: cdktf.numberToHclTerraform(struct!.objectValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectValue = this._objectValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectValue = value.objectValue;
    }
  }

  // object_value - computed: true, optional: true, required: false
  private _objectValue?: number; 
  public get objectValue() {
    return this.getNumberAttribute('object_value');
  }
  public set objectValue(value: number) {
    this._objectValue = value;
  }
  public resetObjectValue() {
    this._objectValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectValueInput() {
    return this._objectValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
  /**
  * data_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#data_param DataintegrationWorkspaceTask#data_param}
  */
  readonly dataParam?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_param: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct!.dataParam),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_param: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct!.dataParam),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataParam = this._dataParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataParam.internalValue = value.dataParam;
    }
  }

  // data_param - computed: false, optional: true, required: false
  private _dataParam = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this, "data_param");
  public get dataParam() {
    return this._dataParam;
  }
  public putDataParam(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam) {
    this._dataParam.internalValue = value;
  }
  public resetDataParam() {
    this._dataParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataParamInput() {
    return this._dataParam.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    name: cdktf.stringToTerraform(struct!.name),
    config_values: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
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
    config_values: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._modelType = undefined;
      this._name = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._modelType = value.modelType;
      this._name = value.name;
      this._configValues.internalValue = value.configValues;
    }
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // name - computed: true, optional: true, required: false
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

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parameter_value DataintegrationWorkspaceTask#parameter_value}
  */
  readonly parameterValue?: string;
  /**
  * ref_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#ref_value DataintegrationWorkspaceTask#ref_value}
  */
  readonly refValue?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
    ref_value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct!.refValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_value: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct!.refValue),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    if (this._refValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refValue = this._refValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameterValue = undefined;
      this._refValue.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameterValue = value.parameterValue;
      this._refValue.internalValue = value.refValue;
    }
  }

  // parameter_value - computed: true, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }

  // ref_value - computed: false, optional: true, required: false
  private _refValue = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this, "ref_value");
  public get refValue() {
    return this._refValue;
  }
  public putRefValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue) {
    this._refValue.internalValue = value;
  }
  public resetRefValue() {
    this._refValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refValueInput() {
    return this._refValue.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#string_value DataintegrationWorkspaceTask#string_value}
  */
  readonly stringValue?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues {
  /**
  * poll_condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_condition DataintegrationWorkspaceTask#poll_condition}
  */
  readonly pollCondition?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition;
  /**
  * poll_interval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_interval DataintegrationWorkspaceTask#poll_interval}
  */
  readonly pollInterval?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval;
  /**
  * poll_interval_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_interval_unit DataintegrationWorkspaceTask#poll_interval_unit}
  */
  readonly pollIntervalUnit?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit;
  /**
  * poll_max_duration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_max_duration DataintegrationWorkspaceTask#poll_max_duration}
  */
  readonly pollMaxDuration?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration;
  /**
  * poll_max_duration_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#poll_max_duration_unit DataintegrationWorkspaceTask#poll_max_duration_unit}
  */
  readonly pollMaxDurationUnit?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit;
  /**
  * request_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_payload DataintegrationWorkspaceTask#request_payload}
  */
  readonly requestPayload?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload;
  /**
  * request_url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_url DataintegrationWorkspaceTask#request_url}
  */
  readonly requestUrl?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    poll_condition: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionToTerraform(struct!.pollCondition),
    poll_interval: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToTerraform(struct!.pollInterval),
    poll_interval_unit: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToTerraform(struct!.pollIntervalUnit),
    poll_max_duration: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToTerraform(struct!.pollMaxDuration),
    poll_max_duration_unit: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToTerraform(struct!.pollMaxDurationUnit),
    request_payload: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct!.requestPayload),
    request_url: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct!.requestUrl),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    poll_condition: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionToHclTerraform(struct!.pollCondition),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionList",
    },
    poll_interval: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToHclTerraform(struct!.pollInterval),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalList",
    },
    poll_interval_unit: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToHclTerraform(struct!.pollIntervalUnit),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitList",
    },
    poll_max_duration: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToHclTerraform(struct!.pollMaxDuration),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationList",
    },
    poll_max_duration_unit: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToHclTerraform(struct!.pollMaxDurationUnit),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitList",
    },
    request_payload: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct!.requestPayload),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadList",
    },
    request_url: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct!.requestUrl),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pollCondition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollCondition = this._pollCondition?.internalValue;
    }
    if (this._pollInterval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollInterval = this._pollInterval?.internalValue;
    }
    if (this._pollIntervalUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollIntervalUnit = this._pollIntervalUnit?.internalValue;
    }
    if (this._pollMaxDuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollMaxDuration = this._pollMaxDuration?.internalValue;
    }
    if (this._pollMaxDurationUnit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollMaxDurationUnit = this._pollMaxDurationUnit?.internalValue;
    }
    if (this._requestPayload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPayload = this._requestPayload?.internalValue;
    }
    if (this._requestUrl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUrl = this._requestUrl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pollCondition.internalValue = undefined;
      this._pollInterval.internalValue = undefined;
      this._pollIntervalUnit.internalValue = undefined;
      this._pollMaxDuration.internalValue = undefined;
      this._pollMaxDurationUnit.internalValue = undefined;
      this._requestPayload.internalValue = undefined;
      this._requestUrl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pollCondition.internalValue = value.pollCondition;
      this._pollInterval.internalValue = value.pollInterval;
      this._pollIntervalUnit.internalValue = value.pollIntervalUnit;
      this._pollMaxDuration.internalValue = value.pollMaxDuration;
      this._pollMaxDurationUnit.internalValue = value.pollMaxDurationUnit;
      this._requestPayload.internalValue = value.requestPayload;
      this._requestUrl.internalValue = value.requestUrl;
    }
  }

  // poll_condition - computed: false, optional: true, required: false
  private _pollCondition = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference(this, "poll_condition");
  public get pollCondition() {
    return this._pollCondition;
  }
  public putPollCondition(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollCondition) {
    this._pollCondition.internalValue = value;
  }
  public resetPollCondition() {
    this._pollCondition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollConditionInput() {
    return this._pollCondition.internalValue;
  }

  // poll_interval - computed: false, optional: true, required: false
  private _pollInterval = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference(this, "poll_interval");
  public get pollInterval() {
    return this._pollInterval;
  }
  public putPollInterval(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollInterval) {
    this._pollInterval.internalValue = value;
  }
  public resetPollInterval() {
    this._pollInterval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalInput() {
    return this._pollInterval.internalValue;
  }

  // poll_interval_unit - computed: false, optional: true, required: false
  private _pollIntervalUnit = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference(this, "poll_interval_unit");
  public get pollIntervalUnit() {
    return this._pollIntervalUnit;
  }
  public putPollIntervalUnit(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit) {
    this._pollIntervalUnit.internalValue = value;
  }
  public resetPollIntervalUnit() {
    this._pollIntervalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollIntervalUnitInput() {
    return this._pollIntervalUnit.internalValue;
  }

  // poll_max_duration - computed: false, optional: true, required: false
  private _pollMaxDuration = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference(this, "poll_max_duration");
  public get pollMaxDuration() {
    return this._pollMaxDuration;
  }
  public putPollMaxDuration(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration) {
    this._pollMaxDuration.internalValue = value;
  }
  public resetPollMaxDuration() {
    this._pollMaxDuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollMaxDurationInput() {
    return this._pollMaxDuration.internalValue;
  }

  // poll_max_duration_unit - computed: false, optional: true, required: false
  private _pollMaxDurationUnit = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference(this, "poll_max_duration_unit");
  public get pollMaxDurationUnit() {
    return this._pollMaxDurationUnit;
  }
  public putPollMaxDurationUnit(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit) {
    this._pollMaxDurationUnit.internalValue = value;
  }
  public resetPollMaxDurationUnit() {
    this._pollMaxDurationUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollMaxDurationUnitInput() {
    return this._pollMaxDurationUnit.internalValue;
  }

  // request_payload - computed: false, optional: true, required: false
  private _requestPayload = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this, "request_payload");
  public get requestPayload() {
    return this._requestPayload;
  }
  public putRequestPayload(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestPayload) {
    this._requestPayload.internalValue = value;
  }
  public resetRequestPayload() {
    this._requestPayload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPayloadInput() {
    return this._requestPayload.internalValue;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this, "request_url");
  public get requestUrl() {
    return this._requestUrl;
  }
  public putRequestUrl(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesRequestUrl) {
    this._requestUrl.internalValue = value;
  }
  public resetRequestUrl() {
    this._requestUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfigConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesOutputReference | DataintegrationWorkspaceTaskPollRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskPollRestCallConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#method_type DataintegrationWorkspaceTask#method_type}
  */
  readonly methodType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#request_headers DataintegrationWorkspaceTask#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskPollRestCallConfigConfigValues;
}

export function dataintegrationWorkspaceTaskPollRestCallConfigToTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigOutputReference | DataintegrationWorkspaceTaskPollRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    method_type: cdktf.stringToTerraform(struct!.methodType),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    config_values: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesToTerraform(struct!.configValues),
  }
}


export function dataintegrationWorkspaceTaskPollRestCallConfigToHclTerraform(struct?: DataintegrationWorkspaceTaskPollRestCallConfigOutputReference | DataintegrationWorkspaceTaskPollRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_type: {
      value: cdktf.stringToHclTerraform(struct!.methodType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskPollRestCallConfigConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskPollRestCallConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskPollRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._methodType !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodType = this._methodType;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskPollRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._methodType = undefined;
      this._modelType = undefined;
      this._requestHeaders = undefined;
      this._configValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._methodType = value.methodType;
      this._modelType = value.modelType;
      this._requestHeaders = value.requestHeaders;
      this._configValues.internalValue = value.configValues;
    }
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

  // method_type - computed: true, optional: true, required: false
  private _methodType?: string; 
  public get methodType() {
    return this.getStringAttribute('method_type');
  }
  public set methodType(value: string) {
    this._methodType = value;
  }
  public resetMethodType() {
    this._methodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypeInput() {
    return this._methodType;
  }

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
  }

  // request_headers - computed: true, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskPollRestCallConfigConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskPollRestCallConfigConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskRegistryMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#aggregator_key DataintegrationWorkspaceTask#aggregator_key}
  */
  readonly aggregatorKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#is_favorite DataintegrationWorkspaceTask#is_favorite}
  */
  readonly isFavorite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#labels DataintegrationWorkspaceTask#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#registry_version DataintegrationWorkspaceTask#registry_version}
  */
  readonly registryVersion?: number;
}

export function dataintegrationWorkspaceTaskRegistryMetadataToTerraform(struct?: DataintegrationWorkspaceTaskRegistryMetadataOutputReference | DataintegrationWorkspaceTaskRegistryMetadata): any {
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


export function dataintegrationWorkspaceTaskRegistryMetadataToHclTerraform(struct?: DataintegrationWorkspaceTaskRegistryMetadataOutputReference | DataintegrationWorkspaceTaskRegistryMetadata): any {
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

export class DataintegrationWorkspaceTaskRegistryMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskRegistryMetadata | undefined {
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

  public set internalValue(value: DataintegrationWorkspaceTaskRegistryMetadata | undefined) {
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

  // aggregator_key - computed: false, optional: false, required: true
  private _aggregatorKey?: string; 
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }
  public set aggregatorKey(value: string) {
    this._aggregatorKey = value;
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
export interface DataintegrationWorkspaceTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#create DataintegrationWorkspaceTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#delete DataintegrationWorkspaceTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#update DataintegrationWorkspaceTask#update}
  */
  readonly update?: string;
}

export function dataintegrationWorkspaceTaskTimeoutsToTerraform(struct?: DataintegrationWorkspaceTaskTimeouts | cdktf.IResolvable): any {
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


export function dataintegrationWorkspaceTaskTimeoutsToHclTerraform(struct?: DataintegrationWorkspaceTaskTimeouts | cdktf.IResolvable): any {
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

export class DataintegrationWorkspaceTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataintegrationWorkspaceTaskTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
}

export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#int_value DataintegrationWorkspaceTask#int_value}
  */
  readonly intValue?: number;
}

export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    int_value: cdktf.numberToTerraform(struct!.intValue),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    int_value: {
      value: cdktf.numberToHclTerraform(struct!.intValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intValue = this._intValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intValue = value.intValue;
    }
  }

  // int_value - computed: true, optional: true, required: false
  private _intValue?: number; 
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
  public set intValue(value: number) {
    this._intValue = value;
  }
  public resetIntValue() {
    this._intValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intValueInput() {
    return this._intValue;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues {
  /**
  * length block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#length DataintegrationWorkspaceTask#length}
  */
  readonly length?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength;
  /**
  * scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#scale DataintegrationWorkspaceTask#scale}
  */
  readonly scale?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale;
}

export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthToTerraform(struct!.length),
    scale: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleToTerraform(struct!.scale),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthToHclTerraform(struct!.length),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthList",
    },
    scale: {
      value: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleToHclTerraform(struct!.scale),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length?.internalValue;
    }
    if (this._scale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scale = this._scale?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length.internalValue = undefined;
      this._scale.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length.internalValue = value.length;
      this._scale.internalValue = value.scale;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length = new DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference(this, "length");
  public get length() {
    return this._length;
  }
  public putLength(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesLength) {
    this._length.internalValue = value;
  }
  public resetLength() {
    this._length.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length.internalValue;
  }

  // scale - computed: false, optional: true, required: false
  private _scale = new DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference(this, "scale");
  public get scale() {
    return this._scale;
  }
  public putScale(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesScale) {
    this._scale.internalValue = value;
  }
  public resetScale() {
    this._scale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInput() {
    return this._scale.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressionsConfigValues {
  /**
  * config_param_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_param_values DataintegrationWorkspaceTask#config_param_values}
  */
  readonly configParamValues?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef;
}

export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_param_values: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesToTerraform(struct!.configParamValues),
    parent_ref: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsConfigValuesToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesOutputReference | DataintegrationWorkspaceTaskTypedExpressionsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_param_values: {
      value: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesToHclTerraform(struct!.configParamValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsConfigValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configParamValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configParamValues = this._configParamValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configParamValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configParamValues.internalValue = value.configParamValues;
      this._parentRef.internalValue = value.parentRef;
    }
  }

  // config_param_values - computed: false, optional: true, required: false
  private _configParamValues = new DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValuesOutputReference(this, "config_param_values");
  public get configParamValues() {
    return this._configParamValues;
  }
  public putConfigParamValues(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesConfigParamValues) {
    this._configParamValues.internalValue = value;
  }
  public resetConfigParamValues() {
    this._configParamValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configParamValuesInput() {
    return this._configParamValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValuesParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressionsParentRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent DataintegrationWorkspaceTask#parent}
  */
  readonly parent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#root_doc_id DataintegrationWorkspaceTask#root_doc_id}
  */
  readonly rootDocId?: string;
}

export function dataintegrationWorkspaceTaskTypedExpressionsParentRefToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsParentRefOutputReference | DataintegrationWorkspaceTaskTypedExpressionsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parent: cdktf.stringToTerraform(struct!.parent),
    root_doc_id: cdktf.stringToTerraform(struct!.rootDocId),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsParentRefToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressionsParentRefOutputReference | DataintegrationWorkspaceTaskTypedExpressionsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parent: {
      value: cdktf.stringToHclTerraform(struct!.parent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_doc_id: {
      value: cdktf.stringToHclTerraform(struct!.rootDocId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsParentRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressionsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parent !== undefined) {
      hasAnyValues = true;
      internalValueResult.parent = this._parent;
    }
    if (this._rootDocId !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDocId = this._rootDocId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressionsParentRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parent = undefined;
      this._rootDocId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parent = value.parent;
      this._rootDocId = value.rootDocId;
    }
  }

  // parent - computed: true, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // root_doc_id - computed: true, optional: true, required: false
  private _rootDocId?: string; 
  public get rootDocId() {
    return this.getStringAttribute('root_doc_id');
  }
  public set rootDocId(value: string) {
    this._rootDocId = value;
  }
  public resetRootDocId() {
    this._rootDocId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDocIdInput() {
    return this._rootDocId;
  }
}
export interface DataintegrationWorkspaceTaskTypedExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#description DataintegrationWorkspaceTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#expression DataintegrationWorkspaceTask#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#key DataintegrationWorkspaceTask#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_type DataintegrationWorkspaceTask#model_type}
  */
  readonly modelType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#model_version DataintegrationWorkspaceTask#model_version}
  */
  readonly modelVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#name DataintegrationWorkspaceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#object_status DataintegrationWorkspaceTask#object_status}
  */
  readonly objectStatus?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#type DataintegrationWorkspaceTask#type}
  */
  readonly type?: string;
  /**
  * config_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#config_values DataintegrationWorkspaceTask#config_values}
  */
  readonly configValues?: DataintegrationWorkspaceTaskTypedExpressionsConfigValues;
  /**
  * parent_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#parent_ref DataintegrationWorkspaceTask#parent_ref}
  */
  readonly parentRef?: DataintegrationWorkspaceTaskTypedExpressionsParentRef;
}

export function dataintegrationWorkspaceTaskTypedExpressionsToTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    key: cdktf.stringToTerraform(struct!.key),
    model_type: cdktf.stringToTerraform(struct!.modelType),
    model_version: cdktf.stringToTerraform(struct!.modelVersion),
    name: cdktf.stringToTerraform(struct!.name),
    object_status: cdktf.numberToTerraform(struct!.objectStatus),
    type: cdktf.stringToTerraform(struct!.type),
    config_values: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesToTerraform(struct!.configValues),
    parent_ref: dataintegrationWorkspaceTaskTypedExpressionsParentRefToTerraform(struct!.parentRef),
  }
}


export function dataintegrationWorkspaceTaskTypedExpressionsToHclTerraform(struct?: DataintegrationWorkspaceTaskTypedExpressions | cdktf.IResolvable): any {
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
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_type: {
      value: cdktf.stringToHclTerraform(struct!.modelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_version: {
      value: cdktf.stringToHclTerraform(struct!.modelVersion),
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
    object_status: {
      value: cdktf.numberToHclTerraform(struct!.objectStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_values: {
      value: dataintegrationWorkspaceTaskTypedExpressionsConfigValuesToHclTerraform(struct!.configValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsConfigValuesList",
    },
    parent_ref: {
      value: dataintegrationWorkspaceTaskTypedExpressionsParentRefToHclTerraform(struct!.parentRef),
      isBlock: true,
      type: "list",
      storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsParentRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataintegrationWorkspaceTaskTypedExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataintegrationWorkspaceTaskTypedExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._modelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelType = this._modelType;
    }
    if (this._modelVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelVersion = this._modelVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStatus = this._objectStatus;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._configValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configValues = this._configValues?.internalValue;
    }
    if (this._parentRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRef = this._parentRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataintegrationWorkspaceTaskTypedExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._expression = undefined;
      this._key = undefined;
      this._modelType = undefined;
      this._modelVersion = undefined;
      this._name = undefined;
      this._objectStatus = undefined;
      this._type = undefined;
      this._configValues.internalValue = undefined;
      this._parentRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._expression = value.expression;
      this._key = value.key;
      this._modelType = value.modelType;
      this._modelVersion = value.modelVersion;
      this._name = value.name;
      this._objectStatus = value.objectStatus;
      this._type = value.type;
      this._configValues.internalValue = value.configValues;
      this._parentRef.internalValue = value.parentRef;
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

  // expression - computed: true, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // model_type - computed: true, optional: true, required: false
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  public resetModelType() {
    this._modelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // name - computed: true, optional: true, required: false
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

  // config_values - computed: false, optional: true, required: false
  private _configValues = new DataintegrationWorkspaceTaskTypedExpressionsConfigValuesOutputReference(this, "config_values");
  public get configValues() {
    return this._configValues;
  }
  public putConfigValues(value: DataintegrationWorkspaceTaskTypedExpressionsConfigValues) {
    this._configValues.internalValue = value;
  }
  public resetConfigValues() {
    this._configValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configValuesInput() {
    return this._configValues.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskTypedExpressionsParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskTypedExpressionsParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }
}

export class DataintegrationWorkspaceTaskTypedExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataintegrationWorkspaceTaskTypedExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataintegrationWorkspaceTaskTypedExpressionsOutputReference {
    return new DataintegrationWorkspaceTaskTypedExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task oci_dataintegration_workspace_task}
*/
export class DataintegrationWorkspaceTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataintegrationWorkspaceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataintegrationWorkspaceTask to import
  * @param importFromId The id of the existing DataintegrationWorkspaceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataintegrationWorkspaceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/dataintegration_workspace_task oci_dataintegration_workspace_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataintegrationWorkspaceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataintegrationWorkspaceTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_task',
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
    this._apiCallMode = config.apiCallMode;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._isSingleLoad = config.isSingleLoad;
    this._key = config.key;
    this._modelType = config.modelType;
    this._modelVersion = config.modelVersion;
    this._name = config.name;
    this._objectStatus = config.objectStatus;
    this._operation = config.operation;
    this._parallelLoadLimit = config.parallelLoadLimit;
    this._workspaceId = config.workspaceId;
    this._authConfig.internalValue = config.authConfig;
    this._cancelRestCallConfig.internalValue = config.cancelRestCallConfig;
    this._configProviderDelegate.internalValue = config.configProviderDelegate;
    this._executeRestCallConfig.internalValue = config.executeRestCallConfig;
    this._inputPorts.internalValue = config.inputPorts;
    this._opConfigValues.internalValue = config.opConfigValues;
    this._outputPorts.internalValue = config.outputPorts;
    this._parameters.internalValue = config.parameters;
    this._parentRef.internalValue = config.parentRef;
    this._pollRestCallConfig.internalValue = config.pollRestCallConfig;
    this._registryMetadata.internalValue = config.registryMetadata;
    this._timeouts.internalValue = config.timeouts;
    this._typedExpressions.internalValue = config.typedExpressions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_call_mode - computed: true, optional: true, required: false
  private _apiCallMode?: string; 
  public get apiCallMode() {
    return this.getStringAttribute('api_call_mode');
  }
  public set apiCallMode(value: string) {
    this._apiCallMode = value;
  }
  public resetApiCallMode() {
    this._apiCallMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiCallModeInput() {
    return this._apiCallMode;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // is_single_load - computed: true, optional: true, required: false
  private _isSingleLoad?: boolean | cdktf.IResolvable; 
  public get isSingleLoad() {
    return this.getBooleanAttribute('is_single_load');
  }
  public set isSingleLoad(value: boolean | cdktf.IResolvable) {
    this._isSingleLoad = value;
  }
  public resetIsSingleLoad() {
    this._isSingleLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSingleLoadInput() {
    return this._isSingleLoad;
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
  private _metadata = new DataintegrationWorkspaceTaskMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // model_type - computed: false, optional: false, required: true
  private _modelType?: string; 
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
  public set modelType(value: string) {
    this._modelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelTypeInput() {
    return this._modelType;
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

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // parallel_load_limit - computed: true, optional: true, required: false
  private _parallelLoadLimit?: number; 
  public get parallelLoadLimit() {
    return this.getNumberAttribute('parallel_load_limit');
  }
  public set parallelLoadLimit(value: number) {
    this._parallelLoadLimit = value;
  }
  public resetParallelLoadLimit() {
    this._parallelLoadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelLoadLimitInput() {
    return this._parallelLoadLimit;
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

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new DataintegrationWorkspaceTaskAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: DataintegrationWorkspaceTaskAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // cancel_rest_call_config - computed: false, optional: true, required: false
  private _cancelRestCallConfig = new DataintegrationWorkspaceTaskCancelRestCallConfigOutputReference(this, "cancel_rest_call_config");
  public get cancelRestCallConfig() {
    return this._cancelRestCallConfig;
  }
  public putCancelRestCallConfig(value: DataintegrationWorkspaceTaskCancelRestCallConfig) {
    this._cancelRestCallConfig.internalValue = value;
  }
  public resetCancelRestCallConfig() {
    this._cancelRestCallConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelRestCallConfigInput() {
    return this._cancelRestCallConfig.internalValue;
  }

  // config_provider_delegate - computed: false, optional: true, required: false
  private _configProviderDelegate = new DataintegrationWorkspaceTaskConfigProviderDelegateOutputReference(this, "config_provider_delegate");
  public get configProviderDelegate() {
    return this._configProviderDelegate;
  }
  public putConfigProviderDelegate(value: DataintegrationWorkspaceTaskConfigProviderDelegate) {
    this._configProviderDelegate.internalValue = value;
  }
  public resetConfigProviderDelegate() {
    this._configProviderDelegate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configProviderDelegateInput() {
    return this._configProviderDelegate.internalValue;
  }

  // execute_rest_call_config - computed: false, optional: true, required: false
  private _executeRestCallConfig = new DataintegrationWorkspaceTaskExecuteRestCallConfigOutputReference(this, "execute_rest_call_config");
  public get executeRestCallConfig() {
    return this._executeRestCallConfig;
  }
  public putExecuteRestCallConfig(value: DataintegrationWorkspaceTaskExecuteRestCallConfig) {
    this._executeRestCallConfig.internalValue = value;
  }
  public resetExecuteRestCallConfig() {
    this._executeRestCallConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeRestCallConfigInput() {
    return this._executeRestCallConfig.internalValue;
  }

  // input_ports - computed: false, optional: true, required: false
  private _inputPorts = new DataintegrationWorkspaceTaskInputPortsList(this, "input_ports", false);
  public get inputPorts() {
    return this._inputPorts;
  }
  public putInputPorts(value: DataintegrationWorkspaceTaskInputPorts[] | cdktf.IResolvable) {
    this._inputPorts.internalValue = value;
  }
  public resetInputPorts() {
    this._inputPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPortsInput() {
    return this._inputPorts.internalValue;
  }

  // op_config_values - computed: false, optional: true, required: false
  private _opConfigValues = new DataintegrationWorkspaceTaskOpConfigValuesOutputReference(this, "op_config_values");
  public get opConfigValues() {
    return this._opConfigValues;
  }
  public putOpConfigValues(value: DataintegrationWorkspaceTaskOpConfigValues) {
    this._opConfigValues.internalValue = value;
  }
  public resetOpConfigValues() {
    this._opConfigValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opConfigValuesInput() {
    return this._opConfigValues.internalValue;
  }

  // output_ports - computed: false, optional: true, required: false
  private _outputPorts = new DataintegrationWorkspaceTaskOutputPortsList(this, "output_ports", false);
  public get outputPorts() {
    return this._outputPorts;
  }
  public putOutputPorts(value: DataintegrationWorkspaceTaskOutputPorts[] | cdktf.IResolvable) {
    this._outputPorts.internalValue = value;
  }
  public resetOutputPorts() {
    this._outputPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortsInput() {
    return this._outputPorts.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataintegrationWorkspaceTaskParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataintegrationWorkspaceTaskParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // parent_ref - computed: false, optional: true, required: false
  private _parentRef = new DataintegrationWorkspaceTaskParentRefOutputReference(this, "parent_ref");
  public get parentRef() {
    return this._parentRef;
  }
  public putParentRef(value: DataintegrationWorkspaceTaskParentRef) {
    this._parentRef.internalValue = value;
  }
  public resetParentRef() {
    this._parentRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRefInput() {
    return this._parentRef.internalValue;
  }

  // poll_rest_call_config - computed: false, optional: true, required: false
  private _pollRestCallConfig = new DataintegrationWorkspaceTaskPollRestCallConfigOutputReference(this, "poll_rest_call_config");
  public get pollRestCallConfig() {
    return this._pollRestCallConfig;
  }
  public putPollRestCallConfig(value: DataintegrationWorkspaceTaskPollRestCallConfig) {
    this._pollRestCallConfig.internalValue = value;
  }
  public resetPollRestCallConfig() {
    this._pollRestCallConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollRestCallConfigInput() {
    return this._pollRestCallConfig.internalValue;
  }

  // registry_metadata - computed: false, optional: false, required: true
  private _registryMetadata = new DataintegrationWorkspaceTaskRegistryMetadataOutputReference(this, "registry_metadata");
  public get registryMetadata() {
    return this._registryMetadata;
  }
  public putRegistryMetadata(value: DataintegrationWorkspaceTaskRegistryMetadata) {
    this._registryMetadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMetadataInput() {
    return this._registryMetadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataintegrationWorkspaceTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataintegrationWorkspaceTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // typed_expressions - computed: false, optional: true, required: false
  private _typedExpressions = new DataintegrationWorkspaceTaskTypedExpressionsList(this, "typed_expressions", false);
  public get typedExpressions() {
    return this._typedExpressions;
  }
  public putTypedExpressions(value: DataintegrationWorkspaceTaskTypedExpressions[] | cdktf.IResolvable) {
    this._typedExpressions.internalValue = value;
  }
  public resetTypedExpressions() {
    this._typedExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typedExpressionsInput() {
    return this._typedExpressions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_call_mode: cdktf.stringToTerraform(this._apiCallMode),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      is_single_load: cdktf.booleanToTerraform(this._isSingleLoad),
      key: cdktf.stringToTerraform(this._key),
      model_type: cdktf.stringToTerraform(this._modelType),
      model_version: cdktf.stringToTerraform(this._modelVersion),
      name: cdktf.stringToTerraform(this._name),
      object_status: cdktf.numberToTerraform(this._objectStatus),
      operation: cdktf.stringToTerraform(this._operation),
      parallel_load_limit: cdktf.numberToTerraform(this._parallelLoadLimit),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      auth_config: dataintegrationWorkspaceTaskAuthConfigToTerraform(this._authConfig.internalValue),
      cancel_rest_call_config: dataintegrationWorkspaceTaskCancelRestCallConfigToTerraform(this._cancelRestCallConfig.internalValue),
      config_provider_delegate: dataintegrationWorkspaceTaskConfigProviderDelegateToTerraform(this._configProviderDelegate.internalValue),
      execute_rest_call_config: dataintegrationWorkspaceTaskExecuteRestCallConfigToTerraform(this._executeRestCallConfig.internalValue),
      input_ports: cdktf.listMapper(dataintegrationWorkspaceTaskInputPortsToTerraform, true)(this._inputPorts.internalValue),
      op_config_values: dataintegrationWorkspaceTaskOpConfigValuesToTerraform(this._opConfigValues.internalValue),
      output_ports: cdktf.listMapper(dataintegrationWorkspaceTaskOutputPortsToTerraform, true)(this._outputPorts.internalValue),
      parameters: cdktf.listMapper(dataintegrationWorkspaceTaskParametersToTerraform, true)(this._parameters.internalValue),
      parent_ref: dataintegrationWorkspaceTaskParentRefToTerraform(this._parentRef.internalValue),
      poll_rest_call_config: dataintegrationWorkspaceTaskPollRestCallConfigToTerraform(this._pollRestCallConfig.internalValue),
      registry_metadata: dataintegrationWorkspaceTaskRegistryMetadataToTerraform(this._registryMetadata.internalValue),
      timeouts: dataintegrationWorkspaceTaskTimeoutsToTerraform(this._timeouts.internalValue),
      typed_expressions: cdktf.listMapper(dataintegrationWorkspaceTaskTypedExpressionsToTerraform, true)(this._typedExpressions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_call_mode: {
        value: cdktf.stringToHclTerraform(this._apiCallMode),
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
      is_single_load: {
        value: cdktf.booleanToHclTerraform(this._isSingleLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_type: {
        value: cdktf.stringToHclTerraform(this._modelType),
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
      object_status: {
        value: cdktf.numberToHclTerraform(this._objectStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      operation: {
        value: cdktf.stringToHclTerraform(this._operation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallel_load_limit: {
        value: cdktf.numberToHclTerraform(this._parallelLoadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: dataintegrationWorkspaceTaskAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskAuthConfigList",
      },
      cancel_rest_call_config: {
        value: dataintegrationWorkspaceTaskCancelRestCallConfigToHclTerraform(this._cancelRestCallConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskCancelRestCallConfigList",
      },
      config_provider_delegate: {
        value: dataintegrationWorkspaceTaskConfigProviderDelegateToHclTerraform(this._configProviderDelegate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskConfigProviderDelegateList",
      },
      execute_rest_call_config: {
        value: dataintegrationWorkspaceTaskExecuteRestCallConfigToHclTerraform(this._executeRestCallConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskExecuteRestCallConfigList",
      },
      input_ports: {
        value: cdktf.listMapperHcl(dataintegrationWorkspaceTaskInputPortsToHclTerraform, true)(this._inputPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskInputPortsList",
      },
      op_config_values: {
        value: dataintegrationWorkspaceTaskOpConfigValuesToHclTerraform(this._opConfigValues.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskOpConfigValuesList",
      },
      output_ports: {
        value: cdktf.listMapperHcl(dataintegrationWorkspaceTaskOutputPortsToHclTerraform, true)(this._outputPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskOutputPortsList",
      },
      parameters: {
        value: cdktf.listMapperHcl(dataintegrationWorkspaceTaskParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskParametersList",
      },
      parent_ref: {
        value: dataintegrationWorkspaceTaskParentRefToHclTerraform(this._parentRef.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskParentRefList",
      },
      poll_rest_call_config: {
        value: dataintegrationWorkspaceTaskPollRestCallConfigToHclTerraform(this._pollRestCallConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskPollRestCallConfigList",
      },
      registry_metadata: {
        value: dataintegrationWorkspaceTaskRegistryMetadataToHclTerraform(this._registryMetadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskRegistryMetadataList",
      },
      timeouts: {
        value: dataintegrationWorkspaceTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataintegrationWorkspaceTaskTimeouts",
      },
      typed_expressions: {
        value: cdktf.listMapperHcl(dataintegrationWorkspaceTaskTypedExpressionsToHclTerraform, true)(this._typedExpressions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataintegrationWorkspaceTaskTypedExpressionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
