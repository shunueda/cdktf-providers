// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WantempSystemVirtualwanlinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#adom WantempSystemVirtualwanlink#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dynamic_sort_subtable WantempSystemVirtualwanlink#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#fail_alert_interfaces WantempSystemVirtualwanlink#fail_alert_interfaces}
  */
  readonly failAlertInterfaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#fail_detect WantempSystemVirtualwanlink#fail_detect}
  */
  readonly failDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#id WantempSystemVirtualwanlink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#load_balance_mode WantempSystemVirtualwanlink#load_balance_mode}
  */
  readonly loadBalanceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#neighbor_hold_boot_time WantempSystemVirtualwanlink#neighbor_hold_boot_time}
  */
  readonly neighborHoldBootTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#neighbor_hold_down WantempSystemVirtualwanlink#neighbor_hold_down}
  */
  readonly neighborHoldDown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#neighbor_hold_down_time WantempSystemVirtualwanlink#neighbor_hold_down_time}
  */
  readonly neighborHoldDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#scopetype WantempSystemVirtualwanlink#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#status WantempSystemVirtualwanlink#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#wanprof WantempSystemVirtualwanlink#wanprof}
  */
  readonly wanprof: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#health_check WantempSystemVirtualwanlink#health_check}
  */
  readonly healthCheck?: WantempSystemVirtualwanlinkHealthCheck[] | cdktf.IResolvable;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#members WantempSystemVirtualwanlink#members}
  */
  readonly members?: WantempSystemVirtualwanlinkMembers[] | cdktf.IResolvable;
  /**
  * neighbor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#neighbor WantempSystemVirtualwanlink#neighbor}
  */
  readonly neighbor?: WantempSystemVirtualwanlinkNeighbor[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#service WantempSystemVirtualwanlink#service}
  */
  readonly service?: WantempSystemVirtualwanlinkService[] | cdktf.IResolvable;
}
export interface WantempSystemVirtualwanlinkHealthCheckSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#id WantempSystemVirtualwanlink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#jitter_threshold WantempSystemVirtualwanlink#jitter_threshold}
  */
  readonly jitterThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#latency_threshold WantempSystemVirtualwanlink#latency_threshold}
  */
  readonly latencyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#link_cost_factor WantempSystemVirtualwanlink#link_cost_factor}
  */
  readonly linkCostFactor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#packetloss_threshold WantempSystemVirtualwanlink#packetloss_threshold}
  */
  readonly packetlossThreshold?: number;
}

export function wantempSystemVirtualwanlinkHealthCheckSlaToTerraform(struct?: WantempSystemVirtualwanlinkHealthCheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    jitter_threshold: cdktf.numberToTerraform(struct!.jitterThreshold),
    latency_threshold: cdktf.numberToTerraform(struct!.latencyThreshold),
    link_cost_factor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.linkCostFactor),
    packetloss_threshold: cdktf.numberToTerraform(struct!.packetlossThreshold),
  }
}


