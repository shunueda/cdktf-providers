// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzuredevopsBuildDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#id DataAzuredevopsBuildDefinition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#name DataAzuredevopsBuildDefinition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#path DataAzuredevopsBuildDefinition#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#project_id DataAzuredevopsBuildDefinition#project_id}
  */
  readonly projectId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#timeouts DataAzuredevopsBuildDefinition#timeouts}
  */
  readonly timeouts?: DataAzuredevopsBuildDefinitionTimeouts;
}
export interface DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilter {
}

export function dataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterToTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterToHclTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterOutputReference {
    return new DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilter {
}

export function dataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterToTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterToHclTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterOutputReference {
    return new DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionCiTriggerOverride {
}

export function dataAzuredevopsBuildDefinitionCiTriggerOverrideToTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionCiTriggerOverrideToHclTerraform(struct?: DataAzuredevopsBuildDefinitionCiTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionCiTriggerOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionCiTriggerOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // batch - computed: true, optional: false, required: false
  public get batch() {
    return this.getBooleanAttribute('batch');
  }

  // branch_filter - computed: true, optional: false, required: false
  private _branchFilter = new DataAzuredevopsBuildDefinitionCiTriggerOverrideBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }

  // max_concurrent_builds_per_branch - computed: true, optional: false, required: false
  public get maxConcurrentBuildsPerBranch() {
    return this.getNumberAttribute('max_concurrent_builds_per_branch');
  }

  // path_filter - computed: true, optional: false, required: false
  private _pathFilter = new DataAzuredevopsBuildDefinitionCiTriggerOverridePathFilterList(this, "path_filter", true);
  public get pathFilter() {
    return this._pathFilter;
  }

  // polling_interval - computed: true, optional: false, required: false
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }

  // polling_job_id - computed: true, optional: false, required: false
  public get pollingJobId() {
    return this.getStringAttribute('polling_job_id');
  }
}

