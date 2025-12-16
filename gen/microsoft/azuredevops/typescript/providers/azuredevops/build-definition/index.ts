// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuildDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#agent_pool_name BuildDefinition#agent_pool_name}
  */
  readonly agentPoolName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#agent_specification BuildDefinition#agent_specification}
  */
  readonly agentSpecification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#id BuildDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#job_authorization_scope BuildDefinition#job_authorization_scope}
  */
  readonly jobAuthorizationScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#name BuildDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#path BuildDefinition#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#project_id BuildDefinition#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#queue_status BuildDefinition#queue_status}
  */
  readonly queueStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#variable_groups BuildDefinition#variable_groups}
  */
  readonly variableGroups?: number[];
  /**
  * build_completion_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#build_completion_trigger BuildDefinition#build_completion_trigger}
  */
  readonly buildCompletionTrigger?: BuildDefinitionBuildCompletionTrigger[] | cdktf.IResolvable;
  /**
  * ci_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#ci_trigger BuildDefinition#ci_trigger}
  */
  readonly ciTrigger?: BuildDefinitionCiTrigger;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#features BuildDefinition#features}
  */
  readonly features?: BuildDefinitionFeatures[] | cdktf.IResolvable;
  /**
  * jobs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#jobs BuildDefinition#jobs}
  */
  readonly jobs?: BuildDefinitionJobs[] | cdktf.IResolvable;
  /**
  * pull_request_trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#pull_request_trigger BuildDefinition#pull_request_trigger}
  */
  readonly pullRequestTrigger?: BuildDefinitionPullRequestTrigger;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#repository BuildDefinition#repository}
  */
  readonly repository: BuildDefinitionRepository;
  /**
  * schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#schedules BuildDefinition#schedules}
  */
  readonly schedules?: BuildDefinitionSchedules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#timeouts BuildDefinition#timeouts}
  */
  readonly timeouts?: BuildDefinitionTimeouts;
  /**
  * variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#variable BuildDefinition#variable}
  */
  readonly variable?: BuildDefinitionVariable[] | cdktf.IResolvable;
}
export interface BuildDefinitionBuildCompletionTriggerBranchFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionBuildCompletionTriggerBranchFilterToTerraform(struct?: BuildDefinitionBuildCompletionTriggerBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionBuildCompletionTriggerBranchFilterToHclTerraform(struct?: BuildDefinitionBuildCompletionTriggerBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionBuildCompletionTriggerBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionBuildCompletionTriggerBranchFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionBuildCompletionTriggerBranchFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionBuildCompletionTriggerBranchFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionBuildCompletionTriggerBranchFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionBuildCompletionTriggerBranchFilterOutputReference {
    return new BuildDefinitionBuildCompletionTriggerBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionBuildCompletionTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#build_definition_id BuildDefinition#build_definition_id}
  */
  readonly buildDefinitionId: number;
  /**
  * branch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#branch_filter BuildDefinition#branch_filter}
  */
  readonly branchFilter: BuildDefinitionBuildCompletionTriggerBranchFilter[] | cdktf.IResolvable;
}

export function buildDefinitionBuildCompletionTriggerToTerraform(struct?: BuildDefinitionBuildCompletionTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    build_definition_id: cdktf.numberToTerraform(struct!.buildDefinitionId),
    branch_filter: cdktf.listMapper(buildDefinitionBuildCompletionTriggerBranchFilterToTerraform, true)(struct!.branchFilter),
  }
}


export function buildDefinitionBuildCompletionTriggerToHclTerraform(struct?: BuildDefinitionBuildCompletionTrigger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    build_definition_id: {
      value: cdktf.numberToHclTerraform(struct!.buildDefinitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    branch_filter: {
      value: cdktf.listMapperHcl(buildDefinitionBuildCompletionTriggerBranchFilterToHclTerraform, true)(struct!.branchFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionBuildCompletionTriggerBranchFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionBuildCompletionTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionBuildCompletionTrigger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._buildDefinitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildDefinitionId = this._buildDefinitionId;
    }
    if (this._branchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchFilter = this._branchFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionBuildCompletionTrigger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._buildDefinitionId = undefined;
      this._branchFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._buildDefinitionId = value.buildDefinitionId;
      this._branchFilter.internalValue = value.branchFilter;
    }
  }

  // build_definition_id - computed: false, optional: false, required: true
  private _buildDefinitionId?: number; 
  public get buildDefinitionId() {
    return this.getNumberAttribute('build_definition_id');
  }
  public set buildDefinitionId(value: number) {
    this._buildDefinitionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildDefinitionIdInput() {
    return this._buildDefinitionId;
  }

  // branch_filter - computed: false, optional: false, required: true
  private _branchFilter = new BuildDefinitionBuildCompletionTriggerBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }
  public putBranchFilter(value: BuildDefinitionBuildCompletionTriggerBranchFilter[] | cdktf.IResolvable) {
    this._branchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter.internalValue;
  }
}

export class BuildDefinitionBuildCompletionTriggerList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionBuildCompletionTrigger[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionBuildCompletionTriggerOutputReference {
    return new BuildDefinitionBuildCompletionTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionCiTriggerOverrideBranchFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionCiTriggerOverrideBranchFilterToTerraform(struct?: BuildDefinitionCiTriggerOverrideBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionCiTriggerOverrideBranchFilterToHclTerraform(struct?: BuildDefinitionCiTriggerOverrideBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionCiTriggerOverrideBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionCiTriggerOverrideBranchFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionCiTriggerOverrideBranchFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionCiTriggerOverrideBranchFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionCiTriggerOverrideBranchFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionCiTriggerOverrideBranchFilterOutputReference {
    return new BuildDefinitionCiTriggerOverrideBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionCiTriggerOverridePathFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionCiTriggerOverridePathFilterToTerraform(struct?: BuildDefinitionCiTriggerOverridePathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionCiTriggerOverridePathFilterToHclTerraform(struct?: BuildDefinitionCiTriggerOverridePathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionCiTriggerOverridePathFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionCiTriggerOverridePathFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionCiTriggerOverridePathFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionCiTriggerOverridePathFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionCiTriggerOverridePathFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionCiTriggerOverridePathFilterOutputReference {
    return new BuildDefinitionCiTriggerOverridePathFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionCiTriggerOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#batch BuildDefinition#batch}
  */
  readonly batch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#max_concurrent_builds_per_branch BuildDefinition#max_concurrent_builds_per_branch}
  */
  readonly maxConcurrentBuildsPerBranch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#polling_interval BuildDefinition#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * branch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#branch_filter BuildDefinition#branch_filter}
  */
  readonly branchFilter: BuildDefinitionCiTriggerOverrideBranchFilter[] | cdktf.IResolvable;
  /**
  * path_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#path_filter BuildDefinition#path_filter}
  */
  readonly pathFilter?: BuildDefinitionCiTriggerOverridePathFilter[] | cdktf.IResolvable;
}

export function buildDefinitionCiTriggerOverrideToTerraform(struct?: BuildDefinitionCiTriggerOverrideOutputReference | BuildDefinitionCiTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch: cdktf.booleanToTerraform(struct!.batch),
    max_concurrent_builds_per_branch: cdktf.numberToTerraform(struct!.maxConcurrentBuildsPerBranch),
    polling_interval: cdktf.numberToTerraform(struct!.pollingInterval),
    branch_filter: cdktf.listMapper(buildDefinitionCiTriggerOverrideBranchFilterToTerraform, true)(struct!.branchFilter),
    path_filter: cdktf.listMapper(buildDefinitionCiTriggerOverridePathFilterToTerraform, true)(struct!.pathFilter),
  }
}


export function buildDefinitionCiTriggerOverrideToHclTerraform(struct?: BuildDefinitionCiTriggerOverrideOutputReference | BuildDefinitionCiTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch: {
      value: cdktf.booleanToHclTerraform(struct!.batch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrent_builds_per_branch: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentBuildsPerBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.pollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    branch_filter: {
      value: cdktf.listMapperHcl(buildDefinitionCiTriggerOverrideBranchFilterToHclTerraform, true)(struct!.branchFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionCiTriggerOverrideBranchFilterList",
    },
    path_filter: {
      value: cdktf.listMapperHcl(buildDefinitionCiTriggerOverridePathFilterToHclTerraform, true)(struct!.pathFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionCiTriggerOverridePathFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionCiTriggerOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionCiTriggerOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batch !== undefined) {
      hasAnyValues = true;
      internalValueResult.batch = this._batch;
    }
    if (this._maxConcurrentBuildsPerBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentBuildsPerBranch = this._maxConcurrentBuildsPerBranch;
    }
    if (this._pollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingInterval = this._pollingInterval;
    }
    if (this._branchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchFilter = this._branchFilter?.internalValue;
    }
    if (this._pathFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionCiTriggerOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batch = undefined;
      this._maxConcurrentBuildsPerBranch = undefined;
      this._pollingInterval = undefined;
      this._branchFilter.internalValue = undefined;
      this._pathFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batch = value.batch;
      this._maxConcurrentBuildsPerBranch = value.maxConcurrentBuildsPerBranch;
      this._pollingInterval = value.pollingInterval;
      this._branchFilter.internalValue = value.branchFilter;
      this._pathFilter.internalValue = value.pathFilter;
    }
  }

  // batch - computed: false, optional: true, required: false
  private _batch?: boolean | cdktf.IResolvable; 
  public get batch() {
    return this.getBooleanAttribute('batch');
  }
  public set batch(value: boolean | cdktf.IResolvable) {
    this._batch = value;
  }
  public resetBatch() {
    this._batch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchInput() {
    return this._batch;
  }

  // max_concurrent_builds_per_branch - computed: false, optional: true, required: false
  private _maxConcurrentBuildsPerBranch?: number; 
  public get maxConcurrentBuildsPerBranch() {
    return this.getNumberAttribute('max_concurrent_builds_per_branch');
  }
  public set maxConcurrentBuildsPerBranch(value: number) {
    this._maxConcurrentBuildsPerBranch = value;
  }
  public resetMaxConcurrentBuildsPerBranch() {
    this._maxConcurrentBuildsPerBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentBuildsPerBranchInput() {
    return this._maxConcurrentBuildsPerBranch;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // polling_job_id - computed: true, optional: false, required: false
  public get pollingJobId() {
    return this.getStringAttribute('polling_job_id');
  }

  // branch_filter - computed: false, optional: false, required: true
  private _branchFilter = new BuildDefinitionCiTriggerOverrideBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }
  public putBranchFilter(value: BuildDefinitionCiTriggerOverrideBranchFilter[] | cdktf.IResolvable) {
    this._branchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter.internalValue;
  }

  // path_filter - computed: false, optional: true, required: false
  private _pathFilter = new BuildDefinitionCiTriggerOverridePathFilterList(this, "path_filter", true);
  public get pathFilter() {
    return this._pathFilter;
  }
  public putPathFilter(value: BuildDefinitionCiTriggerOverridePathFilter[] | cdktf.IResolvable) {
    this._pathFilter.internalValue = value;
  }
  public resetPathFilter() {
    this._pathFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter.internalValue;
  }
}
export interface BuildDefinitionCiTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#use_yaml BuildDefinition#use_yaml}
  */
  readonly useYaml?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#override BuildDefinition#override}
  */
  readonly override?: BuildDefinitionCiTriggerOverride;
}

export function buildDefinitionCiTriggerToTerraform(struct?: BuildDefinitionCiTriggerOutputReference | BuildDefinitionCiTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_yaml: cdktf.booleanToTerraform(struct!.useYaml),
    override: buildDefinitionCiTriggerOverrideToTerraform(struct!.override),
  }
}


export function buildDefinitionCiTriggerToHclTerraform(struct?: BuildDefinitionCiTriggerOutputReference | BuildDefinitionCiTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_yaml: {
      value: cdktf.booleanToHclTerraform(struct!.useYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: buildDefinitionCiTriggerOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionCiTriggerOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionCiTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionCiTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.useYaml = this._useYaml;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionCiTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useYaml = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useYaml = value.useYaml;
      this._override.internalValue = value.override;
    }
  }

  // use_yaml - computed: false, optional: true, required: false
  private _useYaml?: boolean | cdktf.IResolvable; 
  public get useYaml() {
    return this.getBooleanAttribute('use_yaml');
  }
  public set useYaml(value: boolean | cdktf.IResolvable) {
    this._useYaml = value;
  }
  public resetUseYaml() {
    this._useYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useYamlInput() {
    return this._useYaml;
  }

  // override - computed: false, optional: true, required: false
  private _override = new BuildDefinitionCiTriggerOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: BuildDefinitionCiTriggerOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}
export interface BuildDefinitionFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#skip_first_run BuildDefinition#skip_first_run}
  */
  readonly skipFirstRun?: boolean | cdktf.IResolvable;
}

export function buildDefinitionFeaturesToTerraform(struct?: BuildDefinitionFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skip_first_run: cdktf.booleanToTerraform(struct!.skipFirstRun),
  }
}


export function buildDefinitionFeaturesToHclTerraform(struct?: BuildDefinitionFeatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skip_first_run: {
      value: cdktf.booleanToHclTerraform(struct!.skipFirstRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionFeaturesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionFeatures | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skipFirstRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipFirstRun = this._skipFirstRun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionFeatures | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skipFirstRun = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skipFirstRun = value.skipFirstRun;
    }
  }

  // skip_first_run - computed: false, optional: true, required: false
  private _skipFirstRun?: boolean | cdktf.IResolvable; 
  public get skipFirstRun() {
    return this.getBooleanAttribute('skip_first_run');
  }
  public set skipFirstRun(value: boolean | cdktf.IResolvable) {
    this._skipFirstRun = value;
  }
  public resetSkipFirstRun() {
    this._skipFirstRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipFirstRunInput() {
    return this._skipFirstRun;
  }
}

export class BuildDefinitionFeaturesList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionFeatures[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionFeaturesOutputReference {
    return new BuildDefinitionFeaturesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionJobsDependencies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#scope BuildDefinition#scope}
  */
  readonly scope: string;
}

export function buildDefinitionJobsDependenciesToTerraform(struct?: BuildDefinitionJobsDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function buildDefinitionJobsDependenciesToHclTerraform(struct?: BuildDefinitionJobsDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionJobsDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionJobsDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionJobsDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}

export class BuildDefinitionJobsDependenciesList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionJobsDependencies[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionJobsDependenciesOutputReference {
    return new BuildDefinitionJobsDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionJobsTargetExecutionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#continue_on_error BuildDefinition#continue_on_error}
  */
  readonly continueOnError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#max_concurrency BuildDefinition#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#multipliers BuildDefinition#multipliers}
  */
  readonly multipliers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#type BuildDefinition#type}
  */
  readonly type: string;
}

export function buildDefinitionJobsTargetExecutionOptionsToTerraform(struct?: BuildDefinitionJobsTargetExecutionOptionsOutputReference | BuildDefinitionJobsTargetExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    continue_on_error: cdktf.booleanToTerraform(struct!.continueOnError),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    multipliers: cdktf.stringToTerraform(struct!.multipliers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function buildDefinitionJobsTargetExecutionOptionsToHclTerraform(struct?: BuildDefinitionJobsTargetExecutionOptionsOutputReference | BuildDefinitionJobsTargetExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    continue_on_error: {
      value: cdktf.booleanToHclTerraform(struct!.continueOnError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multipliers: {
      value: cdktf.stringToHclTerraform(struct!.multipliers),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionJobsTargetExecutionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionJobsTargetExecutionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._continueOnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueOnError = this._continueOnError;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._multipliers !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipliers = this._multipliers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionJobsTargetExecutionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._continueOnError = undefined;
      this._maxConcurrency = undefined;
      this._multipliers = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._continueOnError = value.continueOnError;
      this._maxConcurrency = value.maxConcurrency;
      this._multipliers = value.multipliers;
      this._type = value.type;
    }
  }

  // continue_on_error - computed: false, optional: true, required: false
  private _continueOnError?: boolean | cdktf.IResolvable; 
  public get continueOnError() {
    return this.getBooleanAttribute('continue_on_error');
  }
  public set continueOnError(value: boolean | cdktf.IResolvable) {
    this._continueOnError = value;
  }
  public resetContinueOnError() {
    this._continueOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueOnErrorInput() {
    return this._continueOnError;
  }

  // max_concurrency - computed: true, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // multipliers - computed: false, optional: true, required: false
  private _multipliers?: string; 
  public get multipliers() {
    return this.getStringAttribute('multipliers');
  }
  public set multipliers(value: string) {
    this._multipliers = value;
  }
  public resetMultipliers() {
    this._multipliers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipliersInput() {
    return this._multipliers;
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
}
export interface BuildDefinitionJobsTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#demands BuildDefinition#demands}
  */
  readonly demands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#type BuildDefinition#type}
  */
  readonly type: string;
  /**
  * execution_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#execution_options BuildDefinition#execution_options}
  */
  readonly executionOptions: BuildDefinitionJobsTargetExecutionOptions;
}

export function buildDefinitionJobsTargetToTerraform(struct?: BuildDefinitionJobsTargetOutputReference | BuildDefinitionJobsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    demands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.demands),
    type: cdktf.stringToTerraform(struct!.type),
    execution_options: buildDefinitionJobsTargetExecutionOptionsToTerraform(struct!.executionOptions),
  }
}


export function buildDefinitionJobsTargetToHclTerraform(struct?: BuildDefinitionJobsTargetOutputReference | BuildDefinitionJobsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    demands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.demands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_options: {
      value: buildDefinitionJobsTargetExecutionOptionsToHclTerraform(struct!.executionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionJobsTargetExecutionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionJobsTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionJobsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._demands !== undefined) {
      hasAnyValues = true;
      internalValueResult.demands = this._demands;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._executionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionOptions = this._executionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionJobsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._demands = undefined;
      this._type = undefined;
      this._executionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._demands = value.demands;
      this._type = value.type;
      this._executionOptions.internalValue = value.executionOptions;
    }
  }

  // demands - computed: false, optional: true, required: false
  private _demands?: string[]; 
  public get demands() {
    return this.getListAttribute('demands');
  }
  public set demands(value: string[]) {
    this._demands = value;
  }
  public resetDemands() {
    this._demands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get demandsInput() {
    return this._demands;
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

  // execution_options - computed: false, optional: false, required: true
  private _executionOptions = new BuildDefinitionJobsTargetExecutionOptionsOutputReference(this, "execution_options");
  public get executionOptions() {
    return this._executionOptions;
  }
  public putExecutionOptions(value: BuildDefinitionJobsTargetExecutionOptions) {
    this._executionOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionOptionsInput() {
    return this._executionOptions.internalValue;
  }
}
export interface BuildDefinitionJobs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#allow_scripts_auth_access_option BuildDefinition#allow_scripts_auth_access_option}
  */
  readonly allowScriptsAuthAccessOption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#condition BuildDefinition#condition}
  */
  readonly condition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#job_authorization_scope BuildDefinition#job_authorization_scope}
  */
  readonly jobAuthorizationScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#job_cancel_timeout_in_minutes BuildDefinition#job_cancel_timeout_in_minutes}
  */
  readonly jobCancelTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#job_timeout_in_minutes BuildDefinition#job_timeout_in_minutes}
  */
  readonly jobTimeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#name BuildDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#ref_name BuildDefinition#ref_name}
  */
  readonly refName: string;
  /**
  * dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#dependencies BuildDefinition#dependencies}
  */
  readonly dependencies?: BuildDefinitionJobsDependencies[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#target BuildDefinition#target}
  */
  readonly target: BuildDefinitionJobsTarget;
}

export function buildDefinitionJobsToTerraform(struct?: BuildDefinitionJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_scripts_auth_access_option: cdktf.booleanToTerraform(struct!.allowScriptsAuthAccessOption),
    condition: cdktf.stringToTerraform(struct!.condition),
    job_authorization_scope: cdktf.stringToTerraform(struct!.jobAuthorizationScope),
    job_cancel_timeout_in_minutes: cdktf.numberToTerraform(struct!.jobCancelTimeoutInMinutes),
    job_timeout_in_minutes: cdktf.numberToTerraform(struct!.jobTimeoutInMinutes),
    name: cdktf.stringToTerraform(struct!.name),
    ref_name: cdktf.stringToTerraform(struct!.refName),
    dependencies: cdktf.listMapper(buildDefinitionJobsDependenciesToTerraform, true)(struct!.dependencies),
    target: buildDefinitionJobsTargetToTerraform(struct!.target),
  }
}


export function buildDefinitionJobsToHclTerraform(struct?: BuildDefinitionJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_scripts_auth_access_option: {
      value: cdktf.booleanToHclTerraform(struct!.allowScriptsAuthAccessOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_authorization_scope: {
      value: cdktf.stringToHclTerraform(struct!.jobAuthorizationScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_cancel_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.jobCancelTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    job_timeout_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.jobTimeoutInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref_name: {
      value: cdktf.stringToHclTerraform(struct!.refName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dependencies: {
      value: cdktf.listMapperHcl(buildDefinitionJobsDependenciesToHclTerraform, true)(struct!.dependencies),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionJobsDependenciesList",
    },
    target: {
      value: buildDefinitionJobsTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionJobsTargetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowScriptsAuthAccessOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowScriptsAuthAccessOption = this._allowScriptsAuthAccessOption;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._jobAuthorizationScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobAuthorizationScope = this._jobAuthorizationScope;
    }
    if (this._jobCancelTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCancelTimeoutInMinutes = this._jobCancelTimeoutInMinutes;
    }
    if (this._jobTimeoutInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTimeoutInMinutes = this._jobTimeoutInMinutes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._refName !== undefined) {
      hasAnyValues = true;
      internalValueResult.refName = this._refName;
    }
    if (this._dependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependencies = this._dependencies?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowScriptsAuthAccessOption = undefined;
      this._condition = undefined;
      this._jobAuthorizationScope = undefined;
      this._jobCancelTimeoutInMinutes = undefined;
      this._jobTimeoutInMinutes = undefined;
      this._name = undefined;
      this._refName = undefined;
      this._dependencies.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowScriptsAuthAccessOption = value.allowScriptsAuthAccessOption;
      this._condition = value.condition;
      this._jobAuthorizationScope = value.jobAuthorizationScope;
      this._jobCancelTimeoutInMinutes = value.jobCancelTimeoutInMinutes;
      this._jobTimeoutInMinutes = value.jobTimeoutInMinutes;
      this._name = value.name;
      this._refName = value.refName;
      this._dependencies.internalValue = value.dependencies;
      this._target.internalValue = value.target;
    }
  }

  // allow_scripts_auth_access_option - computed: false, optional: true, required: false
  private _allowScriptsAuthAccessOption?: boolean | cdktf.IResolvable; 
  public get allowScriptsAuthAccessOption() {
    return this.getBooleanAttribute('allow_scripts_auth_access_option');
  }
  public set allowScriptsAuthAccessOption(value: boolean | cdktf.IResolvable) {
    this._allowScriptsAuthAccessOption = value;
  }
  public resetAllowScriptsAuthAccessOption() {
    this._allowScriptsAuthAccessOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowScriptsAuthAccessOptionInput() {
    return this._allowScriptsAuthAccessOption;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // job_authorization_scope - computed: false, optional: true, required: false
  private _jobAuthorizationScope?: string; 
  public get jobAuthorizationScope() {
    return this.getStringAttribute('job_authorization_scope');
  }
  public set jobAuthorizationScope(value: string) {
    this._jobAuthorizationScope = value;
  }
  public resetJobAuthorizationScope() {
    this._jobAuthorizationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAuthorizationScopeInput() {
    return this._jobAuthorizationScope;
  }

  // job_cancel_timeout_in_minutes - computed: false, optional: true, required: false
  private _jobCancelTimeoutInMinutes?: number; 
  public get jobCancelTimeoutInMinutes() {
    return this.getNumberAttribute('job_cancel_timeout_in_minutes');
  }
  public set jobCancelTimeoutInMinutes(value: number) {
    this._jobCancelTimeoutInMinutes = value;
  }
  public resetJobCancelTimeoutInMinutes() {
    this._jobCancelTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCancelTimeoutInMinutesInput() {
    return this._jobCancelTimeoutInMinutes;
  }

  // job_timeout_in_minutes - computed: false, optional: true, required: false
  private _jobTimeoutInMinutes?: number; 
  public get jobTimeoutInMinutes() {
    return this.getNumberAttribute('job_timeout_in_minutes');
  }
  public set jobTimeoutInMinutes(value: number) {
    this._jobTimeoutInMinutes = value;
  }
  public resetJobTimeoutInMinutes() {
    this._jobTimeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTimeoutInMinutesInput() {
    return this._jobTimeoutInMinutes;
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

  // ref_name - computed: false, optional: false, required: true
  private _refName?: string; 
  public get refName() {
    return this.getStringAttribute('ref_name');
  }
  public set refName(value: string) {
    this._refName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refNameInput() {
    return this._refName;
  }

  // dependencies - computed: false, optional: true, required: false
  private _dependencies = new BuildDefinitionJobsDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }
  public putDependencies(value: BuildDefinitionJobsDependencies[] | cdktf.IResolvable) {
    this._dependencies.internalValue = value;
  }
  public resetDependencies() {
    this._dependencies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependenciesInput() {
    return this._dependencies.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new BuildDefinitionJobsTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: BuildDefinitionJobsTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class BuildDefinitionJobsList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionJobs[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionJobsOutputReference {
    return new BuildDefinitionJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionPullRequestTriggerForks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#enabled BuildDefinition#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#share_secrets BuildDefinition#share_secrets}
  */
  readonly shareSecrets: boolean | cdktf.IResolvable;
}

export function buildDefinitionPullRequestTriggerForksToTerraform(struct?: BuildDefinitionPullRequestTriggerForksOutputReference | BuildDefinitionPullRequestTriggerForks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    share_secrets: cdktf.booleanToTerraform(struct!.shareSecrets),
  }
}


export function buildDefinitionPullRequestTriggerForksToHclTerraform(struct?: BuildDefinitionPullRequestTriggerForksOutputReference | BuildDefinitionPullRequestTriggerForks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    share_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.shareSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionPullRequestTriggerForksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionPullRequestTriggerForks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._shareSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareSecrets = this._shareSecrets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionPullRequestTriggerForks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._shareSecrets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._shareSecrets = value.shareSecrets;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // share_secrets - computed: false, optional: false, required: true
  private _shareSecrets?: boolean | cdktf.IResolvable; 
  public get shareSecrets() {
    return this.getBooleanAttribute('share_secrets');
  }
  public set shareSecrets(value: boolean | cdktf.IResolvable) {
    this._shareSecrets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareSecretsInput() {
    return this._shareSecrets;
  }
}
export interface BuildDefinitionPullRequestTriggerOverrideBranchFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionPullRequestTriggerOverrideBranchFilterToTerraform(struct?: BuildDefinitionPullRequestTriggerOverrideBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionPullRequestTriggerOverrideBranchFilterToHclTerraform(struct?: BuildDefinitionPullRequestTriggerOverrideBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionPullRequestTriggerOverrideBranchFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionPullRequestTriggerOverrideBranchFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionPullRequestTriggerOverrideBranchFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionPullRequestTriggerOverrideBranchFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference {
    return new BuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionPullRequestTriggerOverridePathFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionPullRequestTriggerOverridePathFilterToTerraform(struct?: BuildDefinitionPullRequestTriggerOverridePathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionPullRequestTriggerOverridePathFilterToHclTerraform(struct?: BuildDefinitionPullRequestTriggerOverridePathFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionPullRequestTriggerOverridePathFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionPullRequestTriggerOverridePathFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionPullRequestTriggerOverridePathFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionPullRequestTriggerOverridePathFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionPullRequestTriggerOverridePathFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionPullRequestTriggerOverridePathFilterOutputReference {
    return new BuildDefinitionPullRequestTriggerOverridePathFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionPullRequestTriggerOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#auto_cancel BuildDefinition#auto_cancel}
  */
  readonly autoCancel?: boolean | cdktf.IResolvable;
  /**
  * branch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#branch_filter BuildDefinition#branch_filter}
  */
  readonly branchFilter: BuildDefinitionPullRequestTriggerOverrideBranchFilter[] | cdktf.IResolvable;
  /**
  * path_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#path_filter BuildDefinition#path_filter}
  */
  readonly pathFilter?: BuildDefinitionPullRequestTriggerOverridePathFilter[] | cdktf.IResolvable;
}

export function buildDefinitionPullRequestTriggerOverrideToTerraform(struct?: BuildDefinitionPullRequestTriggerOverrideOutputReference | BuildDefinitionPullRequestTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_cancel: cdktf.booleanToTerraform(struct!.autoCancel),
    branch_filter: cdktf.listMapper(buildDefinitionPullRequestTriggerOverrideBranchFilterToTerraform, true)(struct!.branchFilter),
    path_filter: cdktf.listMapper(buildDefinitionPullRequestTriggerOverridePathFilterToTerraform, true)(struct!.pathFilter),
  }
}


export function buildDefinitionPullRequestTriggerOverrideToHclTerraform(struct?: BuildDefinitionPullRequestTriggerOverrideOutputReference | BuildDefinitionPullRequestTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_cancel: {
      value: cdktf.booleanToHclTerraform(struct!.autoCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    branch_filter: {
      value: cdktf.listMapperHcl(buildDefinitionPullRequestTriggerOverrideBranchFilterToHclTerraform, true)(struct!.branchFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionPullRequestTriggerOverrideBranchFilterList",
    },
    path_filter: {
      value: cdktf.listMapperHcl(buildDefinitionPullRequestTriggerOverridePathFilterToHclTerraform, true)(struct!.pathFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionPullRequestTriggerOverridePathFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionPullRequestTriggerOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionPullRequestTriggerOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCancel = this._autoCancel;
    }
    if (this._branchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchFilter = this._branchFilter?.internalValue;
    }
    if (this._pathFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathFilter = this._pathFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionPullRequestTriggerOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCancel = undefined;
      this._branchFilter.internalValue = undefined;
      this._pathFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCancel = value.autoCancel;
      this._branchFilter.internalValue = value.branchFilter;
      this._pathFilter.internalValue = value.pathFilter;
    }
  }

  // auto_cancel - computed: false, optional: true, required: false
  private _autoCancel?: boolean | cdktf.IResolvable; 
  public get autoCancel() {
    return this.getBooleanAttribute('auto_cancel');
  }
  public set autoCancel(value: boolean | cdktf.IResolvable) {
    this._autoCancel = value;
  }
  public resetAutoCancel() {
    this._autoCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCancelInput() {
    return this._autoCancel;
  }

  // branch_filter - computed: false, optional: false, required: true
  private _branchFilter = new BuildDefinitionPullRequestTriggerOverrideBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }
  public putBranchFilter(value: BuildDefinitionPullRequestTriggerOverrideBranchFilter[] | cdktf.IResolvable) {
    this._branchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter.internalValue;
  }

  // path_filter - computed: false, optional: true, required: false
  private _pathFilter = new BuildDefinitionPullRequestTriggerOverridePathFilterList(this, "path_filter", true);
  public get pathFilter() {
    return this._pathFilter;
  }
  public putPathFilter(value: BuildDefinitionPullRequestTriggerOverridePathFilter[] | cdktf.IResolvable) {
    this._pathFilter.internalValue = value;
  }
  public resetPathFilter() {
    this._pathFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathFilterInput() {
    return this._pathFilter.internalValue;
  }
}
export interface BuildDefinitionPullRequestTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#comment_required BuildDefinition#comment_required}
  */
  readonly commentRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#initial_branch BuildDefinition#initial_branch}
  */
  readonly initialBranch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#use_yaml BuildDefinition#use_yaml}
  */
  readonly useYaml?: boolean | cdktf.IResolvable;
  /**
  * forks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#forks BuildDefinition#forks}
  */
  readonly forks: BuildDefinitionPullRequestTriggerForks;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#override BuildDefinition#override}
  */
  readonly override?: BuildDefinitionPullRequestTriggerOverride;
}

export function buildDefinitionPullRequestTriggerToTerraform(struct?: BuildDefinitionPullRequestTriggerOutputReference | BuildDefinitionPullRequestTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment_required: cdktf.stringToTerraform(struct!.commentRequired),
    initial_branch: cdktf.stringToTerraform(struct!.initialBranch),
    use_yaml: cdktf.booleanToTerraform(struct!.useYaml),
    forks: buildDefinitionPullRequestTriggerForksToTerraform(struct!.forks),
    override: buildDefinitionPullRequestTriggerOverrideToTerraform(struct!.override),
  }
}


export function buildDefinitionPullRequestTriggerToHclTerraform(struct?: BuildDefinitionPullRequestTriggerOutputReference | BuildDefinitionPullRequestTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment_required: {
      value: cdktf.stringToHclTerraform(struct!.commentRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_branch: {
      value: cdktf.stringToHclTerraform(struct!.initialBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_yaml: {
      value: cdktf.booleanToHclTerraform(struct!.useYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forks: {
      value: buildDefinitionPullRequestTriggerForksToHclTerraform(struct!.forks),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionPullRequestTriggerForksList",
    },
    override: {
      value: buildDefinitionPullRequestTriggerOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "BuildDefinitionPullRequestTriggerOverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionPullRequestTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionPullRequestTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commentRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.commentRequired = this._commentRequired;
    }
    if (this._initialBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialBranch = this._initialBranch;
    }
    if (this._useYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.useYaml = this._useYaml;
    }
    if (this._forks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forks = this._forks?.internalValue;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionPullRequestTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commentRequired = undefined;
      this._initialBranch = undefined;
      this._useYaml = undefined;
      this._forks.internalValue = undefined;
      this._override.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commentRequired = value.commentRequired;
      this._initialBranch = value.initialBranch;
      this._useYaml = value.useYaml;
      this._forks.internalValue = value.forks;
      this._override.internalValue = value.override;
    }
  }

  // comment_required - computed: false, optional: true, required: false
  private _commentRequired?: string; 
  public get commentRequired() {
    return this.getStringAttribute('comment_required');
  }
  public set commentRequired(value: string) {
    this._commentRequired = value;
  }
  public resetCommentRequired() {
    this._commentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentRequiredInput() {
    return this._commentRequired;
  }

  // initial_branch - computed: false, optional: true, required: false
  private _initialBranch?: string; 
  public get initialBranch() {
    return this.getStringAttribute('initial_branch');
  }
  public set initialBranch(value: string) {
    this._initialBranch = value;
  }
  public resetInitialBranch() {
    this._initialBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialBranchInput() {
    return this._initialBranch;
  }

  // use_yaml - computed: false, optional: true, required: false
  private _useYaml?: boolean | cdktf.IResolvable; 
  public get useYaml() {
    return this.getBooleanAttribute('use_yaml');
  }
  public set useYaml(value: boolean | cdktf.IResolvable) {
    this._useYaml = value;
  }
  public resetUseYaml() {
    this._useYaml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useYamlInput() {
    return this._useYaml;
  }

  // forks - computed: false, optional: false, required: true
  private _forks = new BuildDefinitionPullRequestTriggerForksOutputReference(this, "forks");
  public get forks() {
    return this._forks;
  }
  public putForks(value: BuildDefinitionPullRequestTriggerForks) {
    this._forks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forksInput() {
    return this._forks.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new BuildDefinitionPullRequestTriggerOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: BuildDefinitionPullRequestTriggerOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }
}
export interface BuildDefinitionRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#branch_name BuildDefinition#branch_name}
  */
  readonly branchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#github_enterprise_url BuildDefinition#github_enterprise_url}
  */
  readonly githubEnterpriseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#repo_id BuildDefinition#repo_id}
  */
  readonly repoId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#repo_type BuildDefinition#repo_type}
  */
  readonly repoType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#report_build_status BuildDefinition#report_build_status}
  */
  readonly reportBuildStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#service_connection_id BuildDefinition#service_connection_id}
  */
  readonly serviceConnectionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#url BuildDefinition#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#yml_path BuildDefinition#yml_path}
  */
  readonly ymlPath?: string;
}

export function buildDefinitionRepositoryToTerraform(struct?: BuildDefinitionRepositoryOutputReference | BuildDefinitionRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    branch_name: cdktf.stringToTerraform(struct!.branchName),
    github_enterprise_url: cdktf.stringToTerraform(struct!.githubEnterpriseUrl),
    repo_id: cdktf.stringToTerraform(struct!.repoId),
    repo_type: cdktf.stringToTerraform(struct!.repoType),
    report_build_status: cdktf.booleanToTerraform(struct!.reportBuildStatus),
    service_connection_id: cdktf.stringToTerraform(struct!.serviceConnectionId),
    url: cdktf.stringToTerraform(struct!.url),
    yml_path: cdktf.stringToTerraform(struct!.ymlPath),
  }
}


export function buildDefinitionRepositoryToHclTerraform(struct?: BuildDefinitionRepositoryOutputReference | BuildDefinitionRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    branch_name: {
      value: cdktf.stringToHclTerraform(struct!.branchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    github_enterprise_url: {
      value: cdktf.stringToHclTerraform(struct!.githubEnterpriseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_id: {
      value: cdktf.stringToHclTerraform(struct!.repoId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_type: {
      value: cdktf.stringToHclTerraform(struct!.repoType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_build_status: {
      value: cdktf.booleanToHclTerraform(struct!.reportBuildStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_connection_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceConnectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    yml_path: {
      value: cdktf.stringToHclTerraform(struct!.ymlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BuildDefinitionRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchName = this._branchName;
    }
    if (this._githubEnterpriseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubEnterpriseUrl = this._githubEnterpriseUrl;
    }
    if (this._repoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoId = this._repoId;
    }
    if (this._repoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoType = this._repoType;
    }
    if (this._reportBuildStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportBuildStatus = this._reportBuildStatus;
    }
    if (this._serviceConnectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceConnectionId = this._serviceConnectionId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._ymlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.ymlPath = this._ymlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchName = undefined;
      this._githubEnterpriseUrl = undefined;
      this._repoId = undefined;
      this._repoType = undefined;
      this._reportBuildStatus = undefined;
      this._serviceConnectionId = undefined;
      this._url = undefined;
      this._ymlPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchName = value.branchName;
      this._githubEnterpriseUrl = value.githubEnterpriseUrl;
      this._repoId = value.repoId;
      this._repoType = value.repoType;
      this._reportBuildStatus = value.reportBuildStatus;
      this._serviceConnectionId = value.serviceConnectionId;
      this._url = value.url;
      this._ymlPath = value.ymlPath;
    }
  }

  // branch_name - computed: false, optional: true, required: false
  private _branchName?: string; 
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }
  public set branchName(value: string) {
    this._branchName = value;
  }
  public resetBranchName() {
    this._branchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchNameInput() {
    return this._branchName;
  }

  // github_enterprise_url - computed: false, optional: true, required: false
  private _githubEnterpriseUrl?: string; 
  public get githubEnterpriseUrl() {
    return this.getStringAttribute('github_enterprise_url');
  }
  public set githubEnterpriseUrl(value: string) {
    this._githubEnterpriseUrl = value;
  }
  public resetGithubEnterpriseUrl() {
    this._githubEnterpriseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubEnterpriseUrlInput() {
    return this._githubEnterpriseUrl;
  }

  // repo_id - computed: false, optional: false, required: true
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // repo_type - computed: false, optional: false, required: true
  private _repoType?: string; 
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }
  public set repoType(value: string) {
    this._repoType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoTypeInput() {
    return this._repoType;
  }

  // report_build_status - computed: false, optional: true, required: false
  private _reportBuildStatus?: boolean | cdktf.IResolvable; 
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }
  public set reportBuildStatus(value: boolean | cdktf.IResolvable) {
    this._reportBuildStatus = value;
  }
  public resetReportBuildStatus() {
    this._reportBuildStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportBuildStatusInput() {
    return this._reportBuildStatus;
  }

  // service_connection_id - computed: false, optional: true, required: false
  private _serviceConnectionId?: string; 
  public get serviceConnectionId() {
    return this.getStringAttribute('service_connection_id');
  }
  public set serviceConnectionId(value: string) {
    this._serviceConnectionId = value;
  }
  public resetServiceConnectionId() {
    this._serviceConnectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceConnectionIdInput() {
    return this._serviceConnectionId;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // yml_path - computed: false, optional: true, required: false
  private _ymlPath?: string; 
  public get ymlPath() {
    return this.getStringAttribute('yml_path');
  }
  public set ymlPath(value: string) {
    this._ymlPath = value;
  }
  public resetYmlPath() {
    this._ymlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ymlPathInput() {
    return this._ymlPath;
  }
}
export interface BuildDefinitionSchedulesBranchFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#exclude BuildDefinition#exclude}
  */
  readonly exclude?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#include BuildDefinition#include}
  */
  readonly include?: string[];
}

export function buildDefinitionSchedulesBranchFilterToTerraform(struct?: BuildDefinitionSchedulesBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function buildDefinitionSchedulesBranchFilterToHclTerraform(struct?: BuildDefinitionSchedulesBranchFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionSchedulesBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionSchedulesBranchFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionSchedulesBranchFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

export class BuildDefinitionSchedulesBranchFilterList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionSchedulesBranchFilter[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionSchedulesBranchFilterOutputReference {
    return new BuildDefinitionSchedulesBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#days_to_build BuildDefinition#days_to_build}
  */
  readonly daysToBuild: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#schedule_only_with_changes BuildDefinition#schedule_only_with_changes}
  */
  readonly scheduleOnlyWithChanges?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#start_hours BuildDefinition#start_hours}
  */
  readonly startHours?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#start_minutes BuildDefinition#start_minutes}
  */
  readonly startMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#time_zone BuildDefinition#time_zone}
  */
  readonly timeZone?: string;
  /**
  * branch_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#branch_filter BuildDefinition#branch_filter}
  */
  readonly branchFilter: BuildDefinitionSchedulesBranchFilter[] | cdktf.IResolvable;
}

export function buildDefinitionSchedulesToTerraform(struct?: BuildDefinitionSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_to_build: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysToBuild),
    schedule_only_with_changes: cdktf.booleanToTerraform(struct!.scheduleOnlyWithChanges),
    start_hours: cdktf.numberToTerraform(struct!.startHours),
    start_minutes: cdktf.numberToTerraform(struct!.startMinutes),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    branch_filter: cdktf.listMapper(buildDefinitionSchedulesBranchFilterToTerraform, true)(struct!.branchFilter),
  }
}


export function buildDefinitionSchedulesToHclTerraform(struct?: BuildDefinitionSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_to_build: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysToBuild),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule_only_with_changes: {
      value: cdktf.booleanToHclTerraform(struct!.scheduleOnlyWithChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_hours: {
      value: cdktf.numberToHclTerraform(struct!.startHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_minutes: {
      value: cdktf.numberToHclTerraform(struct!.startMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_filter: {
      value: cdktf.listMapperHcl(buildDefinitionSchedulesBranchFilterToHclTerraform, true)(struct!.branchFilter),
      isBlock: true,
      type: "set",
      storageClassType: "BuildDefinitionSchedulesBranchFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysToBuild !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysToBuild = this._daysToBuild;
    }
    if (this._scheduleOnlyWithChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleOnlyWithChanges = this._scheduleOnlyWithChanges;
    }
    if (this._startHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.startHours = this._startHours;
    }
    if (this._startMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.startMinutes = this._startMinutes;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._branchFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchFilter = this._branchFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daysToBuild = undefined;
      this._scheduleOnlyWithChanges = undefined;
      this._startHours = undefined;
      this._startMinutes = undefined;
      this._timeZone = undefined;
      this._branchFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daysToBuild = value.daysToBuild;
      this._scheduleOnlyWithChanges = value.scheduleOnlyWithChanges;
      this._startHours = value.startHours;
      this._startMinutes = value.startMinutes;
      this._timeZone = value.timeZone;
      this._branchFilter.internalValue = value.branchFilter;
    }
  }

  // days_to_build - computed: false, optional: false, required: true
  private _daysToBuild?: string[]; 
  public get daysToBuild() {
    return this.getListAttribute('days_to_build');
  }
  public set daysToBuild(value: string[]) {
    this._daysToBuild = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToBuildInput() {
    return this._daysToBuild;
  }

  // schedule_job_id - computed: true, optional: false, required: false
  public get scheduleJobId() {
    return this.getStringAttribute('schedule_job_id');
  }

  // schedule_only_with_changes - computed: false, optional: true, required: false
  private _scheduleOnlyWithChanges?: boolean | cdktf.IResolvable; 
  public get scheduleOnlyWithChanges() {
    return this.getBooleanAttribute('schedule_only_with_changes');
  }
  public set scheduleOnlyWithChanges(value: boolean | cdktf.IResolvable) {
    this._scheduleOnlyWithChanges = value;
  }
  public resetScheduleOnlyWithChanges() {
    this._scheduleOnlyWithChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleOnlyWithChangesInput() {
    return this._scheduleOnlyWithChanges;
  }

  // start_hours - computed: false, optional: true, required: false
  private _startHours?: number; 
  public get startHours() {
    return this.getNumberAttribute('start_hours');
  }
  public set startHours(value: number) {
    this._startHours = value;
  }
  public resetStartHours() {
    this._startHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startHoursInput() {
    return this._startHours;
  }

  // start_minutes - computed: false, optional: true, required: false
  private _startMinutes?: number; 
  public get startMinutes() {
    return this.getNumberAttribute('start_minutes');
  }
  public set startMinutes(value: number) {
    this._startMinutes = value;
  }
  public resetStartMinutes() {
    this._startMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startMinutesInput() {
    return this._startMinutes;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // branch_filter - computed: false, optional: false, required: true
  private _branchFilter = new BuildDefinitionSchedulesBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }
  public putBranchFilter(value: BuildDefinitionSchedulesBranchFilter[] | cdktf.IResolvable) {
    this._branchFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter.internalValue;
  }
}

export class BuildDefinitionSchedulesList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionSchedules[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionSchedulesOutputReference {
    return new BuildDefinitionSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BuildDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#create BuildDefinition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#delete BuildDefinition#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#read BuildDefinition#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#update BuildDefinition#update}
  */
  readonly update?: string;
}

export function buildDefinitionTimeoutsToTerraform(struct?: BuildDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function buildDefinitionTimeoutsToHclTerraform(struct?: BuildDefinitionTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class BuildDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BuildDefinitionTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface BuildDefinitionVariable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#allow_override BuildDefinition#allow_override}
  */
  readonly allowOverride?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#is_secret BuildDefinition#is_secret}
  */
  readonly isSecret?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#name BuildDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#secret_value BuildDefinition#secret_value}
  */
  readonly secretValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#value BuildDefinition#value}
  */
  readonly value?: string;
}

export function buildDefinitionVariableToTerraform(struct?: BuildDefinitionVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_override: cdktf.booleanToTerraform(struct!.allowOverride),
    is_secret: cdktf.booleanToTerraform(struct!.isSecret),
    name: cdktf.stringToTerraform(struct!.name),
    secret_value: cdktf.stringToTerraform(struct!.secretValue),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function buildDefinitionVariableToHclTerraform(struct?: BuildDefinitionVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_override: {
      value: cdktf.booleanToHclTerraform(struct!.allowOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_secret: {
      value: cdktf.booleanToHclTerraform(struct!.isSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_value: {
      value: cdktf.stringToHclTerraform(struct!.secretValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BuildDefinitionVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BuildDefinitionVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOverride = this._allowOverride;
    }
    if (this._isSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSecret = this._isSecret;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secretValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BuildDefinitionVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowOverride = undefined;
      this._isSecret = undefined;
      this._name = undefined;
      this._secretValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowOverride = value.allowOverride;
      this._isSecret = value.isSecret;
      this._name = value.name;
      this._secretValue = value.secretValue;
      this._value = value.value;
    }
  }

  // allow_override - computed: false, optional: true, required: false
  private _allowOverride?: boolean | cdktf.IResolvable; 
  public get allowOverride() {
    return this.getBooleanAttribute('allow_override');
  }
  public set allowOverride(value: boolean | cdktf.IResolvable) {
    this._allowOverride = value;
  }
  public resetAllowOverride() {
    this._allowOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverrideInput() {
    return this._allowOverride;
  }

  // is_secret - computed: false, optional: true, required: false
  private _isSecret?: boolean | cdktf.IResolvable; 
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }
  public set isSecret(value: boolean | cdktf.IResolvable) {
    this._isSecret = value;
  }
  public resetIsSecret() {
    this._isSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecretInput() {
    return this._isSecret;
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  public resetSecretValue() {
    this._secretValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class BuildDefinitionVariableList extends cdktf.ComplexList {
  public internalValue? : BuildDefinitionVariable[] | cdktf.IResolvable

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
  public get(index: number): BuildDefinitionVariableOutputReference {
    return new BuildDefinitionVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition azuredevops_build_definition}
*/
export class BuildDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_build_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BuildDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BuildDefinition to import
  * @param importFromId The id of the existing BuildDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BuildDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_build_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.2/docs/resources/build_definition azuredevops_build_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuildDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: BuildDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_build_definition',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.2',
        providerVersionConstraint: '1.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPoolName = config.agentPoolName;
    this._agentSpecification = config.agentSpecification;
    this._id = config.id;
    this._jobAuthorizationScope = config.jobAuthorizationScope;
    this._name = config.name;
    this._path = config.path;
    this._projectId = config.projectId;
    this._queueStatus = config.queueStatus;
    this._variableGroups = config.variableGroups;
    this._buildCompletionTrigger.internalValue = config.buildCompletionTrigger;
    this._ciTrigger.internalValue = config.ciTrigger;
    this._features.internalValue = config.features;
    this._jobs.internalValue = config.jobs;
    this._pullRequestTrigger.internalValue = config.pullRequestTrigger;
    this._repository.internalValue = config.repository;
    this._schedules.internalValue = config.schedules;
    this._timeouts.internalValue = config.timeouts;
    this._variable.internalValue = config.variable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_name - computed: false, optional: true, required: false
  private _agentPoolName?: string; 
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }
  public set agentPoolName(value: string) {
    this._agentPoolName = value;
  }
  public resetAgentPoolName() {
    this._agentPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolNameInput() {
    return this._agentPoolName;
  }

  // agent_specification - computed: false, optional: true, required: false
  private _agentSpecification?: string; 
  public get agentSpecification() {
    return this.getStringAttribute('agent_specification');
  }
  public set agentSpecification(value: string) {
    this._agentSpecification = value;
  }
  public resetAgentSpecification() {
    this._agentSpecification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentSpecificationInput() {
    return this._agentSpecification;
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

  // job_authorization_scope - computed: false, optional: true, required: false
  private _jobAuthorizationScope?: string; 
  public get jobAuthorizationScope() {
    return this.getStringAttribute('job_authorization_scope');
  }
  public set jobAuthorizationScope(value: string) {
    this._jobAuthorizationScope = value;
  }
  public resetJobAuthorizationScope() {
    this._jobAuthorizationScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobAuthorizationScopeInput() {
    return this._jobAuthorizationScope;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // queue_status - computed: false, optional: true, required: false
  private _queueStatus?: string; 
  public get queueStatus() {
    return this.getStringAttribute('queue_status');
  }
  public set queueStatus(value: string) {
    this._queueStatus = value;
  }
  public resetQueueStatus() {
    this._queueStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueStatusInput() {
    return this._queueStatus;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // variable_groups - computed: false, optional: true, required: false
  private _variableGroups?: number[]; 
  public get variableGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('variable_groups')));
  }
  public set variableGroups(value: number[]) {
    this._variableGroups = value;
  }
  public resetVariableGroups() {
    this._variableGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupsInput() {
    return this._variableGroups;
  }

  // build_completion_trigger - computed: false, optional: true, required: false
  private _buildCompletionTrigger = new BuildDefinitionBuildCompletionTriggerList(this, "build_completion_trigger", false);
  public get buildCompletionTrigger() {
    return this._buildCompletionTrigger;
  }
  public putBuildCompletionTrigger(value: BuildDefinitionBuildCompletionTrigger[] | cdktf.IResolvable) {
    this._buildCompletionTrigger.internalValue = value;
  }
  public resetBuildCompletionTrigger() {
    this._buildCompletionTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildCompletionTriggerInput() {
    return this._buildCompletionTrigger.internalValue;
  }

  // ci_trigger - computed: false, optional: true, required: false
  private _ciTrigger = new BuildDefinitionCiTriggerOutputReference(this, "ci_trigger");
  public get ciTrigger() {
    return this._ciTrigger;
  }
  public putCiTrigger(value: BuildDefinitionCiTrigger) {
    this._ciTrigger.internalValue = value;
  }
  public resetCiTrigger() {
    this._ciTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciTriggerInput() {
    return this._ciTrigger.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new BuildDefinitionFeaturesList(this, "features", false);
  public get features() {
    return this._features;
  }
  public putFeatures(value: BuildDefinitionFeatures[] | cdktf.IResolvable) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs = new BuildDefinitionJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: BuildDefinitionJobs[] | cdktf.IResolvable) {
    this._jobs.internalValue = value;
  }
  public resetJobs() {
    this._jobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs.internalValue;
  }

  // pull_request_trigger - computed: false, optional: true, required: false
  private _pullRequestTrigger = new BuildDefinitionPullRequestTriggerOutputReference(this, "pull_request_trigger");
  public get pullRequestTrigger() {
    return this._pullRequestTrigger;
  }
  public putPullRequestTrigger(value: BuildDefinitionPullRequestTrigger) {
    this._pullRequestTrigger.internalValue = value;
  }
  public resetPullRequestTrigger() {
    this._pullRequestTrigger.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullRequestTriggerInput() {
    return this._pullRequestTrigger.internalValue;
  }

  // repository - computed: false, optional: false, required: true
  private _repository = new BuildDefinitionRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: BuildDefinitionRepository) {
    this._repository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules = new BuildDefinitionSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }
  public putSchedules(value: BuildDefinitionSchedules[] | cdktf.IResolvable) {
    this._schedules.internalValue = value;
  }
  public resetSchedules() {
    this._schedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BuildDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BuildDefinitionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // variable - computed: false, optional: true, required: false
  private _variable = new BuildDefinitionVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }
  public putVariable(value: BuildDefinitionVariable[] | cdktf.IResolvable) {
    this._variable.internalValue = value;
  }
  public resetVariable() {
    this._variable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool_name: cdktf.stringToTerraform(this._agentPoolName),
      agent_specification: cdktf.stringToTerraform(this._agentSpecification),
      id: cdktf.stringToTerraform(this._id),
      job_authorization_scope: cdktf.stringToTerraform(this._jobAuthorizationScope),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_id: cdktf.stringToTerraform(this._projectId),
      queue_status: cdktf.stringToTerraform(this._queueStatus),
      variable_groups: cdktf.listMapper(cdktf.numberToTerraform, false)(this._variableGroups),
      build_completion_trigger: cdktf.listMapper(buildDefinitionBuildCompletionTriggerToTerraform, true)(this._buildCompletionTrigger.internalValue),
      ci_trigger: buildDefinitionCiTriggerToTerraform(this._ciTrigger.internalValue),
      features: cdktf.listMapper(buildDefinitionFeaturesToTerraform, true)(this._features.internalValue),
      jobs: cdktf.listMapper(buildDefinitionJobsToTerraform, true)(this._jobs.internalValue),
      pull_request_trigger: buildDefinitionPullRequestTriggerToTerraform(this._pullRequestTrigger.internalValue),
      repository: buildDefinitionRepositoryToTerraform(this._repository.internalValue),
      schedules: cdktf.listMapper(buildDefinitionSchedulesToTerraform, true)(this._schedules.internalValue),
      timeouts: buildDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
      variable: cdktf.listMapper(buildDefinitionVariableToTerraform, true)(this._variable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_pool_name: {
        value: cdktf.stringToHclTerraform(this._agentPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_specification: {
        value: cdktf.stringToHclTerraform(this._agentSpecification),
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
      job_authorization_scope: {
        value: cdktf.stringToHclTerraform(this._jobAuthorizationScope),
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
      path: {
        value: cdktf.stringToHclTerraform(this._path),
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
      queue_status: {
        value: cdktf.stringToHclTerraform(this._queueStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_groups: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._variableGroups),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      build_completion_trigger: {
        value: cdktf.listMapperHcl(buildDefinitionBuildCompletionTriggerToHclTerraform, true)(this._buildCompletionTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionBuildCompletionTriggerList",
      },
      ci_trigger: {
        value: buildDefinitionCiTriggerToHclTerraform(this._ciTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionCiTriggerList",
      },
      features: {
        value: cdktf.listMapperHcl(buildDefinitionFeaturesToHclTerraform, true)(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionFeaturesList",
      },
      jobs: {
        value: cdktf.listMapperHcl(buildDefinitionJobsToHclTerraform, true)(this._jobs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionJobsList",
      },
      pull_request_trigger: {
        value: buildDefinitionPullRequestTriggerToHclTerraform(this._pullRequestTrigger.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionPullRequestTriggerList",
      },
      repository: {
        value: buildDefinitionRepositoryToHclTerraform(this._repository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionRepositoryList",
      },
      schedules: {
        value: cdktf.listMapperHcl(buildDefinitionSchedulesToHclTerraform, true)(this._schedules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BuildDefinitionSchedulesList",
      },
      timeouts: {
        value: buildDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BuildDefinitionTimeouts",
      },
      variable: {
        value: cdktf.listMapperHcl(buildDefinitionVariableToHclTerraform, true)(this._variable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BuildDefinitionVariableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
