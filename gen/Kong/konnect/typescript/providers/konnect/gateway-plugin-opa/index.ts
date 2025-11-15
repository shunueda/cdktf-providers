// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginOpaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#config GatewayPluginOpa#config}
  */
  readonly config: GatewayPluginOpaConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#control_plane_id GatewayPluginOpa#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#created_at GatewayPluginOpa#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#enabled GatewayPluginOpa#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#id GatewayPluginOpa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#instance_name GatewayPluginOpa#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#ordering GatewayPluginOpa#ordering}
  */
  readonly ordering?: GatewayPluginOpaOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#partials GatewayPluginOpa#partials}
  */
  readonly partials?: GatewayPluginOpaPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#protocols GatewayPluginOpa#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#route GatewayPluginOpa#route}
  */
  readonly route?: GatewayPluginOpaRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#service GatewayPluginOpa#service}
  */
  readonly service?: GatewayPluginOpaService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#tags GatewayPluginOpa#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#updated_at GatewayPluginOpa#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginOpaConfigA {
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_body_in_opa_input GatewayPluginOpa#include_body_in_opa_input}
  */
  readonly includeBodyInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the Kong Gateway Consumer object in use for the current request (if any) is included as input to OPA. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_consumer_in_opa_input GatewayPluginOpa#include_consumer_in_opa_input}
  */
  readonly includeConsumerInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * If set to true and the `Content-Type` header of the current request is `application/json`, the request body will be JSON decoded and the decoded struct is included as input to OPA. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_parsed_json_body_in_opa_input GatewayPluginOpa#include_parsed_json_body_in_opa_input}
  */
  readonly includeParsedJsonBodyInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the Kong Gateway Route object in use for the current request is included as input to OPA. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_route_in_opa_input GatewayPluginOpa#include_route_in_opa_input}
  */
  readonly includeRouteInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the Kong Gateway Service object in use for the current request is included as input to OPA. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_service_in_opa_input GatewayPluginOpa#include_service_in_opa_input}
  */
  readonly includeServiceInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the regex capture groups captured on the Kong Gateway Route's path field in the current request (if any) are included as input to OPA. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#include_uri_captures_in_opa_input GatewayPluginOpa#include_uri_captures_in_opa_input}
  */
  readonly includeUriCapturesInOpaInput?: boolean | cdktf.IResolvable;
  /**
  * A string representing a host name, such as example.com. Default: "localhost"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#opa_host GatewayPluginOpa#opa_host}
  */
  readonly opaHost?: string;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#opa_path GatewayPluginOpa#opa_path}
  */
  readonly opaPath: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 8181
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#opa_port GatewayPluginOpa#opa_port}
  */
  readonly opaPort?: number;
  /**
  * The protocol to use when talking to Open Policy Agent (OPA) server. Allowed protocols are `http` and `https`. Default: "http"; must be one of ["http", "https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#opa_protocol GatewayPluginOpa#opa_protocol}
  */
  readonly opaProtocol?: string;
  /**
  * If set to true, the OPA certificate will be verified according to the CA certificates specified in lua_ssl_trusted_certificate. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#ssl_verify GatewayPluginOpa#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
}

export function gatewayPluginOpaConfigAToTerraform(struct?: GatewayPluginOpaConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_body_in_opa_input: cdktf.booleanToTerraform(struct!.includeBodyInOpaInput),
    include_consumer_in_opa_input: cdktf.booleanToTerraform(struct!.includeConsumerInOpaInput),
    include_parsed_json_body_in_opa_input: cdktf.booleanToTerraform(struct!.includeParsedJsonBodyInOpaInput),
    include_route_in_opa_input: cdktf.booleanToTerraform(struct!.includeRouteInOpaInput),
    include_service_in_opa_input: cdktf.booleanToTerraform(struct!.includeServiceInOpaInput),
    include_uri_captures_in_opa_input: cdktf.booleanToTerraform(struct!.includeUriCapturesInOpaInput),
    opa_host: cdktf.stringToTerraform(struct!.opaHost),
    opa_path: cdktf.stringToTerraform(struct!.opaPath),
    opa_port: cdktf.numberToTerraform(struct!.opaPort),
    opa_protocol: cdktf.stringToTerraform(struct!.opaProtocol),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
  }
}


export function gatewayPluginOpaConfigAToHclTerraform(struct?: GatewayPluginOpaConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_body_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeBodyInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_consumer_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeConsumerInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_parsed_json_body_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeParsedJsonBodyInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_route_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeRouteInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_service_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeServiceInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_uri_captures_in_opa_input: {
      value: cdktf.booleanToHclTerraform(struct!.includeUriCapturesInOpaInput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    opa_host: {
      value: cdktf.stringToHclTerraform(struct!.opaHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opa_path: {
      value: cdktf.stringToHclTerraform(struct!.opaPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    opa_port: {
      value: cdktf.numberToHclTerraform(struct!.opaPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opa_protocol: {
      value: cdktf.stringToHclTerraform(struct!.opaProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpaConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeBodyInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBodyInOpaInput = this._includeBodyInOpaInput;
    }
    if (this._includeConsumerInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeConsumerInOpaInput = this._includeConsumerInOpaInput;
    }
    if (this._includeParsedJsonBodyInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeParsedJsonBodyInOpaInput = this._includeParsedJsonBodyInOpaInput;
    }
    if (this._includeRouteInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRouteInOpaInput = this._includeRouteInOpaInput;
    }
    if (this._includeServiceInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeServiceInOpaInput = this._includeServiceInOpaInput;
    }
    if (this._includeUriCapturesInOpaInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeUriCapturesInOpaInput = this._includeUriCapturesInOpaInput;
    }
    if (this._opaHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaHost = this._opaHost;
    }
    if (this._opaPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaPath = this._opaPath;
    }
    if (this._opaPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaPort = this._opaPort;
    }
    if (this._opaProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaProtocol = this._opaProtocol;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOpaConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeBodyInOpaInput = undefined;
      this._includeConsumerInOpaInput = undefined;
      this._includeParsedJsonBodyInOpaInput = undefined;
      this._includeRouteInOpaInput = undefined;
      this._includeServiceInOpaInput = undefined;
      this._includeUriCapturesInOpaInput = undefined;
      this._opaHost = undefined;
      this._opaPath = undefined;
      this._opaPort = undefined;
      this._opaProtocol = undefined;
      this._sslVerify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeBodyInOpaInput = value.includeBodyInOpaInput;
      this._includeConsumerInOpaInput = value.includeConsumerInOpaInput;
      this._includeParsedJsonBodyInOpaInput = value.includeParsedJsonBodyInOpaInput;
      this._includeRouteInOpaInput = value.includeRouteInOpaInput;
      this._includeServiceInOpaInput = value.includeServiceInOpaInput;
      this._includeUriCapturesInOpaInput = value.includeUriCapturesInOpaInput;
      this._opaHost = value.opaHost;
      this._opaPath = value.opaPath;
      this._opaPort = value.opaPort;
      this._opaProtocol = value.opaProtocol;
      this._sslVerify = value.sslVerify;
    }
  }

  // include_body_in_opa_input - computed: true, optional: true, required: false
  private _includeBodyInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeBodyInOpaInput() {
    return this.getBooleanAttribute('include_body_in_opa_input');
  }
  public set includeBodyInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeBodyInOpaInput = value;
  }
  public resetIncludeBodyInOpaInput() {
    this._includeBodyInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBodyInOpaInputInput() {
    return this._includeBodyInOpaInput;
  }

  // include_consumer_in_opa_input - computed: true, optional: true, required: false
  private _includeConsumerInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeConsumerInOpaInput() {
    return this.getBooleanAttribute('include_consumer_in_opa_input');
  }
  public set includeConsumerInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeConsumerInOpaInput = value;
  }
  public resetIncludeConsumerInOpaInput() {
    this._includeConsumerInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeConsumerInOpaInputInput() {
    return this._includeConsumerInOpaInput;
  }

  // include_parsed_json_body_in_opa_input - computed: true, optional: true, required: false
  private _includeParsedJsonBodyInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeParsedJsonBodyInOpaInput() {
    return this.getBooleanAttribute('include_parsed_json_body_in_opa_input');
  }
  public set includeParsedJsonBodyInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeParsedJsonBodyInOpaInput = value;
  }
  public resetIncludeParsedJsonBodyInOpaInput() {
    this._includeParsedJsonBodyInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeParsedJsonBodyInOpaInputInput() {
    return this._includeParsedJsonBodyInOpaInput;
  }

  // include_route_in_opa_input - computed: true, optional: true, required: false
  private _includeRouteInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeRouteInOpaInput() {
    return this.getBooleanAttribute('include_route_in_opa_input');
  }
  public set includeRouteInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeRouteInOpaInput = value;
  }
  public resetIncludeRouteInOpaInput() {
    this._includeRouteInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRouteInOpaInputInput() {
    return this._includeRouteInOpaInput;
  }

  // include_service_in_opa_input - computed: true, optional: true, required: false
  private _includeServiceInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeServiceInOpaInput() {
    return this.getBooleanAttribute('include_service_in_opa_input');
  }
  public set includeServiceInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeServiceInOpaInput = value;
  }
  public resetIncludeServiceInOpaInput() {
    this._includeServiceInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeServiceInOpaInputInput() {
    return this._includeServiceInOpaInput;
  }

  // include_uri_captures_in_opa_input - computed: true, optional: true, required: false
  private _includeUriCapturesInOpaInput?: boolean | cdktf.IResolvable; 
  public get includeUriCapturesInOpaInput() {
    return this.getBooleanAttribute('include_uri_captures_in_opa_input');
  }
  public set includeUriCapturesInOpaInput(value: boolean | cdktf.IResolvable) {
    this._includeUriCapturesInOpaInput = value;
  }
  public resetIncludeUriCapturesInOpaInput() {
    this._includeUriCapturesInOpaInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeUriCapturesInOpaInputInput() {
    return this._includeUriCapturesInOpaInput;
  }

  // opa_host - computed: true, optional: true, required: false
  private _opaHost?: string; 
  public get opaHost() {
    return this.getStringAttribute('opa_host');
  }
  public set opaHost(value: string) {
    this._opaHost = value;
  }
  public resetOpaHost() {
    this._opaHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaHostInput() {
    return this._opaHost;
  }

  // opa_path - computed: false, optional: false, required: true
  private _opaPath?: string; 
  public get opaPath() {
    return this.getStringAttribute('opa_path');
  }
  public set opaPath(value: string) {
    this._opaPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opaPathInput() {
    return this._opaPath;
  }

  // opa_port - computed: true, optional: true, required: false
  private _opaPort?: number; 
  public get opaPort() {
    return this.getNumberAttribute('opa_port');
  }
  public set opaPort(value: number) {
    this._opaPort = value;
  }
  public resetOpaPort() {
    this._opaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaPortInput() {
    return this._opaPort;
  }

  // opa_protocol - computed: true, optional: true, required: false
  private _opaProtocol?: string; 
  public get opaProtocol() {
    return this.getStringAttribute('opa_protocol');
  }
  public set opaProtocol(value: string) {
    this._opaProtocol = value;
  }
  public resetOpaProtocol() {
    this._opaProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaProtocolInput() {
    return this._opaProtocol;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }
}
export interface GatewayPluginOpaOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#access GatewayPluginOpa#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpaOrderingAfterToTerraform(struct?: GatewayPluginOpaOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpaOrderingAfterToHclTerraform(struct?: GatewayPluginOpaOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginOpaOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpaOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#access GatewayPluginOpa#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOpaOrderingBeforeToTerraform(struct?: GatewayPluginOpaOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOpaOrderingBeforeToHclTerraform(struct?: GatewayPluginOpaOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginOpaOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpaOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#after GatewayPluginOpa#after}
  */
  readonly after?: GatewayPluginOpaOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#before GatewayPluginOpa#before}
  */
  readonly before?: GatewayPluginOpaOrderingBefore;
}

