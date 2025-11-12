// https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#assigned_edges Policy#assigned_edges}
  */
  readonly assignedEdges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#date_created Policy#date_created}
  */
  readonly dateCreated?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#date_modified Policy#date_modified}
  */
  readonly dateModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#config Policy#config}
  */
  readonly config?: PolicyConfigA;
  /**
  * created_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#created_by Policy#created_by}
  */
  readonly createdBy?: PolicyCreatedBy;
  /**
  * hubs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#hubs Policy#hubs}
  */
  readonly hubs?: PolicyHubs[] | cdktf.IResolvable;
  /**
  * modified_by block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#modified_by Policy#modified_by}
  */
  readonly modifiedBy?: PolicyModifiedBy;
}
export interface PolicyConfigPcfgCosTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_jitter_ms Policy#cos_jitter_ms}
  */
  readonly cosJitterMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_last_resort Policy#cos_last_resort}
  */
  readonly cosLastResort?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_latency_ms Policy#cos_latency_ms}
  */
  readonly cosLatencyMs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_llq Policy#cos_llq}
  */
  readonly cosLlq?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_loss_percent Policy#cos_loss_percent}
  */
  readonly cosLossPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_min_guarantee_bw_percent Policy#cos_min_guarantee_bw_percent}
  */
  readonly cosMinGuaranteeBwPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_priority Policy#cos_priority}
  */
  readonly cosPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cos_traffic_class Policy#cos_traffic_class}
  */
  readonly cosTrafficClass?: string;
}

export function policyConfigPcfgCosTableToTerraform(struct?: PolicyConfigPcfgCosTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cos_jitter_ms: cdktf.numberToTerraform(struct!.cosJitterMs),
    cos_last_resort: cdktf.booleanToTerraform(struct!.cosLastResort),
    cos_latency_ms: cdktf.numberToTerraform(struct!.cosLatencyMs),
    cos_llq: cdktf.booleanToTerraform(struct!.cosLlq),
    cos_loss_percent: cdktf.numberToTerraform(struct!.cosLossPercent),
    cos_min_guarantee_bw_percent: cdktf.numberToTerraform(struct!.cosMinGuaranteeBwPercent),
    cos_priority: cdktf.stringToTerraform(struct!.cosPriority),
    cos_traffic_class: cdktf.stringToTerraform(struct!.cosTrafficClass),
  }
}


