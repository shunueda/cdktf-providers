// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aembit Access Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#aembit_access_token CredentialProvider#aembit_access_token}
  */
  readonly aembitAccessToken?: CredentialProviderAembitAccessToken;
  /**
  * API Key type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#api_key CredentialProvider#api_key}
  */
  readonly apiKey?: CredentialProviderApiKey;
  /**
  * AWS Secrets Manager Value type Credential Provider configuration. This type of credential provider supports secret values in plaintext or JSON formats. Do not provide values in `secret_key_1` and `secret_key_2` fields for plaintext secrets. These fields are used to specify property names when a secret contains a JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#aws_secrets_manager_value CredentialProvider#aws_secrets_manager_value}
  */
  readonly awsSecretsManagerValue?: CredentialProviderAwsSecretsManagerValue;
  /**
  * AWS Security Token Service Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#aws_sts CredentialProvider#aws_sts}
  */
  readonly awsSts?: CredentialProviderAwsSts;
  /**
  * Azure Entra Workload Identity Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#azure_entra_workload_identity CredentialProvider#azure_entra_workload_identity}
  */
  readonly azureEntraWorkloadIdentity?: CredentialProviderAzureEntraWorkloadIdentity;
  /**
  * Description for the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#description CredentialProvider#description}
  */
  readonly description?: string;
  /**
  * Google Workload Identity Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#google_workload_identity CredentialProvider#google_workload_identity}
  */
  readonly googleWorkloadIdentity?: CredentialProviderGoogleWorkloadIdentity;
  /**
  * Unique identifier of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#id CredentialProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Active status of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#is_active CredentialProvider#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * JWT-SVID Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#jwt_svid_token CredentialProvider#jwt_svid_token}
  */
  readonly jwtSvidToken?: CredentialProviderJwtSvidToken;
  /**
  * Managed GitLab Account type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#managed_gitlab_account CredentialProvider#managed_gitlab_account}
  */
  readonly managedGitlabAccount?: CredentialProviderManagedGitlabAccount;
  /**
  * Name for the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#name CredentialProvider#name}
  */
  readonly name: string;
  /**
  * OAuth Authorization Code Flow type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_authorization_code CredentialProvider#oauth_authorization_code}
  */
  readonly oauthAuthorizationCode?: CredentialProviderOauthAuthorizationCode;
  /**
  * OAuth Client Credentials Flow type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_client_credentials CredentialProvider#oauth_client_credentials}
  */
  readonly oauthClientCredentials?: CredentialProviderOauthClientCredentials;
  /**
  * OIDC ID Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oidc_id_token CredentialProvider#oidc_id_token}
  */
  readonly oidcIdToken?: CredentialProviderOidcIdToken;
  /**
  * JSON Web Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#snowflake_jwt CredentialProvider#snowflake_jwt}
  */
  readonly snowflakeJwt?: CredentialProviderSnowflakeJwt;
  /**
  * Tags are key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#tags CredentialProvider#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Username/Password type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#username_password CredentialProvider#username_password}
  */
  readonly usernamePassword?: CredentialProviderUsernamePassword;
  /**
  * Vault Client Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_client_token CredentialProvider#vault_client_token}
  */
  readonly vaultClientToken?: CredentialProviderVaultClientToken;
}
export interface CredentialProviderAembitAccessToken {
  /**
  * Lifetime of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime CredentialProvider#lifetime}
  */
  readonly lifetime: number;
  /**
  * Aembit Role ID of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#role_id CredentialProvider#role_id}
  */
  readonly roleId: string;
}

export function credentialProviderAembitAccessTokenToTerraform(struct?: CredentialProviderAembitAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    role_id: cdktf.stringToTerraform(struct!.roleId),
  }
}


export function credentialProviderAembitAccessTokenToHclTerraform(struct?: CredentialProviderAembitAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role_id: {
      value: cdktf.stringToHclTerraform(struct!.roleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderAembitAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderAembitAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderAembitAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._roleId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._roleId = value.roleId;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // lifetime - computed: false, optional: false, required: true
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }
}
export interface CredentialProviderApiKey {
  /**
  * API Key secret of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#api_key CredentialProvider#api_key}
  */
  readonly apiKey: string;
}

export function credentialProviderApiKeyToTerraform(struct?: CredentialProviderApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
  }
}


export function credentialProviderApiKeyToHclTerraform(struct?: CredentialProviderApiKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderApiKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderApiKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
    }
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }
}
export interface CredentialProviderAwsSecretsManagerValue {
  /**
  * The unique identifier of the Credential Provider Integration of type AWS IAM Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#credential_provider_integration_id CredentialProvider#credential_provider_integration_id}
  */
  readonly credentialProviderIntegrationId: string;
  /**
  * Indicates that the AWS Secrets Manager is accessible via a private network only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#private_network_access CredentialProvider#private_network_access}
  */
  readonly privateNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * ARN of the AWS Secrets Manager secret to be used by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#secret_arn CredentialProvider#secret_arn}
  */
  readonly secretArn: string;
  /**
  * Used when an AWS Secrets Manager secret object is in JSON format. Specifies a key of an element with the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#secret_key_1 CredentialProvider#secret_key_1}
  */
  readonly secretKey1?: string;
  /**
  * Similar to `secret_key_1` but used when you need a credential provider to work with 2 secret values. For example, a username / password pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#secret_key_2 CredentialProvider#secret_key_2}
  */
  readonly secretKey2?: string;
}

export function credentialProviderAwsSecretsManagerValueToTerraform(struct?: CredentialProviderAwsSecretsManagerValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_provider_integration_id: cdktf.stringToTerraform(struct!.credentialProviderIntegrationId),
    private_network_access: cdktf.booleanToTerraform(struct!.privateNetworkAccess),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    secret_key_1: cdktf.stringToTerraform(struct!.secretKey1),
    secret_key_2: cdktf.stringToTerraform(struct!.secretKey2),
  }
}


