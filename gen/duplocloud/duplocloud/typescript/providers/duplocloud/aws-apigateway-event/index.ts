// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsApigatewayEventConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the REST API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#api_gateway_id AwsApigatewayEvent#api_gateway_id}
  */
  readonly apiGatewayId: string;
  /**
  * Specify if the method requires an API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#api_key_required AwsApigatewayEvent#api_key_required}
  */
  readonly apiKeyRequired?: boolean | cdktf.IResolvable;
  /**
  * Type of authorization used for the method. (`NONE`, `CUSTOM`, `AWS_IAM`, `COGNITO_USER_POOLS`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#authorization_type AwsApigatewayEvent#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Authorizer id to be used when the authorization is `CUSTOM` or `COGNITO_USER_POOLS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#authorizer_id AwsApigatewayEvent#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * How to handle request payload content type conversions. Supported values are `CONVERT_TO_BINARY` and `CONVERT_TO_TEXT`. If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the passthroughBehaviors is configured to support payload pass-through.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#content_handling AwsApigatewayEvent#content_handling}
  */
  readonly contentHandling?: string;
  /**
  * Enable handling of preflight requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#cors AwsApigatewayEvent#cors}
  */
  readonly cors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#id AwsApigatewayEvent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * HTTP Method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#method AwsApigatewayEvent#method}
  */
  readonly method: string;
  /**
  * The path segment of API resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#path AwsApigatewayEvent#path}
  */
  readonly path: string;
  /**
  * The GUID of the tenant that the API gateway event will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#tenant_id AwsApigatewayEvent#tenant_id}
  */
  readonly tenantId: string;
  /**
  * integration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#integration AwsApigatewayEvent#integration}
  */
  readonly integration: AwsApigatewayEventIntegration;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#timeouts AwsApigatewayEvent#timeouts}
  */
  readonly timeouts?: AwsApigatewayEventTimeouts;
}
export interface AwsApigatewayEventIntegration {
  /**
  * Custom timeout between 50 and 300,000 milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#timeout AwsApigatewayEvent#timeout}
  */
  readonly timeout?: number;
  /**
  * Integration input's type. Valid values are `HTTP` (for HTTP backends), `MOCK` (not calling any real backend), `AWS` (for AWS services), `AWS_PROXY` (for Lambda proxy integration) and `HTTP_PROXY` (for HTTP proxy integration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#type AwsApigatewayEvent#type}
  */
  readonly type: string;
  /**
  * Input's URI. Required if type is `AWS`, `AWS_PROXY`, `HTTP` or `HTTP_PROXY`. For AWS integrations, the URI should be of the form `arn:aws:apigateway:{region}:{subdomain.service|service}:{path|action}/{service_api}`. `region`, `subdomain` and `service` are used to determine the right endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#uri AwsApigatewayEvent#uri}
  */
  readonly uri: string;
}

export function awsApigatewayEventIntegrationToTerraform(struct?: AwsApigatewayEventIntegrationOutputReference | AwsApigatewayEventIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function awsApigatewayEventIntegrationToHclTerraform(struct?: AwsApigatewayEventIntegrationOutputReference | AwsApigatewayEventIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsApigatewayEventIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsApigatewayEventIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsApigatewayEventIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeout = undefined;
      this._type = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeout = value.timeout;
      this._type = value.type;
      this._uri = value.uri;
    }
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface AwsApigatewayEventTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#create AwsApigatewayEvent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#delete AwsApigatewayEvent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#update AwsApigatewayEvent#update}
  */
  readonly update?: string;
}

