// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformGitopsApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#account_id DataHarnessPlatformGitopsApplications#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#agent_id DataHarnessPlatformGitopsApplications#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#id DataHarnessPlatformGitopsApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#identifier DataHarnessPlatformGitopsApplications#identifier}
  */
  readonly identifier?: string;
  /**
  * Name of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#name DataHarnessPlatformGitopsApplications#name}
  */
  readonly name: string;
  /**
  * Organization identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#org_id DataHarnessPlatformGitopsApplications#org_id}
  */
  readonly orgId: string;
  /**
  * Project identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#project_id DataHarnessPlatformGitopsApplications#project_id}
  */
  readonly projectId: string;
}
export interface DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferences {
}

export function dataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_version - computed: true, optional: false, required: false
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }

  // block_owner_deletion - computed: true, optional: false, required: false
  public get blockOwnerDeletion() {
    return this.getBooleanAttribute('block_owner_deletion');
  }

  // controller - computed: true, optional: false, required: false
  public get controller() {
    return this.getBooleanAttribute('controller');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationMetadata {
}

export function dataHarnessPlatformGitopsApplicationsApplicationMetadataToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationMetadataToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // annotations - computed: true, optional: false, required: false
  private _annotations = new cdktf.StringMap(this, "annotations");
  public get annotations() {
    return this._annotations;
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // finalizers - computed: true, optional: false, required: false
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }

  // generate_name - computed: true, optional: false, required: false
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // owner_references - computed: true, optional: false, required: false
  private _ownerReferences = new DataHarnessPlatformGitopsApplicationsApplicationMetadataOwnerReferencesList(this, "owner_references", false);
  public get ownerReferences() {
    return this._ownerReferences;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationMetadataOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecDestination {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecDestinationToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecDestinationToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecDestinationList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecDestinationOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getBooleanAttribute('code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getBooleanAttribute('code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_vars - computed: true, optional: false, required: false
  private _extVars = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }

  // libs - computed: true, optional: false, required: false
  public get libs() {
    return this.getListAttribute('libs');
  }

  // tlas - computed: true, optional: false, required: false
  private _tlas = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectory {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getStringAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }

  // jsonnet - computed: true, optional: false, required: false
  private _jsonnet = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetList(this, "jsonnet", false);
  public get jsonnet() {
    return this._jsonnet;
  }

  // recurse - computed: true, optional: false, required: false
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // force_string - computed: true, optional: false, required: false
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelm {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_parameters - computed: true, optional: false, required: false
  private _fileParameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }

  // ignore_missing_value_files - computed: true, optional: false, required: false
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // pass_credentials - computed: true, optional: false, required: false
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }

  // release_name - computed: true, optional: false, required: false
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }

  // skip_crds - computed: true, optional: false, required: false
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }

  // skip_schema_validation - computed: true, optional: false, required: false
  public get skipSchemaValidation() {
    return this.getBooleanAttribute('skip_schema_validation');
  }

  // skip_tests - computed: true, optional: false, required: false
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }

  // value_files - computed: true, optional: false, required: false
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getStringAttribute('values');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnet {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomize {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_annotations - computed: true, optional: false, required: false
  private _commonAnnotations = new cdktf.StringMap(this, "common_annotations");
  public get commonAnnotations() {
    return this._commonAnnotations;
  }

  // common_labels - computed: true, optional: false, required: false
  private _commonLabels = new cdktf.StringMap(this, "common_labels");
  public get commonLabels() {
    return this._commonLabels;
  }

  // force_common_annotations - computed: true, optional: false, required: false
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }

  // force_common_labels - computed: true, optional: false, required: false
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // name_suffix - computed: true, optional: false, required: false
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnv {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePlugin {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSource {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourceToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart - computed: true, optional: false, required: false
  public get chart() {
    return this.getStringAttribute('chart');
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceDirectoryList(this, "directory", false);
  public get directory() {
    return this._directory;
  }

  // helm - computed: true, optional: false, required: false
  private _helm = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceHelmList(this, "helm", false);
  public get helm() {
    return this._helm;
  }

  // ksonnet - computed: true, optional: false, required: false
  private _ksonnet = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKsonnetList(this, "ksonnet", false);
  public get ksonnet() {
    return this._ksonnet;
  }

  // kustomize - computed: true, optional: false, required: false
  private _kustomize = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceKustomizeList(this, "kustomize", false);
  public get kustomize() {
    return this._kustomize;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // plugin - computed: true, optional: false, required: false
  private _plugin = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcePluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }

  // target_revision - computed: true, optional: false, required: false
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourceList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourceOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getBooleanAttribute('code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getBooleanAttribute('code');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ext_vars - computed: true, optional: false, required: false
  private _extVars = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }

  // libs - computed: true, optional: false, required: false
  public get libs() {
    return this.getListAttribute('libs');
  }

  // tlas - computed: true, optional: false, required: false
  private _tlas = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectory {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude - computed: true, optional: false, required: false
  public get exclude() {
    return this.getStringAttribute('exclude');
  }

  // include - computed: true, optional: false, required: false
  public get include() {
    return this.getStringAttribute('include');
  }

  // jsonnet - computed: true, optional: false, required: false
  private _jsonnet = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetList(this, "jsonnet", false);
  public get jsonnet() {
    return this._jsonnet;
  }

  // recurse - computed: true, optional: false, required: false
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // force_string - computed: true, optional: false, required: false
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelm {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_parameters - computed: true, optional: false, required: false
  private _fileParameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }

  // ignore_missing_value_files - computed: true, optional: false, required: false
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // pass_credentials - computed: true, optional: false, required: false
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }

  // release_name - computed: true, optional: false, required: false
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }

  // skip_crds - computed: true, optional: false, required: false
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }

  // skip_schema_validation - computed: true, optional: false, required: false
  public get skipSchemaValidation() {
    return this.getBooleanAttribute('skip_schema_validation');
  }

  // skip_tests - computed: true, optional: false, required: false
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }

  // value_files - computed: true, optional: false, required: false
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getStringAttribute('values');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnet {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment - computed: true, optional: false, required: false
  public get environment() {
    return this.getStringAttribute('environment');
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomize {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // common_annotations - computed: true, optional: false, required: false
  private _commonAnnotations = new cdktf.StringMap(this, "common_annotations");
  public get commonAnnotations() {
    return this._commonAnnotations;
  }

  // common_labels - computed: true, optional: false, required: false
  private _commonLabels = new cdktf.StringMap(this, "common_labels");
  public get commonLabels() {
    return this._commonLabels;
  }

  // force_common_annotations - computed: true, optional: false, required: false
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }

  // force_common_labels - computed: true, optional: false, required: false
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }

  // images - computed: true, optional: false, required: false
  public get images() {
    return this.getListAttribute('images');
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // name_suffix - computed: true, optional: false, required: false
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnv {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnv): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPlugin {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPlugin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPlugin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPlugin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // env - computed: true, optional: false, required: false
  private _env = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSources {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSourcesToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chart - computed: true, optional: false, required: false
  public get chart() {
    return this.getStringAttribute('chart');
  }

  // directory - computed: true, optional: false, required: false
  private _directory = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesDirectoryList(this, "directory", false);
  public get directory() {
    return this._directory;
  }

  // helm - computed: true, optional: false, required: false
  private _helm = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesHelmList(this, "helm", false);
  public get helm() {
    return this._helm;
  }

  // ksonnet - computed: true, optional: false, required: false
  private _ksonnet = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKsonnetList(this, "ksonnet", false);
  public get ksonnet() {
    return this._ksonnet;
  }

  // kustomize - computed: true, optional: false, required: false
  private _kustomize = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesKustomizeList(this, "kustomize", false);
  public get kustomize() {
    return this._kustomize;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // plugin - computed: true, optional: false, required: false
  private _plugin = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesPluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // repo_url - computed: true, optional: false, required: false
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }

  // target_revision - computed: true, optional: false, required: false
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_empty - computed: true, optional: false, required: false
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }

  // prune - computed: true, optional: false, required: false
  public get prune() {
    return this.getBooleanAttribute('prune');
  }

  // self_heal - computed: true, optional: false, required: false
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // factor - computed: true, optional: false, required: false
  public get factor() {
    return this.getStringAttribute('factor');
  }

  // max_duration - computed: true, optional: false, required: false
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetry {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // backoff - computed: true, optional: false, required: false
  private _backoff = new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffList(this, "backoff", false);
  public get backoff() {
    return this._backoff;
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicy {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // automated - computed: true, optional: false, required: false
  private _automated = new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedList(this, "automated", false);
  public get automated() {
    return this._automated;
  }

  // retry - computed: true, optional: false, required: false
  private _retry = new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyRetryList(this, "retry", false);
  public get retry() {
    return this._retry;
  }

  // sync_options - computed: true, optional: false, required: false
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplicationSpec {
}

export function dataHarnessPlatformGitopsApplicationsApplicationSpecToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationSpecToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplicationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplicationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataHarnessPlatformGitopsApplicationsApplicationSpecDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourceList(this, "source", false);
  public get source() {
    return this._source;
  }

  // sources - computed: true, optional: false, required: false
  private _sources = new DataHarnessPlatformGitopsApplicationsApplicationSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }

  // sync_policy - computed: true, optional: false, required: false
  private _syncPolicy = new DataHarnessPlatformGitopsApplicationsApplicationSpecSyncPolicyList(this, "sync_policy", false);
  public get syncPolicy() {
    return this._syncPolicy;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationSpecList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationSpecOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsApplicationsApplication {
}

export function dataHarnessPlatformGitopsApplicationsApplicationToTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformGitopsApplicationsApplicationToHclTerraform(struct?: DataHarnessPlatformGitopsApplicationsApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformGitopsApplicationsApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsApplicationsApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsApplicationsApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataHarnessPlatformGitopsApplicationsApplicationMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // spec - computed: true, optional: false, required: false
  private _spec = new DataHarnessPlatformGitopsApplicationsApplicationSpecList(this, "spec", false);
  public get spec() {
    return this._spec;
  }
}

export class DataHarnessPlatformGitopsApplicationsApplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataHarnessPlatformGitopsApplicationsApplicationOutputReference {
    return new DataHarnessPlatformGitopsApplicationsApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications harness_platform_gitops_applications}
*/
export class DataHarnessPlatformGitopsApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformGitopsApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformGitopsApplications to import
  * @param importFromId The id of the existing DataHarnessPlatformGitopsApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformGitopsApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/platform_gitops_applications harness_platform_gitops_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformGitopsApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformGitopsApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_applications',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // application - computed: true, optional: false, required: false
  private _application = new DataHarnessPlatformGitopsApplicationsApplicationList(this, "application", false);
  public get application() {
    return this._application;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
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
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // options_remove_existing_finalizers - computed: true, optional: false, required: false
  public get optionsRemoveExistingFinalizers() {
    return this.getBooleanAttribute('options_remove_existing_finalizers');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
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

  // repo_id - computed: true, optional: false, required: false
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }

  // repo_ids - computed: true, optional: false, required: false
  public get repoIds() {
    return this.getListAttribute('repo_ids');
  }

  // request_cascade - computed: true, optional: false, required: false
  public get requestCascade() {
    return this.getBooleanAttribute('request_cascade');
  }

  // request_propagation_policy - computed: true, optional: false, required: false
  public get requestPropagationPolicy() {
    return this.getStringAttribute('request_propagation_policy');
  }

  // skip_repo_validation - computed: true, optional: false, required: false
  public get skipRepoValidation() {
    return this.getBooleanAttribute('skip_repo_validation');
  }

  // upsert - computed: true, optional: false, required: false
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }

  // validate - computed: true, optional: false, required: false
  public get validate() {
    return this.getBooleanAttribute('validate');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
