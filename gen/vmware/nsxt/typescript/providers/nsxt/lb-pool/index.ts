// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active health monitor Id. If one is not set, the active healthchecks will be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#active_monitor_id LbPool#active_monitor_id}
  */
  readonly activeMonitorId?: string;
  /**
  * Load balancing algorithm controls how the incoming connections are distributed among the members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#algorithm LbPool#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#description LbPool#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#display_name LbPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#id LbPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The minimum number of members for the pool to be considered active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#min_active_members LbPool#min_active_members}
  */
  readonly minActiveMembers?: number;
  /**
  * Passive health monitor Id. If one is not set, the passive healthchecks will be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#passive_monitor_id LbPool#passive_monitor_id}
  */
  readonly passiveMonitorId?: string;
  /**
  * TCP multiplexing allows the same TCP connection between load balancer and the backend server to be used for sending multiple client requests from different client TCP connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#tcp_multiplexing_enabled LbPool#tcp_multiplexing_enabled}
  */
  readonly tcpMultiplexingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of TCP connections per pool that are idly kept alive for sending future client requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#tcp_multiplexing_number LbPool#tcp_multiplexing_number}
  */
  readonly tcpMultiplexingNumber?: number;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#member LbPool#member}
  */
  readonly member?: LbPoolMember[] | cdktf.IResolvable;
  /**
  * member_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#member_group LbPool#member_group}
  */
  readonly memberGroup?: LbPoolMemberGroup;
  /**
  * snat_translation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#snat_translation LbPool#snat_translation}
  */
  readonly snatTranslation?: LbPoolSnatTranslation;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#tag LbPool#tag}
  */
  readonly tag?: LbPoolTag[] | cdktf.IResolvable;
}
export interface LbPoolMember {
  /**
  * Member admin state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#admin_state LbPool#admin_state}
  */
  readonly adminState?: string;
  /**
  * A boolean flag which reflects whether this is a backup pool member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#backup_member LbPool#backup_member}
  */
  readonly backupMember?: boolean | cdktf.IResolvable;
  /**
  * Pool member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#display_name LbPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Pool member IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#ip_address LbPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * To ensure members are not overloaded, connections to a member can be capped by the load balancer. When a member reaches this limit, it is skipped during server selection. If it is not specified, it means that connections are unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#max_concurrent_connections LbPool#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: number;
  /**
  * If port is specified, all connections will be sent to this port. Only single port is supported. If unset, the same port the client connected to will be used, it could be overrode by default_pool_member_port setting in virtual server. The port should not specified for port range case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#port LbPool#port}
  */
  readonly port?: string;
  /**
  * Pool member weight is used for WEIGHTED_ROUND_ROBIN balancing algorithm. The weight value would be ignored in other algorithms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#weight LbPool#weight}
  */
  readonly weight?: number;
}