export function policyConfigPcfgCosTableToHclTerraform(struct?: PolicyConfigPcfgCosTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cos_jitter_ms: {
      value: cdktf.numberToHclTerraform(struct!.cosJitterMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cos_last_resort: {
      value: cdktf.booleanToHclTerraform(struct!.cosLastResort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cos_latency_ms: {
      value: cdktf.numberToHclTerraform(struct!.cosLatencyMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cos_llq: {
      value: cdktf.booleanToHclTerraform(struct!.cosLlq),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cos_loss_percent: {
      value: cdktf.numberToHclTerraform(struct!.cosLossPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cos_min_guarantee_bw_percent: {
      value: cdktf.numberToHclTerraform(struct!.cosMinGuaranteeBwPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cos_priority: {
      value: cdktf.stringToHclTerraform(struct!.cosPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_traffic_class: {
      value: cdktf.stringToHclTerraform(struct!.cosTrafficClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgCosTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgCosTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cosJitterMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosJitterMs = this._cosJitterMs;
    }
    if (this._cosLastResort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosLastResort = this._cosLastResort;
    }
    if (this._cosLatencyMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosLatencyMs = this._cosLatencyMs;
    }
    if (this._cosLlq !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosLlq = this._cosLlq;
    }
    if (this._cosLossPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosLossPercent = this._cosLossPercent;
    }
    if (this._cosMinGuaranteeBwPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosMinGuaranteeBwPercent = this._cosMinGuaranteeBwPercent;
    }
    if (this._cosPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosPriority = this._cosPriority;
    }
    if (this._cosTrafficClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosTrafficClass = this._cosTrafficClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgCosTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cosJitterMs = undefined;
      this._cosLastResort = undefined;
      this._cosLatencyMs = undefined;
      this._cosLlq = undefined;
      this._cosLossPercent = undefined;
      this._cosMinGuaranteeBwPercent = undefined;
      this._cosPriority = undefined;
      this._cosTrafficClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cosJitterMs = value.cosJitterMs;
      this._cosLastResort = value.cosLastResort;
      this._cosLatencyMs = value.cosLatencyMs;
      this._cosLlq = value.cosLlq;
      this._cosLossPercent = value.cosLossPercent;
      this._cosMinGuaranteeBwPercent = value.cosMinGuaranteeBwPercent;
      this._cosPriority = value.cosPriority;
      this._cosTrafficClass = value.cosTrafficClass;
    }
  }

  // cos_jitter_ms - computed: true, optional: true, required: false
  private _cosJitterMs?: number; 
  public get cosJitterMs() {
    return this.getNumberAttribute('cos_jitter_ms');
  }
  public set cosJitterMs(value: number) {
    this._cosJitterMs = value;
  }
  public resetCosJitterMs() {
    this._cosJitterMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosJitterMsInput() {
    return this._cosJitterMs;
  }

  // cos_last_resort - computed: true, optional: true, required: false
  private _cosLastResort?: boolean | cdktf.IResolvable; 
  public get cosLastResort() {
    return this.getBooleanAttribute('cos_last_resort');
  }
  public set cosLastResort(value: boolean | cdktf.IResolvable) {
    this._cosLastResort = value;
  }
  public resetCosLastResort() {
    this._cosLastResort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosLastResortInput() {
    return this._cosLastResort;
  }

  // cos_latency_ms - computed: true, optional: true, required: false
  private _cosLatencyMs?: number; 
  public get cosLatencyMs() {
    return this.getNumberAttribute('cos_latency_ms');
  }
  public set cosLatencyMs(value: number) {
    this._cosLatencyMs = value;
  }
  public resetCosLatencyMs() {
    this._cosLatencyMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosLatencyMsInput() {
    return this._cosLatencyMs;
  }

  // cos_llq - computed: true, optional: true, required: false
  private _cosLlq?: boolean | cdktf.IResolvable; 
  public get cosLlq() {
    return this.getBooleanAttribute('cos_llq');
  }
  public set cosLlq(value: boolean | cdktf.IResolvable) {
    this._cosLlq = value;
  }
  public resetCosLlq() {
    this._cosLlq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosLlqInput() {
    return this._cosLlq;
  }

  // cos_loss_percent - computed: true, optional: true, required: false
  private _cosLossPercent?: number; 
  public get cosLossPercent() {
    return this.getNumberAttribute('cos_loss_percent');
  }
  public set cosLossPercent(value: number) {
    this._cosLossPercent = value;
  }
  public resetCosLossPercent() {
    this._cosLossPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosLossPercentInput() {
    return this._cosLossPercent;
  }

  // cos_min_guarantee_bw_percent - computed: true, optional: true, required: false
  private _cosMinGuaranteeBwPercent?: number; 
  public get cosMinGuaranteeBwPercent() {
    return this.getNumberAttribute('cos_min_guarantee_bw_percent');
  }
  public set cosMinGuaranteeBwPercent(value: number) {
    this._cosMinGuaranteeBwPercent = value;
  }
  public resetCosMinGuaranteeBwPercent() {
    this._cosMinGuaranteeBwPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosMinGuaranteeBwPercentInput() {
    return this._cosMinGuaranteeBwPercent;
  }

  // cos_priority - computed: true, optional: true, required: false
  private _cosPriority?: string; 
  public get cosPriority() {
    return this.getStringAttribute('cos_priority');
  }
  public set cosPriority(value: string) {
    this._cosPriority = value;
  }
  public resetCosPriority() {
    this._cosPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosPriorityInput() {
    return this._cosPriority;
  }

  // cos_traffic_class - computed: true, optional: true, required: false
  private _cosTrafficClass?: string; 
  public get cosTrafficClass() {
    return this.getStringAttribute('cos_traffic_class');
  }
  public set cosTrafficClass(value: string) {
    this._cosTrafficClass = value;
  }
  public resetCosTrafficClass() {
    this._cosTrafficClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosTrafficClassInput() {
    return this._cosTrafficClass;
  }
}

export class PolicyConfigPcfgCosTableList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgCosTable[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgCosTableOutputReference {
    return new PolicyConfigPcfgCosTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgFirewallPcfgFwLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_allow_log_enabled Policy#pcfg_fw_allow_log_enabled}
  */
  readonly pcfgFwAllowLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_deny_log_enabled Policy#pcfg_fw_deny_log_enabled}
  */
  readonly pcfgFwDenyLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_log_enabled Policy#pcfg_fw_log_enabled}
  */
  readonly pcfgFwLogEnabled?: boolean | cdktf.IResolvable;
}

export function policyConfigPcfgFirewallPcfgFwLoggingToTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwLoggingOutputReference | PolicyConfigPcfgFirewallPcfgFwLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_fw_allow_log_enabled: cdktf.booleanToTerraform(struct!.pcfgFwAllowLogEnabled),
    pcfg_fw_deny_log_enabled: cdktf.booleanToTerraform(struct!.pcfgFwDenyLogEnabled),
    pcfg_fw_log_enabled: cdktf.booleanToTerraform(struct!.pcfgFwLogEnabled),
  }
}


export function policyConfigPcfgFirewallPcfgFwLoggingToHclTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwLoggingOutputReference | PolicyConfigPcfgFirewallPcfgFwLogging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_fw_allow_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgFwAllowLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_fw_deny_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgFwDenyLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_fw_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgFwLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgFirewallPcfgFwLoggingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgFirewallPcfgFwLogging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgFwAllowLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwAllowLogEnabled = this._pcfgFwAllowLogEnabled;
    }
    if (this._pcfgFwDenyLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwDenyLogEnabled = this._pcfgFwDenyLogEnabled;
    }
    if (this._pcfgFwLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwLogEnabled = this._pcfgFwLogEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgFirewallPcfgFwLogging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgFwAllowLogEnabled = undefined;
      this._pcfgFwDenyLogEnabled = undefined;
      this._pcfgFwLogEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgFwAllowLogEnabled = value.pcfgFwAllowLogEnabled;
      this._pcfgFwDenyLogEnabled = value.pcfgFwDenyLogEnabled;
      this._pcfgFwLogEnabled = value.pcfgFwLogEnabled;
    }
  }

  // pcfg_fw_allow_log_enabled - computed: true, optional: true, required: false
  private _pcfgFwAllowLogEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgFwAllowLogEnabled() {
    return this.getBooleanAttribute('pcfg_fw_allow_log_enabled');
  }
  public set pcfgFwAllowLogEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgFwAllowLogEnabled = value;
  }
  public resetPcfgFwAllowLogEnabled() {
    this._pcfgFwAllowLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwAllowLogEnabledInput() {
    return this._pcfgFwAllowLogEnabled;
  }

  // pcfg_fw_deny_log_enabled - computed: true, optional: true, required: false
  private _pcfgFwDenyLogEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgFwDenyLogEnabled() {
    return this.getBooleanAttribute('pcfg_fw_deny_log_enabled');
  }
  public set pcfgFwDenyLogEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgFwDenyLogEnabled = value;
  }
  public resetPcfgFwDenyLogEnabled() {
    this._pcfgFwDenyLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwDenyLogEnabledInput() {
    return this._pcfgFwDenyLogEnabled;
  }

  // pcfg_fw_log_enabled - computed: true, optional: true, required: false
  private _pcfgFwLogEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgFwLogEnabled() {
    return this.getBooleanAttribute('pcfg_fw_log_enabled');
  }
  public set pcfgFwLogEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgFwLogEnabled = value;
  }
  public resetPcfgFwLogEnabled() {
    this._pcfgFwLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwLogEnabledInput() {
    return this._pcfgFwLogEnabled;
  }
}
export interface PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#allow_or_deny Policy#allow_or_deny}
  */
  readonly allowOrDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#logging Policy#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
}

export function policyConfigPcfgFirewallPcfgFwPoliciesFwActionToTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwActionOutputReference | PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_or_deny: cdktf.stringToTerraform(struct!.allowOrDeny),
    logging: cdktf.booleanToTerraform(struct!.logging),
  }
}


export function policyConfigPcfgFirewallPcfgFwPoliciesFwActionToHclTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwActionOutputReference | PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_or_deny: {
      value: cdktf.stringToHclTerraform(struct!.allowOrDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgFirewallPcfgFwPoliciesFwActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOrDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrDeny = this._allowOrDeny;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowOrDeny = undefined;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowOrDeny = value.allowOrDeny;
      this._logging = value.logging;
    }
  }

  // allow_or_deny - computed: true, optional: true, required: false
  private _allowOrDeny?: string; 
  public get allowOrDeny() {
    return this.getStringAttribute('allow_or_deny');
  }
  public set allowOrDeny(value: string) {
    this._allowOrDeny = value;
  }
  public resetAllowOrDeny() {
    this._allowOrDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOrDenyInput() {
    return this._allowOrDeny;
  }

  // logging - computed: true, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_app_id Policy#mtch_app_id}
  */
  readonly mtchAppId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_internet Policy#mtch_dest_internet}
  */
  readonly mtchDestInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_ip Policy#mtch_dest_ip}
  */
  readonly mtchDestIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_port Policy#mtch_dest_port}
  */
  readonly mtchDestPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_zone Policy#mtch_dest_zone}
  */
  readonly mtchDestZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dst_vlan Policy#mtch_dst_vlan}
  */
  readonly mtchDstVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_l4_protocol Policy#mtch_l4_protocol}
  */
  readonly mtchL4Protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_ip Policy#mtch_src_ip}
  */
  readonly mtchSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_mac Policy#mtch_src_mac}
  */
  readonly mtchSrcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_port Policy#mtch_src_port}
  */
  readonly mtchSrcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_vlan Policy#mtch_src_vlan}
  */
  readonly mtchSrcVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_zone Policy#mtch_src_zone}
  */
  readonly mtchSrcZone?: string;
}

export function policyConfigPcfgFirewallPcfgFwPoliciesFwMatchToTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatchOutputReference | PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtch_app_id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.mtchAppId),
    mtch_dest_internet: cdktf.booleanToTerraform(struct!.mtchDestInternet),
    mtch_dest_ip: cdktf.stringToTerraform(struct!.mtchDestIp),
    mtch_dest_port: cdktf.stringToTerraform(struct!.mtchDestPort),
    mtch_dest_zone: cdktf.stringToTerraform(struct!.mtchDestZone),
    mtch_dst_vlan: cdktf.numberToTerraform(struct!.mtchDstVlan),
    mtch_l4_protocol: cdktf.stringToTerraform(struct!.mtchL4Protocol),
    mtch_src_ip: cdktf.stringToTerraform(struct!.mtchSrcIp),
    mtch_src_mac: cdktf.stringToTerraform(struct!.mtchSrcMac),
    mtch_src_port: cdktf.stringToTerraform(struct!.mtchSrcPort),
    mtch_src_vlan: cdktf.numberToTerraform(struct!.mtchSrcVlan),
    mtch_src_zone: cdktf.stringToTerraform(struct!.mtchSrcZone),
  }
}


export function policyConfigPcfgFirewallPcfgFwPoliciesFwMatchToHclTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatchOutputReference | PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtch_app_id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.mtchAppId),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    mtch_dest_internet: {
      value: cdktf.booleanToHclTerraform(struct!.mtchDestInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtch_dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dest_port: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dest_zone: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dst_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mtchDstVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtch_l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.mtchL4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_mac: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_port: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mtchSrcVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtch_src_zone: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtchAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchAppId = this._mtchAppId;
    }
    if (this._mtchDestInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestInternet = this._mtchDestInternet;
    }
    if (this._mtchDestIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestIp = this._mtchDestIp;
    }
    if (this._mtchDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestPort = this._mtchDestPort;
    }
    if (this._mtchDestZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestZone = this._mtchDestZone;
    }
    if (this._mtchDstVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDstVlan = this._mtchDstVlan;
    }
    if (this._mtchL4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchL4Protocol = this._mtchL4Protocol;
    }
    if (this._mtchSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcIp = this._mtchSrcIp;
    }
    if (this._mtchSrcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcMac = this._mtchSrcMac;
    }
    if (this._mtchSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcPort = this._mtchSrcPort;
    }
    if (this._mtchSrcVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcVlan = this._mtchSrcVlan;
    }
    if (this._mtchSrcZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcZone = this._mtchSrcZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mtchAppId = undefined;
      this._mtchDestInternet = undefined;
      this._mtchDestIp = undefined;
      this._mtchDestPort = undefined;
      this._mtchDestZone = undefined;
      this._mtchDstVlan = undefined;
      this._mtchL4Protocol = undefined;
      this._mtchSrcIp = undefined;
      this._mtchSrcMac = undefined;
      this._mtchSrcPort = undefined;
      this._mtchSrcVlan = undefined;
      this._mtchSrcZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mtchAppId = value.mtchAppId;
      this._mtchDestInternet = value.mtchDestInternet;
      this._mtchDestIp = value.mtchDestIp;
      this._mtchDestPort = value.mtchDestPort;
      this._mtchDestZone = value.mtchDestZone;
      this._mtchDstVlan = value.mtchDstVlan;
      this._mtchL4Protocol = value.mtchL4Protocol;
      this._mtchSrcIp = value.mtchSrcIp;
      this._mtchSrcMac = value.mtchSrcMac;
      this._mtchSrcPort = value.mtchSrcPort;
      this._mtchSrcVlan = value.mtchSrcVlan;
      this._mtchSrcZone = value.mtchSrcZone;
    }
  }

  // mtch_app_id - computed: true, optional: true, required: false
  private _mtchAppId?: number[]; 
  public get mtchAppId() {
    return this.getNumberListAttribute('mtch_app_id');
  }
  public set mtchAppId(value: number[]) {
    this._mtchAppId = value;
  }
  public resetMtchAppId() {
    this._mtchAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchAppIdInput() {
    return this._mtchAppId;
  }

  // mtch_dest_internet - computed: true, optional: true, required: false
  private _mtchDestInternet?: boolean | cdktf.IResolvable; 
  public get mtchDestInternet() {
    return this.getBooleanAttribute('mtch_dest_internet');
  }
  public set mtchDestInternet(value: boolean | cdktf.IResolvable) {
    this._mtchDestInternet = value;
  }
  public resetMtchDestInternet() {
    this._mtchDestInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestInternetInput() {
    return this._mtchDestInternet;
  }

  // mtch_dest_ip - computed: true, optional: true, required: false
  private _mtchDestIp?: string; 
  public get mtchDestIp() {
    return this.getStringAttribute('mtch_dest_ip');
  }
  public set mtchDestIp(value: string) {
    this._mtchDestIp = value;
  }
  public resetMtchDestIp() {
    this._mtchDestIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestIpInput() {
    return this._mtchDestIp;
  }

  // mtch_dest_port - computed: true, optional: true, required: false
  private _mtchDestPort?: string; 
  public get mtchDestPort() {
    return this.getStringAttribute('mtch_dest_port');
  }
  public set mtchDestPort(value: string) {
    this._mtchDestPort = value;
  }
  public resetMtchDestPort() {
    this._mtchDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestPortInput() {
    return this._mtchDestPort;
  }

  // mtch_dest_zone - computed: true, optional: true, required: false
  private _mtchDestZone?: string; 
  public get mtchDestZone() {
    return this.getStringAttribute('mtch_dest_zone');
  }
  public set mtchDestZone(value: string) {
    this._mtchDestZone = value;
  }
  public resetMtchDestZone() {
    this._mtchDestZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestZoneInput() {
    return this._mtchDestZone;
  }

  // mtch_dst_vlan - computed: true, optional: true, required: false
  private _mtchDstVlan?: number; 
  public get mtchDstVlan() {
    return this.getNumberAttribute('mtch_dst_vlan');
  }
  public set mtchDstVlan(value: number) {
    this._mtchDstVlan = value;
  }
  public resetMtchDstVlan() {
    this._mtchDstVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDstVlanInput() {
    return this._mtchDstVlan;
  }

  // mtch_l4_protocol - computed: true, optional: true, required: false
  private _mtchL4Protocol?: string; 
  public get mtchL4Protocol() {
    return this.getStringAttribute('mtch_l4_protocol');
  }
  public set mtchL4Protocol(value: string) {
    this._mtchL4Protocol = value;
  }
  public resetMtchL4Protocol() {
    this._mtchL4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchL4ProtocolInput() {
    return this._mtchL4Protocol;
  }

  // mtch_src_ip - computed: true, optional: true, required: false
  private _mtchSrcIp?: string; 
  public get mtchSrcIp() {
    return this.getStringAttribute('mtch_src_ip');
  }
  public set mtchSrcIp(value: string) {
    this._mtchSrcIp = value;
  }
  public resetMtchSrcIp() {
    this._mtchSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcIpInput() {
    return this._mtchSrcIp;
  }

  // mtch_src_mac - computed: true, optional: true, required: false
  private _mtchSrcMac?: string; 
  public get mtchSrcMac() {
    return this.getStringAttribute('mtch_src_mac');
  }
  public set mtchSrcMac(value: string) {
    this._mtchSrcMac = value;
  }
  public resetMtchSrcMac() {
    this._mtchSrcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcMacInput() {
    return this._mtchSrcMac;
  }

  // mtch_src_port - computed: true, optional: true, required: false
  private _mtchSrcPort?: string; 
  public get mtchSrcPort() {
    return this.getStringAttribute('mtch_src_port');
  }
  public set mtchSrcPort(value: string) {
    this._mtchSrcPort = value;
  }
  public resetMtchSrcPort() {
    this._mtchSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcPortInput() {
    return this._mtchSrcPort;
  }

  // mtch_src_vlan - computed: true, optional: true, required: false
  private _mtchSrcVlan?: number; 
  public get mtchSrcVlan() {
    return this.getNumberAttribute('mtch_src_vlan');
  }
  public set mtchSrcVlan(value: number) {
    this._mtchSrcVlan = value;
  }
  public resetMtchSrcVlan() {
    this._mtchSrcVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcVlanInput() {
    return this._mtchSrcVlan;
  }

  // mtch_src_zone - computed: true, optional: true, required: false
  private _mtchSrcZone?: string; 
  public get mtchSrcZone() {
    return this.getStringAttribute('mtch_src_zone');
  }
  public set mtchSrcZone(value: string) {
    this._mtchSrcZone = value;
  }
  public resetMtchSrcZone() {
    this._mtchSrcZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcZoneInput() {
    return this._mtchSrcZone;
  }
}
export interface PolicyConfigPcfgFirewallPcfgFwPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#fw_name Policy#fw_name}
  */
  readonly fwName?: string;
  /**
  * fw_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#fw_action Policy#fw_action}
  */
  readonly fwAction?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction;
  /**
  * fw_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#fw_match Policy#fw_match}
  */
  readonly fwMatch?: PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch;
}

export function policyConfigPcfgFirewallPcfgFwPoliciesToTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fw_name: cdktf.stringToTerraform(struct!.fwName),
    fw_action: policyConfigPcfgFirewallPcfgFwPoliciesFwActionToTerraform(struct!.fwAction),
    fw_match: policyConfigPcfgFirewallPcfgFwPoliciesFwMatchToTerraform(struct!.fwMatch),
  }
}


export function policyConfigPcfgFirewallPcfgFwPoliciesToHclTerraform(struct?: PolicyConfigPcfgFirewallPcfgFwPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fw_name: {
      value: cdktf.stringToHclTerraform(struct!.fwName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fw_action: {
      value: policyConfigPcfgFirewallPcfgFwPoliciesFwActionToHclTerraform(struct!.fwAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgFirewallPcfgFwPoliciesFwActionList",
    },
    fw_match: {
      value: policyConfigPcfgFirewallPcfgFwPoliciesFwMatchToHclTerraform(struct!.fwMatch),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgFirewallPcfgFwPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgFirewallPcfgFwPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fwName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwName = this._fwName;
    }
    if (this._fwAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwAction = this._fwAction?.internalValue;
    }
    if (this._fwMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwMatch = this._fwMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgFirewallPcfgFwPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fwName = undefined;
      this._fwAction.internalValue = undefined;
      this._fwMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fwName = value.fwName;
      this._fwAction.internalValue = value.fwAction;
      this._fwMatch.internalValue = value.fwMatch;
    }
  }

  // fw_name - computed: true, optional: true, required: false
  private _fwName?: string; 
  public get fwName() {
    return this.getStringAttribute('fw_name');
  }
  public set fwName(value: string) {
    this._fwName = value;
  }
  public resetFwName() {
    this._fwName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwNameInput() {
    return this._fwName;
  }

  // fw_action - computed: false, optional: true, required: false
  private _fwAction = new PolicyConfigPcfgFirewallPcfgFwPoliciesFwActionOutputReference(this, "fw_action");
  public get fwAction() {
    return this._fwAction;
  }
  public putFwAction(value: PolicyConfigPcfgFirewallPcfgFwPoliciesFwAction) {
    this._fwAction.internalValue = value;
  }
  public resetFwAction() {
    this._fwAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwActionInput() {
    return this._fwAction.internalValue;
  }

  // fw_match - computed: false, optional: true, required: false
  private _fwMatch = new PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatchOutputReference(this, "fw_match");
  public get fwMatch() {
    return this._fwMatch;
  }
  public putFwMatch(value: PolicyConfigPcfgFirewallPcfgFwPoliciesFwMatch) {
    this._fwMatch.internalValue = value;
  }
  public resetFwMatch() {
    this._fwMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwMatchInput() {
    return this._fwMatch.internalValue;
  }
}

export class PolicyConfigPcfgFirewallPcfgFwPoliciesList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgFirewallPcfgFwPolicies[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgFirewallPcfgFwPoliciesOutputReference {
    return new PolicyConfigPcfgFirewallPcfgFwPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_firewall_enabled Policy#pcfg_firewall_enabled}
  */
  readonly pcfgFirewallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_stateful_enabled Policy#pcfg_fw_stateful_enabled}
  */
  readonly pcfgFwStatefulEnabled?: boolean | cdktf.IResolvable;
  /**
  * pcfg_fw_logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_logging Policy#pcfg_fw_logging}
  */
  readonly pcfgFwLogging?: PolicyConfigPcfgFirewallPcfgFwLogging;
  /**
  * pcfg_fw_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_fw_policies Policy#pcfg_fw_policies}
  */
  readonly pcfgFwPolicies?: PolicyConfigPcfgFirewallPcfgFwPolicies[] | cdktf.IResolvable;
}

export function policyConfigPcfgFirewallToTerraform(struct?: PolicyConfigPcfgFirewallOutputReference | PolicyConfigPcfgFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_firewall_enabled: cdktf.booleanToTerraform(struct!.pcfgFirewallEnabled),
    pcfg_fw_stateful_enabled: cdktf.booleanToTerraform(struct!.pcfgFwStatefulEnabled),
    pcfg_fw_logging: policyConfigPcfgFirewallPcfgFwLoggingToTerraform(struct!.pcfgFwLogging),
    pcfg_fw_policies: cdktf.listMapper(policyConfigPcfgFirewallPcfgFwPoliciesToTerraform, true)(struct!.pcfgFwPolicies),
  }
}


export function policyConfigPcfgFirewallToHclTerraform(struct?: PolicyConfigPcfgFirewallOutputReference | PolicyConfigPcfgFirewall): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_firewall_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgFirewallEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_fw_stateful_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgFwStatefulEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_fw_logging: {
      value: policyConfigPcfgFirewallPcfgFwLoggingToHclTerraform(struct!.pcfgFwLogging),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgFirewallPcfgFwLoggingList",
    },
    pcfg_fw_policies: {
      value: cdktf.listMapperHcl(policyConfigPcfgFirewallPcfgFwPoliciesToHclTerraform, true)(struct!.pcfgFwPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgFirewallPcfgFwPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgFirewallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgFirewall | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgFirewallEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFirewallEnabled = this._pcfgFirewallEnabled;
    }
    if (this._pcfgFwStatefulEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwStatefulEnabled = this._pcfgFwStatefulEnabled;
    }
    if (this._pcfgFwLogging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwLogging = this._pcfgFwLogging?.internalValue;
    }
    if (this._pcfgFwPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFwPolicies = this._pcfgFwPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgFirewall | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgFirewallEnabled = undefined;
      this._pcfgFwStatefulEnabled = undefined;
      this._pcfgFwLogging.internalValue = undefined;
      this._pcfgFwPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgFirewallEnabled = value.pcfgFirewallEnabled;
      this._pcfgFwStatefulEnabled = value.pcfgFwStatefulEnabled;
      this._pcfgFwLogging.internalValue = value.pcfgFwLogging;
      this._pcfgFwPolicies.internalValue = value.pcfgFwPolicies;
    }
  }

  // pcfg_firewall_enabled - computed: true, optional: true, required: false
  private _pcfgFirewallEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgFirewallEnabled() {
    return this.getBooleanAttribute('pcfg_firewall_enabled');
  }
  public set pcfgFirewallEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgFirewallEnabled = value;
  }
  public resetPcfgFirewallEnabled() {
    this._pcfgFirewallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFirewallEnabledInput() {
    return this._pcfgFirewallEnabled;
  }

  // pcfg_fw_stateful_enabled - computed: true, optional: true, required: false
  private _pcfgFwStatefulEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgFwStatefulEnabled() {
    return this.getBooleanAttribute('pcfg_fw_stateful_enabled');
  }
  public set pcfgFwStatefulEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgFwStatefulEnabled = value;
  }
  public resetPcfgFwStatefulEnabled() {
    this._pcfgFwStatefulEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwStatefulEnabledInput() {
    return this._pcfgFwStatefulEnabled;
  }

  // pcfg_fw_logging - computed: false, optional: true, required: false
  private _pcfgFwLogging = new PolicyConfigPcfgFirewallPcfgFwLoggingOutputReference(this, "pcfg_fw_logging");
  public get pcfgFwLogging() {
    return this._pcfgFwLogging;
  }
  public putPcfgFwLogging(value: PolicyConfigPcfgFirewallPcfgFwLogging) {
    this._pcfgFwLogging.internalValue = value;
  }
  public resetPcfgFwLogging() {
    this._pcfgFwLogging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwLoggingInput() {
    return this._pcfgFwLogging.internalValue;
  }

  // pcfg_fw_policies - computed: false, optional: true, required: false
  private _pcfgFwPolicies = new PolicyConfigPcfgFirewallPcfgFwPoliciesList(this, "pcfg_fw_policies", false);
  public get pcfgFwPolicies() {
    return this._pcfgFwPolicies;
  }
  public putPcfgFwPolicies(value: PolicyConfigPcfgFirewallPcfgFwPolicies[] | cdktf.IResolvable) {
    this._pcfgFwPolicies.internalValue = value;
  }
  public resetPcfgFwPolicies() {
    this._pcfgFwPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFwPoliciesInput() {
    return this._pcfgFwPolicies.internalValue;
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#nf_ip Policy#nf_ip}
  */
  readonly nfIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#nf_port Policy#nf_port}
  */
  readonly nfPort?: number;
}

export function policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nf_ip: cdktf.stringToTerraform(struct!.nfIp),
    nf_port: cdktf.numberToTerraform(struct!.nfPort),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nf_ip: {
      value: cdktf.stringToHclTerraform(struct!.nfIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nf_port: {
      value: cdktf.numberToHclTerraform(struct!.nfPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfIp = this._nfIp;
    }
    if (this._nfPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfPort = this._nfPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nfIp = undefined;
      this._nfPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nfIp = value.nfIp;
      this._nfPort = value.nfPort;
    }
  }

  // nf_ip - computed: true, optional: true, required: false
  private _nfIp?: string; 
  public get nfIp() {
    return this.getStringAttribute('nf_ip');
  }
  public set nfIp(value: string) {
    this._nfIp = value;
  }
  public resetNfIp() {
    this._nfIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfIpInput() {
    return this._nfIp;
  }

  // nf_port - computed: true, optional: true, required: false
  private _nfPort?: number; 
  public get nfPort() {
    return this.getNumberAttribute('nf_port');
  }
  public set nfPort(value: number) {
    this._nfPort = value;
  }
  public resetNfPort() {
    this._nfPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfPortInput() {
    return this._nfPort;
  }
}

export class PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsOutputReference {
    return new PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#nf_export_interval Policy#nf_export_interval}
  */
  readonly nfExportInterval?: number;
  /**
  * nf_collector_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#nf_collector_settings Policy#nf_collector_settings}
  */
  readonly nfCollectorSettings?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings[] | cdktf.IResolvable;
}

export function policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsOutputReference | PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nf_export_interval: cdktf.numberToTerraform(struct!.nfExportInterval),
    nf_collector_settings: cdktf.listMapper(policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsToTerraform, true)(struct!.nfCollectorSettings),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsOutputReference | PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nf_export_interval: {
      value: cdktf.numberToHclTerraform(struct!.nfExportInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nf_collector_settings: {
      value: cdktf.listMapperHcl(policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsToHclTerraform, true)(struct!.nfCollectorSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfExportInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfExportInterval = this._nfExportInterval;
    }
    if (this._nfCollectorSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfCollectorSettings = this._nfCollectorSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfExportInterval = undefined;
      this._nfCollectorSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfExportInterval = value.nfExportInterval;
      this._nfCollectorSettings.internalValue = value.nfCollectorSettings;
    }
  }

  // nf_export_interval - computed: true, optional: true, required: false
  private _nfExportInterval?: number; 
  public get nfExportInterval() {
    return this.getNumberAttribute('nf_export_interval');
  }
  public set nfExportInterval(value: number) {
    this._nfExportInterval = value;
  }
  public resetNfExportInterval() {
    this._nfExportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfExportIntervalInput() {
    return this._nfExportInterval;
  }

  // nf_collector_settings - computed: false, optional: true, required: false
  private _nfCollectorSettings = new PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettingsList(this, "nf_collector_settings", false);
  public get nfCollectorSettings() {
    return this._nfCollectorSettings;
  }
  public putNfCollectorSettings(value: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsNfCollectorSettings[] | cdktf.IResolvable) {
    this._nfCollectorSettings.internalValue = value;
  }
  public resetNfCollectorSettings() {
    this._nfCollectorSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfCollectorSettingsInput() {
    return this._nfCollectorSettings.internalValue;
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgNetflow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_nf_enabled Policy#pcfg_nf_enabled}
  */
  readonly pcfgNfEnabled?: boolean | cdktf.IResolvable;
  /**
  * pcfg_nf_exporter_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_nf_exporter_settings Policy#pcfg_nf_exporter_settings}
  */
  readonly pcfgNfExporterSettings?: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings;
}

export function policyConfigPcfgGeneralSettingsPcfgNetflowToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowOutputReference | PolicyConfigPcfgGeneralSettingsPcfgNetflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_nf_enabled: cdktf.booleanToTerraform(struct!.pcfgNfEnabled),
    pcfg_nf_exporter_settings: policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsToTerraform(struct!.pcfgNfExporterSettings),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgNetflowToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgNetflowOutputReference | PolicyConfigPcfgGeneralSettingsPcfgNetflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_nf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgNfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_nf_exporter_settings: {
      value: policyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsToHclTerraform(struct!.pcfgNfExporterSettings),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsPcfgNetflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgNetflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgNfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgNfEnabled = this._pcfgNfEnabled;
    }
    if (this._pcfgNfExporterSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgNfExporterSettings = this._pcfgNfExporterSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgNetflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgNfEnabled = undefined;
      this._pcfgNfExporterSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgNfEnabled = value.pcfgNfEnabled;
      this._pcfgNfExporterSettings.internalValue = value.pcfgNfExporterSettings;
    }
  }

  // pcfg_nf_enabled - computed: true, optional: true, required: false
  private _pcfgNfEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgNfEnabled() {
    return this.getBooleanAttribute('pcfg_nf_enabled');
  }
  public set pcfgNfEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgNfEnabled = value;
  }
  public resetPcfgNfEnabled() {
    this._pcfgNfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgNfEnabledInput() {
    return this._pcfgNfEnabled;
  }

  // pcfg_nf_exporter_settings - computed: false, optional: true, required: false
  private _pcfgNfExporterSettings = new PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettingsOutputReference(this, "pcfg_nf_exporter_settings");
  public get pcfgNfExporterSettings() {
    return this._pcfgNfExporterSettings;
  }
  public putPcfgNfExporterSettings(value: PolicyConfigPcfgGeneralSettingsPcfgNetflowPcfgNfExporterSettings) {
    this._pcfgNfExporterSettings.internalValue = value;
  }
  public resetPcfgNfExporterSettings() {
    this._pcfgNfExporterSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgNfExporterSettingsInput() {
    return this._pcfgNfExporterSettings.internalValue;
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgSnmp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmp_allowed_ip Policy#snmp_allowed_ip}
  */
  readonly snmpAllowedIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmp_community Policy#snmp_community}
  */
  readonly snmpCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmp_version Policy#snmp_version}
  */
  readonly snmpVersion?: string;
}

export function policyConfigPcfgGeneralSettingsPcfgSnmpToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSnmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snmp_allowed_ip: cdktf.stringToTerraform(struct!.snmpAllowedIp),
    snmp_community: cdktf.stringToTerraform(struct!.snmpCommunity),
    snmp_version: cdktf.stringToTerraform(struct!.snmpVersion),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgSnmpToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSnmp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snmp_allowed_ip: {
      value: cdktf.stringToHclTerraform(struct!.snmpAllowedIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_community: {
      value: cdktf.stringToHclTerraform(struct!.snmpCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp_version: {
      value: cdktf.stringToHclTerraform(struct!.snmpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsPcfgSnmpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgSnmp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snmpAllowedIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpAllowedIp = this._snmpAllowedIp;
    }
    if (this._snmpCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCommunity = this._snmpCommunity;
    }
    if (this._snmpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpVersion = this._snmpVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgSnmp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snmpAllowedIp = undefined;
      this._snmpCommunity = undefined;
      this._snmpVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snmpAllowedIp = value.snmpAllowedIp;
      this._snmpCommunity = value.snmpCommunity;
      this._snmpVersion = value.snmpVersion;
    }
  }

  // snmp_allowed_ip - computed: true, optional: true, required: false
  private _snmpAllowedIp?: string; 
  public get snmpAllowedIp() {
    return this.getStringAttribute('snmp_allowed_ip');
  }
  public set snmpAllowedIp(value: string) {
    this._snmpAllowedIp = value;
  }
  public resetSnmpAllowedIp() {
    this._snmpAllowedIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAllowedIpInput() {
    return this._snmpAllowedIp;
  }

  // snmp_community - computed: true, optional: true, required: false
  private _snmpCommunity?: string; 
  public get snmpCommunity() {
    return this.getStringAttribute('snmp_community');
  }
  public set snmpCommunity(value: string) {
    this._snmpCommunity = value;
  }
  public resetSnmpCommunity() {
    this._snmpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCommunityInput() {
    return this._snmpCommunity;
  }

  // snmp_version - computed: true, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }
}

export class PolicyConfigPcfgGeneralSettingsPcfgSnmpList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgGeneralSettingsPcfgSnmp[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgGeneralSettingsPcfgSnmpOutputReference {
    return new PolicyConfigPcfgGeneralSettingsPcfgSnmpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmpt_community Policy#snmpt_community}
  */
  readonly snmptCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmpt_port Policy#snmpt_port}
  */
  readonly snmptPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#snmpt_server Policy#snmpt_server}
  */
  readonly snmptServer?: string;
}

export function policyConfigPcfgGeneralSettingsPcfgSnmpTrapsToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snmpt_community: cdktf.stringToTerraform(struct!.snmptCommunity),
    snmpt_port: cdktf.numberToTerraform(struct!.snmptPort),
    snmpt_server: cdktf.stringToTerraform(struct!.snmptServer),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgSnmpTrapsToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snmpt_community: {
      value: cdktf.stringToHclTerraform(struct!.snmptCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmpt_port: {
      value: cdktf.numberToHclTerraform(struct!.snmptPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmpt_server: {
      value: cdktf.stringToHclTerraform(struct!.snmptServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snmptCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmptCommunity = this._snmptCommunity;
    }
    if (this._snmptPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmptPort = this._snmptPort;
    }
    if (this._snmptServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmptServer = this._snmptServer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._snmptCommunity = undefined;
      this._snmptPort = undefined;
      this._snmptServer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._snmptCommunity = value.snmptCommunity;
      this._snmptPort = value.snmptPort;
      this._snmptServer = value.snmptServer;
    }
  }

  // snmpt_community - computed: true, optional: true, required: false
  private _snmptCommunity?: string; 
  public get snmptCommunity() {
    return this.getStringAttribute('snmpt_community');
  }
  public set snmptCommunity(value: string) {
    this._snmptCommunity = value;
  }
  public resetSnmptCommunity() {
    this._snmptCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptCommunityInput() {
    return this._snmptCommunity;
  }

  // snmpt_port - computed: true, optional: true, required: false
  private _snmptPort?: number; 
  public get snmptPort() {
    return this.getNumberAttribute('snmpt_port');
  }
  public set snmptPort(value: number) {
    this._snmptPort = value;
  }
  public resetSnmptPort() {
    this._snmptPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptPortInput() {
    return this._snmptPort;
  }

  // snmpt_server - computed: true, optional: true, required: false
  private _snmptServer?: string; 
  public get snmptServer() {
    return this.getStringAttribute('snmpt_server');
  }
  public set snmptServer(value: string) {
    this._snmptServer = value;
  }
  public resetSnmptServer() {
    this._snmptServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptServerInput() {
    return this._snmptServer;
  }
}

export class PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsOutputReference {
    return new PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgGeneralSettingsPcfgSyslogServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#applications Policy#applications}
  */
  readonly applications?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#facility Policy#facility}
  */
  readonly facility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#format Policy#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#port Policy#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#protocol Policy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#server_ip Policy#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#source_interface Policy#source_interface}
  */
  readonly sourceInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#tag Policy#tag}
  */
  readonly tag?: string;
}

export function policyConfigPcfgGeneralSettingsPcfgSyslogServersToTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    facility: cdktf.stringToTerraform(struct!.facility),
    format: cdktf.stringToTerraform(struct!.format),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    source_interface: cdktf.stringToTerraform(struct!.sourceInterface),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyConfigPcfgGeneralSettingsPcfgSyslogServersToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsPcfgSyslogServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    facility: {
      value: cdktf.stringToHclTerraform(struct!.facility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
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
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_interface: {
      value: cdktf.stringToHclTerraform(struct!.sourceInterface),
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

export class PolicyConfigPcfgGeneralSettingsPcfgSyslogServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgGeneralSettingsPcfgSyslogServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._facility !== undefined) {
      hasAnyValues = true;
      internalValueResult.facility = this._facility;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._sourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInterface = this._sourceInterface;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettingsPcfgSyslogServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._facility = undefined;
      this._format = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._serverIp = undefined;
      this._sourceInterface = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._facility = value.facility;
      this._format = value.format;
      this._port = value.port;
      this._protocol = value.protocol;
      this._serverIp = value.serverIp;
      this._sourceInterface = value.sourceInterface;
      this._tag = value.tag;
    }
  }

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // facility - computed: true, optional: true, required: false
  private _facility?: string; 
  public get facility() {
    return this.getStringAttribute('facility');
  }
  public set facility(value: string) {
    this._facility = value;
  }
  public resetFacility() {
    this._facility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityInput() {
    return this._facility;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // port - computed: true, optional: true, required: false
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

  // protocol - computed: true, optional: true, required: false
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

  // server_ip - computed: true, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // source_interface - computed: true, optional: true, required: false
  private _sourceInterface?: string; 
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }
  public set sourceInterface(value: string) {
    this._sourceInterface = value;
  }
  public resetSourceInterface() {
    this._sourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInterfaceInput() {
    return this._sourceInterface;
  }

  // tag - computed: true, optional: true, required: false
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

export class PolicyConfigPcfgGeneralSettingsPcfgSyslogServersList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgGeneralSettingsPcfgSyslogServers[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgGeneralSettingsPcfgSyslogServersOutputReference {
    return new PolicyConfigPcfgGeneralSettingsPcfgSyslogServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgGeneralSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_syslog_enabled Policy#pcfg_syslog_enabled}
  */
  readonly pcfgSyslogEnabled?: boolean | cdktf.IResolvable;
  /**
  * pcfg_netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_netflow Policy#pcfg_netflow}
  */
  readonly pcfgNetflow?: PolicyConfigPcfgGeneralSettingsPcfgNetflow;
  /**
  * pcfg_snmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_snmp Policy#pcfg_snmp}
  */
  readonly pcfgSnmp?: PolicyConfigPcfgGeneralSettingsPcfgSnmp[] | cdktf.IResolvable;
  /**
  * pcfg_snmp_traps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_snmp_traps Policy#pcfg_snmp_traps}
  */
  readonly pcfgSnmpTraps?: PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps[] | cdktf.IResolvable;
  /**
  * pcfg_syslog_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_syslog_servers Policy#pcfg_syslog_servers}
  */
  readonly pcfgSyslogServers?: PolicyConfigPcfgGeneralSettingsPcfgSyslogServers[] | cdktf.IResolvable;
}

export function policyConfigPcfgGeneralSettingsToTerraform(struct?: PolicyConfigPcfgGeneralSettingsOutputReference | PolicyConfigPcfgGeneralSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_syslog_enabled: cdktf.booleanToTerraform(struct!.pcfgSyslogEnabled),
    pcfg_netflow: policyConfigPcfgGeneralSettingsPcfgNetflowToTerraform(struct!.pcfgNetflow),
    pcfg_snmp: cdktf.listMapper(policyConfigPcfgGeneralSettingsPcfgSnmpToTerraform, true)(struct!.pcfgSnmp),
    pcfg_snmp_traps: cdktf.listMapper(policyConfigPcfgGeneralSettingsPcfgSnmpTrapsToTerraform, true)(struct!.pcfgSnmpTraps),
    pcfg_syslog_servers: cdktf.listMapper(policyConfigPcfgGeneralSettingsPcfgSyslogServersToTerraform, true)(struct!.pcfgSyslogServers),
  }
}


export function policyConfigPcfgGeneralSettingsToHclTerraform(struct?: PolicyConfigPcfgGeneralSettingsOutputReference | PolicyConfigPcfgGeneralSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_syslog_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgSyslogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_netflow: {
      value: policyConfigPcfgGeneralSettingsPcfgNetflowToHclTerraform(struct!.pcfgNetflow),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgNetflowList",
    },
    pcfg_snmp: {
      value: cdktf.listMapperHcl(policyConfigPcfgGeneralSettingsPcfgSnmpToHclTerraform, true)(struct!.pcfgSnmp),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgSnmpList",
    },
    pcfg_snmp_traps: {
      value: cdktf.listMapperHcl(policyConfigPcfgGeneralSettingsPcfgSnmpTrapsToHclTerraform, true)(struct!.pcfgSnmpTraps),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsList",
    },
    pcfg_syslog_servers: {
      value: cdktf.listMapperHcl(policyConfigPcfgGeneralSettingsPcfgSyslogServersToHclTerraform, true)(struct!.pcfgSyslogServers),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgGeneralSettingsPcfgSyslogServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgGeneralSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgGeneralSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgSyslogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSyslogEnabled = this._pcfgSyslogEnabled;
    }
    if (this._pcfgNetflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgNetflow = this._pcfgNetflow?.internalValue;
    }
    if (this._pcfgSnmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSnmp = this._pcfgSnmp?.internalValue;
    }
    if (this._pcfgSnmpTraps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSnmpTraps = this._pcfgSnmpTraps?.internalValue;
    }
    if (this._pcfgSyslogServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSyslogServers = this._pcfgSyslogServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgGeneralSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgSyslogEnabled = undefined;
      this._pcfgNetflow.internalValue = undefined;
      this._pcfgSnmp.internalValue = undefined;
      this._pcfgSnmpTraps.internalValue = undefined;
      this._pcfgSyslogServers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgSyslogEnabled = value.pcfgSyslogEnabled;
      this._pcfgNetflow.internalValue = value.pcfgNetflow;
      this._pcfgSnmp.internalValue = value.pcfgSnmp;
      this._pcfgSnmpTraps.internalValue = value.pcfgSnmpTraps;
      this._pcfgSyslogServers.internalValue = value.pcfgSyslogServers;
    }
  }

  // pcfg_syslog_enabled - computed: true, optional: true, required: false
  private _pcfgSyslogEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgSyslogEnabled() {
    return this.getBooleanAttribute('pcfg_syslog_enabled');
  }
  public set pcfgSyslogEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgSyslogEnabled = value;
  }
  public resetPcfgSyslogEnabled() {
    this._pcfgSyslogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSyslogEnabledInput() {
    return this._pcfgSyslogEnabled;
  }

  // pcfg_netflow - computed: false, optional: true, required: false
  private _pcfgNetflow = new PolicyConfigPcfgGeneralSettingsPcfgNetflowOutputReference(this, "pcfg_netflow");
  public get pcfgNetflow() {
    return this._pcfgNetflow;
  }
  public putPcfgNetflow(value: PolicyConfigPcfgGeneralSettingsPcfgNetflow) {
    this._pcfgNetflow.internalValue = value;
  }
  public resetPcfgNetflow() {
    this._pcfgNetflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgNetflowInput() {
    return this._pcfgNetflow.internalValue;
  }

  // pcfg_snmp - computed: false, optional: true, required: false
  private _pcfgSnmp = new PolicyConfigPcfgGeneralSettingsPcfgSnmpList(this, "pcfg_snmp", false);
  public get pcfgSnmp() {
    return this._pcfgSnmp;
  }
  public putPcfgSnmp(value: PolicyConfigPcfgGeneralSettingsPcfgSnmp[] | cdktf.IResolvable) {
    this._pcfgSnmp.internalValue = value;
  }
  public resetPcfgSnmp() {
    this._pcfgSnmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSnmpInput() {
    return this._pcfgSnmp.internalValue;
  }

  // pcfg_snmp_traps - computed: false, optional: true, required: false
  private _pcfgSnmpTraps = new PolicyConfigPcfgGeneralSettingsPcfgSnmpTrapsList(this, "pcfg_snmp_traps", false);
  public get pcfgSnmpTraps() {
    return this._pcfgSnmpTraps;
  }
  public putPcfgSnmpTraps(value: PolicyConfigPcfgGeneralSettingsPcfgSnmpTraps[] | cdktf.IResolvable) {
    this._pcfgSnmpTraps.internalValue = value;
  }
  public resetPcfgSnmpTraps() {
    this._pcfgSnmpTraps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSnmpTrapsInput() {
    return this._pcfgSnmpTraps.internalValue;
  }

  // pcfg_syslog_servers - computed: false, optional: true, required: false
  private _pcfgSyslogServers = new PolicyConfigPcfgGeneralSettingsPcfgSyslogServersList(this, "pcfg_syslog_servers", false);
  public get pcfgSyslogServers() {
    return this._pcfgSyslogServers;
  }
  public putPcfgSyslogServers(value: PolicyConfigPcfgGeneralSettingsPcfgSyslogServers[] | cdktf.IResolvable) {
    this._pcfgSyslogServers.internalValue = value;
  }
  public resetPcfgSyslogServers() {
    this._pcfgSyslogServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSyslogServersInput() {
    return this._pcfgSyslogServers.internalValue;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionFirewallAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#allow_or_deny Policy#allow_or_deny}
  */
  readonly allowOrDeny?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#logging Policy#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
}

export function policyConfigPcfgQosPoliciesQosActionFirewallActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionFirewallActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionFirewallAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_or_deny: cdktf.stringToTerraform(struct!.allowOrDeny),
    logging: cdktf.booleanToTerraform(struct!.logging),
  }
}


export function policyConfigPcfgQosPoliciesQosActionFirewallActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionFirewallActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionFirewallAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_or_deny: {
      value: cdktf.stringToHclTerraform(struct!.allowOrDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging: {
      value: cdktf.booleanToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionFirewallActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionFirewallAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowOrDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowOrDeny = this._allowOrDeny;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionFirewallAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowOrDeny = undefined;
      this._logging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowOrDeny = value.allowOrDeny;
      this._logging = value.logging;
    }
  }

  // allow_or_deny - computed: true, optional: true, required: false
  private _allowOrDeny?: string; 
  public get allowOrDeny() {
    return this.getStringAttribute('allow_or_deny');
  }
  public set allowOrDeny(value: string) {
    this._allowOrDeny = value;
  }
  public resetAllowOrDeny() {
    this._allowOrDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOrDenyInput() {
    return this._allowOrDeny;
  }

  // logging - computed: true, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_wan Policy#lnks_wan}
  */
  readonly lnksWan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#path Policy#path}
  */
  readonly path?: string;
}

export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lnks_wan: cdktf.stringToTerraform(struct!.lnksWan),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lnks_wan: {
      value: cdktf.stringToHclTerraform(struct!.lnksWan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lnksWan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksWan = this._lnksWan;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lnksWan = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lnksWan = value.lnksWan;
      this._path = value.path;
    }
  }

  // lnks_wan - computed: true, optional: true, required: false
  private _lnksWan?: string; 
  public get lnksWan() {
    return this.getStringAttribute('lnks_wan');
  }
  public set lnksWan(value: string) {
    this._lnksWan = value;
  }
  public resetLnksWan() {
    this._lnksWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksWanInput() {
    return this._lnksWan;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveOutputReference {
    return new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_wan Policy#lnks_wan}
  */
  readonly lnksWan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#path Policy#path}
  */
  readonly path?: string;
}

export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lnks_wan: cdktf.stringToTerraform(struct!.lnksWan),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lnks_wan: {
      value: cdktf.stringToHclTerraform(struct!.lnksWan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lnksWan !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksWan = this._lnksWan;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lnksWan = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lnksWan = value.lnksWan;
      this._path = value.path;
    }
  }

  // lnks_wan - computed: true, optional: true, required: false
  private _lnksWan?: string; 
  public get lnksWan() {
    return this.getStringAttribute('lnks_wan');
  }
  public set lnksWan(value: string) {
    this._lnksWan = value;
  }
  public resetLnksWan() {
    this._lnksWan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksWanInput() {
    return this._lnksWan;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupOutputReference {
    return new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia {
  /**
  * active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#active Policy#active}
  */
  readonly active?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive[] | cdktf.IResolvable;
  /**
  * backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#backup Policy#backup}
  */
  readonly backup?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup[] | cdktf.IResolvable;
}

export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaOutputReference | PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.listMapper(policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveToTerraform, true)(struct!.active),
    backup: cdktf.listMapper(policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupToTerraform, true)(struct!.backup),
  }
}


export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaOutputReference | PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.listMapperHcl(policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveToHclTerraform, true)(struct!.active),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveList",
    },
    backup: {
      value: cdktf.listMapperHcl(policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupToHclTerraform, true)(struct!.backup),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active.internalValue = undefined;
      this._backup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active.internalValue = value.active;
      this._backup.internalValue = value.backup;
    }
  }

  // active - computed: false, optional: true, required: false
  private _active = new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActiveList(this, "active", false);
  public get active() {
    return this._active;
  }
  public putActive(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaActive[] | cdktf.IResolvable) {
    this._active.internalValue = value;
  }
  public resetActive() {
    this._active.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackupList(this, "backup", false);
  public get backup() {
    return this._backup;
  }
  public putBackup(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaBackup[] | cdktf.IResolvable) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_algo Policy#lnks_algo}
  */
  readonly lnksAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_interface Policy#lnks_interface}
  */
  readonly lnksInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_link_steering_mode Policy#lnks_link_steering_mode}
  */
  readonly lnksLinkSteeringMode?: string;
  /**
  * lnks_via block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#lnks_via Policy#lnks_via}
  */
  readonly lnksVia?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia;
}

export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lnks_algo: cdktf.stringToTerraform(struct!.lnksAlgo),
    lnks_interface: cdktf.stringToTerraform(struct!.lnksInterface),
    lnks_link_steering_mode: cdktf.stringToTerraform(struct!.lnksLinkSteeringMode),
    lnks_via: policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaToTerraform(struct!.lnksVia),
  }
}


export function policyConfigPcfgQosPoliciesQosActionLinkSteeringActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lnks_algo: {
      value: cdktf.stringToHclTerraform(struct!.lnksAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnks_interface: {
      value: cdktf.stringToHclTerraform(struct!.lnksInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnks_link_steering_mode: {
      value: cdktf.stringToHclTerraform(struct!.lnksLinkSteeringMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lnks_via: {
      value: policyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaToHclTerraform(struct!.lnksVia),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lnksAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksAlgo = this._lnksAlgo;
    }
    if (this._lnksInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksInterface = this._lnksInterface;
    }
    if (this._lnksLinkSteeringMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksLinkSteeringMode = this._lnksLinkSteeringMode;
    }
    if (this._lnksVia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lnksVia = this._lnksVia?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lnksAlgo = undefined;
      this._lnksInterface = undefined;
      this._lnksLinkSteeringMode = undefined;
      this._lnksVia.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lnksAlgo = value.lnksAlgo;
      this._lnksInterface = value.lnksInterface;
      this._lnksLinkSteeringMode = value.lnksLinkSteeringMode;
      this._lnksVia.internalValue = value.lnksVia;
    }
  }

  // lnks_algo - computed: true, optional: true, required: false
  private _lnksAlgo?: string; 
  public get lnksAlgo() {
    return this.getStringAttribute('lnks_algo');
  }
  public set lnksAlgo(value: string) {
    this._lnksAlgo = value;
  }
  public resetLnksAlgo() {
    this._lnksAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksAlgoInput() {
    return this._lnksAlgo;
  }

  // lnks_interface - computed: true, optional: true, required: false
  private _lnksInterface?: string; 
  public get lnksInterface() {
    return this.getStringAttribute('lnks_interface');
  }
  public set lnksInterface(value: string) {
    this._lnksInterface = value;
  }
  public resetLnksInterface() {
    this._lnksInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksInterfaceInput() {
    return this._lnksInterface;
  }

  // lnks_link_steering_mode - computed: true, optional: true, required: false
  private _lnksLinkSteeringMode?: string; 
  public get lnksLinkSteeringMode() {
    return this.getStringAttribute('lnks_link_steering_mode');
  }
  public set lnksLinkSteeringMode(value: string) {
    this._lnksLinkSteeringMode = value;
  }
  public resetLnksLinkSteeringMode() {
    this._lnksLinkSteeringMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksLinkSteeringModeInput() {
    return this._lnksLinkSteeringMode;
  }

  // lnks_via - computed: false, optional: true, required: false
  private _lnksVia = new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksViaOutputReference(this, "lnks_via");
  public get lnksVia() {
    return this._lnksVia;
  }
  public putLnksVia(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionLnksVia) {
    this._lnksVia.internalValue = value;
  }
  public resetLnksVia() {
    this._lnksVia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lnksViaInput() {
    return this._lnksVia.internalValue;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionPbrAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pbr_next_hop Policy#pbr_next_hop}
  */
  readonly pbrNextHop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pbr_next_hop_site Policy#pbr_next_hop_site}
  */
  readonly pbrNextHopSite?: string;
}

export function policyConfigPcfgQosPoliciesQosActionPbrActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionPbrActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionPbrAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pbr_next_hop: cdktf.stringToTerraform(struct!.pbrNextHop),
    pbr_next_hop_site: cdktf.stringToTerraform(struct!.pbrNextHopSite),
  }
}


export function policyConfigPcfgQosPoliciesQosActionPbrActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionPbrActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionPbrAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pbr_next_hop: {
      value: cdktf.stringToHclTerraform(struct!.pbrNextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pbr_next_hop_site: {
      value: cdktf.stringToHclTerraform(struct!.pbrNextHopSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionPbrActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionPbrAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pbrNextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbrNextHop = this._pbrNextHop;
    }
    if (this._pbrNextHopSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbrNextHopSite = this._pbrNextHopSite;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionPbrAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pbrNextHop = undefined;
      this._pbrNextHopSite = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pbrNextHop = value.pbrNextHop;
      this._pbrNextHopSite = value.pbrNextHopSite;
    }
  }

  // pbr_next_hop - computed: true, optional: true, required: false
  private _pbrNextHop?: string; 
  public get pbrNextHop() {
    return this.getStringAttribute('pbr_next_hop');
  }
  public set pbrNextHop(value: string) {
    this._pbrNextHop = value;
  }
  public resetPbrNextHop() {
    this._pbrNextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrNextHopInput() {
    return this._pbrNextHop;
  }

  // pbr_next_hop_site - computed: true, optional: true, required: false
  private _pbrNextHopSite?: string; 
  public get pbrNextHopSite() {
    return this.getStringAttribute('pbr_next_hop_site');
  }
  public set pbrNextHopSite(value: string) {
    this._pbrNextHopSite = value;
  }
  public resetPbrNextHopSite() {
    this._pbrNextHopSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrNextHopSiteInput() {
    return this._pbrNextHopSite;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionSchedAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_drop_algo Policy#sch_drop_algo}
  */
  readonly schDropAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_queue_limit_bytes Policy#sch_queue_limit_bytes}
  */
  readonly schQueueLimitBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_rate_limit_enable Policy#sch_rate_limit_enable}
  */
  readonly schRateLimitEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_rx_rate_limit_kbps Policy#sch_rx_rate_limit_kbps}
  */
  readonly schRxRateLimitKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_tx_rate_limit_kbps Policy#sch_tx_rate_limit_kbps}
  */
  readonly schTxRateLimitKbps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sch_tx_rate_limit_type Policy#sch_tx_rate_limit_type}
  */
  readonly schTxRateLimitType?: string;
}

export function policyConfigPcfgQosPoliciesQosActionSchedActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionSchedActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionSchedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sch_drop_algo: cdktf.stringToTerraform(struct!.schDropAlgo),
    sch_queue_limit_bytes: cdktf.numberToTerraform(struct!.schQueueLimitBytes),
    sch_rate_limit_enable: cdktf.booleanToTerraform(struct!.schRateLimitEnable),
    sch_rx_rate_limit_kbps: cdktf.numberToTerraform(struct!.schRxRateLimitKbps),
    sch_tx_rate_limit_kbps: cdktf.numberToTerraform(struct!.schTxRateLimitKbps),
    sch_tx_rate_limit_type: cdktf.stringToTerraform(struct!.schTxRateLimitType),
  }
}


export function policyConfigPcfgQosPoliciesQosActionSchedActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionSchedActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionSchedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sch_drop_algo: {
      value: cdktf.stringToHclTerraform(struct!.schDropAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sch_queue_limit_bytes: {
      value: cdktf.numberToHclTerraform(struct!.schQueueLimitBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sch_rate_limit_enable: {
      value: cdktf.booleanToHclTerraform(struct!.schRateLimitEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sch_rx_rate_limit_kbps: {
      value: cdktf.numberToHclTerraform(struct!.schRxRateLimitKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sch_tx_rate_limit_kbps: {
      value: cdktf.numberToHclTerraform(struct!.schTxRateLimitKbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sch_tx_rate_limit_type: {
      value: cdktf.stringToHclTerraform(struct!.schTxRateLimitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionSchedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionSchedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schDropAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.schDropAlgo = this._schDropAlgo;
    }
    if (this._schQueueLimitBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.schQueueLimitBytes = this._schQueueLimitBytes;
    }
    if (this._schRateLimitEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.schRateLimitEnable = this._schRateLimitEnable;
    }
    if (this._schRxRateLimitKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.schRxRateLimitKbps = this._schRxRateLimitKbps;
    }
    if (this._schTxRateLimitKbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.schTxRateLimitKbps = this._schTxRateLimitKbps;
    }
    if (this._schTxRateLimitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.schTxRateLimitType = this._schTxRateLimitType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionSchedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schDropAlgo = undefined;
      this._schQueueLimitBytes = undefined;
      this._schRateLimitEnable = undefined;
      this._schRxRateLimitKbps = undefined;
      this._schTxRateLimitKbps = undefined;
      this._schTxRateLimitType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schDropAlgo = value.schDropAlgo;
      this._schQueueLimitBytes = value.schQueueLimitBytes;
      this._schRateLimitEnable = value.schRateLimitEnable;
      this._schRxRateLimitKbps = value.schRxRateLimitKbps;
      this._schTxRateLimitKbps = value.schTxRateLimitKbps;
      this._schTxRateLimitType = value.schTxRateLimitType;
    }
  }

  // sch_drop_algo - computed: true, optional: true, required: false
  private _schDropAlgo?: string; 
  public get schDropAlgo() {
    return this.getStringAttribute('sch_drop_algo');
  }
  public set schDropAlgo(value: string) {
    this._schDropAlgo = value;
  }
  public resetSchDropAlgo() {
    this._schDropAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schDropAlgoInput() {
    return this._schDropAlgo;
  }

  // sch_queue_limit_bytes - computed: true, optional: true, required: false
  private _schQueueLimitBytes?: number; 
  public get schQueueLimitBytes() {
    return this.getNumberAttribute('sch_queue_limit_bytes');
  }
  public set schQueueLimitBytes(value: number) {
    this._schQueueLimitBytes = value;
  }
  public resetSchQueueLimitBytes() {
    this._schQueueLimitBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schQueueLimitBytesInput() {
    return this._schQueueLimitBytes;
  }

  // sch_rate_limit_enable - computed: true, optional: true, required: false
  private _schRateLimitEnable?: boolean | cdktf.IResolvable; 
  public get schRateLimitEnable() {
    return this.getBooleanAttribute('sch_rate_limit_enable');
  }
  public set schRateLimitEnable(value: boolean | cdktf.IResolvable) {
    this._schRateLimitEnable = value;
  }
  public resetSchRateLimitEnable() {
    this._schRateLimitEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schRateLimitEnableInput() {
    return this._schRateLimitEnable;
  }

  // sch_rx_rate_limit_kbps - computed: true, optional: true, required: false
  private _schRxRateLimitKbps?: number; 
  public get schRxRateLimitKbps() {
    return this.getNumberAttribute('sch_rx_rate_limit_kbps');
  }
  public set schRxRateLimitKbps(value: number) {
    this._schRxRateLimitKbps = value;
  }
  public resetSchRxRateLimitKbps() {
    this._schRxRateLimitKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schRxRateLimitKbpsInput() {
    return this._schRxRateLimitKbps;
  }

  // sch_tx_rate_limit_kbps - computed: true, optional: true, required: false
  private _schTxRateLimitKbps?: number; 
  public get schTxRateLimitKbps() {
    return this.getNumberAttribute('sch_tx_rate_limit_kbps');
  }
  public set schTxRateLimitKbps(value: number) {
    this._schTxRateLimitKbps = value;
  }
  public resetSchTxRateLimitKbps() {
    this._schTxRateLimitKbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schTxRateLimitKbpsInput() {
    return this._schTxRateLimitKbps;
  }

  // sch_tx_rate_limit_type - computed: true, optional: true, required: false
  private _schTxRateLimitType?: string; 
  public get schTxRateLimitType() {
    return this.getStringAttribute('sch_tx_rate_limit_type');
  }
  public set schTxRateLimitType(value: string) {
    this._schTxRateLimitType = value;
  }
  public resetSchTxRateLimitType() {
    this._schTxRateLimitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schTxRateLimitTypeInput() {
    return this._schTxRateLimitType;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosActionTrafficAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#class Policy#class}
  */
  readonly class?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#priority Policy#priority}
  */
  readonly priority?: string;
}

export function policyConfigPcfgQosPoliciesQosActionTrafficActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionTrafficActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionTrafficAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function policyConfigPcfgQosPoliciesQosActionTrafficActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionTrafficActionOutputReference | PolicyConfigPcfgQosPoliciesQosActionTrafficAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionTrafficActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosActionTrafficAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosActionTrafficAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._class = undefined;
      this._priority = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._class = value.class;
      this._priority = value.priority;
    }
  }

  // class - computed: true, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosAction {
  /**
  * firewall_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#firewall_action Policy#firewall_action}
  */
  readonly firewallAction?: PolicyConfigPcfgQosPoliciesQosActionFirewallAction;
  /**
  * link_steering_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#link_steering_action Policy#link_steering_action}
  */
  readonly linkSteeringAction?: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction;
  /**
  * pbr_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pbr_action Policy#pbr_action}
  */
  readonly pbrAction?: PolicyConfigPcfgQosPoliciesQosActionPbrAction;
  /**
  * sched_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#sched_action Policy#sched_action}
  */
  readonly schedAction?: PolicyConfigPcfgQosPoliciesQosActionSchedAction;
  /**
  * traffic_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#traffic_action Policy#traffic_action}
  */
  readonly trafficAction?: PolicyConfigPcfgQosPoliciesQosActionTrafficAction;
}

export function policyConfigPcfgQosPoliciesQosActionToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionOutputReference | PolicyConfigPcfgQosPoliciesQosAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_action: policyConfigPcfgQosPoliciesQosActionFirewallActionToTerraform(struct!.firewallAction),
    link_steering_action: policyConfigPcfgQosPoliciesQosActionLinkSteeringActionToTerraform(struct!.linkSteeringAction),
    pbr_action: policyConfigPcfgQosPoliciesQosActionPbrActionToTerraform(struct!.pbrAction),
    sched_action: policyConfigPcfgQosPoliciesQosActionSchedActionToTerraform(struct!.schedAction),
    traffic_action: policyConfigPcfgQosPoliciesQosActionTrafficActionToTerraform(struct!.trafficAction),
  }
}


export function policyConfigPcfgQosPoliciesQosActionToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosActionOutputReference | PolicyConfigPcfgQosPoliciesQosAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_action: {
      value: policyConfigPcfgQosPoliciesQosActionFirewallActionToHclTerraform(struct!.firewallAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionFirewallActionList",
    },
    link_steering_action: {
      value: policyConfigPcfgQosPoliciesQosActionLinkSteeringActionToHclTerraform(struct!.linkSteeringAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionList",
    },
    pbr_action: {
      value: policyConfigPcfgQosPoliciesQosActionPbrActionToHclTerraform(struct!.pbrAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionPbrActionList",
    },
    sched_action: {
      value: policyConfigPcfgQosPoliciesQosActionSchedActionToHclTerraform(struct!.schedAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionSchedActionList",
    },
    traffic_action: {
      value: policyConfigPcfgQosPoliciesQosActionTrafficActionToHclTerraform(struct!.trafficAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionTrafficActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallAction = this._firewallAction?.internalValue;
    }
    if (this._linkSteeringAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkSteeringAction = this._linkSteeringAction?.internalValue;
    }
    if (this._pbrAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbrAction = this._pbrAction?.internalValue;
    }
    if (this._schedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedAction = this._schedAction?.internalValue;
    }
    if (this._trafficAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficAction = this._trafficAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._firewallAction.internalValue = undefined;
      this._linkSteeringAction.internalValue = undefined;
      this._pbrAction.internalValue = undefined;
      this._schedAction.internalValue = undefined;
      this._trafficAction.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._firewallAction.internalValue = value.firewallAction;
      this._linkSteeringAction.internalValue = value.linkSteeringAction;
      this._pbrAction.internalValue = value.pbrAction;
      this._schedAction.internalValue = value.schedAction;
      this._trafficAction.internalValue = value.trafficAction;
    }
  }

  // firewall_action - computed: false, optional: true, required: false
  private _firewallAction = new PolicyConfigPcfgQosPoliciesQosActionFirewallActionOutputReference(this, "firewall_action");
  public get firewallAction() {
    return this._firewallAction;
  }
  public putFirewallAction(value: PolicyConfigPcfgQosPoliciesQosActionFirewallAction) {
    this._firewallAction.internalValue = value;
  }
  public resetFirewallAction() {
    this._firewallAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallActionInput() {
    return this._firewallAction.internalValue;
  }

  // link_steering_action - computed: false, optional: true, required: false
  private _linkSteeringAction = new PolicyConfigPcfgQosPoliciesQosActionLinkSteeringActionOutputReference(this, "link_steering_action");
  public get linkSteeringAction() {
    return this._linkSteeringAction;
  }
  public putLinkSteeringAction(value: PolicyConfigPcfgQosPoliciesQosActionLinkSteeringAction) {
    this._linkSteeringAction.internalValue = value;
  }
  public resetLinkSteeringAction() {
    this._linkSteeringAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkSteeringActionInput() {
    return this._linkSteeringAction.internalValue;
  }

  // pbr_action - computed: false, optional: true, required: false
  private _pbrAction = new PolicyConfigPcfgQosPoliciesQosActionPbrActionOutputReference(this, "pbr_action");
  public get pbrAction() {
    return this._pbrAction;
  }
  public putPbrAction(value: PolicyConfigPcfgQosPoliciesQosActionPbrAction) {
    this._pbrAction.internalValue = value;
  }
  public resetPbrAction() {
    this._pbrAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbrActionInput() {
    return this._pbrAction.internalValue;
  }

  // sched_action - computed: false, optional: true, required: false
  private _schedAction = new PolicyConfigPcfgQosPoliciesQosActionSchedActionOutputReference(this, "sched_action");
  public get schedAction() {
    return this._schedAction;
  }
  public putSchedAction(value: PolicyConfigPcfgQosPoliciesQosActionSchedAction) {
    this._schedAction.internalValue = value;
  }
  public resetSchedAction() {
    this._schedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedActionInput() {
    return this._schedAction.internalValue;
  }

  // traffic_action - computed: false, optional: true, required: false
  private _trafficAction = new PolicyConfigPcfgQosPoliciesQosActionTrafficActionOutputReference(this, "traffic_action");
  public get trafficAction() {
    return this._trafficAction;
  }
  public putTrafficAction(value: PolicyConfigPcfgQosPoliciesQosActionTrafficAction) {
    this._trafficAction.internalValue = value;
  }
  public resetTrafficAction() {
    this._trafficAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficActionInput() {
    return this._trafficAction.internalValue;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_app_id Policy#mtch_app_id}
  */
  readonly mtchAppId?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_internet Policy#mtch_dest_internet}
  */
  readonly mtchDestInternet?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_ip Policy#mtch_dest_ip}
  */
  readonly mtchDestIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_port Policy#mtch_dest_port}
  */
  readonly mtchDestPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dest_zone Policy#mtch_dest_zone}
  */
  readonly mtchDestZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_dst_vlan Policy#mtch_dst_vlan}
  */
  readonly mtchDstVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_l4_protocol Policy#mtch_l4_protocol}
  */
  readonly mtchL4Protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_ip Policy#mtch_src_ip}
  */
  readonly mtchSrcIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_mac Policy#mtch_src_mac}
  */
  readonly mtchSrcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_port Policy#mtch_src_port}
  */
  readonly mtchSrcPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_vlan Policy#mtch_src_vlan}
  */
  readonly mtchSrcVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#mtch_src_zone Policy#mtch_src_zone}
  */
  readonly mtchSrcZone?: string;
}

export function policyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaOutputReference | PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mtch_app_id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.mtchAppId),
    mtch_dest_internet: cdktf.booleanToTerraform(struct!.mtchDestInternet),
    mtch_dest_ip: cdktf.stringToTerraform(struct!.mtchDestIp),
    mtch_dest_port: cdktf.stringToTerraform(struct!.mtchDestPort),
    mtch_dest_zone: cdktf.stringToTerraform(struct!.mtchDestZone),
    mtch_dst_vlan: cdktf.numberToTerraform(struct!.mtchDstVlan),
    mtch_l4_protocol: cdktf.stringToTerraform(struct!.mtchL4Protocol),
    mtch_src_ip: cdktf.stringToTerraform(struct!.mtchSrcIp),
    mtch_src_mac: cdktf.stringToTerraform(struct!.mtchSrcMac),
    mtch_src_port: cdktf.stringToTerraform(struct!.mtchSrcPort),
    mtch_src_vlan: cdktf.numberToTerraform(struct!.mtchSrcVlan),
    mtch_src_zone: cdktf.stringToTerraform(struct!.mtchSrcZone),
  }
}


export function policyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaOutputReference | PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mtch_app_id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.mtchAppId),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    mtch_dest_internet: {
      value: cdktf.booleanToHclTerraform(struct!.mtchDestInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mtch_dest_ip: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dest_port: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dest_zone: {
      value: cdktf.stringToHclTerraform(struct!.mtchDestZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_dst_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mtchDstVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtch_l4_protocol: {
      value: cdktf.stringToHclTerraform(struct!.mtchL4Protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_ip: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_mac: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_port: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtch_src_vlan: {
      value: cdktf.numberToHclTerraform(struct!.mtchSrcVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtch_src_zone: {
      value: cdktf.stringToHclTerraform(struct!.mtchSrcZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mtchAppId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchAppId = this._mtchAppId;
    }
    if (this._mtchDestInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestInternet = this._mtchDestInternet;
    }
    if (this._mtchDestIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestIp = this._mtchDestIp;
    }
    if (this._mtchDestPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestPort = this._mtchDestPort;
    }
    if (this._mtchDestZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDestZone = this._mtchDestZone;
    }
    if (this._mtchDstVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchDstVlan = this._mtchDstVlan;
    }
    if (this._mtchL4Protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchL4Protocol = this._mtchL4Protocol;
    }
    if (this._mtchSrcIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcIp = this._mtchSrcIp;
    }
    if (this._mtchSrcMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcMac = this._mtchSrcMac;
    }
    if (this._mtchSrcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcPort = this._mtchSrcPort;
    }
    if (this._mtchSrcVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcVlan = this._mtchSrcVlan;
    }
    if (this._mtchSrcZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtchSrcZone = this._mtchSrcZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mtchAppId = undefined;
      this._mtchDestInternet = undefined;
      this._mtchDestIp = undefined;
      this._mtchDestPort = undefined;
      this._mtchDestZone = undefined;
      this._mtchDstVlan = undefined;
      this._mtchL4Protocol = undefined;
      this._mtchSrcIp = undefined;
      this._mtchSrcMac = undefined;
      this._mtchSrcPort = undefined;
      this._mtchSrcVlan = undefined;
      this._mtchSrcZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mtchAppId = value.mtchAppId;
      this._mtchDestInternet = value.mtchDestInternet;
      this._mtchDestIp = value.mtchDestIp;
      this._mtchDestPort = value.mtchDestPort;
      this._mtchDestZone = value.mtchDestZone;
      this._mtchDstVlan = value.mtchDstVlan;
      this._mtchL4Protocol = value.mtchL4Protocol;
      this._mtchSrcIp = value.mtchSrcIp;
      this._mtchSrcMac = value.mtchSrcMac;
      this._mtchSrcPort = value.mtchSrcPort;
      this._mtchSrcVlan = value.mtchSrcVlan;
      this._mtchSrcZone = value.mtchSrcZone;
    }
  }

  // mtch_app_id - computed: true, optional: true, required: false
  private _mtchAppId?: number[]; 
  public get mtchAppId() {
    return this.getNumberListAttribute('mtch_app_id');
  }
  public set mtchAppId(value: number[]) {
    this._mtchAppId = value;
  }
  public resetMtchAppId() {
    this._mtchAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchAppIdInput() {
    return this._mtchAppId;
  }

  // mtch_dest_internet - computed: true, optional: true, required: false
  private _mtchDestInternet?: boolean | cdktf.IResolvable; 
  public get mtchDestInternet() {
    return this.getBooleanAttribute('mtch_dest_internet');
  }
  public set mtchDestInternet(value: boolean | cdktf.IResolvable) {
    this._mtchDestInternet = value;
  }
  public resetMtchDestInternet() {
    this._mtchDestInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestInternetInput() {
    return this._mtchDestInternet;
  }

  // mtch_dest_ip - computed: true, optional: true, required: false
  private _mtchDestIp?: string; 
  public get mtchDestIp() {
    return this.getStringAttribute('mtch_dest_ip');
  }
  public set mtchDestIp(value: string) {
    this._mtchDestIp = value;
  }
  public resetMtchDestIp() {
    this._mtchDestIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestIpInput() {
    return this._mtchDestIp;
  }

  // mtch_dest_port - computed: true, optional: true, required: false
  private _mtchDestPort?: string; 
  public get mtchDestPort() {
    return this.getStringAttribute('mtch_dest_port');
  }
  public set mtchDestPort(value: string) {
    this._mtchDestPort = value;
  }
  public resetMtchDestPort() {
    this._mtchDestPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestPortInput() {
    return this._mtchDestPort;
  }

  // mtch_dest_zone - computed: true, optional: true, required: false
  private _mtchDestZone?: string; 
  public get mtchDestZone() {
    return this.getStringAttribute('mtch_dest_zone');
  }
  public set mtchDestZone(value: string) {
    this._mtchDestZone = value;
  }
  public resetMtchDestZone() {
    this._mtchDestZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDestZoneInput() {
    return this._mtchDestZone;
  }

  // mtch_dst_vlan - computed: true, optional: true, required: false
  private _mtchDstVlan?: number; 
  public get mtchDstVlan() {
    return this.getNumberAttribute('mtch_dst_vlan');
  }
  public set mtchDstVlan(value: number) {
    this._mtchDstVlan = value;
  }
  public resetMtchDstVlan() {
    this._mtchDstVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchDstVlanInput() {
    return this._mtchDstVlan;
  }

  // mtch_l4_protocol - computed: true, optional: true, required: false
  private _mtchL4Protocol?: string; 
  public get mtchL4Protocol() {
    return this.getStringAttribute('mtch_l4_protocol');
  }
  public set mtchL4Protocol(value: string) {
    this._mtchL4Protocol = value;
  }
  public resetMtchL4Protocol() {
    this._mtchL4Protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchL4ProtocolInput() {
    return this._mtchL4Protocol;
  }

  // mtch_src_ip - computed: true, optional: true, required: false
  private _mtchSrcIp?: string; 
  public get mtchSrcIp() {
    return this.getStringAttribute('mtch_src_ip');
  }
  public set mtchSrcIp(value: string) {
    this._mtchSrcIp = value;
  }
  public resetMtchSrcIp() {
    this._mtchSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcIpInput() {
    return this._mtchSrcIp;
  }

  // mtch_src_mac - computed: true, optional: true, required: false
  private _mtchSrcMac?: string; 
  public get mtchSrcMac() {
    return this.getStringAttribute('mtch_src_mac');
  }
  public set mtchSrcMac(value: string) {
    this._mtchSrcMac = value;
  }
  public resetMtchSrcMac() {
    this._mtchSrcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcMacInput() {
    return this._mtchSrcMac;
  }

  // mtch_src_port - computed: true, optional: true, required: false
  private _mtchSrcPort?: string; 
  public get mtchSrcPort() {
    return this.getStringAttribute('mtch_src_port');
  }
  public set mtchSrcPort(value: string) {
    this._mtchSrcPort = value;
  }
  public resetMtchSrcPort() {
    this._mtchSrcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcPortInput() {
    return this._mtchSrcPort;
  }

  // mtch_src_vlan - computed: true, optional: true, required: false
  private _mtchSrcVlan?: number; 
  public get mtchSrcVlan() {
    return this.getNumberAttribute('mtch_src_vlan');
  }
  public set mtchSrcVlan(value: number) {
    this._mtchSrcVlan = value;
  }
  public resetMtchSrcVlan() {
    this._mtchSrcVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcVlanInput() {
    return this._mtchSrcVlan;
  }

  // mtch_src_zone - computed: true, optional: true, required: false
  private _mtchSrcZone?: string; 
  public get mtchSrcZone() {
    return this.getStringAttribute('mtch_src_zone');
  }
  public set mtchSrcZone(value: string) {
    this._mtchSrcZone = value;
  }
  public resetMtchSrcZone() {
    this._mtchSrcZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtchSrcZoneInput() {
    return this._mtchSrcZone;
  }
}
export interface PolicyConfigPcfgQosPoliciesQosMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cmap_match_type Policy#cmap_match_type}
  */
  readonly cmapMatchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cmap_name Policy#cmap_name}
  */
  readonly cmapName?: string;
  /**
  * cmap_match_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#cmap_match_criteria Policy#cmap_match_criteria}
  */
  readonly cmapMatchCriteria?: PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria;
}

export function policyConfigPcfgQosPoliciesQosMatchToTerraform(struct?: PolicyConfigPcfgQosPoliciesQosMatchOutputReference | PolicyConfigPcfgQosPoliciesQosMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmap_match_type: cdktf.stringToTerraform(struct!.cmapMatchType),
    cmap_name: cdktf.stringToTerraform(struct!.cmapName),
    cmap_match_criteria: policyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaToTerraform(struct!.cmapMatchCriteria),
  }
}


export function policyConfigPcfgQosPoliciesQosMatchToHclTerraform(struct?: PolicyConfigPcfgQosPoliciesQosMatchOutputReference | PolicyConfigPcfgQosPoliciesQosMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmap_match_type: {
      value: cdktf.stringToHclTerraform(struct!.cmapMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmap_name: {
      value: cdktf.stringToHclTerraform(struct!.cmapName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cmap_match_criteria: {
      value: policyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaToHclTerraform(struct!.cmapMatchCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesQosMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgQosPoliciesQosMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmapMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmapMatchType = this._cmapMatchType;
    }
    if (this._cmapName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmapName = this._cmapName;
    }
    if (this._cmapMatchCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmapMatchCriteria = this._cmapMatchCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPoliciesQosMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cmapMatchType = undefined;
      this._cmapName = undefined;
      this._cmapMatchCriteria.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cmapMatchType = value.cmapMatchType;
      this._cmapName = value.cmapName;
      this._cmapMatchCriteria.internalValue = value.cmapMatchCriteria;
    }
  }

  // cmap_match_type - computed: true, optional: true, required: false
  private _cmapMatchType?: string; 
  public get cmapMatchType() {
    return this.getStringAttribute('cmap_match_type');
  }
  public set cmapMatchType(value: string) {
    this._cmapMatchType = value;
  }
  public resetCmapMatchType() {
    this._cmapMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmapMatchTypeInput() {
    return this._cmapMatchType;
  }

  // cmap_name - computed: true, optional: true, required: false
  private _cmapName?: string; 
  public get cmapName() {
    return this.getStringAttribute('cmap_name');
  }
  public set cmapName(value: string) {
    this._cmapName = value;
  }
  public resetCmapName() {
    this._cmapName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmapNameInput() {
    return this._cmapName;
  }

  // cmap_match_criteria - computed: false, optional: true, required: false
  private _cmapMatchCriteria = new PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteriaOutputReference(this, "cmap_match_criteria");
  public get cmapMatchCriteria() {
    return this._cmapMatchCriteria;
  }
  public putCmapMatchCriteria(value: PolicyConfigPcfgQosPoliciesQosMatchCmapMatchCriteria) {
    this._cmapMatchCriteria.internalValue = value;
  }
  public resetCmapMatchCriteria() {
    this._cmapMatchCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmapMatchCriteriaInput() {
    return this._cmapMatchCriteria.internalValue;
  }
}
export interface PolicyConfigPcfgQosPolicies {
  /**
  * qos_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#qos_action Policy#qos_action}
  */
  readonly qosAction?: PolicyConfigPcfgQosPoliciesQosAction;
  /**
  * qos_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#qos_match Policy#qos_match}
  */
  readonly qosMatch?: PolicyConfigPcfgQosPoliciesQosMatch;
}

export function policyConfigPcfgQosPoliciesToTerraform(struct?: PolicyConfigPcfgQosPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qos_action: policyConfigPcfgQosPoliciesQosActionToTerraform(struct!.qosAction),
    qos_match: policyConfigPcfgQosPoliciesQosMatchToTerraform(struct!.qosMatch),
  }
}


export function policyConfigPcfgQosPoliciesToHclTerraform(struct?: PolicyConfigPcfgQosPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qos_action: {
      value: policyConfigPcfgQosPoliciesQosActionToHclTerraform(struct!.qosAction),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosActionList",
    },
    qos_match: {
      value: policyConfigPcfgQosPoliciesQosMatchToHclTerraform(struct!.qosMatch),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgQosPoliciesQosMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgQosPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyConfigPcfgQosPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qosAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosAction = this._qosAction?.internalValue;
    }
    if (this._qosMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosMatch = this._qosMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgQosPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._qosAction.internalValue = undefined;
      this._qosMatch.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._qosAction.internalValue = value.qosAction;
      this._qosMatch.internalValue = value.qosMatch;
    }
  }

  // qos_action - computed: false, optional: true, required: false
  private _qosAction = new PolicyConfigPcfgQosPoliciesQosActionOutputReference(this, "qos_action");
  public get qosAction() {
    return this._qosAction;
  }
  public putQosAction(value: PolicyConfigPcfgQosPoliciesQosAction) {
    this._qosAction.internalValue = value;
  }
  public resetQosAction() {
    this._qosAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosActionInput() {
    return this._qosAction.internalValue;
  }

  // qos_match - computed: false, optional: true, required: false
  private _qosMatch = new PolicyConfigPcfgQosPoliciesQosMatchOutputReference(this, "qos_match");
  public get qosMatch() {
    return this._qosMatch;
  }
  public putQosMatch(value: PolicyConfigPcfgQosPoliciesQosMatch) {
    this._qosMatch.internalValue = value;
  }
  public resetQosMatch() {
    this._qosMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosMatchInput() {
    return this._qosMatch.internalValue;
  }
}

export class PolicyConfigPcfgQosPoliciesList extends cdktf.ComplexList {
  public internalValue? : PolicyConfigPcfgQosPolicies[] | cdktf.IResolvable

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
  public get(index: number): PolicyConfigPcfgQosPoliciesOutputReference {
    return new PolicyConfigPcfgQosPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyConfigPcfgUrlFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_uf_allowlist Policy#pcfg_uf_allowlist}
  */
  readonly pcfgUfAllowlist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_uf_blocked_categories Policy#pcfg_uf_blocked_categories}
  */
  readonly pcfgUfBlockedCategories?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_uf_blocklist Policy#pcfg_uf_blocklist}
  */
  readonly pcfgUfBlocklist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_uf_enabled Policy#pcfg_uf_enabled}
  */
  readonly pcfgUfEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_uf_reputation_threshold Policy#pcfg_uf_reputation_threshold}
  */
  readonly pcfgUfReputationThreshold?: string;
}

export function policyConfigPcfgUrlFilterToTerraform(struct?: PolicyConfigPcfgUrlFilterOutputReference | PolicyConfigPcfgUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_uf_allowlist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pcfgUfAllowlist),
    pcfg_uf_blocked_categories: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.pcfgUfBlockedCategories),
    pcfg_uf_blocklist: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pcfgUfBlocklist),
    pcfg_uf_enabled: cdktf.booleanToTerraform(struct!.pcfgUfEnabled),
    pcfg_uf_reputation_threshold: cdktf.stringToTerraform(struct!.pcfgUfReputationThreshold),
  }
}


export function policyConfigPcfgUrlFilterToHclTerraform(struct?: PolicyConfigPcfgUrlFilterOutputReference | PolicyConfigPcfgUrlFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_uf_allowlist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pcfgUfAllowlist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pcfg_uf_blocked_categories: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.pcfgUfBlockedCategories),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pcfg_uf_blocklist: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pcfgUfBlocklist),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pcfg_uf_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.pcfgUfEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pcfg_uf_reputation_threshold: {
      value: cdktf.stringToHclTerraform(struct!.pcfgUfReputationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigPcfgUrlFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigPcfgUrlFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgUfAllowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUfAllowlist = this._pcfgUfAllowlist;
    }
    if (this._pcfgUfBlockedCategories !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUfBlockedCategories = this._pcfgUfBlockedCategories;
    }
    if (this._pcfgUfBlocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUfBlocklist = this._pcfgUfBlocklist;
    }
    if (this._pcfgUfEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUfEnabled = this._pcfgUfEnabled;
    }
    if (this._pcfgUfReputationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUfReputationThreshold = this._pcfgUfReputationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigPcfgUrlFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgUfAllowlist = undefined;
      this._pcfgUfBlockedCategories = undefined;
      this._pcfgUfBlocklist = undefined;
      this._pcfgUfEnabled = undefined;
      this._pcfgUfReputationThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgUfAllowlist = value.pcfgUfAllowlist;
      this._pcfgUfBlockedCategories = value.pcfgUfBlockedCategories;
      this._pcfgUfBlocklist = value.pcfgUfBlocklist;
      this._pcfgUfEnabled = value.pcfgUfEnabled;
      this._pcfgUfReputationThreshold = value.pcfgUfReputationThreshold;
    }
  }

  // pcfg_uf_allowlist - computed: true, optional: true, required: false
  private _pcfgUfAllowlist?: string[]; 
  public get pcfgUfAllowlist() {
    return this.getListAttribute('pcfg_uf_allowlist');
  }
  public set pcfgUfAllowlist(value: string[]) {
    this._pcfgUfAllowlist = value;
  }
  public resetPcfgUfAllowlist() {
    this._pcfgUfAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUfAllowlistInput() {
    return this._pcfgUfAllowlist;
  }

  // pcfg_uf_blocked_categories - computed: true, optional: true, required: false
  private _pcfgUfBlockedCategories?: number[]; 
  public get pcfgUfBlockedCategories() {
    return this.getNumberListAttribute('pcfg_uf_blocked_categories');
  }
  public set pcfgUfBlockedCategories(value: number[]) {
    this._pcfgUfBlockedCategories = value;
  }
  public resetPcfgUfBlockedCategories() {
    this._pcfgUfBlockedCategories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUfBlockedCategoriesInput() {
    return this._pcfgUfBlockedCategories;
  }

  // pcfg_uf_blocklist - computed: true, optional: true, required: false
  private _pcfgUfBlocklist?: string[]; 
  public get pcfgUfBlocklist() {
    return this.getListAttribute('pcfg_uf_blocklist');
  }
  public set pcfgUfBlocklist(value: string[]) {
    this._pcfgUfBlocklist = value;
  }
  public resetPcfgUfBlocklist() {
    this._pcfgUfBlocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUfBlocklistInput() {
    return this._pcfgUfBlocklist;
  }

  // pcfg_uf_enabled - computed: true, optional: true, required: false
  private _pcfgUfEnabled?: boolean | cdktf.IResolvable; 
  public get pcfgUfEnabled() {
    return this.getBooleanAttribute('pcfg_uf_enabled');
  }
  public set pcfgUfEnabled(value: boolean | cdktf.IResolvable) {
    this._pcfgUfEnabled = value;
  }
  public resetPcfgUfEnabled() {
    this._pcfgUfEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUfEnabledInput() {
    return this._pcfgUfEnabled;
  }

  // pcfg_uf_reputation_threshold - computed: true, optional: true, required: false
  private _pcfgUfReputationThreshold?: string; 
  public get pcfgUfReputationThreshold() {
    return this.getStringAttribute('pcfg_uf_reputation_threshold');
  }
  public set pcfgUfReputationThreshold(value: string) {
    this._pcfgUfReputationThreshold = value;
  }
  public resetPcfgUfReputationThreshold() {
    this._pcfgUfReputationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUfReputationThresholdInput() {
    return this._pcfgUfReputationThreshold;
  }
}
export interface PolicyConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_schemaver Policy#pcfg_schemaver}
  */
  readonly pcfgSchemaver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_schemaver_minor Policy#pcfg_schemaver_minor}
  */
  readonly pcfgSchemaverMinor?: number;
  /**
  * pcfg_cos_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_cos_table Policy#pcfg_cos_table}
  */
  readonly pcfgCosTable?: PolicyConfigPcfgCosTable[] | cdktf.IResolvable;
  /**
  * pcfg_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_firewall Policy#pcfg_firewall}
  */
  readonly pcfgFirewall?: PolicyConfigPcfgFirewall;
  /**
  * pcfg_general_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_general_settings Policy#pcfg_general_settings}
  */
  readonly pcfgGeneralSettings?: PolicyConfigPcfgGeneralSettings;
  /**
  * pcfg_qos_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_qos_policies Policy#pcfg_qos_policies}
  */
  readonly pcfgQosPolicies?: PolicyConfigPcfgQosPolicies[] | cdktf.IResolvable;
  /**
  * pcfg_url_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#pcfg_url_filter Policy#pcfg_url_filter}
  */
  readonly pcfgUrlFilter?: PolicyConfigPcfgUrlFilter;
}

export function policyConfigAToTerraform(struct?: PolicyConfigAOutputReference | PolicyConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pcfg_schemaver: cdktf.numberToTerraform(struct!.pcfgSchemaver),
    pcfg_schemaver_minor: cdktf.numberToTerraform(struct!.pcfgSchemaverMinor),
    pcfg_cos_table: cdktf.listMapper(policyConfigPcfgCosTableToTerraform, true)(struct!.pcfgCosTable),
    pcfg_firewall: policyConfigPcfgFirewallToTerraform(struct!.pcfgFirewall),
    pcfg_general_settings: policyConfigPcfgGeneralSettingsToTerraform(struct!.pcfgGeneralSettings),
    pcfg_qos_policies: cdktf.listMapper(policyConfigPcfgQosPoliciesToTerraform, true)(struct!.pcfgQosPolicies),
    pcfg_url_filter: policyConfigPcfgUrlFilterToTerraform(struct!.pcfgUrlFilter),
  }
}


export function policyConfigAToHclTerraform(struct?: PolicyConfigAOutputReference | PolicyConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pcfg_schemaver: {
      value: cdktf.numberToHclTerraform(struct!.pcfgSchemaver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcfg_schemaver_minor: {
      value: cdktf.numberToHclTerraform(struct!.pcfgSchemaverMinor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pcfg_cos_table: {
      value: cdktf.listMapperHcl(policyConfigPcfgCosTableToHclTerraform, true)(struct!.pcfgCosTable),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgCosTableList",
    },
    pcfg_firewall: {
      value: policyConfigPcfgFirewallToHclTerraform(struct!.pcfgFirewall),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgFirewallList",
    },
    pcfg_general_settings: {
      value: policyConfigPcfgGeneralSettingsToHclTerraform(struct!.pcfgGeneralSettings),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgGeneralSettingsList",
    },
    pcfg_qos_policies: {
      value: cdktf.listMapperHcl(policyConfigPcfgQosPoliciesToHclTerraform, true)(struct!.pcfgQosPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyConfigPcfgQosPoliciesList",
    },
    pcfg_url_filter: {
      value: policyConfigPcfgUrlFilterToHclTerraform(struct!.pcfgUrlFilter),
      isBlock: true,
      type: "set",
      storageClassType: "PolicyConfigPcfgUrlFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pcfgSchemaver !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSchemaver = this._pcfgSchemaver;
    }
    if (this._pcfgSchemaverMinor !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgSchemaverMinor = this._pcfgSchemaverMinor;
    }
    if (this._pcfgCosTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgCosTable = this._pcfgCosTable?.internalValue;
    }
    if (this._pcfgFirewall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgFirewall = this._pcfgFirewall?.internalValue;
    }
    if (this._pcfgGeneralSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgGeneralSettings = this._pcfgGeneralSettings?.internalValue;
    }
    if (this._pcfgQosPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgQosPolicies = this._pcfgQosPolicies?.internalValue;
    }
    if (this._pcfgUrlFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pcfgUrlFilter = this._pcfgUrlFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pcfgSchemaver = undefined;
      this._pcfgSchemaverMinor = undefined;
      this._pcfgCosTable.internalValue = undefined;
      this._pcfgFirewall.internalValue = undefined;
      this._pcfgGeneralSettings.internalValue = undefined;
      this._pcfgQosPolicies.internalValue = undefined;
      this._pcfgUrlFilter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pcfgSchemaver = value.pcfgSchemaver;
      this._pcfgSchemaverMinor = value.pcfgSchemaverMinor;
      this._pcfgCosTable.internalValue = value.pcfgCosTable;
      this._pcfgFirewall.internalValue = value.pcfgFirewall;
      this._pcfgGeneralSettings.internalValue = value.pcfgGeneralSettings;
      this._pcfgQosPolicies.internalValue = value.pcfgQosPolicies;
      this._pcfgUrlFilter.internalValue = value.pcfgUrlFilter;
    }
  }

  // pcfg_schemaver - computed: true, optional: true, required: false
  private _pcfgSchemaver?: number; 
  public get pcfgSchemaver() {
    return this.getNumberAttribute('pcfg_schemaver');
  }
  public set pcfgSchemaver(value: number) {
    this._pcfgSchemaver = value;
  }
  public resetPcfgSchemaver() {
    this._pcfgSchemaver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSchemaverInput() {
    return this._pcfgSchemaver;
  }

  // pcfg_schemaver_minor - computed: true, optional: true, required: false
  private _pcfgSchemaverMinor?: number; 
  public get pcfgSchemaverMinor() {
    return this.getNumberAttribute('pcfg_schemaver_minor');
  }
  public set pcfgSchemaverMinor(value: number) {
    this._pcfgSchemaverMinor = value;
  }
  public resetPcfgSchemaverMinor() {
    this._pcfgSchemaverMinor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgSchemaverMinorInput() {
    return this._pcfgSchemaverMinor;
  }

  // pcfg_cos_table - computed: false, optional: true, required: false
  private _pcfgCosTable = new PolicyConfigPcfgCosTableList(this, "pcfg_cos_table", false);
  public get pcfgCosTable() {
    return this._pcfgCosTable;
  }
  public putPcfgCosTable(value: PolicyConfigPcfgCosTable[] | cdktf.IResolvable) {
    this._pcfgCosTable.internalValue = value;
  }
  public resetPcfgCosTable() {
    this._pcfgCosTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgCosTableInput() {
    return this._pcfgCosTable.internalValue;
  }

  // pcfg_firewall - computed: false, optional: true, required: false
  private _pcfgFirewall = new PolicyConfigPcfgFirewallOutputReference(this, "pcfg_firewall");
  public get pcfgFirewall() {
    return this._pcfgFirewall;
  }
  public putPcfgFirewall(value: PolicyConfigPcfgFirewall) {
    this._pcfgFirewall.internalValue = value;
  }
  public resetPcfgFirewall() {
    this._pcfgFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgFirewallInput() {
    return this._pcfgFirewall.internalValue;
  }

  // pcfg_general_settings - computed: false, optional: true, required: false
  private _pcfgGeneralSettings = new PolicyConfigPcfgGeneralSettingsOutputReference(this, "pcfg_general_settings");
  public get pcfgGeneralSettings() {
    return this._pcfgGeneralSettings;
  }
  public putPcfgGeneralSettings(value: PolicyConfigPcfgGeneralSettings) {
    this._pcfgGeneralSettings.internalValue = value;
  }
  public resetPcfgGeneralSettings() {
    this._pcfgGeneralSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgGeneralSettingsInput() {
    return this._pcfgGeneralSettings.internalValue;
  }

  // pcfg_qos_policies - computed: false, optional: true, required: false
  private _pcfgQosPolicies = new PolicyConfigPcfgQosPoliciesList(this, "pcfg_qos_policies", false);
  public get pcfgQosPolicies() {
    return this._pcfgQosPolicies;
  }
  public putPcfgQosPolicies(value: PolicyConfigPcfgQosPolicies[] | cdktf.IResolvable) {
    this._pcfgQosPolicies.internalValue = value;
  }
  public resetPcfgQosPolicies() {
    this._pcfgQosPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgQosPoliciesInput() {
    return this._pcfgQosPolicies.internalValue;
  }

  // pcfg_url_filter - computed: false, optional: true, required: false
  private _pcfgUrlFilter = new PolicyConfigPcfgUrlFilterOutputReference(this, "pcfg_url_filter");
  public get pcfgUrlFilter() {
    return this._pcfgUrlFilter;
  }
  public putPcfgUrlFilter(value: PolicyConfigPcfgUrlFilter) {
    this._pcfgUrlFilter.internalValue = value;
  }
  public resetPcfgUrlFilter() {
    this._pcfgUrlFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcfgUrlFilterInput() {
    return this._pcfgUrlFilter.internalValue;
  }
}
export interface PolicyCreatedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#email Policy#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
}

export function policyCreatedByToTerraform(struct?: PolicyCreatedByOutputReference | PolicyCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyCreatedByToHclTerraform(struct?: PolicyCreatedByOutputReference | PolicyCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyCreatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
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
}
export interface PolicyHubs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#overlay_ip Policy#overlay_ip}
  */
  readonly overlayIp?: string;
}

export function policyHubsToTerraform(struct?: PolicyHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    overlay_ip: cdktf.stringToTerraform(struct!.overlayIp),
  }
}


export function policyHubsToHclTerraform(struct?: PolicyHubs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    overlay_ip: {
      value: cdktf.stringToHclTerraform(struct!.overlayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyHubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyHubs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overlayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlayIp = this._overlayIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyHubs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._overlayIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._overlayIp = value.overlayIp;
    }
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

  // name - computed: true, optional: true, required: false
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

  // overlay_ip - computed: true, optional: true, required: false
  private _overlayIp?: string; 
  public get overlayIp() {
    return this.getStringAttribute('overlay_ip');
  }
  public set overlayIp(value: string) {
    this._overlayIp = value;
  }
  public resetOverlayIp() {
    this._overlayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayIpInput() {
    return this._overlayIp;
  }
}

export class PolicyHubsList extends cdktf.ComplexList {
  public internalValue? : PolicyHubs[] | cdktf.IResolvable

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
  public get(index: number): PolicyHubsOutputReference {
    return new PolicyHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyModifiedBy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#email Policy#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#name Policy#name}
  */
  readonly name?: string;
}

export function policyModifiedByToTerraform(struct?: PolicyModifiedByOutputReference | PolicyModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function policyModifiedByToHclTerraform(struct?: PolicyModifiedByOutputReference | PolicyModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyModifiedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // name - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy netskopebwan_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netskopebwan_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netskopebwan_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netskopeoss/netskopebwan/0.0.2/docs/resources/policy netskopebwan_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'netskopebwan_policy',
      terraformGeneratorMetadata: {
        providerName: 'netskopebwan',
        providerVersion: '0.0.2',
        providerVersionConstraint: '0.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignedEdges = config.assignedEdges;
    this._dateCreated = config.dateCreated;
    this._dateModified = config.dateModified;
    this._id = config.id;
    this._name = config.name;
    this._config.internalValue = config.config;
    this._createdBy.internalValue = config.createdBy;
    this._hubs.internalValue = config.hubs;
    this._modifiedBy.internalValue = config.modifiedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assigned_edges - computed: true, optional: true, required: false
  private _assignedEdges?: string[]; 
  public get assignedEdges() {
    return this.getListAttribute('assigned_edges');
  }
  public set assignedEdges(value: string[]) {
    this._assignedEdges = value;
  }
  public resetAssignedEdges() {
    this._assignedEdges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignedEdgesInput() {
    return this._assignedEdges;
  }

  // date_created - computed: true, optional: true, required: false
  private _dateCreated?: string; 
  public get dateCreated() {
    return this.getStringAttribute('date_created');
  }
  public set dateCreated(value: string) {
    this._dateCreated = value;
  }
  public resetDateCreated() {
    this._dateCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateCreatedInput() {
    return this._dateCreated;
  }

  // date_modified - computed: true, optional: true, required: false
  private _dateModified?: string; 
  public get dateModified() {
    return this.getStringAttribute('date_modified');
  }
  public set dateModified(value: string) {
    this._dateModified = value;
  }
  public resetDateModified() {
    this._dateModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateModifiedInput() {
    return this._dateModified;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // config - computed: false, optional: true, required: false
  private _config = new PolicyConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: PolicyConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy = new PolicyCreatedByOutputReference(this, "created_by");
  public get createdBy() {
    return this._createdBy;
  }
  public putCreatedBy(value: PolicyCreatedBy) {
    this._createdBy.internalValue = value;
  }
  public resetCreatedBy() {
    this._createdBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy.internalValue;
  }

  // hubs - computed: false, optional: true, required: false
  private _hubs = new PolicyHubsList(this, "hubs", false);
  public get hubs() {
    return this._hubs;
  }
  public putHubs(value: PolicyHubs[] | cdktf.IResolvable) {
    this._hubs.internalValue = value;
  }
  public resetHubs() {
    this._hubs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubsInput() {
    return this._hubs.internalValue;
  }

  // modified_by - computed: false, optional: true, required: false
  private _modifiedBy = new PolicyModifiedByOutputReference(this, "modified_by");
  public get modifiedBy() {
    return this._modifiedBy;
  }
  public putModifiedBy(value: PolicyModifiedBy) {
    this._modifiedBy.internalValue = value;
  }
  public resetModifiedBy() {
    this._modifiedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedByInput() {
    return this._modifiedBy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assigned_edges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._assignedEdges),
      date_created: cdktf.stringToTerraform(this._dateCreated),
      date_modified: cdktf.stringToTerraform(this._dateModified),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      config: policyConfigAToTerraform(this._config.internalValue),
      created_by: policyCreatedByToTerraform(this._createdBy.internalValue),
      hubs: cdktf.listMapper(policyHubsToTerraform, true)(this._hubs.internalValue),
      modified_by: policyModifiedByToTerraform(this._modifiedBy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assigned_edges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._assignedEdges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      date_created: {
        value: cdktf.stringToHclTerraform(this._dateCreated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_modified: {
        value: cdktf.stringToHclTerraform(this._dateModified),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: policyConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyConfigAList",
      },
      created_by: {
        value: policyCreatedByToHclTerraform(this._createdBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyCreatedByList",
      },
      hubs: {
        value: cdktf.listMapperHcl(policyHubsToHclTerraform, true)(this._hubs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyHubsList",
      },
      modified_by: {
        value: policyModifiedByToHclTerraform(this._modifiedBy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyModifiedByList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
