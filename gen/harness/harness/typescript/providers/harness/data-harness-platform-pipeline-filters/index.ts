// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformPipelineFiltersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#id DataHarnessPlatformPipelineFilters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#identifier DataHarnessPlatformPipelineFilters#identifier}
  */
  readonly identifier: string;
  /**
  * Organization Identifier for the Entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#org_id DataHarnessPlatformPipelineFilters#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier for the Entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#project_id DataHarnessPlatformPipelineFilters#project_id}
  */
  readonly projectId?: string;
  /**
  * Type of filter. Currently supported types are {PipelineSetup, PipelineExecution, Deployment, Template, EnvironmentGroup, Environment}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#type DataHarnessPlatformPipelineFilters#type}
  */
  readonly type: string;
}
export interface DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCd {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artifact_display_names - computed: true, optional: false, required: false
  public get artifactDisplayNames() {
    return cdktf.Fn.tolist(this.getListAttribute('artifact_display_names'));
  }

  // deployment_types - computed: true, optional: false, required: false
  public get deploymentTypes() {
    return this.getStringAttribute('deployment_types');
  }

  // environment_names - computed: true, optional: false, required: false
  public get environmentNames() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_names'));
  }

  // service_identifiers - computed: true, optional: false, required: false
  public get serviceIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('service_identifiers'));
  }

  // service_names - computed: true, optional: false, required: false
  public get serviceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('service_names'));
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // source_branch - computed: true, optional: false, required: false
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }

  // target_branch - computed: true, optional: false, required: false
  public get targetBranch() {
    return this.getStringAttribute('target_branch');
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event - computed: true, optional: false, required: false
  public get event() {
    return this.getStringAttribute('event');
  }

  // pull_request - computed: true, optional: false, required: false
  private _pullRequest = new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestList(this, "pull_request", false);
  public get pullRequest() {
    return this._pullRequest;
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCi {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // build_type - computed: true, optional: false, required: false
  public get buildType() {
    return this.getStringAttribute('build_type');
  }

  // ci_execution_info - computed: true, optional: false, required: false
  private _ciExecutionInfo = new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoList(this, "ci_execution_info", false);
  public get ciExecutionInfo() {
    return this._ciExecutionInfo;
  }

  // repo_names - computed: true, optional: false, required: false
  public get repoNames() {
    return this.getStringAttribute('repo_names');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineFiltersFilterPropertiesModuleProperties {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModuleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterPropertiesModuleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterPropertiesModuleProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterPropertiesModuleProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cd - computed: true, optional: false, required: false
  private _cd = new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCdList(this, "cd", false);
  public get cd() {
    return this._cd;
  }

  // ci - computed: true, optional: false, required: false
  private _ci = new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesCiList(this, "ci", false);
  public get ci() {
    return this._ci;
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformPipelineFiltersFilterProperties {
}

export function dataHarnessPlatformPipelineFiltersFilterPropertiesToTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformPipelineFiltersFilterPropertiesToHclTerraform(struct?: DataHarnessPlatformPipelineFiltersFilterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformPipelineFiltersFilterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformPipelineFiltersFilterProperties | undefined) {
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

  // filter_type - computed: true, optional: false, required: false
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }

  // module_properties - computed: true, optional: false, required: false
  private _moduleProperties = new DataHarnessPlatformPipelineFiltersFilterPropertiesModulePropertiesList(this, "module_properties", false);
  public get moduleProperties() {
    return this._moduleProperties;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_identifiers - computed: true, optional: false, required: false
  public get pipelineIdentifiers() {
    return this.getListAttribute('pipeline_identifiers');
  }

  // pipeline_tags - computed: true, optional: false, required: false
  private _pipelineTags = new cdktf.StringMapList(this, "pipeline_tags", false);
  public get pipelineTags() {
    return this._pipelineTags;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
}

export class DataHarnessPlatformPipelineFiltersFilterPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformPipelineFiltersFilterPropertiesOutputReference {
    return new DataHarnessPlatformPipelineFiltersFilterPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters harness_platform_pipeline_filters}
*/
export class DataHarnessPlatformPipelineFilters extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_pipeline_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformPipelineFilters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformPipelineFilters to import
  * @param importFromId The id of the existing DataHarnessPlatformPipelineFilters that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformPipelineFilters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_pipeline_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/data-sources/platform_pipeline_filters harness_platform_pipeline_filters} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformPipelineFiltersConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformPipelineFiltersConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_pipeline_filters',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
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
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_properties - computed: true, optional: false, required: false
  private _filterProperties = new DataHarnessPlatformPipelineFiltersFilterPropertiesList(this, "filter_properties", false);
  public get filterProperties() {
    return this._filterProperties;
  }

  // filter_visibility - computed: true, optional: false, required: false
  public get filterVisibility() {
    return this.getStringAttribute('filter_visibility');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
