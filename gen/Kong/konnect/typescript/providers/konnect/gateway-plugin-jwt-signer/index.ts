// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginJwtSignerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#config GatewayPluginJwtSigner#config}
  */
  readonly config?: GatewayPluginJwtSignerConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#control_plane_id GatewayPluginJwtSigner#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#created_at GatewayPluginJwtSigner#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#enabled GatewayPluginJwtSigner#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#instance_name GatewayPluginJwtSigner#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#ordering GatewayPluginJwtSigner#ordering}
  */
  readonly ordering?: GatewayPluginJwtSignerOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#partials GatewayPluginJwtSigner#partials}
  */
  readonly partials?: GatewayPluginJwtSignerPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#protocols GatewayPluginJwtSigner#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#route GatewayPluginJwtSigner#route}
  */
  readonly route?: GatewayPluginJwtSignerRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#service GatewayPluginJwtSigner#service}
  */
  readonly service?: GatewayPluginJwtSignerService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#tags GatewayPluginJwtSigner#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#updated_at GatewayPluginJwtSigner#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateToTerraform(struct?: GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateToHclTerraform(struct?: GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateToTerraform(struct?: GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateToHclTerraform(struct?: GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateToTerraform(struct?: GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateToHclTerraform(struct?: GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateToTerraform(struct?: GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateToHclTerraform(struct?: GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJwtSignerConfigA {
  /**
  * Specify the claim in an access token to verify against values of `config.access_token_audiences_allowed`. Default: ["aud"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_audience_claim GatewayPluginJwtSigner#access_token_audience_claim}
  */
  readonly accessTokenAudienceClaim?: string[];
  /**
  * The audiences allowed to be present in the access token claim specified by `config.access_token_audience_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_audiences_allowed GatewayPluginJwtSigner#access_token_audiences_allowed}
  */
  readonly accessTokenAudiencesAllowed?: string[];
  /**
  * When the plugin tries to apply an access token to a Kong consumer mapping, it tries to find a matching Kong consumer from properties defined using this configuration parameter. The parameter can take an array of alues. Valid values are `id`, `username`, and `custom_id`. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_consumer_by GatewayPluginJwtSigner#access_token_consumer_by}
  */
  readonly accessTokenConsumerBy?: string[];
  /**
  * When you set a value for this parameter, the plugin tries to map an arbitrary claim specified with this configuration parameter (for example, `sub` or `username`) in an access token to Kong consumer entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_consumer_claim GatewayPluginJwtSigner#access_token_consumer_claim}
  */
  readonly accessTokenConsumerClaim?: string[];
  /**
  * Specify the expiry claim in an access token to verify if the default `exp` is not used. Default: ["exp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_expiry_claim GatewayPluginJwtSigner#access_token_expiry_claim}
  */
  readonly accessTokenExpiryClaim?: string[];
  /**
  * Specify the claim in an access token introspection to verify against values of `config.access_token_introspection_audiences_allowed`. Default: ["aud"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_audience_claim GatewayPluginJwtSigner#access_token_introspection_audience_claim}
  */
  readonly accessTokenIntrospectionAudienceClaim?: string[];
  /**
  * The audiences allowed to be present in the access token introspection claim specified by `config.access_token_introspection_audience_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_audiences_allowed GatewayPluginJwtSigner#access_token_introspection_audiences_allowed}
  */
  readonly accessTokenIntrospectionAudiencesAllowed?: string[];
  /**
  * If the introspection endpoint requires client authentication (client being the JWT Signer plugin), you can specify the `Authorization` header's value with this configuration parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_authorization GatewayPluginJwtSigner#access_token_introspection_authorization}
  */
  readonly accessTokenIntrospectionAuthorization?: string;
  /**
  * This parameter allows you to pass URL encoded request body arguments. For example: `resource=` or `a=1&b=&c`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_body_args GatewayPluginJwtSigner#access_token_introspection_body_args}
  */
  readonly accessTokenIntrospectionBodyArgs?: string;
  /**
  * When the plugin tries to do access token introspection results to Kong consumer mapping, it tries to find a matching Kong consumer from properties defined using this configuration parameter. The parameter can take an array of values. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_consumer_by GatewayPluginJwtSigner#access_token_introspection_consumer_by}
  */
  readonly accessTokenIntrospectionConsumerBy?: string[];
  /**
  * When you set a value for this parameter, the plugin tries to map an arbitrary claim specified with this configuration parameter (such as `sub` or `username`) in access token introspection results to the Kong consumer entity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_consumer_claim GatewayPluginJwtSigner#access_token_introspection_consumer_claim}
  */
  readonly accessTokenIntrospectionConsumerClaim?: string[];
  /**
  * When you use `opaque` access tokens and you want to turn on access token introspection, you need to specify the OAuth 2.0 introspection endpoint URI with this configuration parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_endpoint GatewayPluginJwtSigner#access_token_introspection_endpoint}
  */
  readonly accessTokenIntrospectionEndpoint?: string;
  /**
  * Specify the expiry claim in an access token introspection to verify if the default `exp` is not used. Default: ["exp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_expiry_claim GatewayPluginJwtSigner#access_token_introspection_expiry_claim}
  */
  readonly accessTokenIntrospectionExpiryClaim?: string[];
  /**
  * If you need to give `hint` parameter when introspecting an access token, use this parameter to specify the value. By default, the plugin sends `hint=access_token`. Default: "access_token"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_hint GatewayPluginJwtSigner#access_token_introspection_hint}
  */
  readonly accessTokenIntrospectionHint?: string;
  /**
  * Specify the claim in an access token introspection to verify against values of `config.access_token_introspection_issuers_allowed`. Default: ["iss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_issuer_claim GatewayPluginJwtSigner#access_token_introspection_issuer_claim}
  */
  readonly accessTokenIntrospectionIssuerClaim?: string[];
  /**
  * The issuers allowed to be present in the access token introspection claim specified by `config.access_token_introspection_issuer_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_issuers_allowed GatewayPluginJwtSigner#access_token_introspection_issuers_allowed}
  */
  readonly accessTokenIntrospectionIssuersAllowed?: string[];
  /**
  * If your introspection endpoint returns an access token in one of the keys (or claims) within the introspection results (`JSON`). If the key cannot be found, the plugin responds with `401 Unauthorized`. Also if the key is found but cannot be decoded as JWT, it also responds with `401 Unauthorized`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_jwt_claim GatewayPluginJwtSigner#access_token_introspection_jwt_claim}
  */
  readonly accessTokenIntrospectionJwtClaim?: string[];
  /**
  * Adjusts clock skew between the token issuer introspection results and Kong. The value will be used to time-related claim verification. For example, it will be added to introspection results (`JSON`) `exp` claim/property before checking token expiry against Kong servers current time in seconds. You can disable access token introspection `expiry` verification altogether with `config.verify_access_token_introspection_expiry`. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_leeway GatewayPluginJwtSigner#access_token_introspection_leeway}
  */
  readonly accessTokenIntrospectionLeeway?: number;
  /**
  * Specify the notbefore claim in an access token introspection to verify if the default `nbf` is not used. Default: ["nbf"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_notbefore_claim GatewayPluginJwtSigner#access_token_introspection_notbefore_claim}
  */
  readonly accessTokenIntrospectionNotbeforeClaim?: string[];
  /**
  * Specify the optional claims of the access token introspection result. These claims are only validated when they are present. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_optional_claims GatewayPluginJwtSigner#access_token_introspection_optional_claims}
  */
  readonly accessTokenIntrospectionOptionalClaims?: string[][] | cdktf.IResolvable;
  /**
  * Specify the required claims that must be present in the access token introspection result. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_required_claims GatewayPluginJwtSigner#access_token_introspection_required_claims}
  */
  readonly accessTokenIntrospectionRequiredClaims?: string[][] | cdktf.IResolvable;
  /**
  * Specify the claim/property in access token introspection results (`JSON`) to be verified against values of `config.access_token_introspection_scopes_required`. This supports nested claims. For example, with Keycloak you could use `[ "realm_access", "roles" ]`, hich can be given as `realm_access,roles` (form post). If the claim is not found in access token introspection results, and you have specified `config.access_token_introspection_scopes_required`, the plugin responds with `403 Forbidden`. Default: ["scope"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_scopes_claim GatewayPluginJwtSigner#access_token_introspection_scopes_claim}
  */
  readonly accessTokenIntrospectionScopesClaim?: string[];
  /**
  * Specify the required values (or scopes) that are checked by an introspection claim/property specified by `config.access_token_introspection_scopes_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_scopes_required GatewayPluginJwtSigner#access_token_introspection_scopes_required}
  */
  readonly accessTokenIntrospectionScopesRequired?: string[];
  /**
  * Specify the claim in an access token introspection to verify against values of `config.access_token_introspection_subjects_allowed`. Default: ["sub"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_subject_claim GatewayPluginJwtSigner#access_token_introspection_subject_claim}
  */
  readonly accessTokenIntrospectionSubjectClaim?: string[];
  /**
  * The subjects allowed to be present in the access token introspection claim specified by `config.access_token_introspection_subject_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_subjects_allowed GatewayPluginJwtSigner#access_token_introspection_subjects_allowed}
  */
  readonly accessTokenIntrospectionSubjectsAllowed?: string[];
  /**
  * Timeout in milliseconds for an introspection request. The plugin tries to introspect twice if the first request fails for some reason. If both requests timeout, then the plugin runs two times the `config.access_token_introspection_timeout` on access token introspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_introspection_timeout GatewayPluginJwtSigner#access_token_introspection_timeout}
  */
  readonly accessTokenIntrospectionTimeout?: number;
  /**
  * The `iss` claim of a signed or re-signed access token is set to this value. Original `iss` claim of the incoming token (possibly introspected) is stored in `original_iss` claim of the newly signed access token. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_issuer GatewayPluginJwtSigner#access_token_issuer}
  */
  readonly accessTokenIssuer?: string;
  /**
  * Specify the claim in an access token to verify against values of `config.access_token_issuers_allowed`. Default: ["iss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_issuer_claim GatewayPluginJwtSigner#access_token_issuer_claim}
  */
  readonly accessTokenIssuerClaim?: string[];
  /**
  * The issuers allowed to be present in the access token claim specified by `config.access_token_issuer_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_issuers_allowed GatewayPluginJwtSigner#access_token_issuers_allowed}
  */
  readonly accessTokenIssuersAllowed?: string[];
  /**
  * Specify the URI where the plugin can fetch the public keys (JWKS) to verify the signature of the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_jwks_uri GatewayPluginJwtSigner#access_token_jwks_uri}
  */
  readonly accessTokenJwksUri?: string;
  /**
  * The client certificate that will be used to authenticate Kong if `access_token_jwks_uri` is an https uri that requires mTLS Auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_jwks_uri_client_certificate GatewayPluginJwtSigner#access_token_jwks_uri_client_certificate}
  */
  readonly accessTokenJwksUriClientCertificate?: GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate;
  /**
  * The client password that will be used to authenticate Kong if `access_token_jwks_uri` is a uri that requires Basic Auth. Should be configured together with `access_token_jwks_uri_client_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_jwks_uri_client_password GatewayPluginJwtSigner#access_token_jwks_uri_client_password}
  */
  readonly accessTokenJwksUriClientPassword?: string;
  /**
  * The client username that will be used to authenticate Kong if `access_token_jwks_uri` is a uri that requires Basic Auth. Should be configured together with `access_token_jwks_uri_client_password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_jwks_uri_client_username GatewayPluginJwtSigner#access_token_jwks_uri_client_username}
  */
  readonly accessTokenJwksUriClientUsername?: string;
  /**
  * Specify the period (in seconds) to auto-rotate the jwks for `access_token_jwks_uri`. The default value 0 means no auto-rotation. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_jwks_uri_rotate_period GatewayPluginJwtSigner#access_token_jwks_uri_rotate_period}
  */
  readonly accessTokenJwksUriRotatePeriod?: number;
  /**
  * The name of the keyset containing signing keys. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_keyset GatewayPluginJwtSigner#access_token_keyset}
  */
  readonly accessTokenKeyset?: string;
  /**
  * The client certificate that will be used to authenticate Kong if `access_token_keyset` is an https uri that requires mTLS Auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_keyset_client_certificate GatewayPluginJwtSigner#access_token_keyset_client_certificate}
  */
  readonly accessTokenKeysetClientCertificate?: GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate;
  /**
  * The client password that will be used to authenticate Kong if `access_token_keyset` is a uri that requires Basic Auth. Should be configured together with `access_token_keyset_client_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_keyset_client_password GatewayPluginJwtSigner#access_token_keyset_client_password}
  */
  readonly accessTokenKeysetClientPassword?: string;
  /**
  * The client username that will be used to authenticate Kong if `access_token_keyset` is a uri that requires Basic Auth. Should be configured together with `access_token_keyset_client_password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_keyset_client_username GatewayPluginJwtSigner#access_token_keyset_client_username}
  */
  readonly accessTokenKeysetClientUsername?: string;
  /**
  * Specify the period (in seconds) to auto-rotate the jwks for `access_token_keyset`. The default value 0 means no auto-rotation. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_keyset_rotate_period GatewayPluginJwtSigner#access_token_keyset_rotate_period}
  */
  readonly accessTokenKeysetRotatePeriod?: number;
  /**
  * Adjusts clock skew between the token issuer and Kong. The value will be used to time-related claim verification. For example, it will be added to the token's `exp` claim before checking token expiry against Kong servers' current time in seconds. You can disable access token `expiry` verification altogether with `config.verify_access_token_expiry`. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_leeway GatewayPluginJwtSigner#access_token_leeway}
  */
  readonly accessTokenLeeway?: number;
  /**
  * Specify the notbefore claim in an access token to verify if the default `nbf` is not used. Default: ["nbf"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_notbefore_claim GatewayPluginJwtSigner#access_token_notbefore_claim}
  */
  readonly accessTokenNotbeforeClaim?: string[];
  /**
  * If an access token is not provided or no `config.access_token_request_header` is specified, the plugin cannot verify the access token. In that case, the plugin normally responds with `401 Unauthorized` (client didn't send a token) or `500 Unexpected` (a configuration error). Use this parameter to allow the request to proceed even when there is no token to check. If the token is provided, then this parameter has no effect. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_optional GatewayPluginJwtSigner#access_token_optional}
  */
  readonly accessTokenOptional?: boolean | cdktf.IResolvable;
  /**
  * Specify the optional claims of the access token. These claims are only validated when they are present. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_optional_claims GatewayPluginJwtSigner#access_token_optional_claims}
  */
  readonly accessTokenOptionalClaims?: string[][] | cdktf.IResolvable;
  /**
  * This parameter tells the name of the header where to look for the access token. Default: "Authorization"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_request_header GatewayPluginJwtSigner#access_token_request_header}
  */
  readonly accessTokenRequestHeader?: string;
  /**
  * Specify the required claims that must be present in the access token. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_required_claims GatewayPluginJwtSigner#access_token_required_claims}
  */
  readonly accessTokenRequiredClaims?: string[][] | cdktf.IResolvable;
  /**
  * Specify the claim in an access token to verify against values of `config.access_token_scopes_required`. Default: ["scope"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_scopes_claim GatewayPluginJwtSigner#access_token_scopes_claim}
  */
  readonly accessTokenScopesClaim?: string[];
  /**
  * Specify the required values (or scopes) that are checked by a claim specified by `config.access_token_scopes_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_scopes_required GatewayPluginJwtSigner#access_token_scopes_required}
  */
  readonly accessTokenScopesRequired?: string[];
  /**
  * Quickly turn access token signing or re-signing off and on as needed. If turned off, the plugin will not send the signed or resigned token to the upstream. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_signing GatewayPluginJwtSigner#access_token_signing}
  */
  readonly accessTokenSigning?: boolean | cdktf.IResolvable;
  /**
  * When this plugin sets the upstream header as specified with `config.access_token_upstream_header`, re-signs the original access token using the private keys of the JWT Signer plugin. Specify the algorithm that is used to sign the token. The `config.access_token_issuer` specifies which `keyset` is used to sign the new token issued by Kong using the specified signing algorithm. Default: "RS256"; must be one of ["ES256", "ES384", "ES512", "EdDSA", "HS256", "HS384", "HS512", "PS256", "PS384", "PS512", "RS256", "RS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_signing_algorithm GatewayPluginJwtSigner#access_token_signing_algorithm}
  */
  readonly accessTokenSigningAlgorithm?: string;
  /**
  * Specify the claim in an access token to verify against values of `config.access_token_subjects_allowed`. Default: ["sub"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_subject_claim GatewayPluginJwtSigner#access_token_subject_claim}
  */
  readonly accessTokenSubjectClaim?: string[];
  /**
  * The subjects allowed to be present in the access token claim specified by `config.access_token_subject_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_subjects_allowed GatewayPluginJwtSigner#access_token_subjects_allowed}
  */
  readonly accessTokenSubjectsAllowed?: string[];
  /**
  * Removes the `config.access_token_request_header` from the request after reading its value. With `config.access_token_upstream_header`, you can specify the upstream header where the plugin adds the Kong signed token. If you don't specify a value, such as use `null` or `""` (empty string), the plugin does not even try to sign or re-sign the token. Default: "Authorization:Bearer"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_upstream_header GatewayPluginJwtSigner#access_token_upstream_header}
  */
  readonly accessTokenUpstreamHeader?: string;
  /**
  * If you want to add or subtract (using a negative value) expiry time (in seconds) of the original access token, you can specify a value that is added to the original access token's `exp` claim. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access_token_upstream_leeway GatewayPluginJwtSigner#access_token_upstream_leeway}
  */
  readonly accessTokenUpstreamLeeway?: number;
  /**
  * Add customized claims if they are not present yet. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#add_access_token_claims GatewayPluginJwtSigner#add_access_token_claims}
  */
  readonly addAccessTokenClaims?: { [key: string]: string };
  /**
  * Add customized claims if they are not present yet. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#add_channel_token_claims GatewayPluginJwtSigner#add_channel_token_claims}
  */
  readonly addChannelTokenClaims?: { [key: string]: string };
  /**
  * Add customized claims to both tokens if they are not present yet. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#add_claims GatewayPluginJwtSigner#add_claims}
  */
  readonly addClaims?: { [key: string]: string };
  /**
  * Whether to cache access token introspection results. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#cache_access_token_introspection GatewayPluginJwtSigner#cache_access_token_introspection}
  */
  readonly cacheAccessTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Whether to cache channel token introspection results. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#cache_channel_token_introspection GatewayPluginJwtSigner#cache_channel_token_introspection}
  */
  readonly cacheChannelTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Specify the claim in a channel token to verify against values of `config.channel_token_audiences_allowed`. Default: ["aud"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_audience_claim GatewayPluginJwtSigner#channel_token_audience_claim}
  */
  readonly channelTokenAudienceClaim?: string[];
  /**
  * The audiences allowed to be present in the channel token claim specified by `config.channel_token_audience_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_audiences_allowed GatewayPluginJwtSigner#channel_token_audiences_allowed}
  */
  readonly channelTokenAudiencesAllowed?: string[];
  /**
  * When the plugin tries to do channel token to Kong consumer mapping, it tries to find a matching Kong consumer from properties defined using this configuration parameter. The parameter can take an array of valid values: `id`, `username`, and `custom_id`. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_consumer_by GatewayPluginJwtSigner#channel_token_consumer_by}
  */
  readonly channelTokenConsumerBy?: string[];
  /**
  * When you set a value for this parameter, the plugin tries to map an arbitrary claim specified with this configuration parameter. Kong consumers have an `id`, a `username`, and a `custom_id`. If this parameter is enabled but the mapping fails, such as when there's a non-existent Kong consumer, the plugin responds with `403 Forbidden`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_consumer_claim GatewayPluginJwtSigner#channel_token_consumer_claim}
  */
  readonly channelTokenConsumerClaim?: string[];
  /**
  * Specify the expiry claim in a channel token to verify if the default `exp` is not used. Default: ["exp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_expiry_claim GatewayPluginJwtSigner#channel_token_expiry_claim}
  */
  readonly channelTokenExpiryClaim?: string[];
  /**
  * Specify the claim in a channel token introspection to verify against values of `config.channel_token_introspection_audiences_allowed`. Default: ["aud"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_audience_claim GatewayPluginJwtSigner#channel_token_introspection_audience_claim}
  */
  readonly channelTokenIntrospectionAudienceClaim?: string[];
  /**
  * The audiences allowed to be present in the channel token introspection claim specified by `config.channel_token_introspection_audience_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_audiences_allowed GatewayPluginJwtSigner#channel_token_introspection_audiences_allowed}
  */
  readonly channelTokenIntrospectionAudiencesAllowed?: string[];
  /**
  * When using `opaque` channel tokens, and you want to turn on channel token introspection, you need to specify the OAuth 2.0 introspection endpoint URI with this configuration parameter. Otherwise the plugin will not try introspection, and instead returns `401 Unauthorized` when using opaque channel tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_authorization GatewayPluginJwtSigner#channel_token_introspection_authorization}
  */
  readonly channelTokenIntrospectionAuthorization?: string;
  /**
  * If you need to pass additional body arguments to introspection endpoint when the plugin introspects the opaque channel token, you can use this config parameter to specify them. You should URL encode the value. For example: `resource=` or `a=1&b=&c`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_body_args GatewayPluginJwtSigner#channel_token_introspection_body_args}
  */
  readonly channelTokenIntrospectionBodyArgs?: string;
  /**
  * When the plugin tries to do channel token introspection results to Kong consumer mapping, it tries to find a matching Kong consumer from properties defined using this configuration parameter. The parameter can take an array of values. Valid values are `id`, `username` and `custom_id`. Default: ["custom_id","username"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_consumer_by GatewayPluginJwtSigner#channel_token_introspection_consumer_by}
  */
  readonly channelTokenIntrospectionConsumerBy?: string[];
  /**
  * When you set a value for this parameter, the plugin tries to map an arbitrary claim specified with this configuration parameter (such as `sub` or `username`) in channel token introspection results to Kong consumer entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_consumer_claim GatewayPluginJwtSigner#channel_token_introspection_consumer_claim}
  */
  readonly channelTokenIntrospectionConsumerClaim?: string[];
  /**
  * When you use `opaque` access tokens and you want to turn on access token introspection, you need to specify the OAuth 2.0 introspection endpoint URI with this configuration parameter. Otherwise, the plugin does not try introspection and returns `401 Unauthorized` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_endpoint GatewayPluginJwtSigner#channel_token_introspection_endpoint}
  */
  readonly channelTokenIntrospectionEndpoint?: string;
  /**
  * Specify the expiry claim in a channel token to verify if the default `exp` is not used. Default: ["exp"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_expiry_claim GatewayPluginJwtSigner#channel_token_introspection_expiry_claim}
  */
  readonly channelTokenIntrospectionExpiryClaim?: string[];
  /**
  * If you need to give `hint` parameter when introspecting a channel token, you can use this parameter to specify the value of such parameter. By default, a `hint` isn't sent with channel token introspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_hint GatewayPluginJwtSigner#channel_token_introspection_hint}
  */
  readonly channelTokenIntrospectionHint?: string;
  /**
  * Specify the claim in a channel token introspection to verify against values of `config.channel_token_introspection_issuers_allowed`. Default: ["iss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_issuer_claim GatewayPluginJwtSigner#channel_token_introspection_issuer_claim}
  */
  readonly channelTokenIntrospectionIssuerClaim?: string[];
  /**
  * The issuers allowed to be present in the channel token introspection claim specified by `config.channel_token_introspection_issuer_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_issuers_allowed GatewayPluginJwtSigner#channel_token_introspection_issuers_allowed}
  */
  readonly channelTokenIntrospectionIssuersAllowed?: string[];
  /**
  * If your introspection endpoint returns a channel token in one of the keys (or claims) in the introspection results (`JSON`), the plugin can use that value instead of the introspection results when doing expiry verification and signing of the new token issued by Kong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_jwt_claim GatewayPluginJwtSigner#channel_token_introspection_jwt_claim}
  */
  readonly channelTokenIntrospectionJwtClaim?: string[];
  /**
  * You can use this parameter to adjust clock skew between the token issuer introspection results and Kong. The value will be used to time-related claim verification. For example, it will be added to introspection results (`JSON`) `exp` claim/property before checking token expiry against Kong servers current time (in seconds). You can disable channel token introspection `expiry` verification altogether with `config.verify_channel_token_introspection_expiry`. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_leeway GatewayPluginJwtSigner#channel_token_introspection_leeway}
  */
  readonly channelTokenIntrospectionLeeway?: number;
  /**
  * Specify the notbefore claim in a channel token to verify if the default `nbf` is not used. Default: ["nbf"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_notbefore_claim GatewayPluginJwtSigner#channel_token_introspection_notbefore_claim}
  */
  readonly channelTokenIntrospectionNotbeforeClaim?: string[];
  /**
  * Specify the optional claims of the channel token introspection. These claims are only validated when they are present. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_optional_claims GatewayPluginJwtSigner#channel_token_introspection_optional_claims}
  */
  readonly channelTokenIntrospectionOptionalClaims?: string[][] | cdktf.IResolvable;
  /**
  * Specify the required claims that must be present in the channel token introspection. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_required_claims GatewayPluginJwtSigner#channel_token_introspection_required_claims}
  */
  readonly channelTokenIntrospectionRequiredClaims?: string[][] | cdktf.IResolvable;
  /**
  * Use this parameter to specify the claim/property in channel token introspection results (`JSON`) to be verified against values of `config.channel_token_introspection_scopes_required`. This supports nested claims. Default: ["scope"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_scopes_claim GatewayPluginJwtSigner#channel_token_introspection_scopes_claim}
  */
  readonly channelTokenIntrospectionScopesClaim?: string[];
  /**
  * Use this parameter to specify the required values (or scopes) that are checked by an introspection claim/property specified by `config.channel_token_introspection_scopes_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_scopes_required GatewayPluginJwtSigner#channel_token_introspection_scopes_required}
  */
  readonly channelTokenIntrospectionScopesRequired?: string[];
  /**
  * Specify the claim in a channel token to verify against values of `config.channel_token_introspection_subjects_allowed`. Default: ["sub"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_subject_claim GatewayPluginJwtSigner#channel_token_introspection_subject_claim}
  */
  readonly channelTokenIntrospectionSubjectClaim?: string[];
  /**
  * The subjects allowed to be present in the channel token introspection claim specified by `config.channel_token_introspection_subject_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_subjects_allowed GatewayPluginJwtSigner#channel_token_introspection_subjects_allowed}
  */
  readonly channelTokenIntrospectionSubjectsAllowed?: string[];
  /**
  * Timeout in milliseconds for an introspection request. The plugin tries to introspect twice if the first request fails for some reason. If both requests timeout, then the plugin runs two times the `config.access_token_introspection_timeout` on channel token introspection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_introspection_timeout GatewayPluginJwtSigner#channel_token_introspection_timeout}
  */
  readonly channelTokenIntrospectionTimeout?: number;
  /**
  * The `iss` claim of the re-signed channel token is set to this value, which is `kong` by default. The original `iss` claim of the incoming token (possibly introspected) is stored in the `original_iss` claim of the newly signed channel token. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_issuer GatewayPluginJwtSigner#channel_token_issuer}
  */
  readonly channelTokenIssuer?: string;
  /**
  * Specify the claim in a channel token to verify against values of `config.channel_token_issuers_allowed`. Default: ["iss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_issuer_claim GatewayPluginJwtSigner#channel_token_issuer_claim}
  */
  readonly channelTokenIssuerClaim?: string[];
  /**
  * The issuers allowed to be present in the channel token claim specified by `config.channel_token_issuer_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_issuers_allowed GatewayPluginJwtSigner#channel_token_issuers_allowed}
  */
  readonly channelTokenIssuersAllowed?: string[];
  /**
  * If you want to use `config.verify_channel_token_signature`, you must specify the URI where the plugin can fetch the public keys (JWKS) to verify the signature of the channel token. If you don't specify a URI and you pass a JWT token to the plugin, then the plugin responds with `401 Unauthorized`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_jwks_uri GatewayPluginJwtSigner#channel_token_jwks_uri}
  */
  readonly channelTokenJwksUri?: string;
  /**
  * The client certificate that will be used to authenticate Kong if `access_token_jwks_uri` is an https uri that requires mTLS Auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_jwks_uri_client_certificate GatewayPluginJwtSigner#channel_token_jwks_uri_client_certificate}
  */
  readonly channelTokenJwksUriClientCertificate?: GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate;
  /**
  * The client password that will be used to authenticate Kong if `channel_token_jwks_uri` is a uri that requires Basic Auth. Should be configured together with `channel_token_jwks_uri_client_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_jwks_uri_client_password GatewayPluginJwtSigner#channel_token_jwks_uri_client_password}
  */
  readonly channelTokenJwksUriClientPassword?: string;
  /**
  * The client username that will be used to authenticate Kong if `channel_token_jwks_uri` is a uri that requires Basic Auth. Should be configured together with `channel_token_jwks_uri_client_password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_jwks_uri_client_username GatewayPluginJwtSigner#channel_token_jwks_uri_client_username}
  */
  readonly channelTokenJwksUriClientUsername?: string;
  /**
  * Specify the period (in seconds) to auto-rotate the jwks for `channel_token_jwks_uri`. The default value 0 means no auto-rotation. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_jwks_uri_rotate_period GatewayPluginJwtSigner#channel_token_jwks_uri_rotate_period}
  */
  readonly channelTokenJwksUriRotatePeriod?: number;
  /**
  * The name of the keyset containing signing keys. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_keyset GatewayPluginJwtSigner#channel_token_keyset}
  */
  readonly channelTokenKeyset?: string;
  /**
  * The client certificate that will be used to authenticate Kong if `channel_token_keyset` is an https uri that requires mTLS Auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_keyset_client_certificate GatewayPluginJwtSigner#channel_token_keyset_client_certificate}
  */
  readonly channelTokenKeysetClientCertificate?: GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate;
  /**
  * The client password that will be used to authenticate Kong if `channel_token_keyset` is a uri that requires Basic Auth. Should be configured together with `channel_token_keyset_client_username`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_keyset_client_password GatewayPluginJwtSigner#channel_token_keyset_client_password}
  */
  readonly channelTokenKeysetClientPassword?: string;
  /**
  * The client username that will be used to authenticate Kong if `channel_token_keyset` is a uri that requires Basic Auth. Should be configured together with `channel_token_keyset_client_password`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_keyset_client_username GatewayPluginJwtSigner#channel_token_keyset_client_username}
  */
  readonly channelTokenKeysetClientUsername?: string;
  /**
  * Specify the period (in seconds) to auto-rotate the jwks for `channel_token_keyset`. The default value 0 means no auto-rotation. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_keyset_rotate_period GatewayPluginJwtSigner#channel_token_keyset_rotate_period}
  */
  readonly channelTokenKeysetRotatePeriod?: number;
  /**
  * Adjusts clock skew between the token issuer and Kong. The value will be used to time-related claim verification. For example, it will be added to token's `exp` claim before checking token expiry against Kong servers current time in seconds. You can disable channel token `expiry` verification altogether with `config.verify_channel_token_expiry`. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_leeway GatewayPluginJwtSigner#channel_token_leeway}
  */
  readonly channelTokenLeeway?: number;
  /**
  * Specify the notbefore claim in a channel token to verify if the default `nbf` is not used. Default: ["nbf"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_notbefore_claim GatewayPluginJwtSigner#channel_token_notbefore_claim}
  */
  readonly channelTokenNotbeforeClaim?: string[];
  /**
  * If a channel token is not provided or no `config.channel_token_request_header` is specified, the plugin cannot verify the channel token. In that case, the plugin normally responds with `401 Unauthorized` (client didn't send a token) or `500 Unexpected` (a configuration error). Enable this parameter to allow the request to proceed even when there is no channel token to check. If the channel token is provided, then this parameter has no effect. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_optional GatewayPluginJwtSigner#channel_token_optional}
  */
  readonly channelTokenOptional?: boolean | cdktf.IResolvable;
  /**
  * Specify the optional claims of the channel token. These claims are only validated when they are present. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_optional_claims GatewayPluginJwtSigner#channel_token_optional_claims}
  */
  readonly channelTokenOptionalClaims?: string[][] | cdktf.IResolvable;
  /**
  * This parameter tells the name of the header where to look for the channel token. If you don't want to do anything with the channel token, then you can set this to `null` or `""` (empty string).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_request_header GatewayPluginJwtSigner#channel_token_request_header}
  */
  readonly channelTokenRequestHeader?: string;
  /**
  * Specify the required claims that must be present in the channel token. Every claim is specified by an array. If the array has multiple elements, it means the claim is inside a nested object of the payload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_required_claims GatewayPluginJwtSigner#channel_token_required_claims}
  */
  readonly channelTokenRequiredClaims?: string[][] | cdktf.IResolvable;
  /**
  * Specify the claim in a channel token to verify against values of `config.channel_token_scopes_required`. This supports nested claims. Default: ["scope"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_scopes_claim GatewayPluginJwtSigner#channel_token_scopes_claim}
  */
  readonly channelTokenScopesClaim?: string[];
  /**
  * Specify the required values (or scopes) that are checked by a claim specified by `config.channel_token_scopes_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_scopes_required GatewayPluginJwtSigner#channel_token_scopes_required}
  */
  readonly channelTokenScopesRequired?: string[];
  /**
  * Quickly turn channel token signing or re-signing off and on as needed. If turned off, the plugin will not send the signed or resigned token to the upstream. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_signing GatewayPluginJwtSigner#channel_token_signing}
  */
  readonly channelTokenSigning?: boolean | cdktf.IResolvable;
  /**
  * When this plugin sets the upstream header as specified with `config.channel_token_upstream_header`, it also re-signs the original channel token using private keys of this plugin. Specify the algorithm that is used to sign the token. Default: "RS256"; must be one of ["ES256", "ES384", "ES512", "EdDSA", "HS256", "HS384", "HS512", "PS256", "PS384", "PS512", "RS256", "RS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_signing_algorithm GatewayPluginJwtSigner#channel_token_signing_algorithm}
  */
  readonly channelTokenSigningAlgorithm?: string;
  /**
  * Specify the claim in a channel token to verify against values of `config.channel_token_subjects_allowed`. Default: ["sub"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_subject_claim GatewayPluginJwtSigner#channel_token_subject_claim}
  */
  readonly channelTokenSubjectClaim?: string[];
  /**
  * The subjects allowed to be present in the channel token claim specified by `config.channel_token_subject_claim`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_subjects_allowed GatewayPluginJwtSigner#channel_token_subjects_allowed}
  */
  readonly channelTokenSubjectsAllowed?: string[];
  /**
  * This plugin removes the `config.channel_token_request_header` from the request after reading its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_upstream_header GatewayPluginJwtSigner#channel_token_upstream_header}
  */
  readonly channelTokenUpstreamHeader?: string;
  /**
  * If you want to add or perhaps subtract (using negative value) expiry time of the original channel token, you can specify a value that is added to the original channel token's `exp` claim. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#channel_token_upstream_leeway GatewayPluginJwtSigner#channel_token_upstream_leeway}
  */
  readonly channelTokenUpstreamLeeway?: number;
  /**
  * If you don't want to support opaque access tokens, change this configuration parameter to `false` to disable introspection. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#enable_access_token_introspection GatewayPluginJwtSigner#enable_access_token_introspection}
  */
  readonly enableAccessTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * If you don't want to support opaque channel tokens, disable introspection by changing this configuration parameter to `false`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#enable_channel_token_introspection GatewayPluginJwtSigner#enable_channel_token_introspection}
  */
  readonly enableChannelTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Tokens signed with HMAC algorithms such as `HS256`, `HS384`, or `HS512` are not accepted by default. If you need to accept such tokens for verification, enable this setting. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#enable_hs_signatures GatewayPluginJwtSigner#enable_hs_signatures}
  */
  readonly enableHsSignatures?: boolean | cdktf.IResolvable;
  /**
  * Writes log entries with some added information using `ngx.CRIT` (CRITICAL) level. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#enable_instrumentation GatewayPluginJwtSigner#enable_instrumentation}
  */
  readonly enableInstrumentation?: boolean | cdktf.IResolvable;
  /**
  * The HTTP header name used to store the original access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#original_access_token_upstream_header GatewayPluginJwtSigner#original_access_token_upstream_header}
  */
  readonly originalAccessTokenUpstreamHeader?: string;
  /**
  * The HTTP header name used to store the original channel token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#original_channel_token_upstream_header GatewayPluginJwtSigner#original_channel_token_upstream_header}
  */
  readonly originalChannelTokenUpstreamHeader?: string;
  /**
  * When authentication or authorization fails, or there is an unexpected error, the plugin sends an `WWW-Authenticate` header with the `realm` attribute value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#realm GatewayPluginJwtSigner#realm}
  */
  readonly realm?: string;
  /**
  * remove claims. It should be an array, and each element is a claim key string. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#remove_access_token_claims GatewayPluginJwtSigner#remove_access_token_claims}
  */
  readonly removeAccessTokenClaims?: string[];
  /**
  * remove claims. It should be an array, and each element is a claim key string. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#remove_channel_token_claims GatewayPluginJwtSigner#remove_channel_token_claims}
  */
  readonly removeChannelTokenClaims?: string[];
  /**
  * Set customized claims. If a claim is already present, it will be overwritten. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#set_access_token_claims GatewayPluginJwtSigner#set_access_token_claims}
  */
  readonly setAccessTokenClaims?: { [key: string]: string };
  /**
  * Set customized claims. If a claim is already present, it will be overwritten. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#set_channel_token_claims GatewayPluginJwtSigner#set_channel_token_claims}
  */
  readonly setChannelTokenClaims?: { [key: string]: string };
  /**
  * Set customized claims to both tokens. If a claim is already present, it will be overwritten. Value can be a regular or JSON string; if JSON, decoded data is used as the claim's value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#set_claims GatewayPluginJwtSigner#set_claims}
  */
  readonly setClaims?: { [key: string]: string };
  /**
  * Use this parameter to enable and disable further checks on a payload before the new token is signed. If you set this to `true`, the expiry or scopes are not checked on a payload. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#trust_access_token_introspection GatewayPluginJwtSigner#trust_access_token_introspection}
  */
  readonly trustAccessTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Providing an opaque channel token for plugin introspection, and verifying expiry and scopes on introspection results may make further payload checks unnecessary before the plugin signs a new token. This also applies when using a JWT token with introspection JSON as per config.channel_token_introspection_jwt_claim. Use this parameter to manage additional payload checks before signing a new token. With true (default), payload's expiry or scopes aren't checked. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#trust_channel_token_introspection GatewayPluginJwtSigner#trust_channel_token_introspection}
  */
  readonly trustChannelTokenIntrospection?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token required audiences verification, specified with `config.access_token_audiences_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_audience GatewayPluginJwtSigner#verify_access_token_audience}
  */
  readonly verifyAccessTokenAudience?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn access token expiry verification off and on as needed. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_expiry GatewayPluginJwtSigner#verify_access_token_expiry}
  */
  readonly verifyAccessTokenExpiry?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token introspection required audiences verification, specified with `config.access_token_introspection_audiences_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_audience GatewayPluginJwtSigner#verify_access_token_introspection_audience}
  */
  readonly verifyAccessTokenIntrospectionAudience?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn access token introspection expiry verification off and on as needed. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_expiry GatewayPluginJwtSigner#verify_access_token_introspection_expiry}
  */
  readonly verifyAccessTokenIntrospectionExpiry?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token introspection allowed issuers verification, specified with `config.access_token_introspection_issuers_allowed`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_issuer GatewayPluginJwtSigner#verify_access_token_introspection_issuer}
  */
  readonly verifyAccessTokenIntrospectionIssuer?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token introspection notbefore verification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_notbefore GatewayPluginJwtSigner#verify_access_token_introspection_notbefore}
  */
  readonly verifyAccessTokenIntrospectionNotbefore?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token introspection scopes verification, specified with `config.access_token_introspection_scopes_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_scopes GatewayPluginJwtSigner#verify_access_token_introspection_scopes}
  */
  readonly verifyAccessTokenIntrospectionScopes?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token introspection required subjects verification, specified with `config.access_token_introspection_subjects_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_introspection_subject GatewayPluginJwtSigner#verify_access_token_introspection_subject}
  */
  readonly verifyAccessTokenIntrospectionSubject?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token allowed issuers verification, specified with `config.access_token_issuers_allowed`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_issuer GatewayPluginJwtSigner#verify_access_token_issuer}
  */
  readonly verifyAccessTokenIssuer?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token notbefore verification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_notbefore GatewayPluginJwtSigner#verify_access_token_notbefore}
  */
  readonly verifyAccessTokenNotbefore?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token required scopes verification, specified with `config.access_token_scopes_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_scopes GatewayPluginJwtSigner#verify_access_token_scopes}
  */
  readonly verifyAccessTokenScopes?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn access token signature verification off and on as needed. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_signature GatewayPluginJwtSigner#verify_access_token_signature}
  */
  readonly verifyAccessTokenSignature?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the access token required subjects verification, specified with `config.access_token_subjects_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_access_token_subject GatewayPluginJwtSigner#verify_access_token_subject}
  */
  readonly verifyAccessTokenSubject?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token required audiences verification, specified with `config.channel_token_audiences_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_audience GatewayPluginJwtSigner#verify_channel_token_audience}
  */
  readonly verifyChannelTokenAudience?: boolean | cdktf.IResolvable;
  /**
  * Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_expiry GatewayPluginJwtSigner#verify_channel_token_expiry}
  */
  readonly verifyChannelTokenExpiry?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token introspection required audiences verification, specified with `config.channel_token_introspection_audiences_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_audience GatewayPluginJwtSigner#verify_channel_token_introspection_audience}
  */
  readonly verifyChannelTokenIntrospectionAudience?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn on/off the channel token introspection expiry verification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_expiry GatewayPluginJwtSigner#verify_channel_token_introspection_expiry}
  */
  readonly verifyChannelTokenIntrospectionExpiry?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token introspection allowed issuers verification, specified with `config.channel_token_introspection_issuers_allowed`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_issuer GatewayPluginJwtSigner#verify_channel_token_introspection_issuer}
  */
  readonly verifyChannelTokenIntrospectionIssuer?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token introspection notbefore verification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_notbefore GatewayPluginJwtSigner#verify_channel_token_introspection_notbefore}
  */
  readonly verifyChannelTokenIntrospectionNotbefore?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn on/off the channel token introspection scopes verification specified with `config.channel_token_introspection_scopes_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_scopes GatewayPluginJwtSigner#verify_channel_token_introspection_scopes}
  */
  readonly verifyChannelTokenIntrospectionScopes?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token introspection required subjects verification, specified with `config.channel_token_introspection_subjects_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_introspection_subject GatewayPluginJwtSigner#verify_channel_token_introspection_subject}
  */
  readonly verifyChannelTokenIntrospectionSubject?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token allowed issuers verification, specified with `config.channel_token_issuers_allowed`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_issuer GatewayPluginJwtSigner#verify_channel_token_issuer}
  */
  readonly verifyChannelTokenIssuer?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token notbefore verification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_notbefore GatewayPluginJwtSigner#verify_channel_token_notbefore}
  */
  readonly verifyChannelTokenNotbefore?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn on/off the channel token required scopes verification specified with `config.channel_token_scopes_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_scopes GatewayPluginJwtSigner#verify_channel_token_scopes}
  */
  readonly verifyChannelTokenScopes?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn on/off the channel token signature verification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_signature GatewayPluginJwtSigner#verify_channel_token_signature}
  */
  readonly verifyChannelTokenSignature?: boolean | cdktf.IResolvable;
  /**
  * Quickly turn off and on the channel token required subjects verification, specified with `config.channel_token_subjects_required`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#verify_channel_token_subject GatewayPluginJwtSigner#verify_channel_token_subject}
  */
  readonly verifyChannelTokenSubject?: boolean | cdktf.IResolvable;
}

export function gatewayPluginJwtSignerConfigAToTerraform(struct?: GatewayPluginJwtSignerConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_audience_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenAudienceClaim),
    access_token_audiences_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenAudiencesAllowed),
    access_token_consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenConsumerBy),
    access_token_consumer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenConsumerClaim),
    access_token_expiry_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenExpiryClaim),
    access_token_introspection_audience_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionAudienceClaim),
    access_token_introspection_audiences_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionAudiencesAllowed),
    access_token_introspection_authorization: cdktf.stringToTerraform(struct!.accessTokenIntrospectionAuthorization),
    access_token_introspection_body_args: cdktf.stringToTerraform(struct!.accessTokenIntrospectionBodyArgs),
    access_token_introspection_consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionConsumerBy),
    access_token_introspection_consumer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionConsumerClaim),
    access_token_introspection_endpoint: cdktf.stringToTerraform(struct!.accessTokenIntrospectionEndpoint),
    access_token_introspection_expiry_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionExpiryClaim),
    access_token_introspection_hint: cdktf.stringToTerraform(struct!.accessTokenIntrospectionHint),
    access_token_introspection_issuer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionIssuerClaim),
    access_token_introspection_issuers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionIssuersAllowed),
    access_token_introspection_jwt_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionJwtClaim),
    access_token_introspection_leeway: cdktf.numberToTerraform(struct!.accessTokenIntrospectionLeeway),
    access_token_introspection_notbefore_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionNotbeforeClaim),
    access_token_introspection_optional_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.accessTokenIntrospectionOptionalClaims),
    access_token_introspection_required_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.accessTokenIntrospectionRequiredClaims),
    access_token_introspection_scopes_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionScopesClaim),
    access_token_introspection_scopes_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionScopesRequired),
    access_token_introspection_subject_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionSubjectClaim),
    access_token_introspection_subjects_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIntrospectionSubjectsAllowed),
    access_token_introspection_timeout: cdktf.numberToTerraform(struct!.accessTokenIntrospectionTimeout),
    access_token_issuer: cdktf.stringToTerraform(struct!.accessTokenIssuer),
    access_token_issuer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIssuerClaim),
    access_token_issuers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenIssuersAllowed),
    access_token_jwks_uri: cdktf.stringToTerraform(struct!.accessTokenJwksUri),
    access_token_jwks_uri_client_certificate: gatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateToTerraform(struct!.accessTokenJwksUriClientCertificate),
    access_token_jwks_uri_client_password: cdktf.stringToTerraform(struct!.accessTokenJwksUriClientPassword),
    access_token_jwks_uri_client_username: cdktf.stringToTerraform(struct!.accessTokenJwksUriClientUsername),
    access_token_jwks_uri_rotate_period: cdktf.numberToTerraform(struct!.accessTokenJwksUriRotatePeriod),
    access_token_keyset: cdktf.stringToTerraform(struct!.accessTokenKeyset),
    access_token_keyset_client_certificate: gatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateToTerraform(struct!.accessTokenKeysetClientCertificate),
    access_token_keyset_client_password: cdktf.stringToTerraform(struct!.accessTokenKeysetClientPassword),
    access_token_keyset_client_username: cdktf.stringToTerraform(struct!.accessTokenKeysetClientUsername),
    access_token_keyset_rotate_period: cdktf.numberToTerraform(struct!.accessTokenKeysetRotatePeriod),
    access_token_leeway: cdktf.numberToTerraform(struct!.accessTokenLeeway),
    access_token_notbefore_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenNotbeforeClaim),
    access_token_optional: cdktf.booleanToTerraform(struct!.accessTokenOptional),
    access_token_optional_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.accessTokenOptionalClaims),
    access_token_request_header: cdktf.stringToTerraform(struct!.accessTokenRequestHeader),
    access_token_required_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.accessTokenRequiredClaims),
    access_token_scopes_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenScopesClaim),
    access_token_scopes_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenScopesRequired),
    access_token_signing: cdktf.booleanToTerraform(struct!.accessTokenSigning),
    access_token_signing_algorithm: cdktf.stringToTerraform(struct!.accessTokenSigningAlgorithm),
    access_token_subject_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenSubjectClaim),
    access_token_subjects_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessTokenSubjectsAllowed),
    access_token_upstream_header: cdktf.stringToTerraform(struct!.accessTokenUpstreamHeader),
    access_token_upstream_leeway: cdktf.numberToTerraform(struct!.accessTokenUpstreamLeeway),
    add_access_token_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addAccessTokenClaims),
    add_channel_token_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addChannelTokenClaims),
    add_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.addClaims),
    cache_access_token_introspection: cdktf.booleanToTerraform(struct!.cacheAccessTokenIntrospection),
    cache_channel_token_introspection: cdktf.booleanToTerraform(struct!.cacheChannelTokenIntrospection),
    channel_token_audience_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenAudienceClaim),
    channel_token_audiences_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenAudiencesAllowed),
    channel_token_consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenConsumerBy),
    channel_token_consumer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenConsumerClaim),
    channel_token_expiry_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenExpiryClaim),
    channel_token_introspection_audience_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionAudienceClaim),
    channel_token_introspection_audiences_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionAudiencesAllowed),
    channel_token_introspection_authorization: cdktf.stringToTerraform(struct!.channelTokenIntrospectionAuthorization),
    channel_token_introspection_body_args: cdktf.stringToTerraform(struct!.channelTokenIntrospectionBodyArgs),
    channel_token_introspection_consumer_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionConsumerBy),
    channel_token_introspection_consumer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionConsumerClaim),
    channel_token_introspection_endpoint: cdktf.stringToTerraform(struct!.channelTokenIntrospectionEndpoint),
    channel_token_introspection_expiry_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionExpiryClaim),
    channel_token_introspection_hint: cdktf.stringToTerraform(struct!.channelTokenIntrospectionHint),
    channel_token_introspection_issuer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionIssuerClaim),
    channel_token_introspection_issuers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionIssuersAllowed),
    channel_token_introspection_jwt_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionJwtClaim),
    channel_token_introspection_leeway: cdktf.numberToTerraform(struct!.channelTokenIntrospectionLeeway),
    channel_token_introspection_notbefore_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionNotbeforeClaim),
    channel_token_introspection_optional_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.channelTokenIntrospectionOptionalClaims),
    channel_token_introspection_required_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.channelTokenIntrospectionRequiredClaims),
    channel_token_introspection_scopes_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionScopesClaim),
    channel_token_introspection_scopes_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionScopesRequired),
    channel_token_introspection_subject_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionSubjectClaim),
    channel_token_introspection_subjects_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIntrospectionSubjectsAllowed),
    channel_token_introspection_timeout: cdktf.numberToTerraform(struct!.channelTokenIntrospectionTimeout),
    channel_token_issuer: cdktf.stringToTerraform(struct!.channelTokenIssuer),
    channel_token_issuer_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIssuerClaim),
    channel_token_issuers_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenIssuersAllowed),
    channel_token_jwks_uri: cdktf.stringToTerraform(struct!.channelTokenJwksUri),
    channel_token_jwks_uri_client_certificate: gatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateToTerraform(struct!.channelTokenJwksUriClientCertificate),
    channel_token_jwks_uri_client_password: cdktf.stringToTerraform(struct!.channelTokenJwksUriClientPassword),
    channel_token_jwks_uri_client_username: cdktf.stringToTerraform(struct!.channelTokenJwksUriClientUsername),
    channel_token_jwks_uri_rotate_period: cdktf.numberToTerraform(struct!.channelTokenJwksUriRotatePeriod),
    channel_token_keyset: cdktf.stringToTerraform(struct!.channelTokenKeyset),
    channel_token_keyset_client_certificate: gatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateToTerraform(struct!.channelTokenKeysetClientCertificate),
    channel_token_keyset_client_password: cdktf.stringToTerraform(struct!.channelTokenKeysetClientPassword),
    channel_token_keyset_client_username: cdktf.stringToTerraform(struct!.channelTokenKeysetClientUsername),
    channel_token_keyset_rotate_period: cdktf.numberToTerraform(struct!.channelTokenKeysetRotatePeriod),
    channel_token_leeway: cdktf.numberToTerraform(struct!.channelTokenLeeway),
    channel_token_notbefore_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenNotbeforeClaim),
    channel_token_optional: cdktf.booleanToTerraform(struct!.channelTokenOptional),
    channel_token_optional_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.channelTokenOptionalClaims),
    channel_token_request_header: cdktf.stringToTerraform(struct!.channelTokenRequestHeader),
    channel_token_required_claims: cdktf.listMapper(cdktf.listMapper(cdktf.stringToTerraform, false), false)(struct!.channelTokenRequiredClaims),
    channel_token_scopes_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenScopesClaim),
    channel_token_scopes_required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenScopesRequired),
    channel_token_signing: cdktf.booleanToTerraform(struct!.channelTokenSigning),
    channel_token_signing_algorithm: cdktf.stringToTerraform(struct!.channelTokenSigningAlgorithm),
    channel_token_subject_claim: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenSubjectClaim),
    channel_token_subjects_allowed: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.channelTokenSubjectsAllowed),
    channel_token_upstream_header: cdktf.stringToTerraform(struct!.channelTokenUpstreamHeader),
    channel_token_upstream_leeway: cdktf.numberToTerraform(struct!.channelTokenUpstreamLeeway),
    enable_access_token_introspection: cdktf.booleanToTerraform(struct!.enableAccessTokenIntrospection),
    enable_channel_token_introspection: cdktf.booleanToTerraform(struct!.enableChannelTokenIntrospection),
    enable_hs_signatures: cdktf.booleanToTerraform(struct!.enableHsSignatures),
    enable_instrumentation: cdktf.booleanToTerraform(struct!.enableInstrumentation),
    original_access_token_upstream_header: cdktf.stringToTerraform(struct!.originalAccessTokenUpstreamHeader),
    original_channel_token_upstream_header: cdktf.stringToTerraform(struct!.originalChannelTokenUpstreamHeader),
    realm: cdktf.stringToTerraform(struct!.realm),
    remove_access_token_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeAccessTokenClaims),
    remove_channel_token_claims: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.removeChannelTokenClaims),
    set_access_token_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setAccessTokenClaims),
    set_channel_token_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setChannelTokenClaims),
    set_claims: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.setClaims),
    trust_access_token_introspection: cdktf.booleanToTerraform(struct!.trustAccessTokenIntrospection),
    trust_channel_token_introspection: cdktf.booleanToTerraform(struct!.trustChannelTokenIntrospection),
    verify_access_token_audience: cdktf.booleanToTerraform(struct!.verifyAccessTokenAudience),
    verify_access_token_expiry: cdktf.booleanToTerraform(struct!.verifyAccessTokenExpiry),
    verify_access_token_introspection_audience: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionAudience),
    verify_access_token_introspection_expiry: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionExpiry),
    verify_access_token_introspection_issuer: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionIssuer),
    verify_access_token_introspection_notbefore: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionNotbefore),
    verify_access_token_introspection_scopes: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionScopes),
    verify_access_token_introspection_subject: cdktf.booleanToTerraform(struct!.verifyAccessTokenIntrospectionSubject),
    verify_access_token_issuer: cdktf.booleanToTerraform(struct!.verifyAccessTokenIssuer),
    verify_access_token_notbefore: cdktf.booleanToTerraform(struct!.verifyAccessTokenNotbefore),
    verify_access_token_scopes: cdktf.booleanToTerraform(struct!.verifyAccessTokenScopes),
    verify_access_token_signature: cdktf.booleanToTerraform(struct!.verifyAccessTokenSignature),
    verify_access_token_subject: cdktf.booleanToTerraform(struct!.verifyAccessTokenSubject),
    verify_channel_token_audience: cdktf.booleanToTerraform(struct!.verifyChannelTokenAudience),
    verify_channel_token_expiry: cdktf.booleanToTerraform(struct!.verifyChannelTokenExpiry),
    verify_channel_token_introspection_audience: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionAudience),
    verify_channel_token_introspection_expiry: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionExpiry),
    verify_channel_token_introspection_issuer: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionIssuer),
    verify_channel_token_introspection_notbefore: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionNotbefore),
    verify_channel_token_introspection_scopes: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionScopes),
    verify_channel_token_introspection_subject: cdktf.booleanToTerraform(struct!.verifyChannelTokenIntrospectionSubject),
    verify_channel_token_issuer: cdktf.booleanToTerraform(struct!.verifyChannelTokenIssuer),
    verify_channel_token_notbefore: cdktf.booleanToTerraform(struct!.verifyChannelTokenNotbefore),
    verify_channel_token_scopes: cdktf.booleanToTerraform(struct!.verifyChannelTokenScopes),
    verify_channel_token_signature: cdktf.booleanToTerraform(struct!.verifyChannelTokenSignature),
    verify_channel_token_subject: cdktf.booleanToTerraform(struct!.verifyChannelTokenSubject),
  }
}


export function gatewayPluginJwtSignerConfigAToHclTerraform(struct?: GatewayPluginJwtSignerConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_audience_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenAudienceClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_audiences_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenAudiencesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenConsumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_consumer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenConsumerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_expiry_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenExpiryClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_audience_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionAudienceClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_audiences_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionAudiencesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_authorization: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenIntrospectionAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_introspection_body_args: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenIntrospectionBodyArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_introspection_consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionConsumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_consumer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionConsumerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenIntrospectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_introspection_expiry_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionExpiryClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_hint: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenIntrospectionHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_introspection_issuer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionIssuerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_issuers_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionIssuersAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_jwt_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionJwtClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_leeway: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenIntrospectionLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_introspection_notbefore_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionNotbeforeClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_optional_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.accessTokenIntrospectionOptionalClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    access_token_introspection_required_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.accessTokenIntrospectionRequiredClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    access_token_introspection_scopes_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionScopesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_scopes_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionScopesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_subject_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionSubjectClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_subjects_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIntrospectionSubjectsAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_introspection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenIntrospectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_issuer: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_issuer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIssuerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_issuers_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenIssuersAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenJwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_jwks_uri_client_certificate: {
      value: gatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateToHclTerraform(struct!.accessTokenJwksUriClientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate",
    },
    access_token_jwks_uri_client_password: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenJwksUriClientPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_jwks_uri_client_username: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenJwksUriClientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_jwks_uri_rotate_period: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenJwksUriRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_keyset: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenKeyset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_keyset_client_certificate: {
      value: gatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateToHclTerraform(struct!.accessTokenKeysetClientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate",
    },
    access_token_keyset_client_password: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenKeysetClientPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_keyset_client_username: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenKeysetClientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_keyset_rotate_period: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenKeysetRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_leeway: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    access_token_notbefore_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenNotbeforeClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_optional: {
      value: cdktf.booleanToHclTerraform(struct!.accessTokenOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_token_optional_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.accessTokenOptionalClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    access_token_request_header: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenRequestHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_required_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.accessTokenRequiredClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    access_token_scopes_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenScopesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_scopes_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenScopesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_signing: {
      value: cdktf.booleanToHclTerraform(struct!.accessTokenSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    access_token_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_subject_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenSubjectClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_subjects_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessTokenSubjectsAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    access_token_upstream_header: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenUpstreamHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_upstream_leeway: {
      value: cdktf.numberToHclTerraform(struct!.accessTokenUpstreamLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    add_access_token_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addAccessTokenClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    add_channel_token_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addChannelTokenClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    add_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.addClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    cache_access_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.cacheAccessTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cache_channel_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.cacheChannelTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_token_audience_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenAudienceClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_audiences_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenAudiencesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenConsumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_consumer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenConsumerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_expiry_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenExpiryClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_audience_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionAudienceClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_audiences_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionAudiencesAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_authorization: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenIntrospectionAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_introspection_body_args: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenIntrospectionBodyArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_introspection_consumer_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionConsumerBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_consumer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionConsumerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenIntrospectionEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_introspection_expiry_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionExpiryClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_hint: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenIntrospectionHint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_introspection_issuer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionIssuerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_issuers_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionIssuersAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_jwt_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionJwtClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_leeway: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenIntrospectionLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_token_introspection_notbefore_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionNotbeforeClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_optional_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.channelTokenIntrospectionOptionalClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    channel_token_introspection_required_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.channelTokenIntrospectionRequiredClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    channel_token_introspection_scopes_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionScopesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_scopes_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionScopesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_subject_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionSubjectClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_subjects_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIntrospectionSubjectsAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_introspection_timeout: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenIntrospectionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_token_issuer: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_issuer_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIssuerClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_issuers_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenIssuersAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_jwks_uri: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenJwksUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_jwks_uri_client_certificate: {
      value: gatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateToHclTerraform(struct!.channelTokenJwksUriClientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate",
    },
    channel_token_jwks_uri_client_password: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenJwksUriClientPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_jwks_uri_client_username: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenJwksUriClientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_jwks_uri_rotate_period: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenJwksUriRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_token_keyset: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenKeyset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_keyset_client_certificate: {
      value: gatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateToHclTerraform(struct!.channelTokenKeysetClientCertificate),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate",
    },
    channel_token_keyset_client_password: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenKeysetClientPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_keyset_client_username: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenKeysetClientUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_keyset_rotate_period: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenKeysetRotatePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_token_leeway: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    channel_token_notbefore_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenNotbeforeClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_optional: {
      value: cdktf.booleanToHclTerraform(struct!.channelTokenOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_token_optional_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.channelTokenOptionalClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    channel_token_request_header: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenRequestHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_required_claims: {
      value: cdktf.listMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false), false)(struct!.channelTokenRequiredClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringListList",
    },
    channel_token_scopes_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenScopesClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_scopes_required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenScopesRequired),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_signing: {
      value: cdktf.booleanToHclTerraform(struct!.channelTokenSigning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    channel_token_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_subject_claim: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenSubjectClaim),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_subjects_allowed: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.channelTokenSubjectsAllowed),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    channel_token_upstream_header: {
      value: cdktf.stringToHclTerraform(struct!.channelTokenUpstreamHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    channel_token_upstream_leeway: {
      value: cdktf.numberToHclTerraform(struct!.channelTokenUpstreamLeeway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_access_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.enableAccessTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_channel_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.enableChannelTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_hs_signatures: {
      value: cdktf.booleanToHclTerraform(struct!.enableHsSignatures),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_instrumentation: {
      value: cdktf.booleanToHclTerraform(struct!.enableInstrumentation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    original_access_token_upstream_header: {
      value: cdktf.stringToHclTerraform(struct!.originalAccessTokenUpstreamHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    original_channel_token_upstream_header: {
      value: cdktf.stringToHclTerraform(struct!.originalChannelTokenUpstreamHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    realm: {
      value: cdktf.stringToHclTerraform(struct!.realm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remove_access_token_claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeAccessTokenClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    remove_channel_token_claims: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.removeChannelTokenClaims),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_access_token_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setAccessTokenClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set_channel_token_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setChannelTokenClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    set_claims: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.setClaims),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    trust_access_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.trustAccessTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_channel_token_introspection: {
      value: cdktf.booleanToHclTerraform(struct!.trustChannelTokenIntrospection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_audience: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_audience: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_notbefore: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionNotbefore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_introspection_subject: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIntrospectionSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_notbefore: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenNotbefore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_signature: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_access_token_subject: {
      value: cdktf.booleanToHclTerraform(struct!.verifyAccessTokenSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_audience: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_audience: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_expiry: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_notbefore: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionNotbefore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_introspection_subject: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIntrospectionSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_issuer: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenIssuer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_notbefore: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenNotbefore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_scopes: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenScopes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_signature: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_channel_token_subject: {
      value: cdktf.booleanToHclTerraform(struct!.verifyChannelTokenSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenAudienceClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenAudienceClaim = this._accessTokenAudienceClaim;
    }
    if (this._accessTokenAudiencesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenAudiencesAllowed = this._accessTokenAudiencesAllowed;
    }
    if (this._accessTokenConsumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenConsumerBy = this._accessTokenConsumerBy;
    }
    if (this._accessTokenConsumerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenConsumerClaim = this._accessTokenConsumerClaim;
    }
    if (this._accessTokenExpiryClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenExpiryClaim = this._accessTokenExpiryClaim;
    }
    if (this._accessTokenIntrospectionAudienceClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionAudienceClaim = this._accessTokenIntrospectionAudienceClaim;
    }
    if (this._accessTokenIntrospectionAudiencesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionAudiencesAllowed = this._accessTokenIntrospectionAudiencesAllowed;
    }
    if (this._accessTokenIntrospectionAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionAuthorization = this._accessTokenIntrospectionAuthorization;
    }
    if (this._accessTokenIntrospectionBodyArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionBodyArgs = this._accessTokenIntrospectionBodyArgs;
    }
    if (this._accessTokenIntrospectionConsumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionConsumerBy = this._accessTokenIntrospectionConsumerBy;
    }
    if (this._accessTokenIntrospectionConsumerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionConsumerClaim = this._accessTokenIntrospectionConsumerClaim;
    }
    if (this._accessTokenIntrospectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionEndpoint = this._accessTokenIntrospectionEndpoint;
    }
    if (this._accessTokenIntrospectionExpiryClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionExpiryClaim = this._accessTokenIntrospectionExpiryClaim;
    }
    if (this._accessTokenIntrospectionHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionHint = this._accessTokenIntrospectionHint;
    }
    if (this._accessTokenIntrospectionIssuerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionIssuerClaim = this._accessTokenIntrospectionIssuerClaim;
    }
    if (this._accessTokenIntrospectionIssuersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionIssuersAllowed = this._accessTokenIntrospectionIssuersAllowed;
    }
    if (this._accessTokenIntrospectionJwtClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionJwtClaim = this._accessTokenIntrospectionJwtClaim;
    }
    if (this._accessTokenIntrospectionLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionLeeway = this._accessTokenIntrospectionLeeway;
    }
    if (this._accessTokenIntrospectionNotbeforeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionNotbeforeClaim = this._accessTokenIntrospectionNotbeforeClaim;
    }
    if (this._accessTokenIntrospectionOptionalClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionOptionalClaims = this._accessTokenIntrospectionOptionalClaims;
    }
    if (this._accessTokenIntrospectionRequiredClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionRequiredClaims = this._accessTokenIntrospectionRequiredClaims;
    }
    if (this._accessTokenIntrospectionScopesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionScopesClaim = this._accessTokenIntrospectionScopesClaim;
    }
    if (this._accessTokenIntrospectionScopesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionScopesRequired = this._accessTokenIntrospectionScopesRequired;
    }
    if (this._accessTokenIntrospectionSubjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionSubjectClaim = this._accessTokenIntrospectionSubjectClaim;
    }
    if (this._accessTokenIntrospectionSubjectsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionSubjectsAllowed = this._accessTokenIntrospectionSubjectsAllowed;
    }
    if (this._accessTokenIntrospectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIntrospectionTimeout = this._accessTokenIntrospectionTimeout;
    }
    if (this._accessTokenIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIssuer = this._accessTokenIssuer;
    }
    if (this._accessTokenIssuerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIssuerClaim = this._accessTokenIssuerClaim;
    }
    if (this._accessTokenIssuersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenIssuersAllowed = this._accessTokenIssuersAllowed;
    }
    if (this._accessTokenJwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenJwksUri = this._accessTokenJwksUri;
    }
    if (this._accessTokenJwksUriClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenJwksUriClientCertificate = this._accessTokenJwksUriClientCertificate?.internalValue;
    }
    if (this._accessTokenJwksUriClientPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenJwksUriClientPassword = this._accessTokenJwksUriClientPassword;
    }
    if (this._accessTokenJwksUriClientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenJwksUriClientUsername = this._accessTokenJwksUriClientUsername;
    }
    if (this._accessTokenJwksUriRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenJwksUriRotatePeriod = this._accessTokenJwksUriRotatePeriod;
    }
    if (this._accessTokenKeyset !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeyset = this._accessTokenKeyset;
    }
    if (this._accessTokenKeysetClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeysetClientCertificate = this._accessTokenKeysetClientCertificate?.internalValue;
    }
    if (this._accessTokenKeysetClientPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeysetClientPassword = this._accessTokenKeysetClientPassword;
    }
    if (this._accessTokenKeysetClientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeysetClientUsername = this._accessTokenKeysetClientUsername;
    }
    if (this._accessTokenKeysetRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeysetRotatePeriod = this._accessTokenKeysetRotatePeriod;
    }
    if (this._accessTokenLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenLeeway = this._accessTokenLeeway;
    }
    if (this._accessTokenNotbeforeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenNotbeforeClaim = this._accessTokenNotbeforeClaim;
    }
    if (this._accessTokenOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenOptional = this._accessTokenOptional;
    }
    if (this._accessTokenOptionalClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenOptionalClaims = this._accessTokenOptionalClaims;
    }
    if (this._accessTokenRequestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenRequestHeader = this._accessTokenRequestHeader;
    }
    if (this._accessTokenRequiredClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenRequiredClaims = this._accessTokenRequiredClaims;
    }
    if (this._accessTokenScopesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenScopesClaim = this._accessTokenScopesClaim;
    }
    if (this._accessTokenScopesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenScopesRequired = this._accessTokenScopesRequired;
    }
    if (this._accessTokenSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSigning = this._accessTokenSigning;
    }
    if (this._accessTokenSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSigningAlgorithm = this._accessTokenSigningAlgorithm;
    }
    if (this._accessTokenSubjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSubjectClaim = this._accessTokenSubjectClaim;
    }
    if (this._accessTokenSubjectsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenSubjectsAllowed = this._accessTokenSubjectsAllowed;
    }
    if (this._accessTokenUpstreamHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUpstreamHeader = this._accessTokenUpstreamHeader;
    }
    if (this._accessTokenUpstreamLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenUpstreamLeeway = this._accessTokenUpstreamLeeway;
    }
    if (this._addAccessTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.addAccessTokenClaims = this._addAccessTokenClaims;
    }
    if (this._addChannelTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.addChannelTokenClaims = this._addChannelTokenClaims;
    }
    if (this._addClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.addClaims = this._addClaims;
    }
    if (this._cacheAccessTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAccessTokenIntrospection = this._cacheAccessTokenIntrospection;
    }
    if (this._cacheChannelTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheChannelTokenIntrospection = this._cacheChannelTokenIntrospection;
    }
    if (this._channelTokenAudienceClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenAudienceClaim = this._channelTokenAudienceClaim;
    }
    if (this._channelTokenAudiencesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenAudiencesAllowed = this._channelTokenAudiencesAllowed;
    }
    if (this._channelTokenConsumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenConsumerBy = this._channelTokenConsumerBy;
    }
    if (this._channelTokenConsumerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenConsumerClaim = this._channelTokenConsumerClaim;
    }
    if (this._channelTokenExpiryClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenExpiryClaim = this._channelTokenExpiryClaim;
    }
    if (this._channelTokenIntrospectionAudienceClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionAudienceClaim = this._channelTokenIntrospectionAudienceClaim;
    }
    if (this._channelTokenIntrospectionAudiencesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionAudiencesAllowed = this._channelTokenIntrospectionAudiencesAllowed;
    }
    if (this._channelTokenIntrospectionAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionAuthorization = this._channelTokenIntrospectionAuthorization;
    }
    if (this._channelTokenIntrospectionBodyArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionBodyArgs = this._channelTokenIntrospectionBodyArgs;
    }
    if (this._channelTokenIntrospectionConsumerBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionConsumerBy = this._channelTokenIntrospectionConsumerBy;
    }
    if (this._channelTokenIntrospectionConsumerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionConsumerClaim = this._channelTokenIntrospectionConsumerClaim;
    }
    if (this._channelTokenIntrospectionEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionEndpoint = this._channelTokenIntrospectionEndpoint;
    }
    if (this._channelTokenIntrospectionExpiryClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionExpiryClaim = this._channelTokenIntrospectionExpiryClaim;
    }
    if (this._channelTokenIntrospectionHint !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionHint = this._channelTokenIntrospectionHint;
    }
    if (this._channelTokenIntrospectionIssuerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionIssuerClaim = this._channelTokenIntrospectionIssuerClaim;
    }
    if (this._channelTokenIntrospectionIssuersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionIssuersAllowed = this._channelTokenIntrospectionIssuersAllowed;
    }
    if (this._channelTokenIntrospectionJwtClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionJwtClaim = this._channelTokenIntrospectionJwtClaim;
    }
    if (this._channelTokenIntrospectionLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionLeeway = this._channelTokenIntrospectionLeeway;
    }
    if (this._channelTokenIntrospectionNotbeforeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionNotbeforeClaim = this._channelTokenIntrospectionNotbeforeClaim;
    }
    if (this._channelTokenIntrospectionOptionalClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionOptionalClaims = this._channelTokenIntrospectionOptionalClaims;
    }
    if (this._channelTokenIntrospectionRequiredClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionRequiredClaims = this._channelTokenIntrospectionRequiredClaims;
    }
    if (this._channelTokenIntrospectionScopesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionScopesClaim = this._channelTokenIntrospectionScopesClaim;
    }
    if (this._channelTokenIntrospectionScopesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionScopesRequired = this._channelTokenIntrospectionScopesRequired;
    }
    if (this._channelTokenIntrospectionSubjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionSubjectClaim = this._channelTokenIntrospectionSubjectClaim;
    }
    if (this._channelTokenIntrospectionSubjectsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionSubjectsAllowed = this._channelTokenIntrospectionSubjectsAllowed;
    }
    if (this._channelTokenIntrospectionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIntrospectionTimeout = this._channelTokenIntrospectionTimeout;
    }
    if (this._channelTokenIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIssuer = this._channelTokenIssuer;
    }
    if (this._channelTokenIssuerClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIssuerClaim = this._channelTokenIssuerClaim;
    }
    if (this._channelTokenIssuersAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenIssuersAllowed = this._channelTokenIssuersAllowed;
    }
    if (this._channelTokenJwksUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenJwksUri = this._channelTokenJwksUri;
    }
    if (this._channelTokenJwksUriClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenJwksUriClientCertificate = this._channelTokenJwksUriClientCertificate?.internalValue;
    }
    if (this._channelTokenJwksUriClientPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenJwksUriClientPassword = this._channelTokenJwksUriClientPassword;
    }
    if (this._channelTokenJwksUriClientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenJwksUriClientUsername = this._channelTokenJwksUriClientUsername;
    }
    if (this._channelTokenJwksUriRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenJwksUriRotatePeriod = this._channelTokenJwksUriRotatePeriod;
    }
    if (this._channelTokenKeyset !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenKeyset = this._channelTokenKeyset;
    }
    if (this._channelTokenKeysetClientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenKeysetClientCertificate = this._channelTokenKeysetClientCertificate?.internalValue;
    }
    if (this._channelTokenKeysetClientPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenKeysetClientPassword = this._channelTokenKeysetClientPassword;
    }
    if (this._channelTokenKeysetClientUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenKeysetClientUsername = this._channelTokenKeysetClientUsername;
    }
    if (this._channelTokenKeysetRotatePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenKeysetRotatePeriod = this._channelTokenKeysetRotatePeriod;
    }
    if (this._channelTokenLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenLeeway = this._channelTokenLeeway;
    }
    if (this._channelTokenNotbeforeClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenNotbeforeClaim = this._channelTokenNotbeforeClaim;
    }
    if (this._channelTokenOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenOptional = this._channelTokenOptional;
    }
    if (this._channelTokenOptionalClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenOptionalClaims = this._channelTokenOptionalClaims;
    }
    if (this._channelTokenRequestHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenRequestHeader = this._channelTokenRequestHeader;
    }
    if (this._channelTokenRequiredClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenRequiredClaims = this._channelTokenRequiredClaims;
    }
    if (this._channelTokenScopesClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenScopesClaim = this._channelTokenScopesClaim;
    }
    if (this._channelTokenScopesRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenScopesRequired = this._channelTokenScopesRequired;
    }
    if (this._channelTokenSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenSigning = this._channelTokenSigning;
    }
    if (this._channelTokenSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenSigningAlgorithm = this._channelTokenSigningAlgorithm;
    }
    if (this._channelTokenSubjectClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenSubjectClaim = this._channelTokenSubjectClaim;
    }
    if (this._channelTokenSubjectsAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenSubjectsAllowed = this._channelTokenSubjectsAllowed;
    }
    if (this._channelTokenUpstreamHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenUpstreamHeader = this._channelTokenUpstreamHeader;
    }
    if (this._channelTokenUpstreamLeeway !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelTokenUpstreamLeeway = this._channelTokenUpstreamLeeway;
    }
    if (this._enableAccessTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAccessTokenIntrospection = this._enableAccessTokenIntrospection;
    }
    if (this._enableChannelTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableChannelTokenIntrospection = this._enableChannelTokenIntrospection;
    }
    if (this._enableHsSignatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHsSignatures = this._enableHsSignatures;
    }
    if (this._enableInstrumentation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInstrumentation = this._enableInstrumentation;
    }
    if (this._originalAccessTokenUpstreamHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalAccessTokenUpstreamHeader = this._originalAccessTokenUpstreamHeader;
    }
    if (this._originalChannelTokenUpstreamHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.originalChannelTokenUpstreamHeader = this._originalChannelTokenUpstreamHeader;
    }
    if (this._realm !== undefined) {
      hasAnyValues = true;
      internalValueResult.realm = this._realm;
    }
    if (this._removeAccessTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAccessTokenClaims = this._removeAccessTokenClaims;
    }
    if (this._removeChannelTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeChannelTokenClaims = this._removeChannelTokenClaims;
    }
    if (this._setAccessTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.setAccessTokenClaims = this._setAccessTokenClaims;
    }
    if (this._setChannelTokenClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.setChannelTokenClaims = this._setChannelTokenClaims;
    }
    if (this._setClaims !== undefined) {
      hasAnyValues = true;
      internalValueResult.setClaims = this._setClaims;
    }
    if (this._trustAccessTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAccessTokenIntrospection = this._trustAccessTokenIntrospection;
    }
    if (this._trustChannelTokenIntrospection !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustChannelTokenIntrospection = this._trustChannelTokenIntrospection;
    }
    if (this._verifyAccessTokenAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenAudience = this._verifyAccessTokenAudience;
    }
    if (this._verifyAccessTokenExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenExpiry = this._verifyAccessTokenExpiry;
    }
    if (this._verifyAccessTokenIntrospectionAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionAudience = this._verifyAccessTokenIntrospectionAudience;
    }
    if (this._verifyAccessTokenIntrospectionExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionExpiry = this._verifyAccessTokenIntrospectionExpiry;
    }
    if (this._verifyAccessTokenIntrospectionIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionIssuer = this._verifyAccessTokenIntrospectionIssuer;
    }
    if (this._verifyAccessTokenIntrospectionNotbefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionNotbefore = this._verifyAccessTokenIntrospectionNotbefore;
    }
    if (this._verifyAccessTokenIntrospectionScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionScopes = this._verifyAccessTokenIntrospectionScopes;
    }
    if (this._verifyAccessTokenIntrospectionSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIntrospectionSubject = this._verifyAccessTokenIntrospectionSubject;
    }
    if (this._verifyAccessTokenIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenIssuer = this._verifyAccessTokenIssuer;
    }
    if (this._verifyAccessTokenNotbefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenNotbefore = this._verifyAccessTokenNotbefore;
    }
    if (this._verifyAccessTokenScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenScopes = this._verifyAccessTokenScopes;
    }
    if (this._verifyAccessTokenSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenSignature = this._verifyAccessTokenSignature;
    }
    if (this._verifyAccessTokenSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyAccessTokenSubject = this._verifyAccessTokenSubject;
    }
    if (this._verifyChannelTokenAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenAudience = this._verifyChannelTokenAudience;
    }
    if (this._verifyChannelTokenExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenExpiry = this._verifyChannelTokenExpiry;
    }
    if (this._verifyChannelTokenIntrospectionAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionAudience = this._verifyChannelTokenIntrospectionAudience;
    }
    if (this._verifyChannelTokenIntrospectionExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionExpiry = this._verifyChannelTokenIntrospectionExpiry;
    }
    if (this._verifyChannelTokenIntrospectionIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionIssuer = this._verifyChannelTokenIntrospectionIssuer;
    }
    if (this._verifyChannelTokenIntrospectionNotbefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionNotbefore = this._verifyChannelTokenIntrospectionNotbefore;
    }
    if (this._verifyChannelTokenIntrospectionScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionScopes = this._verifyChannelTokenIntrospectionScopes;
    }
    if (this._verifyChannelTokenIntrospectionSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIntrospectionSubject = this._verifyChannelTokenIntrospectionSubject;
    }
    if (this._verifyChannelTokenIssuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenIssuer = this._verifyChannelTokenIssuer;
    }
    if (this._verifyChannelTokenNotbefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenNotbefore = this._verifyChannelTokenNotbefore;
    }
    if (this._verifyChannelTokenScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenScopes = this._verifyChannelTokenScopes;
    }
    if (this._verifyChannelTokenSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenSignature = this._verifyChannelTokenSignature;
    }
    if (this._verifyChannelTokenSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyChannelTokenSubject = this._verifyChannelTokenSubject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenAudienceClaim = undefined;
      this._accessTokenAudiencesAllowed = undefined;
      this._accessTokenConsumerBy = undefined;
      this._accessTokenConsumerClaim = undefined;
      this._accessTokenExpiryClaim = undefined;
      this._accessTokenIntrospectionAudienceClaim = undefined;
      this._accessTokenIntrospectionAudiencesAllowed = undefined;
      this._accessTokenIntrospectionAuthorization = undefined;
      this._accessTokenIntrospectionBodyArgs = undefined;
      this._accessTokenIntrospectionConsumerBy = undefined;
      this._accessTokenIntrospectionConsumerClaim = undefined;
      this._accessTokenIntrospectionEndpoint = undefined;
      this._accessTokenIntrospectionExpiryClaim = undefined;
      this._accessTokenIntrospectionHint = undefined;
      this._accessTokenIntrospectionIssuerClaim = undefined;
      this._accessTokenIntrospectionIssuersAllowed = undefined;
      this._accessTokenIntrospectionJwtClaim = undefined;
      this._accessTokenIntrospectionLeeway = undefined;
      this._accessTokenIntrospectionNotbeforeClaim = undefined;
      this._accessTokenIntrospectionOptionalClaims = undefined;
      this._accessTokenIntrospectionRequiredClaims = undefined;
      this._accessTokenIntrospectionScopesClaim = undefined;
      this._accessTokenIntrospectionScopesRequired = undefined;
      this._accessTokenIntrospectionSubjectClaim = undefined;
      this._accessTokenIntrospectionSubjectsAllowed = undefined;
      this._accessTokenIntrospectionTimeout = undefined;
      this._accessTokenIssuer = undefined;
      this._accessTokenIssuerClaim = undefined;
      this._accessTokenIssuersAllowed = undefined;
      this._accessTokenJwksUri = undefined;
      this._accessTokenJwksUriClientCertificate.internalValue = undefined;
      this._accessTokenJwksUriClientPassword = undefined;
      this._accessTokenJwksUriClientUsername = undefined;
      this._accessTokenJwksUriRotatePeriod = undefined;
      this._accessTokenKeyset = undefined;
      this._accessTokenKeysetClientCertificate.internalValue = undefined;
      this._accessTokenKeysetClientPassword = undefined;
      this._accessTokenKeysetClientUsername = undefined;
      this._accessTokenKeysetRotatePeriod = undefined;
      this._accessTokenLeeway = undefined;
      this._accessTokenNotbeforeClaim = undefined;
      this._accessTokenOptional = undefined;
      this._accessTokenOptionalClaims = undefined;
      this._accessTokenRequestHeader = undefined;
      this._accessTokenRequiredClaims = undefined;
      this._accessTokenScopesClaim = undefined;
      this._accessTokenScopesRequired = undefined;
      this._accessTokenSigning = undefined;
      this._accessTokenSigningAlgorithm = undefined;
      this._accessTokenSubjectClaim = undefined;
      this._accessTokenSubjectsAllowed = undefined;
      this._accessTokenUpstreamHeader = undefined;
      this._accessTokenUpstreamLeeway = undefined;
      this._addAccessTokenClaims = undefined;
      this._addChannelTokenClaims = undefined;
      this._addClaims = undefined;
      this._cacheAccessTokenIntrospection = undefined;
      this._cacheChannelTokenIntrospection = undefined;
      this._channelTokenAudienceClaim = undefined;
      this._channelTokenAudiencesAllowed = undefined;
      this._channelTokenConsumerBy = undefined;
      this._channelTokenConsumerClaim = undefined;
      this._channelTokenExpiryClaim = undefined;
      this._channelTokenIntrospectionAudienceClaim = undefined;
      this._channelTokenIntrospectionAudiencesAllowed = undefined;
      this._channelTokenIntrospectionAuthorization = undefined;
      this._channelTokenIntrospectionBodyArgs = undefined;
      this._channelTokenIntrospectionConsumerBy = undefined;
      this._channelTokenIntrospectionConsumerClaim = undefined;
      this._channelTokenIntrospectionEndpoint = undefined;
      this._channelTokenIntrospectionExpiryClaim = undefined;
      this._channelTokenIntrospectionHint = undefined;
      this._channelTokenIntrospectionIssuerClaim = undefined;
      this._channelTokenIntrospectionIssuersAllowed = undefined;
      this._channelTokenIntrospectionJwtClaim = undefined;
      this._channelTokenIntrospectionLeeway = undefined;
      this._channelTokenIntrospectionNotbeforeClaim = undefined;
      this._channelTokenIntrospectionOptionalClaims = undefined;
      this._channelTokenIntrospectionRequiredClaims = undefined;
      this._channelTokenIntrospectionScopesClaim = undefined;
      this._channelTokenIntrospectionScopesRequired = undefined;
      this._channelTokenIntrospectionSubjectClaim = undefined;
      this._channelTokenIntrospectionSubjectsAllowed = undefined;
      this._channelTokenIntrospectionTimeout = undefined;
      this._channelTokenIssuer = undefined;
      this._channelTokenIssuerClaim = undefined;
      this._channelTokenIssuersAllowed = undefined;
      this._channelTokenJwksUri = undefined;
      this._channelTokenJwksUriClientCertificate.internalValue = undefined;
      this._channelTokenJwksUriClientPassword = undefined;
      this._channelTokenJwksUriClientUsername = undefined;
      this._channelTokenJwksUriRotatePeriod = undefined;
      this._channelTokenKeyset = undefined;
      this._channelTokenKeysetClientCertificate.internalValue = undefined;
      this._channelTokenKeysetClientPassword = undefined;
      this._channelTokenKeysetClientUsername = undefined;
      this._channelTokenKeysetRotatePeriod = undefined;
      this._channelTokenLeeway = undefined;
      this._channelTokenNotbeforeClaim = undefined;
      this._channelTokenOptional = undefined;
      this._channelTokenOptionalClaims = undefined;
      this._channelTokenRequestHeader = undefined;
      this._channelTokenRequiredClaims = undefined;
      this._channelTokenScopesClaim = undefined;
      this._channelTokenScopesRequired = undefined;
      this._channelTokenSigning = undefined;
      this._channelTokenSigningAlgorithm = undefined;
      this._channelTokenSubjectClaim = undefined;
      this._channelTokenSubjectsAllowed = undefined;
      this._channelTokenUpstreamHeader = undefined;
      this._channelTokenUpstreamLeeway = undefined;
      this._enableAccessTokenIntrospection = undefined;
      this._enableChannelTokenIntrospection = undefined;
      this._enableHsSignatures = undefined;
      this._enableInstrumentation = undefined;
      this._originalAccessTokenUpstreamHeader = undefined;
      this._originalChannelTokenUpstreamHeader = undefined;
      this._realm = undefined;
      this._removeAccessTokenClaims = undefined;
      this._removeChannelTokenClaims = undefined;
      this._setAccessTokenClaims = undefined;
      this._setChannelTokenClaims = undefined;
      this._setClaims = undefined;
      this._trustAccessTokenIntrospection = undefined;
      this._trustChannelTokenIntrospection = undefined;
      this._verifyAccessTokenAudience = undefined;
      this._verifyAccessTokenExpiry = undefined;
      this._verifyAccessTokenIntrospectionAudience = undefined;
      this._verifyAccessTokenIntrospectionExpiry = undefined;
      this._verifyAccessTokenIntrospectionIssuer = undefined;
      this._verifyAccessTokenIntrospectionNotbefore = undefined;
      this._verifyAccessTokenIntrospectionScopes = undefined;
      this._verifyAccessTokenIntrospectionSubject = undefined;
      this._verifyAccessTokenIssuer = undefined;
      this._verifyAccessTokenNotbefore = undefined;
      this._verifyAccessTokenScopes = undefined;
      this._verifyAccessTokenSignature = undefined;
      this._verifyAccessTokenSubject = undefined;
      this._verifyChannelTokenAudience = undefined;
      this._verifyChannelTokenExpiry = undefined;
      this._verifyChannelTokenIntrospectionAudience = undefined;
      this._verifyChannelTokenIntrospectionExpiry = undefined;
      this._verifyChannelTokenIntrospectionIssuer = undefined;
      this._verifyChannelTokenIntrospectionNotbefore = undefined;
      this._verifyChannelTokenIntrospectionScopes = undefined;
      this._verifyChannelTokenIntrospectionSubject = undefined;
      this._verifyChannelTokenIssuer = undefined;
      this._verifyChannelTokenNotbefore = undefined;
      this._verifyChannelTokenScopes = undefined;
      this._verifyChannelTokenSignature = undefined;
      this._verifyChannelTokenSubject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenAudienceClaim = value.accessTokenAudienceClaim;
      this._accessTokenAudiencesAllowed = value.accessTokenAudiencesAllowed;
      this._accessTokenConsumerBy = value.accessTokenConsumerBy;
      this._accessTokenConsumerClaim = value.accessTokenConsumerClaim;
      this._accessTokenExpiryClaim = value.accessTokenExpiryClaim;
      this._accessTokenIntrospectionAudienceClaim = value.accessTokenIntrospectionAudienceClaim;
      this._accessTokenIntrospectionAudiencesAllowed = value.accessTokenIntrospectionAudiencesAllowed;
      this._accessTokenIntrospectionAuthorization = value.accessTokenIntrospectionAuthorization;
      this._accessTokenIntrospectionBodyArgs = value.accessTokenIntrospectionBodyArgs;
      this._accessTokenIntrospectionConsumerBy = value.accessTokenIntrospectionConsumerBy;
      this._accessTokenIntrospectionConsumerClaim = value.accessTokenIntrospectionConsumerClaim;
      this._accessTokenIntrospectionEndpoint = value.accessTokenIntrospectionEndpoint;
      this._accessTokenIntrospectionExpiryClaim = value.accessTokenIntrospectionExpiryClaim;
      this._accessTokenIntrospectionHint = value.accessTokenIntrospectionHint;
      this._accessTokenIntrospectionIssuerClaim = value.accessTokenIntrospectionIssuerClaim;
      this._accessTokenIntrospectionIssuersAllowed = value.accessTokenIntrospectionIssuersAllowed;
      this._accessTokenIntrospectionJwtClaim = value.accessTokenIntrospectionJwtClaim;
      this._accessTokenIntrospectionLeeway = value.accessTokenIntrospectionLeeway;
      this._accessTokenIntrospectionNotbeforeClaim = value.accessTokenIntrospectionNotbeforeClaim;
      this._accessTokenIntrospectionOptionalClaims = value.accessTokenIntrospectionOptionalClaims;
      this._accessTokenIntrospectionRequiredClaims = value.accessTokenIntrospectionRequiredClaims;
      this._accessTokenIntrospectionScopesClaim = value.accessTokenIntrospectionScopesClaim;
      this._accessTokenIntrospectionScopesRequired = value.accessTokenIntrospectionScopesRequired;
      this._accessTokenIntrospectionSubjectClaim = value.accessTokenIntrospectionSubjectClaim;
      this._accessTokenIntrospectionSubjectsAllowed = value.accessTokenIntrospectionSubjectsAllowed;
      this._accessTokenIntrospectionTimeout = value.accessTokenIntrospectionTimeout;
      this._accessTokenIssuer = value.accessTokenIssuer;
      this._accessTokenIssuerClaim = value.accessTokenIssuerClaim;
      this._accessTokenIssuersAllowed = value.accessTokenIssuersAllowed;
      this._accessTokenJwksUri = value.accessTokenJwksUri;
      this._accessTokenJwksUriClientCertificate.internalValue = value.accessTokenJwksUriClientCertificate;
      this._accessTokenJwksUriClientPassword = value.accessTokenJwksUriClientPassword;
      this._accessTokenJwksUriClientUsername = value.accessTokenJwksUriClientUsername;
      this._accessTokenJwksUriRotatePeriod = value.accessTokenJwksUriRotatePeriod;
      this._accessTokenKeyset = value.accessTokenKeyset;
      this._accessTokenKeysetClientCertificate.internalValue = value.accessTokenKeysetClientCertificate;
      this._accessTokenKeysetClientPassword = value.accessTokenKeysetClientPassword;
      this._accessTokenKeysetClientUsername = value.accessTokenKeysetClientUsername;
      this._accessTokenKeysetRotatePeriod = value.accessTokenKeysetRotatePeriod;
      this._accessTokenLeeway = value.accessTokenLeeway;
      this._accessTokenNotbeforeClaim = value.accessTokenNotbeforeClaim;
      this._accessTokenOptional = value.accessTokenOptional;
      this._accessTokenOptionalClaims = value.accessTokenOptionalClaims;
      this._accessTokenRequestHeader = value.accessTokenRequestHeader;
      this._accessTokenRequiredClaims = value.accessTokenRequiredClaims;
      this._accessTokenScopesClaim = value.accessTokenScopesClaim;
      this._accessTokenScopesRequired = value.accessTokenScopesRequired;
      this._accessTokenSigning = value.accessTokenSigning;
      this._accessTokenSigningAlgorithm = value.accessTokenSigningAlgorithm;
      this._accessTokenSubjectClaim = value.accessTokenSubjectClaim;
      this._accessTokenSubjectsAllowed = value.accessTokenSubjectsAllowed;
      this._accessTokenUpstreamHeader = value.accessTokenUpstreamHeader;
      this._accessTokenUpstreamLeeway = value.accessTokenUpstreamLeeway;
      this._addAccessTokenClaims = value.addAccessTokenClaims;
      this._addChannelTokenClaims = value.addChannelTokenClaims;
      this._addClaims = value.addClaims;
      this._cacheAccessTokenIntrospection = value.cacheAccessTokenIntrospection;
      this._cacheChannelTokenIntrospection = value.cacheChannelTokenIntrospection;
      this._channelTokenAudienceClaim = value.channelTokenAudienceClaim;
      this._channelTokenAudiencesAllowed = value.channelTokenAudiencesAllowed;
      this._channelTokenConsumerBy = value.channelTokenConsumerBy;
      this._channelTokenConsumerClaim = value.channelTokenConsumerClaim;
      this._channelTokenExpiryClaim = value.channelTokenExpiryClaim;
      this._channelTokenIntrospectionAudienceClaim = value.channelTokenIntrospectionAudienceClaim;
      this._channelTokenIntrospectionAudiencesAllowed = value.channelTokenIntrospectionAudiencesAllowed;
      this._channelTokenIntrospectionAuthorization = value.channelTokenIntrospectionAuthorization;
      this._channelTokenIntrospectionBodyArgs = value.channelTokenIntrospectionBodyArgs;
      this._channelTokenIntrospectionConsumerBy = value.channelTokenIntrospectionConsumerBy;
      this._channelTokenIntrospectionConsumerClaim = value.channelTokenIntrospectionConsumerClaim;
      this._channelTokenIntrospectionEndpoint = value.channelTokenIntrospectionEndpoint;
      this._channelTokenIntrospectionExpiryClaim = value.channelTokenIntrospectionExpiryClaim;
      this._channelTokenIntrospectionHint = value.channelTokenIntrospectionHint;
      this._channelTokenIntrospectionIssuerClaim = value.channelTokenIntrospectionIssuerClaim;
      this._channelTokenIntrospectionIssuersAllowed = value.channelTokenIntrospectionIssuersAllowed;
      this._channelTokenIntrospectionJwtClaim = value.channelTokenIntrospectionJwtClaim;
      this._channelTokenIntrospectionLeeway = value.channelTokenIntrospectionLeeway;
      this._channelTokenIntrospectionNotbeforeClaim = value.channelTokenIntrospectionNotbeforeClaim;
      this._channelTokenIntrospectionOptionalClaims = value.channelTokenIntrospectionOptionalClaims;
      this._channelTokenIntrospectionRequiredClaims = value.channelTokenIntrospectionRequiredClaims;
      this._channelTokenIntrospectionScopesClaim = value.channelTokenIntrospectionScopesClaim;
      this._channelTokenIntrospectionScopesRequired = value.channelTokenIntrospectionScopesRequired;
      this._channelTokenIntrospectionSubjectClaim = value.channelTokenIntrospectionSubjectClaim;
      this._channelTokenIntrospectionSubjectsAllowed = value.channelTokenIntrospectionSubjectsAllowed;
      this._channelTokenIntrospectionTimeout = value.channelTokenIntrospectionTimeout;
      this._channelTokenIssuer = value.channelTokenIssuer;
      this._channelTokenIssuerClaim = value.channelTokenIssuerClaim;
      this._channelTokenIssuersAllowed = value.channelTokenIssuersAllowed;
      this._channelTokenJwksUri = value.channelTokenJwksUri;
      this._channelTokenJwksUriClientCertificate.internalValue = value.channelTokenJwksUriClientCertificate;
      this._channelTokenJwksUriClientPassword = value.channelTokenJwksUriClientPassword;
      this._channelTokenJwksUriClientUsername = value.channelTokenJwksUriClientUsername;
      this._channelTokenJwksUriRotatePeriod = value.channelTokenJwksUriRotatePeriod;
      this._channelTokenKeyset = value.channelTokenKeyset;
      this._channelTokenKeysetClientCertificate.internalValue = value.channelTokenKeysetClientCertificate;
      this._channelTokenKeysetClientPassword = value.channelTokenKeysetClientPassword;
      this._channelTokenKeysetClientUsername = value.channelTokenKeysetClientUsername;
      this._channelTokenKeysetRotatePeriod = value.channelTokenKeysetRotatePeriod;
      this._channelTokenLeeway = value.channelTokenLeeway;
      this._channelTokenNotbeforeClaim = value.channelTokenNotbeforeClaim;
      this._channelTokenOptional = value.channelTokenOptional;
      this._channelTokenOptionalClaims = value.channelTokenOptionalClaims;
      this._channelTokenRequestHeader = value.channelTokenRequestHeader;
      this._channelTokenRequiredClaims = value.channelTokenRequiredClaims;
      this._channelTokenScopesClaim = value.channelTokenScopesClaim;
      this._channelTokenScopesRequired = value.channelTokenScopesRequired;
      this._channelTokenSigning = value.channelTokenSigning;
      this._channelTokenSigningAlgorithm = value.channelTokenSigningAlgorithm;
      this._channelTokenSubjectClaim = value.channelTokenSubjectClaim;
      this._channelTokenSubjectsAllowed = value.channelTokenSubjectsAllowed;
      this._channelTokenUpstreamHeader = value.channelTokenUpstreamHeader;
      this._channelTokenUpstreamLeeway = value.channelTokenUpstreamLeeway;
      this._enableAccessTokenIntrospection = value.enableAccessTokenIntrospection;
      this._enableChannelTokenIntrospection = value.enableChannelTokenIntrospection;
      this._enableHsSignatures = value.enableHsSignatures;
      this._enableInstrumentation = value.enableInstrumentation;
      this._originalAccessTokenUpstreamHeader = value.originalAccessTokenUpstreamHeader;
      this._originalChannelTokenUpstreamHeader = value.originalChannelTokenUpstreamHeader;
      this._realm = value.realm;
      this._removeAccessTokenClaims = value.removeAccessTokenClaims;
      this._removeChannelTokenClaims = value.removeChannelTokenClaims;
      this._setAccessTokenClaims = value.setAccessTokenClaims;
      this._setChannelTokenClaims = value.setChannelTokenClaims;
      this._setClaims = value.setClaims;
      this._trustAccessTokenIntrospection = value.trustAccessTokenIntrospection;
      this._trustChannelTokenIntrospection = value.trustChannelTokenIntrospection;
      this._verifyAccessTokenAudience = value.verifyAccessTokenAudience;
      this._verifyAccessTokenExpiry = value.verifyAccessTokenExpiry;
      this._verifyAccessTokenIntrospectionAudience = value.verifyAccessTokenIntrospectionAudience;
      this._verifyAccessTokenIntrospectionExpiry = value.verifyAccessTokenIntrospectionExpiry;
      this._verifyAccessTokenIntrospectionIssuer = value.verifyAccessTokenIntrospectionIssuer;
      this._verifyAccessTokenIntrospectionNotbefore = value.verifyAccessTokenIntrospectionNotbefore;
      this._verifyAccessTokenIntrospectionScopes = value.verifyAccessTokenIntrospectionScopes;
      this._verifyAccessTokenIntrospectionSubject = value.verifyAccessTokenIntrospectionSubject;
      this._verifyAccessTokenIssuer = value.verifyAccessTokenIssuer;
      this._verifyAccessTokenNotbefore = value.verifyAccessTokenNotbefore;
      this._verifyAccessTokenScopes = value.verifyAccessTokenScopes;
      this._verifyAccessTokenSignature = value.verifyAccessTokenSignature;
      this._verifyAccessTokenSubject = value.verifyAccessTokenSubject;
      this._verifyChannelTokenAudience = value.verifyChannelTokenAudience;
      this._verifyChannelTokenExpiry = value.verifyChannelTokenExpiry;
      this._verifyChannelTokenIntrospectionAudience = value.verifyChannelTokenIntrospectionAudience;
      this._verifyChannelTokenIntrospectionExpiry = value.verifyChannelTokenIntrospectionExpiry;
      this._verifyChannelTokenIntrospectionIssuer = value.verifyChannelTokenIntrospectionIssuer;
      this._verifyChannelTokenIntrospectionNotbefore = value.verifyChannelTokenIntrospectionNotbefore;
      this._verifyChannelTokenIntrospectionScopes = value.verifyChannelTokenIntrospectionScopes;
      this._verifyChannelTokenIntrospectionSubject = value.verifyChannelTokenIntrospectionSubject;
      this._verifyChannelTokenIssuer = value.verifyChannelTokenIssuer;
      this._verifyChannelTokenNotbefore = value.verifyChannelTokenNotbefore;
      this._verifyChannelTokenScopes = value.verifyChannelTokenScopes;
      this._verifyChannelTokenSignature = value.verifyChannelTokenSignature;
      this._verifyChannelTokenSubject = value.verifyChannelTokenSubject;
    }
  }

  // access_token_audience_claim - computed: true, optional: true, required: false
  private _accessTokenAudienceClaim?: string[]; 
  public get accessTokenAudienceClaim() {
    return this.getListAttribute('access_token_audience_claim');
  }
  public set accessTokenAudienceClaim(value: string[]) {
    this._accessTokenAudienceClaim = value;
  }
  public resetAccessTokenAudienceClaim() {
    this._accessTokenAudienceClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenAudienceClaimInput() {
    return this._accessTokenAudienceClaim;
  }

  // access_token_audiences_allowed - computed: true, optional: true, required: false
  private _accessTokenAudiencesAllowed?: string[]; 
  public get accessTokenAudiencesAllowed() {
    return this.getListAttribute('access_token_audiences_allowed');
  }
  public set accessTokenAudiencesAllowed(value: string[]) {
    this._accessTokenAudiencesAllowed = value;
  }
  public resetAccessTokenAudiencesAllowed() {
    this._accessTokenAudiencesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenAudiencesAllowedInput() {
    return this._accessTokenAudiencesAllowed;
  }

  // access_token_consumer_by - computed: true, optional: true, required: false
  private _accessTokenConsumerBy?: string[]; 
  public get accessTokenConsumerBy() {
    return this.getListAttribute('access_token_consumer_by');
  }
  public set accessTokenConsumerBy(value: string[]) {
    this._accessTokenConsumerBy = value;
  }
  public resetAccessTokenConsumerBy() {
    this._accessTokenConsumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenConsumerByInput() {
    return this._accessTokenConsumerBy;
  }

  // access_token_consumer_claim - computed: true, optional: true, required: false
  private _accessTokenConsumerClaim?: string[]; 
  public get accessTokenConsumerClaim() {
    return this.getListAttribute('access_token_consumer_claim');
  }
  public set accessTokenConsumerClaim(value: string[]) {
    this._accessTokenConsumerClaim = value;
  }
  public resetAccessTokenConsumerClaim() {
    this._accessTokenConsumerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenConsumerClaimInput() {
    return this._accessTokenConsumerClaim;
  }

  // access_token_expiry_claim - computed: true, optional: true, required: false
  private _accessTokenExpiryClaim?: string[]; 
  public get accessTokenExpiryClaim() {
    return this.getListAttribute('access_token_expiry_claim');
  }
  public set accessTokenExpiryClaim(value: string[]) {
    this._accessTokenExpiryClaim = value;
  }
  public resetAccessTokenExpiryClaim() {
    this._accessTokenExpiryClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenExpiryClaimInput() {
    return this._accessTokenExpiryClaim;
  }

  // access_token_introspection_audience_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionAudienceClaim?: string[]; 
  public get accessTokenIntrospectionAudienceClaim() {
    return this.getListAttribute('access_token_introspection_audience_claim');
  }
  public set accessTokenIntrospectionAudienceClaim(value: string[]) {
    this._accessTokenIntrospectionAudienceClaim = value;
  }
  public resetAccessTokenIntrospectionAudienceClaim() {
    this._accessTokenIntrospectionAudienceClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionAudienceClaimInput() {
    return this._accessTokenIntrospectionAudienceClaim;
  }

  // access_token_introspection_audiences_allowed - computed: true, optional: true, required: false
  private _accessTokenIntrospectionAudiencesAllowed?: string[]; 
  public get accessTokenIntrospectionAudiencesAllowed() {
    return this.getListAttribute('access_token_introspection_audiences_allowed');
  }
  public set accessTokenIntrospectionAudiencesAllowed(value: string[]) {
    this._accessTokenIntrospectionAudiencesAllowed = value;
  }
  public resetAccessTokenIntrospectionAudiencesAllowed() {
    this._accessTokenIntrospectionAudiencesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionAudiencesAllowedInput() {
    return this._accessTokenIntrospectionAudiencesAllowed;
  }

  // access_token_introspection_authorization - computed: true, optional: true, required: false
  private _accessTokenIntrospectionAuthorization?: string; 
  public get accessTokenIntrospectionAuthorization() {
    return this.getStringAttribute('access_token_introspection_authorization');
  }
  public set accessTokenIntrospectionAuthorization(value: string) {
    this._accessTokenIntrospectionAuthorization = value;
  }
  public resetAccessTokenIntrospectionAuthorization() {
    this._accessTokenIntrospectionAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionAuthorizationInput() {
    return this._accessTokenIntrospectionAuthorization;
  }

  // access_token_introspection_body_args - computed: true, optional: true, required: false
  private _accessTokenIntrospectionBodyArgs?: string; 
  public get accessTokenIntrospectionBodyArgs() {
    return this.getStringAttribute('access_token_introspection_body_args');
  }
  public set accessTokenIntrospectionBodyArgs(value: string) {
    this._accessTokenIntrospectionBodyArgs = value;
  }
  public resetAccessTokenIntrospectionBodyArgs() {
    this._accessTokenIntrospectionBodyArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionBodyArgsInput() {
    return this._accessTokenIntrospectionBodyArgs;
  }

  // access_token_introspection_consumer_by - computed: true, optional: true, required: false
  private _accessTokenIntrospectionConsumerBy?: string[]; 
  public get accessTokenIntrospectionConsumerBy() {
    return this.getListAttribute('access_token_introspection_consumer_by');
  }
  public set accessTokenIntrospectionConsumerBy(value: string[]) {
    this._accessTokenIntrospectionConsumerBy = value;
  }
  public resetAccessTokenIntrospectionConsumerBy() {
    this._accessTokenIntrospectionConsumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionConsumerByInput() {
    return this._accessTokenIntrospectionConsumerBy;
  }

  // access_token_introspection_consumer_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionConsumerClaim?: string[]; 
  public get accessTokenIntrospectionConsumerClaim() {
    return this.getListAttribute('access_token_introspection_consumer_claim');
  }
  public set accessTokenIntrospectionConsumerClaim(value: string[]) {
    this._accessTokenIntrospectionConsumerClaim = value;
  }
  public resetAccessTokenIntrospectionConsumerClaim() {
    this._accessTokenIntrospectionConsumerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionConsumerClaimInput() {
    return this._accessTokenIntrospectionConsumerClaim;
  }

  // access_token_introspection_endpoint - computed: true, optional: true, required: false
  private _accessTokenIntrospectionEndpoint?: string; 
  public get accessTokenIntrospectionEndpoint() {
    return this.getStringAttribute('access_token_introspection_endpoint');
  }
  public set accessTokenIntrospectionEndpoint(value: string) {
    this._accessTokenIntrospectionEndpoint = value;
  }
  public resetAccessTokenIntrospectionEndpoint() {
    this._accessTokenIntrospectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionEndpointInput() {
    return this._accessTokenIntrospectionEndpoint;
  }

  // access_token_introspection_expiry_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionExpiryClaim?: string[]; 
  public get accessTokenIntrospectionExpiryClaim() {
    return this.getListAttribute('access_token_introspection_expiry_claim');
  }
  public set accessTokenIntrospectionExpiryClaim(value: string[]) {
    this._accessTokenIntrospectionExpiryClaim = value;
  }
  public resetAccessTokenIntrospectionExpiryClaim() {
    this._accessTokenIntrospectionExpiryClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionExpiryClaimInput() {
    return this._accessTokenIntrospectionExpiryClaim;
  }

  // access_token_introspection_hint - computed: true, optional: true, required: false
  private _accessTokenIntrospectionHint?: string; 
  public get accessTokenIntrospectionHint() {
    return this.getStringAttribute('access_token_introspection_hint');
  }
  public set accessTokenIntrospectionHint(value: string) {
    this._accessTokenIntrospectionHint = value;
  }
  public resetAccessTokenIntrospectionHint() {
    this._accessTokenIntrospectionHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionHintInput() {
    return this._accessTokenIntrospectionHint;
  }

  // access_token_introspection_issuer_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionIssuerClaim?: string[]; 
  public get accessTokenIntrospectionIssuerClaim() {
    return this.getListAttribute('access_token_introspection_issuer_claim');
  }
  public set accessTokenIntrospectionIssuerClaim(value: string[]) {
    this._accessTokenIntrospectionIssuerClaim = value;
  }
  public resetAccessTokenIntrospectionIssuerClaim() {
    this._accessTokenIntrospectionIssuerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionIssuerClaimInput() {
    return this._accessTokenIntrospectionIssuerClaim;
  }

  // access_token_introspection_issuers_allowed - computed: true, optional: true, required: false
  private _accessTokenIntrospectionIssuersAllowed?: string[]; 
  public get accessTokenIntrospectionIssuersAllowed() {
    return this.getListAttribute('access_token_introspection_issuers_allowed');
  }
  public set accessTokenIntrospectionIssuersAllowed(value: string[]) {
    this._accessTokenIntrospectionIssuersAllowed = value;
  }
  public resetAccessTokenIntrospectionIssuersAllowed() {
    this._accessTokenIntrospectionIssuersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionIssuersAllowedInput() {
    return this._accessTokenIntrospectionIssuersAllowed;
  }

  // access_token_introspection_jwt_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionJwtClaim?: string[]; 
  public get accessTokenIntrospectionJwtClaim() {
    return this.getListAttribute('access_token_introspection_jwt_claim');
  }
  public set accessTokenIntrospectionJwtClaim(value: string[]) {
    this._accessTokenIntrospectionJwtClaim = value;
  }
  public resetAccessTokenIntrospectionJwtClaim() {
    this._accessTokenIntrospectionJwtClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionJwtClaimInput() {
    return this._accessTokenIntrospectionJwtClaim;
  }

  // access_token_introspection_leeway - computed: true, optional: true, required: false
  private _accessTokenIntrospectionLeeway?: number; 
  public get accessTokenIntrospectionLeeway() {
    return this.getNumberAttribute('access_token_introspection_leeway');
  }
  public set accessTokenIntrospectionLeeway(value: number) {
    this._accessTokenIntrospectionLeeway = value;
  }
  public resetAccessTokenIntrospectionLeeway() {
    this._accessTokenIntrospectionLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionLeewayInput() {
    return this._accessTokenIntrospectionLeeway;
  }

  // access_token_introspection_notbefore_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionNotbeforeClaim?: string[]; 
  public get accessTokenIntrospectionNotbeforeClaim() {
    return this.getListAttribute('access_token_introspection_notbefore_claim');
  }
  public set accessTokenIntrospectionNotbeforeClaim(value: string[]) {
    this._accessTokenIntrospectionNotbeforeClaim = value;
  }
  public resetAccessTokenIntrospectionNotbeforeClaim() {
    this._accessTokenIntrospectionNotbeforeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionNotbeforeClaimInput() {
    return this._accessTokenIntrospectionNotbeforeClaim;
  }

  // access_token_introspection_optional_claims - computed: true, optional: true, required: false
  private _accessTokenIntrospectionOptionalClaims?: string[][] | cdktf.IResolvable; 
  public get accessTokenIntrospectionOptionalClaims() {
    return this.interpolationForAttribute('access_token_introspection_optional_claims');
  }
  public set accessTokenIntrospectionOptionalClaims(value: string[][] | cdktf.IResolvable) {
    this._accessTokenIntrospectionOptionalClaims = value;
  }
  public resetAccessTokenIntrospectionOptionalClaims() {
    this._accessTokenIntrospectionOptionalClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionOptionalClaimsInput() {
    return this._accessTokenIntrospectionOptionalClaims;
  }

  // access_token_introspection_required_claims - computed: true, optional: true, required: false
  private _accessTokenIntrospectionRequiredClaims?: string[][] | cdktf.IResolvable; 
  public get accessTokenIntrospectionRequiredClaims() {
    return this.interpolationForAttribute('access_token_introspection_required_claims');
  }
  public set accessTokenIntrospectionRequiredClaims(value: string[][] | cdktf.IResolvable) {
    this._accessTokenIntrospectionRequiredClaims = value;
  }
  public resetAccessTokenIntrospectionRequiredClaims() {
    this._accessTokenIntrospectionRequiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionRequiredClaimsInput() {
    return this._accessTokenIntrospectionRequiredClaims;
  }

  // access_token_introspection_scopes_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionScopesClaim?: string[]; 
  public get accessTokenIntrospectionScopesClaim() {
    return this.getListAttribute('access_token_introspection_scopes_claim');
  }
  public set accessTokenIntrospectionScopesClaim(value: string[]) {
    this._accessTokenIntrospectionScopesClaim = value;
  }
  public resetAccessTokenIntrospectionScopesClaim() {
    this._accessTokenIntrospectionScopesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionScopesClaimInput() {
    return this._accessTokenIntrospectionScopesClaim;
  }

  // access_token_introspection_scopes_required - computed: true, optional: true, required: false
  private _accessTokenIntrospectionScopesRequired?: string[]; 
  public get accessTokenIntrospectionScopesRequired() {
    return this.getListAttribute('access_token_introspection_scopes_required');
  }
  public set accessTokenIntrospectionScopesRequired(value: string[]) {
    this._accessTokenIntrospectionScopesRequired = value;
  }
  public resetAccessTokenIntrospectionScopesRequired() {
    this._accessTokenIntrospectionScopesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionScopesRequiredInput() {
    return this._accessTokenIntrospectionScopesRequired;
  }

  // access_token_introspection_subject_claim - computed: true, optional: true, required: false
  private _accessTokenIntrospectionSubjectClaim?: string[]; 
  public get accessTokenIntrospectionSubjectClaim() {
    return this.getListAttribute('access_token_introspection_subject_claim');
  }
  public set accessTokenIntrospectionSubjectClaim(value: string[]) {
    this._accessTokenIntrospectionSubjectClaim = value;
  }
  public resetAccessTokenIntrospectionSubjectClaim() {
    this._accessTokenIntrospectionSubjectClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionSubjectClaimInput() {
    return this._accessTokenIntrospectionSubjectClaim;
  }

  // access_token_introspection_subjects_allowed - computed: true, optional: true, required: false
  private _accessTokenIntrospectionSubjectsAllowed?: string[]; 
  public get accessTokenIntrospectionSubjectsAllowed() {
    return this.getListAttribute('access_token_introspection_subjects_allowed');
  }
  public set accessTokenIntrospectionSubjectsAllowed(value: string[]) {
    this._accessTokenIntrospectionSubjectsAllowed = value;
  }
  public resetAccessTokenIntrospectionSubjectsAllowed() {
    this._accessTokenIntrospectionSubjectsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionSubjectsAllowedInput() {
    return this._accessTokenIntrospectionSubjectsAllowed;
  }

  // access_token_introspection_timeout - computed: true, optional: true, required: false
  private _accessTokenIntrospectionTimeout?: number; 
  public get accessTokenIntrospectionTimeout() {
    return this.getNumberAttribute('access_token_introspection_timeout');
  }
  public set accessTokenIntrospectionTimeout(value: number) {
    this._accessTokenIntrospectionTimeout = value;
  }
  public resetAccessTokenIntrospectionTimeout() {
    this._accessTokenIntrospectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIntrospectionTimeoutInput() {
    return this._accessTokenIntrospectionTimeout;
  }

  // access_token_issuer - computed: true, optional: true, required: false
  private _accessTokenIssuer?: string; 
  public get accessTokenIssuer() {
    return this.getStringAttribute('access_token_issuer');
  }
  public set accessTokenIssuer(value: string) {
    this._accessTokenIssuer = value;
  }
  public resetAccessTokenIssuer() {
    this._accessTokenIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIssuerInput() {
    return this._accessTokenIssuer;
  }

  // access_token_issuer_claim - computed: true, optional: true, required: false
  private _accessTokenIssuerClaim?: string[]; 
  public get accessTokenIssuerClaim() {
    return this.getListAttribute('access_token_issuer_claim');
  }
  public set accessTokenIssuerClaim(value: string[]) {
    this._accessTokenIssuerClaim = value;
  }
  public resetAccessTokenIssuerClaim() {
    this._accessTokenIssuerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIssuerClaimInput() {
    return this._accessTokenIssuerClaim;
  }

  // access_token_issuers_allowed - computed: true, optional: true, required: false
  private _accessTokenIssuersAllowed?: string[]; 
  public get accessTokenIssuersAllowed() {
    return this.getListAttribute('access_token_issuers_allowed');
  }
  public set accessTokenIssuersAllowed(value: string[]) {
    this._accessTokenIssuersAllowed = value;
  }
  public resetAccessTokenIssuersAllowed() {
    this._accessTokenIssuersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIssuersAllowedInput() {
    return this._accessTokenIssuersAllowed;
  }

  // access_token_jwks_uri - computed: true, optional: true, required: false
  private _accessTokenJwksUri?: string; 
  public get accessTokenJwksUri() {
    return this.getStringAttribute('access_token_jwks_uri');
  }
  public set accessTokenJwksUri(value: string) {
    this._accessTokenJwksUri = value;
  }
  public resetAccessTokenJwksUri() {
    this._accessTokenJwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenJwksUriInput() {
    return this._accessTokenJwksUri;
  }

  // access_token_jwks_uri_client_certificate - computed: true, optional: true, required: false
  private _accessTokenJwksUriClientCertificate = new GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificateOutputReference(this, "access_token_jwks_uri_client_certificate");
  public get accessTokenJwksUriClientCertificate() {
    return this._accessTokenJwksUriClientCertificate;
  }
  public putAccessTokenJwksUriClientCertificate(value: GatewayPluginJwtSignerConfigAccessTokenJwksUriClientCertificate) {
    this._accessTokenJwksUriClientCertificate.internalValue = value;
  }
  public resetAccessTokenJwksUriClientCertificate() {
    this._accessTokenJwksUriClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenJwksUriClientCertificateInput() {
    return this._accessTokenJwksUriClientCertificate.internalValue;
  }

  // access_token_jwks_uri_client_password - computed: true, optional: true, required: false
  private _accessTokenJwksUriClientPassword?: string; 
  public get accessTokenJwksUriClientPassword() {
    return this.getStringAttribute('access_token_jwks_uri_client_password');
  }
  public set accessTokenJwksUriClientPassword(value: string) {
    this._accessTokenJwksUriClientPassword = value;
  }
  public resetAccessTokenJwksUriClientPassword() {
    this._accessTokenJwksUriClientPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenJwksUriClientPasswordInput() {
    return this._accessTokenJwksUriClientPassword;
  }

  // access_token_jwks_uri_client_username - computed: true, optional: true, required: false
  private _accessTokenJwksUriClientUsername?: string; 
  public get accessTokenJwksUriClientUsername() {
    return this.getStringAttribute('access_token_jwks_uri_client_username');
  }
  public set accessTokenJwksUriClientUsername(value: string) {
    this._accessTokenJwksUriClientUsername = value;
  }
  public resetAccessTokenJwksUriClientUsername() {
    this._accessTokenJwksUriClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenJwksUriClientUsernameInput() {
    return this._accessTokenJwksUriClientUsername;
  }

  // access_token_jwks_uri_rotate_period - computed: true, optional: true, required: false
  private _accessTokenJwksUriRotatePeriod?: number; 
  public get accessTokenJwksUriRotatePeriod() {
    return this.getNumberAttribute('access_token_jwks_uri_rotate_period');
  }
  public set accessTokenJwksUriRotatePeriod(value: number) {
    this._accessTokenJwksUriRotatePeriod = value;
  }
  public resetAccessTokenJwksUriRotatePeriod() {
    this._accessTokenJwksUriRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenJwksUriRotatePeriodInput() {
    return this._accessTokenJwksUriRotatePeriod;
  }

  // access_token_keyset - computed: true, optional: true, required: false
  private _accessTokenKeyset?: string; 
  public get accessTokenKeyset() {
    return this.getStringAttribute('access_token_keyset');
  }
  public set accessTokenKeyset(value: string) {
    this._accessTokenKeyset = value;
  }
  public resetAccessTokenKeyset() {
    this._accessTokenKeyset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeysetInput() {
    return this._accessTokenKeyset;
  }

  // access_token_keyset_client_certificate - computed: true, optional: true, required: false
  private _accessTokenKeysetClientCertificate = new GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificateOutputReference(this, "access_token_keyset_client_certificate");
  public get accessTokenKeysetClientCertificate() {
    return this._accessTokenKeysetClientCertificate;
  }
  public putAccessTokenKeysetClientCertificate(value: GatewayPluginJwtSignerConfigAccessTokenKeysetClientCertificate) {
    this._accessTokenKeysetClientCertificate.internalValue = value;
  }
  public resetAccessTokenKeysetClientCertificate() {
    this._accessTokenKeysetClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeysetClientCertificateInput() {
    return this._accessTokenKeysetClientCertificate.internalValue;
  }

  // access_token_keyset_client_password - computed: true, optional: true, required: false
  private _accessTokenKeysetClientPassword?: string; 
  public get accessTokenKeysetClientPassword() {
    return this.getStringAttribute('access_token_keyset_client_password');
  }
  public set accessTokenKeysetClientPassword(value: string) {
    this._accessTokenKeysetClientPassword = value;
  }
  public resetAccessTokenKeysetClientPassword() {
    this._accessTokenKeysetClientPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeysetClientPasswordInput() {
    return this._accessTokenKeysetClientPassword;
  }

  // access_token_keyset_client_username - computed: true, optional: true, required: false
  private _accessTokenKeysetClientUsername?: string; 
  public get accessTokenKeysetClientUsername() {
    return this.getStringAttribute('access_token_keyset_client_username');
  }
  public set accessTokenKeysetClientUsername(value: string) {
    this._accessTokenKeysetClientUsername = value;
  }
  public resetAccessTokenKeysetClientUsername() {
    this._accessTokenKeysetClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeysetClientUsernameInput() {
    return this._accessTokenKeysetClientUsername;
  }

  // access_token_keyset_rotate_period - computed: true, optional: true, required: false
  private _accessTokenKeysetRotatePeriod?: number; 
  public get accessTokenKeysetRotatePeriod() {
    return this.getNumberAttribute('access_token_keyset_rotate_period');
  }
  public set accessTokenKeysetRotatePeriod(value: number) {
    this._accessTokenKeysetRotatePeriod = value;
  }
  public resetAccessTokenKeysetRotatePeriod() {
    this._accessTokenKeysetRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeysetRotatePeriodInput() {
    return this._accessTokenKeysetRotatePeriod;
  }

  // access_token_leeway - computed: true, optional: true, required: false
  private _accessTokenLeeway?: number; 
  public get accessTokenLeeway() {
    return this.getNumberAttribute('access_token_leeway');
  }
  public set accessTokenLeeway(value: number) {
    this._accessTokenLeeway = value;
  }
  public resetAccessTokenLeeway() {
    this._accessTokenLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLeewayInput() {
    return this._accessTokenLeeway;
  }

  // access_token_notbefore_claim - computed: true, optional: true, required: false
  private _accessTokenNotbeforeClaim?: string[]; 
  public get accessTokenNotbeforeClaim() {
    return this.getListAttribute('access_token_notbefore_claim');
  }
  public set accessTokenNotbeforeClaim(value: string[]) {
    this._accessTokenNotbeforeClaim = value;
  }
  public resetAccessTokenNotbeforeClaim() {
    this._accessTokenNotbeforeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenNotbeforeClaimInput() {
    return this._accessTokenNotbeforeClaim;
  }

  // access_token_optional - computed: true, optional: true, required: false
  private _accessTokenOptional?: boolean | cdktf.IResolvable; 
  public get accessTokenOptional() {
    return this.getBooleanAttribute('access_token_optional');
  }
  public set accessTokenOptional(value: boolean | cdktf.IResolvable) {
    this._accessTokenOptional = value;
  }
  public resetAccessTokenOptional() {
    this._accessTokenOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenOptionalInput() {
    return this._accessTokenOptional;
  }

  // access_token_optional_claims - computed: true, optional: true, required: false
  private _accessTokenOptionalClaims?: string[][] | cdktf.IResolvable; 
  public get accessTokenOptionalClaims() {
    return this.interpolationForAttribute('access_token_optional_claims');
  }
  public set accessTokenOptionalClaims(value: string[][] | cdktf.IResolvable) {
    this._accessTokenOptionalClaims = value;
  }
  public resetAccessTokenOptionalClaims() {
    this._accessTokenOptionalClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenOptionalClaimsInput() {
    return this._accessTokenOptionalClaims;
  }

  // access_token_request_header - computed: true, optional: true, required: false
  private _accessTokenRequestHeader?: string; 
  public get accessTokenRequestHeader() {
    return this.getStringAttribute('access_token_request_header');
  }
  public set accessTokenRequestHeader(value: string) {
    this._accessTokenRequestHeader = value;
  }
  public resetAccessTokenRequestHeader() {
    this._accessTokenRequestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenRequestHeaderInput() {
    return this._accessTokenRequestHeader;
  }

  // access_token_required_claims - computed: true, optional: true, required: false
  private _accessTokenRequiredClaims?: string[][] | cdktf.IResolvable; 
  public get accessTokenRequiredClaims() {
    return this.interpolationForAttribute('access_token_required_claims');
  }
  public set accessTokenRequiredClaims(value: string[][] | cdktf.IResolvable) {
    this._accessTokenRequiredClaims = value;
  }
  public resetAccessTokenRequiredClaims() {
    this._accessTokenRequiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenRequiredClaimsInput() {
    return this._accessTokenRequiredClaims;
  }

  // access_token_scopes_claim - computed: true, optional: true, required: false
  private _accessTokenScopesClaim?: string[]; 
  public get accessTokenScopesClaim() {
    return this.getListAttribute('access_token_scopes_claim');
  }
  public set accessTokenScopesClaim(value: string[]) {
    this._accessTokenScopesClaim = value;
  }
  public resetAccessTokenScopesClaim() {
    this._accessTokenScopesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenScopesClaimInput() {
    return this._accessTokenScopesClaim;
  }

  // access_token_scopes_required - computed: true, optional: true, required: false
  private _accessTokenScopesRequired?: string[]; 
  public get accessTokenScopesRequired() {
    return this.getListAttribute('access_token_scopes_required');
  }
  public set accessTokenScopesRequired(value: string[]) {
    this._accessTokenScopesRequired = value;
  }
  public resetAccessTokenScopesRequired() {
    this._accessTokenScopesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenScopesRequiredInput() {
    return this._accessTokenScopesRequired;
  }

  // access_token_signing - computed: true, optional: true, required: false
  private _accessTokenSigning?: boolean | cdktf.IResolvable; 
  public get accessTokenSigning() {
    return this.getBooleanAttribute('access_token_signing');
  }
  public set accessTokenSigning(value: boolean | cdktf.IResolvable) {
    this._accessTokenSigning = value;
  }
  public resetAccessTokenSigning() {
    this._accessTokenSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSigningInput() {
    return this._accessTokenSigning;
  }

  // access_token_signing_algorithm - computed: true, optional: true, required: false
  private _accessTokenSigningAlgorithm?: string; 
  public get accessTokenSigningAlgorithm() {
    return this.getStringAttribute('access_token_signing_algorithm');
  }
  public set accessTokenSigningAlgorithm(value: string) {
    this._accessTokenSigningAlgorithm = value;
  }
  public resetAccessTokenSigningAlgorithm() {
    this._accessTokenSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSigningAlgorithmInput() {
    return this._accessTokenSigningAlgorithm;
  }

  // access_token_subject_claim - computed: true, optional: true, required: false
  private _accessTokenSubjectClaim?: string[]; 
  public get accessTokenSubjectClaim() {
    return this.getListAttribute('access_token_subject_claim');
  }
  public set accessTokenSubjectClaim(value: string[]) {
    this._accessTokenSubjectClaim = value;
  }
  public resetAccessTokenSubjectClaim() {
    this._accessTokenSubjectClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSubjectClaimInput() {
    return this._accessTokenSubjectClaim;
  }

  // access_token_subjects_allowed - computed: true, optional: true, required: false
  private _accessTokenSubjectsAllowed?: string[]; 
  public get accessTokenSubjectsAllowed() {
    return this.getListAttribute('access_token_subjects_allowed');
  }
  public set accessTokenSubjectsAllowed(value: string[]) {
    this._accessTokenSubjectsAllowed = value;
  }
  public resetAccessTokenSubjectsAllowed() {
    this._accessTokenSubjectsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenSubjectsAllowedInput() {
    return this._accessTokenSubjectsAllowed;
  }

  // access_token_upstream_header - computed: true, optional: true, required: false
  private _accessTokenUpstreamHeader?: string; 
  public get accessTokenUpstreamHeader() {
    return this.getStringAttribute('access_token_upstream_header');
  }
  public set accessTokenUpstreamHeader(value: string) {
    this._accessTokenUpstreamHeader = value;
  }
  public resetAccessTokenUpstreamHeader() {
    this._accessTokenUpstreamHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUpstreamHeaderInput() {
    return this._accessTokenUpstreamHeader;
  }

  // access_token_upstream_leeway - computed: true, optional: true, required: false
  private _accessTokenUpstreamLeeway?: number; 
  public get accessTokenUpstreamLeeway() {
    return this.getNumberAttribute('access_token_upstream_leeway');
  }
  public set accessTokenUpstreamLeeway(value: number) {
    this._accessTokenUpstreamLeeway = value;
  }
  public resetAccessTokenUpstreamLeeway() {
    this._accessTokenUpstreamLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUpstreamLeewayInput() {
    return this._accessTokenUpstreamLeeway;
  }

  // add_access_token_claims - computed: true, optional: true, required: false
  private _addAccessTokenClaims?: { [key: string]: string }; 
  public get addAccessTokenClaims() {
    return this.getStringMapAttribute('add_access_token_claims');
  }
  public set addAccessTokenClaims(value: { [key: string]: string }) {
    this._addAccessTokenClaims = value;
  }
  public resetAddAccessTokenClaims() {
    this._addAccessTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addAccessTokenClaimsInput() {
    return this._addAccessTokenClaims;
  }

  // add_channel_token_claims - computed: true, optional: true, required: false
  private _addChannelTokenClaims?: { [key: string]: string }; 
  public get addChannelTokenClaims() {
    return this.getStringMapAttribute('add_channel_token_claims');
  }
  public set addChannelTokenClaims(value: { [key: string]: string }) {
    this._addChannelTokenClaims = value;
  }
  public resetAddChannelTokenClaims() {
    this._addChannelTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addChannelTokenClaimsInput() {
    return this._addChannelTokenClaims;
  }

  // add_claims - computed: true, optional: true, required: false
  private _addClaims?: { [key: string]: string }; 
  public get addClaims() {
    return this.getStringMapAttribute('add_claims');
  }
  public set addClaims(value: { [key: string]: string }) {
    this._addClaims = value;
  }
  public resetAddClaims() {
    this._addClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addClaimsInput() {
    return this._addClaims;
  }

  // cache_access_token_introspection - computed: true, optional: true, required: false
  private _cacheAccessTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get cacheAccessTokenIntrospection() {
    return this.getBooleanAttribute('cache_access_token_introspection');
  }
  public set cacheAccessTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._cacheAccessTokenIntrospection = value;
  }
  public resetCacheAccessTokenIntrospection() {
    this._cacheAccessTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheAccessTokenIntrospectionInput() {
    return this._cacheAccessTokenIntrospection;
  }

  // cache_channel_token_introspection - computed: true, optional: true, required: false
  private _cacheChannelTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get cacheChannelTokenIntrospection() {
    return this.getBooleanAttribute('cache_channel_token_introspection');
  }
  public set cacheChannelTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._cacheChannelTokenIntrospection = value;
  }
  public resetCacheChannelTokenIntrospection() {
    this._cacheChannelTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheChannelTokenIntrospectionInput() {
    return this._cacheChannelTokenIntrospection;
  }

  // channel_token_audience_claim - computed: true, optional: true, required: false
  private _channelTokenAudienceClaim?: string[]; 
  public get channelTokenAudienceClaim() {
    return this.getListAttribute('channel_token_audience_claim');
  }
  public set channelTokenAudienceClaim(value: string[]) {
    this._channelTokenAudienceClaim = value;
  }
  public resetChannelTokenAudienceClaim() {
    this._channelTokenAudienceClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenAudienceClaimInput() {
    return this._channelTokenAudienceClaim;
  }

  // channel_token_audiences_allowed - computed: true, optional: true, required: false
  private _channelTokenAudiencesAllowed?: string[]; 
  public get channelTokenAudiencesAllowed() {
    return this.getListAttribute('channel_token_audiences_allowed');
  }
  public set channelTokenAudiencesAllowed(value: string[]) {
    this._channelTokenAudiencesAllowed = value;
  }
  public resetChannelTokenAudiencesAllowed() {
    this._channelTokenAudiencesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenAudiencesAllowedInput() {
    return this._channelTokenAudiencesAllowed;
  }

  // channel_token_consumer_by - computed: true, optional: true, required: false
  private _channelTokenConsumerBy?: string[]; 
  public get channelTokenConsumerBy() {
    return this.getListAttribute('channel_token_consumer_by');
  }
  public set channelTokenConsumerBy(value: string[]) {
    this._channelTokenConsumerBy = value;
  }
  public resetChannelTokenConsumerBy() {
    this._channelTokenConsumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenConsumerByInput() {
    return this._channelTokenConsumerBy;
  }

  // channel_token_consumer_claim - computed: true, optional: true, required: false
  private _channelTokenConsumerClaim?: string[]; 
  public get channelTokenConsumerClaim() {
    return this.getListAttribute('channel_token_consumer_claim');
  }
  public set channelTokenConsumerClaim(value: string[]) {
    this._channelTokenConsumerClaim = value;
  }
  public resetChannelTokenConsumerClaim() {
    this._channelTokenConsumerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenConsumerClaimInput() {
    return this._channelTokenConsumerClaim;
  }

  // channel_token_expiry_claim - computed: true, optional: true, required: false
  private _channelTokenExpiryClaim?: string[]; 
  public get channelTokenExpiryClaim() {
    return this.getListAttribute('channel_token_expiry_claim');
  }
  public set channelTokenExpiryClaim(value: string[]) {
    this._channelTokenExpiryClaim = value;
  }
  public resetChannelTokenExpiryClaim() {
    this._channelTokenExpiryClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenExpiryClaimInput() {
    return this._channelTokenExpiryClaim;
  }

  // channel_token_introspection_audience_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionAudienceClaim?: string[]; 
  public get channelTokenIntrospectionAudienceClaim() {
    return this.getListAttribute('channel_token_introspection_audience_claim');
  }
  public set channelTokenIntrospectionAudienceClaim(value: string[]) {
    this._channelTokenIntrospectionAudienceClaim = value;
  }
  public resetChannelTokenIntrospectionAudienceClaim() {
    this._channelTokenIntrospectionAudienceClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionAudienceClaimInput() {
    return this._channelTokenIntrospectionAudienceClaim;
  }

  // channel_token_introspection_audiences_allowed - computed: true, optional: true, required: false
  private _channelTokenIntrospectionAudiencesAllowed?: string[]; 
  public get channelTokenIntrospectionAudiencesAllowed() {
    return this.getListAttribute('channel_token_introspection_audiences_allowed');
  }
  public set channelTokenIntrospectionAudiencesAllowed(value: string[]) {
    this._channelTokenIntrospectionAudiencesAllowed = value;
  }
  public resetChannelTokenIntrospectionAudiencesAllowed() {
    this._channelTokenIntrospectionAudiencesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionAudiencesAllowedInput() {
    return this._channelTokenIntrospectionAudiencesAllowed;
  }

  // channel_token_introspection_authorization - computed: true, optional: true, required: false
  private _channelTokenIntrospectionAuthorization?: string; 
  public get channelTokenIntrospectionAuthorization() {
    return this.getStringAttribute('channel_token_introspection_authorization');
  }
  public set channelTokenIntrospectionAuthorization(value: string) {
    this._channelTokenIntrospectionAuthorization = value;
  }
  public resetChannelTokenIntrospectionAuthorization() {
    this._channelTokenIntrospectionAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionAuthorizationInput() {
    return this._channelTokenIntrospectionAuthorization;
  }

  // channel_token_introspection_body_args - computed: true, optional: true, required: false
  private _channelTokenIntrospectionBodyArgs?: string; 
  public get channelTokenIntrospectionBodyArgs() {
    return this.getStringAttribute('channel_token_introspection_body_args');
  }
  public set channelTokenIntrospectionBodyArgs(value: string) {
    this._channelTokenIntrospectionBodyArgs = value;
  }
  public resetChannelTokenIntrospectionBodyArgs() {
    this._channelTokenIntrospectionBodyArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionBodyArgsInput() {
    return this._channelTokenIntrospectionBodyArgs;
  }

  // channel_token_introspection_consumer_by - computed: true, optional: true, required: false
  private _channelTokenIntrospectionConsumerBy?: string[]; 
  public get channelTokenIntrospectionConsumerBy() {
    return this.getListAttribute('channel_token_introspection_consumer_by');
  }
  public set channelTokenIntrospectionConsumerBy(value: string[]) {
    this._channelTokenIntrospectionConsumerBy = value;
  }
  public resetChannelTokenIntrospectionConsumerBy() {
    this._channelTokenIntrospectionConsumerBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionConsumerByInput() {
    return this._channelTokenIntrospectionConsumerBy;
  }

  // channel_token_introspection_consumer_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionConsumerClaim?: string[]; 
  public get channelTokenIntrospectionConsumerClaim() {
    return this.getListAttribute('channel_token_introspection_consumer_claim');
  }
  public set channelTokenIntrospectionConsumerClaim(value: string[]) {
    this._channelTokenIntrospectionConsumerClaim = value;
  }
  public resetChannelTokenIntrospectionConsumerClaim() {
    this._channelTokenIntrospectionConsumerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionConsumerClaimInput() {
    return this._channelTokenIntrospectionConsumerClaim;
  }

  // channel_token_introspection_endpoint - computed: true, optional: true, required: false
  private _channelTokenIntrospectionEndpoint?: string; 
  public get channelTokenIntrospectionEndpoint() {
    return this.getStringAttribute('channel_token_introspection_endpoint');
  }
  public set channelTokenIntrospectionEndpoint(value: string) {
    this._channelTokenIntrospectionEndpoint = value;
  }
  public resetChannelTokenIntrospectionEndpoint() {
    this._channelTokenIntrospectionEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionEndpointInput() {
    return this._channelTokenIntrospectionEndpoint;
  }

  // channel_token_introspection_expiry_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionExpiryClaim?: string[]; 
  public get channelTokenIntrospectionExpiryClaim() {
    return this.getListAttribute('channel_token_introspection_expiry_claim');
  }
  public set channelTokenIntrospectionExpiryClaim(value: string[]) {
    this._channelTokenIntrospectionExpiryClaim = value;
  }
  public resetChannelTokenIntrospectionExpiryClaim() {
    this._channelTokenIntrospectionExpiryClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionExpiryClaimInput() {
    return this._channelTokenIntrospectionExpiryClaim;
  }

  // channel_token_introspection_hint - computed: true, optional: true, required: false
  private _channelTokenIntrospectionHint?: string; 
  public get channelTokenIntrospectionHint() {
    return this.getStringAttribute('channel_token_introspection_hint');
  }
  public set channelTokenIntrospectionHint(value: string) {
    this._channelTokenIntrospectionHint = value;
  }
  public resetChannelTokenIntrospectionHint() {
    this._channelTokenIntrospectionHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionHintInput() {
    return this._channelTokenIntrospectionHint;
  }

  // channel_token_introspection_issuer_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionIssuerClaim?: string[]; 
  public get channelTokenIntrospectionIssuerClaim() {
    return this.getListAttribute('channel_token_introspection_issuer_claim');
  }
  public set channelTokenIntrospectionIssuerClaim(value: string[]) {
    this._channelTokenIntrospectionIssuerClaim = value;
  }
  public resetChannelTokenIntrospectionIssuerClaim() {
    this._channelTokenIntrospectionIssuerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionIssuerClaimInput() {
    return this._channelTokenIntrospectionIssuerClaim;
  }

  // channel_token_introspection_issuers_allowed - computed: true, optional: true, required: false
  private _channelTokenIntrospectionIssuersAllowed?: string[]; 
  public get channelTokenIntrospectionIssuersAllowed() {
    return this.getListAttribute('channel_token_introspection_issuers_allowed');
  }
  public set channelTokenIntrospectionIssuersAllowed(value: string[]) {
    this._channelTokenIntrospectionIssuersAllowed = value;
  }
  public resetChannelTokenIntrospectionIssuersAllowed() {
    this._channelTokenIntrospectionIssuersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionIssuersAllowedInput() {
    return this._channelTokenIntrospectionIssuersAllowed;
  }

  // channel_token_introspection_jwt_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionJwtClaim?: string[]; 
  public get channelTokenIntrospectionJwtClaim() {
    return this.getListAttribute('channel_token_introspection_jwt_claim');
  }
  public set channelTokenIntrospectionJwtClaim(value: string[]) {
    this._channelTokenIntrospectionJwtClaim = value;
  }
  public resetChannelTokenIntrospectionJwtClaim() {
    this._channelTokenIntrospectionJwtClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionJwtClaimInput() {
    return this._channelTokenIntrospectionJwtClaim;
  }

  // channel_token_introspection_leeway - computed: true, optional: true, required: false
  private _channelTokenIntrospectionLeeway?: number; 
  public get channelTokenIntrospectionLeeway() {
    return this.getNumberAttribute('channel_token_introspection_leeway');
  }
  public set channelTokenIntrospectionLeeway(value: number) {
    this._channelTokenIntrospectionLeeway = value;
  }
  public resetChannelTokenIntrospectionLeeway() {
    this._channelTokenIntrospectionLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionLeewayInput() {
    return this._channelTokenIntrospectionLeeway;
  }

  // channel_token_introspection_notbefore_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionNotbeforeClaim?: string[]; 
  public get channelTokenIntrospectionNotbeforeClaim() {
    return this.getListAttribute('channel_token_introspection_notbefore_claim');
  }
  public set channelTokenIntrospectionNotbeforeClaim(value: string[]) {
    this._channelTokenIntrospectionNotbeforeClaim = value;
  }
  public resetChannelTokenIntrospectionNotbeforeClaim() {
    this._channelTokenIntrospectionNotbeforeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionNotbeforeClaimInput() {
    return this._channelTokenIntrospectionNotbeforeClaim;
  }

  // channel_token_introspection_optional_claims - computed: true, optional: true, required: false
  private _channelTokenIntrospectionOptionalClaims?: string[][] | cdktf.IResolvable; 
  public get channelTokenIntrospectionOptionalClaims() {
    return this.interpolationForAttribute('channel_token_introspection_optional_claims');
  }
  public set channelTokenIntrospectionOptionalClaims(value: string[][] | cdktf.IResolvable) {
    this._channelTokenIntrospectionOptionalClaims = value;
  }
  public resetChannelTokenIntrospectionOptionalClaims() {
    this._channelTokenIntrospectionOptionalClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionOptionalClaimsInput() {
    return this._channelTokenIntrospectionOptionalClaims;
  }

  // channel_token_introspection_required_claims - computed: true, optional: true, required: false
  private _channelTokenIntrospectionRequiredClaims?: string[][] | cdktf.IResolvable; 
  public get channelTokenIntrospectionRequiredClaims() {
    return this.interpolationForAttribute('channel_token_introspection_required_claims');
  }
  public set channelTokenIntrospectionRequiredClaims(value: string[][] | cdktf.IResolvable) {
    this._channelTokenIntrospectionRequiredClaims = value;
  }
  public resetChannelTokenIntrospectionRequiredClaims() {
    this._channelTokenIntrospectionRequiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionRequiredClaimsInput() {
    return this._channelTokenIntrospectionRequiredClaims;
  }

  // channel_token_introspection_scopes_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionScopesClaim?: string[]; 
  public get channelTokenIntrospectionScopesClaim() {
    return this.getListAttribute('channel_token_introspection_scopes_claim');
  }
  public set channelTokenIntrospectionScopesClaim(value: string[]) {
    this._channelTokenIntrospectionScopesClaim = value;
  }
  public resetChannelTokenIntrospectionScopesClaim() {
    this._channelTokenIntrospectionScopesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionScopesClaimInput() {
    return this._channelTokenIntrospectionScopesClaim;
  }

  // channel_token_introspection_scopes_required - computed: true, optional: true, required: false
  private _channelTokenIntrospectionScopesRequired?: string[]; 
  public get channelTokenIntrospectionScopesRequired() {
    return this.getListAttribute('channel_token_introspection_scopes_required');
  }
  public set channelTokenIntrospectionScopesRequired(value: string[]) {
    this._channelTokenIntrospectionScopesRequired = value;
  }
  public resetChannelTokenIntrospectionScopesRequired() {
    this._channelTokenIntrospectionScopesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionScopesRequiredInput() {
    return this._channelTokenIntrospectionScopesRequired;
  }

  // channel_token_introspection_subject_claim - computed: true, optional: true, required: false
  private _channelTokenIntrospectionSubjectClaim?: string[]; 
  public get channelTokenIntrospectionSubjectClaim() {
    return this.getListAttribute('channel_token_introspection_subject_claim');
  }
  public set channelTokenIntrospectionSubjectClaim(value: string[]) {
    this._channelTokenIntrospectionSubjectClaim = value;
  }
  public resetChannelTokenIntrospectionSubjectClaim() {
    this._channelTokenIntrospectionSubjectClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionSubjectClaimInput() {
    return this._channelTokenIntrospectionSubjectClaim;
  }

  // channel_token_introspection_subjects_allowed - computed: true, optional: true, required: false
  private _channelTokenIntrospectionSubjectsAllowed?: string[]; 
  public get channelTokenIntrospectionSubjectsAllowed() {
    return this.getListAttribute('channel_token_introspection_subjects_allowed');
  }
  public set channelTokenIntrospectionSubjectsAllowed(value: string[]) {
    this._channelTokenIntrospectionSubjectsAllowed = value;
  }
  public resetChannelTokenIntrospectionSubjectsAllowed() {
    this._channelTokenIntrospectionSubjectsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionSubjectsAllowedInput() {
    return this._channelTokenIntrospectionSubjectsAllowed;
  }

  // channel_token_introspection_timeout - computed: true, optional: true, required: false
  private _channelTokenIntrospectionTimeout?: number; 
  public get channelTokenIntrospectionTimeout() {
    return this.getNumberAttribute('channel_token_introspection_timeout');
  }
  public set channelTokenIntrospectionTimeout(value: number) {
    this._channelTokenIntrospectionTimeout = value;
  }
  public resetChannelTokenIntrospectionTimeout() {
    this._channelTokenIntrospectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIntrospectionTimeoutInput() {
    return this._channelTokenIntrospectionTimeout;
  }

  // channel_token_issuer - computed: true, optional: true, required: false
  private _channelTokenIssuer?: string; 
  public get channelTokenIssuer() {
    return this.getStringAttribute('channel_token_issuer');
  }
  public set channelTokenIssuer(value: string) {
    this._channelTokenIssuer = value;
  }
  public resetChannelTokenIssuer() {
    this._channelTokenIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIssuerInput() {
    return this._channelTokenIssuer;
  }

  // channel_token_issuer_claim - computed: true, optional: true, required: false
  private _channelTokenIssuerClaim?: string[]; 
  public get channelTokenIssuerClaim() {
    return this.getListAttribute('channel_token_issuer_claim');
  }
  public set channelTokenIssuerClaim(value: string[]) {
    this._channelTokenIssuerClaim = value;
  }
  public resetChannelTokenIssuerClaim() {
    this._channelTokenIssuerClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIssuerClaimInput() {
    return this._channelTokenIssuerClaim;
  }

  // channel_token_issuers_allowed - computed: true, optional: true, required: false
  private _channelTokenIssuersAllowed?: string[]; 
  public get channelTokenIssuersAllowed() {
    return this.getListAttribute('channel_token_issuers_allowed');
  }
  public set channelTokenIssuersAllowed(value: string[]) {
    this._channelTokenIssuersAllowed = value;
  }
  public resetChannelTokenIssuersAllowed() {
    this._channelTokenIssuersAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenIssuersAllowedInput() {
    return this._channelTokenIssuersAllowed;
  }

  // channel_token_jwks_uri - computed: true, optional: true, required: false
  private _channelTokenJwksUri?: string; 
  public get channelTokenJwksUri() {
    return this.getStringAttribute('channel_token_jwks_uri');
  }
  public set channelTokenJwksUri(value: string) {
    this._channelTokenJwksUri = value;
  }
  public resetChannelTokenJwksUri() {
    this._channelTokenJwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenJwksUriInput() {
    return this._channelTokenJwksUri;
  }

  // channel_token_jwks_uri_client_certificate - computed: true, optional: true, required: false
  private _channelTokenJwksUriClientCertificate = new GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificateOutputReference(this, "channel_token_jwks_uri_client_certificate");
  public get channelTokenJwksUriClientCertificate() {
    return this._channelTokenJwksUriClientCertificate;
  }
  public putChannelTokenJwksUriClientCertificate(value: GatewayPluginJwtSignerConfigChannelTokenJwksUriClientCertificate) {
    this._channelTokenJwksUriClientCertificate.internalValue = value;
  }
  public resetChannelTokenJwksUriClientCertificate() {
    this._channelTokenJwksUriClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenJwksUriClientCertificateInput() {
    return this._channelTokenJwksUriClientCertificate.internalValue;
  }

  // channel_token_jwks_uri_client_password - computed: true, optional: true, required: false
  private _channelTokenJwksUriClientPassword?: string; 
  public get channelTokenJwksUriClientPassword() {
    return this.getStringAttribute('channel_token_jwks_uri_client_password');
  }
  public set channelTokenJwksUriClientPassword(value: string) {
    this._channelTokenJwksUriClientPassword = value;
  }
  public resetChannelTokenJwksUriClientPassword() {
    this._channelTokenJwksUriClientPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenJwksUriClientPasswordInput() {
    return this._channelTokenJwksUriClientPassword;
  }

  // channel_token_jwks_uri_client_username - computed: true, optional: true, required: false
  private _channelTokenJwksUriClientUsername?: string; 
  public get channelTokenJwksUriClientUsername() {
    return this.getStringAttribute('channel_token_jwks_uri_client_username');
  }
  public set channelTokenJwksUriClientUsername(value: string) {
    this._channelTokenJwksUriClientUsername = value;
  }
  public resetChannelTokenJwksUriClientUsername() {
    this._channelTokenJwksUriClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenJwksUriClientUsernameInput() {
    return this._channelTokenJwksUriClientUsername;
  }

  // channel_token_jwks_uri_rotate_period - computed: true, optional: true, required: false
  private _channelTokenJwksUriRotatePeriod?: number; 
  public get channelTokenJwksUriRotatePeriod() {
    return this.getNumberAttribute('channel_token_jwks_uri_rotate_period');
  }
  public set channelTokenJwksUriRotatePeriod(value: number) {
    this._channelTokenJwksUriRotatePeriod = value;
  }
  public resetChannelTokenJwksUriRotatePeriod() {
    this._channelTokenJwksUriRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenJwksUriRotatePeriodInput() {
    return this._channelTokenJwksUriRotatePeriod;
  }

  // channel_token_keyset - computed: true, optional: true, required: false
  private _channelTokenKeyset?: string; 
  public get channelTokenKeyset() {
    return this.getStringAttribute('channel_token_keyset');
  }
  public set channelTokenKeyset(value: string) {
    this._channelTokenKeyset = value;
  }
  public resetChannelTokenKeyset() {
    this._channelTokenKeyset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenKeysetInput() {
    return this._channelTokenKeyset;
  }

  // channel_token_keyset_client_certificate - computed: true, optional: true, required: false
  private _channelTokenKeysetClientCertificate = new GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificateOutputReference(this, "channel_token_keyset_client_certificate");
  public get channelTokenKeysetClientCertificate() {
    return this._channelTokenKeysetClientCertificate;
  }
  public putChannelTokenKeysetClientCertificate(value: GatewayPluginJwtSignerConfigChannelTokenKeysetClientCertificate) {
    this._channelTokenKeysetClientCertificate.internalValue = value;
  }
  public resetChannelTokenKeysetClientCertificate() {
    this._channelTokenKeysetClientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenKeysetClientCertificateInput() {
    return this._channelTokenKeysetClientCertificate.internalValue;
  }

  // channel_token_keyset_client_password - computed: true, optional: true, required: false
  private _channelTokenKeysetClientPassword?: string; 
  public get channelTokenKeysetClientPassword() {
    return this.getStringAttribute('channel_token_keyset_client_password');
  }
  public set channelTokenKeysetClientPassword(value: string) {
    this._channelTokenKeysetClientPassword = value;
  }
  public resetChannelTokenKeysetClientPassword() {
    this._channelTokenKeysetClientPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenKeysetClientPasswordInput() {
    return this._channelTokenKeysetClientPassword;
  }

  // channel_token_keyset_client_username - computed: true, optional: true, required: false
  private _channelTokenKeysetClientUsername?: string; 
  public get channelTokenKeysetClientUsername() {
    return this.getStringAttribute('channel_token_keyset_client_username');
  }
  public set channelTokenKeysetClientUsername(value: string) {
    this._channelTokenKeysetClientUsername = value;
  }
  public resetChannelTokenKeysetClientUsername() {
    this._channelTokenKeysetClientUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenKeysetClientUsernameInput() {
    return this._channelTokenKeysetClientUsername;
  }

  // channel_token_keyset_rotate_period - computed: true, optional: true, required: false
  private _channelTokenKeysetRotatePeriod?: number; 
  public get channelTokenKeysetRotatePeriod() {
    return this.getNumberAttribute('channel_token_keyset_rotate_period');
  }
  public set channelTokenKeysetRotatePeriod(value: number) {
    this._channelTokenKeysetRotatePeriod = value;
  }
  public resetChannelTokenKeysetRotatePeriod() {
    this._channelTokenKeysetRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenKeysetRotatePeriodInput() {
    return this._channelTokenKeysetRotatePeriod;
  }

  // channel_token_leeway - computed: true, optional: true, required: false
  private _channelTokenLeeway?: number; 
  public get channelTokenLeeway() {
    return this.getNumberAttribute('channel_token_leeway');
  }
  public set channelTokenLeeway(value: number) {
    this._channelTokenLeeway = value;
  }
  public resetChannelTokenLeeway() {
    this._channelTokenLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenLeewayInput() {
    return this._channelTokenLeeway;
  }

  // channel_token_notbefore_claim - computed: true, optional: true, required: false
  private _channelTokenNotbeforeClaim?: string[]; 
  public get channelTokenNotbeforeClaim() {
    return this.getListAttribute('channel_token_notbefore_claim');
  }
  public set channelTokenNotbeforeClaim(value: string[]) {
    this._channelTokenNotbeforeClaim = value;
  }
  public resetChannelTokenNotbeforeClaim() {
    this._channelTokenNotbeforeClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenNotbeforeClaimInput() {
    return this._channelTokenNotbeforeClaim;
  }

  // channel_token_optional - computed: true, optional: true, required: false
  private _channelTokenOptional?: boolean | cdktf.IResolvable; 
  public get channelTokenOptional() {
    return this.getBooleanAttribute('channel_token_optional');
  }
  public set channelTokenOptional(value: boolean | cdktf.IResolvable) {
    this._channelTokenOptional = value;
  }
  public resetChannelTokenOptional() {
    this._channelTokenOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenOptionalInput() {
    return this._channelTokenOptional;
  }

  // channel_token_optional_claims - computed: true, optional: true, required: false
  private _channelTokenOptionalClaims?: string[][] | cdktf.IResolvable; 
  public get channelTokenOptionalClaims() {
    return this.interpolationForAttribute('channel_token_optional_claims');
  }
  public set channelTokenOptionalClaims(value: string[][] | cdktf.IResolvable) {
    this._channelTokenOptionalClaims = value;
  }
  public resetChannelTokenOptionalClaims() {
    this._channelTokenOptionalClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenOptionalClaimsInput() {
    return this._channelTokenOptionalClaims;
  }

  // channel_token_request_header - computed: true, optional: true, required: false
  private _channelTokenRequestHeader?: string; 
  public get channelTokenRequestHeader() {
    return this.getStringAttribute('channel_token_request_header');
  }
  public set channelTokenRequestHeader(value: string) {
    this._channelTokenRequestHeader = value;
  }
  public resetChannelTokenRequestHeader() {
    this._channelTokenRequestHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenRequestHeaderInput() {
    return this._channelTokenRequestHeader;
  }

  // channel_token_required_claims - computed: true, optional: true, required: false
  private _channelTokenRequiredClaims?: string[][] | cdktf.IResolvable; 
  public get channelTokenRequiredClaims() {
    return this.interpolationForAttribute('channel_token_required_claims');
  }
  public set channelTokenRequiredClaims(value: string[][] | cdktf.IResolvable) {
    this._channelTokenRequiredClaims = value;
  }
  public resetChannelTokenRequiredClaims() {
    this._channelTokenRequiredClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenRequiredClaimsInput() {
    return this._channelTokenRequiredClaims;
  }

  // channel_token_scopes_claim - computed: true, optional: true, required: false
  private _channelTokenScopesClaim?: string[]; 
  public get channelTokenScopesClaim() {
    return this.getListAttribute('channel_token_scopes_claim');
  }
  public set channelTokenScopesClaim(value: string[]) {
    this._channelTokenScopesClaim = value;
  }
  public resetChannelTokenScopesClaim() {
    this._channelTokenScopesClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenScopesClaimInput() {
    return this._channelTokenScopesClaim;
  }

  // channel_token_scopes_required - computed: true, optional: true, required: false
  private _channelTokenScopesRequired?: string[]; 
  public get channelTokenScopesRequired() {
    return this.getListAttribute('channel_token_scopes_required');
  }
  public set channelTokenScopesRequired(value: string[]) {
    this._channelTokenScopesRequired = value;
  }
  public resetChannelTokenScopesRequired() {
    this._channelTokenScopesRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenScopesRequiredInput() {
    return this._channelTokenScopesRequired;
  }

  // channel_token_signing - computed: true, optional: true, required: false
  private _channelTokenSigning?: boolean | cdktf.IResolvable; 
  public get channelTokenSigning() {
    return this.getBooleanAttribute('channel_token_signing');
  }
  public set channelTokenSigning(value: boolean | cdktf.IResolvable) {
    this._channelTokenSigning = value;
  }
  public resetChannelTokenSigning() {
    this._channelTokenSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenSigningInput() {
    return this._channelTokenSigning;
  }

  // channel_token_signing_algorithm - computed: true, optional: true, required: false
  private _channelTokenSigningAlgorithm?: string; 
  public get channelTokenSigningAlgorithm() {
    return this.getStringAttribute('channel_token_signing_algorithm');
  }
  public set channelTokenSigningAlgorithm(value: string) {
    this._channelTokenSigningAlgorithm = value;
  }
  public resetChannelTokenSigningAlgorithm() {
    this._channelTokenSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenSigningAlgorithmInput() {
    return this._channelTokenSigningAlgorithm;
  }

  // channel_token_subject_claim - computed: true, optional: true, required: false
  private _channelTokenSubjectClaim?: string[]; 
  public get channelTokenSubjectClaim() {
    return this.getListAttribute('channel_token_subject_claim');
  }
  public set channelTokenSubjectClaim(value: string[]) {
    this._channelTokenSubjectClaim = value;
  }
  public resetChannelTokenSubjectClaim() {
    this._channelTokenSubjectClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenSubjectClaimInput() {
    return this._channelTokenSubjectClaim;
  }

  // channel_token_subjects_allowed - computed: true, optional: true, required: false
  private _channelTokenSubjectsAllowed?: string[]; 
  public get channelTokenSubjectsAllowed() {
    return this.getListAttribute('channel_token_subjects_allowed');
  }
  public set channelTokenSubjectsAllowed(value: string[]) {
    this._channelTokenSubjectsAllowed = value;
  }
  public resetChannelTokenSubjectsAllowed() {
    this._channelTokenSubjectsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenSubjectsAllowedInput() {
    return this._channelTokenSubjectsAllowed;
  }

  // channel_token_upstream_header - computed: true, optional: true, required: false
  private _channelTokenUpstreamHeader?: string; 
  public get channelTokenUpstreamHeader() {
    return this.getStringAttribute('channel_token_upstream_header');
  }
  public set channelTokenUpstreamHeader(value: string) {
    this._channelTokenUpstreamHeader = value;
  }
  public resetChannelTokenUpstreamHeader() {
    this._channelTokenUpstreamHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenUpstreamHeaderInput() {
    return this._channelTokenUpstreamHeader;
  }

  // channel_token_upstream_leeway - computed: true, optional: true, required: false
  private _channelTokenUpstreamLeeway?: number; 
  public get channelTokenUpstreamLeeway() {
    return this.getNumberAttribute('channel_token_upstream_leeway');
  }
  public set channelTokenUpstreamLeeway(value: number) {
    this._channelTokenUpstreamLeeway = value;
  }
  public resetChannelTokenUpstreamLeeway() {
    this._channelTokenUpstreamLeeway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTokenUpstreamLeewayInput() {
    return this._channelTokenUpstreamLeeway;
  }

  // enable_access_token_introspection - computed: true, optional: true, required: false
  private _enableAccessTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get enableAccessTokenIntrospection() {
    return this.getBooleanAttribute('enable_access_token_introspection');
  }
  public set enableAccessTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._enableAccessTokenIntrospection = value;
  }
  public resetEnableAccessTokenIntrospection() {
    this._enableAccessTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessTokenIntrospectionInput() {
    return this._enableAccessTokenIntrospection;
  }

  // enable_channel_token_introspection - computed: true, optional: true, required: false
  private _enableChannelTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get enableChannelTokenIntrospection() {
    return this.getBooleanAttribute('enable_channel_token_introspection');
  }
  public set enableChannelTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._enableChannelTokenIntrospection = value;
  }
  public resetEnableChannelTokenIntrospection() {
    this._enableChannelTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableChannelTokenIntrospectionInput() {
    return this._enableChannelTokenIntrospection;
  }

  // enable_hs_signatures - computed: true, optional: true, required: false
  private _enableHsSignatures?: boolean | cdktf.IResolvable; 
  public get enableHsSignatures() {
    return this.getBooleanAttribute('enable_hs_signatures');
  }
  public set enableHsSignatures(value: boolean | cdktf.IResolvable) {
    this._enableHsSignatures = value;
  }
  public resetEnableHsSignatures() {
    this._enableHsSignatures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHsSignaturesInput() {
    return this._enableHsSignatures;
  }

  // enable_instrumentation - computed: true, optional: true, required: false
  private _enableInstrumentation?: boolean | cdktf.IResolvable; 
  public get enableInstrumentation() {
    return this.getBooleanAttribute('enable_instrumentation');
  }
  public set enableInstrumentation(value: boolean | cdktf.IResolvable) {
    this._enableInstrumentation = value;
  }
  public resetEnableInstrumentation() {
    this._enableInstrumentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInstrumentationInput() {
    return this._enableInstrumentation;
  }

  // original_access_token_upstream_header - computed: true, optional: true, required: false
  private _originalAccessTokenUpstreamHeader?: string; 
  public get originalAccessTokenUpstreamHeader() {
    return this.getStringAttribute('original_access_token_upstream_header');
  }
  public set originalAccessTokenUpstreamHeader(value: string) {
    this._originalAccessTokenUpstreamHeader = value;
  }
  public resetOriginalAccessTokenUpstreamHeader() {
    this._originalAccessTokenUpstreamHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalAccessTokenUpstreamHeaderInput() {
    return this._originalAccessTokenUpstreamHeader;
  }

  // original_channel_token_upstream_header - computed: true, optional: true, required: false
  private _originalChannelTokenUpstreamHeader?: string; 
  public get originalChannelTokenUpstreamHeader() {
    return this.getStringAttribute('original_channel_token_upstream_header');
  }
  public set originalChannelTokenUpstreamHeader(value: string) {
    this._originalChannelTokenUpstreamHeader = value;
  }
  public resetOriginalChannelTokenUpstreamHeader() {
    this._originalChannelTokenUpstreamHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalChannelTokenUpstreamHeaderInput() {
    return this._originalChannelTokenUpstreamHeader;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // remove_access_token_claims - computed: true, optional: true, required: false
  private _removeAccessTokenClaims?: string[]; 
  public get removeAccessTokenClaims() {
    return this.getListAttribute('remove_access_token_claims');
  }
  public set removeAccessTokenClaims(value: string[]) {
    this._removeAccessTokenClaims = value;
  }
  public resetRemoveAccessTokenClaims() {
    this._removeAccessTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAccessTokenClaimsInput() {
    return this._removeAccessTokenClaims;
  }

  // remove_channel_token_claims - computed: true, optional: true, required: false
  private _removeChannelTokenClaims?: string[]; 
  public get removeChannelTokenClaims() {
    return this.getListAttribute('remove_channel_token_claims');
  }
  public set removeChannelTokenClaims(value: string[]) {
    this._removeChannelTokenClaims = value;
  }
  public resetRemoveChannelTokenClaims() {
    this._removeChannelTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeChannelTokenClaimsInput() {
    return this._removeChannelTokenClaims;
  }

  // set_access_token_claims - computed: true, optional: true, required: false
  private _setAccessTokenClaims?: { [key: string]: string }; 
  public get setAccessTokenClaims() {
    return this.getStringMapAttribute('set_access_token_claims');
  }
  public set setAccessTokenClaims(value: { [key: string]: string }) {
    this._setAccessTokenClaims = value;
  }
  public resetSetAccessTokenClaims() {
    this._setAccessTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setAccessTokenClaimsInput() {
    return this._setAccessTokenClaims;
  }

  // set_channel_token_claims - computed: true, optional: true, required: false
  private _setChannelTokenClaims?: { [key: string]: string }; 
  public get setChannelTokenClaims() {
    return this.getStringMapAttribute('set_channel_token_claims');
  }
  public set setChannelTokenClaims(value: { [key: string]: string }) {
    this._setChannelTokenClaims = value;
  }
  public resetSetChannelTokenClaims() {
    this._setChannelTokenClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setChannelTokenClaimsInput() {
    return this._setChannelTokenClaims;
  }

  // set_claims - computed: true, optional: true, required: false
  private _setClaims?: { [key: string]: string }; 
  public get setClaims() {
    return this.getStringMapAttribute('set_claims');
  }
  public set setClaims(value: { [key: string]: string }) {
    this._setClaims = value;
  }
  public resetSetClaims() {
    this._setClaims = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setClaimsInput() {
    return this._setClaims;
  }

  // trust_access_token_introspection - computed: true, optional: true, required: false
  private _trustAccessTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get trustAccessTokenIntrospection() {
    return this.getBooleanAttribute('trust_access_token_introspection');
  }
  public set trustAccessTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._trustAccessTokenIntrospection = value;
  }
  public resetTrustAccessTokenIntrospection() {
    this._trustAccessTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAccessTokenIntrospectionInput() {
    return this._trustAccessTokenIntrospection;
  }

  // trust_channel_token_introspection - computed: true, optional: true, required: false
  private _trustChannelTokenIntrospection?: boolean | cdktf.IResolvable; 
  public get trustChannelTokenIntrospection() {
    return this.getBooleanAttribute('trust_channel_token_introspection');
  }
  public set trustChannelTokenIntrospection(value: boolean | cdktf.IResolvable) {
    this._trustChannelTokenIntrospection = value;
  }
  public resetTrustChannelTokenIntrospection() {
    this._trustChannelTokenIntrospection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustChannelTokenIntrospectionInput() {
    return this._trustChannelTokenIntrospection;
  }

  // verify_access_token_audience - computed: true, optional: true, required: false
  private _verifyAccessTokenAudience?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenAudience() {
    return this.getBooleanAttribute('verify_access_token_audience');
  }
  public set verifyAccessTokenAudience(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenAudience = value;
  }
  public resetVerifyAccessTokenAudience() {
    this._verifyAccessTokenAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenAudienceInput() {
    return this._verifyAccessTokenAudience;
  }

  // verify_access_token_expiry - computed: true, optional: true, required: false
  private _verifyAccessTokenExpiry?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenExpiry() {
    return this.getBooleanAttribute('verify_access_token_expiry');
  }
  public set verifyAccessTokenExpiry(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenExpiry = value;
  }
  public resetVerifyAccessTokenExpiry() {
    this._verifyAccessTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenExpiryInput() {
    return this._verifyAccessTokenExpiry;
  }

  // verify_access_token_introspection_audience - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionAudience?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionAudience() {
    return this.getBooleanAttribute('verify_access_token_introspection_audience');
  }
  public set verifyAccessTokenIntrospectionAudience(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionAudience = value;
  }
  public resetVerifyAccessTokenIntrospectionAudience() {
    this._verifyAccessTokenIntrospectionAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionAudienceInput() {
    return this._verifyAccessTokenIntrospectionAudience;
  }

  // verify_access_token_introspection_expiry - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionExpiry?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionExpiry() {
    return this.getBooleanAttribute('verify_access_token_introspection_expiry');
  }
  public set verifyAccessTokenIntrospectionExpiry(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionExpiry = value;
  }
  public resetVerifyAccessTokenIntrospectionExpiry() {
    this._verifyAccessTokenIntrospectionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionExpiryInput() {
    return this._verifyAccessTokenIntrospectionExpiry;
  }

  // verify_access_token_introspection_issuer - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionIssuer?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionIssuer() {
    return this.getBooleanAttribute('verify_access_token_introspection_issuer');
  }
  public set verifyAccessTokenIntrospectionIssuer(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionIssuer = value;
  }
  public resetVerifyAccessTokenIntrospectionIssuer() {
    this._verifyAccessTokenIntrospectionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionIssuerInput() {
    return this._verifyAccessTokenIntrospectionIssuer;
  }

  // verify_access_token_introspection_notbefore - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionNotbefore?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionNotbefore() {
    return this.getBooleanAttribute('verify_access_token_introspection_notbefore');
  }
  public set verifyAccessTokenIntrospectionNotbefore(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionNotbefore = value;
  }
  public resetVerifyAccessTokenIntrospectionNotbefore() {
    this._verifyAccessTokenIntrospectionNotbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionNotbeforeInput() {
    return this._verifyAccessTokenIntrospectionNotbefore;
  }

  // verify_access_token_introspection_scopes - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionScopes?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionScopes() {
    return this.getBooleanAttribute('verify_access_token_introspection_scopes');
  }
  public set verifyAccessTokenIntrospectionScopes(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionScopes = value;
  }
  public resetVerifyAccessTokenIntrospectionScopes() {
    this._verifyAccessTokenIntrospectionScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionScopesInput() {
    return this._verifyAccessTokenIntrospectionScopes;
  }

  // verify_access_token_introspection_subject - computed: true, optional: true, required: false
  private _verifyAccessTokenIntrospectionSubject?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIntrospectionSubject() {
    return this.getBooleanAttribute('verify_access_token_introspection_subject');
  }
  public set verifyAccessTokenIntrospectionSubject(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIntrospectionSubject = value;
  }
  public resetVerifyAccessTokenIntrospectionSubject() {
    this._verifyAccessTokenIntrospectionSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIntrospectionSubjectInput() {
    return this._verifyAccessTokenIntrospectionSubject;
  }

  // verify_access_token_issuer - computed: true, optional: true, required: false
  private _verifyAccessTokenIssuer?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenIssuer() {
    return this.getBooleanAttribute('verify_access_token_issuer');
  }
  public set verifyAccessTokenIssuer(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenIssuer = value;
  }
  public resetVerifyAccessTokenIssuer() {
    this._verifyAccessTokenIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenIssuerInput() {
    return this._verifyAccessTokenIssuer;
  }

  // verify_access_token_notbefore - computed: true, optional: true, required: false
  private _verifyAccessTokenNotbefore?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenNotbefore() {
    return this.getBooleanAttribute('verify_access_token_notbefore');
  }
  public set verifyAccessTokenNotbefore(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenNotbefore = value;
  }
  public resetVerifyAccessTokenNotbefore() {
    this._verifyAccessTokenNotbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenNotbeforeInput() {
    return this._verifyAccessTokenNotbefore;
  }

  // verify_access_token_scopes - computed: true, optional: true, required: false
  private _verifyAccessTokenScopes?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenScopes() {
    return this.getBooleanAttribute('verify_access_token_scopes');
  }
  public set verifyAccessTokenScopes(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenScopes = value;
  }
  public resetVerifyAccessTokenScopes() {
    this._verifyAccessTokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenScopesInput() {
    return this._verifyAccessTokenScopes;
  }

  // verify_access_token_signature - computed: true, optional: true, required: false
  private _verifyAccessTokenSignature?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenSignature() {
    return this.getBooleanAttribute('verify_access_token_signature');
  }
  public set verifyAccessTokenSignature(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenSignature = value;
  }
  public resetVerifyAccessTokenSignature() {
    this._verifyAccessTokenSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenSignatureInput() {
    return this._verifyAccessTokenSignature;
  }

  // verify_access_token_subject - computed: true, optional: true, required: false
  private _verifyAccessTokenSubject?: boolean | cdktf.IResolvable; 
  public get verifyAccessTokenSubject() {
    return this.getBooleanAttribute('verify_access_token_subject');
  }
  public set verifyAccessTokenSubject(value: boolean | cdktf.IResolvable) {
    this._verifyAccessTokenSubject = value;
  }
  public resetVerifyAccessTokenSubject() {
    this._verifyAccessTokenSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyAccessTokenSubjectInput() {
    return this._verifyAccessTokenSubject;
  }

  // verify_channel_token_audience - computed: true, optional: true, required: false
  private _verifyChannelTokenAudience?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenAudience() {
    return this.getBooleanAttribute('verify_channel_token_audience');
  }
  public set verifyChannelTokenAudience(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenAudience = value;
  }
  public resetVerifyChannelTokenAudience() {
    this._verifyChannelTokenAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenAudienceInput() {
    return this._verifyChannelTokenAudience;
  }

  // verify_channel_token_expiry - computed: true, optional: true, required: false
  private _verifyChannelTokenExpiry?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenExpiry() {
    return this.getBooleanAttribute('verify_channel_token_expiry');
  }
  public set verifyChannelTokenExpiry(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenExpiry = value;
  }
  public resetVerifyChannelTokenExpiry() {
    this._verifyChannelTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenExpiryInput() {
    return this._verifyChannelTokenExpiry;
  }

  // verify_channel_token_introspection_audience - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionAudience?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionAudience() {
    return this.getBooleanAttribute('verify_channel_token_introspection_audience');
  }
  public set verifyChannelTokenIntrospectionAudience(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionAudience = value;
  }
  public resetVerifyChannelTokenIntrospectionAudience() {
    this._verifyChannelTokenIntrospectionAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionAudienceInput() {
    return this._verifyChannelTokenIntrospectionAudience;
  }

  // verify_channel_token_introspection_expiry - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionExpiry?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionExpiry() {
    return this.getBooleanAttribute('verify_channel_token_introspection_expiry');
  }
  public set verifyChannelTokenIntrospectionExpiry(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionExpiry = value;
  }
  public resetVerifyChannelTokenIntrospectionExpiry() {
    this._verifyChannelTokenIntrospectionExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionExpiryInput() {
    return this._verifyChannelTokenIntrospectionExpiry;
  }

  // verify_channel_token_introspection_issuer - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionIssuer?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionIssuer() {
    return this.getBooleanAttribute('verify_channel_token_introspection_issuer');
  }
  public set verifyChannelTokenIntrospectionIssuer(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionIssuer = value;
  }
  public resetVerifyChannelTokenIntrospectionIssuer() {
    this._verifyChannelTokenIntrospectionIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionIssuerInput() {
    return this._verifyChannelTokenIntrospectionIssuer;
  }

  // verify_channel_token_introspection_notbefore - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionNotbefore?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionNotbefore() {
    return this.getBooleanAttribute('verify_channel_token_introspection_notbefore');
  }
  public set verifyChannelTokenIntrospectionNotbefore(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionNotbefore = value;
  }
  public resetVerifyChannelTokenIntrospectionNotbefore() {
    this._verifyChannelTokenIntrospectionNotbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionNotbeforeInput() {
    return this._verifyChannelTokenIntrospectionNotbefore;
  }

  // verify_channel_token_introspection_scopes - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionScopes?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionScopes() {
    return this.getBooleanAttribute('verify_channel_token_introspection_scopes');
  }
  public set verifyChannelTokenIntrospectionScopes(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionScopes = value;
  }
  public resetVerifyChannelTokenIntrospectionScopes() {
    this._verifyChannelTokenIntrospectionScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionScopesInput() {
    return this._verifyChannelTokenIntrospectionScopes;
  }

  // verify_channel_token_introspection_subject - computed: true, optional: true, required: false
  private _verifyChannelTokenIntrospectionSubject?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIntrospectionSubject() {
    return this.getBooleanAttribute('verify_channel_token_introspection_subject');
  }
  public set verifyChannelTokenIntrospectionSubject(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIntrospectionSubject = value;
  }
  public resetVerifyChannelTokenIntrospectionSubject() {
    this._verifyChannelTokenIntrospectionSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIntrospectionSubjectInput() {
    return this._verifyChannelTokenIntrospectionSubject;
  }

  // verify_channel_token_issuer - computed: true, optional: true, required: false
  private _verifyChannelTokenIssuer?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenIssuer() {
    return this.getBooleanAttribute('verify_channel_token_issuer');
  }
  public set verifyChannelTokenIssuer(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenIssuer = value;
  }
  public resetVerifyChannelTokenIssuer() {
    this._verifyChannelTokenIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenIssuerInput() {
    return this._verifyChannelTokenIssuer;
  }

  // verify_channel_token_notbefore - computed: true, optional: true, required: false
  private _verifyChannelTokenNotbefore?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenNotbefore() {
    return this.getBooleanAttribute('verify_channel_token_notbefore');
  }
  public set verifyChannelTokenNotbefore(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenNotbefore = value;
  }
  public resetVerifyChannelTokenNotbefore() {
    this._verifyChannelTokenNotbefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenNotbeforeInput() {
    return this._verifyChannelTokenNotbefore;
  }

  // verify_channel_token_scopes - computed: true, optional: true, required: false
  private _verifyChannelTokenScopes?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenScopes() {
    return this.getBooleanAttribute('verify_channel_token_scopes');
  }
  public set verifyChannelTokenScopes(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenScopes = value;
  }
  public resetVerifyChannelTokenScopes() {
    this._verifyChannelTokenScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenScopesInput() {
    return this._verifyChannelTokenScopes;
  }

  // verify_channel_token_signature - computed: true, optional: true, required: false
  private _verifyChannelTokenSignature?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenSignature() {
    return this.getBooleanAttribute('verify_channel_token_signature');
  }
  public set verifyChannelTokenSignature(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenSignature = value;
  }
  public resetVerifyChannelTokenSignature() {
    this._verifyChannelTokenSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenSignatureInput() {
    return this._verifyChannelTokenSignature;
  }

  // verify_channel_token_subject - computed: true, optional: true, required: false
  private _verifyChannelTokenSubject?: boolean | cdktf.IResolvable; 
  public get verifyChannelTokenSubject() {
    return this.getBooleanAttribute('verify_channel_token_subject');
  }
  public set verifyChannelTokenSubject(value: boolean | cdktf.IResolvable) {
    this._verifyChannelTokenSubject = value;
  }
  public resetVerifyChannelTokenSubject() {
    this._verifyChannelTokenSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyChannelTokenSubjectInput() {
    return this._verifyChannelTokenSubject;
  }
}
export interface GatewayPluginJwtSignerOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access GatewayPluginJwtSigner#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJwtSignerOrderingAfterToTerraform(struct?: GatewayPluginJwtSignerOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJwtSignerOrderingAfterToHclTerraform(struct?: GatewayPluginJwtSignerOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginJwtSignerOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#access GatewayPluginJwtSigner#access}
  */
  readonly access?: string[];
}

export function gatewayPluginJwtSignerOrderingBeforeToTerraform(struct?: GatewayPluginJwtSignerOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginJwtSignerOrderingBeforeToHclTerraform(struct?: GatewayPluginJwtSignerOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginJwtSignerOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#after GatewayPluginJwtSigner#after}
  */
  readonly after?: GatewayPluginJwtSignerOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#before GatewayPluginJwtSigner#before}
  */
  readonly before?: GatewayPluginJwtSignerOrderingBefore;
}

export function gatewayPluginJwtSignerOrderingToTerraform(struct?: GatewayPluginJwtSignerOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginJwtSignerOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginJwtSignerOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginJwtSignerOrderingToHclTerraform(struct?: GatewayPluginJwtSignerOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginJwtSignerOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerOrderingAfter",
    },
    before: {
      value: gatewayPluginJwtSignerOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginJwtSignerOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginJwtSignerOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginJwtSignerOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginJwtSignerOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginJwtSignerOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginJwtSignerPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#name GatewayPluginJwtSigner#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#path GatewayPluginJwtSigner#path}
  */
  readonly path?: string;
}

export function gatewayPluginJwtSignerPartialsToTerraform(struct?: GatewayPluginJwtSignerPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginJwtSignerPartialsToHclTerraform(struct?: GatewayPluginJwtSignerPartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginJwtSignerPartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerPartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
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
}

export class GatewayPluginJwtSignerPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginJwtSignerPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginJwtSignerPartialsOutputReference {
    return new GatewayPluginJwtSignerPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginJwtSignerRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerRouteToTerraform(struct?: GatewayPluginJwtSignerRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerRouteToHclTerraform(struct?: GatewayPluginJwtSignerRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginJwtSignerService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#id GatewayPluginJwtSigner#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginJwtSignerServiceToTerraform(struct?: GatewayPluginJwtSignerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginJwtSignerServiceToHclTerraform(struct?: GatewayPluginJwtSignerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginJwtSignerServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginJwtSignerService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginJwtSignerService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer konnect_gateway_plugin_jwt_signer}
*/
export class GatewayPluginJwtSigner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_jwt_signer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginJwtSigner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginJwtSigner to import
  * @param importFromId The id of the existing GatewayPluginJwtSigner that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginJwtSigner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_jwt_signer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_jwt_signer konnect_gateway_plugin_jwt_signer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginJwtSignerConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginJwtSignerConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_jwt_signer',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginJwtSignerConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginJwtSignerConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // enabled - computed: true, optional: true, required: false
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginJwtSignerOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginJwtSignerOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginJwtSignerPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginJwtSignerPartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginJwtSignerRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginJwtSignerRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginJwtSignerServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginJwtSignerService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginJwtSignerConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginJwtSignerOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginJwtSignerPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginJwtSignerRouteToTerraform(this._route.internalValue),
      service: gatewayPluginJwtSignerServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginJwtSignerConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJwtSignerConfigA",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginJwtSignerOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJwtSignerOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginJwtSignerPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginJwtSignerPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginJwtSignerRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJwtSignerRoute",
      },
      service: {
        value: gatewayPluginJwtSignerServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginJwtSignerService",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