export class DataAzuredevopsBuildDefinitionCiTriggerOverrideList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionCiTriggerOverrideOutputReference {
    return new DataAzuredevopsBuildDefinitionCiTriggerOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionCiTrigger {
}

export function dataAzuredevopsBuildDefinitionCiTriggerToTerraform(struct?: DataAzuredevopsBuildDefinitionCiTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionCiTriggerToHclTerraform(struct?: DataAzuredevopsBuildDefinitionCiTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionCiTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionCiTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionCiTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataAzuredevopsBuildDefinitionCiTriggerOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }

  // use_yaml - computed: true, optional: false, required: false
  public get useYaml() {
    return this.getBooleanAttribute('use_yaml');
  }
}

export class DataAzuredevopsBuildDefinitionCiTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionCiTriggerOutputReference {
    return new DataAzuredevopsBuildDefinitionCiTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionJobsDependencies {
}

export function dataAzuredevopsBuildDefinitionJobsDependenciesToTerraform(struct?: DataAzuredevopsBuildDefinitionJobsDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionJobsDependenciesToHclTerraform(struct?: DataAzuredevopsBuildDefinitionJobsDependencies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionJobsDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionJobsDependencies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionJobsDependencies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataAzuredevopsBuildDefinitionJobsDependenciesList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionJobsDependenciesOutputReference {
    return new DataAzuredevopsBuildDefinitionJobsDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionJobsTargetExecutionOptions {
}

export function dataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsToTerraform(struct?: DataAzuredevopsBuildDefinitionJobsTargetExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsToHclTerraform(struct?: DataAzuredevopsBuildDefinitionJobsTargetExecutionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionJobsTargetExecutionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionJobsTargetExecutionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // continue_on_error - computed: true, optional: false, required: false
  public get continueOnError() {
    return this.getBooleanAttribute('continue_on_error');
  }

  // max_concurrency - computed: true, optional: false, required: false
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }

  // multipliers - computed: true, optional: false, required: false
  public get multipliers() {
    return this.getStringAttribute('multipliers');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsOutputReference {
    return new DataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionJobsTarget {
}

export function dataAzuredevopsBuildDefinitionJobsTargetToTerraform(struct?: DataAzuredevopsBuildDefinitionJobsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionJobsTargetToHclTerraform(struct?: DataAzuredevopsBuildDefinitionJobsTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionJobsTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionJobsTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionJobsTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // demands - computed: true, optional: false, required: false
  public get demands() {
    return this.getListAttribute('demands');
  }

  // execution_options - computed: true, optional: false, required: false
  private _executionOptions = new DataAzuredevopsBuildDefinitionJobsTargetExecutionOptionsList(this, "execution_options", false);
  public get executionOptions() {
    return this._executionOptions;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAzuredevopsBuildDefinitionJobsTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionJobsTargetOutputReference {
    return new DataAzuredevopsBuildDefinitionJobsTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionJobs {
}

export function dataAzuredevopsBuildDefinitionJobsToTerraform(struct?: DataAzuredevopsBuildDefinitionJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionJobsToHclTerraform(struct?: DataAzuredevopsBuildDefinitionJobs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionJobs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionJobs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_scripts_auth_access_option - computed: true, optional: false, required: false
  public get allowScriptsAuthAccessOption() {
    return this.getBooleanAttribute('allow_scripts_auth_access_option');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // dependencies - computed: true, optional: false, required: false
  private _dependencies = new DataAzuredevopsBuildDefinitionJobsDependenciesList(this, "dependencies", false);
  public get dependencies() {
    return this._dependencies;
  }

  // job_authorization_scope - computed: true, optional: false, required: false
  public get jobAuthorizationScope() {
    return this.getStringAttribute('job_authorization_scope');
  }

  // job_cancel_timeout_in_minutes - computed: true, optional: false, required: false
  public get jobCancelTimeoutInMinutes() {
    return this.getNumberAttribute('job_cancel_timeout_in_minutes');
  }

  // job_timeout_in_minutes - computed: true, optional: false, required: false
  public get jobTimeoutInMinutes() {
    return this.getNumberAttribute('job_timeout_in_minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref_name - computed: true, optional: false, required: false
  public get refName() {
    return this.getStringAttribute('ref_name');
  }

  // target - computed: true, optional: false, required: false
  private _target = new DataAzuredevopsBuildDefinitionJobsTargetList(this, "target", false);
  public get target() {
    return this._target;
  }
}

export class DataAzuredevopsBuildDefinitionJobsList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionJobsOutputReference {
    return new DataAzuredevopsBuildDefinitionJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionPullRequestTriggerForks {
}

export function dataAzuredevopsBuildDefinitionPullRequestTriggerForksToTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerForks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionPullRequestTriggerForksToHclTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerForks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerForksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionPullRequestTriggerForks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionPullRequestTriggerForks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // share_secrets - computed: true, optional: false, required: false
  public get shareSecrets() {
    return this.getBooleanAttribute('share_secrets');
  }
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerForksList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionPullRequestTriggerForksOutputReference {
    return new DataAzuredevopsBuildDefinitionPullRequestTriggerForksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilter {
}

export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterToTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterToHclTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference {
    return new DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilter {
}

export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterToTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterToHclTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterOutputReference {
    return new DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionPullRequestTriggerOverride {
}

export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverrideToTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionPullRequestTriggerOverrideToHclTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTriggerOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionPullRequestTriggerOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionPullRequestTriggerOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_cancel - computed: true, optional: false, required: false
  public get autoCancel() {
    return this.getBooleanAttribute('auto_cancel');
  }

  // branch_filter - computed: true, optional: false, required: false
  private _branchFilter = new DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }

  // path_filter - computed: true, optional: false, required: false
  private _pathFilter = new DataAzuredevopsBuildDefinitionPullRequestTriggerOverridePathFilterList(this, "path_filter", true);
  public get pathFilter() {
    return this._pathFilter;
  }
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideOutputReference {
    return new DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionPullRequestTrigger {
}

export function dataAzuredevopsBuildDefinitionPullRequestTriggerToTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionPullRequestTriggerToHclTerraform(struct?: DataAzuredevopsBuildDefinitionPullRequestTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionPullRequestTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionPullRequestTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment_required - computed: true, optional: false, required: false
  public get commentRequired() {
    return this.getStringAttribute('comment_required');
  }

  // forks - computed: true, optional: false, required: false
  private _forks = new DataAzuredevopsBuildDefinitionPullRequestTriggerForksList(this, "forks", false);
  public get forks() {
    return this._forks;
  }

  // initial_branch - computed: true, optional: false, required: false
  public get initialBranch() {
    return this.getStringAttribute('initial_branch');
  }

  // override - computed: true, optional: false, required: false
  private _override = new DataAzuredevopsBuildDefinitionPullRequestTriggerOverrideList(this, "override", false);
  public get override() {
    return this._override;
  }

  // use_yaml - computed: true, optional: false, required: false
  public get useYaml() {
    return this.getBooleanAttribute('use_yaml');
  }
}

export class DataAzuredevopsBuildDefinitionPullRequestTriggerList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionPullRequestTriggerOutputReference {
    return new DataAzuredevopsBuildDefinitionPullRequestTriggerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionRepository {
}

export function dataAzuredevopsBuildDefinitionRepositoryToTerraform(struct?: DataAzuredevopsBuildDefinitionRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionRepositoryToHclTerraform(struct?: DataAzuredevopsBuildDefinitionRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionRepositoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_name - computed: true, optional: false, required: false
  public get branchName() {
    return this.getStringAttribute('branch_name');
  }

  // github_enterprise_url - computed: true, optional: false, required: false
  public get githubEnterpriseUrl() {
    return this.getStringAttribute('github_enterprise_url');
  }

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_type - computed: true, optional: false, required: false
  public get repoType() {
    return this.getStringAttribute('repo_type');
  }

  // report_build_status - computed: true, optional: false, required: false
  public get reportBuildStatus() {
    return this.getBooleanAttribute('report_build_status');
  }

  // service_connection_id - computed: true, optional: false, required: false
  public get serviceConnectionId() {
    return this.getStringAttribute('service_connection_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // yml_path - computed: true, optional: false, required: false
  public get ymlPath() {
    return this.getStringAttribute('yml_path');
  }
}

export class DataAzuredevopsBuildDefinitionRepositoryList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionRepositoryOutputReference {
    return new DataAzuredevopsBuildDefinitionRepositoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionSchedulesBranchFilter {
}

export function dataAzuredevopsBuildDefinitionSchedulesBranchFilterToTerraform(struct?: DataAzuredevopsBuildDefinitionSchedulesBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionSchedulesBranchFilterToHclTerraform(struct?: DataAzuredevopsBuildDefinitionSchedulesBranchFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionSchedulesBranchFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionSchedulesBranchFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionSchedulesBranchFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude'));
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return cdktf.Fn.tolist(this.getListAttribute('include'));
  }
}

export class DataAzuredevopsBuildDefinitionSchedulesBranchFilterList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionSchedulesBranchFilterOutputReference {
    return new DataAzuredevopsBuildDefinitionSchedulesBranchFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionSchedules {
}

export function dataAzuredevopsBuildDefinitionSchedulesToTerraform(struct?: DataAzuredevopsBuildDefinitionSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionSchedulesToHclTerraform(struct?: DataAzuredevopsBuildDefinitionSchedules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionSchedules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionSchedules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch_filter - computed: true, optional: false, required: false
  private _branchFilter = new DataAzuredevopsBuildDefinitionSchedulesBranchFilterList(this, "branch_filter", true);
  public get branchFilter() {
    return this._branchFilter;
  }

  // days_to_build - computed: true, optional: false, required: false
  public get daysToBuild() {
    return this.getListAttribute('days_to_build');
  }

  // schedule_job_id - computed: true, optional: false, required: false
  public get scheduleJobId() {
    return this.getStringAttribute('schedule_job_id');
  }

  // schedule_only_with_changes - computed: true, optional: false, required: false
  public get scheduleOnlyWithChanges() {
    return this.getBooleanAttribute('schedule_only_with_changes');
  }

  // start_hours - computed: true, optional: false, required: false
  public get startHours() {
    return this.getNumberAttribute('start_hours');
  }

  // start_minutes - computed: true, optional: false, required: false
  public get startMinutes() {
    return this.getNumberAttribute('start_minutes');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
}

export class DataAzuredevopsBuildDefinitionSchedulesList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionSchedulesOutputReference {
    return new DataAzuredevopsBuildDefinitionSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionVariable {
}

export function dataAzuredevopsBuildDefinitionVariableToTerraform(struct?: DataAzuredevopsBuildDefinitionVariable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsBuildDefinitionVariableToHclTerraform(struct?: DataAzuredevopsBuildDefinitionVariable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsBuildDefinitionVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsBuildDefinitionVariable | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionVariable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_override - computed: true, optional: false, required: false
  public get allowOverride() {
    return this.getBooleanAttribute('allow_override');
  }

  // is_secret - computed: true, optional: false, required: false
  public get isSecret() {
    return this.getBooleanAttribute('is_secret');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // secret_value - computed: true, optional: false, required: false
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataAzuredevopsBuildDefinitionVariableList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsBuildDefinitionVariableOutputReference {
    return new DataAzuredevopsBuildDefinitionVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsBuildDefinitionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#read DataAzuredevopsBuildDefinition#read}
  */
  readonly read?: string;
}

export function dataAzuredevopsBuildDefinitionTimeoutsToTerraform(struct?: DataAzuredevopsBuildDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzuredevopsBuildDefinitionTimeoutsToHclTerraform(struct?: DataAzuredevopsBuildDefinitionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzuredevopsBuildDefinitionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzuredevopsBuildDefinitionTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsBuildDefinitionTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition azuredevops_build_definition}
*/
export class DataAzuredevopsBuildDefinition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_build_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzuredevopsBuildDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzuredevopsBuildDefinition to import
  * @param importFromId The id of the existing DataAzuredevopsBuildDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzuredevopsBuildDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_build_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.0/docs/data-sources/build_definition azuredevops_build_definition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzuredevopsBuildDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzuredevopsBuildDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_build_definition',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.0',
        providerVersionConstraint: '1.12.0'
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
    this._name = config.name;
    this._path = config.path;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_name - computed: true, optional: false, required: false
  public get agentPoolName() {
    return this.getStringAttribute('agent_pool_name');
  }

  // agent_specification - computed: true, optional: false, required: false
  public get agentSpecification() {
    return this.getStringAttribute('agent_specification');
  }

  // ci_trigger - computed: true, optional: false, required: false
  private _ciTrigger = new DataAzuredevopsBuildDefinitionCiTriggerList(this, "ci_trigger", false);
  public get ciTrigger() {
    return this._ciTrigger;
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

  // job_authorization_scope - computed: true, optional: false, required: false
  public get jobAuthorizationScope() {
    return this.getStringAttribute('job_authorization_scope');
  }

  // jobs - computed: true, optional: false, required: false
  private _jobs = new DataAzuredevopsBuildDefinitionJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
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

  // pull_request_trigger - computed: true, optional: false, required: false
  private _pullRequestTrigger = new DataAzuredevopsBuildDefinitionPullRequestTriggerList(this, "pull_request_trigger", false);
  public get pullRequestTrigger() {
    return this._pullRequestTrigger;
  }

  // queue_status - computed: true, optional: false, required: false
  public get queueStatus() {
    return this.getStringAttribute('queue_status');
  }

  // repository - computed: true, optional: false, required: false
  private _repository = new DataAzuredevopsBuildDefinitionRepositoryList(this, "repository", false);
  public get repository() {
    return this._repository;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // schedules - computed: true, optional: false, required: false
  private _schedules = new DataAzuredevopsBuildDefinitionSchedulesList(this, "schedules", false);
  public get schedules() {
    return this._schedules;
  }

  // variable - computed: true, optional: false, required: false
  private _variable = new DataAzuredevopsBuildDefinitionVariableList(this, "variable", true);
  public get variable() {
    return this._variable;
  }

  // variable_groups - computed: true, optional: false, required: false
  public get variableGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('variable_groups')));
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzuredevopsBuildDefinitionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzuredevopsBuildDefinitionTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: dataAzuredevopsBuildDefinitionTimeoutsToTerraform(this._timeouts.internalValue),
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
      timeouts: {
        value: dataAzuredevopsBuildDefinitionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzuredevopsBuildDefinitionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
