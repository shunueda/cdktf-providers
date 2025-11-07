// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OspfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable OSPF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#disable Ospf#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Configure domain ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#domain_id Ospf#domain_id}
  */
  readonly domainId?: string;
  /**
  * Export policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#export Ospf#export}
  */
  readonly export?: string[];
  /**
  * Preference of external routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#external_preference Ospf#external_preference}
  */
  readonly externalPreference?: number;
  /**
  * Set forwarding address in Type 5 LSA in broadcast network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#forwarding_address_to_broadcast Ospf#forwarding_address_to_broadcast}
  */
  readonly forwardingAddressToBroadcast?: boolean | cdktf.IResolvable;
  /**
  * Import policy (for external routes or setting priority).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#import Ospf#import}
  */
  readonly import?: string[];
  /**
  * Preference of labeled routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#labeled_preference Ospf#labeled_preference}
  */
  readonly labeledPreference?: number;
  /**
  * SA refresh interval (minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#lsa_refresh_interval Ospf#lsa_refresh_interval}
  */
  readonly lsaRefreshInterval?: number;
  /**
  * Disable full NSSA functionality at ABR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#no_nssa_abr Ospf#no_nssa_abr}
  */
  readonly noNssaAbr?: boolean | cdktf.IResolvable;
  /**
  * Disable RFC1583 compatibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#no_rfc1583 Ospf#no_rfc1583}
  */
  readonly noRfc1583?: boolean | cdktf.IResolvable;
  /**
  * Preference of internal routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#preference Ospf#preference}
  */
  readonly preference?: number;
  /**
  * Maximum number of prefixes that can be exported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#prefix_export_limit Ospf#prefix_export_limit}
  */
  readonly prefixExportLimit?: number;
  /**
  * Bandwidth for calculating metric defaults.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#reference_bandwidth Ospf#reference_bandwidth}
  */
  readonly referenceBandwidth?: string;
  /**
  * Routing table group for importing OSPF routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#rib_group Ospf#rib_group}
  */
  readonly ribGroup?: string;
  /**
  * Routing instance for ospf protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#routing_instance Ospf#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Configure parameters for sham links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#sham_link Ospf#sham_link}
  */
  readonly shamLink?: boolean | cdktf.IResolvable;
  /**
  * Local sham link endpoint address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#sham_link_local Ospf#sham_link_local}
  */
  readonly shamLinkLocal?: string;
  /**
  * Version of ospf.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#version Ospf#version}
  */
  readonly version?: string;
  /**
  * database_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#database_protection Ospf#database_protection}
  */
  readonly databaseProtection?: OspfDatabaseProtection;
  /**
  * graceful_restart block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#graceful_restart Ospf#graceful_restart}
  */
  readonly gracefulRestart?: OspfGracefulRestart;
  /**
  * overload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#overload Ospf#overload}
  */
  readonly overload?: OspfOverload;
  /**
  * spf_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#spf_options Ospf#spf_options}
  */
  readonly spfOptions?: OspfSpfOptions;
}
export interface OspfDatabaseProtection {
  /**
  * Maximum number of times to go into ignore state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#ignore_count Ospf#ignore_count}
  */
  readonly ignoreCount?: number;
  /**
  * Time to stay in ignore state and ignore all neighbors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#ignore_time Ospf#ignore_time}
  */
  readonly ignoreTime?: number;
  /**
  * Maximum allowed non self-generated LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#maximum_lsa Ospf#maximum_lsa}
  */
  readonly maximumLsa?: number;
  /**
  * Time after which the ignore count gets reset to zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#reset_time Ospf#reset_time}
  */
  readonly resetTime?: number;
  /**
  * Emit only a warning when LSA maximum limit is exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#warning_only Ospf#warning_only}
  */
  readonly warningOnly?: boolean | cdktf.IResolvable;
  /**
  * Percentage of LSA maximum above which to trigger warning (percent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#warning_threshold Ospf#warning_threshold}
  */
  readonly warningThreshold?: number;
}

