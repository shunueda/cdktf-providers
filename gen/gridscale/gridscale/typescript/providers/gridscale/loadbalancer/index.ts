// https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoadbalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The algorithm used to process requests. Accepted values: roundrobin/leastconn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#algorithm Loadbalancer#algorithm}
  */
  readonly algorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#id Loadbalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#labels Loadbalancer#labels}
  */
  readonly labels?: string[];
  /**
  * The UUID of the IPv4 address the Load balancer will listen to for incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#listen_ipv4_uuid Loadbalancer#listen_ipv4_uuid}
  */
  readonly listenIpv4Uuid: string;
  /**
  * The UUID of the IPv6 address the Load balancer will listen to for incoming requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#listen_ipv6_uuid Loadbalancer#listen_ipv6_uuid}
  */
  readonly listenIpv6Uuid: string;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#name Loadbalancer#name}
  */
  readonly name: string;
  /**
  * Whether the Load balancer is forced to redirect requests from HTTP to HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#redirect_http_to_https Loadbalancer#redirect_http_to_https}
  */
  readonly redirectHttpToHttps: boolean | cdktf.IResolvable;
  /**
  * Status indicates the status of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#status Loadbalancer#status}
  */
  readonly status?: string;
  /**
  * backend_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#backend_server Loadbalancer#backend_server}
  */
  readonly backendServer: LoadbalancerBackendServer[] | cdktf.IResolvable;
  /**
  * forwarding_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#forwarding_rule Loadbalancer#forwarding_rule}
  */
  readonly forwardingRule: LoadbalancerForwardingRule[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#timeouts Loadbalancer#timeouts}
  */
  readonly timeouts?: LoadbalancerTimeouts;
}
export interface LoadbalancerBackendServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#host Loadbalancer#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#proxy_protocol Loadbalancer#proxy_protocol}
  */
  readonly proxyProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#weight Loadbalancer#weight}
  */
  readonly weight?: number;
}

