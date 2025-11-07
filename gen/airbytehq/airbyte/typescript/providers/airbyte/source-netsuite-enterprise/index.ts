// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceNetsuiteEnterpriseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#configuration SourceNetsuiteEnterprise#configuration}
  */
  readonly configuration: SourceNetsuiteEnterpriseConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#definition_id SourceNetsuiteEnterprise#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#name SourceNetsuiteEnterprise#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#secret_id SourceNetsuiteEnterprise#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#workspace_id SourceNetsuiteEnterprise#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "password_authentication"; must be "password_authentication"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#authentication_method SourceNetsuiteEnterprise#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#password SourceNetsuiteEnterprise#password}
  */
  readonly password: string;
}

export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._authenticationMethod = undefined;
      this._password = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._authenticationMethod = value.authenticationMethod;
      this._password = value.password;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
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
}
export interface SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "token_based_authentication"; must be "token_based_authentication"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#authentication_method SourceNetsuiteEnterprise#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * The consumer key used for token-based authentication. This is generated in NetSuite when creating an integration record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#client_id SourceNetsuiteEnterprise#client_id}
  */
  readonly clientId: string;
  /**
  * The consumer secret used for token-based authentication. This is generated in NetSuite when creating an integration record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#client_secret SourceNetsuiteEnterprise#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The token ID used for token-based authentication. This is generated in NetSuite when creating a token-based role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#token_id SourceNetsuiteEnterprise#token_id}
  */
  readonly tokenId: string;
  /**
  * The token secret used for token-based authentication. This is generated in NetSuite when creating a token-based role.Ensure to keep this value secure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#token_secret SourceNetsuiteEnterprise#token_secret}
  */
  readonly tokenSecret: string;
}

export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    authentication_method: cdktf.stringToTerraform(struct!.authenticationMethod),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    token_id: cdktf.stringToTerraform(struct!.tokenId),
    token_secret: cdktf.stringToTerraform(struct!.tokenSecret),
  }
}


