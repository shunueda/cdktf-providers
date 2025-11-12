// https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * A boolean that specifies whether the API key is enabled for the application. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#api_key_enabled Application#api_key_enabled}
  */
  readonly apiKeyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the PingOne environment to create the DaVinci application. Must be a valid PingOne resource ID. This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#environment_id Application#environment_id}
  */
  readonly environmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * oauth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#oauth Application#oauth}
  */
  readonly oauth?: ApplicationOauth;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#policy Application#policy}
  */
  readonly policy?: ApplicationPolicy[] | cdktf.IResolvable;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#saml Application#saml}
  */
  readonly saml?: ApplicationSaml;
  /**
  * user_portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#user_portal Application#user_portal}
  */
  readonly userPortal?: ApplicationUserPortal;
}
export interface ApplicationOauthValues {
  /**
  * Allowed grants for the application. Available grants are `authorizationCode`, `clientCredentials`, `implicit`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#allowed_grants Application#allowed_grants}
  */
  readonly allowedGrants?: string[];
  /**
  * Allowed scopes for the application. Available scopes are `openid`, `profile`, `flow_analytics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#allowed_scopes Application#allowed_scopes}
  */
  readonly allowedScopes?: string[];
  /**
  * A boolean that enables/disables the OAuth 2.0 configuration for the application. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A boolean that specifies whether to enforce receiving signed requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#enforce_signed_request_openid Application#enforce_signed_request_openid}
  */
  readonly enforceSignedRequestOpenid?: boolean | cdktf.IResolvable;
  /**
  * Logout URLs for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#logout_uris Application#logout_uris}
  */
  readonly logoutUris?: string[];
  /**
  * Redirect URLs for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#redirect_uris Application#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * A string that specifies service provider (SP) JWKS keys to verify the authorization request signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#sp_jwks_openid Application#sp_jwks_openid}
  */
  readonly spJwksOpenid?: string;
  /**
  * A string that specifies a service provider (SP) JWKS URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#sp_jwks_url Application#sp_jwks_url}
  */
  readonly spJwksUrl?: string;
}

export function applicationOauthValuesToTerraform(struct?: ApplicationOauthValuesOutputReference | ApplicationOauthValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedGrants),
    allowed_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedScopes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enforce_signed_request_openid: cdktf.booleanToTerraform(struct!.enforceSignedRequestOpenid),
    logout_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoutUris),
    redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.redirectUris),
    sp_jwks_openid: cdktf.stringToTerraform(struct!.spJwksOpenid),
    sp_jwks_url: cdktf.stringToTerraform(struct!.spJwksUrl),
  }
}


