// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AkeylessProviderConfig {
  /**
  * Origin URL of the API Gateway server. This is a URL with a scheme, a hostname and a port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#api_gateway_address AkeylessProvider#api_gateway_address}
  */
  readonly apiGatewayAddress?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#alias AkeylessProvider#alias}
  */
  readonly alias?: string;
  /**
  * api_key_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#api_key_login AkeylessProvider#api_key_login}
  */
  readonly apiKeyLogin?: AkeylessProviderApiKeyLogin[] | cdktf.IResolvable;
  /**
  * aws_iam_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#aws_iam_login AkeylessProvider#aws_iam_login}
  */
  readonly awsIamLogin?: AkeylessProviderAwsIamLogin[] | cdktf.IResolvable;
  /**
  * azure_ad_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#azure_ad_login AkeylessProvider#azure_ad_login}
  */
  readonly azureAdLogin?: AkeylessProviderAzureAdLogin[] | cdktf.IResolvable;
  /**
  * cert_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#cert_login AkeylessProvider#cert_login}
  */
  readonly certLogin?: AkeylessProviderCertLogin[] | cdktf.IResolvable;
  /**
  * email_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#email_login AkeylessProvider#email_login}
  */
  readonly emailLogin?: AkeylessProviderEmailLogin[] | cdktf.IResolvable;
  /**
  * gcp_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#gcp_login AkeylessProvider#gcp_login}
  */
  readonly gcpLogin?: AkeylessProviderGcpLogin[] | cdktf.IResolvable;
  /**
  * jwt_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#jwt_login AkeylessProvider#jwt_login}
  */
  readonly jwtLogin?: AkeylessProviderJwtLogin[] | cdktf.IResolvable;
  /**
  * token_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#token_login AkeylessProvider#token_login}
  */
  readonly tokenLogin?: AkeylessProviderTokenLogin[] | cdktf.IResolvable;
  /**
  * uid_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#uid_login AkeylessProvider#uid_login}
  */
  readonly uidLogin?: AkeylessProviderUidLogin[] | cdktf.IResolvable;
}
export interface AkeylessProviderApiKeyLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_key AkeylessProvider#access_key}
  */
  readonly accessKey: string;
}

export function akeylessProviderApiKeyLoginToTerraform(struct?: AkeylessProviderApiKeyLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    access_key: cdktf.stringToTerraform(struct!.accessKey),
  }
}


export function akeylessProviderApiKeyLoginToHclTerraform(struct?: AkeylessProviderApiKeyLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderAwsIamLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
}

export function akeylessProviderAwsIamLoginToTerraform(struct?: AkeylessProviderAwsIamLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
  }
}


export function akeylessProviderAwsIamLoginToHclTerraform(struct?: AkeylessProviderAwsIamLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderAzureAdLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
}

export function akeylessProviderAzureAdLoginToTerraform(struct?: AkeylessProviderAzureAdLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
  }
}


export function akeylessProviderAzureAdLoginToHclTerraform(struct?: AkeylessProviderAzureAdLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderCertLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#cert_data AkeylessProvider#cert_data}
  */
  readonly certData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#cert_file_name AkeylessProvider#cert_file_name}
  */
  readonly certFileName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#key_data AkeylessProvider#key_data}
  */
  readonly keyData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#key_file_name AkeylessProvider#key_file_name}
  */
  readonly keyFileName?: string;
}

export function akeylessProviderCertLoginToTerraform(struct?: AkeylessProviderCertLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    cert_data: cdktf.stringToTerraform(struct!.certData),
    cert_file_name: cdktf.stringToTerraform(struct!.certFileName),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_file_name: cdktf.stringToTerraform(struct!.keyFileName),
  }
}


