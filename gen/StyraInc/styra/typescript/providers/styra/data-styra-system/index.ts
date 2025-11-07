// https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/system
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStyraSystemConfig extends cdktf.TerraformMetaArguments {
  /**
  * system ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/system#id DataStyraSystem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataStyraSystemResultAuthzRoleBindings {
}

export function dataStyraSystemResultAuthzRoleBindingsToTerraform(struct?: DataStyraSystemResultAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultAuthzRoleBindingsToHclTerraform(struct?: DataStyraSystemResultAuthzRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultAuthzRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultAuthzRoleBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultAuthzRoleBindings | undefined) {
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

  // role_name - computed: true, optional: false, required: false
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
}

export class DataStyraSystemResultAuthzRoleBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultAuthzRoleBindingsOutputReference {
    return new DataStyraSystemResultAuthzRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultAuthz {
}

export function dataStyraSystemResultAuthzToTerraform(struct?: DataStyraSystemResultAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultAuthzToHclTerraform(struct?: DataStyraSystemResultAuthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultAuthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultAuthz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultAuthz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_bindings - computed: true, optional: false, required: false
  private _roleBindings = new DataStyraSystemResultAuthzRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
}
export interface DataStyraSystemResultBundleDownload {
}

export function dataStyraSystemResultBundleDownloadToTerraform(struct?: DataStyraSystemResultBundleDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleDownloadToHclTerraform(struct?: DataStyraSystemResultBundleDownload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleDownloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleDownload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleDownload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delta_bundles - computed: true, optional: false, required: false
  public get deltaBundles() {
    return this.getBooleanAttribute('delta_bundles');
  }
}
export interface DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials {
}

export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsToHclTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials {
}

export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsToHclTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
}
export interface DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials {
}

export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsToHclTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // session_name - computed: true, optional: false, required: false
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
}
export interface DataStyraSystemResultBundleRegistryDistributionS3OpaCredentials {
}

export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsToTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsToHclTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistryDistributionS3OpaCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistryDistributionS3OpaCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_credentials - computed: true, optional: false, required: false
  private _environmentCredentials = new DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsEnvironmentCredentialsOutputReference(this, "environment_credentials");
  public get environmentCredentials() {
    return this._environmentCredentials;
  }

  // metadata_credentials - computed: true, optional: false, required: false
  private _metadataCredentials = new DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }

  // web_identity_credentials - computed: true, optional: false, required: false
  private _webIdentityCredentials = new DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
}
export interface DataStyraSystemResultBundleRegistryDistributionS3 {
}

export function dataStyraSystemResultBundleRegistryDistributionS3ToTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryDistributionS3ToHclTerraform(struct?: DataStyraSystemResultBundleRegistryDistributionS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryDistributionS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistryDistributionS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistryDistributionS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_keys - computed: true, optional: false, required: false
  public get accessKeys() {
    return this.getStringAttribute('access_keys');
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // context_path - computed: true, optional: false, required: false
  public get contextPath() {
    return this.getStringAttribute('context_path');
  }

  // discovery_path - computed: true, optional: false, required: false
  public get discoveryPath() {
    return this.getStringAttribute('discovery_path');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // opa_credentials - computed: true, optional: false, required: false
  private _opaCredentials = new DataStyraSystemResultBundleRegistryDistributionS3OpaCredentialsOutputReference(this, "opa_credentials");
  public get opaCredentials() {
    return this._opaCredentials;
  }

  // policy_path - computed: true, optional: false, required: false
  public get policyPath() {
    return this.getStringAttribute('policy_path');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
}
export interface DataStyraSystemResultBundleRegistry {
}

export function dataStyraSystemResultBundleRegistryToTerraform(struct?: DataStyraSystemResultBundleRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultBundleRegistryToHclTerraform(struct?: DataStyraSystemResultBundleRegistry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultBundleRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultBundleRegistry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultBundleRegistry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disable_bundle_compatibility_check - computed: true, optional: false, required: false
  public get disableBundleCompatibilityCheck() {
    return this.getBooleanAttribute('disable_bundle_compatibility_check');
  }

  // distribution_s3 - computed: true, optional: false, required: false
  private _distributionS3 = new DataStyraSystemResultBundleRegistryDistributionS3OutputReference(this, "distribution_s3");
  public get distributionS3() {
    return this._distributionS3;
  }

  // entrypoints - computed: true, optional: false, required: false
  public get entrypoints() {
    return this.getListAttribute('entrypoints');
  }

  // manual_deployment - computed: true, optional: false, required: false
  public get manualDeployment() {
    return this.getBooleanAttribute('manual_deployment');
  }

  // manual_deployment_overrides - computed: true, optional: false, required: false
  private _manualDeploymentOverrides = new cdktf.BooleanMap(this, "manual_deployment_overrides");
  public get manualDeploymentOverrides() {
    return this._manualDeploymentOverrides;
  }

  // max_bundles - computed: true, optional: false, required: false
  public get maxBundles() {
    return this.getNumberAttribute('max_bundles');
  }

  // max_deployed_bundles - computed: true, optional: false, required: false
  public get maxDeployedBundles() {
    return this.getNumberAttribute('max_deployed_bundles');
  }

  // optimization_level - computed: true, optional: false, required: false
  public get optimizationLevel() {
    return this.getNumberAttribute('optimization_level');
  }
}
export interface DataStyraSystemResultDatasourcesStatus {
}

export function dataStyraSystemResultDatasourcesStatusToTerraform(struct?: DataStyraSystemResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDatasourcesStatusToHclTerraform(struct?: DataStyraSystemResultDatasourcesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDatasourcesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDatasourcesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDatasourcesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}
export interface DataStyraSystemResultDatasources {
}

export function dataStyraSystemResultDatasourcesToTerraform(struct?: DataStyraSystemResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDatasourcesToHclTerraform(struct?: DataStyraSystemResultDatasources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDatasourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultDatasources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDatasources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataStyraSystemResultDatasourcesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
}

export class DataStyraSystemResultDatasourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultDatasourcesOutputReference {
    return new DataStyraSystemResultDatasourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultDecisionMappingsAllowed {
}

export function dataStyraSystemResultDecisionMappingsAllowedToTerraform(struct?: DataStyraSystemResultDecisionMappingsAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDecisionMappingsAllowedToHclTerraform(struct?: DataStyraSystemResultDecisionMappingsAllowed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDecisionMappingsAllowedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDecisionMappingsAllowed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDecisionMappingsAllowed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected - computed: true, optional: false, required: false
  public get expected() {
    return this.getStringAttribute('expected');
  }

  // negated - computed: true, optional: false, required: false
  public get negated() {
    return this.getBooleanAttribute('negated');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataStyraSystemResultDecisionMappingsColumns {
}

export function dataStyraSystemResultDecisionMappingsColumnsToTerraform(struct?: DataStyraSystemResultDecisionMappingsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDecisionMappingsColumnsToHclTerraform(struct?: DataStyraSystemResultDecisionMappingsColumns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDecisionMappingsColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultDecisionMappingsColumns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDecisionMappingsColumns | undefined) {
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

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataStyraSystemResultDecisionMappingsColumnsList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultDecisionMappingsColumnsOutputReference {
    return new DataStyraSystemResultDecisionMappingsColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultDecisionMappingsReason {
}

export function dataStyraSystemResultDecisionMappingsReasonToTerraform(struct?: DataStyraSystemResultDecisionMappingsReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDecisionMappingsReasonToHclTerraform(struct?: DataStyraSystemResultDecisionMappingsReason): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDecisionMappingsReasonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDecisionMappingsReason | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDecisionMappingsReason | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataStyraSystemResultDecisionMappings {
}

export function dataStyraSystemResultDecisionMappingsToTerraform(struct?: DataStyraSystemResultDecisionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDecisionMappingsToHclTerraform(struct?: DataStyraSystemResultDecisionMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDecisionMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataStyraSystemResultDecisionMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDecisionMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed - computed: true, optional: false, required: false
  private _allowed = new DataStyraSystemResultDecisionMappingsAllowedOutputReference(this, "allowed");
  public get allowed() {
    return this._allowed;
  }

  // columns - computed: true, optional: false, required: false
  private _columns = new DataStyraSystemResultDecisionMappingsColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }

  // reason - computed: true, optional: false, required: false
  private _reason = new DataStyraSystemResultDecisionMappingsReasonOutputReference(this, "reason");
  public get reason() {
    return this._reason;
  }
}

export class DataStyraSystemResultDecisionMappingsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataStyraSystemResultDecisionMappingsOutputReference {
    return new DataStyraSystemResultDecisionMappingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataStyraSystemResultDeploymentParametersDiscovery {
}

export function dataStyraSystemResultDeploymentParametersDiscoveryToTerraform(struct?: DataStyraSystemResultDeploymentParametersDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDeploymentParametersDiscoveryToHclTerraform(struct?: DataStyraSystemResultDeploymentParametersDiscovery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDeploymentParametersDiscoveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDeploymentParametersDiscovery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDeploymentParametersDiscovery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataStyraSystemResultDeploymentParametersExtra {
}

export function dataStyraSystemResultDeploymentParametersExtraToTerraform(struct?: DataStyraSystemResultDeploymentParametersExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDeploymentParametersExtraToHclTerraform(struct?: DataStyraSystemResultDeploymentParametersExtra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDeploymentParametersExtraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDeploymentParametersExtra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDeploymentParametersExtra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataStyraSystemResultDeploymentParameters {
}

export function dataStyraSystemResultDeploymentParametersToTerraform(struct?: DataStyraSystemResultDeploymentParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultDeploymentParametersToHclTerraform(struct?: DataStyraSystemResultDeploymentParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultDeploymentParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultDeploymentParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultDeploymentParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deny_on_opa_fail - computed: true, optional: false, required: false
  public get denyOnOpaFail() {
    return this.getBooleanAttribute('deny_on_opa_fail');
  }

  // discovery - computed: true, optional: false, required: false
  private _discovery = new DataStyraSystemResultDeploymentParametersDiscoveryOutputReference(this, "discovery");
  public get discovery() {
    return this._discovery;
  }

  // extra - computed: true, optional: false, required: false
  private _extra = new DataStyraSystemResultDeploymentParametersExtraOutputReference(this, "extra");
  public get extra() {
    return this._extra;
  }

  // http_proxy - computed: true, optional: false, required: false
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }

  // https_proxy - computed: true, optional: false, required: false
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }

  // mutating_webhook_name - computed: true, optional: false, required: false
  public get mutatingWebhookName() {
    return this.getStringAttribute('mutating_webhook_name');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // no_proxy - computed: true, optional: false, required: false
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // trusted_ca_certs - computed: true, optional: false, required: false
  public get trustedCaCerts() {
    return this.getListAttribute('trusted_ca_certs');
  }

  // trusted_container_registry - computed: true, optional: false, required: false
  public get trustedContainerRegistry() {
    return this.getStringAttribute('trusted_container_registry');
  }
}
export interface DataStyraSystemResultErrorsErrors {
}

export function dataStyraSystemResultErrorsErrorsToTerraform(struct?: DataStyraSystemResultErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultErrorsErrorsToHclTerraform(struct?: DataStyraSystemResultErrorsErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultErrorsErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultErrorsErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultErrorsErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
}

export class DataStyraSystemResultErrorsErrorsList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultErrorsErrorsOutputReference {
    return new DataStyraSystemResultErrorsErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultErrors {
}

export function dataStyraSystemResultErrorsToTerraform(struct?: DataStyraSystemResultErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultErrorsToHclTerraform(struct?: DataStyraSystemResultErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultErrorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataStyraSystemResultErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataStyraSystemResultErrorsErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
  }

  // waiting - computed: true, optional: false, required: false
  public get waiting() {
    return this.getBooleanAttribute('waiting');
  }
}

export class DataStyraSystemResultErrorsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataStyraSystemResultErrorsOutputReference {
    return new DataStyraSystemResultErrorsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataStyraSystemResultExternalBundlesBundlesPolling {
}

export function dataStyraSystemResultExternalBundlesBundlesPollingToTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesBundlesPollingToHclTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesPolling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesBundlesPollingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesBundlesPolling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesBundlesPolling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // long_polling_timeout_seconds - computed: true, optional: false, required: false
  public get longPollingTimeoutSeconds() {
    return this.getNumberAttribute('long_polling_timeout_seconds');
  }

  // max_delay_seconds - computed: true, optional: false, required: false
  public get maxDelaySeconds() {
    return this.getNumberAttribute('max_delay_seconds');
  }

  // min_delay_seconds - computed: true, optional: false, required: false
  public get minDelaySeconds() {
    return this.getNumberAttribute('min_delay_seconds');
  }
}
export interface DataStyraSystemResultExternalBundlesBundlesSigningPublicKeys {
}

export function dataStyraSystemResultExternalBundlesBundlesSigningPublicKeysToTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesSigningPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesBundlesSigningPublicKeysToHclTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesSigningPublicKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesBundlesSigningPublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesBundlesSigningPublicKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesBundlesSigningPublicKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataStyraSystemResultExternalBundlesBundlesSigningPublicKeysMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataStyraSystemResultExternalBundlesBundlesSigningPublicKeysOutputReference {
    return new DataStyraSystemResultExternalBundlesBundlesSigningPublicKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataStyraSystemResultExternalBundlesBundlesSigning {
}

export function dataStyraSystemResultExternalBundlesBundlesSigningToTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesBundlesSigningToHclTerraform(struct?: DataStyraSystemResultExternalBundlesBundlesSigning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesBundlesSigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesBundlesSigning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesBundlesSigning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_files - computed: true, optional: false, required: false
  public get excludeFiles() {
    return this.getListAttribute('exclude_files');
  }

  // keyid - computed: true, optional: false, required: false
  public get keyid() {
    return this.getStringAttribute('keyid');
  }

  // public_keys - computed: true, optional: false, required: false
  private _publicKeys = new DataStyraSystemResultExternalBundlesBundlesSigningPublicKeysMap(this, "public_keys");
  public get publicKeys() {
    return this._publicKeys;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}
export interface DataStyraSystemResultExternalBundlesBundles {
}

export function dataStyraSystemResultExternalBundlesBundlesToTerraform(struct?: DataStyraSystemResultExternalBundlesBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesBundlesToHclTerraform(struct?: DataStyraSystemResultExternalBundlesBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // persist - computed: true, optional: false, required: false
  public get persist() {
    return this.getBooleanAttribute('persist');
  }

  // polling - computed: true, optional: false, required: false
  private _polling = new DataStyraSystemResultExternalBundlesBundlesPollingOutputReference(this, "polling");
  public get polling() {
    return this._polling;
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // signing - computed: true, optional: false, required: false
  private _signing = new DataStyraSystemResultExternalBundlesBundlesSigningOutputReference(this, "signing");
  public get signing() {
    return this._signing;
  }

  // size_limit_bytes - computed: true, optional: false, required: false
  public get sizeLimitBytes() {
    return this.getNumberAttribute('size_limit_bytes');
  }
}

export class DataStyraSystemResultExternalBundlesBundlesMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataStyraSystemResultExternalBundlesBundlesOutputReference {
    return new DataStyraSystemResultExternalBundlesBundlesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentity {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentityToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentityToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentity | undefined) {
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

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // mi_res_id - computed: true, optional: false, required: false
  public get miResId() {
    return this.getStringAttribute('mi_res_id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsBearer {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsBearerToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsBearerToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsBearer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsBearer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // scheme - computed: true, optional: false, required: false
  public get scheme() {
    return this.getStringAttribute('scheme');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // token_path - computed: true, optional: false, required: false
  public get tokenPath() {
    return this.getStringAttribute('token_path');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsClientTls {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsClientTlsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsClientTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsClientTlsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsClientTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsClientTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsClientTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsClientTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_passphrase - computed: true, optional: false, required: false
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadata {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadataToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadataToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token_path - computed: true, optional: false, required: false
  public get accessTokenPath() {
    return this.getStringAttribute('access_token_path');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id_token_path - computed: true, optional: false, required: false
  public get idTokenPath() {
    return this.getStringAttribute('id_token_path');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsOauth2 {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsOauth2ToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsOauth2ToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsOauth2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsOauth2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_claims - computed: true, optional: false, required: false
  private _additionalClaims = new DataStyraSystemResultExternalBundlesServicesCredentialsOauth2AdditionalClaimsOutputReference(this, "additional_claims");
  public get additionalClaims() {
    return this._additionalClaims;
  }

  // additional_headers - computed: true, optional: false, required: false
  private _additionalHeaders = new cdktf.StringMap(this, "additional_headers");
  public get additionalHeaders() {
    return this._additionalHeaders;
  }

  // additional_parameters - computed: true, optional: false, required: false
  private _additionalParameters = new cdktf.StringMap(this, "additional_parameters");
  public get additionalParameters() {
    return this._additionalParameters;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // grant_type - computed: true, optional: false, required: false
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }

  // include_jti_claim - computed: true, optional: false, required: false
  public get includeJtiClaim() {
    return this.getBooleanAttribute('include_jti_claim');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getListAttribute('scopes');
  }

  // signing_key - computed: true, optional: false, required: false
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }

  // thumbprint - computed: true, optional: false, required: false
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // iam_role - computed: true, optional: false, required: false
  public get iamRole() {
    return this.getStringAttribute('iam_role');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // session_name - computed: true, optional: false, required: false
  public get sessionName() {
    return this.getStringAttribute('session_name');
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentialsS3Signing {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3Signing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsS3SigningToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentialsS3Signing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentialsS3Signing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentialsS3Signing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_credentials - computed: true, optional: false, required: false
  public get environmentCredentials() {
    return this.getStringAttribute('environment_credentials');
  }

  // metadata_credentials - computed: true, optional: false, required: false
  private _metadataCredentials = new DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningMetadataCredentialsOutputReference(this, "metadata_credentials");
  public get metadataCredentials() {
    return this._metadataCredentials;
  }

  // profile_credentials - computed: true, optional: false, required: false
  private _profileCredentials = new DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningProfileCredentialsOutputReference(this, "profile_credentials");
  public get profileCredentials() {
    return this._profileCredentials;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // web_identity_credentials - computed: true, optional: false, required: false
  private _webIdentityCredentials = new DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningWebIdentityCredentialsOutputReference(this, "web_identity_credentials");
  public get webIdentityCredentials() {
    return this._webIdentityCredentials;
  }
}
export interface DataStyraSystemResultExternalBundlesServicesCredentials {
}

export function dataStyraSystemResultExternalBundlesServicesCredentialsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesCredentialsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // azure_managed_identity - computed: true, optional: false, required: false
  private _azureManagedIdentity = new DataStyraSystemResultExternalBundlesServicesCredentialsAzureManagedIdentityOutputReference(this, "azure_managed_identity");
  public get azureManagedIdentity() {
    return this._azureManagedIdentity;
  }

  // bearer - computed: true, optional: false, required: false
  private _bearer = new DataStyraSystemResultExternalBundlesServicesCredentialsBearerOutputReference(this, "bearer");
  public get bearer() {
    return this._bearer;
  }

  // client_tls - computed: true, optional: false, required: false
  private _clientTls = new DataStyraSystemResultExternalBundlesServicesCredentialsClientTlsOutputReference(this, "client_tls");
  public get clientTls() {
    return this._clientTls;
  }

  // gcp_metadata - computed: true, optional: false, required: false
  private _gcpMetadata = new DataStyraSystemResultExternalBundlesServicesCredentialsGcpMetadataOutputReference(this, "gcp_metadata");
  public get gcpMetadata() {
    return this._gcpMetadata;
  }

  // oauth2 - computed: true, optional: false, required: false
  private _oauth2 = new DataStyraSystemResultExternalBundlesServicesCredentialsOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }

  // plugin - computed: true, optional: false, required: false
  public get plugin() {
    return this.getStringAttribute('plugin');
  }

  // s3_signing - computed: true, optional: false, required: false
  private _s3Signing = new DataStyraSystemResultExternalBundlesServicesCredentialsS3SigningOutputReference(this, "s3_signing");
  public get s3Signing() {
    return this._s3Signing;
  }
}
export interface DataStyraSystemResultExternalBundlesServicesKeys {
}

export function dataStyraSystemResultExternalBundlesServicesKeysToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesKeysToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesKeys): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesKeys | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesKeys | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }
}

export class DataStyraSystemResultExternalBundlesServicesKeysMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataStyraSystemResultExternalBundlesServicesKeysOutputReference {
    return new DataStyraSystemResultExternalBundlesServicesKeysOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface DataStyraSystemResultExternalBundlesServicesTls {
}

export function dataStyraSystemResultExternalBundlesServicesTlsToTerraform(struct?: DataStyraSystemResultExternalBundlesServicesTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesTlsToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServicesTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundlesServicesTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServicesTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_cert - computed: true, optional: false, required: false
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }

  // system_ca_required - computed: true, optional: false, required: false
  public get systemCaRequired() {
    return this.getBooleanAttribute('system_ca_required');
  }
}
export interface DataStyraSystemResultExternalBundlesServices {
}

export function dataStyraSystemResultExternalBundlesServicesToTerraform(struct?: DataStyraSystemResultExternalBundlesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesServicesToHclTerraform(struct?: DataStyraSystemResultExternalBundlesServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultExternalBundlesServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundlesServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_insecure_tls - computed: true, optional: false, required: false
  public get allowInsecureTls() {
    return this.getBooleanAttribute('allow_insecure_tls');
  }

  // credentials - computed: true, optional: false, required: false
  private _credentials = new DataStyraSystemResultExternalBundlesServicesCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new DataStyraSystemResultExternalBundlesServicesKeysMap(this, "keys");
  public get keys() {
    return this._keys;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // response_header_timeout_seconds - computed: true, optional: false, required: false
  public get responseHeaderTimeoutSeconds() {
    return this.getNumberAttribute('response_header_timeout_seconds');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataStyraSystemResultExternalBundlesServicesTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataStyraSystemResultExternalBundlesServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultExternalBundlesServicesOutputReference {
    return new DataStyraSystemResultExternalBundlesServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultExternalBundles {
}

export function dataStyraSystemResultExternalBundlesToTerraform(struct?: DataStyraSystemResultExternalBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultExternalBundlesToHclTerraform(struct?: DataStyraSystemResultExternalBundles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultExternalBundlesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultExternalBundles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultExternalBundles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bundles - computed: true, optional: false, required: false
  private _bundles = new DataStyraSystemResultExternalBundlesBundlesMap(this, "bundles");
  public get bundles() {
    return this._bundles;
  }

  // services - computed: true, optional: false, required: false
  private _services = new DataStyraSystemResultExternalBundlesServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
}
export interface DataStyraSystemResultMetadata {
}

export function dataStyraSystemResultMetadataToTerraform(struct?: DataStyraSystemResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultMetadataToHclTerraform(struct?: DataStyraSystemResultMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface DataStyraSystemResultMigrationHistory {
}

export function dataStyraSystemResultMigrationHistoryToTerraform(struct?: DataStyraSystemResultMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultMigrationHistoryToHclTerraform(struct?: DataStyraSystemResultMigrationHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultMigrationHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultMigrationHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultMigrationHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getStringAttribute('from');
  }

  // initiated_by - computed: true, optional: false, required: false
  public get initiatedBy() {
    return this.getStringAttribute('initiated_by');
  }

  // initiating_user - computed: true, optional: false, required: false
  public get initiatingUser() {
    return this.getStringAttribute('initiating_user');
  }

  // migrated_at - computed: true, optional: false, required: false
  public get migratedAt() {
    return this.getStringAttribute('migrated_at');
  }

  // recovered - computed: true, optional: false, required: false
  public get recovered() {
    return this.getBooleanAttribute('recovered');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getStringAttribute('to');
  }
}

export class DataStyraSystemResultMigrationHistoryList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultMigrationHistoryOutputReference {
    return new DataStyraSystemResultMigrationHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultPoliciesEnforcement {
}

export function dataStyraSystemResultPoliciesEnforcementToTerraform(struct?: DataStyraSystemResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultPoliciesEnforcementToHclTerraform(struct?: DataStyraSystemResultPoliciesEnforcement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultPoliciesEnforcementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultPoliciesEnforcement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultPoliciesEnforcement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enforced - computed: true, optional: false, required: false
  public get enforced() {
    return this.getBooleanAttribute('enforced');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataStyraSystemResultPoliciesModulesRules {
}

export function dataStyraSystemResultPoliciesModulesRulesToTerraform(struct?: DataStyraSystemResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultPoliciesModulesRulesToHclTerraform(struct?: DataStyraSystemResultPoliciesModulesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultPoliciesModulesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultPoliciesModulesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultPoliciesModulesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface DataStyraSystemResultPoliciesModules {
}

export function dataStyraSystemResultPoliciesModulesToTerraform(struct?: DataStyraSystemResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultPoliciesModulesToHclTerraform(struct?: DataStyraSystemResultPoliciesModules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultPoliciesModulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultPoliciesModules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultPoliciesModules | undefined) {
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

  // placeholder - computed: true, optional: false, required: false
  public get placeholder() {
    return this.getBooleanAttribute('placeholder');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataStyraSystemResultPoliciesModulesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
}

export class DataStyraSystemResultPoliciesModulesList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultPoliciesModulesOutputReference {
    return new DataStyraSystemResultPoliciesModulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultPoliciesRules {
}

export function dataStyraSystemResultPoliciesRulesToTerraform(struct?: DataStyraSystemResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultPoliciesRulesToHclTerraform(struct?: DataStyraSystemResultPoliciesRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultPoliciesRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultPoliciesRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultPoliciesRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  public get allow() {
    return this.getNumberAttribute('allow');
  }

  // deny - computed: true, optional: false, required: false
  public get deny() {
    return this.getNumberAttribute('deny');
  }

  // enforce - computed: true, optional: false, required: false
  public get enforce() {
    return this.getNumberAttribute('enforce');
  }

  // ignore - computed: true, optional: false, required: false
  public get ignore() {
    return this.getNumberAttribute('ignore');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getNumberAttribute('monitor');
  }

  // notify - computed: true, optional: false, required: false
  public get notify() {
    return this.getNumberAttribute('notify');
  }

  // other - computed: true, optional: false, required: false
  public get other() {
    return this.getNumberAttribute('other');
  }

  // test - computed: true, optional: false, required: false
  public get test() {
    return this.getNumberAttribute('test');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}
export interface DataStyraSystemResultPolicies {
}

export function dataStyraSystemResultPoliciesToTerraform(struct?: DataStyraSystemResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultPoliciesToHclTerraform(struct?: DataStyraSystemResultPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // enforcement - computed: true, optional: false, required: false
  private _enforcement = new DataStyraSystemResultPoliciesEnforcementOutputReference(this, "enforcement");
  public get enforcement() {
    return this._enforcement;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modules - computed: true, optional: false, required: false
  private _modules = new DataStyraSystemResultPoliciesModulesList(this, "modules", false);
  public get modules() {
    return this._modules;
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataStyraSystemResultPoliciesRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataStyraSystemResultPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultPoliciesOutputReference {
    return new DataStyraSystemResultPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultSourceControlOriginSshCredentials {
}

export function dataStyraSystemResultSourceControlOriginSshCredentialsToTerraform(struct?: DataStyraSystemResultSourceControlOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultSourceControlOriginSshCredentialsToHclTerraform(struct?: DataStyraSystemResultSourceControlOriginSshCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultSourceControlOriginSshCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultSourceControlOriginSshCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultSourceControlOriginSshCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
}
export interface DataStyraSystemResultSourceControlOrigin {
}

export function dataStyraSystemResultSourceControlOriginToTerraform(struct?: DataStyraSystemResultSourceControlOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultSourceControlOriginToHclTerraform(struct?: DataStyraSystemResultSourceControlOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultSourceControlOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultSourceControlOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultSourceControlOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commit - computed: true, optional: false, required: false
  public get commit() {
    return this.getStringAttribute('commit');
  }

  // credentials - computed: true, optional: false, required: false
  public get credentials() {
    return this.getStringAttribute('credentials');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // ssh_credentials - computed: true, optional: false, required: false
  private _sshCredentials = new DataStyraSystemResultSourceControlOriginSshCredentialsOutputReference(this, "ssh_credentials");
  public get sshCredentials() {
    return this._sshCredentials;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataStyraSystemResultSourceControl {
}

export function dataStyraSystemResultSourceControlToTerraform(struct?: DataStyraSystemResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultSourceControlToHclTerraform(struct?: DataStyraSystemResultSourceControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultSourceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultSourceControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultSourceControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin - computed: true, optional: false, required: false
  private _origin = new DataStyraSystemResultSourceControlOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
}
export interface DataStyraSystemResultTokensMetadata {
}

export function dataStyraSystemResultTokensMetadataToTerraform(struct?: DataStyraSystemResultTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultTokensMetadataToHclTerraform(struct?: DataStyraSystemResultTokensMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultTokensMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultTokensMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultTokensMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_through - computed: true, optional: false, required: false
  public get createdThrough() {
    return this.getStringAttribute('created_through');
  }

  // last_modified_at - computed: true, optional: false, required: false
  public get lastModifiedAt() {
    return this.getStringAttribute('last_modified_at');
  }

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_through - computed: true, optional: false, required: false
  public get lastModifiedThrough() {
    return this.getStringAttribute('last_modified_through');
  }
}
export interface DataStyraSystemResultTokens {
}

export function dataStyraSystemResultTokensToTerraform(struct?: DataStyraSystemResultTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultTokensToHclTerraform(struct?: DataStyraSystemResultTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataStyraSystemResultTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_path_patterns - computed: true, optional: false, required: false
  public get allowPathPatterns() {
    return this.getListAttribute('allow_path_patterns');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataStyraSystemResultTokensMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }

  // uses - computed: true, optional: false, required: false
  public get uses() {
    return this.getNumberAttribute('uses');
  }
}

export class DataStyraSystemResultTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataStyraSystemResultTokensOutputReference {
    return new DataStyraSystemResultTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataStyraSystemResultTypeParameters {
}

export function dataStyraSystemResultTypeParametersToTerraform(struct?: DataStyraSystemResultTypeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultTypeParametersToHclTerraform(struct?: DataStyraSystemResultTypeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultTypeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResultTypeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResultTypeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataStyraSystemResult {
}

export function dataStyraSystemResultToTerraform(struct?: DataStyraSystemResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStyraSystemResultToHclTerraform(struct?: DataStyraSystemResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStyraSystemResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStyraSystemResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStyraSystemResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authz - computed: true, optional: false, required: false
  private _authz = new DataStyraSystemResultAuthzOutputReference(this, "authz");
  public get authz() {
    return this._authz;
  }

  // bundle_download - computed: true, optional: false, required: false
  private _bundleDownload = new DataStyraSystemResultBundleDownloadOutputReference(this, "bundle_download");
  public get bundleDownload() {
    return this._bundleDownload;
  }

  // bundle_registry - computed: true, optional: false, required: false
  private _bundleRegistry = new DataStyraSystemResultBundleRegistryOutputReference(this, "bundle_registry");
  public get bundleRegistry() {
    return this._bundleRegistry;
  }

  // context_bundle_data_only - computed: true, optional: false, required: false
  public get contextBundleDataOnly() {
    return this.getBooleanAttribute('context_bundle_data_only');
  }

  // context_bundle_roots - computed: true, optional: false, required: false
  public get contextBundleRoots() {
    return this.getListAttribute('context_bundle_roots');
  }

  // datasources - computed: true, optional: false, required: false
  private _datasources = new DataStyraSystemResultDatasourcesList(this, "datasources", false);
  public get datasources() {
    return this._datasources;
  }

  // decision_mappings - computed: true, optional: false, required: false
  private _decisionMappings = new DataStyraSystemResultDecisionMappingsMap(this, "decision_mappings");
  public get decisionMappings() {
    return this._decisionMappings;
  }

  // deployment_parameters - computed: true, optional: false, required: false
  private _deploymentParameters = new DataStyraSystemResultDeploymentParametersOutputReference(this, "deployment_parameters");
  public get deploymentParameters() {
    return this._deploymentParameters;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_setting - computed: true, optional: false, required: false
  public get errorSetting() {
    return this.getStringAttribute('error_setting');
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new DataStyraSystemResultErrorsMap(this, "errors");
  public get errors() {
    return this._errors;
  }

  // external_bundles - computed: true, optional: false, required: false
  private _externalBundles = new DataStyraSystemResultExternalBundlesOutputReference(this, "external_bundles");
  public get externalBundles() {
    return this._externalBundles;
  }

  // external_id - computed: true, optional: false, required: false
  public get externalId() {
    return this.getStringAttribute('external_id');
  }

  // filter_stacks - computed: true, optional: false, required: false
  public get filterStacks() {
    return this.getBooleanAttribute('filter_stacks');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kafka_topic - computed: true, optional: false, required: false
  public get kafkaTopic() {
    return this.getStringAttribute('kafka_topic');
  }

  // matching_stacks - computed: true, optional: false, required: false
  public get matchingStacks() {
    return this.getListAttribute('matching_stacks');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataStyraSystemResultMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // migration_history - computed: true, optional: false, required: false
  private _migrationHistory = new DataStyraSystemResultMigrationHistoryList(this, "migration_history", false);
  public get migrationHistory() {
    return this._migrationHistory;
  }

  // minimum_opa_version - computed: true, optional: false, required: false
  public get minimumOpaVersion() {
    return this.getStringAttribute('minimum_opa_version');
  }

  // mock_opa_enabled - computed: true, optional: false, required: false
  public get mockOpaEnabled() {
    return this.getBooleanAttribute('mock_opa_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policies - computed: true, optional: false, required: false
  private _policies = new DataStyraSystemResultPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // source_control - computed: true, optional: false, required: false
  private _sourceControl = new DataStyraSystemResultSourceControlOutputReference(this, "source_control");
  public get sourceControl() {
    return this._sourceControl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataStyraSystemResultTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_parameters - computed: true, optional: false, required: false
  private _typeParameters = new DataStyraSystemResultTypeParametersOutputReference(this, "type_parameters");
  public get typeParameters() {
    return this._typeParameters;
  }

  // uninstall - computed: true, optional: false, required: false
  private _uninstall = new cdktf.StringMap(this, "uninstall");
  public get uninstall() {
    return this._uninstall;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/system styra_system}
*/
export class DataStyraSystem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "styra_system";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStyraSystem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStyraSystem to import
  * @param importFromId The id of the existing DataStyraSystem that should be imported. Refer to the {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/system#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStyraSystem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "styra_system", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/styrainc/styra/0.2.3/docs/data-sources/system styra_system} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStyraSystemConfig
  */
  public constructor(scope: Construct, id: string, config: DataStyraSystemConfig) {
    super(scope, id, {
      terraformResourceType: 'styra_system',
      terraformGeneratorMetadata: {
        providerName: 'styra',
        providerVersion: '0.2.3'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // request_id - computed: true, optional: false, required: false
  public get requestId() {
    return this.getStringAttribute('request_id');
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataStyraSystemResultOutputReference(this, "result");
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
