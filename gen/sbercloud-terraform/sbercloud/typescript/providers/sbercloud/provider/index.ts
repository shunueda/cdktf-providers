// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SbercloudProviderConfig {
  /**
  * The access key of the SberCloud to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#access_key SbercloudProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The name of the Account to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#account_name SbercloudProvider#account_name}
  */
  readonly accountName?: string;
  /**
  * The Identity authentication URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#auth_url SbercloudProvider#auth_url}
  */
  readonly authUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#domain_id SbercloudProvider#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#domain_name SbercloudProvider#domain_name}
  */
  readonly domainName?: string;
  /**
  * The custom endpoints used to override the default endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#endpoints SbercloudProvider#endpoints}
  */
  readonly endpoints?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#enterprise_project_id SbercloudProvider#enterprise_project_id}
  */
  readonly enterpriseProjectId?: string;
  /**
  * Trust self-signed certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#insecure SbercloudProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#max_retries SbercloudProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Password to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#password SbercloudProvider#password}
  */
  readonly password?: string;
  /**
  * The name of the Project to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#project_name SbercloudProvider#project_name}
  */
  readonly projectName?: string;
  /**
  * The SberCloud region to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#region SbercloudProvider#region}
  */
  readonly region: string;
  /**
  * The secret key of the SberCloud to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#secret_key SbercloudProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The security token to authenticate with a temporary security credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#security_token SbercloudProvider#security_token}
  */
  readonly securityToken?: string;
  /**
  * Username to login with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#user_name SbercloudProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#alias SbercloudProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#assume_role SbercloudProvider#assume_role}
  */
  readonly assumeRole?: SbercloudProviderAssumeRole;
}
export interface SbercloudProviderAssumeRole {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#agency_name SbercloudProvider#agency_name}
  */
  readonly agencyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#domain_name SbercloudProvider#domain_name}
  */
  readonly domainName: string;
}

export function sbercloudProviderAssumeRoleToTerraform(struct?: SbercloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agency_name: cdktf.stringToTerraform(struct!.agencyName),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
  }
}


export function sbercloudProviderAssumeRoleToHclTerraform(struct?: SbercloudProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agency_name: {
      value: cdktf.stringToHclTerraform(struct!.agencyName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs sbercloud}
*/
export class SbercloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SbercloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SbercloudProvider to import
  * @param importFromId The id of the existing SbercloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SbercloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs sbercloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SbercloudProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SbercloudProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14'
      },
      terraformProviderSource: 'sbercloud-terraform/sbercloud'
    });
    this._accessKey = config.accessKey;
    this._accountName = config.accountName;
    this._authUrl = config.authUrl;
    this._domainId = config.domainId;
    this._domainName = config.domainName;
    this._endpoints = config.endpoints;
    this._enterpriseProjectId = config.enterpriseProjectId;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._password = config.password;
    this._projectName = config.projectName;
    this._region = config.region;
    this._secretKey = config.secretKey;
    this._securityToken = config.securityToken;
    this._userName = config.userName;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this._accountName;
  }
  public set accountName(value: string | undefined) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // auth_url - computed: false, optional: true, required: false
  private _authUrl?: string; 
  public get authUrl() {
    return this._authUrl;
  }
  public set authUrl(value: string | undefined) {
    this._authUrl = value;
  }
  public resetAuthUrl() {
    this._authUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this._domainId;
  }
  public set domainId(value: string | undefined) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this._domainName;
  }
  public set domainName(value: string | undefined) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // endpoints - computed: false, optional: true, required: false
  private _endpoints?: { [key: string]: string }; 
  public get endpoints() {
    return this._endpoints;
  }
  public set endpoints(value: { [key: string]: string } | undefined) {
    this._endpoints = value;
  }
  public resetEndpoints() {
    this._endpoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
  }

  // enterprise_project_id - computed: false, optional: true, required: false
  private _enterpriseProjectId?: string; 
  public get enterpriseProjectId() {
    return this._enterpriseProjectId;
  }
  public set enterpriseProjectId(value: string | undefined) {
    this._enterpriseProjectId = value;
  }
  public resetEnterpriseProjectId() {
    this._enterpriseProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseProjectIdInput() {
    return this._enterpriseProjectId;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this._projectName;
  }
  public set projectName(value: string | undefined) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // security_token - computed: false, optional: true, required: false
  private _securityToken?: string; 
  public get securityToken() {
    return this._securityToken;
  }
  public set securityToken(value: string | undefined) {
    this._securityToken = value;
  }
  public resetSecurityToken() {
    this._securityToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTokenInput() {
    return this._securityToken;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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

  // assume_role - computed: false, optional: true, required: false
  private _assumeRole?: SbercloudProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: SbercloudProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      account_name: cdktf.stringToTerraform(this._accountName),
      auth_url: cdktf.stringToTerraform(this._authUrl),
      domain_id: cdktf.stringToTerraform(this._domainId),
      domain_name: cdktf.stringToTerraform(this._domainName),
      endpoints: cdktf.hashMapper(cdktf.stringToTerraform)(this._endpoints),
      enterprise_project_id: cdktf.stringToTerraform(this._enterpriseProjectId),
      insecure: cdktf.booleanToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      password: cdktf.stringToTerraform(this._password),
      project_name: cdktf.stringToTerraform(this._projectName),
      region: cdktf.stringToTerraform(this._region),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      security_token: cdktf.stringToTerraform(this._securityToken),
      user_name: cdktf.stringToTerraform(this._userName),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: sbercloudProviderAssumeRoleToTerraform(this._assumeRole),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_url: {
        value: cdktf.stringToHclTerraform(this._authUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoints: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._endpoints),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enterprise_project_id: {
        value: cdktf.stringToHclTerraform(this._enterpriseProjectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_token: {
        value: cdktf.stringToHclTerraform(this._securityToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
      assume_role: {
        value: sbercloudProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "list",
        storageClassType: "SbercloudProviderAssumeRoleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
