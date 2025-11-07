// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name used in login screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#display_name Connection#display_name}
  */
  readonly displayName?: string;
  /**
  * IDs of the clients for which the connection is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#enabled_clients Connection#enabled_clients}
  */
  readonly enabledClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Indicates whether or not the connection is domain level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#is_domain_connection Connection#is_domain_connection}
  */
  readonly isDomainConnection?: boolean | cdktf.IResolvable;
  /**
  * Name of the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * Defines the realms for which the connection will be used (i.e., email domains). If not specified, the connection name is added as the realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#realms Connection#realms}
  */
  readonly realms?: string[];
  /**
  * Type of the connection, which indicates the identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#strategy Connection#strategy}
  */
  readonly strategy: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#strategy_version Connection#strategy_version}
  */
  readonly strategyVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#validation Connection#validation}
  */
  readonly validation?: { [key: string]: string };
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#options Connection#options}
  */
  readonly options?: ConnectionOptions;
}
export interface ConnectionOptionsGatewayAuthentication {
  /**
  * Audience claim for the HS256 token sent to gateway_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#audience Connection#audience}
  */
  readonly audience?: string;
  /**
  * Authentication method (default is bearer token)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#method Connection#method}
  */
  readonly method?: string;
  /**
  * Secret used to sign the HS256 token sent to gateway_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#secret Connection#secret}
  */
  readonly secret?: string;
  /**
  * Specifies whether or not the secret is base64 encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#secret_base64_encoded Connection#secret_base64_encoded}
  */
  readonly secretBase64Encoded?: boolean | cdktf.IResolvable;
  /**
  * Subject claim for the HS256 token sent to gateway_url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#subject Connection#subject}
  */
  readonly subject?: string;
}

export function connectionOptionsGatewayAuthenticationToTerraform(struct?: ConnectionOptionsGatewayAuthenticationOutputReference | ConnectionOptionsGatewayAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    method: cdktf.stringToTerraform(struct!.method),
    secret: cdktf.stringToTerraform(struct!.secret),
    secret_base64_encoded: cdktf.booleanToTerraform(struct!.secretBase64Encoded),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function connectionOptionsGatewayAuthenticationToHclTerraform(struct?: ConnectionOptionsGatewayAuthenticationOutputReference | ConnectionOptionsGatewayAuthentication): any {
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
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_base64_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.secretBase64Encoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class ConnectionOptionsGatewayAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsGatewayAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._secretBase64Encoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretBase64Encoded = this._secretBase64Encoded;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsGatewayAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._method = undefined;
      this._secret = undefined;
      this._secretBase64Encoded = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._method = value.method;
      this._secret = value.secret;
      this._secretBase64Encoded = value.secretBase64Encoded;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_base64_encoded - computed: false, optional: true, required: false
  private _secretBase64Encoded?: boolean | cdktf.IResolvable; 
  public get secretBase64Encoded() {
    return this.getBooleanAttribute('secret_base64_encoded');
  }
  public set secretBase64Encoded(value: boolean | cdktf.IResolvable) {
    this._secretBase64Encoded = value;
  }
  public resetSecretBase64Encoded() {
    this._secretBase64Encoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretBase64EncodedInput() {
    return this._secretBase64Encoded;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface ConnectionOptionsIdpInitiated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#client_authorize_query Connection#client_authorize_query}
  */
  readonly clientAuthorizeQuery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#client_protocol Connection#client_protocol}
  */
  readonly clientProtocol?: string;
}

export function connectionOptionsIdpInitiatedToTerraform(struct?: ConnectionOptionsIdpInitiatedOutputReference | ConnectionOptionsIdpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_authorize_query: cdktf.stringToTerraform(struct!.clientAuthorizeQuery),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_protocol: cdktf.stringToTerraform(struct!.clientProtocol),
  }
}


export function connectionOptionsIdpInitiatedToHclTerraform(struct?: ConnectionOptionsIdpInitiatedOutputReference | ConnectionOptionsIdpInitiated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_authorize_query: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthorizeQuery),
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
    client_protocol: {
      value: cdktf.stringToHclTerraform(struct!.clientProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsIdpInitiatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsIdpInitiated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuthorizeQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthorizeQuery = this._clientAuthorizeQuery;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientProtocol = this._clientProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsIdpInitiated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuthorizeQuery = undefined;
      this._clientId = undefined;
      this._clientProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuthorizeQuery = value.clientAuthorizeQuery;
      this._clientId = value.clientId;
      this._clientProtocol = value.clientProtocol;
    }
  }

  // client_authorize_query - computed: false, optional: true, required: false
  private _clientAuthorizeQuery?: string; 
  public get clientAuthorizeQuery() {
    return this.getStringAttribute('client_authorize_query');
  }
  public set clientAuthorizeQuery(value: string) {
    this._clientAuthorizeQuery = value;
  }
  public resetClientAuthorizeQuery() {
    this._clientAuthorizeQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthorizeQueryInput() {
    return this._clientAuthorizeQuery;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_protocol - computed: false, optional: true, required: false
  private _clientProtocol?: string; 
  public get clientProtocol() {
    return this.getStringAttribute('client_protocol');
  }
  public set clientProtocol(value: string) {
    this._clientProtocol = value;
  }
  public resetClientProtocol() {
    this._clientProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientProtocolInput() {
    return this._clientProtocol;
  }
}
export interface ConnectionOptionsMfa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#active Connection#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#return_enroll_settings Connection#return_enroll_settings}
  */
  readonly returnEnrollSettings?: boolean | cdktf.IResolvable;
}

export function connectionOptionsMfaToTerraform(struct?: ConnectionOptionsMfaOutputReference | ConnectionOptionsMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    return_enroll_settings: cdktf.booleanToTerraform(struct!.returnEnrollSettings),
  }
}


export function connectionOptionsMfaToHclTerraform(struct?: ConnectionOptionsMfaOutputReference | ConnectionOptionsMfa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    return_enroll_settings: {
      value: cdktf.booleanToHclTerraform(struct!.returnEnrollSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsMfaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsMfa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._returnEnrollSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnEnrollSettings = this._returnEnrollSettings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsMfa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._returnEnrollSettings = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._returnEnrollSettings = value.returnEnrollSettings;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // return_enroll_settings - computed: false, optional: true, required: false
  private _returnEnrollSettings?: boolean | cdktf.IResolvable; 
  public get returnEnrollSettings() {
    return this.getBooleanAttribute('return_enroll_settings');
  }
  public set returnEnrollSettings(value: boolean | cdktf.IResolvable) {
    this._returnEnrollSettings = value;
  }
  public resetReturnEnrollSettings() {
    this._returnEnrollSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnEnrollSettingsInput() {
    return this._returnEnrollSettings;
  }
}
export interface ConnectionOptionsPasswordComplexityOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#min_length Connection#min_length}
  */
  readonly minLength?: number;
}

export function connectionOptionsPasswordComplexityOptionsToTerraform(struct?: ConnectionOptionsPasswordComplexityOptionsOutputReference | ConnectionOptionsPasswordComplexityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_length: cdktf.numberToTerraform(struct!.minLength),
  }
}


export function connectionOptionsPasswordComplexityOptionsToHclTerraform(struct?: ConnectionOptionsPasswordComplexityOptionsOutputReference | ConnectionOptionsPasswordComplexityOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordComplexityOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordComplexityOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordComplexityOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minLength = value.minLength;
    }
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }
}
export interface ConnectionOptionsPasswordDictionary {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#dictionary Connection#dictionary}
  */
  readonly dictionary?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function connectionOptionsPasswordDictionaryToTerraform(struct?: ConnectionOptionsPasswordDictionaryOutputReference | ConnectionOptionsPasswordDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dictionary),
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function connectionOptionsPasswordDictionaryToHclTerraform(struct?: ConnectionOptionsPasswordDictionaryOutputReference | ConnectionOptionsPasswordDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dictionary),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionary !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dictionary = undefined;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dictionary = value.dictionary;
      this._enable = value.enable;
    }
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary?: string[]; 
  public get dictionary() {
    return cdktf.Fn.tolist(this.getListAttribute('dictionary'));
  }
  public set dictionary(value: string[]) {
    this._dictionary = value;
  }
  public resetDictionary() {
    this._dictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface ConnectionOptionsPasswordHistory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#size Connection#size}
  */
  readonly size?: number;
}

export function connectionOptionsPasswordHistoryToTerraform(struct?: ConnectionOptionsPasswordHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function connectionOptionsPasswordHistoryToHclTerraform(struct?: ConnectionOptionsPasswordHistory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConnectionOptionsPasswordHistory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordHistory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enable = undefined;
      this._size = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enable = value.enable;
      this._size = value.size;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}

export class ConnectionOptionsPasswordHistoryList extends cdktf.ComplexList {
  public internalValue? : ConnectionOptionsPasswordHistory[] | cdktf.IResolvable

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
  public get(index: number): ConnectionOptionsPasswordHistoryOutputReference {
    return new ConnectionOptionsPasswordHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConnectionOptionsPasswordNoPersonalInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#enable Connection#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
}

export function connectionOptionsPasswordNoPersonalInfoToTerraform(struct?: ConnectionOptionsPasswordNoPersonalInfoOutputReference | ConnectionOptionsPasswordNoPersonalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
  }
}


export function connectionOptionsPasswordNoPersonalInfoToHclTerraform(struct?: ConnectionOptionsPasswordNoPersonalInfoOutputReference | ConnectionOptionsPasswordNoPersonalInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsPasswordNoPersonalInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsPasswordNoPersonalInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsPasswordNoPersonalInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }
}
export interface ConnectionOptionsTotp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#length Connection#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#time_step Connection#time_step}
  */
  readonly timeStep?: number;
}

