// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Active healthcheck is disabled by default and can be enabled using this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#active_monitor_path PolicyLbPool#active_monitor_path}
  */
  readonly activeMonitorPath?: string;
  /**
  * Used by the load balancer to initiate new connections to the servers to check their health. Active healthchecks are deactivated by default and can be activated using this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#active_monitor_paths PolicyLbPool#active_monitor_paths}
  */
  readonly activeMonitorPaths?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#algorithm PolicyLbPool#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#description PolicyLbPool#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#display_name PolicyLbPool#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#id PolicyLbPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#min_active_members PolicyLbPool#min_active_members}
  */
  readonly minActiveMembers?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#nsx_id PolicyLbPool#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * Policy path for passive health monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#passive_monitor_path PolicyLbPool#passive_monitor_path}
  */
  readonly passiveMonitorPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#tcp_multiplexing_enabled PolicyLbPool#tcp_multiplexing_enabled}
  */
  readonly tcpMultiplexingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#tcp_multiplexing_number PolicyLbPool#tcp_multiplexing_number}
  */
  readonly tcpMultiplexingNumber?: number;
  /**
  * member block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#member PolicyLbPool#member}
  */
  readonly member?: PolicyLbPoolMember[] | cdktf.IResolvable;
  /**
  * member_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#member_group PolicyLbPool#member_group}
  */
  readonly memberGroup?: PolicyLbPoolMemberGroup;
  /**
  * snat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#snat PolicyLbPool#snat}
  */
  readonly snat?: PolicyLbPoolSnat;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#tag PolicyLbPool#tag}
  */
  readonly tag?: PolicyLbPoolTag[] | cdktf.IResolvable;
}
export interface PolicyLbPoolMember {
  /**
  * Member admin state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#admin_state PolicyLbPool#admin_state}
  */
  readonly adminState?: string;
  /**
  * A boolean flag which reflects whether this is a backup pool member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#backup_member PolicyLbPool#backup_member}
  */
  readonly backupMember?: boolean | cdktf.IResolvable;
  /**
  * Pool member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#display_name PolicyLbPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Pool member IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#ip_address PolicyLbPool#ip_address}
  */
  readonly ipAddress: string;
  /**
  * To ensure members are not overloaded, connections to a member can be capped by the load balancer. When a member reaches this limit, it is skipped during server selection. If it is not specified, it means that connections are unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#max_concurrent_connections PolicyLbPool#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: number;
  /**
  * If port is specified, all connections will be sent to this port. Only single port is supported. If unset, the same port the client connected to will be used, it could be overrode by default_pool_member_port setting in virtual server. The port should not specified for port range case
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#port PolicyLbPool#port}
  */
  readonly port?: string;
  /**
  * Pool member weight is used for WEIGHTED_ROUND_ROBIN balancing algorithm. The weight value would be ignored in other algorithms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#weight PolicyLbPool#weight}
  */
  readonly weight?: number;
}

