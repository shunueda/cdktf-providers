// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Select Service-IP with the highest number of active servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#active_servers_enable GslbPolicy#active_servers_enable}
  */
  readonly activeServersEnable?: number;
  /**
  * Break when no active server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#active_servers_fail_break GslbPolicy#active_servers_fail_break}
  */
  readonly activeServersFailBreak?: number;
  /**
  * Enable admin ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#admin_ip_enable GslbPolicy#admin_ip_enable}
  */
  readonly adminIpEnable?: number;
  /**
  * Return highest priority server only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#admin_ip_top_only GslbPolicy#admin_ip_top_only}
  */
  readonly adminIpTopOnly?: number;
  /**
  * Select Service-IP for the device having maximum admin preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#admin_preference GslbPolicy#admin_preference}
  */
  readonly adminPreference?: number;
  /**
  * Select alias name having maximum admin preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#alias_admin_preference GslbPolicy#alias_admin_preference}
  */
  readonly aliasAdminPreference?: number;
  /**
  * Select record based on the amount of available service-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#amount_first GslbPolicy#amount_first}
  */
  readonly amountFirst?: number;
  /**
  * Enable bw cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#bw_cost_enable GslbPolicy#bw_cost_enable}
  */
  readonly bwCostEnable?: number;
  /**
  * Break when exceed limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#bw_cost_fail_break GslbPolicy#bw_cost_fail_break}
  */
  readonly bwCostFailBreak?: number;
  /**
  * Select Service-IP by geographic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geographic GslbPolicy#geographic}
  */
  readonly geographic?: number;
  /**
  * Select Service-IP by health status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#health_check GslbPolicy#health_check}
  */
  readonly healthCheck?: number;
  /**
  * Check health preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#health_check_preference_enable GslbPolicy#health_check_preference_enable}
  */
  readonly healthCheckPreferenceEnable?: number;
  /**
  * Only keep top n
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#health_preference_top GslbPolicy#health_preference_top}
  */
  readonly healthPreferenceTop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#id GslbPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify IP List (IP List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_list GslbPolicy#ip_list}
  */
  readonly ipList?: string;
  /**
  * Least response selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#least_response GslbPolicy#least_response}
  */
  readonly leastResponse?: number;
  /**
  * Break if no valid Service-IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#metric_fail_break GslbPolicy#metric_fail_break}
  */
  readonly metricFailBreak?: number;
  /**
  * Always check Service-IP for all enabled metrics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#metric_force_check GslbPolicy#metric_force_check}
  */
  readonly metricForceCheck?: number;
  /**
  * Specify order of metric
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#metric_order GslbPolicy#metric_order}
  */
  readonly metricOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#metric_type GslbPolicy#metric_type}
  */
  readonly metricType?: string;
  /**
  * Specify policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#name GslbPolicy#name}
  */
  readonly name: string;
  /**
  * Enable Select Service-IP for device having maximum number of available sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#num_session_enable GslbPolicy#num_session_enable}
  */
  readonly numSessionEnable?: number;
  /**
  * The difference between the available sessions, default is 10 (Tolerance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#num_session_tolerance GslbPolicy#num_session_tolerance}
  */
  readonly numSessionTolerance?: number;
  /**
  * Return highest priority server only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ordered_ip_top_only GslbPolicy#ordered_ip_top_only}
  */
  readonly orderedIpTopOnly?: number;
  /**
  * Round robin selection, enabled by default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#round_robin GslbPolicy#round_robin}
  */
  readonly roundRobin?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#user_tag GslbPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Select alias name by weighted preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#weighted_alias GslbPolicy#weighted_alias}
  */
  readonly weightedAlias?: number;
  /**
  * Enable Select Service-IP by weighted preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#weighted_ip_enable GslbPolicy#weighted_ip_enable}
  */
  readonly weightedIpEnable?: number;
  /**
  * Weighted by total hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#weighted_ip_total_hits GslbPolicy#weighted_ip_total_hits}
  */
  readonly weightedIpTotalHits?: number;
  /**
  * Enable Select Service-IP by weighted site preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#weighted_site_enable GslbPolicy#weighted_site_enable}
  */
  readonly weightedSiteEnable?: number;
  /**
  * Weighted by total hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#weighted_site_total_hits GslbPolicy#weighted_site_total_hits}
  */
  readonly weightedSiteTotalHits?: number;
  /**
  * active_rdt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#active_rdt GslbPolicy#active_rdt}
  */
  readonly activeRdt?: GslbPolicyActiveRdt;
  /**
  * auto_map block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#auto_map GslbPolicy#auto_map}
  */
  readonly autoMap?: GslbPolicyAutoMap;
  /**
  * capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#capacity GslbPolicy#capacity}
  */
  readonly capacity?: GslbPolicyCapacity;
  /**
  * connection_load block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load GslbPolicy#connection_load}
  */
  readonly connectionLoad?: GslbPolicyConnectionLoad;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dns GslbPolicy#dns}
  */
  readonly dns?: GslbPolicyDns;
  /**
  * edns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#edns GslbPolicy#edns}
  */
  readonly edns?: GslbPolicyEdns;
  /**
  * geo_location_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geo_location_list GslbPolicy#geo_location_list}
  */
  readonly geoLocationList?: GslbPolicyGeoLocationListStruct[] | cdktf.IResolvable;
  /**
  * geo_location_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geo_location_match GslbPolicy#geo_location_match}
  */
  readonly geoLocationMatch?: GslbPolicyGeoLocationMatch;
}
export interface GslbPolicyActiveRdt {
  /**
  * Active round-delay-time by controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#controller GslbPolicy#controller}
  */
  readonly controller?: number;
  /**
  * The difference between the round-delay-time, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#difference GslbPolicy#difference}
  */
  readonly difference?: number;
  /**
  * Enable the active rdt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#enable GslbPolicy#enable}
  */
  readonly enable?: number;
  /**
  * Break when no valid RDT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#fail_break GslbPolicy#fail_break}
  */
  readonly failBreak?: number;
  /**
  * Ignore IP Address specified in IP List by ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ignore_id GslbPolicy#ignore_id}
  */
  readonly ignoreId?: number;
  /**
  * Keep tracking client even round-delay-time samples are ready
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#keep_tracking GslbPolicy#keep_tracking}
  */
  readonly keepTracking?: number;
  /**
  * Limit of allowed RDT, default is 16383 (Limit, unit: millisecond)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#limit GslbPolicy#limit}
  */
  readonly limit?: number;
  /**
  * Enable the round-delay-time to the controller
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#proto_rdt_enable GslbPolicy#proto_rdt_enable}
  */
  readonly protoRdtEnable?: number;
  /**
  * Specify samples number for round-delay-time (Number of samples,default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#samples GslbPolicy#samples}
  */
  readonly samples?: number;
  /**
  * Single Shot RDT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#single_shot GslbPolicy#single_shot}
  */
  readonly singleShot?: number;
  /**
  * Skip query if round-delay-time samples are not ready (Specify maximum skip count,default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#skip GslbPolicy#skip}
  */
  readonly skip?: number;
  /**
  * Specify timeout if round-delay-time samples are not ready (Specify timeout, unit:sec,default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#timeout GslbPolicy#timeout}
  */
  readonly timeout?: number;
  /**
  * The difference percentage between the round-delay-time, default is 10 (Tolerance)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#tolerance GslbPolicy#tolerance}
  */
  readonly tolerance?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyActiveRdtToTerraform(struct?: GslbPolicyActiveRdtOutputReference | GslbPolicyActiveRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller: cdktf.numberToTerraform(struct!.controller),
    difference: cdktf.numberToTerraform(struct!.difference),
    enable: cdktf.numberToTerraform(struct!.enable),
    fail_break: cdktf.numberToTerraform(struct!.failBreak),
    ignore_id: cdktf.numberToTerraform(struct!.ignoreId),
    keep_tracking: cdktf.numberToTerraform(struct!.keepTracking),
    limit: cdktf.numberToTerraform(struct!.limit),
    proto_rdt_enable: cdktf.numberToTerraform(struct!.protoRdtEnable),
    samples: cdktf.numberToTerraform(struct!.samples),
    single_shot: cdktf.numberToTerraform(struct!.singleShot),
    skip: cdktf.numberToTerraform(struct!.skip),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tolerance: cdktf.numberToTerraform(struct!.tolerance),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyActiveRdtToHclTerraform(struct?: GslbPolicyActiveRdtOutputReference | GslbPolicyActiveRdt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller: {
      value: cdktf.numberToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    difference: {
      value: cdktf.numberToHclTerraform(struct!.difference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_break: {
      value: cdktf.numberToHclTerraform(struct!.failBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_id: {
      value: cdktf.numberToHclTerraform(struct!.ignoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_tracking: {
      value: cdktf.numberToHclTerraform(struct!.keepTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto_rdt_enable: {
      value: cdktf.numberToHclTerraform(struct!.protoRdtEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_shot: {
      value: cdktf.numberToHclTerraform(struct!.singleShot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip: {
      value: cdktf.numberToHclTerraform(struct!.skip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tolerance: {
      value: cdktf.numberToHclTerraform(struct!.tolerance),
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

export class GslbPolicyActiveRdtOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyActiveRdt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._difference !== undefined) {
      hasAnyValues = true;
      internalValueResult.difference = this._difference;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._failBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.failBreak = this._failBreak;
    }
    if (this._ignoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreId = this._ignoreId;
    }
    if (this._keepTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepTracking = this._keepTracking;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._protoRdtEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protoRdtEnable = this._protoRdtEnable;
    }
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._singleShot !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleShot = this._singleShot;
    }
    if (this._skip !== undefined) {
      hasAnyValues = true;
      internalValueResult.skip = this._skip;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tolerance !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerance = this._tolerance;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyActiveRdt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controller = undefined;
      this._difference = undefined;
      this._enable = undefined;
      this._failBreak = undefined;
      this._ignoreId = undefined;
      this._keepTracking = undefined;
      this._limit = undefined;
      this._protoRdtEnable = undefined;
      this._samples = undefined;
      this._singleShot = undefined;
      this._skip = undefined;
      this._timeout = undefined;
      this._tolerance = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controller = value.controller;
      this._difference = value.difference;
      this._enable = value.enable;
      this._failBreak = value.failBreak;
      this._ignoreId = value.ignoreId;
      this._keepTracking = value.keepTracking;
      this._limit = value.limit;
      this._protoRdtEnable = value.protoRdtEnable;
      this._samples = value.samples;
      this._singleShot = value.singleShot;
      this._skip = value.skip;
      this._timeout = value.timeout;
      this._tolerance = value.tolerance;
      this._uuid = value.uuid;
    }
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: number; 
  public get controller() {
    return this.getNumberAttribute('controller');
  }
  public set controller(value: number) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
  }

  // difference - computed: false, optional: true, required: false
  private _difference?: number; 
  public get difference() {
    return this.getNumberAttribute('difference');
  }
  public set difference(value: number) {
    this._difference = value;
  }
  public resetDifference() {
    this._difference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differenceInput() {
    return this._difference;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // fail_break - computed: false, optional: true, required: false
  private _failBreak?: number; 
  public get failBreak() {
    return this.getNumberAttribute('fail_break');
  }
  public set failBreak(value: number) {
    this._failBreak = value;
  }
  public resetFailBreak() {
    this._failBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failBreakInput() {
    return this._failBreak;
  }

  // ignore_id - computed: false, optional: true, required: false
  private _ignoreId?: number; 
  public get ignoreId() {
    return this.getNumberAttribute('ignore_id');
  }
  public set ignoreId(value: number) {
    this._ignoreId = value;
  }
  public resetIgnoreId() {
    this._ignoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdInput() {
    return this._ignoreId;
  }

  // keep_tracking - computed: false, optional: true, required: false
  private _keepTracking?: number; 
  public get keepTracking() {
    return this.getNumberAttribute('keep_tracking');
  }
  public set keepTracking(value: number) {
    this._keepTracking = value;
  }
  public resetKeepTracking() {
    this._keepTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepTrackingInput() {
    return this._keepTracking;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // proto_rdt_enable - computed: false, optional: true, required: false
  private _protoRdtEnable?: number; 
  public get protoRdtEnable() {
    return this.getNumberAttribute('proto_rdt_enable');
  }
  public set protoRdtEnable(value: number) {
    this._protoRdtEnable = value;
  }
  public resetProtoRdtEnable() {
    this._protoRdtEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoRdtEnableInput() {
    return this._protoRdtEnable;
  }

  // samples - computed: false, optional: true, required: false
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  public resetSamples() {
    this._samples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // single_shot - computed: false, optional: true, required: false
  private _singleShot?: number; 
  public get singleShot() {
    return this.getNumberAttribute('single_shot');
  }
  public set singleShot(value: number) {
    this._singleShot = value;
  }
  public resetSingleShot() {
    this._singleShot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleShotInput() {
    return this._singleShot;
  }

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // tolerance - computed: false, optional: true, required: false
  private _tolerance?: number; 
  public get tolerance() {
    return this.getNumberAttribute('tolerance');
  }
  public set tolerance(value: number) {
    this._tolerance = value;
  }
  public resetTolerance() {
    this._tolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleranceInput() {
    return this._tolerance;
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
export interface GslbPolicyAutoMap {
  /**
  * All modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#all GslbPolicy#all}
  */
  readonly all?: number;
  /**
  * Specify Disable Auto Map Module
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#module_disable GslbPolicy#module_disable}
  */
  readonly moduleDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#module_type GslbPolicy#module_type}
  */
  readonly moduleType?: string;
  /**
  * Specify Auto Map TTL (TTL, default is 300)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ttl GslbPolicy#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyAutoMapToTerraform(struct?: GslbPolicyAutoMapOutputReference | GslbPolicyAutoMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.numberToTerraform(struct!.all),
    module_disable: cdktf.numberToTerraform(struct!.moduleDisable),
    module_type: cdktf.stringToTerraform(struct!.moduleType),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyAutoMapToHclTerraform(struct?: GslbPolicyAutoMapOutputReference | GslbPolicyAutoMap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.numberToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    module_disable: {
      value: cdktf.numberToHclTerraform(struct!.moduleDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    module_type: {
      value: cdktf.stringToHclTerraform(struct!.moduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
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

export class GslbPolicyAutoMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyAutoMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._moduleDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleDisable = this._moduleDisable;
    }
    if (this._moduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleType = this._moduleType;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyAutoMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._moduleDisable = undefined;
      this._moduleType = undefined;
      this._ttl = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._moduleDisable = value.moduleDisable;
      this._moduleType = value.moduleType;
      this._ttl = value.ttl;
      this._uuid = value.uuid;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: number; 
  public get all() {
    return this.getNumberAttribute('all');
  }
  public set all(value: number) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // module_disable - computed: false, optional: true, required: false
  private _moduleDisable?: number; 
  public get moduleDisable() {
    return this.getNumberAttribute('module_disable');
  }
  public set moduleDisable(value: number) {
    this._moduleDisable = value;
  }
  public resetModuleDisable() {
    this._moduleDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleDisableInput() {
    return this._moduleDisable;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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
export interface GslbPolicyCapacity {
  /**
  * Enable capacity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#capacity_enable GslbPolicy#capacity_enable}
  */
  readonly capacityEnable?: number;
  /**
  * Break when exceed threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#capacity_fail_break GslbPolicy#capacity_fail_break}
  */
  readonly capacityFailBreak?: number;
  /**
  * Specify capacity threshold, default is 90
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#threshold GslbPolicy#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyCapacityToTerraform(struct?: GslbPolicyCapacityOutputReference | GslbPolicyCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_enable: cdktf.numberToTerraform(struct!.capacityEnable),
    capacity_fail_break: cdktf.numberToTerraform(struct!.capacityFailBreak),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyCapacityToHclTerraform(struct?: GslbPolicyCapacityOutputReference | GslbPolicyCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capacity_enable: {
      value: cdktf.numberToHclTerraform(struct!.capacityEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    capacity_fail_break: {
      value: cdktf.numberToHclTerraform(struct!.capacityFailBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
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

export class GslbPolicyCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._capacityEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityEnable = this._capacityEnable;
    }
    if (this._capacityFailBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.capacityFailBreak = this._capacityFailBreak;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._capacityEnable = undefined;
      this._capacityFailBreak = undefined;
      this._threshold = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._capacityEnable = value.capacityEnable;
      this._capacityFailBreak = value.capacityFailBreak;
      this._threshold = value.threshold;
      this._uuid = value.uuid;
    }
  }

  // capacity_enable - computed: false, optional: true, required: false
  private _capacityEnable?: number; 
  public get capacityEnable() {
    return this.getNumberAttribute('capacity_enable');
  }
  public set capacityEnable(value: number) {
    this._capacityEnable = value;
  }
  public resetCapacityEnable() {
    this._capacityEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityEnableInput() {
    return this._capacityEnable;
  }

  // capacity_fail_break - computed: false, optional: true, required: false
  private _capacityFailBreak?: number; 
  public get capacityFailBreak() {
    return this.getNumberAttribute('capacity_fail_break');
  }
  public set capacityFailBreak(value: number) {
    this._capacityFailBreak = value;
  }
  public resetCapacityFailBreak() {
    this._capacityFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityFailBreakInput() {
    return this._capacityFailBreak;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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
export interface GslbPolicyConnectionLoad {
  /**
  * Enable connection-load
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load_enable GslbPolicy#connection_load_enable}
  */
  readonly connectionLoadEnable?: number;
  /**
  * Break when exceed limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load_fail_break GslbPolicy#connection_load_fail_break}
  */
  readonly connectionLoadFailBreak?: number;
  /**
  * Interval between two samples, Unit: second (Interval value,default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load_interval GslbPolicy#connection_load_interval}
  */
  readonly connectionLoadInterval?: number;
  /**
  * The value of the connection-load limit, default is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load_limit GslbPolicy#connection_load_limit}
  */
  readonly connectionLoadLimit?: number;
  /**
  * Specify samples for connection-load (Number of samples used to calculate the connection load, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#connection_load_samples GslbPolicy#connection_load_samples}
  */
  readonly connectionLoadSamples?: number;
  /**
  * Limit of maxinum connection load, default is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#limit GslbPolicy#limit}
  */
  readonly limit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyConnectionLoadToTerraform(struct?: GslbPolicyConnectionLoadOutputReference | GslbPolicyConnectionLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_load_enable: cdktf.numberToTerraform(struct!.connectionLoadEnable),
    connection_load_fail_break: cdktf.numberToTerraform(struct!.connectionLoadFailBreak),
    connection_load_interval: cdktf.numberToTerraform(struct!.connectionLoadInterval),
    connection_load_limit: cdktf.numberToTerraform(struct!.connectionLoadLimit),
    connection_load_samples: cdktf.numberToTerraform(struct!.connectionLoadSamples),
    limit: cdktf.numberToTerraform(struct!.limit),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyConnectionLoadToHclTerraform(struct?: GslbPolicyConnectionLoadOutputReference | GslbPolicyConnectionLoad): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_load_enable: {
      value: cdktf.numberToHclTerraform(struct!.connectionLoadEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_load_fail_break: {
      value: cdktf.numberToHclTerraform(struct!.connectionLoadFailBreak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_load_interval: {
      value: cdktf.numberToHclTerraform(struct!.connectionLoadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_load_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLoadLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_load_samples: {
      value: cdktf.numberToHclTerraform(struct!.connectionLoadSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
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

export class GslbPolicyConnectionLoadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyConnectionLoad | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionLoadEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLoadEnable = this._connectionLoadEnable;
    }
    if (this._connectionLoadFailBreak !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLoadFailBreak = this._connectionLoadFailBreak;
    }
    if (this._connectionLoadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLoadInterval = this._connectionLoadInterval;
    }
    if (this._connectionLoadLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLoadLimit = this._connectionLoadLimit;
    }
    if (this._connectionLoadSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLoadSamples = this._connectionLoadSamples;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyConnectionLoad | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionLoadEnable = undefined;
      this._connectionLoadFailBreak = undefined;
      this._connectionLoadInterval = undefined;
      this._connectionLoadLimit = undefined;
      this._connectionLoadSamples = undefined;
      this._limit = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionLoadEnable = value.connectionLoadEnable;
      this._connectionLoadFailBreak = value.connectionLoadFailBreak;
      this._connectionLoadInterval = value.connectionLoadInterval;
      this._connectionLoadLimit = value.connectionLoadLimit;
      this._connectionLoadSamples = value.connectionLoadSamples;
      this._limit = value.limit;
      this._uuid = value.uuid;
    }
  }

  // connection_load_enable - computed: false, optional: true, required: false
  private _connectionLoadEnable?: number; 
  public get connectionLoadEnable() {
    return this.getNumberAttribute('connection_load_enable');
  }
  public set connectionLoadEnable(value: number) {
    this._connectionLoadEnable = value;
  }
  public resetConnectionLoadEnable() {
    this._connectionLoadEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadEnableInput() {
    return this._connectionLoadEnable;
  }

  // connection_load_fail_break - computed: false, optional: true, required: false
  private _connectionLoadFailBreak?: number; 
  public get connectionLoadFailBreak() {
    return this.getNumberAttribute('connection_load_fail_break');
  }
  public set connectionLoadFailBreak(value: number) {
    this._connectionLoadFailBreak = value;
  }
  public resetConnectionLoadFailBreak() {
    this._connectionLoadFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadFailBreakInput() {
    return this._connectionLoadFailBreak;
  }

  // connection_load_interval - computed: false, optional: true, required: false
  private _connectionLoadInterval?: number; 
  public get connectionLoadInterval() {
    return this.getNumberAttribute('connection_load_interval');
  }
  public set connectionLoadInterval(value: number) {
    this._connectionLoadInterval = value;
  }
  public resetConnectionLoadInterval() {
    this._connectionLoadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadIntervalInput() {
    return this._connectionLoadInterval;
  }

  // connection_load_limit - computed: false, optional: true, required: false
  private _connectionLoadLimit?: number; 
  public get connectionLoadLimit() {
    return this.getNumberAttribute('connection_load_limit');
  }
  public set connectionLoadLimit(value: number) {
    this._connectionLoadLimit = value;
  }
  public resetConnectionLoadLimit() {
    this._connectionLoadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadLimitInput() {
    return this._connectionLoadLimit;
  }

  // connection_load_samples - computed: false, optional: true, required: false
  private _connectionLoadSamples?: number; 
  public get connectionLoadSamples() {
    return this.getNumberAttribute('connection_load_samples');
  }
  public set connectionLoadSamples(value: number) {
    this._connectionLoadSamples = value;
  }
  public resetConnectionLoadSamples() {
    this._connectionLoadSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadSamplesInput() {
    return this._connectionLoadSamples;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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
export interface GslbPolicyDnsBlockValue {
  /**
  * Specify Type Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#block_value GslbPolicy#block_value}
  */
  readonly blockValue?: number;
}

export function gslbPolicyDnsBlockValueToTerraform(struct?: GslbPolicyDnsBlockValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_value: cdktf.numberToTerraform(struct!.blockValue),
  }
}


export function gslbPolicyDnsBlockValueToHclTerraform(struct?: GslbPolicyDnsBlockValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_value: {
      value: cdktf.numberToHclTerraform(struct!.blockValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsBlockValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsBlockValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockValue = this._blockValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsBlockValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockValue = value.blockValue;
    }
  }

  // block_value - computed: false, optional: true, required: false
  private _blockValue?: number; 
  public get blockValue() {
    return this.getNumberAttribute('block_value');
  }
  public set blockValue(value: number) {
    this._blockValue = value;
  }
  public resetBlockValue() {
    this._blockValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockValueInput() {
    return this._blockValue;
  }
}

export class GslbPolicyDnsBlockValueList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsBlockValue[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsBlockValueOutputReference {
    return new GslbPolicyDnsBlockValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDnsIpv6 {
  /**
  * 'addition': Append Mapped Record in DNS Addition Section; 'answer': Append Mapped Record in DNS Answer Section; 'exclusive': Only return AAAA Record; 'replace': Replace Record with Mapped Record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dns_ipv6_mapping_type GslbPolicy#dns_ipv6_mapping_type}
  */
  readonly dnsIpv6MappingType?: string;
  /**
  * 'mix': Return both AAAA Record and A Record; 'smart': Return AAAA Record by DNS Query Type; 'mapping': Map A Record to AAAA Record;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dns_ipv6_option GslbPolicy#dns_ipv6_option}
  */
  readonly dnsIpv6Option?: string;
}

export function gslbPolicyDnsIpv6ToTerraform(struct?: GslbPolicyDnsIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv6_mapping_type: cdktf.stringToTerraform(struct!.dnsIpv6MappingType),
    dns_ipv6_option: cdktf.stringToTerraform(struct!.dnsIpv6Option),
  }
}


export function gslbPolicyDnsIpv6ToHclTerraform(struct?: GslbPolicyDnsIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv6_mapping_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6MappingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_option: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Option),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv6MappingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6MappingType = this._dnsIpv6MappingType;
    }
    if (this._dnsIpv6Option !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Option = this._dnsIpv6Option;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsIpv6MappingType = undefined;
      this._dnsIpv6Option = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsIpv6MappingType = value.dnsIpv6MappingType;
      this._dnsIpv6Option = value.dnsIpv6Option;
    }
  }

  // dns_ipv6_mapping_type - computed: false, optional: true, required: false
  private _dnsIpv6MappingType?: string; 
  public get dnsIpv6MappingType() {
    return this.getStringAttribute('dns_ipv6_mapping_type');
  }
  public set dnsIpv6MappingType(value: string) {
    this._dnsIpv6MappingType = value;
  }
  public resetDnsIpv6MappingType() {
    this._dnsIpv6MappingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6MappingTypeInput() {
    return this._dnsIpv6MappingType;
  }

  // dns_ipv6_option - computed: false, optional: true, required: false
  private _dnsIpv6Option?: string; 
  public get dnsIpv6Option() {
    return this.getStringAttribute('dns_ipv6_option');
  }
  public set dnsIpv6Option(value: string) {
    this._dnsIpv6Option = value;
  }
  public resetDnsIpv6Option() {
    this._dnsIpv6Option = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6OptionInput() {
    return this._dnsIpv6Option;
  }
}

export class GslbPolicyDnsIpv6List extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsIpv6[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsIpv6OutputReference {
    return new GslbPolicyDnsIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDnsProxyBlockPortRangeListStruct {
  /**
  * Specify Type Range (From)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#proxy_block_range_from GslbPolicy#proxy_block_range_from}
  */
  readonly proxyBlockRangeFrom?: number;
  /**
  * To
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#proxy_block_range_to GslbPolicy#proxy_block_range_to}
  */
  readonly proxyBlockRangeTo?: number;
}

export function gslbPolicyDnsProxyBlockPortRangeListStructToTerraform(struct?: GslbPolicyDnsProxyBlockPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_block_range_from: cdktf.numberToTerraform(struct!.proxyBlockRangeFrom),
    proxy_block_range_to: cdktf.numberToTerraform(struct!.proxyBlockRangeTo),
  }
}


export function gslbPolicyDnsProxyBlockPortRangeListStructToHclTerraform(struct?: GslbPolicyDnsProxyBlockPortRangeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_block_range_from: {
      value: cdktf.numberToHclTerraform(struct!.proxyBlockRangeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_block_range_to: {
      value: cdktf.numberToHclTerraform(struct!.proxyBlockRangeTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsProxyBlockPortRangeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyDnsProxyBlockPortRangeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyBlockRangeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBlockRangeFrom = this._proxyBlockRangeFrom;
    }
    if (this._proxyBlockRangeTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBlockRangeTo = this._proxyBlockRangeTo;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDnsProxyBlockPortRangeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxyBlockRangeFrom = undefined;
      this._proxyBlockRangeTo = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxyBlockRangeFrom = value.proxyBlockRangeFrom;
      this._proxyBlockRangeTo = value.proxyBlockRangeTo;
    }
  }

  // proxy_block_range_from - computed: false, optional: true, required: false
  private _proxyBlockRangeFrom?: number; 
  public get proxyBlockRangeFrom() {
    return this.getNumberAttribute('proxy_block_range_from');
  }
  public set proxyBlockRangeFrom(value: number) {
    this._proxyBlockRangeFrom = value;
  }
  public resetProxyBlockRangeFrom() {
    this._proxyBlockRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockRangeFromInput() {
    return this._proxyBlockRangeFrom;
  }

  // proxy_block_range_to - computed: false, optional: true, required: false
  private _proxyBlockRangeTo?: number; 
  public get proxyBlockRangeTo() {
    return this.getNumberAttribute('proxy_block_range_to');
  }
  public set proxyBlockRangeTo(value: number) {
    this._proxyBlockRangeTo = value;
  }
  public resetProxyBlockRangeTo() {
    this._proxyBlockRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockRangeToInput() {
    return this._proxyBlockRangeTo;
  }
}

export class GslbPolicyDnsProxyBlockPortRangeListStructList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyDnsProxyBlockPortRangeListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyDnsProxyBlockPortRangeListStructOutputReference {
    return new GslbPolicyDnsProxyBlockPortRangeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyDns {
  /**
  * Apply DNS action for service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#action GslbPolicy#action}
  */
  readonly action?: number;
  /**
  * 'drop': Drop query; 'reject': Send refuse response; 'ignore': Send empty response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#action_type GslbPolicy#action_type}
  */
  readonly actionType?: string;
  /**
  * Only keep active servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#active_only GslbPolicy#active_only}
  */
  readonly activeOnly?: number;
  /**
  * Continue if no candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#active_only_fail_safe GslbPolicy#active_only_fail_safe}
  */
  readonly activeOnlyFailSafe?: number;
  /**
  * Specify aging-time, default is TTL in DNS record, unit: second (Aging time, default 0 means using TTL in DNS record as aging time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#aging_time GslbPolicy#aging_time}
  */
  readonly agingTime?: number;
  /**
  * Return alias name when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#backup_alias GslbPolicy#backup_alias}
  */
  readonly backupAlias?: number;
  /**
  * Return fallback server when fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#backup_server GslbPolicy#backup_server}
  */
  readonly backupServer?: number;
  /**
  * Specify Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#block_action GslbPolicy#block_action}
  */
  readonly blockAction?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#block_type GslbPolicy#block_type}
  */
  readonly blockType?: string;
  /**
  * Cache DNS Server response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#cache GslbPolicy#cache}
  */
  readonly cache?: number;
  /**
  * Apply GSLB for DNS Server response when service is Canonical Name (CNAME)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#cname_detect GslbPolicy#cname_detect}
  */
  readonly cnameDetect?: number;
  /**
  * Zone Delegation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#delegation GslbPolicy#delegation}
  */
  readonly delegation?: number;
  /**
  * Append MX Records in Addition Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dns_addition_mx GslbPolicy#dns_addition_mx}
  */
  readonly dnsAdditionMx?: number;
  /**
  * Automatically build DNS Infrastructure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dns_auto_map GslbPolicy#dns_auto_map}
  */
  readonly dnsAutoMap?: number;
  /**
  * Make dynamically change the preference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dynamic_preference GslbPolicy#dynamic_preference}
  */
  readonly dynamicPreference?: number;
  /**
  * dynamically change the weight
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#dynamic_weight GslbPolicy#dynamic_weight}
  */
  readonly dynamicWeight?: number;
  /**
  * Return DNS response with external IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#external_ip GslbPolicy#external_ip}
  */
  readonly externalIp?: number;
  /**
  * Return DNS response with external SOA Record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#external_soa GslbPolicy#external_soa}
  */
  readonly externalSoa?: number;
  /**
  * Apply DNS action by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geoloc_action GslbPolicy#geoloc_action}
  */
  readonly geolocAction?: number;
  /**
  * Return alias name by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geoloc_alias GslbPolicy#geoloc_alias}
  */
  readonly geolocAlias?: number;
  /**
  * Apply different policy by geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geoloc_policy GslbPolicy#geoloc_policy}
  */
  readonly geolocPolicy?: number;
  /**
  * 'none': None; 'answer': Append Hint Records in DNS Answer Section; 'addition': Append Hint Records in DNS Addition Section;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#hint GslbPolicy#hint}
  */
  readonly hint?: string;
  /**
  * Replace DNS Server Response with GSLB Service-IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_replace GslbPolicy#ip_replace}
  */
  readonly ipReplace?: number;
  /**
  * 'none': None; 'query': DNS Query; 'response': DNS Response; 'both': Both DNS Query and Response;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#logging GslbPolicy#logging}
  */
  readonly logging?: string;
  /**
  * Only keep selected servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#selected_only GslbPolicy#selected_only}
  */
  readonly selectedOnly?: number;
  /**
  * Answer Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#selected_only_value GslbPolicy#selected_only_value}
  */
  readonly selectedOnlyValue?: number;
  /**
  * Run GSLB as DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server GslbPolicy#server}
  */
  readonly server?: number;
  /**
  * Append MX Records in Addition Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_addition_mx GslbPolicy#server_addition_mx}
  */
  readonly serverAdditionMx?: number;
  /**
  * Provide All Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_any GslbPolicy#server_any}
  */
  readonly serverAny?: number;
  /**
  * Provide All Records with GSLB Metrics applied to A/AAAA Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_any_with_metric GslbPolicy#server_any_with_metric}
  */
  readonly serverAnyWithMetric?: number;
  /**
  * As authoritative server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_authoritative GslbPolicy#server_authoritative}
  */
  readonly serverAuthoritative?: number;
  /**
  * Provide A-Records for NS-Records automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_auto_ns GslbPolicy#server_auto_ns}
  */
  readonly serverAutoNs?: number;
  /**
  * Provide PTR Records automatically
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_auto_ptr GslbPolicy#server_auto_ptr}
  */
  readonly serverAutoPtr?: number;
  /**
  * Provide CAA Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_caa GslbPolicy#server_caa}
  */
  readonly serverCaa?: number;
  /**
  * Provide CNAME Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_cname GslbPolicy#server_cname}
  */
  readonly serverCname?: number;
  /**
  * Provide Custom Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_custom GslbPolicy#server_custom}
  */
  readonly serverCustom?: number;
  /**
  * Append All A Records in Authoritative Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_full_list GslbPolicy#server_full_list}
  */
  readonly serverFullList?: number;
  /**
  * Only run GSLB as DNS server mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_mode_only GslbPolicy#server_mode_only}
  */
  readonly serverModeOnly?: number;
  /**
  * Provide MX Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_mx GslbPolicy#server_mx}
  */
  readonly serverMx?: number;
  /**
  * Provide NAPTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_naptr GslbPolicy#server_naptr}
  */
  readonly serverNaptr?: number;
  /**
  * Provide NS Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_ns GslbPolicy#server_ns}
  */
  readonly serverNs?: number;
  /**
  * Append All NS Records in Authoritative Section
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_ns_list GslbPolicy#server_ns_list}
  */
  readonly serverNsList?: number;
  /**
  * Provide PTR Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_ptr GslbPolicy#server_ptr}
  */
  readonly serverPtr?: number;
  /**
  * Provide DNSSEC support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_sec GslbPolicy#server_sec}
  */
  readonly serverSec?: number;
  /**
  * Provide SRV Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_srv GslbPolicy#server_srv}
  */
  readonly serverSrv?: number;
  /**
  * Provide TXT Records
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#server_txt GslbPolicy#server_txt}
  */
  readonly serverTxt?: number;
  /**
  * Make DNS Record sticky for certain time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#sticky GslbPolicy#sticky}
  */
  readonly sticky?: number;
  /**
  * Specify aging-time, unit: min, default is 5 (Aging time)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#sticky_aging_time GslbPolicy#sticky_aging_time}
  */
  readonly stickyAgingTime?: number;
  /**
  * Specify IPv6 mask length, default is 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#sticky_ipv6_mask GslbPolicy#sticky_ipv6_mask}
  */
  readonly stickyIpv6Mask?: number;
  /**
  * Specify IP mask, default is /32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#sticky_mask GslbPolicy#sticky_mask}
  */
  readonly stickyMask?: string;
  /**
  * Logging template (Logging Template Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#template GslbPolicy#template}
  */
  readonly template?: string;
  /**
  * Specify the TTL value contained in DNS record (TTL value, unit: second, default is 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ttl GslbPolicy#ttl}
  */
  readonly ttl?: number;
  /**
  * Use DNS Server Response TTL value in GSLB Proxy mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#use_server_ttl GslbPolicy#use_server_ttl}
  */
  readonly useServerTtl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * Only run GSLB as DNS server mode with zone ownership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#zone_owner_mode GslbPolicy#zone_owner_mode}
  */
  readonly zoneOwnerMode?: number;
  /**
  * block_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#block_value GslbPolicy#block_value}
  */
  readonly blockValue?: GslbPolicyDnsBlockValue[] | cdktf.IResolvable;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ipv6 GslbPolicy#ipv6}
  */
  readonly ipv6?: GslbPolicyDnsIpv6[] | cdktf.IResolvable;
  /**
  * proxy_block_port_range_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#proxy_block_port_range_list GslbPolicy#proxy_block_port_range_list}
  */
  readonly proxyBlockPortRangeList?: GslbPolicyDnsProxyBlockPortRangeListStruct[] | cdktf.IResolvable;
}

export function gslbPolicyDnsToTerraform(struct?: GslbPolicyDnsOutputReference | GslbPolicyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.numberToTerraform(struct!.action),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    active_only: cdktf.numberToTerraform(struct!.activeOnly),
    active_only_fail_safe: cdktf.numberToTerraform(struct!.activeOnlyFailSafe),
    aging_time: cdktf.numberToTerraform(struct!.agingTime),
    backup_alias: cdktf.numberToTerraform(struct!.backupAlias),
    backup_server: cdktf.numberToTerraform(struct!.backupServer),
    block_action: cdktf.numberToTerraform(struct!.blockAction),
    block_type: cdktf.stringToTerraform(struct!.blockType),
    cache: cdktf.numberToTerraform(struct!.cache),
    cname_detect: cdktf.numberToTerraform(struct!.cnameDetect),
    delegation: cdktf.numberToTerraform(struct!.delegation),
    dns_addition_mx: cdktf.numberToTerraform(struct!.dnsAdditionMx),
    dns_auto_map: cdktf.numberToTerraform(struct!.dnsAutoMap),
    dynamic_preference: cdktf.numberToTerraform(struct!.dynamicPreference),
    dynamic_weight: cdktf.numberToTerraform(struct!.dynamicWeight),
    external_ip: cdktf.numberToTerraform(struct!.externalIp),
    external_soa: cdktf.numberToTerraform(struct!.externalSoa),
    geoloc_action: cdktf.numberToTerraform(struct!.geolocAction),
    geoloc_alias: cdktf.numberToTerraform(struct!.geolocAlias),
    geoloc_policy: cdktf.numberToTerraform(struct!.geolocPolicy),
    hint: cdktf.stringToTerraform(struct!.hint),
    ip_replace: cdktf.numberToTerraform(struct!.ipReplace),
    logging: cdktf.stringToTerraform(struct!.logging),
    selected_only: cdktf.numberToTerraform(struct!.selectedOnly),
    selected_only_value: cdktf.numberToTerraform(struct!.selectedOnlyValue),
    server: cdktf.numberToTerraform(struct!.server),
    server_addition_mx: cdktf.numberToTerraform(struct!.serverAdditionMx),
    server_any: cdktf.numberToTerraform(struct!.serverAny),
    server_any_with_metric: cdktf.numberToTerraform(struct!.serverAnyWithMetric),
    server_authoritative: cdktf.numberToTerraform(struct!.serverAuthoritative),
    server_auto_ns: cdktf.numberToTerraform(struct!.serverAutoNs),
    server_auto_ptr: cdktf.numberToTerraform(struct!.serverAutoPtr),
    server_caa: cdktf.numberToTerraform(struct!.serverCaa),
    server_cname: cdktf.numberToTerraform(struct!.serverCname),
    server_custom: cdktf.numberToTerraform(struct!.serverCustom),
    server_full_list: cdktf.numberToTerraform(struct!.serverFullList),
    server_mode_only: cdktf.numberToTerraform(struct!.serverModeOnly),
    server_mx: cdktf.numberToTerraform(struct!.serverMx),
    server_naptr: cdktf.numberToTerraform(struct!.serverNaptr),
    server_ns: cdktf.numberToTerraform(struct!.serverNs),
    server_ns_list: cdktf.numberToTerraform(struct!.serverNsList),
    server_ptr: cdktf.numberToTerraform(struct!.serverPtr),
    server_sec: cdktf.numberToTerraform(struct!.serverSec),
    server_srv: cdktf.numberToTerraform(struct!.serverSrv),
    server_txt: cdktf.numberToTerraform(struct!.serverTxt),
    sticky: cdktf.numberToTerraform(struct!.sticky),
    sticky_aging_time: cdktf.numberToTerraform(struct!.stickyAgingTime),
    sticky_ipv6_mask: cdktf.numberToTerraform(struct!.stickyIpv6Mask),
    sticky_mask: cdktf.stringToTerraform(struct!.stickyMask),
    template: cdktf.stringToTerraform(struct!.template),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    use_server_ttl: cdktf.numberToTerraform(struct!.useServerTtl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    zone_owner_mode: cdktf.numberToTerraform(struct!.zoneOwnerMode),
    block_value: cdktf.listMapper(gslbPolicyDnsBlockValueToTerraform, true)(struct!.blockValue),
    ipv6: cdktf.listMapper(gslbPolicyDnsIpv6ToTerraform, true)(struct!.ipv6),
    proxy_block_port_range_list: cdktf.listMapper(gslbPolicyDnsProxyBlockPortRangeListStructToTerraform, true)(struct!.proxyBlockPortRangeList),
  }
}


export function gslbPolicyDnsToHclTerraform(struct?: GslbPolicyDnsOutputReference | GslbPolicyDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.numberToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_only: {
      value: cdktf.numberToHclTerraform(struct!.activeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_only_fail_safe: {
      value: cdktf.numberToHclTerraform(struct!.activeOnlyFailSafe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aging_time: {
      value: cdktf.numberToHclTerraform(struct!.agingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_alias: {
      value: cdktf.numberToHclTerraform(struct!.backupAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_server: {
      value: cdktf.numberToHclTerraform(struct!.backupServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_action: {
      value: cdktf.numberToHclTerraform(struct!.blockAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_type: {
      value: cdktf.stringToHclTerraform(struct!.blockType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache: {
      value: cdktf.numberToHclTerraform(struct!.cache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cname_detect: {
      value: cdktf.numberToHclTerraform(struct!.cnameDetect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delegation: {
      value: cdktf.numberToHclTerraform(struct!.delegation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_addition_mx: {
      value: cdktf.numberToHclTerraform(struct!.dnsAdditionMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auto_map: {
      value: cdktf.numberToHclTerraform(struct!.dnsAutoMap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_preference: {
      value: cdktf.numberToHclTerraform(struct!.dynamicPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic_weight: {
      value: cdktf.numberToHclTerraform(struct!.dynamicWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_ip: {
      value: cdktf.numberToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_soa: {
      value: cdktf.numberToHclTerraform(struct!.externalSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_action: {
      value: cdktf.numberToHclTerraform(struct!.geolocAction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_alias: {
      value: cdktf.numberToHclTerraform(struct!.geolocAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geoloc_policy: {
      value: cdktf.numberToHclTerraform(struct!.geolocPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hint: {
      value: cdktf.stringToHclTerraform(struct!.hint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_replace: {
      value: cdktf.numberToHclTerraform(struct!.ipReplace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging: {
      value: cdktf.stringToHclTerraform(struct!.logging),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selected_only: {
      value: cdktf.numberToHclTerraform(struct!.selectedOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    selected_only_value: {
      value: cdktf.numberToHclTerraform(struct!.selectedOnlyValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server: {
      value: cdktf.numberToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_addition_mx: {
      value: cdktf.numberToHclTerraform(struct!.serverAdditionMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_any: {
      value: cdktf.numberToHclTerraform(struct!.serverAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_any_with_metric: {
      value: cdktf.numberToHclTerraform(struct!.serverAnyWithMetric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_authoritative: {
      value: cdktf.numberToHclTerraform(struct!.serverAuthoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_auto_ns: {
      value: cdktf.numberToHclTerraform(struct!.serverAutoNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_auto_ptr: {
      value: cdktf.numberToHclTerraform(struct!.serverAutoPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_caa: {
      value: cdktf.numberToHclTerraform(struct!.serverCaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_cname: {
      value: cdktf.numberToHclTerraform(struct!.serverCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_custom: {
      value: cdktf.numberToHclTerraform(struct!.serverCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_full_list: {
      value: cdktf.numberToHclTerraform(struct!.serverFullList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_mode_only: {
      value: cdktf.numberToHclTerraform(struct!.serverModeOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_mx: {
      value: cdktf.numberToHclTerraform(struct!.serverMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_naptr: {
      value: cdktf.numberToHclTerraform(struct!.serverNaptr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ns: {
      value: cdktf.numberToHclTerraform(struct!.serverNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ns_list: {
      value: cdktf.numberToHclTerraform(struct!.serverNsList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_ptr: {
      value: cdktf.numberToHclTerraform(struct!.serverPtr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_sec: {
      value: cdktf.numberToHclTerraform(struct!.serverSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_srv: {
      value: cdktf.numberToHclTerraform(struct!.serverSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_txt: {
      value: cdktf.numberToHclTerraform(struct!.serverTxt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky: {
      value: cdktf.numberToHclTerraform(struct!.sticky),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_aging_time: {
      value: cdktf.numberToHclTerraform(struct!.stickyAgingTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_ipv6_mask: {
      value: cdktf.numberToHclTerraform(struct!.stickyIpv6Mask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sticky_mask: {
      value: cdktf.stringToHclTerraform(struct!.stickyMask),
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
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_server_ttl: {
      value: cdktf.numberToHclTerraform(struct!.useServerTtl),
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
    zone_owner_mode: {
      value: cdktf.numberToHclTerraform(struct!.zoneOwnerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    block_value: {
      value: cdktf.listMapperHcl(gslbPolicyDnsBlockValueToHclTerraform, true)(struct!.blockValue),
      isBlock: true,
      type: "list",
      storageClassType: "GslbPolicyDnsBlockValueList",
    },
    ipv6: {
      value: cdktf.listMapperHcl(gslbPolicyDnsIpv6ToHclTerraform, true)(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "GslbPolicyDnsIpv6List",
    },
    proxy_block_port_range_list: {
      value: cdktf.listMapperHcl(gslbPolicyDnsProxyBlockPortRangeListStructToHclTerraform, true)(struct!.proxyBlockPortRangeList),
      isBlock: true,
      type: "list",
      storageClassType: "GslbPolicyDnsProxyBlockPortRangeListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._activeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeOnly = this._activeOnly;
    }
    if (this._activeOnlyFailSafe !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeOnlyFailSafe = this._activeOnlyFailSafe;
    }
    if (this._agingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.agingTime = this._agingTime;
    }
    if (this._backupAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupAlias = this._backupAlias;
    }
    if (this._backupServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupServer = this._backupServer;
    }
    if (this._blockAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAction = this._blockAction;
    }
    if (this._blockType !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockType = this._blockType;
    }
    if (this._cache !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache;
    }
    if (this._cnameDetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameDetect = this._cnameDetect;
    }
    if (this._delegation !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegation = this._delegation;
    }
    if (this._dnsAdditionMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAdditionMx = this._dnsAdditionMx;
    }
    if (this._dnsAutoMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAutoMap = this._dnsAutoMap;
    }
    if (this._dynamicPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicPreference = this._dynamicPreference;
    }
    if (this._dynamicWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicWeight = this._dynamicWeight;
    }
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSoa = this._externalSoa;
    }
    if (this._geolocAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocAction = this._geolocAction;
    }
    if (this._geolocAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocAlias = this._geolocAlias;
    }
    if (this._geolocPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.geolocPolicy = this._geolocPolicy;
    }
    if (this._hint !== undefined) {
      hasAnyValues = true;
      internalValueResult.hint = this._hint;
    }
    if (this._ipReplace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipReplace = this._ipReplace;
    }
    if (this._logging !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging;
    }
    if (this._selectedOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedOnly = this._selectedOnly;
    }
    if (this._selectedOnlyValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedOnlyValue = this._selectedOnlyValue;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._serverAdditionMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAdditionMx = this._serverAdditionMx;
    }
    if (this._serverAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAny = this._serverAny;
    }
    if (this._serverAnyWithMetric !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAnyWithMetric = this._serverAnyWithMetric;
    }
    if (this._serverAuthoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuthoritative = this._serverAuthoritative;
    }
    if (this._serverAutoNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAutoNs = this._serverAutoNs;
    }
    if (this._serverAutoPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAutoPtr = this._serverAutoPtr;
    }
    if (this._serverCaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCaa = this._serverCaa;
    }
    if (this._serverCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCname = this._serverCname;
    }
    if (this._serverCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCustom = this._serverCustom;
    }
    if (this._serverFullList !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFullList = this._serverFullList;
    }
    if (this._serverModeOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverModeOnly = this._serverModeOnly;
    }
    if (this._serverMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverMx = this._serverMx;
    }
    if (this._serverNaptr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNaptr = this._serverNaptr;
    }
    if (this._serverNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNs = this._serverNs;
    }
    if (this._serverNsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNsList = this._serverNsList;
    }
    if (this._serverPtr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPtr = this._serverPtr;
    }
    if (this._serverSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSec = this._serverSec;
    }
    if (this._serverSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSrv = this._serverSrv;
    }
    if (this._serverTxt !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTxt = this._serverTxt;
    }
    if (this._sticky !== undefined) {
      hasAnyValues = true;
      internalValueResult.sticky = this._sticky;
    }
    if (this._stickyAgingTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyAgingTime = this._stickyAgingTime;
    }
    if (this._stickyIpv6Mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyIpv6Mask = this._stickyIpv6Mask;
    }
    if (this._stickyMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyMask = this._stickyMask;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._useServerTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerTtl = this._useServerTtl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._zoneOwnerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOwnerMode = this._zoneOwnerMode;
    }
    if (this._blockValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockValue = this._blockValue?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    if (this._proxyBlockPortRangeList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyBlockPortRangeList = this._proxyBlockPortRangeList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._actionType = undefined;
      this._activeOnly = undefined;
      this._activeOnlyFailSafe = undefined;
      this._agingTime = undefined;
      this._backupAlias = undefined;
      this._backupServer = undefined;
      this._blockAction = undefined;
      this._blockType = undefined;
      this._cache = undefined;
      this._cnameDetect = undefined;
      this._delegation = undefined;
      this._dnsAdditionMx = undefined;
      this._dnsAutoMap = undefined;
      this._dynamicPreference = undefined;
      this._dynamicWeight = undefined;
      this._externalIp = undefined;
      this._externalSoa = undefined;
      this._geolocAction = undefined;
      this._geolocAlias = undefined;
      this._geolocPolicy = undefined;
      this._hint = undefined;
      this._ipReplace = undefined;
      this._logging = undefined;
      this._selectedOnly = undefined;
      this._selectedOnlyValue = undefined;
      this._server = undefined;
      this._serverAdditionMx = undefined;
      this._serverAny = undefined;
      this._serverAnyWithMetric = undefined;
      this._serverAuthoritative = undefined;
      this._serverAutoNs = undefined;
      this._serverAutoPtr = undefined;
      this._serverCaa = undefined;
      this._serverCname = undefined;
      this._serverCustom = undefined;
      this._serverFullList = undefined;
      this._serverModeOnly = undefined;
      this._serverMx = undefined;
      this._serverNaptr = undefined;
      this._serverNs = undefined;
      this._serverNsList = undefined;
      this._serverPtr = undefined;
      this._serverSec = undefined;
      this._serverSrv = undefined;
      this._serverTxt = undefined;
      this._sticky = undefined;
      this._stickyAgingTime = undefined;
      this._stickyIpv6Mask = undefined;
      this._stickyMask = undefined;
      this._template = undefined;
      this._ttl = undefined;
      this._useServerTtl = undefined;
      this._uuid = undefined;
      this._zoneOwnerMode = undefined;
      this._blockValue.internalValue = undefined;
      this._ipv6.internalValue = undefined;
      this._proxyBlockPortRangeList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._actionType = value.actionType;
      this._activeOnly = value.activeOnly;
      this._activeOnlyFailSafe = value.activeOnlyFailSafe;
      this._agingTime = value.agingTime;
      this._backupAlias = value.backupAlias;
      this._backupServer = value.backupServer;
      this._blockAction = value.blockAction;
      this._blockType = value.blockType;
      this._cache = value.cache;
      this._cnameDetect = value.cnameDetect;
      this._delegation = value.delegation;
      this._dnsAdditionMx = value.dnsAdditionMx;
      this._dnsAutoMap = value.dnsAutoMap;
      this._dynamicPreference = value.dynamicPreference;
      this._dynamicWeight = value.dynamicWeight;
      this._externalIp = value.externalIp;
      this._externalSoa = value.externalSoa;
      this._geolocAction = value.geolocAction;
      this._geolocAlias = value.geolocAlias;
      this._geolocPolicy = value.geolocPolicy;
      this._hint = value.hint;
      this._ipReplace = value.ipReplace;
      this._logging = value.logging;
      this._selectedOnly = value.selectedOnly;
      this._selectedOnlyValue = value.selectedOnlyValue;
      this._server = value.server;
      this._serverAdditionMx = value.serverAdditionMx;
      this._serverAny = value.serverAny;
      this._serverAnyWithMetric = value.serverAnyWithMetric;
      this._serverAuthoritative = value.serverAuthoritative;
      this._serverAutoNs = value.serverAutoNs;
      this._serverAutoPtr = value.serverAutoPtr;
      this._serverCaa = value.serverCaa;
      this._serverCname = value.serverCname;
      this._serverCustom = value.serverCustom;
      this._serverFullList = value.serverFullList;
      this._serverModeOnly = value.serverModeOnly;
      this._serverMx = value.serverMx;
      this._serverNaptr = value.serverNaptr;
      this._serverNs = value.serverNs;
      this._serverNsList = value.serverNsList;
      this._serverPtr = value.serverPtr;
      this._serverSec = value.serverSec;
      this._serverSrv = value.serverSrv;
      this._serverTxt = value.serverTxt;
      this._sticky = value.sticky;
      this._stickyAgingTime = value.stickyAgingTime;
      this._stickyIpv6Mask = value.stickyIpv6Mask;
      this._stickyMask = value.stickyMask;
      this._template = value.template;
      this._ttl = value.ttl;
      this._useServerTtl = value.useServerTtl;
      this._uuid = value.uuid;
      this._zoneOwnerMode = value.zoneOwnerMode;
      this._blockValue.internalValue = value.blockValue;
      this._ipv6.internalValue = value.ipv6;
      this._proxyBlockPortRangeList.internalValue = value.proxyBlockPortRangeList;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: number; 
  public get action() {
    return this.getNumberAttribute('action');
  }
  public set action(value: number) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // active_only - computed: false, optional: true, required: false
  private _activeOnly?: number; 
  public get activeOnly() {
    return this.getNumberAttribute('active_only');
  }
  public set activeOnly(value: number) {
    this._activeOnly = value;
  }
  public resetActiveOnly() {
    this._activeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyInput() {
    return this._activeOnly;
  }

  // active_only_fail_safe - computed: false, optional: true, required: false
  private _activeOnlyFailSafe?: number; 
  public get activeOnlyFailSafe() {
    return this.getNumberAttribute('active_only_fail_safe');
  }
  public set activeOnlyFailSafe(value: number) {
    this._activeOnlyFailSafe = value;
  }
  public resetActiveOnlyFailSafe() {
    this._activeOnlyFailSafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeOnlyFailSafeInput() {
    return this._activeOnlyFailSafe;
  }

  // aging_time - computed: false, optional: true, required: false
  private _agingTime?: number; 
  public get agingTime() {
    return this.getNumberAttribute('aging_time');
  }
  public set agingTime(value: number) {
    this._agingTime = value;
  }
  public resetAgingTime() {
    this._agingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agingTimeInput() {
    return this._agingTime;
  }

  // backup_alias - computed: false, optional: true, required: false
  private _backupAlias?: number; 
  public get backupAlias() {
    return this.getNumberAttribute('backup_alias');
  }
  public set backupAlias(value: number) {
    this._backupAlias = value;
  }
  public resetBackupAlias() {
    this._backupAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAliasInput() {
    return this._backupAlias;
  }

  // backup_server - computed: false, optional: true, required: false
  private _backupServer?: number; 
  public get backupServer() {
    return this.getNumberAttribute('backup_server');
  }
  public set backupServer(value: number) {
    this._backupServer = value;
  }
  public resetBackupServer() {
    this._backupServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServerInput() {
    return this._backupServer;
  }

  // block_action - computed: false, optional: true, required: false
  private _blockAction?: number; 
  public get blockAction() {
    return this.getNumberAttribute('block_action');
  }
  public set blockAction(value: number) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // block_type - computed: false, optional: true, required: false
  private _blockType?: string; 
  public get blockType() {
    return this.getStringAttribute('block_type');
  }
  public set blockType(value: string) {
    this._blockType = value;
  }
  public resetBlockType() {
    this._blockType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTypeInput() {
    return this._blockType;
  }

  // cache - computed: false, optional: true, required: false
  private _cache?: number; 
  public get cache() {
    return this.getNumberAttribute('cache');
  }
  public set cache(value: number) {
    this._cache = value;
  }
  public resetCache() {
    this._cache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache;
  }

  // cname_detect - computed: false, optional: true, required: false
  private _cnameDetect?: number; 
  public get cnameDetect() {
    return this.getNumberAttribute('cname_detect');
  }
  public set cnameDetect(value: number) {
    this._cnameDetect = value;
  }
  public resetCnameDetect() {
    this._cnameDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameDetectInput() {
    return this._cnameDetect;
  }

  // delegation - computed: false, optional: true, required: false
  private _delegation?: number; 
  public get delegation() {
    return this.getNumberAttribute('delegation');
  }
  public set delegation(value: number) {
    this._delegation = value;
  }
  public resetDelegation() {
    this._delegation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegationInput() {
    return this._delegation;
  }

  // dns_addition_mx - computed: false, optional: true, required: false
  private _dnsAdditionMx?: number; 
  public get dnsAdditionMx() {
    return this.getNumberAttribute('dns_addition_mx');
  }
  public set dnsAdditionMx(value: number) {
    this._dnsAdditionMx = value;
  }
  public resetDnsAdditionMx() {
    this._dnsAdditionMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAdditionMxInput() {
    return this._dnsAdditionMx;
  }

  // dns_auto_map - computed: false, optional: true, required: false
  private _dnsAutoMap?: number; 
  public get dnsAutoMap() {
    return this.getNumberAttribute('dns_auto_map');
  }
  public set dnsAutoMap(value: number) {
    this._dnsAutoMap = value;
  }
  public resetDnsAutoMap() {
    this._dnsAutoMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAutoMapInput() {
    return this._dnsAutoMap;
  }

  // dynamic_preference - computed: false, optional: true, required: false
  private _dynamicPreference?: number; 
  public get dynamicPreference() {
    return this.getNumberAttribute('dynamic_preference');
  }
  public set dynamicPreference(value: number) {
    this._dynamicPreference = value;
  }
  public resetDynamicPreference() {
    this._dynamicPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicPreferenceInput() {
    return this._dynamicPreference;
  }

  // dynamic_weight - computed: false, optional: true, required: false
  private _dynamicWeight?: number; 
  public get dynamicWeight() {
    return this.getNumberAttribute('dynamic_weight');
  }
  public set dynamicWeight(value: number) {
    this._dynamicWeight = value;
  }
  public resetDynamicWeight() {
    this._dynamicWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicWeightInput() {
    return this._dynamicWeight;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp?: number; 
  public get externalIp() {
    return this.getNumberAttribute('external_ip');
  }
  public set externalIp(value: number) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_soa - computed: false, optional: true, required: false
  private _externalSoa?: number; 
  public get externalSoa() {
    return this.getNumberAttribute('external_soa');
  }
  public set externalSoa(value: number) {
    this._externalSoa = value;
  }
  public resetExternalSoa() {
    this._externalSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSoaInput() {
    return this._externalSoa;
  }

  // geoloc_action - computed: false, optional: true, required: false
  private _geolocAction?: number; 
  public get geolocAction() {
    return this.getNumberAttribute('geoloc_action');
  }
  public set geolocAction(value: number) {
    this._geolocAction = value;
  }
  public resetGeolocAction() {
    this._geolocAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocActionInput() {
    return this._geolocAction;
  }

  // geoloc_alias - computed: false, optional: true, required: false
  private _geolocAlias?: number; 
  public get geolocAlias() {
    return this.getNumberAttribute('geoloc_alias');
  }
  public set geolocAlias(value: number) {
    this._geolocAlias = value;
  }
  public resetGeolocAlias() {
    this._geolocAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocAliasInput() {
    return this._geolocAlias;
  }

  // geoloc_policy - computed: false, optional: true, required: false
  private _geolocPolicy?: number; 
  public get geolocPolicy() {
    return this.getNumberAttribute('geoloc_policy');
  }
  public set geolocPolicy(value: number) {
    this._geolocPolicy = value;
  }
  public resetGeolocPolicy() {
    this._geolocPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geolocPolicyInput() {
    return this._geolocPolicy;
  }

  // hint - computed: false, optional: true, required: false
  private _hint?: string; 
  public get hint() {
    return this.getStringAttribute('hint');
  }
  public set hint(value: string) {
    this._hint = value;
  }
  public resetHint() {
    this._hint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint;
  }

  // ip_replace - computed: false, optional: true, required: false
  private _ipReplace?: number; 
  public get ipReplace() {
    return this.getNumberAttribute('ip_replace');
  }
  public set ipReplace(value: number) {
    this._ipReplace = value;
  }
  public resetIpReplace() {
    this._ipReplace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipReplaceInput() {
    return this._ipReplace;
  }

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // selected_only - computed: false, optional: true, required: false
  private _selectedOnly?: number; 
  public get selectedOnly() {
    return this.getNumberAttribute('selected_only');
  }
  public set selectedOnly(value: number) {
    this._selectedOnly = value;
  }
  public resetSelectedOnly() {
    this._selectedOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOnlyInput() {
    return this._selectedOnly;
  }

  // selected_only_value - computed: false, optional: true, required: false
  private _selectedOnlyValue?: number; 
  public get selectedOnlyValue() {
    return this.getNumberAttribute('selected_only_value');
  }
  public set selectedOnlyValue(value: number) {
    this._selectedOnlyValue = value;
  }
  public resetSelectedOnlyValue() {
    this._selectedOnlyValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedOnlyValueInput() {
    return this._selectedOnlyValue;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_addition_mx - computed: false, optional: true, required: false
  private _serverAdditionMx?: number; 
  public get serverAdditionMx() {
    return this.getNumberAttribute('server_addition_mx');
  }
  public set serverAdditionMx(value: number) {
    this._serverAdditionMx = value;
  }
  public resetServerAdditionMx() {
    this._serverAdditionMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAdditionMxInput() {
    return this._serverAdditionMx;
  }

  // server_any - computed: false, optional: true, required: false
  private _serverAny?: number; 
  public get serverAny() {
    return this.getNumberAttribute('server_any');
  }
  public set serverAny(value: number) {
    this._serverAny = value;
  }
  public resetServerAny() {
    this._serverAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAnyInput() {
    return this._serverAny;
  }

  // server_any_with_metric - computed: false, optional: true, required: false
  private _serverAnyWithMetric?: number; 
  public get serverAnyWithMetric() {
    return this.getNumberAttribute('server_any_with_metric');
  }
  public set serverAnyWithMetric(value: number) {
    this._serverAnyWithMetric = value;
  }
  public resetServerAnyWithMetric() {
    this._serverAnyWithMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAnyWithMetricInput() {
    return this._serverAnyWithMetric;
  }

  // server_authoritative - computed: false, optional: true, required: false
  private _serverAuthoritative?: number; 
  public get serverAuthoritative() {
    return this.getNumberAttribute('server_authoritative');
  }
  public set serverAuthoritative(value: number) {
    this._serverAuthoritative = value;
  }
  public resetServerAuthoritative() {
    this._serverAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthoritativeInput() {
    return this._serverAuthoritative;
  }

  // server_auto_ns - computed: false, optional: true, required: false
  private _serverAutoNs?: number; 
  public get serverAutoNs() {
    return this.getNumberAttribute('server_auto_ns');
  }
  public set serverAutoNs(value: number) {
    this._serverAutoNs = value;
  }
  public resetServerAutoNs() {
    this._serverAutoNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAutoNsInput() {
    return this._serverAutoNs;
  }

  // server_auto_ptr - computed: false, optional: true, required: false
  private _serverAutoPtr?: number; 
  public get serverAutoPtr() {
    return this.getNumberAttribute('server_auto_ptr');
  }
  public set serverAutoPtr(value: number) {
    this._serverAutoPtr = value;
  }
  public resetServerAutoPtr() {
    this._serverAutoPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAutoPtrInput() {
    return this._serverAutoPtr;
  }

  // server_caa - computed: false, optional: true, required: false
  private _serverCaa?: number; 
  public get serverCaa() {
    return this.getNumberAttribute('server_caa');
  }
  public set serverCaa(value: number) {
    this._serverCaa = value;
  }
  public resetServerCaa() {
    this._serverCaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaaInput() {
    return this._serverCaa;
  }

  // server_cname - computed: false, optional: true, required: false
  private _serverCname?: number; 
  public get serverCname() {
    return this.getNumberAttribute('server_cname');
  }
  public set serverCname(value: number) {
    this._serverCname = value;
  }
  public resetServerCname() {
    this._serverCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCnameInput() {
    return this._serverCname;
  }

  // server_custom - computed: false, optional: true, required: false
  private _serverCustom?: number; 
  public get serverCustom() {
    return this.getNumberAttribute('server_custom');
  }
  public set serverCustom(value: number) {
    this._serverCustom = value;
  }
  public resetServerCustom() {
    this._serverCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCustomInput() {
    return this._serverCustom;
  }

  // server_full_list - computed: false, optional: true, required: false
  private _serverFullList?: number; 
  public get serverFullList() {
    return this.getNumberAttribute('server_full_list');
  }
  public set serverFullList(value: number) {
    this._serverFullList = value;
  }
  public resetServerFullList() {
    this._serverFullList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFullListInput() {
    return this._serverFullList;
  }

  // server_mode_only - computed: false, optional: true, required: false
  private _serverModeOnly?: number; 
  public get serverModeOnly() {
    return this.getNumberAttribute('server_mode_only');
  }
  public set serverModeOnly(value: number) {
    this._serverModeOnly = value;
  }
  public resetServerModeOnly() {
    this._serverModeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverModeOnlyInput() {
    return this._serverModeOnly;
  }

  // server_mx - computed: false, optional: true, required: false
  private _serverMx?: number; 
  public get serverMx() {
    return this.getNumberAttribute('server_mx');
  }
  public set serverMx(value: number) {
    this._serverMx = value;
  }
  public resetServerMx() {
    this._serverMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverMxInput() {
    return this._serverMx;
  }

  // server_naptr - computed: false, optional: true, required: false
  private _serverNaptr?: number; 
  public get serverNaptr() {
    return this.getNumberAttribute('server_naptr');
  }
  public set serverNaptr(value: number) {
    this._serverNaptr = value;
  }
  public resetServerNaptr() {
    this._serverNaptr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNaptrInput() {
    return this._serverNaptr;
  }

  // server_ns - computed: false, optional: true, required: false
  private _serverNs?: number; 
  public get serverNs() {
    return this.getNumberAttribute('server_ns');
  }
  public set serverNs(value: number) {
    this._serverNs = value;
  }
  public resetServerNs() {
    this._serverNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNsInput() {
    return this._serverNs;
  }

  // server_ns_list - computed: false, optional: true, required: false
  private _serverNsList?: number; 
  public get serverNsList() {
    return this.getNumberAttribute('server_ns_list');
  }
  public set serverNsList(value: number) {
    this._serverNsList = value;
  }
  public resetServerNsList() {
    this._serverNsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNsListInput() {
    return this._serverNsList;
  }

  // server_ptr - computed: false, optional: true, required: false
  private _serverPtr?: number; 
  public get serverPtr() {
    return this.getNumberAttribute('server_ptr');
  }
  public set serverPtr(value: number) {
    this._serverPtr = value;
  }
  public resetServerPtr() {
    this._serverPtr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPtrInput() {
    return this._serverPtr;
  }

  // server_sec - computed: false, optional: true, required: false
  private _serverSec?: number; 
  public get serverSec() {
    return this.getNumberAttribute('server_sec');
  }
  public set serverSec(value: number) {
    this._serverSec = value;
  }
  public resetServerSec() {
    this._serverSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSecInput() {
    return this._serverSec;
  }

  // server_srv - computed: false, optional: true, required: false
  private _serverSrv?: number; 
  public get serverSrv() {
    return this.getNumberAttribute('server_srv');
  }
  public set serverSrv(value: number) {
    this._serverSrv = value;
  }
  public resetServerSrv() {
    this._serverSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSrvInput() {
    return this._serverSrv;
  }

  // server_txt - computed: false, optional: true, required: false
  private _serverTxt?: number; 
  public get serverTxt() {
    return this.getNumberAttribute('server_txt');
  }
  public set serverTxt(value: number) {
    this._serverTxt = value;
  }
  public resetServerTxt() {
    this._serverTxt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTxtInput() {
    return this._serverTxt;
  }

  // sticky - computed: false, optional: true, required: false
  private _sticky?: number; 
  public get sticky() {
    return this.getNumberAttribute('sticky');
  }
  public set sticky(value: number) {
    this._sticky = value;
  }
  public resetSticky() {
    this._sticky = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyInput() {
    return this._sticky;
  }

  // sticky_aging_time - computed: false, optional: true, required: false
  private _stickyAgingTime?: number; 
  public get stickyAgingTime() {
    return this.getNumberAttribute('sticky_aging_time');
  }
  public set stickyAgingTime(value: number) {
    this._stickyAgingTime = value;
  }
  public resetStickyAgingTime() {
    this._stickyAgingTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyAgingTimeInput() {
    return this._stickyAgingTime;
  }

  // sticky_ipv6_mask - computed: false, optional: true, required: false
  private _stickyIpv6Mask?: number; 
  public get stickyIpv6Mask() {
    return this.getNumberAttribute('sticky_ipv6_mask');
  }
  public set stickyIpv6Mask(value: number) {
    this._stickyIpv6Mask = value;
  }
  public resetStickyIpv6Mask() {
    this._stickyIpv6Mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyIpv6MaskInput() {
    return this._stickyIpv6Mask;
  }

  // sticky_mask - computed: false, optional: true, required: false
  private _stickyMask?: string; 
  public get stickyMask() {
    return this.getStringAttribute('sticky_mask');
  }
  public set stickyMask(value: string) {
    this._stickyMask = value;
  }
  public resetStickyMask() {
    this._stickyMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMaskInput() {
    return this._stickyMask;
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

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // use_server_ttl - computed: false, optional: true, required: false
  private _useServerTtl?: number; 
  public get useServerTtl() {
    return this.getNumberAttribute('use_server_ttl');
  }
  public set useServerTtl(value: number) {
    this._useServerTtl = value;
  }
  public resetUseServerTtl() {
    this._useServerTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerTtlInput() {
    return this._useServerTtl;
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

  // zone_owner_mode - computed: false, optional: true, required: false
  private _zoneOwnerMode?: number; 
  public get zoneOwnerMode() {
    return this.getNumberAttribute('zone_owner_mode');
  }
  public set zoneOwnerMode(value: number) {
    this._zoneOwnerMode = value;
  }
  public resetZoneOwnerMode() {
    this._zoneOwnerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOwnerModeInput() {
    return this._zoneOwnerMode;
  }

  // block_value - computed: false, optional: true, required: false
  private _blockValue = new GslbPolicyDnsBlockValueList(this, "block_value", false);
  public get blockValue() {
    return this._blockValue;
  }
  public putBlockValue(value: GslbPolicyDnsBlockValue[] | cdktf.IResolvable) {
    this._blockValue.internalValue = value;
  }
  public resetBlockValue() {
    this._blockValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockValueInput() {
    return this._blockValue.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new GslbPolicyDnsIpv6List(this, "ipv6", false);
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: GslbPolicyDnsIpv6[] | cdktf.IResolvable) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }

  // proxy_block_port_range_list - computed: false, optional: true, required: false
  private _proxyBlockPortRangeList = new GslbPolicyDnsProxyBlockPortRangeListStructList(this, "proxy_block_port_range_list", false);
  public get proxyBlockPortRangeList() {
    return this._proxyBlockPortRangeList;
  }
  public putProxyBlockPortRangeList(value: GslbPolicyDnsProxyBlockPortRangeListStruct[] | cdktf.IResolvable) {
    this._proxyBlockPortRangeList.internalValue = value;
  }
  public resetProxyBlockPortRangeList() {
    this._proxyBlockPortRangeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBlockPortRangeListInput() {
    return this._proxyBlockPortRangeList.internalValue;
  }
}
export interface GslbPolicyEdns {
  /**
  * Use client subnet for geo-location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#client_subnet_geographic GslbPolicy#client_subnet_geographic}
  */
  readonly clientSubnetGeographic?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyEdnsToTerraform(struct?: GslbPolicyEdnsOutputReference | GslbPolicyEdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_subnet_geographic: cdktf.numberToTerraform(struct!.clientSubnetGeographic),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyEdnsToHclTerraform(struct?: GslbPolicyEdnsOutputReference | GslbPolicyEdns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_subnet_geographic: {
      value: cdktf.numberToHclTerraform(struct!.clientSubnetGeographic),
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

export class GslbPolicyEdnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyEdns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientSubnetGeographic !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSubnetGeographic = this._clientSubnetGeographic;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyEdns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientSubnetGeographic = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientSubnetGeographic = value.clientSubnetGeographic;
      this._uuid = value.uuid;
    }
  }

  // client_subnet_geographic - computed: false, optional: true, required: false
  private _clientSubnetGeographic?: number; 
  public get clientSubnetGeographic() {
    return this.getNumberAttribute('client_subnet_geographic');
  }
  public set clientSubnetGeographic(value: number) {
    this._clientSubnetGeographic = value;
  }
  public resetClientSubnetGeographic() {
    this._clientSubnetGeographic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSubnetGeographicInput() {
    return this._clientSubnetGeographic;
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
export interface GslbPolicyGeoLocationListIpMultipleFields {
  /**
  * Specify IP address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_addr2_sub GslbPolicy#ip_addr2_sub}
  */
  readonly ipAddr2Sub?: string;
  /**
  * Specify IP/mask format (Specify IP address mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_mask_sub GslbPolicy#ip_mask_sub}
  */
  readonly ipMaskSub?: string;
  /**
  * Specify IP information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_sub GslbPolicy#ip_sub}
  */
  readonly ipSub?: string;
}

export function gslbPolicyGeoLocationListIpMultipleFieldsToTerraform(struct?: GslbPolicyGeoLocationListIpMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr2_sub: cdktf.stringToTerraform(struct!.ipAddr2Sub),
    ip_mask_sub: cdktf.stringToTerraform(struct!.ipMaskSub),
    ip_sub: cdktf.stringToTerraform(struct!.ipSub),
  }
}


export function gslbPolicyGeoLocationListIpMultipleFieldsToHclTerraform(struct?: GslbPolicyGeoLocationListIpMultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr2_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr2Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mask_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipMaskSub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipSub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyGeoLocationListIpMultipleFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyGeoLocationListIpMultipleFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr2Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr2Sub = this._ipAddr2Sub;
    }
    if (this._ipMaskSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMaskSub = this._ipMaskSub;
    }
    if (this._ipSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSub = this._ipSub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationListIpMultipleFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr2Sub = undefined;
      this._ipMaskSub = undefined;
      this._ipSub = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr2Sub = value.ipAddr2Sub;
      this._ipMaskSub = value.ipMaskSub;
      this._ipSub = value.ipSub;
    }
  }

  // ip_addr2_sub - computed: false, optional: true, required: false
  private _ipAddr2Sub?: string; 
  public get ipAddr2Sub() {
    return this.getStringAttribute('ip_addr2_sub');
  }
  public set ipAddr2Sub(value: string) {
    this._ipAddr2Sub = value;
  }
  public resetIpAddr2Sub() {
    this._ipAddr2Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddr2SubInput() {
    return this._ipAddr2Sub;
  }

  // ip_mask_sub - computed: false, optional: true, required: false
  private _ipMaskSub?: string; 
  public get ipMaskSub() {
    return this.getStringAttribute('ip_mask_sub');
  }
  public set ipMaskSub(value: string) {
    this._ipMaskSub = value;
  }
  public resetIpMaskSub() {
    this._ipMaskSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaskSubInput() {
    return this._ipMaskSub;
  }

  // ip_sub - computed: false, optional: true, required: false
  private _ipSub?: string; 
  public get ipSub() {
    return this.getStringAttribute('ip_sub');
  }
  public set ipSub(value: string) {
    this._ipSub = value;
  }
  public resetIpSub() {
    this._ipSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubInput() {
    return this._ipSub;
  }
}

export class GslbPolicyGeoLocationListIpMultipleFieldsList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyGeoLocationListIpMultipleFields[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyGeoLocationListIpMultipleFieldsOutputReference {
    return new GslbPolicyGeoLocationListIpMultipleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyGeoLocationListIpv6MultipleFields {
  /**
  * Specify IPv6 address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ipv6_addr2_sub GslbPolicy#ipv6_addr2_sub}
  */
  readonly ipv6Addr2Sub?: string;
  /**
  * Specify IPv6/mask format (Specify IP address mask)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ipv6_mask_sub GslbPolicy#ipv6_mask_sub}
  */
  readonly ipv6MaskSub?: number;
  /**
  * Specify IPv6 information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ipv6_sub GslbPolicy#ipv6_sub}
  */
  readonly ipv6Sub?: string;
}

export function gslbPolicyGeoLocationListIpv6MultipleFieldsToTerraform(struct?: GslbPolicyGeoLocationListIpv6MultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_addr2_sub: cdktf.stringToTerraform(struct!.ipv6Addr2Sub),
    ipv6_mask_sub: cdktf.numberToTerraform(struct!.ipv6MaskSub),
    ipv6_sub: cdktf.stringToTerraform(struct!.ipv6Sub),
  }
}


export function gslbPolicyGeoLocationListIpv6MultipleFieldsToHclTerraform(struct?: GslbPolicyGeoLocationListIpv6MultipleFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_addr2_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr2Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_mask_sub: {
      value: cdktf.numberToHclTerraform(struct!.ipv6MaskSub),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_sub: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Sub),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyGeoLocationListIpv6MultipleFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyGeoLocationListIpv6MultipleFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Addr2Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr2Sub = this._ipv6Addr2Sub;
    }
    if (this._ipv6MaskSub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MaskSub = this._ipv6MaskSub;
    }
    if (this._ipv6Sub !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Sub = this._ipv6Sub;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationListIpv6MultipleFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6Addr2Sub = undefined;
      this._ipv6MaskSub = undefined;
      this._ipv6Sub = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6Addr2Sub = value.ipv6Addr2Sub;
      this._ipv6MaskSub = value.ipv6MaskSub;
      this._ipv6Sub = value.ipv6Sub;
    }
  }

  // ipv6_addr2_sub - computed: false, optional: true, required: false
  private _ipv6Addr2Sub?: string; 
  public get ipv6Addr2Sub() {
    return this.getStringAttribute('ipv6_addr2_sub');
  }
  public set ipv6Addr2Sub(value: string) {
    this._ipv6Addr2Sub = value;
  }
  public resetIpv6Addr2Sub() {
    this._ipv6Addr2Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Addr2SubInput() {
    return this._ipv6Addr2Sub;
  }

  // ipv6_mask_sub - computed: false, optional: true, required: false
  private _ipv6MaskSub?: number; 
  public get ipv6MaskSub() {
    return this.getNumberAttribute('ipv6_mask_sub');
  }
  public set ipv6MaskSub(value: number) {
    this._ipv6MaskSub = value;
  }
  public resetIpv6MaskSub() {
    this._ipv6MaskSub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MaskSubInput() {
    return this._ipv6MaskSub;
  }

  // ipv6_sub - computed: false, optional: true, required: false
  private _ipv6Sub?: string; 
  public get ipv6Sub() {
    return this.getStringAttribute('ipv6_sub');
  }
  public set ipv6Sub(value: string) {
    this._ipv6Sub = value;
  }
  public resetIpv6Sub() {
    this._ipv6Sub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubInput() {
    return this._ipv6Sub;
  }
}

export class GslbPolicyGeoLocationListIpv6MultipleFieldsList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyGeoLocationListIpv6MultipleFields[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyGeoLocationListIpv6MultipleFieldsOutputReference {
    return new GslbPolicyGeoLocationListIpv6MultipleFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyGeoLocationListStruct {
  /**
  * Specify geo-location name, section range is (1-15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#name GslbPolicy#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#user_tag GslbPolicy#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * ip_multiple_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ip_multiple_fields GslbPolicy#ip_multiple_fields}
  */
  readonly ipMultipleFields?: GslbPolicyGeoLocationListIpMultipleFields[] | cdktf.IResolvable;
  /**
  * ipv6_multiple_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#ipv6_multiple_fields GslbPolicy#ipv6_multiple_fields}
  */
  readonly ipv6MultipleFields?: GslbPolicyGeoLocationListIpv6MultipleFields[] | cdktf.IResolvable;
}

export function gslbPolicyGeoLocationListStructToTerraform(struct?: GslbPolicyGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    ip_multiple_fields: cdktf.listMapper(gslbPolicyGeoLocationListIpMultipleFieldsToTerraform, true)(struct!.ipMultipleFields),
    ipv6_multiple_fields: cdktf.listMapper(gslbPolicyGeoLocationListIpv6MultipleFieldsToTerraform, true)(struct!.ipv6MultipleFields),
  }
}


export function gslbPolicyGeoLocationListStructToHclTerraform(struct?: GslbPolicyGeoLocationListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
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
    ip_multiple_fields: {
      value: cdktf.listMapperHcl(gslbPolicyGeoLocationListIpMultipleFieldsToHclTerraform, true)(struct!.ipMultipleFields),
      isBlock: true,
      type: "list",
      storageClassType: "GslbPolicyGeoLocationListIpMultipleFieldsList",
    },
    ipv6_multiple_fields: {
      value: cdktf.listMapperHcl(gslbPolicyGeoLocationListIpv6MultipleFieldsToHclTerraform, true)(struct!.ipv6MultipleFields),
      isBlock: true,
      type: "list",
      storageClassType: "GslbPolicyGeoLocationListIpv6MultipleFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GslbPolicyGeoLocationListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GslbPolicyGeoLocationListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._ipMultipleFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMultipleFields = this._ipMultipleFields?.internalValue;
    }
    if (this._ipv6MultipleFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6MultipleFields = this._ipv6MultipleFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._ipMultipleFields.internalValue = undefined;
      this._ipv6MultipleFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._ipMultipleFields.internalValue = value.ipMultipleFields;
      this._ipv6MultipleFields.internalValue = value.ipv6MultipleFields;
    }
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // ip_multiple_fields - computed: false, optional: true, required: false
  private _ipMultipleFields = new GslbPolicyGeoLocationListIpMultipleFieldsList(this, "ip_multiple_fields", false);
  public get ipMultipleFields() {
    return this._ipMultipleFields;
  }
  public putIpMultipleFields(value: GslbPolicyGeoLocationListIpMultipleFields[] | cdktf.IResolvable) {
    this._ipMultipleFields.internalValue = value;
  }
  public resetIpMultipleFields() {
    this._ipMultipleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMultipleFieldsInput() {
    return this._ipMultipleFields.internalValue;
  }

  // ipv6_multiple_fields - computed: false, optional: true, required: false
  private _ipv6MultipleFields = new GslbPolicyGeoLocationListIpv6MultipleFieldsList(this, "ipv6_multiple_fields", false);
  public get ipv6MultipleFields() {
    return this._ipv6MultipleFields;
  }
  public putIpv6MultipleFields(value: GslbPolicyGeoLocationListIpv6MultipleFields[] | cdktf.IResolvable) {
    this._ipv6MultipleFields.internalValue = value;
  }
  public resetIpv6MultipleFields() {
    this._ipv6MultipleFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6MultipleFieldsInput() {
    return this._ipv6MultipleFields.internalValue;
  }
}

export class GslbPolicyGeoLocationListStructList extends cdktf.ComplexList {
  public internalValue? : GslbPolicyGeoLocationListStruct[] | cdktf.IResolvable

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
  public get(index: number): GslbPolicyGeoLocationListStructOutputReference {
    return new GslbPolicyGeoLocationListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GslbPolicyGeoLocationMatch {
  /**
  * 'global': Global Geo-location; 'policy': Policy Geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#geo_type_overlap GslbPolicy#geo_type_overlap}
  */
  readonly geoTypeOverlap?: string;
  /**
  * 'global': Global Geo-location; 'policy': Policy Geo-location;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#match_first GslbPolicy#match_first}
  */
  readonly matchFirst?: string;
  /**
  * Enable overlap mode to do longest match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#overlap GslbPolicy#overlap}
  */
  readonly overlap?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#uuid GslbPolicy#uuid}
  */
  readonly uuid?: string;
}

export function gslbPolicyGeoLocationMatchToTerraform(struct?: GslbPolicyGeoLocationMatchOutputReference | GslbPolicyGeoLocationMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    geo_type_overlap: cdktf.stringToTerraform(struct!.geoTypeOverlap),
    match_first: cdktf.stringToTerraform(struct!.matchFirst),
    overlap: cdktf.numberToTerraform(struct!.overlap),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function gslbPolicyGeoLocationMatchToHclTerraform(struct?: GslbPolicyGeoLocationMatchOutputReference | GslbPolicyGeoLocationMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    geo_type_overlap: {
      value: cdktf.stringToHclTerraform(struct!.geoTypeOverlap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_first: {
      value: cdktf.stringToHclTerraform(struct!.matchFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overlap: {
      value: cdktf.numberToHclTerraform(struct!.overlap),
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

export class GslbPolicyGeoLocationMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GslbPolicyGeoLocationMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._geoTypeOverlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoTypeOverlap = this._geoTypeOverlap;
    }
    if (this._matchFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFirst = this._matchFirst;
    }
    if (this._overlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.overlap = this._overlap;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GslbPolicyGeoLocationMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._geoTypeOverlap = undefined;
      this._matchFirst = undefined;
      this._overlap = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._geoTypeOverlap = value.geoTypeOverlap;
      this._matchFirst = value.matchFirst;
      this._overlap = value.overlap;
      this._uuid = value.uuid;
    }
  }

  // geo_type_overlap - computed: false, optional: true, required: false
  private _geoTypeOverlap?: string; 
  public get geoTypeOverlap() {
    return this.getStringAttribute('geo_type_overlap');
  }
  public set geoTypeOverlap(value: string) {
    this._geoTypeOverlap = value;
  }
  public resetGeoTypeOverlap() {
    this._geoTypeOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoTypeOverlapInput() {
    return this._geoTypeOverlap;
  }

  // match_first - computed: false, optional: true, required: false
  private _matchFirst?: string; 
  public get matchFirst() {
    return this.getStringAttribute('match_first');
  }
  public set matchFirst(value: string) {
    this._matchFirst = value;
  }
  public resetMatchFirst() {
    this._matchFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFirstInput() {
    return this._matchFirst;
  }

  // overlap - computed: false, optional: true, required: false
  private _overlap?: number; 
  public get overlap() {
    return this.getNumberAttribute('overlap');
  }
  public set overlap(value: number) {
    this._overlap = value;
  }
  public resetOverlap() {
    this._overlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlapInput() {
    return this._overlap;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy thunder_gslb_policy}
*/
export class GslbPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbPolicy to import
  * @param importFromId The id of the existing GslbPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/gslb_policy thunder_gslb_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: GslbPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_policy',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeServersEnable = config.activeServersEnable;
    this._activeServersFailBreak = config.activeServersFailBreak;
    this._adminIpEnable = config.adminIpEnable;
    this._adminIpTopOnly = config.adminIpTopOnly;
    this._adminPreference = config.adminPreference;
    this._aliasAdminPreference = config.aliasAdminPreference;
    this._amountFirst = config.amountFirst;
    this._bwCostEnable = config.bwCostEnable;
    this._bwCostFailBreak = config.bwCostFailBreak;
    this._geographic = config.geographic;
    this._healthCheck = config.healthCheck;
    this._healthCheckPreferenceEnable = config.healthCheckPreferenceEnable;
    this._healthPreferenceTop = config.healthPreferenceTop;
    this._id = config.id;
    this._ipList = config.ipList;
    this._leastResponse = config.leastResponse;
    this._metricFailBreak = config.metricFailBreak;
    this._metricForceCheck = config.metricForceCheck;
    this._metricOrder = config.metricOrder;
    this._metricType = config.metricType;
    this._name = config.name;
    this._numSessionEnable = config.numSessionEnable;
    this._numSessionTolerance = config.numSessionTolerance;
    this._orderedIpTopOnly = config.orderedIpTopOnly;
    this._roundRobin = config.roundRobin;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._weightedAlias = config.weightedAlias;
    this._weightedIpEnable = config.weightedIpEnable;
    this._weightedIpTotalHits = config.weightedIpTotalHits;
    this._weightedSiteEnable = config.weightedSiteEnable;
    this._weightedSiteTotalHits = config.weightedSiteTotalHits;
    this._activeRdt.internalValue = config.activeRdt;
    this._autoMap.internalValue = config.autoMap;
    this._capacity.internalValue = config.capacity;
    this._connectionLoad.internalValue = config.connectionLoad;
    this._dns.internalValue = config.dns;
    this._edns.internalValue = config.edns;
    this._geoLocationList.internalValue = config.geoLocationList;
    this._geoLocationMatch.internalValue = config.geoLocationMatch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_servers_enable - computed: false, optional: true, required: false
  private _activeServersEnable?: number; 
  public get activeServersEnable() {
    return this.getNumberAttribute('active_servers_enable');
  }
  public set activeServersEnable(value: number) {
    this._activeServersEnable = value;
  }
  public resetActiveServersEnable() {
    this._activeServersEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServersEnableInput() {
    return this._activeServersEnable;
  }

  // active_servers_fail_break - computed: false, optional: true, required: false
  private _activeServersFailBreak?: number; 
  public get activeServersFailBreak() {
    return this.getNumberAttribute('active_servers_fail_break');
  }
  public set activeServersFailBreak(value: number) {
    this._activeServersFailBreak = value;
  }
  public resetActiveServersFailBreak() {
    this._activeServersFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeServersFailBreakInput() {
    return this._activeServersFailBreak;
  }

  // admin_ip_enable - computed: false, optional: true, required: false
  private _adminIpEnable?: number; 
  public get adminIpEnable() {
    return this.getNumberAttribute('admin_ip_enable');
  }
  public set adminIpEnable(value: number) {
    this._adminIpEnable = value;
  }
  public resetAdminIpEnable() {
    this._adminIpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpEnableInput() {
    return this._adminIpEnable;
  }

  // admin_ip_top_only - computed: false, optional: true, required: false
  private _adminIpTopOnly?: number; 
  public get adminIpTopOnly() {
    return this.getNumberAttribute('admin_ip_top_only');
  }
  public set adminIpTopOnly(value: number) {
    this._adminIpTopOnly = value;
  }
  public resetAdminIpTopOnly() {
    this._adminIpTopOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminIpTopOnlyInput() {
    return this._adminIpTopOnly;
  }

  // admin_preference - computed: false, optional: true, required: false
  private _adminPreference?: number; 
  public get adminPreference() {
    return this.getNumberAttribute('admin_preference');
  }
  public set adminPreference(value: number) {
    this._adminPreference = value;
  }
  public resetAdminPreference() {
    this._adminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPreferenceInput() {
    return this._adminPreference;
  }

  // alias_admin_preference - computed: false, optional: true, required: false
  private _aliasAdminPreference?: number; 
  public get aliasAdminPreference() {
    return this.getNumberAttribute('alias_admin_preference');
  }
  public set aliasAdminPreference(value: number) {
    this._aliasAdminPreference = value;
  }
  public resetAliasAdminPreference() {
    this._aliasAdminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAdminPreferenceInput() {
    return this._aliasAdminPreference;
  }

  // amount_first - computed: false, optional: true, required: false
  private _amountFirst?: number; 
  public get amountFirst() {
    return this.getNumberAttribute('amount_first');
  }
  public set amountFirst(value: number) {
    this._amountFirst = value;
  }
  public resetAmountFirst() {
    this._amountFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountFirstInput() {
    return this._amountFirst;
  }

  // bw_cost_enable - computed: false, optional: true, required: false
  private _bwCostEnable?: number; 
  public get bwCostEnable() {
    return this.getNumberAttribute('bw_cost_enable');
  }
  public set bwCostEnable(value: number) {
    this._bwCostEnable = value;
  }
  public resetBwCostEnable() {
    this._bwCostEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwCostEnableInput() {
    return this._bwCostEnable;
  }

  // bw_cost_fail_break - computed: false, optional: true, required: false
  private _bwCostFailBreak?: number; 
  public get bwCostFailBreak() {
    return this.getNumberAttribute('bw_cost_fail_break');
  }
  public set bwCostFailBreak(value: number) {
    this._bwCostFailBreak = value;
  }
  public resetBwCostFailBreak() {
    this._bwCostFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwCostFailBreakInput() {
    return this._bwCostFailBreak;
  }

  // geographic - computed: false, optional: true, required: false
  private _geographic?: number; 
  public get geographic() {
    return this.getNumberAttribute('geographic');
  }
  public set geographic(value: number) {
    this._geographic = value;
  }
  public resetGeographic() {
    this._geographic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographicInput() {
    return this._geographic;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck?: number; 
  public get healthCheck() {
    return this.getNumberAttribute('health_check');
  }
  public set healthCheck(value: number) {
    this._healthCheck = value;
  }
  public resetHealthCheck() {
    this._healthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck;
  }

  // health_check_preference_enable - computed: false, optional: true, required: false
  private _healthCheckPreferenceEnable?: number; 
  public get healthCheckPreferenceEnable() {
    return this.getNumberAttribute('health_check_preference_enable');
  }
  public set healthCheckPreferenceEnable(value: number) {
    this._healthCheckPreferenceEnable = value;
  }
  public resetHealthCheckPreferenceEnable() {
    this._healthCheckPreferenceEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckPreferenceEnableInput() {
    return this._healthCheckPreferenceEnable;
  }

  // health_preference_top - computed: false, optional: true, required: false
  private _healthPreferenceTop?: number; 
  public get healthPreferenceTop() {
    return this.getNumberAttribute('health_preference_top');
  }
  public set healthPreferenceTop(value: number) {
    this._healthPreferenceTop = value;
  }
  public resetHealthPreferenceTop() {
    this._healthPreferenceTop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthPreferenceTopInput() {
    return this._healthPreferenceTop;
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

  // ip_list - computed: false, optional: true, required: false
  private _ipList?: string; 
  public get ipList() {
    return this.getStringAttribute('ip_list');
  }
  public set ipList(value: string) {
    this._ipList = value;
  }
  public resetIpList() {
    this._ipList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList;
  }

  // least_response - computed: false, optional: true, required: false
  private _leastResponse?: number; 
  public get leastResponse() {
    return this.getNumberAttribute('least_response');
  }
  public set leastResponse(value: number) {
    this._leastResponse = value;
  }
  public resetLeastResponse() {
    this._leastResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leastResponseInput() {
    return this._leastResponse;
  }

  // metric_fail_break - computed: false, optional: true, required: false
  private _metricFailBreak?: number; 
  public get metricFailBreak() {
    return this.getNumberAttribute('metric_fail_break');
  }
  public set metricFailBreak(value: number) {
    this._metricFailBreak = value;
  }
  public resetMetricFailBreak() {
    this._metricFailBreak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricFailBreakInput() {
    return this._metricFailBreak;
  }

  // metric_force_check - computed: false, optional: true, required: false
  private _metricForceCheck?: number; 
  public get metricForceCheck() {
    return this.getNumberAttribute('metric_force_check');
  }
  public set metricForceCheck(value: number) {
    this._metricForceCheck = value;
  }
  public resetMetricForceCheck() {
    this._metricForceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricForceCheckInput() {
    return this._metricForceCheck;
  }

  // metric_order - computed: false, optional: true, required: false
  private _metricOrder?: number; 
  public get metricOrder() {
    return this.getNumberAttribute('metric_order');
  }
  public set metricOrder(value: number) {
    this._metricOrder = value;
  }
  public resetMetricOrder() {
    this._metricOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOrderInput() {
    return this._metricOrder;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
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

  // num_session_enable - computed: false, optional: true, required: false
  private _numSessionEnable?: number; 
  public get numSessionEnable() {
    return this.getNumberAttribute('num_session_enable');
  }
  public set numSessionEnable(value: number) {
    this._numSessionEnable = value;
  }
  public resetNumSessionEnable() {
    this._numSessionEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSessionEnableInput() {
    return this._numSessionEnable;
  }

  // num_session_tolerance - computed: false, optional: true, required: false
  private _numSessionTolerance?: number; 
  public get numSessionTolerance() {
    return this.getNumberAttribute('num_session_tolerance');
  }
  public set numSessionTolerance(value: number) {
    this._numSessionTolerance = value;
  }
  public resetNumSessionTolerance() {
    this._numSessionTolerance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numSessionToleranceInput() {
    return this._numSessionTolerance;
  }

  // ordered_ip_top_only - computed: false, optional: true, required: false
  private _orderedIpTopOnly?: number; 
  public get orderedIpTopOnly() {
    return this.getNumberAttribute('ordered_ip_top_only');
  }
  public set orderedIpTopOnly(value: number) {
    this._orderedIpTopOnly = value;
  }
  public resetOrderedIpTopOnly() {
    this._orderedIpTopOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderedIpTopOnlyInput() {
    return this._orderedIpTopOnly;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin?: number; 
  public get roundRobin() {
    return this.getNumberAttribute('round_robin');
  }
  public set roundRobin(value: number) {
    this._roundRobin = value;
  }
  public resetRoundRobin() {
    this._roundRobin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // weighted_alias - computed: false, optional: true, required: false
  private _weightedAlias?: number; 
  public get weightedAlias() {
    return this.getNumberAttribute('weighted_alias');
  }
  public set weightedAlias(value: number) {
    this._weightedAlias = value;
  }
  public resetWeightedAlias() {
    this._weightedAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedAliasInput() {
    return this._weightedAlias;
  }

  // weighted_ip_enable - computed: false, optional: true, required: false
  private _weightedIpEnable?: number; 
  public get weightedIpEnable() {
    return this.getNumberAttribute('weighted_ip_enable');
  }
  public set weightedIpEnable(value: number) {
    this._weightedIpEnable = value;
  }
  public resetWeightedIpEnable() {
    this._weightedIpEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedIpEnableInput() {
    return this._weightedIpEnable;
  }

  // weighted_ip_total_hits - computed: false, optional: true, required: false
  private _weightedIpTotalHits?: number; 
  public get weightedIpTotalHits() {
    return this.getNumberAttribute('weighted_ip_total_hits');
  }
  public set weightedIpTotalHits(value: number) {
    this._weightedIpTotalHits = value;
  }
  public resetWeightedIpTotalHits() {
    this._weightedIpTotalHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedIpTotalHitsInput() {
    return this._weightedIpTotalHits;
  }

  // weighted_site_enable - computed: false, optional: true, required: false
  private _weightedSiteEnable?: number; 
  public get weightedSiteEnable() {
    return this.getNumberAttribute('weighted_site_enable');
  }
  public set weightedSiteEnable(value: number) {
    this._weightedSiteEnable = value;
  }
  public resetWeightedSiteEnable() {
    this._weightedSiteEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedSiteEnableInput() {
    return this._weightedSiteEnable;
  }

  // weighted_site_total_hits - computed: false, optional: true, required: false
  private _weightedSiteTotalHits?: number; 
  public get weightedSiteTotalHits() {
    return this.getNumberAttribute('weighted_site_total_hits');
  }
  public set weightedSiteTotalHits(value: number) {
    this._weightedSiteTotalHits = value;
  }
  public resetWeightedSiteTotalHits() {
    this._weightedSiteTotalHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedSiteTotalHitsInput() {
    return this._weightedSiteTotalHits;
  }

  // active_rdt - computed: false, optional: true, required: false
  private _activeRdt = new GslbPolicyActiveRdtOutputReference(this, "active_rdt");
  public get activeRdt() {
    return this._activeRdt;
  }
  public putActiveRdt(value: GslbPolicyActiveRdt) {
    this._activeRdt.internalValue = value;
  }
  public resetActiveRdt() {
    this._activeRdt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeRdtInput() {
    return this._activeRdt.internalValue;
  }

  // auto_map - computed: false, optional: true, required: false
  private _autoMap = new GslbPolicyAutoMapOutputReference(this, "auto_map");
  public get autoMap() {
    return this._autoMap;
  }
  public putAutoMap(value: GslbPolicyAutoMap) {
    this._autoMap.internalValue = value;
  }
  public resetAutoMap() {
    this._autoMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMapInput() {
    return this._autoMap.internalValue;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity = new GslbPolicyCapacityOutputReference(this, "capacity");
  public get capacity() {
    return this._capacity;
  }
  public putCapacity(value: GslbPolicyCapacity) {
    this._capacity.internalValue = value;
  }
  public resetCapacity() {
    this._capacity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity.internalValue;
  }

  // connection_load - computed: false, optional: true, required: false
  private _connectionLoad = new GslbPolicyConnectionLoadOutputReference(this, "connection_load");
  public get connectionLoad() {
    return this._connectionLoad;
  }
  public putConnectionLoad(value: GslbPolicyConnectionLoad) {
    this._connectionLoad.internalValue = value;
  }
  public resetConnectionLoad() {
    this._connectionLoad.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLoadInput() {
    return this._connectionLoad.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new GslbPolicyDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: GslbPolicyDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // edns - computed: false, optional: true, required: false
  private _edns = new GslbPolicyEdnsOutputReference(this, "edns");
  public get edns() {
    return this._edns;
  }
  public putEdns(value: GslbPolicyEdns) {
    this._edns.internalValue = value;
  }
  public resetEdns() {
    this._edns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ednsInput() {
    return this._edns.internalValue;
  }

  // geo_location_list - computed: false, optional: true, required: false
  private _geoLocationList = new GslbPolicyGeoLocationListStructList(this, "geo_location_list", false);
  public get geoLocationList() {
    return this._geoLocationList;
  }
  public putGeoLocationList(value: GslbPolicyGeoLocationListStruct[] | cdktf.IResolvable) {
    this._geoLocationList.internalValue = value;
  }
  public resetGeoLocationList() {
    this._geoLocationList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationListInput() {
    return this._geoLocationList.internalValue;
  }

  // geo_location_match - computed: false, optional: true, required: false
  private _geoLocationMatch = new GslbPolicyGeoLocationMatchOutputReference(this, "geo_location_match");
  public get geoLocationMatch() {
    return this._geoLocationMatch;
  }
  public putGeoLocationMatch(value: GslbPolicyGeoLocationMatch) {
    this._geoLocationMatch.internalValue = value;
  }
  public resetGeoLocationMatch() {
    this._geoLocationMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationMatchInput() {
    return this._geoLocationMatch.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_servers_enable: cdktf.numberToTerraform(this._activeServersEnable),
      active_servers_fail_break: cdktf.numberToTerraform(this._activeServersFailBreak),
      admin_ip_enable: cdktf.numberToTerraform(this._adminIpEnable),
      admin_ip_top_only: cdktf.numberToTerraform(this._adminIpTopOnly),
      admin_preference: cdktf.numberToTerraform(this._adminPreference),
      alias_admin_preference: cdktf.numberToTerraform(this._aliasAdminPreference),
      amount_first: cdktf.numberToTerraform(this._amountFirst),
      bw_cost_enable: cdktf.numberToTerraform(this._bwCostEnable),
      bw_cost_fail_break: cdktf.numberToTerraform(this._bwCostFailBreak),
      geographic: cdktf.numberToTerraform(this._geographic),
      health_check: cdktf.numberToTerraform(this._healthCheck),
      health_check_preference_enable: cdktf.numberToTerraform(this._healthCheckPreferenceEnable),
      health_preference_top: cdktf.numberToTerraform(this._healthPreferenceTop),
      id: cdktf.stringToTerraform(this._id),
      ip_list: cdktf.stringToTerraform(this._ipList),
      least_response: cdktf.numberToTerraform(this._leastResponse),
      metric_fail_break: cdktf.numberToTerraform(this._metricFailBreak),
      metric_force_check: cdktf.numberToTerraform(this._metricForceCheck),
      metric_order: cdktf.numberToTerraform(this._metricOrder),
      metric_type: cdktf.stringToTerraform(this._metricType),
      name: cdktf.stringToTerraform(this._name),
      num_session_enable: cdktf.numberToTerraform(this._numSessionEnable),
      num_session_tolerance: cdktf.numberToTerraform(this._numSessionTolerance),
      ordered_ip_top_only: cdktf.numberToTerraform(this._orderedIpTopOnly),
      round_robin: cdktf.numberToTerraform(this._roundRobin),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      weighted_alias: cdktf.numberToTerraform(this._weightedAlias),
      weighted_ip_enable: cdktf.numberToTerraform(this._weightedIpEnable),
      weighted_ip_total_hits: cdktf.numberToTerraform(this._weightedIpTotalHits),
      weighted_site_enable: cdktf.numberToTerraform(this._weightedSiteEnable),
      weighted_site_total_hits: cdktf.numberToTerraform(this._weightedSiteTotalHits),
      active_rdt: gslbPolicyActiveRdtToTerraform(this._activeRdt.internalValue),
      auto_map: gslbPolicyAutoMapToTerraform(this._autoMap.internalValue),
      capacity: gslbPolicyCapacityToTerraform(this._capacity.internalValue),
      connection_load: gslbPolicyConnectionLoadToTerraform(this._connectionLoad.internalValue),
      dns: gslbPolicyDnsToTerraform(this._dns.internalValue),
      edns: gslbPolicyEdnsToTerraform(this._edns.internalValue),
      geo_location_list: cdktf.listMapper(gslbPolicyGeoLocationListStructToTerraform, true)(this._geoLocationList.internalValue),
      geo_location_match: gslbPolicyGeoLocationMatchToTerraform(this._geoLocationMatch.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_servers_enable: {
        value: cdktf.numberToHclTerraform(this._activeServersEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_servers_fail_break: {
        value: cdktf.numberToHclTerraform(this._activeServersFailBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ip_enable: {
        value: cdktf.numberToHclTerraform(this._adminIpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_ip_top_only: {
        value: cdktf.numberToHclTerraform(this._adminIpTopOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admin_preference: {
        value: cdktf.numberToHclTerraform(this._adminPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias_admin_preference: {
        value: cdktf.numberToHclTerraform(this._aliasAdminPreference),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amount_first: {
        value: cdktf.numberToHclTerraform(this._amountFirst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_cost_enable: {
        value: cdktf.numberToHclTerraform(this._bwCostEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bw_cost_fail_break: {
        value: cdktf.numberToHclTerraform(this._bwCostFailBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      geographic: {
        value: cdktf.numberToHclTerraform(this._geographic),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check: {
        value: cdktf.numberToHclTerraform(this._healthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_check_preference_enable: {
        value: cdktf.numberToHclTerraform(this._healthCheckPreferenceEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      health_preference_top: {
        value: cdktf.numberToHclTerraform(this._healthPreferenceTop),
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
      ip_list: {
        value: cdktf.stringToHclTerraform(this._ipList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      least_response: {
        value: cdktf.numberToHclTerraform(this._leastResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_fail_break: {
        value: cdktf.numberToHclTerraform(this._metricFailBreak),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_force_check: {
        value: cdktf.numberToHclTerraform(this._metricForceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_order: {
        value: cdktf.numberToHclTerraform(this._metricOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
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
      num_session_enable: {
        value: cdktf.numberToHclTerraform(this._numSessionEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      num_session_tolerance: {
        value: cdktf.numberToHclTerraform(this._numSessionTolerance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ordered_ip_top_only: {
        value: cdktf.numberToHclTerraform(this._orderedIpTopOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      round_robin: {
        value: cdktf.numberToHclTerraform(this._roundRobin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      weighted_alias: {
        value: cdktf.numberToHclTerraform(this._weightedAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weighted_ip_enable: {
        value: cdktf.numberToHclTerraform(this._weightedIpEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weighted_ip_total_hits: {
        value: cdktf.numberToHclTerraform(this._weightedIpTotalHits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weighted_site_enable: {
        value: cdktf.numberToHclTerraform(this._weightedSiteEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      weighted_site_total_hits: {
        value: cdktf.numberToHclTerraform(this._weightedSiteTotalHits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active_rdt: {
        value: gslbPolicyActiveRdtToHclTerraform(this._activeRdt.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyActiveRdtList",
      },
      auto_map: {
        value: gslbPolicyAutoMapToHclTerraform(this._autoMap.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyAutoMapList",
      },
      capacity: {
        value: gslbPolicyCapacityToHclTerraform(this._capacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyCapacityList",
      },
      connection_load: {
        value: gslbPolicyConnectionLoadToHclTerraform(this._connectionLoad.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyConnectionLoadList",
      },
      dns: {
        value: gslbPolicyDnsToHclTerraform(this._dns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyDnsList",
      },
      edns: {
        value: gslbPolicyEdnsToHclTerraform(this._edns.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyEdnsList",
      },
      geo_location_list: {
        value: cdktf.listMapperHcl(gslbPolicyGeoLocationListStructToHclTerraform, true)(this._geoLocationList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyGeoLocationListStructList",
      },
      geo_location_match: {
        value: gslbPolicyGeoLocationMatchToHclTerraform(this._geoLocationMatch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GslbPolicyGeoLocationMatchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