export function connectionOptionsTotpToTerraform(struct?: ConnectionOptionsTotpOutputReference | ConnectionOptionsTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    time_step: cdktf.numberToTerraform(struct!.timeStep),
  }
}


export function connectionOptionsTotpToHclTerraform(struct?: ConnectionOptionsTotpOutputReference | ConnectionOptionsTotp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_step: {
      value: cdktf.numberToHclTerraform(struct!.timeStep),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsTotpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsTotp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._timeStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStep = this._timeStep;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsTotp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._timeStep = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._timeStep = value.timeStep;
    }
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // time_step - computed: false, optional: true, required: false
  private _timeStep?: number; 
  public get timeStep() {
    return this.getNumberAttribute('time_step');
  }
  public set timeStep(value: number) {
    this._timeStep = value;
  }
  public resetTimeStep() {
    this._timeStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStepInput() {
    return this._timeStep;
  }
}
export interface ConnectionOptionsValidationUsername {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#max Connection#max}
  */
  readonly max?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#min Connection#min}
  */
  readonly min?: number;
}

export function connectionOptionsValidationUsernameToTerraform(struct?: ConnectionOptionsValidationUsernameOutputReference | ConnectionOptionsValidationUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max: cdktf.numberToTerraform(struct!.max),
    min: cdktf.numberToTerraform(struct!.min),
  }
}


export function connectionOptionsValidationUsernameToHclTerraform(struct?: ConnectionOptionsValidationUsernameOutputReference | ConnectionOptionsValidationUsername): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max: {
      value: cdktf.numberToHclTerraform(struct!.max),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min: {
      value: cdktf.numberToHclTerraform(struct!.min),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsValidationUsernameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsValidationUsername | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._max !== undefined) {
      hasAnyValues = true;
      internalValueResult.max = this._max;
    }
    if (this._min !== undefined) {
      hasAnyValues = true;
      internalValueResult.min = this._min;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsValidationUsername | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._max = undefined;
      this._min = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._max = value.max;
      this._min = value.min;
    }
  }

  // max - computed: false, optional: true, required: false
  private _max?: number; 
  public get max() {
    return this.getNumberAttribute('max');
  }
  public set max(value: number) {
    this._max = value;
  }
  public resetMax() {
    this._max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInput() {
    return this._max;
  }

  // min - computed: false, optional: true, required: false
  private _min?: number; 
  public get min() {
    return this.getNumberAttribute('min');
  }
  public set min(value: number) {
    this._min = value;
  }
  public resetMin() {
    this._min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInput() {
    return this._min;
  }
}
export interface ConnectionOptionsValidation {
  /**
  * username block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#username Connection#username}
  */
  readonly username?: ConnectionOptionsValidationUsername;
}

export function connectionOptionsValidationToTerraform(struct?: ConnectionOptionsValidationOutputReference | ConnectionOptionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: connectionOptionsValidationUsernameToTerraform(struct!.username),
  }
}


