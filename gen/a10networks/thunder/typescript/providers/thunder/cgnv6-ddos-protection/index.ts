// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6DdosProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'local': Enable local logs only; 'remote': Enable logging to remote server & IPFIX; 'both': Enable both local & remote logs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#enable_action Cgnv6DdosProtection#enable_action}
  */
  readonly enableAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#id Cgnv6DdosProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'enable': enable CGN DDoS protection logging; 'disable': Disable both local & remote CGN DDoS protection logging;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#logging_action Cgnv6DdosProtection#logging_action}
  */
  readonly loggingAction?: string;
  /**
  * Configure maximum HW entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#max_hw_entries Cgnv6DdosProtection#max_hw_entries}
  */
  readonly maxHwEntries?: number;
  /**
  * 'enable': Enable CGNV6 NAT pool DDoS protection (default); 'disable': Disable CGNV6 NAT pool DDoS protection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#toggle Cgnv6DdosProtection#toggle}
  */
  readonly toggle?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#uuid Cgnv6DdosProtection#uuid}
  */
  readonly uuid?: string;
  /**
  * Disable NAT IP based on DDoS zone name set in BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#zone Cgnv6DdosProtection#zone}
  */
  readonly zone?: string;
  /**
  * disable_nat_ip_by_bgp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#disable_nat_ip_by_bgp Cgnv6DdosProtection#disable_nat_ip_by_bgp}
  */
  readonly disableNatIpByBgp?: Cgnv6DdosProtectionDisableNatIpByBgp;
  /**
  * ip_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#ip_entries Cgnv6DdosProtection#ip_entries}
  */
  readonly ipEntries?: Cgnv6DdosProtectionIpEntries;
  /**
  * l4_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#l4_entries Cgnv6DdosProtection#l4_entries}
  */
  readonly l4Entries?: Cgnv6DdosProtectionL4Entries;
  /**
  * packets_per_second block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#packets_per_second Cgnv6DdosProtection#packets_per_second}
  */
  readonly packetsPerSecond?: Cgnv6DdosProtectionPacketsPerSecond;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#sampling_enable Cgnv6DdosProtection#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6DdosProtectionSamplingEnable[] | cdktf.IResolvable;
  /**
  * syn_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#syn_cookie Cgnv6DdosProtection#syn_cookie}
  */
  readonly synCookie?: Cgnv6DdosProtectionSynCookie;
}
export interface Cgnv6DdosProtectionDisableNatIpByBgp {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#uuid Cgnv6DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6DdosProtectionDisableNatIpByBgpToTerraform(struct?: Cgnv6DdosProtectionDisableNatIpByBgpOutputReference | Cgnv6DdosProtectionDisableNatIpByBgp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6DdosProtectionDisableNatIpByBgpToHclTerraform(struct?: Cgnv6DdosProtectionDisableNatIpByBgpOutputReference | Cgnv6DdosProtectionDisableNatIpByBgp): any {
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

export class Cgnv6DdosProtectionDisableNatIpByBgpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionDisableNatIpByBgp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionDisableNatIpByBgp | undefined) {
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
export interface Cgnv6DdosProtectionIpEntries {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#uuid Cgnv6DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6DdosProtectionIpEntriesToTerraform(struct?: Cgnv6DdosProtectionIpEntriesOutputReference | Cgnv6DdosProtectionIpEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6DdosProtectionIpEntriesToHclTerraform(struct?: Cgnv6DdosProtectionIpEntriesOutputReference | Cgnv6DdosProtectionIpEntries): any {
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

export class Cgnv6DdosProtectionIpEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionIpEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionIpEntries | undefined) {
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
export interface Cgnv6DdosProtectionL4Entries {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#uuid Cgnv6DdosProtection#uuid}
  */
  readonly uuid?: string;
}

export function cgnv6DdosProtectionL4EntriesToTerraform(struct?: Cgnv6DdosProtectionL4EntriesOutputReference | Cgnv6DdosProtectionL4Entries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function cgnv6DdosProtectionL4EntriesToHclTerraform(struct?: Cgnv6DdosProtectionL4EntriesOutputReference | Cgnv6DdosProtectionL4Entries): any {
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

export class Cgnv6DdosProtectionL4EntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionL4Entries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionL4Entries | undefined) {
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
export interface Cgnv6DdosProtectionPacketsPerSecondAction {
  /**
  * 'log': Log the event only; 'drop': Log, and drop all packets (default); 'redistribute-route': Log, Drop, and Notify upstream router to reroute the packets;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#action_type Cgnv6DdosProtection#action_type}
  */
  readonly actionType?: string;
  /**
  * To specify time to revert the action after pps is decreased to below threshold (Expiration time, in minutes (default is 3600 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#expiration Cgnv6DdosProtection#expiration}
  */
  readonly expiration?: number;
  /**
  * To specify time to revert the action after pps is decreased to below threshold (Expiration time, in seconds (default is 3600 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#expiration_route Cgnv6DdosProtection#expiration_route}
  */
  readonly expirationRoute?: number;
  /**
  * Time after which IP will be removed from blackhole
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#remove_wait_timer Cgnv6DdosProtection#remove_wait_timer}
  */
  readonly removeWaitTimer?: number;
  /**
  * Route map name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#route_map Cgnv6DdosProtection#route_map}
  */
  readonly routeMap?: string;
  /**
  * To specify max value of timer multiplier for attacks lasted long time (Max value of timer multiplier (default is 6))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#timer_multiply_max Cgnv6DdosProtection#timer_multiply_max}
  */
  readonly timerMultiplyMax?: number;
}

export function cgnv6DdosProtectionPacketsPerSecondActionToTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_type: cdktf.stringToTerraform(struct!.actionType),
    expiration: cdktf.numberToTerraform(struct!.expiration),
    expiration_route: cdktf.numberToTerraform(struct!.expirationRoute),
    remove_wait_timer: cdktf.numberToTerraform(struct!.removeWaitTimer),
    route_map: cdktf.stringToTerraform(struct!.routeMap),
    timer_multiply_max: cdktf.numberToTerraform(struct!.timerMultiplyMax),
  }
}


export function cgnv6DdosProtectionPacketsPerSecondActionToHclTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondAction): any {
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

export class Cgnv6DdosProtectionPacketsPerSecondActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionPacketsPerSecondAction | undefined {
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

  public set internalValue(value: Cgnv6DdosProtectionPacketsPerSecondAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionType = undefined;
      this._expiration = undefined;
      this._expirationRoute = undefined;
      this._removeWaitTimer = undefined;
      this._routeMap = undefined;
      this._timerMultiplyMax = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionType = value.actionType;
      this._expiration = value.expiration;
      this._expirationRoute = value.expirationRoute;
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
export interface Cgnv6DdosProtectionPacketsPerSecondOtherAction {
  /**
  * 'log': Log the event only; 'drop': Log, and drop all packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#other_action_type Cgnv6DdosProtection#other_action_type}
  */
  readonly otherActionType?: string;
  /**
  * To specify time to revert the action after pps is decreased to below threshold (Expiration time, in seconds (default is 30 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#other_expiration Cgnv6DdosProtection#other_expiration}
  */
  readonly otherExpiration?: number;
}

export function cgnv6DdosProtectionPacketsPerSecondOtherActionToTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondOtherActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondOtherAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    other_action_type: cdktf.stringToTerraform(struct!.otherActionType),
    other_expiration: cdktf.numberToTerraform(struct!.otherExpiration),
  }
}


export function cgnv6DdosProtectionPacketsPerSecondOtherActionToHclTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondOtherActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondOtherAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    other_action_type: {
      value: cdktf.stringToHclTerraform(struct!.otherActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_expiration: {
      value: cdktf.numberToHclTerraform(struct!.otherExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6DdosProtectionPacketsPerSecondOtherActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionPacketsPerSecondOtherAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._otherActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherActionType = this._otherActionType;
    }
    if (this._otherExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherExpiration = this._otherExpiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionPacketsPerSecondOtherAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._otherActionType = undefined;
      this._otherExpiration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._otherActionType = value.otherActionType;
      this._otherExpiration = value.otherExpiration;
    }
  }

  // other_action_type - computed: false, optional: true, required: false
  private _otherActionType?: string; 
  public get otherActionType() {
    return this.getStringAttribute('other_action_type');
  }
  public set otherActionType(value: string) {
    this._otherActionType = value;
  }
  public resetOtherActionType() {
    this._otherActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherActionTypeInput() {
    return this._otherActionType;
  }

  // other_expiration - computed: false, optional: true, required: false
  private _otherExpiration?: number; 
  public get otherExpiration() {
    return this.getNumberAttribute('other_expiration');
  }
  public set otherExpiration(value: number) {
    this._otherExpiration = value;
  }
  public resetOtherExpiration() {
    this._otherExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherExpirationInput() {
    return this._otherExpiration;
  }
}
export interface Cgnv6DdosProtectionPacketsPerSecondTcpAction {
  /**
  * 'log': Log the event only; 'drop': Log, and drop all packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#tcp_action_type Cgnv6DdosProtection#tcp_action_type}
  */
  readonly tcpActionType?: string;
  /**
  * To specify time to revert the action after pps is decreased to below threshold (Expiration time, in seconds (default is 30 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#tcp_expiration Cgnv6DdosProtection#tcp_expiration}
  */
  readonly tcpExpiration?: number;
}

export function cgnv6DdosProtectionPacketsPerSecondTcpActionToTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondTcpActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondTcpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_action_type: cdktf.stringToTerraform(struct!.tcpActionType),
    tcp_expiration: cdktf.numberToTerraform(struct!.tcpExpiration),
  }
}


export function cgnv6DdosProtectionPacketsPerSecondTcpActionToHclTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondTcpActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondTcpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_action_type: {
      value: cdktf.stringToHclTerraform(struct!.tcpActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_expiration: {
      value: cdktf.numberToHclTerraform(struct!.tcpExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6DdosProtectionPacketsPerSecondTcpActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionPacketsPerSecondTcpAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionType = this._tcpActionType;
    }
    if (this._tcpExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpExpiration = this._tcpExpiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionPacketsPerSecondTcpAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpActionType = undefined;
      this._tcpExpiration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpActionType = value.tcpActionType;
      this._tcpExpiration = value.tcpExpiration;
    }
  }

  // tcp_action_type - computed: false, optional: true, required: false
  private _tcpActionType?: string; 
  public get tcpActionType() {
    return this.getStringAttribute('tcp_action_type');
  }
  public set tcpActionType(value: string) {
    this._tcpActionType = value;
  }
  public resetTcpActionType() {
    this._tcpActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionTypeInput() {
    return this._tcpActionType;
  }

  // tcp_expiration - computed: false, optional: true, required: false
  private _tcpExpiration?: number; 
  public get tcpExpiration() {
    return this.getNumberAttribute('tcp_expiration');
  }
  public set tcpExpiration(value: number) {
    this._tcpExpiration = value;
  }
  public resetTcpExpiration() {
    this._tcpExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpExpirationInput() {
    return this._tcpExpiration;
  }
}
export interface Cgnv6DdosProtectionPacketsPerSecondUdpAction {
  /**
  * 'log': Log the event only; 'drop': Log, and drop all packets (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#udp_action_type Cgnv6DdosProtection#udp_action_type}
  */
  readonly udpActionType?: string;
  /**
  * To specify time to revert the action after pps is decreased to below threshold (Expiration time, in seconds (default is 30 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#udp_expiration Cgnv6DdosProtection#udp_expiration}
  */
  readonly udpExpiration?: number;
}

export function cgnv6DdosProtectionPacketsPerSecondUdpActionToTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondUdpActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondUdpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    udp_action_type: cdktf.stringToTerraform(struct!.udpActionType),
    udp_expiration: cdktf.numberToTerraform(struct!.udpExpiration),
  }
}


export function cgnv6DdosProtectionPacketsPerSecondUdpActionToHclTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondUdpActionOutputReference | Cgnv6DdosProtectionPacketsPerSecondUdpAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    udp_action_type: {
      value: cdktf.stringToHclTerraform(struct!.udpActionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    udp_expiration: {
      value: cdktf.numberToHclTerraform(struct!.udpExpiration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6DdosProtectionPacketsPerSecondUdpActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionPacketsPerSecondUdpAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._udpActionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpActionType = this._udpActionType;
    }
    if (this._udpExpiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpExpiration = this._udpExpiration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionPacketsPerSecondUdpAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._udpActionType = undefined;
      this._udpExpiration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._udpActionType = value.udpActionType;
      this._udpExpiration = value.udpExpiration;
    }
  }

  // udp_action_type - computed: false, optional: true, required: false
  private _udpActionType?: string; 
  public get udpActionType() {
    return this.getStringAttribute('udp_action_type');
  }
  public set udpActionType(value: string) {
    this._udpActionType = value;
  }
  public resetUdpActionType() {
    this._udpActionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpActionTypeInput() {
    return this._udpActionType;
  }

  // udp_expiration - computed: false, optional: true, required: false
  private _udpExpiration?: number; 
  public get udpExpiration() {
    return this.getNumberAttribute('udp_expiration');
  }
  public set udpExpiration(value: number) {
    this._udpExpiration = value;
  }
  public resetUdpExpiration() {
    this._udpExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpExpirationInput() {
    return this._udpExpiration;
  }
}
export interface Cgnv6DdosProtectionPacketsPerSecond {
  /**
  * Count traffic associated with existing session into the packets-per-second (Default: Disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#include_existing_session Cgnv6DdosProtection#include_existing_session}
  */
  readonly includeExistingSession?: number;
  /**
  * Configure packets-per-second threshold per IP(default 3000000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#ip Cgnv6DdosProtection#ip}
  */
  readonly ip?: number;
  /**
  * Configure packets-per-second threshold for other L4 protocols(default 10000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#other Cgnv6DdosProtection#other}
  */
  readonly other?: number;
  /**
  * Configure packets-per-second threshold per TCP port (default: 3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#tcp Cgnv6DdosProtection#tcp}
  */
  readonly tcp?: number;
  /**
  * Configure packets-per-second threshold per UDP port (default: 3000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#udp Cgnv6DdosProtection#udp}
  */
  readonly udp?: number;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#action Cgnv6DdosProtection#action}
  */
  readonly action?: Cgnv6DdosProtectionPacketsPerSecondAction;
  /**
  * other_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#other_action Cgnv6DdosProtection#other_action}
  */
  readonly otherAction?: Cgnv6DdosProtectionPacketsPerSecondOtherAction;
  /**
  * tcp_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#tcp_action Cgnv6DdosProtection#tcp_action}
  */
  readonly tcpAction?: Cgnv6DdosProtectionPacketsPerSecondTcpAction;
  /**
  * udp_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#udp_action Cgnv6DdosProtection#udp_action}
  */
  readonly udpAction?: Cgnv6DdosProtectionPacketsPerSecondUdpAction;
}

export function cgnv6DdosProtectionPacketsPerSecondToTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondOutputReference | Cgnv6DdosProtectionPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_existing_session: cdktf.numberToTerraform(struct!.includeExistingSession),
    ip: cdktf.numberToTerraform(struct!.ip),
    other: cdktf.numberToTerraform(struct!.other),
    tcp: cdktf.numberToTerraform(struct!.tcp),
    udp: cdktf.numberToTerraform(struct!.udp),
    action: cgnv6DdosProtectionPacketsPerSecondActionToTerraform(struct!.action),
    other_action: cgnv6DdosProtectionPacketsPerSecondOtherActionToTerraform(struct!.otherAction),
    tcp_action: cgnv6DdosProtectionPacketsPerSecondTcpActionToTerraform(struct!.tcpAction),
    udp_action: cgnv6DdosProtectionPacketsPerSecondUdpActionToTerraform(struct!.udpAction),
  }
}


export function cgnv6DdosProtectionPacketsPerSecondToHclTerraform(struct?: Cgnv6DdosProtectionPacketsPerSecondOutputReference | Cgnv6DdosProtectionPacketsPerSecond): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_existing_session: {
      value: cdktf.numberToHclTerraform(struct!.includeExistingSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.numberToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other: {
      value: cdktf.numberToHclTerraform(struct!.other),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp: {
      value: cdktf.numberToHclTerraform(struct!.tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp: {
      value: cdktf.numberToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action: {
      value: cgnv6DdosProtectionPacketsPerSecondActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6DdosProtectionPacketsPerSecondActionList",
    },
    other_action: {
      value: cgnv6DdosProtectionPacketsPerSecondOtherActionToHclTerraform(struct!.otherAction),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6DdosProtectionPacketsPerSecondOtherActionList",
    },
    tcp_action: {
      value: cgnv6DdosProtectionPacketsPerSecondTcpActionToHclTerraform(struct!.tcpAction),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6DdosProtectionPacketsPerSecondTcpActionList",
    },
    udp_action: {
      value: cgnv6DdosProtectionPacketsPerSecondUdpActionToHclTerraform(struct!.udpAction),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6DdosProtectionPacketsPerSecondUdpActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6DdosProtectionPacketsPerSecondOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionPacketsPerSecond | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeExistingSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeExistingSession = this._includeExistingSession;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._other !== undefined) {
      hasAnyValues = true;
      internalValueResult.other = this._other;
    }
    if (this._tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._otherAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherAction = this._otherAction?.internalValue;
    }
    if (this._tcpAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAction = this._tcpAction?.internalValue;
    }
    if (this._udpAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAction = this._udpAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionPacketsPerSecond | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includeExistingSession = undefined;
      this._ip = undefined;
      this._other = undefined;
      this._tcp = undefined;
      this._udp = undefined;
      this._action.internalValue = undefined;
      this._otherAction.internalValue = undefined;
      this._tcpAction.internalValue = undefined;
      this._udpAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includeExistingSession = value.includeExistingSession;
      this._ip = value.ip;
      this._other = value.other;
      this._tcp = value.tcp;
      this._udp = value.udp;
      this._action.internalValue = value.action;
      this._otherAction.internalValue = value.otherAction;
      this._tcpAction.internalValue = value.tcpAction;
      this._udpAction.internalValue = value.udpAction;
    }
  }

  // include_existing_session - computed: false, optional: true, required: false
  private _includeExistingSession?: number; 
  public get includeExistingSession() {
    return this.getNumberAttribute('include_existing_session');
  }
  public set includeExistingSession(value: number) {
    this._includeExistingSession = value;
  }
  public resetIncludeExistingSession() {
    this._includeExistingSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeExistingSessionInput() {
    return this._includeExistingSession;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: number; 
  public get ip() {
    return this.getNumberAttribute('ip');
  }
  public set ip(value: number) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // other - computed: false, optional: true, required: false
  private _other?: number; 
  public get other() {
    return this.getNumberAttribute('other');
  }
  public set other(value: number) {
    this._other = value;
  }
  public resetOther() {
    this._other = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInput() {
    return this._other;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp?: number; 
  public get tcp() {
    return this.getNumberAttribute('tcp');
  }
  public set tcp(value: number) {
    this._tcp = value;
  }
  public resetTcp() {
    this._tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // action - computed: false, optional: true, required: false
  private _action = new Cgnv6DdosProtectionPacketsPerSecondActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: Cgnv6DdosProtectionPacketsPerSecondAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // other_action - computed: false, optional: true, required: false
  private _otherAction = new Cgnv6DdosProtectionPacketsPerSecondOtherActionOutputReference(this, "other_action");
  public get otherAction() {
    return this._otherAction;
  }
  public putOtherAction(value: Cgnv6DdosProtectionPacketsPerSecondOtherAction) {
    this._otherAction.internalValue = value;
  }
  public resetOtherAction() {
    this._otherAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherActionInput() {
    return this._otherAction.internalValue;
  }

  // tcp_action - computed: false, optional: true, required: false
  private _tcpAction = new Cgnv6DdosProtectionPacketsPerSecondTcpActionOutputReference(this, "tcp_action");
  public get tcpAction() {
    return this._tcpAction;
  }
  public putTcpAction(value: Cgnv6DdosProtectionPacketsPerSecondTcpAction) {
    this._tcpAction.internalValue = value;
  }
  public resetTcpAction() {
    this._tcpAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionInput() {
    return this._tcpAction.internalValue;
  }

  // udp_action - computed: false, optional: true, required: false
  private _udpAction = new Cgnv6DdosProtectionPacketsPerSecondUdpActionOutputReference(this, "udp_action");
  public get udpAction() {
    return this._udpAction;
  }
  public putUdpAction(value: Cgnv6DdosProtectionPacketsPerSecondUdpAction) {
    this._udpAction.internalValue = value;
  }
  public resetUdpAction() {
    this._udpAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpActionInput() {
    return this._udpAction.internalValue;
  }
}
export interface Cgnv6DdosProtectionSamplingEnable {
  /**
  * 'all': all; 'l3_entry_added': L3 Entry Added; 'l3_entry_deleted': L3 Entry Deleted; 'l3_entry_added_to_bgp': L3 Entry added to BGP; 'l3_entry_removed_from_bgp': Entry removed from BGP; 'l3_entry_added_to_hw': L3 Entry added to HW; 'l3_entry_removed_from_hw': L3 Entry removed from HW; 'l3_entry_too_many': L3 Too many entries; 'l3_entry_match_drop': L3 Entry match drop; 'l3_entry_match_drop_hw': L3 HW entry match drop; 'l3_entry_drop_max_hw_exceeded': L3 Entry Drop due to HW Limit Exceeded; 'l4_entry_added': L4 Entry added; 'l4_entry_deleted': L4 Entry deleted; 'l4_entry_added_to_hw': L4 Entry added to HW; 'l4_entry_removed_from_hw': L4 Entry removed from HW; 'l4_hw_out_of_entries': HW out of L4 entries; 'l4_entry_match_drop': L4 Entry match drop; 'l4_entry_match_drop_hw': L4 HW Entry match drop; 'l4_entry_drop_max_hw_exceeded': L4 Entry Drop due to HW Limit Exceeded; 'l4_entry_list_alloc': L4 Entry list alloc; 'l4_entry_list_free': L4 Entry list free; 'l4_entry_list_alloc_failure': L4 Entry list alloc failures; 'ip_node_alloc': Node alloc; 'ip_node_free': Node free; 'ip_node_alloc_failure': Node alloc failures; 'ip_port_block_alloc': Port block alloc; 'ip_port_block_free': Port block free; 'ip_port_block_alloc_failure': Port block alloc failure; 'ip_other_block_alloc': Other block alloc; 'ip_other_block_free': Other block free; 'ip_other_block_alloc_failure': Other block alloc failure; 'entry_added_shadow': Entry added shadow; 'entry_invalidated': Entry invalidated; 'l3_entry_add_to_bgp_failure': L3 Entry BGP add failures; 'l3_entry_remove_from_bgp_failure': L3 entry BGP remove failures; 'l3_entry_add_to_hw_failure': L3 entry HW add failure; 'syn_cookie_syn_ack_sent': SYN cookie SYN ACK sent; 'syn_cookie_verification_passed': SYN cookie verification passed; 'syn_cookie_verification_failed': SYN cookie verification failed; 'syn_cookie_conn_setup_failed': SYN cookie connection setup failed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#counters1 Cgnv6DdosProtection#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6DdosProtectionSamplingEnableToTerraform(struct?: Cgnv6DdosProtectionSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6DdosProtectionSamplingEnableToHclTerraform(struct?: Cgnv6DdosProtectionSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6DdosProtectionSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6DdosProtectionSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6DdosProtectionSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6DdosProtectionSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6DdosProtectionSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6DdosProtectionSamplingEnableOutputReference {
    return new Cgnv6DdosProtectionSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6DdosProtectionSynCookie {
  /**
  * Enable CGNv6 Syn-Cookie Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#syn_cookie_enable Cgnv6DdosProtection#syn_cookie_enable}
  */
  readonly synCookieEnable?: number;
  /**
  * on-threshold for Syn-cookie (Decimal number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#syn_cookie_on_threshold Cgnv6DdosProtection#syn_cookie_on_threshold}
  */
  readonly synCookieOnThreshold?: number;
  /**
  * on-timeout for Syn-cookie (Timeout in seconds, default is 120 seconds (2 minutes))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#syn_cookie_on_timeout Cgnv6DdosProtection#syn_cookie_on_timeout}
  */
  readonly synCookieOnTimeout?: number;
}

export function cgnv6DdosProtectionSynCookieToTerraform(struct?: Cgnv6DdosProtectionSynCookieOutputReference | Cgnv6DdosProtectionSynCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_cookie_enable: cdktf.numberToTerraform(struct!.synCookieEnable),
    syn_cookie_on_threshold: cdktf.numberToTerraform(struct!.synCookieOnThreshold),
    syn_cookie_on_timeout: cdktf.numberToTerraform(struct!.synCookieOnTimeout),
  }
}


export function cgnv6DdosProtectionSynCookieToHclTerraform(struct?: Cgnv6DdosProtectionSynCookieOutputReference | Cgnv6DdosProtectionSynCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_cookie_enable: {
      value: cdktf.numberToHclTerraform(struct!.synCookieEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_on_threshold: {
      value: cdktf.numberToHclTerraform(struct!.synCookieOnThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_on_timeout: {
      value: cdktf.numberToHclTerraform(struct!.synCookieOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6DdosProtectionSynCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Cgnv6DdosProtectionSynCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synCookieEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieEnable = this._synCookieEnable;
    }
    if (this._synCookieOnThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieOnThreshold = this._synCookieOnThreshold;
    }
    if (this._synCookieOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieOnTimeout = this._synCookieOnTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6DdosProtectionSynCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synCookieEnable = undefined;
      this._synCookieOnThreshold = undefined;
      this._synCookieOnTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synCookieEnable = value.synCookieEnable;
      this._synCookieOnThreshold = value.synCookieOnThreshold;
      this._synCookieOnTimeout = value.synCookieOnTimeout;
    }
  }

  // syn_cookie_enable - computed: false, optional: true, required: false
  private _synCookieEnable?: number; 
  public get synCookieEnable() {
    return this.getNumberAttribute('syn_cookie_enable');
  }
  public set synCookieEnable(value: number) {
    this._synCookieEnable = value;
  }
  public resetSynCookieEnable() {
    this._synCookieEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieEnableInput() {
    return this._synCookieEnable;
  }

  // syn_cookie_on_threshold - computed: false, optional: true, required: false
  private _synCookieOnThreshold?: number; 
  public get synCookieOnThreshold() {
    return this.getNumberAttribute('syn_cookie_on_threshold');
  }
  public set synCookieOnThreshold(value: number) {
    this._synCookieOnThreshold = value;
  }
  public resetSynCookieOnThreshold() {
    this._synCookieOnThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieOnThresholdInput() {
    return this._synCookieOnThreshold;
  }

  // syn_cookie_on_timeout - computed: false, optional: true, required: false
  private _synCookieOnTimeout?: number; 
  public get synCookieOnTimeout() {
    return this.getNumberAttribute('syn_cookie_on_timeout');
  }
  public set synCookieOnTimeout(value: number) {
    this._synCookieOnTimeout = value;
  }
  public resetSynCookieOnTimeout() {
    this._synCookieOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieOnTimeoutInput() {
    return this._synCookieOnTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection thunder_cgnv6_ddos_protection}
*/
export class Cgnv6DdosProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ddos_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6DdosProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6DdosProtection to import
  * @param importFromId The id of the existing Cgnv6DdosProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6DdosProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ddos_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_ddos_protection thunder_cgnv6_ddos_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6DdosProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6DdosProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ddos_protection',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableAction = config.enableAction;
    this._id = config.id;
    this._loggingAction = config.loggingAction;
    this._maxHwEntries = config.maxHwEntries;
    this._toggle = config.toggle;
    this._uuid = config.uuid;
    this._zone = config.zone;
    this._disableNatIpByBgp.internalValue = config.disableNatIpByBgp;
    this._ipEntries.internalValue = config.ipEntries;
    this._l4Entries.internalValue = config.l4Entries;
    this._packetsPerSecond.internalValue = config.packetsPerSecond;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._synCookie.internalValue = config.synCookie;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // max_hw_entries - computed: false, optional: true, required: false
  private _maxHwEntries?: number; 
  public get maxHwEntries() {
    return this.getNumberAttribute('max_hw_entries');
  }
  public set maxHwEntries(value: number) {
    this._maxHwEntries = value;
  }
  public resetMaxHwEntries() {
    this._maxHwEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHwEntriesInput() {
    return this._maxHwEntries;
  }

  // toggle - computed: false, optional: true, required: false
  private _toggle?: string; 
  public get toggle() {
    return this.getStringAttribute('toggle');
  }
  public set toggle(value: string) {
    this._toggle = value;
  }
  public resetToggle() {
    this._toggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toggleInput() {
    return this._toggle;
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

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // disable_nat_ip_by_bgp - computed: false, optional: true, required: false
  private _disableNatIpByBgp = new Cgnv6DdosProtectionDisableNatIpByBgpOutputReference(this, "disable_nat_ip_by_bgp");
  public get disableNatIpByBgp() {
    return this._disableNatIpByBgp;
  }
  public putDisableNatIpByBgp(value: Cgnv6DdosProtectionDisableNatIpByBgp) {
    this._disableNatIpByBgp.internalValue = value;
  }
  public resetDisableNatIpByBgp() {
    this._disableNatIpByBgp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableNatIpByBgpInput() {
    return this._disableNatIpByBgp.internalValue;
  }

  // ip_entries - computed: false, optional: true, required: false
  private _ipEntries = new Cgnv6DdosProtectionIpEntriesOutputReference(this, "ip_entries");
  public get ipEntries() {
    return this._ipEntries;
  }
  public putIpEntries(value: Cgnv6DdosProtectionIpEntries) {
    this._ipEntries.internalValue = value;
  }
  public resetIpEntries() {
    this._ipEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEntriesInput() {
    return this._ipEntries.internalValue;
  }

  // l4_entries - computed: false, optional: true, required: false
  private _l4Entries = new Cgnv6DdosProtectionL4EntriesOutputReference(this, "l4_entries");
  public get l4Entries() {
    return this._l4Entries;
  }
  public putL4Entries(value: Cgnv6DdosProtectionL4Entries) {
    this._l4Entries.internalValue = value;
  }
  public resetL4Entries() {
    this._l4Entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntriesInput() {
    return this._l4Entries.internalValue;
  }

  // packets_per_second - computed: false, optional: true, required: false
  private _packetsPerSecond = new Cgnv6DdosProtectionPacketsPerSecondOutputReference(this, "packets_per_second");
  public get packetsPerSecond() {
    return this._packetsPerSecond;
  }
  public putPacketsPerSecond(value: Cgnv6DdosProtectionPacketsPerSecond) {
    this._packetsPerSecond.internalValue = value;
  }
  public resetPacketsPerSecond() {
    this._packetsPerSecond.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsPerSecondInput() {
    return this._packetsPerSecond.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6DdosProtectionSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6DdosProtectionSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie = new Cgnv6DdosProtectionSynCookieOutputReference(this, "syn_cookie");
  public get synCookie() {
    return this._synCookie;
  }
  public putSynCookie(value: Cgnv6DdosProtectionSynCookie) {
    this._synCookie.internalValue = value;
  }
  public resetSynCookie() {
    this._synCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_action: cdktf.stringToTerraform(this._enableAction),
      id: cdktf.stringToTerraform(this._id),
      logging_action: cdktf.stringToTerraform(this._loggingAction),
      max_hw_entries: cdktf.numberToTerraform(this._maxHwEntries),
      toggle: cdktf.stringToTerraform(this._toggle),
      uuid: cdktf.stringToTerraform(this._uuid),
      zone: cdktf.stringToTerraform(this._zone),
      disable_nat_ip_by_bgp: cgnv6DdosProtectionDisableNatIpByBgpToTerraform(this._disableNatIpByBgp.internalValue),
      ip_entries: cgnv6DdosProtectionIpEntriesToTerraform(this._ipEntries.internalValue),
      l4_entries: cgnv6DdosProtectionL4EntriesToTerraform(this._l4Entries.internalValue),
      packets_per_second: cgnv6DdosProtectionPacketsPerSecondToTerraform(this._packetsPerSecond.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6DdosProtectionSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      syn_cookie: cgnv6DdosProtectionSynCookieToTerraform(this._synCookie.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_action: {
        value: cdktf.stringToHclTerraform(this._enableAction),
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
      logging_action: {
        value: cdktf.stringToHclTerraform(this._loggingAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_hw_entries: {
        value: cdktf.numberToHclTerraform(this._maxHwEntries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      toggle: {
        value: cdktf.stringToHclTerraform(this._toggle),
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
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_nat_ip_by_bgp: {
        value: cgnv6DdosProtectionDisableNatIpByBgpToHclTerraform(this._disableNatIpByBgp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionDisableNatIpByBgpList",
      },
      ip_entries: {
        value: cgnv6DdosProtectionIpEntriesToHclTerraform(this._ipEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionIpEntriesList",
      },
      l4_entries: {
        value: cgnv6DdosProtectionL4EntriesToHclTerraform(this._l4Entries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionL4EntriesList",
      },
      packets_per_second: {
        value: cgnv6DdosProtectionPacketsPerSecondToHclTerraform(this._packetsPerSecond.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionPacketsPerSecondList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6DdosProtectionSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionSamplingEnableList",
      },
      syn_cookie: {
        value: cgnv6DdosProtectionSynCookieToHclTerraform(this._synCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6DdosProtectionSynCookieList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
