// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsLbListenerRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#id AwsLbListenerRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ARN of the listener to which to attach the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#listener_arn AwsLbListenerRule#listener_arn}
  */
  readonly listenerArn: string;
  /**
  * The priority for the rule between `1` and `50000`. Leaving it unset will automatically set the rule with next available priority after currently existing highest rule. A listener can't have multiple rules with the same priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#priority AwsLbListenerRule#priority}
  */
  readonly priority?: number;
  /**
  * The GUID of the tenant that the aws lb listener rule will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#tenant_id AwsLbListenerRule#tenant_id}
  */
  readonly tenantId: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#action AwsLbListenerRule#action}
  */
  readonly action: AwsLbListenerRuleAction[] | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#condition AwsLbListenerRule#condition}
  */
  readonly condition: AwsLbListenerRuleCondition[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#tags AwsLbListenerRule#tags}
  */
  readonly tags?: AwsLbListenerRuleTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#timeouts AwsLbListenerRule#timeouts}
  */
  readonly timeouts?: AwsLbListenerRuleTimeouts;
}
export interface AwsLbListenerRuleActionAuthenticateCognito {
  /**
  * The query parameters to include in the redirect request to the authorization endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#authentication_request_extra_params AwsLbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#on_unauthenticated_request AwsLbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * The set of user claims to be requested from the IdP. Defaults to `openid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#scope AwsLbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * The name of the cookie used to maintain session information. Defaults to `AWSELBAuthSessionCookie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#session_cookie_name AwsLbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * The maximum duration of the authentication session, in seconds. Defaults to `604800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#session_timeout AwsLbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * The ARN of the Cognito user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#user_pool_arn AwsLbListenerRule#user_pool_arn}
  */
  readonly userPoolArn: string;
  /**
  * The ID of the Cognito user pool client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#user_pool_client_id AwsLbListenerRule#user_pool_client_id}
  */
  readonly userPoolClientId: string;
  /**
  * The domain prefix or fully-qualified domain name of the Cognito user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#user_pool_domain AwsLbListenerRule#user_pool_domain}
  */
  readonly userPoolDomain: string;
}

export function awsLbListenerRuleActionAuthenticateCognitoToTerraform(struct?: AwsLbListenerRuleActionAuthenticateCognitoOutputReference | AwsLbListenerRuleActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationRequestExtraParams),
    on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktf.stringToTerraform(struct!.scope),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    user_pool_arn: cdktf.stringToTerraform(struct!.userPoolArn),
    user_pool_client_id: cdktf.stringToTerraform(struct!.userPoolClientId),
    user_pool_domain: cdktf.stringToTerraform(struct!.userPoolDomain),
  }
}