export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_method: {
      value: cdktf.stringToHclTerraform(struct!.authenticationMethod),
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
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_id: {
      value: cdktf.stringToHclTerraform(struct!.tokenId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authenticationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._tokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenId = this._tokenId;
    }
    if (this._tokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecret = this._tokenSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._authenticationMethod = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._tokenId = undefined;
      this._tokenSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._authenticationMethod = value.authenticationMethod;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._tokenId = value.tokenId;
      this._tokenSecret = value.tokenSecret;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // authentication_method - computed: true, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
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

  // token_id - computed: false, optional: false, required: true
  private _tokenId?: string; 
  public get tokenId() {
    return this.getStringAttribute('token_id');
  }
  public set tokenId(value: string) {
    this._tokenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIdInput() {
    return this._tokenId;
  }

  // token_secret - computed: false, optional: false, required: true
  private _tokenSecret?: string; 
  public get tokenSecret() {
    return this.getStringAttribute('token_secret');
  }
  public set tokenSecret(value: string) {
    this._tokenSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretInput() {
    return this._tokenSecret;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationAuthenticationMethod {
  /**
  * Authenticate using a password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#password_authentication SourceNetsuiteEnterprise#password_authentication}
  */
  readonly passwordAuthentication?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication;
  /**
  * Authenticate using a token-based authentication method. This requires a consumer key and secret, as well as a token ID and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#token_based_authentication SourceNetsuiteEnterprise#token_based_authentication}
  */
  readonly tokenBasedAuthentication?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication;
}

export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password_authentication: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    token_based_authentication: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationToTerraform(struct!.tokenBasedAuthentication),
  }
}


export function sourceNetsuiteEnterpriseConfigurationAuthenticationMethodToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationAuthenticationMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password_authentication: {
      value: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication",
    },
    token_based_authentication: {
      value: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationToHclTerraform(struct!.tokenBasedAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationAuthenticationMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationAuthenticationMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._tokenBasedAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenBasedAuthentication = this._tokenBasedAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._tokenBasedAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._tokenBasedAuthentication.internalValue = value.tokenBasedAuthentication;
    }
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // token_based_authentication - computed: false, optional: true, required: false
  private _tokenBasedAuthentication = new SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthenticationOutputReference(this, "token_based_authentication");
  public get tokenBasedAuthentication() {
    return this._tokenBasedAuthentication;
  }
  public putTokenBasedAuthentication(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethodTokenBasedAuthentication) {
    this._tokenBasedAuthentication.internalValue = value;
  }
  public resetTokenBasedAuthentication() {
    this._tokenBasedAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBasedAuthenticationInput() {
    return this._tokenBasedAuthentication.internalValue;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "user_defined"; must be "user_defined"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#cursor_method SourceNetsuiteEnterprise#cursor_method}
  */
  readonly cursorMethod?: string;
}

export function sourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    cursor_method: cdktf.stringToTerraform(struct!.cursorMethod),
  }
}


export function sourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cursor_method: {
      value: cdktf.stringToHclTerraform(struct!.cursorMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._cursorMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursorMethod = this._cursorMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._cursorMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._cursorMethod = value.cursorMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // cursor_method - computed: true, optional: true, required: false
  private _cursorMethod?: string; 
  public get cursorMethod() {
    return this.getStringAttribute('cursor_method');
  }
  public set cursorMethod(value: string) {
    this._cursorMethod = value;
  }
  public resetCursorMethod() {
    this._cursorMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorMethodInput() {
    return this._cursorMethod;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationCursor {
  /**
  * Incrementally detects new inserts and updates using the <a href="https://docs.airbyte.com/understanding-airbyte/connections/incremental-append/#user-defined-cursor">cursor column</a> chosen when configuring a connection (e.g. created_at, updated_at).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#scan_changes_with_user_defined_cursor SourceNetsuiteEnterprise#scan_changes_with_user_defined_cursor}
  */
  readonly scanChangesWithUserDefinedCursor?: SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor;
}

export function sourceNetsuiteEnterpriseConfigurationCursorToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scan_changes_with_user_defined_cursor: sourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToTerraform(struct!.scanChangesWithUserDefinedCursor),
  }
}


export function sourceNetsuiteEnterpriseConfigurationCursorToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationCursor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scan_changes_with_user_defined_cursor: {
      value: sourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorToHclTerraform(struct!.scanChangesWithUserDefinedCursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationCursorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationCursor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scanChangesWithUserDefinedCursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanChangesWithUserDefinedCursor = this._scanChangesWithUserDefinedCursor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationCursor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scanChangesWithUserDefinedCursor.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scanChangesWithUserDefinedCursor.internalValue = value.scanChangesWithUserDefinedCursor;
    }
  }

  // scan_changes_with_user_defined_cursor - computed: false, optional: true, required: false
  private _scanChangesWithUserDefinedCursor = new SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursorOutputReference(this, "scan_changes_with_user_defined_cursor");
  public get scanChangesWithUserDefinedCursor() {
    return this._scanChangesWithUserDefinedCursor;
  }
  public putScanChangesWithUserDefinedCursor(value: SourceNetsuiteEnterpriseConfigurationCursorScanChangesWithUserDefinedCursor) {
    this._scanChangesWithUserDefinedCursor.internalValue = value;
  }
  public resetScanChangesWithUserDefinedCursor() {
    this._scanChangesWithUserDefinedCursor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanChangesWithUserDefinedCursorInput() {
    return this._scanChangesWithUserDefinedCursor.internalValue;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Default: "NO_TUNNEL"; must be "NO_TUNNEL"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_method SourceNetsuiteEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
}

export function sourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
  }
}


export function sourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._tunnelMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._tunnelMethod = value.tunnelMethod;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_host SourceNetsuiteEnterprise#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Default: "SSH_PASSWORD_AUTH"; must be "SSH_PASSWORD_AUTH"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_method SourceNetsuiteEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_port SourceNetsuiteEnterprise#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_user SourceNetsuiteEnterprise#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_user_password SourceNetsuiteEnterprise#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function sourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function sourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_user_password: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._tunnelUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUserPassword = this._tunnelUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._tunnelHost = undefined;
      this._tunnelMethod = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._tunnelUserPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._tunnelHost = value.tunnelHost;
      this._tunnelMethod = value.tunnelMethod;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // tunnel_user_password - computed: false, optional: false, required: true
  private _tunnelUserPassword?: string; 
  public get tunnelUserPassword() {
    return this.getStringAttribute('tunnel_user_password');
  }
  public set tunnelUserPassword(value: string) {
    this._tunnelUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserPasswordInput() {
    return this._tunnelUserPassword;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#additional_properties SourceNetsuiteEnterprise#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#ssh_key SourceNetsuiteEnterprise#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_host SourceNetsuiteEnterprise#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Default: "SSH_KEY_AUTH"; must be "SSH_KEY_AUTH"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_method SourceNetsuiteEnterprise#tunnel_method}
  */
  readonly tunnelMethod?: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_port SourceNetsuiteEnterprise#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_user SourceNetsuiteEnterprise#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function sourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_method: cdktf.stringToTerraform(struct!.tunnelMethod),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function sourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_method: {
      value: cdktf.stringToHclTerraform(struct!.tunnelMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelMethod = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelMethod = value.tunnelMethod;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_method - computed: true, optional: true, required: false
  private _tunnelMethod?: string; 
  public get tunnelMethod() {
    return this.getStringAttribute('tunnel_method');
  }
  public set tunnelMethod(value: string) {
    this._tunnelMethod = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }
}
export interface SourceNetsuiteEnterpriseConfigurationTunnelMethod {
  /**
  * No ssh tunnel needed to connect to database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#no_tunnel SourceNetsuiteEnterprise#no_tunnel}
  */
  readonly noTunnel?: SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel;
  /**
  * Connect through a jump server tunnel host using username and password authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#password_authentication SourceNetsuiteEnterprise#password_authentication}
  */
  readonly passwordAuthentication?: SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Connect through a jump server tunnel host using username and ssh key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#ssh_key_authentication SourceNetsuiteEnterprise#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication;
}

export function sourceNetsuiteEnterpriseConfigurationTunnelMethodToTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: sourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: sourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: sourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function sourceNetsuiteEnterpriseConfigurationTunnelMethodToHclTerraform(struct?: SourceNetsuiteEnterpriseConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: sourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: sourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: sourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceNetsuiteEnterpriseConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfigurationTunnelMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnel = this._noTunnel?.internalValue;
    }
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._sshKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyAuthentication = this._sshKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._sshKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = value.noTunnel;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._sshKeyAuthentication.internalValue = value.sshKeyAuthentication;
    }
  }

  // no_tunnel - computed: false, optional: true, required: false
  private _noTunnel = new SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodNoTunnel) {
    this._noTunnel.internalValue = value;
  }
  public resetNoTunnel() {
    this._noTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelInput() {
    return this._noTunnel.internalValue;
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // ssh_key_authentication - computed: false, optional: true, required: false
  private _sshKeyAuthentication = new SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: SourceNetsuiteEnterpriseConfigurationTunnelMethodSshKeyAuthentication) {
    this._sshKeyAuthentication.internalValue = value;
  }
  public resetSshKeyAuthentication() {
    this._sshKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyAuthenticationInput() {
    return this._sshKeyAuthentication.internalValue;
  }
}
export interface SourceNetsuiteEnterpriseConfiguration {
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#account_id SourceNetsuiteEnterprise#account_id}
  */
  readonly accountId: string;
  /**
  * Configure how to authenticate to Netsuite. Options include username/password or token-based authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#authentication_method SourceNetsuiteEnterprise#authentication_method}
  */
  readonly authenticationMethod: SourceNetsuiteEnterpriseConfigurationAuthenticationMethod;
  /**
  * When this feature is enabled, during schema discovery the connector will query each table or view individually to check access privileges and inaccessible tables, views, or columns therein will be removed. In large schemas, this might cause schema discovery to take too long, in which case it might be advisable to disable this feature. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#check_privileges SourceNetsuiteEnterprise#check_privileges}
  */
  readonly checkPrivileges?: boolean | cdktf.IResolvable;
  /**
  * How often (in seconds) a stream should checkpoint, when possible. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#checkpoint_target_interval_seconds SourceNetsuiteEnterprise#checkpoint_target_interval_seconds}
  */
  readonly checkpointTargetIntervalSeconds?: number;
  /**
  * Maximum number of concurrent queries to the database. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#concurrency SourceNetsuiteEnterprise#concurrency}
  */
  readonly concurrency?: number;
  /**
  * Configures how data is extracted from the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#cursor SourceNetsuiteEnterprise#cursor}
  */
  readonly cursor: SourceNetsuiteEnterpriseConfigurationCursor;
  /**
  * Hostname of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#host SourceNetsuiteEnterprise#host}
  */
  readonly host: string;
  /**
  * Additional properties to pass to the JDBC URL string when connecting to the database formatted as 'key=value' pairs separated by the symbol '&'. (example: key1=value1&key2=value2&key3=value3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#jdbc_url_params SourceNetsuiteEnterprise#jdbc_url_params}
  */
  readonly jdbcUrlParams?: string;
  /**
  * Port of the database. Default: 1708
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#port SourceNetsuiteEnterprise#port}
  */
  readonly port?: number;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#role_id SourceNetsuiteEnterprise#role_id}
  */
  readonly roleId: string;
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#tunnel_method SourceNetsuiteEnterprise#tunnel_method}
  */
  readonly tunnelMethod: SourceNetsuiteEnterpriseConfigurationTunnelMethod;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#username SourceNetsuiteEnterprise#username}
  */
  readonly username: string;
}

export function sourceNetsuiteEnterpriseConfigurationToTerraform(struct?: SourceNetsuiteEnterpriseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    authentication_method: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodToTerraform(struct!.authenticationMethod),
    check_privileges: cdktf.booleanToTerraform(struct!.checkPrivileges),
    checkpoint_target_interval_seconds: cdktf.numberToTerraform(struct!.checkpointTargetIntervalSeconds),
    concurrency: cdktf.numberToTerraform(struct!.concurrency),
    cursor: sourceNetsuiteEnterpriseConfigurationCursorToTerraform(struct!.cursor),
    host: cdktf.stringToTerraform(struct!.host),
    jdbc_url_params: cdktf.stringToTerraform(struct!.jdbcUrlParams),
    port: cdktf.numberToTerraform(struct!.port),
    role_id: cdktf.stringToTerraform(struct!.roleId),
    tunnel_method: sourceNetsuiteEnterpriseConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceNetsuiteEnterpriseConfigurationToHclTerraform(struct?: SourceNetsuiteEnterpriseConfiguration | cdktf.IResolvable): any {
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
    authentication_method: {
      value: sourceNetsuiteEnterpriseConfigurationAuthenticationMethodToHclTerraform(struct!.authenticationMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationAuthenticationMethod",
    },
    check_privileges: {
      value: cdktf.booleanToHclTerraform(struct!.checkPrivileges),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    checkpoint_target_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.checkpointTargetIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrency: {
      value: cdktf.numberToHclTerraform(struct!.concurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cursor: {
      value: sourceNetsuiteEnterpriseConfigurationCursorToHclTerraform(struct!.cursor),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationCursor",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jdbc_url_params: {
      value: cdktf.stringToHclTerraform(struct!.jdbcUrlParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    tunnel_method: {
      value: sourceNetsuiteEnterpriseConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceNetsuiteEnterpriseConfigurationTunnelMethod",
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

export class SourceNetsuiteEnterpriseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._authenticationMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationMethod = this._authenticationMethod?.internalValue;
    }
    if (this._checkPrivileges !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPrivileges = this._checkPrivileges;
    }
    if (this._checkpointTargetIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkpointTargetIntervalSeconds = this._checkpointTargetIntervalSeconds;
    }
    if (this._concurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrency = this._concurrency;
    }
    if (this._cursor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cursor = this._cursor?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._jdbcUrlParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcUrlParams = this._jdbcUrlParams;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._roleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleId = this._roleId;
    }
    if (this._tunnelMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._authenticationMethod.internalValue = undefined;
      this._checkPrivileges = undefined;
      this._checkpointTargetIntervalSeconds = undefined;
      this._concurrency = undefined;
      this._cursor.internalValue = undefined;
      this._host = undefined;
      this._jdbcUrlParams = undefined;
      this._port = undefined;
      this._roleId = undefined;
      this._tunnelMethod.internalValue = undefined;
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
      this._authenticationMethod.internalValue = value.authenticationMethod;
      this._checkPrivileges = value.checkPrivileges;
      this._checkpointTargetIntervalSeconds = value.checkpointTargetIntervalSeconds;
      this._concurrency = value.concurrency;
      this._cursor.internalValue = value.cursor;
      this._host = value.host;
      this._jdbcUrlParams = value.jdbcUrlParams;
      this._port = value.port;
      this._roleId = value.roleId;
      this._tunnelMethod.internalValue = value.tunnelMethod;
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

  // authentication_method - computed: false, optional: false, required: true
  private _authenticationMethod = new SourceNetsuiteEnterpriseConfigurationAuthenticationMethodOutputReference(this, "authentication_method");
  public get authenticationMethod() {
    return this._authenticationMethod;
  }
  public putAuthenticationMethod(value: SourceNetsuiteEnterpriseConfigurationAuthenticationMethod) {
    this._authenticationMethod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod.internalValue;
  }

  // check_privileges - computed: true, optional: true, required: false
  private _checkPrivileges?: boolean | cdktf.IResolvable; 
  public get checkPrivileges() {
    return this.getBooleanAttribute('check_privileges');
  }
  public set checkPrivileges(value: boolean | cdktf.IResolvable) {
    this._checkPrivileges = value;
  }
  public resetCheckPrivileges() {
    this._checkPrivileges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPrivilegesInput() {
    return this._checkPrivileges;
  }

  // checkpoint_target_interval_seconds - computed: true, optional: true, required: false
  private _checkpointTargetIntervalSeconds?: number; 
  public get checkpointTargetIntervalSeconds() {
    return this.getNumberAttribute('checkpoint_target_interval_seconds');
  }
  public set checkpointTargetIntervalSeconds(value: number) {
    this._checkpointTargetIntervalSeconds = value;
  }
  public resetCheckpointTargetIntervalSeconds() {
    this._checkpointTargetIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointTargetIntervalSecondsInput() {
    return this._checkpointTargetIntervalSeconds;
  }

  // concurrency - computed: true, optional: true, required: false
  private _concurrency?: number; 
  public get concurrency() {
    return this.getNumberAttribute('concurrency');
  }
  public set concurrency(value: number) {
    this._concurrency = value;
  }
  public resetConcurrency() {
    this._concurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyInput() {
    return this._concurrency;
  }

  // cursor - computed: false, optional: false, required: true
  private _cursor = new SourceNetsuiteEnterpriseConfigurationCursorOutputReference(this, "cursor");
  public get cursor() {
    return this._cursor;
  }
  public putCursor(value: SourceNetsuiteEnterpriseConfigurationCursor) {
    this._cursor.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // jdbc_url_params - computed: false, optional: true, required: false
  private _jdbcUrlParams?: string; 
  public get jdbcUrlParams() {
    return this.getStringAttribute('jdbc_url_params');
  }
  public set jdbcUrlParams(value: string) {
    this._jdbcUrlParams = value;
  }
  public resetJdbcUrlParams() {
    this._jdbcUrlParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUrlParamsInput() {
    return this._jdbcUrlParams;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // tunnel_method - computed: false, optional: false, required: true
  private _tunnelMethod = new SourceNetsuiteEnterpriseConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: SourceNetsuiteEnterpriseConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod.internalValue;
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
export interface SourceNetsuiteEnterpriseResourceAllocationDefault {
}

export function sourceNetsuiteEnterpriseResourceAllocationDefaultToTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceNetsuiteEnterpriseResourceAllocationDefaultToHclTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceNetsuiteEnterpriseResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirements {
}

export function sourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface SourceNetsuiteEnterpriseResourceAllocationJobSpecific {
}

export function sourceNetsuiteEnterpriseResourceAllocationJobSpecificToTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceNetsuiteEnterpriseResourceAllocationJobSpecificToHclTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceNetsuiteEnterpriseResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceNetsuiteEnterpriseResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new SourceNetsuiteEnterpriseResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceNetsuiteEnterpriseResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceNetsuiteEnterpriseResourceAllocationJobSpecificOutputReference {
    return new SourceNetsuiteEnterpriseResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceNetsuiteEnterpriseResourceAllocation {
}

export function sourceNetsuiteEnterpriseResourceAllocationToTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceNetsuiteEnterpriseResourceAllocationToHclTerraform(struct?: SourceNetsuiteEnterpriseResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceNetsuiteEnterpriseResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceNetsuiteEnterpriseResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceNetsuiteEnterpriseResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceNetsuiteEnterpriseResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceNetsuiteEnterpriseResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise airbyte_source_netsuite_enterprise}
*/
export class SourceNetsuiteEnterprise extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_netsuite_enterprise";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceNetsuiteEnterprise resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceNetsuiteEnterprise to import
  * @param importFromId The id of the existing SourceNetsuiteEnterprise that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceNetsuiteEnterprise to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_netsuite_enterprise", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_netsuite_enterprise airbyte_source_netsuite_enterprise} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceNetsuiteEnterpriseConfig
  */
  public constructor(scope: Construct, id: string, config: SourceNetsuiteEnterpriseConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_netsuite_enterprise',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceNetsuiteEnterpriseConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceNetsuiteEnterpriseConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
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

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new SourceNetsuiteEnterpriseResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: sourceNetsuiteEnterpriseConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceNetsuiteEnterpriseConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceNetsuiteEnterpriseConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