export function applicationOauthValuesToHclTerraform(struct?: ApplicationOauthValuesOutputReference | ApplicationOauthValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_grants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedGrants),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    allowed_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_signed_request_openid: {
      value: cdktf.booleanToHclTerraform(struct!.enforceSignedRequestOpenid),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoutUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.redirectUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sp_jwks_openid: {
      value: cdktf.stringToHclTerraform(struct!.spJwksOpenid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_jwks_url: {
      value: cdktf.stringToHclTerraform(struct!.spJwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOauthValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationOauthValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedGrants !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedGrants = this._allowedGrants;
    }
    if (this._allowedScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedScopes = this._allowedScopes;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enforceSignedRequestOpenid !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceSignedRequestOpenid = this._enforceSignedRequestOpenid;
    }
    if (this._logoutUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUris = this._logoutUris;
    }
    if (this._redirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUris = this._redirectUris;
    }
    if (this._spJwksOpenid !== undefined) {
      hasAnyValues = true;
      internalValueResult.spJwksOpenid = this._spJwksOpenid;
    }
    if (this._spJwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.spJwksUrl = this._spJwksUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOauthValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedGrants = undefined;
      this._allowedScopes = undefined;
      this._enabled = undefined;
      this._enforceSignedRequestOpenid = undefined;
      this._logoutUris = undefined;
      this._redirectUris = undefined;
      this._spJwksOpenid = undefined;
      this._spJwksUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedGrants = value.allowedGrants;
      this._allowedScopes = value.allowedScopes;
      this._enabled = value.enabled;
      this._enforceSignedRequestOpenid = value.enforceSignedRequestOpenid;
      this._logoutUris = value.logoutUris;
      this._redirectUris = value.redirectUris;
      this._spJwksOpenid = value.spJwksOpenid;
      this._spJwksUrl = value.spJwksUrl;
    }
  }

  // allowed_grants - computed: false, optional: true, required: false
  private _allowedGrants?: string[]; 
  public get allowedGrants() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_grants'));
  }
  public set allowedGrants(value: string[]) {
    this._allowedGrants = value;
  }
  public resetAllowedGrants() {
    this._allowedGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGrantsInput() {
    return this._allowedGrants;
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes?: string[]; 
  public get allowedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_scopes'));
  }
  public set allowedScopes(value: string[]) {
    this._allowedScopes = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforce_signed_request_openid - computed: false, optional: true, required: false
  private _enforceSignedRequestOpenid?: boolean | cdktf.IResolvable; 
  public get enforceSignedRequestOpenid() {
    return this.getBooleanAttribute('enforce_signed_request_openid');
  }
  public set enforceSignedRequestOpenid(value: boolean | cdktf.IResolvable) {
    this._enforceSignedRequestOpenid = value;
  }
  public resetEnforceSignedRequestOpenid() {
    this._enforceSignedRequestOpenid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSignedRequestOpenidInput() {
    return this._enforceSignedRequestOpenid;
  }

  // logout_uris - computed: false, optional: true, required: false
  private _logoutUris?: string[]; 
  public get logoutUris() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_uris'));
  }
  public set logoutUris(value: string[]) {
    this._logoutUris = value;
  }
  public resetLogoutUris() {
    this._logoutUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrisInput() {
    return this._logoutUris;
  }

  // redirect_uris - computed: false, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // sp_jwks_openid - computed: false, optional: true, required: false
  private _spJwksOpenid?: string; 
  public get spJwksOpenid() {
    return this.getStringAttribute('sp_jwks_openid');
  }
  public set spJwksOpenid(value: string) {
    this._spJwksOpenid = value;
  }
  public resetSpJwksOpenid() {
    this._spJwksOpenid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spJwksOpenidInput() {
    return this._spJwksOpenid;
  }

  // sp_jwks_url - computed: false, optional: true, required: false
  private _spJwksUrl?: string; 
  public get spJwksUrl() {
    return this.getStringAttribute('sp_jwks_url');
  }
  public set spJwksUrl(value: string) {
    this._spJwksUrl = value;
  }
  public resetSpJwksUrl() {
    this._spJwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spJwksUrlInput() {
    return this._spJwksUrl;
  }
}
export interface ApplicationOauth {
  /**
  * A boolean that specifies whether OIDC/OAuth 2.0 settings are enabled for the application. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#values Application#values}
  */
  readonly values?: ApplicationOauthValues;
}

export function applicationOauthToTerraform(struct?: ApplicationOauthOutputReference | ApplicationOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    values: applicationOauthValuesToTerraform(struct!.values),
  }
}


export function applicationOauthToHclTerraform(struct?: ApplicationOauthOutputReference | ApplicationOauth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: applicationOauthValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationOauthValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOauthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationOauth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOauth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._values.internalValue = value.values;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // values - computed: false, optional: true, required: false
  private _values = new ApplicationOauthValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: ApplicationOauthValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface ApplicationPolicyPolicyFlow {
  /**
  * Identifier of the flow that this policy will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#flow_id Application#flow_id}
  */
  readonly flowId?: string;
  /**
  * List of node ids used by analytics for tracking user interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#success_nodes Application#success_nodes}
  */
  readonly successNodes?: string[];
  /**
  * Version of the flow that this policy will use. Use -1 for latest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#version_id Application#version_id}
  */
  readonly versionId?: number;
  /**
  * If multiple flows are specified, the weight determines the probability of the flow being used. This must add up to 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#weight Application#weight}
  */
  readonly weight?: number;
}

export function applicationPolicyPolicyFlowToTerraform(struct?: ApplicationPolicyPolicyFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flow_id: cdktf.stringToTerraform(struct!.flowId),
    success_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.successNodes),
    version_id: cdktf.numberToTerraform(struct!.versionId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function applicationPolicyPolicyFlowToHclTerraform(struct?: ApplicationPolicyPolicyFlow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flow_id: {
      value: cdktf.stringToHclTerraform(struct!.flowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.successNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    version_id: {
      value: cdktf.numberToHclTerraform(struct!.versionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPolicyPolicyFlowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPolicyPolicyFlow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowId = this._flowId;
    }
    if (this._successNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.successNodes = this._successNodes;
    }
    if (this._versionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionId = this._versionId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPolicyPolicyFlow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flowId = undefined;
      this._successNodes = undefined;
      this._versionId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flowId = value.flowId;
      this._successNodes = value.successNodes;
      this._versionId = value.versionId;
      this._weight = value.weight;
    }
  }

  // flow_id - computed: false, optional: true, required: false
  private _flowId?: string; 
  public get flowId() {
    return this.getStringAttribute('flow_id');
  }
  public set flowId(value: string) {
    this._flowId = value;
  }
  public resetFlowId() {
    this._flowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowIdInput() {
    return this._flowId;
  }

  // success_nodes - computed: false, optional: true, required: false
  private _successNodes?: string[]; 
  public get successNodes() {
    return this.getListAttribute('success_nodes');
  }
  public set successNodes(value: string[]) {
    this._successNodes = value;
  }
  public resetSuccessNodes() {
    this._successNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successNodesInput() {
    return this._successNodes;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: number; 
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }
  public set versionId(value: number) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApplicationPolicyPolicyFlowList extends cdktf.ComplexList {
  public internalValue? : ApplicationPolicyPolicyFlow[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPolicyPolicyFlowOutputReference {
    return new ApplicationPolicyPolicyFlowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationPolicy {
  /**
  * Policy friendly name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Policy status. Valid values are: enabled, disabled Defaults to `enabled`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#status Application#status}
  */
  readonly status?: string;
  /**
  * policy_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#policy_flow Application#policy_flow}
  */
  readonly policyFlow?: ApplicationPolicyPolicyFlow[] | cdktf.IResolvable;
}

export function applicationPolicyToTerraform(struct?: ApplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
    policy_flow: cdktf.listMapper(applicationPolicyPolicyFlowToTerraform, true)(struct!.policyFlow),
  }
}


export function applicationPolicyToHclTerraform(struct?: ApplicationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_flow: {
      value: cdktf.listMapperHcl(applicationPolicyPolicyFlowToHclTerraform, true)(struct!.policyFlow),
      isBlock: true,
      type: "set",
      storageClassType: "ApplicationPolicyPolicyFlowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._policyFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyFlow = this._policyFlow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
      this._policyFlow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
      this._policyFlow.internalValue = value.policyFlow;
    }
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getNumberAttribute('created_date');
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

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // policy_flow - computed: false, optional: true, required: false
  private _policyFlow = new ApplicationPolicyPolicyFlowList(this, "policy_flow", true);
  public get policyFlow() {
    return this._policyFlow;
  }
  public putPolicyFlow(value: ApplicationPolicyPolicyFlow[] | cdktf.IResolvable) {
    this._policyFlow.internalValue = value;
  }
  public resetPolicyFlow() {
    this._policyFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyFlowInput() {
    return this._policyFlow.internalValue;
  }
}

export class ApplicationPolicyList extends cdktf.ComplexList {
  public internalValue? : ApplicationPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApplicationPolicyOutputReference {
    return new ApplicationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSamlValues {
  /**
  * Field: 'Audience' in UI. This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#audience Application#audience}
  */
  readonly audience?: string;
  /**
  * Set to true if using saml block. This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Field: 'Enforce Receiving Signed Requests' in UI. This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#enforce_signed_request Application#enforce_signed_request}
  */
  readonly enforceSignedRequest?: boolean | cdktf.IResolvable;
  /**
  * The redirect URI for the SAML application. This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#redirect_uri Application#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#sp_cert Application#sp_cert}
  */
  readonly spCert?: string;
}

export function applicationSamlValuesToTerraform(struct?: ApplicationSamlValuesOutputReference | ApplicationSamlValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    enforce_signed_request: cdktf.booleanToTerraform(struct!.enforceSignedRequest),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    sp_cert: cdktf.stringToTerraform(struct!.spCert),
  }
}


export function applicationSamlValuesToHclTerraform(struct?: ApplicationSamlValuesOutputReference | ApplicationSamlValues): any {
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
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_signed_request: {
      value: cdktf.booleanToHclTerraform(struct!.enforceSignedRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sp_cert: {
      value: cdktf.stringToHclTerraform(struct!.spCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSamlValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._enforceSignedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceSignedRequest = this._enforceSignedRequest;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._spCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.spCert = this._spCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._enabled = undefined;
      this._enforceSignedRequest = undefined;
      this._redirectUri = undefined;
      this._spCert = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._enabled = value.enabled;
      this._enforceSignedRequest = value.enforceSignedRequest;
      this._redirectUri = value.redirectUri;
      this._spCert = value.spCert;
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // enforce_signed_request - computed: false, optional: true, required: false
  private _enforceSignedRequest?: boolean | cdktf.IResolvable; 
  public get enforceSignedRequest() {
    return this.getBooleanAttribute('enforce_signed_request');
  }
  public set enforceSignedRequest(value: boolean | cdktf.IResolvable) {
    this._enforceSignedRequest = value;
  }
  public resetEnforceSignedRequest() {
    this._enforceSignedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSignedRequestInput() {
    return this._enforceSignedRequest;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // sp_cert - computed: false, optional: true, required: false
  private _spCert?: string; 
  public get spCert() {
    return this.getStringAttribute('sp_cert');
  }
  public set spCert(value: string) {
    this._spCert = value;
  }
  public resetSpCert() {
    this._spCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spCertInput() {
    return this._spCert;
  }
}
export interface ApplicationSaml {
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#values Application#values}
  */
  readonly values?: ApplicationSamlValues;
}

export function applicationSamlToTerraform(struct?: ApplicationSamlOutputReference | ApplicationSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: applicationSamlValuesToTerraform(struct!.values),
  }
}


export function applicationSamlToHclTerraform(struct?: ApplicationSamlOutputReference | ApplicationSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: applicationSamlValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSamlValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values.internalValue = value.values;
    }
  }

  // values - computed: false, optional: true, required: false
  private _values = new ApplicationSamlValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: ApplicationSamlValues) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface ApplicationUserPortal {
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#add_auth_method_title Application#add_auth_method_title}
  */
  readonly addAuthMethodTitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#cred_page_subtitle Application#cred_page_subtitle}
  */
  readonly credPageSubtitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#cred_page_title Application#cred_page_title}
  */
  readonly credPageTitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#flow_timeout_seconds Application#flow_timeout_seconds}
  */
  readonly flowTimeoutSeconds?: number;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#name_auth_method_title Application#name_auth_method_title}
  */
  readonly nameAuthMethodTitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#name_confirm_btn_text Application#name_confirm_btn_text}
  */
  readonly nameConfirmBtnText?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#remove_auth_method_title Application#remove_auth_method_title}
  */
  readonly removeAuthMethodTitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#remove_body_message Application#remove_body_message}
  */
  readonly removeBodyMessage?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#remove_cancel_btn_text Application#remove_cancel_btn_text}
  */
  readonly removeCancelBtnText?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#remove_confirm_btn_text Application#remove_confirm_btn_text}
  */
  readonly removeConfirmBtnText?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#remove_message Application#remove_message}
  */
  readonly removeMessage?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#show_logout_button Application#show_logout_button}
  */
  readonly showLogoutButton?: boolean | cdktf.IResolvable;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#show_mfa_button Application#show_mfa_button}
  */
  readonly showMfaButton?: boolean | cdktf.IResolvable;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#show_user_info Application#show_user_info}
  */
  readonly showUserInfo?: boolean | cdktf.IResolvable;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#show_variables Application#show_variables}
  */
  readonly showVariables?: boolean | cdktf.IResolvable;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#up_title Application#up_title}
  */
  readonly upTitle?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#update_body_message Application#update_body_message}
  */
  readonly updateBodyMessage?: string;
  /**
  * **Deprecation notice** This is now deprecated in the service and will be removed from the provider in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#update_message Application#update_message}
  */
  readonly updateMessage?: string;
}

export function applicationUserPortalToTerraform(struct?: ApplicationUserPortalOutputReference | ApplicationUserPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_auth_method_title: cdktf.stringToTerraform(struct!.addAuthMethodTitle),
    cred_page_subtitle: cdktf.stringToTerraform(struct!.credPageSubtitle),
    cred_page_title: cdktf.stringToTerraform(struct!.credPageTitle),
    flow_timeout_seconds: cdktf.numberToTerraform(struct!.flowTimeoutSeconds),
    name_auth_method_title: cdktf.stringToTerraform(struct!.nameAuthMethodTitle),
    name_confirm_btn_text: cdktf.stringToTerraform(struct!.nameConfirmBtnText),
    remove_auth_method_title: cdktf.stringToTerraform(struct!.removeAuthMethodTitle),
    remove_body_message: cdktf.stringToTerraform(struct!.removeBodyMessage),
    remove_cancel_btn_text: cdktf.stringToTerraform(struct!.removeCancelBtnText),
    remove_confirm_btn_text: cdktf.stringToTerraform(struct!.removeConfirmBtnText),
    remove_message: cdktf.stringToTerraform(struct!.removeMessage),
    show_logout_button: cdktf.booleanToTerraform(struct!.showLogoutButton),
    show_mfa_button: cdktf.booleanToTerraform(struct!.showMfaButton),
    show_user_info: cdktf.booleanToTerraform(struct!.showUserInfo),
    show_variables: cdktf.booleanToTerraform(struct!.showVariables),
    up_title: cdktf.stringToTerraform(struct!.upTitle),
    update_body_message: cdktf.stringToTerraform(struct!.updateBodyMessage),
    update_message: cdktf.stringToTerraform(struct!.updateMessage),
  }
}


export function applicationUserPortalToHclTerraform(struct?: ApplicationUserPortalOutputReference | ApplicationUserPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_auth_method_title: {
      value: cdktf.stringToHclTerraform(struct!.addAuthMethodTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cred_page_subtitle: {
      value: cdktf.stringToHclTerraform(struct!.credPageSubtitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cred_page_title: {
      value: cdktf.stringToHclTerraform(struct!.credPageTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.flowTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_auth_method_title: {
      value: cdktf.stringToHclTerraform(struct!.nameAuthMethodTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_confirm_btn_text: {
      value: cdktf.stringToHclTerraform(struct!.nameConfirmBtnText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_auth_method_title: {
      value: cdktf.stringToHclTerraform(struct!.removeAuthMethodTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_body_message: {
      value: cdktf.stringToHclTerraform(struct!.removeBodyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_cancel_btn_text: {
      value: cdktf.stringToHclTerraform(struct!.removeCancelBtnText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_confirm_btn_text: {
      value: cdktf.stringToHclTerraform(struct!.removeConfirmBtnText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_message: {
      value: cdktf.stringToHclTerraform(struct!.removeMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_logout_button: {
      value: cdktf.booleanToHclTerraform(struct!.showLogoutButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_mfa_button: {
      value: cdktf.booleanToHclTerraform(struct!.showMfaButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_user_info: {
      value: cdktf.booleanToHclTerraform(struct!.showUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_variables: {
      value: cdktf.booleanToHclTerraform(struct!.showVariables),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    up_title: {
      value: cdktf.stringToHclTerraform(struct!.upTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_body_message: {
      value: cdktf.stringToHclTerraform(struct!.updateBodyMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_message: {
      value: cdktf.stringToHclTerraform(struct!.updateMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationUserPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationUserPortal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addAuthMethodTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAuthMethodTitle = this._addAuthMethodTitle;
    }
    if (this._credPageSubtitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.credPageSubtitle = this._credPageSubtitle;
    }
    if (this._credPageTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.credPageTitle = this._credPageTitle;
    }
    if (this._flowTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowTimeoutSeconds = this._flowTimeoutSeconds;
    }
    if (this._nameAuthMethodTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameAuthMethodTitle = this._nameAuthMethodTitle;
    }
    if (this._nameConfirmBtnText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameConfirmBtnText = this._nameConfirmBtnText;
    }
    if (this._removeAuthMethodTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAuthMethodTitle = this._removeAuthMethodTitle;
    }
    if (this._removeBodyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeBodyMessage = this._removeBodyMessage;
    }
    if (this._removeCancelBtnText !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeCancelBtnText = this._removeCancelBtnText;
    }
    if (this._removeConfirmBtnText !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeConfirmBtnText = this._removeConfirmBtnText;
    }
    if (this._removeMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeMessage = this._removeMessage;
    }
    if (this._showLogoutButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogoutButton = this._showLogoutButton;
    }
    if (this._showMfaButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showMfaButton = this._showMfaButton;
    }
    if (this._showUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserInfo = this._showUserInfo;
    }
    if (this._showVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.showVariables = this._showVariables;
    }
    if (this._upTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.upTitle = this._upTitle;
    }
    if (this._updateBodyMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateBodyMessage = this._updateBodyMessage;
    }
    if (this._updateMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMessage = this._updateMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationUserPortal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addAuthMethodTitle = undefined;
      this._credPageSubtitle = undefined;
      this._credPageTitle = undefined;
      this._flowTimeoutSeconds = undefined;
      this._nameAuthMethodTitle = undefined;
      this._nameConfirmBtnText = undefined;
      this._removeAuthMethodTitle = undefined;
      this._removeBodyMessage = undefined;
      this._removeCancelBtnText = undefined;
      this._removeConfirmBtnText = undefined;
      this._removeMessage = undefined;
      this._showLogoutButton = undefined;
      this._showMfaButton = undefined;
      this._showUserInfo = undefined;
      this._showVariables = undefined;
      this._upTitle = undefined;
      this._updateBodyMessage = undefined;
      this._updateMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addAuthMethodTitle = value.addAuthMethodTitle;
      this._credPageSubtitle = value.credPageSubtitle;
      this._credPageTitle = value.credPageTitle;
      this._flowTimeoutSeconds = value.flowTimeoutSeconds;
      this._nameAuthMethodTitle = value.nameAuthMethodTitle;
      this._nameConfirmBtnText = value.nameConfirmBtnText;
      this._removeAuthMethodTitle = value.removeAuthMethodTitle;
      this._removeBodyMessage = value.removeBodyMessage;
      this._removeCancelBtnText = value.removeCancelBtnText;
      this._removeConfirmBtnText = value.removeConfirmBtnText;
      this._removeMessage = value.removeMessage;
      this._showLogoutButton = value.showLogoutButton;
      this._showMfaButton = value.showMfaButton;
      this._showUserInfo = value.showUserInfo;
      this._showVariables = value.showVariables;
      this._upTitle = value.upTitle;
      this._updateBodyMessage = value.updateBodyMessage;
      this._updateMessage = value.updateMessage;
    }
  }

  // add_auth_method_title - computed: false, optional: true, required: false
  private _addAuthMethodTitle?: string; 
  public get addAuthMethodTitle() {
    return this.getStringAttribute('add_auth_method_title');
  }
  public set addAuthMethodTitle(value: string) {
    this._addAuthMethodTitle = value;
  }
  public resetAddAuthMethodTitle() {
    this._addAuthMethodTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAuthMethodTitleInput() {
    return this._addAuthMethodTitle;
  }

  // cred_page_subtitle - computed: false, optional: true, required: false
  private _credPageSubtitle?: string; 
  public get credPageSubtitle() {
    return this.getStringAttribute('cred_page_subtitle');
  }
  public set credPageSubtitle(value: string) {
    this._credPageSubtitle = value;
  }
  public resetCredPageSubtitle() {
    this._credPageSubtitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credPageSubtitleInput() {
    return this._credPageSubtitle;
  }

  // cred_page_title - computed: false, optional: true, required: false
  private _credPageTitle?: string; 
  public get credPageTitle() {
    return this.getStringAttribute('cred_page_title');
  }
  public set credPageTitle(value: string) {
    this._credPageTitle = value;
  }
  public resetCredPageTitle() {
    this._credPageTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credPageTitleInput() {
    return this._credPageTitle;
  }

  // flow_timeout_seconds - computed: false, optional: true, required: false
  private _flowTimeoutSeconds?: number; 
  public get flowTimeoutSeconds() {
    return this.getNumberAttribute('flow_timeout_seconds');
  }
  public set flowTimeoutSeconds(value: number) {
    this._flowTimeoutSeconds = value;
  }
  public resetFlowTimeoutSeconds() {
    this._flowTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowTimeoutSecondsInput() {
    return this._flowTimeoutSeconds;
  }

  // name_auth_method_title - computed: false, optional: true, required: false
  private _nameAuthMethodTitle?: string; 
  public get nameAuthMethodTitle() {
    return this.getStringAttribute('name_auth_method_title');
  }
  public set nameAuthMethodTitle(value: string) {
    this._nameAuthMethodTitle = value;
  }
  public resetNameAuthMethodTitle() {
    this._nameAuthMethodTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAuthMethodTitleInput() {
    return this._nameAuthMethodTitle;
  }

  // name_confirm_btn_text - computed: false, optional: true, required: false
  private _nameConfirmBtnText?: string; 
  public get nameConfirmBtnText() {
    return this.getStringAttribute('name_confirm_btn_text');
  }
  public set nameConfirmBtnText(value: string) {
    this._nameConfirmBtnText = value;
  }
  public resetNameConfirmBtnText() {
    this._nameConfirmBtnText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameConfirmBtnTextInput() {
    return this._nameConfirmBtnText;
  }

  // remove_auth_method_title - computed: false, optional: true, required: false
  private _removeAuthMethodTitle?: string; 
  public get removeAuthMethodTitle() {
    return this.getStringAttribute('remove_auth_method_title');
  }
  public set removeAuthMethodTitle(value: string) {
    this._removeAuthMethodTitle = value;
  }
  public resetRemoveAuthMethodTitle() {
    this._removeAuthMethodTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAuthMethodTitleInput() {
    return this._removeAuthMethodTitle;
  }

  // remove_body_message - computed: false, optional: true, required: false
  private _removeBodyMessage?: string; 
  public get removeBodyMessage() {
    return this.getStringAttribute('remove_body_message');
  }
  public set removeBodyMessage(value: string) {
    this._removeBodyMessage = value;
  }
  public resetRemoveBodyMessage() {
    this._removeBodyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeBodyMessageInput() {
    return this._removeBodyMessage;
  }

  // remove_cancel_btn_text - computed: false, optional: true, required: false
  private _removeCancelBtnText?: string; 
  public get removeCancelBtnText() {
    return this.getStringAttribute('remove_cancel_btn_text');
  }
  public set removeCancelBtnText(value: string) {
    this._removeCancelBtnText = value;
  }
  public resetRemoveCancelBtnText() {
    this._removeCancelBtnText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCancelBtnTextInput() {
    return this._removeCancelBtnText;
  }

  // remove_confirm_btn_text - computed: false, optional: true, required: false
  private _removeConfirmBtnText?: string; 
  public get removeConfirmBtnText() {
    return this.getStringAttribute('remove_confirm_btn_text');
  }
  public set removeConfirmBtnText(value: string) {
    this._removeConfirmBtnText = value;
  }
  public resetRemoveConfirmBtnText() {
    this._removeConfirmBtnText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeConfirmBtnTextInput() {
    return this._removeConfirmBtnText;
  }

  // remove_message - computed: false, optional: true, required: false
  private _removeMessage?: string; 
  public get removeMessage() {
    return this.getStringAttribute('remove_message');
  }
  public set removeMessage(value: string) {
    this._removeMessage = value;
  }
  public resetRemoveMessage() {
    this._removeMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeMessageInput() {
    return this._removeMessage;
  }

  // show_logout_button - computed: false, optional: true, required: false
  private _showLogoutButton?: boolean | cdktf.IResolvable; 
  public get showLogoutButton() {
    return this.getBooleanAttribute('show_logout_button');
  }
  public set showLogoutButton(value: boolean | cdktf.IResolvable) {
    this._showLogoutButton = value;
  }
  public resetShowLogoutButton() {
    this._showLogoutButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogoutButtonInput() {
    return this._showLogoutButton;
  }

  // show_mfa_button - computed: false, optional: true, required: false
  private _showMfaButton?: boolean | cdktf.IResolvable; 
  public get showMfaButton() {
    return this.getBooleanAttribute('show_mfa_button');
  }
  public set showMfaButton(value: boolean | cdktf.IResolvable) {
    this._showMfaButton = value;
  }
  public resetShowMfaButton() {
    this._showMfaButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMfaButtonInput() {
    return this._showMfaButton;
  }

  // show_user_info - computed: false, optional: true, required: false
  private _showUserInfo?: boolean | cdktf.IResolvable; 
  public get showUserInfo() {
    return this.getBooleanAttribute('show_user_info');
  }
  public set showUserInfo(value: boolean | cdktf.IResolvable) {
    this._showUserInfo = value;
  }
  public resetShowUserInfo() {
    this._showUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserInfoInput() {
    return this._showUserInfo;
  }

  // show_variables - computed: false, optional: true, required: false
  private _showVariables?: boolean | cdktf.IResolvable; 
  public get showVariables() {
    return this.getBooleanAttribute('show_variables');
  }
  public set showVariables(value: boolean | cdktf.IResolvable) {
    this._showVariables = value;
  }
  public resetShowVariables() {
    this._showVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showVariablesInput() {
    return this._showVariables;
  }

  // up_title - computed: false, optional: true, required: false
  private _upTitle?: string; 
  public get upTitle() {
    return this.getStringAttribute('up_title');
  }
  public set upTitle(value: string) {
    this._upTitle = value;
  }
  public resetUpTitle() {
    this._upTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upTitleInput() {
    return this._upTitle;
  }

  // update_body_message - computed: false, optional: true, required: false
  private _updateBodyMessage?: string; 
  public get updateBodyMessage() {
    return this.getStringAttribute('update_body_message');
  }
  public set updateBodyMessage(value: string) {
    this._updateBodyMessage = value;
  }
  public resetUpdateBodyMessage() {
    this._updateBodyMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateBodyMessageInput() {
    return this._updateBodyMessage;
  }

  // update_message - computed: false, optional: true, required: false
  private _updateMessage?: string; 
  public get updateMessage() {
    return this.getStringAttribute('update_message');
  }
  public set updateMessage(value: string) {
    this._updateMessage = value;
  }
  public resetUpdateMessage() {
    this._updateMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMessageInput() {
    return this._updateMessage;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application davinci_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "davinci_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "davinci_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/davinci/0.5.2/docs/resources/application davinci_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'davinci_application',
      terraformGeneratorMetadata: {
        providerName: 'davinci',
        providerVersion: '0.5.2',
        providerVersionConstraint: '0.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyEnabled = config.apiKeyEnabled;
    this._environmentId = config.environmentId;
    this._id = config.id;
    this._name = config.name;
    this._oauth.internalValue = config.oauth;
    this._policy.internalValue = config.policy;
    this._saml.internalValue = config.saml;
    this._userPortal.internalValue = config.userPortal;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_enabled - computed: false, optional: true, required: false
  private _apiKeyEnabled?: boolean | cdktf.IResolvable; 
  public get apiKeyEnabled() {
    return this.getBooleanAttribute('api_key_enabled');
  }
  public set apiKeyEnabled(value: boolean | cdktf.IResolvable) {
    this._apiKeyEnabled = value;
  }
  public resetApiKeyEnabled() {
    this._apiKeyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyEnabledInput() {
    return this._apiKeyEnabled;
  }

  // api_keys - computed: true, optional: false, required: false
  private _apiKeys = new cdktf.StringMap(this, "api_keys");
  public get apiKeys() {
    return this._apiKeys;
  }

  // created_date - computed: true, optional: false, required: false
  public get createdDate() {
    return this.getNumberAttribute('created_date');
  }

  // customer_id - computed: true, optional: false, required: false
  public get customerId() {
    return this.getStringAttribute('customer_id');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
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

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
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

  // user_pools - computed: true, optional: false, required: false
  private _userPools = new cdktf.StringMap(this, "user_pools");
  public get userPools() {
    return this._userPools;
  }

  // oauth - computed: false, optional: true, required: false
  private _oauth = new ApplicationOauthOutputReference(this, "oauth");
  public get oauth() {
    return this._oauth;
  }
  public putOauth(value: ApplicationOauth) {
    this._oauth.internalValue = value;
  }
  public resetOauth() {
    this._oauth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthInput() {
    return this._oauth.internalValue;
  }

  // policy - computed: false, optional: true, required: false
  private _policy = new ApplicationPolicyList(this, "policy", true);
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: ApplicationPolicy[] | cdktf.IResolvable) {
    this._policy.internalValue = value;
  }
  public resetPolicy() {
    this._policy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new ApplicationSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: ApplicationSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // user_portal - computed: false, optional: true, required: false
  private _userPortal = new ApplicationUserPortalOutputReference(this, "user_portal");
  public get userPortal() {
    return this._userPortal;
  }
  public putUserPortal(value: ApplicationUserPortal) {
    this._userPortal.internalValue = value;
  }
  public resetUserPortal() {
    this._userPortal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPortalInput() {
    return this._userPortal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key_enabled: cdktf.booleanToTerraform(this._apiKeyEnabled),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth: applicationOauthToTerraform(this._oauth.internalValue),
      policy: cdktf.listMapper(applicationPolicyToTerraform, true)(this._policy.internalValue),
      saml: applicationSamlToTerraform(this._saml.internalValue),
      user_portal: applicationUserPortalToTerraform(this._userPortal.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_enabled: {
        value: cdktf.booleanToHclTerraform(this._apiKeyEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      oauth: {
        value: applicationOauthToHclTerraform(this._oauth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationOauthList",
      },
      policy: {
        value: cdktf.listMapperHcl(applicationPolicyToHclTerraform, true)(this._policy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApplicationPolicyList",
      },
      saml: {
        value: applicationSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSamlList",
      },
      user_portal: {
        value: applicationUserPortalToHclTerraform(this._userPortal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationUserPortalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
