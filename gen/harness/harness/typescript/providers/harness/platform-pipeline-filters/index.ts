// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformPipelineFiltersConfig extends cdktf.TerraformMetaArguments {
  /**
  * This indicates visibility of filters. By default, everyone can view this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#filter_visibility PlatformPipelineFilters#filter_visibility}
  */
  readonly filterVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#id PlatformPipelineFilters#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#identifier PlatformPipelineFilters#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the pipeline filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#name PlatformPipelineFilters#name}
  */
  readonly name: string;
  /**
  * Organization Identifier for the Entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#org_id PlatformPipelineFilters#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier for the Entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#project_id PlatformPipelineFilters#project_id}
  */
  readonly projectId?: string;
  /**
  * Type of pipeline filters. Currently supported types are {PipelineSetup, PipelineExecution, Deployment, Template, EnvironmentGroup, Environment}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#type PlatformPipelineFilters#type}
  */
  readonly type: string;
  /**
  * filter_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#filter_properties PlatformPipelineFilters#filter_properties}
  */
  readonly filterProperties: PlatformPipelineFiltersFilterProperties;
}
export interface PlatformPipelineFiltersFilterPropertiesModulePropertiesCd {
  /**
  * Artifact display names of the CD pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#artifact_display_names PlatformPipelineFilters#artifact_display_names}
  */
  readonly artifactDisplayNames?: string[];
  /**
  * Deployment type of the CD pipeline, eg. Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#deployment_types PlatformPipelineFilters#deployment_types}
  */
  readonly deploymentTypes?: string;
  /**
  * Environment identifier of the CD pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#environment_identifiers PlatformPipelineFilters#environment_identifiers}
  */
  readonly environmentIdentifiers?: string[];
  /**
  * Environment names of the CD pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#environment_names PlatformPipelineFilters#environment_names}
  */
  readonly environmentNames?: string[];
  /**
  * Deployment type of the CD pipeline, eg. Kubernetes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#service_definition_types PlatformPipelineFilters#service_definition_types}
  */
  readonly serviceDefinitionTypes?: string;
  /**
  * Service identifiers of the CD pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#service_identifiers PlatformPipelineFilters#service_identifiers}
  */
  readonly serviceIdentifiers?: string[];
  /**
  * Service names of the CD pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#service_names PlatformPipelineFilters#service_names}
  */
  readonly serviceNames?: string[];
}

export function platformPipelineFiltersFilterPropertiesModulePropertiesCdToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_display_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.artifactDisplayNames),
    deployment_types: cdktf.stringToTerraform(struct!.deploymentTypes),
    environment_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIdentifiers),
    environment_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentNames),
    service_definition_types: cdktf.stringToTerraform(struct!.serviceDefinitionTypes),
    service_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIdentifiers),
    service_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceNames),
  }
}


