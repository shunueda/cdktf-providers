// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ElbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#backend_port ElbListener#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#backend_protocol ElbListener#backend_protocol}
  */
  readonly backendProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#certificate_id ElbListener#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#cookie_timeout ElbListener#cookie_timeout}
  */
  readonly cookieTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#description ElbListener#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#id ElbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#lb_algorithm ElbListener#lb_algorithm}
  */
  readonly lbAlgorithm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#loadbalancer_id ElbListener#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#name ElbListener#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#protocol ElbListener#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#protocol_port ElbListener#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#region ElbListener#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#session_sticky ElbListener#session_sticky}
  */
  readonly sessionSticky?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#session_sticky_type ElbListener#session_sticky_type}
  */
  readonly sessionStickyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#ssl_ciphers ElbListener#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#ssl_protocols ElbListener#ssl_protocols}
  */
  readonly sslProtocols?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#tcp_draining ElbListener#tcp_draining}
  */
  readonly tcpDraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#tcp_draining_timeout ElbListener#tcp_draining_timeout}
  */
  readonly tcpDrainingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#tcp_timeout ElbListener#tcp_timeout}
  */
  readonly tcpTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#udp_timeout ElbListener#udp_timeout}
  */
  readonly udpTimeout?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#timeouts ElbListener#timeouts}
  */
  readonly timeouts?: ElbListenerTimeouts;
}
export interface ElbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#create ElbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#delete ElbListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#update ElbListener#update}
  */
  readonly update?: string;
}