export function loadbalancerBackendServerToTerraform(struct?: LoadbalancerBackendServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    proxy_protocol: cdktf.stringToTerraform(struct!.proxyProtocol),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function loadbalancerBackendServerToHclTerraform(struct?: LoadbalancerBackendServer | cdktf.IResolvable): any {
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
    proxy_protocol: {
      value: cdktf.stringToHclTerraform(struct!.proxyProtocol),
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

export class LoadbalancerBackendServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerBackendServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._proxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocol = this._proxyProtocol;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerBackendServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._proxyProtocol = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._proxyProtocol = value.proxyProtocol;
      this._weight = value.weight;
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

  // proxy_protocol - computed: false, optional: true, required: false
  private _proxyProtocol?: string; 
  public get proxyProtocol() {
    return this.getStringAttribute('proxy_protocol');
  }
  public set proxyProtocol(value: string) {
    this._proxyProtocol = value;
  }
  public resetProxyProtocol() {
    this._proxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolInput() {
    return this._proxyProtocol;
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

export class LoadbalancerBackendServerList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerBackendServer[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerBackendServerOutputReference {
    return new LoadbalancerBackendServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerForwardingRule {
  /**
  * The UUID of a custom certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#certificate_uuid Loadbalancer#certificate_uuid}
  */
  readonly certificateUuid?: string;
  /**
  * A valid domain name that points to the loadbalancer's IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#letsencrypt_ssl Loadbalancer#letsencrypt_ssl}
  */
  readonly letsencryptSsl?: string;
  /**
  * Specifies the entry port of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#listen_port Loadbalancer#listen_port}
  */
  readonly listenPort: number;
  /**
  * Supports HTTP and TCP mode. Valid values: http, tcp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#mode Loadbalancer#mode}
  */
  readonly mode: string;
  /**
  * Specifies the exit port that the load balancer uses to forward the traffic to the backend server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#target_port Loadbalancer#target_port}
  */
  readonly targetPort: number;
}

export function loadbalancerForwardingRuleToTerraform(struct?: LoadbalancerForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_uuid: cdktf.stringToTerraform(struct!.certificateUuid),
    letsencrypt_ssl: cdktf.stringToTerraform(struct!.letsencryptSsl),
    listen_port: cdktf.numberToTerraform(struct!.listenPort),
    mode: cdktf.stringToTerraform(struct!.mode),
    target_port: cdktf.numberToTerraform(struct!.targetPort),
  }
}


export function loadbalancerForwardingRuleToHclTerraform(struct?: LoadbalancerForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_uuid: {
      value: cdktf.stringToHclTerraform(struct!.certificateUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    letsencrypt_ssl: {
      value: cdktf.stringToHclTerraform(struct!.letsencryptSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listen_port: {
      value: cdktf.numberToHclTerraform(struct!.listenPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_port: {
      value: cdktf.numberToHclTerraform(struct!.targetPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LoadbalancerForwardingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LoadbalancerForwardingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUuid = this._certificateUuid;
    }
    if (this._letsencryptSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.letsencryptSsl = this._letsencryptSsl;
    }
    if (this._listenPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenPort = this._listenPort;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._targetPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPort = this._targetPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LoadbalancerForwardingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUuid = undefined;
      this._letsencryptSsl = undefined;
      this._listenPort = undefined;
      this._mode = undefined;
      this._targetPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUuid = value.certificateUuid;
      this._letsencryptSsl = value.letsencryptSsl;
      this._listenPort = value.listenPort;
      this._mode = value.mode;
      this._targetPort = value.targetPort;
    }
  }

  // certificate_uuid - computed: false, optional: true, required: false
  private _certificateUuid?: string; 
  public get certificateUuid() {
    return this.getStringAttribute('certificate_uuid');
  }
  public set certificateUuid(value: string) {
    this._certificateUuid = value;
  }
  public resetCertificateUuid() {
    this._certificateUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUuidInput() {
    return this._certificateUuid;
  }

  // letsencrypt_ssl - computed: false, optional: true, required: false
  private _letsencryptSsl?: string; 
  public get letsencryptSsl() {
    return this.getStringAttribute('letsencrypt_ssl');
  }
  public set letsencryptSsl(value: string) {
    this._letsencryptSsl = value;
  }
  public resetLetsencryptSsl() {
    this._letsencryptSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get letsencryptSslInput() {
    return this._letsencryptSsl;
  }

  // listen_port - computed: false, optional: false, required: true
  private _listenPort?: number; 
  public get listenPort() {
    return this.getNumberAttribute('listen_port');
  }
  public set listenPort(value: number) {
    this._listenPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenPortInput() {
    return this._listenPort;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // target_port - computed: false, optional: false, required: true
  private _targetPort?: number; 
  public get targetPort() {
    return this.getNumberAttribute('target_port');
  }
  public set targetPort(value: number) {
    this._targetPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortInput() {
    return this._targetPort;
  }
}

export class LoadbalancerForwardingRuleList extends cdktf.ComplexList {
  public internalValue? : LoadbalancerForwardingRule[] | cdktf.IResolvable

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
  public get(index: number): LoadbalancerForwardingRuleOutputReference {
    return new LoadbalancerForwardingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LoadbalancerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#create Loadbalancer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#delete Loadbalancer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#update Loadbalancer#update}
  */
  readonly update?: string;
}

export function loadbalancerTimeoutsToTerraform(struct?: LoadbalancerTimeouts | cdktf.IResolvable): any {
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


export function loadbalancerTimeoutsToHclTerraform(struct?: LoadbalancerTimeouts | cdktf.IResolvable): any {
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

export class LoadbalancerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LoadbalancerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LoadbalancerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer gridscale_loadbalancer}
*/
export class Loadbalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_loadbalancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Loadbalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Loadbalancer to import
  * @param importFromId The id of the existing Loadbalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Loadbalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_loadbalancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.3.0/docs/resources/loadbalancer gridscale_loadbalancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoadbalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LoadbalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_loadbalancer',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._algorithm = config.algorithm;
    this._id = config.id;
    this._labels = config.labels;
    this._listenIpv4Uuid = config.listenIpv4Uuid;
    this._listenIpv6Uuid = config.listenIpv6Uuid;
    this._name = config.name;
    this._redirectHttpToHttps = config.redirectHttpToHttps;
    this._status = config.status;
    this._backendServer.internalValue = config.backendServer;
    this._forwardingRule.internalValue = config.forwardingRule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: false, optional: false, required: true
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_ipv4_uuid - computed: false, optional: false, required: true
  private _listenIpv4Uuid?: string; 
  public get listenIpv4Uuid() {
    return this.getStringAttribute('listen_ipv4_uuid');
  }
  public set listenIpv4Uuid(value: string) {
    this._listenIpv4Uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenIpv4UuidInput() {
    return this._listenIpv4Uuid;
  }

  // listen_ipv6_uuid - computed: false, optional: false, required: true
  private _listenIpv6Uuid?: string; 
  public get listenIpv6Uuid() {
    return this.getStringAttribute('listen_ipv6_uuid');
  }
  public set listenIpv6Uuid(value: string) {
    this._listenIpv6Uuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenIpv6UuidInput() {
    return this._listenIpv6Uuid;
  }

  // location_uuid - computed: true, optional: false, required: false
  public get locationUuid() {
    return this.getStringAttribute('location_uuid');
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

  // redirect_http_to_https - computed: false, optional: false, required: true
  private _redirectHttpToHttps?: boolean | cdktf.IResolvable; 
  public get redirectHttpToHttps() {
    return this.getBooleanAttribute('redirect_http_to_https');
  }
  public set redirectHttpToHttps(value: boolean | cdktf.IResolvable) {
    this._redirectHttpToHttps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHttpToHttpsInput() {
    return this._redirectHttpToHttps;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // backend_server - computed: false, optional: false, required: true
  private _backendServer = new LoadbalancerBackendServerList(this, "backend_server", true);
  public get backendServer() {
    return this._backendServer;
  }
  public putBackendServer(value: LoadbalancerBackendServer[] | cdktf.IResolvable) {
    this._backendServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServerInput() {
    return this._backendServer.internalValue;
  }

  // forwarding_rule - computed: false, optional: false, required: true
  private _forwardingRule = new LoadbalancerForwardingRuleList(this, "forwarding_rule", true);
  public get forwardingRule() {
    return this._forwardingRule;
  }
  public putForwardingRule(value: LoadbalancerForwardingRule[] | cdktf.IResolvable) {
    this._forwardingRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LoadbalancerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LoadbalancerTimeouts) {
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
      algorithm: cdktf.stringToTerraform(this._algorithm),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      listen_ipv4_uuid: cdktf.stringToTerraform(this._listenIpv4Uuid),
      listen_ipv6_uuid: cdktf.stringToTerraform(this._listenIpv6Uuid),
      name: cdktf.stringToTerraform(this._name),
      redirect_http_to_https: cdktf.booleanToTerraform(this._redirectHttpToHttps),
      status: cdktf.stringToTerraform(this._status),
      backend_server: cdktf.listMapper(loadbalancerBackendServerToTerraform, true)(this._backendServer.internalValue),
      forwarding_rule: cdktf.listMapper(loadbalancerForwardingRuleToTerraform, true)(this._forwardingRule.internalValue),
      timeouts: loadbalancerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      listen_ipv4_uuid: {
        value: cdktf.stringToHclTerraform(this._listenIpv4Uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_ipv6_uuid: {
        value: cdktf.stringToHclTerraform(this._listenIpv6Uuid),
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
      redirect_http_to_https: {
        value: cdktf.booleanToHclTerraform(this._redirectHttpToHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_server: {
        value: cdktf.listMapperHcl(loadbalancerBackendServerToHclTerraform, true)(this._backendServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerBackendServerList",
      },
      forwarding_rule: {
        value: cdktf.listMapperHcl(loadbalancerForwardingRuleToHclTerraform, true)(this._forwardingRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LoadbalancerForwardingRuleList",
      },
      timeouts: {
        value: loadbalancerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LoadbalancerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