export function ospfDatabaseProtectionToTerraform(struct?: OspfDatabaseProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_count: cdktf.numberToTerraform(struct!.ignoreCount),
    ignore_time: cdktf.numberToTerraform(struct!.ignoreTime),
    maximum_lsa: cdktf.numberToTerraform(struct!.maximumLsa),
    reset_time: cdktf.numberToTerraform(struct!.resetTime),
    warning_only: cdktf.booleanToTerraform(struct!.warningOnly),
    warning_threshold: cdktf.numberToTerraform(struct!.warningThreshold),
  }
}


export function ospfDatabaseProtectionToHclTerraform(struct?: OspfDatabaseProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_count: {
      value: cdktf.numberToHclTerraform(struct!.ignoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_time: {
      value: cdktf.numberToHclTerraform(struct!.ignoreTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_lsa: {
      value: cdktf.numberToHclTerraform(struct!.maximumLsa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_time: {
      value: cdktf.numberToHclTerraform(struct!.resetTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    warning_only: {
      value: cdktf.booleanToHclTerraform(struct!.warningOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warning_threshold: {
      value: cdktf.numberToHclTerraform(struct!.warningThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfDatabaseProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfDatabaseProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCount = this._ignoreCount;
    }
    if (this._ignoreTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreTime = this._ignoreTime;
    }
    if (this._maximumLsa !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLsa = this._maximumLsa;
    }
    if (this._resetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetTime = this._resetTime;
    }
    if (this._warningOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningOnly = this._warningOnly;
    }
    if (this._warningThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningThreshold = this._warningThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfDatabaseProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreCount = undefined;
      this._ignoreTime = undefined;
      this._maximumLsa = undefined;
      this._resetTime = undefined;
      this._warningOnly = undefined;
      this._warningThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreCount = value.ignoreCount;
      this._ignoreTime = value.ignoreTime;
      this._maximumLsa = value.maximumLsa;
      this._resetTime = value.resetTime;
      this._warningOnly = value.warningOnly;
      this._warningThreshold = value.warningThreshold;
    }
  }

  // ignore_count - computed: false, optional: true, required: false
  private _ignoreCount?: number; 
  public get ignoreCount() {
    return this.getNumberAttribute('ignore_count');
  }
  public set ignoreCount(value: number) {
    this._ignoreCount = value;
  }
  public resetIgnoreCount() {
    this._ignoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCountInput() {
    return this._ignoreCount;
  }

  // ignore_time - computed: false, optional: true, required: false
  private _ignoreTime?: number; 
  public get ignoreTime() {
    return this.getNumberAttribute('ignore_time');
  }
  public set ignoreTime(value: number) {
    this._ignoreTime = value;
  }
  public resetIgnoreTime() {
    this._ignoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreTimeInput() {
    return this._ignoreTime;
  }

  // maximum_lsa - computed: false, optional: true, required: false
  private _maximumLsa?: number; 
  public get maximumLsa() {
    return this.getNumberAttribute('maximum_lsa');
  }
  public set maximumLsa(value: number) {
    this._maximumLsa = value;
  }
  public resetMaximumLsa() {
    this._maximumLsa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLsaInput() {
    return this._maximumLsa;
  }

  // reset_time - computed: false, optional: true, required: false
  private _resetTime?: number; 
  public get resetTime() {
    return this.getNumberAttribute('reset_time');
  }
  public set resetTime(value: number) {
    this._resetTime = value;
  }
  public resetResetTime() {
    this._resetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // warning_only - computed: false, optional: true, required: false
  private _warningOnly?: boolean | cdktf.IResolvable; 
  public get warningOnly() {
    return this.getBooleanAttribute('warning_only');
  }
  public set warningOnly(value: boolean | cdktf.IResolvable) {
    this._warningOnly = value;
  }
  public resetWarningOnly() {
    this._warningOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningOnlyInput() {
    return this._warningOnly;
  }

  // warning_threshold - computed: false, optional: true, required: false
  private _warningThreshold?: number; 
  public get warningThreshold() {
    return this.getNumberAttribute('warning_threshold');
  }
  public set warningThreshold(value: number) {
    this._warningThreshold = value;
  }
  public resetWarningThreshold() {
    this._warningThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningThresholdInput() {
    return this._warningThreshold;
  }
}
export interface OspfGracefulRestart {
  /**
  * Disable OSPF graceful restart capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#disable Ospf#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Disable graceful restart helper capability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#helper_disable Ospf#helper_disable}
  */
  readonly helperDisable?: boolean | cdktf.IResolvable;
  /**
  * Disable graceful restart helper capability for specific type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#helper_disable_type Ospf#helper_disable_type}
  */
  readonly helperDisableType?: string;
  /**
  * Do not abort graceful helper mode upon LSA changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#no_strict_lsa_checking Ospf#no_strict_lsa_checking}
  */
  readonly noStrictLsaChecking?: boolean | cdktf.IResolvable;
  /**
  * Time to send all max-aged grace LSAs (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#notify_duration Ospf#notify_duration}
  */
  readonly notifyDuration?: number;
  /**
  * Time for all neighbors to become full (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#restart_duration Ospf#restart_duration}
  */
  readonly restartDuration?: number;
}

export function ospfGracefulRestartToTerraform(struct?: OspfGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    helper_disable: cdktf.booleanToTerraform(struct!.helperDisable),
    helper_disable_type: cdktf.stringToTerraform(struct!.helperDisableType),
    no_strict_lsa_checking: cdktf.booleanToTerraform(struct!.noStrictLsaChecking),
    notify_duration: cdktf.numberToTerraform(struct!.notifyDuration),
    restart_duration: cdktf.numberToTerraform(struct!.restartDuration),
  }
}


export function ospfGracefulRestartToHclTerraform(struct?: OspfGracefulRestart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helper_disable: {
      value: cdktf.booleanToHclTerraform(struct!.helperDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    helper_disable_type: {
      value: cdktf.stringToHclTerraform(struct!.helperDisableType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_strict_lsa_checking: {
      value: cdktf.booleanToHclTerraform(struct!.noStrictLsaChecking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_duration: {
      value: cdktf.numberToHclTerraform(struct!.notifyDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    restart_duration: {
      value: cdktf.numberToHclTerraform(struct!.restartDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfGracefulRestartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfGracefulRestart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._helperDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperDisable = this._helperDisable;
    }
    if (this._helperDisableType !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperDisableType = this._helperDisableType;
    }
    if (this._noStrictLsaChecking !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStrictLsaChecking = this._noStrictLsaChecking;
    }
    if (this._notifyDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyDuration = this._notifyDuration;
    }
    if (this._restartDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartDuration = this._restartDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfGracefulRestart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disable = undefined;
      this._helperDisable = undefined;
      this._helperDisableType = undefined;
      this._noStrictLsaChecking = undefined;
      this._notifyDuration = undefined;
      this._restartDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disable = value.disable;
      this._helperDisable = value.helperDisable;
      this._helperDisableType = value.helperDisableType;
      this._noStrictLsaChecking = value.noStrictLsaChecking;
      this._notifyDuration = value.notifyDuration;
      this._restartDuration = value.restartDuration;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // helper_disable - computed: false, optional: true, required: false
  private _helperDisable?: boolean | cdktf.IResolvable; 
  public get helperDisable() {
    return this.getBooleanAttribute('helper_disable');
  }
  public set helperDisable(value: boolean | cdktf.IResolvable) {
    this._helperDisable = value;
  }
  public resetHelperDisable() {
    this._helperDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperDisableInput() {
    return this._helperDisable;
  }

  // helper_disable_type - computed: false, optional: true, required: false
  private _helperDisableType?: string; 
  public get helperDisableType() {
    return this.getStringAttribute('helper_disable_type');
  }
  public set helperDisableType(value: string) {
    this._helperDisableType = value;
  }
  public resetHelperDisableType() {
    this._helperDisableType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperDisableTypeInput() {
    return this._helperDisableType;
  }

  // no_strict_lsa_checking - computed: false, optional: true, required: false
  private _noStrictLsaChecking?: boolean | cdktf.IResolvable; 
  public get noStrictLsaChecking() {
    return this.getBooleanAttribute('no_strict_lsa_checking');
  }
  public set noStrictLsaChecking(value: boolean | cdktf.IResolvable) {
    this._noStrictLsaChecking = value;
  }
  public resetNoStrictLsaChecking() {
    this._noStrictLsaChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStrictLsaCheckingInput() {
    return this._noStrictLsaChecking;
  }

  // notify_duration - computed: false, optional: true, required: false
  private _notifyDuration?: number; 
  public get notifyDuration() {
    return this.getNumberAttribute('notify_duration');
  }
  public set notifyDuration(value: number) {
    this._notifyDuration = value;
  }
  public resetNotifyDuration() {
    this._notifyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyDurationInput() {
    return this._notifyDuration;
  }

  // restart_duration - computed: false, optional: true, required: false
  private _restartDuration?: number; 
  public get restartDuration() {
    return this.getNumberAttribute('restart_duration');
  }
  public set restartDuration(value: number) {
    this._restartDuration = value;
  }
  public resetRestartDuration() {
    this._restartDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartDurationInput() {
    return this._restartDuration;
  }
}
export interface OspfOverload {
  /**
  * Allow routes to be leaked when overload is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#allow_route_leaking Ospf#allow_route_leaking}
  */
  readonly allowRouteLeaking?: boolean | cdktf.IResolvable;
  /**
  * Advertise As External with maximum usable metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#as_external Ospf#as_external}
  */
  readonly asExternal?: boolean | cdktf.IResolvable;
  /**
  * Advertise Stub Network with maximum metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#stub_network Ospf#stub_network}
  */
  readonly stubNetwork?: boolean | cdktf.IResolvable;
  /**
  * Time after which overload mode is reset (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#timeout Ospf#timeout}
  */
  readonly timeout?: number;
}

export function ospfOverloadToTerraform(struct?: OspfOverload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_route_leaking: cdktf.booleanToTerraform(struct!.allowRouteLeaking),
    as_external: cdktf.booleanToTerraform(struct!.asExternal),
    stub_network: cdktf.booleanToTerraform(struct!.stubNetwork),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function ospfOverloadToHclTerraform(struct?: OspfOverload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_route_leaking: {
      value: cdktf.booleanToHclTerraform(struct!.allowRouteLeaking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    as_external: {
      value: cdktf.booleanToHclTerraform(struct!.asExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stub_network: {
      value: cdktf.booleanToHclTerraform(struct!.stubNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class OspfOverloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfOverload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRouteLeaking !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRouteLeaking = this._allowRouteLeaking;
    }
    if (this._asExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.asExternal = this._asExternal;
    }
    if (this._stubNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.stubNetwork = this._stubNetwork;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfOverload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowRouteLeaking = undefined;
      this._asExternal = undefined;
      this._stubNetwork = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowRouteLeaking = value.allowRouteLeaking;
      this._asExternal = value.asExternal;
      this._stubNetwork = value.stubNetwork;
      this._timeout = value.timeout;
    }
  }

  // allow_route_leaking - computed: false, optional: true, required: false
  private _allowRouteLeaking?: boolean | cdktf.IResolvable; 
  public get allowRouteLeaking() {
    return this.getBooleanAttribute('allow_route_leaking');
  }
  public set allowRouteLeaking(value: boolean | cdktf.IResolvable) {
    this._allowRouteLeaking = value;
  }
  public resetAllowRouteLeaking() {
    this._allowRouteLeaking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRouteLeakingInput() {
    return this._allowRouteLeaking;
  }

  // as_external - computed: false, optional: true, required: false
  private _asExternal?: boolean | cdktf.IResolvable; 
  public get asExternal() {
    return this.getBooleanAttribute('as_external');
  }
  public set asExternal(value: boolean | cdktf.IResolvable) {
    this._asExternal = value;
  }
  public resetAsExternal() {
    this._asExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asExternalInput() {
    return this._asExternal;
  }

  // stub_network - computed: false, optional: true, required: false
  private _stubNetwork?: boolean | cdktf.IResolvable; 
  public get stubNetwork() {
    return this.getBooleanAttribute('stub_network');
  }
  public set stubNetwork(value: boolean | cdktf.IResolvable) {
    this._stubNetwork = value;
  }
  public resetStubNetwork() {
    this._stubNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stubNetworkInput() {
    return this._stubNetwork;
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
export interface OspfSpfOptions {
  /**
  * Time to wait before running an SPF (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#delay Ospf#delay}
  */
  readonly delay?: number;
  /**
  * Time to hold down before running an SPF (milliseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#holddown Ospf#holddown}
  */
  readonly holddown?: number;
  /**
  * Do not ignore self-generated external and NSSA LSAs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#no_ignore_our_externals Ospf#no_ignore_our_externals}
  */
  readonly noIgnoreOurExternals?: boolean | cdktf.IResolvable;
  /**
  * Number of maximum rapid SPF runs before holddown.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#rapid_runs Ospf#rapid_runs}
  */
  readonly rapidRuns?: number;
}

export function ospfSpfOptionsToTerraform(struct?: OspfSpfOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    holddown: cdktf.numberToTerraform(struct!.holddown),
    no_ignore_our_externals: cdktf.booleanToTerraform(struct!.noIgnoreOurExternals),
    rapid_runs: cdktf.numberToTerraform(struct!.rapidRuns),
  }
}


export function ospfSpfOptionsToHclTerraform(struct?: OspfSpfOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    holddown: {
      value: cdktf.numberToHclTerraform(struct!.holddown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ignore_our_externals: {
      value: cdktf.booleanToHclTerraform(struct!.noIgnoreOurExternals),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rapid_runs: {
      value: cdktf.numberToHclTerraform(struct!.rapidRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OspfSpfOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OspfSpfOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._holddown !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddown = this._holddown;
    }
    if (this._noIgnoreOurExternals !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIgnoreOurExternals = this._noIgnoreOurExternals;
    }
    if (this._rapidRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.rapidRuns = this._rapidRuns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OspfSpfOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._holddown = undefined;
      this._noIgnoreOurExternals = undefined;
      this._rapidRuns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._holddown = value.holddown;
      this._noIgnoreOurExternals = value.noIgnoreOurExternals;
      this._rapidRuns = value.rapidRuns;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // holddown - computed: false, optional: true, required: false
  private _holddown?: number; 
  public get holddown() {
    return this.getNumberAttribute('holddown');
  }
  public set holddown(value: number) {
    this._holddown = value;
  }
  public resetHolddown() {
    this._holddown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownInput() {
    return this._holddown;
  }

  // no_ignore_our_externals - computed: false, optional: true, required: false
  private _noIgnoreOurExternals?: boolean | cdktf.IResolvable; 
  public get noIgnoreOurExternals() {
    return this.getBooleanAttribute('no_ignore_our_externals');
  }
  public set noIgnoreOurExternals(value: boolean | cdktf.IResolvable) {
    this._noIgnoreOurExternals = value;
  }
  public resetNoIgnoreOurExternals() {
    this._noIgnoreOurExternals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIgnoreOurExternalsInput() {
    return this._noIgnoreOurExternals;
  }

  // rapid_runs - computed: false, optional: true, required: false
  private _rapidRuns?: number; 
  public get rapidRuns() {
    return this.getNumberAttribute('rapid_runs');
  }
  public set rapidRuns(value: number) {
    this._rapidRuns = value;
  }
  public resetRapidRuns() {
    this._rapidRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rapidRunsInput() {
    return this._rapidRuns;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf junos_ospf}
*/
export class Ospf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_ospf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ospf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ospf to import
  * @param importFromId The id of the existing Ospf that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ospf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_ospf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/ospf junos_ospf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OspfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OspfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'junos_ospf',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._domainId = config.domainId;
    this._export = config.export;
    this._externalPreference = config.externalPreference;
    this._forwardingAddressToBroadcast = config.forwardingAddressToBroadcast;
    this._import = config.import;
    this._labeledPreference = config.labeledPreference;
    this._lsaRefreshInterval = config.lsaRefreshInterval;
    this._noNssaAbr = config.noNssaAbr;
    this._noRfc1583 = config.noRfc1583;
    this._preference = config.preference;
    this._prefixExportLimit = config.prefixExportLimit;
    this._referenceBandwidth = config.referenceBandwidth;
    this._ribGroup = config.ribGroup;
    this._routingInstance = config.routingInstance;
    this._shamLink = config.shamLink;
    this._shamLinkLocal = config.shamLinkLocal;
    this._version = config.version;
    this._databaseProtection.internalValue = config.databaseProtection;
    this._gracefulRestart.internalValue = config.gracefulRestart;
    this._overload.internalValue = config.overload;
    this._spfOptions.internalValue = config.spfOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // export - computed: false, optional: true, required: false
  private _export?: string[]; 
  public get export() {
    return this.getListAttribute('export');
  }
  public set export(value: string[]) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // external_preference - computed: false, optional: true, required: false
  private _externalPreference?: number; 
  public get externalPreference() {
    return this.getNumberAttribute('external_preference');
  }
  public set externalPreference(value: number) {
    this._externalPreference = value;
  }
  public resetExternalPreference() {
    this._externalPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPreferenceInput() {
    return this._externalPreference;
  }

  // forwarding_address_to_broadcast - computed: false, optional: true, required: false
  private _forwardingAddressToBroadcast?: boolean | cdktf.IResolvable; 
  public get forwardingAddressToBroadcast() {
    return this.getBooleanAttribute('forwarding_address_to_broadcast');
  }
  public set forwardingAddressToBroadcast(value: boolean | cdktf.IResolvable) {
    this._forwardingAddressToBroadcast = value;
  }
  public resetForwardingAddressToBroadcast() {
    this._forwardingAddressToBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingAddressToBroadcastInput() {
    return this._forwardingAddressToBroadcast;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import - computed: false, optional: true, required: false
  private _import?: string[]; 
  public get import() {
    return this.getListAttribute('import');
  }
  public set import(value: string[]) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // labeled_preference - computed: false, optional: true, required: false
  private _labeledPreference?: number; 
  public get labeledPreference() {
    return this.getNumberAttribute('labeled_preference');
  }
  public set labeledPreference(value: number) {
    this._labeledPreference = value;
  }
  public resetLabeledPreference() {
    this._labeledPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labeledPreferenceInput() {
    return this._labeledPreference;
  }

  // lsa_refresh_interval - computed: false, optional: true, required: false
  private _lsaRefreshInterval?: number; 
  public get lsaRefreshInterval() {
    return this.getNumberAttribute('lsa_refresh_interval');
  }
  public set lsaRefreshInterval(value: number) {
    this._lsaRefreshInterval = value;
  }
  public resetLsaRefreshInterval() {
    this._lsaRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lsaRefreshIntervalInput() {
    return this._lsaRefreshInterval;
  }

  // no_nssa_abr - computed: false, optional: true, required: false
  private _noNssaAbr?: boolean | cdktf.IResolvable; 
  public get noNssaAbr() {
    return this.getBooleanAttribute('no_nssa_abr');
  }
  public set noNssaAbr(value: boolean | cdktf.IResolvable) {
    this._noNssaAbr = value;
  }
  public resetNoNssaAbr() {
    this._noNssaAbr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNssaAbrInput() {
    return this._noNssaAbr;
  }

  // no_rfc1583 - computed: false, optional: true, required: false
  private _noRfc1583?: boolean | cdktf.IResolvable; 
  public get noRfc1583() {
    return this.getBooleanAttribute('no_rfc1583');
  }
  public set noRfc1583(value: boolean | cdktf.IResolvable) {
    this._noRfc1583 = value;
  }
  public resetNoRfc1583() {
    this._noRfc1583 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRfc1583Input() {
    return this._noRfc1583;
  }

  // preference - computed: false, optional: true, required: false
  private _preference?: number; 
  public get preference() {
    return this.getNumberAttribute('preference');
  }
  public set preference(value: number) {
    this._preference = value;
  }
  public resetPreference() {
    this._preference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference;
  }

  // prefix_export_limit - computed: false, optional: true, required: false
  private _prefixExportLimit?: number; 
  public get prefixExportLimit() {
    return this.getNumberAttribute('prefix_export_limit');
  }
  public set prefixExportLimit(value: number) {
    this._prefixExportLimit = value;
  }
  public resetPrefixExportLimit() {
    this._prefixExportLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixExportLimitInput() {
    return this._prefixExportLimit;
  }

  // reference_bandwidth - computed: false, optional: true, required: false
  private _referenceBandwidth?: string; 
  public get referenceBandwidth() {
    return this.getStringAttribute('reference_bandwidth');
  }
  public set referenceBandwidth(value: string) {
    this._referenceBandwidth = value;
  }
  public resetReferenceBandwidth() {
    this._referenceBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceBandwidthInput() {
    return this._referenceBandwidth;
  }

  // rib_group - computed: false, optional: true, required: false
  private _ribGroup?: string; 
  public get ribGroup() {
    return this.getStringAttribute('rib_group');
  }
  public set ribGroup(value: string) {
    this._ribGroup = value;
  }
  public resetRibGroup() {
    this._ribGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ribGroupInput() {
    return this._ribGroup;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // sham_link - computed: false, optional: true, required: false
  private _shamLink?: boolean | cdktf.IResolvable; 
  public get shamLink() {
    return this.getBooleanAttribute('sham_link');
  }
  public set shamLink(value: boolean | cdktf.IResolvable) {
    this._shamLink = value;
  }
  public resetShamLink() {
    this._shamLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shamLinkInput() {
    return this._shamLink;
  }

  // sham_link_local - computed: false, optional: true, required: false
  private _shamLinkLocal?: string; 
  public get shamLinkLocal() {
    return this.getStringAttribute('sham_link_local');
  }
  public set shamLinkLocal(value: string) {
    this._shamLinkLocal = value;
  }
  public resetShamLinkLocal() {
    this._shamLinkLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shamLinkLocalInput() {
    return this._shamLinkLocal;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // database_protection - computed: false, optional: true, required: false
  private _databaseProtection = new OspfDatabaseProtectionOutputReference(this, "database_protection");
  public get databaseProtection() {
    return this._databaseProtection;
  }
  public putDatabaseProtection(value: OspfDatabaseProtection) {
    this._databaseProtection.internalValue = value;
  }
  public resetDatabaseProtection() {
    this._databaseProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseProtectionInput() {
    return this._databaseProtection.internalValue;
  }

  // graceful_restart - computed: false, optional: true, required: false
  private _gracefulRestart = new OspfGracefulRestartOutputReference(this, "graceful_restart");
  public get gracefulRestart() {
    return this._gracefulRestart;
  }
  public putGracefulRestart(value: OspfGracefulRestart) {
    this._gracefulRestart.internalValue = value;
  }
  public resetGracefulRestart() {
    this._gracefulRestart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartInput() {
    return this._gracefulRestart.internalValue;
  }

  // overload - computed: false, optional: true, required: false
  private _overload = new OspfOverloadOutputReference(this, "overload");
  public get overload() {
    return this._overload;
  }
  public putOverload(value: OspfOverload) {
    this._overload.internalValue = value;
  }
  public resetOverload() {
    this._overload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overloadInput() {
    return this._overload.internalValue;
  }

  // spf_options - computed: false, optional: true, required: false
  private _spfOptions = new OspfSpfOptionsOutputReference(this, "spf_options");
  public get spfOptions() {
    return this._spfOptions;
  }
  public putSpfOptions(value: OspfSpfOptions) {
    this._spfOptions.internalValue = value;
  }
  public resetSpfOptions() {
    this._spfOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spfOptionsInput() {
    return this._spfOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.booleanToTerraform(this._disable),
      domain_id: cdktf.stringToTerraform(this._domainId),
      export: cdktf.listMapper(cdktf.stringToTerraform, false)(this._export),
      external_preference: cdktf.numberToTerraform(this._externalPreference),
      forwarding_address_to_broadcast: cdktf.booleanToTerraform(this._forwardingAddressToBroadcast),
      import: cdktf.listMapper(cdktf.stringToTerraform, false)(this._import),
      labeled_preference: cdktf.numberToTerraform(this._labeledPreference),
      lsa_refresh_interval: cdktf.numberToTerraform(this._lsaRefreshInterval),
      no_nssa_abr: cdktf.booleanToTerraform(this._noNssaAbr),
      no_rfc1583: cdktf.booleanToTerraform(this._noRfc1583),
      preference: cdktf.numberToTerraform(this._preference),
      prefix_export_limit: cdktf.numberToTerraform(this._prefixExportLimit),
      reference_bandwidth: cdktf.stringToTerraform(this._referenceBandwidth),
      rib_group: cdktf.stringToTerraform(this._ribGroup),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      sham_link: cdktf.booleanToTerraform(this._shamLink),
      sham_link_local: cdktf.stringToTerraform(this._shamLinkLocal),
      version: cdktf.stringToTerraform(this._version),
      database_protection: ospfDatabaseProtectionToTerraform(this._databaseProtection.internalValue),
      graceful_restart: ospfGracefulRestartToTerraform(this._gracefulRestart.internalValue),
      overload: ospfOverloadToTerraform(this._overload.internalValue),
      spf_options: ospfSpfOptionsToTerraform(this._spfOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      export: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._export),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      external_preference: {
        value: cdktf.numberToHclTerraform(this._externalPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forwarding_address_to_broadcast: {
        value: cdktf.booleanToHclTerraform(this._forwardingAddressToBroadcast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._import),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labeled_preference: {
        value: cdktf.numberToHclTerraform(this._labeledPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsa_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._lsaRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_nssa_abr: {
        value: cdktf.booleanToHclTerraform(this._noNssaAbr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_rfc1583: {
        value: cdktf.booleanToHclTerraform(this._noRfc1583),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      preference: {
        value: cdktf.numberToHclTerraform(this._preference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix_export_limit: {
        value: cdktf.numberToHclTerraform(this._prefixExportLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reference_bandwidth: {
        value: cdktf.stringToHclTerraform(this._referenceBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rib_group: {
        value: cdktf.stringToHclTerraform(this._ribGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sham_link: {
        value: cdktf.booleanToHclTerraform(this._shamLink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sham_link_local: {
        value: cdktf.stringToHclTerraform(this._shamLinkLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_protection: {
        value: ospfDatabaseProtectionToHclTerraform(this._databaseProtection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfDatabaseProtection",
      },
      graceful_restart: {
        value: ospfGracefulRestartToHclTerraform(this._gracefulRestart.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfGracefulRestart",
      },
      overload: {
        value: ospfOverloadToHclTerraform(this._overload.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfOverload",
      },
      spf_options: {
        value: ospfSpfOptionsToHclTerraform(this._spfOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OspfSpfOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
