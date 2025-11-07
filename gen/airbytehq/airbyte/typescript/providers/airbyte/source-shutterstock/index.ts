// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceShutterstockConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#configuration SourceShutterstock#configuration}
  */
  readonly configuration: SourceShutterstockConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#definition_id SourceShutterstock#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#name SourceShutterstock#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#secret_id SourceShutterstock#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#workspace_id SourceShutterstock#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceShutterstockConfiguration {
  /**
  * Your OAuth 2.0 token for accessing the Shutterstock API. Obtain this token from your Shutterstock developer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#api_token SourceShutterstock#api_token}
  */
  readonly apiToken: string;
  /**
  * The query for image search. Default: "mountain"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#query_for_audio_search SourceShutterstock#query_for_audio_search}
  */
  readonly queryForAudioSearch?: string;
  /**
  * The query for catalog search. Default: "mountain"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#query_for_catalog_search SourceShutterstock#query_for_catalog_search}
  */
  readonly queryForCatalogSearch?: string;
  /**
  * The query for image search. Default: "mountain"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#query_for_image_search SourceShutterstock#query_for_image_search}
  */
  readonly queryForImageSearch?: string;
  /**
  * The Query for `videos_search` stream. Default: "mountain"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#query_for_video_search SourceShutterstock#query_for_video_search}
  */
  readonly queryForVideoSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#start_date SourceShutterstock#start_date}
  */
  readonly startDate: string;
}

export function sourceShutterstockConfigurationToTerraform(struct?: SourceShutterstockConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    query_for_audio_search: cdktf.stringToTerraform(struct!.queryForAudioSearch),
    query_for_catalog_search: cdktf.stringToTerraform(struct!.queryForCatalogSearch),
    query_for_image_search: cdktf.stringToTerraform(struct!.queryForImageSearch),
    query_for_video_search: cdktf.stringToTerraform(struct!.queryForVideoSearch),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function sourceShutterstockConfigurationToHclTerraform(struct?: SourceShutterstockConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_for_audio_search: {
      value: cdktf.stringToHclTerraform(struct!.queryForAudioSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_for_catalog_search: {
      value: cdktf.stringToHclTerraform(struct!.queryForCatalogSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_for_image_search: {
      value: cdktf.stringToHclTerraform(struct!.queryForImageSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_for_video_search: {
      value: cdktf.stringToHclTerraform(struct!.queryForVideoSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceShutterstockConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShutterstockConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._queryForAudioSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryForAudioSearch = this._queryForAudioSearch;
    }
    if (this._queryForCatalogSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryForCatalogSearch = this._queryForCatalogSearch;
    }
    if (this._queryForImageSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryForImageSearch = this._queryForImageSearch;
    }
    if (this._queryForVideoSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryForVideoSearch = this._queryForVideoSearch;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShutterstockConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiToken = undefined;
      this._queryForAudioSearch = undefined;
      this._queryForCatalogSearch = undefined;
      this._queryForImageSearch = undefined;
      this._queryForVideoSearch = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiToken = value.apiToken;
      this._queryForAudioSearch = value.queryForAudioSearch;
      this._queryForCatalogSearch = value.queryForCatalogSearch;
      this._queryForImageSearch = value.queryForImageSearch;
      this._queryForVideoSearch = value.queryForVideoSearch;
      this._startDate = value.startDate;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // query_for_audio_search - computed: true, optional: true, required: false
  private _queryForAudioSearch?: string; 
  public get queryForAudioSearch() {
    return this.getStringAttribute('query_for_audio_search');
  }
  public set queryForAudioSearch(value: string) {
    this._queryForAudioSearch = value;
  }
  public resetQueryForAudioSearch() {
    this._queryForAudioSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForAudioSearchInput() {
    return this._queryForAudioSearch;
  }

  // query_for_catalog_search - computed: true, optional: true, required: false
  private _queryForCatalogSearch?: string; 
  public get queryForCatalogSearch() {
    return this.getStringAttribute('query_for_catalog_search');
  }
  public set queryForCatalogSearch(value: string) {
    this._queryForCatalogSearch = value;
  }
  public resetQueryForCatalogSearch() {
    this._queryForCatalogSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForCatalogSearchInput() {
    return this._queryForCatalogSearch;
  }

  // query_for_image_search - computed: true, optional: true, required: false
  private _queryForImageSearch?: string; 
  public get queryForImageSearch() {
    return this.getStringAttribute('query_for_image_search');
  }
  public set queryForImageSearch(value: string) {
    this._queryForImageSearch = value;
  }
  public resetQueryForImageSearch() {
    this._queryForImageSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForImageSearchInput() {
    return this._queryForImageSearch;
  }

  // query_for_video_search - computed: true, optional: true, required: false
  private _queryForVideoSearch?: string; 
  public get queryForVideoSearch() {
    return this.getStringAttribute('query_for_video_search');
  }
  public set queryForVideoSearch(value: string) {
    this._queryForVideoSearch = value;
  }
  public resetQueryForVideoSearch() {
    this._queryForVideoSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryForVideoSearchInput() {
    return this._queryForVideoSearch;
  }

  // start_date - computed: false, optional: false, required: true
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}
export interface SourceShutterstockResourceAllocationDefault {
}

export function sourceShutterstockResourceAllocationDefaultToTerraform(struct?: SourceShutterstockResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShutterstockResourceAllocationDefaultToHclTerraform(struct?: SourceShutterstockResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShutterstockResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShutterstockResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShutterstockResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceShutterstockResourceAllocationJobSpecificResourceRequirements {
}

export function sourceShutterstockResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceShutterstockResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShutterstockResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceShutterstockResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShutterstockResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShutterstockResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShutterstockResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceShutterstockResourceAllocationJobSpecific {
}

export function sourceShutterstockResourceAllocationJobSpecificToTerraform(struct?: SourceShutterstockResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShutterstockResourceAllocationJobSpecificToHclTerraform(struct?: SourceShutterstockResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShutterstockResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceShutterstockResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShutterstockResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new SourceShutterstockResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceShutterstockResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceShutterstockResourceAllocationJobSpecificOutputReference {
    return new SourceShutterstockResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceShutterstockResourceAllocation {
}

export function sourceShutterstockResourceAllocationToTerraform(struct?: SourceShutterstockResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceShutterstockResourceAllocationToHclTerraform(struct?: SourceShutterstockResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceShutterstockResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceShutterstockResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceShutterstockResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceShutterstockResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceShutterstockResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock airbyte_source_shutterstock}
*/
export class SourceShutterstock extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_shutterstock";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceShutterstock resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceShutterstock to import
  * @param importFromId The id of the existing SourceShutterstock that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceShutterstock to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_shutterstock", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_shutterstock airbyte_source_shutterstock} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceShutterstockConfig
  */
  public constructor(scope: Construct, id: string, config: SourceShutterstockConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_shutterstock',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceShutterstockConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceShutterstockConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new SourceShutterstockResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: sourceShutterstockConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceShutterstockConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceShutterstockConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
