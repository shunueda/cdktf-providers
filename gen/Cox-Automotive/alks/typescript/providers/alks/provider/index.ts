// https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlksProviderConfig {
  /**
  * This is the AWS access key. It must be provided, but it can also be sourced from the ALKS_ACCESS_KEY_ID or AWS_ACCESS_KEY_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#access_key AlksProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The account which you'd like to retrieve credentials for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#account AlksProvider#account}
  */
  readonly account?: string;
  /**
  * The profile for API operations. Used in place of STS tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#profile AlksProvider#profile}
  */
  readonly profile?: string;
  /**
  * The role which you'd like to retrieve credentials for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#role AlksProvider#role}
  */
  readonly role?: string;
  /**
  * This is the AWS secret key. It must be provided, but it can also be sourced from the ALKS_SECRET_ACCESS_KEY or AWS_SECRET_ACCESS_KEY environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#secret_key AlksProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The path to the shared credentials file. If not set this defaults to ~/.aws/credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#shared_credentials_file AlksProvider#shared_credentials_file}
  */
  readonly sharedCredentialsFile?: string;
  /**
  * This is the AWS session token. It must be provided, but it can also be sourced from the ALKS_SESSION_TOKEN or AWS_SESSION_TOKEN environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#token AlksProvider#token}
  */
  readonly token?: string;
  /**
  * This is the base URL to ALKS service. It must be provided, but it can also be sourced from the ALKS_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#url AlksProvider#url}
  */
  readonly url: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#alias AlksProvider#alias}
  */
  readonly alias?: string;
  /**
  * assume_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#assume_role AlksProvider#assume_role}
  */
  readonly assumeRole?: AlksProviderAssumeRole;
  /**
  * default_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#default_tags AlksProvider#default_tags}
  */
  readonly defaultTags?: AlksProviderDefaultTags;
  /**
  * ignore_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#ignore_tags AlksProvider#ignore_tags}
  */
  readonly ignoreTags?: AlksProviderIgnoreTags;
}
export interface AlksProviderAssumeRole {
  /**
  * (Optional) The external ID to use when making the AssumeRole call. See AWS SDK for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#external_id AlksProvider#external_id}
  */
  readonly externalId?: string;
  /**
  * (Optional) Additional policy restrictions to apply to the result STS session.  See AWS SDK for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#policy AlksProvider#policy}
  */
  readonly policy?: string;
  /**
  * (Required) Role ARN to assume before calling ALKS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#role_arn AlksProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * (Optional) Session name to use when making the AssumeRole call.  See AWS SDK for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#session_name AlksProvider#session_name}
  */
  readonly sessionName?: string;
}

export function alksProviderAssumeRoleToTerraform(struct?: AlksProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    policy: cdktf.stringToTerraform(struct!.policy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name: cdktf.stringToTerraform(struct!.sessionName),
  }
}


