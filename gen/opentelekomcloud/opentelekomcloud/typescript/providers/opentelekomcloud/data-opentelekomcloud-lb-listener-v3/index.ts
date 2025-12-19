// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpentelekomcloudLbListenerV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#client_ca_tls_container_ref DataOpentelekomcloudLbListenerV3#client_ca_tls_container_ref}
  */
  readonly clientCaTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#client_timeout DataOpentelekomcloudLbListenerV3#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#default_pool_id DataOpentelekomcloudLbListenerV3#default_pool_id}
  */
  readonly defaultPoolId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#default_tls_container_ref DataOpentelekomcloudLbListenerV3#default_tls_container_ref}
  */
  readonly defaultTlsContainerRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#description DataOpentelekomcloudLbListenerV3#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#id DataOpentelekomcloudLbListenerV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#keep_alive_timeout DataOpentelekomcloudLbListenerV3#keep_alive_timeout}
  */
  readonly keepAliveTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#loadbalancer_id DataOpentelekomcloudLbListenerV3#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#member_address DataOpentelekomcloudLbListenerV3#member_address}
  */
  readonly memberAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#member_device_id DataOpentelekomcloudLbListenerV3#member_device_id}
  */
  readonly memberDeviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#member_timeout DataOpentelekomcloudLbListenerV3#member_timeout}
  */
  readonly memberTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#name DataOpentelekomcloudLbListenerV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#protocol DataOpentelekomcloudLbListenerV3#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#protocol_port DataOpentelekomcloudLbListenerV3#protocol_port}
  */
  readonly protocolPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#tls_ciphers_policy DataOpentelekomcloudLbListenerV3#tls_ciphers_policy}
  */
  readonly tlsCiphersPolicy?: string;
}
export interface DataOpentelekomcloudLbListenerV3InsertHeaders {
}