export function akeylessProviderCertLoginToHclTerraform(struct?: AkeylessProviderCertLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_data: {
      value: cdktf.stringToHclTerraform(struct!.certData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_file_name: {
      value: cdktf.stringToHclTerraform(struct!.certFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_file_name: {
      value: cdktf.stringToHclTerraform(struct!.keyFileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderEmailLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#admin_email AkeylessProvider#admin_email}
  */
  readonly adminEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#admin_password AkeylessProvider#admin_password}
  */
  readonly adminPassword: string;
}

export function akeylessProviderEmailLoginToTerraform(struct?: AkeylessProviderEmailLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email: cdktf.stringToTerraform(struct!.adminEmail),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
  }
}


export function akeylessProviderEmailLoginToHclTerraform(struct?: AkeylessProviderEmailLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email: {
      value: cdktf.stringToHclTerraform(struct!.adminEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderGcpLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#audience AkeylessProvider#audience}
  */
  readonly audience?: string;
}

export function akeylessProviderGcpLoginToTerraform(struct?: AkeylessProviderGcpLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    audience: cdktf.stringToTerraform(struct!.audience),
  }
}


export function akeylessProviderGcpLoginToHclTerraform(struct?: AkeylessProviderGcpLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderJwtLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#jwt AkeylessProvider#jwt}
  */
  readonly jwt: string;
}

export function akeylessProviderJwtLoginToTerraform(struct?: AkeylessProviderJwtLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    jwt: cdktf.stringToTerraform(struct!.jwt),
  }
}


export function akeylessProviderJwtLoginToHclTerraform(struct?: AkeylessProviderJwtLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt: {
      value: cdktf.stringToHclTerraform(struct!.jwt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderTokenLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#token AkeylessProvider#token}
  */
  readonly token: string;
}

export function akeylessProviderTokenLoginToTerraform(struct?: AkeylessProviderTokenLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function akeylessProviderTokenLoginToHclTerraform(struct?: AkeylessProviderTokenLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface AkeylessProviderUidLogin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#access_id AkeylessProvider#access_id}
  */
  readonly accessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#uid_token AkeylessProvider#uid_token}
  */
  readonly uidToken: string;
}

export function akeylessProviderUidLoginToTerraform(struct?: AkeylessProviderUidLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_id: cdktf.stringToTerraform(struct!.accessId),
    uid_token: cdktf.stringToTerraform(struct!.uidToken),
  }
}


export function akeylessProviderUidLoginToHclTerraform(struct?: AkeylessProviderUidLogin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_id: {
      value: cdktf.stringToHclTerraform(struct!.accessId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid_token: {
      value: cdktf.stringToHclTerraform(struct!.uidToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs akeyless}
*/
export class AkeylessProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AkeylessProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AkeylessProvider to import
  * @param importFromId The id of the existing AkeylessProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AkeylessProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs akeyless} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AkeylessProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AkeylessProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1',
        providerVersionConstraint: '1.11.1'
      },
      terraformProviderSource: 'akeyless-community/akeyless'
    });
    this._apiGatewayAddress = config.apiGatewayAddress;
    this._alias = config.alias;
    this._apiKeyLogin = config.apiKeyLogin;
    this._awsIamLogin = config.awsIamLogin;
    this._azureAdLogin = config.azureAdLogin;
    this._certLogin = config.certLogin;
    this._emailLogin = config.emailLogin;
    this._gcpLogin = config.gcpLogin;
    this._jwtLogin = config.jwtLogin;
    this._tokenLogin = config.tokenLogin;
    this._uidLogin = config.uidLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_gateway_address - computed: false, optional: true, required: false
  private _apiGatewayAddress?: string; 
  public get apiGatewayAddress() {
    return this._apiGatewayAddress;
  }
  public set apiGatewayAddress(value: string | undefined) {
    this._apiGatewayAddress = value;
  }
  public resetApiGatewayAddress() {
    this._apiGatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayAddressInput() {
    return this._apiGatewayAddress;
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

  // api_key_login - computed: false, optional: true, required: false
  private _apiKeyLogin?: AkeylessProviderApiKeyLogin[] | cdktf.IResolvable; 
  public get apiKeyLogin() {
    return this._apiKeyLogin;
  }
  public set apiKeyLogin(value: AkeylessProviderApiKeyLogin[] | cdktf.IResolvable | undefined) {
    this._apiKeyLogin = value;
  }
  public resetApiKeyLogin() {
    this._apiKeyLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyLoginInput() {
    return this._apiKeyLogin;
  }

  // aws_iam_login - computed: false, optional: true, required: false
  private _awsIamLogin?: AkeylessProviderAwsIamLogin[] | cdktf.IResolvable; 
  public get awsIamLogin() {
    return this._awsIamLogin;
  }
  public set awsIamLogin(value: AkeylessProviderAwsIamLogin[] | cdktf.IResolvable | undefined) {
    this._awsIamLogin = value;
  }
  public resetAwsIamLogin() {
    this._awsIamLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsIamLoginInput() {
    return this._awsIamLogin;
  }

  // azure_ad_login - computed: false, optional: true, required: false
  private _azureAdLogin?: AkeylessProviderAzureAdLogin[] | cdktf.IResolvable; 
  public get azureAdLogin() {
    return this._azureAdLogin;
  }
  public set azureAdLogin(value: AkeylessProviderAzureAdLogin[] | cdktf.IResolvable | undefined) {
    this._azureAdLogin = value;
  }
  public resetAzureAdLogin() {
    this._azureAdLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAdLoginInput() {
    return this._azureAdLogin;
  }

  // cert_login - computed: false, optional: true, required: false
  private _certLogin?: AkeylessProviderCertLogin[] | cdktf.IResolvable; 
  public get certLogin() {
    return this._certLogin;
  }
  public set certLogin(value: AkeylessProviderCertLogin[] | cdktf.IResolvable | undefined) {
    this._certLogin = value;
  }
  public resetCertLogin() {
    this._certLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certLoginInput() {
    return this._certLogin;
  }

  // email_login - computed: false, optional: true, required: false
  private _emailLogin?: AkeylessProviderEmailLogin[] | cdktf.IResolvable; 
  public get emailLogin() {
    return this._emailLogin;
  }
  public set emailLogin(value: AkeylessProviderEmailLogin[] | cdktf.IResolvable | undefined) {
    this._emailLogin = value;
  }
  public resetEmailLogin() {
    this._emailLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLoginInput() {
    return this._emailLogin;
  }

  // gcp_login - computed: false, optional: true, required: false
  private _gcpLogin?: AkeylessProviderGcpLogin[] | cdktf.IResolvable; 
  public get gcpLogin() {
    return this._gcpLogin;
  }
  public set gcpLogin(value: AkeylessProviderGcpLogin[] | cdktf.IResolvable | undefined) {
    this._gcpLogin = value;
  }
  public resetGcpLogin() {
    this._gcpLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpLoginInput() {
    return this._gcpLogin;
  }

  // jwt_login - computed: false, optional: true, required: false
  private _jwtLogin?: AkeylessProviderJwtLogin[] | cdktf.IResolvable; 
  public get jwtLogin() {
    return this._jwtLogin;
  }
  public set jwtLogin(value: AkeylessProviderJwtLogin[] | cdktf.IResolvable | undefined) {
    this._jwtLogin = value;
  }
  public resetJwtLogin() {
    this._jwtLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtLoginInput() {
    return this._jwtLogin;
  }

  // token_login - computed: false, optional: true, required: false
  private _tokenLogin?: AkeylessProviderTokenLogin[] | cdktf.IResolvable; 
  public get tokenLogin() {
    return this._tokenLogin;
  }
  public set tokenLogin(value: AkeylessProviderTokenLogin[] | cdktf.IResolvable | undefined) {
    this._tokenLogin = value;
  }
  public resetTokenLogin() {
    this._tokenLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLoginInput() {
    return this._tokenLogin;
  }

  // uid_login - computed: false, optional: true, required: false
  private _uidLogin?: AkeylessProviderUidLogin[] | cdktf.IResolvable; 
  public get uidLogin() {
    return this._uidLogin;
  }
  public set uidLogin(value: AkeylessProviderUidLogin[] | cdktf.IResolvable | undefined) {
    this._uidLogin = value;
  }
  public resetUidLogin() {
    this._uidLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidLoginInput() {
    return this._uidLogin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_gateway_address: cdktf.stringToTerraform(this._apiGatewayAddress),
      alias: cdktf.stringToTerraform(this._alias),
      api_key_login: cdktf.listMapper(akeylessProviderApiKeyLoginToTerraform, true)(this._apiKeyLogin),
      aws_iam_login: cdktf.listMapper(akeylessProviderAwsIamLoginToTerraform, true)(this._awsIamLogin),
      azure_ad_login: cdktf.listMapper(akeylessProviderAzureAdLoginToTerraform, true)(this._azureAdLogin),
      cert_login: cdktf.listMapper(akeylessProviderCertLoginToTerraform, true)(this._certLogin),
      email_login: cdktf.listMapper(akeylessProviderEmailLoginToTerraform, true)(this._emailLogin),
      gcp_login: cdktf.listMapper(akeylessProviderGcpLoginToTerraform, true)(this._gcpLogin),
      jwt_login: cdktf.listMapper(akeylessProviderJwtLoginToTerraform, true)(this._jwtLogin),
      token_login: cdktf.listMapper(akeylessProviderTokenLoginToTerraform, true)(this._tokenLogin),
      uid_login: cdktf.listMapper(akeylessProviderUidLoginToTerraform, true)(this._uidLogin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_gateway_address: {
        value: cdktf.stringToHclTerraform(this._apiGatewayAddress),
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
      api_key_login: {
        value: cdktf.listMapperHcl(akeylessProviderApiKeyLoginToHclTerraform, true)(this._apiKeyLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderApiKeyLoginList",
      },
      aws_iam_login: {
        value: cdktf.listMapperHcl(akeylessProviderAwsIamLoginToHclTerraform, true)(this._awsIamLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderAwsIamLoginList",
      },
      azure_ad_login: {
        value: cdktf.listMapperHcl(akeylessProviderAzureAdLoginToHclTerraform, true)(this._azureAdLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderAzureAdLoginList",
      },
      cert_login: {
        value: cdktf.listMapperHcl(akeylessProviderCertLoginToHclTerraform, true)(this._certLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderCertLoginList",
      },
      email_login: {
        value: cdktf.listMapperHcl(akeylessProviderEmailLoginToHclTerraform, true)(this._emailLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderEmailLoginList",
      },
      gcp_login: {
        value: cdktf.listMapperHcl(akeylessProviderGcpLoginToHclTerraform, true)(this._gcpLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderGcpLoginList",
      },
      jwt_login: {
        value: cdktf.listMapperHcl(akeylessProviderJwtLoginToHclTerraform, true)(this._jwtLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderJwtLoginList",
      },
      token_login: {
        value: cdktf.listMapperHcl(akeylessProviderTokenLoginToHclTerraform, true)(this._tokenLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderTokenLoginList",
      },
      uid_login: {
        value: cdktf.listMapperHcl(akeylessProviderUidLoginToHclTerraform, true)(this._uidLogin),
        isBlock: true,
        type: "list",
        storageClassType: "AkeylessProviderUidLoginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
