// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseCngwRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * destination port for Layer 4 matching.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#destination_ports TseCngwRoute#destination_ports}
  */
  readonly destinationPorts?: number[];
  /**
  * whether to enable forced HTTPS, no longer use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#force_https TseCngwRoute#force_https}
  */
  readonly forceHttps?: boolean | cdktf.IResolvable;
  /**
  * gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#gateway_id TseCngwRoute#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * host list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#hosts TseCngwRoute#hosts}
  */
  readonly hosts?: string[];
  /**
  * https redirection status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#https_redirect_status_code TseCngwRoute#https_redirect_status_code}
  */
  readonly httpsRedirectStatusCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#id TseCngwRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * route methods. Reference value:`GET`,`POST`,`DELETE`,`PUT`,`OPTIONS`,`PATCH`,`HEAD`,`ANY`,`TRACE`,`COPY`,`MOVE`,`PROPFIND`,`PROPPATCH`,`MKCOL`,`LOCK`,`UNLOCK`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#methods TseCngwRoute#methods}
  */
  readonly methods?: string[];
  /**
  * path list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#paths TseCngwRoute#paths}
  */
  readonly paths?: string[];
  /**
  * whether to keep the host when forwarding to the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#preserve_host TseCngwRoute#preserve_host}
  */
  readonly preserveHost?: boolean | cdktf.IResolvable;
  /**
  * the protocol list of route.Reference value:`https`,`http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#protocols TseCngwRoute#protocols}
  */
  readonly protocols?: string[];
  /**
  * the name of the route, unique in the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#route_name TseCngwRoute#route_name}
  */
  readonly routeName?: string;
  /**
  * ID of the service which the route belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#service_id TseCngwRoute#service_id}
  */
  readonly serviceId: string;
  /**
  * whether to strip path when forwarding to the backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#strip_path TseCngwRoute#strip_path}
  */
  readonly stripPath?: boolean | cdktf.IResolvable;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#headers TseCngwRoute#headers}
  */
  readonly headers?: TseCngwRouteHeaders[] | cdktf.IResolvable;
}
export interface TseCngwRouteHeaders {
  /**
  * key of header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#key TseCngwRoute#key}
  */
  readonly key?: string;
  /**
  * value of header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#value TseCngwRoute#value}
  */
  readonly value?: string;
}

export function tseCngwRouteHeadersToTerraform(struct?: TseCngwRouteHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function tseCngwRouteHeadersToHclTerraform(struct?: TseCngwRouteHeaders | cdktf.IResolvable): any {
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

export class TseCngwRouteHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TseCngwRouteHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: TseCngwRouteHeaders | cdktf.IResolvable | undefined) {
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

  // key - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class TseCngwRouteHeadersList extends cdktf.ComplexList {
  public internalValue? : TseCngwRouteHeaders[] | cdktf.IResolvable

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
  public get(index: number): TseCngwRouteHeadersOutputReference {
    return new TseCngwRouteHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route tencentcloud_tse_cngw_route}
*/
export class TseCngwRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_cngw_route";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseCngwRoute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseCngwRoute to import
  * @param importFromId The id of the existing TseCngwRoute that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseCngwRoute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_cngw_route", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/tse_cngw_route tencentcloud_tse_cngw_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseCngwRouteConfig
  */
  public constructor(scope: Construct, id: string, config: TseCngwRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_cngw_route',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destinationPorts = config.destinationPorts;
    this._forceHttps = config.forceHttps;
    this._gatewayId = config.gatewayId;
    this._hosts = config.hosts;
    this._httpsRedirectStatusCode = config.httpsRedirectStatusCode;
    this._id = config.id;
    this._methods = config.methods;
    this._paths = config.paths;
    this._preserveHost = config.preserveHost;
    this._protocols = config.protocols;
    this._routeName = config.routeName;
    this._serviceId = config.serviceId;
    this._stripPath = config.stripPath;
    this._headers.internalValue = config.headers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: number[]; 
  public get destinationPorts() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('destination_ports')));
  }
  public set destinationPorts(value: number[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
  }

  // force_https - computed: false, optional: true, required: false
  private _forceHttps?: boolean | cdktf.IResolvable; 
  public get forceHttps() {
    return this.getBooleanAttribute('force_https');
  }
  public set forceHttps(value: boolean | cdktf.IResolvable) {
    this._forceHttps = value;
  }
  public resetForceHttps() {
    this._forceHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceHttpsInput() {
    return this._forceHttps;
  }

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
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
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
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

  // paths - computed: false, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return cdktf.Fn.tolist(this.getListAttribute('paths'));
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

  // protocols - computed: false, optional: true, required: false
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

  // route_id - computed: true, optional: false, required: false
  public get routeId() {
    return this.getStringAttribute('route_id');
  }

  // route_name - computed: false, optional: true, required: false
  private _routeName?: string; 
  public get routeName() {
    return this.getStringAttribute('route_name');
  }
  public set routeName(value: string) {
    this._routeName = value;
  }
  public resetRouteName() {
    this._routeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeNameInput() {
    return this._routeName;
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

  // headers - computed: false, optional: true, required: false
  private _headers = new TseCngwRouteHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: TseCngwRouteHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination_ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._destinationPorts),
      force_https: cdktf.booleanToTerraform(this._forceHttps),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      https_redirect_status_code: cdktf.numberToTerraform(this._httpsRedirectStatusCode),
      id: cdktf.stringToTerraform(this._id),
      methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methods),
      paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._paths),
      preserve_host: cdktf.booleanToTerraform(this._preserveHost),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route_name: cdktf.stringToTerraform(this._routeName),
      service_id: cdktf.stringToTerraform(this._serviceId),
      strip_path: cdktf.booleanToTerraform(this._stripPath),
      headers: cdktf.listMapper(tseCngwRouteHeadersToTerraform, true)(this._headers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination_ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._destinationPorts),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      force_https: {
        value: cdktf.booleanToHclTerraform(this._forceHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "set",
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
        type: "set",
        storageClassType: "stringList",
      },
      paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._paths),
        isBlock: false,
        type: "set",
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
        type: "set",
        storageClassType: "stringList",
      },
      route_name: {
        value: cdktf.stringToHclTerraform(this._routeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_path: {
        value: cdktf.booleanToHclTerraform(this._stripPath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.listMapperHcl(tseCngwRouteHeadersToHclTerraform, true)(this._headers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TseCngwRouteHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