export function elbListenerTimeoutsToTerraform(struct?: ElbListenerTimeouts | cdktf.IResolvable): any {
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


export function elbListenerTimeoutsToHclTerraform(struct?: ElbListenerTimeouts | cdktf.IResolvable): any {
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

export class ElbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ElbListenerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ElbListenerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener flexibleengine_elb_listener}
*/
export class ElbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_elb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ElbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ElbListener to import
  * @param importFromId The id of the existing ElbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ElbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_elb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/elb_listener flexibleengine_elb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ElbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: ElbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_elb_listener',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendPort = config.backendPort;
    this._backendProtocol = config.backendProtocol;
    this._certificateId = config.certificateId;
    this._cookieTimeout = config.cookieTimeout;
    this._description = config.description;
    this._id = config.id;
    this._lbAlgorithm = config.lbAlgorithm;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._sessionSticky = config.sessionSticky;
    this._sessionStickyType = config.sessionStickyType;
    this._sslCiphers = config.sslCiphers;
    this._sslProtocols = config.sslProtocols;
    this._tcpDraining = config.tcpDraining;
    this._tcpDrainingTimeout = config.tcpDrainingTimeout;
    this._tcpTimeout = config.tcpTimeout;
    this._udpTimeout = config.udpTimeout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_port - computed: false, optional: false, required: true
  private _backendPort?: number; 
  public get backendPort() {
    return this.getNumberAttribute('backend_port');
  }
  public set backendPort(value: number) {
    this._backendPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendPortInput() {
    return this._backendPort;
  }

  // backend_protocol - computed: false, optional: false, required: true
  private _backendProtocol?: string; 
  public get backendProtocol() {
    return this.getStringAttribute('backend_protocol');
  }
  public set backendProtocol(value: string) {
    this._backendProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendProtocolInput() {
    return this._backendProtocol;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // cookie_timeout - computed: true, optional: true, required: false
  private _cookieTimeout?: number; 
  public get cookieTimeout() {
    return this.getNumberAttribute('cookie_timeout');
  }
  public set cookieTimeout(value: number) {
    this._cookieTimeout = value;
  }
  public resetCookieTimeout() {
    this._cookieTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieTimeoutInput() {
    return this._cookieTimeout;
  }

  // description - computed: false, optional: true, required: false
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

  // lb_algorithm - computed: false, optional: false, required: true
  private _lbAlgorithm?: string; 
  public get lbAlgorithm() {
    return this.getStringAttribute('lb_algorithm');
  }
  public set lbAlgorithm(value: string) {
    this._lbAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbAlgorithmInput() {
    return this._lbAlgorithm;
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
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

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // session_sticky - computed: false, optional: true, required: false
  private _sessionSticky?: boolean | cdktf.IResolvable; 
  public get sessionSticky() {
    return this.getBooleanAttribute('session_sticky');
  }
  public set sessionSticky(value: boolean | cdktf.IResolvable) {
    this._sessionSticky = value;
  }
  public resetSessionSticky() {
    this._sessionSticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickyInput() {
    return this._sessionSticky;
  }

  // session_sticky_type - computed: false, optional: true, required: false
  private _sessionStickyType?: string; 
  public get sessionStickyType() {
    return this.getStringAttribute('session_sticky_type');
  }
  public set sessionStickyType(value: string) {
    this._sessionStickyType = value;
  }
  public resetSessionStickyType() {
    this._sessionStickyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStickyTypeInput() {
    return this._sessionStickyType;
  }

  // ssl_ciphers - computed: true, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_protocols - computed: true, optional: true, required: false
  private _sslProtocols?: string; 
  public get sslProtocols() {
    return this.getStringAttribute('ssl_protocols');
  }
  public set sslProtocols(value: string) {
    this._sslProtocols = value;
  }
  public resetSslProtocols() {
    this._sslProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolsInput() {
    return this._sslProtocols;
  }

  // tcp_draining - computed: false, optional: true, required: false
  private _tcpDraining?: boolean | cdktf.IResolvable; 
  public get tcpDraining() {
    return this.getBooleanAttribute('tcp_draining');
  }
  public set tcpDraining(value: boolean | cdktf.IResolvable) {
    this._tcpDraining = value;
  }
  public resetTcpDraining() {
    this._tcpDraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDrainingInput() {
    return this._tcpDraining;
  }

  // tcp_draining_timeout - computed: false, optional: true, required: false
  private _tcpDrainingTimeout?: number; 
  public get tcpDrainingTimeout() {
    return this.getNumberAttribute('tcp_draining_timeout');
  }
  public set tcpDrainingTimeout(value: number) {
    this._tcpDrainingTimeout = value;
  }
  public resetTcpDrainingTimeout() {
    this._tcpDrainingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDrainingTimeoutInput() {
    return this._tcpDrainingTimeout;
  }

  // tcp_timeout - computed: true, optional: true, required: false
  private _tcpTimeout?: number; 
  public get tcpTimeout() {
    return this.getNumberAttribute('tcp_timeout');
  }
  public set tcpTimeout(value: number) {
    this._tcpTimeout = value;
  }
  public resetTcpTimeout() {
    this._tcpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeoutInput() {
    return this._tcpTimeout;
  }

  // udp_timeout - computed: false, optional: true, required: false
  private _udpTimeout?: number; 
  public get udpTimeout() {
    return this.getNumberAttribute('udp_timeout');
  }
  public set udpTimeout(value: number) {
    this._udpTimeout = value;
  }
  public resetUdpTimeout() {
    this._udpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTimeoutInput() {
    return this._udpTimeout;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ElbListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ElbListenerTimeouts) {
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
      backend_port: cdktf.numberToTerraform(this._backendPort),
      backend_protocol: cdktf.stringToTerraform(this._backendProtocol),
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      cookie_timeout: cdktf.numberToTerraform(this._cookieTimeout),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lb_algorithm: cdktf.stringToTerraform(this._lbAlgorithm),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      session_sticky: cdktf.booleanToTerraform(this._sessionSticky),
      session_sticky_type: cdktf.stringToTerraform(this._sessionStickyType),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      ssl_protocols: cdktf.stringToTerraform(this._sslProtocols),
      tcp_draining: cdktf.booleanToTerraform(this._tcpDraining),
      tcp_draining_timeout: cdktf.numberToTerraform(this._tcpDrainingTimeout),
      tcp_timeout: cdktf.numberToTerraform(this._tcpTimeout),
      udp_timeout: cdktf.numberToTerraform(this._udpTimeout),
      timeouts: elbListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_port: {
        value: cdktf.numberToHclTerraform(this._backendPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend_protocol: {
        value: cdktf.stringToHclTerraform(this._backendProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_timeout: {
        value: cdktf.numberToHclTerraform(this._cookieTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      lb_algorithm: {
        value: cdktf.stringToHclTerraform(this._lbAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_port: {
        value: cdktf.numberToHclTerraform(this._protocolPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_sticky: {
        value: cdktf.booleanToHclTerraform(this._sessionSticky),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      session_sticky_type: {
        value: cdktf.stringToHclTerraform(this._sessionStickyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocols: {
        value: cdktf.stringToHclTerraform(this._sslProtocols),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_draining: {
        value: cdktf.booleanToHclTerraform(this._tcpDraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_draining_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpDrainingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_timeout: {
        value: cdktf.numberToHclTerraform(this._tcpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_timeout: {
        value: cdktf.numberToHclTerraform(this._udpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: elbListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ElbListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