export function dataOpentelekomcloudLbListenerV3InsertHeadersToTerraform(struct?: DataOpentelekomcloudLbListenerV3InsertHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudLbListenerV3InsertHeadersToHclTerraform(struct?: DataOpentelekomcloudLbListenerV3InsertHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudLbListenerV3InsertHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudLbListenerV3InsertHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // forward_elb_ip - computed: true, optional: false, required: false
  public get forwardElbIp() {
    return this.getBooleanAttribute('forward_elb_ip');
  }

  // forwarded_for_port - computed: true, optional: false, required: false
  public get forwardedForPort() {
    return this.getBooleanAttribute('forwarded_for_port');
  }

  // forwarded_host - computed: true, optional: false, required: false
  public get forwardedHost() {
    return this.getBooleanAttribute('forwarded_host');
  }

  // forwarded_port - computed: true, optional: false, required: false
  public get forwardedPort() {
    return this.getBooleanAttribute('forwarded_port');
  }
}

export class DataOpentelekomcloudLbListenerV3InsertHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference {
    return new DataOpentelekomcloudLbListenerV3InsertHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpentelekomcloudLbListenerV3IpGroup {
}

export function dataOpentelekomcloudLbListenerV3IpGroupToTerraform(struct?: DataOpentelekomcloudLbListenerV3IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpentelekomcloudLbListenerV3IpGroupToHclTerraform(struct?: DataOpentelekomcloudLbListenerV3IpGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpentelekomcloudLbListenerV3IpGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpentelekomcloudLbListenerV3IpGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpentelekomcloudLbListenerV3IpGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOpentelekomcloudLbListenerV3IpGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOpentelekomcloudLbListenerV3IpGroupOutputReference {
    return new DataOpentelekomcloudLbListenerV3IpGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3 opentelekomcloud_lb_listener_v3}
*/
export class DataOpentelekomcloudLbListenerV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_lb_listener_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpentelekomcloudLbListenerV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpentelekomcloudLbListenerV3 to import
  * @param importFromId The id of the existing DataOpentelekomcloudLbListenerV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpentelekomcloudLbListenerV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_lb_listener_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/data-sources/lb_listener_v3 opentelekomcloud_lb_listener_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpentelekomcloudLbListenerV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpentelekomcloudLbListenerV3Config = {}) {
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
    this._clientCaTlsContainerRef = config.clientCaTlsContainerRef;
    this._clientTimeout = config.clientTimeout;
    this._defaultPoolId = config.defaultPoolId;
    this._defaultTlsContainerRef = config.defaultTlsContainerRef;
    this._description = config.description;
    this._id = config.id;
    this._keepAliveTimeout = config.keepAliveTimeout;
    this._loadbalancerId = config.loadbalancerId;
    this._memberAddress = config.memberAddress;
    this._memberDeviceId = config.memberDeviceId;
    this._memberTimeout = config.memberTimeout;
    this._name = config.name;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._tlsCiphersPolicy = config.tlsCiphersPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state_up - computed: true, optional: false, required: false
  public get adminStateUp() {
    return this.getBooleanAttribute('admin_state_up');
  }

  // advanced_forwarding - computed: true, optional: false, required: false
  public get advancedForwarding() {
    return this.getBooleanAttribute('advanced_forwarding');
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

  // client_timeout - computed: false, optional: true, required: false
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

  // default_pool_id - computed: false, optional: true, required: false
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

  // http2_enable - computed: true, optional: false, required: false
  public get http2Enable() {
    return this.getBooleanAttribute('http2_enable');
  }

  // id - computed: false, optional: true, required: false
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

  // insert_headers - computed: true, optional: false, required: false
  private _insertHeaders = new DataOpentelekomcloudLbListenerV3InsertHeadersList(this, "insert_headers", false);
  public get insertHeaders() {
    return this._insertHeaders;
  }

  // ip_group - computed: true, optional: false, required: false
  private _ipGroup = new DataOpentelekomcloudLbListenerV3IpGroupList(this, "ip_group", false);
  public get ipGroup() {
    return this._ipGroup;
  }

  // keep_alive_timeout - computed: false, optional: true, required: false
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

  // loadbalancer_id - computed: false, optional: true, required: false
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // member_address - computed: false, optional: true, required: false
  private _memberAddress?: string; 
  public get memberAddress() {
    return this.getStringAttribute('member_address');
  }
  public set memberAddress(value: string) {
    this._memberAddress = value;
  }
  public resetMemberAddress() {
    this._memberAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberAddressInput() {
    return this._memberAddress;
  }

  // member_device_id - computed: false, optional: true, required: false
  private _memberDeviceId?: string; 
  public get memberDeviceId() {
    return this.getStringAttribute('member_device_id');
  }
  public set memberDeviceId(value: string) {
    this._memberDeviceId = value;
  }
  public resetMemberDeviceId() {
    this._memberDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberDeviceIdInput() {
    return this._memberDeviceId;
  }

  // member_retry_enable - computed: true, optional: false, required: false
  public get memberRetryEnable() {
    return this.getBooleanAttribute('member_retry_enable');
  }

  // member_timeout - computed: false, optional: true, required: false
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

  // memory_retry_enable - computed: true, optional: false, required: false
  public get memoryRetryEnable() {
    return this.getBooleanAttribute('memory_retry_enable');
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

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_port - computed: false, optional: true, required: false
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  public resetProtocolPort() {
    this._protocolPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // security_policy_id - computed: true, optional: false, required: false
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }

  // sni_container_refs - computed: true, optional: false, required: false
  public get sniContainerRefs() {
    return cdktf.Fn.tolist(this.getListAttribute('sni_container_refs'));
  }

  // sni_match_algo - computed: true, optional: false, required: false
  public get sniMatchAlgo() {
    return this.getStringAttribute('sni_match_algo');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tls_ciphers_policy - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_ca_tls_container_ref: cdktf.stringToTerraform(this._clientCaTlsContainerRef),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      default_pool_id: cdktf.stringToTerraform(this._defaultPoolId),
      default_tls_container_ref: cdktf.stringToTerraform(this._defaultTlsContainerRef),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      keep_alive_timeout: cdktf.numberToTerraform(this._keepAliveTimeout),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      member_address: cdktf.stringToTerraform(this._memberAddress),
      member_device_id: cdktf.stringToTerraform(this._memberDeviceId),
      member_timeout: cdktf.numberToTerraform(this._memberTimeout),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      tls_ciphers_policy: cdktf.stringToTerraform(this._tlsCiphersPolicy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      member_address: {
        value: cdktf.stringToHclTerraform(this._memberAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_device_id: {
        value: cdktf.stringToHclTerraform(this._memberDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tls_ciphers_policy: {
        value: cdktf.stringToHclTerraform(this._tlsCiphersPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
