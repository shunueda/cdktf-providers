// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NlbListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#alpn_enabled NlbListener#alpn_enabled}
  */
  readonly alpnEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#alpn_policy NlbListener#alpn_policy}
  */
  readonly alpnPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#ca_certificate_ids NlbListener#ca_certificate_ids}
  */
  readonly caCertificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#ca_enabled NlbListener#ca_enabled}
  */
  readonly caEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#certificate_ids NlbListener#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#cps NlbListener#cps}
  */
  readonly cps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#end_port NlbListener#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#id NlbListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#idle_timeout NlbListener#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#listener_description NlbListener#listener_description}
  */
  readonly listenerDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#listener_port NlbListener#listener_port}
  */
  readonly listenerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#listener_protocol NlbListener#listener_protocol}
  */
  readonly listenerProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#load_balancer_id NlbListener#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#mss NlbListener#mss}
  */
  readonly mss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#proxy_protocol_enabled NlbListener#proxy_protocol_enabled}
  */
  readonly proxyProtocolEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#sec_sensor_enabled NlbListener#sec_sensor_enabled}
  */
  readonly secSensorEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#security_policy_id NlbListener#security_policy_id}
  */
  readonly securityPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#server_group_id NlbListener#server_group_id}
  */
  readonly serverGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#start_port NlbListener#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#status NlbListener#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#tags NlbListener#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * proxy_protocol_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#proxy_protocol_config NlbListener#proxy_protocol_config}
  */
  readonly proxyProtocolConfig?: NlbListenerProxyProtocolConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#timeouts NlbListener#timeouts}
  */
  readonly timeouts?: NlbListenerTimeouts;
}
export interface NlbListenerProxyProtocolConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#proxy_protocol_config_private_link_ep_id_enabled NlbListener#proxy_protocol_config_private_link_ep_id_enabled}
  */
  readonly proxyProtocolConfigPrivateLinkEpIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#proxy_protocol_config_private_link_eps_id_enabled NlbListener#proxy_protocol_config_private_link_eps_id_enabled}
  */
  readonly proxyProtocolConfigPrivateLinkEpsIdEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#proxy_protocol_config_vpc_id_enabled NlbListener#proxy_protocol_config_vpc_id_enabled}
  */
  readonly proxyProtocolConfigVpcIdEnabled?: boolean | cdktf.IResolvable;
}

export function nlbListenerProxyProtocolConfigToTerraform(struct?: NlbListenerProxyProtocolConfigOutputReference | NlbListenerProxyProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_protocol_config_private_link_ep_id_enabled: cdktf.booleanToTerraform(struct!.proxyProtocolConfigPrivateLinkEpIdEnabled),
    proxy_protocol_config_private_link_eps_id_enabled: cdktf.booleanToTerraform(struct!.proxyProtocolConfigPrivateLinkEpsIdEnabled),
    proxy_protocol_config_vpc_id_enabled: cdktf.booleanToTerraform(struct!.proxyProtocolConfigVpcIdEnabled),
  }
}


