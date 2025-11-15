// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#control_plane_id GatewayRoute#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#created_at GatewayRoute#created_at}
  */
  readonly createdAt?: number;
  /**
  * A list of IP destinations of incoming connections that match this Route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#destinations GatewayRoute#destinations}
  */
  readonly destinations?: GatewayRouteDestinations[] | cdktf.IResolvable;
  /**
  * One or more lists of values indexed by header name that will cause this Route to match if present in the request. The `Host` header cannot be used with this attribute: hosts should be specified using the `hosts` attribute. When `headers` contains only one value and that value starts with the special prefix `~*`, the value is interpreted as a regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#headers GatewayRoute#headers}
  */
  readonly headers?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * A list of domain names that match this Route. Note that the hosts value is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#hosts GatewayRoute#hosts}
  */
  readonly hosts?: string[];
  /**
  * The status code Kong responds with when all properties of a Route match except the protocol i.e. if the protocol of the request is `HTTP` instead of `HTTPS`. `Location` header is injected by Kong if the field is set to 301, 302, 307 or 308. Note: This config applies only if the Route is configured to only accept the `https` protocol. Default: 426; must be one of ["301", "302", "307", "308", "426"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#https_redirect_status_code GatewayRoute#https_redirect_status_code}
  */
  readonly httpsRedirectStatusCode?: number;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#id GatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of HTTP methods that match this Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#methods GatewayRoute#methods}
  */
  readonly methods?: string[];
  /**
  * The name of the Route. Route names must be unique, and they are case sensitive. For example, there can be two different Routes named "test" and "Test".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#name GatewayRoute#name}
  */
  readonly name?: string;
  /**
  * Controls how the Service path, Route path and requested path are combined when sending a request to the upstream. See above for a detailed description of each behavior. Default: "v0"; must be one of ["v0", "v1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#path_handling GatewayRoute#path_handling}
  */
  readonly pathHandling?: string;
  /**
  * A list of paths that match this Route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#paths GatewayRoute#paths}
  */
  readonly paths?: string[];
  /**
  * When matching a Route via one of the `hosts` domain names, use the request `Host` header in the upstream request headers. If set to `false`, the upstream `Host` header will be that of the Service's `host`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#preserve_host GatewayRoute#preserve_host}
  */
  readonly preserveHost?: boolean | cdktf.IResolvable;
  /**
  * An array of the protocols this Route should allow. See the [Route Object](#route-object) section for a list of accepted protocols. When set to only `"https"`, HTTP requests are answered with an upgrade error. When set to only `"http"`, HTTPS requests are answered with an error. Default: ["http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#protocols GatewayRoute#protocols}
  */
  readonly protocols?: string[];
  /**
  * A number used to choose which route resolves a given request when several routes match it using regexes simultaneously. When two routes match the path and have the same `regex_priority`, the older one (lowest `created_at`) is used. Note that the priority for non-regex routes is different (longer non-regex routes are matched before shorter ones). Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#regex_priority GatewayRoute#regex_priority}
  */
  readonly regexPriority?: number;
  /**
  * Whether to enable request body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that receive data with chunked transfer encoding. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#request_buffering GatewayRoute#request_buffering}
  */
  readonly requestBuffering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable response body buffering or not. With HTTP 1.1, it may make sense to turn this off on services that send data with chunked transfer encoding. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#response_buffering GatewayRoute#response_buffering}
  */
  readonly responseBuffering?: boolean | cdktf.IResolvable;
  /**
  * The Service this Route is associated to. This is where the Route proxies traffic to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#service GatewayRoute#service}
  */
  readonly service?: GatewayRouteService;
  /**
  * A list of SNIs that match this Route when using stream routing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#snis GatewayRoute#snis}
  */
  readonly snis?: string[];
  /**
  * A list of IP sources of incoming connections that match this Route when using stream routing. Each entry is an object with fields "ip" (optionally in CIDR range notation) and/or "port".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#sources GatewayRoute#sources}
  */
  readonly sources?: GatewayRouteSources[] | cdktf.IResolvable;
  /**
  * When matching a Route via one of the `paths`, strip the matching prefix from the upstream request URL. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#strip_path GatewayRoute#strip_path}
  */
  readonly stripPath?: boolean | cdktf.IResolvable;
  /**
  * An optional set of strings associated with the Route for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#tags GatewayRoute#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#updated_at GatewayRoute#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayRouteDestinations {
  /**
  * A string representing an IP address or CIDR block, such as 192.168.1.1 or 192.168.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#ip GatewayRoute#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#port GatewayRoute#port}
  */
  readonly port?: number;
}