export function policyLbPoolMemberToTerraform(struct?: PolicyLbPoolMember | cdktf.IResolvable): any {
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


export function policyLbPoolMemberToHclTerraform(struct?: PolicyLbPoolMember | cdktf.IResolvable): any {
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

export class PolicyLbPoolMemberOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbPoolMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyLbPoolMember | cdktf.IResolvable | undefined) {
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

export class PolicyLbPoolMemberList extends cdktf.ComplexList {
  public internalValue? : PolicyLbPoolMember[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbPoolMemberOutputReference {
    return new PolicyLbPoolMemberOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbPoolMemberGroup {
  /**
  * Use IPv4 addresses as server IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#allow_ipv4 PolicyLbPool#allow_ipv4}
  */
  readonly allowIpv4?: boolean | cdktf.IResolvable;
  /**
  * Use IPv6 addresses as server IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#allow_ipv6 PolicyLbPool#allow_ipv6}
  */
  readonly allowIpv6?: boolean | cdktf.IResolvable;
  /**
  * The IP list of the Group would be used as pool member IP setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#group_path PolicyLbPool#group_path}
  */
  readonly groupPath: string;
  /**
  * Limits the max number of pool members to the specified value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#max_ip_list_size PolicyLbPool#max_ip_list_size}
  */
  readonly maxIpListSize?: number;
  /**
  * If port is specified, all connections will be sent to this port. If unset, the same port the client connected to will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#port PolicyLbPool#port}
  */
  readonly port?: string;
}

export function policyLbPoolMemberGroupToTerraform(struct?: PolicyLbPoolMemberGroupOutputReference | PolicyLbPoolMemberGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ipv4: cdktf.booleanToTerraform(struct!.allowIpv4),
    allow_ipv6: cdktf.booleanToTerraform(struct!.allowIpv6),
    group_path: cdktf.stringToTerraform(struct!.groupPath),
    max_ip_list_size: cdktf.numberToTerraform(struct!.maxIpListSize),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function policyLbPoolMemberGroupToHclTerraform(struct?: PolicyLbPoolMemberGroupOutputReference | PolicyLbPoolMemberGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.allowIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.allowIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_path: {
      value: cdktf.stringToHclTerraform(struct!.groupPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_ip_list_size: {
      value: cdktf.numberToHclTerraform(struct!.maxIpListSize),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbPoolMemberGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbPoolMemberGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpv4 = this._allowIpv4;
    }
    if (this._allowIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowIpv6 = this._allowIpv6;
    }
    if (this._groupPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupPath = this._groupPath;
    }
    if (this._maxIpListSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIpListSize = this._maxIpListSize;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbPoolMemberGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowIpv4 = undefined;
      this._allowIpv6 = undefined;
      this._groupPath = undefined;
      this._maxIpListSize = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowIpv4 = value.allowIpv4;
      this._allowIpv6 = value.allowIpv6;
      this._groupPath = value.groupPath;
      this._maxIpListSize = value.maxIpListSize;
      this._port = value.port;
    }
  }

  // allow_ipv4 - computed: false, optional: true, required: false
  private _allowIpv4?: boolean | cdktf.IResolvable; 
  public get allowIpv4() {
    return this.getBooleanAttribute('allow_ipv4');
  }
  public set allowIpv4(value: boolean | cdktf.IResolvable) {
    this._allowIpv4 = value;
  }
  public resetAllowIpv4() {
    this._allowIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpv4Input() {
    return this._allowIpv4;
  }

  // allow_ipv6 - computed: false, optional: true, required: false
  private _allowIpv6?: boolean | cdktf.IResolvable; 
  public get allowIpv6() {
    return this.getBooleanAttribute('allow_ipv6');
  }
  public set allowIpv6(value: boolean | cdktf.IResolvable) {
    this._allowIpv6 = value;
  }
  public resetAllowIpv6() {
    this._allowIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIpv6Input() {
    return this._allowIpv6;
  }

  // group_path - computed: false, optional: false, required: true
  private _groupPath?: string; 
  public get groupPath() {
    return this.getStringAttribute('group_path');
  }
  public set groupPath(value: string) {
    this._groupPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPathInput() {
    return this._groupPath;
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
}
export interface PolicyLbPoolSnat {
  /**
  * List of IP CIDRs or IP ranges for SNAT of type SNAT_IP_POOL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#ip_pool_addresses PolicyLbPool#ip_pool_addresses}
  */
  readonly ipPoolAddresses?: string[];
  /**
  * Type of SNAT performed to ensure reverse traffic from the server can be received and processed by the loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#type PolicyLbPool#type}
  */
  readonly type?: string;
}

export function policyLbPoolSnatToTerraform(struct?: PolicyLbPoolSnatOutputReference | PolicyLbPoolSnat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_pool_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPoolAddresses),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function policyLbPoolSnatToHclTerraform(struct?: PolicyLbPoolSnatOutputReference | PolicyLbPoolSnat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_pool_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPoolAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class PolicyLbPoolSnatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyLbPoolSnat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipPoolAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPoolAddresses = this._ipPoolAddresses;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbPoolSnat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipPoolAddresses = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipPoolAddresses = value.ipPoolAddresses;
      this._type = value.type;
    }
  }

  // ip_pool_addresses - computed: false, optional: true, required: false
  private _ipPoolAddresses?: string[]; 
  public get ipPoolAddresses() {
    return this.getListAttribute('ip_pool_addresses');
  }
  public set ipPoolAddresses(value: string[]) {
    this._ipPoolAddresses = value;
  }
  public resetIpPoolAddresses() {
    this._ipPoolAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPoolAddressesInput() {
    return this._ipPoolAddresses;
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
export interface PolicyLbPoolTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#scope PolicyLbPool#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#tag PolicyLbPool#tag}
  */
  readonly tag?: string;
}

export function policyLbPoolTagToTerraform(struct?: PolicyLbPoolTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbPoolTagToHclTerraform(struct?: PolicyLbPoolTag | cdktf.IResolvable): any {
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

export class PolicyLbPoolTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbPoolTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyLbPoolTag | cdktf.IResolvable | undefined) {
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

export class PolicyLbPoolTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbPoolTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbPoolTagOutputReference {
    return new PolicyLbPoolTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool nsxt_policy_lb_pool}
*/
export class PolicyLbPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbPool to import
  * @param importFromId The id of the existing PolicyLbPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_lb_pool nsxt_policy_lb_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbPoolConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_pool',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.11.0',
        providerVersionConstraint: '3.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeMonitorPath = config.activeMonitorPath;
    this._activeMonitorPaths = config.activeMonitorPaths;
    this._algorithm = config.algorithm;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._minActiveMembers = config.minActiveMembers;
    this._nsxId = config.nsxId;
    this._passiveMonitorPath = config.passiveMonitorPath;
    this._tcpMultiplexingEnabled = config.tcpMultiplexingEnabled;
    this._tcpMultiplexingNumber = config.tcpMultiplexingNumber;
    this._member.internalValue = config.member;
    this._memberGroup.internalValue = config.memberGroup;
    this._snat.internalValue = config.snat;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_monitor_path - computed: false, optional: true, required: false
  private _activeMonitorPath?: string; 
  public get activeMonitorPath() {
    return this.getStringAttribute('active_monitor_path');
  }
  public set activeMonitorPath(value: string) {
    this._activeMonitorPath = value;
  }
  public resetActiveMonitorPath() {
    this._activeMonitorPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMonitorPathInput() {
    return this._activeMonitorPath;
  }

  // active_monitor_paths - computed: false, optional: true, required: false
  private _activeMonitorPaths?: string[]; 
  public get activeMonitorPaths() {
    return this.getListAttribute('active_monitor_paths');
  }
  public set activeMonitorPaths(value: string[]) {
    this._activeMonitorPaths = value;
  }
  public resetActiveMonitorPaths() {
    this._activeMonitorPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeMonitorPathsInput() {
    return this._activeMonitorPaths;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // passive_monitor_path - computed: false, optional: true, required: false
  private _passiveMonitorPath?: string; 
  public get passiveMonitorPath() {
    return this.getStringAttribute('passive_monitor_path');
  }
  public set passiveMonitorPath(value: string) {
    this._passiveMonitorPath = value;
  }
  public resetPassiveMonitorPath() {
    this._passiveMonitorPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveMonitorPathInput() {
    return this._passiveMonitorPath;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
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
  private _member = new PolicyLbPoolMemberList(this, "member", false);
  public get member() {
    return this._member;
  }
  public putMember(value: PolicyLbPoolMember[] | cdktf.IResolvable) {
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
  private _memberGroup = new PolicyLbPoolMemberGroupOutputReference(this, "member_group");
  public get memberGroup() {
    return this._memberGroup;
  }
  public putMemberGroup(value: PolicyLbPoolMemberGroup) {
    this._memberGroup.internalValue = value;
  }
  public resetMemberGroup() {
    this._memberGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberGroupInput() {
    return this._memberGroup.internalValue;
  }

  // snat - computed: false, optional: true, required: false
  private _snat = new PolicyLbPoolSnatOutputReference(this, "snat");
  public get snat() {
    return this._snat;
  }
  public putSnat(value: PolicyLbPoolSnat) {
    this._snat.internalValue = value;
  }
  public resetSnat() {
    this._snat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbPoolTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbPoolTag[] | cdktf.IResolvable) {
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
      active_monitor_path: cdktf.stringToTerraform(this._activeMonitorPath),
      active_monitor_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeMonitorPaths),
      algorithm: cdktf.stringToTerraform(this._algorithm),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      min_active_members: cdktf.numberToTerraform(this._minActiveMembers),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      passive_monitor_path: cdktf.stringToTerraform(this._passiveMonitorPath),
      tcp_multiplexing_enabled: cdktf.booleanToTerraform(this._tcpMultiplexingEnabled),
      tcp_multiplexing_number: cdktf.numberToTerraform(this._tcpMultiplexingNumber),
      member: cdktf.listMapper(policyLbPoolMemberToTerraform, true)(this._member.internalValue),
      member_group: policyLbPoolMemberGroupToTerraform(this._memberGroup.internalValue),
      snat: policyLbPoolSnatToTerraform(this._snat.internalValue),
      tag: cdktf.listMapper(policyLbPoolTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_monitor_path: {
        value: cdktf.stringToHclTerraform(this._activeMonitorPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_monitor_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activeMonitorPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive_monitor_path: {
        value: cdktf.stringToHclTerraform(this._passiveMonitorPath),
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
        value: cdktf.listMapperHcl(policyLbPoolMemberToHclTerraform, true)(this._member.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbPoolMemberList",
      },
      member_group: {
        value: policyLbPoolMemberGroupToHclTerraform(this._memberGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbPoolMemberGroupList",
      },
      snat: {
        value: policyLbPoolSnatToHclTerraform(this._snat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyLbPoolSnatList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbPoolTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbPoolTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
