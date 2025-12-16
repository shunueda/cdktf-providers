// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayRouteExpressionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#control_plane_id GatewayRouteExpression#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#created_at GatewayRouteExpression#created_at}
  */
  readonly createdAt?: number;
  /**
  * Use Router Expression to perform route match. This option is only available when `router_flavor` is set to `expressions`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#expression GatewayRouteExpression#expression}
  */
  readonly expression?: string;
  /**
  * The status code Kong responds with when all properties of a Route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`. `Location` header is injected by Kong if the field is set to 301, 302, 307 or 308. Note: This config applies only if the Route is configured to only accept the `https` protocol. Default: 426; must be one of ["301", "302", "307", "308", "426"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#https_redirect_status_code GatewayRouteExpression#https_redirect_status_code}
  */
  readonly httpsRedirectStatusCode?: number;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#id GatewayRouteExpression#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Route. Route names must be unique, and they are case sensitive. For example, there can be two different Routes named "test" and "Test".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#name GatewayRouteExpression#name}
  */
  readonly name?: string;
  /**
  * Controls how the Service path, Route path and requested path are combined when sending a request to the upstream. See above for a detailed description of each behavior. Default: "v0"; must be one of ["v0", "v1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#path_handling GatewayRouteExpression#path_handling}
  */
  readonly pathHandling?: string;
  /**
  * When matching a Route via one of the `hosts` domain names, use the request `Host` header in the upstream request headers. If set to `false`, the upstream `Host` header will be that of the Service's `host`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#preserve_host GatewayRouteExpression#preserve_host}
  */
  readonly preserveHost?: boolean | cdktf.IResolvable;
  /**
  * A number used to specify the matching order for expression routes. The higher the `priority`, the sooner an route will be evaluated. This field is ignored unless `expression` field is set. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#priority GatewayRouteExpression#priority}
  */
  readonly priority?: number;
  /**
  * An array of the protocols this Route should allow. See the [Route Object](#route-object) section for a list of accepted protocols. When set to only `"https"`, HTTP requests are answered with an upgrade error. When set to only `"http"`, HTTPS requests are answered with an error. Default: ["http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#protocols GatewayRouteExpression#protocols}
  */
  readonly protocols?: string[];
  /**
  * Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#request_buffering GatewayRouteExpression#request_buffering}
  */
  readonly requestBuffering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#response_buffering GatewayRouteExpression#response_buffering}
  */
  readonly responseBuffering?: boolean | cdktf.IResolvable;
  /**
  * The Service this Route is associated to. This is where the Route proxies traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#service GatewayRouteExpression#service}
  */
  readonly service?: GatewayRouteExpressionService;
  /**
  * When matching a Route via one of the `paths`, strip the matching prefix from the upstream request URL. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#strip_path GatewayRouteExpression#strip_path}
  */
  readonly stripPath?: boolean | cdktf.IResolvable;
  /**
  * An optional set of strings associated with the Route for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#tags GatewayRouteExpression#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#updated_at GatewayRouteExpression#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayRouteExpressionService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#id GatewayRouteExpression#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayRouteExpressionServiceToTerraform(struct?: GatewayRouteExpressionService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayRouteExpressionServiceToHclTerraform(struct?: GatewayRouteExpressionService | cdktf.IResolvable): any {
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

export class GatewayRouteExpressionServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayRouteExpressionService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayRouteExpressionService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression konnect_gateway_route_expression}
*/
export class GatewayRouteExpression extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_route_expression";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayRouteExpression resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayRouteExpression to import
  * @param importFromId The id of the existing GatewayRouteExpression that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayRouteExpression to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_route_expression", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_route_expression konnect_gateway_route_expression} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayRouteExpressionConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayRouteExpressionConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_route_expression',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._expression = config.expression;
    this._httpsRedirectStatusCode = config.httpsRedirectStatusCode;
    this._id = config.id;
    this._name = config.name;
    this._pathHandling = config.pathHandling;
    this._preserveHost = config.preserveHost;
    this._priority = config.priority;
    this._protocols = config.protocols;
    this._requestBuffering = config.requestBuffering;
    this._responseBuffering = config.responseBuffering;
    this._service.internalValue = config.service;
    this._stripPath = config.stripPath;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // https_redirect_status_code - computed: true, optional: true, required: false
  private _httpsRedirectStatusCode?: number; 
  public get httpsRedirectStatusCode() {
    return this.getNumberAttribute('https_redirect_status_code');
  }
  public set httpsRedirectStatusCode(value: number) {
    this._httpsRedirectStatusCode = value;
  }
  public resetHttpsRedirectStatusCode() {
    this._httpsRedirectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsRedirectStatusCodeInput() {
    return this._httpsRedirectStatusCode;
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

  // path_handling - computed: true, optional: true, required: false
  private _pathHandling?: string; 
  public get pathHandling() {
    return this.getStringAttribute('path_handling');
  }
  public set pathHandling(value: string) {
    this._pathHandling = value;
  }
  public resetPathHandling() {
    this._pathHandling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathHandlingInput() {
    return this._pathHandling;
  }

  // preserve_host - computed: true, optional: true, required: false
  private _preserveHost?: boolean | cdktf.IResolvable; 
  public get preserveHost() {
    return this.getBooleanAttribute('preserve_host');
  }
  public set preserveHost(value: boolean | cdktf.IResolvable) {
    this._preserveHost = value;
  }
  public resetPreserveHost() {
    this._preserveHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveHostInput() {
    return this._preserveHost;
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

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
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

  // request_buffering - computed: true, optional: true, required: false
  private _requestBuffering?: boolean | cdktf.IResolvable; 
  public get requestBuffering() {
    return this.getBooleanAttribute('request_buffering');
  }
  public set requestBuffering(value: boolean | cdktf.IResolvable) {
    this._requestBuffering = value;
  }
  public resetRequestBuffering() {
    this._requestBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBufferingInput() {
    return this._requestBuffering;
  }

  // response_buffering - computed: true, optional: true, required: false
  private _responseBuffering?: boolean | cdktf.IResolvable; 
  public get responseBuffering() {
    return this.getBooleanAttribute('response_buffering');
  }
  public set responseBuffering(value: boolean | cdktf.IResolvable) {
    this._responseBuffering = value;
  }
  public resetResponseBuffering() {
    this._responseBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBufferingInput() {
    return this._responseBuffering;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayRouteExpressionServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayRouteExpressionService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // strip_path - computed: true, optional: true, required: false
  private _stripPath?: boolean | cdktf.IResolvable; 
  public get stripPath() {
    return this.getBooleanAttribute('strip_path');
  }
  public set stripPath(value: boolean | cdktf.IResolvable) {
    this._stripPath = value;
  }
  public resetStripPath() {
    this._stripPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripPathInput() {
    return this._stripPath;
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
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      expression: cdktf.stringToTerraform(this._expression),
      https_redirect_status_code: cdktf.numberToTerraform(this._httpsRedirectStatusCode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      path_handling: cdktf.stringToTerraform(this._pathHandling),
      preserve_host: cdktf.booleanToTerraform(this._preserveHost),
      priority: cdktf.numberToTerraform(this._priority),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      request_buffering: cdktf.booleanToTerraform(this._requestBuffering),
      response_buffering: cdktf.booleanToTerraform(this._responseBuffering),
      service: gatewayRouteExpressionServiceToTerraform(this._service.internalValue),
      strip_path: cdktf.booleanToTerraform(this._stripPath),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_redirect_status_code: {
        value: cdktf.numberToHclTerraform(this._httpsRedirectStatusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      path_handling: {
        value: cdktf.stringToHclTerraform(this._pathHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preserve_host: {
        value: cdktf.booleanToHclTerraform(this._preserveHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      request_buffering: {
        value: cdktf.booleanToHclTerraform(this._requestBuffering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      response_buffering: {
        value: cdktf.booleanToHclTerraform(this._responseBuffering),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service: {
        value: gatewayRouteExpressionServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayRouteExpressionService",
      },
      strip_path: {
        value: cdktf.booleanToHclTerraform(this._stripPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
