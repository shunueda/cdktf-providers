// https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#hosts Route#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#https_redirect_status_code Route#https_redirect_status_code}
  */
  readonly httpsRedirectStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#id Route#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#methods Route#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#name Route#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#path_handling Route#path_handling}
  */
  readonly pathHandling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#paths Route#paths}
  */
  readonly paths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#preserve_host Route#preserve_host}
  */
  readonly preserveHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#protocols Route#protocols}
  */
  readonly protocols: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#regex_priority Route#regex_priority}
  */
  readonly regexPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#request_buffering Route#request_buffering}
  */
  readonly requestBuffering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#response_buffering Route#response_buffering}
  */
  readonly responseBuffering?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#service_id Route#service_id}
  */
  readonly serviceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#snis Route#snis}
  */
  readonly snis?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#strip_path Route#strip_path}
  */
  readonly stripPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#tags Route#tags}
  */
  readonly tags?: string[];
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#destination Route#destination}
  */
  readonly destination?: RouteDestination[] | cdktf.IResolvable;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#header Route#header}
  */
  readonly header?: RouteHeader[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#source Route#source}
  */
  readonly source?: RouteSource[] | cdktf.IResolvable;
}
export interface RouteDestination {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#ip Route#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#port Route#port}
  */
  readonly port?: number;
}

export function routeDestinationToTerraform(struct?: RouteDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function routeDestinationToHclTerraform(struct?: RouteDestination | cdktf.IResolvable): any {
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

export class RouteDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteDestination | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouteDestination | cdktf.IResolvable | undefined) {
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

export class RouteDestinationList extends cdktf.ComplexList {
  public internalValue? : RouteDestination[] | cdktf.IResolvable

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
  public get(index: number): RouteDestinationOutputReference {
    return new RouteDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteHeader {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#name Route#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#values Route#values}
  */
  readonly values: string[];
}

export function routeHeaderToTerraform(struct?: RouteHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function routeHeaderToHclTerraform(struct?: RouteHeader | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouteHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouteHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._values = value.values;
    }
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class RouteHeaderList extends cdktf.ComplexList {
  public internalValue? : RouteHeader[] | cdktf.IResolvable

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
  public get(index: number): RouteHeaderOutputReference {
    return new RouteHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouteSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#ip Route#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#port Route#port}
  */
  readonly port?: number;
}

export function routeSourceToTerraform(struct?: RouteSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function routeSourceToHclTerraform(struct?: RouteSource | cdktf.IResolvable): any {
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

export class RouteSourceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouteSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RouteSource | cdktf.IResolvable | undefined) {
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

export class RouteSourceList extends cdktf.ComplexList {
  public internalValue? : RouteSource[] | cdktf.IResolvable

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
  public get(index: number): RouteSourceOutputReference {
    return new RouteSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route kong_route}
*/
export class Route extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route to import
  * @param importFromId The id of the existing Route that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-labs/kong/6.630.0/docs/resources/route kong_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouteConfig
  */
  public constructor(scope: Construct, id: string, config: RouteConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_route',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '6.630.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
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
    this._serviceId = config.serviceId;
    this._snis = config.snis;
    this._stripPath = config.stripPath;
    this._tags = config.tags;
    this._destination.internalValue = config.destination;
    this._header.internalValue = config.header;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // https_redirect_status_code - computed: false, optional: true, required: false
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

  // path_handling - computed: false, optional: true, required: false
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

  // preserve_host - computed: false, optional: true, required: false
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

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // regex_priority - computed: false, optional: true, required: false
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

  // request_buffering - computed: false, optional: true, required: false
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

  // response_buffering - computed: false, optional: true, required: false
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

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
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

  // strip_path - computed: false, optional: true, required: false
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

  // destination - computed: false, optional: true, required: false
  private _destination = new RouteDestinationList(this, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: RouteDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new RouteHeaderList(this, "header", true);
  public get header() {
    return this._header;
  }
  public putHeader(value: RouteHeader[] | cdktf.IResolvable) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new RouteSourceList(this, "source", true);
  public get source() {
    return this._source;
  }
  public putSource(value: RouteSource[] | cdktf.IResolvable) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
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
      service_id: cdktf.stringToTerraform(this._serviceId),
      snis: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snis),
      strip_path: cdktf.booleanToTerraform(this._stripPath),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      destination: cdktf.listMapper(routeDestinationToTerraform, true)(this._destination.internalValue),
      header: cdktf.listMapper(routeHeaderToTerraform, true)(this._header.internalValue),
      source: cdktf.listMapper(routeSourceToTerraform, true)(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snis: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snis),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      destination: {
        value: cdktf.listMapperHcl(routeDestinationToHclTerraform, true)(this._destination.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouteDestinationList",
      },
      header: {
        value: cdktf.listMapperHcl(routeHeaderToHclTerraform, true)(this._header.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouteHeaderList",
      },
      source: {
        value: cdktf.listMapperHcl(routeSourceToHclTerraform, true)(this._source.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RouteSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
