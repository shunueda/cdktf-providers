// https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAembitCredentialProvidersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataAembitCredentialProvidersCredentialProvidersAembitAccessToken {
}

export function dataAembitCredentialProvidersCredentialProvidersAembitAccessTokenToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAembitAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersAembitAccessTokenToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAembitAccessToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersAembitAccessTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersAembitAccessToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersAembitAccessToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }

  // role_id - computed: true, optional: false, required: false
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersApiKey {
}

export function dataAembitCredentialProvidersCredentialProvidersApiKeyToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersApiKeyToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue {
  /**
  * The unique identifier of the Credential Provider Integration of type AWS IAM Role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#credential_provider_integration_id DataAembitCredentialProviders#credential_provider_integration_id}
  */
  readonly credentialProviderIntegrationId?: string;
  /**
  * Indicates that the AWS Secrets Manager is accessible via a private network only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#private_network_access DataAembitCredentialProviders#private_network_access}
  */
  readonly privateNetworkAccess?: boolean | cdktf.IResolvable;
  /**
  * ARN of the AWS Secrets Manager secret to be used by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#secret_arn DataAembitCredentialProviders#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Used when an AWS Secrets Manager secret object is in JSON format. Specifies a key of an element with the secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#secret_key_1 DataAembitCredentialProviders#secret_key_1}
  */
  readonly secretKey1?: string;
  /**
  * Similar to `secret_key_1` but used when you need a credential provider to work with 2 secret values. For example, a username / password pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#secret_key_2 DataAembitCredentialProviders#secret_key_2}
  */
  readonly secretKey2?: string;
}

export function dataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue | cdktf.IResolvable): any {
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


export function dataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue | cdktf.IResolvable): any {
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

export class DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue | cdktf.IResolvable | undefined) {
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

