// https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAppsyncGraphqlApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#api_type AwsAppsyncGraphqlApi#api_type}
  */
  readonly apiType?: string;
  /**
  * The authentication type for the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authentication_type AwsAppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * The configuration for the introspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#introspection_config AwsAppsyncGraphqlApi#introspection_config}
  */
  readonly introspectionConfig?: string;
  /**
  * The ARN of the merged API execution role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#merged_api_execution_role_arn AwsAppsyncGraphqlApi#merged_api_execution_role_arn}
  */
  readonly mergedApiExecutionRoleArn?: string;
  /**
  * The name of the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#name AwsAppsyncGraphqlApi#name}
  */
  readonly name: string;
  /**
  * The contact information for the owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#owner_contact AwsAppsyncGraphqlApi#owner_contact}
  */
  readonly ownerContact?: string;
  /**
  * The depth limit for the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#query_depth_limit AwsAppsyncGraphqlApi#query_depth_limit}
  */
  readonly queryDepthLimit?: number;
  /**
  * The count limit for the resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#resolver_count_limit AwsAppsyncGraphqlApi#resolver_count_limit}
  */
  readonly resolverCountLimit?: number;
  /**
  * The schema definition for the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#schema AwsAppsyncGraphqlApi#schema}
  */
  readonly schema?: string;
  /**
  * The tags for the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#tags AwsAppsyncGraphqlApi#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The visibility of the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#visibility AwsAppsyncGraphqlApi#visibility}
  */
  readonly visibility?: string;
  /**
  * Whether X-Ray tracing is enabled for the GraphQL API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#xray_enabled AwsAppsyncGraphqlApi#xray_enabled}
  */
  readonly xrayEnabled?: boolean | cdktf.IResolvable;
  /**
  * additional_authentication_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#additional_authentication_providers AwsAppsyncGraphqlApi#additional_authentication_providers}
  */
  readonly additionalAuthenticationProviders?: AwsAppsyncGraphqlApiAdditionalAuthenticationProviders[] | cdktf.IResolvable;
  /**
  * enhanced_metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#enhanced_metrics_config AwsAppsyncGraphqlApi#enhanced_metrics_config}
  */
  readonly enhancedMetricsConfig?: AwsAppsyncGraphqlApiEnhancedMetricsConfig;
  /**
  * lambda_authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#lambda_authorizer_config AwsAppsyncGraphqlApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AwsAppsyncGraphqlApiLambdaAuthorizerConfig;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#log_config AwsAppsyncGraphqlApi#log_config}
  */
  readonly logConfig?: AwsAppsyncGraphqlApiLogConfig;
  /**
  * openid_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#openid_connect_config AwsAppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AwsAppsyncGraphqlApiOpenidConnectConfig;
  /**
  * user_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#user_pool_config AwsAppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AwsAppsyncGraphqlApiUserPoolConfig;
}
export interface AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig {
  /**
  * The TTL for the authorizer result in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authorizer_result_ttl_seconds AwsAppsyncGraphqlApi#authorizer_result_ttl_seconds}
  */
  readonly authorizerResultTtlSeconds?: number;
  /**
  * The URI of the authorizer Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authorizer_uri AwsAppsyncGraphqlApi#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * The validation expression for the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#identity_validation_expression AwsAppsyncGraphqlApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_result_ttl_seconds: cdktf.numberToTerraform(struct!.authorizerResultTtlSeconds),
    authorizer_uri: cdktf.stringToTerraform(struct!.authorizerUri),
    identity_validation_expression: cdktf.stringToTerraform(struct!.identityValidationExpression),
  }
}


export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_result_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizerResultTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_validation_expression: {
      value: cdktf.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerResultTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlSeconds = this._authorizerResultTtlSeconds;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerResultTtlSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerResultTtlSeconds = value.authorizerResultTtlSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlSeconds?: number; 
  public get authorizerResultTtlSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_seconds');
  }
  public set authorizerResultTtlSeconds(value: number) {
    this._authorizerResultTtlSeconds = value;
  }
  public resetAuthorizerResultTtlSeconds() {
    this._authorizerResultTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlSecondsInput() {
    return this._authorizerResultTtlSeconds;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }
}
export interface AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig {
  /**
  * The TTL for the authentication token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#auth_ttl AwsAppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * The client ID for the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#client_id AwsAppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * The TTL for the IAT token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#iat_ttl AwsAppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * The issuer URL for the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#issuer AwsAppsyncGraphqlApi#issuer}
  */
  readonly issuer?: string;
}