export function credentialProviderAwsSecretsManagerValueToHclTerraform(struct?: CredentialProviderAwsSecretsManagerValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_provider_integration_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialProviderIntegrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_access: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworkAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_1: {
      value: cdktf.stringToHclTerraform(struct!.secretKey1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key_2: {
      value: cdktf.stringToHclTerraform(struct!.secretKey2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderAwsSecretsManagerValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderAwsSecretsManagerValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialProviderIntegrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderIntegrationId = this._credentialProviderIntegrationId;
    }
    if (this._privateNetworkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkAccess = this._privateNetworkAccess;
    }
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretKey1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey1 = this._secretKey1;
    }
    if (this._secretKey2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey2 = this._secretKey2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderAwsSecretsManagerValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credentialProviderIntegrationId = undefined;
      this._privateNetworkAccess = undefined;
      this._secretArn = undefined;
      this._secretKey1 = undefined;
      this._secretKey2 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credentialProviderIntegrationId = value.credentialProviderIntegrationId;
      this._privateNetworkAccess = value.privateNetworkAccess;
      this._secretArn = value.secretArn;
      this._secretKey1 = value.secretKey1;
      this._secretKey2 = value.secretKey2;
    }
  }

  // credential_provider_integration_id - computed: false, optional: false, required: true
  private _credentialProviderIntegrationId?: string; 
  public get credentialProviderIntegrationId() {
    return this.getStringAttribute('credential_provider_integration_id');
  }
  public set credentialProviderIntegrationId(value: string) {
    this._credentialProviderIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderIntegrationIdInput() {
    return this._credentialProviderIntegrationId;
  }

  // private_network_access - computed: true, optional: true, required: false
  private _privateNetworkAccess?: boolean | cdktf.IResolvable; 
  public get privateNetworkAccess() {
    return this.getBooleanAttribute('private_network_access');
  }
  public set privateNetworkAccess(value: boolean | cdktf.IResolvable) {
    this._privateNetworkAccess = value;
  }
  public resetPrivateNetworkAccess() {
    this._privateNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkAccessInput() {
    return this._privateNetworkAccess;
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_key_1 - computed: false, optional: true, required: false
  private _secretKey1?: string; 
  public get secretKey1() {
    return this.getStringAttribute('secret_key_1');
  }
  public set secretKey1(value: string) {
    this._secretKey1 = value;
  }
  public resetSecretKey1() {
    this._secretKey1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKey1Input() {
    return this._secretKey1;
  }

  // secret_key_2 - computed: false, optional: true, required: false
  private _secretKey2?: string; 
  public get secretKey2() {
    return this.getStringAttribute('secret_key_2');
  }
  public set secretKey2(value: string) {
    this._secretKey2 = value;
  }
  public resetSecretKey2() {
    this._secretKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKey2Input() {
    return this._secretKey2;
  }
}
export interface CredentialProviderAwsSts {
  /**
  * Lifetime (seconds) of the AWS Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime CredentialProvider#lifetime}
  */
  readonly lifetime?: number;
  /**
  * AWS Role Arn to be used for the AWS Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#role_arn CredentialProvider#role_arn}
  */
  readonly roleArn: string;
}

export function credentialProviderAwsStsToTerraform(struct?: CredentialProviderAwsSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function credentialProviderAwsStsToHclTerraform(struct?: CredentialProviderAwsSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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

export class CredentialProviderAwsStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderAwsSts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderAwsSts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
      this._roleArn = value.roleArn;
    }
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // oidc_issuer - computed: true, optional: false, required: false
  public get oidcIssuer() {
    return this.getStringAttribute('oidc_issuer');
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // token_audience - computed: true, optional: false, required: false
  public get tokenAudience() {
    return this.getStringAttribute('token_audience');
  }
}
export interface CredentialProviderAzureEntraWorkloadIdentity {
  /**
  * Audience for Azure Entra Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#audience CredentialProvider#audience}
  */
  readonly audience: string;
  /**
  * Azure Tenant ID for Azure Entra Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#azure_tenant CredentialProvider#azure_tenant}
  */
  readonly azureTenant: string;
  /**
  * Azure Client ID for Azure Entra Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#client_id CredentialProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Scope for Azure Entra Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#scope CredentialProvider#scope}
  */
  readonly scope: string;
  /**
  * Subject for JWT Token for Azure Entra Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject CredentialProvider#subject}
  */
  readonly subject: string;
}

export function credentialProviderAzureEntraWorkloadIdentityToTerraform(struct?: CredentialProviderAzureEntraWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    azure_tenant: cdktf.stringToTerraform(struct!.azureTenant),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    scope: cdktf.stringToTerraform(struct!.scope),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function credentialProviderAzureEntraWorkloadIdentityToHclTerraform(struct?: CredentialProviderAzureEntraWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_tenant: {
      value: cdktf.stringToHclTerraform(struct!.azureTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderAzureEntraWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderAzureEntraWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._azureTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureTenant = this._azureTenant;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderAzureEntraWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._azureTenant = undefined;
      this._clientId = undefined;
      this._scope = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._azureTenant = value.azureTenant;
      this._clientId = value.clientId;
      this._scope = value.scope;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // azure_tenant - computed: false, optional: false, required: true
  private _azureTenant?: string; 
  public get azureTenant() {
    return this.getStringAttribute('azure_tenant');
  }
  public set azureTenant(value: string) {
    this._azureTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantInput() {
    return this._azureTenant;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // oidc_issuer - computed: true, optional: false, required: false
  public get oidcIssuer() {
    return this.getStringAttribute('oidc_issuer');
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface CredentialProviderGoogleWorkloadIdentity {
  /**
  * Audience for GCP Workload Identity Federation configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#audience CredentialProvider#audience}
  */
  readonly audience: string;
  /**
  * Lifetime (seconds) of the GCP Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime CredentialProvider#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Service Account email of the GCP Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#service_account CredentialProvider#service_account}
  */
  readonly serviceAccount: string;
}

export function credentialProviderGoogleWorkloadIdentityToTerraform(struct?: CredentialProviderGoogleWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function credentialProviderGoogleWorkloadIdentityToHclTerraform(struct?: CredentialProviderGoogleWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderGoogleWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderGoogleWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderGoogleWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._lifetime = undefined;
      this._serviceAccount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._lifetime = value.lifetime;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // oidc_issuer - computed: true, optional: false, required: false
  public get oidcIssuer() {
    return this.getStringAttribute('oidc_issuer');
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface CredentialProviderJwtSvidTokenCustomClaims {
  /**
  * Key for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#key CredentialProvider#key}
  */
  readonly key: string;
  /**
  * Value for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value CredentialProvider#value}
  */
  readonly value: string;
  /**
  * Type of value for the JWT Token Custom Claim. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value_type CredentialProvider#value_type}
  */
  readonly valueType: string;
}

export function credentialProviderJwtSvidTokenCustomClaimsToTerraform(struct?: CredentialProviderJwtSvidTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function credentialProviderJwtSvidTokenCustomClaimsToHclTerraform(struct?: CredentialProviderJwtSvidTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderJwtSvidTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialProviderJwtSvidTokenCustomClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderJwtSvidTokenCustomClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class CredentialProviderJwtSvidTokenCustomClaimsList extends cdktf.ComplexList {
  public internalValue? : CredentialProviderJwtSvidTokenCustomClaims[] | cdktf.IResolvable

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
  public get(index: number): CredentialProviderJwtSvidTokenCustomClaimsOutputReference {
    return new CredentialProviderJwtSvidTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderJwtSvidToken {
  /**
  * JWT Signing algorithm type (RS256 or ES256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#algorithm_type CredentialProvider#algorithm_type}
  */
  readonly algorithmType: string;
  /**
  * Audience for JWT-SVID Token configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#audience CredentialProvider#audience}
  */
  readonly audience: string;
  /**
  * Set of Custom Claims for the JWT Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#custom_claims CredentialProvider#custom_claims}
  */
  readonly customClaims?: CredentialProviderJwtSvidTokenCustomClaims[] | cdktf.IResolvable;
  /**
  * Lifetime of the Credential Provider in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime_in_minutes CredentialProvider#lifetime_in_minutes}
  */
  readonly lifetimeInMinutes: number;
  /**
  * Subject for JWT Token for JWT-SVID Token configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject CredentialProvider#subject}
  */
  readonly subject: string;
  /**
  * Type of value for the JWT Token Subject. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject_type CredentialProvider#subject_type}
  */
  readonly subjectType: string;
}

export function credentialProviderJwtSvidTokenToTerraform(struct?: CredentialProviderJwtSvidToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_type: cdktf.stringToTerraform(struct!.algorithmType),
    audience: cdktf.stringToTerraform(struct!.audience),
    custom_claims: cdktf.listMapper(credentialProviderJwtSvidTokenCustomClaimsToTerraform, false)(struct!.customClaims),
    lifetime_in_minutes: cdktf.numberToTerraform(struct!.lifetimeInMinutes),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function credentialProviderJwtSvidTokenToHclTerraform(struct?: CredentialProviderJwtSvidToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_type: {
      value: cdktf.stringToHclTerraform(struct!.algorithmType),
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
    custom_claims: {
      value: cdktf.listMapperHcl(credentialProviderJwtSvidTokenCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialProviderJwtSvidTokenCustomClaimsList",
    },
    lifetime_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderJwtSvidTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderJwtSvidToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmType = this._algorithmType;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._lifetimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInMinutes = this._lifetimeInMinutes;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderJwtSvidToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmType = undefined;
      this._audience = undefined;
      this._customClaims.internalValue = undefined;
      this._lifetimeInMinutes = undefined;
      this._subject = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmType = value.algorithmType;
      this._audience = value.audience;
      this._customClaims.internalValue = value.customClaims;
      this._lifetimeInMinutes = value.lifetimeInMinutes;
      this._subject = value.subject;
      this._subjectType = value.subjectType;
    }
  }

  // algorithm_type - computed: false, optional: false, required: true
  private _algorithmType?: string; 
  public get algorithmType() {
    return this.getStringAttribute('algorithm_type');
  }
  public set algorithmType(value: string) {
    this._algorithmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmTypeInput() {
    return this._algorithmType;
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // custom_claims - computed: true, optional: true, required: false
  private _customClaims = new CredentialProviderJwtSvidTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: CredentialProviderJwtSvidTokenCustomClaims[] | cdktf.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // lifetime_in_minutes - computed: false, optional: false, required: true
  private _lifetimeInMinutes?: number; 
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }
  public set lifetimeInMinutes(value: number) {
    this._lifetimeInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInMinutesInput() {
    return this._lifetimeInMinutes;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}
export interface CredentialProviderManagedGitlabAccount {
  /**
  * The access level of authorization. Valid values: 0 (No Access), 5 (Minimal Access), 10 (Guest), 15 (Planner), 20 (Reporter), 30 (Developer), 40 (Maintainer), 50 (Owner).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#access_level CredentialProvider#access_level}
  */
  readonly accessLevel: number;
  /**
  * The unique identifier of the credential provider integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#credential_provider_integration_id CredentialProvider#credential_provider_integration_id}
  */
  readonly credentialProviderIntegrationId: string;
  /**
  * The set of GitLab group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#group_ids CredentialProvider#group_ids}
  */
  readonly groupIds: string[];
  /**
  * Lifetime of the managed GitLab token in hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime_in_hours CredentialProvider#lifetime_in_hours}
  */
  readonly lifetimeInHours: number;
  /**
  * The set of GitLab project IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#project_ids CredentialProvider#project_ids}
  */
  readonly projectIds: string[];
  /**
  * Scope for Managed Gitlab Account configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#scope CredentialProvider#scope}
  */
  readonly scope: string;
  /**
  * Service Account Username value to be used for the service account created for this Credential Provider. If not specified, the service account username will be generated by Aembit using the following format: ``Aembit_<credential_provider_name>_managed_service_account``.<br>**Note on Service Account Username Updates for Self-Managed GitLab or Dedicated GitLab Instances**<br>The service_account_username attribute for this resource cannot be updated on Self-Managed or Dedicated GitLab instances after creation. This is due to a limitation in the GitLab API, which does not currently provide a method for modifying instance-level service accounts.<br>Consequently, in order to change this attribute in your Terraform configuration you will need to destroy and reecreating the Credential Provider. This behavior does not affect GitLab.com SaaS instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#service_account_username CredentialProvider#service_account_username}
  */
  readonly serviceAccountUsername?: string;
}

export function credentialProviderManagedGitlabAccountToTerraform(struct?: CredentialProviderManagedGitlabAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_level: cdktf.numberToTerraform(struct!.accessLevel),
    credential_provider_integration_id: cdktf.stringToTerraform(struct!.credentialProviderIntegrationId),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    lifetime_in_hours: cdktf.numberToTerraform(struct!.lifetimeInHours),
    project_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.projectIds),
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account_username: cdktf.stringToTerraform(struct!.serviceAccountUsername),
  }
}


export function credentialProviderManagedGitlabAccountToHclTerraform(struct?: CredentialProviderManagedGitlabAccount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_level: {
      value: cdktf.numberToHclTerraform(struct!.accessLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    credential_provider_integration_id: {
      value: cdktf.stringToHclTerraform(struct!.credentialProviderIntegrationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    lifetime_in_hours: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    project_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.projectIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_username: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderManagedGitlabAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderManagedGitlabAccount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessLevel = this._accessLevel;
    }
    if (this._credentialProviderIntegrationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialProviderIntegrationId = this._credentialProviderIntegrationId;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._lifetimeInHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInHours = this._lifetimeInHours;
    }
    if (this._projectIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIds = this._projectIds;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceAccountUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountUsername = this._serviceAccountUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderManagedGitlabAccount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessLevel = undefined;
      this._credentialProviderIntegrationId = undefined;
      this._groupIds = undefined;
      this._lifetimeInHours = undefined;
      this._projectIds = undefined;
      this._scope = undefined;
      this._serviceAccountUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessLevel = value.accessLevel;
      this._credentialProviderIntegrationId = value.credentialProviderIntegrationId;
      this._groupIds = value.groupIds;
      this._lifetimeInHours = value.lifetimeInHours;
      this._projectIds = value.projectIds;
      this._scope = value.scope;
      this._serviceAccountUsername = value.serviceAccountUsername;
    }
  }

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: number; 
  public get accessLevel() {
    return this.getNumberAttribute('access_level');
  }
  public set accessLevel(value: number) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // credential_provider_integration_id - computed: false, optional: false, required: true
  private _credentialProviderIntegrationId?: string; 
  public get credentialProviderIntegrationId() {
    return this.getStringAttribute('credential_provider_integration_id');
  }
  public set credentialProviderIntegrationId(value: string) {
    this._credentialProviderIntegrationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialProviderIntegrationIdInput() {
    return this._credentialProviderIntegrationId;
  }

  // group_ids - computed: false, optional: false, required: true
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // lifetime_in_hours - computed: false, optional: false, required: true
  private _lifetimeInHours?: number; 
  public get lifetimeInHours() {
    return this.getNumberAttribute('lifetime_in_hours');
  }
  public set lifetimeInHours(value: number) {
    this._lifetimeInHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInHoursInput() {
    return this._lifetimeInHours;
  }

  // project_ids - computed: false, optional: false, required: true
  private _projectIds?: string[]; 
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }
  public set projectIds(value: string[]) {
    this._projectIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdsInput() {
    return this._projectIds;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account_username - computed: false, optional: true, required: false
  private _serviceAccountUsername?: string; 
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
  public set serviceAccountUsername(value: string) {
    this._serviceAccountUsername = value;
  }
  public resetServiceAccountUsername() {
    this._serviceAccountUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountUsernameInput() {
    return this._serviceAccountUsername;
  }
}
export interface CredentialProviderOauthAuthorizationCodeCustomParameters {
  /**
  * Key for Custom Parameter of the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#key CredentialProvider#key}
  */
  readonly key: string;
  /**
  * Value for Custom Parameter of the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value CredentialProvider#value}
  */
  readonly value: string;
  /**
  * Type of value for Custom Parameter of the OAuth Credential Provider. Only `literal` is currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value_type CredentialProvider#value_type}
  */
  readonly valueType?: string;
}

export function credentialProviderOauthAuthorizationCodeCustomParametersToTerraform(struct?: CredentialProviderOauthAuthorizationCodeCustomParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function credentialProviderOauthAuthorizationCodeCustomParametersToHclTerraform(struct?: CredentialProviderOauthAuthorizationCodeCustomParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOauthAuthorizationCodeCustomParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialProviderOauthAuthorizationCodeCustomParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOauthAuthorizationCodeCustomParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class CredentialProviderOauthAuthorizationCodeCustomParametersList extends cdktf.ComplexList {
  public internalValue? : CredentialProviderOauthAuthorizationCodeCustomParameters[] | cdktf.IResolvable

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
  public get(index: number): CredentialProviderOauthAuthorizationCodeCustomParametersOutputReference {
    return new CredentialProviderOauthAuthorizationCodeCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderOauthAuthorizationCode {
  /**
  * Client ID for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#client_id CredentialProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#client_secret CredentialProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Set Custom Parameters for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#custom_parameters CredentialProvider#custom_parameters}
  */
  readonly customParameters?: CredentialProviderOauthAuthorizationCodeCustomParameters[] | cdktf.IResolvable;
  /**
  * PKCE required flag for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#is_pkce_required CredentialProvider#is_pkce_required}
  */
  readonly isPkceRequired?: boolean | cdktf.IResolvable;
  /**
  * Lifetime (in seconds) of the OAuth Authorization Code credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime CredentialProvider#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Authorization URL for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_authorization_url CredentialProvider#oauth_authorization_url}
  */
  readonly oauthAuthorizationUrl: string;
  /**
  * OAuth URL for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_discovery_url CredentialProvider#oauth_discovery_url}
  */
  readonly oauthDiscoveryUrl: string;
  /**
  * Introspection Url of the OAuth 2.0 introspection endpoint, used to validate and obtain metadata about access tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_introspection_url CredentialProvider#oauth_introspection_url}
  */
  readonly oauthIntrospectionUrl?: string;
  /**
  * Token URL for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#oauth_token_url CredentialProvider#oauth_token_url}
  */
  readonly oauthTokenUrl: string;
  /**
  * Scopes for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#scopes CredentialProvider#scopes}
  */
  readonly scopes: string;
}

export function credentialProviderOauthAuthorizationCodeToTerraform(struct?: CredentialProviderOauthAuthorizationCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    custom_parameters: cdktf.listMapper(credentialProviderOauthAuthorizationCodeCustomParametersToTerraform, false)(struct!.customParameters),
    is_pkce_required: cdktf.booleanToTerraform(struct!.isPkceRequired),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    oauth_authorization_url: cdktf.stringToTerraform(struct!.oauthAuthorizationUrl),
    oauth_discovery_url: cdktf.stringToTerraform(struct!.oauthDiscoveryUrl),
    oauth_introspection_url: cdktf.stringToTerraform(struct!.oauthIntrospectionUrl),
    oauth_token_url: cdktf.stringToTerraform(struct!.oauthTokenUrl),
    scopes: cdktf.stringToTerraform(struct!.scopes),
  }
}


export function credentialProviderOauthAuthorizationCodeToHclTerraform(struct?: CredentialProviderOauthAuthorizationCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_parameters: {
      value: cdktf.listMapperHcl(credentialProviderOauthAuthorizationCodeCustomParametersToHclTerraform, false)(struct!.customParameters),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialProviderOauthAuthorizationCodeCustomParametersList",
    },
    is_pkce_required: {
      value: cdktf.booleanToHclTerraform(struct!.isPkceRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oauth_authorization_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthAuthorizationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthDiscoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_introspection_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthIntrospectionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_token_url: {
      value: cdktf.stringToHclTerraform(struct!.oauthTokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOauthAuthorizationCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderOauthAuthorizationCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._customParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters?.internalValue;
    }
    if (this._isPkceRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPkceRequired = this._isPkceRequired;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._oauthAuthorizationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAuthorizationUrl = this._oauthAuthorizationUrl;
    }
    if (this._oauthDiscoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthDiscoveryUrl = this._oauthDiscoveryUrl;
    }
    if (this._oauthIntrospectionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthIntrospectionUrl = this._oauthIntrospectionUrl;
    }
    if (this._oauthTokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthTokenUrl = this._oauthTokenUrl;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOauthAuthorizationCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._customParameters.internalValue = undefined;
      this._isPkceRequired = undefined;
      this._lifetime = undefined;
      this._oauthAuthorizationUrl = undefined;
      this._oauthDiscoveryUrl = undefined;
      this._oauthIntrospectionUrl = undefined;
      this._oauthTokenUrl = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._customParameters.internalValue = value.customParameters;
      this._isPkceRequired = value.isPkceRequired;
      this._lifetime = value.lifetime;
      this._oauthAuthorizationUrl = value.oauthAuthorizationUrl;
      this._oauthDiscoveryUrl = value.oauthDiscoveryUrl;
      this._oauthIntrospectionUrl = value.oauthIntrospectionUrl;
      this._oauthTokenUrl = value.oauthTokenUrl;
      this._scopes = value.scopes;
    }
  }

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // custom_parameters - computed: true, optional: true, required: false
  private _customParameters = new CredentialProviderOauthAuthorizationCodeCustomParametersList(this, "custom_parameters", true);
  public get customParameters() {
    return this._customParameters;
  }
  public putCustomParameters(value: CredentialProviderOauthAuthorizationCodeCustomParameters[] | cdktf.IResolvable) {
    this._customParameters.internalValue = value;
  }
  public resetCustomParameters() {
    this._customParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters.internalValue;
  }

  // is_pkce_required - computed: true, optional: true, required: false
  private _isPkceRequired?: boolean | cdktf.IResolvable; 
  public get isPkceRequired() {
    return this.getBooleanAttribute('is_pkce_required');
  }
  public set isPkceRequired(value: boolean | cdktf.IResolvable) {
    this._isPkceRequired = value;
  }
  public resetIsPkceRequired() {
    this._isPkceRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPkceRequiredInput() {
    return this._isPkceRequired;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // lifetime_expiration - computed: true, optional: false, required: false
  public get lifetimeExpiration() {
    return this.getStringAttribute('lifetime_expiration');
  }

  // oauth_authorization_url - computed: false, optional: false, required: true
  private _oauthAuthorizationUrl?: string; 
  public get oauthAuthorizationUrl() {
    return this.getStringAttribute('oauth_authorization_url');
  }
  public set oauthAuthorizationUrl(value: string) {
    this._oauthAuthorizationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthorizationUrlInput() {
    return this._oauthAuthorizationUrl;
  }

  // oauth_discovery_url - computed: false, optional: false, required: true
  private _oauthDiscoveryUrl?: string; 
  public get oauthDiscoveryUrl() {
    return this.getStringAttribute('oauth_discovery_url');
  }
  public set oauthDiscoveryUrl(value: string) {
    this._oauthDiscoveryUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthDiscoveryUrlInput() {
    return this._oauthDiscoveryUrl;
  }

  // oauth_introspection_url - computed: false, optional: true, required: false
  private _oauthIntrospectionUrl?: string; 
  public get oauthIntrospectionUrl() {
    return this.getStringAttribute('oauth_introspection_url');
  }
  public set oauthIntrospectionUrl(value: string) {
    this._oauthIntrospectionUrl = value;
  }
  public resetOauthIntrospectionUrl() {
    this._oauthIntrospectionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthIntrospectionUrlInput() {
    return this._oauthIntrospectionUrl;
  }

  // oauth_token_url - computed: false, optional: false, required: true
  private _oauthTokenUrl?: string; 
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }
  public set oauthTokenUrl(value: string) {
    this._oauthTokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenUrlInput() {
    return this._oauthTokenUrl;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // user_authorization_url - computed: true, optional: false, required: false
  public get userAuthorizationUrl() {
    return this.getStringAttribute('user_authorization_url');
  }
}
export interface CredentialProviderOauthClientCredentialsCustomParameters {
  /**
  * Key for Custom Parameter of the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#key CredentialProvider#key}
  */
  readonly key: string;
  /**
  * Value for Custom Parameter of the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value CredentialProvider#value}
  */
  readonly value: string;
  /**
  * Type of value for Custom Parameter of the OAuth Credential Provider. Only `literal` is currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value_type CredentialProvider#value_type}
  */
  readonly valueType?: string;
}

export function credentialProviderOauthClientCredentialsCustomParametersToTerraform(struct?: CredentialProviderOauthClientCredentialsCustomParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function credentialProviderOauthClientCredentialsCustomParametersToHclTerraform(struct?: CredentialProviderOauthClientCredentialsCustomParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOauthClientCredentialsCustomParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialProviderOauthClientCredentialsCustomParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOauthClientCredentialsCustomParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class CredentialProviderOauthClientCredentialsCustomParametersList extends cdktf.ComplexList {
  public internalValue? : CredentialProviderOauthClientCredentialsCustomParameters[] | cdktf.IResolvable

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
  public get(index: number): CredentialProviderOauthClientCredentialsCustomParametersOutputReference {
    return new CredentialProviderOauthClientCredentialsCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderOauthClientCredentials {
  /**
  * Client ID for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#client_id CredentialProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#client_secret CredentialProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Credential Style for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#credential_style CredentialProvider#credential_style}
  */
  readonly credentialStyle: string;
  /**
  * Set Custom Parameters for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#custom_parameters CredentialProvider#custom_parameters}
  */
  readonly customParameters?: CredentialProviderOauthClientCredentialsCustomParameters[] | cdktf.IResolvable;
  /**
  * Scopes for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#scopes CredentialProvider#scopes}
  */
  readonly scopes: string;
  /**
  * Token URL for the OAuth Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#token_url CredentialProvider#token_url}
  */
  readonly tokenUrl: string;
}

export function credentialProviderOauthClientCredentialsToTerraform(struct?: CredentialProviderOauthClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    credential_style: cdktf.stringToTerraform(struct!.credentialStyle),
    custom_parameters: cdktf.listMapper(credentialProviderOauthClientCredentialsCustomParametersToTerraform, false)(struct!.customParameters),
    scopes: cdktf.stringToTerraform(struct!.scopes),
    token_url: cdktf.stringToTerraform(struct!.tokenUrl),
  }
}


export function credentialProviderOauthClientCredentialsToHclTerraform(struct?: CredentialProviderOauthClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_style: {
      value: cdktf.stringToHclTerraform(struct!.credentialStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_parameters: {
      value: cdktf.listMapperHcl(credentialProviderOauthClientCredentialsCustomParametersToHclTerraform, false)(struct!.customParameters),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialProviderOauthClientCredentialsCustomParametersList",
    },
    scopes: {
      value: cdktf.stringToHclTerraform(struct!.scopes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_url: {
      value: cdktf.stringToHclTerraform(struct!.tokenUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOauthClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderOauthClientCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._credentialStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialStyle = this._credentialStyle;
    }
    if (this._customParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customParameters = this._customParameters?.internalValue;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenUrl = this._tokenUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOauthClientCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._credentialStyle = undefined;
      this._customParameters.internalValue = undefined;
      this._scopes = undefined;
      this._tokenUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._credentialStyle = value.credentialStyle;
      this._customParameters.internalValue = value.customParameters;
      this._scopes = value.scopes;
      this._tokenUrl = value.tokenUrl;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // credential_style - computed: false, optional: false, required: true
  private _credentialStyle?: string; 
  public get credentialStyle() {
    return this.getStringAttribute('credential_style');
  }
  public set credentialStyle(value: string) {
    this._credentialStyle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialStyleInput() {
    return this._credentialStyle;
  }

  // custom_parameters - computed: true, optional: true, required: false
  private _customParameters = new CredentialProviderOauthClientCredentialsCustomParametersList(this, "custom_parameters", true);
  public get customParameters() {
    return this._customParameters;
  }
  public putCustomParameters(value: CredentialProviderOauthClientCredentialsCustomParameters[] | cdktf.IResolvable) {
    this._customParameters.internalValue = value;
  }
  public resetCustomParameters() {
    this._customParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customParametersInput() {
    return this._customParameters.internalValue;
  }

  // scopes - computed: false, optional: false, required: true
  private _scopes?: string; 
  public get scopes() {
    return this.getStringAttribute('scopes');
  }
  public set scopes(value: string) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_url - computed: false, optional: false, required: true
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
  public set tokenUrl(value: string) {
    this._tokenUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
  }
}
export interface CredentialProviderOidcIdTokenCustomClaims {
  /**
  * Key for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#key CredentialProvider#key}
  */
  readonly key: string;
  /**
  * Value for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value CredentialProvider#value}
  */
  readonly value: string;
  /**
  * Type of value for the JWT Token Custom Claim. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value_type CredentialProvider#value_type}
  */
  readonly valueType: string;
}

export function credentialProviderOidcIdTokenCustomClaimsToTerraform(struct?: CredentialProviderOidcIdTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function credentialProviderOidcIdTokenCustomClaimsToHclTerraform(struct?: CredentialProviderOidcIdTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOidcIdTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialProviderOidcIdTokenCustomClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOidcIdTokenCustomClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class CredentialProviderOidcIdTokenCustomClaimsList extends cdktf.ComplexList {
  public internalValue? : CredentialProviderOidcIdTokenCustomClaims[] | cdktf.IResolvable

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
  public get(index: number): CredentialProviderOidcIdTokenCustomClaimsOutputReference {
    return new CredentialProviderOidcIdTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderOidcIdToken {
  /**
  * JWT Signing algorithm type (RS256 or ES256)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#algorithm_type CredentialProvider#algorithm_type}
  */
  readonly algorithmType: string;
  /**
  * Audience for OIDC ID Token configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#audience CredentialProvider#audience}
  */
  readonly audience: string;
  /**
  * Set of Custom Claims for the JWT Token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#custom_claims CredentialProvider#custom_claims}
  */
  readonly customClaims?: CredentialProviderOidcIdTokenCustomClaims[] | cdktf.IResolvable;
  /**
  * Lifetime of the Credential Provider in minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime_in_minutes CredentialProvider#lifetime_in_minutes}
  */
  readonly lifetimeInMinutes: number;
  /**
  * Subject for JWT Token for OIDC ID Token configuration of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject CredentialProvider#subject}
  */
  readonly subject: string;
  /**
  * Type of value for the JWT Token Subject. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject_type CredentialProvider#subject_type}
  */
  readonly subjectType: string;
}

export function credentialProviderOidcIdTokenToTerraform(struct?: CredentialProviderOidcIdToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm_type: cdktf.stringToTerraform(struct!.algorithmType),
    audience: cdktf.stringToTerraform(struct!.audience),
    custom_claims: cdktf.listMapper(credentialProviderOidcIdTokenCustomClaimsToTerraform, false)(struct!.customClaims),
    lifetime_in_minutes: cdktf.numberToTerraform(struct!.lifetimeInMinutes),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
  }
}


export function credentialProviderOidcIdTokenToHclTerraform(struct?: CredentialProviderOidcIdToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm_type: {
      value: cdktf.stringToHclTerraform(struct!.algorithmType),
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
    custom_claims: {
      value: cdktf.listMapperHcl(credentialProviderOidcIdTokenCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialProviderOidcIdTokenCustomClaimsList",
    },
    lifetime_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.lifetimeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderOidcIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderOidcIdToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithmType !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmType = this._algorithmType;
    }
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._lifetimeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetimeInMinutes = this._lifetimeInMinutes;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderOidcIdToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithmType = undefined;
      this._audience = undefined;
      this._customClaims.internalValue = undefined;
      this._lifetimeInMinutes = undefined;
      this._subject = undefined;
      this._subjectType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithmType = value.algorithmType;
      this._audience = value.audience;
      this._customClaims.internalValue = value.customClaims;
      this._lifetimeInMinutes = value.lifetimeInMinutes;
      this._subject = value.subject;
      this._subjectType = value.subjectType;
    }
  }

  // algorithm_type - computed: false, optional: false, required: true
  private _algorithmType?: string; 
  public get algorithmType() {
    return this.getStringAttribute('algorithm_type');
  }
  public set algorithmType(value: string) {
    this._algorithmType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmTypeInput() {
    return this._algorithmType;
  }

  // audience - computed: false, optional: false, required: true
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // custom_claims - computed: true, optional: true, required: false
  private _customClaims = new CredentialProviderOidcIdTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: CredentialProviderOidcIdTokenCustomClaims[] | cdktf.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // lifetime_in_minutes - computed: false, optional: false, required: true
  private _lifetimeInMinutes?: number; 
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }
  public set lifetimeInMinutes(value: number) {
    this._lifetimeInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInMinutesInput() {
    return this._lifetimeInMinutes;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }
}
export interface CredentialProviderSnowflakeJwt {
  /**
  * Snowflake Account ID of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#account_id CredentialProvider#account_id}
  */
  readonly accountId: string;
  /**
  * Snowflake Username of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#username CredentialProvider#username}
  */
  readonly username: string;
}

export function credentialProviderSnowflakeJwtToTerraform(struct?: CredentialProviderSnowflakeJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function credentialProviderSnowflakeJwtToHclTerraform(struct?: CredentialProviderSnowflakeJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
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

export class CredentialProviderSnowflakeJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderSnowflakeJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderSnowflakeJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._username = value.username;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // alter_user_command - computed: true, optional: false, required: false
  public get alterUserCommand() {
    return this.getStringAttribute('alter_user_command');
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CredentialProviderUsernamePassword {
  /**
  * Password of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#password CredentialProvider#password}
  */
  readonly password: string;
  /**
  * Username of the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#username CredentialProvider#username}
  */
  readonly username: string;
}

export function credentialProviderUsernamePasswordToTerraform(struct?: CredentialProviderUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function credentialProviderUsernamePasswordToHclTerraform(struct?: CredentialProviderUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class CredentialProviderUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderUsernamePassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderUsernamePassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface CredentialProviderVaultClientTokenCustomClaims {
  /**
  * Key for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#key CredentialProvider#key}
  */
  readonly key: string;
  /**
  * Value for the JWT Token Custom Claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value CredentialProvider#value}
  */
  readonly value: string;
  /**
  * Type of value for the JWT Token Custom Claim. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#value_type CredentialProvider#value_type}
  */
  readonly valueType: string;
}

export function credentialProviderVaultClientTokenCustomClaimsToTerraform(struct?: CredentialProviderVaultClientTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function credentialProviderVaultClientTokenCustomClaimsToHclTerraform(struct?: CredentialProviderVaultClientTokenCustomClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderVaultClientTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CredentialProviderVaultClientTokenCustomClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderVaultClientTokenCustomClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: true, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class CredentialProviderVaultClientTokenCustomClaimsList extends cdktf.ComplexList {
  public internalValue? : CredentialProviderVaultClientTokenCustomClaims[] | cdktf.IResolvable

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
  public get(index: number): CredentialProviderVaultClientTokenCustomClaimsOutputReference {
    return new CredentialProviderVaultClientTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CredentialProviderVaultClientToken {
  /**
  * Set of Custom Claims for the JWT Token used to authenticate to the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#custom_claims CredentialProvider#custom_claims}
  */
  readonly customClaims?: CredentialProviderVaultClientTokenCustomClaims[] | cdktf.IResolvable;
  /**
  * Lifetime (in seconds) of the JWT Token used to authenticate to the Vault Cluster. Note: The lifetime of the retrieved Vault Client Token is managed within Vault configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#lifetime CredentialProvider#lifetime}
  */
  readonly lifetime: number;
  /**
  * Subject of the JWT Token used to authenticate to the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject CredentialProvider#subject}
  */
  readonly subject: string;
  /**
  * Type of value for the JWT Token Subject. Possible values are `literal` or `dynamic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#subject_type CredentialProvider#subject_type}
  */
  readonly subjectType: string;
  /**
  * If Vault Forwarding is required, this configuration can be set to `unconditional` or `conditional`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_forwarding CredentialProvider#vault_forwarding}
  */
  readonly vaultForwarding?: string;
  /**
  * Hostname of the Vault Cluster to be used for executing the login API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_host CredentialProvider#vault_host}
  */
  readonly vaultHost: string;
  /**
  * Namespace to utilize when executing the login API on the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_namespace CredentialProvider#vault_namespace}
  */
  readonly vaultNamespace?: string;
  /**
  * Path to utilize when executing the login API on the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_path CredentialProvider#vault_path}
  */
  readonly vaultPath: string;
  /**
  * Port of the Vault Cluster to be used for executing the login API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_port CredentialProvider#vault_port}
  */
  readonly vaultPort: number;
  /**
  * Indicates if the Vault instance operates within a private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_private_network_access CredentialProvider#vault_private_network_access}
  */
  readonly vaultPrivateNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * Role to utilize when executing the login API on the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_role CredentialProvider#vault_role}
  */
  readonly vaultRole?: string;
  /**
  * Configuration to utilize TLS for connectivity to the Vault Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#vault_tls CredentialProvider#vault_tls}
  */
  readonly vaultTls: boolean | cdktf.IResolvable;
}

export function credentialProviderVaultClientTokenToTerraform(struct?: CredentialProviderVaultClientToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_claims: cdktf.listMapper(credentialProviderVaultClientTokenCustomClaimsToTerraform, false)(struct!.customClaims),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_type: cdktf.stringToTerraform(struct!.subjectType),
    vault_forwarding: cdktf.stringToTerraform(struct!.vaultForwarding),
    vault_host: cdktf.stringToTerraform(struct!.vaultHost),
    vault_namespace: cdktf.stringToTerraform(struct!.vaultNamespace),
    vault_path: cdktf.stringToTerraform(struct!.vaultPath),
    vault_port: cdktf.numberToTerraform(struct!.vaultPort),
    vault_private_network_access: cdktf.booleanToTerraform(struct!.vaultPrivateNetworkAccess),
    vault_role: cdktf.stringToTerraform(struct!.vaultRole),
    vault_tls: cdktf.booleanToTerraform(struct!.vaultTls),
  }
}


export function credentialProviderVaultClientTokenToHclTerraform(struct?: CredentialProviderVaultClientToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_claims: {
      value: cdktf.listMapperHcl(credentialProviderVaultClientTokenCustomClaimsToHclTerraform, false)(struct!.customClaims),
      isBlock: true,
      type: "set",
      storageClassType: "CredentialProviderVaultClientTokenCustomClaimsList",
    },
    lifetime: {
      value: cdktf.numberToHclTerraform(struct!.lifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_type: {
      value: cdktf.stringToHclTerraform(struct!.subjectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_forwarding: {
      value: cdktf.stringToHclTerraform(struct!.vaultForwarding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_host: {
      value: cdktf.stringToHclTerraform(struct!.vaultHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_namespace: {
      value: cdktf.stringToHclTerraform(struct!.vaultNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_path: {
      value: cdktf.stringToHclTerraform(struct!.vaultPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_port: {
      value: cdktf.numberToHclTerraform(struct!.vaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vault_private_network_access: {
      value: cdktf.booleanToHclTerraform(struct!.vaultPrivateNetworkAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vault_role: {
      value: cdktf.stringToHclTerraform(struct!.vaultRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_tls: {
      value: cdktf.booleanToHclTerraform(struct!.vaultTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialProviderVaultClientTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialProviderVaultClientToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customClaims = this._customClaims?.internalValue;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectType = this._subjectType;
    }
    if (this._vaultForwarding !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultForwarding = this._vaultForwarding;
    }
    if (this._vaultHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultHost = this._vaultHost;
    }
    if (this._vaultNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultNamespace = this._vaultNamespace;
    }
    if (this._vaultPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultPath = this._vaultPath;
    }
    if (this._vaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultPort = this._vaultPort;
    }
    if (this._vaultPrivateNetworkAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultPrivateNetworkAccess = this._vaultPrivateNetworkAccess;
    }
    if (this._vaultRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultRole = this._vaultRole;
    }
    if (this._vaultTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultTls = this._vaultTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialProviderVaultClientToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customClaims.internalValue = undefined;
      this._lifetime = undefined;
      this._subject = undefined;
      this._subjectType = undefined;
      this._vaultForwarding = undefined;
      this._vaultHost = undefined;
      this._vaultNamespace = undefined;
      this._vaultPath = undefined;
      this._vaultPort = undefined;
      this._vaultPrivateNetworkAccess = undefined;
      this._vaultRole = undefined;
      this._vaultTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customClaims.internalValue = value.customClaims;
      this._lifetime = value.lifetime;
      this._subject = value.subject;
      this._subjectType = value.subjectType;
      this._vaultForwarding = value.vaultForwarding;
      this._vaultHost = value.vaultHost;
      this._vaultNamespace = value.vaultNamespace;
      this._vaultPath = value.vaultPath;
      this._vaultPort = value.vaultPort;
      this._vaultPrivateNetworkAccess = value.vaultPrivateNetworkAccess;
      this._vaultRole = value.vaultRole;
      this._vaultTls = value.vaultTls;
    }
  }

  // custom_claims - computed: true, optional: true, required: false
  private _customClaims = new CredentialProviderVaultClientTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }
  public putCustomClaims(value: CredentialProviderVaultClientTokenCustomClaims[] | cdktf.IResolvable) {
    this._customClaims.internalValue = value;
  }
  public resetCustomClaims() {
    this._customClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customClaimsInput() {
    return this._customClaims.internalValue;
  }

  // lifetime - computed: false, optional: false, required: true
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_type - computed: false, optional: false, required: true
  private _subjectType?: string; 
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
  public set subjectType(value: string) {
    this._subjectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypeInput() {
    return this._subjectType;
  }

  // vault_forwarding - computed: true, optional: true, required: false
  private _vaultForwarding?: string; 
  public get vaultForwarding() {
    return this.getStringAttribute('vault_forwarding');
  }
  public set vaultForwarding(value: string) {
    this._vaultForwarding = value;
  }
  public resetVaultForwarding() {
    this._vaultForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultForwardingInput() {
    return this._vaultForwarding;
  }

  // vault_host - computed: false, optional: false, required: true
  private _vaultHost?: string; 
  public get vaultHost() {
    return this.getStringAttribute('vault_host');
  }
  public set vaultHost(value: string) {
    this._vaultHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultHostInput() {
    return this._vaultHost;
  }

  // vault_namespace - computed: false, optional: true, required: false
  private _vaultNamespace?: string; 
  public get vaultNamespace() {
    return this.getStringAttribute('vault_namespace');
  }
  public set vaultNamespace(value: string) {
    this._vaultNamespace = value;
  }
  public resetVaultNamespace() {
    this._vaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultNamespaceInput() {
    return this._vaultNamespace;
  }

  // vault_path - computed: false, optional: false, required: true
  private _vaultPath?: string; 
  public get vaultPath() {
    return this.getStringAttribute('vault_path');
  }
  public set vaultPath(value: string) {
    this._vaultPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPathInput() {
    return this._vaultPath;
  }

  // vault_port - computed: false, optional: false, required: true
  private _vaultPort?: number; 
  public get vaultPort() {
    return this.getNumberAttribute('vault_port');
  }
  public set vaultPort(value: number) {
    this._vaultPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPortInput() {
    return this._vaultPort;
  }

  // vault_private_network_access - computed: true, optional: true, required: false
  private _vaultPrivateNetworkAccess?: boolean | cdktf.IResolvable; 
  public get vaultPrivateNetworkAccess() {
    return this.getBooleanAttribute('vault_private_network_access');
  }
  public set vaultPrivateNetworkAccess(value: boolean | cdktf.IResolvable) {
    this._vaultPrivateNetworkAccess = value;
  }
  public resetVaultPrivateNetworkAccess() {
    this._vaultPrivateNetworkAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultPrivateNetworkAccessInput() {
    return this._vaultPrivateNetworkAccess;
  }

  // vault_role - computed: false, optional: true, required: false
  private _vaultRole?: string; 
  public get vaultRole() {
    return this.getStringAttribute('vault_role');
  }
  public set vaultRole(value: string) {
    this._vaultRole = value;
  }
  public resetVaultRole() {
    this._vaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultRoleInput() {
    return this._vaultRole;
  }

  // vault_tls - computed: false, optional: false, required: true
  private _vaultTls?: boolean | cdktf.IResolvable; 
  public get vaultTls() {
    return this.getBooleanAttribute('vault_tls');
  }
  public set vaultTls(value: boolean | cdktf.IResolvable) {
    this._vaultTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultTlsInput() {
    return this._vaultTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider aembit_credential_provider}
*/
export class CredentialProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_credential_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialProvider to import
  * @param importFromId The id of the existing CredentialProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_credential_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/resources/credential_provider aembit_credential_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialProviderConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'aembit_credential_provider',
      terraformGeneratorMetadata: {
        providerName: 'aembit',
        providerVersion: '1.25.1',
        providerVersionConstraint: '1.25.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aembitAccessToken.internalValue = config.aembitAccessToken;
    this._apiKey.internalValue = config.apiKey;
    this._awsSecretsManagerValue.internalValue = config.awsSecretsManagerValue;
    this._awsSts.internalValue = config.awsSts;
    this._azureEntraWorkloadIdentity.internalValue = config.azureEntraWorkloadIdentity;
    this._description = config.description;
    this._googleWorkloadIdentity.internalValue = config.googleWorkloadIdentity;
    this._id = config.id;
    this._isActive = config.isActive;
    this._jwtSvidToken.internalValue = config.jwtSvidToken;
    this._managedGitlabAccount.internalValue = config.managedGitlabAccount;
    this._name = config.name;
    this._oauthAuthorizationCode.internalValue = config.oauthAuthorizationCode;
    this._oauthClientCredentials.internalValue = config.oauthClientCredentials;
    this._oidcIdToken.internalValue = config.oidcIdToken;
    this._snowflakeJwt.internalValue = config.snowflakeJwt;
    this._tags = config.tags;
    this._usernamePassword.internalValue = config.usernamePassword;
    this._vaultClientToken.internalValue = config.vaultClientToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aembit_access_token - computed: false, optional: true, required: false
  private _aembitAccessToken = new CredentialProviderAembitAccessTokenOutputReference(this, "aembit_access_token");
  public get aembitAccessToken() {
    return this._aembitAccessToken;
  }
  public putAembitAccessToken(value: CredentialProviderAembitAccessToken) {
    this._aembitAccessToken.internalValue = value;
  }
  public resetAembitAccessToken() {
    this._aembitAccessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aembitAccessTokenInput() {
    return this._aembitAccessToken.internalValue;
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey = new CredentialProviderApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: CredentialProviderApiKey) {
    this._apiKey.internalValue = value;
  }
  public resetApiKey() {
    this._apiKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }

  // aws_secrets_manager_value - computed: false, optional: true, required: false
  private _awsSecretsManagerValue = new CredentialProviderAwsSecretsManagerValueOutputReference(this, "aws_secrets_manager_value");
  public get awsSecretsManagerValue() {
    return this._awsSecretsManagerValue;
  }
  public putAwsSecretsManagerValue(value: CredentialProviderAwsSecretsManagerValue) {
    this._awsSecretsManagerValue.internalValue = value;
  }
  public resetAwsSecretsManagerValue() {
    this._awsSecretsManagerValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretsManagerValueInput() {
    return this._awsSecretsManagerValue.internalValue;
  }

  // aws_sts - computed: false, optional: true, required: false
  private _awsSts = new CredentialProviderAwsStsOutputReference(this, "aws_sts");
  public get awsSts() {
    return this._awsSts;
  }
  public putAwsSts(value: CredentialProviderAwsSts) {
    this._awsSts.internalValue = value;
  }
  public resetAwsSts() {
    this._awsSts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsInput() {
    return this._awsSts.internalValue;
  }

  // azure_entra_workload_identity - computed: false, optional: true, required: false
  private _azureEntraWorkloadIdentity = new CredentialProviderAzureEntraWorkloadIdentityOutputReference(this, "azure_entra_workload_identity");
  public get azureEntraWorkloadIdentity() {
    return this._azureEntraWorkloadIdentity;
  }
  public putAzureEntraWorkloadIdentity(value: CredentialProviderAzureEntraWorkloadIdentity) {
    this._azureEntraWorkloadIdentity.internalValue = value;
  }
  public resetAzureEntraWorkloadIdentity() {
    this._azureEntraWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEntraWorkloadIdentityInput() {
    return this._azureEntraWorkloadIdentity.internalValue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // google_workload_identity - computed: false, optional: true, required: false
  private _googleWorkloadIdentity = new CredentialProviderGoogleWorkloadIdentityOutputReference(this, "google_workload_identity");
  public get googleWorkloadIdentity() {
    return this._googleWorkloadIdentity;
  }
  public putGoogleWorkloadIdentity(value: CredentialProviderGoogleWorkloadIdentity) {
    this._googleWorkloadIdentity.internalValue = value;
  }
  public resetGoogleWorkloadIdentity() {
    this._googleWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleWorkloadIdentityInput() {
    return this._googleWorkloadIdentity.internalValue;
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

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // jwt_svid_token - computed: false, optional: true, required: false
  private _jwtSvidToken = new CredentialProviderJwtSvidTokenOutputReference(this, "jwt_svid_token");
  public get jwtSvidToken() {
    return this._jwtSvidToken;
  }
  public putJwtSvidToken(value: CredentialProviderJwtSvidToken) {
    this._jwtSvidToken.internalValue = value;
  }
  public resetJwtSvidToken() {
    this._jwtSvidToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSvidTokenInput() {
    return this._jwtSvidToken.internalValue;
  }

  // managed_gitlab_account - computed: false, optional: true, required: false
  private _managedGitlabAccount = new CredentialProviderManagedGitlabAccountOutputReference(this, "managed_gitlab_account");
  public get managedGitlabAccount() {
    return this._managedGitlabAccount;
  }
  public putManagedGitlabAccount(value: CredentialProviderManagedGitlabAccount) {
    this._managedGitlabAccount.internalValue = value;
  }
  public resetManagedGitlabAccount() {
    this._managedGitlabAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedGitlabAccountInput() {
    return this._managedGitlabAccount.internalValue;
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

  // oauth_authorization_code - computed: false, optional: true, required: false
  private _oauthAuthorizationCode = new CredentialProviderOauthAuthorizationCodeOutputReference(this, "oauth_authorization_code");
  public get oauthAuthorizationCode() {
    return this._oauthAuthorizationCode;
  }
  public putOauthAuthorizationCode(value: CredentialProviderOauthAuthorizationCode) {
    this._oauthAuthorizationCode.internalValue = value;
  }
  public resetOauthAuthorizationCode() {
    this._oauthAuthorizationCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthorizationCodeInput() {
    return this._oauthAuthorizationCode.internalValue;
  }

  // oauth_client_credentials - computed: false, optional: true, required: false
  private _oauthClientCredentials = new CredentialProviderOauthClientCredentialsOutputReference(this, "oauth_client_credentials");
  public get oauthClientCredentials() {
    return this._oauthClientCredentials;
  }
  public putOauthClientCredentials(value: CredentialProviderOauthClientCredentials) {
    this._oauthClientCredentials.internalValue = value;
  }
  public resetOauthClientCredentials() {
    this._oauthClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientCredentialsInput() {
    return this._oauthClientCredentials.internalValue;
  }

  // oidc_id_token - computed: false, optional: true, required: false
  private _oidcIdToken = new CredentialProviderOidcIdTokenOutputReference(this, "oidc_id_token");
  public get oidcIdToken() {
    return this._oidcIdToken;
  }
  public putOidcIdToken(value: CredentialProviderOidcIdToken) {
    this._oidcIdToken.internalValue = value;
  }
  public resetOidcIdToken() {
    this._oidcIdToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcIdTokenInput() {
    return this._oidcIdToken.internalValue;
  }

  // snowflake_jwt - computed: false, optional: true, required: false
  private _snowflakeJwt = new CredentialProviderSnowflakeJwtOutputReference(this, "snowflake_jwt");
  public get snowflakeJwt() {
    return this._snowflakeJwt;
  }
  public putSnowflakeJwt(value: CredentialProviderSnowflakeJwt) {
    this._snowflakeJwt.internalValue = value;
  }
  public resetSnowflakeJwt() {
    this._snowflakeJwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeJwtInput() {
    return this._snowflakeJwt.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // username_password - computed: false, optional: true, required: false
  private _usernamePassword = new CredentialProviderUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: CredentialProviderUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }

  // vault_client_token - computed: false, optional: true, required: false
  private _vaultClientToken = new CredentialProviderVaultClientTokenOutputReference(this, "vault_client_token");
  public get vaultClientToken() {
    return this._vaultClientToken;
  }
  public putVaultClientToken(value: CredentialProviderVaultClientToken) {
    this._vaultClientToken.internalValue = value;
  }
  public resetVaultClientToken() {
    this._vaultClientToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultClientTokenInput() {
    return this._vaultClientToken.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aembit_access_token: credentialProviderAembitAccessTokenToTerraform(this._aembitAccessToken.internalValue),
      api_key: credentialProviderApiKeyToTerraform(this._apiKey.internalValue),
      aws_secrets_manager_value: credentialProviderAwsSecretsManagerValueToTerraform(this._awsSecretsManagerValue.internalValue),
      aws_sts: credentialProviderAwsStsToTerraform(this._awsSts.internalValue),
      azure_entra_workload_identity: credentialProviderAzureEntraWorkloadIdentityToTerraform(this._azureEntraWorkloadIdentity.internalValue),
      description: cdktf.stringToTerraform(this._description),
      google_workload_identity: credentialProviderGoogleWorkloadIdentityToTerraform(this._googleWorkloadIdentity.internalValue),
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      jwt_svid_token: credentialProviderJwtSvidTokenToTerraform(this._jwtSvidToken.internalValue),
      managed_gitlab_account: credentialProviderManagedGitlabAccountToTerraform(this._managedGitlabAccount.internalValue),
      name: cdktf.stringToTerraform(this._name),
      oauth_authorization_code: credentialProviderOauthAuthorizationCodeToTerraform(this._oauthAuthorizationCode.internalValue),
      oauth_client_credentials: credentialProviderOauthClientCredentialsToTerraform(this._oauthClientCredentials.internalValue),
      oidc_id_token: credentialProviderOidcIdTokenToTerraform(this._oidcIdToken.internalValue),
      snowflake_jwt: credentialProviderSnowflakeJwtToTerraform(this._snowflakeJwt.internalValue),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      username_password: credentialProviderUsernamePasswordToTerraform(this._usernamePassword.internalValue),
      vault_client_token: credentialProviderVaultClientTokenToTerraform(this._vaultClientToken.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aembit_access_token: {
        value: credentialProviderAembitAccessTokenToHclTerraform(this._aembitAccessToken.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderAembitAccessToken",
      },
      api_key: {
        value: credentialProviderApiKeyToHclTerraform(this._apiKey.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderApiKey",
      },
      aws_secrets_manager_value: {
        value: credentialProviderAwsSecretsManagerValueToHclTerraform(this._awsSecretsManagerValue.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderAwsSecretsManagerValue",
      },
      aws_sts: {
        value: credentialProviderAwsStsToHclTerraform(this._awsSts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderAwsSts",
      },
      azure_entra_workload_identity: {
        value: credentialProviderAzureEntraWorkloadIdentityToHclTerraform(this._azureEntraWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderAzureEntraWorkloadIdentity",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_workload_identity: {
        value: credentialProviderGoogleWorkloadIdentityToHclTerraform(this._googleWorkloadIdentity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderGoogleWorkloadIdentity",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_svid_token: {
        value: credentialProviderJwtSvidTokenToHclTerraform(this._jwtSvidToken.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderJwtSvidToken",
      },
      managed_gitlab_account: {
        value: credentialProviderManagedGitlabAccountToHclTerraform(this._managedGitlabAccount.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderManagedGitlabAccount",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth_authorization_code: {
        value: credentialProviderOauthAuthorizationCodeToHclTerraform(this._oauthAuthorizationCode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderOauthAuthorizationCode",
      },
      oauth_client_credentials: {
        value: credentialProviderOauthClientCredentialsToHclTerraform(this._oauthClientCredentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderOauthClientCredentials",
      },
      oidc_id_token: {
        value: credentialProviderOidcIdTokenToHclTerraform(this._oidcIdToken.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderOidcIdToken",
      },
      snowflake_jwt: {
        value: credentialProviderSnowflakeJwtToHclTerraform(this._snowflakeJwt.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderSnowflakeJwt",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      username_password: {
        value: credentialProviderUsernamePasswordToHclTerraform(this._usernamePassword.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderUsernamePassword",
      },
      vault_client_token: {
        value: credentialProviderVaultClientTokenToHclTerraform(this._vaultClientToken.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialProviderVaultClientToken",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