export function nlbListenerProxyProtocolConfigToHclTerraform(struct?: NlbListenerProxyProtocolConfigOutputReference | NlbListenerProxyProtocolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_protocol_config_private_link_ep_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolConfigPrivateLinkEpIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_protocol_config_private_link_eps_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolConfigPrivateLinkEpsIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_protocol_config_vpc_id_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.proxyProtocolConfigVpcIdEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NlbListenerProxyProtocolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NlbListenerProxyProtocolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyProtocolConfigPrivateLinkEpIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolConfigPrivateLinkEpIdEnabled = this._proxyProtocolConfigPrivateLinkEpIdEnabled;
    }
    if (this._proxyProtocolConfigPrivateLinkEpsIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolConfigPrivateLinkEpsIdEnabled = this._proxyProtocolConfigPrivateLinkEpsIdEnabled;
    }
    if (this._proxyProtocolConfigVpcIdEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtocolConfigVpcIdEnabled = this._proxyProtocolConfigVpcIdEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NlbListenerProxyProtocolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyProtocolConfigPrivateLinkEpIdEnabled = undefined;
      this._proxyProtocolConfigPrivateLinkEpsIdEnabled = undefined;
      this._proxyProtocolConfigVpcIdEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyProtocolConfigPrivateLinkEpIdEnabled = value.proxyProtocolConfigPrivateLinkEpIdEnabled;
      this._proxyProtocolConfigPrivateLinkEpsIdEnabled = value.proxyProtocolConfigPrivateLinkEpsIdEnabled;
      this._proxyProtocolConfigVpcIdEnabled = value.proxyProtocolConfigVpcIdEnabled;
    }
  }

  // proxy_protocol_config_private_link_ep_id_enabled - computed: true, optional: true, required: false
  private _proxyProtocolConfigPrivateLinkEpIdEnabled?: boolean | cdktf.IResolvable; 
  public get proxyProtocolConfigPrivateLinkEpIdEnabled() {
    return this.getBooleanAttribute('proxy_protocol_config_private_link_ep_id_enabled');
  }
  public set proxyProtocolConfigPrivateLinkEpIdEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolConfigPrivateLinkEpIdEnabled = value;
  }
  public resetProxyProtocolConfigPrivateLinkEpIdEnabled() {
    this._proxyProtocolConfigPrivateLinkEpIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolConfigPrivateLinkEpIdEnabledInput() {
    return this._proxyProtocolConfigPrivateLinkEpIdEnabled;
  }

  // proxy_protocol_config_private_link_eps_id_enabled - computed: false, optional: true, required: false
  private _proxyProtocolConfigPrivateLinkEpsIdEnabled?: boolean | cdktf.IResolvable; 
  public get proxyProtocolConfigPrivateLinkEpsIdEnabled() {
    return this.getBooleanAttribute('proxy_protocol_config_private_link_eps_id_enabled');
  }
  public set proxyProtocolConfigPrivateLinkEpsIdEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolConfigPrivateLinkEpsIdEnabled = value;
  }
  public resetProxyProtocolConfigPrivateLinkEpsIdEnabled() {
    this._proxyProtocolConfigPrivateLinkEpsIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolConfigPrivateLinkEpsIdEnabledInput() {
    return this._proxyProtocolConfigPrivateLinkEpsIdEnabled;
  }

  // proxy_protocol_config_vpc_id_enabled - computed: false, optional: true, required: false
  private _proxyProtocolConfigVpcIdEnabled?: boolean | cdktf.IResolvable; 
  public get proxyProtocolConfigVpcIdEnabled() {
    return this.getBooleanAttribute('proxy_protocol_config_vpc_id_enabled');
  }
  public set proxyProtocolConfigVpcIdEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolConfigVpcIdEnabled = value;
  }
  public resetProxyProtocolConfigVpcIdEnabled() {
    this._proxyProtocolConfigVpcIdEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolConfigVpcIdEnabledInput() {
    return this._proxyProtocolConfigVpcIdEnabled;
  }
}
export interface NlbListenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#create NlbListener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#delete NlbListener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#update NlbListener#update}
  */
  readonly update?: string;
}