export function gatewayPluginOpaOrderingToTerraform(struct?: GatewayPluginOpaOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginOpaOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginOpaOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginOpaOrderingToHclTerraform(struct?: GatewayPluginOpaOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginOpaOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpaOrderingAfter",
    },
    before: {
      value: gatewayPluginOpaOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOpaOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOpaOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginOpaOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginOpaOrderingAfter) {
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
  private _before = new GatewayPluginOpaOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginOpaOrderingBefore) {
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
export interface GatewayPluginOpaPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#id GatewayPluginOpa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#name GatewayPluginOpa#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#path GatewayPluginOpa#path}
  */
  readonly path?: string;
}

export function gatewayPluginOpaPartialsToTerraform(struct?: GatewayPluginOpaPartials | cdktf.IResolvable): any {
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


export function gatewayPluginOpaPartialsToHclTerraform(struct?: GatewayPluginOpaPartials | cdktf.IResolvable): any {
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

export class GatewayPluginOpaPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOpaPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginOpaPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOpaPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOpaPartialsOutputReference {
    return new GatewayPluginOpaPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOpaRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#id GatewayPluginOpa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpaRouteToTerraform(struct?: GatewayPluginOpaRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpaRouteToHclTerraform(struct?: GatewayPluginOpaRoute | cdktf.IResolvable): any {
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

export class GatewayPluginOpaRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOpaService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#id GatewayPluginOpa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOpaServiceToTerraform(struct?: GatewayPluginOpaService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOpaServiceToHclTerraform(struct?: GatewayPluginOpaService | cdktf.IResolvable): any {
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

export class GatewayPluginOpaServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOpaService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOpaService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa konnect_gateway_plugin_opa}
*/
export class GatewayPluginOpa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_opa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginOpa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginOpa to import
  * @param importFromId The id of the existing GatewayPluginOpa that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginOpa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_opa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_opa konnect_gateway_plugin_opa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginOpaConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginOpaConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_opa',
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginOpaConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginOpaConfigA) {
    this._config.internalValue = value;
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
  private _ordering = new GatewayPluginOpaOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginOpaOrdering) {
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
  private _partials = new GatewayPluginOpaPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginOpaPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginOpaRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginOpaRoute) {
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
  private _service = new GatewayPluginOpaServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginOpaService) {
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
      config: gatewayPluginOpaConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginOpaOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginOpaPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginOpaRouteToTerraform(this._route.internalValue),
      service: gatewayPluginOpaServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginOpaConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpaConfigA",
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
        value: gatewayPluginOpaOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpaOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginOpaPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginOpaPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginOpaRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpaRoute",
      },
      service: {
        value: gatewayPluginOpaServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOpaService",
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