export function awsApigatewayEventTimeoutsToTerraform(struct?: AwsApigatewayEventTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function awsApigatewayEventTimeoutsToHclTerraform(struct?: AwsApigatewayEventTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsApigatewayEventTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsApigatewayEventTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsApigatewayEventTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event duplocloud_aws_apigateway_event}
*/
export class AwsApigatewayEvent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_apigateway_event";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsApigatewayEvent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsApigatewayEvent to import
  * @param importFromId The id of the existing AwsApigatewayEvent that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsApigatewayEvent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_apigateway_event", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/aws_apigateway_event duplocloud_aws_apigateway_event} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsApigatewayEventConfig
  */
  public constructor(scope: Construct, id: string, config: AwsApigatewayEventConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_apigateway_event',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiGatewayId = config.apiGatewayId;
    this._apiKeyRequired = config.apiKeyRequired;
    this._authorizationType = config.authorizationType;
    this._authorizerId = config.authorizerId;
    this._contentHandling = config.contentHandling;
    this._cors = config.cors;
    this._id = config.id;
    this._method = config.method;
    this._path = config.path;
    this._tenantId = config.tenantId;
    this._integration.internalValue = config.integration;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_gateway_id - computed: false, optional: false, required: true
  private _apiGatewayId?: string; 
  public get apiGatewayId() {
    return this.getStringAttribute('api_gateway_id');
  }
  public set apiGatewayId(value: string) {
    this._apiGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGatewayIdInput() {
    return this._apiGatewayId;
  }

  // api_key_required - computed: true, optional: true, required: false
  private _apiKeyRequired?: boolean | cdktf.IResolvable; 
  public get apiKeyRequired() {
    return this.getBooleanAttribute('api_key_required');
  }
  public set apiKeyRequired(value: boolean | cdktf.IResolvable) {
    this._apiKeyRequired = value;
  }
  public resetApiKeyRequired() {
    this._apiKeyRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyRequiredInput() {
    return this._apiKeyRequired;
  }

  // authorization_type - computed: true, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // authorizer_id - computed: true, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // content_handling - computed: true, optional: true, required: false
  private _contentHandling?: string; 
  public get contentHandling() {
    return this.getStringAttribute('content_handling');
  }
  public set contentHandling(value: string) {
    this._contentHandling = value;
  }
  public resetContentHandling() {
    this._contentHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHandlingInput() {
    return this._contentHandling;
  }

  // cors - computed: true, optional: true, required: false
  private _cors?: boolean | cdktf.IResolvable; 
  public get cors() {
    return this.getBooleanAttribute('cors');
  }
  public set cors(value: boolean | cdktf.IResolvable) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
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

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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

  // integration - computed: false, optional: false, required: true
  private _integration = new AwsApigatewayEventIntegrationOutputReference(this, "integration");
  public get integration() {
    return this._integration;
  }
  public putIntegration(value: AwsApigatewayEventIntegration) {
    this._integration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsApigatewayEventTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsApigatewayEventTimeouts) {
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
      api_gateway_id: cdktf.stringToTerraform(this._apiGatewayId),
      api_key_required: cdktf.booleanToTerraform(this._apiKeyRequired),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      content_handling: cdktf.stringToTerraform(this._contentHandling),
      cors: cdktf.booleanToTerraform(this._cors),
      id: cdktf.stringToTerraform(this._id),
      method: cdktf.stringToTerraform(this._method),
      path: cdktf.stringToTerraform(this._path),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      integration: awsApigatewayEventIntegrationToTerraform(this._integration.internalValue),
      timeouts: awsApigatewayEventTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_gateway_id: {
        value: cdktf.stringToHclTerraform(this._apiGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key_required: {
        value: cdktf.booleanToHclTerraform(this._apiKeyRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorizer_id: {
        value: cdktf.stringToHclTerraform(this._authorizerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_handling: {
        value: cdktf.stringToHclTerraform(this._contentHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors: {
        value: cdktf.booleanToHclTerraform(this._cors),
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
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration: {
        value: awsApigatewayEventIntegrationToHclTerraform(this._integration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsApigatewayEventIntegrationList",
      },
      timeouts: {
        value: awsApigatewayEventTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsApigatewayEventTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
