// https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyBgpConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Flag to enable ECMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#ecmp PolicyBgpConfig#ecmp}
  */
  readonly ecmp?: boolean | cdktf.IResolvable;
  /**
  * Flag to enable BGP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#enabled PolicyBgpConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Gateway for this BGP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#gateway_path PolicyBgpConfig#gateway_path}
  */
  readonly gatewayPath: string;
  /**
  * BGP Graceful Restart Configuration Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#graceful_restart_mode PolicyBgpConfig#graceful_restart_mode}
  */
  readonly gracefulRestartMode?: string;
  /**
  * BGP Stale Route Timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#graceful_restart_stale_route_timer PolicyBgpConfig#graceful_restart_stale_route_timer}
  */
  readonly gracefulRestartStaleRouteTimer?: number;
  /**
  * BGP Graceful Restart Timer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#graceful_restart_timer PolicyBgpConfig#graceful_restart_timer}
  */
  readonly gracefulRestartTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#id PolicyBgpConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable inter SR IBGP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#inter_sr_ibgp PolicyBgpConfig#inter_sr_ibgp}
  */
  readonly interSrIbgp?: boolean | cdktf.IResolvable;
  /**
  * BGP AS number in ASPLAIN/ASDOT Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#local_as_num PolicyBgpConfig#local_as_num}
  */
  readonly localAsNum?: string;
  /**
  * Flag to enable BGP multipath relax option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#multipath_relax PolicyBgpConfig#multipath_relax}
  */
  readonly multipathRelax?: boolean | cdktf.IResolvable;
  /**
  * Site Path for this BGP config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#site_path PolicyBgpConfig#site_path}
  */
  readonly sitePath?: string;
  /**
  * route_aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#route_aggregation PolicyBgpConfig#route_aggregation}
  */
  readonly routeAggregation?: PolicyBgpConfigRouteAggregation[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#tag PolicyBgpConfig#tag}
  */
  readonly tag?: PolicyBgpConfigTag[] | cdktf.IResolvable;
}
export interface PolicyBgpConfigRouteAggregation {
  /**
  * CIDR of aggregate address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#prefix PolicyBgpConfig#prefix}
  */
  readonly prefix?: string;
  /**
  * Send only summarized route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#summary_only PolicyBgpConfig#summary_only}
  */
  readonly summaryOnly?: boolean | cdktf.IResolvable;
}

export function policyBgpConfigRouteAggregationToTerraform(struct?: PolicyBgpConfigRouteAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix: cdktf.stringToTerraform(struct!.prefix),
    summary_only: cdktf.booleanToTerraform(struct!.summaryOnly),
  }
}