export function gatewayRouteDestinationsToTerraform(struct?: GatewayRouteDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayRouteDestinationsToHclTerraform(struct?: GatewayRouteDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayRouteDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayRouteDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayRouteDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: true, required: false
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
}

export class GatewayRouteDestinationsList extends cdktf.ComplexList {
  public internalValue? : GatewayRouteDestinations[] | cdktf.IResolvable

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
  public get(index: number): GatewayRouteDestinationsOutputReference {
    return new GatewayRouteDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayRouteService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#id GatewayRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayRouteServiceToTerraform(struct?: GatewayRouteService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayRouteServiceToHclTerraform(struct?: GatewayRouteService | cdktf.IResolvable): any {
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

export class GatewayRouteServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayRouteService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayRouteService | cdktf.IResolvable | undefined) {
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
export interface GatewayRouteSources {
  /**
  * A string representing an IP address or CIDR block, such as 192.168.1.1 or 192.168.0.0/16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#ip GatewayRoute#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#port GatewayRoute#port}
  */
  readonly port?: number;
}

export function gatewayRouteSourcesToTerraform(struct?: GatewayRouteSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayRouteSourcesToHclTerraform(struct?: GatewayRouteSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayRouteSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayRouteSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayRouteSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // port - computed: false, optional: true, required: false
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
}

export class GatewayRouteSourcesList extends cdktf.ComplexList {
  public internalValue? : GatewayRouteSources[] | cdktf.IResolvable

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
  public get(index: number): GatewayRouteSourcesOutputReference {
    return new GatewayRouteSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route konnect_gateway_route}
*/
export class GatewayRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayRoute to import
  * @param importFromId The id of the existing GatewayRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_route konnect_gateway_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayRouteConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_route',
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
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._destinations.internalValue = config.destinations;
    this._headers = config.headers;
    this._hosts = config.hosts;
    this._httpsRedirectStatusCode = config.httpsRedirectStatusCode;
    this._id = config.id;
    this._methods = config.methods;
    this._name = config.name;
    this._pathHandling = config.pathHandling;
    this._paths = config.paths;
    this._preserveHost = config.preserveHost;
    this._protocols = config.protocols;
    this._regexPriority = config.regexPriority;
    this._requestBuffering = config.requestBuffering;
    this._responseBuffering = config.responseBuffering;
    this._service.internalValue = config.service;
    this._snis = config.snis;
    this._sources.internalValue = config.sources;
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

  // destinations - computed: false, optional: true, required: false
  private _destinations = new GatewayRouteDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: GatewayRouteDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get headers() {
    return this.interpolationForAttribute('headers');
  }
  public set headers(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
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

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
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

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
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

  // regex_priority - computed: true, optional: true, required: false
  private _regexPriority?: number; 
  public get regexPriority() {
    return this.getNumberAttribute('regex_priority');
  }
  public set regexPriority(value: number) {
    this._regexPriority = value;
  }
  public resetRegexPriority() {
    this._regexPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexPriorityInput() {
    return this._regexPriority;
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
  private _service = new GatewayRouteServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayRouteService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // snis - computed: false, optional: true, required: false
  private _snis?: string[]; 
  public get snis() {
    return this.getListAttribute('snis');
  }
  public set snis(value: string[]) {
    this._snis = value;
  }
  public resetSnis() {
    this._snis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snisInput() {
    return this._snis;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new GatewayRouteSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: GatewayRouteSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
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
      destinations: cdktf.listMapper(gatewayRouteDestinationsToTerraform, false)(this._destinations.internalValue),
      headers: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(this._headers),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      https_redirect_status_code: cdktf.numberToTerraform(this._httpsRedirectStatusCode),
      id: cdktf.stringToTerraform(this._id),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      name: cdktf.stringToTerraform(this._name),
      path_handling: cdktf.stringToTerraform(this._pathHandling),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      preserve_host: cdktf.booleanToTerraform(this._preserveHost),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      regex_priority: cdktf.numberToTerraform(this._regexPriority),
      request_buffering: cdktf.booleanToTerraform(this._requestBuffering),
      response_buffering: cdktf.booleanToTerraform(this._responseBuffering),
      service: gatewayRouteServiceToTerraform(this._service.internalValue),
      snis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snis),
      sources: cdktf.listMapper(gatewayRouteSourcesToTerraform, false)(this._sources.internalValue),
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
      destinations: {
        value: cdktf.listMapperHcl(gatewayRouteDestinationsToHclTerraform, false)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayRouteDestinationsList",
      },
      headers: {
        value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringListMap",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._methods),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      preserve_host: {
        value: cdktf.booleanToHclTerraform(this._preserveHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      regex_priority: {
        value: cdktf.numberToHclTerraform(this._regexPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: gatewayRouteServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayRouteService",
      },
      snis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snis),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sources: {
        value: cdktf.listMapperHcl(gatewayRouteSourcesToHclTerraform, false)(this._sources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayRouteSourcesList",
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
