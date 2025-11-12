// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAaaPolicyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#id DataThunderAamAaaPolicyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify AAA policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#name DataThunderAamAaaPolicyStats#name}
  */
  readonly name: string;
  /**
  * aaa_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#aaa_rule_list DataThunderAamAaaPolicyStats#aaa_rule_list}
  */
  readonly aaaRuleList?: DataThunderAamAaaPolicyStatsAaaRuleListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#stats DataThunderAamAaaPolicyStats#stats}
  */
  readonly stats?: DataThunderAamAaaPolicyStatsStats;
}
export interface DataThunderAamAaaPolicyStatsAaaRuleListStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#failure_bypass DataThunderAamAaaPolicyStats#failure_bypass}
  */
  readonly failureBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#hit_auth DataThunderAamAaaPolicyStats#hit_auth}
  */
  readonly hitAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#hit_bypass DataThunderAamAaaPolicyStats#hit_bypass}
  */
  readonly hitBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#hit_deny DataThunderAamAaaPolicyStats#hit_deny}
  */
  readonly hitDeny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#total_count DataThunderAamAaaPolicyStats#total_count}
  */
  readonly totalCount?: number;
}

export function dataThunderAamAaaPolicyStatsAaaRuleListStatsToTerraform(struct?: DataThunderAamAaaPolicyStatsAaaRuleListStatsOutputReference | DataThunderAamAaaPolicyStatsAaaRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_bypass: cdktf.numberToTerraform(struct!.failureBypass),
    hit_auth: cdktf.numberToTerraform(struct!.hitAuth),
    hit_bypass: cdktf.numberToTerraform(struct!.hitBypass),
    hit_deny: cdktf.numberToTerraform(struct!.hitDeny),
    total_count: cdktf.numberToTerraform(struct!.totalCount),
  }
}


