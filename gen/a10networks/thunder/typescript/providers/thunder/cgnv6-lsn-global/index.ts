// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LsnGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'disable': Don't attempt port preservation for NAT allocation;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#attempt_port_preservation Cgnv6LsnGlobal#attempt_port_preservation}
  */
  readonly attemptPortPreservation?: string;
  /**
  * Enable enhanced user tracking and visibility (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#enhanced_user_tracking Cgnv6LsnGlobal#enhanced_user_tracking}
  */
  readonly enhancedUserTracking?: number;
  /**
  * 'filter-none': Allow self-hairpinning (default). Warning: Only applies to UDP.  TCP will use filter-self-ip-port; 'filter-self-ip': Block hairpinning to the user's own IP; 'filter-self-ip-port': Block hairpinning to the user's same IP and port combination;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#hairpinning Cgnv6LsnGlobal#hairpinning}
  */
  readonly hairpinning?: string;
  /**
  * Set LSN Half close timeout (Half close timeout in seconds (default not set))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#half_close_timeout Cgnv6LsnGlobal#half_close_timeout}
  */
  readonly halfCloseTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#id Cgnv6LsnGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': Enable NAT Inbound Refresh Behavior; 'disable': Disable NAT Inbound Refresh Behavior;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#inbound_refresh Cgnv6LsnGlobal#inbound_refresh}
  */
  readonly inboundRefresh?: string;
  /**
  * 'enable': Enable NAT full cone refresh for inbound flows; 'disable': Disable NAT full cone refresh for inbound flows;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#inbound_refresh_full_cone Cgnv6LsnGlobal#inbound_refresh_full_cone}
  */
  readonly inboundRefreshFullCone?: string;
  /**
  * 'random': Random (long-run uniformly distributed) NAT IP selection (default); 'round-robin': Round-robin; 'least-used-strict': Fewest NAT ports used; 'least-udp-used-strict': Fewest UDP NAT ports used; 'least-tcp-used-strict': Fewest TCP NAT ports used; 'least-reserved-strict': Fewest NAT ports reserved; 'least-udp-reserved-strict': Fewest UDP NAT ports reserved; 'least-tcp-reserved-strict': Fewest TCP NAT ports reserved; 'least-users-strict': Fewest number of users;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#ip_selection Cgnv6LsnGlobal#ip_selection}
  */
  readonly ipSelection?: string;
  /**
  * Strictly adheres to sticky-nat (default: disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#strictly_sticky_nat Cgnv6LsnGlobal#strictly_sticky_nat}
  */
  readonly strictlyStickyNat?: number;
  /**
  * Set LSN SYN timeout (SYN idle-timeout in seconds (default: 4 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#syn_timeout Cgnv6LsnGlobal#syn_timeout}
  */
  readonly synTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#uuid Cgnv6LsnGlobal#uuid}
  */
  readonly uuid?: string;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#icmp Cgnv6LsnGlobal#icmp}
  */
  readonly icmp?: Cgnv6LsnGlobalIcmp;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#logging Cgnv6LsnGlobal#logging}
  */
  readonly logging?: Cgnv6LsnGlobalLogging;
  /**
  * port_batching block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#port_batching Cgnv6LsnGlobal#port_batching}
  */
  readonly portBatching?: Cgnv6LsnGlobalPortBatching;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#sampling_enable Cgnv6LsnGlobal#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LsnGlobalSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6LsnGlobalIcmp {
  /**
  * 'host-unreachable': Send ICMP destination host unreachable; 'admin-filtered': Send ICMP admin filtered; 'disable': Disable ICMP port unavailable message (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#send_on_port_unavailable Cgnv6LsnGlobal#send_on_port_unavailable}
  */
  readonly sendOnPortUnavailable?: string;
  /**
  * 'host-unreachable': Send ICMP destination host unreachable; 'admin-filtered': Send ICMP admin filtered (default); 'disable': Disable ICMP quota exceeded message;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#send_on_user_quota_exceeded Cgnv6LsnGlobal#send_on_user_quota_exceeded}
  */
  readonly sendOnUserQuotaExceeded?: string;
}

export function cgnv6LsnGlobalIcmpToTerraform(struct?: Cgnv6LsnGlobalIcmpOutputReference | Cgnv6LsnGlobalIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send_on_port_unavailable: cdktf.stringToTerraform(struct!.sendOnPortUnavailable),
    send_on_user_quota_exceeded: cdktf.stringToTerraform(struct!.sendOnUserQuotaExceeded),
  }
}