export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigToTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_ttl: {
      value: cdktf.numberToHclTerraform(struct!.authTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat_ttl: {
      value: cdktf.numberToHclTerraform(struct!.iatTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: false, optional: true, required: false
  private _authTtl?: number; 
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }
  public set authTtl(value: number) {
    this._authTtl = value;
  }
  public resetAuthTtl() {
    this._authTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTtlInput() {
    return this._authTtl;
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

  // iat_ttl - computed: false, optional: true, required: false
  private _iatTtl?: number; 
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }
  public set iatTtl(value: number) {
    this._iatTtl = value;
  }
  public resetIatTtl() {
    this._iatTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatTtlInput() {
    return this._iatTtl;
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
}
export interface AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig {
  /**
  * The regular expression for validating the app client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#app_id_client_regex AwsAppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * The AWS region for the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#aws_region AwsAppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The ID of the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#user_pool_id AwsAppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId?: string;
}

export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigToTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}


export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference | AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id_client_regex: {
      value: cdktf.stringToHclTerraform(struct!.appIdClientRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIdClientRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._userPoolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appIdClientRegex = value.appIdClientRegex;
      this._awsRegion = value.awsRegion;
      this._userPoolId = value.userPoolId;
    }
  }

  // app_id_client_regex - computed: false, optional: true, required: false
  private _appIdClientRegex?: string; 
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }
  public set appIdClientRegex(value: string) {
    this._appIdClientRegex = value;
  }
  public resetAppIdClientRegex() {
    this._appIdClientRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdClientRegexInput() {
    return this._appIdClientRegex;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // user_pool_id - computed: false, optional: true, required: false
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  public resetUserPoolId() {
    this._userPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}
export interface AwsAppsyncGraphqlApiAdditionalAuthenticationProviders {
  /**
  * The authentication type for the additional authentication provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authentication_type AwsAppsyncGraphqlApi#authentication_type}
  */
  readonly authenticationType: string;
  /**
  * lambda_authorizer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#lambda_authorizer_config AwsAppsyncGraphqlApi#lambda_authorizer_config}
  */
  readonly lambdaAuthorizerConfig?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig;
  /**
  * openid_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#openid_connect_config AwsAppsyncGraphqlApi#openid_connect_config}
  */
  readonly openidConnectConfig?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig;
  /**
  * user_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#user_pool_config AwsAppsyncGraphqlApi#user_pool_config}
  */
  readonly userPoolConfig?: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig;
}

export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersToTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_type: cdktf.stringToTerraform(struct!.authenticationType),
    lambda_authorizer_config: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToTerraform(struct!.lambdaAuthorizerConfig),
    openid_connect_config: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigToTerraform(struct!.openidConnectConfig),
    user_pool_config: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigToTerraform(struct!.userPoolConfig),
  }
}


export function awsAppsyncGraphqlApiAdditionalAuthenticationProvidersToHclTerraform(struct?: AwsAppsyncGraphqlApiAdditionalAuthenticationProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_type: {
      value: cdktf.stringToHclTerraform(struct!.authenticationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lambda_authorizer_config: {
      value: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigToHclTerraform(struct!.lambdaAuthorizerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigList",
    },
    openid_connect_config: {
      value: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigToHclTerraform(struct!.openidConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigList",
    },
    user_pool_config: {
      value: awsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigToHclTerraform(struct!.userPoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsAppsyncGraphqlApiAdditionalAuthenticationProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationType = this._authenticationType;
    }
    if (this._lambdaAuthorizerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lambdaAuthorizerConfig = this._lambdaAuthorizerConfig?.internalValue;
    }
    if (this._openidConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openidConnectConfig = this._openidConnectConfig?.internalValue;
    }
    if (this._userPoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolConfig = this._userPoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticationType = undefined;
      this._lambdaAuthorizerConfig.internalValue = undefined;
      this._openidConnectConfig.internalValue = undefined;
      this._userPoolConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticationType = value.authenticationType;
      this._lambdaAuthorizerConfig.internalValue = value.lambdaAuthorizerConfig;
      this._openidConnectConfig.internalValue = value.openidConnectConfig;
      this._userPoolConfig.internalValue = value.userPoolConfig;
    }
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // lambda_authorizer_config - computed: false, optional: true, required: false
  private _lambdaAuthorizerConfig = new AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersLambdaAuthorizerConfig) {
    this._lambdaAuthorizerConfig.internalValue = value;
  }
  public resetLambdaAuthorizerConfig() {
    this._lambdaAuthorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaAuthorizerConfigInput() {
    return this._lambdaAuthorizerConfig.internalValue;
  }

  // openid_connect_config - computed: false, optional: true, required: false
  private _openidConnectConfig = new AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfigOutputReference(this, "openid_connect_config");
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public putOpenidConnectConfig(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOpenidConnectConfig) {
    this._openidConnectConfig.internalValue = value;
  }
  public resetOpenidConnectConfig() {
    this._openidConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectConfigInput() {
    return this._openidConnectConfig.internalValue;
  }

  // user_pool_config - computed: false, optional: true, required: false
  private _userPoolConfig = new AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfigOutputReference(this, "user_pool_config");
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
  public putUserPoolConfig(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersUserPoolConfig) {
    this._userPoolConfig.internalValue = value;
  }
  public resetUserPoolConfig() {
    this._userPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolConfigInput() {
    return this._userPoolConfig.internalValue;
  }
}

export class AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersList extends cdktf.ComplexList {
  public internalValue? : AwsAppsyncGraphqlApiAdditionalAuthenticationProviders[] | cdktf.IResolvable

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
  public get(index: number): AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOutputReference {
    return new AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsAppsyncGraphqlApiEnhancedMetricsConfig {
  /**
  * The behavior for data source level metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#data_source_level_metrics_behavior AwsAppsyncGraphqlApi#data_source_level_metrics_behavior}
  */
  readonly dataSourceLevelMetricsBehavior: string;
  /**
  * The configuration for operation level metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#operation_level_metrics_config AwsAppsyncGraphqlApi#operation_level_metrics_config}
  */
  readonly operationLevelMetricsConfig: string;
  /**
  * The behavior for resolver level metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#resolver_level_metrics_behavior AwsAppsyncGraphqlApi#resolver_level_metrics_behavior}
  */
  readonly resolverLevelMetricsBehavior: string;
}

export function awsAppsyncGraphqlApiEnhancedMetricsConfigToTerraform(struct?: AwsAppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AwsAppsyncGraphqlApiEnhancedMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_level_metrics_behavior: cdktf.stringToTerraform(struct!.dataSourceLevelMetricsBehavior),
    operation_level_metrics_config: cdktf.stringToTerraform(struct!.operationLevelMetricsConfig),
    resolver_level_metrics_behavior: cdktf.stringToTerraform(struct!.resolverLevelMetricsBehavior),
  }
}


export function awsAppsyncGraphqlApiEnhancedMetricsConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiEnhancedMetricsConfigOutputReference | AwsAppsyncGraphqlApiEnhancedMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_level_metrics_behavior: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceLevelMetricsBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_level_metrics_config: {
      value: cdktf.stringToHclTerraform(struct!.operationLevelMetricsConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resolver_level_metrics_behavior: {
      value: cdktf.stringToHclTerraform(struct!.resolverLevelMetricsBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiEnhancedMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiEnhancedMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceLevelMetricsBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceLevelMetricsBehavior = this._dataSourceLevelMetricsBehavior;
    }
    if (this._operationLevelMetricsConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationLevelMetricsConfig = this._operationLevelMetricsConfig;
    }
    if (this._resolverLevelMetricsBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolverLevelMetricsBehavior = this._resolverLevelMetricsBehavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiEnhancedMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataSourceLevelMetricsBehavior = undefined;
      this._operationLevelMetricsConfig = undefined;
      this._resolverLevelMetricsBehavior = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataSourceLevelMetricsBehavior = value.dataSourceLevelMetricsBehavior;
      this._operationLevelMetricsConfig = value.operationLevelMetricsConfig;
      this._resolverLevelMetricsBehavior = value.resolverLevelMetricsBehavior;
    }
  }

  // data_source_level_metrics_behavior - computed: false, optional: false, required: true
  private _dataSourceLevelMetricsBehavior?: string; 
  public get dataSourceLevelMetricsBehavior() {
    return this.getStringAttribute('data_source_level_metrics_behavior');
  }
  public set dataSourceLevelMetricsBehavior(value: string) {
    this._dataSourceLevelMetricsBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceLevelMetricsBehaviorInput() {
    return this._dataSourceLevelMetricsBehavior;
  }

  // operation_level_metrics_config - computed: false, optional: false, required: true
  private _operationLevelMetricsConfig?: string; 
  public get operationLevelMetricsConfig() {
    return this.getStringAttribute('operation_level_metrics_config');
  }
  public set operationLevelMetricsConfig(value: string) {
    this._operationLevelMetricsConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationLevelMetricsConfigInput() {
    return this._operationLevelMetricsConfig;
  }

  // resolver_level_metrics_behavior - computed: false, optional: false, required: true
  private _resolverLevelMetricsBehavior?: string; 
  public get resolverLevelMetricsBehavior() {
    return this.getStringAttribute('resolver_level_metrics_behavior');
  }
  public set resolverLevelMetricsBehavior(value: string) {
    this._resolverLevelMetricsBehavior = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverLevelMetricsBehaviorInput() {
    return this._resolverLevelMetricsBehavior;
  }
}
export interface AwsAppsyncGraphqlApiLambdaAuthorizerConfig {
  /**
  * The TTL for the authorizer result in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authorizer_result_ttl_seconds AwsAppsyncGraphqlApi#authorizer_result_ttl_seconds}
  */
  readonly authorizerResultTtlSeconds?: number;
  /**
  * The URI of the authorizer Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#authorizer_uri AwsAppsyncGraphqlApi#authorizer_uri}
  */
  readonly authorizerUri?: string;
  /**
  * The validation expression for the identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#identity_validation_expression AwsAppsyncGraphqlApi#identity_validation_expression}
  */
  readonly identityValidationExpression?: string;
}

export function awsAppsyncGraphqlApiLambdaAuthorizerConfigToTerraform(struct?: AwsAppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AwsAppsyncGraphqlApiLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_result_ttl_seconds: cdktf.numberToTerraform(struct!.authorizerResultTtlSeconds),
    authorizer_uri: cdktf.stringToTerraform(struct!.authorizerUri),
    identity_validation_expression: cdktf.stringToTerraform(struct!.identityValidationExpression),
  }
}


export function awsAppsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiLambdaAuthorizerConfigOutputReference | AwsAppsyncGraphqlApiLambdaAuthorizerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_result_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizerResultTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorizer_uri: {
      value: cdktf.stringToHclTerraform(struct!.authorizerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_validation_expression: {
      value: cdktf.stringToHclTerraform(struct!.identityValidationExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiLambdaAuthorizerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiLambdaAuthorizerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerResultTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerResultTtlSeconds = this._authorizerResultTtlSeconds;
    }
    if (this._authorizerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerUri = this._authorizerUri;
    }
    if (this._identityValidationExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityValidationExpression = this._identityValidationExpression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiLambdaAuthorizerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerResultTtlSeconds = undefined;
      this._authorizerUri = undefined;
      this._identityValidationExpression = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerResultTtlSeconds = value.authorizerResultTtlSeconds;
      this._authorizerUri = value.authorizerUri;
      this._identityValidationExpression = value.identityValidationExpression;
    }
  }

  // authorizer_result_ttl_seconds - computed: false, optional: true, required: false
  private _authorizerResultTtlSeconds?: number; 
  public get authorizerResultTtlSeconds() {
    return this.getNumberAttribute('authorizer_result_ttl_seconds');
  }
  public set authorizerResultTtlSeconds(value: number) {
    this._authorizerResultTtlSeconds = value;
  }
  public resetAuthorizerResultTtlSeconds() {
    this._authorizerResultTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerResultTtlSecondsInput() {
    return this._authorizerResultTtlSeconds;
  }

  // authorizer_uri - computed: false, optional: true, required: false
  private _authorizerUri?: string; 
  public get authorizerUri() {
    return this.getStringAttribute('authorizer_uri');
  }
  public set authorizerUri(value: string) {
    this._authorizerUri = value;
  }
  public resetAuthorizerUri() {
    this._authorizerUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerUriInput() {
    return this._authorizerUri;
  }

  // identity_validation_expression - computed: false, optional: true, required: false
  private _identityValidationExpression?: string; 
  public get identityValidationExpression() {
    return this.getStringAttribute('identity_validation_expression');
  }
  public set identityValidationExpression(value: string) {
    this._identityValidationExpression = value;
  }
  public resetIdentityValidationExpression() {
    this._identityValidationExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityValidationExpressionInput() {
    return this._identityValidationExpression;
  }
}
export interface AwsAppsyncGraphqlApiLogConfig {
  /**
  * The ARN of the CloudWatch Logs role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#cloudwatch_logs_role_arn AwsAppsyncGraphqlApi#cloudwatch_logs_role_arn}
  */
  readonly cloudwatchLogsRoleArn?: string;
  /**
  * Whether to exclude verbose content from the log.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#exclude_verbose_content AwsAppsyncGraphqlApi#exclude_verbose_content}
  */
  readonly excludeVerboseContent?: boolean | cdktf.IResolvable;
  /**
  * The log level for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#field_log_level AwsAppsyncGraphqlApi#field_log_level}
  */
  readonly fieldLogLevel?: string;
}

export function awsAppsyncGraphqlApiLogConfigToTerraform(struct?: AwsAppsyncGraphqlApiLogConfigOutputReference | AwsAppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudwatch_logs_role_arn: cdktf.stringToTerraform(struct!.cloudwatchLogsRoleArn),
    exclude_verbose_content: cdktf.booleanToTerraform(struct!.excludeVerboseContent),
    field_log_level: cdktf.stringToTerraform(struct!.fieldLogLevel),
  }
}


export function awsAppsyncGraphqlApiLogConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiLogConfigOutputReference | AwsAppsyncGraphqlApiLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudwatch_logs_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.cloudwatchLogsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_verbose_content: {
      value: cdktf.booleanToHclTerraform(struct!.excludeVerboseContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_log_level: {
      value: cdktf.stringToHclTerraform(struct!.fieldLogLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudwatchLogsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudwatchLogsRoleArn = this._cloudwatchLogsRoleArn;
    }
    if (this._excludeVerboseContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeVerboseContent = this._excludeVerboseContent;
    }
    if (this._fieldLogLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldLogLevel = this._fieldLogLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudwatchLogsRoleArn = undefined;
      this._excludeVerboseContent = undefined;
      this._fieldLogLevel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudwatchLogsRoleArn = value.cloudwatchLogsRoleArn;
      this._excludeVerboseContent = value.excludeVerboseContent;
      this._fieldLogLevel = value.fieldLogLevel;
    }
  }

  // cloudwatch_logs_role_arn - computed: false, optional: true, required: false
  private _cloudwatchLogsRoleArn?: string; 
  public get cloudwatchLogsRoleArn() {
    return this.getStringAttribute('cloudwatch_logs_role_arn');
  }
  public set cloudwatchLogsRoleArn(value: string) {
    this._cloudwatchLogsRoleArn = value;
  }
  public resetCloudwatchLogsRoleArn() {
    this._cloudwatchLogsRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudwatchLogsRoleArnInput() {
    return this._cloudwatchLogsRoleArn;
  }

  // exclude_verbose_content - computed: false, optional: true, required: false
  private _excludeVerboseContent?: boolean | cdktf.IResolvable; 
  public get excludeVerboseContent() {
    return this.getBooleanAttribute('exclude_verbose_content');
  }
  public set excludeVerboseContent(value: boolean | cdktf.IResolvable) {
    this._excludeVerboseContent = value;
  }
  public resetExcludeVerboseContent() {
    this._excludeVerboseContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeVerboseContentInput() {
    return this._excludeVerboseContent;
  }

  // field_log_level - computed: false, optional: true, required: false
  private _fieldLogLevel?: string; 
  public get fieldLogLevel() {
    return this.getStringAttribute('field_log_level');
  }
  public set fieldLogLevel(value: string) {
    this._fieldLogLevel = value;
  }
  public resetFieldLogLevel() {
    this._fieldLogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldLogLevelInput() {
    return this._fieldLogLevel;
  }
}
export interface AwsAppsyncGraphqlApiOpenidConnectConfig {
  /**
  * The TTL for the authentication token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#auth_ttl AwsAppsyncGraphqlApi#auth_ttl}
  */
  readonly authTtl?: number;
  /**
  * The client ID for the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#client_id AwsAppsyncGraphqlApi#client_id}
  */
  readonly clientId?: string;
  /**
  * The TTL for the IAT token in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#iat_ttl AwsAppsyncGraphqlApi#iat_ttl}
  */
  readonly iatTtl?: number;
  /**
  * The issuer URL for the OpenID Connect provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#issuer AwsAppsyncGraphqlApi#issuer}
  */
  readonly issuer?: string;
}

export function awsAppsyncGraphqlApiOpenidConnectConfigToTerraform(struct?: AwsAppsyncGraphqlApiOpenidConnectConfigOutputReference | AwsAppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_ttl: cdktf.numberToTerraform(struct!.authTtl),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    iat_ttl: cdktf.numberToTerraform(struct!.iatTtl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function awsAppsyncGraphqlApiOpenidConnectConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiOpenidConnectConfigOutputReference | AwsAppsyncGraphqlApiOpenidConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_ttl: {
      value: cdktf.numberToHclTerraform(struct!.authTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat_ttl: {
      value: cdktf.numberToHclTerraform(struct!.iatTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiOpenidConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiOpenidConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTtl = this._authTtl;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._iatTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.iatTtl = this._iatTtl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiOpenidConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authTtl = undefined;
      this._clientId = undefined;
      this._iatTtl = undefined;
      this._issuer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authTtl = value.authTtl;
      this._clientId = value.clientId;
      this._iatTtl = value.iatTtl;
      this._issuer = value.issuer;
    }
  }

  // auth_ttl - computed: false, optional: true, required: false
  private _authTtl?: number; 
  public get authTtl() {
    return this.getNumberAttribute('auth_ttl');
  }
  public set authTtl(value: number) {
    this._authTtl = value;
  }
  public resetAuthTtl() {
    this._authTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTtlInput() {
    return this._authTtl;
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

  // iat_ttl - computed: false, optional: true, required: false
  private _iatTtl?: number; 
  public get iatTtl() {
    return this.getNumberAttribute('iat_ttl');
  }
  public set iatTtl(value: number) {
    this._iatTtl = value;
  }
  public resetIatTtl() {
    this._iatTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatTtlInput() {
    return this._iatTtl;
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
}
export interface AwsAppsyncGraphqlApiUserPoolConfig {
  /**
  * The regular expression for validating the app client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#app_id_client_regex AwsAppsyncGraphqlApi#app_id_client_regex}
  */
  readonly appIdClientRegex?: string;
  /**
  * The AWS region for the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#aws_region AwsAppsyncGraphqlApi#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The default action for the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#default_action AwsAppsyncGraphqlApi#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The ID of the user pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#user_pool_id AwsAppsyncGraphqlApi#user_pool_id}
  */
  readonly userPoolId?: string;
}

export function awsAppsyncGraphqlApiUserPoolConfigToTerraform(struct?: AwsAppsyncGraphqlApiUserPoolConfigOutputReference | AwsAppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id_client_regex: cdktf.stringToTerraform(struct!.appIdClientRegex),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    user_pool_id: cdktf.stringToTerraform(struct!.userPoolId),
  }
}


export function awsAppsyncGraphqlApiUserPoolConfigToHclTerraform(struct?: AwsAppsyncGraphqlApiUserPoolConfigOutputReference | AwsAppsyncGraphqlApiUserPoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id_client_regex: {
      value: cdktf.stringToHclTerraform(struct!.appIdClientRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_pool_id: {
      value: cdktf.stringToHclTerraform(struct!.userPoolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAppsyncGraphqlApiUserPoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAppsyncGraphqlApiUserPoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appIdClientRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIdClientRegex = this._appIdClientRegex;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._userPoolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPoolId = this._userPoolId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAppsyncGraphqlApiUserPoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appIdClientRegex = undefined;
      this._awsRegion = undefined;
      this._defaultAction = undefined;
      this._userPoolId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appIdClientRegex = value.appIdClientRegex;
      this._awsRegion = value.awsRegion;
      this._defaultAction = value.defaultAction;
      this._userPoolId = value.userPoolId;
    }
  }

  // app_id_client_regex - computed: false, optional: true, required: false
  private _appIdClientRegex?: string; 
  public get appIdClientRegex() {
    return this.getStringAttribute('app_id_client_regex');
  }
  public set appIdClientRegex(value: string) {
    this._appIdClientRegex = value;
  }
  public resetAppIdClientRegex() {
    this._appIdClientRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdClientRegexInput() {
    return this._appIdClientRegex;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // user_pool_id - computed: false, optional: true, required: false
  private _userPoolId?: string; 
  public get userPoolId() {
    return this.getStringAttribute('user_pool_id');
  }
  public set userPoolId(value: string) {
    this._userPoolId = value;
  }
  public resetUserPoolId() {
    this._userPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolIdInput() {
    return this._userPoolId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api gravicore_aws_appsync_graphql_api}
*/
export class AwsAppsyncGraphqlApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gravicore_aws_appsync_graphql_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAppsyncGraphqlApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAppsyncGraphqlApi to import
  * @param importFromId The id of the existing AwsAppsyncGraphqlApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAppsyncGraphqlApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gravicore_aws_appsync_graphql_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gravicore/gravicore/1.0.8/docs/resources/aws_appsync_graphql_api gravicore_aws_appsync_graphql_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAppsyncGraphqlApiConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAppsyncGraphqlApiConfig) {
    super(scope, id, {
      terraformResourceType: 'gravicore_aws_appsync_graphql_api',
      terraformGeneratorMetadata: {
        providerName: 'gravicore',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiType = config.apiType;
    this._authenticationType = config.authenticationType;
    this._introspectionConfig = config.introspectionConfig;
    this._mergedApiExecutionRoleArn = config.mergedApiExecutionRoleArn;
    this._name = config.name;
    this._ownerContact = config.ownerContact;
    this._queryDepthLimit = config.queryDepthLimit;
    this._resolverCountLimit = config.resolverCountLimit;
    this._schema = config.schema;
    this._tags = config.tags;
    this._visibility = config.visibility;
    this._xrayEnabled = config.xrayEnabled;
    this._additionalAuthenticationProviders.internalValue = config.additionalAuthenticationProviders;
    this._enhancedMetricsConfig.internalValue = config.enhancedMetricsConfig;
    this._lambdaAuthorizerConfig.internalValue = config.lambdaAuthorizerConfig;
    this._logConfig.internalValue = config.logConfig;
    this._openidConnectConfig.internalValue = config.openidConnectConfig;
    this._userPoolConfig.internalValue = config.userPoolConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_type - computed: false, optional: true, required: false
  private _apiType?: string; 
  public get apiType() {
    return this.getStringAttribute('api_type');
  }
  public set apiType(value: string) {
    this._apiType = value;
  }
  public resetApiType() {
    this._apiType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTypeInput() {
    return this._apiType;
  }

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // authentication_type - computed: false, optional: false, required: true
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // introspection_config - computed: false, optional: true, required: false
  private _introspectionConfig?: string; 
  public get introspectionConfig() {
    return this.getStringAttribute('introspection_config');
  }
  public set introspectionConfig(value: string) {
    this._introspectionConfig = value;
  }
  public resetIntrospectionConfig() {
    this._introspectionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get introspectionConfigInput() {
    return this._introspectionConfig;
  }

  // merged_api_execution_role_arn - computed: false, optional: true, required: false
  private _mergedApiExecutionRoleArn?: string; 
  public get mergedApiExecutionRoleArn() {
    return this.getStringAttribute('merged_api_execution_role_arn');
  }
  public set mergedApiExecutionRoleArn(value: string) {
    this._mergedApiExecutionRoleArn = value;
  }
  public resetMergedApiExecutionRoleArn() {
    this._mergedApiExecutionRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergedApiExecutionRoleArnInput() {
    return this._mergedApiExecutionRoleArn;
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

  // owner_contact - computed: false, optional: true, required: false
  private _ownerContact?: string; 
  public get ownerContact() {
    return this.getStringAttribute('owner_contact');
  }
  public set ownerContact(value: string) {
    this._ownerContact = value;
  }
  public resetOwnerContact() {
    this._ownerContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerContactInput() {
    return this._ownerContact;
  }

  // query_depth_limit - computed: false, optional: true, required: false
  private _queryDepthLimit?: number; 
  public get queryDepthLimit() {
    return this.getNumberAttribute('query_depth_limit');
  }
  public set queryDepthLimit(value: number) {
    this._queryDepthLimit = value;
  }
  public resetQueryDepthLimit() {
    this._queryDepthLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDepthLimitInput() {
    return this._queryDepthLimit;
  }

  // resolver_count_limit - computed: false, optional: true, required: false
  private _resolverCountLimit?: number; 
  public get resolverCountLimit() {
    return this.getNumberAttribute('resolver_count_limit');
  }
  public set resolverCountLimit(value: number) {
    this._resolverCountLimit = value;
  }
  public resetResolverCountLimit() {
    this._resolverCountLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolverCountLimitInput() {
    return this._resolverCountLimit;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // xray_enabled - computed: false, optional: true, required: false
  private _xrayEnabled?: boolean | cdktf.IResolvable; 
  public get xrayEnabled() {
    return this.getBooleanAttribute('xray_enabled');
  }
  public set xrayEnabled(value: boolean | cdktf.IResolvable) {
    this._xrayEnabled = value;
  }
  public resetXrayEnabled() {
    this._xrayEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xrayEnabledInput() {
    return this._xrayEnabled;
  }

  // additional_authentication_providers - computed: false, optional: true, required: false
  private _additionalAuthenticationProviders = new AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersList(this, "additional_authentication_providers", false);
  public get additionalAuthenticationProviders() {
    return this._additionalAuthenticationProviders;
  }
  public putAdditionalAuthenticationProviders(value: AwsAppsyncGraphqlApiAdditionalAuthenticationProviders[] | cdktf.IResolvable) {
    this._additionalAuthenticationProviders.internalValue = value;
  }
  public resetAdditionalAuthenticationProviders() {
    this._additionalAuthenticationProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticationProvidersInput() {
    return this._additionalAuthenticationProviders.internalValue;
  }

  // enhanced_metrics_config - computed: false, optional: true, required: false
  private _enhancedMetricsConfig = new AwsAppsyncGraphqlApiEnhancedMetricsConfigOutputReference(this, "enhanced_metrics_config");
  public get enhancedMetricsConfig() {
    return this._enhancedMetricsConfig;
  }
  public putEnhancedMetricsConfig(value: AwsAppsyncGraphqlApiEnhancedMetricsConfig) {
    this._enhancedMetricsConfig.internalValue = value;
  }
  public resetEnhancedMetricsConfig() {
    this._enhancedMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedMetricsConfigInput() {
    return this._enhancedMetricsConfig.internalValue;
  }

  // lambda_authorizer_config - computed: false, optional: true, required: false
  private _lambdaAuthorizerConfig = new AwsAppsyncGraphqlApiLambdaAuthorizerConfigOutputReference(this, "lambda_authorizer_config");
  public get lambdaAuthorizerConfig() {
    return this._lambdaAuthorizerConfig;
  }
  public putLambdaAuthorizerConfig(value: AwsAppsyncGraphqlApiLambdaAuthorizerConfig) {
    this._lambdaAuthorizerConfig.internalValue = value;
  }
  public resetLambdaAuthorizerConfig() {
    this._lambdaAuthorizerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaAuthorizerConfigInput() {
    return this._lambdaAuthorizerConfig.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new AwsAppsyncGraphqlApiLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: AwsAppsyncGraphqlApiLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // openid_connect_config - computed: false, optional: true, required: false
  private _openidConnectConfig = new AwsAppsyncGraphqlApiOpenidConnectConfigOutputReference(this, "openid_connect_config");
  public get openidConnectConfig() {
    return this._openidConnectConfig;
  }
  public putOpenidConnectConfig(value: AwsAppsyncGraphqlApiOpenidConnectConfig) {
    this._openidConnectConfig.internalValue = value;
  }
  public resetOpenidConnectConfig() {
    this._openidConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openidConnectConfigInput() {
    return this._openidConnectConfig.internalValue;
  }

  // user_pool_config - computed: false, optional: true, required: false
  private _userPoolConfig = new AwsAppsyncGraphqlApiUserPoolConfigOutputReference(this, "user_pool_config");
  public get userPoolConfig() {
    return this._userPoolConfig;
  }
  public putUserPoolConfig(value: AwsAppsyncGraphqlApiUserPoolConfig) {
    this._userPoolConfig.internalValue = value;
  }
  public resetUserPoolConfig() {
    this._userPoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPoolConfigInput() {
    return this._userPoolConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_type: cdktf.stringToTerraform(this._apiType),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      introspection_config: cdktf.stringToTerraform(this._introspectionConfig),
      merged_api_execution_role_arn: cdktf.stringToTerraform(this._mergedApiExecutionRoleArn),
      name: cdktf.stringToTerraform(this._name),
      owner_contact: cdktf.stringToTerraform(this._ownerContact),
      query_depth_limit: cdktf.numberToTerraform(this._queryDepthLimit),
      resolver_count_limit: cdktf.numberToTerraform(this._resolverCountLimit),
      schema: cdktf.stringToTerraform(this._schema),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      visibility: cdktf.stringToTerraform(this._visibility),
      xray_enabled: cdktf.booleanToTerraform(this._xrayEnabled),
      additional_authentication_providers: cdktf.listMapper(awsAppsyncGraphqlApiAdditionalAuthenticationProvidersToTerraform, true)(this._additionalAuthenticationProviders.internalValue),
      enhanced_metrics_config: awsAppsyncGraphqlApiEnhancedMetricsConfigToTerraform(this._enhancedMetricsConfig.internalValue),
      lambda_authorizer_config: awsAppsyncGraphqlApiLambdaAuthorizerConfigToTerraform(this._lambdaAuthorizerConfig.internalValue),
      log_config: awsAppsyncGraphqlApiLogConfigToTerraform(this._logConfig.internalValue),
      openid_connect_config: awsAppsyncGraphqlApiOpenidConnectConfigToTerraform(this._openidConnectConfig.internalValue),
      user_pool_config: awsAppsyncGraphqlApiUserPoolConfigToTerraform(this._userPoolConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_type: {
        value: cdktf.stringToHclTerraform(this._apiType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      introspection_config: {
        value: cdktf.stringToHclTerraform(this._introspectionConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merged_api_execution_role_arn: {
        value: cdktf.stringToHclTerraform(this._mergedApiExecutionRoleArn),
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
      owner_contact: {
        value: cdktf.stringToHclTerraform(this._ownerContact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_depth_limit: {
        value: cdktf.numberToHclTerraform(this._queryDepthLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resolver_count_limit: {
        value: cdktf.numberToHclTerraform(this._resolverCountLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      visibility: {
        value: cdktf.stringToHclTerraform(this._visibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      xray_enabled: {
        value: cdktf.booleanToHclTerraform(this._xrayEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      additional_authentication_providers: {
        value: cdktf.listMapperHcl(awsAppsyncGraphqlApiAdditionalAuthenticationProvidersToHclTerraform, true)(this._additionalAuthenticationProviders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiAdditionalAuthenticationProvidersList",
      },
      enhanced_metrics_config: {
        value: awsAppsyncGraphqlApiEnhancedMetricsConfigToHclTerraform(this._enhancedMetricsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiEnhancedMetricsConfigList",
      },
      lambda_authorizer_config: {
        value: awsAppsyncGraphqlApiLambdaAuthorizerConfigToHclTerraform(this._lambdaAuthorizerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiLambdaAuthorizerConfigList",
      },
      log_config: {
        value: awsAppsyncGraphqlApiLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiLogConfigList",
      },
      openid_connect_config: {
        value: awsAppsyncGraphqlApiOpenidConnectConfigToHclTerraform(this._openidConnectConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiOpenidConnectConfigList",
      },
      user_pool_config: {
        value: awsAppsyncGraphqlApiUserPoolConfigToHclTerraform(this._userPoolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAppsyncGraphqlApiUserPoolConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