export function wantempSystemVirtualwanlinkHealthCheckSlaToHclTerraform(struct?: WantempSystemVirtualwanlinkHealthCheckSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_threshold: {
      value: cdktf.numberToHclTerraform(struct!.jitterThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_threshold: {
      value: cdktf.numberToHclTerraform(struct!.latencyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.linkCostFactor),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    packetloss_threshold: {
      value: cdktf.numberToHclTerraform(struct!.packetlossThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WantempSystemVirtualwanlinkHealthCheckSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkHealthCheckSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._jitterThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterThreshold = this._jitterThreshold;
    }
    if (this._latencyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyThreshold = this._latencyThreshold;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._packetlossThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetlossThreshold = this._packetlossThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkHealthCheckSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._jitterThreshold = undefined;
      this._latencyThreshold = undefined;
      this._linkCostFactor = undefined;
      this._packetlossThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._jitterThreshold = value.jitterThreshold;
      this._latencyThreshold = value.latencyThreshold;
      this._linkCostFactor = value.linkCostFactor;
      this._packetlossThreshold = value.packetlossThreshold;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jitter_threshold - computed: false, optional: true, required: false
  private _jitterThreshold?: number; 
  public get jitterThreshold() {
    return this.getNumberAttribute('jitter_threshold');
  }
  public set jitterThreshold(value: number) {
    this._jitterThreshold = value;
  }
  public resetJitterThreshold() {
    this._jitterThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterThresholdInput() {
    return this._jitterThreshold;
  }

  // latency_threshold - computed: false, optional: true, required: false
  private _latencyThreshold?: number; 
  public get latencyThreshold() {
    return this.getNumberAttribute('latency_threshold');
  }
  public set latencyThreshold(value: number) {
    this._latencyThreshold = value;
  }
  public resetLatencyThreshold() {
    this._latencyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyThresholdInput() {
    return this._latencyThreshold;
  }

  // link_cost_factor - computed: true, optional: true, required: false
  private _linkCostFactor?: string[]; 
  public get linkCostFactor() {
    return cdktf.Fn.tolist(this.getListAttribute('link_cost_factor'));
  }
  public set linkCostFactor(value: string[]) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // packetloss_threshold - computed: false, optional: true, required: false
  private _packetlossThreshold?: number; 
  public get packetlossThreshold() {
    return this.getNumberAttribute('packetloss_threshold');
  }
  public set packetlossThreshold(value: number) {
    this._packetlossThreshold = value;
  }
  public resetPacketlossThreshold() {
    this._packetlossThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetlossThresholdInput() {
    return this._packetlossThreshold;
  }
}

export class WantempSystemVirtualwanlinkHealthCheckSlaList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkHealthCheckSla[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkHealthCheckSlaOutputReference {
    return new WantempSystemVirtualwanlinkHealthCheckSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WantempSystemVirtualwanlinkHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#_dynamic_server WantempSystemVirtualwanlink#_dynamic_server}
  */
  readonly dynamicServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#addr_mode WantempSystemVirtualwanlink#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#diffservcode WantempSystemVirtualwanlink#diffservcode}
  */
  readonly diffservcode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#failtime WantempSystemVirtualwanlink#failtime}
  */
  readonly failtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#ha_priority WantempSystemVirtualwanlink#ha_priority}
  */
  readonly haPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#http_agent WantempSystemVirtualwanlink#http_agent}
  */
  readonly httpAgent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#http_get WantempSystemVirtualwanlink#http_get}
  */
  readonly httpGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#http_match WantempSystemVirtualwanlink#http_match}
  */
  readonly httpMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_id WantempSystemVirtualwanlink#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#interval WantempSystemVirtualwanlink#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#members WantempSystemVirtualwanlink#members}
  */
  readonly members?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#name WantempSystemVirtualwanlink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#packet_size WantempSystemVirtualwanlink#packet_size}
  */
  readonly packetSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#password WantempSystemVirtualwanlink#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#port WantempSystemVirtualwanlink#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#probe_packets WantempSystemVirtualwanlink#probe_packets}
  */
  readonly probePackets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#probe_timeout WantempSystemVirtualwanlink#probe_timeout}
  */
  readonly probeTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#protocol WantempSystemVirtualwanlink#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#recoverytime WantempSystemVirtualwanlink#recoverytime}
  */
  readonly recoverytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#security_mode WantempSystemVirtualwanlink#security_mode}
  */
  readonly securityMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#server WantempSystemVirtualwanlink#server}
  */
  readonly server?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla_fail_log_period WantempSystemVirtualwanlink#sla_fail_log_period}
  */
  readonly slaFailLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla_pass_log_period WantempSystemVirtualwanlink#sla_pass_log_period}
  */
  readonly slaPassLogPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_alert_jitter WantempSystemVirtualwanlink#threshold_alert_jitter}
  */
  readonly thresholdAlertJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_alert_latency WantempSystemVirtualwanlink#threshold_alert_latency}
  */
  readonly thresholdAlertLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_alert_packetloss WantempSystemVirtualwanlink#threshold_alert_packetloss}
  */
  readonly thresholdAlertPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_warning_jitter WantempSystemVirtualwanlink#threshold_warning_jitter}
  */
  readonly thresholdWarningJitter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_warning_latency WantempSystemVirtualwanlink#threshold_warning_latency}
  */
  readonly thresholdWarningLatency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#threshold_warning_packetloss WantempSystemVirtualwanlink#threshold_warning_packetloss}
  */
  readonly thresholdWarningPacketloss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#update_cascade_interface WantempSystemVirtualwanlink#update_cascade_interface}
  */
  readonly updateCascadeInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#update_static_route WantempSystemVirtualwanlink#update_static_route}
  */
  readonly updateStaticRoute?: string;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla WantempSystemVirtualwanlink#sla}
  */
  readonly sla?: WantempSystemVirtualwanlinkHealthCheckSla[] | cdktf.IResolvable;
}

export function wantempSystemVirtualwanlinkHealthCheckToTerraform(struct?: WantempSystemVirtualwanlinkHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _dynamic_server: cdktf.stringToTerraform(struct!.dynamicServer),
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    diffservcode: cdktf.stringToTerraform(struct!.diffservcode),
    failtime: cdktf.numberToTerraform(struct!.failtime),
    ha_priority: cdktf.numberToTerraform(struct!.haPriority),
    http_agent: cdktf.stringToTerraform(struct!.httpAgent),
    http_get: cdktf.stringToTerraform(struct!.httpGet),
    http_match: cdktf.stringToTerraform(struct!.httpMatch),
    internet_service_id: cdktf.stringToTerraform(struct!.internetServiceId),
    interval: cdktf.numberToTerraform(struct!.interval),
    members: cdktf.stringToTerraform(struct!.members),
    name: cdktf.stringToTerraform(struct!.name),
    packet_size: cdktf.numberToTerraform(struct!.packetSize),
    password: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    probe_packets: cdktf.stringToTerraform(struct!.probePackets),
    probe_timeout: cdktf.numberToTerraform(struct!.probeTimeout),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    recoverytime: cdktf.numberToTerraform(struct!.recoverytime),
    security_mode: cdktf.stringToTerraform(struct!.securityMode),
    server: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.server),
    sla_fail_log_period: cdktf.numberToTerraform(struct!.slaFailLogPeriod),
    sla_pass_log_period: cdktf.numberToTerraform(struct!.slaPassLogPeriod),
    threshold_alert_jitter: cdktf.numberToTerraform(struct!.thresholdAlertJitter),
    threshold_alert_latency: cdktf.numberToTerraform(struct!.thresholdAlertLatency),
    threshold_alert_packetloss: cdktf.numberToTerraform(struct!.thresholdAlertPacketloss),
    threshold_warning_jitter: cdktf.numberToTerraform(struct!.thresholdWarningJitter),
    threshold_warning_latency: cdktf.numberToTerraform(struct!.thresholdWarningLatency),
    threshold_warning_packetloss: cdktf.numberToTerraform(struct!.thresholdWarningPacketloss),
    update_cascade_interface: cdktf.stringToTerraform(struct!.updateCascadeInterface),
    update_static_route: cdktf.stringToTerraform(struct!.updateStaticRoute),
    sla: cdktf.listMapper(wantempSystemVirtualwanlinkHealthCheckSlaToTerraform, true)(struct!.sla),
  }
}


export function wantempSystemVirtualwanlinkHealthCheckToHclTerraform(struct?: WantempSystemVirtualwanlinkHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _dynamic_server: {
      value: cdktf.stringToHclTerraform(struct!.dynamicServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diffservcode: {
      value: cdktf.stringToHclTerraform(struct!.diffservcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failtime: {
      value: cdktf.numberToHclTerraform(struct!.failtime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_priority: {
      value: cdktf.numberToHclTerraform(struct!.haPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_agent: {
      value: cdktf.stringToHclTerraform(struct!.httpAgent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_get: {
      value: cdktf.stringToHclTerraform(struct!.httpGet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_match: {
      value: cdktf.stringToHclTerraform(struct!.httpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_id: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    members: {
      value: cdktf.stringToHclTerraform(struct!.members),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_size: {
      value: cdktf.numberToHclTerraform(struct!.packetSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.password),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_packets: {
      value: cdktf.stringToHclTerraform(struct!.probePackets),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_timeout: {
      value: cdktf.numberToHclTerraform(struct!.probeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recoverytime: {
      value: cdktf.numberToHclTerraform(struct!.recoverytime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    security_mode: {
      value: cdktf.stringToHclTerraform(struct!.securityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.server),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sla_fail_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaFailLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_pass_log_period: {
      value: cdktf.numberToHclTerraform(struct!.slaPassLogPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_alert_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdAlertPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_jitter: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningJitter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_latency: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningLatency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_warning_packetloss: {
      value: cdktf.numberToHclTerraform(struct!.thresholdWarningPacketloss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_cascade_interface: {
      value: cdktf.stringToHclTerraform(struct!.updateCascadeInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_static_route: {
      value: cdktf.stringToHclTerraform(struct!.updateStaticRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla: {
      value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkHealthCheckSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "WantempSystemVirtualwanlinkHealthCheckSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WantempSystemVirtualwanlinkHealthCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicServer = this._dynamicServer;
    }
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._diffservcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.diffservcode = this._diffservcode;
    }
    if (this._failtime !== undefined) {
      hasAnyValues = true;
      internalValueResult.failtime = this._failtime;
    }
    if (this._haPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.haPriority = this._haPriority;
    }
    if (this._httpAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAgent = this._httpAgent;
    }
    if (this._httpGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet;
    }
    if (this._httpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMatch = this._httpMatch;
    }
    if (this._internetServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceId = this._internetServiceId;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSize = this._packetSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._probePackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePackets = this._probePackets;
    }
    if (this._probeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimeout = this._probeTimeout;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._recoverytime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverytime = this._recoverytime;
    }
    if (this._securityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityMode = this._securityMode;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._slaFailLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaFailLogPeriod = this._slaFailLogPeriod;
    }
    if (this._slaPassLogPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaPassLogPeriod = this._slaPassLogPeriod;
    }
    if (this._thresholdAlertJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertJitter = this._thresholdAlertJitter;
    }
    if (this._thresholdAlertLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertLatency = this._thresholdAlertLatency;
    }
    if (this._thresholdAlertPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdAlertPacketloss = this._thresholdAlertPacketloss;
    }
    if (this._thresholdWarningJitter !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningJitter = this._thresholdWarningJitter;
    }
    if (this._thresholdWarningLatency !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningLatency = this._thresholdWarningLatency;
    }
    if (this._thresholdWarningPacketloss !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdWarningPacketloss = this._thresholdWarningPacketloss;
    }
    if (this._updateCascadeInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCascadeInterface = this._updateCascadeInterface;
    }
    if (this._updateStaticRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStaticRoute = this._updateStaticRoute;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicServer = undefined;
      this._addrMode = undefined;
      this._diffservcode = undefined;
      this._failtime = undefined;
      this._haPriority = undefined;
      this._httpAgent = undefined;
      this._httpGet = undefined;
      this._httpMatch = undefined;
      this._internetServiceId = undefined;
      this._interval = undefined;
      this._members = undefined;
      this._name = undefined;
      this._packetSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._probePackets = undefined;
      this._probeTimeout = undefined;
      this._protocol = undefined;
      this._recoverytime = undefined;
      this._securityMode = undefined;
      this._server = undefined;
      this._slaFailLogPeriod = undefined;
      this._slaPassLogPeriod = undefined;
      this._thresholdAlertJitter = undefined;
      this._thresholdAlertLatency = undefined;
      this._thresholdAlertPacketloss = undefined;
      this._thresholdWarningJitter = undefined;
      this._thresholdWarningLatency = undefined;
      this._thresholdWarningPacketloss = undefined;
      this._updateCascadeInterface = undefined;
      this._updateStaticRoute = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicServer = value.dynamicServer;
      this._addrMode = value.addrMode;
      this._diffservcode = value.diffservcode;
      this._failtime = value.failtime;
      this._haPriority = value.haPriority;
      this._httpAgent = value.httpAgent;
      this._httpGet = value.httpGet;
      this._httpMatch = value.httpMatch;
      this._internetServiceId = value.internetServiceId;
      this._interval = value.interval;
      this._members = value.members;
      this._name = value.name;
      this._packetSize = value.packetSize;
      this._password = value.password;
      this._port = value.port;
      this._probePackets = value.probePackets;
      this._probeTimeout = value.probeTimeout;
      this._protocol = value.protocol;
      this._recoverytime = value.recoverytime;
      this._securityMode = value.securityMode;
      this._server = value.server;
      this._slaFailLogPeriod = value.slaFailLogPeriod;
      this._slaPassLogPeriod = value.slaPassLogPeriod;
      this._thresholdAlertJitter = value.thresholdAlertJitter;
      this._thresholdAlertLatency = value.thresholdAlertLatency;
      this._thresholdAlertPacketloss = value.thresholdAlertPacketloss;
      this._thresholdWarningJitter = value.thresholdWarningJitter;
      this._thresholdWarningLatency = value.thresholdWarningLatency;
      this._thresholdWarningPacketloss = value.thresholdWarningPacketloss;
      this._updateCascadeInterface = value.updateCascadeInterface;
      this._updateStaticRoute = value.updateStaticRoute;
      this._sla.internalValue = value.sla;
    }
  }

  // _dynamic_server - computed: false, optional: true, required: false
  private _dynamicServer?: string; 
  public get dynamicServer() {
    return this.getStringAttribute('_dynamic_server');
  }
  public set dynamicServer(value: string) {
    this._dynamicServer = value;
  }
  public resetDynamicServer() {
    this._dynamicServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicServerInput() {
    return this._dynamicServer;
  }

  // addr_mode - computed: false, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // diffservcode - computed: false, optional: true, required: false
  private _diffservcode?: string; 
  public get diffservcode() {
    return this.getStringAttribute('diffservcode');
  }
  public set diffservcode(value: string) {
    this._diffservcode = value;
  }
  public resetDiffservcode() {
    this._diffservcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diffservcodeInput() {
    return this._diffservcode;
  }

  // failtime - computed: false, optional: true, required: false
  private _failtime?: number; 
  public get failtime() {
    return this.getNumberAttribute('failtime');
  }
  public set failtime(value: number) {
    this._failtime = value;
  }
  public resetFailtime() {
    this._failtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failtimeInput() {
    return this._failtime;
  }

  // ha_priority - computed: false, optional: true, required: false
  private _haPriority?: number; 
  public get haPriority() {
    return this.getNumberAttribute('ha_priority');
  }
  public set haPriority(value: number) {
    this._haPriority = value;
  }
  public resetHaPriority() {
    this._haPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPriorityInput() {
    return this._haPriority;
  }

  // http_agent - computed: false, optional: true, required: false
  private _httpAgent?: string; 
  public get httpAgent() {
    return this.getStringAttribute('http_agent');
  }
  public set httpAgent(value: string) {
    this._httpAgent = value;
  }
  public resetHttpAgent() {
    this._httpAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAgentInput() {
    return this._httpAgent;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: string; 
  public get httpGet() {
    return this.getStringAttribute('http_get');
  }
  public set httpGet(value: string) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_match - computed: false, optional: true, required: false
  private _httpMatch?: string; 
  public get httpMatch() {
    return this.getStringAttribute('http_match');
  }
  public set httpMatch(value: string) {
    this._httpMatch = value;
  }
  public resetHttpMatch() {
    this._httpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMatchInput() {
    return this._httpMatch;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string; 
  public get members() {
    return this.getStringAttribute('members');
  }
  public set members(value: string) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
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

  // packet_size - computed: false, optional: true, required: false
  private _packetSize?: number; 
  public get packetSize() {
    return this.getNumberAttribute('packet_size');
  }
  public set packetSize(value: number) {
    this._packetSize = value;
  }
  public resetPacketSize() {
    this._packetSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSizeInput() {
    return this._packetSize;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // probe_packets - computed: false, optional: true, required: false
  private _probePackets?: string; 
  public get probePackets() {
    return this.getStringAttribute('probe_packets');
  }
  public set probePackets(value: string) {
    this._probePackets = value;
  }
  public resetProbePackets() {
    this._probePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePacketsInput() {
    return this._probePackets;
  }

  // probe_timeout - computed: false, optional: true, required: false
  private _probeTimeout?: number; 
  public get probeTimeout() {
    return this.getNumberAttribute('probe_timeout');
  }
  public set probeTimeout(value: number) {
    this._probeTimeout = value;
  }
  public resetProbeTimeout() {
    this._probeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
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

  // recoverytime - computed: false, optional: true, required: false
  private _recoverytime?: number; 
  public get recoverytime() {
    return this.getNumberAttribute('recoverytime');
  }
  public set recoverytime(value: number) {
    this._recoverytime = value;
  }
  public resetRecoverytime() {
    this._recoverytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverytimeInput() {
    return this._recoverytime;
  }

  // security_mode - computed: false, optional: true, required: false
  private _securityMode?: string; 
  public get securityMode() {
    return this.getStringAttribute('security_mode');
  }
  public set securityMode(value: string) {
    this._securityMode = value;
  }
  public resetSecurityMode() {
    this._securityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityModeInput() {
    return this._securityMode;
  }

  // server - computed: true, optional: true, required: false
  private _server?: string[]; 
  public get server() {
    return cdktf.Fn.tolist(this.getListAttribute('server'));
  }
  public set server(value: string[]) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // sla_fail_log_period - computed: false, optional: true, required: false
  private _slaFailLogPeriod?: number; 
  public get slaFailLogPeriod() {
    return this.getNumberAttribute('sla_fail_log_period');
  }
  public set slaFailLogPeriod(value: number) {
    this._slaFailLogPeriod = value;
  }
  public resetSlaFailLogPeriod() {
    this._slaFailLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaFailLogPeriodInput() {
    return this._slaFailLogPeriod;
  }

  // sla_pass_log_period - computed: false, optional: true, required: false
  private _slaPassLogPeriod?: number; 
  public get slaPassLogPeriod() {
    return this.getNumberAttribute('sla_pass_log_period');
  }
  public set slaPassLogPeriod(value: number) {
    this._slaPassLogPeriod = value;
  }
  public resetSlaPassLogPeriod() {
    this._slaPassLogPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaPassLogPeriodInput() {
    return this._slaPassLogPeriod;
  }

  // threshold_alert_jitter - computed: false, optional: true, required: false
  private _thresholdAlertJitter?: number; 
  public get thresholdAlertJitter() {
    return this.getNumberAttribute('threshold_alert_jitter');
  }
  public set thresholdAlertJitter(value: number) {
    this._thresholdAlertJitter = value;
  }
  public resetThresholdAlertJitter() {
    this._thresholdAlertJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertJitterInput() {
    return this._thresholdAlertJitter;
  }

  // threshold_alert_latency - computed: false, optional: true, required: false
  private _thresholdAlertLatency?: number; 
  public get thresholdAlertLatency() {
    return this.getNumberAttribute('threshold_alert_latency');
  }
  public set thresholdAlertLatency(value: number) {
    this._thresholdAlertLatency = value;
  }
  public resetThresholdAlertLatency() {
    this._thresholdAlertLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertLatencyInput() {
    return this._thresholdAlertLatency;
  }

  // threshold_alert_packetloss - computed: false, optional: true, required: false
  private _thresholdAlertPacketloss?: number; 
  public get thresholdAlertPacketloss() {
    return this.getNumberAttribute('threshold_alert_packetloss');
  }
  public set thresholdAlertPacketloss(value: number) {
    this._thresholdAlertPacketloss = value;
  }
  public resetThresholdAlertPacketloss() {
    this._thresholdAlertPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdAlertPacketlossInput() {
    return this._thresholdAlertPacketloss;
  }

  // threshold_warning_jitter - computed: false, optional: true, required: false
  private _thresholdWarningJitter?: number; 
  public get thresholdWarningJitter() {
    return this.getNumberAttribute('threshold_warning_jitter');
  }
  public set thresholdWarningJitter(value: number) {
    this._thresholdWarningJitter = value;
  }
  public resetThresholdWarningJitter() {
    this._thresholdWarningJitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningJitterInput() {
    return this._thresholdWarningJitter;
  }

  // threshold_warning_latency - computed: false, optional: true, required: false
  private _thresholdWarningLatency?: number; 
  public get thresholdWarningLatency() {
    return this.getNumberAttribute('threshold_warning_latency');
  }
  public set thresholdWarningLatency(value: number) {
    this._thresholdWarningLatency = value;
  }
  public resetThresholdWarningLatency() {
    this._thresholdWarningLatency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningLatencyInput() {
    return this._thresholdWarningLatency;
  }

  // threshold_warning_packetloss - computed: false, optional: true, required: false
  private _thresholdWarningPacketloss?: number; 
  public get thresholdWarningPacketloss() {
    return this.getNumberAttribute('threshold_warning_packetloss');
  }
  public set thresholdWarningPacketloss(value: number) {
    this._thresholdWarningPacketloss = value;
  }
  public resetThresholdWarningPacketloss() {
    this._thresholdWarningPacketloss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdWarningPacketlossInput() {
    return this._thresholdWarningPacketloss;
  }

  // update_cascade_interface - computed: false, optional: true, required: false
  private _updateCascadeInterface?: string; 
  public get updateCascadeInterface() {
    return this.getStringAttribute('update_cascade_interface');
  }
  public set updateCascadeInterface(value: string) {
    this._updateCascadeInterface = value;
  }
  public resetUpdateCascadeInterface() {
    this._updateCascadeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCascadeInterfaceInput() {
    return this._updateCascadeInterface;
  }

  // update_static_route - computed: false, optional: true, required: false
  private _updateStaticRoute?: string; 
  public get updateStaticRoute() {
    return this.getStringAttribute('update_static_route');
  }
  public set updateStaticRoute(value: string) {
    this._updateStaticRoute = value;
  }
  public resetUpdateStaticRoute() {
    this._updateStaticRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStaticRouteInput() {
    return this._updateStaticRoute;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new WantempSystemVirtualwanlinkHealthCheckSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: WantempSystemVirtualwanlinkHealthCheckSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class WantempSystemVirtualwanlinkHealthCheckList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkHealthCheck[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkHealthCheckOutputReference {
    return new WantempSystemVirtualwanlinkHealthCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WantempSystemVirtualwanlinkMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#_dynamic_member WantempSystemVirtualwanlink#_dynamic_member}
  */
  readonly dynamicMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#comment WantempSystemVirtualwanlink#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#cost WantempSystemVirtualwanlink#cost}
  */
  readonly cost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#gateway WantempSystemVirtualwanlink#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#gateway6 WantempSystemVirtualwanlink#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#ingress_spillover_threshold WantempSystemVirtualwanlink#ingress_spillover_threshold}
  */
  readonly ingressSpilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#interface WantempSystemVirtualwanlink#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#priority WantempSystemVirtualwanlink#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#seq_num WantempSystemVirtualwanlink#seq_num}
  */
  readonly seqNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#source WantempSystemVirtualwanlink#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#source6 WantempSystemVirtualwanlink#source6}
  */
  readonly source6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#spillover_threshold WantempSystemVirtualwanlink#spillover_threshold}
  */
  readonly spilloverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#status WantempSystemVirtualwanlink#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#volume_ratio WantempSystemVirtualwanlink#volume_ratio}
  */
  readonly volumeRatio?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#weight WantempSystemVirtualwanlink#weight}
  */
  readonly weight?: number;
}

export function wantempSystemVirtualwanlinkMembersToTerraform(struct?: WantempSystemVirtualwanlinkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    _dynamic_member: cdktf.stringToTerraform(struct!.dynamicMember),
    comment: cdktf.stringToTerraform(struct!.comment),
    cost: cdktf.stringToTerraform(struct!.cost),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ingress_spillover_threshold: cdktf.numberToTerraform(struct!.ingressSpilloverThreshold),
    interface: cdktf.stringToTerraform(struct!.interface),
    priority: cdktf.numberToTerraform(struct!.priority),
    seq_num: cdktf.numberToTerraform(struct!.seqNum),
    source: cdktf.stringToTerraform(struct!.source),
    source6: cdktf.stringToTerraform(struct!.source6),
    spillover_threshold: cdktf.numberToTerraform(struct!.spilloverThreshold),
    status: cdktf.stringToTerraform(struct!.status),
    volume_ratio: cdktf.numberToTerraform(struct!.volumeRatio),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function wantempSystemVirtualwanlinkMembersToHclTerraform(struct?: WantempSystemVirtualwanlinkMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    _dynamic_member: {
      value: cdktf.stringToHclTerraform(struct!.dynamicMember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.stringToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ingressSpilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_num: {
      value: cdktf.numberToHclTerraform(struct!.seqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source6: {
      value: cdktf.stringToHclTerraform(struct!.source6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spillover_threshold: {
      value: cdktf.numberToHclTerraform(struct!.spilloverThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_ratio: {
      value: cdktf.numberToHclTerraform(struct!.volumeRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class WantempSystemVirtualwanlinkMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynamicMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicMember = this._dynamicMember;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ingressSpilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressSpilloverThreshold = this._ingressSpilloverThreshold;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._seqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqNum = this._seqNum;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._source6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.source6 = this._source6;
    }
    if (this._spilloverThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.spilloverThreshold = this._spilloverThreshold;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._volumeRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeRatio = this._volumeRatio;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynamicMember = undefined;
      this._comment = undefined;
      this._cost = undefined;
      this._gateway = undefined;
      this._gateway6 = undefined;
      this._ingressSpilloverThreshold = undefined;
      this._interface = undefined;
      this._priority = undefined;
      this._seqNum = undefined;
      this._source = undefined;
      this._source6 = undefined;
      this._spilloverThreshold = undefined;
      this._status = undefined;
      this._volumeRatio = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynamicMember = value.dynamicMember;
      this._comment = value.comment;
      this._cost = value.cost;
      this._gateway = value.gateway;
      this._gateway6 = value.gateway6;
      this._ingressSpilloverThreshold = value.ingressSpilloverThreshold;
      this._interface = value.interface;
      this._priority = value.priority;
      this._seqNum = value.seqNum;
      this._source = value.source;
      this._source6 = value.source6;
      this._spilloverThreshold = value.spilloverThreshold;
      this._status = value.status;
      this._volumeRatio = value.volumeRatio;
      this._weight = value.weight;
    }
  }

  // _dynamic_member - computed: false, optional: true, required: false
  private _dynamicMember?: string; 
  public get dynamicMember() {
    return this.getStringAttribute('_dynamic_member');
  }
  public set dynamicMember(value: string) {
    this._dynamicMember = value;
  }
  public resetDynamicMember() {
    this._dynamicMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicMemberInput() {
    return this._dynamicMember;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: string; 
  public get cost() {
    return this.getStringAttribute('cost');
  }
  public set cost(value: string) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ingress_spillover_threshold - computed: false, optional: true, required: false
  private _ingressSpilloverThreshold?: number; 
  public get ingressSpilloverThreshold() {
    return this.getNumberAttribute('ingress_spillover_threshold');
  }
  public set ingressSpilloverThreshold(value: number) {
    this._ingressSpilloverThreshold = value;
  }
  public resetIngressSpilloverThreshold() {
    this._ingressSpilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSpilloverThresholdInput() {
    return this._ingressSpilloverThreshold;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // seq_num - computed: false, optional: true, required: false
  private _seqNum?: number; 
  public get seqNum() {
    return this.getNumberAttribute('seq_num');
  }
  public set seqNum(value: number) {
    this._seqNum = value;
  }
  public resetSeqNum() {
    this._seqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqNumInput() {
    return this._seqNum;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source6 - computed: false, optional: true, required: false
  private _source6?: string; 
  public get source6() {
    return this.getStringAttribute('source6');
  }
  public set source6(value: string) {
    this._source6 = value;
  }
  public resetSource6() {
    this._source6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get source6Input() {
    return this._source6;
  }

  // spillover_threshold - computed: false, optional: true, required: false
  private _spilloverThreshold?: number; 
  public get spilloverThreshold() {
    return this.getNumberAttribute('spillover_threshold');
  }
  public set spilloverThreshold(value: number) {
    this._spilloverThreshold = value;
  }
  public resetSpilloverThreshold() {
    this._spilloverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spilloverThresholdInput() {
    return this._spilloverThreshold;
  }

  // status - computed: false, optional: true, required: false
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

  // volume_ratio - computed: false, optional: true, required: false
  private _volumeRatio?: number; 
  public get volumeRatio() {
    return this.getNumberAttribute('volume_ratio');
  }
  public set volumeRatio(value: number) {
    this._volumeRatio = value;
  }
  public resetVolumeRatio() {
    this._volumeRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeRatioInput() {
    return this._volumeRatio;
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

export class WantempSystemVirtualwanlinkMembersList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkMembers[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkMembersOutputReference {
    return new WantempSystemVirtualwanlinkMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WantempSystemVirtualwanlinkNeighbor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#health_check WantempSystemVirtualwanlink#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#ip WantempSystemVirtualwanlink#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#member WantempSystemVirtualwanlink#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#role WantempSystemVirtualwanlink#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla_id WantempSystemVirtualwanlink#sla_id}
  */
  readonly slaId?: number;
}

export function wantempSystemVirtualwanlinkNeighborToTerraform(struct?: WantempSystemVirtualwanlinkNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    ip: cdktf.stringToTerraform(struct!.ip),
    member: cdktf.stringToTerraform(struct!.member),
    role: cdktf.stringToTerraform(struct!.role),
    sla_id: cdktf.numberToTerraform(struct!.slaId),
  }
}


export function wantempSystemVirtualwanlinkNeighborToHclTerraform(struct?: WantempSystemVirtualwanlinkNeighbor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla_id: {
      value: cdktf.numberToHclTerraform(struct!.slaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WantempSystemVirtualwanlinkNeighborOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkNeighbor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._slaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaId = this._slaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkNeighbor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._ip = undefined;
      this._member = undefined;
      this._role = undefined;
      this._slaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._ip = value.ip;
      this._member = value.member;
      this._role = value.role;
      this._slaId = value.slaId;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
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

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sla_id - computed: false, optional: true, required: false
  private _slaId?: number; 
  public get slaId() {
    return this.getNumberAttribute('sla_id');
  }
  public set slaId(value: number) {
    this._slaId = value;
  }
  public resetSlaId() {
    this._slaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaIdInput() {
    return this._slaId;
  }
}

export class WantempSystemVirtualwanlinkNeighborList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkNeighbor[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkNeighborOutputReference {
    return new WantempSystemVirtualwanlinkNeighborOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WantempSystemVirtualwanlinkServiceSla {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#health_check WantempSystemVirtualwanlink#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#id WantempSystemVirtualwanlink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function wantempSystemVirtualwanlinkServiceSlaToTerraform(struct?: WantempSystemVirtualwanlinkServiceSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function wantempSystemVirtualwanlinkServiceSlaToHclTerraform(struct?: WantempSystemVirtualwanlinkServiceSla | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WantempSystemVirtualwanlinkServiceSlaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkServiceSla | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkServiceSla | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthCheck = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthCheck = value.healthCheck;
      this._id = value.id;
    }
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class WantempSystemVirtualwanlinkServiceSlaList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkServiceSla[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkServiceSlaOutputReference {
    return new WantempSystemVirtualwanlinkServiceSlaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WantempSystemVirtualwanlinkService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#addr_mode WantempSystemVirtualwanlink#addr_mode}
  */
  readonly addrMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#bandwidth_weight WantempSystemVirtualwanlink#bandwidth_weight}
  */
  readonly bandwidthWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#default WantempSystemVirtualwanlink#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dscp_forward WantempSystemVirtualwanlink#dscp_forward}
  */
  readonly dscpForward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dscp_forward_tag WantempSystemVirtualwanlink#dscp_forward_tag}
  */
  readonly dscpForwardTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dscp_reverse WantempSystemVirtualwanlink#dscp_reverse}
  */
  readonly dscpReverse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dscp_reverse_tag WantempSystemVirtualwanlink#dscp_reverse_tag}
  */
  readonly dscpReverseTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dst WantempSystemVirtualwanlink#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dst6 WantempSystemVirtualwanlink#dst6}
  */
  readonly dst6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#dst_negate WantempSystemVirtualwanlink#dst_negate}
  */
  readonly dstNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#end_port WantempSystemVirtualwanlink#end_port}
  */
  readonly endPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#gateway WantempSystemVirtualwanlink#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#groups WantempSystemVirtualwanlink#groups}
  */
  readonly groups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#health_check WantempSystemVirtualwanlink#health_check}
  */
  readonly healthCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#hold_down_time WantempSystemVirtualwanlink#hold_down_time}
  */
  readonly holdDownTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#id WantempSystemVirtualwanlink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#input_device WantempSystemVirtualwanlink#input_device}
  */
  readonly inputDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#input_device_negate WantempSystemVirtualwanlink#input_device_negate}
  */
  readonly inputDeviceNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service WantempSystemVirtualwanlink#internet_service}
  */
  readonly internetService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_app_ctrl WantempSystemVirtualwanlink#internet_service_app_ctrl}
  */
  readonly internetServiceAppCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_app_ctrl_group WantempSystemVirtualwanlink#internet_service_app_ctrl_group}
  */
  readonly internetServiceAppCtrlGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_ctrl WantempSystemVirtualwanlink#internet_service_ctrl}
  */
  readonly internetServiceCtrl?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_ctrl_group WantempSystemVirtualwanlink#internet_service_ctrl_group}
  */
  readonly internetServiceCtrlGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_custom WantempSystemVirtualwanlink#internet_service_custom}
  */
  readonly internetServiceCustom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_custom_group WantempSystemVirtualwanlink#internet_service_custom_group}
  */
  readonly internetServiceCustomGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_group WantempSystemVirtualwanlink#internet_service_group}
  */
  readonly internetServiceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#internet_service_id WantempSystemVirtualwanlink#internet_service_id}
  */
  readonly internetServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#jitter_weight WantempSystemVirtualwanlink#jitter_weight}
  */
  readonly jitterWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#latency_weight WantempSystemVirtualwanlink#latency_weight}
  */
  readonly latencyWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#link_cost_factor WantempSystemVirtualwanlink#link_cost_factor}
  */
  readonly linkCostFactor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#link_cost_threshold WantempSystemVirtualwanlink#link_cost_threshold}
  */
  readonly linkCostThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#member WantempSystemVirtualwanlink#member}
  */
  readonly member?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#mode WantempSystemVirtualwanlink#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#name WantempSystemVirtualwanlink#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#packet_loss_weight WantempSystemVirtualwanlink#packet_loss_weight}
  */
  readonly packetLossWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#priority_members WantempSystemVirtualwanlink#priority_members}
  */
  readonly priorityMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#protocol WantempSystemVirtualwanlink#protocol}
  */
  readonly protocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#quality_link WantempSystemVirtualwanlink#quality_link}
  */
  readonly qualityLink?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#role WantempSystemVirtualwanlink#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#route_tag WantempSystemVirtualwanlink#route_tag}
  */
  readonly routeTag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla_compare_method WantempSystemVirtualwanlink#sla_compare_method}
  */
  readonly slaCompareMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#src WantempSystemVirtualwanlink#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#src6 WantempSystemVirtualwanlink#src6}
  */
  readonly src6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#src_negate WantempSystemVirtualwanlink#src_negate}
  */
  readonly srcNegate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#standalone_action WantempSystemVirtualwanlink#standalone_action}
  */
  readonly standaloneAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#start_port WantempSystemVirtualwanlink#start_port}
  */
  readonly startPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#status WantempSystemVirtualwanlink#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#tos WantempSystemVirtualwanlink#tos}
  */
  readonly tos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#tos_mask WantempSystemVirtualwanlink#tos_mask}
  */
  readonly tosMask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#users WantempSystemVirtualwanlink#users}
  */
  readonly users?: string;
  /**
  * sla block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#sla WantempSystemVirtualwanlink#sla}
  */
  readonly sla?: WantempSystemVirtualwanlinkServiceSla[] | cdktf.IResolvable;
}

export function wantempSystemVirtualwanlinkServiceToTerraform(struct?: WantempSystemVirtualwanlinkService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr_mode: cdktf.stringToTerraform(struct!.addrMode),
    bandwidth_weight: cdktf.numberToTerraform(struct!.bandwidthWeight),
    default: cdktf.stringToTerraform(struct!.default),
    dscp_forward: cdktf.stringToTerraform(struct!.dscpForward),
    dscp_forward_tag: cdktf.stringToTerraform(struct!.dscpForwardTag),
    dscp_reverse: cdktf.stringToTerraform(struct!.dscpReverse),
    dscp_reverse_tag: cdktf.stringToTerraform(struct!.dscpReverseTag),
    dst: cdktf.stringToTerraform(struct!.dst),
    dst6: cdktf.stringToTerraform(struct!.dst6),
    dst_negate: cdktf.stringToTerraform(struct!.dstNegate),
    end_port: cdktf.numberToTerraform(struct!.endPort),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    groups: cdktf.stringToTerraform(struct!.groups),
    health_check: cdktf.stringToTerraform(struct!.healthCheck),
    hold_down_time: cdktf.numberToTerraform(struct!.holdDownTime),
    id: cdktf.numberToTerraform(struct!.id),
    input_device: cdktf.stringToTerraform(struct!.inputDevice),
    input_device_negate: cdktf.stringToTerraform(struct!.inputDeviceNegate),
    internet_service: cdktf.stringToTerraform(struct!.internetService),
    internet_service_app_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.internetServiceAppCtrl),
    internet_service_app_ctrl_group: cdktf.stringToTerraform(struct!.internetServiceAppCtrlGroup),
    internet_service_ctrl: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.internetServiceCtrl),
    internet_service_ctrl_group: cdktf.stringToTerraform(struct!.internetServiceCtrlGroup),
    internet_service_custom: cdktf.stringToTerraform(struct!.internetServiceCustom),
    internet_service_custom_group: cdktf.stringToTerraform(struct!.internetServiceCustomGroup),
    internet_service_group: cdktf.stringToTerraform(struct!.internetServiceGroup),
    internet_service_id: cdktf.stringToTerraform(struct!.internetServiceId),
    jitter_weight: cdktf.numberToTerraform(struct!.jitterWeight),
    latency_weight: cdktf.numberToTerraform(struct!.latencyWeight),
    link_cost_factor: cdktf.stringToTerraform(struct!.linkCostFactor),
    link_cost_threshold: cdktf.numberToTerraform(struct!.linkCostThreshold),
    member: cdktf.stringToTerraform(struct!.member),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    packet_loss_weight: cdktf.numberToTerraform(struct!.packetLossWeight),
    priority_members: cdktf.stringToTerraform(struct!.priorityMembers),
    protocol: cdktf.numberToTerraform(struct!.protocol),
    quality_link: cdktf.numberToTerraform(struct!.qualityLink),
    role: cdktf.stringToTerraform(struct!.role),
    route_tag: cdktf.numberToTerraform(struct!.routeTag),
    sla_compare_method: cdktf.stringToTerraform(struct!.slaCompareMethod),
    src: cdktf.stringToTerraform(struct!.src),
    src6: cdktf.stringToTerraform(struct!.src6),
    src_negate: cdktf.stringToTerraform(struct!.srcNegate),
    standalone_action: cdktf.stringToTerraform(struct!.standaloneAction),
    start_port: cdktf.numberToTerraform(struct!.startPort),
    status: cdktf.stringToTerraform(struct!.status),
    tos: cdktf.stringToTerraform(struct!.tos),
    tos_mask: cdktf.stringToTerraform(struct!.tosMask),
    users: cdktf.stringToTerraform(struct!.users),
    sla: cdktf.listMapper(wantempSystemVirtualwanlinkServiceSlaToTerraform, true)(struct!.sla),
  }
}


export function wantempSystemVirtualwanlinkServiceToHclTerraform(struct?: WantempSystemVirtualwanlinkService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr_mode: {
      value: cdktf.stringToHclTerraform(struct!.addrMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bandwidth_weight: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_forward: {
      value: cdktf.stringToHclTerraform(struct!.dscpForward),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_forward_tag: {
      value: cdktf.stringToHclTerraform(struct!.dscpForwardTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_reverse: {
      value: cdktf.stringToHclTerraform(struct!.dscpReverse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dscp_reverse_tag: {
      value: cdktf.stringToHclTerraform(struct!.dscpReverseTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst: {
      value: cdktf.stringToHclTerraform(struct!.dst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst6: {
      value: cdktf.stringToHclTerraform(struct!.dst6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_negate: {
      value: cdktf.stringToHclTerraform(struct!.dstNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_port: {
      value: cdktf.numberToHclTerraform(struct!.endPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.stringToHclTerraform(struct!.groups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_check: {
      value: cdktf.stringToHclTerraform(struct!.healthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hold_down_time: {
      value: cdktf.numberToHclTerraform(struct!.holdDownTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    input_device: {
      value: cdktf.stringToHclTerraform(struct!.inputDevice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_device_negate: {
      value: cdktf.stringToHclTerraform(struct!.inputDeviceNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service: {
      value: cdktf.stringToHclTerraform(struct!.internetService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_app_ctrl: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.internetServiceAppCtrl),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    internet_service_app_ctrl_group: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceAppCtrlGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_ctrl: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.internetServiceCtrl),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    internet_service_ctrl_group: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceCtrlGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_custom: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_custom_group: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceCustomGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_group: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_service_id: {
      value: cdktf.stringToHclTerraform(struct!.internetServiceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jitter_weight: {
      value: cdktf.numberToHclTerraform(struct!.jitterWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    latency_weight: {
      value: cdktf.numberToHclTerraform(struct!.latencyWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_cost_factor: {
      value: cdktf.stringToHclTerraform(struct!.linkCostFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_cost_threshold: {
      value: cdktf.numberToHclTerraform(struct!.linkCostThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_loss_weight: {
      value: cdktf.numberToHclTerraform(struct!.packetLossWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_members: {
      value: cdktf.stringToHclTerraform(struct!.priorityMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quality_link: {
      value: cdktf.numberToHclTerraform(struct!.qualityLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_tag: {
      value: cdktf.numberToHclTerraform(struct!.routeTag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sla_compare_method: {
      value: cdktf.stringToHclTerraform(struct!.slaCompareMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src: {
      value: cdktf.stringToHclTerraform(struct!.src),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src6: {
      value: cdktf.stringToHclTerraform(struct!.src6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_negate: {
      value: cdktf.stringToHclTerraform(struct!.srcNegate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standalone_action: {
      value: cdktf.stringToHclTerraform(struct!.standaloneAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_port: {
      value: cdktf.numberToHclTerraform(struct!.startPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.stringToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_mask: {
      value: cdktf.stringToHclTerraform(struct!.tosMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    users: {
      value: cdktf.stringToHclTerraform(struct!.users),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sla: {
      value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkServiceSlaToHclTerraform, true)(struct!.sla),
      isBlock: true,
      type: "list",
      storageClassType: "WantempSystemVirtualwanlinkServiceSlaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WantempSystemVirtualwanlinkServiceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WantempSystemVirtualwanlinkService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrMode = this._addrMode;
    }
    if (this._bandwidthWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthWeight = this._bandwidthWeight;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._dscpForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpForward = this._dscpForward;
    }
    if (this._dscpForwardTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpForwardTag = this._dscpForwardTag;
    }
    if (this._dscpReverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpReverse = this._dscpReverse;
    }
    if (this._dscpReverseTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpReverseTag = this._dscpReverseTag;
    }
    if (this._dst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst = this._dst;
    }
    if (this._dst6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dst6 = this._dst6;
    }
    if (this._dstNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstNegate = this._dstNegate;
    }
    if (this._endPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.endPort = this._endPort;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._healthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthCheck = this._healthCheck;
    }
    if (this._holdDownTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.holdDownTime = this._holdDownTime;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._inputDevice !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDevice = this._inputDevice;
    }
    if (this._inputDeviceNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDeviceNegate = this._inputDeviceNegate;
    }
    if (this._internetService !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetService = this._internetService;
    }
    if (this._internetServiceAppCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceAppCtrl = this._internetServiceAppCtrl;
    }
    if (this._internetServiceAppCtrlGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceAppCtrlGroup = this._internetServiceAppCtrlGroup;
    }
    if (this._internetServiceCtrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCtrl = this._internetServiceCtrl;
    }
    if (this._internetServiceCtrlGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCtrlGroup = this._internetServiceCtrlGroup;
    }
    if (this._internetServiceCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCustom = this._internetServiceCustom;
    }
    if (this._internetServiceCustomGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceCustomGroup = this._internetServiceCustomGroup;
    }
    if (this._internetServiceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceGroup = this._internetServiceGroup;
    }
    if (this._internetServiceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetServiceId = this._internetServiceId;
    }
    if (this._jitterWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterWeight = this._jitterWeight;
    }
    if (this._latencyWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.latencyWeight = this._latencyWeight;
    }
    if (this._linkCostFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostFactor = this._linkCostFactor;
    }
    if (this._linkCostThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkCostThreshold = this._linkCostThreshold;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._packetLossWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetLossWeight = this._packetLossWeight;
    }
    if (this._priorityMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityMembers = this._priorityMembers;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._qualityLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualityLink = this._qualityLink;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._routeTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTag = this._routeTag;
    }
    if (this._slaCompareMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaCompareMethod = this._slaCompareMethod;
    }
    if (this._src !== undefined) {
      hasAnyValues = true;
      internalValueResult.src = this._src;
    }
    if (this._src6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.src6 = this._src6;
    }
    if (this._srcNegate !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNegate = this._srcNegate;
    }
    if (this._standaloneAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneAction = this._standaloneAction;
    }
    if (this._startPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPort = this._startPort;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    if (this._tosMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosMask = this._tosMask;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._sla?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sla = this._sla?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WantempSystemVirtualwanlinkService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrMode = undefined;
      this._bandwidthWeight = undefined;
      this._default = undefined;
      this._dscpForward = undefined;
      this._dscpForwardTag = undefined;
      this._dscpReverse = undefined;
      this._dscpReverseTag = undefined;
      this._dst = undefined;
      this._dst6 = undefined;
      this._dstNegate = undefined;
      this._endPort = undefined;
      this._gateway = undefined;
      this._groups = undefined;
      this._healthCheck = undefined;
      this._holdDownTime = undefined;
      this._id = undefined;
      this._inputDevice = undefined;
      this._inputDeviceNegate = undefined;
      this._internetService = undefined;
      this._internetServiceAppCtrl = undefined;
      this._internetServiceAppCtrlGroup = undefined;
      this._internetServiceCtrl = undefined;
      this._internetServiceCtrlGroup = undefined;
      this._internetServiceCustom = undefined;
      this._internetServiceCustomGroup = undefined;
      this._internetServiceGroup = undefined;
      this._internetServiceId = undefined;
      this._jitterWeight = undefined;
      this._latencyWeight = undefined;
      this._linkCostFactor = undefined;
      this._linkCostThreshold = undefined;
      this._member = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._packetLossWeight = undefined;
      this._priorityMembers = undefined;
      this._protocol = undefined;
      this._qualityLink = undefined;
      this._role = undefined;
      this._routeTag = undefined;
      this._slaCompareMethod = undefined;
      this._src = undefined;
      this._src6 = undefined;
      this._srcNegate = undefined;
      this._standaloneAction = undefined;
      this._startPort = undefined;
      this._status = undefined;
      this._tos = undefined;
      this._tosMask = undefined;
      this._users = undefined;
      this._sla.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrMode = value.addrMode;
      this._bandwidthWeight = value.bandwidthWeight;
      this._default = value.default;
      this._dscpForward = value.dscpForward;
      this._dscpForwardTag = value.dscpForwardTag;
      this._dscpReverse = value.dscpReverse;
      this._dscpReverseTag = value.dscpReverseTag;
      this._dst = value.dst;
      this._dst6 = value.dst6;
      this._dstNegate = value.dstNegate;
      this._endPort = value.endPort;
      this._gateway = value.gateway;
      this._groups = value.groups;
      this._healthCheck = value.healthCheck;
      this._holdDownTime = value.holdDownTime;
      this._id = value.id;
      this._inputDevice = value.inputDevice;
      this._inputDeviceNegate = value.inputDeviceNegate;
      this._internetService = value.internetService;
      this._internetServiceAppCtrl = value.internetServiceAppCtrl;
      this._internetServiceAppCtrlGroup = value.internetServiceAppCtrlGroup;
      this._internetServiceCtrl = value.internetServiceCtrl;
      this._internetServiceCtrlGroup = value.internetServiceCtrlGroup;
      this._internetServiceCustom = value.internetServiceCustom;
      this._internetServiceCustomGroup = value.internetServiceCustomGroup;
      this._internetServiceGroup = value.internetServiceGroup;
      this._internetServiceId = value.internetServiceId;
      this._jitterWeight = value.jitterWeight;
      this._latencyWeight = value.latencyWeight;
      this._linkCostFactor = value.linkCostFactor;
      this._linkCostThreshold = value.linkCostThreshold;
      this._member = value.member;
      this._mode = value.mode;
      this._name = value.name;
      this._packetLossWeight = value.packetLossWeight;
      this._priorityMembers = value.priorityMembers;
      this._protocol = value.protocol;
      this._qualityLink = value.qualityLink;
      this._role = value.role;
      this._routeTag = value.routeTag;
      this._slaCompareMethod = value.slaCompareMethod;
      this._src = value.src;
      this._src6 = value.src6;
      this._srcNegate = value.srcNegate;
      this._standaloneAction = value.standaloneAction;
      this._startPort = value.startPort;
      this._status = value.status;
      this._tos = value.tos;
      this._tosMask = value.tosMask;
      this._users = value.users;
      this._sla.internalValue = value.sla;
    }
  }

  // addr_mode - computed: false, optional: true, required: false
  private _addrMode?: string; 
  public get addrMode() {
    return this.getStringAttribute('addr_mode');
  }
  public set addrMode(value: string) {
    this._addrMode = value;
  }
  public resetAddrMode() {
    this._addrMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrModeInput() {
    return this._addrMode;
  }

  // bandwidth_weight - computed: false, optional: true, required: false
  private _bandwidthWeight?: number; 
  public get bandwidthWeight() {
    return this.getNumberAttribute('bandwidth_weight');
  }
  public set bandwidthWeight(value: number) {
    this._bandwidthWeight = value;
  }
  public resetBandwidthWeight() {
    this._bandwidthWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthWeightInput() {
    return this._bandwidthWeight;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // dscp_forward - computed: false, optional: true, required: false
  private _dscpForward?: string; 
  public get dscpForward() {
    return this.getStringAttribute('dscp_forward');
  }
  public set dscpForward(value: string) {
    this._dscpForward = value;
  }
  public resetDscpForward() {
    this._dscpForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardInput() {
    return this._dscpForward;
  }

  // dscp_forward_tag - computed: false, optional: true, required: false
  private _dscpForwardTag?: string; 
  public get dscpForwardTag() {
    return this.getStringAttribute('dscp_forward_tag');
  }
  public set dscpForwardTag(value: string) {
    this._dscpForwardTag = value;
  }
  public resetDscpForwardTag() {
    this._dscpForwardTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpForwardTagInput() {
    return this._dscpForwardTag;
  }

  // dscp_reverse - computed: false, optional: true, required: false
  private _dscpReverse?: string; 
  public get dscpReverse() {
    return this.getStringAttribute('dscp_reverse');
  }
  public set dscpReverse(value: string) {
    this._dscpReverse = value;
  }
  public resetDscpReverse() {
    this._dscpReverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseInput() {
    return this._dscpReverse;
  }

  // dscp_reverse_tag - computed: false, optional: true, required: false
  private _dscpReverseTag?: string; 
  public get dscpReverseTag() {
    return this.getStringAttribute('dscp_reverse_tag');
  }
  public set dscpReverseTag(value: string) {
    this._dscpReverseTag = value;
  }
  public resetDscpReverseTag() {
    this._dscpReverseTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpReverseTagInput() {
    return this._dscpReverseTag;
  }

  // dst - computed: false, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dst6 - computed: false, optional: true, required: false
  private _dst6?: string; 
  public get dst6() {
    return this.getStringAttribute('dst6');
  }
  public set dst6(value: string) {
    this._dst6 = value;
  }
  public resetDst6() {
    this._dst6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dst6Input() {
    return this._dst6;
  }

  // dst_negate - computed: false, optional: true, required: false
  private _dstNegate?: string; 
  public get dstNegate() {
    return this.getStringAttribute('dst_negate');
  }
  public set dstNegate(value: string) {
    this._dstNegate = value;
  }
  public resetDstNegate() {
    this._dstNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNegateInput() {
    return this._dstNegate;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string; 
  public get groups() {
    return this.getStringAttribute('groups');
  }
  public set groups(value: string) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: string; 
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }
  public set healthCheck(value: string) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // hold_down_time - computed: false, optional: true, required: false
  private _holdDownTime?: number; 
  public get holdDownTime() {
    return this.getNumberAttribute('hold_down_time');
  }
  public set holdDownTime(value: number) {
    this._holdDownTime = value;
  }
  public resetHoldDownTime() {
    this._holdDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdDownTimeInput() {
    return this._holdDownTime;
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // input_device - computed: false, optional: true, required: false
  private _inputDevice?: string; 
  public get inputDevice() {
    return this.getStringAttribute('input_device');
  }
  public set inputDevice(value: string) {
    this._inputDevice = value;
  }
  public resetInputDevice() {
    this._inputDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceInput() {
    return this._inputDevice;
  }

  // input_device_negate - computed: false, optional: true, required: false
  private _inputDeviceNegate?: string; 
  public get inputDeviceNegate() {
    return this.getStringAttribute('input_device_negate');
  }
  public set inputDeviceNegate(value: string) {
    this._inputDeviceNegate = value;
  }
  public resetInputDeviceNegate() {
    this._inputDeviceNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDeviceNegateInput() {
    return this._inputDeviceNegate;
  }

  // internet_service - computed: false, optional: true, required: false
  private _internetService?: string; 
  public get internetService() {
    return this.getStringAttribute('internet_service');
  }
  public set internetService(value: string) {
    this._internetService = value;
  }
  public resetInternetService() {
    this._internetService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceInput() {
    return this._internetService;
  }

  // internet_service_app_ctrl - computed: true, optional: true, required: false
  private _internetServiceAppCtrl?: number[]; 
  public get internetServiceAppCtrl() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_app_ctrl')));
  }
  public set internetServiceAppCtrl(value: number[]) {
    this._internetServiceAppCtrl = value;
  }
  public resetInternetServiceAppCtrl() {
    this._internetServiceAppCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlInput() {
    return this._internetServiceAppCtrl;
  }

  // internet_service_app_ctrl_group - computed: false, optional: true, required: false
  private _internetServiceAppCtrlGroup?: string; 
  public get internetServiceAppCtrlGroup() {
    return this.getStringAttribute('internet_service_app_ctrl_group');
  }
  public set internetServiceAppCtrlGroup(value: string) {
    this._internetServiceAppCtrlGroup = value;
  }
  public resetInternetServiceAppCtrlGroup() {
    this._internetServiceAppCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceAppCtrlGroupInput() {
    return this._internetServiceAppCtrlGroup;
  }

  // internet_service_ctrl - computed: true, optional: true, required: false
  private _internetServiceCtrl?: number[]; 
  public get internetServiceCtrl() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('internet_service_ctrl')));
  }
  public set internetServiceCtrl(value: number[]) {
    this._internetServiceCtrl = value;
  }
  public resetInternetServiceCtrl() {
    this._internetServiceCtrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCtrlInput() {
    return this._internetServiceCtrl;
  }

  // internet_service_ctrl_group - computed: false, optional: true, required: false
  private _internetServiceCtrlGroup?: string; 
  public get internetServiceCtrlGroup() {
    return this.getStringAttribute('internet_service_ctrl_group');
  }
  public set internetServiceCtrlGroup(value: string) {
    this._internetServiceCtrlGroup = value;
  }
  public resetInternetServiceCtrlGroup() {
    this._internetServiceCtrlGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCtrlGroupInput() {
    return this._internetServiceCtrlGroup;
  }

  // internet_service_custom - computed: false, optional: true, required: false
  private _internetServiceCustom?: string; 
  public get internetServiceCustom() {
    return this.getStringAttribute('internet_service_custom');
  }
  public set internetServiceCustom(value: string) {
    this._internetServiceCustom = value;
  }
  public resetInternetServiceCustom() {
    this._internetServiceCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomInput() {
    return this._internetServiceCustom;
  }

  // internet_service_custom_group - computed: false, optional: true, required: false
  private _internetServiceCustomGroup?: string; 
  public get internetServiceCustomGroup() {
    return this.getStringAttribute('internet_service_custom_group');
  }
  public set internetServiceCustomGroup(value: string) {
    this._internetServiceCustomGroup = value;
  }
  public resetInternetServiceCustomGroup() {
    this._internetServiceCustomGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceCustomGroupInput() {
    return this._internetServiceCustomGroup;
  }

  // internet_service_group - computed: false, optional: true, required: false
  private _internetServiceGroup?: string; 
  public get internetServiceGroup() {
    return this.getStringAttribute('internet_service_group');
  }
  public set internetServiceGroup(value: string) {
    this._internetServiceGroup = value;
  }
  public resetInternetServiceGroup() {
    this._internetServiceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceGroupInput() {
    return this._internetServiceGroup;
  }

  // internet_service_id - computed: false, optional: true, required: false
  private _internetServiceId?: string; 
  public get internetServiceId() {
    return this.getStringAttribute('internet_service_id');
  }
  public set internetServiceId(value: string) {
    this._internetServiceId = value;
  }
  public resetInternetServiceId() {
    this._internetServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetServiceIdInput() {
    return this._internetServiceId;
  }

  // jitter_weight - computed: false, optional: true, required: false
  private _jitterWeight?: number; 
  public get jitterWeight() {
    return this.getNumberAttribute('jitter_weight');
  }
  public set jitterWeight(value: number) {
    this._jitterWeight = value;
  }
  public resetJitterWeight() {
    this._jitterWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterWeightInput() {
    return this._jitterWeight;
  }

  // latency_weight - computed: false, optional: true, required: false
  private _latencyWeight?: number; 
  public get latencyWeight() {
    return this.getNumberAttribute('latency_weight');
  }
  public set latencyWeight(value: number) {
    this._latencyWeight = value;
  }
  public resetLatencyWeight() {
    this._latencyWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latencyWeightInput() {
    return this._latencyWeight;
  }

  // link_cost_factor - computed: false, optional: true, required: false
  private _linkCostFactor?: string; 
  public get linkCostFactor() {
    return this.getStringAttribute('link_cost_factor');
  }
  public set linkCostFactor(value: string) {
    this._linkCostFactor = value;
  }
  public resetLinkCostFactor() {
    this._linkCostFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostFactorInput() {
    return this._linkCostFactor;
  }

  // link_cost_threshold - computed: false, optional: true, required: false
  private _linkCostThreshold?: number; 
  public get linkCostThreshold() {
    return this.getNumberAttribute('link_cost_threshold');
  }
  public set linkCostThreshold(value: number) {
    this._linkCostThreshold = value;
  }
  public resetLinkCostThreshold() {
    this._linkCostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkCostThresholdInput() {
    return this._linkCostThreshold;
  }

  // member - computed: false, optional: true, required: false
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  public resetMember() {
    this._member = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // packet_loss_weight - computed: false, optional: true, required: false
  private _packetLossWeight?: number; 
  public get packetLossWeight() {
    return this.getNumberAttribute('packet_loss_weight');
  }
  public set packetLossWeight(value: number) {
    this._packetLossWeight = value;
  }
  public resetPacketLossWeight() {
    this._packetLossWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetLossWeightInput() {
    return this._packetLossWeight;
  }

  // priority_members - computed: false, optional: true, required: false
  private _priorityMembers?: string; 
  public get priorityMembers() {
    return this.getStringAttribute('priority_members');
  }
  public set priorityMembers(value: string) {
    this._priorityMembers = value;
  }
  public resetPriorityMembers() {
    this._priorityMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityMembersInput() {
    return this._priorityMembers;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // quality_link - computed: false, optional: true, required: false
  private _qualityLink?: number; 
  public get qualityLink() {
    return this.getNumberAttribute('quality_link');
  }
  public set qualityLink(value: number) {
    this._qualityLink = value;
  }
  public resetQualityLink() {
    this._qualityLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualityLinkInput() {
    return this._qualityLink;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // route_tag - computed: false, optional: true, required: false
  private _routeTag?: number; 
  public get routeTag() {
    return this.getNumberAttribute('route_tag');
  }
  public set routeTag(value: number) {
    this._routeTag = value;
  }
  public resetRouteTag() {
    this._routeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTagInput() {
    return this._routeTag;
  }

  // sla_compare_method - computed: false, optional: true, required: false
  private _slaCompareMethod?: string; 
  public get slaCompareMethod() {
    return this.getStringAttribute('sla_compare_method');
  }
  public set slaCompareMethod(value: string) {
    this._slaCompareMethod = value;
  }
  public resetSlaCompareMethod() {
    this._slaCompareMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaCompareMethodInput() {
    return this._slaCompareMethod;
  }

  // src - computed: false, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // src6 - computed: false, optional: true, required: false
  private _src6?: string; 
  public get src6() {
    return this.getStringAttribute('src6');
  }
  public set src6(value: string) {
    this._src6 = value;
  }
  public resetSrc6() {
    this._src6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get src6Input() {
    return this._src6;
  }

  // src_negate - computed: false, optional: true, required: false
  private _srcNegate?: string; 
  public get srcNegate() {
    return this.getStringAttribute('src_negate');
  }
  public set srcNegate(value: string) {
    this._srcNegate = value;
  }
  public resetSrcNegate() {
    this._srcNegate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNegateInput() {
    return this._srcNegate;
  }

  // standalone_action - computed: false, optional: true, required: false
  private _standaloneAction?: string; 
  public get standaloneAction() {
    return this.getStringAttribute('standalone_action');
  }
  public set standaloneAction(value: string) {
    this._standaloneAction = value;
  }
  public resetStandaloneAction() {
    this._standaloneAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneActionInput() {
    return this._standaloneAction;
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

  // status - computed: false, optional: true, required: false
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

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }

  // tos_mask - computed: false, optional: true, required: false
  private _tosMask?: string; 
  public get tosMask() {
    return this.getStringAttribute('tos_mask');
  }
  public set tosMask(value: string) {
    this._tosMask = value;
  }
  public resetTosMask() {
    this._tosMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosMaskInput() {
    return this._tosMask;
  }

  // users - computed: false, optional: true, required: false
  private _users?: string; 
  public get users() {
    return this.getStringAttribute('users');
  }
  public set users(value: string) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // sla - computed: false, optional: true, required: false
  private _sla = new WantempSystemVirtualwanlinkServiceSlaList(this, "sla", false);
  public get sla() {
    return this._sla;
  }
  public putSla(value: WantempSystemVirtualwanlinkServiceSla[] | cdktf.IResolvable) {
    this._sla.internalValue = value;
  }
  public resetSla() {
    this._sla.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaInput() {
    return this._sla.internalValue;
  }
}

export class WantempSystemVirtualwanlinkServiceList extends cdktf.ComplexList {
  public internalValue? : WantempSystemVirtualwanlinkService[] | cdktf.IResolvable

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
  public get(index: number): WantempSystemVirtualwanlinkServiceOutputReference {
    return new WantempSystemVirtualwanlinkServiceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink fortimanager_wantemp_system_virtualwanlink}
*/
export class WantempSystemVirtualwanlink extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_wantemp_system_virtualwanlink";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WantempSystemVirtualwanlink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WantempSystemVirtualwanlink to import
  * @param importFromId The id of the existing WantempSystemVirtualwanlink that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WantempSystemVirtualwanlink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_wantemp_system_virtualwanlink", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/wantemp_system_virtualwanlink fortimanager_wantemp_system_virtualwanlink} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WantempSystemVirtualwanlinkConfig
  */
  public constructor(scope: Construct, id: string, config: WantempSystemVirtualwanlinkConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_wantemp_system_virtualwanlink',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failAlertInterfaces = config.failAlertInterfaces;
    this._failDetect = config.failDetect;
    this._id = config.id;
    this._loadBalanceMode = config.loadBalanceMode;
    this._neighborHoldBootTime = config.neighborHoldBootTime;
    this._neighborHoldDown = config.neighborHoldDown;
    this._neighborHoldDownTime = config.neighborHoldDownTime;
    this._scopetype = config.scopetype;
    this._status = config.status;
    this._wanprof = config.wanprof;
    this._healthCheck.internalValue = config.healthCheck;
    this._members.internalValue = config.members;
    this._neighbor.internalValue = config.neighbor;
    this._service.internalValue = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fail_alert_interfaces - computed: true, optional: true, required: false
  private _failAlertInterfaces?: string[]; 
  public get failAlertInterfaces() {
    return cdktf.Fn.tolist(this.getListAttribute('fail_alert_interfaces'));
  }
  public set failAlertInterfaces(value: string[]) {
    this._failAlertInterfaces = value;
  }
  public resetFailAlertInterfaces() {
    this._failAlertInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failAlertInterfacesInput() {
    return this._failAlertInterfaces;
  }

  // fail_detect - computed: false, optional: true, required: false
  private _failDetect?: string; 
  public get failDetect() {
    return this.getStringAttribute('fail_detect');
  }
  public set failDetect(value: string) {
    this._failDetect = value;
  }
  public resetFailDetect() {
    this._failDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failDetectInput() {
    return this._failDetect;
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

  // load_balance_mode - computed: false, optional: true, required: false
  private _loadBalanceMode?: string; 
  public get loadBalanceMode() {
    return this.getStringAttribute('load_balance_mode');
  }
  public set loadBalanceMode(value: string) {
    this._loadBalanceMode = value;
  }
  public resetLoadBalanceMode() {
    this._loadBalanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceModeInput() {
    return this._loadBalanceMode;
  }

  // neighbor_hold_boot_time - computed: false, optional: true, required: false
  private _neighborHoldBootTime?: number; 
  public get neighborHoldBootTime() {
    return this.getNumberAttribute('neighbor_hold_boot_time');
  }
  public set neighborHoldBootTime(value: number) {
    this._neighborHoldBootTime = value;
  }
  public resetNeighborHoldBootTime() {
    this._neighborHoldBootTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldBootTimeInput() {
    return this._neighborHoldBootTime;
  }

  // neighbor_hold_down - computed: false, optional: true, required: false
  private _neighborHoldDown?: string; 
  public get neighborHoldDown() {
    return this.getStringAttribute('neighbor_hold_down');
  }
  public set neighborHoldDown(value: string) {
    this._neighborHoldDown = value;
  }
  public resetNeighborHoldDown() {
    this._neighborHoldDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldDownInput() {
    return this._neighborHoldDown;
  }

  // neighbor_hold_down_time - computed: false, optional: true, required: false
  private _neighborHoldDownTime?: number; 
  public get neighborHoldDownTime() {
    return this.getNumberAttribute('neighbor_hold_down_time');
  }
  public set neighborHoldDownTime(value: number) {
    this._neighborHoldDownTime = value;
  }
  public resetNeighborHoldDownTime() {
    this._neighborHoldDownTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborHoldDownTimeInput() {
    return this._neighborHoldDownTime;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // status - computed: false, optional: true, required: false
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

  // wanprof - computed: false, optional: false, required: true
  private _wanprof?: string; 
  public get wanprof() {
    return this.getStringAttribute('wanprof');
  }
  public set wanprof(value: string) {
    this._wanprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wanprofInput() {
    return this._wanprof;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new WantempSystemVirtualwanlinkHealthCheckList(this, "health_check", false);
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: WantempSystemVirtualwanlinkHealthCheck[] | cdktf.IResolvable) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // members - computed: false, optional: true, required: false
  private _members = new WantempSystemVirtualwanlinkMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: WantempSystemVirtualwanlinkMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // neighbor - computed: false, optional: true, required: false
  private _neighbor = new WantempSystemVirtualwanlinkNeighborList(this, "neighbor", false);
  public get neighbor() {
    return this._neighbor;
  }
  public putNeighbor(value: WantempSystemVirtualwanlinkNeighbor[] | cdktf.IResolvable) {
    this._neighbor.internalValue = value;
  }
  public resetNeighbor() {
    this._neighbor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get neighborInput() {
    return this._neighbor.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new WantempSystemVirtualwanlinkServiceList(this, "service", false);
  public get service() {
    return this._service;
  }
  public putService(value: WantempSystemVirtualwanlinkService[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fail_alert_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._failAlertInterfaces),
      fail_detect: cdktf.stringToTerraform(this._failDetect),
      id: cdktf.stringToTerraform(this._id),
      load_balance_mode: cdktf.stringToTerraform(this._loadBalanceMode),
      neighbor_hold_boot_time: cdktf.numberToTerraform(this._neighborHoldBootTime),
      neighbor_hold_down: cdktf.stringToTerraform(this._neighborHoldDown),
      neighbor_hold_down_time: cdktf.numberToTerraform(this._neighborHoldDownTime),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
      wanprof: cdktf.stringToTerraform(this._wanprof),
      health_check: cdktf.listMapper(wantempSystemVirtualwanlinkHealthCheckToTerraform, true)(this._healthCheck.internalValue),
      members: cdktf.listMapper(wantempSystemVirtualwanlinkMembersToTerraform, true)(this._members.internalValue),
      neighbor: cdktf.listMapper(wantempSystemVirtualwanlinkNeighborToTerraform, true)(this._neighbor.internalValue),
      service: cdktf.listMapper(wantempSystemVirtualwanlinkServiceToTerraform, true)(this._service.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_alert_interfaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._failAlertInterfaces),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fail_detect: {
        value: cdktf.stringToHclTerraform(this._failDetect),
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
      load_balance_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalanceMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_hold_boot_time: {
        value: cdktf.numberToHclTerraform(this._neighborHoldBootTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      neighbor_hold_down: {
        value: cdktf.stringToHclTerraform(this._neighborHoldDown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      neighbor_hold_down_time: {
        value: cdktf.numberToHclTerraform(this._neighborHoldDownTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanprof: {
        value: cdktf.stringToHclTerraform(this._wanprof),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkHealthCheckToHclTerraform, true)(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WantempSystemVirtualwanlinkHealthCheckList",
      },
      members: {
        value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkMembersToHclTerraform, true)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WantempSystemVirtualwanlinkMembersList",
      },
      neighbor: {
        value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkNeighborToHclTerraform, true)(this._neighbor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WantempSystemVirtualwanlinkNeighborList",
      },
      service: {
        value: cdktf.listMapperHcl(wantempSystemVirtualwanlinkServiceToHclTerraform, true)(this._service.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WantempSystemVirtualwanlinkServiceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