export function cgnv6LsnGlobalIcmpToHclTerraform(struct?: Cgnv6LsnGlobalIcmpOutputReference | Cgnv6LsnGlobalIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send_on_port_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.sendOnPortUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_on_user_quota_exceeded: {
      value: cdktf.stringToHclTerraform(struct!.sendOnUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnGlobalIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnGlobalIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sendOnPortUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnPortUnavailable = this._sendOnPortUnavailable;
    }
    if (this._sendOnUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOnUserQuotaExceeded = this._sendOnUserQuotaExceeded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnGlobalIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sendOnPortUnavailable = undefined;
      this._sendOnUserQuotaExceeded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sendOnPortUnavailable = value.sendOnPortUnavailable;
      this._sendOnUserQuotaExceeded = value.sendOnUserQuotaExceeded;
    }
  }

  // send_on_port_unavailable - computed: false, optional: true, required: false
  private _sendOnPortUnavailable?: string; 
  public get sendOnPortUnavailable() {
    return this.getStringAttribute('send_on_port_unavailable');
  }
  public set sendOnPortUnavailable(value: string) {
    this._sendOnPortUnavailable = value;
  }
  public resetSendOnPortUnavailable() {
    this._sendOnPortUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnPortUnavailableInput() {
    return this._sendOnPortUnavailable;
  }

  // send_on_user_quota_exceeded - computed: false, optional: true, required: false
  private _sendOnUserQuotaExceeded?: string; 
  public get sendOnUserQuotaExceeded() {
    return this.getStringAttribute('send_on_user_quota_exceeded');
  }
  public set sendOnUserQuotaExceeded(value: string) {
    this._sendOnUserQuotaExceeded = value;
  }
  public resetSendOnUserQuotaExceeded() {
    this._sendOnUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOnUserQuotaExceededInput() {
    return this._sendOnUserQuotaExceeded;
  }
}
export interface Cgnv6LsnGlobalLoggingPool {
  /**
  * NAT pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#pool_name Cgnv6LsnGlobal#pool_name}
  */
  readonly poolName?: string;
  /**
  * Bind a NAT logging template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#template Cgnv6LsnGlobal#template}
  */
  readonly template?: string;
}

export function cgnv6LsnGlobalLoggingPoolToTerraform(struct?: Cgnv6LsnGlobalLoggingPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pool_name: cdktf.stringToTerraform(struct!.poolName),
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function cgnv6LsnGlobalLoggingPoolToHclTerraform(struct?: Cgnv6LsnGlobalLoggingPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pool_name: {
      value: cdktf.stringToHclTerraform(struct!.poolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnGlobalLoggingPoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnGlobalLoggingPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._poolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolName = this._poolName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnGlobalLoggingPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._poolName = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._poolName = value.poolName;
      this._template = value.template;
    }
  }

  // pool_name - computed: false, optional: true, required: false
  private _poolName?: string; 
  public get poolName() {
    return this.getStringAttribute('pool_name');
  }
  public set poolName(value: string) {
    this._poolName = value;
  }
  public resetPoolName() {
    this._poolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolNameInput() {
    return this._poolName;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class Cgnv6LsnGlobalLoggingPoolList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnGlobalLoggingPool[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnGlobalLoggingPoolOutputReference {
    return new Cgnv6LsnGlobalLoggingPoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LsnGlobalLogging {
  /**
  * Bind the default NAT logging template for LSN (Bind a NAT logging template)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#default_template Cgnv6LsnGlobal#default_template}
  */
  readonly defaultTemplate?: string;
  /**
  * Select partition name for logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#partition_name Cgnv6LsnGlobal#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Select shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#shared Cgnv6LsnGlobal#shared}
  */
  readonly shared?: number;
  /**
  * pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#pool Cgnv6LsnGlobal#pool}
  */
  readonly pool?: Cgnv6LsnGlobalLoggingPool[] | cdktf.IResolvable;
}

export function cgnv6LsnGlobalLoggingToTerraform(struct?: Cgnv6LsnGlobalLoggingOutputReference | Cgnv6LsnGlobalLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_template: cdktf.stringToTerraform(struct!.defaultTemplate),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    shared: cdktf.numberToTerraform(struct!.shared),
    pool: cdktf.listMapper(cgnv6LsnGlobalLoggingPoolToTerraform, true)(struct!.pool),
  }
}


export function cgnv6LsnGlobalLoggingToHclTerraform(struct?: Cgnv6LsnGlobalLoggingOutputReference | Cgnv6LsnGlobalLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_template: {
      value: cdktf.stringToHclTerraform(struct!.defaultTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pool: {
      value: cdktf.listMapperHcl(cgnv6LsnGlobalLoggingPoolToHclTerraform, true)(struct!.pool),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6LsnGlobalLoggingPoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnGlobalLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnGlobalLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTemplate = this._defaultTemplate;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnGlobalLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultTemplate = undefined;
      this._partitionName = undefined;
      this._shared = undefined;
      this._pool.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultTemplate = value.defaultTemplate;
      this._partitionName = value.partitionName;
      this._shared = value.shared;
      this._pool.internalValue = value.pool;
    }
  }

  // default_template - computed: false, optional: true, required: false
  private _defaultTemplate?: string; 
  public get defaultTemplate() {
    return this.getStringAttribute('default_template');
  }
  public set defaultTemplate(value: string) {
    this._defaultTemplate = value;
  }
  public resetDefaultTemplate() {
    this._defaultTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTemplateInput() {
    return this._defaultTemplate;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // pool - computed: false, optional: true, required: false
  private _pool = new Cgnv6LsnGlobalLoggingPoolList(this, "pool", false);
  public get pool() {
    return this._pool;
  }
  public putPool(value: Cgnv6LsnGlobalLoggingPool[] | cdktf.IResolvable) {
    this._pool.internalValue = value;
  }
  public resetPool() {
    this._pool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }
}
export interface Cgnv6LsnGlobalPortBatching {
  /**
  * '1': Allocate 1 port at a time (default); '8': Allocate 8 ports at a time; '16': Allocate 16 ports at a time; '32': Allocate 32 ports at a time; '64': Allocate 64 ports at a time; '128': Allocate 128 ports at a time; '256': Allocate 256 ports at a time; '512': Allocate 512 ports at a time;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#size Cgnv6LsnGlobal#size}
  */
  readonly size?: string;
  /**
  * Minutes before TCP NAT ports can be reused (default: 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#tcp_time_wait_interval Cgnv6LsnGlobal#tcp_time_wait_interval}
  */
  readonly tcpTimeWaitInterval?: number;
}

export function cgnv6LsnGlobalPortBatchingToTerraform(struct?: Cgnv6LsnGlobalPortBatchingOutputReference | Cgnv6LsnGlobalPortBatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size: cdktf.stringToTerraform(struct!.size),
    tcp_time_wait_interval: cdktf.numberToTerraform(struct!.tcpTimeWaitInterval),
  }
}


export function cgnv6LsnGlobalPortBatchingToHclTerraform(struct?: Cgnv6LsnGlobalPortBatchingOutputReference | Cgnv6LsnGlobalPortBatching): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_time_wait_interval: {
      value: cdktf.numberToHclTerraform(struct!.tcpTimeWaitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnGlobalPortBatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LsnGlobalPortBatching | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._tcpTimeWaitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTimeWaitInterval = this._tcpTimeWaitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnGlobalPortBatching | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._size = undefined;
      this._tcpTimeWaitInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._size = value.size;
      this._tcpTimeWaitInterval = value.tcpTimeWaitInterval;
    }
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tcp_time_wait_interval - computed: false, optional: true, required: false
  private _tcpTimeWaitInterval?: number; 
  public get tcpTimeWaitInterval() {
    return this.getNumberAttribute('tcp_time_wait_interval');
  }
  public set tcpTimeWaitInterval(value: number) {
    this._tcpTimeWaitInterval = value;
  }
  public resetTcpTimeWaitInterval() {
    this._tcpTimeWaitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTimeWaitIntervalInput() {
    return this._tcpTimeWaitInterval;
  }
}
export interface Cgnv6LsnGlobalSamplingEnable {
  /**
  * 'all': all; 'total_tcp_allocated': Total TCP Ports Allocated; 'total_tcp_freed': Total TCP Ports Freed; 'total_udp_allocated': Total UDP Ports Allocated; 'total_udp_freed': Total UDP Ports Freed; 'total_icmp_allocated': Total ICMP Ports Allocated; 'total_icmp_freed': Total ICMP Ports Freed; 'data_session_created': Data Session Created; 'data_session_freed': Data Session Freed; 'user_quota_created': User-Quota Created; 'user_quota_put_in_del_q': User-Quota Freed; 'user_quota_failure': User-Quota Creation Failed; 'nat_port_unavailable_tcp': TCP NAT Port Unavailable; 'nat_port_unavailable_udp': UDP NAT Port Unavailable; 'nat_port_unavailable_icmp': ICMP NAT Port Unavailable; 'new_user_resource_unavailable': New User NAT Resource Unavailable; 'tcp_user_quota_exceeded': TCP User-Quota Exceeded; 'udp_user_quota_exceeded': UDP User-Quota Exceeded; 'icmp_user_quota_exceeded': ICMP User-Quota Exceeded; 'extended_quota_matched': Extended User-Quota Matched; 'extended_quota_exceeded': Extended User-Quota Exceeded; 'data_sesn_user_quota_exceeded': Data Session User-Quota Exceeded; 'data_sesn_rate_user_quota_exceeded': Conn Rate User-Quota Exceeded; 'tcp_fullcone_created': TCP Full-cone Session Created; 'tcp_fullcone_freed': TCP Full-cone Session Freed; 'udp_fullcone_created': UDP Full-cone Session Created; 'udp_fullcone_freed': UDP Full-cone Session Freed; 'fullcone_failure': Full-cone Session Creation Failed; 'hairpin': Hairpin Session Created; 'fullcone_self_hairpinning_drop': Self-Hairpinning Drop; 'endpoint_indep_map_match': Endpoint-Independent Mapping Matched; 'endpoint_indep_filter_match': Endpoint-Independent Filtering Matched; 'inbound_filtered': Endpoint-Dependent Filtering Drop; 'eif_limit_exceeded': Endpoint-Independent Filtering Inbound Limit Exceeded; 'total_tcp_overloaded': TCP Port Overloaded; 'total_udp_overloaded': UDP Port Overloaded; 'port_overloading_smp_inserted_tcp': TCP Port Overloading Session Created; 'port_overloading_smp_inserted_udp': UDP Port Overloading Session Created; 'port_overloading_smp_free_tcp': TCP Port Overloading Session Freed; 'port_overloading_smp_free_udp': UDP Port Overloading Session Freed; 'nat_pool_unusable': NAT Pool Unusable; 'ha_nat_pool_unusable': HA NAT Pool Unusable; 'ha_nat_pool_batch_type_mismatch': HA NAT Pool Batch Type Mismatch; 'no_radius_profile_match': No RADIUS Profile Match; 'nat_ip_max_tcp_ports_allocated': NAT IP TCP Max Ports Allocated; 'nat_ip_max_udp_ports_allocated': NAT IP UDP Max Ports Allocated; 'no_class_list_match': No Class-List Match; 'lid_drop': LSN LID Drop; 'lid_pass_through': LSN LID Pass-through; 'fullcone_in_del_q': Full-cone session found in delete queue; 'fullcone_retry_lookup': Full-cone session retry look-up; 'fullcone_not_found': Full-cone session not found; 'nat_port_double_free': NAT Port Double Free; 'nat_port_chunk_freed_from_cpu': NAT Port Chunks Freed From CPU; 'nat_port_freed_from_diff_cpu': NAT Port Freed On Different CPU; 'nat_pool_deleted': NAT Pool Deleted; 'nat_esp_ip_conflicts': LSN NAT ESP IP Conflicts; 'nat_esp_no_control_sesn': LSN NAT ESP No Control Session; 'esp_user_quota_exceeded': ESP User-Quota exceeded; 'udp_alg_user_quota_exceeded': UDP ALG User-Quota exceeded; 'gre_user_quota_exceeded': GRE User-Quota exceeded; 'ha_classlist_mismatch': HA Class-list Mismatch; 'ha_user_quota_mismatch': HA User-Quota Mismatch; 'ha_fullcone_mismatch': HA Full-cone Mismatch; 'ha_port_mismatch': HA Port Mismatch; 'ha_dnat_mismatch': HA Destination NAT Config Mismatch; 'ha_nat_port_unavailable': HA NAT Port Unavailable; 'ha_unknown_nat_ip': HA Unknown NAT IP; 'ha_fullcone_failure': HA Full-cone Session Failure; 'ha_fullcone_create_race_failure': HA Full-cone Create Race Failure; 'ha_endpoint_indep_map_match': HA Endpoint-independent Matching; 'standby_class_list_drop': HA Standby Class-List drop; 'bad_tuple_nat_ip': Bad NAT IP from tuple; 'bad_smp_tuple_nat_ip': Bad NAT IP from SMP tuple; 'fullcone_inbound_nat_pool_mismatch': Full-cone Session NAT Pool Mismatch; 'fullcone_overflow_eim': Full-cone Session EIM Overflow; 'fullcone_overflow_eif': Full-cone Session EIF Overflow; 'cross_cpu_helper_created': Cross CPU Session Helper Created; 'cross_cpu_sent': Cross CPU Helper Packets Sent; 'cross_cpu_rcv': Cross CPU Helper Packets Received; 'cross_cpu_bad_l3': Cross CPU Unsupported L3; 'cross_cpu_bad_l4': Cross CPU Unsupported L4; 'cross_cpu_no_session': Cross CPU No Session Found; 'cross_cpu_helper_free': Cross CPU Helper Free; 'cross_cpu_helper_free_retry_lookup': Cross CPU Helper Free Retry Lookup; 'cross_cpu_helper_free_not_found': Cross CPU Helper Free Not Found; 'cross_cpu_helper_deleted': Cross CPU Helper Deleted; 'cross_cpu_helper_cpu_mismatch': Cross CPU Helper CPU Mismatch; 'cross_cpu_helper_nat_pool_standby': Cross CPU Helper NAT Pool Standby; 'cross_cpu_helper_double_add': Cross CPU Helper Double Add Attempt; 'mtu_exceeded': Packet Exceeded MTU; 'frag': Fragmented Packets; 'dslite_tunnel_frag': IPv4 Fragment DS-Lite Packet; 'sixrd_tunnel_frag': IPv6 Fragment IPv6-in-IPv4 Packet; 'frag_icmp': ICMP Packet Too Big Sent; 'frag_tunnel_icmp': DS-Lite ICMP Packet Too Big Sent; 'quota_ext_mem_allocated': Quota Extension Memory Allocated; 'quota_ext_mem_alloc_failure': Quota Extension Out of Memory; 'quota_ext_mem_freed': Quota Extension Memory Freed; 'quota_ext_put_in_del_q': Quota Extension Put in Delete Queue; 'port_batch_num_mismatch': Specific Port Batch Num Ports Mismatch; 'port_batch_interval_mismatch': Specific Port Batch Port Interval Mismatch; 'port_pair_alloc_bad_math': Port Pair Alloc Bad Math; 'free_port_from_quota_no_container': Free Port from Quota No Container; 'free_port_from_quota_no_port_info': Free Port From Quota No Port Info; 'static_nat_cross_cpu_helper_created': Cross CPU Helper Created for Static NAT; 'static_nat_cross_cpu_helper_deleted': Cross CPU Helper Deleted for Static NAT; 'static_nat_cross_cpu_helper_standby': Cross CPU Helper Static NAT Standby; 'static_nat_cross_cpu_helper_cpu_mismatch': Static NAT Cross CPU Helper CPU Mismatch; 'static_nat_cross_cpu_sent': Static NAT Cross CPU Helper Sent; 'static_nat_cross_cpu_rcv': Static NAT Cross CPU Helper Packets Received; 'static_nat_cross_cpu_bad_l3': Static NAT Cross CPU Unsupported L3; 'static_nat_cross_cpu_bad_l4': Static NAT Cross CPU Unsupported L4; 'static_nat_cross_cpu_no_session': Static NAT Cross CPU No Session Found; 'static_nat_cross_cpu_helper_free': Static NAT Cross CPU Helper Free; 'static_nat_cross_cpu_helper_free_retry_lookup': Static NAT Cross CPU Helper Free Retry Lookup; 'static_nat_cross_cpu_helper_free_not_found': Static NAT Cross CPU Helper Free Not Found; 'static_nat_ha_map_mismatch': Static NAT Mapping Mismatch on HA Standby; 'ip_slb_cross_cpu_sent': IP SLB Cross CPU Packets Sent; 'fullcone_force_deleted': Full-cone Session Force Deleted; 'user_quota_mem_allocated': User-Quota Memory Allocated; 'user_quota_mem_freed': User-Quota Memory Freed; 'user_quota_created_shadow': Total User-Quota Created; 'quota_marked_deleted': User-Quota Marked Deleted; 'quota_delete_not_in_bucket': User-Quota Delete Not In Bucket; 'user_quota_put_in_del_q_shadow': Total User-Quota Put In Del Q; 'tcp_out_of_state_rst_sent': Total Out of State TCP RST sent; 'tcp_out_of_state_rst_dropped': Total Out of State TCP RST dropped; 'icmp_out_of_state_uqe_admin_filtered_sent': Total User Quota Exceeded ICMP admin filtered sent; 'icmp_out_of_state_uqe_host_unreachable_sent': Total User Quota Exceeded ICMP host unreachable sent; 'icmp_out_of_state_uqe_dropped': Total User Queue Exceeded ICMP notification dropped;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#counters1 Cgnv6LsnGlobal#counters1}
  */
  readonly counters1?: string;
  /**
  * 'user_quota_not_found': User-Quota Not Found; 'tcp_fullcone_created_shadow': Total TCP Full-cone sessions created; 'tcp_fullcone_freed_shadow': Total TCP Full-cone sessions freed; 'udp_fullcone_created_shadow': Total UDP Full-cone sessions created; 'udp_fullcone_freed_shadow': Total UDP Full-cone sessions freed; 'udp_alg_fullcone_created': Total UDP ALG Full-cone sessions created; 'udp_alg_fullcone_freed': Total UDP ALG Full-cone sessions freed; 'fullcone_created': Total Full-cone sessions created; 'fullcone_freed': Total Full-cone sessions freed; 'data_session_created_shadow': Total Data Sessions Created; 'data_session_freed_shadow': Total Data Sessions Freed; 'data_session_user_quota_mismatch': Data Session Counter Per User Mismatch; 'extended_quota_mismatched': Extended User-Quota Mismatched; 'nat_port_unavailable_other': Other NAT Port Unavailable; 'nat_port_unavailable': Total NAT Port Unavailable; 'new_user_resource_unavailable_tcp': TCP New User NAT Resource Unavailable; 'new_user_resource_unavailable_udp': UDP New User NAT Resource Unavailable; 'new_user_resource_unavailable_icmp': ICMP New User NAT Resource Unavailable; 'new_user_resource_unavailable_other': Other New User NAT Resource Unavailable; 'total_tcp_allocated_shadow': Total TCP Ports Allocated; 'total_tcp_freed_shadow': Total TCP Ports Freed; 'total_udp_allocated_shadow': Total UDP Ports Allocated; 'total_udp_freed_shadow': Total UDP Ports Freed; 'total_icmp_allocated_shadow': Total ICMP Ports Allocated; 'total_icmp_freed_shadow': Total ICMP Ports Freed; 'udp_alg_no_quota': UDP ALG User-Quota Not Found; 'udp_alg_eim_mismatch': UDP ALG Endpoint-Independent Mapping Mismatch; 'udp_alg_no_nat_ip': UDP ALG User-Quota Unknown NAT IP; 'udp_alg_alloc_failure': UDP ALG Port Allocation Failure; 'sip_alg_no_quota': SIP ALG User-Quota Not Found; 'sip_alg_quota_inc_failure': SIP ALG User-Quota Exceeded; 'sip_alg_no_nat_ip': SIP ALG Unknown NAT IP; 'sip_alg_reuse_contact_fullcone': SIP ALG Reuse Contact Full-cone Session; 'sip_alg_contact_fullcone_mismatch': SIP ALG Contact Full-cone Session Mismatch; 'sip_alg_alloc_contact_port_failure': SIP ALG Alloc Contact NAT Port Failure; 'sip_alg_create_contact_fullcone_failure': SIP ALG Create Contact Full-cone Session Failure; 'sip_alg_release_contact_port_failure': SIP ALG Release Contact NAT Port Failure; 'sip_alg_single_rtp_fullcone': SIP ALG Single RTP Full-cone Found; 'sip_alg_single_rtcp_fullcone': SIP ALG Single RTCP Full-cone Found; 'sip_alg_rtcp_fullcone_mismatch': SIP ALG RTCP Full-cone NAT Port Mismatch; 'sip_alg_reuse_rtp_rtcp_fullcone': SIP ALG Reuse RTP/RTCP Full-cone Session; 'sip_alg_alloc_rtp_rtcp_port_failure': SIP ALG Alloc RTP/RTCP NAT Ports Failure; 'sip_alg_alloc_single_port_failure': SIP ALG Alloc Single RTP or RTCP NAT Port Failure; 'sip_alg_create_single_fullcone_failure': SIP ALG Create Single RTP or RTCP Full-cone Session Failure; 'sip_alg_create_rtp_fullcone_failure': SIP ALG Create RTP Full-cone Session Failure; 'sip_alg_create_rtcp_fullcone_failure': SIP ALG Create RTCP Full-cone Session Failure; 'sip_alg_port_pair_alloc_from_consecutive': SIP ALG Port Pair Allocated From Consecutive; 'sip_alg_port_pair_alloc_from_partition': SIP ALG Port Pair Allocated From Partition; 'sip_alg_port_pair_alloc_from_pool_port_batch': SIP ALG Port Pair Allocated From Pool Port Batch; 'sip_alg_port_pair_alloc_from_quota_consecutive': SIP ALG Port Pair Allocated From Quota Consecutive; 'sip_alg_port_pair_alloc_from_quota_partition': SIP ALG Port Pair Allocated From Quota Partition; 'sip_alg_port_pair_alloc_from_quota_partition_error': SIP ALG Port Pair Allocated From Quota Partition Error; 'sip_alg_port_pair_alloc_from_quota_pool_port_batch': SIP ALG Port Pair Allocated From Quota Pool Port Batch; 'sip_alg_port_pair_alloc_from_quota_pool_port_batch_with_frag': SIP ALG Port Pair Allocated From Quota Port Batch Version 2 with Frag Free Ports; 'h323_alg_no_quota': H323 ALG User-Quota Not Found; 'h323_alg_quota_inc_failure': H323 ALG User-Quota Exceeded; 'h323_alg_no_nat_ip': H323 ALG Unknown NAT IP; 'h323_alg_reuse_fullcone': H323 ALG Reuse Full-cone Session; 'h323_alg_fullcone_mismatch': H323 ALG Full-cone Session Mismatch; 'h323_alg_alloc_port_failure': H323 ALG Alloc NAT Port Failure; 'h323_alg_create_fullcone_failure': H323 ALG Create Full-cone Session Failure; 'h323_alg_release_port_failure': H323 ALG Release NAT Port Failure; 'h323_alg_single_rtp_fullcone': H323 ALG Single RTP Full-cone Found; 'h323_alg_single_rtcp_fullcone': H323 ALG Single RTCP Full-cone Found; 'h323_alg_rtcp_fullcone_mismatch': H323 ALG RTCP Full-cone NAT Port Mismatch; 'h323_alg_reuse_rtp_rtcp_fullcone': H323 ALG Reuse RTP/RTCP Full-cone Session; 'h323_alg_alloc_rtp_rtcp_port_failure': H323 ALG Alloc RTP/RTCP NAT Ports Failure; 'h323_alg_alloc_single_port_failure': H323 ALG Alloc Single RTP or RTCP NAT Port Failure; 'h323_alg_create_single_fullcone_failure': H323 ALG Create Single RTP or RTCP Full-cone Session Failure; 'h323_alg_create_rtp_fullcone_failure': H323 ALG Create RTP Full-cone Session Failure; 'h323_alg_create_rtcp_fullcone_failure': H323 ALG Create RTCP Full-cone Session Failure; 'h323_alg_port_pair_alloc_from_consecutive': H323 ALG Port Pair Allocated From Consecutive; 'h323_alg_port_pair_alloc_from_partition': H323 ALG Port Pair Allocated From Partition; 'h323_alg_port_pair_alloc_from_pool_port_batch': H323 ALG Port Pair Allocated From Pool Port Batch; 'h323_alg_port_pair_alloc_from_quota_consecutive': H323 ALG Port Pair Allocated From Quota Consecutive; 'h323_alg_port_pair_alloc_from_quota_partition': H323 ALG Port Pair Allocated From Quota Partition; 'h323_alg_port_pair_alloc_from_quota_partition_error': H323 ALG Port Pair Allocated From Quota Partition Error; 'h323_alg_port_pair_alloc_from_quota_pool_port_batch': H323 ALG Port Pair Allocated From Quota Pool Port Batch; 'port_batch_quota_extension_alloc_failure': Port Batch Extension Alloc Failure (No memory); 'port_batch_free_quota_not_found': Port Batch Quota Not Found on Free; 'port_batch_free_port_not_found': Port Batch Port Not Found on Free; 'port_batch_free_wrong_partition': Port Batch Free Wrong Partition; 'radius_query_quota_ext_alloc_failure': RADIUS Query Container Alloc (No Memoty); 'radius_query_quota_ext_alloc_race_free': RADIUS Query Container Alloc Race Free; 'quota_extension_added': Quota Extension Added to Quota; 'quota_extension_removed': Quota Extension Removed from Quota; 'quota_extension_remove_not_found': Quota Extension Not Found on Remove; 'ha_sync_port_batch_sent': HA Port Batch Extension Sync Sent; 'ha_sync_port_batch_rcv': HA Port Batch Extension Sync Received; 'ha_send_port_batch_not_found': HA Port Batch Not Found on Sync Send; 'ha_rcv_port_not_in_port_batch': HA Port Not in Port Batch on Sync Rcv; 'bad_port_to_free': Freeing Bad Port; 'consecutive_port_free': Port Freed from Consecutive Pool; 'partition_port_free': Port Freed from Partition; 'pool_port_batch_port_free': Port Freed from Pool Port Batch; 'port_allocated_from_quota_consecutive': Port Allocated from Quota Consecutive; 'port_allocated_from_quota_partition': Port Allocated from Quota Partition; 'port_allocated_from_quota_pool_port_batch': Port Allocated from Quota Pool Port Batch; 'port_freed_from_quota_consecutive': Port Freed from Quota Consecutive; 'port_freed_from_quota_partition': Port Freed from Quota Partition; 'port_freed_from_quota_pool_port_batch': Port Freed from Quota Pool Port Batch; 'port_batch_allocated_to_quota': Port Batch Allocated to Quota; 'port_batch_freed_from_quota': Port Batch Freed From Quota; 'specific_port_allocated_from_quota_consecutive': Specific Port Allocated from Quota Consecutive;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#counters2 Cgnv6LsnGlobal#counters2}
  */
  readonly counters2?: string;
  /**
  * 'specific_port_allocated_from_quota_partition': Specific Port Allocated from Quota Partition; 'specific_port_allocated_from_quota_pool_port_batch': Specific Port Allocated from Quota Pool Port Batch; 'port_batch_container_alloc_failure': Port Batch Container Alloc Out of Memory; 'port_batch_container_alloc_race_free': Port Batch Container Race Free; 'port_overloading_destination_conflict': Port Overloading Destination Conflict; 'port_overloading_out_of_memory': Port Overloading Out of Memory; 'port_overloading_assign_user': Port Overloading Port Assign User; 'port_overloading_assign_user_port_batch': Port Overloading Port Assign User Port Batch; 'port_overloading_inc': Port Overloading Port Increment; 'port_overloading_dec_on_conflict': Port Overloading Port Decrement on Conflict; 'port_overloading_dec_on_free': Port Overloading Port Decrement on Free; 'port_overloading_free_port_on_conflict': Port Overloading Free Port on Conflict; 'port_overloading_free_port_batch_on_conflict': Port Overloading Free Port Batch on Conflict; 'port_overloading_inc_overflow': Port Overloading Inc Overflow; 'port_overloading_attempt_consecutive_ports': Port Overloading on Consecutive Ports; 'port_overloading_attempt_same_partition': Port Overloading on Same Partition; 'port_overloading_attempt_diff_partition': Port Overloading on Different Partition; 'port_overloading_attempt_failed': Port Overloading Attempt Failed; 'port_overloading_conn_free_retry_lookup': Port Overloading Conn Free Retry Lookup; 'port_overloading_conn_free_not_found': Port Overloading Conn Free Not Found; 'port_overloading_smp_mem_allocated': Port Overloading SMP Session Allocated; 'port_overloading_smp_mem_freed': Port Overloading SMP Session Freed; 'port_overloading_smp_inserted': Port Overloading SMP Inserted; 'port_overloading_smp_inserted_tcp_shadow': Total Port Overloading SMP TCP Inserted; 'port_overloading_smp_inserted_udp_shadow': Total Port Overloading SMP UDP Inserted; 'port_overloading_smp_free_tcp_shadow': Total Port Overloading SMP TCP Freed; 'port_overloading_smp_free_udp_shadow': Total Port Overloading SMP UDP Freed; 'port_overloading_smp_put_in_del_q_from_conn': Port Overloading SMP Free From Conn; 'port_overloading_smp_free_dec_failure': Port Overloading SMP Free Dec Failure; 'port_overloading_smp_free_no_quota': Port Overloading SMP Free No Quota; 'port_overloading_smp_free_port': Port Overloading SMP Free Port; 'port_overloading_smp_free_port_from_quota': Port Overloading SMP Free Port From Quota; 'port_overloading_for_no_ports': Port Overloading for No Ports; 'port_overloading_for_no_ports_success': Port Overloading for No Ports Success; 'port_overloading_for_quota_exceeded': Port Overloading for Quota Exceeded; 'port_overloading_for_quota_exceeded_success': Port Overloading for Quota Exceeded Success; 'port_overloading_for_quota_exceeded_race': Port Overloading for Quota Exceeded Race; 'port_overloading_for_quota_exceeded_race_success': Port Overloading for Quota Exceeded Race Success; 'port_overloading_for_new_user': Port Overloading for New User; 'port_overloading_for_new_user_success': Port Overloading for New User Success; 'ha_port_overloading_attempt_failed': HA Port Overloading Attempt Failed; 'ha_port_overloading_for_no_ports': HA Port Overloading for No Ports; 'ha_port_overloading_for_no_ports_success': HA Port Overloading for No Ports Success; 'ha_port_overloading_for_quota_exceeded': HA Port Overloading for Quota Exceeded; 'ha_port_overloading_for_quota_exceeded_success': HA Port Overloading for Quota Exceeded Success; 'ha_port_overloading_for_quota_exceeded_race': HA Port Overloading for Quota Exceeded Race; 'ha_port_overloading_for_quota_exceeded_race_success': HA Port Overloading for Quota Exceeded Race Success; 'ha_port_overloading_for_new_user': HA Port Overloading for New User; 'ha_port_overloading_for_new_user_success': HA Port Overloading for New User Success; 'nat_pool_force_delete': NAT Pool Force Delete; 'quota_ext_too_many': Quota Ext Too Many; 'nat_pool_not_found_on_free': NAT Pool Not Found on Free; 'fullcone_ext_mem_freed': LSN Fullcone Extension Memory Freed; 'fullcone_ext_mem_allocated': LSN Fullcone Extension Memory Allocated; 'fullcone_ext_mem_alloc_failure': LSN Fullcone Extension Memory Allocate Failure; 'fullcone_ext_mem_alloc_init_faulure': LSN Fullcone Extension Initialization Failure; 'fullcone_ext_added': LSN Fullcone Extension Added; 'fullcone_ext_too_many': LSN Fullcone Extension Too Many; 'nat_pool_attempt_adding_multiple_free_batches': Attempt Adding Multiple Free Batches to Quota; 'nat_pool_add_free_batch_failed': Add Batch to Quota Failed; 'mgcp_alg_no_quota': MGCP ALG User-Quota Not Found; 'mgcp_alg_quota_inc_failure': MGCP ALG User-Quota Exceeded; 'mgcp_alg_no_nat_ip': MGCP ALG Unknown NAT IP; 'mgcp_alg_reuse_fullcone': MGCP ALG Reuse Full-cone Session; 'mgcp_alg_fullcone_mismatch': MGCP ALG Full-cone Session Mismatch; 'mgcp_alg_alloc_port_failure': MGCP ALG Alloc NAT Port Failure; 'mgcp_alg_create_fullcone_failure': MGCP ALG Create Full-cone Session Failure; 'mgcp_alg_release_port_failure': MGCP ALG Release NAT Port Failure; 'mgcp_alg_single_rtp_fullcone': MGCP ALG Single RTP Full-cone Found; 'mgcp_alg_single_rtcp_fullcone': MGCP ALG Single RTCP Full-cone Found; 'mgcp_alg_rtcp_fullcone_mismatch': MGCP ALG RTCP Full-cone NAT Port Mismatch; 'mgcp_alg_reuse_rtp_rtcp_fullcone': MGCP ALG Reuse RTP/RTCP Full-cone Session; 'mgcp_alg_alloc_rtp_rtcp_port_failure': MGCP ALG Alloc RTP/RTCP NAT Ports Failure; 'mgcp_alg_alloc_single_port_failure': MGCP ALG Alloc Single RTP or RTCP NAT Port Failure; 'mgcp_alg_create_single_fullcone_failure': MGCP ALG Create Single RTP or RTCP Full-cone Session Failure; 'mgcp_alg_create_rtp_fullcone_failure': MGCP ALG Create RTP Full-cone Session Failure; 'mgcp_alg_create_rtcp_fullcone_failure': MGCP ALG Create RTCP Full-cone Session Failure; 'mgcp_alg_port_pair_alloc_from_consecutive': MGCP ALG Port Pair Allocated From Consecutive; 'mgcp_alg_port_pair_alloc_from_partition': MGCP ALG Port Pair Allocated From Partition; 'mgcp_alg_port_pair_alloc_from_pool_port_batch': MGCP ALG Port Pair Allocated From Pool Port Batch; 'mgcp_alg_port_pair_alloc_from_quota_consecutive': MGCP ALG Port Pair Allocated From Quota Consecutive; 'mgcp_alg_port_pair_alloc_from_quota_partition': MGCP ALG Port Pair Allocated From Quota Partition; 'mgcp_alg_port_pair_alloc_from_quota_partition_error': MGCP ALG Port Pair Allocated From Quota Partition Error; 'mgcp_alg_port_pair_alloc_from_quota_pool_port_batch': MGCP ALG Port Pair Allocated From Quota Pool Port Batch; 'user_quota_unusable_drop': User-Quota Unusable Drop; 'user_quota_unusable': User-Quota Marked Unusable; 'nat_pool_same_port_batch_udp_failed': Simultaneous Batch Allocation UDP Port Allocation Failed; 'cross_cpu_helper_created_eim': EIM Cross CPU Session Helper Created; 'cross_cpu_helper_created_eif': EIF Cross CPU Session Helper Created; 'cross_cpu_helper_created_udp': UDP Cross CPU Session Helper Created; 'cross_cpu_helper_created_tcp': TCP Cross CPU Session Helper Created; 'cross_cpu_helper_created_icmp': ICMP Cross CPU Session Helper Created; 'cross_cpu_helper_created_ip': IP Cross CPU Session Helper Created; 'cross_cpu_helper_free_not_found_ip': IP Cross CPU Helper Free Not Found; 'cross_cpu_helper_free_not_found_icmp': ICMP Cross CPU Helper Free Not Found; 'cross_cpu_helper_free_not_found_tcp': TCP Cross CPU Helper Free Not Found; 'cross_cpu_helper_free_not_found_udp': UDP Cross CPU Helper Free Not Found; 'adc_port_allocation_failed': ADC Port Allocation Failed; 'adc_port_allocation_ineligible': ADC Port Allocation Not Allowed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#counters3 Cgnv6LsnGlobal#counters3}
  */
  readonly counters3?: string;
  /**
  * 'acl_http_domain_node_exceeded': ACL HTTP Domain Node Exceeded; 'fwd_ingress_packets_tcp': Forward Ingress Packets TCP; 'fwd_egress_packets_tcp': Forward Egress Packets TCP; 'rev_ingress_packets_tcp': Reverse Ingress Packets TCP; 'rev_egress_packets_tcp': Reverse Egress Packets TCP; 'fwd_ingress_bytes_tcp': Forward Ingress Bytes TCP; 'fwd_egress_bytes_tcp': Forward Egress Bytes TCP; 'rev_ingress_bytes_tcp': Reverse Ingress Bytes TCP; 'rev_egress_bytes_tcp': Reverse Egress Bytes TCP; 'fwd_ingress_packets_udp': Forward Ingress Packets UDP; 'fwd_egress_packets_udp': Forward Egress Packets UDP; 'rev_ingress_packets_udp': Reverse Ingress Packets UDP; 'rev_egress_packets_udp': Reverse Egress Packets UDP; 'fwd_ingress_bytes_udp': Forward Ingress Bytes UDP; 'fwd_egress_bytes_udp': Forward Egress Bytes UDP; 'rev_ingress_bytes_udp': Reverse Ingress Bytes UDP; 'rev_egress_bytes_udp': Reverse Egress Bytes UDP; 'fwd_ingress_packets_icmp': Forward Ingress Packets ICMP; 'fwd_egress_packets_icmp': Forward Egress Packets ICMP; 'rev_ingress_packets_icmp': Reverse Ingress Packets ICMP; 'rev_egress_packets_icmp': Reverse Egress Packets ICMP; 'fwd_ingress_bytes_icmp': Forward Ingress Bytes ICMP; 'fwd_egress_bytes_icmp': Forward Egress Bytes ICMP; 'rev_ingress_bytes_icmp': Reverse Ingress Bytes ICMP; 'rev_egress_bytes_icmp': Reverse Egress Bytes ICMP; 'fwd_ingress_packets_others': Forward Ingress Packets OTHERS; 'fwd_egress_packets_others': Forward Egress Packets OTHERS; 'rev_ingress_packets_others': Reverse Ingress Packets OTHERS; 'rev_egress_packets_others': Reverse Egress Packets OTHERS; 'fwd_ingress_bytes_others': Forward Ingress Bytes OTHERS; 'fwd_egress_bytes_others': Forward Egress Bytes OTHERS; 'rev_ingress_bytes_others': Reverse Ingress Bytes OTHERS; 'rev_egress_bytes_others': Reverse Egress Bytes OTHERS; 'fwd_ingress_pkt_size_range1': Forward Ingress Packet size between 0 and 200; 'fwd_ingress_pkt_size_range2': Forward Ingress Packet size between 201 and 800; 'fwd_ingress_pkt_size_range3': Forward Ingress Packet size between 801 and 1550; 'fwd_ingress_pkt_size_range4': Forward Ingress Packet size between 1551 and 9000; 'fwd_egress_pkt_size_range1': Forward Egress Packet size between 0 and 200; 'fwd_egress_pkt_size_range2': Forward Egress Packet size between 201 and 800; 'fwd_egress_pkt_size_range3': Forward Egress Packet size between 801 and 1550; 'fwd_egress_pkt_size_range4': Forward Egress Packet size between 1551 and 9000; 'rev_ingress_pkt_size_range1': Reverse Ingress Packet size between 0 and 200; 'rev_ingress_pkt_size_range2': Reverse Ingress Packet size between 201 and 800; 'rev_ingress_pkt_size_range3': Reverse Ingress Packet size between 801 and 1550; 'rev_ingress_pkt_size_range4': Reverse Ingress Packet size between 1551 and 9000; 'rev_egress_pkt_size_range1': Reverse Egress Packet size between 0 and 200; 'rev_egress_pkt_size_range2': Reverse Egress Packet size between 201 and 800; 'rev_egress_pkt_size_range3': Reverse Egress Packet size between 801 and 1550; 'rev_egress_pkt_size_range4': Reverse Egress Packet size between 1551 and 9000; 'port_overloading_port_tcp_inserted': Port Overloading NAT Port TCP Created; 'port_overloading_port_udp_inserted': Port Overloading NAT Port UDP Created; 'port_overloading_port_free_tcp': TCP Port Overloading NAT Port Freed; 'port_overloading_port_free_udp': UDP Port Overloading NAT Port Freed; 'chassis_incorrect_pu': chassis incorrect pu; 'data_session_created_sby': Data Session Created Standby; 'data_session_freed_sby': Data Session Freed Standby; 'user_quota_created_sby': User-Quota Created Standby; 'user_quota_put_in_del_q_sby': User-Quota Freed Standby; 'tcp_fullcone_created_sby': TCP Full-cone Session Created Standby; 'tcp_fullcone_freed_sby': TCP Full-cone Session Freed Standby; 'udp_fullcone_created_sby': UDP Full-cone Session Created Standby; 'udp_fullcone_freed_sby': UDP Full-cone Session Freed Standby;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#counters4 Cgnv6LsnGlobal#counters4}
  */
  readonly counters4?: string;
}

export function cgnv6LsnGlobalSamplingEnableToTerraform(struct?: Cgnv6LsnGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
    counters4: cdktf.stringToTerraform(struct!.counters4),
  }
}


export function cgnv6LsnGlobalSamplingEnableToHclTerraform(struct?: Cgnv6LsnGlobalSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters4: {
      value: cdktf.stringToHclTerraform(struct!.counters4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LsnGlobalSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LsnGlobalSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    if (this._counters4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters4 = this._counters4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LsnGlobalSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
      this._counters4 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
      this._counters4 = value.counters4;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }

  // counters4 - computed: false, optional: true, required: false
  private _counters4?: string; 
  public get counters4() {
    return this.getStringAttribute('counters4');
  }
  public set counters4(value: string) {
    this._counters4 = value;
  }
  public resetCounters4() {
    this._counters4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters4Input() {
    return this._counters4;
  }
}

export class Cgnv6LsnGlobalSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LsnGlobalSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LsnGlobalSamplingEnableOutputReference {
    return new Cgnv6LsnGlobalSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global thunder_cgnv6_lsn_global}
*/
export class Cgnv6LsnGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6LsnGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6LsnGlobal to import
  * @param importFromId The id of the existing Cgnv6LsnGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6LsnGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_lsn_global thunder_cgnv6_lsn_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LsnGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LsnGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_global',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attemptPortPreservation = config.attemptPortPreservation;
    this._enhancedUserTracking = config.enhancedUserTracking;
    this._hairpinning = config.hairpinning;
    this._halfCloseTimeout = config.halfCloseTimeout;
    this._id = config.id;
    this._inboundRefresh = config.inboundRefresh;
    this._inboundRefreshFullCone = config.inboundRefreshFullCone;
    this._ipSelection = config.ipSelection;
    this._strictlyStickyNat = config.strictlyStickyNat;
    this._synTimeout = config.synTimeout;
    this._uuid = config.uuid;
    this._icmp.internalValue = config.icmp;
    this._logging.internalValue = config.logging;
    this._portBatching.internalValue = config.portBatching;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attempt_port_preservation - computed: false, optional: true, required: false
  private _attemptPortPreservation?: string; 
  public get attemptPortPreservation() {
    return this.getStringAttribute('attempt_port_preservation');
  }
  public set attemptPortPreservation(value: string) {
    this._attemptPortPreservation = value;
  }
  public resetAttemptPortPreservation() {
    this._attemptPortPreservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptPortPreservationInput() {
    return this._attemptPortPreservation;
  }

  // enhanced_user_tracking - computed: false, optional: true, required: false
  private _enhancedUserTracking?: number; 
  public get enhancedUserTracking() {
    return this.getNumberAttribute('enhanced_user_tracking');
  }
  public set enhancedUserTracking(value: number) {
    this._enhancedUserTracking = value;
  }
  public resetEnhancedUserTracking() {
    this._enhancedUserTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedUserTrackingInput() {
    return this._enhancedUserTracking;
  }

  // hairpinning - computed: false, optional: true, required: false
  private _hairpinning?: string; 
  public get hairpinning() {
    return this.getStringAttribute('hairpinning');
  }
  public set hairpinning(value: string) {
    this._hairpinning = value;
  }
  public resetHairpinning() {
    this._hairpinning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hairpinningInput() {
    return this._hairpinning;
  }

  // half_close_timeout - computed: false, optional: true, required: false
  private _halfCloseTimeout?: number; 
  public get halfCloseTimeout() {
    return this.getNumberAttribute('half_close_timeout');
  }
  public set halfCloseTimeout(value: number) {
    this._halfCloseTimeout = value;
  }
  public resetHalfCloseTimeout() {
    this._halfCloseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfCloseTimeoutInput() {
    return this._halfCloseTimeout;
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

  // inbound_refresh - computed: false, optional: true, required: false
  private _inboundRefresh?: string; 
  public get inboundRefresh() {
    return this.getStringAttribute('inbound_refresh');
  }
  public set inboundRefresh(value: string) {
    this._inboundRefresh = value;
  }
  public resetInboundRefresh() {
    this._inboundRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRefreshInput() {
    return this._inboundRefresh;
  }

  // inbound_refresh_full_cone - computed: false, optional: true, required: false
  private _inboundRefreshFullCone?: string; 
  public get inboundRefreshFullCone() {
    return this.getStringAttribute('inbound_refresh_full_cone');
  }
  public set inboundRefreshFullCone(value: string) {
    this._inboundRefreshFullCone = value;
  }
  public resetInboundRefreshFullCone() {
    this._inboundRefreshFullCone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundRefreshFullConeInput() {
    return this._inboundRefreshFullCone;
  }

  // ip_selection - computed: false, optional: true, required: false
  private _ipSelection?: string; 
  public get ipSelection() {
    return this.getStringAttribute('ip_selection');
  }
  public set ipSelection(value: string) {
    this._ipSelection = value;
  }
  public resetIpSelection() {
    this._ipSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSelectionInput() {
    return this._ipSelection;
  }

  // strictly_sticky_nat - computed: false, optional: true, required: false
  private _strictlyStickyNat?: number; 
  public get strictlyStickyNat() {
    return this.getNumberAttribute('strictly_sticky_nat');
  }
  public set strictlyStickyNat(value: number) {
    this._strictlyStickyNat = value;
  }
  public resetStrictlyStickyNat() {
    this._strictlyStickyNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictlyStickyNatInput() {
    return this._strictlyStickyNat;
  }

  // syn_timeout - computed: false, optional: true, required: false
  private _synTimeout?: number; 
  public get synTimeout() {
    return this.getNumberAttribute('syn_timeout');
  }
  public set synTimeout(value: number) {
    this._synTimeout = value;
  }
  public resetSynTimeout() {
    this._synTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synTimeoutInput() {
    return this._synTimeout;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new Cgnv6LsnGlobalIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: Cgnv6LsnGlobalIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new Cgnv6LsnGlobalLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: Cgnv6LsnGlobalLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // port_batching - computed: false, optional: true, required: false
  private _portBatching = new Cgnv6LsnGlobalPortBatchingOutputReference(this, "port_batching");
  public get portBatching() {
    return this._portBatching;
  }
  public putPortBatching(value: Cgnv6LsnGlobalPortBatching) {
    this._portBatching.internalValue = value;
  }
  public resetPortBatching() {
    this._portBatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingInput() {
    return this._portBatching.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LsnGlobalSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LsnGlobalSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attempt_port_preservation: cdktf.stringToTerraform(this._attemptPortPreservation),
      enhanced_user_tracking: cdktf.numberToTerraform(this._enhancedUserTracking),
      hairpinning: cdktf.stringToTerraform(this._hairpinning),
      half_close_timeout: cdktf.numberToTerraform(this._halfCloseTimeout),
      id: cdktf.stringToTerraform(this._id),
      inbound_refresh: cdktf.stringToTerraform(this._inboundRefresh),
      inbound_refresh_full_cone: cdktf.stringToTerraform(this._inboundRefreshFullCone),
      ip_selection: cdktf.stringToTerraform(this._ipSelection),
      strictly_sticky_nat: cdktf.numberToTerraform(this._strictlyStickyNat),
      syn_timeout: cdktf.numberToTerraform(this._synTimeout),
      uuid: cdktf.stringToTerraform(this._uuid),
      icmp: cgnv6LsnGlobalIcmpToTerraform(this._icmp.internalValue),
      logging: cgnv6LsnGlobalLoggingToTerraform(this._logging.internalValue),
      port_batching: cgnv6LsnGlobalPortBatchingToTerraform(this._portBatching.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6LsnGlobalSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attempt_port_preservation: {
        value: cdktf.stringToHclTerraform(this._attemptPortPreservation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enhanced_user_tracking: {
        value: cdktf.numberToHclTerraform(this._enhancedUserTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hairpinning: {
        value: cdktf.stringToHclTerraform(this._hairpinning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      half_close_timeout: {
        value: cdktf.numberToHclTerraform(this._halfCloseTimeout),
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
      inbound_refresh: {
        value: cdktf.stringToHclTerraform(this._inboundRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inbound_refresh_full_cone: {
        value: cdktf.stringToHclTerraform(this._inboundRefreshFullCone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_selection: {
        value: cdktf.stringToHclTerraform(this._ipSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strictly_sticky_nat: {
        value: cdktf.numberToHclTerraform(this._strictlyStickyNat),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_timeout: {
        value: cdktf.numberToHclTerraform(this._synTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icmp: {
        value: cgnv6LsnGlobalIcmpToHclTerraform(this._icmp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnGlobalIcmpList",
      },
      logging: {
        value: cgnv6LsnGlobalLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnGlobalLoggingList",
      },
      port_batching: {
        value: cgnv6LsnGlobalPortBatchingToHclTerraform(this._portBatching.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnGlobalPortBatchingList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6LsnGlobalSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LsnGlobalSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
