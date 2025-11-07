// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/trust_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitTrustProvidersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitTrustProvidersTrustProvidersAwsMetadata {
}

export function dataAembitTrustProvidersTrustProvidersAwsMetadataToTerraform(struct?: DataAembitTrustProvidersTrustProvidersAwsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersAwsMetadataToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersAwsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersAwsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersAwsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersAwsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // availability_zone - computed: true, optional: false, required: false
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_zones'));
  }

  // billing_products - computed: true, optional: false, required: false
  public get billingProducts() {
    return this.getStringAttribute('billing_products');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // image_id - computed: true, optional: false, required: false
  public get imageId() {
    return this.getStringAttribute('image_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_ids - computed: true, optional: false, required: false
  public get instanceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_ids'));
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // instance_types - computed: true, optional: false, required: false
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
  }

  // kernel_id - computed: true, optional: false, required: false
  public get kernelId() {
    return this.getStringAttribute('kernel_id');
  }

  // marketplace_product_codes - computed: true, optional: false, required: false
  public get marketplaceProductCodes() {
    return this.getStringAttribute('marketplace_product_codes');
  }

  // pending_time - computed: true, optional: false, required: false
  public get pendingTime() {
    return this.getStringAttribute('pending_time');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // ramdisk_id - computed: true, optional: false, required: false
  public get ramdiskId() {
    return this.getStringAttribute('ramdisk_id');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export interface DataAembitTrustProvidersTrustProvidersAwsRole {
}

export function dataAembitTrustProvidersTrustProvidersAwsRoleToTerraform(struct?: DataAembitTrustProvidersTrustProvidersAwsRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersAwsRoleToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersAwsRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersAwsRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersAwsRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersAwsRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // account_ids - computed: true, optional: false, required: false
  public get accountIds() {
    return cdktf.Fn.tolist(this.getListAttribute('account_ids'));
  }

  // assumed_role - computed: true, optional: false, required: false
  public get assumedRole() {
    return this.getStringAttribute('assumed_role');
  }

  // assumed_roles - computed: true, optional: false, required: false
  public get assumedRoles() {
    return cdktf.Fn.tolist(this.getListAttribute('assumed_roles'));
  }

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // role_arns - computed: true, optional: false, required: false
  public get roleArns() {
    return cdktf.Fn.tolist(this.getListAttribute('role_arns'));
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // usernames - computed: true, optional: false, required: false
  public get usernames() {
    return cdktf.Fn.tolist(this.getListAttribute('usernames'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersAzureMetadata {
}

export function dataAembitTrustProvidersTrustProvidersAzureMetadataToTerraform(struct?: DataAembitTrustProvidersTrustProvidersAzureMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersAzureMetadataToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersAzureMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersAzureMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersAzureMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersAzureMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sku - computed: true, optional: false, required: false
  public get sku() {
    return this.getStringAttribute('sku');
  }

  // skus - computed: true, optional: false, required: false
  public get skus() {
    return cdktf.Fn.tolist(this.getListAttribute('skus'));
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // subscription_ids - computed: true, optional: false, required: false
  public get subscriptionIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subscription_ids'));
  }

  // vm_id - computed: true, optional: false, required: false
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }

  // vm_ids - computed: true, optional: false, required: false
  public get vmIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_ids'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersGcpIdentity {
}

export function dataAembitTrustProvidersTrustProvidersGcpIdentityToTerraform(struct?: DataAembitTrustProvidersTrustProvidersGcpIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersGcpIdentityToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersGcpIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersGcpIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersGcpIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersGcpIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // emails - computed: true, optional: false, required: false
  public get emails() {
    return cdktf.Fn.tolist(this.getListAttribute('emails'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersGithubAction {
}

export function dataAembitTrustProvidersTrustProvidersGithubActionToTerraform(struct?: DataAembitTrustProvidersTrustProvidersGithubAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersGithubActionToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersGithubAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersGithubActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersGithubAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersGithubAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actor - computed: true, optional: false, required: false
  public get actor() {
    return this.getStringAttribute('actor');
  }

  // actors - computed: true, optional: false, required: false
  public get actors() {
    return cdktf.Fn.tolist(this.getListAttribute('actors'));
  }

  // oidc_audience - computed: true, optional: false, required: false
  public get oidcAudience() {
    return this.getStringAttribute('oidc_audience');
  }

  // oidc_client_id - computed: true, optional: false, required: false
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }

  // repositories - computed: true, optional: false, required: false
  public get repositories() {
    return cdktf.Fn.tolist(this.getListAttribute('repositories'));
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // workflow - computed: true, optional: false, required: false
  public get workflow() {
    return this.getStringAttribute('workflow');
  }

  // workflows - computed: true, optional: false, required: false
  public get workflows() {
    return cdktf.Fn.tolist(this.getListAttribute('workflows'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersGitlabJob {
}

export function dataAembitTrustProvidersTrustProvidersGitlabJobToTerraform(struct?: DataAembitTrustProvidersTrustProvidersGitlabJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersGitlabJobToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersGitlabJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersGitlabJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersGitlabJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersGitlabJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace_path - computed: true, optional: false, required: false
  public get namespacePath() {
    return this.getStringAttribute('namespace_path');
  }

  // namespace_paths - computed: true, optional: false, required: false
  public get namespacePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('namespace_paths'));
  }

  // oidc_audience - computed: true, optional: false, required: false
  public get oidcAudience() {
    return this.getStringAttribute('oidc_audience');
  }

  // oidc_client_id - computed: true, optional: false, required: false
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }

  // oidc_endpoint - computed: true, optional: false, required: false
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }

  // project_path - computed: true, optional: false, required: false
  public get projectPath() {
    return this.getStringAttribute('project_path');
  }

  // project_paths - computed: true, optional: false, required: false
  public get projectPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('project_paths'));
  }

  // ref_path - computed: true, optional: false, required: false
  public get refPath() {
    return this.getStringAttribute('ref_path');
  }

  // ref_paths - computed: true, optional: false, required: false
  public get refPaths() {
    return cdktf.Fn.tolist(this.getListAttribute('ref_paths'));
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subjects - computed: true, optional: false, required: false
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersKerberos {
}

export function dataAembitTrustProvidersTrustProvidersKerberosToTerraform(struct?: DataAembitTrustProvidersTrustProvidersKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersKerberosToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersKerberos): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersKerberosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersKerberos | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersKerberos | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_controller_ids - computed: true, optional: false, required: false
  public get agentControllerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('agent_controller_ids'));
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }

  // realm_domain - computed: true, optional: false, required: false
  public get realmDomain() {
    return this.getStringAttribute('realm_domain');
  }

  // realms_domains - computed: true, optional: false, required: false
  public get realmsDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('realms_domains'));
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // source_ips - computed: true, optional: false, required: false
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
}
export interface DataAembitTrustProvidersTrustProvidersKubernetesServiceAccount {
}

export function dataAembitTrustProvidersTrustProvidersKubernetesServiceAccountToTerraform(struct?: DataAembitTrustProvidersTrustProvidersKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersKubernetesServiceAccountToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersKubernetesServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersKubernetesServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersKubernetesServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersKubernetesServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return cdktf.Fn.tolist(this.getListAttribute('issuers'));
  }

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // namespaces - computed: true, optional: false, required: false
  public get namespaces() {
    return cdktf.Fn.tolist(this.getListAttribute('namespaces'));
  }

  // oidc_endpoint - computed: true, optional: false, required: false
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }

  // pod_name - computed: true, optional: false, required: false
  public get podName() {
    return this.getStringAttribute('pod_name');
  }

  // pod_names - computed: true, optional: false, required: false
  public get podNames() {
    return cdktf.Fn.tolist(this.getListAttribute('pod_names'));
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // service_account_name - computed: true, optional: false, required: false
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }

  // service_account_names - computed: true, optional: false, required: false
  public get serviceAccountNames() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_names'));
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subjects - computed: true, optional: false, required: false
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }

  // symmetric_key - computed: true, optional: false, required: false
  public get symmetricKey() {
    return this.getStringAttribute('symmetric_key');
  }
}
export interface DataAembitTrustProvidersTrustProvidersOidcIdToken {
}

export function dataAembitTrustProvidersTrustProvidersOidcIdTokenToTerraform(struct?: DataAembitTrustProvidersTrustProvidersOidcIdToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersOidcIdTokenToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersOidcIdToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersOidcIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersOidcIdToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersOidcIdToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // audiences - computed: true, optional: false, required: false
  public get audiences() {
    return cdktf.Fn.tolist(this.getListAttribute('audiences'));
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // issuers - computed: true, optional: false, required: false
  public get issuers() {
    return cdktf.Fn.tolist(this.getListAttribute('issuers'));
  }

  // jwks - computed: true, optional: false, required: false
  public get jwks() {
    return this.getStringAttribute('jwks');
  }

  // oidc_endpoint - computed: true, optional: false, required: false
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subjects - computed: true, optional: false, required: false
  public get subjects() {
    return cdktf.Fn.tolist(this.getListAttribute('subjects'));
  }

  // symmetric_key - computed: true, optional: false, required: false
  public get symmetricKey() {
    return this.getStringAttribute('symmetric_key');
  }
}
export interface DataAembitTrustProvidersTrustProvidersTerraformWorkspace {
}

export function dataAembitTrustProvidersTrustProvidersTerraformWorkspaceToTerraform(struct?: DataAembitTrustProvidersTrustProvidersTerraformWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersTerraformWorkspaceToHclTerraform(struct?: DataAembitTrustProvidersTrustProvidersTerraformWorkspace): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersTerraformWorkspaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitTrustProvidersTrustProvidersTerraformWorkspace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProvidersTerraformWorkspace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // organization_ids - computed: true, optional: false, required: false
  public get organizationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('organization_ids'));
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_ids - computed: true, optional: false, required: false
  public get workspaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('workspace_ids'));
  }
}
export interface DataAembitTrustProvidersTrustProviders {
}

export function dataAembitTrustProvidersTrustProvidersToTerraform(struct?: DataAembitTrustProvidersTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitTrustProvidersTrustProvidersToHclTerraform(struct?: DataAembitTrustProvidersTrustProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitTrustProvidersTrustProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitTrustProvidersTrustProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitTrustProvidersTrustProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_metadata - computed: true, optional: false, required: false
  private _awsMetadata = new DataAembitTrustProvidersTrustProvidersAwsMetadataOutputReference(this, "aws_metadata");
  public get awsMetadata() {
    return this._awsMetadata;
  }

  // aws_role - computed: true, optional: false, required: false
  private _awsRole = new DataAembitTrustProvidersTrustProvidersAwsRoleOutputReference(this, "aws_role");
  public get awsRole() {
    return this._awsRole;
  }

  // azure_metadata - computed: true, optional: false, required: false
  private _azureMetadata = new DataAembitTrustProvidersTrustProvidersAzureMetadataOutputReference(this, "azure_metadata");
  public get azureMetadata() {
    return this._azureMetadata;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // gcp_identity - computed: true, optional: false, required: false
  private _gcpIdentity = new DataAembitTrustProvidersTrustProvidersGcpIdentityOutputReference(this, "gcp_identity");
  public get gcpIdentity() {
    return this._gcpIdentity;
  }

  // github_action - computed: true, optional: false, required: false
  private _githubAction = new DataAembitTrustProvidersTrustProvidersGithubActionOutputReference(this, "github_action");
  public get githubAction() {
    return this._githubAction;
  }

  // gitlab_job - computed: true, optional: false, required: false
  private _gitlabJob = new DataAembitTrustProvidersTrustProvidersGitlabJobOutputReference(this, "gitlab_job");
  public get gitlabJob() {
    return this._gitlabJob;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // kerberos - computed: true, optional: false, required: false
  private _kerberos = new DataAembitTrustProvidersTrustProvidersKerberosOutputReference(this, "kerberos");
  public get kerberos() {
    return this._kerberos;
  }

  // kubernetes_service_account - computed: true, optional: false, required: false
  private _kubernetesServiceAccount = new DataAembitTrustProvidersTrustProvidersKubernetesServiceAccountOutputReference(this, "kubernetes_service_account");
  public get kubernetesServiceAccount() {
    return this._kubernetesServiceAccount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oidc_id_token - computed: true, optional: false, required: false
  private _oidcIdToken = new DataAembitTrustProvidersTrustProvidersOidcIdTokenOutputReference(this, "oidc_id_token");
  public get oidcIdToken() {
    return this._oidcIdToken;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // terraform_workspace - computed: true, optional: false, required: false
  private _terraformWorkspace = new DataAembitTrustProvidersTrustProvidersTerraformWorkspaceOutputReference(this, "terraform_workspace");
  public get terraformWorkspace() {
    return this._terraformWorkspace;
  }
}

export class DataAembitTrustProvidersTrustProvidersList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitTrustProvidersTrustProvidersOutputReference {
    return new DataAembitTrustProvidersTrustProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/trust_providers aembit_trust_providers}
*/
export class DataAembitTrustProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_trust_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitTrustProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitTrustProviders to import
  * @param importFromId The id of the existing DataAembitTrustProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/trust_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitTrustProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_trust_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/trust_providers aembit_trust_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitTrustProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitTrustProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_trust_providers',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // trust_providers - computed: true, optional: false, required: false
  private _trustProviders = new DataAembitTrustProvidersTrustProvidersList(this, "trust_providers", false);
  public get trustProviders() {
    return this._trustProviders;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
