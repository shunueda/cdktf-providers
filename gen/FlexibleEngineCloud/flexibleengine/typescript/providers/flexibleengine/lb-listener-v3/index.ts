// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#access_policy LbListenerV3#access_policy}
  */
  readonly accessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#advanced_forwarding_enabled LbListenerV3#advanced_forwarding_enabled}
  */
  readonly advancedForwardingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#ca_certificate LbListenerV3#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#description LbListenerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#force_delete LbListenerV3#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#forward_eip LbListenerV3#forward_eip}
  */
  readonly forwardEip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#forward_host LbListenerV3#forward_host}
  */
  readonly forwardHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#forward_port LbListenerV3#forward_port}
  */
  readonly forwardPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#forward_request_port LbListenerV3#forward_request_port}
  */
  readonly forwardRequestPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#id LbListenerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#idle_timeout LbListenerV3#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}
  */
  readonly ipGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#name LbListenerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#protection_reason LbListenerV3#protection_reason}
  */
  readonly protectionReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#protection_status LbListenerV3#protection_status}
  */
  readonly protectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#region LbListenerV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#request_timeout LbListenerV3#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#response_timeout LbListenerV3#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#server_certificate LbListenerV3#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#sni_certificate LbListenerV3#sni_certificate}
  */
  readonly sniCertificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#tags LbListenerV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#timeouts LbListenerV3#timeouts}
  */
  readonly timeouts?: LbListenerV3Timeouts;
}
export interface LbListenerV3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#create LbListenerV3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#delete LbListenerV3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#update LbListenerV3#update}
  */
  readonly update?: string;
}

