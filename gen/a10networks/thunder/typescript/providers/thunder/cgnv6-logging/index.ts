// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6LoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#id Cgnv6Logging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
  /**
  * nat_quota_exceeded block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#nat_quota_exceeded Cgnv6Logging#nat_quota_exceeded}
  */
  readonly natQuotaExceeded?: Cgnv6LoggingNatQuotaExceeded;
  /**
  * nat_resource_exhausted block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#nat_resource_exhausted Cgnv6Logging#nat_resource_exhausted}
  */
  readonly natResourceExhausted?: Cgnv6LoggingNatResourceExhausted;
  /**
  * pool_based_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#pool_based_log Cgnv6Logging#pool_based_log}
  */
  readonly poolBasedLog?: Cgnv6LoggingPoolBasedLog;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#sampling_enable Cgnv6Logging#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6LoggingSamplingEnable[] | cdktf.IResolvable;
  /**
  * source_address block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#source_address Cgnv6Logging#source_address}
  */
  readonly sourceAddress?: Cgnv6LoggingSourceAddress;
  /**
  * tcp_svr_status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#tcp_svr_status Cgnv6Logging#tcp_svr_status}
  */
  readonly tcpSvrStatus?: Cgnv6LoggingTcpSvrStatus;
}
export interface Cgnv6LoggingNatQuotaExceeded {
  /**
  * 'warning': Log level Warning (Default); 'critical': Log level Critical; 'notice': Log level Notice;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#level Cgnv6Logging#level}
  */
  readonly level?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6LoggingNatQuotaExceededToTerraform(struct?: Cgnv6LoggingNatQuotaExceededOutputReference | Cgnv6LoggingNatQuotaExceeded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6LoggingNatQuotaExceededToHclTerraform(struct?: Cgnv6LoggingNatQuotaExceededOutputReference | Cgnv6LoggingNatQuotaExceeded): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingNatQuotaExceededOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LoggingNatQuotaExceeded | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingNatQuotaExceeded | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._uuid = value.uuid;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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
}
export interface Cgnv6LoggingNatResourceExhausted {
  /**
  * 'warning': Log level Warning; 'critical': Log level Critical (Default); 'notice': Log level Notice;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#level Cgnv6Logging#level}
  */
  readonly level?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6LoggingNatResourceExhaustedToTerraform(struct?: Cgnv6LoggingNatResourceExhaustedOutputReference | Cgnv6LoggingNatResourceExhausted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6LoggingNatResourceExhaustedToHclTerraform(struct?: Cgnv6LoggingNatResourceExhaustedOutputReference | Cgnv6LoggingNatResourceExhausted): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingNatResourceExhaustedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LoggingNatResourceExhausted | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingNatResourceExhausted | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._level = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._level = value.level;
      this._uuid = value.uuid;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
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
}
export interface Cgnv6LoggingPoolBasedLog {
  /**
  * Logging cycle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#cycle Cgnv6Logging#cycle}
  */
  readonly cycle?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6LoggingPoolBasedLogToTerraform(struct?: Cgnv6LoggingPoolBasedLogOutputReference | Cgnv6LoggingPoolBasedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cycle: cdktf.numberToTerraform(struct!.cycle),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6LoggingPoolBasedLogToHclTerraform(struct?: Cgnv6LoggingPoolBasedLogOutputReference | Cgnv6LoggingPoolBasedLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cycle: {
      value: cdktf.numberToHclTerraform(struct!.cycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingPoolBasedLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LoggingPoolBasedLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycle = this._cycle;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingPoolBasedLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cycle = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cycle = value.cycle;
      this._uuid = value.uuid;
    }
  }

  // cycle - computed: false, optional: true, required: false
  private _cycle?: number; 
  public get cycle() {
    return this.getNumberAttribute('cycle');
  }
  public set cycle(value: number) {
    this._cycle = value;
  }
  public resetCycle() {
    this._cycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleInput() {
    return this._cycle;
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
}
export interface Cgnv6LoggingSamplingEnable {
  /**
  * 'all': all; 'tcp-session-created': TCP Session Created; 'tcp-session-deleted': TCP Session Deleted; 'tcp-port-allocated': TCP Port Allocated; 'tcp-port-freed': TCP Port Freed; 'tcp-port-batch-allocated': TCP Port Batch Allocated; 'tcp-port-batch-freed': TCP Port Batch Freed; 'udp-session-created': UDP Session Created; 'udp-session-deleted': UDP Session Deleted; 'udp-port-allocated': UDP Port Allocated; 'udp-port-freed': UDP Port Freed; 'udp-port-batch-allocated': UDP Port Batch Allocated; 'udp-port-batch-freed': UDP Port Batch Freed; 'icmp-session-created': ICMP Session Created; 'icmp-session-deleted': ICMP Session Deleted; 'icmp-resource-allocated': ICMP Resource Allocated; 'icmp-resource-freed': ICMP Resource Freed; 'icmpv6-session-created': ICMPV6 Session Created; 'icmpv6-session-deleted': ICMPV6 Session Deleted; 'icmpv6-resource-allocated': ICMPV6 Resource Allocated; 'icmpv6-resource-freed': ICMPV6 Resource Freed; 'gre-session-created': GRE Session Created; 'gre-session-deleted': GRE Session Deleted; 'gre-resource-allocated': GRE Resource Allocated; 'gre-resource-freed': GRE Resource Freed; 'esp-session-created': ESP Session Created; 'esp-session-deleted': ESP Session Deleted; 'esp-resource-allocated': ESP Resource Allocated; 'esp-resource-freed': ESP Resource Freed; 'fixed-nat-user-ports': Fixed NAT Inside User Port Mapping; 'fixed-nat-disable-config-logged': Fixed NAT Periodic Configs Logged; 'fixed-nat-disable-config-logs-sent': Fixed NAT Periodic Config Logs Sent; 'fixed-nat-periodic-config-logs-sent': Fixed NAT Disabled Configs Logged; 'fixed-nat-periodic-config-logged': Fixed NAT Disabled Config Logs Sent; 'fixed-nat-interim-updated': Fixed NAT Interim Updated; 'enhanced-user-log': Enhanced User Log; 'log-sent': Log Packets Sent; 'log-dropped': Log Packets Dropped; 'conn-tcp-established': TCP Connection Established; 'conn-tcp-dropped': TCP Connection Lost; 'tcp-port-overloading-allocated': TCP Port Overloading Allocated; 'tcp-port-overloading-freed': TCP Port Overloading Freed; 'udp-port-overloading-allocated': UDP Port Overloading Allocated; 'udp-port-overloading-freed': UDP Port Overloading Freed; 'http-request-logged': HTTP Request Logged; 'reduced-logs-by-destination': Reduced Logs by Destination Protocol and Port; 'out-of-buffers': Out of Buffers; 'add-msg-failed': Add Message to Buffer Failed; 'rtsp-port-allocated': RTSP UDP Port Allocated; 'rtsp-port-freed': RTSP UDP Port Freed; 'conn-tcp-create-failed': TCP Connection Failed; 'ipv4-frag-applied': IPv4 Fragmentation Applied; 'ipv4-frag-failed': IPv4 Fragmentation Failed; 'ipv6-frag-applied': IPv6 Fragmentation Applied; 'ipv6-frag-failed': IPv6 Fragmentation Failed; 'interim-update-scheduled': Port Allocation Interim Update Scheduled; 'interim-update-schedule-failed': Port Allocation Interim Update Failed; 'interim-update-terminated': Port Allocation Interim Update Terminated; 'interim-update-memory-freed': Port Allocation Interim Update Memory Freed; 'interim-update-no-buff-retried': Port Allocation Interim Update Memory Freed; 'tcp-port-batch-interim-updated': TCP Port Batch Interim Updated; 'udp-port-batch-interim-updated': UDP Port Batch Interim Updated; 'port-block-accounting-freed': Port Allocation Accounting Freed; 'port-block-accounting-allocated': Port Allocation Accounting Allocated; 'log-message-too-long': Log message too long; 'http-out-of-order-dropped': HTTP out-of-order dropped; 'http-alloc-failed': HTTP Request Info Allocation Failed; 'http-frag-merge-failed-dropped': HTTP frag merge failed dropped; 'http-malloc': HTTP mem allocate; 'http-mfree': HTTP mem free; 'http-spm-alloc-type0': HTTP Conn SPM Type 0 allocate; 'http-spm-alloc-type1': HTTP Conn SPM Type 1 allocate; 'http-spm-alloc-type2': HTTP Conn SPM Type 2 allocate; 'http-spm-alloc-type3': HTTP Conn SPM Type 3 allocate; 'http-spm-alloc-type4': HTTP Conn SPM Type 4 allocate; 'http-spm-free-type0': HTTP Conn SPM Type 0 free; 'http-spm-free-type1': HTTP Conn SPM Type 1 free; 'http-spm-free-type2': HTTP Conn SPM Type 2 free; 'http-spm-free-type3': HTTP Conn SPM Type 3 free; 'http-spm-free-type4': HTTP Conn SPM Type 4 free; 'iddos-l3-entry-create': iDDoS L3 Entry Created; 'iddos-l3-entry-delete': iDDoS L3 Entry Deleted; 'iddos-l4-entry-create': iDDoS L4 Entry Created; 'iddos-l4-entry-delete': iDDoS L4 Entry Deleted;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#counters1 Cgnv6Logging#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6LoggingSamplingEnableToTerraform(struct?: Cgnv6LoggingSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6LoggingSamplingEnableToHclTerraform(struct?: Cgnv6LoggingSamplingEnable | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6LoggingSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
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
}

export class Cgnv6LoggingSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6LoggingSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6LoggingSamplingEnableOutputReference {
    return new Cgnv6LoggingSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6LoggingSourceAddress {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6LoggingSourceAddressToTerraform(struct?: Cgnv6LoggingSourceAddressOutputReference | Cgnv6LoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6LoggingSourceAddressToHclTerraform(struct?: Cgnv6LoggingSourceAddressOutputReference | Cgnv6LoggingSourceAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingSourceAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LoggingSourceAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingSourceAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}
export interface Cgnv6LoggingTcpSvrStatus {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#uuid Cgnv6Logging#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6LoggingTcpSvrStatusToTerraform(struct?: Cgnv6LoggingTcpSvrStatusOutputReference | Cgnv6LoggingTcpSvrStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6LoggingTcpSvrStatusToHclTerraform(struct?: Cgnv6LoggingTcpSvrStatusOutputReference | Cgnv6LoggingTcpSvrStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6LoggingTcpSvrStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6LoggingTcpSvrStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6LoggingTcpSvrStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging thunder_cgnv6_logging}
*/
export class Cgnv6Logging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Logging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Logging to import
  * @param importFromId The id of the existing Cgnv6Logging that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Logging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_logging thunder_cgnv6_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6LoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6LoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_logging',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._natQuotaExceeded.internalValue = config.natQuotaExceeded;
    this._natResourceExhausted.internalValue = config.natResourceExhausted;
    this._poolBasedLog.internalValue = config.poolBasedLog;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._sourceAddress.internalValue = config.sourceAddress;
    this._tcpSvrStatus.internalValue = config.tcpSvrStatus;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // nat_quota_exceeded - computed: false, optional: true, required: false
  private _natQuotaExceeded = new Cgnv6LoggingNatQuotaExceededOutputReference(this, "nat_quota_exceeded");
  public get natQuotaExceeded() {
    return this._natQuotaExceeded;
  }
  public putNatQuotaExceeded(value: Cgnv6LoggingNatQuotaExceeded) {
    this._natQuotaExceeded.internalValue = value;
  }
  public resetNatQuotaExceeded() {
    this._natQuotaExceeded.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natQuotaExceededInput() {
    return this._natQuotaExceeded.internalValue;
  }

  // nat_resource_exhausted - computed: false, optional: true, required: false
  private _natResourceExhausted = new Cgnv6LoggingNatResourceExhaustedOutputReference(this, "nat_resource_exhausted");
  public get natResourceExhausted() {
    return this._natResourceExhausted;
  }
  public putNatResourceExhausted(value: Cgnv6LoggingNatResourceExhausted) {
    this._natResourceExhausted.internalValue = value;
  }
  public resetNatResourceExhausted() {
    this._natResourceExhausted.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natResourceExhaustedInput() {
    return this._natResourceExhausted.internalValue;
  }

  // pool_based_log - computed: false, optional: true, required: false
  private _poolBasedLog = new Cgnv6LoggingPoolBasedLogOutputReference(this, "pool_based_log");
  public get poolBasedLog() {
    return this._poolBasedLog;
  }
  public putPoolBasedLog(value: Cgnv6LoggingPoolBasedLog) {
    this._poolBasedLog.internalValue = value;
  }
  public resetPoolBasedLog() {
    this._poolBasedLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolBasedLogInput() {
    return this._poolBasedLog.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6LoggingSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6LoggingSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress = new Cgnv6LoggingSourceAddressOutputReference(this, "source_address");
  public get sourceAddress() {
    return this._sourceAddress;
  }
  public putSourceAddress(value: Cgnv6LoggingSourceAddress) {
    this._sourceAddress.internalValue = value;
  }
  public resetSourceAddress() {
    this._sourceAddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress.internalValue;
  }

  // tcp_svr_status - computed: false, optional: true, required: false
  private _tcpSvrStatus = new Cgnv6LoggingTcpSvrStatusOutputReference(this, "tcp_svr_status");
  public get tcpSvrStatus() {
    return this._tcpSvrStatus;
  }
  public putTcpSvrStatus(value: Cgnv6LoggingTcpSvrStatus) {
    this._tcpSvrStatus.internalValue = value;
  }
  public resetTcpSvrStatus() {
    this._tcpSvrStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSvrStatusInput() {
    return this._tcpSvrStatus.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      nat_quota_exceeded: cgnv6LoggingNatQuotaExceededToTerraform(this._natQuotaExceeded.internalValue),
      nat_resource_exhausted: cgnv6LoggingNatResourceExhaustedToTerraform(this._natResourceExhausted.internalValue),
      pool_based_log: cgnv6LoggingPoolBasedLogToTerraform(this._poolBasedLog.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6LoggingSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      source_address: cgnv6LoggingSourceAddressToTerraform(this._sourceAddress.internalValue),
      tcp_svr_status: cgnv6LoggingTcpSvrStatusToTerraform(this._tcpSvrStatus.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_quota_exceeded: {
        value: cgnv6LoggingNatQuotaExceededToHclTerraform(this._natQuotaExceeded.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingNatQuotaExceededList",
      },
      nat_resource_exhausted: {
        value: cgnv6LoggingNatResourceExhaustedToHclTerraform(this._natResourceExhausted.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingNatResourceExhaustedList",
      },
      pool_based_log: {
        value: cgnv6LoggingPoolBasedLogToHclTerraform(this._poolBasedLog.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingPoolBasedLogList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6LoggingSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingSamplingEnableList",
      },
      source_address: {
        value: cgnv6LoggingSourceAddressToHclTerraform(this._sourceAddress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingSourceAddressList",
      },
      tcp_svr_status: {
        value: cgnv6LoggingTcpSvrStatusToHclTerraform(this._tcpSvrStatus.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6LoggingTcpSvrStatusList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
