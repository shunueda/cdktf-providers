// https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KopsProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#feature_flags KopsProvider#feature_flags}
  */
  readonly featureFlags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#mock KopsProvider#mock}
  */
  readonly mock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#state_store KopsProvider#state_store}
  */
  readonly stateStore: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#alias KopsProvider#alias}
  */
  readonly alias?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#aws KopsProvider#aws}
  */
  readonly aws?: KopsProviderAws;
  /**
  * klog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#klog KopsProvider#klog}
  */
  readonly klog?: KopsProviderKlog;
  /**
  * openstack block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#openstack KopsProvider#openstack}
  */
  readonly openstack?: KopsProviderOpenstack;
}
export interface KopsProviderAwsAssumeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#role_arn KopsProvider#role_arn}
  */
  readonly roleArn?: string;
}

export function kopsProviderAwsAssumeRoleToTerraform(struct?: KopsProviderAwsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function kopsProviderAwsAssumeRoleToHclTerraform(struct?: KopsProviderAwsAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface KopsProviderAws {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#access_key KopsProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#profile KopsProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#region KopsProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#s3_access_key KopsProvider#s3_access_key}
  */
  readonly s3AccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#s3_endpoint KopsProvider#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#s3_region KopsProvider#s3_region}
  */
  readonly s3Region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#s3_secret_key KopsProvider#s3_secret_key}
  */
  readonly s3SecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#secret_key KopsProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#skip_region_check KopsProvider#skip_region_check}
  */
  readonly skipRegionCheck?: boolean | cdktf.IResolvable;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#assume_role KopsProvider#assume_role}
  */
  readonly assumeRole?: KopsProviderAwsAssumeRole;
}

export function kopsProviderAwsToTerraform(struct?: KopsProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    profile: cdktf.stringToTerraform(struct!.profile),
    region: cdktf.stringToTerraform(struct!.region),
    s3_access_key: cdktf.stringToTerraform(struct!.s3AccessKey),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
    s3_region: cdktf.stringToTerraform(struct!.s3Region),
    s3_secret_key: cdktf.stringToTerraform(struct!.s3SecretKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    skip_region_check: cdktf.booleanToTerraform(struct!.skipRegionCheck),
    assume_role: kopsProviderAwsAssumeRoleToTerraform(struct!.assumeRole),
  }
}


export function kopsProviderAwsToHclTerraform(struct?: KopsProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_access_key: {
      value: cdktf.stringToHclTerraform(struct!.s3AccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_region: {
      value: cdktf.stringToHclTerraform(struct!.s3Region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_region_check: {
      value: cdktf.booleanToHclTerraform(struct!.skipRegionCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    assume_role: {
      value: kopsProviderAwsAssumeRoleToHclTerraform(struct!.assumeRole),
      isBlock: true,
      type: "list",
      storageClassType: "KopsProviderAwsAssumeRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface KopsProviderKlogVerbosity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#value KopsProvider#value}
  */
  readonly value?: number;
}

export function kopsProviderKlogVerbosityToTerraform(struct?: KopsProviderKlogVerbosity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function kopsProviderKlogVerbosityToHclTerraform(struct?: KopsProviderKlogVerbosity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface KopsProviderKlog {
  /**
  * verbosity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#verbosity KopsProvider#verbosity}
  */
  readonly verbosity?: KopsProviderKlogVerbosity;
}

export function kopsProviderKlogToTerraform(struct?: KopsProviderKlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verbosity: kopsProviderKlogVerbosityToTerraform(struct!.verbosity),
  }
}


export function kopsProviderKlogToHclTerraform(struct?: KopsProviderKlog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verbosity: {
      value: kopsProviderKlogVerbosityToHclTerraform(struct!.verbosity),
      isBlock: true,
      type: "list",
      storageClassType: "KopsProviderKlogVerbosityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface KopsProviderOpenstack {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#application_credential_id KopsProvider#application_credential_id}
  */
  readonly applicationCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#application_credential_secret KopsProvider#application_credential_secret}
  */
  readonly applicationCredentialSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#auth_url KopsProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#domain_id KopsProvider#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#domain_name KopsProvider#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#password KopsProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#project_domain_id KopsProvider#project_domain_id}
  */
  readonly projectDomainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#project_domain_name KopsProvider#project_domain_name}
  */
  readonly projectDomainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#project_id KopsProvider#project_id}
  */
  readonly projectId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#project_name KopsProvider#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#region_name KopsProvider#region_name}
  */
  readonly regionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#tenant_id KopsProvider#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#tenant_name KopsProvider#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#username KopsProvider#username}
  */
  readonly username?: string;
}

export function kopsProviderOpenstackToTerraform(struct?: KopsProviderOpenstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_credential_id: cdktf.stringToTerraform(struct!.applicationCredentialId),
    application_credential_secret: cdktf.stringToTerraform(struct!.applicationCredentialSecret),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    password: cdktf.stringToTerraform(struct!.password),
    project_domain_id: cdktf.stringToTerraform(struct!.projectDomainId),
    project_domain_name: cdktf.stringToTerraform(struct!.projectDomainName),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_name: cdktf.stringToTerraform(struct!.projectName),
    region_name: cdktf.stringToTerraform(struct!.regionName),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function kopsProviderOpenstackToHclTerraform(struct?: KopsProviderOpenstack): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_secret: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_domain_id: {
      value: cdktf.stringToHclTerraform(struct!.projectDomainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_domain_name: {
      value: cdktf.stringToHclTerraform(struct!.projectDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_name: {
      value: cdktf.stringToHclTerraform(struct!.projectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_name: {
      value: cdktf.stringToHclTerraform(struct!.regionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs kops}
*/
export class KopsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KopsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KopsProvider to import
  * @param importFromId The id of the existing KopsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KopsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/eddycharly/kops/1.25.4/docs kops} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KopsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KopsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'kops',
      terraformGeneratorMetadata: {
        providerName: 'kops',
        providerVersion: '1.25.4'
      },
      terraformProviderSource: 'eddycharly/kops'
    });
    this._featureFlags = config.featureFlags;
    this._mock = config.mock;
    this._stateStore = config.stateStore;
    this._alias = config.alias;
    this._aws = config.aws;
    this._klog = config.klog;
    this._openstack = config.openstack;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags?: string[]; 
  public get featureFlags() {
    return this._featureFlags;
  }
  public set featureFlags(value: string[] | undefined) {
    this._featureFlags = value;
  }
  public resetFeatureFlags() {
    this._featureFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags;
  }

  // mock - computed: false, optional: true, required: false
  private _mock?: boolean | cdktf.IResolvable; 
  public get mock() {
    return this._mock;
  }
  public set mock(value: boolean | cdktf.IResolvable | undefined) {
    this._mock = value;
  }
  public resetMock() {
    this._mock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockInput() {
    return this._mock;
  }

  // state_store - computed: false, optional: false, required: true
  private _stateStore?: string; 
  public get stateStore() {
    return this._stateStore;
  }
  public set stateStore(value: string | undefined) {
    this._stateStore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateStoreInput() {
    return this._stateStore;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // aws - computed: false, optional: true, required: false
  private _aws?: KopsProviderAws; 
  public get aws() {
    return this._aws;
  }
  public set aws(value: KopsProviderAws | undefined) {
    this._aws = value;
  }
  public resetAws() {
    this._aws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws;
  }

  // klog - computed: false, optional: true, required: false
  private _klog?: KopsProviderKlog; 
  public get klog() {
    return this._klog;
  }
  public set klog(value: KopsProviderKlog | undefined) {
    this._klog = value;
  }
  public resetKlog() {
    this._klog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get klogInput() {
    return this._klog;
  }

  // openstack - computed: false, optional: true, required: false
  private _openstack?: KopsProviderOpenstack; 
  public get openstack() {
    return this._openstack;
  }
  public set openstack(value: KopsProviderOpenstack | undefined) {
    this._openstack = value;
  }
  public resetOpenstack() {
    this._openstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackInput() {
    return this._openstack;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureFlags),
      mock: cdktf.booleanToTerraform(this._mock),
      state_store: cdktf.stringToTerraform(this._stateStore),
      alias: cdktf.stringToTerraform(this._alias),
      aws: kopsProviderAwsToTerraform(this._aws),
      klog: kopsProviderKlogToTerraform(this._klog),
      openstack: kopsProviderOpenstackToTerraform(this._openstack),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureFlags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mock: {
        value: cdktf.booleanToHclTerraform(this._mock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state_store: {
        value: cdktf.stringToHclTerraform(this._stateStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: kopsProviderAwsToHclTerraform(this._aws),
        isBlock: true,
        type: "list",
        storageClassType: "KopsProviderAwsList",
      },
      klog: {
        value: kopsProviderKlogToHclTerraform(this._klog),
        isBlock: true,
        type: "list",
        storageClassType: "KopsProviderKlogList",
      },
      openstack: {
        value: kopsProviderOpenstackToHclTerraform(this._openstack),
        isBlock: true,
        type: "list",
        storageClassType: "KopsProviderOpenstackList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