export function alksProviderAssumeRoleToHclTerraform(struct?: AlksProviderAssumeRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AlksProviderDefaultTags {
  /**
  * Resource tags to default across all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#tags AlksProvider#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function alksProviderDefaultTagsToTerraform(struct?: AlksProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function alksProviderDefaultTagsToHclTerraform(struct?: AlksProviderDefaultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AlksProviderIgnoreTags {
  /**
  * Resource tag key prefixes to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#key_prefixes AlksProvider#key_prefixes}
  */
  readonly keyPrefixes?: string[];
  /**
  * Resource tag keys to ignore across all resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#keys AlksProvider#keys}
  */
  readonly keys?: string[];
}

export function alksProviderIgnoreTagsToTerraform(struct?: AlksProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyPrefixes),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function alksProviderIgnoreTagsToHclTerraform(struct?: AlksProviderIgnoreTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyPrefixes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs alks}
*/
export class AlksProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alks";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlksProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlksProvider to import
  * @param importFromId The id of the existing AlksProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlksProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alks", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cox-automotive/alks/2.8.2/docs alks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlksProviderConfig
  */
  public constructor(scope: Construct, id: string, config: AlksProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'alks',
      terraformGeneratorMetadata: {
        providerName: 'alks',
        providerVersion: '2.8.2'
      },
      terraformProviderSource: 'Cox-Automotive/alks'
    });
    this._accessKey = config.accessKey;
    this._account = config.account;
    this._profile = config.profile;
    this._role = config.role;
    this._secretKey = config.secretKey;
    this._sharedCredentialsFile = config.sharedCredentialsFile;
    this._token = config.token;
    this._url = config.url;
    this._alias = config.alias;
    this._assumeRole = config.assumeRole;
    this._defaultTags = config.defaultTags;
    this._ignoreTags = config.ignoreTags;
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

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this._account;
  }
  public set account(value: string | undefined) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this._role;
  }
  public set role(value: string | undefined) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // shared_credentials_file - computed: false, optional: true, required: false
  private _sharedCredentialsFile?: string; 
  public get sharedCredentialsFile() {
    return this._sharedCredentialsFile;
  }
  public set sharedCredentialsFile(value: string | undefined) {
    this._sharedCredentialsFile = value;
  }
  public resetSharedCredentialsFile() {
    this._sharedCredentialsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedCredentialsFileInput() {
    return this._sharedCredentialsFile;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
  private _assumeRole?: AlksProviderAssumeRole; 
  public get assumeRole() {
    return this._assumeRole;
  }
  public set assumeRole(value: AlksProviderAssumeRole | undefined) {
    this._assumeRole = value;
  }
  public resetAssumeRole() {
    this._assumeRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assumeRoleInput() {
    return this._assumeRole;
  }

  // default_tags - computed: false, optional: true, required: false
  private _defaultTags?: AlksProviderDefaultTags; 
  public get defaultTags() {
    return this._defaultTags;
  }
  public set defaultTags(value: AlksProviderDefaultTags | undefined) {
    this._defaultTags = value;
  }
  public resetDefaultTags() {
    this._defaultTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTagsInput() {
    return this._defaultTags;
  }

  // ignore_tags - computed: false, optional: true, required: false
  private _ignoreTags?: AlksProviderIgnoreTags; 
  public get ignoreTags() {
    return this._ignoreTags;
  }
  public set ignoreTags(value: AlksProviderIgnoreTags | undefined) {
    this._ignoreTags = value;
  }
  public resetIgnoreTags() {
    this._ignoreTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTagsInput() {
    return this._ignoreTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key: cdktf.stringToTerraform(this._accessKey),
      account: cdktf.stringToTerraform(this._account),
      profile: cdktf.stringToTerraform(this._profile),
      role: cdktf.stringToTerraform(this._role),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      shared_credentials_file: cdktf.stringToTerraform(this._sharedCredentialsFile),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      alias: cdktf.stringToTerraform(this._alias),
      assume_role: alksProviderAssumeRoleToTerraform(this._assumeRole),
      default_tags: alksProviderDefaultTagsToTerraform(this._defaultTags),
      ignore_tags: alksProviderIgnoreTagsToTerraform(this._ignoreTags),
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
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      shared_credentials_file: {
        value: cdktf.stringToHclTerraform(this._sharedCredentialsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
        value: alksProviderAssumeRoleToHclTerraform(this._assumeRole),
        isBlock: true,
        type: "set",
        storageClassType: "AlksProviderAssumeRoleList",
      },
      default_tags: {
        value: alksProviderDefaultTagsToHclTerraform(this._defaultTags),
        isBlock: true,
        type: "list",
        storageClassType: "AlksProviderDefaultTagsList",
      },
      ignore_tags: {
        value: alksProviderIgnoreTagsToHclTerraform(this._ignoreTags),
        isBlock: true,
        type: "list",
        storageClassType: "AlksProviderIgnoreTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
