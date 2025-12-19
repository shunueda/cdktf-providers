// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FwDdosProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#id FwDdosProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#uuid FwDdosProtection#uuid}
  */
  readonly uuid?: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#action FwDdosProtection#action}
  */
  readonly action?: FwDdosProtectionAction;
  /**
  * dynamic_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#dynamic_blacklist FwDdosProtection#dynamic_blacklist}
  */
  readonly dynamicBlacklist?: FwDdosProtectionDynamicBlacklistStruct;
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#logging FwDdosProtection#logging}
  */
  readonly logging?: FwDdosProtectionLogging;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#sampling_enable FwDdosProtection#sampling_enable}
  */
  readonly samplingEnable?: FwDdosProtectionSamplingEnable[] | cdktf.IResolvable;
}
export interface FwDdosProtectionAction {
  /**
  * 'drop': Log, and drop all packets (default); 'redistribute-route': Log, Notify upstream router to reroute the packets. Drop all packets by default.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#action_type FwDdosProtection#action_type}
  */
  readonly actionType?: string;
  /**
  * To specify time in minutes to revert the action (Expiration time, in minutes (default is 5 mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#expiration FwDdosProtection#expiration}
  */
  readonly expiration?: number;
  /**
  * To specify time in minutes to revert the action (Expiration time, in minutes (default is 60 mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#expiration_route FwDdosProtection#expiration_route}
  */
  readonly expirationRoute?: number;
  /**
  * Forward traffic with rate-limiting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#forward FwDdosProtection#forward}
  */
  readonly forward?: number;
  /**
  * Max time to wait before removing IP from blackhole (Max value in seconds (default 300))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#remove_wait_timer FwDdosProtection#remove_wait_timer}
  */
  readonly removeWaitTimer?: number;
  /**
  * Route map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#route_map FwDdosProtection#route_map}
  */
  readonly routeMap?: string;
  /**
  * To specify max value of timer multiplier for attacks lasted long time (Max value of timer multiplier (default is 6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#timer_multiply_max FwDdosProtection#timer_multiply_max}
  */
  readonly timerMultiplyMax?: number;
}

export function fwDdosProtectionActionToTerraform(struct?: FwDdosProtectionActionOutputReference | FwDdosProtectionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    expiration: cdktf.numberToTerraform(struct!.expiration),
    expiration_route: cdktf.numberToTerraform(struct!.expirationRoute),
    forward: cdktf.numberToTerraform(struct!.forward),
    remove_wait_timer: cdktf.numberToTerraform(struct!.removeWaitTimer),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    timer_multiply_max: cdktf.numberToTerraform(struct!.timerMultiplyMax),
  }
}


