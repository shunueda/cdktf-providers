// https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftModulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#id DataSpaceliftModules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * administrative block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#administrative DataSpaceliftModules#administrative}
  */
  readonly administrative?: DataSpaceliftModulesAdministrative;
  /**
  * branch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#branch DataSpaceliftModules#branch}
  */
  readonly branch?: DataSpaceliftModulesBranch;
  /**
  * commit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#commit DataSpaceliftModules#commit}
  */
  readonly commit?: DataSpaceliftModulesCommit;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#labels DataSpaceliftModules#labels}
  */
  readonly labels?: DataSpaceliftModulesLabels[] | cdktf.IResolvable;
  /**
  * name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#name DataSpaceliftModules#name}
  */
  readonly name?: DataSpaceliftModulesName;
  /**
  * project_root block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#project_root DataSpaceliftModules#project_root}
  */
  readonly projectRoot?: DataSpaceliftModulesProjectRoot;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#repository DataSpaceliftModules#repository}
  */
  readonly repository?: DataSpaceliftModulesRepository;
  /**
  * worker_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#worker_pool DataSpaceliftModules#worker_pool}
  */
  readonly workerPool?: DataSpaceliftModulesWorkerPool;
}
export interface DataSpaceliftModulesModulesAzureDevops {
}

export function dataSpaceliftModulesModulesAzureDevopsToTerraform(struct?: DataSpaceliftModulesModulesAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesAzureDevopsToHclTerraform(struct?: DataSpaceliftModulesModulesAzureDevops): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesAzureDevopsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesAzureDevops | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesAzureDevops | undefined) {
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

export class DataSpaceliftModulesModulesAzureDevopsList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesAzureDevopsOutputReference {
    return new DataSpaceliftModulesModulesAzureDevopsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModulesBitbucketCloud {
}

export function dataSpaceliftModulesModulesBitbucketCloudToTerraform(struct?: DataSpaceliftModulesModulesBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesBitbucketCloudToHclTerraform(struct?: DataSpaceliftModulesModulesBitbucketCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesBitbucketCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesBitbucketCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesBitbucketCloud | undefined) {
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

export class DataSpaceliftModulesModulesBitbucketCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesBitbucketCloudOutputReference {
    return new DataSpaceliftModulesModulesBitbucketCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModulesBitbucketDatacenter {
}

export function dataSpaceliftModulesModulesBitbucketDatacenterToTerraform(struct?: DataSpaceliftModulesModulesBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesBitbucketDatacenterToHclTerraform(struct?: DataSpaceliftModulesModulesBitbucketDatacenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesBitbucketDatacenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesBitbucketDatacenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesBitbucketDatacenter | undefined) {
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

export class DataSpaceliftModulesModulesBitbucketDatacenterList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesBitbucketDatacenterOutputReference {
    return new DataSpaceliftModulesModulesBitbucketDatacenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModulesGithubEnterprise {
}

export function dataSpaceliftModulesModulesGithubEnterpriseToTerraform(struct?: DataSpaceliftModulesModulesGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesGithubEnterpriseToHclTerraform(struct?: DataSpaceliftModulesModulesGithubEnterprise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesGithubEnterpriseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesGithubEnterprise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesGithubEnterprise | undefined) {
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

export class DataSpaceliftModulesModulesGithubEnterpriseList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesGithubEnterpriseOutputReference {
    return new DataSpaceliftModulesModulesGithubEnterpriseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModulesGitlab {
}

export function dataSpaceliftModulesModulesGitlabToTerraform(struct?: DataSpaceliftModulesModulesGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesGitlabToHclTerraform(struct?: DataSpaceliftModulesModulesGitlab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesGitlabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesGitlab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesGitlab | undefined) {
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

export class DataSpaceliftModulesModulesGitlabList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesGitlabOutputReference {
    return new DataSpaceliftModulesModulesGitlabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModulesRawGit {
}

export function dataSpaceliftModulesModulesRawGitToTerraform(struct?: DataSpaceliftModulesModulesRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesRawGitToHclTerraform(struct?: DataSpaceliftModulesModulesRawGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesRawGitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModulesRawGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModulesRawGit | undefined) {
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

export class DataSpaceliftModulesModulesRawGitList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesRawGitOutputReference {
    return new DataSpaceliftModulesModulesRawGitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesModules {
}

export function dataSpaceliftModulesModulesToTerraform(struct?: DataSpaceliftModulesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSpaceliftModulesModulesToHclTerraform(struct?: DataSpaceliftModulesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSpaceliftModulesModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesModules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrative - computed: true, optional: false, required: false
  public get administrative() {
    return this.getBooleanAttribute('administrative');
  }

  // aws_assume_role_policy_statement - computed: true, optional: false, required: false
  public get awsAssumeRolePolicyStatement() {
    return this.getStringAttribute('aws_assume_role_policy_statement');
  }

  // azure_devops - computed: true, optional: false, required: false
  private _azureDevops = new DataSpaceliftModulesModulesAzureDevopsList(this, "azure_devops", false);
  public get azureDevops() {
    return this._azureDevops;
  }

  // bitbucket_cloud - computed: true, optional: false, required: false
  private _bitbucketCloud = new DataSpaceliftModulesModulesBitbucketCloudList(this, "bitbucket_cloud", false);
  public get bitbucketCloud() {
    return this._bitbucketCloud;
  }

  // bitbucket_datacenter - computed: true, optional: false, required: false
  private _bitbucketDatacenter = new DataSpaceliftModulesModulesBitbucketDatacenterList(this, "bitbucket_datacenter", false);
  public get bitbucketDatacenter() {
    return this._bitbucketDatacenter;
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_local_preview - computed: true, optional: false, required: false
  public get enableLocalPreview() {
    return this.getBooleanAttribute('enable_local_preview');
  }

  // git_sparse_checkout_paths - computed: true, optional: false, required: false
  public get gitSparseCheckoutPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('git_sparse_checkout_paths'));
  }

  // github_enterprise - computed: true, optional: false, required: false
  private _githubEnterprise = new DataSpaceliftModulesModulesGithubEnterpriseList(this, "github_enterprise", false);
  public get githubEnterprise() {
    return this._githubEnterprise;
  }

  // gitlab - computed: true, optional: false, required: false
  private _gitlab = new DataSpaceliftModulesModulesGitlabList(this, "gitlab", false);
  public get gitlab() {
    return this._gitlab;
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }

  // module_id - computed: true, optional: false, required: false
  public get moduleId() {
    return this.getStringAttribute('module_id');
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

  // raw_git - computed: true, optional: false, required: false
  private _rawGit = new DataSpaceliftModulesModulesRawGitList(this, "raw_git", false);
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

  // shared_accounts - computed: true, optional: false, required: false
  public get sharedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('shared_accounts'));
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // space_shares - computed: true, optional: false, required: false
  public get spaceShares() {
    return cdktf.Fn.tolist(this.getListAttribute('space_shares'));
  }

  // terraform_provider - computed: true, optional: false, required: false
  public get terraformProvider() {
    return this.getStringAttribute('terraform_provider');
  }

  // worker_pool_id - computed: true, optional: false, required: false
  public get workerPoolId() {
    return this.getStringAttribute('worker_pool_id');
  }

  // workflow_tool - computed: true, optional: false, required: false
  public get workflowTool() {
    return this.getStringAttribute('workflow_tool');
  }
}

export class DataSpaceliftModulesModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataSpaceliftModulesModulesOutputReference {
    return new DataSpaceliftModulesModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesAdministrative {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#equals DataSpaceliftModules#equals}
  */
  readonly equalTo?: boolean | cdktf.IResolvable;
}

export function dataSpaceliftModulesAdministrativeToTerraform(struct?: DataSpaceliftModulesAdministrativeOutputReference | DataSpaceliftModulesAdministrative): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    equals: cdktf.booleanToTerraform(struct!.equalTo),
  }
}


export function dataSpaceliftModulesAdministrativeToHclTerraform(struct?: DataSpaceliftModulesAdministrativeOutputReference | DataSpaceliftModulesAdministrative): any {
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

export class DataSpaceliftModulesAdministrativeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesAdministrative | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._equals !== undefined) {
      hasAnyValues = true;
      internalValueResult.equalTo = this._equals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesAdministrative | undefined) {
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
export interface DataSpaceliftModulesBranch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesBranchToTerraform(struct?: DataSpaceliftModulesBranchOutputReference | DataSpaceliftModulesBranch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesBranchToHclTerraform(struct?: DataSpaceliftModulesBranchOutputReference | DataSpaceliftModulesBranch): any {
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

export class DataSpaceliftModulesBranchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesBranch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesBranch | undefined) {
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
export interface DataSpaceliftModulesCommit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesCommitToTerraform(struct?: DataSpaceliftModulesCommitOutputReference | DataSpaceliftModulesCommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesCommitToHclTerraform(struct?: DataSpaceliftModulesCommitOutputReference | DataSpaceliftModulesCommit): any {
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

export class DataSpaceliftModulesCommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesCommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesCommit | undefined) {
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
export interface DataSpaceliftModulesLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesLabelsToTerraform(struct?: DataSpaceliftModulesLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesLabelsToHclTerraform(struct?: DataSpaceliftModulesLabels | cdktf.IResolvable): any {
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

export class DataSpaceliftModulesLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSpaceliftModulesLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataSpaceliftModulesLabels | cdktf.IResolvable | undefined) {
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

export class DataSpaceliftModulesLabelsList extends cdktf.ComplexList {
  public internalValue? : DataSpaceliftModulesLabels[] | cdktf.IResolvable

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
  public get(index: number): DataSpaceliftModulesLabelsOutputReference {
    return new DataSpaceliftModulesLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSpaceliftModulesName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesNameToTerraform(struct?: DataSpaceliftModulesNameOutputReference | DataSpaceliftModulesName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesNameToHclTerraform(struct?: DataSpaceliftModulesNameOutputReference | DataSpaceliftModulesName): any {
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

export class DataSpaceliftModulesNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesName | undefined) {
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
export interface DataSpaceliftModulesProjectRoot {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesProjectRootToTerraform(struct?: DataSpaceliftModulesProjectRootOutputReference | DataSpaceliftModulesProjectRoot): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesProjectRootToHclTerraform(struct?: DataSpaceliftModulesProjectRootOutputReference | DataSpaceliftModulesProjectRoot): any {
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

export class DataSpaceliftModulesProjectRootOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesProjectRoot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesProjectRoot | undefined) {
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
export interface DataSpaceliftModulesRepository {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesRepositoryToTerraform(struct?: DataSpaceliftModulesRepositoryOutputReference | DataSpaceliftModulesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesRepositoryToHclTerraform(struct?: DataSpaceliftModulesRepositoryOutputReference | DataSpaceliftModulesRepository): any {
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

export class DataSpaceliftModulesRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesRepository | undefined) {
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
export interface DataSpaceliftModulesWorkerPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#any_of DataSpaceliftModules#any_of}
  */
  readonly anyOf: string[];
}

export function dataSpaceliftModulesWorkerPoolToTerraform(struct?: DataSpaceliftModulesWorkerPoolOutputReference | DataSpaceliftModulesWorkerPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_of: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.anyOf),
  }
}


export function dataSpaceliftModulesWorkerPoolToHclTerraform(struct?: DataSpaceliftModulesWorkerPoolOutputReference | DataSpaceliftModulesWorkerPool): any {
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

export class DataSpaceliftModulesWorkerPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataSpaceliftModulesWorkerPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSpaceliftModulesWorkerPool | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules spacelift_modules}
*/
export class DataSpaceliftModules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_modules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftModules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftModules to import
  * @param importFromId The id of the existing DataSpaceliftModules that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftModules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_modules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.40.0/docs/data-sources/modules spacelift_modules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftModulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftModulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spacelift_modules',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.40.0',
        providerVersionConstraint: '1.40.0'
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
    this._name.internalValue = config.name;
    this._projectRoot.internalValue = config.projectRoot;
    this._repository.internalValue = config.repository;
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

  // modules - computed: true, optional: false, required: false
  private _modules = new DataSpaceliftModulesModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // administrative - computed: false, optional: true, required: false
  private _administrative = new DataSpaceliftModulesAdministrativeOutputReference(this, "administrative");
  public get administrative() {
    return this._administrative;
  }
  public putAdministrative(value: DataSpaceliftModulesAdministrative) {
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
  private _branch = new DataSpaceliftModulesBranchOutputReference(this, "branch");
  public get branch() {
    return this._branch;
  }
  public putBranch(value: DataSpaceliftModulesBranch) {
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
  private _commit = new DataSpaceliftModulesCommitOutputReference(this, "commit");
  public get commit() {
    return this._commit;
  }
  public putCommit(value: DataSpaceliftModulesCommit) {
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
  private _labels = new DataSpaceliftModulesLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: DataSpaceliftModulesLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // name - computed: false, optional: true, required: false
  private _name = new DataSpaceliftModulesNameOutputReference(this, "name");
  public get name() {
    return this._name;
  }
  public putName(value: DataSpaceliftModulesName) {
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
  private _projectRoot = new DataSpaceliftModulesProjectRootOutputReference(this, "project_root");
  public get projectRoot() {
    return this._projectRoot;
  }
  public putProjectRoot(value: DataSpaceliftModulesProjectRoot) {
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
  private _repository = new DataSpaceliftModulesRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: DataSpaceliftModulesRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool = new DataSpaceliftModulesWorkerPoolOutputReference(this, "worker_pool");
  public get workerPool() {
    return this._workerPool;
  }
  public putWorkerPool(value: DataSpaceliftModulesWorkerPool) {
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
      administrative: dataSpaceliftModulesAdministrativeToTerraform(this._administrative.internalValue),
      branch: dataSpaceliftModulesBranchToTerraform(this._branch.internalValue),
      commit: dataSpaceliftModulesCommitToTerraform(this._commit.internalValue),
      labels: cdktf.listMapper(dataSpaceliftModulesLabelsToTerraform, true)(this._labels.internalValue),
      name: dataSpaceliftModulesNameToTerraform(this._name.internalValue),
      project_root: dataSpaceliftModulesProjectRootToTerraform(this._projectRoot.internalValue),
      repository: dataSpaceliftModulesRepositoryToTerraform(this._repository.internalValue),
      worker_pool: dataSpaceliftModulesWorkerPoolToTerraform(this._workerPool.internalValue),
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
        value: dataSpaceliftModulesAdministrativeToHclTerraform(this._administrative.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesAdministrativeList",
      },
      branch: {
        value: dataSpaceliftModulesBranchToHclTerraform(this._branch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesBranchList",
      },
      commit: {
        value: dataSpaceliftModulesCommitToHclTerraform(this._commit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesCommitList",
      },
      labels: {
        value: cdktf.listMapperHcl(dataSpaceliftModulesLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesLabelsList",
      },
      name: {
        value: dataSpaceliftModulesNameToHclTerraform(this._name.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesNameList",
      },
      project_root: {
        value: dataSpaceliftModulesProjectRootToHclTerraform(this._projectRoot.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesProjectRootList",
      },
      repository: {
        value: dataSpaceliftModulesRepositoryToHclTerraform(this._repository.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesRepositoryList",
      },
      worker_pool: {
        value: dataSpaceliftModulesWorkerPoolToHclTerraform(this._workerPool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataSpaceliftModulesWorkerPoolList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
