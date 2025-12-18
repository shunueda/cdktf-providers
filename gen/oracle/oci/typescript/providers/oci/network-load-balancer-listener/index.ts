// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkLoadBalancerListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#default_backend_set_name NetworkLoadBalancerListener#default_backend_set_name}
  */
  readonly defaultBackendSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#id NetworkLoadBalancerListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#ip_version NetworkLoadBalancerListener#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#is_ppv2enabled NetworkLoadBalancerListener#is_ppv2enabled}
  */
  readonly isPpv2Enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#l3ip_idle_timeout NetworkLoadBalancerListener#l3ip_idle_timeout}
  */
  readonly l3IpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#name NetworkLoadBalancerListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#network_load_balancer_id NetworkLoadBalancerListener#network_load_balancer_id}
  */
  readonly networkLoadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#port NetworkLoadBalancerListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#protocol NetworkLoadBalancerListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#tcp_idle_timeout NetworkLoadBalancerListener#tcp_idle_timeout}
  */
  readonly tcpIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#udp_idle_timeout NetworkLoadBalancerListener#udp_idle_timeout}
  */
  readonly udpIdleTimeout?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#timeouts NetworkLoadBalancerListener#timeouts}
  */
  readonly timeouts?: NetworkLoadBalancerListenerTimeouts;
}
export interface NetworkLoadBalancerListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#create NetworkLoadBalancerListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#delete NetworkLoadBalancerListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#update NetworkLoadBalancerListener#update}
  */
  readonly update?: string;
}

export function networkLoadBalancerListenerTimeoutsToTerraform(struct?: NetworkLoadBalancerListenerTimeouts | cdktf.IResolvable): any {
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


export function networkLoadBalancerListenerTimeoutsToHclTerraform(struct?: NetworkLoadBalancerListenerTimeouts | cdktf.IResolvable): any {
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

export class NetworkLoadBalancerListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkLoadBalancerListenerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkLoadBalancerListenerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener oci_network_load_balancer_listener}
*/
export class NetworkLoadBalancerListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_network_load_balancer_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkLoadBalancerListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkLoadBalancerListener to import
  * @param importFromId The id of the existing NetworkLoadBalancerListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkLoadBalancerListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_network_load_balancer_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/network_load_balancer_listener oci_network_load_balancer_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkLoadBalancerListenerConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkLoadBalancerListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_network_load_balancer_listener',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultBackendSetName = config.defaultBackendSetName;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._isPpv2Enabled = config.isPpv2Enabled;
    this._l3IpIdleTimeout = config.l3IpIdleTimeout;
    this._name = config.name;
    this._networkLoadBalancerId = config.networkLoadBalancerId;
    this._port = config.port;
    this._protocol = config.protocol;
    this._tcpIdleTimeout = config.tcpIdleTimeout;
    this._udpIdleTimeout = config.udpIdleTimeout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_backend_set_name - computed: false, optional: false, required: true
  private _defaultBackendSetName?: string; 
  public get defaultBackendSetName() {
    return this.getStringAttribute('default_backend_set_name');
  }
  public set defaultBackendSetName(value: string) {
    this._defaultBackendSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBackendSetNameInput() {
    return this._defaultBackendSetName;
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

  // ip_version - computed: true, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // is_ppv2enabled - computed: true, optional: true, required: false
  private _isPpv2Enabled?: boolean | cdktf.IResolvable; 
  public get isPpv2Enabled() {
    return this.getBooleanAttribute('is_ppv2enabled');
  }
  public set isPpv2Enabled(value: boolean | cdktf.IResolvable) {
    this._isPpv2Enabled = value;
  }
  public resetIsPpv2Enabled() {
    this._isPpv2Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPpv2EnabledInput() {
    return this._isPpv2Enabled;
  }

  // l3ip_idle_timeout - computed: true, optional: true, required: false
  private _l3IpIdleTimeout?: number; 
  public get l3IpIdleTimeout() {
    return this.getNumberAttribute('l3ip_idle_timeout');
  }
  public set l3IpIdleTimeout(value: number) {
    this._l3IpIdleTimeout = value;
  }
  public resetL3IpIdleTimeout() {
    this._l3IpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3IpIdleTimeoutInput() {
    return this._l3IpIdleTimeout;
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

  // network_load_balancer_id - computed: false, optional: false, required: true
  private _networkLoadBalancerId?: string; 
  public get networkLoadBalancerId() {
    return this.getStringAttribute('network_load_balancer_id');
  }
  public set networkLoadBalancerId(value: string) {
    this._networkLoadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkLoadBalancerIdInput() {
    return this._networkLoadBalancerId;
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

  // tcp_idle_timeout - computed: true, optional: true, required: false
  private _tcpIdleTimeout?: number; 
  public get tcpIdleTimeout() {
    return this.getNumberAttribute('tcp_idle_timeout');
  }
  public set tcpIdleTimeout(value: number) {
    this._tcpIdleTimeout = value;
  }
  public resetTcpIdleTimeout() {
    this._tcpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpIdleTimeoutInput() {
    return this._tcpIdleTimeout;
  }

  // udp_idle_timeout - computed: true, optional: true, required: false
  private _udpIdleTimeout?: number; 
  public get udpIdleTimeout() {
    return this.getNumberAttribute('udp_idle_timeout');
  }
  public set udpIdleTimeout(value: number) {
    this._udpIdleTimeout = value;
  }
  public resetUdpIdleTimeout() {
    this._udpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutInput() {
    return this._udpIdleTimeout;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkLoadBalancerListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkLoadBalancerListenerTimeouts) {
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
      default_backend_set_name: cdktf.stringToTerraform(this._defaultBackendSetName),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      is_ppv2enabled: cdktf.booleanToTerraform(this._isPpv2Enabled),
      l3ip_idle_timeout: cdktf.numberToTerraform(this._l3IpIdleTimeout),
      name: cdktf.stringToTerraform(this._name),
      network_load_balancer_id: cdktf.stringToTerraform(this._networkLoadBalancerId),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      tcp_idle_timeout: cdktf.numberToTerraform(this._tcpIdleTimeout),
      udp_idle_timeout: cdktf.numberToTerraform(this._udpIdleTimeout),
      timeouts: networkLoadBalancerListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_backend_set_name: {
        value: cdktf.stringToHclTerraform(this._defaultBackendSetName),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ppv2enabled: {
        value: cdktf.booleanToHclTerraform(this._isPpv2Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l3ip_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._l3IpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._networkLoadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._udpIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: networkLoadBalancerListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkLoadBalancerListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