  // credential_provider_integration_id - computed: true, optional: true, required: false
  private _credentialProviderIntegrationId?: string; 
  public get credentialProviderIntegrationId() {
    return this.getStringAttribute('credential_provider_integration_id');
  }
  public set credentialProviderIntegrationId(value: string) {
    this._credentialProviderIntegrationId = value;
  }
  public resetCredentialProviderIntegrationId() {
    this._credentialProviderIntegrationId = undefined;
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

  // secret_arn - computed: true, optional: true, required: false
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  public resetSecretArn() {
    this._secretArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_key_1 - computed: true, optional: true, required: false
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

  // secret_key_2 - computed: true, optional: true, required: false
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
export interface DataAembitCredentialProvidersCredentialProvidersAwsSts {
  /**
  * Lifetime (seconds) of the AWS Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#lifetime DataAembitCredentialProviders#lifetime}
  */
  readonly lifetime?: number;
}

export function dataAembitCredentialProvidersCredentialProvidersAwsStsToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAwsSts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function dataAembitCredentialProvidersCredentialProvidersAwsStsToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAwsSts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitCredentialProvidersCredentialProvidersAwsStsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersAwsSts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersAwsSts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
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

  // role_arn - computed: true, optional: false, required: false
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }

  // token_audience - computed: true, optional: false, required: false
  public get tokenAudience() {
    return this.getStringAttribute('token_audience');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity {
}

export function dataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // azure_tenant - computed: true, optional: false, required: false
  public get azureTenant() {
    return this.getStringAttribute('azure_tenant');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // oidc_issuer - computed: true, optional: false, required: false
  public get oidcIssuer() {
    return this.getStringAttribute('oidc_issuer');
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity {
  /**
  * Lifetime (seconds) of the GCP Session credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#lifetime DataAembitCredentialProviders#lifetime}
  */
  readonly lifetime?: number;
}

export function dataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function dataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lifetime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lifetime = value.lifetime;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
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

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaims {
}

export function dataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaims | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersJwtSvidToken {
}

export function dataAembitCredentialProvidersCredentialProvidersJwtSvidTokenToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersJwtSvidToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersJwtSvidTokenToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersJwtSvidToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersJwtSvidToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersJwtSvidToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_type - computed: true, optional: false, required: false
  public get algorithmType() {
    return this.getStringAttribute('algorithm_type');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // custom_claims - computed: true, optional: false, required: false
  private _customClaims = new DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // lifetime_in_minutes - computed: true, optional: false, required: false
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccount {
}

export function dataAembitCredentialProvidersCredentialProvidersManagedGitlabAccountToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersManagedGitlabAccountToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level - computed: true, optional: false, required: false
  public get accessLevel() {
    return this.getNumberAttribute('access_level');
  }

  // credential_provider_integration_id - computed: true, optional: false, required: false
  public get credentialProviderIntegrationId() {
    return this.getStringAttribute('credential_provider_integration_id');
  }

  // group_ids - computed: true, optional: false, required: false
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }

  // lifetime_in_hours - computed: true, optional: false, required: false
  public get lifetimeInHours() {
    return this.getNumberAttribute('lifetime_in_hours');
  }

  // project_ids - computed: true, optional: false, required: false
  public get projectIds() {
    return cdktf.Fn.tolist(this.getListAttribute('project_ids'));
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // service_account_username - computed: true, optional: false, required: false
  public get serviceAccountUsername() {
    return this.getStringAttribute('service_account_username');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParameters {
}

export function dataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParameters | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCode {
  /**
  * Lifetime (in seconds) of the OAuth Authorization Code credentials requested by the Credential Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#lifetime DataAembitCredentialProviders#lifetime}
  */
  readonly lifetime: number;
}

export function dataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCode): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lifetime = value.lifetime;
    }
  }

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // custom_parameters - computed: true, optional: false, required: false
  private _customParameters = new DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeCustomParametersList(this, "custom_parameters", true);
  public get customParameters() {
    return this._customParameters;
  }

  // is_pkce_required - computed: true, optional: false, required: false
  public get isPkceRequired() {
    return this.getBooleanAttribute('is_pkce_required');
  }

  // lifetime - computed: true, optional: false, required: true
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

  // lifetime_expiration - computed: true, optional: false, required: false
  public get lifetimeExpiration() {
    return this.getStringAttribute('lifetime_expiration');
  }

  // oauth_authorization_url - computed: true, optional: false, required: false
  public get oauthAuthorizationUrl() {
    return this.getStringAttribute('oauth_authorization_url');
  }

  // oauth_discovery_url - computed: true, optional: false, required: false
  public get oauthDiscoveryUrl() {
    return this.getStringAttribute('oauth_discovery_url');
  }

  // oauth_introspection_url - computed: true, optional: false, required: false
  public get oauthIntrospectionUrl() {
    return this.getStringAttribute('oauth_introspection_url');
  }

  // oauth_token_url - computed: true, optional: false, required: false
  public get oauthTokenUrl() {
    return this.getStringAttribute('oauth_token_url');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getStringAttribute('scopes');
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
export interface DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParameters {
}

export function dataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParameters | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersOauthClientCredentials {
}

export function dataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOauthClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOauthClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // credential_style - computed: true, optional: false, required: false
  public get credentialStyle() {
    return this.getStringAttribute('credential_style');
  }

  // custom_parameters - computed: true, optional: false, required: false
  private _customParameters = new DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsCustomParametersList(this, "custom_parameters", true);
  public get customParameters() {
    return this._customParameters;
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return this.getStringAttribute('scopes');
  }

  // token_url - computed: true, optional: false, required: false
  public get tokenUrl() {
    return this.getStringAttribute('token_url');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaims {
}

export function dataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaims | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersOidcIdToken {
}

export function dataAembitCredentialProvidersCredentialProvidersOidcIdTokenToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOidcIdToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersOidcIdTokenToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersOidcIdToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersOidcIdTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersOidcIdToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersOidcIdToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm_type - computed: true, optional: false, required: false
  public get algorithmType() {
    return this.getStringAttribute('algorithm_type');
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // custom_claims - computed: true, optional: false, required: false
  private _customClaims = new DataAembitCredentialProvidersCredentialProvidersOidcIdTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // lifetime_in_minutes - computed: true, optional: false, required: false
  public get lifetimeInMinutes() {
    return this.getNumberAttribute('lifetime_in_minutes');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt {
}

export function dataAembitCredentialProvidersCredentialProvidersSnowflakeJwtToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersSnowflakeJwtToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersSnowflakeJwtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // alter_user_command - computed: true, optional: false, required: false
  public get alterUserCommand() {
    return this.getStringAttribute('alter_user_command');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersUsernamePassword {
}

export function dataAembitCredentialProvidersCredentialProvidersUsernamePasswordToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersUsernamePasswordToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersUsernamePassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersUsernamePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersUsernamePassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersUsernamePassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaims {
}

export function dataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaims | undefined) {
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

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsList extends cdktf.ComplexList {

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAembitCredentialProvidersCredentialProvidersVaultClientToken {
}

export function dataAembitCredentialProvidersCredentialProvidersVaultClientTokenToTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersVaultClientToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAembitCredentialProvidersCredentialProvidersVaultClientTokenToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProvidersVaultClientToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAembitCredentialProvidersCredentialProvidersVaultClientTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAembitCredentialProvidersCredentialProvidersVaultClientToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProvidersVaultClientToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_claims - computed: true, optional: false, required: false
  private _customClaims = new DataAembitCredentialProvidersCredentialProvidersVaultClientTokenCustomClaimsList(this, "custom_claims", true);
  public get customClaims() {
    return this._customClaims;
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }

  // vault_forwarding - computed: true, optional: false, required: false
  public get vaultForwarding() {
    return this.getStringAttribute('vault_forwarding');
  }

  // vault_host - computed: true, optional: false, required: false
  public get vaultHost() {
    return this.getStringAttribute('vault_host');
  }

  // vault_namespace - computed: true, optional: false, required: false
  public get vaultNamespace() {
    return this.getStringAttribute('vault_namespace');
  }

  // vault_path - computed: true, optional: false, required: false
  public get vaultPath() {
    return this.getStringAttribute('vault_path');
  }

  // vault_port - computed: true, optional: false, required: false
  public get vaultPort() {
    return this.getNumberAttribute('vault_port');
  }

  // vault_private_network_access - computed: true, optional: false, required: false
  public get vaultPrivateNetworkAccess() {
    return this.getBooleanAttribute('vault_private_network_access');
  }

  // vault_role - computed: true, optional: false, required: false
  public get vaultRole() {
    return this.getStringAttribute('vault_role');
  }

  // vault_tls - computed: true, optional: false, required: false
  public get vaultTls() {
    return this.getBooleanAttribute('vault_tls');
  }
}
export interface DataAembitCredentialProvidersCredentialProviders {
  /**
  * Aembit Access Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#aembit_access_token DataAembitCredentialProviders#aembit_access_token}
  */
  readonly aembitAccessToken?: DataAembitCredentialProvidersCredentialProvidersAembitAccessToken;
  /**
  * AWS Secrets Manager Value type Credential Provider configuration. This type of credential provider supports secret values in plaintext or JSON formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#aws_secrets_manager_value DataAembitCredentialProviders#aws_secrets_manager_value}
  */
  readonly awsSecretsManagerValue?: DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue;
  /**
  * AWS Security Token Service Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#aws_sts DataAembitCredentialProviders#aws_sts}
  */
  readonly awsSts?: DataAembitCredentialProvidersCredentialProvidersAwsSts;
  /**
  * Azure Entra Workload Identity Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#azure_entra_workload_identity DataAembitCredentialProviders#azure_entra_workload_identity}
  */
  readonly azureEntraWorkloadIdentity?: DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity;
  /**
  * Google Workload Identity Federation type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#google_workload_identity DataAembitCredentialProviders#google_workload_identity}
  */
  readonly googleWorkloadIdentity?: DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity;
  /**
  * JSON Web Token type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#snowflake_jwt DataAembitCredentialProviders#snowflake_jwt}
  */
  readonly snowflakeJwt?: DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt;
  /**
  * Username/Password type Credential Provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#username_password DataAembitCredentialProviders#username_password}
  */
  readonly usernamePassword?: DataAembitCredentialProvidersCredentialProvidersUsernamePassword;
}

export function dataAembitCredentialProvidersCredentialProvidersToTerraform(struct?: DataAembitCredentialProvidersCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aembit_access_token: dataAembitCredentialProvidersCredentialProvidersAembitAccessTokenToTerraform(struct!.aembitAccessToken),
    aws_secrets_manager_value: dataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueToTerraform(struct!.awsSecretsManagerValue),
    aws_sts: dataAembitCredentialProvidersCredentialProvidersAwsStsToTerraform(struct!.awsSts),
    azure_entra_workload_identity: dataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityToTerraform(struct!.azureEntraWorkloadIdentity),
    google_workload_identity: dataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityToTerraform(struct!.googleWorkloadIdentity),
    snowflake_jwt: dataAembitCredentialProvidersCredentialProvidersSnowflakeJwtToTerraform(struct!.snowflakeJwt),
    username_password: dataAembitCredentialProvidersCredentialProvidersUsernamePasswordToTerraform(struct!.usernamePassword),
  }
}


export function dataAembitCredentialProvidersCredentialProvidersToHclTerraform(struct?: DataAembitCredentialProvidersCredentialProviders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aembit_access_token: {
      value: dataAembitCredentialProvidersCredentialProvidersAembitAccessTokenToHclTerraform(struct!.aembitAccessToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersAembitAccessToken",
    },
    aws_secrets_manager_value: {
      value: dataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueToHclTerraform(struct!.awsSecretsManagerValue),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue",
    },
    aws_sts: {
      value: dataAembitCredentialProvidersCredentialProvidersAwsStsToHclTerraform(struct!.awsSts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersAwsSts",
    },
    azure_entra_workload_identity: {
      value: dataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityToHclTerraform(struct!.azureEntraWorkloadIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity",
    },
    google_workload_identity: {
      value: dataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityToHclTerraform(struct!.googleWorkloadIdentity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity",
    },
    snowflake_jwt: {
      value: dataAembitCredentialProvidersCredentialProvidersSnowflakeJwtToHclTerraform(struct!.snowflakeJwt),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt",
    },
    username_password: {
      value: dataAembitCredentialProvidersCredentialProvidersUsernamePasswordToHclTerraform(struct!.usernamePassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataAembitCredentialProvidersCredentialProvidersUsernamePassword",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAembitCredentialProvidersCredentialProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAembitCredentialProvidersCredentialProviders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aembitAccessToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aembitAccessToken = this._aembitAccessToken?.internalValue;
    }
    if (this._awsSecretsManagerValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecretsManagerValue = this._awsSecretsManagerValue?.internalValue;
    }
    if (this._awsSts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSts = this._awsSts?.internalValue;
    }
    if (this._azureEntraWorkloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureEntraWorkloadIdentity = this._azureEntraWorkloadIdentity?.internalValue;
    }
    if (this._googleWorkloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleWorkloadIdentity = this._googleWorkloadIdentity?.internalValue;
    }
    if (this._snowflakeJwt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snowflakeJwt = this._snowflakeJwt?.internalValue;
    }
    if (this._usernamePassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernamePassword = this._usernamePassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAembitCredentialProvidersCredentialProviders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aembitAccessToken.internalValue = undefined;
      this._awsSecretsManagerValue.internalValue = undefined;
      this._awsSts.internalValue = undefined;
      this._azureEntraWorkloadIdentity.internalValue = undefined;
      this._googleWorkloadIdentity.internalValue = undefined;
      this._snowflakeJwt.internalValue = undefined;
      this._usernamePassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aembitAccessToken.internalValue = value.aembitAccessToken;
      this._awsSecretsManagerValue.internalValue = value.awsSecretsManagerValue;
      this._awsSts.internalValue = value.awsSts;
      this._azureEntraWorkloadIdentity.internalValue = value.azureEntraWorkloadIdentity;
      this._googleWorkloadIdentity.internalValue = value.googleWorkloadIdentity;
      this._snowflakeJwt.internalValue = value.snowflakeJwt;
      this._usernamePassword.internalValue = value.usernamePassword;
    }
  }

  // aembit_access_token - computed: true, optional: true, required: false
  private _aembitAccessToken = new DataAembitCredentialProvidersCredentialProvidersAembitAccessTokenOutputReference(this, "aembit_access_token");
  public get aembitAccessToken() {
    return this._aembitAccessToken;
  }
  public putAembitAccessToken(value: DataAembitCredentialProvidersCredentialProvidersAembitAccessToken) {
    this._aembitAccessToken.internalValue = value;
  }
  public resetAembitAccessToken() {
    this._aembitAccessToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aembitAccessTokenInput() {
    return this._aembitAccessToken.internalValue;
  }

  // api_key - computed: true, optional: false, required: false
  private _apiKey = new DataAembitCredentialProvidersCredentialProvidersApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }

  // aws_secrets_manager_value - computed: true, optional: true, required: false
  private _awsSecretsManagerValue = new DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValueOutputReference(this, "aws_secrets_manager_value");
  public get awsSecretsManagerValue() {
    return this._awsSecretsManagerValue;
  }
  public putAwsSecretsManagerValue(value: DataAembitCredentialProvidersCredentialProvidersAwsSecretsManagerValue) {
    this._awsSecretsManagerValue.internalValue = value;
  }
  public resetAwsSecretsManagerValue() {
    this._awsSecretsManagerValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretsManagerValueInput() {
    return this._awsSecretsManagerValue.internalValue;
  }

  // aws_sts - computed: true, optional: true, required: false
  private _awsSts = new DataAembitCredentialProvidersCredentialProvidersAwsStsOutputReference(this, "aws_sts");
  public get awsSts() {
    return this._awsSts;
  }
  public putAwsSts(value: DataAembitCredentialProvidersCredentialProvidersAwsSts) {
    this._awsSts.internalValue = value;
  }
  public resetAwsSts() {
    this._awsSts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsInput() {
    return this._awsSts.internalValue;
  }

  // azure_entra_workload_identity - computed: true, optional: true, required: false
  private _azureEntraWorkloadIdentity = new DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentityOutputReference(this, "azure_entra_workload_identity");
  public get azureEntraWorkloadIdentity() {
    return this._azureEntraWorkloadIdentity;
  }
  public putAzureEntraWorkloadIdentity(value: DataAembitCredentialProvidersCredentialProvidersAzureEntraWorkloadIdentity) {
    this._azureEntraWorkloadIdentity.internalValue = value;
  }
  public resetAzureEntraWorkloadIdentity() {
    this._azureEntraWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEntraWorkloadIdentityInput() {
    return this._azureEntraWorkloadIdentity.internalValue;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // google_workload_identity - computed: true, optional: true, required: false
  private _googleWorkloadIdentity = new DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentityOutputReference(this, "google_workload_identity");
  public get googleWorkloadIdentity() {
    return this._googleWorkloadIdentity;
  }
  public putGoogleWorkloadIdentity(value: DataAembitCredentialProvidersCredentialProvidersGoogleWorkloadIdentity) {
    this._googleWorkloadIdentity.internalValue = value;
  }
  public resetGoogleWorkloadIdentity() {
    this._googleWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleWorkloadIdentityInput() {
    return this._googleWorkloadIdentity.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // jwt_svid_token - computed: true, optional: false, required: false
  private _jwtSvidToken = new DataAembitCredentialProvidersCredentialProvidersJwtSvidTokenOutputReference(this, "jwt_svid_token");
  public get jwtSvidToken() {
    return this._jwtSvidToken;
  }

  // managed_gitlab_account - computed: true, optional: false, required: false
  private _managedGitlabAccount = new DataAembitCredentialProvidersCredentialProvidersManagedGitlabAccountOutputReference(this, "managed_gitlab_account");
  public get managedGitlabAccount() {
    return this._managedGitlabAccount;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_authorization_code - computed: true, optional: false, required: false
  private _oauthAuthorizationCode = new DataAembitCredentialProvidersCredentialProvidersOauthAuthorizationCodeOutputReference(this, "oauth_authorization_code");
  public get oauthAuthorizationCode() {
    return this._oauthAuthorizationCode;
  }

  // oauth_client_credentials - computed: true, optional: false, required: false
  private _oauthClientCredentials = new DataAembitCredentialProvidersCredentialProvidersOauthClientCredentialsOutputReference(this, "oauth_client_credentials");
  public get oauthClientCredentials() {
    return this._oauthClientCredentials;
  }

  // oidc_id_token - computed: true, optional: false, required: false
  private _oidcIdToken = new DataAembitCredentialProvidersCredentialProvidersOidcIdTokenOutputReference(this, "oidc_id_token");
  public get oidcIdToken() {
    return this._oidcIdToken;
  }

  // snowflake_jwt - computed: true, optional: true, required: false
  private _snowflakeJwt = new DataAembitCredentialProvidersCredentialProvidersSnowflakeJwtOutputReference(this, "snowflake_jwt");
  public get snowflakeJwt() {
    return this._snowflakeJwt;
  }
  public putSnowflakeJwt(value: DataAembitCredentialProvidersCredentialProvidersSnowflakeJwt) {
    this._snowflakeJwt.internalValue = value;
  }
  public resetSnowflakeJwt() {
    this._snowflakeJwt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snowflakeJwtInput() {
    return this._snowflakeJwt.internalValue;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username_password - computed: true, optional: true, required: false
  private _usernamePassword = new DataAembitCredentialProvidersCredentialProvidersUsernamePasswordOutputReference(this, "username_password");
  public get usernamePassword() {
    return this._usernamePassword;
  }
  public putUsernamePassword(value: DataAembitCredentialProvidersCredentialProvidersUsernamePassword) {
    this._usernamePassword.internalValue = value;
  }
  public resetUsernamePassword() {
    this._usernamePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernamePasswordInput() {
    return this._usernamePassword.internalValue;
  }

  // vault_client_token - computed: true, optional: false, required: false
  private _vaultClientToken = new DataAembitCredentialProvidersCredentialProvidersVaultClientTokenOutputReference(this, "vault_client_token");
  public get vaultClientToken() {
    return this._vaultClientToken;
  }
}

export class DataAembitCredentialProvidersCredentialProvidersList extends cdktf.ComplexList {
  public internalValue? : DataAembitCredentialProvidersCredentialProviders[] | cdktf.IResolvable

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
  public get(index: number): DataAembitCredentialProvidersCredentialProvidersOutputReference {
    return new DataAembitCredentialProvidersCredentialProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers aembit_credential_providers}
*/
export class DataAembitCredentialProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aembit_credential_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAembitCredentialProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAembitCredentialProviders to import
  * @param importFromId The id of the existing DataAembitCredentialProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAembitCredentialProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aembit_credential_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aembit/aembit/1.25.1/docs/data-sources/credential_providers aembit_credential_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAembitCredentialProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAembitCredentialProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aembit_credential_providers',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_providers - computed: true, optional: false, required: false
  private _credentialProviders = new DataAembitCredentialProvidersCredentialProvidersList(this, "credential_providers", false);
  public get credentialProviders() {
    return this._credentialProviders;
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
