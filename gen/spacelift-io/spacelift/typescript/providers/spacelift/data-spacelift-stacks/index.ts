// https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftStacksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#id DataSpaceliftStacks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * administrative block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#administrative DataSpaceliftStacks#administrative}
  */
  readonly administrative?: DataSpaceliftStacksAdministrative;
  /**
  * branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#branch DataSpaceliftStacks#branch}
  */
  readonly branch?: DataSpaceliftStacksBranch;
  /**
  * commit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#commit DataSpaceliftStacks#commit}
  */
  readonly commit?: DataSpaceliftStacksCommit;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#labels DataSpaceliftStacks#labels}
  */
  readonly labels?: DataSpaceliftStacksLabels[] | cdktf.IResolvable;
  /**
  * locked block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#locked DataSpaceliftStacks#locked}
  */
  readonly locked?: DataSpaceliftStacksLocked;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#name DataSpaceliftStacks#name}
  */
  readonly name?: DataSpaceliftStacksName;
  /**
  * project_root block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#project_root DataSpaceliftStacks#project_root}
  */
  readonly projectRoot?: DataSpaceliftStacksProjectRoot;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#repository DataSpaceliftStacks#repository}
  */
  readonly repository?: DataSpaceliftStacksRepository;
  /**
  * state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#state DataSpaceliftStacks#state}
  */
  readonly state?: DataSpaceliftStacksState;
  /**
  * vendor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#vendor DataSpaceliftStacks#vendor}
  */
  readonly vendor?: DataSpaceliftStacksVendor;
  /**
  * worker_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#worker_pool DataSpaceliftStacks#worker_pool}
  */
  readonly workerPool?: DataSpaceliftStacksWorkerPool;
}
export interface DataSpaceliftStacksStacksAnsible {
}