export function lbPoolMemberToTerraform(struct?: LbPoolMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_state: cdktf.stringToTerraform(struct!.adminState),
    backup_member: cdktf.booleanToTerraform(struct!.backupMember),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    max_concurrent_connections: cdktf.numberToTerraform(struct!.maxConcurrentConnections),
    port: cdktf.stringToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function lbPoolMemberToHclTerraform(struct?: LbPoolMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_state: {
      value: cdktf.stringToHclTerraform(struct!.adminState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_member: {
      value: cdktf.booleanToHclTerraform(struct!.backupMember),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrent_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
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

export class LbPoolMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbPoolMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminState !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminState = this._adminState;
    }
    if (this._backupMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMember = this._backupMember;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._maxConcurrentConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentConnections = this._maxConcurrentConnections;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbPoolMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminState = undefined;
      this._backupMember = undefined;
      this._displayName = undefined;
      this._ipAddress = undefined;
      this._maxConcurrentConnections = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminState = value.adminState;
      this._backupMember = value.backupMember;
      this._displayName = value.displayName;
      this._ipAddress = value.ipAddress;
      this._maxConcurrentConnections = value.maxConcurrentConnections;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // backup_member - computed: false, optional: true, required: false
  private _backupMember?: boolean | cdktf.IResolvable; 
  public get backupMember() {
    return this.getBooleanAttribute('backup_member');
  }
  public set backupMember(value: boolean | cdktf.IResolvable) {
    this._backupMember = value;
  }
  public resetBackupMember() {
    this._backupMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMemberInput() {
    return this._backupMember;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // max_concurrent_connections - computed: false, optional: true, required: false
  private _maxConcurrentConnections?: number; 
  public get maxConcurrentConnections() {
    return this.getNumberAttribute('max_concurrent_connections');
  }
  public set maxConcurrentConnections(value: number) {
    this._maxConcurrentConnections = value;
  }
  public resetMaxConcurrentConnections() {
    this._maxConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentConnectionsInput() {
    return this._maxConcurrentConnections;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

export class LbPoolMemberList extends cdktf.ComplexList {
  public internalValue? : LbPoolMember[] | cdktf.IResolvable

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
  public get(index: number): LbPoolMemberOutputReference {
    return new LbPoolMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LbPoolMemberGroupGroupingObject {
  /**
  * Identifier of the NSX resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#target_id LbPool#target_id}
  */
  readonly targetId?: string;
  /**
  * Type of the NSX resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#target_type LbPool#target_type}
  */
  readonly targetType?: string;
}

export function lbPoolMemberGroupGroupingObjectToTerraform(struct?: LbPoolMemberGroupGroupingObjectOutputReference | LbPoolMemberGroupGroupingObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_id: cdktf.stringToTerraform(struct!.targetId),
    target_type: cdktf.stringToTerraform(struct!.targetType),
  }
}


export function lbPoolMemberGroupGroupingObjectToHclTerraform(struct?: LbPoolMemberGroupGroupingObjectOutputReference | LbPoolMemberGroupGroupingObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_id: {
      value: cdktf.stringToHclTerraform(struct!.targetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbPoolMemberGroupGroupingObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbPoolMemberGroupGroupingObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbPoolMemberGroupGroupingObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetId = undefined;
      this._targetType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetId = value.targetId;
      this._targetType = value.targetType;
    }
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getBooleanAttribute('is_valid');
  }

  // target_display_name - computed: true, optional: false, required: false
  public get targetDisplayName() {
    return this.getStringAttribute('target_display_name');
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }
}
export interface LbPoolMemberGroup {
  /**
  * Ip revision filter is used to filter IPv4 or IPv6 addresses from the grouping object. If the filter is not specified, both IPv4 and IPv6 addresses would be used as server IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#ip_version_filter LbPool#ip_version_filter}
  */
  readonly ipVersionFilter?: string;
  /**
  * Specifies whether to limit pool members. If false, dynamic pool can grow up to the load balancer max pool member capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#limit_ip_list_size LbPool#limit_ip_list_size}
  */
  readonly limitIpListSize?: boolean | cdktf.IResolvable;
  /**
  * Limits the max number of pool members to the specified value if limit_ip_list_size is set to true, ignored otherwise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#max_ip_list_size LbPool#max_ip_list_size}
  */
  readonly maxIpListSize?: number;
  /**
  * If port is specified, all connections will be sent to this port. If unset, the same port the client connected to will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#port LbPool#port}
  */
  readonly port?: number;
  /**
  * grouping_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#grouping_object LbPool#grouping_object}
  */
  readonly groupingObject: LbPoolMemberGroupGroupingObject;
}

export function lbPoolMemberGroupToTerraform(struct?: LbPoolMemberGroupOutputReference | LbPoolMemberGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_version_filter: cdktf.stringToTerraform(struct!.ipVersionFilter),
    limit_ip_list_size: cdktf.booleanToTerraform(struct!.limitIpListSize),
    max_ip_list_size: cdktf.numberToTerraform(struct!.maxIpListSize),
    port: cdktf.numberToTerraform(struct!.port),
    grouping_object: lbPoolMemberGroupGroupingObjectToTerraform(struct!.groupingObject),
  }
}


export function lbPoolMemberGroupToHclTerraform(struct?: LbPoolMemberGroupOutputReference | LbPoolMemberGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_version_filter: {
      value: cdktf.stringToHclTerraform(struct!.ipVersionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_ip_list_size: {
      value: cdktf.booleanToHclTerraform(struct!.limitIpListSize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_ip_list_size: {
      value: cdktf.numberToHclTerraform(struct!.maxIpListSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grouping_object: {
      value: lbPoolMemberGroupGroupingObjectToHclTerraform(struct!.groupingObject),
      isBlock: true,
      type: "list",
      storageClassType: "LbPoolMemberGroupGroupingObjectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbPoolMemberGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbPoolMemberGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipVersionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersionFilter = this._ipVersionFilter;
    }
    if (this._limitIpListSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitIpListSize = this._limitIpListSize;
    }
    if (this._maxIpListSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpListSize = this._maxIpListSize;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._groupingObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupingObject = this._groupingObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbPoolMemberGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipVersionFilter = undefined;
      this._limitIpListSize = undefined;
      this._maxIpListSize = undefined;
      this._port = undefined;
      this._groupingObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipVersionFilter = value.ipVersionFilter;
      this._limitIpListSize = value.limitIpListSize;
      this._maxIpListSize = value.maxIpListSize;
      this._port = value.port;
      this._groupingObject.internalValue = value.groupingObject;
    }
  }

  // ip_version_filter - computed: false, optional: true, required: false
  private _ipVersionFilter?: string; 
  public get ipVersionFilter() {
    return this.getStringAttribute('ip_version_filter');
  }
  public set ipVersionFilter(value: string) {
    this._ipVersionFilter = value;
  }
  public resetIpVersionFilter() {
    this._ipVersionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionFilterInput() {
    return this._ipVersionFilter;
  }

  // limit_ip_list_size - computed: false, optional: true, required: false
  private _limitIpListSize?: boolean | cdktf.IResolvable; 
  public get limitIpListSize() {
    return this.getBooleanAttribute('limit_ip_list_size');
  }
  public set limitIpListSize(value: boolean | cdktf.IResolvable) {
    this._limitIpListSize = value;
  }
  public resetLimitIpListSize() {
    this._limitIpListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitIpListSizeInput() {
    return this._limitIpListSize;
  }

  // max_ip_list_size - computed: false, optional: true, required: false
  private _maxIpListSize?: number; 
  public get maxIpListSize() {
    return this.getNumberAttribute('max_ip_list_size');
  }
  public set maxIpListSize(value: number) {
    this._maxIpListSize = value;
  }
  public resetMaxIpListSize() {
    this._maxIpListSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIpListSizeInput() {
    return this._maxIpListSize;
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

  // grouping_object - computed: false, optional: false, required: true
  private _groupingObject = new LbPoolMemberGroupGroupingObjectOutputReference(this, "grouping_object");
  public get groupingObject() {
    return this._groupingObject;
  }
  public putGroupingObject(value: LbPoolMemberGroupGroupingObject) {
    this._groupingObject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupingObjectInput() {
    return this._groupingObject.internalValue;
  }
}
export interface LbPoolSnatTranslation {
  /**
  * Ip address or Ip range for SNAT of type SNAT_IP_POOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#ip LbPool#ip}
  */
  readonly ip?: string;
  /**
  * Type of SNAT performed to ensure reverse traffic from the server can be received and processed by the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#type LbPool#type}
  */
  readonly type?: string;
}

export function lbPoolSnatTranslationToTerraform(struct?: LbPoolSnatTranslationOutputReference | LbPoolSnatTranslation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function lbPoolSnatTranslationToHclTerraform(struct?: LbPoolSnatTranslationOutputReference | LbPoolSnatTranslation): any {
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

export class LbPoolSnatTranslationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbPoolSnatTranslation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbPoolSnatTranslation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._type = value.type;
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

  // type - computed: false, optional: true, required: false
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
export interface LbPoolTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#scope LbPool#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#tag LbPool#tag}
  */
  readonly tag?: string;
}

export function lbPoolTagToTerraform(struct?: LbPoolTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbPoolTagToHclTerraform(struct?: LbPoolTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbPoolTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbPoolTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbPoolTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LbPoolTagList extends cdktf.ComplexList {
  public internalValue? : LbPoolTag[] | cdktf.IResolvable

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
  public get(index: number): LbPoolTagOutputReference {
    return new LbPoolTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool nsxt_lb_pool}
*/
export class LbPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbPool to import
  * @param importFromId The id of the existing LbPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_pool nsxt_lb_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbPoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbPoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_pool',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeMonitorId = config.activeMonitorId;
    this._algorithm = config.algorithm;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._minActiveMembers = config.minActiveMembers;
    this._passiveMonitorId = config.passiveMonitorId;
    this._tcpMultiplexingEnabled = config.tcpMultiplexingEnabled;
    this._tcpMultiplexingNumber = config.tcpMultiplexingNumber;
    this._member.internalValue = config.member;
    this._memberGroup.internalValue = config.memberGroup;
    this._snatTranslation.internalValue = config.snatTranslation;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_monitor_id - computed: false, optional: true, required: false
  private _activeMonitorId?: string; 
  public get activeMonitorId() {
    return this.getStringAttribute('active_monitor_id');
  }
  public set activeMonitorId(value: string) {
    this._activeMonitorId = value;
  }
  public resetActiveMonitorId() {
    this._activeMonitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMonitorIdInput() {
    return this._activeMonitorId;
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // min_active_members - computed: false, optional: true, required: false
  private _minActiveMembers?: number; 
  public get minActiveMembers() {
    return this.getNumberAttribute('min_active_members');
  }
  public set minActiveMembers(value: number) {
    this._minActiveMembers = value;
  }
  public resetMinActiveMembers() {
    this._minActiveMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minActiveMembersInput() {
    return this._minActiveMembers;
  }

  // passive_monitor_id - computed: false, optional: true, required: false
  private _passiveMonitorId?: string; 
  public get passiveMonitorId() {
    return this.getStringAttribute('passive_monitor_id');
  }
  public set passiveMonitorId(value: string) {
    this._passiveMonitorId = value;
  }
  public resetPassiveMonitorId() {
    this._passiveMonitorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveMonitorIdInput() {
    return this._passiveMonitorId;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // tcp_multiplexing_enabled - computed: false, optional: true, required: false
  private _tcpMultiplexingEnabled?: boolean | cdktf.IResolvable; 
  public get tcpMultiplexingEnabled() {
    return this.getBooleanAttribute('tcp_multiplexing_enabled');
  }
  public set tcpMultiplexingEnabled(value: boolean | cdktf.IResolvable) {
    this._tcpMultiplexingEnabled = value;
  }
  public resetTcpMultiplexingEnabled() {
    this._tcpMultiplexingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMultiplexingEnabledInput() {
    return this._tcpMultiplexingEnabled;
  }

  // tcp_multiplexing_number - computed: false, optional: true, required: false
  private _tcpMultiplexingNumber?: number; 
  public get tcpMultiplexingNumber() {
    return this.getNumberAttribute('tcp_multiplexing_number');
  }
  public set tcpMultiplexingNumber(value: number) {
    this._tcpMultiplexingNumber = value;
  }
  public resetTcpMultiplexingNumber() {
    this._tcpMultiplexingNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMultiplexingNumberInput() {
    return this._tcpMultiplexingNumber;
  }

  // member - computed: false, optional: true, required: false
  private _member = new LbPoolMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: LbPoolMember[] | cdktf.IResolvable) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // member_group - computed: false, optional: true, required: false
  private _memberGroup = new LbPoolMemberGroupOutputReference(this, "member_group");
  public get memberGroup() {
    return this._memberGroup;
  }
  public putMemberGroup(value: LbPoolMemberGroup) {
    this._memberGroup.internalValue = value;
  }
  public resetMemberGroup() {
    this._memberGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupInput() {
    return this._memberGroup.internalValue;
  }

  // snat_translation - computed: false, optional: true, required: false
  private _snatTranslation = new LbPoolSnatTranslationOutputReference(this, "snat_translation");
  public get snatTranslation() {
    return this._snatTranslation;
  }
  public putSnatTranslation(value: LbPoolSnatTranslation) {
    this._snatTranslation.internalValue = value;
  }
  public resetSnatTranslation() {
    this._snatTranslation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatTranslationInput() {
    return this._snatTranslation.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbPoolTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbPoolTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_monitor_id: cdktf.stringToTerraform(this._activeMonitorId),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      min_active_members: cdktf.numberToTerraform(this._minActiveMembers),
      passive_monitor_id: cdktf.stringToTerraform(this._passiveMonitorId),
      tcp_multiplexing_enabled: cdktf.booleanToTerraform(this._tcpMultiplexingEnabled),
      tcp_multiplexing_number: cdktf.numberToTerraform(this._tcpMultiplexingNumber),
      member: cdktf.listMapper(lbPoolMemberToTerraform, true)(this._member.internalValue),
      member_group: lbPoolMemberGroupToTerraform(this._memberGroup.internalValue),
      snat_translation: lbPoolSnatTranslationToTerraform(this._snatTranslation.internalValue),
      tag: cdktf.listMapper(lbPoolTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_monitor_id: {
        value: cdktf.stringToHclTerraform(this._activeMonitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      min_active_members: {
        value: cdktf.numberToHclTerraform(this._minActiveMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_monitor_id: {
        value: cdktf.stringToHclTerraform(this._passiveMonitorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_multiplexing_enabled: {
        value: cdktf.booleanToHclTerraform(this._tcpMultiplexingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_multiplexing_number: {
        value: cdktf.numberToHclTerraform(this._tcpMultiplexingNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      member: {
        value: cdktf.listMapperHcl(lbPoolMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbPoolMemberList",
      },
      member_group: {
        value: lbPoolMemberGroupToHclTerraform(this._memberGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbPoolMemberGroupList",
      },
      snat_translation: {
        value: lbPoolSnatTranslationToHclTerraform(this._snatTranslation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbPoolSnatTranslationList",
      },
      tag: {
        value: cdktf.listMapperHcl(lbPoolTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbPoolTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