export function dataThunderAamAaaPolicyStatsAaaRuleListStatsToHclTerraform(struct?: DataThunderAamAaaPolicyStatsAaaRuleListStatsOutputReference | DataThunderAamAaaPolicyStatsAaaRuleListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_bypass: {
      value: cdktf.numberToHclTerraform(struct!.failureBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_auth: {
      value: cdktf.numberToHclTerraform(struct!.hitAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_bypass: {
      value: cdktf.numberToHclTerraform(struct!.hitBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_deny: {
      value: cdktf.numberToHclTerraform(struct!.hitDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_count: {
      value: cdktf.numberToHclTerraform(struct!.totalCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAaaPolicyStatsAaaRuleListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAaaPolicyStatsAaaRuleListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureBypass = this._failureBypass;
    }
    if (this._hitAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitAuth = this._hitAuth;
    }
    if (this._hitBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitBypass = this._hitBypass;
    }
    if (this._hitDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitDeny = this._hitDeny;
    }
    if (this._totalCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCount = this._totalCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAaaPolicyStatsAaaRuleListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureBypass = undefined;
      this._hitAuth = undefined;
      this._hitBypass = undefined;
      this._hitDeny = undefined;
      this._totalCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureBypass = value.failureBypass;
      this._hitAuth = value.hitAuth;
      this._hitBypass = value.hitBypass;
      this._hitDeny = value.hitDeny;
      this._totalCount = value.totalCount;
    }
  }

  // failure_bypass - computed: false, optional: true, required: false
  private _failureBypass?: number; 
  public get failureBypass() {
    return this.getNumberAttribute('failure_bypass');
  }
  public set failureBypass(value: number) {
    this._failureBypass = value;
  }
  public resetFailureBypass() {
    this._failureBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureBypassInput() {
    return this._failureBypass;
  }

  // hit_auth - computed: false, optional: true, required: false
  private _hitAuth?: number; 
  public get hitAuth() {
    return this.getNumberAttribute('hit_auth');
  }
  public set hitAuth(value: number) {
    this._hitAuth = value;
  }
  public resetHitAuth() {
    this._hitAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitAuthInput() {
    return this._hitAuth;
  }

  // hit_bypass - computed: false, optional: true, required: false
  private _hitBypass?: number; 
  public get hitBypass() {
    return this.getNumberAttribute('hit_bypass');
  }
  public set hitBypass(value: number) {
    this._hitBypass = value;
  }
  public resetHitBypass() {
    this._hitBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitBypassInput() {
    return this._hitBypass;
  }

  // hit_deny - computed: false, optional: true, required: false
  private _hitDeny?: number; 
  public get hitDeny() {
    return this.getNumberAttribute('hit_deny');
  }
  public set hitDeny(value: number) {
    this._hitDeny = value;
  }
  public resetHitDeny() {
    this._hitDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitDenyInput() {
    return this._hitDeny;
  }

  // total_count - computed: false, optional: true, required: false
  private _totalCount?: number; 
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }
  public set totalCount(value: number) {
    this._totalCount = value;
  }
  public resetTotalCount() {
    this._totalCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCountInput() {
    return this._totalCount;
  }
}
export interface DataThunderAamAaaPolicyStatsAaaRuleListStruct {
  /**
  * Specify AAA rule index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#index DataThunderAamAaaPolicyStats#index}
  */
  readonly index: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#stats DataThunderAamAaaPolicyStats#stats}
  */
  readonly stats?: DataThunderAamAaaPolicyStatsAaaRuleListStats;
}

export function dataThunderAamAaaPolicyStatsAaaRuleListStructToTerraform(struct?: DataThunderAamAaaPolicyStatsAaaRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    stats: dataThunderAamAaaPolicyStatsAaaRuleListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAaaPolicyStatsAaaRuleListStructToHclTerraform(struct?: DataThunderAamAaaPolicyStatsAaaRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stats: {
      value: dataThunderAamAaaPolicyStatsAaaRuleListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAaaPolicyStatsAaaRuleListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAaaPolicyStatsAaaRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAaaPolicyStatsAaaRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAaaPolicyStatsAaaRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._stats.internalValue = value.stats;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAaaPolicyStatsAaaRuleListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAaaPolicyStatsAaaRuleListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderAamAaaPolicyStatsAaaRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAaaPolicyStatsAaaRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAaaPolicyStatsAaaRuleListStructOutputReference {
    return new DataThunderAamAaaPolicyStatsAaaRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAaaPolicyStatsStats {
  /**
  * Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#error DataThunderAamAaaPolicyStats#error}
  */
  readonly error?: number;
  /**
  * Auth Failure Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#failure_bypass DataThunderAamAaaPolicyStats#failure_bypass}
  */
  readonly failureBypass?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#req DataThunderAamAaaPolicyStats#req}
  */
  readonly req?: number;
  /**
  * Request Matching Authentication Template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#req_auth DataThunderAamAaaPolicyStats#req_auth}
  */
  readonly reqAuth?: number;
  /**
  * Request Bypassed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#req_bypass DataThunderAamAaaPolicyStats#req_bypass}
  */
  readonly reqBypass?: number;
  /**
  * Request Rejected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#req_reject DataThunderAamAaaPolicyStats#req_reject}
  */
  readonly reqReject?: number;
  /**
  * Request Skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#req_skip DataThunderAamAaaPolicyStats#req_skip}
  */
  readonly reqSkip?: number;
}

export function dataThunderAamAaaPolicyStatsStatsToTerraform(struct?: DataThunderAamAaaPolicyStatsStatsOutputReference | DataThunderAamAaaPolicyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error: cdktf.numberToTerraform(struct!.error),
    failure_bypass: cdktf.numberToTerraform(struct!.failureBypass),
    req: cdktf.numberToTerraform(struct!.req),
    req_auth: cdktf.numberToTerraform(struct!.reqAuth),
    req_bypass: cdktf.numberToTerraform(struct!.reqBypass),
    req_reject: cdktf.numberToTerraform(struct!.reqReject),
    req_skip: cdktf.numberToTerraform(struct!.reqSkip),
  }
}


export function dataThunderAamAaaPolicyStatsStatsToHclTerraform(struct?: DataThunderAamAaaPolicyStatsStatsOutputReference | DataThunderAamAaaPolicyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_bypass: {
      value: cdktf.numberToHclTerraform(struct!.failureBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req: {
      value: cdktf.numberToHclTerraform(struct!.req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_auth: {
      value: cdktf.numberToHclTerraform(struct!.reqAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_bypass: {
      value: cdktf.numberToHclTerraform(struct!.reqBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_reject: {
      value: cdktf.numberToHclTerraform(struct!.reqReject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_skip: {
      value: cdktf.numberToHclTerraform(struct!.reqSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAaaPolicyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAaaPolicyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._failureBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureBypass = this._failureBypass;
    }
    if (this._req !== undefined) {
      hasAnyValues = true;
      internalValueResult.req = this._req;
    }
    if (this._reqAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqAuth = this._reqAuth;
    }
    if (this._reqBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqBypass = this._reqBypass;
    }
    if (this._reqReject !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqReject = this._reqReject;
    }
    if (this._reqSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSkip = this._reqSkip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAaaPolicyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._error = undefined;
      this._failureBypass = undefined;
      this._req = undefined;
      this._reqAuth = undefined;
      this._reqBypass = undefined;
      this._reqReject = undefined;
      this._reqSkip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._error = value.error;
      this._failureBypass = value.failureBypass;
      this._req = value.req;
      this._reqAuth = value.reqAuth;
      this._reqBypass = value.reqBypass;
      this._reqReject = value.reqReject;
      this._reqSkip = value.reqSkip;
    }
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // failure_bypass - computed: false, optional: true, required: false
  private _failureBypass?: number; 
  public get failureBypass() {
    return this.getNumberAttribute('failure_bypass');
  }
  public set failureBypass(value: number) {
    this._failureBypass = value;
  }
  public resetFailureBypass() {
    this._failureBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureBypassInput() {
    return this._failureBypass;
  }

  // req - computed: false, optional: true, required: false
  private _req?: number; 
  public get req() {
    return this.getNumberAttribute('req');
  }
  public set req(value: number) {
    this._req = value;
  }
  public resetReq() {
    this._req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqInput() {
    return this._req;
  }

  // req_auth - computed: false, optional: true, required: false
  private _reqAuth?: number; 
  public get reqAuth() {
    return this.getNumberAttribute('req_auth');
  }
  public set reqAuth(value: number) {
    this._reqAuth = value;
  }
  public resetReqAuth() {
    this._reqAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqAuthInput() {
    return this._reqAuth;
  }

  // req_bypass - computed: false, optional: true, required: false
  private _reqBypass?: number; 
  public get reqBypass() {
    return this.getNumberAttribute('req_bypass');
  }
  public set reqBypass(value: number) {
    this._reqBypass = value;
  }
  public resetReqBypass() {
    this._reqBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqBypassInput() {
    return this._reqBypass;
  }

  // req_reject - computed: false, optional: true, required: false
  private _reqReject?: number; 
  public get reqReject() {
    return this.getNumberAttribute('req_reject');
  }
  public set reqReject(value: number) {
    this._reqReject = value;
  }
  public resetReqReject() {
    this._reqReject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRejectInput() {
    return this._reqReject;
  }

  // req_skip - computed: false, optional: true, required: false
  private _reqSkip?: number; 
  public get reqSkip() {
    return this.getNumberAttribute('req_skip');
  }
  public set reqSkip(value: number) {
    this._reqSkip = value;
  }
  public resetReqSkip() {
    this._reqSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSkipInput() {
    return this._reqSkip;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats thunder_aam_aaa_policy_stats}
*/
export class DataThunderAamAaaPolicyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_aaa_policy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAaaPolicyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAaaPolicyStats to import
  * @param importFromId The id of the existing DataThunderAamAaaPolicyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAaaPolicyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_aaa_policy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_aaa_policy_stats thunder_aam_aaa_policy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAaaPolicyStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAaaPolicyStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_aaa_policy_stats',
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
    this._id = config.id;
    this._name = config.name;
    this._aaaRuleList.internalValue = config.aaaRuleList;
    this._stats.internalValue = config.stats;
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

  // aaa_rule_list - computed: false, optional: true, required: false
  private _aaaRuleList = new DataThunderAamAaaPolicyStatsAaaRuleListStructList(this, "aaa_rule_list", false);
  public get aaaRuleList() {
    return this._aaaRuleList;
  }
  public putAaaRuleList(value: DataThunderAamAaaPolicyStatsAaaRuleListStruct[] | cdktf.IResolvable) {
    this._aaaRuleList.internalValue = value;
  }
  public resetAaaRuleList() {
    this._aaaRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaRuleListInput() {
    return this._aaaRuleList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAaaPolicyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAaaPolicyStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      aaa_rule_list: cdktf.listMapper(dataThunderAamAaaPolicyStatsAaaRuleListStructToTerraform, true)(this._aaaRuleList.internalValue),
      stats: dataThunderAamAaaPolicyStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aaa_rule_list: {
        value: cdktf.listMapperHcl(dataThunderAamAaaPolicyStatsAaaRuleListStructToHclTerraform, true)(this._aaaRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAaaPolicyStatsAaaRuleListStructList",
      },
      stats: {
        value: dataThunderAamAaaPolicyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAaaPolicyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