export function dataSpaceliftStacksStacksAnsibleToTerraform(struct?: DataSpaceliftStacksStacksAnsible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksAnsibleToHclTerraform(struct?: DataSpaceliftStacksStacksAnsible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksAnsibleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksAnsible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksAnsible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // playbook - computed: true, optional: false, required: false
  public get playbook() {
    return this.getStringAttribute('playbook');
  }
}

export class DataSpaceliftStacksStacksAnsibleList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksAnsibleOutputReference {
    return new DataSpaceliftStacksStacksAnsibleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksAzureDevops {
}

export function dataSpaceliftStacksStacksAzureDevopsToTerraform(struct?: DataSpaceliftStacksStacksAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksAzureDevopsToHclTerraform(struct?: DataSpaceliftStacksStacksAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksAzureDevopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksAzureDevops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksAzureDevops | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}

export class DataSpaceliftStacksStacksAzureDevopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksAzureDevopsOutputReference {
    return new DataSpaceliftStacksStacksAzureDevopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksBitbucketCloud {
}

export function dataSpaceliftStacksStacksBitbucketCloudToTerraform(struct?: DataSpaceliftStacksStacksBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksBitbucketCloudToHclTerraform(struct?: DataSpaceliftStacksStacksBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksBitbucketCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksBitbucketCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksBitbucketCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksBitbucketCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksBitbucketCloudOutputReference {
    return new DataSpaceliftStacksStacksBitbucketCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksBitbucketDatacenter {
}

export function dataSpaceliftStacksStacksBitbucketDatacenterToTerraform(struct?: DataSpaceliftStacksStacksBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksBitbucketDatacenterToHclTerraform(struct?: DataSpaceliftStacksStacksBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksBitbucketDatacenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksBitbucketDatacenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksBitbucketDatacenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksBitbucketDatacenterList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksBitbucketDatacenterOutputReference {
    return new DataSpaceliftStacksStacksBitbucketDatacenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksCloudformation {
}

export function dataSpaceliftStacksStacksCloudformationToTerraform(struct?: DataSpaceliftStacksStacksCloudformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksCloudformationToHclTerraform(struct?: DataSpaceliftStacksStacksCloudformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksCloudformationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksCloudformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksCloudformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entry_template_file - computed: true, optional: false, required: false
  public get entryTemplateFile() {
    return this.getStringAttribute('entry_template_file');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // stack_name - computed: true, optional: false, required: false
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }

  // template_bucket - computed: true, optional: false, required: false
  public get templateBucket() {
    return this.getStringAttribute('template_bucket');
  }
}

export class DataSpaceliftStacksStacksCloudformationList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksCloudformationOutputReference {
    return new DataSpaceliftStacksStacksCloudformationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksGithubEnterprise {
}

export function dataSpaceliftStacksStacksGithubEnterpriseToTerraform(struct?: DataSpaceliftStacksStacksGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksGithubEnterpriseToHclTerraform(struct?: DataSpaceliftStacksStacksGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksGithubEnterpriseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksGithubEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksGithubEnterprise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksGithubEnterpriseList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksGithubEnterpriseOutputReference {
    return new DataSpaceliftStacksStacksGithubEnterpriseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksGitlab {
}

export function dataSpaceliftStacksStacksGitlabToTerraform(struct?: DataSpaceliftStacksStacksGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksGitlabToHclTerraform(struct?: DataSpaceliftStacksStacksGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksGitlabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksGitlab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_default - computed: true, optional: false, required: false
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksGitlabList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksGitlabOutputReference {
    return new DataSpaceliftStacksStacksGitlabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksKubernetes {
}

export function dataSpaceliftStacksStacksKubernetesToTerraform(struct?: DataSpaceliftStacksStacksKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksKubernetesToHclTerraform(struct?: DataSpaceliftStacksStacksKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksKubernetesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // kubectl_version - computed: true, optional: false, required: false
  public get kubectlVersion() {
    return this.getStringAttribute('kubectl_version');
  }

  // kubernetes_workflow_tool - computed: true, optional: false, required: false
  public get kubernetesWorkflowTool() {
    return this.getStringAttribute('kubernetes_workflow_tool');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksKubernetesList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksKubernetesOutputReference {
    return new DataSpaceliftStacksStacksKubernetesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksPulumi {
}

export function dataSpaceliftStacksStacksPulumiToTerraform(struct?: DataSpaceliftStacksStacksPulumi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksPulumiToHclTerraform(struct?: DataSpaceliftStacksStacksPulumi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksPulumiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksPulumi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksPulumi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // login_url - computed: true, optional: false, required: false
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }

  // stack_name - computed: true, optional: false, required: false
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
}

export class DataSpaceliftStacksStacksPulumiList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksPulumiOutputReference {
    return new DataSpaceliftStacksStacksPulumiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksRawGit {
}

export function dataSpaceliftStacksStacksRawGitToTerraform(struct?: DataSpaceliftStacksStacksRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksRawGitToHclTerraform(struct?: DataSpaceliftStacksStacksRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksRawGitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksRawGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksRawGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataSpaceliftStacksStacksRawGitList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksRawGitOutputReference {
    return new DataSpaceliftStacksStacksRawGitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksShowcase {
}

export function dataSpaceliftStacksStacksShowcaseToTerraform(struct?: DataSpaceliftStacksStacksShowcase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksShowcaseToHclTerraform(struct?: DataSpaceliftStacksStacksShowcase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksShowcaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksShowcase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksShowcase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataSpaceliftStacksStacksShowcaseList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksShowcaseOutputReference {
    return new DataSpaceliftStacksStacksShowcaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacksTerragrunt {
}

export function dataSpaceliftStacksStacksTerragruntToTerraform(struct?: DataSpaceliftStacksStacksTerragrunt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksTerragruntToHclTerraform(struct?: DataSpaceliftStacksStacksTerragrunt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksTerragruntOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacksTerragrunt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacksTerragrunt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // terragrunt_version - computed: true, optional: false, required: false
  public get terragruntVersion() {
    return this.getStringAttribute('terragrunt_version');
  }

  // tool - computed: true, optional: false, required: false
  public get tool() {
    return this.getStringAttribute('tool');
  }

  // use_run_all - computed: true, optional: false, required: false
  public get useRunAll() {
    return this.getBooleanAttribute('use_run_all');
  }

  // use_smart_sanitization - computed: true, optional: false, required: false
  public get useSmartSanitization() {
    return this.getBooleanAttribute('use_smart_sanitization');
  }
}

export class DataSpaceliftStacksStacksTerragruntList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksTerragruntOutputReference {
    return new DataSpaceliftStacksStacksTerragruntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksStacks {
}

export function dataSpaceliftStacksStacksToTerraform(struct?: DataSpaceliftStacksStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftStacksStacksToHclTerraform(struct?: DataSpaceliftStacksStacks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftStacksStacksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksStacks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksStacks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_project_globs - computed: true, optional: false, required: false
  public get additionalProjectGlobs() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_project_globs'));
  }

  // administrative - computed: true, optional: false, required: false
  public get administrative() {
    return this.getBooleanAttribute('administrative');
  }

  // after_apply - computed: true, optional: false, required: false
  public get afterApply() {
    return this.getListAttribute('after_apply');
  }

  // after_destroy - computed: true, optional: false, required: false
  public get afterDestroy() {
    return this.getListAttribute('after_destroy');
  }

  // after_init - computed: true, optional: false, required: false
  public get afterInit() {
    return this.getListAttribute('after_init');
  }

  // after_perform - computed: true, optional: false, required: false
  public get afterPerform() {
    return this.getListAttribute('after_perform');
  }

  // after_plan - computed: true, optional: false, required: false
  public get afterPlan() {
    return this.getListAttribute('after_plan');
  }

  // after_run - computed: true, optional: false, required: false
  public get afterRun() {
    return this.getListAttribute('after_run');
  }

  // ansible - computed: true, optional: false, required: false
  private _ansible = new DataSpaceliftStacksStacksAnsibleList(this, "ansible", false);
  public get ansible() {
    return this._ansible;
  }

  // autodeploy - computed: true, optional: false, required: false
  public get autodeploy() {
    return this.getBooleanAttribute('autodeploy');
  }

  // autoretry - computed: true, optional: false, required: false
  public get autoretry() {
    return this.getBooleanAttribute('autoretry');
  }

  // aws_assume_role_policy_statement - computed: true, optional: false, required: false
  public get awsAssumeRolePolicyStatement() {
    return this.getStringAttribute('aws_assume_role_policy_statement');
  }

  // azure_devops - computed: true, optional: false, required: false
  private _azureDevops = new DataSpaceliftStacksStacksAzureDevopsList(this, "azure_devops", false);
  public get azureDevops() {
    return this._azureDevops;
  }

  // before_apply - computed: true, optional: false, required: false
  public get beforeApply() {
    return this.getListAttribute('before_apply');
  }

  // before_destroy - computed: true, optional: false, required: false
  public get beforeDestroy() {
    return this.getListAttribute('before_destroy');
  }

  // before_init - computed: true, optional: false, required: false
  public get beforeInit() {
    return this.getListAttribute('before_init');
  }

  // before_perform - computed: true, optional: false, required: false
  public get beforePerform() {
    return this.getListAttribute('before_perform');
  }

  // before_plan - computed: true, optional: false, required: false
  public get beforePlan() {
    return this.getListAttribute('before_plan');
  }

  // bitbucket_cloud - computed: true, optional: false, required: false
  private _bitbucketCloud = new DataSpaceliftStacksStacksBitbucketCloudList(this, "bitbucket_cloud", false);
  public get bitbucketCloud() {
    return this._bitbucketCloud;
  }

  // bitbucket_datacenter - computed: true, optional: false, required: false
  private _bitbucketDatacenter = new DataSpaceliftStacksStacksBitbucketDatacenterList(this, "bitbucket_datacenter", false);
  public get bitbucketDatacenter() {
    return this._bitbucketDatacenter;
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // cloudformation - computed: true, optional: false, required: false
  private _cloudformation = new DataSpaceliftStacksStacksCloudformationList(this, "cloudformation", false);
  public get cloudformation() {
    return this._cloudformation;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_local_preview - computed: true, optional: false, required: false
  public get enableLocalPreview() {
    return this.getBooleanAttribute('enable_local_preview');
  }

  // enable_sensitive_outputs_upload - computed: true, optional: false, required: false
  public get enableSensitiveOutputsUpload() {
    return this.getBooleanAttribute('enable_sensitive_outputs_upload');
  }

  // enable_well_known_secret_masking - computed: true, optional: false, required: false
  public get enableWellKnownSecretMasking() {
    return this.getBooleanAttribute('enable_well_known_secret_masking');
  }

  // git_sparse_checkout_paths - computed: true, optional: false, required: false
  public get gitSparseCheckoutPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('git_sparse_checkout_paths'));
  }

  // github_enterprise - computed: true, optional: false, required: false
  private _githubEnterprise = new DataSpaceliftStacksStacksGithubEnterpriseList(this, "github_enterprise", false);
  public get githubEnterprise() {
    return this._githubEnterprise;
  }

  // gitlab - computed: true, optional: false, required: false
  private _gitlab = new DataSpaceliftStacksStacksGitlabList(this, "gitlab", false);
  public get gitlab() {
    return this._gitlab;
  }

  // kubernetes - computed: true, optional: false, required: false
  private _kubernetes = new DataSpaceliftStacksStacksKubernetesList(this, "kubernetes", false);
  public get kubernetes() {
    return this._kubernetes;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // manage_state - computed: true, optional: false, required: false
  public get manageState() {
    return this.getBooleanAttribute('manage_state');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project_root - computed: true, optional: false, required: false
  public get projectRoot() {
    return this.getStringAttribute('project_root');
  }

  // protect_from_deletion - computed: true, optional: false, required: false
  public get protectFromDeletion() {
    return this.getBooleanAttribute('protect_from_deletion');
  }

  // pulumi - computed: true, optional: false, required: false
  private _pulumi = new DataSpaceliftStacksStacksPulumiList(this, "pulumi", false);
  public get pulumi() {
    return this._pulumi;
  }

  // raw_git - computed: true, optional: false, required: false
  private _rawGit = new DataSpaceliftStacksStacksRawGitList(this, "raw_git", false);
  public get rawGit() {
    return this._rawGit;
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // runner_image - computed: true, optional: false, required: false
  public get runnerImage() {
    return this.getStringAttribute('runner_image');
  }

  // showcase - computed: true, optional: false, required: false
  private _showcase = new DataSpaceliftStacksStacksShowcaseList(this, "showcase", false);
  public get showcase() {
    return this._showcase;
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // stack_id - computed: true, optional: false, required: false
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }

  // terraform_external_state_access - computed: true, optional: false, required: false
  public get terraformExternalStateAccess() {
    return this.getBooleanAttribute('terraform_external_state_access');
  }

  // terraform_smart_sanitization - computed: true, optional: false, required: false
  public get terraformSmartSanitization() {
    return this.getBooleanAttribute('terraform_smart_sanitization');
  }

  // terraform_version - computed: true, optional: false, required: false
  public get terraformVersion() {
    return this.getStringAttribute('terraform_version');
  }

  // terraform_workflow_tool - computed: true, optional: false, required: false
  public get terraformWorkflowTool() {
    return this.getStringAttribute('terraform_workflow_tool');
  }

  // terraform_workspace - computed: true, optional: false, required: false
  public get terraformWorkspace() {
    return this.getStringAttribute('terraform_workspace');
  }

  // terragrunt - computed: true, optional: false, required: false
  private _terragrunt = new DataSpaceliftStacksStacksTerragruntList(this, "terragrunt", false);
  public get terragrunt() {
    return this._terragrunt;
  }

  // worker_pool_id - computed: true, optional: false, required: false
  public get workerPoolId() {
    return this.getStringAttribute('worker_pool_id');
  }
}

export class DataSpaceliftStacksStacksList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftStacksStacksOutputReference {
    return new DataSpaceliftStacksStacksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksAdministrative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#equals DataSpaceliftStacks#equals}
  */
  readonly equalTo?: boolean | cdktf.IResolvable;
}

export function dataSpaceliftStacksAdministrativeToTerraform(struct?: DataSpaceliftStacksAdministrativeOutputReference | DataSpaceliftStacksAdministrative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.booleanToTerraform(struct!.equalTo),
  }
}


export function dataSpaceliftStacksAdministrativeToHclTerraform(struct?: DataSpaceliftStacksAdministrativeOutputReference | DataSpaceliftStacksAdministrative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.booleanToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksAdministrativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksAdministrative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksAdministrative | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._equals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._equals = value.equalTo;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: boolean | cdktf.IResolvable; 
  public get equalTo() {
    return this.getBooleanAttribute('equals');
  }
  public set equalTo(value: boolean | cdktf.IResolvable) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }
}
export interface DataSpaceliftStacksBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksBranchToTerraform(struct?: DataSpaceliftStacksBranchOutputReference | DataSpaceliftStacksBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksBranchToHclTerraform(struct?: DataSpaceliftStacksBranchOutputReference | DataSpaceliftStacksBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksBranch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksCommit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksCommitToTerraform(struct?: DataSpaceliftStacksCommitOutputReference | DataSpaceliftStacksCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksCommitToHclTerraform(struct?: DataSpaceliftStacksCommitOutputReference | DataSpaceliftStacksCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksCommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksCommit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksLabelsToTerraform(struct?: DataSpaceliftStacksLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksLabelsToHclTerraform(struct?: DataSpaceliftStacksLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftStacksLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyOf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

export class DataSpaceliftStacksLabelsList extends cdktf.ComplexList {
  public internalValue? : DataSpaceliftStacksLabels[] | cdktf.IResolvable

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
  public get(index: number): DataSpaceliftStacksLabelsOutputReference {
    return new DataSpaceliftStacksLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftStacksLocked {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#equals DataSpaceliftStacks#equals}
  */
  readonly equalTo?: boolean | cdktf.IResolvable;
}

export function dataSpaceliftStacksLockedToTerraform(struct?: DataSpaceliftStacksLockedOutputReference | DataSpaceliftStacksLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.booleanToTerraform(struct!.equalTo),
  }
}


export function dataSpaceliftStacksLockedToHclTerraform(struct?: DataSpaceliftStacksLockedOutputReference | DataSpaceliftStacksLocked): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    equals: {
      value: cdktf.booleanToHclTerraform(struct!.equalTo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksLockedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksLocked | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksLocked | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._equals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._equals = value.equalTo;
    }
  }

  // equals - computed: false, optional: true, required: false
  private _equals?: boolean | cdktf.IResolvable; 
  public get equalTo() {
    return this.getBooleanAttribute('equals');
  }
  public set equalTo(value: boolean | cdktf.IResolvable) {
    this._equals = value;
  }
  public resetEqualTo() {
    this._equals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get equalToInput() {
    return this._equals;
  }
}
export interface DataSpaceliftStacksName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksNameToTerraform(struct?: DataSpaceliftStacksNameOutputReference | DataSpaceliftStacksName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksNameToHclTerraform(struct?: DataSpaceliftStacksNameOutputReference | DataSpaceliftStacksName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksProjectRoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksProjectRootToTerraform(struct?: DataSpaceliftStacksProjectRootOutputReference | DataSpaceliftStacksProjectRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksProjectRootToHclTerraform(struct?: DataSpaceliftStacksProjectRootOutputReference | DataSpaceliftStacksProjectRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksProjectRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksProjectRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksProjectRoot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksRepositoryToTerraform(struct?: DataSpaceliftStacksRepositoryOutputReference | DataSpaceliftStacksRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksRepositoryToHclTerraform(struct?: DataSpaceliftStacksRepositoryOutputReference | DataSpaceliftStacksRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksState {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksStateToTerraform(struct?: DataSpaceliftStacksStateOutputReference | DataSpaceliftStacksState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksStateToHclTerraform(struct?: DataSpaceliftStacksStateOutputReference | DataSpaceliftStacksState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksVendor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksVendorToTerraform(struct?: DataSpaceliftStacksVendorOutputReference | DataSpaceliftStacksVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksVendorToHclTerraform(struct?: DataSpaceliftStacksVendorOutputReference | DataSpaceliftStacksVendor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksVendorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksVendor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksVendor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}
export interface DataSpaceliftStacksWorkerPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#any_of DataSpaceliftStacks#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftStacksWorkerPoolToTerraform(struct?: DataSpaceliftStacksWorkerPoolOutputReference | DataSpaceliftStacksWorkerPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftStacksWorkerPoolToHclTerraform(struct?: DataSpaceliftStacksWorkerPoolOutputReference | DataSpaceliftStacksWorkerPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_of: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.anyOf),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSpaceliftStacksWorkerPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftStacksWorkerPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftStacksWorkerPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyOf = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyOf = value.anyOf;
    }
  }

  // any_of - computed: false, optional: false, required: true
  private _anyOf?: string[]; 
  public get anyOf() {
    return this.getListAttribute('any_of');
  }
  public set anyOf(value: string[]) {
    this._anyOf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks spacelift_stacks}
*/
export class DataSpaceliftStacks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_stacks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftStacks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftStacks to import
  * @param importFromId The id of the existing DataSpaceliftStacks that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftStacks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_stacks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.37.0/docs/data-sources/stacks spacelift_stacks} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftStacksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftStacksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spacelift_stacks',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.37.0',
        providerVersionConstraint: '1.37.0'
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
    this._administrative.internalValue = config.administrative;
    this._branch.internalValue = config.branch;
    this._commit.internalValue = config.commit;
    this._labels.internalValue = config.labels;
    this._locked.internalValue = config.locked;
    this._name.internalValue = config.name;
    this._projectRoot.internalValue = config.projectRoot;
    this._repository.internalValue = config.repository;
    this._state.internalValue = config.state;
    this._vendor.internalValue = config.vendor;
    this._workerPool.internalValue = config.workerPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // stacks - computed: true, optional: false, required: false
  private _stacks = new DataSpaceliftStacksStacksList(this, "stacks", false);
  public get stacks() {
    return this._stacks;
  }

  // administrative - computed: false, optional: true, required: false
  private _administrative = new DataSpaceliftStacksAdministrativeOutputReference(this, "administrative");
  public get administrative() {
    return this._administrative;
  }
  public putAdministrative(value: DataSpaceliftStacksAdministrative) {
    this._administrative.internalValue = value;
  }
  public resetAdministrative() {
    this._administrative.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administrativeInput() {
    return this._administrative.internalValue;
  }

  // branch - computed: false, optional: true, required: false
  private _branch = new DataSpaceliftStacksBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: DataSpaceliftStacksBranch) {
    this._branch.internalValue = value;
  }
  public resetBranch() {
    this._branch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchInput() {
    return this._branch.internalValue;
  }

  // commit - computed: false, optional: true, required: false
  private _commit = new DataSpaceliftStacksCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: DataSpaceliftStacksCommit) {
    this._commit.internalValue = value;
  }
  public resetCommit() {
    this._commit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitInput() {
    return this._commit.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new DataSpaceliftStacksLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataSpaceliftStacksLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // locked - computed: false, optional: true, required: false
  private _locked = new DataSpaceliftStacksLockedOutputReference(this, "locked");
  public get locked() {
    return this._locked;
  }
  public putLocked(value: DataSpaceliftStacksLocked) {
    this._locked.internalValue = value;
  }
  public resetLocked() {
    this._locked.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataSpaceliftStacksNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataSpaceliftStacksName) {
    this._name.internalValue = value;
  }
  public resetName() {
    this._name.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name.internalValue;
  }

  // project_root - computed: false, optional: true, required: false
  private _projectRoot = new DataSpaceliftStacksProjectRootOutputReference(this, "project_root");
  public get projectRoot() {
    return this._projectRoot;
  }
  public putProjectRoot(value: DataSpaceliftStacksProjectRoot) {
    this._projectRoot.internalValue = value;
  }
  public resetProjectRoot() {
    this._projectRoot.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectRootInput() {
    return this._projectRoot.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new DataSpaceliftStacksRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataSpaceliftStacksRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state = new DataSpaceliftStacksStateOutputReference(this, "state");
  public get state() {
    return this._state;
  }
  public putState(value: DataSpaceliftStacksState) {
    this._state.internalValue = value;
  }
  public resetState() {
    this._state.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state.internalValue;
  }

  // vendor - computed: false, optional: true, required: false
  private _vendor = new DataSpaceliftStacksVendorOutputReference(this, "vendor");
  public get vendor() {
    return this._vendor;
  }
  public putVendor(value: DataSpaceliftStacksVendor) {
    this._vendor.internalValue = value;
  }
  public resetVendor() {
    this._vendor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor.internalValue;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool = new DataSpaceliftStacksWorkerPoolOutputReference(this, "worker_pool");
  public get workerPool() {
    return this._workerPool;
  }
  public putWorkerPool(value: DataSpaceliftStacksWorkerPool) {
    this._workerPool.internalValue = value;
  }
  public resetWorkerPool() {
    this._workerPool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      administrative: dataSpaceliftStacksAdministrativeToTerraform(this._administrative.internalValue),
      branch: dataSpaceliftStacksBranchToTerraform(this._branch.internalValue),
      commit: dataSpaceliftStacksCommitToTerraform(this._commit.internalValue),
      labels: cdktf.listMapper(dataSpaceliftStacksLabelsToTerraform, true)(this._labels.internalValue),
      locked: dataSpaceliftStacksLockedToTerraform(this._locked.internalValue),
      name: dataSpaceliftStacksNameToTerraform(this._name.internalValue),
      project_root: dataSpaceliftStacksProjectRootToTerraform(this._projectRoot.internalValue),
      repository: dataSpaceliftStacksRepositoryToTerraform(this._repository.internalValue),
      state: dataSpaceliftStacksStateToTerraform(this._state.internalValue),
      vendor: dataSpaceliftStacksVendorToTerraform(this._vendor.internalValue),
      worker_pool: dataSpaceliftStacksWorkerPoolToTerraform(this._workerPool.internalValue),
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
      administrative: {
        value: dataSpaceliftStacksAdministrativeToHclTerraform(this._administrative.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksAdministrativeList",
      },
      branch: {
        value: dataSpaceliftStacksBranchToHclTerraform(this._branch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksBranchList",
      },
      commit: {
        value: dataSpaceliftStacksCommitToHclTerraform(this._commit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksCommitList",
      },
      labels: {
        value: cdktf.listMapperHcl(dataSpaceliftStacksLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksLabelsList",
      },
      locked: {
        value: dataSpaceliftStacksLockedToHclTerraform(this._locked.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksLockedList",
      },
      name: {
        value: dataSpaceliftStacksNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksNameList",
      },
      project_root: {
        value: dataSpaceliftStacksProjectRootToHclTerraform(this._projectRoot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksProjectRootList",
      },
      repository: {
        value: dataSpaceliftStacksRepositoryToHclTerraform(this._repository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksRepositoryList",
      },
      state: {
        value: dataSpaceliftStacksStateToHclTerraform(this._state.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksStateList",
      },
      vendor: {
        value: dataSpaceliftStacksVendorToHclTerraform(this._vendor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksVendorList",
      },
      worker_pool: {
        value: dataSpaceliftStacksWorkerPoolToHclTerraform(this._workerPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftStacksWorkerPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