export function nlbListenerTimeoutsToTerraform(struct?: NlbListenerTimeouts | cdktf.IResolvable): any {
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


export function nlbListenerTimeoutsToHclTerraform(struct?: NlbListenerTimeouts | cdktf.IResolvable): any {
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

export class NlbListenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NlbListenerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NlbListenerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener alicloud_nlb_listener}
*/
export class NlbListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_nlb_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NlbListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NlbListener to import
  * @param importFromId The id of the existing NlbListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NlbListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_nlb_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/nlb_listener alicloud_nlb_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NlbListenerConfig
  */
  public constructor(scope: Construct, id: string, config: NlbListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_nlb_listener',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alpnEnabled = config.alpnEnabled;
    this._alpnPolicy = config.alpnPolicy;
    this._caCertificateIds = config.caCertificateIds;
    this._caEnabled = config.caEnabled;
    this._certificateIds = config.certificateIds;
    this._cps = config.cps;
    this._endPort = config.endPort;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._listenerDescription = config.listenerDescription;
    this._listenerPort = config.listenerPort;
    this._listenerProtocol = config.listenerProtocol;
    this._loadBalancerId = config.loadBalancerId;
    this._mss = config.mss;
    this._proxyProtocolEnabled = config.proxyProtocolEnabled;
    this._secSensorEnabled = config.secSensorEnabled;
    this._securityPolicyId = config.securityPolicyId;
    this._serverGroupId = config.serverGroupId;
    this._startPort = config.startPort;
    this._status = config.status;
    this._tags = config.tags;
    this._proxyProtocolConfig.internalValue = config.proxyProtocolConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alpn_enabled - computed: true, optional: true, required: false
  private _alpnEnabled?: boolean | cdktf.IResolvable; 
  public get alpnEnabled() {
    return this.getBooleanAttribute('alpn_enabled');
  }
  public set alpnEnabled(value: boolean | cdktf.IResolvable) {
    this._alpnEnabled = value;
  }
  public resetAlpnEnabled() {
    this._alpnEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnEnabledInput() {
    return this._alpnEnabled;
  }

  // alpn_policy - computed: false, optional: true, required: false
  private _alpnPolicy?: string; 
  public get alpnPolicy() {
    return this.getStringAttribute('alpn_policy');
  }
  public set alpnPolicy(value: string) {
    this._alpnPolicy = value;
  }
  public resetAlpnPolicy() {
    this._alpnPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alpnPolicyInput() {
    return this._alpnPolicy;
  }

  // ca_certificate_ids - computed: false, optional: true, required: false
  private _caCertificateIds?: string[]; 
  public get caCertificateIds() {
    return this.getListAttribute('ca_certificate_ids');
  }
  public set caCertificateIds(value: string[]) {
    this._caCertificateIds = value;
  }
  public resetCaCertificateIds() {
    this._caCertificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateIdsInput() {
    return this._caCertificateIds;
  }

  // ca_enabled - computed: true, optional: true, required: false
  private _caEnabled?: boolean | cdktf.IResolvable; 
  public get caEnabled() {
    return this.getBooleanAttribute('ca_enabled');
  }
  public set caEnabled(value: boolean | cdktf.IResolvable) {
    this._caEnabled = value;
  }
  public resetCaEnabled() {
    this._caEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caEnabledInput() {
    return this._caEnabled;
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // cps - computed: false, optional: true, required: false
  private _cps?: number; 
  public get cps() {
    return this.getNumberAttribute('cps');
  }
  public set cps(value: number) {
    this._cps = value;
  }
  public resetCps() {
    this._cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpsInput() {
    return this._cps;
  }

  // end_port - computed: false, optional: true, required: false
  private _endPort?: number; 
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }
  public set endPort(value: number) {
    this._endPort = value;
  }
  public resetEndPort() {
    this._endPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endPortInput() {
    return this._endPort;
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

  // listener_description - computed: false, optional: true, required: false
  private _listenerDescription?: string; 
  public get listenerDescription() {
    return this.getStringAttribute('listener_description');
  }
  public set listenerDescription(value: string) {
    this._listenerDescription = value;
  }
  public resetListenerDescription() {
    this._listenerDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerDescriptionInput() {
    return this._listenerDescription;
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // listener_protocol - computed: false, optional: false, required: true
  private _listenerProtocol?: string; 
  public get listenerProtocol() {
    return this.getStringAttribute('listener_protocol');
  }
  public set listenerProtocol(value: string) {
    this._listenerProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerProtocolInput() {
    return this._listenerProtocol;
  }

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // mss - computed: false, optional: true, required: false
  private _mss?: number; 
  public get mss() {
    return this.getNumberAttribute('mss');
  }
  public set mss(value: number) {
    this._mss = value;
  }
  public resetMss() {
    this._mss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mssInput() {
    return this._mss;
  }

  // proxy_protocol_enabled - computed: true, optional: true, required: false
  private _proxyProtocolEnabled?: boolean | cdktf.IResolvable; 
  public get proxyProtocolEnabled() {
    return this.getBooleanAttribute('proxy_protocol_enabled');
  }
  public set proxyProtocolEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyProtocolEnabled = value;
  }
  public resetProxyProtocolEnabled() {
    this._proxyProtocolEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolEnabledInput() {
    return this._proxyProtocolEnabled;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // sec_sensor_enabled - computed: true, optional: true, required: false
  private _secSensorEnabled?: boolean | cdktf.IResolvable; 
  public get secSensorEnabled() {
    return this.getBooleanAttribute('sec_sensor_enabled');
  }
  public set secSensorEnabled(value: boolean | cdktf.IResolvable) {
    this._secSensorEnabled = value;
  }
  public resetSecSensorEnabled() {
    this._secSensorEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secSensorEnabledInput() {
    return this._secSensorEnabled;
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

  // server_group_id - computed: false, optional: false, required: true
  private _serverGroupId?: string; 
  public get serverGroupId() {
    return this.getStringAttribute('server_group_id');
  }
  public set serverGroupId(value: string) {
    this._serverGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupIdInput() {
    return this._serverGroupId;
  }

  // start_port - computed: false, optional: true, required: false
  private _startPort?: number; 
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
  public set startPort(value: number) {
    this._startPort = value;
  }
  public resetStartPort() {
    this._startPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPortInput() {
    return this._startPort;
  }

  // status - computed: true, optional: true, required: false
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

  // proxy_protocol_config - computed: false, optional: true, required: false
  private _proxyProtocolConfig = new NlbListenerProxyProtocolConfigOutputReference(this, "proxy_protocol_config");
  public get proxyProtocolConfig() {
    return this._proxyProtocolConfig;
  }
  public putProxyProtocolConfig(value: NlbListenerProxyProtocolConfig) {
    this._proxyProtocolConfig.internalValue = value;
  }
  public resetProxyProtocolConfig() {
    this._proxyProtocolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtocolConfigInput() {
    return this._proxyProtocolConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NlbListenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NlbListenerTimeouts) {
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
      alpn_enabled: cdktf.booleanToTerraform(this._alpnEnabled),
      alpn_policy: cdktf.stringToTerraform(this._alpnPolicy),
      ca_certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificateIds),
      ca_enabled: cdktf.booleanToTerraform(this._caEnabled),
      certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateIds),
      cps: cdktf.numberToTerraform(this._cps),
      end_port: cdktf.numberToTerraform(this._endPort),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      listener_description: cdktf.stringToTerraform(this._listenerDescription),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      listener_protocol: cdktf.stringToTerraform(this._listenerProtocol),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      mss: cdktf.numberToTerraform(this._mss),
      proxy_protocol_enabled: cdktf.booleanToTerraform(this._proxyProtocolEnabled),
      sec_sensor_enabled: cdktf.booleanToTerraform(this._secSensorEnabled),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      server_group_id: cdktf.stringToTerraform(this._serverGroupId),
      start_port: cdktf.numberToTerraform(this._startPort),
      status: cdktf.stringToTerraform(this._status),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      proxy_protocol_config: nlbListenerProxyProtocolConfigToTerraform(this._proxyProtocolConfig.internalValue),
      timeouts: nlbListenerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alpn_enabled: {
        value: cdktf.booleanToHclTerraform(this._alpnEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alpn_policy: {
        value: cdktf.stringToHclTerraform(this._alpnPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ca_enabled: {
        value: cdktf.booleanToHclTerraform(this._caEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cps: {
        value: cdktf.numberToHclTerraform(this._cps),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_port: {
        value: cdktf.numberToHclTerraform(this._endPort),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_description: {
        value: cdktf.stringToHclTerraform(this._listenerDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_protocol: {
        value: cdktf.stringToHclTerraform(this._listenerProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mss: {
        value: cdktf.numberToHclTerraform(this._mss),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_protocol_enabled: {
        value: cdktf.booleanToHclTerraform(this._proxyProtocolEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sec_sensor_enabled: {
        value: cdktf.booleanToHclTerraform(this._secSensorEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_group_id: {
        value: cdktf.stringToHclTerraform(this._serverGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_port: {
        value: cdktf.numberToHclTerraform(this._startPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      proxy_protocol_config: {
        value: nlbListenerProxyProtocolConfigToHclTerraform(this._proxyProtocolConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NlbListenerProxyProtocolConfigList",
      },
      timeouts: {
        value: nlbListenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NlbListenerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
