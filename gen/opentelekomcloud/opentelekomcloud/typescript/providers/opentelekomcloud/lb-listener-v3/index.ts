// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbListenerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#admin_state_up LbListenerV3#admin_state_up}
  */
  readonly adminStateUp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#advanced_forwarding LbListenerV3#advanced_forwarding}
  */
  readonly advancedForwarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#client_ca_tls_container_ref LbListenerV3#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#client_timeout LbListenerV3#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#default_pool_id LbListenerV3#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#default_tls_container_ref LbListenerV3#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#description LbListenerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#http2_enable LbListenerV3#http2_enable}
  */
  readonly http2Enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#id LbListenerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#keep_alive_timeout LbListenerV3#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#loadbalancer_id LbListenerV3#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#member_retry_enable LbListenerV3#member_retry_enable}
  */
  readonly memberRetryEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#member_timeout LbListenerV3#member_timeout}
  */
  readonly memberTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#name LbListenerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#protocol LbListenerV3#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#protocol_port LbListenerV3#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#security_policy_id LbListenerV3#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#sni_container_refs LbListenerV3#sni_container_refs}
  */
  readonly sniContainerRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#sni_match_algo LbListenerV3#sni_match_algo}
  */
  readonly sniMatchAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#tags LbListenerV3#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#tls_ciphers_policy LbListenerV3#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
  /**
  * insert_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#insert_headers LbListenerV3#insert_headers}
  */
  readonly insertHeaders?: LbListenerV3InsertHeaders;
  /**
  * ip_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#ip_group LbListenerV3#ip_group}
  */
  readonly ipGroup?: LbListenerV3IpGroup;
}
export interface LbListenerV3InsertHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#forward_elb_ip LbListenerV3#forward_elb_ip}
  */
  readonly forwardElbIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#forwarded_for_port LbListenerV3#forwarded_for_port}
  */
  readonly forwardedForPort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#forwarded_host LbListenerV3#forwarded_host}
  */
  readonly forwardedHost?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#forwarded_port LbListenerV3#forwarded_port}
  */
  readonly forwardedPort?: boolean | cdktf.IResolvable;
}

export function lbListenerV3InsertHeadersToTerraform(struct?: LbListenerV3InsertHeadersOutputReference | LbListenerV3InsertHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_elb_ip: cdktf.booleanToTerraform(struct!.forwardElbIp),
    forwarded_for_port: cdktf.booleanToTerraform(struct!.forwardedForPort),
    forwarded_host: cdktf.booleanToTerraform(struct!.forwardedHost),
    forwarded_port: cdktf.booleanToTerraform(struct!.forwardedPort),
  }
}