export function awsLbListenerRuleActionAuthenticateCognitoToHclTerraform(struct?: AwsLbListenerRuleActionAuthenticateCognitoOutputReference | AwsLbListenerRuleActionAuthenticateCognito): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    on_unauthenticated_request: {
      value: cdktf.stringToHclTerraform(struct!.onUnauthenticatedRequest),
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
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_pool_arn: {
      value: cdktf.stringToHclTerraform(struct!.userPoolArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_client_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_domain: {
      value: cdktf.stringToHclTerraform(struct!.userPoolDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionAuthenticateCognitoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionAuthenticateCognito | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._userPoolArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolArn = this._userPoolArn;
    }
    if (this._userPoolClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolClientId = this._userPoolClientId;
    }
    if (this._userPoolDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolDomain = this._userPoolDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionAuthenticateCognito | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._userPoolArn = undefined;
      this._userPoolClientId = undefined;
      this._userPoolDomain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._userPoolArn = value.userPoolArn;
      this._userPoolClientId = value.userPoolClientId;
      this._userPoolDomain = value.userPoolDomain;
    }
  }

  // authentication_request_extra_params - computed: true, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: false, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // user_pool_arn - computed: false, optional: false, required: true
  private _userPoolArn?: string; 
  public get userPoolArn() {
    return this.getStringAttribute('user_pool_arn');
  }
  public set userPoolArn(value: string) {
    this._userPoolArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolArnInput() {
    return this._userPoolArn;
  }

  // user_pool_client_id - computed: false, optional: false, required: true
  private _userPoolClientId?: string; 
  public get userPoolClientId() {
    return this.getStringAttribute('user_pool_client_id');
  }
  public set userPoolClientId(value: string) {
    this._userPoolClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolClientIdInput() {
    return this._userPoolClientId;
  }

  // user_pool_domain - computed: false, optional: false, required: true
  private _userPoolDomain?: string; 
  public get userPoolDomain() {
    return this.getStringAttribute('user_pool_domain');
  }
  public set userPoolDomain(value: string) {
    this._userPoolDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolDomainInput() {
    return this._userPoolDomain;
  }
}
export interface AwsLbListenerRuleActionAuthenticateOidc {
  /**
  * The query parameters to include in the redirect request to the authorization endpoint. Max: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#authentication_request_extra_params AwsLbListenerRule#authentication_request_extra_params}
  */
  readonly authenticationRequestExtraParams?: { [key: string]: string };
  /**
  * The authorization endpoint of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#authorization_endpoint AwsLbListenerRule#authorization_endpoint}
  */
  readonly authorizationEndpoint: string;
  /**
  * The OAuth 2.0 client identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#client_id AwsLbListenerRule#client_id}
  */
  readonly clientId: string;
  /**
  * The OAuth 2.0 client secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#client_secret AwsLbListenerRule#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The OIDC issuer identifier of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#issuer AwsLbListenerRule#issuer}
  */
  readonly issuer: string;
  /**
  * The behavior if the user is not authenticated. Valid values: `deny`, `allow` and `authenticate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#on_unauthenticated_request AwsLbListenerRule#on_unauthenticated_request}
  */
  readonly onUnauthenticatedRequest?: string;
  /**
  * The set of user claims to be requested from the IdP. Defaults to `openid`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#scope AwsLbListenerRule#scope}
  */
  readonly scope?: string;
  /**
  * The name of the cookie used to maintain session information. Defaults to `AWSELBAuthSessionCookie`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#session_cookie_name AwsLbListenerRule#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * The maximum duration of the authentication session, in seconds. Defaults to `604800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#session_timeout AwsLbListenerRule#session_timeout}
  */
  readonly sessionTimeout?: number;
  /**
  * The token endpoint of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#token_endpoint AwsLbListenerRule#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * The user info endpoint of the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#user_info_endpoint AwsLbListenerRule#user_info_endpoint}
  */
  readonly userInfoEndpoint: string;
}

export function awsLbListenerRuleActionAuthenticateOidcToTerraform(struct?: AwsLbListenerRuleActionAuthenticateOidcOutputReference | AwsLbListenerRuleActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_request_extra_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.authenticationRequestExtraParams),
    authorization_endpoint: cdktf.stringToTerraform(struct!.authorizationEndpoint),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    on_unauthenticated_request: cdktf.stringToTerraform(struct!.onUnauthenticatedRequest),
    scope: cdktf.stringToTerraform(struct!.scope),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_timeout: cdktf.numberToTerraform(struct!.sessionTimeout),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    user_info_endpoint: cdktf.stringToTerraform(struct!.userInfoEndpoint),
  }
}


export function awsLbListenerRuleActionAuthenticateOidcToHclTerraform(struct?: AwsLbListenerRuleActionAuthenticateOidcOutputReference | AwsLbListenerRuleActionAuthenticateOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_request_extra_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.authenticationRequestExtraParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    authorization_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.authorizationEndpoint),
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
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_unauthenticated_request: {
      value: cdktf.stringToHclTerraform(struct!.onUnauthenticatedRequest),
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
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.userInfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionAuthenticateOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionAuthenticateOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationRequestExtraParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationRequestExtraParams = this._authenticationRequestExtraParams;
    }
    if (this._authorizationEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationEndpoint = this._authorizationEndpoint;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._onUnauthenticatedRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.onUnauthenticatedRequest = this._onUnauthenticatedRequest;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTimeout = this._sessionTimeout;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._userInfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoEndpoint = this._userInfoEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionAuthenticateOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationRequestExtraParams = undefined;
      this._authorizationEndpoint = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._issuer = undefined;
      this._onUnauthenticatedRequest = undefined;
      this._scope = undefined;
      this._sessionCookieName = undefined;
      this._sessionTimeout = undefined;
      this._tokenEndpoint = undefined;
      this._userInfoEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationRequestExtraParams = value.authenticationRequestExtraParams;
      this._authorizationEndpoint = value.authorizationEndpoint;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._issuer = value.issuer;
      this._onUnauthenticatedRequest = value.onUnauthenticatedRequest;
      this._scope = value.scope;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionTimeout = value.sessionTimeout;
      this._tokenEndpoint = value.tokenEndpoint;
      this._userInfoEndpoint = value.userInfoEndpoint;
    }
  }

  // authentication_request_extra_params - computed: true, optional: true, required: false
  private _authenticationRequestExtraParams?: { [key: string]: string }; 
  public get authenticationRequestExtraParams() {
    return this.getStringMapAttribute('authentication_request_extra_params');
  }
  public set authenticationRequestExtraParams(value: { [key: string]: string }) {
    this._authenticationRequestExtraParams = value;
  }
  public resetAuthenticationRequestExtraParams() {
    this._authenticationRequestExtraParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRequestExtraParamsInput() {
    return this._authenticationRequestExtraParams;
  }

  // authorization_endpoint - computed: false, optional: false, required: true
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // on_unauthenticated_request - computed: true, optional: true, required: false
  private _onUnauthenticatedRequest?: string; 
  public get onUnauthenticatedRequest() {
    return this.getStringAttribute('on_unauthenticated_request');
  }
  public set onUnauthenticatedRequest(value: string) {
    this._onUnauthenticatedRequest = value;
  }
  public resetOnUnauthenticatedRequest() {
    this._onUnauthenticatedRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onUnauthenticatedRequestInput() {
    return this._onUnauthenticatedRequest;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // session_cookie_name - computed: false, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_timeout - computed: false, optional: true, required: false
  private _sessionTimeout?: number; 
  public get sessionTimeout() {
    return this.getNumberAttribute('session_timeout');
  }
  public set sessionTimeout(value: number) {
    this._sessionTimeout = value;
  }
  public resetSessionTimeout() {
    this._sessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTimeoutInput() {
    return this._sessionTimeout;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // user_info_endpoint - computed: false, optional: false, required: true
  private _userInfoEndpoint?: string; 
  public get userInfoEndpoint() {
    return this.getStringAttribute('user_info_endpoint');
  }
  public set userInfoEndpoint(value: string) {
    this._userInfoEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoEndpointInput() {
    return this._userInfoEndpoint;
  }
}
export interface AwsLbListenerRuleActionFixedResponse {
  /**
  * The content type. Valid values are `text/plain`, `text/css`, `text/html`, `application/javascript` and `application/json`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#content_type AwsLbListenerRule#content_type}
  */
  readonly contentType: string;
  /**
  * The message body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#message_body AwsLbListenerRule#message_body}
  */
  readonly messageBody?: string;
  /**
  * The HTTP response code. Valid values are `2XX`, `4XX`, or `5XX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#status_code AwsLbListenerRule#status_code}
  */
  readonly statusCode?: string;
}

export function awsLbListenerRuleActionFixedResponseToTerraform(struct?: AwsLbListenerRuleActionFixedResponseOutputReference | AwsLbListenerRuleActionFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    message_body: cdktf.stringToTerraform(struct!.messageBody),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function awsLbListenerRuleActionFixedResponseToHclTerraform(struct?: AwsLbListenerRuleActionFixedResponseOutputReference | AwsLbListenerRuleActionFixedResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_body: {
      value: cdktf.stringToHclTerraform(struct!.messageBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionFixedResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionFixedResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._messageBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBody = this._messageBody;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionFixedResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentType = undefined;
      this._messageBody = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentType = value.contentType;
      this._messageBody = value.messageBody;
      this._statusCode = value.statusCode;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // message_body - computed: true, optional: true, required: false
  private _messageBody?: string; 
  public get messageBody() {
    return this.getStringAttribute('message_body');
  }
  public set messageBody(value: string) {
    this._messageBody = value;
  }
  public resetMessageBody() {
    this._messageBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBodyInput() {
    return this._messageBody;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AwsLbListenerRuleActionForwardStickiness {
  /**
  * The time period, in seconds, during which requests from a client should be routed to the same target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#duration AwsLbListenerRule#duration}
  */
  readonly duration: number;
  /**
  * Indicates whether target group stickiness is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#enabled AwsLbListenerRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function awsLbListenerRuleActionForwardStickinessToTerraform(struct?: AwsLbListenerRuleActionForwardStickinessOutputReference | AwsLbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function awsLbListenerRuleActionForwardStickinessToHclTerraform(struct?: AwsLbListenerRuleActionForwardStickinessOutputReference | AwsLbListenerRuleActionForwardStickiness): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionForwardStickinessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionForwardStickiness | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionForwardStickiness | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._enabled = value.enabled;
    }
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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
}
export interface AwsLbListenerRuleActionForwardTargetGroup {
  /**
  * The Amazon Resource Name (ARN) of the target group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#arn AwsLbListenerRule#arn}
  */
  readonly arn: string;
  /**
  * The weight. The range is 0 to 999. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#weight AwsLbListenerRule#weight}
  */
  readonly weight?: number;
}

export function awsLbListenerRuleActionForwardTargetGroupToTerraform(struct?: AwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn: cdktf.stringToTerraform(struct!.arn),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function awsLbListenerRuleActionForwardTargetGroupToHclTerraform(struct?: AwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn: {
      value: cdktf.stringToHclTerraform(struct!.arn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class AwsLbListenerRuleActionForwardTargetGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arn !== undefined) {
      hasAnyValues = true;
      internalValueResult.arn = this._arn;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionForwardTargetGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arn = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arn = value.arn;
      this._weight = value.weight;
    }
  }

  // arn - computed: false, optional: false, required: true
  private _arn?: string; 
  public get arn() {
    return this.getStringAttribute('arn');
  }
  public set arn(value: string) {
    this._arn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnInput() {
    return this._arn;
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

export class AwsLbListenerRuleActionForwardTargetGroupList extends cdktf.ComplexList {
  public internalValue? : AwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable

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
  public get(index: number): AwsLbListenerRuleActionForwardTargetGroupOutputReference {
    return new AwsLbListenerRuleActionForwardTargetGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLbListenerRuleActionForward {
  /**
  * stickiness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#stickiness AwsLbListenerRule#stickiness}
  */
  readonly stickiness?: AwsLbListenerRuleActionForwardStickiness;
  /**
  * target_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#target_group AwsLbListenerRule#target_group}
  */
  readonly targetGroup: AwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable;
}

export function awsLbListenerRuleActionForwardToTerraform(struct?: AwsLbListenerRuleActionForwardOutputReference | AwsLbListenerRuleActionForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stickiness: awsLbListenerRuleActionForwardStickinessToTerraform(struct!.stickiness),
    target_group: cdktf.listMapper(awsLbListenerRuleActionForwardTargetGroupToTerraform, true)(struct!.targetGroup),
  }
}


export function awsLbListenerRuleActionForwardToHclTerraform(struct?: AwsLbListenerRuleActionForwardOutputReference | AwsLbListenerRuleActionForward): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stickiness: {
      value: awsLbListenerRuleActionForwardStickinessToHclTerraform(struct!.stickiness),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionForwardStickinessList",
    },
    target_group: {
      value: cdktf.listMapperHcl(awsLbListenerRuleActionForwardTargetGroupToHclTerraform, true)(struct!.targetGroup),
      isBlock: true,
      type: "set",
      storageClassType: "AwsLbListenerRuleActionForwardTargetGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionForwardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionForward | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stickiness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickiness = this._stickiness?.internalValue;
    }
    if (this._targetGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroup = this._targetGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionForward | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stickiness.internalValue = undefined;
      this._targetGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stickiness.internalValue = value.stickiness;
      this._targetGroup.internalValue = value.targetGroup;
    }
  }

  // stickiness - computed: false, optional: true, required: false
  private _stickiness = new AwsLbListenerRuleActionForwardStickinessOutputReference(this, "stickiness");
  public get stickiness() {
    return this._stickiness;
  }
  public putStickiness(value: AwsLbListenerRuleActionForwardStickiness) {
    this._stickiness.internalValue = value;
  }
  public resetStickiness() {
    this._stickiness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness.internalValue;
  }

  // target_group - computed: false, optional: false, required: true
  private _targetGroup = new AwsLbListenerRuleActionForwardTargetGroupList(this, "target_group", true);
  public get targetGroup() {
    return this._targetGroup;
  }
  public putTargetGroup(value: AwsLbListenerRuleActionForwardTargetGroup[] | cdktf.IResolvable) {
    this._targetGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupInput() {
    return this._targetGroup.internalValue;
  }
}
export interface AwsLbListenerRuleActionRedirect {
  /**
  * The hostname. This component is not percent-encoded. The hostname can contain `#{host}`. Defaults to `#{host}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#host AwsLbListenerRule#host}
  */
  readonly host?: string;
  /**
  * The absolute path, starting with the leading "/". Defaults to `/#{path}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#path AwsLbListenerRule#path}
  */
  readonly path?: string;
  /**
  * The port. Specify a value from `1` to `65535`. Defaults to `#{port}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#port AwsLbListenerRule#port}
  */
  readonly port?: string;
  /**
  * The protocol. Valid values are `HTTP`, `HTTPS`, or `#{protocol}`. Defaults to `#{protocol}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#protocol AwsLbListenerRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The query parameters, URL-encoded when necessary. Defaults to `#{query}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#query AwsLbListenerRule#query}
  */
  readonly query?: string;
  /**
  * The HTTP redirect code. The redirect is either permanent or temporary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#status_code AwsLbListenerRule#status_code}
  */
  readonly statusCode: string;
}

export function awsLbListenerRuleActionRedirectToTerraform(struct?: AwsLbListenerRuleActionRedirectOutputReference | AwsLbListenerRuleActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    query: cdktf.stringToTerraform(struct!.query),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function awsLbListenerRuleActionRedirectToHclTerraform(struct?: AwsLbListenerRuleActionRedirectOutputReference | AwsLbListenerRuleActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._query = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._protocol = value.protocol;
      this._query = value.query;
      this._statusCode = value.statusCode;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface AwsLbListenerRuleAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#order AwsLbListenerRule#order}
  */
  readonly order?: number;
  /**
  * The ARN of the Target Group to which to route traffic. Specify only if `type` is `forward` and you want to route to a single target group. To route to one or more target groups, use a `forward` block instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#target_group_arn AwsLbListenerRule#target_group_arn}
  */
  readonly targetGroupArn?: string;
  /**
  * The type of routing action. Valid values are `redirect`, `forward`, `fixed-response`, `authenticate-cognito` and `authenticate-oidc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#type AwsLbListenerRule#type}
  */
  readonly type: string;
  /**
  * authenticate_cognito block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#authenticate_cognito AwsLbListenerRule#authenticate_cognito}
  */
  readonly authenticateCognito?: AwsLbListenerRuleActionAuthenticateCognito;
  /**
  * authenticate_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#authenticate_oidc AwsLbListenerRule#authenticate_oidc}
  */
  readonly authenticateOidc?: AwsLbListenerRuleActionAuthenticateOidc;
  /**
  * fixed_response block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#fixed_response AwsLbListenerRule#fixed_response}
  */
  readonly fixedResponse?: AwsLbListenerRuleActionFixedResponse;
  /**
  * forward block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#forward AwsLbListenerRule#forward}
  */
  readonly forward?: AwsLbListenerRuleActionForward;
  /**
  * redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#redirect AwsLbListenerRule#redirect}
  */
  readonly redirect?: AwsLbListenerRuleActionRedirect;
}

export function awsLbListenerRuleActionToTerraform(struct?: AwsLbListenerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order: cdktf.numberToTerraform(struct!.order),
    target_group_arn: cdktf.stringToTerraform(struct!.targetGroupArn),
    type: cdktf.stringToTerraform(struct!.type),
    authenticate_cognito: awsLbListenerRuleActionAuthenticateCognitoToTerraform(struct!.authenticateCognito),
    authenticate_oidc: awsLbListenerRuleActionAuthenticateOidcToTerraform(struct!.authenticateOidc),
    fixed_response: awsLbListenerRuleActionFixedResponseToTerraform(struct!.fixedResponse),
    forward: awsLbListenerRuleActionForwardToTerraform(struct!.forward),
    redirect: awsLbListenerRuleActionRedirectToTerraform(struct!.redirect),
  }
}


export function awsLbListenerRuleActionToHclTerraform(struct?: AwsLbListenerRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_group_arn: {
      value: cdktf.stringToHclTerraform(struct!.targetGroupArn),
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
    authenticate_cognito: {
      value: awsLbListenerRuleActionAuthenticateCognitoToHclTerraform(struct!.authenticateCognito),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionAuthenticateCognitoList",
    },
    authenticate_oidc: {
      value: awsLbListenerRuleActionAuthenticateOidcToHclTerraform(struct!.authenticateOidc),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionAuthenticateOidcList",
    },
    fixed_response: {
      value: awsLbListenerRuleActionFixedResponseToHclTerraform(struct!.fixedResponse),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionFixedResponseList",
    },
    forward: {
      value: awsLbListenerRuleActionForwardToHclTerraform(struct!.forward),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionForwardList",
    },
    redirect: {
      value: awsLbListenerRuleActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleActionRedirectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsLbListenerRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._targetGroupArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupArn = this._targetGroupArn;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._authenticateCognito?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateCognito = this._authenticateCognito?.internalValue;
    }
    if (this._authenticateOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticateOidc = this._authenticateOidc?.internalValue;
    }
    if (this._fixedResponse?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedResponse = this._fixedResponse?.internalValue;
    }
    if (this._forward?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._order = undefined;
      this._targetGroupArn = undefined;
      this._type = undefined;
      this._authenticateCognito.internalValue = undefined;
      this._authenticateOidc.internalValue = undefined;
      this._fixedResponse.internalValue = undefined;
      this._forward.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._order = value.order;
      this._targetGroupArn = value.targetGroupArn;
      this._type = value.type;
      this._authenticateCognito.internalValue = value.authenticateCognito;
      this._authenticateOidc.internalValue = value.authenticateOidc;
      this._fixedResponse.internalValue = value.fixedResponse;
      this._forward.internalValue = value.forward;
      this._redirect.internalValue = value.redirect;
    }
  }

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // target_group_arn - computed: true, optional: true, required: false
  private _targetGroupArn?: string; 
  public get targetGroupArn() {
    return this.getStringAttribute('target_group_arn');
  }
  public set targetGroupArn(value: string) {
    this._targetGroupArn = value;
  }
  public resetTargetGroupArn() {
    this._targetGroupArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupArnInput() {
    return this._targetGroupArn;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // authenticate_cognito - computed: false, optional: true, required: false
  private _authenticateCognito = new AwsLbListenerRuleActionAuthenticateCognitoOutputReference(this, "authenticate_cognito");
  public get authenticateCognito() {
    return this._authenticateCognito;
  }
  public putAuthenticateCognito(value: AwsLbListenerRuleActionAuthenticateCognito) {
    this._authenticateCognito.internalValue = value;
  }
  public resetAuthenticateCognito() {
    this._authenticateCognito.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateCognitoInput() {
    return this._authenticateCognito.internalValue;
  }

  // authenticate_oidc - computed: false, optional: true, required: false
  private _authenticateOidc = new AwsLbListenerRuleActionAuthenticateOidcOutputReference(this, "authenticate_oidc");
  public get authenticateOidc() {
    return this._authenticateOidc;
  }
  public putAuthenticateOidc(value: AwsLbListenerRuleActionAuthenticateOidc) {
    this._authenticateOidc.internalValue = value;
  }
  public resetAuthenticateOidc() {
    this._authenticateOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateOidcInput() {
    return this._authenticateOidc.internalValue;
  }

  // fixed_response - computed: false, optional: true, required: false
  private _fixedResponse = new AwsLbListenerRuleActionFixedResponseOutputReference(this, "fixed_response");
  public get fixedResponse() {
    return this._fixedResponse;
  }
  public putFixedResponse(value: AwsLbListenerRuleActionFixedResponse) {
    this._fixedResponse.internalValue = value;
  }
  public resetFixedResponse() {
    this._fixedResponse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedResponseInput() {
    return this._fixedResponse.internalValue;
  }

  // forward - computed: false, optional: true, required: false
  private _forward = new AwsLbListenerRuleActionForwardOutputReference(this, "forward");
  public get forward() {
    return this._forward;
  }
  public putForward(value: AwsLbListenerRuleActionForward) {
    this._forward.internalValue = value;
  }
  public resetForward() {
    this._forward.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new AwsLbListenerRuleActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: AwsLbListenerRuleActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}

export class AwsLbListenerRuleActionList extends cdktf.ComplexList {
  public internalValue? : AwsLbListenerRuleAction[] | cdktf.IResolvable

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
  public get(index: number): AwsLbListenerRuleActionOutputReference {
    return new AwsLbListenerRuleActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLbListenerRuleConditionHostHeader {
  /**
  * Contains a single `values` item which is a list of host header patterns to match. The maximum size of each pattern is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#values AwsLbListenerRule#values}
  */
  readonly values: string[];
}

export function awsLbListenerRuleConditionHostHeaderToTerraform(struct?: AwsLbListenerRuleConditionHostHeaderOutputReference | AwsLbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function awsLbListenerRuleConditionHostHeaderToHclTerraform(struct?: AwsLbListenerRuleConditionHostHeaderOutputReference | AwsLbListenerRuleConditionHostHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionHostHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleConditionHostHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionHostHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AwsLbListenerRuleConditionHttpHeader {
  /**
  * Name of HTTP header to search. The maximum size is 40 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#http_header_name AwsLbListenerRule#http_header_name}
  */
  readonly httpHeaderName: string;
  /**
  * List of header value patterns to match. Maximum size of each pattern is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#values AwsLbListenerRule#values}
  */
  readonly values: string[];
}

export function awsLbListenerRuleConditionHttpHeaderToTerraform(struct?: AwsLbListenerRuleConditionHttpHeaderOutputReference | AwsLbListenerRuleConditionHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_header_name: cdktf.stringToTerraform(struct!.httpHeaderName),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function awsLbListenerRuleConditionHttpHeaderToHclTerraform(struct?: AwsLbListenerRuleConditionHttpHeaderOutputReference | AwsLbListenerRuleConditionHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_header_name: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleConditionHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaderName = this._httpHeaderName;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpHeaderName = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpHeaderName = value.httpHeaderName;
      this._values = value.values;
    }
  }

  // http_header_name - computed: false, optional: false, required: true
  private _httpHeaderName?: string; 
  public get httpHeaderName() {
    return this.getStringAttribute('http_header_name');
  }
  public set httpHeaderName(value: string) {
    this._httpHeaderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderNameInput() {
    return this._httpHeaderName;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AwsLbListenerRuleConditionHttpRequestMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#values AwsLbListenerRule#values}
  */
  readonly values: string[];
}

export function awsLbListenerRuleConditionHttpRequestMethodToTerraform(struct?: AwsLbListenerRuleConditionHttpRequestMethodOutputReference | AwsLbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function awsLbListenerRuleConditionHttpRequestMethodToHclTerraform(struct?: AwsLbListenerRuleConditionHttpRequestMethodOutputReference | AwsLbListenerRuleConditionHttpRequestMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionHttpRequestMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleConditionHttpRequestMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionHttpRequestMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AwsLbListenerRuleConditionPathPattern {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#values AwsLbListenerRule#values}
  */
  readonly values: string[];
}

export function awsLbListenerRuleConditionPathPatternToTerraform(struct?: AwsLbListenerRuleConditionPathPatternOutputReference | AwsLbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function awsLbListenerRuleConditionPathPatternToHclTerraform(struct?: AwsLbListenerRuleConditionPathPatternOutputReference | AwsLbListenerRuleConditionPathPattern): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionPathPatternOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleConditionPathPattern | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionPathPattern | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AwsLbListenerRuleConditionQueryString {
  /**
  * Query string key pattern to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#key AwsLbListenerRule#key}
  */
  readonly key?: string;
  /**
  * Query string value pattern to match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#value AwsLbListenerRule#value}
  */
  readonly value: string;
}

export function awsLbListenerRuleConditionQueryStringToTerraform(struct?: AwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsLbListenerRuleConditionQueryStringToHclTerraform(struct?: AwsLbListenerRuleConditionQueryString | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionQueryStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionQueryString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
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
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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
}

export class AwsLbListenerRuleConditionQueryStringList extends cdktf.ComplexList {
  public internalValue? : AwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable

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
  public get(index: number): AwsLbListenerRuleConditionQueryStringOutputReference {
    return new AwsLbListenerRuleConditionQueryStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLbListenerRuleConditionSourceIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#values AwsLbListenerRule#values}
  */
  readonly values: string[];
}

export function awsLbListenerRuleConditionSourceIpToTerraform(struct?: AwsLbListenerRuleConditionSourceIpOutputReference | AwsLbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function awsLbListenerRuleConditionSourceIpToHclTerraform(struct?: AwsLbListenerRuleConditionSourceIpOutputReference | AwsLbListenerRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsLbListenerRuleConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface AwsLbListenerRuleCondition {
  /**
  * host_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#host_header AwsLbListenerRule#host_header}
  */
  readonly hostHeader?: AwsLbListenerRuleConditionHostHeader;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#http_header AwsLbListenerRule#http_header}
  */
  readonly httpHeader?: AwsLbListenerRuleConditionHttpHeader;
  /**
  * http_request_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#http_request_method AwsLbListenerRule#http_request_method}
  */
  readonly httpRequestMethod?: AwsLbListenerRuleConditionHttpRequestMethod;
  /**
  * path_pattern block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#path_pattern AwsLbListenerRule#path_pattern}
  */
  readonly pathPattern?: AwsLbListenerRuleConditionPathPattern;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#query_string AwsLbListenerRule#query_string}
  */
  readonly queryString?: AwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable;
  /**
  * source_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#source_ip AwsLbListenerRule#source_ip}
  */
  readonly sourceIp?: AwsLbListenerRuleConditionSourceIp;
}

export function awsLbListenerRuleConditionToTerraform(struct?: AwsLbListenerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_header: awsLbListenerRuleConditionHostHeaderToTerraform(struct!.hostHeader),
    http_header: awsLbListenerRuleConditionHttpHeaderToTerraform(struct!.httpHeader),
    http_request_method: awsLbListenerRuleConditionHttpRequestMethodToTerraform(struct!.httpRequestMethod),
    path_pattern: awsLbListenerRuleConditionPathPatternToTerraform(struct!.pathPattern),
    query_string: cdktf.listMapper(awsLbListenerRuleConditionQueryStringToTerraform, true)(struct!.queryString),
    source_ip: awsLbListenerRuleConditionSourceIpToTerraform(struct!.sourceIp),
  }
}


export function awsLbListenerRuleConditionToHclTerraform(struct?: AwsLbListenerRuleCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_header: {
      value: awsLbListenerRuleConditionHostHeaderToHclTerraform(struct!.hostHeader),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleConditionHostHeaderList",
    },
    http_header: {
      value: awsLbListenerRuleConditionHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleConditionHttpHeaderList",
    },
    http_request_method: {
      value: awsLbListenerRuleConditionHttpRequestMethodToHclTerraform(struct!.httpRequestMethod),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleConditionHttpRequestMethodList",
    },
    path_pattern: {
      value: awsLbListenerRuleConditionPathPatternToHclTerraform(struct!.pathPattern),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleConditionPathPatternList",
    },
    query_string: {
      value: cdktf.listMapperHcl(awsLbListenerRuleConditionQueryStringToHclTerraform, true)(struct!.queryString),
      isBlock: true,
      type: "set",
      storageClassType: "AwsLbListenerRuleConditionQueryStringList",
    },
    source_ip: {
      value: awsLbListenerRuleConditionSourceIpToHclTerraform(struct!.sourceIp),
      isBlock: true,
      type: "list",
      storageClassType: "AwsLbListenerRuleConditionSourceIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsLbListenerRuleCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader?.internalValue;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._httpRequestMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod?.internalValue;
    }
    if (this._pathPattern?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPattern = this._pathPattern?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    if (this._sourceIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = undefined;
      this._httpHeader.internalValue = undefined;
      this._httpRequestMethod.internalValue = undefined;
      this._pathPattern.internalValue = undefined;
      this._queryString.internalValue = undefined;
      this._sourceIp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostHeader.internalValue = value.hostHeader;
      this._httpHeader.internalValue = value.httpHeader;
      this._httpRequestMethod.internalValue = value.httpRequestMethod;
      this._pathPattern.internalValue = value.pathPattern;
      this._queryString.internalValue = value.queryString;
      this._sourceIp.internalValue = value.sourceIp;
    }
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader = new AwsLbListenerRuleConditionHostHeaderOutputReference(this, "host_header");
  public get hostHeader() {
    return this._hostHeader;
  }
  public putHostHeader(value: AwsLbListenerRuleConditionHostHeader) {
    this._hostHeader.internalValue = value;
  }
  public resetHostHeader() {
    this._hostHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader.internalValue;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new AwsLbListenerRuleConditionHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: AwsLbListenerRuleConditionHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod = new AwsLbListenerRuleConditionHttpRequestMethodOutputReference(this, "http_request_method");
  public get httpRequestMethod() {
    return this._httpRequestMethod;
  }
  public putHttpRequestMethod(value: AwsLbListenerRuleConditionHttpRequestMethod) {
    this._httpRequestMethod.internalValue = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod.internalValue;
  }

  // path_pattern - computed: false, optional: true, required: false
  private _pathPattern = new AwsLbListenerRuleConditionPathPatternOutputReference(this, "path_pattern");
  public get pathPattern() {
    return this._pathPattern;
  }
  public putPathPattern(value: AwsLbListenerRuleConditionPathPattern) {
    this._pathPattern.internalValue = value;
  }
  public resetPathPattern() {
    this._pathPattern.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new AwsLbListenerRuleConditionQueryStringList(this, "query_string", true);
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: AwsLbListenerRuleConditionQueryString[] | cdktf.IResolvable) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp = new AwsLbListenerRuleConditionSourceIpOutputReference(this, "source_ip");
  public get sourceIp() {
    return this._sourceIp;
  }
  public putSourceIp(value: AwsLbListenerRuleConditionSourceIp) {
    this._sourceIp.internalValue = value;
  }
  public resetSourceIp() {
    this._sourceIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp.internalValue;
  }
}

export class AwsLbListenerRuleConditionList extends cdktf.ComplexList {
  public internalValue? : AwsLbListenerRuleCondition[] | cdktf.IResolvable

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
  public get(index: number): AwsLbListenerRuleConditionOutputReference {
    return new AwsLbListenerRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLbListenerRuleTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#key AwsLbListenerRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#value AwsLbListenerRule#value}
  */
  readonly value: string;
}

export function awsLbListenerRuleTagsToTerraform(struct?: AwsLbListenerRuleTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsLbListenerRuleTagsToHclTerraform(struct?: AwsLbListenerRuleTags | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsLbListenerRuleTags | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
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
    }
  }

  // key - computed: false, optional: false, required: true
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

  // value - computed: false, optional: false, required: true
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
}

export class AwsLbListenerRuleTagsList extends cdktf.ComplexList {
  public internalValue? : AwsLbListenerRuleTags[] | cdktf.IResolvable

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
  public get(index: number): AwsLbListenerRuleTagsOutputReference {
    return new AwsLbListenerRuleTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsLbListenerRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#create AwsLbListenerRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#delete AwsLbListenerRule#delete}
  */
  readonly delete?: string;
}

export function awsLbListenerRuleTimeoutsToTerraform(struct?: AwsLbListenerRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function awsLbListenerRuleTimeoutsToHclTerraform(struct?: AwsLbListenerRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsLbListenerRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsLbListenerRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsLbListenerRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule duplocloud_aws_lb_listener_rule}
*/
export class AwsLbListenerRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_lb_listener_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsLbListenerRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsLbListenerRule to import
  * @param importFromId The id of the existing AwsLbListenerRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsLbListenerRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_lb_listener_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_lb_listener_rule duplocloud_aws_lb_listener_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsLbListenerRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AwsLbListenerRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_lb_listener_rule',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._listenerArn = config.listenerArn;
    this._priority = config.priority;
    this._tenantId = config.tenantId;
    this._action.internalValue = config.action;
    this._condition.internalValue = config.condition;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // listener_arn - computed: false, optional: false, required: true
  private _listenerArn?: string; 
  public get listenerArn() {
    return this.getStringAttribute('listener_arn');
  }
  public set listenerArn(value: string) {
    this._listenerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerArnInput() {
    return this._listenerArn;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // action - computed: false, optional: false, required: true
  private _action = new AwsLbListenerRuleActionList(this, "action", false);
  public get action() {
    return this._action;
  }
  public putAction(value: AwsLbListenerRuleAction[] | cdktf.IResolvable) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // condition - computed: false, optional: false, required: true
  private _condition = new AwsLbListenerRuleConditionList(this, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: AwsLbListenerRuleCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AwsLbListenerRuleTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AwsLbListenerRuleTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsLbListenerRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsLbListenerRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      listener_arn: cdktf.stringToTerraform(this._listenerArn),
      priority: cdktf.numberToTerraform(this._priority),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      action: cdktf.listMapper(awsLbListenerRuleActionToTerraform, true)(this._action.internalValue),
      condition: cdktf.listMapper(awsLbListenerRuleConditionToTerraform, true)(this._condition.internalValue),
      tags: cdktf.listMapper(awsLbListenerRuleTagsToTerraform, true)(this._tags.internalValue),
      timeouts: awsLbListenerRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_arn: {
        value: cdktf.stringToHclTerraform(this._listenerArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action: {
        value: cdktf.listMapperHcl(awsLbListenerRuleActionToHclTerraform, true)(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLbListenerRuleActionList",
      },
      condition: {
        value: cdktf.listMapperHcl(awsLbListenerRuleConditionToHclTerraform, true)(this._condition.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsLbListenerRuleConditionList",
      },
      tags: {
        value: cdktf.listMapperHcl(awsLbListenerRuleTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsLbListenerRuleTagsList",
      },
      timeouts: {
        value: awsLbListenerRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsLbListenerRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