export function policyBgpConfigRouteAggregationToHclTerraform(struct?: PolicyBgpConfigRouteAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_only: {
      value: cdktf.booleanToHclTerraform(struct!.summaryOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyBgpConfigRouteAggregationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBgpConfigRouteAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._summaryOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryOnly = this._summaryOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyBgpConfigRouteAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prefix = undefined;
      this._summaryOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prefix = value.prefix;
      this._summaryOnly = value.summaryOnly;
    }
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // summary_only - computed: false, optional: true, required: false
  private _summaryOnly?: boolean | cdktf.IResolvable; 
  public get summaryOnly() {
    return this.getBooleanAttribute('summary_only');
  }
  public set summaryOnly(value: boolean | cdktf.IResolvable) {
    this._summaryOnly = value;
  }
  public resetSummaryOnly() {
    this._summaryOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryOnlyInput() {
    return this._summaryOnly;
  }
}

export class PolicyBgpConfigRouteAggregationList extends cdktf.ComplexList {
  public internalValue? : PolicyBgpConfigRouteAggregation[] | cdktf.IResolvable

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
  public get(index: number): PolicyBgpConfigRouteAggregationOutputReference {
    return new PolicyBgpConfigRouteAggregationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyBgpConfigTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#scope PolicyBgpConfig#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#tag PolicyBgpConfig#tag}
  */
  readonly tag?: string;
}

export function policyBgpConfigTagToTerraform(struct?: PolicyBgpConfigTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyBgpConfigTagToHclTerraform(struct?: PolicyBgpConfigTag | cdktf.IResolvable): any {
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

export class PolicyBgpConfigTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyBgpConfigTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PolicyBgpConfigTag | cdktf.IResolvable | undefined) {
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

export class PolicyBgpConfigTagList extends cdktf.ComplexList {
  public internalValue? : PolicyBgpConfigTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyBgpConfigTagOutputReference {
    return new PolicyBgpConfigTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config nsxt_policy_bgp_config}
*/
export class PolicyBgpConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_bgp_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyBgpConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyBgpConfig to import
  * @param importFromId The id of the existing PolicyBgpConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyBgpConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_bgp_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.11.0/docs/resources/policy_bgp_config nsxt_policy_bgp_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyBgpConfigConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyBgpConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_bgp_config',
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
    this._ecmp = config.ecmp;
    this._enabled = config.enabled;
    this._gatewayPath = config.gatewayPath;
    this._gracefulRestartMode = config.gracefulRestartMode;
    this._gracefulRestartStaleRouteTimer = config.gracefulRestartStaleRouteTimer;
    this._gracefulRestartTimer = config.gracefulRestartTimer;
    this._id = config.id;
    this._interSrIbgp = config.interSrIbgp;
    this._localAsNum = config.localAsNum;
    this._multipathRelax = config.multipathRelax;
    this._sitePath = config.sitePath;
    this._routeAggregation.internalValue = config.routeAggregation;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecmp - computed: false, optional: true, required: false
  private _ecmp?: boolean | cdktf.IResolvable; 
  public get ecmp() {
    return this.getBooleanAttribute('ecmp');
  }
  public set ecmp(value: boolean | cdktf.IResolvable) {
    this._ecmp = value;
  }
  public resetEcmp() {
    this._ecmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecmpInput() {
    return this._ecmp;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // gateway_id - computed: true, optional: false, required: false
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }

  // gateway_path - computed: false, optional: false, required: true
  private _gatewayPath?: string; 
  public get gatewayPath() {
    return this.getStringAttribute('gateway_path');
  }
  public set gatewayPath(value: string) {
    this._gatewayPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPathInput() {
    return this._gatewayPath;
  }

  // graceful_restart_mode - computed: false, optional: true, required: false
  private _gracefulRestartMode?: string; 
  public get gracefulRestartMode() {
    return this.getStringAttribute('graceful_restart_mode');
  }
  public set gracefulRestartMode(value: string) {
    this._gracefulRestartMode = value;
  }
  public resetGracefulRestartMode() {
    this._gracefulRestartMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartModeInput() {
    return this._gracefulRestartMode;
  }

  // graceful_restart_stale_route_timer - computed: false, optional: true, required: false
  private _gracefulRestartStaleRouteTimer?: number; 
  public get gracefulRestartStaleRouteTimer() {
    return this.getNumberAttribute('graceful_restart_stale_route_timer');
  }
  public set gracefulRestartStaleRouteTimer(value: number) {
    this._gracefulRestartStaleRouteTimer = value;
  }
  public resetGracefulRestartStaleRouteTimer() {
    this._gracefulRestartStaleRouteTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartStaleRouteTimerInput() {
    return this._gracefulRestartStaleRouteTimer;
  }

  // graceful_restart_timer - computed: false, optional: true, required: false
  private _gracefulRestartTimer?: number; 
  public get gracefulRestartTimer() {
    return this.getNumberAttribute('graceful_restart_timer');
  }
  public set gracefulRestartTimer(value: number) {
    this._gracefulRestartTimer = value;
  }
  public resetGracefulRestartTimer() {
    this._gracefulRestartTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulRestartTimerInput() {
    return this._gracefulRestartTimer;
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

  // inter_sr_ibgp - computed: true, optional: true, required: false
  private _interSrIbgp?: boolean | cdktf.IResolvable; 
  public get interSrIbgp() {
    return this.getBooleanAttribute('inter_sr_ibgp');
  }
  public set interSrIbgp(value: boolean | cdktf.IResolvable) {
    this._interSrIbgp = value;
  }
  public resetInterSrIbgp() {
    this._interSrIbgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interSrIbgpInput() {
    return this._interSrIbgp;
  }

  // local_as_num - computed: true, optional: true, required: false
  private _localAsNum?: string; 
  public get localAsNum() {
    return this.getStringAttribute('local_as_num');
  }
  public set localAsNum(value: string) {
    this._localAsNum = value;
  }
  public resetLocalAsNum() {
    this._localAsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsNumInput() {
    return this._localAsNum;
  }

  // locale_service_id - computed: true, optional: false, required: false
  public get localeServiceId() {
    return this.getStringAttribute('locale_service_id');
  }

  // multipath_relax - computed: true, optional: true, required: false
  private _multipathRelax?: boolean | cdktf.IResolvable; 
  public get multipathRelax() {
    return this.getBooleanAttribute('multipath_relax');
  }
  public set multipathRelax(value: boolean | cdktf.IResolvable) {
    this._multipathRelax = value;
  }
  public resetMultipathRelax() {
    this._multipathRelax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipathRelaxInput() {
    return this._multipathRelax;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // site_path - computed: false, optional: true, required: false
  private _sitePath?: string; 
  public get sitePath() {
    return this.getStringAttribute('site_path');
  }
  public set sitePath(value: string) {
    this._sitePath = value;
  }
  public resetSitePath() {
    this._sitePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePathInput() {
    return this._sitePath;
  }

  // route_aggregation - computed: false, optional: true, required: false
  private _routeAggregation = new PolicyBgpConfigRouteAggregationList(this, "route_aggregation", false);
  public get routeAggregation() {
    return this._routeAggregation;
  }
  public putRouteAggregation(value: PolicyBgpConfigRouteAggregation[] | cdktf.IResolvable) {
    this._routeAggregation.internalValue = value;
  }
  public resetRouteAggregation() {
    this._routeAggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAggregationInput() {
    return this._routeAggregation.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyBgpConfigTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyBgpConfigTag[] | cdktf.IResolvable) {
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
      ecmp: cdktf.booleanToTerraform(this._ecmp),
      enabled: cdktf.booleanToTerraform(this._enabled),
      gateway_path: cdktf.stringToTerraform(this._gatewayPath),
      graceful_restart_mode: cdktf.stringToTerraform(this._gracefulRestartMode),
      graceful_restart_stale_route_timer: cdktf.numberToTerraform(this._gracefulRestartStaleRouteTimer),
      graceful_restart_timer: cdktf.numberToTerraform(this._gracefulRestartTimer),
      id: cdktf.stringToTerraform(this._id),
      inter_sr_ibgp: cdktf.booleanToTerraform(this._interSrIbgp),
      local_as_num: cdktf.stringToTerraform(this._localAsNum),
      multipath_relax: cdktf.booleanToTerraform(this._multipathRelax),
      site_path: cdktf.stringToTerraform(this._sitePath),
      route_aggregation: cdktf.listMapper(policyBgpConfigRouteAggregationToTerraform, true)(this._routeAggregation.internalValue),
      tag: cdktf.listMapper(policyBgpConfigTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecmp: {
        value: cdktf.booleanToHclTerraform(this._ecmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway_path: {
        value: cdktf.stringToHclTerraform(this._gatewayPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_mode: {
        value: cdktf.stringToHclTerraform(this._gracefulRestartMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graceful_restart_stale_route_timer: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartStaleRouteTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      graceful_restart_timer: {
        value: cdktf.numberToHclTerraform(this._gracefulRestartTimer),
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
      inter_sr_ibgp: {
        value: cdktf.booleanToHclTerraform(this._interSrIbgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_as_num: {
        value: cdktf.stringToHclTerraform(this._localAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multipath_relax: {
        value: cdktf.booleanToHclTerraform(this._multipathRelax),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site_path: {
        value: cdktf.stringToHclTerraform(this._sitePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_aggregation: {
        value: cdktf.listMapperHcl(policyBgpConfigRouteAggregationToHclTerraform, true)(this._routeAggregation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyBgpConfigRouteAggregationList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyBgpConfigTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyBgpConfigTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