export function lbListenerV3InsertHeadersToHclTerraform(struct?: LbListenerV3InsertHeadersOutputReference | LbListenerV3InsertHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_elb_ip: {
      value: cdktf.booleanToHclTerraform(struct!.forwardElbIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_for_port: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedForPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_host: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedHost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forwarded_port: {
      value: cdktf.booleanToHclTerraform(struct!.forwardedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerV3InsertHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerV3InsertHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardElbIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardElbIp = this._forwardElbIp;
    }
    if (this._forwardedForPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedForPort = this._forwardedForPort;
    }
    if (this._forwardedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedHost = this._forwardedHost;
    }
    if (this._forwardedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardedPort = this._forwardedPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerV3InsertHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardElbIp = undefined;
      this._forwardedForPort = undefined;
      this._forwardedHost = undefined;
      this._forwardedPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardElbIp = value.forwardElbIp;
      this._forwardedForPort = value.forwardedForPort;
      this._forwardedHost = value.forwardedHost;
      this._forwardedPort = value.forwardedPort;
    }
  }

  // forward_elb_ip - computed: true, optional: true, required: false
  private _forwardElbIp?: boolean | cdktf.IResolvable; 
  public get forwardElbIp() {
    return this.getBooleanAttribute('forward_elb_ip');
  }
  public set forwardElbIp(value: boolean | cdktf.IResolvable) {
    this._forwardElbIp = value;
  }
  public resetForwardElbIp() {
    this._forwardElbIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardElbIpInput() {
    return this._forwardElbIp;
  }

  // forwarded_for_port - computed: true, optional: true, required: false
  private _forwardedForPort?: boolean | cdktf.IResolvable; 
  public get forwardedForPort() {
    return this.getBooleanAttribute('forwarded_for_port');
  }
  public set forwardedForPort(value: boolean | cdktf.IResolvable) {
    this._forwardedForPort = value;
  }
  public resetForwardedForPort() {
    this._forwardedForPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedForPortInput() {
    return this._forwardedForPort;
  }

  // forwarded_host - computed: true, optional: true, required: false
  private _forwardedHost?: boolean | cdktf.IResolvable; 
  public get forwardedHost() {
    return this.getBooleanAttribute('forwarded_host');
  }
  public set forwardedHost(value: boolean | cdktf.IResolvable) {
    this._forwardedHost = value;
  }
  public resetForwardedHost() {
    this._forwardedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedHostInput() {
    return this._forwardedHost;
  }

  // forwarded_port - computed: true, optional: true, required: false
  private _forwardedPort?: boolean | cdktf.IResolvable; 
  public get forwardedPort() {
    return this.getBooleanAttribute('forwarded_port');
  }
  public set forwardedPort(value: boolean | cdktf.IResolvable) {
    this._forwardedPort = value;
  }
  public resetForwardedPort() {
    this._forwardedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardedPortInput() {
    return this._forwardedPort;
  }
}
export interface LbListenerV3IpGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#enable LbListenerV3#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#id LbListenerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#type LbListenerV3#type}
  */
  readonly type?: string;
}

export function lbListenerV3IpGroupToTerraform(struct?: LbListenerV3IpGroupOutputReference | LbListenerV3IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lbListenerV3IpGroupToHclTerraform(struct?: LbListenerV3IpGroupOutputReference | LbListenerV3IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbListenerV3IpGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbListenerV3IpGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbListenerV3IpGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // enable - computed: true, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3}
*/
export class LbListenerV3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_listener_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbListenerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbListenerV3 to import
  * @param importFromId The id of the existing LbListenerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbListenerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lb_listener_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/lb_listener_v3 opentelekomcloud_lb_listener_v3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbListenerV3Config
  */
  public constructor(scope: Construct, id: string, config: LbListenerV3Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_lb_listener_v3',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminStateUp = config.adminStateUp;
    this._advancedForwarding = config.advancedForwarding;
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._clientTimeout = config.clientTimeout;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._http2Enable = config.http2Enable;
    this._id = config.id;
    this._keepAliveTimeout = config.keepAliveTimeout;
    this._loadbalancerId = config.loadbalancerId;
    this._memberRetryEnable = config.memberRetryEnable;
    this._memberTimeout = config.memberTimeout;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._securityPolicyId = config.securityPolicyId;
    this._sniContainerRefs = config.sniContainerRefs;
    this._sniMatchAlgo = config.sniMatchAlgo;
    this._tags = config.tags;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
    this._insertHeaders.internalValue = config.insertHeaders;
    this._ipGroup.internalValue = config.ipGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: false, optional: true, required: false
  private _adminStateUp?: boolean | cdktf.IResolvable; 
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }
  public set adminStateUp(value: boolean | cdktf.IResolvable) {
    this._adminStateUp = value;
  }
  public resetAdminStateUp() {
    this._adminStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateUpInput() {
    return this._adminStateUp;
  }

  // advanced_forwarding - computed: true, optional: true, required: false
  private _advancedForwarding?: boolean | cdktf.IResolvable; 
  public get advancedForwarding() {
    return this.getBooleanAttribute('advanced_forwarding');
  }
  public set advancedForwarding(value: boolean | cdktf.IResolvable) {
    this._advancedForwarding = value;
  }
  public resetAdvancedForwarding() {
    this._advancedForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedForwardingInput() {
    return this._advancedForwarding;
  }

  // client_ca_tls_container_ref - computed: false, optional: true, required: false
  private _clientCaTlsContainerRef?: string; 
  public get clientCaTlsContainerRef() {
    return this.getStringAttribute('client_ca_tls_container_ref');
  }
  public set clientCaTlsContainerRef(value: string) {
    this._clientCaTlsContainerRef = value;
  }
  public resetClientCaTlsContainerRef() {
    this._clientCaTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCaTlsContainerRefInput() {
    return this._clientCaTlsContainerRef;
  }

  // client_timeout - computed: true, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this.getNumberAttribute('client_timeout');
  }
  public set clientTimeout(value: number) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // default_tls_container_ref - computed: false, optional: true, required: false
  private _defaultTlsContainerRef?: string; 
  public get defaultTlsContainerRef() {
    return this.getStringAttribute('default_tls_container_ref');
  }
  public set defaultTlsContainerRef(value: string) {
    this._defaultTlsContainerRef = value;
  }
  public resetDefaultTlsContainerRef() {
    this._defaultTlsContainerRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTlsContainerRefInput() {
    return this._defaultTlsContainerRef;
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

  // keep_alive_timeout - computed: true, optional: true, required: false
  private _keepAliveTimeout?: number; 
  public get keepAliveTimeout() {
    return this.getNumberAttribute('keep_alive_timeout');
  }
  public set keepAliveTimeout(value: number) {
    this._keepAliveTimeout = value;
  }
  public resetKeepAliveTimeout() {
    this._keepAliveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveTimeoutInput() {
    return this._keepAliveTimeout;
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

  // member_retry_enable - computed: false, optional: true, required: false
  private _memberRetryEnable?: boolean | cdktf.IResolvable; 
  public get memberRetryEnable() {
    return this.getBooleanAttribute('member_retry_enable');
  }
  public set memberRetryEnable(value: boolean | cdktf.IResolvable) {
    this._memberRetryEnable = value;
  }
  public resetMemberRetryEnable() {
    this._memberRetryEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberRetryEnableInput() {
    return this._memberRetryEnable;
  }

  // member_timeout - computed: true, optional: true, required: false
  private _memberTimeout?: number; 
  public get memberTimeout() {
    return this.getNumberAttribute('member_timeout');
  }
  public set memberTimeout(value: number) {
    this._memberTimeout = value;
  }
  public resetMemberTimeout() {
    this._memberTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTimeoutInput() {
    return this._memberTimeout;
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

  // security_policy_id - computed: true, optional: true, required: false
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  public resetSecurityPolicyId() {
    this._securityPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // sni_container_refs - computed: false, optional: true, required: false
  private _sniContainerRefs?: string[]; 
  public get sniContainerRefs() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_container_refs'));
  }
  public set sniContainerRefs(value: string[]) {
    this._sniContainerRefs = value;
  }
  public resetSniContainerRefs() {
    this._sniContainerRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniContainerRefsInput() {
    return this._sniContainerRefs;
  }

  // sni_match_algo - computed: true, optional: true, required: false
  private _sniMatchAlgo?: string; 
  public get sniMatchAlgo() {
    return this.getStringAttribute('sni_match_algo');
  }
  public set sniMatchAlgo(value: string) {
    this._sniMatchAlgo = value;
  }
  public resetSniMatchAlgo() {
    this._sniMatchAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniMatchAlgoInput() {
    return this._sniMatchAlgo;
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // insert_headers - computed: false, optional: true, required: false
  private _insertHeaders = new LbListenerV3InsertHeadersOutputReference(this, "insert_headers");
  public get insertHeaders() {
    return this._insertHeaders;
  }
  public putInsertHeaders(value: LbListenerV3InsertHeaders) {
    this._insertHeaders.internalValue = value;
  }
  public resetInsertHeaders() {
    this._insertHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeadersInput() {
    return this._insertHeaders.internalValue;
  }

  // ip_group - computed: false, optional: true, required: false
  private _ipGroup = new LbListenerV3IpGroupOutputReference(this, "ip_group");
  public get ipGroup() {
    return this._ipGroup;
  }
  public putIpGroup(value: LbListenerV3IpGroup) {
    this._ipGroup.internalValue = value;
  }
  public resetIpGroup() {
    this._ipGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGroupInput() {
    return this._ipGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state_up: cdktf.booleanToTerraform(this._adminStateUp),
      advanced_forwarding: cdktf.booleanToTerraform(this._advancedForwarding),
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      http2_enable: cdktf.booleanToTerraform(this._http2Enable),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_timeout: cdktf.numberToTerraform(this._keepAliveTimeout),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      member_retry_enable: cdktf.booleanToTerraform(this._memberRetryEnable),
      member_timeout: cdktf.numberToTerraform(this._memberTimeout),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      sni_container_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniContainerRefs),
      sni_match_algo: cdktf.stringToTerraform(this._sniMatchAlgo),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
      insert_headers: lbListenerV3InsertHeadersToTerraform(this._insertHeaders.internalValue),
      ip_group: lbListenerV3IpGroupToTerraform(this._ipGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state_up: {
        value: cdktf.booleanToHclTerraform(this._adminStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      advanced_forwarding: {
        value: cdktf.booleanToHclTerraform(this._advancedForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_ca_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._clientCaTlsContainerRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_pool_id: {
        value: cdktf.stringToHclTerraform(this._defaultPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_tls_container_ref: {
        value: cdktf.stringToHclTerraform(this._defaultTlsContainerRef),
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
      keep_alive_timeout: {
        value: cdktf.numberToHclTerraform(this._keepAliveTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_retry_enable: {
        value: cdktf.booleanToHclTerraform(this._memberRetryEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_timeout: {
        value: cdktf.numberToHclTerraform(this._memberTimeout),
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
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_container_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniContainerRefs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sni_match_algo: {
        value: cdktf.stringToHclTerraform(this._sniMatchAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      insert_headers: {
        value: lbListenerV3InsertHeadersToHclTerraform(this._insertHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbListenerV3InsertHeadersList",
      },
      ip_group: {
        value: lbListenerV3IpGroupToHclTerraform(this._ipGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbListenerV3IpGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