export function connectionOptionsValidationToHclTerraform(struct?: ConnectionOptionsValidationOutputReference | ConnectionOptionsValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: connectionOptionsValidationUsernameToHclTerraform(struct!.username),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsValidationUsernameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptionsValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptionsValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username.internalValue = value.username;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username = new ConnectionOptionsValidationUsernameOutputReference(this, "username");
  public get username() {
    return this._username;
  }
  public putUsername(value: ConnectionOptionsValidationUsername) {
    this._username.internalValue = value;
  }
  public resetUsername() {
    this._username.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username.internalValue;
  }
}
export interface ConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#adfs_server Connection#adfs_server}
  */
  readonly adfsServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#allowed_audiences Connection#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#api_enable_users Connection#api_enable_users}
  */
  readonly apiEnableUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#app_domain Connection#app_domain}
  */
  readonly appDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#app_id Connection#app_id}
  */
  readonly appId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#authorization_endpoint Connection#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Indicates whether or not to enable brute force protection, which will limit the number of signups and failed logins from a suspicious IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#brute_force_protection Connection#brute_force_protection}
  */
  readonly bruteForceProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#client_id Connection#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#client_secret Connection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#community_base_url Connection#community_base_url}
  */
  readonly communityBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#configuration Connection#configuration}
  */
  readonly configuration?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#custom_scripts Connection#custom_scripts}
  */
  readonly customScripts?: { [key: string]: string };
  /**
  * When enabled, additional debug information will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#debug Connection#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Sign Request Algorithm Digest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#digest_algorithm Connection#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#disable_cache Connection#disable_cache}
  */
  readonly disableCache?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether or not to allow user sign-ups to your application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#disable_signup Connection#disable_signup}
  */
  readonly disableSignup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#discovery_url Connection#discovery_url}
  */
  readonly discoveryUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#domain Connection#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#domain_aliases Connection#domain_aliases}
  */
  readonly domainAliases?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#enabled_database_customization Connection#enabled_database_customization}
  */
  readonly enabledDatabaseCustomization?: boolean | cdktf.IResolvable;
  /**
  * Custom Entity ID for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#entity_id Connection#entity_id}
  */
  readonly entityId?: string;
  /**
  * If you're configuring a SAML enterprise connection for a non-standard PingFederate Server, you must update the attribute mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#fields_map Connection#fields_map}
  */
  readonly fieldsMap?: { [key: string]: string };
  /**
  * Specifies whether or not request info should be forwarded to sms gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#forward_request_info Connection#forward_request_info}
  */
  readonly forwardRequestInfo?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#from Connection#from}
  */
  readonly from?: string;
  /**
  * Defines a custom sms gateway to use instead of twilio
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#gateway_url Connection#gateway_url}
  */
  readonly gatewayUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#icon_url Connection#icon_url}
  */
  readonly iconUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#identity_api Connection#identity_api}
  */
  readonly identityApi?: string;
  /**
  * Indicates whether or not you have a legacy user store and want to gradually migrate those users to the Auth0 user store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#import_mode Connection#import_mode}
  */
  readonly importMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#ips Connection#ips}
  */
  readonly ips?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#issuer Connection#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#jwks_uri Connection#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Apple Key ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#key_id Connection#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#max_groups_to_retrieve Connection#max_groups_to_retrieve}
  */
  readonly maxGroupsToRetrieve?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#messaging_service_sid Connection#messaging_service_sid}
  */
  readonly messagingServiceSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#name Connection#name}
  */
  readonly name?: string;
  /**
  * If there are user fields that should not be stored in Auth0 databases due to privacy reasons, you can add them to the DenyList here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#non_persistent_attrs Connection#non_persistent_attrs}
  */
  readonly nonPersistentAttrs?: string[];
  /**
  * Indicates level of password strength to enforce during authentication. A strong password policy will make it difficult, if not improbable, for someone to guess a password through either manual or automated means. Options include `none`, `low`, `fair`, `good`, `excellent`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#password_policy Connection#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * The SAML Response Binding: how the SAML token is received by Auth0 from IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#protocol_binding Connection#protocol_binding}
  */
  readonly protocolBinding?: string;
  /**
  * Defines the custom sms_gateway provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#provider Connection#provider}
  */
  readonly provider?: string;
  /**
  * Template that formats the SAML request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#request_template Connection#request_template}
  */
  readonly requestTemplate?: string;
  /**
  * Indicates whether or not the user is required to provide a username in addition to an email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#requires_username Connection#requires_username}
  */
  readonly requiresUsername?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#scopes Connection#scopes}
  */
  readonly scopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#scripts Connection#scripts}
  */
  readonly scripts?: { [key: string]: string };
  /**
  * Determines whether the 'name', 'given_name', 'family_name', 'nickname', and 'picture' attributes can be independently updated when using an external IdP. Possible values are 'on_each_login' (default value, it configures the connection to automatically update the root attributes from the external IdP with each user login. When this setting is used, root attributes cannot be independently updated), 'on_first_login' (configures the connection to only set the root attributes on first login, allowing them to be independently updated thereafter)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#set_user_root_attributes Connection#set_user_root_attributes}
  */
  readonly setUserRootAttributes?: string;
  /**
  * Choose how Auth0 sets the email_verified field in the user profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#should_trust_email_verified_connection Connection#should_trust_email_verified_connection}
  */
  readonly shouldTrustEmailVerifiedConnection?: string;
  /**
  * SAML single login URL for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#sign_in_endpoint Connection#sign_in_endpoint}
  */
  readonly signInEndpoint?: string;
  /**
  * SAML single logout URL for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#sign_out_endpoint Connection#sign_out_endpoint}
  */
  readonly signOutEndpoint?: string;
  /**
  * When enabled, the SAML authentication request will be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#sign_saml_request Connection#sign_saml_request}
  */
  readonly signSamlRequest?: boolean | cdktf.IResolvable;
  /**
  * Sign Request Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#signature_algorithm Connection#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * X.509 signing certificate (encoded in PEM or CER) you retrieved from the IdP, Base64-encoded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#signing_cert Connection#signing_cert}
  */
  readonly signingCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#strategy_version Connection#strategy_version}
  */
  readonly strategyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#subject Connection#subject}
  */
  readonly subject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#syntax Connection#syntax}
  */
  readonly syntax?: string;
  /**
  * Apple Team ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#team_id Connection#team_id}
  */
  readonly teamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#template Connection#template}
  */
  readonly template?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#tenant_domain Connection#tenant_domain}
  */
  readonly tenantDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#token_endpoint Connection#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#twilio_sid Connection#twilio_sid}
  */
  readonly twilioSid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#twilio_token Connection#twilio_token}
  */
  readonly twilioToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#type Connection#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#use_cert_auth Connection#use_cert_auth}
  */
  readonly useCertAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#use_kerberos Connection#use_kerberos}
  */
  readonly useKerberos?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#use_wsfed Connection#use_wsfed}
  */
  readonly useWsfed?: boolean | cdktf.IResolvable;
  /**
  * Attribute in the SAML token that will be mapped to the user_id property in Auth0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#user_id_attribute Connection#user_id_attribute}
  */
  readonly userIdAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#userinfo_endpoint Connection#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#waad_common_endpoint Connection#waad_common_endpoint}
  */
  readonly waadCommonEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#waad_protocol Connection#waad_protocol}
  */
  readonly waadProtocol?: string;
  /**
  * gateway_authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#gateway_authentication Connection#gateway_authentication}
  */
  readonly gatewayAuthentication?: ConnectionOptionsGatewayAuthentication;
  /**
  * idp_initiated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#idp_initiated Connection#idp_initiated}
  */
  readonly idpInitiated?: ConnectionOptionsIdpInitiated;
  /**
  * mfa block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#mfa Connection#mfa}
  */
  readonly mfa?: ConnectionOptionsMfa;
  /**
  * password_complexity_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#password_complexity_options Connection#password_complexity_options}
  */
  readonly passwordComplexityOptions?: ConnectionOptionsPasswordComplexityOptions;
  /**
  * password_dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#password_dictionary Connection#password_dictionary}
  */
  readonly passwordDictionary?: ConnectionOptionsPasswordDictionary;
  /**
  * password_history block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#password_history Connection#password_history}
  */
  readonly passwordHistory?: ConnectionOptionsPasswordHistory[] | cdktf.IResolvable;
  /**
  * password_no_personal_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#password_no_personal_info Connection#password_no_personal_info}
  */
  readonly passwordNoPersonalInfo?: ConnectionOptionsPasswordNoPersonalInfo;
  /**
  * totp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#totp Connection#totp}
  */
  readonly totp?: ConnectionOptionsTotp;
  /**
  * validation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#validation Connection#validation}
  */
  readonly validation?: ConnectionOptionsValidation;
}

export function connectionOptionsToTerraform(struct?: ConnectionOptionsOutputReference | ConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adfs_server: cdktf.stringToTerraform(struct!.adfsServer),
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    api_enable_users: cdktf.booleanToTerraform(struct!.apiEnableUsers),
    app_domain: cdktf.stringToTerraform(struct!.appDomain),
    app_id: cdktf.stringToTerraform(struct!.appId),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    brute_force_protection: cdktf.booleanToTerraform(struct!.bruteForceProtection),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    community_base_url: cdktf.stringToTerraform(struct!.communityBaseUrl),
    configuration: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configuration),
    custom_scripts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customScripts),
    debug: cdktf.booleanToTerraform(struct!.debug),
    digest_algorithm: cdktf.stringToTerraform(struct!.digestAlgorithm),
    disable_cache: cdktf.booleanToTerraform(struct!.disableCache),
    disable_signup: cdktf.booleanToTerraform(struct!.disableSignup),
    discovery_url: cdktf.stringToTerraform(struct!.discoveryUrl),
    domain: cdktf.stringToTerraform(struct!.domain),
    domain_aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainAliases),
    enabled_database_customization: cdktf.booleanToTerraform(struct!.enabledDatabaseCustomization),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    fields_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldsMap),
    forward_request_info: cdktf.booleanToTerraform(struct!.forwardRequestInfo),
    from: cdktf.stringToTerraform(struct!.from),
    gateway_url: cdktf.stringToTerraform(struct!.gatewayUrl),
    icon_url: cdktf.stringToTerraform(struct!.iconUrl),
    identity_api: cdktf.stringToTerraform(struct!.identityApi),
    import_mode: cdktf.booleanToTerraform(struct!.importMode),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    jwks_uri: cdktf.stringToTerraform(struct!.jwksUri),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    max_groups_to_retrieve: cdktf.stringToTerraform(struct!.maxGroupsToRetrieve),
    messaging_service_sid: cdktf.stringToTerraform(struct!.messagingServiceSid),
    name: cdktf.stringToTerraform(struct!.name),
    non_persistent_attrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonPersistentAttrs),
    password_policy: cdktf.stringToTerraform(struct!.passwordPolicy),
    protocol_binding: cdktf.stringToTerraform(struct!.protocolBinding),
    provider: cdktf.stringToTerraform(struct!.provider),
    request_template: cdktf.stringToTerraform(struct!.requestTemplate),
    requires_username: cdktf.booleanToTerraform(struct!.requiresUsername),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    scripts: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.scripts),
    set_user_root_attributes: cdktf.stringToTerraform(struct!.setUserRootAttributes),
    should_trust_email_verified_connection: cdktf.stringToTerraform(struct!.shouldTrustEmailVerifiedConnection),
    sign_in_endpoint: cdktf.stringToTerraform(struct!.signInEndpoint),
    sign_out_endpoint: cdktf.stringToTerraform(struct!.signOutEndpoint),
    sign_saml_request: cdktf.booleanToTerraform(struct!.signSamlRequest),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
    signing_cert: cdktf.stringToTerraform(struct!.signingCert),
    strategy_version: cdktf.numberToTerraform(struct!.strategyVersion),
    subject: cdktf.stringToTerraform(struct!.subject),
    syntax: cdktf.stringToTerraform(struct!.syntax),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    template: cdktf.stringToTerraform(struct!.template),
    tenant_domain: cdktf.stringToTerraform(struct!.tenantDomain),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    twilio_sid: cdktf.stringToTerraform(struct!.twilioSid),
    twilio_token: cdktf.stringToTerraform(struct!.twilioToken),
    type: cdktf.stringToTerraform(struct!.type),
    use_cert_auth: cdktf.booleanToTerraform(struct!.useCertAuth),
    use_kerberos: cdktf.booleanToTerraform(struct!.useKerberos),
    use_wsfed: cdktf.booleanToTerraform(struct!.useWsfed),
    user_id_attribute: cdktf.stringToTerraform(struct!.userIdAttribute),
    userinfo_endpoint: cdktf.stringToTerraform(struct!.userinfoEndpoint),
    waad_common_endpoint: cdktf.booleanToTerraform(struct!.waadCommonEndpoint),
    waad_protocol: cdktf.stringToTerraform(struct!.waadProtocol),
    gateway_authentication: connectionOptionsGatewayAuthenticationToTerraform(struct!.gatewayAuthentication),
    idp_initiated: connectionOptionsIdpInitiatedToTerraform(struct!.idpInitiated),
    mfa: connectionOptionsMfaToTerraform(struct!.mfa),
    password_complexity_options: connectionOptionsPasswordComplexityOptionsToTerraform(struct!.passwordComplexityOptions),
    password_dictionary: connectionOptionsPasswordDictionaryToTerraform(struct!.passwordDictionary),
    password_history: cdktf.listMapper(connectionOptionsPasswordHistoryToTerraform, true)(struct!.passwordHistory),
    password_no_personal_info: connectionOptionsPasswordNoPersonalInfoToTerraform(struct!.passwordNoPersonalInfo),
    totp: connectionOptionsTotpToTerraform(struct!.totp),
    validation: connectionOptionsValidationToTerraform(struct!.validation),
  }
}


