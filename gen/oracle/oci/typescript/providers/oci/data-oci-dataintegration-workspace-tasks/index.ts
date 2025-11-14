// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataintegrationWorkspaceTasksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#fields DataOciDataintegrationWorkspaceTasks#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#folder_id DataOciDataintegrationWorkspaceTasks#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#id DataOciDataintegrationWorkspaceTasks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#identifier DataOciDataintegrationWorkspaceTasks#identifier}
  */
  readonly identifier?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#key DataOciDataintegrationWorkspaceTasks#key}
  */
  readonly key?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#name DataOciDataintegrationWorkspaceTasks#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#type DataOciDataintegrationWorkspaceTasks#type}
  */
  readonly type?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#workspace_id DataOciDataintegrationWorkspaceTasks#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#filter DataOciDataintegrationWorkspaceTasks#filter}
  */
  readonly filter?: DataOciDataintegrationWorkspaceTasksFilter[] | cdktf.IResolvable;
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfig {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // resource_principal_source - computed: true, optional: false, required: false
  public get resourcePrincipalSource() {
    return this.getStringAttribute('resource_principal_source');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_param - computed: true, optional: false, required: false
  private _dataParam = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList(this, "data_param", false);
  public get dataParam() {
    return this._dataParam;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_payload - computed: true, optional: false, required: false
  private _requestPayload = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestPayloadList(this, "request_payload", false);
  public get requestPayload() {
    return this._requestPayload;
  }

  // request_url - computed: true, optional: false, required: false
  private _requestUrl = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfig {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // method_type - computed: true, optional: false, required: false
  public get methodType() {
    return this.getStringAttribute('method_type');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new cdktf.StringMap(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // root_object_value - computed: true, optional: false, required: false
  private _rootObjectValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesRootObjectValueList(this, "root_object_value", false);
  public get rootObjectValue() {
    return this._rootObjectValue;
  }

  // simple_value - computed: true, optional: false, required: false
  public get simpleValue() {
    return this.getStringAttribute('simple_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindings {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // parameter_values - computed: true, optional: false, required: false
  private _parameterValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsParameterValuesList(this, "parameter_values", false);
  public get parameterValues() {
    return this._parameterValues;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegate {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bindings - computed: true, optional: false, required: false
  private _bindings = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateBindingsList(this, "bindings", false);
  public get bindings() {
    return this._bindings;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_param - computed: true, optional: false, required: false
  private _dataParam = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList(this, "data_param", false);
  public get dataParam() {
    return this._dataParam;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // request_payload - computed: true, optional: false, required: false
  private _requestPayload = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestPayloadList(this, "request_payload", false);
  public get requestPayload() {
    return this._requestPayload;
  }

  // request_url - computed: true, optional: false, required: false
  private _requestUrl = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfig {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // method_type - computed: true, optional: false, required: false
  public get methodType() {
    return this.getStringAttribute('method_type');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new cdktf.StringMap(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }

  // root_object_value - computed: true, optional: false, required: false
  public get rootObjectValue() {
    return this.getStringAttribute('root_object_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPorts {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return this.getListAttribute('fields');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregator {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregator | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatistics {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_type_count_list - computed: true, optional: false, required: false
  private _objectTypeCountList = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(this, "object_type_count_list", false);
  public get objectTypeCountList() {
    return this._objectTypeCountList;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadata {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aggregator - computed: true, optional: false, required: false
  private _aggregator = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataAggregatorList(this, "aggregator", false);
  public get aggregator() {
    return this._aggregator;
  }

  // aggregator_key - computed: true, optional: false, required: false
  public get aggregatorKey() {
    return this.getStringAttribute('aggregator_key');
  }

  // count_statistics - computed: true, optional: false, required: false
  private _countStatistics = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataCountStatisticsList(this, "count_statistics", false);
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }

  // root_object_value - computed: true, optional: false, required: false
  private _rootObjectValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueRootObjectValueList(this, "root_object_value", false);
  public get rootObjectValue() {
    return this._rootObjectValue;
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_value - computed: true, optional: false, required: false
  private _configParamValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesConfigParamValueList(this, "config_param_value", false);
  public get configParamValue() {
    return this._configParamValue;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  public get refValue() {
    return this.getStringAttribute('ref_value');
  }

  // root_object_value - computed: true, optional: false, required: false
  public get rootObjectValue() {
    return this.getStringAttribute('root_object_value');
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPorts {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // fields - computed: true, optional: false, required: false
  public get fields() {
    return this.getListAttribute('fields');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // port_type - computed: true, optional: false, required: false
  public get portType() {
    return this.getStringAttribute('port_type');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // model_version - computed: true, optional: false, required: false
  public get modelVersion() {
    return this.getStringAttribute('model_version');
  }

  // object_status - computed: true, optional: false, required: false
  public get objectStatus() {
    return this.getNumberAttribute('object_status');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getStringAttribute('object_value');
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }

  // root_object_value - computed: true, optional: false, required: false
  private _rootObjectValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueRootObjectValueList(this, "root_object_value", false);
  public get rootObjectValue() {
    return this._rootObjectValue;
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_value - computed: true, optional: false, required: false
  private _configParamValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesConfigParamValueList(this, "config_param_value", false);
  public get configParamValue() {
    return this._configParamValue;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParameters {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // is_input - computed: true, optional: false, required: false
  public get isInput() {
    return this.getBooleanAttribute('is_input');
  }

  // is_output - computed: true, optional: false, required: false
  public get isOutput() {
    return this.getBooleanAttribute('is_output');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // output_aggregation_type - computed: true, optional: false, required: false
  public get outputAggregationType() {
    return this.getStringAttribute('output_aggregation_type');
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // root_object_default_value - computed: true, optional: false, required: false
  public get rootObjectDefaultValue() {
    return this.getStringAttribute('root_object_default_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_name - computed: true, optional: false, required: false
  public get typeName() {
    return this.getStringAttribute('type_name');
  }

  // used_for - computed: true, optional: false, required: false
  public get usedFor() {
    return this.getStringAttribute('used_for');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expr_string - computed: true, optional: false, required: false
  public get exprString() {
    return this.getStringAttribute('expr_string');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollCondition {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollInterval {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollInterval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollInterval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollInterval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getNumberAttribute('object_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_value - computed: true, optional: false, required: false
  public get objectValue() {
    return this.getNumberAttribute('object_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_param - computed: true, optional: false, required: false
  private _dataParam = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesDataParamList(this, "data_param", false);
  public get dataParam() {
    return this._dataParam;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayload {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // parameter_value - computed: true, optional: false, required: false
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }

  // ref_value - computed: true, optional: false, required: false
  private _refValue = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadRefValueList(this, "ref_value", false);
  public get refValue() {
    return this._refValue;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrl {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // string_value - computed: true, optional: false, required: false
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // poll_condition - computed: true, optional: false, required: false
  private _pollCondition = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollConditionList(this, "poll_condition", false);
  public get pollCondition() {
    return this._pollCondition;
  }

  // poll_interval - computed: true, optional: false, required: false
  private _pollInterval = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalList(this, "poll_interval", false);
  public get pollInterval() {
    return this._pollInterval;
  }

  // poll_interval_unit - computed: true, optional: false, required: false
  private _pollIntervalUnit = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollIntervalUnitList(this, "poll_interval_unit", false);
  public get pollIntervalUnit() {
    return this._pollIntervalUnit;
  }

  // poll_max_duration - computed: true, optional: false, required: false
  private _pollMaxDuration = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationList(this, "poll_max_duration", false);
  public get pollMaxDuration() {
    return this._pollMaxDuration;
  }

  // poll_max_duration_unit - computed: true, optional: false, required: false
  private _pollMaxDurationUnit = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesPollMaxDurationUnitList(this, "poll_max_duration_unit", false);
  public get pollMaxDurationUnit() {
    return this._pollMaxDurationUnit;
  }

  // request_payload - computed: true, optional: false, required: false
  private _requestPayload = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestPayloadList(this, "request_payload", false);
  public get requestPayload() {
    return this._requestPayload;
  }

  // request_url - computed: true, optional: false, required: false
  private _requestUrl = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesRequestUrlList(this, "request_url", false);
  public get requestUrl() {
    return this._requestUrl;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfig {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // method_type - computed: true, optional: false, required: false
  public get methodType() {
    return this.getStringAttribute('method_type');
  }

  // model_type - computed: true, optional: false, required: false
  public get modelType() {
    return this.getStringAttribute('model_type');
  }

  // request_headers - computed: true, optional: false, required: false
  private _requestHeaders = new cdktf.StringMap(this, "request_headers");
  public get requestHeaders() {
    return this._requestHeaders;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadata {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadata | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLength {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLength): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLength | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLength | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScale {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScale): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScale | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScale | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // int_value - computed: true, optional: false, required: false
  public get intValue() {
    return this.getNumberAttribute('int_value');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // length - computed: true, optional: false, required: false
  private _length = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesLengthList(this, "length", false);
  public get length() {
    return this._length;
  }

  // scale - computed: true, optional: false, required: false
  private _scale = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesScaleList(this, "scale", false);
  public get scale() {
    return this._scale;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValues {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_param_values - computed: true, optional: false, required: false
  private _configParamValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesConfigParamValuesList(this, "config_param_values", false);
  public get configParamValues() {
    return this._configParamValues;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRef {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRef | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressions {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_values - computed: true, optional: false, required: false
  private _configValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsConfigValuesList(this, "config_values", false);
  public get configValues() {
    return this._configValues;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expression - computed: true, optional: false, required: false
  public get expression() {
    return this.getStringAttribute('expression');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItems {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_call_mode - computed: true, optional: false, required: false
  public get apiCallMode() {
    return this.getStringAttribute('api_call_mode');
  }

  // auth_config - computed: true, optional: false, required: false
  private _authConfig = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsAuthConfigList(this, "auth_config", false);
  public get authConfig() {
    return this._authConfig;
  }

  // cancel_rest_call_config - computed: true, optional: false, required: false
  private _cancelRestCallConfig = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsCancelRestCallConfigList(this, "cancel_rest_call_config", false);
  public get cancelRestCallConfig() {
    return this._cancelRestCallConfig;
  }

  // config_provider_delegate - computed: true, optional: false, required: false
  private _configProviderDelegate = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsConfigProviderDelegateList(this, "config_provider_delegate", false);
  public get configProviderDelegate() {
    return this._configProviderDelegate;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // execute_rest_call_config - computed: true, optional: false, required: false
  private _executeRestCallConfig = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsExecuteRestCallConfigList(this, "execute_rest_call_config", false);
  public get executeRestCallConfig() {
    return this._executeRestCallConfig;
  }

  // identifier - computed: true, optional: false, required: false
  public get identifier() {
    return this.getStringAttribute('identifier');
  }

  // input_ports - computed: true, optional: false, required: false
  private _inputPorts = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsInputPortsList(this, "input_ports", false);
  public get inputPorts() {
    return this._inputPorts;
  }

  // is_single_load - computed: true, optional: false, required: false
  public get isSingleLoad() {
    return this.getBooleanAttribute('is_single_load');
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
  private _metadata = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsMetadataList(this, "metadata", false);
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

  // op_config_values - computed: true, optional: false, required: false
  private _opConfigValues = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOpConfigValuesList(this, "op_config_values", false);
  public get opConfigValues() {
    return this._opConfigValues;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // output_ports - computed: true, optional: false, required: false
  private _outputPorts = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputPortsList(this, "output_ports", false);
  public get outputPorts() {
    return this._outputPorts;
  }

  // parallel_load_limit - computed: true, optional: false, required: false
  public get parallelLoadLimit() {
    return this.getNumberAttribute('parallel_load_limit');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // parent_ref - computed: true, optional: false, required: false
  private _parentRef = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsParentRefList(this, "parent_ref", false);
  public get parentRef() {
    return this._parentRef;
  }

  // poll_rest_call_config - computed: true, optional: false, required: false
  private _pollRestCallConfig = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsPollRestCallConfigList(this, "poll_rest_call_config", false);
  public get pollRestCallConfig() {
    return this._pollRestCallConfig;
  }

  // registry_metadata - computed: true, optional: false, required: false
  private _registryMetadata = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsRegistryMetadataList(this, "registry_metadata", false);
  public get registryMetadata() {
    return this._registryMetadata;
  }

  // typed_expressions - computed: true, optional: false, required: false
  private _typedExpressions = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsTypedExpressionsList(this, "typed_expressions", false);
  public get typedExpressions() {
    return this._typedExpressions;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksTaskSummaryCollection {
}

export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionToTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataintegrationWorkspaceTasksTaskSummaryCollectionToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksTaskSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksTaskSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksTaskSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionOutputReference {
    return new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataintegrationWorkspaceTasksFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#name DataOciDataintegrationWorkspaceTasks#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#regex DataOciDataintegrationWorkspaceTasks#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#values DataOciDataintegrationWorkspaceTasks#values}
  */
  readonly values: string[];
}

export function dataOciDataintegrationWorkspaceTasksFilterToTerraform(struct?: DataOciDataintegrationWorkspaceTasksFilter | cdktf.IResolvable): any {
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


export function dataOciDataintegrationWorkspaceTasksFilterToHclTerraform(struct?: DataOciDataintegrationWorkspaceTasksFilter | cdktf.IResolvable): any {
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

export class DataOciDataintegrationWorkspaceTasksFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataintegrationWorkspaceTasksFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDataintegrationWorkspaceTasksFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDataintegrationWorkspaceTasksFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataintegrationWorkspaceTasksFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataintegrationWorkspaceTasksFilterOutputReference {
    return new DataOciDataintegrationWorkspaceTasksFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks oci_dataintegration_workspace_tasks}
*/
export class DataOciDataintegrationWorkspaceTasks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_dataintegration_workspace_tasks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataintegrationWorkspaceTasks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataintegrationWorkspaceTasks to import
  * @param importFromId The id of the existing DataOciDataintegrationWorkspaceTasks that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataintegrationWorkspaceTasks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_dataintegration_workspace_tasks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/dataintegration_workspace_tasks oci_dataintegration_workspace_tasks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataintegrationWorkspaceTasksConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataintegrationWorkspaceTasksConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_dataintegration_workspace_tasks',
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
    this._fields = config.fields;
    this._folderId = config.folderId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._key = config.key;
    this._name = config.name;
    this._type = config.type;
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

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // key - computed: false, optional: true, required: false
  private _key?: string[]; 
  public get key() {
    return this.getListAttribute('key');
  }
  public set key(value: string[]) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // task_summary_collection - computed: true, optional: false, required: false
  private _taskSummaryCollection = new DataOciDataintegrationWorkspaceTasksTaskSummaryCollectionList(this, "task_summary_collection", false);
  public get taskSummaryCollection() {
    return this._taskSummaryCollection;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string[]; 
  public get type() {
    return this.getListAttribute('type');
  }
  public set type(value: string[]) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
  private _filter = new DataOciDataintegrationWorkspaceTasksFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataintegrationWorkspaceTasksFilter[] | cdktf.IResolvable) {
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
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identifier),
      key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._key),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.listMapper(cdktf.stringToTerraform, false)(this._type),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      filter: cdktf.listMapper(dataOciDataintegrationWorkspaceTasksFilterToTerraform, true)(this._filter.internalValue),
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
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identifier),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._key),
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
      type: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._type),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataintegrationWorkspaceTasksFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataintegrationWorkspaceTasksFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
