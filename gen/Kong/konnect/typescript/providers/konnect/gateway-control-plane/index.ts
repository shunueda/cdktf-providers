// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayControlPlaneConfig extends cdktf.TerraformMetaArguments {
  /**
  * The auth type value of the cluster associated with the Runtime Group. must be one of ["pinned_client_certs", "pki_client_certs"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#auth_type GatewayControlPlane#auth_type}
  */
  readonly authType?: string;
  /**
  * Whether this control-plane can be used for cloud-gateways. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#cloud_gateway GatewayControlPlane#cloud_gateway}
  */
  readonly cloudGateway?: boolean | cdktf.IResolvable;
  /**
  * The ClusterType value of the cluster associated with the Control Plane. must be one of ["CLUSTER_TYPE_CONTROL_PLANE", "CLUSTER_TYPE_K8S_INGRESS_CONTROLLER", "CLUSTER_TYPE_CONTROL_PLANE_GROUP", "CLUSTER_TYPE_SERVERLESS", "CLUSTER_TYPE_HYBRID"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#cluster_type GatewayControlPlane#cluster_type}
  */
  readonly clusterType?: string;
  /**
  * The description of the control plane in Konnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#description GatewayControlPlane#description}
  */
  readonly description?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#labels GatewayControlPlane#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the control plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#name GatewayControlPlane#name}
  */
  readonly name: string;
  /**
  * Array of proxy URLs associated with reaching the data-planes connected to a control-plane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#proxy_urls GatewayControlPlane#proxy_urls}
  */
  readonly proxyUrls?: GatewayControlPlaneProxyUrls[] | cdktf.IResolvable;
}
export interface GatewayControlPlaneConfigProxyUrls {
}

export function gatewayControlPlaneConfigProxyUrlsToTerraform(struct?: GatewayControlPlaneConfigProxyUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayControlPlaneConfigProxyUrlsToHclTerraform(struct?: GatewayControlPlaneConfigProxyUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayControlPlaneConfigProxyUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GatewayControlPlaneConfigProxyUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayControlPlaneConfigProxyUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
}

export class GatewayControlPlaneConfigProxyUrlsList extends cdktf.ComplexList {

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
  public get(index: number): GatewayControlPlaneConfigProxyUrlsOutputReference {
    return new GatewayControlPlaneConfigProxyUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayControlPlaneConfigA {
}

export function gatewayControlPlaneConfigAToTerraform(struct?: GatewayControlPlaneConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gatewayControlPlaneConfigAToHclTerraform(struct?: GatewayControlPlaneConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GatewayControlPlaneConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayControlPlaneConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayControlPlaneConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // cloud_gateway - computed: true, optional: false, required: false
  public get cloudGateway() {
    return this.getBooleanAttribute('cloud_gateway');
  }

  // cluster_type - computed: true, optional: false, required: false
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }

  // control_plane_endpoint - computed: true, optional: false, required: false
  public get controlPlaneEndpoint() {
    return this.getStringAttribute('control_plane_endpoint');
  }

  // proxy_urls - computed: true, optional: false, required: false
  private _proxyUrls = new GatewayControlPlaneConfigProxyUrlsList(this, "proxy_urls", true);
  public get proxyUrls() {
    return this._proxyUrls;
  }

  // telemetry_endpoint - computed: true, optional: false, required: false
  public get telemetryEndpoint() {
    return this.getStringAttribute('telemetry_endpoint');
  }
}
export interface GatewayControlPlaneProxyUrls {
  /**
  * Hostname of the proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#host GatewayControlPlane#host}
  */
  readonly host: string;
  /**
  * Port of the proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#port GatewayControlPlane#port}
  */
  readonly port: number;
  /**
  * Protocol of the proxy URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#protocol GatewayControlPlane#protocol}
  */
  readonly protocol: string;
}

export function gatewayControlPlaneProxyUrlsToTerraform(struct?: GatewayControlPlaneProxyUrls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function gatewayControlPlaneProxyUrlsToHclTerraform(struct?: GatewayControlPlaneProxyUrls | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayControlPlaneProxyUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayControlPlaneProxyUrls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayControlPlaneProxyUrls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class GatewayControlPlaneProxyUrlsList extends cdktf.ComplexList {
  public internalValue? : GatewayControlPlaneProxyUrls[] | cdktf.IResolvable

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
  public get(index: number): GatewayControlPlaneProxyUrlsOutputReference {
    return new GatewayControlPlaneProxyUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane konnect_gateway_control_plane}
*/
export class GatewayControlPlane extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_control_plane";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayControlPlane resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayControlPlane to import
  * @param importFromId The id of the existing GatewayControlPlane that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayControlPlane to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_control_plane", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_control_plane konnect_gateway_control_plane} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayControlPlaneConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayControlPlaneConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_control_plane',
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
    this._authType = config.authType;
    this._cloudGateway = config.cloudGateway;
    this._clusterType = config.clusterType;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._proxyUrls.internalValue = config.proxyUrls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // cloud_gateway - computed: false, optional: true, required: false
  private _cloudGateway?: boolean | cdktf.IResolvable; 
  public get cloudGateway() {
    return this.getBooleanAttribute('cloud_gateway');
  }
  public set cloudGateway(value: boolean | cdktf.IResolvable) {
    this._cloudGateway = value;
  }
  public resetCloudGateway() {
    this._cloudGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudGatewayInput() {
    return this._cloudGateway;
  }

  // cluster_type - computed: false, optional: true, required: false
  private _clusterType?: string; 
  public get clusterType() {
    return this.getStringAttribute('cluster_type');
  }
  public set clusterType(value: string) {
    this._clusterType = value;
  }
  public resetClusterType() {
    this._clusterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTypeInput() {
    return this._clusterType;
  }

  // config - computed: true, optional: false, required: false
  private _config = new GatewayControlPlaneConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // proxy_urls - computed: false, optional: true, required: false
  private _proxyUrls = new GatewayControlPlaneProxyUrlsList(this, "proxy_urls", true);
  public get proxyUrls() {
    return this._proxyUrls;
  }
  public putProxyUrls(value: GatewayControlPlaneProxyUrls[] | cdktf.IResolvable) {
    this._proxyUrls.internalValue = value;
  }
  public resetProxyUrls() {
    this._proxyUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlsInput() {
    return this._proxyUrls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      cloud_gateway: cdktf.booleanToTerraform(this._cloudGateway),
      cluster_type: cdktf.stringToTerraform(this._clusterType),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      proxy_urls: cdktf.listMapper(gatewayControlPlaneProxyUrlsToTerraform, false)(this._proxyUrls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_gateway: {
        value: cdktf.booleanToHclTerraform(this._cloudGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_type: {
        value: cdktf.stringToHclTerraform(this._clusterType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_urls: {
        value: cdktf.listMapperHcl(gatewayControlPlaneProxyUrlsToHclTerraform, false)(this._proxyUrls.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GatewayControlPlaneProxyUrlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