export function platformPipelineFiltersFilterPropertiesModulePropertiesCdToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_display_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.artifactDisplayNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    deployment_types: {
      value: cdktf.stringToHclTerraform(struct!.deploymentTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    environment_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_definition_types: {
      value: cdktf.stringToHclTerraform(struct!.serviceDefinitionTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIdentifiers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterPropertiesModulePropertiesCd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactDisplayNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactDisplayNames = this._artifactDisplayNames;
    }
    if (this._deploymentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentTypes = this._deploymentTypes;
    }
    if (this._environmentIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentIdentifiers = this._environmentIdentifiers;
    }
    if (this._environmentNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentNames = this._environmentNames;
    }
    if (this._serviceDefinitionTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDefinitionTypes = this._serviceDefinitionTypes;
    }
    if (this._serviceIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIdentifiers = this._serviceIdentifiers;
    }
    if (this._serviceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNames = this._serviceNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactDisplayNames = undefined;
      this._deploymentTypes = undefined;
      this._environmentIdentifiers = undefined;
      this._environmentNames = undefined;
      this._serviceDefinitionTypes = undefined;
      this._serviceIdentifiers = undefined;
      this._serviceNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactDisplayNames = value.artifactDisplayNames;
      this._deploymentTypes = value.deploymentTypes;
      this._environmentIdentifiers = value.environmentIdentifiers;
      this._environmentNames = value.environmentNames;
      this._serviceDefinitionTypes = value.serviceDefinitionTypes;
      this._serviceIdentifiers = value.serviceIdentifiers;
      this._serviceNames = value.serviceNames;
    }
  }

  // artifact_display_names - computed: false, optional: true, required: false
  private _artifactDisplayNames?: string[]; 
  public get artifactDisplayNames() {
    return cdktf.Fn.tolist(this.getListAttribute('artifact_display_names'));
  }
  public set artifactDisplayNames(value: string[]) {
    this._artifactDisplayNames = value;
  }
  public resetArtifactDisplayNames() {
    this._artifactDisplayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactDisplayNamesInput() {
    return this._artifactDisplayNames;
  }

  // deployment_types - computed: false, optional: true, required: false
  private _deploymentTypes?: string; 
  public get deploymentTypes() {
    return this.getStringAttribute('deployment_types');
  }
  public set deploymentTypes(value: string) {
    this._deploymentTypes = value;
  }
  public resetDeploymentTypes() {
    this._deploymentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypesInput() {
    return this._deploymentTypes;
  }

  // environment_identifiers - computed: false, optional: true, required: false
  private _environmentIdentifiers?: string[]; 
  public get environmentIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_identifiers'));
  }
  public set environmentIdentifiers(value: string[]) {
    this._environmentIdentifiers = value;
  }
  public resetEnvironmentIdentifiers() {
    this._environmentIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdentifiersInput() {
    return this._environmentIdentifiers;
  }

  // environment_names - computed: false, optional: true, required: false
  private _environmentNames?: string[]; 
  public get environmentNames() {
    return cdktf.Fn.tolist(this.getListAttribute('environment_names'));
  }
  public set environmentNames(value: string[]) {
    this._environmentNames = value;
  }
  public resetEnvironmentNames() {
    this._environmentNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentNamesInput() {
    return this._environmentNames;
  }

  // service_definition_types - computed: false, optional: true, required: false
  private _serviceDefinitionTypes?: string; 
  public get serviceDefinitionTypes() {
    return this.getStringAttribute('service_definition_types');
  }
  public set serviceDefinitionTypes(value: string) {
    this._serviceDefinitionTypes = value;
  }
  public resetServiceDefinitionTypes() {
    this._serviceDefinitionTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDefinitionTypesInput() {
    return this._serviceDefinitionTypes;
  }

  // service_identifiers - computed: false, optional: true, required: false
  private _serviceIdentifiers?: string[]; 
  public get serviceIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('service_identifiers'));
  }
  public set serviceIdentifiers(value: string[]) {
    this._serviceIdentifiers = value;
  }
  public resetServiceIdentifiers() {
    this._serviceIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentifiersInput() {
    return this._serviceIdentifiers;
  }

  // service_names - computed: false, optional: true, required: false
  private _serviceNames?: string[]; 
  public get serviceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('service_names'));
  }
  public set serviceNames(value: string[]) {
    this._serviceNames = value;
  }
  public resetServiceNames() {
    this._serviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNamesInput() {
    return this._serviceNames;
  }
}
export interface PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest {
  /**
  * Source branch of the pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#source_branch PlatformPipelineFilters#source_branch}
  */
  readonly sourceBranch?: string;
  /**
  * Target branch of the pull request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#target_branch PlatformPipelineFilters#target_branch}
  */
  readonly targetBranch?: string;
}

export function platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_branch: cdktf.stringToTerraform(struct!.sourceBranch),
    target_branch: cdktf.stringToTerraform(struct!.targetBranch),
  }
}


export function platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_branch: {
      value: cdktf.stringToHclTerraform(struct!.sourceBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_branch: {
      value: cdktf.stringToHclTerraform(struct!.targetBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceBranch = this._sourceBranch;
    }
    if (this._targetBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetBranch = this._targetBranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceBranch = undefined;
      this._targetBranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceBranch = value.sourceBranch;
      this._targetBranch = value.targetBranch;
    }
  }

  // source_branch - computed: false, optional: true, required: false
  private _sourceBranch?: string; 
  public get sourceBranch() {
    return this.getStringAttribute('source_branch');
  }
  public set sourceBranch(value: string) {
    this._sourceBranch = value;
  }
  public resetSourceBranch() {
    this._sourceBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceBranchInput() {
    return this._sourceBranch;
  }

  // target_branch - computed: false, optional: true, required: false
  private _targetBranch?: string; 
  public get targetBranch() {
    return this.getStringAttribute('target_branch');
  }
  public set targetBranch(value: string) {
    this._targetBranch = value;
  }
  public resetTargetBranch() {
    this._targetBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetBranchInput() {
    return this._targetBranch;
  }
}
export interface PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo {
  /**
  * Event for the ci execution, Possible values: pullRequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#event PlatformPipelineFilters#event}
  */
  readonly event?: string;
  /**
  * pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#pull_request PlatformPipelineFilters#pull_request}
  */
  readonly pullRequest?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest;
}

export function platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event: cdktf.stringToTerraform(struct!.event),
    pull_request: platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToTerraform(struct!.pullRequest),
  }
}


export function platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pull_request: {
      value: platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestToHclTerraform(struct!.pullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._pullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullRequest = this._pullRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._event = undefined;
      this._pullRequest.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._event = value.event;
      this._pullRequest.internalValue = value.pullRequest;
    }
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // pull_request - computed: false, optional: true, required: false
  private _pullRequest = new PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequestOutputReference(this, "pull_request");
  public get pullRequest() {
    return this._pullRequest;
  }
  public putPullRequest(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoPullRequest) {
    this._pullRequest.internalValue = value;
  }
  public resetPullRequest() {
    this._pullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestInput() {
    return this._pullRequest.internalValue;
  }
}
export interface PlatformPipelineFiltersFilterPropertiesModulePropertiesCi {
  /**
  * Branch which was used while building.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#branch PlatformPipelineFilters#branch}
  */
  readonly branch?: string;
  /**
  * Build type of the pipeline. Possible values: branch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#build_type PlatformPipelineFilters#build_type}
  */
  readonly buildType?: string;
  /**
  * name of the repository used in the pipeline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#repo_names PlatformPipelineFilters#repo_names}
  */
  readonly repoNames?: string;
  /**
  * Tags to associate with the CI pipeline resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#tag PlatformPipelineFilters#tag}
  */
  readonly tag?: string;
  /**
  * ci_execution_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#ci_execution_info PlatformPipelineFilters#ci_execution_info}
  */
  readonly ciExecutionInfo?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo;
}

export function platformPipelineFiltersFilterPropertiesModulePropertiesCiToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    build_type: cdktf.stringToTerraform(struct!.buildType),
    repo_names: cdktf.stringToTerraform(struct!.repoNames),
    tag: cdktf.stringToTerraform(struct!.tag),
    ci_execution_info: platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToTerraform(struct!.ciExecutionInfo),
  }
}


export function platformPipelineFiltersFilterPropertiesModulePropertiesCiToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference | PlatformPipelineFiltersFilterPropertiesModulePropertiesCi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch: {
      value: cdktf.stringToHclTerraform(struct!.branch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    build_type: {
      value: cdktf.stringToHclTerraform(struct!.buildType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_names: {
      value: cdktf.stringToHclTerraform(struct!.repoNames),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ci_execution_info: {
      value: platformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoToHclTerraform(struct!.ciExecutionInfo),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterPropertiesModulePropertiesCi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branch !== undefined) {
      hasAnyValues = true;
      internalValueResult.branch = this._branch;
    }
    if (this._buildType !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildType = this._buildType;
    }
    if (this._repoNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoNames = this._repoNames;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._ciExecutionInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciExecutionInfo = this._ciExecutionInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branch = undefined;
      this._buildType = undefined;
      this._repoNames = undefined;
      this._tag = undefined;
      this._ciExecutionInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branch = value.branch;
      this._buildType = value.buildType;
      this._repoNames = value.repoNames;
      this._tag = value.tag;
      this._ciExecutionInfo.internalValue = value.ciExecutionInfo;
    }
  }

  // branch - computed: false, optional: true, required: false
  private _branch?: string; 
  public get branch() {
    return this.getStringAttribute('branch');
  }
  public set branch(value: string) {
    this._branch = value;
  }
  public resetBranch() {
    this._branch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch;
  }

  // build_type - computed: false, optional: true, required: false
  private _buildType?: string; 
  public get buildType() {
    return this.getStringAttribute('build_type');
  }
  public set buildType(value: string) {
    this._buildType = value;
  }
  public resetBuildType() {
    this._buildType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildTypeInput() {
    return this._buildType;
  }

  // repo_names - computed: false, optional: true, required: false
  private _repoNames?: string; 
  public get repoNames() {
    return this.getStringAttribute('repo_names');
  }
  public set repoNames(value: string) {
    this._repoNames = value;
  }
  public resetRepoNames() {
    this._repoNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNamesInput() {
    return this._repoNames;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // ci_execution_info - computed: false, optional: true, required: false
  private _ciExecutionInfo = new PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfoOutputReference(this, "ci_execution_info");
  public get ciExecutionInfo() {
    return this._ciExecutionInfo;
  }
  public putCiExecutionInfo(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCiCiExecutionInfo) {
    this._ciExecutionInfo.internalValue = value;
  }
  public resetCiExecutionInfo() {
    this._ciExecutionInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciExecutionInfoInput() {
    return this._ciExecutionInfo.internalValue;
  }
}
export interface PlatformPipelineFiltersFilterPropertiesModuleProperties {
  /**
  * cd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#cd PlatformPipelineFilters#cd}
  */
  readonly cd?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCd;
  /**
  * ci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#ci PlatformPipelineFilters#ci}
  */
  readonly ci?: PlatformPipelineFiltersFilterPropertiesModulePropertiesCi;
}

export function platformPipelineFiltersFilterPropertiesModulePropertiesToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference | PlatformPipelineFiltersFilterPropertiesModuleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cd: platformPipelineFiltersFilterPropertiesModulePropertiesCdToTerraform(struct!.cd),
    ci: platformPipelineFiltersFilterPropertiesModulePropertiesCiToTerraform(struct!.ci),
  }
}


export function platformPipelineFiltersFilterPropertiesModulePropertiesToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference | PlatformPipelineFiltersFilterPropertiesModuleProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cd: {
      value: platformPipelineFiltersFilterPropertiesModulePropertiesCdToHclTerraform(struct!.cd),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformPipelineFiltersFilterPropertiesModulePropertiesCdList",
    },
    ci: {
      value: platformPipelineFiltersFilterPropertiesModulePropertiesCiToHclTerraform(struct!.ci),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformPipelineFiltersFilterPropertiesModulePropertiesCiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterPropertiesModuleProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cd = this._cd?.internalValue;
    }
    if (this._ci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ci = this._ci?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterPropertiesModuleProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cd.internalValue = undefined;
      this._ci.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cd.internalValue = value.cd;
      this._ci.internalValue = value.ci;
    }
  }

  // cd - computed: false, optional: true, required: false
  private _cd = new PlatformPipelineFiltersFilterPropertiesModulePropertiesCdOutputReference(this, "cd");
  public get cd() {
    return this._cd;
  }
  public putCd(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCd) {
    this._cd.internalValue = value;
  }
  public resetCd() {
    this._cd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdInput() {
    return this._cd.internalValue;
  }

  // ci - computed: false, optional: true, required: false
  private _ci = new PlatformPipelineFiltersFilterPropertiesModulePropertiesCiOutputReference(this, "ci");
  public get ci() {
    return this._ci;
  }
  public putCi(value: PlatformPipelineFiltersFilterPropertiesModulePropertiesCi) {
    this._ci.internalValue = value;
  }
  public resetCi() {
    this._ci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciInput() {
    return this._ci.internalValue;
  }
}
export interface PlatformPipelineFiltersFilterProperties {
  /**
  * description of the pipline filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#description PlatformPipelineFilters#description}
  */
  readonly description?: string;
  /**
  * Corresponding Entity of the filters. Currently supported types are {Connector, DelegateProfile, Delegate, PipelineSetup, PipelineExecution, Deployment, Audit, Template, EnvironmentGroup, FileStore, CCMRecommendation, Anomaly, Environment}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#filter_type PlatformPipelineFilters#filter_type}
  */
  readonly filterType: string;
  /**
  * Name of the pipeline filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#name PlatformPipelineFilters#name}
  */
  readonly name?: string;
  /**
  * Pipeline identifiers to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#pipeline_identifiers PlatformPipelineFilters#pipeline_identifiers}
  */
  readonly pipelineIdentifiers?: string[];
  /**
  * Name of the pipeline execution filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#pipeline_name PlatformPipelineFilters#pipeline_name}
  */
  readonly pipelineName?: string;
  /**
  * Tags to associate with the pipeline. tags should be in the form of `{key:key1, value:key1value}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#pipeline_tags PlatformPipelineFilters#pipeline_tags}
  */
  readonly pipelineTags?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Tags to associate with the resource. Tags should be in the form `name:value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#tags PlatformPipelineFilters#tags}
  */
  readonly tags?: string[];
  /**
  * module_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#module_properties PlatformPipelineFilters#module_properties}
  */
  readonly moduleProperties?: PlatformPipelineFiltersFilterPropertiesModuleProperties;
}

export function platformPipelineFiltersFilterPropertiesToTerraform(struct?: PlatformPipelineFiltersFilterPropertiesOutputReference | PlatformPipelineFiltersFilterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    name: cdktf.stringToTerraform(struct!.name),
    pipeline_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pipelineIdentifiers),
    pipeline_name: cdktf.stringToTerraform(struct!.pipelineName),
    pipeline_tags: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.pipelineTags),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    module_properties: platformPipelineFiltersFilterPropertiesModulePropertiesToTerraform(struct!.moduleProperties),
  }
}


export function platformPipelineFiltersFilterPropertiesToHclTerraform(struct?: PlatformPipelineFiltersFilterPropertiesOutputReference | PlatformPipelineFiltersFilterProperties): any {
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
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
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
    pipeline_identifiers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pipelineIdentifiers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pipeline_name: {
      value: cdktf.stringToHclTerraform(struct!.pipelineName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pipeline_tags: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.pipelineTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    module_properties: {
      value: platformPipelineFiltersFilterPropertiesModulePropertiesToHclTerraform(struct!.moduleProperties),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformPipelineFiltersFilterPropertiesModulePropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformPipelineFiltersFilterPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformPipelineFiltersFilterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pipelineIdentifiers !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineIdentifiers = this._pipelineIdentifiers;
    }
    if (this._pipelineName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineName = this._pipelineName;
    }
    if (this._pipelineTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipelineTags = this._pipelineTags;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._moduleProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleProperties = this._moduleProperties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformPipelineFiltersFilterProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._filterType = undefined;
      this._name = undefined;
      this._pipelineIdentifiers = undefined;
      this._pipelineName = undefined;
      this._pipelineTags = undefined;
      this._tags = undefined;
      this._moduleProperties.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._filterType = value.filterType;
      this._name = value.name;
      this._pipelineIdentifiers = value.pipelineIdentifiers;
      this._pipelineName = value.pipelineName;
      this._pipelineTags = value.pipelineTags;
      this._tags = value.tags;
      this._moduleProperties.internalValue = value.moduleProperties;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // pipeline_identifiers - computed: false, optional: true, required: false
  private _pipelineIdentifiers?: string[]; 
  public get pipelineIdentifiers() {
    return this.getListAttribute('pipeline_identifiers');
  }
  public set pipelineIdentifiers(value: string[]) {
    this._pipelineIdentifiers = value;
  }
  public resetPipelineIdentifiers() {
    this._pipelineIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdentifiersInput() {
    return this._pipelineIdentifiers;
  }

  // pipeline_name - computed: false, optional: true, required: false
  private _pipelineName?: string; 
  public get pipelineName() {
    return this.getStringAttribute('pipeline_name');
  }
  public set pipelineName(value: string) {
    this._pipelineName = value;
  }
  public resetPipelineName() {
    this._pipelineName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineNameInput() {
    return this._pipelineName;
  }

  // pipeline_tags - computed: false, optional: true, required: false
  private _pipelineTags?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get pipelineTags() {
    return this.interpolationForAttribute('pipeline_tags');
  }
  public set pipelineTags(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._pipelineTags = value;
  }
  public resetPipelineTags() {
    this._pipelineTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineTagsInput() {
    return this._pipelineTags;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // module_properties - computed: false, optional: true, required: false
  private _moduleProperties = new PlatformPipelineFiltersFilterPropertiesModulePropertiesOutputReference(this, "module_properties");
  public get moduleProperties() {
    return this._moduleProperties;
  }
  public putModuleProperties(value: PlatformPipelineFiltersFilterPropertiesModuleProperties) {
    this._moduleProperties.internalValue = value;
  }
  public resetModuleProperties() {
    this._moduleProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulePropertiesInput() {
    return this._moduleProperties.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters harness_platform_pipeline_filters}
*/
export class PlatformPipelineFilters extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_pipeline_filters";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformPipelineFilters resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformPipelineFilters to import
  * @param importFromId The id of the existing PlatformPipelineFilters that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformPipelineFilters to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_pipeline_filters", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_pipeline_filters harness_platform_pipeline_filters} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformPipelineFiltersConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformPipelineFiltersConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_pipeline_filters',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterVisibility = config.filterVisibility;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._type = config.type;
    this._filterProperties.internalValue = config.filterProperties;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_visibility - computed: true, optional: true, required: false
  private _filterVisibility?: string; 
  public get filterVisibility() {
    return this.getStringAttribute('filter_visibility');
  }
  public set filterVisibility(value: string) {
    this._filterVisibility = value;
  }
  public resetFilterVisibility() {
    this._filterVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterVisibilityInput() {
    return this._filterVisibility;
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

  // filter_properties - computed: false, optional: false, required: true
  private _filterProperties = new PlatformPipelineFiltersFilterPropertiesOutputReference(this, "filter_properties");
  public get filterProperties() {
    return this._filterProperties;
  }
  public putFilterProperties(value: PlatformPipelineFiltersFilterProperties) {
    this._filterProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPropertiesInput() {
    return this._filterProperties.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_visibility: cdktf.stringToTerraform(this._filterVisibility),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      filter_properties: platformPipelineFiltersFilterPropertiesToTerraform(this._filterProperties.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_visibility: {
        value: cdktf.stringToHclTerraform(this._filterVisibility),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      filter_properties: {
        value: platformPipelineFiltersFilterPropertiesToHclTerraform(this._filterProperties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformPipelineFiltersFilterPropertiesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