export function lbListenerV3TimeoutsToTerraform(struct?: LbListenerV3Timeouts | cdktf.IResolvable): any {
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


export function lbListenerV3TimeoutsToHclTerraform(struct?: LbListenerV3Timeouts | cdktf.IResolvable): any {
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

export class LbListenerV3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LbListenerV3Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbListenerV3Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3 flexibleengine_lb_listener_v3}
*/
export class LbListenerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_lb_listener_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListenerV3 to import
  * @param importFromId The id of the existing LbListenerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListenerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_lb_listener_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/lb_listener_v3 flexibleengine_lb_listener_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV3Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV3Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_lb_listener_v3',
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
    this._accessPolicy = config.accessPolicy;
    this._advancedForwardingEnabled = config.advancedForwardingEnabled;
    this._caCertificate = config.caCertificate;
    this._defaultPoolId = config.defaultPoolId;
    this._description = config.description;
    this._forceDelete = config.forceDelete;
    this._forwardEip = config.forwardEip;
    this._forwardHost = config.forwardHost;
    this._forwardPort = config.forwardPort;
    this._forwardRequestPort = config.forwardRequestPort;
    this._http2Enable = config.http2Enable;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ipGroup = config.ipGroup;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._protectionReason = config.protectionReason;
    this._protectionStatus = config.protectionStatus;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._region = config.region;
    this._requestTimeout = config.requestTimeout;
    this._responseTimeout = config.responseTimeout;
    this._serverCertificate = config.serverCertificate;
    this._sniCertificate = config.sniCertificate;
    this._tags = config.tags;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: false, optional: true, required: false
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // advanced_forwarding_enabled - computed: true, optional: true, required: false
  private _advancedForwardingEnabled?: boolean | cdktf.IResolvable; 
  public get advancedForwardingEnabled() {
    return this.getBooleanAttribute('advanced_forwarding_enabled');
  }
  public set advancedForwardingEnabled(value: boolean | cdktf.IResolvable) {
    this._advancedForwardingEnabled = value;
  }
  public resetAdvancedForwardingEnabled() {
    this._advancedForwardingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedForwardingEnabledInput() {
    return this._advancedForwardingEnabled;
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // default_pool_id - computed: true, optional: true, required: false
  private _defaultPoolId?: string; 
  public get defaultPoolId() {
    return this.getStringAttribute('default_pool_id');
  }
  public set defaultPoolId(value: string) {
    this._defaultPoolId = value;
  }
  public resetDefaultPoolId() {
    this._defaultPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolIdInput() {
    return this._defaultPoolId;
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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // forward_eip - computed: true, optional: true, required: false
  private _forwardEip?: boolean | cdktf.IResolvable; 
  public get forwardEip() {
    return this.getBooleanAttribute('forward_eip');
  }
  public set forwardEip(value: boolean | cdktf.IResolvable) {
    this._forwardEip = value;
  }
  public resetForwardEip() {
    this._forwardEip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardEipInput() {
    return this._forwardEip;
  }

  // forward_host - computed: false, optional: true, required: false
  private _forwardHost?: boolean | cdktf.IResolvable; 
  public get forwardHost() {
    return this.getBooleanAttribute('forward_host');
  }
  public set forwardHost(value: boolean | cdktf.IResolvable) {
    this._forwardHost = value;
  }
  public resetForwardHost() {
    this._forwardHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHostInput() {
    return this._forwardHost;
  }

  // forward_port - computed: true, optional: true, required: false
  private _forwardPort?: boolean | cdktf.IResolvable; 
  public get forwardPort() {
    return this.getBooleanAttribute('forward_port');
  }
  public set forwardPort(value: boolean | cdktf.IResolvable) {
    this._forwardPort = value;
  }
  public resetForwardPort() {
    this._forwardPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardPortInput() {
    return this._forwardPort;
  }

  // forward_request_port - computed: true, optional: true, required: false
  private _forwardRequestPort?: boolean | cdktf.IResolvable; 
  public get forwardRequestPort() {
    return this.getBooleanAttribute('forward_request_port');
  }
  public set forwardRequestPort(value: boolean | cdktf.IResolvable) {
    this._forwardRequestPort = value;
  }
  public resetForwardRequestPort() {
    this._forwardRequestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestPortInput() {
    return this._forwardRequestPort;
  }

  // http2_enable - computed: false, optional: true, required: false
  private _http2Enable?: boolean | cdktf.IResolvable; 
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable');
  }
  public set http2Enable(value: boolean | cdktf.IResolvable) {
    this._http2Enable = value;
  }
  public resetHttp2Enable() {
    this._http2Enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2EnableInput() {
    return this._http2Enable;
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

  // idle_timeout - computed: true, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // ip_group - computed: false, optional: true, required: false
  private _ipGroup?: string; 
  public get ipGroup() {
    return this.getStringAttribute('ip_group');
  }
  public set ipGroup(value: string) {
    this._ipGroup = value;
  }
  public resetIpGroup() {
    this._ipGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupInput() {
    return this._ipGroup;
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

  // protection_reason - computed: false, optional: true, required: false
  private _protectionReason?: string; 
  public get protectionReason() {
    return this.getStringAttribute('protection_reason');
  }
  public set protectionReason(value: string) {
    this._protectionReason = value;
  }
  public resetProtectionReason() {
    this._protectionReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionReasonInput() {
    return this._protectionReason;
  }

  // protection_status - computed: true, optional: true, required: false
  private _protectionStatus?: string; 
  public get protectionStatus() {
    return this.getStringAttribute('protection_status');
  }
  public set protectionStatus(value: string) {
    this._protectionStatus = value;
  }
  public resetProtectionStatus() {
    this._protectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionStatusInput() {
    return this._protectionStatus;
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

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // response_timeout - computed: true, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // sni_certificate - computed: false, optional: true, required: false
  private _sniCertificate?: string[]; 
  public get sniCertificate() {
    return this.getListAttribute('sni_certificate');
  }
  public set sniCertificate(value: string[]) {
    this._sniCertificate = value;
  }
  public resetSniCertificate() {
    this._sniCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniCertificateInput() {
    return this._sniCertificate;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tls_ciphers_policy - computed: true, optional: true, required: false
  private _tlsCiphersPolicy?: string; 
  public get tlsCiphersPolicy() {
    return this.getStringAttribute('tls_ciphers_policy');
  }
  public set tlsCiphersPolicy(value: string) {
    this._tlsCiphersPolicy = value;
  }
  public resetTlsCiphersPolicy() {
    this._tlsCiphersPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersPolicyInput() {
    return this._tlsCiphersPolicy;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LbListenerV3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LbListenerV3Timeouts) {
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
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      advanced_forwarding_enabled: cdktf.booleanToTerraform(this._advancedForwardingEnabled),
      ca_certificate: cdktf.stringToTerraform(this._caCertificate),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      description: cdktf.stringToTerraform(this._description),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      forward_eip: cdktf.booleanToTerraform(this._forwardEip),
      forward_host: cdktf.booleanToTerraform(this._forwardHost),
      forward_port: cdktf.booleanToTerraform(this._forwardPort),
      forward_request_port: cdktf.booleanToTerraform(this._forwardRequestPort),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ip_group: cdktf.stringToTerraform(this._ipGroup),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      protection_reason: cdktf.stringToTerraform(this._protectionReason),
      protection_status: cdktf.stringToTerraform(this._protectionStatus),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region: cdktf.stringToTerraform(this._region),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      sni_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniCertificate),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
      timeouts: lbListenerV3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_forwarding_enabled: {
        value: cdktf.booleanToHclTerraform(this._advancedForwardingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_certificate: {
        value: cdktf.stringToHclTerraform(this._caCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultPoolId),
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
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_eip: {
        value: cdktf.booleanToHclTerraform(this._forwardEip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_host: {
        value: cdktf.booleanToHclTerraform(this._forwardHost),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_port: {
        value: cdktf.booleanToHclTerraform(this._forwardPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_request_port: {
        value: cdktf.booleanToHclTerraform(this._forwardRequestPort),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http2_enable: {
        value: cdktf.booleanToHclTerraform(this._http2Enable),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_group: {
        value: cdktf.stringToHclTerraform(this._ipGroup),
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
      protection_reason: {
        value: cdktf.stringToHclTerraform(this._protectionReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_status: {
        value: cdktf.stringToHclTerraform(this._protectionStatus),
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
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_timeout: {
        value: cdktf.numberToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniCertificate),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tls_ciphers_policy: {
        value: cdktf.stringToHclTerraform(this._tlsCiphersPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: lbListenerV3TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LbListenerV3Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