export function connectionOptionsToHclTerraform(struct?: ConnectionOptionsOutputReference | ConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adfs_server: {
      value: cdktf.stringToHclTerraform(struct!.adfsServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    api_enable_users: {
      value: cdktf.booleanToHclTerraform(struct!.apiEnableUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_domain: {
      value: cdktf.stringToHclTerraform(struct!.appDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brute_force_protection: {
      value: cdktf.booleanToHclTerraform(struct!.bruteForceProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    community_base_url: {
      value: cdktf.stringToHclTerraform(struct!.communityBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configuration),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_scripts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customScripts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    digest_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.digestAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_cache: {
      value: cdktf.booleanToHclTerraform(struct!.disableCache),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_signup: {
      value: cdktf.booleanToHclTerraform(struct!.disableSignup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_url: {
      value: cdktf.stringToHclTerraform(struct!.discoveryUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_aliases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainAliases),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled_database_customization: {
      value: cdktf.booleanToHclTerraform(struct!.enabledDatabaseCustomization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldsMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forward_request_info: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_url: {
      value: cdktf.stringToHclTerraform(struct!.gatewayUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_url: {
      value: cdktf.stringToHclTerraform(struct!.iconUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_api: {
      value: cdktf.stringToHclTerraform(struct!.identityApi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    import_mode: {
      value: cdktf.booleanToHclTerraform(struct!.importMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.jwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_groups_to_retrieve: {
      value: cdktf.stringToHclTerraform(struct!.maxGroupsToRetrieve),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    messaging_service_sid: {
      value: cdktf.stringToHclTerraform(struct!.messagingServiceSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_persistent_attrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonPersistentAttrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    password_policy: {
      value: cdktf.stringToHclTerraform(struct!.passwordPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_binding: {
      value: cdktf.stringToHclTerraform(struct!.protocolBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_template: {
      value: cdktf.stringToHclTerraform(struct!.requestTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requires_username: {
      value: cdktf.booleanToHclTerraform(struct!.requiresUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scripts: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.scripts),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set_user_root_attributes: {
      value: cdktf.stringToHclTerraform(struct!.setUserRootAttributes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_trust_email_verified_connection: {
      value: cdktf.stringToHclTerraform(struct!.shouldTrustEmailVerifiedConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_in_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.signInEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_out_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.signOutEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_saml_request: {
      value: cdktf.booleanToHclTerraform(struct!.signSamlRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_cert: {
      value: cdktf.stringToHclTerraform(struct!.signingCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy_version: {
      value: cdktf.numberToHclTerraform(struct!.strategyVersion),
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
    syntax: {
      value: cdktf.stringToHclTerraform(struct!.syntax),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_domain: {
      value: cdktf.stringToHclTerraform(struct!.tenantDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_sid: {
      value: cdktf.stringToHclTerraform(struct!.twilioSid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    twilio_token: {
      value: cdktf.stringToHclTerraform(struct!.twilioToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cert_auth: {
      value: cdktf.booleanToHclTerraform(struct!.useCertAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_kerberos: {
      value: cdktf.booleanToHclTerraform(struct!.useKerberos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_wsfed: {
      value: cdktf.booleanToHclTerraform(struct!.useWsfed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_id_attribute: {
      value: cdktf.stringToHclTerraform(struct!.userIdAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userinfo_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userinfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waad_common_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.waadCommonEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    waad_protocol: {
      value: cdktf.stringToHclTerraform(struct!.waadProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_authentication: {
      value: connectionOptionsGatewayAuthenticationToHclTerraform(struct!.gatewayAuthentication),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsGatewayAuthenticationList",
    },
    idp_initiated: {
      value: connectionOptionsIdpInitiatedToHclTerraform(struct!.idpInitiated),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsIdpInitiatedList",
    },
    mfa: {
      value: connectionOptionsMfaToHclTerraform(struct!.mfa),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsMfaList",
    },
    password_complexity_options: {
      value: connectionOptionsPasswordComplexityOptionsToHclTerraform(struct!.passwordComplexityOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordComplexityOptionsList",
    },
    password_dictionary: {
      value: connectionOptionsPasswordDictionaryToHclTerraform(struct!.passwordDictionary),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordDictionaryList",
    },
    password_history: {
      value: cdktf.listMapperHcl(connectionOptionsPasswordHistoryToHclTerraform, true)(struct!.passwordHistory),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordHistoryList",
    },
    password_no_personal_info: {
      value: connectionOptionsPasswordNoPersonalInfoToHclTerraform(struct!.passwordNoPersonalInfo),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsPasswordNoPersonalInfoList",
    },
    totp: {
      value: connectionOptionsTotpToHclTerraform(struct!.totp),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsTotpList",
    },
    validation: {
      value: connectionOptionsValidationToHclTerraform(struct!.validation),
      isBlock: true,
      type: "list",
      storageClassType: "ConnectionOptionsValidationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adfsServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.adfsServer = this._adfsServer;
    }
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._apiEnableUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEnableUsers = this._apiEnableUsers;
    }
    if (this._appDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.appDomain = this._appDomain;
    }
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._bruteForceProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceProtection = this._bruteForceProtection;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._communityBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.communityBaseUrl = this._communityBaseUrl;
    }
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._customScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.customScripts = this._customScripts;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._digestAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.digestAlgorithm = this._digestAlgorithm;
    }
    if (this._disableCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableCache = this._disableCache;
    }
    if (this._disableSignup !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSignup = this._disableSignup;
    }
    if (this._discoveryUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryUrl = this._discoveryUrl;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._domainAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainAliases = this._domainAliases;
    }
    if (this._enabledDatabaseCustomization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledDatabaseCustomization = this._enabledDatabaseCustomization;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._fieldsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsMap = this._fieldsMap;
    }
    if (this._forwardRequestInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestInfo = this._forwardRequestInfo;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._gatewayUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUrl = this._gatewayUrl;
    }
    if (this._iconUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUrl = this._iconUrl;
    }
    if (this._identityApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityApi = this._identityApi;
    }
    if (this._importMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.importMode = this._importMode;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._jwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUri = this._jwksUri;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._maxGroupsToRetrieve !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxGroupsToRetrieve = this._maxGroupsToRetrieve;
    }
    if (this._messagingServiceSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagingServiceSid = this._messagingServiceSid;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nonPersistentAttrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPersistentAttrs = this._nonPersistentAttrs;
    }
    if (this._passwordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordPolicy = this._passwordPolicy;
    }
    if (this._protocolBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolBinding = this._protocolBinding;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._requestTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTemplate = this._requestTemplate;
    }
    if (this._requiresUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresUsername = this._requiresUsername;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._scripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.scripts = this._scripts;
    }
    if (this._setUserRootAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.setUserRootAttributes = this._setUserRootAttributes;
    }
    if (this._shouldTrustEmailVerifiedConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldTrustEmailVerifiedConnection = this._shouldTrustEmailVerifiedConnection;
    }
    if (this._signInEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInEndpoint = this._signInEndpoint;
    }
    if (this._signOutEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.signOutEndpoint = this._signOutEndpoint;
    }
    if (this._signSamlRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signSamlRequest = this._signSamlRequest;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    if (this._signingCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCert = this._signingCert;
    }
    if (this._strategyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategyVersion = this._strategyVersion;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._syntax !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntax = this._syntax;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._tenantDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantDomain = this._tenantDomain;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._twilioSid !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioSid = this._twilioSid;
    }
    if (this._twilioToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.twilioToken = this._twilioToken;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useCertAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCertAuth = this._useCertAuth;
    }
    if (this._useKerberos !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKerberos = this._useKerberos;
    }
    if (this._useWsfed !== undefined) {
      hasAnyValues = true;
      internalValueResult.useWsfed = this._useWsfed;
    }
    if (this._userIdAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdAttribute = this._userIdAttribute;
    }
    if (this._userinfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userinfoEndpoint = this._userinfoEndpoint;
    }
    if (this._waadCommonEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.waadCommonEndpoint = this._waadCommonEndpoint;
    }
    if (this._waadProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.waadProtocol = this._waadProtocol;
    }
    if (this._gatewayAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAuthentication = this._gatewayAuthentication?.internalValue;
    }
    if (this._idpInitiated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpInitiated = this._idpInitiated?.internalValue;
    }
    if (this._mfa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfa = this._mfa?.internalValue;
    }
    if (this._passwordComplexityOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordComplexityOptions = this._passwordComplexityOptions?.internalValue;
    }
    if (this._passwordDictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordDictionary = this._passwordDictionary?.internalValue;
    }
    if (this._passwordHistory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordHistory = this._passwordHistory?.internalValue;
    }
    if (this._passwordNoPersonalInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordNoPersonalInfo = this._passwordNoPersonalInfo?.internalValue;
    }
    if (this._totp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totp = this._totp?.internalValue;
    }
    if (this._validation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validation = this._validation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adfsServer = undefined;
      this._allowedAudiences = undefined;
      this._apiEnableUsers = undefined;
      this._appDomain = undefined;
      this._appId = undefined;
      this._authorizationEndpoint = undefined;
      this._bruteForceProtection = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._communityBaseUrl = undefined;
      this._configuration = undefined;
      this._customScripts = undefined;
      this._debug = undefined;
      this._digestAlgorithm = undefined;
      this._disableCache = undefined;
      this._disableSignup = undefined;
      this._discoveryUrl = undefined;
      this._domain = undefined;
      this._domainAliases = undefined;
      this._enabledDatabaseCustomization = undefined;
      this._entityId = undefined;
      this._fieldsMap = undefined;
      this._forwardRequestInfo = undefined;
      this._from = undefined;
      this._gatewayUrl = undefined;
      this._iconUrl = undefined;
      this._identityApi = undefined;
      this._importMode = undefined;
      this._ips = undefined;
      this._issuer = undefined;
      this._jwksUri = undefined;
      this._keyId = undefined;
      this._maxGroupsToRetrieve = undefined;
      this._messagingServiceSid = undefined;
      this._name = undefined;
      this._nonPersistentAttrs = undefined;
      this._passwordPolicy = undefined;
      this._protocolBinding = undefined;
      this._provider = undefined;
      this._requestTemplate = undefined;
      this._requiresUsername = undefined;
      this._scopes = undefined;
      this._scripts = undefined;
      this._setUserRootAttributes = undefined;
      this._shouldTrustEmailVerifiedConnection = undefined;
      this._signInEndpoint = undefined;
      this._signOutEndpoint = undefined;
      this._signSamlRequest = undefined;
      this._signatureAlgorithm = undefined;
      this._signingCert = undefined;
      this._strategyVersion = undefined;
      this._subject = undefined;
      this._syntax = undefined;
      this._teamId = undefined;
      this._template = undefined;
      this._tenantDomain = undefined;
      this._tokenEndpoint = undefined;
      this._twilioSid = undefined;
      this._twilioToken = undefined;
      this._type = undefined;
      this._useCertAuth = undefined;
      this._useKerberos = undefined;
      this._useWsfed = undefined;
      this._userIdAttribute = undefined;
      this._userinfoEndpoint = undefined;
      this._waadCommonEndpoint = undefined;
      this._waadProtocol = undefined;
      this._gatewayAuthentication.internalValue = undefined;
      this._idpInitiated.internalValue = undefined;
      this._mfa.internalValue = undefined;
      this._passwordComplexityOptions.internalValue = undefined;
      this._passwordDictionary.internalValue = undefined;
      this._passwordHistory.internalValue = undefined;
      this._passwordNoPersonalInfo.internalValue = undefined;
      this._totp.internalValue = undefined;
      this._validation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adfsServer = value.adfsServer;
      this._allowedAudiences = value.allowedAudiences;
      this._apiEnableUsers = value.apiEnableUsers;
      this._appDomain = value.appDomain;
      this._appId = value.appId;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._bruteForceProtection = value.bruteForceProtection;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._communityBaseUrl = value.communityBaseUrl;
      this._configuration = value.configuration;
      this._customScripts = value.customScripts;
      this._debug = value.debug;
      this._digestAlgorithm = value.digestAlgorithm;
      this._disableCache = value.disableCache;
      this._disableSignup = value.disableSignup;
      this._discoveryUrl = value.discoveryUrl;
      this._domain = value.domain;
      this._domainAliases = value.domainAliases;
      this._enabledDatabaseCustomization = value.enabledDatabaseCustomization;
      this._entityId = value.entityId;
      this._fieldsMap = value.fieldsMap;
      this._forwardRequestInfo = value.forwardRequestInfo;
      this._from = value.from;
      this._gatewayUrl = value.gatewayUrl;
      this._iconUrl = value.iconUrl;
      this._identityApi = value.identityApi;
      this._importMode = value.importMode;
      this._ips = value.ips;
      this._issuer = value.issuer;
      this._jwksUri = value.jwksUri;
      this._keyId = value.keyId;
      this._maxGroupsToRetrieve = value.maxGroupsToRetrieve;
      this._messagingServiceSid = value.messagingServiceSid;
      this._name = value.name;
      this._nonPersistentAttrs = value.nonPersistentAttrs;
      this._passwordPolicy = value.passwordPolicy;
      this._protocolBinding = value.protocolBinding;
      this._provider = value.provider;
      this._requestTemplate = value.requestTemplate;
      this._requiresUsername = value.requiresUsername;
      this._scopes = value.scopes;
      this._scripts = value.scripts;
      this._setUserRootAttributes = value.setUserRootAttributes;
      this._shouldTrustEmailVerifiedConnection = value.shouldTrustEmailVerifiedConnection;
      this._signInEndpoint = value.signInEndpoint;
      this._signOutEndpoint = value.signOutEndpoint;
      this._signSamlRequest = value.signSamlRequest;
      this._signatureAlgorithm = value.signatureAlgorithm;
      this._signingCert = value.signingCert;
      this._strategyVersion = value.strategyVersion;
      this._subject = value.subject;
      this._syntax = value.syntax;
      this._teamId = value.teamId;
      this._template = value.template;
      this._tenantDomain = value.tenantDomain;
      this._tokenEndpoint = value.tokenEndpoint;
      this._twilioSid = value.twilioSid;
      this._twilioToken = value.twilioToken;
      this._type = value.type;
      this._useCertAuth = value.useCertAuth;
      this._useKerberos = value.useKerberos;
      this._useWsfed = value.useWsfed;
      this._userIdAttribute = value.userIdAttribute;
      this._userinfoEndpoint = value.userinfoEndpoint;
      this._waadCommonEndpoint = value.waadCommonEndpoint;
      this._waadProtocol = value.waadProtocol;
      this._gatewayAuthentication.internalValue = value.gatewayAuthentication;
      this._idpInitiated.internalValue = value.idpInitiated;
      this._mfa.internalValue = value.mfa;
      this._passwordComplexityOptions.internalValue = value.passwordComplexityOptions;
      this._passwordDictionary.internalValue = value.passwordDictionary;
      this._passwordHistory.internalValue = value.passwordHistory;
      this._passwordNoPersonalInfo.internalValue = value.passwordNoPersonalInfo;
      this._totp.internalValue = value.totp;
      this._validation.internalValue = value.validation;
    }
  }

  // adfs_server - computed: false, optional: true, required: false
  private _adfsServer?: string; 
  public get adfsServer() {
    return this.getStringAttribute('adfs_server');
  }
  public set adfsServer(value: string) {
    this._adfsServer = value;
  }
  public resetAdfsServer() {
    this._adfsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adfsServerInput() {
    return this._adfsServer;
  }

  // allowed_audiences - computed: false, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_audiences'));
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // api_enable_users - computed: false, optional: true, required: false
  private _apiEnableUsers?: boolean | cdktf.IResolvable; 
  public get apiEnableUsers() {
    return this.getBooleanAttribute('api_enable_users');
  }
  public set apiEnableUsers(value: boolean | cdktf.IResolvable) {
    this._apiEnableUsers = value;
  }
  public resetApiEnableUsers() {
    this._apiEnableUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnableUsersInput() {
    return this._apiEnableUsers;
  }

  // app_domain - computed: false, optional: true, required: false
  private _appDomain?: string; 
  public get appDomain() {
    return this.getStringAttribute('app_domain');
  }
  public set appDomain(value: string) {
    this._appDomain = value;
  }
  public resetAppDomain() {
    this._appDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDomainInput() {
    return this._appDomain;
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // brute_force_protection - computed: false, optional: true, required: false
  private _bruteForceProtection?: boolean | cdktf.IResolvable; 
  public get bruteForceProtection() {
    return this.getBooleanAttribute('brute_force_protection');
  }
  public set bruteForceProtection(value: boolean | cdktf.IResolvable) {
    this._bruteForceProtection = value;
  }
  public resetBruteForceProtection() {
    this._bruteForceProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceProtectionInput() {
    return this._bruteForceProtection;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // community_base_url - computed: false, optional: true, required: false
  private _communityBaseUrl?: string; 
  public get communityBaseUrl() {
    return this.getStringAttribute('community_base_url');
  }
  public set communityBaseUrl(value: string) {
    this._communityBaseUrl = value;
  }
  public resetCommunityBaseUrl() {
    this._communityBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityBaseUrlInput() {
    return this._communityBaseUrl;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: { [key: string]: string }; 
  public get configuration() {
    return this.getStringMapAttribute('configuration');
  }
  public set configuration(value: { [key: string]: string }) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // custom_scripts - computed: false, optional: true, required: false
  private _customScripts?: { [key: string]: string }; 
  public get customScripts() {
    return this.getStringMapAttribute('custom_scripts');
  }
  public set customScripts(value: { [key: string]: string }) {
    this._customScripts = value;
  }
  public resetCustomScripts() {
    this._customScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScriptsInput() {
    return this._customScripts;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
  }

  // disable_cache - computed: false, optional: true, required: false
  private _disableCache?: boolean | cdktf.IResolvable; 
  public get disableCache() {
    return this.getBooleanAttribute('disable_cache');
  }
  public set disableCache(value: boolean | cdktf.IResolvable) {
    this._disableCache = value;
  }
  public resetDisableCache() {
    this._disableCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCacheInput() {
    return this._disableCache;
  }

  // disable_signup - computed: false, optional: true, required: false
  private _disableSignup?: boolean | cdktf.IResolvable; 
  public get disableSignup() {
    return this.getBooleanAttribute('disable_signup');
  }
  public set disableSignup(value: boolean | cdktf.IResolvable) {
    this._disableSignup = value;
  }
  public resetDisableSignup() {
    this._disableSignup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSignupInput() {
    return this._disableSignup;
  }

  // discovery_url - computed: false, optional: true, required: false
  private _discoveryUrl?: string; 
  public get discoveryUrl() {
    return this.getStringAttribute('discovery_url');
  }
  public set discoveryUrl(value: string) {
    this._discoveryUrl = value;
  }
  public resetDiscoveryUrl() {
    this._discoveryUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryUrlInput() {
    return this._discoveryUrl;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // domain_aliases - computed: false, optional: true, required: false
  private _domainAliases?: string[]; 
  public get domainAliases() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_aliases'));
  }
  public set domainAliases(value: string[]) {
    this._domainAliases = value;
  }
  public resetDomainAliases() {
    this._domainAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAliasesInput() {
    return this._domainAliases;
  }

  // enabled_database_customization - computed: false, optional: true, required: false
  private _enabledDatabaseCustomization?: boolean | cdktf.IResolvable; 
  public get enabledDatabaseCustomization() {
    return this.getBooleanAttribute('enabled_database_customization');
  }
  public set enabledDatabaseCustomization(value: boolean | cdktf.IResolvable) {
    this._enabledDatabaseCustomization = value;
  }
  public resetEnabledDatabaseCustomization() {
    this._enabledDatabaseCustomization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDatabaseCustomizationInput() {
    return this._enabledDatabaseCustomization;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // fields_map - computed: false, optional: true, required: false
  private _fieldsMap?: { [key: string]: string }; 
  public get fieldsMap() {
    return this.getStringMapAttribute('fields_map');
  }
  public set fieldsMap(value: { [key: string]: string }) {
    this._fieldsMap = value;
  }
  public resetFieldsMap() {
    this._fieldsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsMapInput() {
    return this._fieldsMap;
  }

  // forward_request_info - computed: false, optional: true, required: false
  private _forwardRequestInfo?: boolean | cdktf.IResolvable; 
  public get forwardRequestInfo() {
    return this.getBooleanAttribute('forward_request_info');
  }
  public set forwardRequestInfo(value: boolean | cdktf.IResolvable) {
    this._forwardRequestInfo = value;
  }
  public resetForwardRequestInfo() {
    this._forwardRequestInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestInfoInput() {
    return this._forwardRequestInfo;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // gateway_url - computed: false, optional: true, required: false
  private _gatewayUrl?: string; 
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }
  public set gatewayUrl(value: string) {
    this._gatewayUrl = value;
  }
  public resetGatewayUrl() {
    this._gatewayUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUrlInput() {
    return this._gatewayUrl;
  }

  // icon_url - computed: false, optional: true, required: false
  private _iconUrl?: string; 
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }
  public set iconUrl(value: string) {
    this._iconUrl = value;
  }
  public resetIconUrl() {
    this._iconUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUrlInput() {
    return this._iconUrl;
  }

  // identity_api - computed: false, optional: true, required: false
  private _identityApi?: string; 
  public get identityApi() {
    return this.getStringAttribute('identity_api');
  }
  public set identityApi(value: string) {
    this._identityApi = value;
  }
  public resetIdentityApi() {
    this._identityApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityApiInput() {
    return this._identityApi;
  }

  // import_mode - computed: false, optional: true, required: false
  private _importMode?: boolean | cdktf.IResolvable; 
  public get importMode() {
    return this.getBooleanAttribute('import_mode');
  }
  public set importMode(value: boolean | cdktf.IResolvable) {
    this._importMode = value;
  }
  public resetImportMode() {
    this._importMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importModeInput() {
    return this._importMode;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // max_groups_to_retrieve - computed: false, optional: true, required: false
  private _maxGroupsToRetrieve?: string; 
  public get maxGroupsToRetrieve() {
    return this.getStringAttribute('max_groups_to_retrieve');
  }
  public set maxGroupsToRetrieve(value: string) {
    this._maxGroupsToRetrieve = value;
  }
  public resetMaxGroupsToRetrieve() {
    this._maxGroupsToRetrieve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxGroupsToRetrieveInput() {
    return this._maxGroupsToRetrieve;
  }

  // messaging_service_sid - computed: false, optional: true, required: false
  private _messagingServiceSid?: string; 
  public get messagingServiceSid() {
    return this.getStringAttribute('messaging_service_sid');
  }
  public set messagingServiceSid(value: string) {
    this._messagingServiceSid = value;
  }
  public resetMessagingServiceSid() {
    this._messagingServiceSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagingServiceSidInput() {
    return this._messagingServiceSid;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // non_persistent_attrs - computed: true, optional: true, required: false
  private _nonPersistentAttrs?: string[]; 
  public get nonPersistentAttrs() {
    return cdktf.Fn.tolist(this.getListAttribute('non_persistent_attrs'));
  }
  public set nonPersistentAttrs(value: string[]) {
    this._nonPersistentAttrs = value;
  }
  public resetNonPersistentAttrs() {
    this._nonPersistentAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPersistentAttrsInput() {
    return this._nonPersistentAttrs;
  }

  // password_policy - computed: true, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // protocol_binding - computed: false, optional: true, required: false
  private _protocolBinding?: string; 
  public get protocolBinding() {
    return this.getStringAttribute('protocol_binding');
  }
  public set protocolBinding(value: string) {
    this._protocolBinding = value;
  }
  public resetProtocolBinding() {
    this._protocolBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolBindingInput() {
    return this._protocolBinding;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // request_template - computed: false, optional: true, required: false
  private _requestTemplate?: string; 
  public get requestTemplate() {
    return this.getStringAttribute('request_template');
  }
  public set requestTemplate(value: string) {
    this._requestTemplate = value;
  }
  public resetRequestTemplate() {
    this._requestTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTemplateInput() {
    return this._requestTemplate;
  }

  // requires_username - computed: false, optional: true, required: false
  private _requiresUsername?: boolean | cdktf.IResolvable; 
  public get requiresUsername() {
    return this.getBooleanAttribute('requires_username');
  }
  public set requiresUsername(value: boolean | cdktf.IResolvable) {
    this._requiresUsername = value;
  }
  public resetRequiresUsername() {
    this._requiresUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresUsernameInput() {
    return this._requiresUsername;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // scripts - computed: false, optional: true, required: false
  private _scripts?: { [key: string]: string }; 
  public get scripts() {
    return this.getStringMapAttribute('scripts');
  }
  public set scripts(value: { [key: string]: string }) {
    this._scripts = value;
  }
  public resetScripts() {
    this._scripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptsInput() {
    return this._scripts;
  }

  // set_user_root_attributes - computed: true, optional: true, required: false
  private _setUserRootAttributes?: string; 
  public get setUserRootAttributes() {
    return this.getStringAttribute('set_user_root_attributes');
  }
  public set setUserRootAttributes(value: string) {
    this._setUserRootAttributes = value;
  }
  public resetSetUserRootAttributes() {
    this._setUserRootAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setUserRootAttributesInput() {
    return this._setUserRootAttributes;
  }

  // should_trust_email_verified_connection - computed: false, optional: true, required: false
  private _shouldTrustEmailVerifiedConnection?: string; 
  public get shouldTrustEmailVerifiedConnection() {
    return this.getStringAttribute('should_trust_email_verified_connection');
  }
  public set shouldTrustEmailVerifiedConnection(value: string) {
    this._shouldTrustEmailVerifiedConnection = value;
  }
  public resetShouldTrustEmailVerifiedConnection() {
    this._shouldTrustEmailVerifiedConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrustEmailVerifiedConnectionInput() {
    return this._shouldTrustEmailVerifiedConnection;
  }

  // sign_in_endpoint - computed: false, optional: true, required: false
  private _signInEndpoint?: string; 
  public get signInEndpoint() {
    return this.getStringAttribute('sign_in_endpoint');
  }
  public set signInEndpoint(value: string) {
    this._signInEndpoint = value;
  }
  public resetSignInEndpoint() {
    this._signInEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInEndpointInput() {
    return this._signInEndpoint;
  }

  // sign_out_endpoint - computed: false, optional: true, required: false
  private _signOutEndpoint?: string; 
  public get signOutEndpoint() {
    return this.getStringAttribute('sign_out_endpoint');
  }
  public set signOutEndpoint(value: string) {
    this._signOutEndpoint = value;
  }
  public resetSignOutEndpoint() {
    this._signOutEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signOutEndpointInput() {
    return this._signOutEndpoint;
  }

  // sign_saml_request - computed: false, optional: true, required: false
  private _signSamlRequest?: boolean | cdktf.IResolvable; 
  public get signSamlRequest() {
    return this.getBooleanAttribute('sign_saml_request');
  }
  public set signSamlRequest(value: boolean | cdktf.IResolvable) {
    this._signSamlRequest = value;
  }
  public resetSignSamlRequest() {
    this._signSamlRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signSamlRequestInput() {
    return this._signSamlRequest;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signing_cert - computed: false, optional: true, required: false
  private _signingCert?: string; 
  public get signingCert() {
    return this.getStringAttribute('signing_cert');
  }
  public set signingCert(value: string) {
    this._signingCert = value;
  }
  public resetSigningCert() {
    this._signingCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertInput() {
    return this._signingCert;
  }

  // strategy_version - computed: true, optional: true, required: false
  private _strategyVersion?: number; 
  public get strategyVersion() {
    return this.getNumberAttribute('strategy_version');
  }
  public set strategyVersion(value: number) {
    this._strategyVersion = value;
  }
  public resetStrategyVersion() {
    this._strategyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyVersionInput() {
    return this._strategyVersion;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // syntax - computed: false, optional: true, required: false
  private _syntax?: string; 
  public get syntax() {
    return this.getStringAttribute('syntax');
  }
  public set syntax(value: string) {
    this._syntax = value;
  }
  public resetSyntax() {
    this._syntax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxInput() {
    return this._syntax;
  }

  // team_id - computed: false, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tenant_domain - computed: false, optional: true, required: false
  private _tenantDomain?: string; 
  public get tenantDomain() {
    return this.getStringAttribute('tenant_domain');
  }
  public set tenantDomain(value: string) {
    this._tenantDomain = value;
  }
  public resetTenantDomain() {
    this._tenantDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDomainInput() {
    return this._tenantDomain;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // twilio_sid - computed: false, optional: true, required: false
  private _twilioSid?: string; 
  public get twilioSid() {
    return this.getStringAttribute('twilio_sid');
  }
  public set twilioSid(value: string) {
    this._twilioSid = value;
  }
  public resetTwilioSid() {
    this._twilioSid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioSidInput() {
    return this._twilioSid;
  }

  // twilio_token - computed: false, optional: true, required: false
  private _twilioToken?: string; 
  public get twilioToken() {
    return this.getStringAttribute('twilio_token');
  }
  public set twilioToken(value: string) {
    this._twilioToken = value;
  }
  public resetTwilioToken() {
    this._twilioToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twilioTokenInput() {
    return this._twilioToken;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_cert_auth - computed: false, optional: true, required: false
  private _useCertAuth?: boolean | cdktf.IResolvable; 
  public get useCertAuth() {
    return this.getBooleanAttribute('use_cert_auth');
  }
  public set useCertAuth(value: boolean | cdktf.IResolvable) {
    this._useCertAuth = value;
  }
  public resetUseCertAuth() {
    this._useCertAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCertAuthInput() {
    return this._useCertAuth;
  }

  // use_kerberos - computed: false, optional: true, required: false
  private _useKerberos?: boolean | cdktf.IResolvable; 
  public get useKerberos() {
    return this.getBooleanAttribute('use_kerberos');
  }
  public set useKerberos(value: boolean | cdktf.IResolvable) {
    this._useKerberos = value;
  }
  public resetUseKerberos() {
    this._useKerberos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKerberosInput() {
    return this._useKerberos;
  }

  // use_wsfed - computed: false, optional: true, required: false
  private _useWsfed?: boolean | cdktf.IResolvable; 
  public get useWsfed() {
    return this.getBooleanAttribute('use_wsfed');
  }
  public set useWsfed(value: boolean | cdktf.IResolvable) {
    this._useWsfed = value;
  }
  public resetUseWsfed() {
    this._useWsfed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useWsfedInput() {
    return this._useWsfed;
  }

  // user_id_attribute - computed: false, optional: true, required: false
  private _userIdAttribute?: string; 
  public get userIdAttribute() {
    return this.getStringAttribute('user_id_attribute');
  }
  public set userIdAttribute(value: string) {
    this._userIdAttribute = value;
  }
  public resetUserIdAttribute() {
    this._userIdAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdAttributeInput() {
    return this._userIdAttribute;
  }

  // userinfo_endpoint - computed: false, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // waad_common_endpoint - computed: false, optional: true, required: false
  private _waadCommonEndpoint?: boolean | cdktf.IResolvable; 
  public get waadCommonEndpoint() {
    return this.getBooleanAttribute('waad_common_endpoint');
  }
  public set waadCommonEndpoint(value: boolean | cdktf.IResolvable) {
    this._waadCommonEndpoint = value;
  }
  public resetWaadCommonEndpoint() {
    this._waadCommonEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waadCommonEndpointInput() {
    return this._waadCommonEndpoint;
  }

  // waad_protocol - computed: false, optional: true, required: false
  private _waadProtocol?: string; 
  public get waadProtocol() {
    return this.getStringAttribute('waad_protocol');
  }
  public set waadProtocol(value: string) {
    this._waadProtocol = value;
  }
  public resetWaadProtocol() {
    this._waadProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waadProtocolInput() {
    return this._waadProtocol;
  }

  // gateway_authentication - computed: false, optional: true, required: false
  private _gatewayAuthentication = new ConnectionOptionsGatewayAuthenticationOutputReference(this, "gateway_authentication");
  public get gatewayAuthentication() {
    return this._gatewayAuthentication;
  }
  public putGatewayAuthentication(value: ConnectionOptionsGatewayAuthentication) {
    this._gatewayAuthentication.internalValue = value;
  }
  public resetGatewayAuthentication() {
    this._gatewayAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAuthenticationInput() {
    return this._gatewayAuthentication.internalValue;
  }

  // idp_initiated - computed: false, optional: true, required: false
  private _idpInitiated = new ConnectionOptionsIdpInitiatedOutputReference(this, "idp_initiated");
  public get idpInitiated() {
    return this._idpInitiated;
  }
  public putIdpInitiated(value: ConnectionOptionsIdpInitiated) {
    this._idpInitiated.internalValue = value;
  }
  public resetIdpInitiated() {
    this._idpInitiated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInitiatedInput() {
    return this._idpInitiated.internalValue;
  }

  // mfa - computed: false, optional: true, required: false
  private _mfa = new ConnectionOptionsMfaOutputReference(this, "mfa");
  public get mfa() {
    return this._mfa;
  }
  public putMfa(value: ConnectionOptionsMfa) {
    this._mfa.internalValue = value;
  }
  public resetMfa() {
    this._mfa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInput() {
    return this._mfa.internalValue;
  }

  // password_complexity_options - computed: false, optional: true, required: false
  private _passwordComplexityOptions = new ConnectionOptionsPasswordComplexityOptionsOutputReference(this, "password_complexity_options");
  public get passwordComplexityOptions() {
    return this._passwordComplexityOptions;
  }
  public putPasswordComplexityOptions(value: ConnectionOptionsPasswordComplexityOptions) {
    this._passwordComplexityOptions.internalValue = value;
  }
  public resetPasswordComplexityOptions() {
    this._passwordComplexityOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordComplexityOptionsInput() {
    return this._passwordComplexityOptions.internalValue;
  }

  // password_dictionary - computed: false, optional: true, required: false
  private _passwordDictionary = new ConnectionOptionsPasswordDictionaryOutputReference(this, "password_dictionary");
  public get passwordDictionary() {
    return this._passwordDictionary;
  }
  public putPasswordDictionary(value: ConnectionOptionsPasswordDictionary) {
    this._passwordDictionary.internalValue = value;
  }
  public resetPasswordDictionary() {
    this._passwordDictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordDictionaryInput() {
    return this._passwordDictionary.internalValue;
  }

  // password_history - computed: false, optional: true, required: false
  private _passwordHistory = new ConnectionOptionsPasswordHistoryList(this, "password_history", false);
  public get passwordHistory() {
    return this._passwordHistory;
  }
  public putPasswordHistory(value: ConnectionOptionsPasswordHistory[] | cdktf.IResolvable) {
    this._passwordHistory.internalValue = value;
  }
  public resetPasswordHistory() {
    this._passwordHistory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHistoryInput() {
    return this._passwordHistory.internalValue;
  }

  // password_no_personal_info - computed: false, optional: true, required: false
  private _passwordNoPersonalInfo = new ConnectionOptionsPasswordNoPersonalInfoOutputReference(this, "password_no_personal_info");
  public get passwordNoPersonalInfo() {
    return this._passwordNoPersonalInfo;
  }
  public putPasswordNoPersonalInfo(value: ConnectionOptionsPasswordNoPersonalInfo) {
    this._passwordNoPersonalInfo.internalValue = value;
  }
  public resetPasswordNoPersonalInfo() {
    this._passwordNoPersonalInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNoPersonalInfoInput() {
    return this._passwordNoPersonalInfo.internalValue;
  }

  // totp - computed: false, optional: true, required: false
  private _totp = new ConnectionOptionsTotpOutputReference(this, "totp");
  public get totp() {
    return this._totp;
  }
  public putTotp(value: ConnectionOptionsTotp) {
    this._totp.internalValue = value;
  }
  public resetTotp() {
    this._totp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totpInput() {
    return this._totp.internalValue;
  }

  // validation - computed: false, optional: true, required: false
  private _validation = new ConnectionOptionsValidationOutputReference(this, "validation");
  public get validation() {
    return this._validation;
  }
  public putValidation(value: ConnectionOptionsValidation) {
    this._validation.internalValue = value;
  }
  public resetValidation() {
    this._validation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection auth0_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/connection auth0_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_connection',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._enabledClients = config.enabledClients;
    this._id = config.id;
    this._isDomainConnection = config.isDomainConnection;
    this._name = config.name;
    this._realms = config.realms;
    this._strategy = config.strategy;
    this._strategyVersion = config.strategyVersion;
    this._validation = config.validation;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled_clients - computed: true, optional: true, required: false
  private _enabledClients?: string[]; 
  public get enabledClients() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_clients'));
  }
  public set enabledClients(value: string[]) {
    this._enabledClients = value;
  }
  public resetEnabledClients() {
    this._enabledClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledClientsInput() {
    return this._enabledClients;
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

  // is_domain_connection - computed: true, optional: true, required: false
  private _isDomainConnection?: boolean | cdktf.IResolvable; 
  public get isDomainConnection() {
    return this.getBooleanAttribute('is_domain_connection');
  }
  public set isDomainConnection(value: boolean | cdktf.IResolvable) {
    this._isDomainConnection = value;
  }
  public resetIsDomainConnection() {
    this._isDomainConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDomainConnectionInput() {
    return this._isDomainConnection;
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

  // realms - computed: true, optional: true, required: false
  private _realms?: string[]; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[]) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms;
  }

  // strategy - computed: false, optional: false, required: true
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // strategy_version - computed: true, optional: true, required: false
  private _strategyVersion?: string; 
  public get strategyVersion() {
    return this.getStringAttribute('strategy_version');
  }
  public set strategyVersion(value: string) {
    this._strategyVersion = value;
  }
  public resetStrategyVersion() {
    this._strategyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyVersionInput() {
    return this._strategyVersion;
  }

  // validation - computed: false, optional: true, required: false
  private _validation?: { [key: string]: string }; 
  public get validation() {
    return this.getStringMapAttribute('validation');
  }
  public set validation(value: { [key: string]: string }) {
    this._validation = value;
  }
  public resetValidation() {
    this._validation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationInput() {
    return this._validation;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ConnectionOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ConnectionOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledClients),
      id: cdktf.stringToTerraform(this._id),
      is_domain_connection: cdktf.booleanToTerraform(this._isDomainConnection),
      name: cdktf.stringToTerraform(this._name),
      realms: cdktf.listMapper(cdktf.stringToTerraform, false)(this._realms),
      strategy: cdktf.stringToTerraform(this._strategy),
      strategy_version: cdktf.stringToTerraform(this._strategyVersion),
      validation: cdktf.hashMapper(cdktf.stringToTerraform)(this._validation),
      options: connectionOptionsToTerraform(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_clients: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledClients),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_domain_connection: {
        value: cdktf.booleanToHclTerraform(this._isDomainConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realms: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._realms),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      strategy: {
        value: cdktf.stringToHclTerraform(this._strategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strategy_version: {
        value: cdktf.stringToHclTerraform(this._strategyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validation: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._validation),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      options: {
        value: connectionOptionsToHclTerraform(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConnectionOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