export function fwDdosProtectionActionToHclTerraform(struct?: FwDdosProtectionActionOutputReference | FwDdosProtectionAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.numberToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration_route: {
      value: cdktf.numberToHclTerraform(struct!.expirationRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward: {
      value: cdktf.numberToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_wait_timer: {
      value: cdktf.numberToHclTerraform(struct!.removeWaitTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    route_map: {
      value: cdktf.stringToHclTerraform(struct!.routeMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer_multiply_max: {
      value: cdktf.numberToHclTerraform(struct!.timerMultiplyMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwDdosProtectionActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwDdosProtectionAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._expirationRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationRoute = this._expirationRoute;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    if (this._removeWaitTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeWaitTimer = this._removeWaitTimer;
    }
    if (this._routeMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeMap = this._routeMap;
    }
    if (this._timerMultiplyMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerMultiplyMax = this._timerMultiplyMax;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwDdosProtectionAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._expiration = undefined;
      this._expirationRoute = undefined;
      this._forward = undefined;
      this._removeWaitTimer = undefined;
      this._routeMap = undefined;
      this._timerMultiplyMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._expiration = value.expiration;
      this._expirationRoute = value.expirationRoute;
      this._forward = value.forward;
      this._removeWaitTimer = value.removeWaitTimer;
      this._routeMap = value.routeMap;
      this._timerMultiplyMax = value.timerMultiplyMax;
    }
  }

  // action_type - computed: false, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // expiration_route - computed: false, optional: true, required: false
  private _expirationRoute?: number; 
  public get expirationRoute() {
    return this.getNumberAttribute('expiration_route');
  }
  public set expirationRoute(value: number) {
    this._expirationRoute = value;
  }
  public resetExpirationRoute() {
    this._expirationRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationRouteInput() {
    return this._expirationRoute;
  }

  // forward - computed: false, optional: true, required: false
  private _forward?: number; 
  public get forward() {
    return this.getNumberAttribute('forward');
  }
  public set forward(value: number) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }

  // remove_wait_timer - computed: false, optional: true, required: false
  private _removeWaitTimer?: number; 
  public get removeWaitTimer() {
    return this.getNumberAttribute('remove_wait_timer');
  }
  public set removeWaitTimer(value: number) {
    this._removeWaitTimer = value;
  }
  public resetRemoveWaitTimer() {
    this._removeWaitTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeWaitTimerInput() {
    return this._removeWaitTimer;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // timer_multiply_max - computed: false, optional: true, required: false
  private _timerMultiplyMax?: number; 
  public get timerMultiplyMax() {
    return this.getNumberAttribute('timer_multiply_max');
  }
  public set timerMultiplyMax(value: number) {
    this._timerMultiplyMax = value;
  }
  public resetTimerMultiplyMax() {
    this._timerMultiplyMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerMultiplyMaxInput() {
    return this._timerMultiplyMax;
  }
}
export interface FwDdosProtectionDynamicBlacklistStruct {
  /**
  * Core-level CPU usage threshold for dynamic blacklist creation (Core-level CPU usage threshold for dynamic blacklist creation (default is 60))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#cpu_threshold FwDdosProtection#cpu_threshold}
  */
  readonly cpuThreshold?: number;
  /**
  * 'inbound': enable in inbound direction; 'outbound': enable in outbound direction; 'both': enable in both directions;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#dir FwDdosProtection#dir}
  */
  readonly dir?: string;
  /**
  * 'enable': Enable protection against volumetric attacks using dynamic blacklist; 'disable': Disable protection against volumetric attacks using dynamic blacklist;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#dynamic_blacklist_action FwDdosProtection#dynamic_blacklist_action}
  */
  readonly dynamicBlacklistAction?: string;
  /**
  * Timeout value (in seconds) for dynamic blacklist (Timeout value (in seconds) for dynamic blacklist(default is 5 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#timeout FwDdosProtection#timeout}
  */
  readonly timeout?: number;
}

export function fwDdosProtectionDynamicBlacklistStructToTerraform(struct?: FwDdosProtectionDynamicBlacklistStructOutputReference | FwDdosProtectionDynamicBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_threshold: cdktf.numberToTerraform(struct!.cpuThreshold),
    dir: cdktf.stringToTerraform(struct!.dir),
    dynamic_blacklist_action: cdktf.stringToTerraform(struct!.dynamicBlacklistAction),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function fwDdosProtectionDynamicBlacklistStructToHclTerraform(struct?: FwDdosProtectionDynamicBlacklistStructOutputReference | FwDdosProtectionDynamicBlacklistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_threshold: {
      value: cdktf.numberToHclTerraform(struct!.cpuThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dir: {
      value: cdktf.stringToHclTerraform(struct!.dir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_blacklist_action: {
      value: cdktf.stringToHclTerraform(struct!.dynamicBlacklistAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwDdosProtectionDynamicBlacklistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwDdosProtectionDynamicBlacklistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThreshold = this._cpuThreshold;
    }
    if (this._dir !== undefined) {
      hasAnyValues = true;
      internalValueResult.dir = this._dir;
    }
    if (this._dynamicBlacklistAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicBlacklistAction = this._dynamicBlacklistAction;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwDdosProtectionDynamicBlacklistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuThreshold = undefined;
      this._dir = undefined;
      this._dynamicBlacklistAction = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuThreshold = value.cpuThreshold;
      this._dir = value.dir;
      this._dynamicBlacklistAction = value.dynamicBlacklistAction;
      this._timeout = value.timeout;
    }
  }

  // cpu_threshold - computed: false, optional: true, required: false
  private _cpuThreshold?: number; 
  public get cpuThreshold() {
    return this.getNumberAttribute('cpu_threshold');
  }
  public set cpuThreshold(value: number) {
    this._cpuThreshold = value;
  }
  public resetCpuThreshold() {
    this._cpuThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdInput() {
    return this._cpuThreshold;
  }

  // dir - computed: false, optional: true, required: false
  private _dir?: string; 
  public get dir() {
    return this.getStringAttribute('dir');
  }
  public set dir(value: string) {
    this._dir = value;
  }
  public resetDir() {
    this._dir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dirInput() {
    return this._dir;
  }

  // dynamic_blacklist_action - computed: false, optional: true, required: false
  private _dynamicBlacklistAction?: string; 
  public get dynamicBlacklistAction() {
    return this.getStringAttribute('dynamic_blacklist_action');
  }
  public set dynamicBlacklistAction(value: string) {
    this._dynamicBlacklistAction = value;
  }
  public resetDynamicBlacklistAction() {
    this._dynamicBlacklistAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBlacklistActionInput() {
    return this._dynamicBlacklistAction;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface FwDdosProtectionLogging {
  /**
  * 'local': Enable local logs only; 'remote': Enable logging to remote server & IPFIX; 'both': Enable both local & remote logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#enable_action FwDdosProtection#enable_action}
  */
  readonly enableAction?: string;
  /**
  * 'enable': enable FW DDoS protection logging; 'disable': Disable both local & remote FW DDoS protection logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#logging_action FwDdosProtection#logging_action}
  */
  readonly loggingAction?: string;
}

export function fwDdosProtectionLoggingToTerraform(struct?: FwDdosProtectionLoggingOutputReference | FwDdosProtectionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_action: cdktf.stringToTerraform(struct!.enableAction),
    logging_action: cdktf.stringToTerraform(struct!.loggingAction),
  }
}


export function fwDdosProtectionLoggingToHclTerraform(struct?: FwDdosProtectionLoggingOutputReference | FwDdosProtectionLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_action: {
      value: cdktf.stringToHclTerraform(struct!.enableAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_action: {
      value: cdktf.stringToHclTerraform(struct!.loggingAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FwDdosProtectionLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FwDdosProtectionLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAction = this._enableAction;
    }
    if (this._loggingAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingAction = this._loggingAction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FwDdosProtectionLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAction = undefined;
      this._loggingAction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAction = value.enableAction;
      this._loggingAction = value.loggingAction;
    }
  }

  // enable_action - computed: false, optional: true, required: false
  private _enableAction?: string; 
  public get enableAction() {
    return this.getStringAttribute('enable_action');
  }
  public set enableAction(value: string) {
    this._enableAction = value;
  }
  public resetEnableAction() {
    this._enableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActionInput() {
    return this._enableAction;
  }

  // logging_action - computed: false, optional: true, required: false
  private _loggingAction?: string; 
  public get loggingAction() {
    return this.getStringAttribute('logging_action');
  }
  public set loggingAction(value: string) {
    this._loggingAction = value;
  }
  public resetLoggingAction() {
    this._loggingAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingActionInput() {
    return this._loggingAction;
  }
}
export interface FwDdosProtectionSamplingEnable {
  /**
  * 'all': all; 'ddos_entries_too_many': Too many DDOS entries; 'ddos_entry_added': DDOS entry added; 'ddos_entry_removed': DDOS entry removed; 'ddos_entry_added_to_bgp': DDoS Entry added to BGP; 'ddos_entry_removed_from_bgp': DDoS Entry Removed from BGP; 'ddos_entry_add_to_bgp_failure': DDoS Entry BGP add failures; 'ddos_entry_remove_from_bgp_failure': DDOS entry BGP remove failures; 'ddos_packet_dropped': DDOS Packet Drop;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#counters1 FwDdosProtection#counters1}
  */
  readonly counters1?: string;
}

export function fwDdosProtectionSamplingEnableToTerraform(struct?: FwDdosProtectionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function fwDdosProtectionSamplingEnableToHclTerraform(struct?: FwDdosProtectionSamplingEnable | cdktf.IResolvable): any {
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

export class FwDdosProtectionSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FwDdosProtectionSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: FwDdosProtectionSamplingEnable | cdktf.IResolvable | undefined) {
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

export class FwDdosProtectionSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : FwDdosProtectionSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): FwDdosProtectionSamplingEnableOutputReference {
    return new FwDdosProtectionSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection thunder_fw_ddos_protection}
*/
export class FwDdosProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_ddos_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FwDdosProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FwDdosProtection to import
  * @param importFromId The id of the existing FwDdosProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FwDdosProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_ddos_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/fw_ddos_protection thunder_fw_ddos_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FwDdosProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FwDdosProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_ddos_protection',
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
    this._action.internalValue = config.action;
    this._dynamicBlacklist.internalValue = config.dynamicBlacklist;
    this._logging.internalValue = config.logging;
    this._samplingEnable.internalValue = config.samplingEnable;
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

  // action - computed: false, optional: true, required: false
  private _action = new FwDdosProtectionActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: FwDdosProtectionAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // dynamic_blacklist - computed: false, optional: true, required: false
  private _dynamicBlacklist = new FwDdosProtectionDynamicBlacklistStructOutputReference(this, "dynamic_blacklist");
  public get dynamicBlacklist() {
    return this._dynamicBlacklist;
  }
  public putDynamicBlacklist(value: FwDdosProtectionDynamicBlacklistStruct) {
    this._dynamicBlacklist.internalValue = value;
  }
  public resetDynamicBlacklist() {
    this._dynamicBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicBlacklistInput() {
    return this._dynamicBlacklist.internalValue;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new FwDdosProtectionLoggingOutputReference(this, "logging");
  public get logging() {
    return this._logging;
  }
  public putLogging(value: FwDdosProtectionLogging) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new FwDdosProtectionSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: FwDdosProtectionSamplingEnable[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      action: fwDdosProtectionActionToTerraform(this._action.internalValue),
      dynamic_blacklist: fwDdosProtectionDynamicBlacklistStructToTerraform(this._dynamicBlacklist.internalValue),
      logging: fwDdosProtectionLoggingToTerraform(this._logging.internalValue),
      sampling_enable: cdktf.listMapper(fwDdosProtectionSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
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
      action: {
        value: fwDdosProtectionActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwDdosProtectionActionList",
      },
      dynamic_blacklist: {
        value: fwDdosProtectionDynamicBlacklistStructToHclTerraform(this._dynamicBlacklist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwDdosProtectionDynamicBlacklistStructList",
      },
      logging: {
        value: fwDdosProtectionLoggingToHclTerraform(this._logging.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwDdosProtectionLoggingList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(fwDdosProtectionSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FwDdosProtectionSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
