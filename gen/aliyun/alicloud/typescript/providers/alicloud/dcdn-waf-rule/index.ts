// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdnWafRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#action DcdnWafRule#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#cc_status DcdnWafRule#cc_status}
  */
  readonly ccStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#cn_region_list DcdnWafRule#cn_region_list}
  */
  readonly cnRegionList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#effect DcdnWafRule#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#id DcdnWafRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#other_region_list DcdnWafRule#other_region_list}
  */
  readonly otherRegionList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#policy_id DcdnWafRule#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#regular_rules DcdnWafRule#regular_rules}
  */
  readonly regularRules?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#regular_types DcdnWafRule#regular_types}
  */
  readonly regularTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#remote_addr DcdnWafRule#remote_addr}
  */
  readonly remoteAddr?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#rule_name DcdnWafRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#scenes DcdnWafRule#scenes}
  */
  readonly scenes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#status DcdnWafRule#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#waf_group_ids DcdnWafRule#waf_group_ids}
  */
  readonly wafGroupIds?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#conditions DcdnWafRule#conditions}
  */
  readonly conditions?: DcdnWafRuleConditions[] | cdktf.IResolvable;
  /**
  * rate_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#rate_limit DcdnWafRule#rate_limit}
  */
  readonly rateLimit?: DcdnWafRuleRateLimit;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#timeouts DcdnWafRule#timeouts}
  */
  readonly timeouts?: DcdnWafRuleTimeouts;
}
export interface DcdnWafRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#key DcdnWafRule#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#op_value DcdnWafRule#op_value}
  */
  readonly opValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#sub_key DcdnWafRule#sub_key}
  */
  readonly subKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#values DcdnWafRule#values}
  */
  readonly values?: string;
}

export function dcdnWafRuleConditionsToTerraform(struct?: DcdnWafRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    op_value: cdktf.stringToTerraform(struct!.opValue),
    sub_key: cdktf.stringToTerraform(struct!.subKey),
    values: cdktf.stringToTerraform(struct!.values),
  }
}


export function dcdnWafRuleConditionsToHclTerraform(struct?: DcdnWafRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op_value: {
      value: cdktf.stringToHclTerraform(struct!.opValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_key: {
      value: cdktf.stringToHclTerraform(struct!.subKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnWafRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcdnWafRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._opValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opValue = this._opValue;
    }
    if (this._subKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subKey = this._subKey;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnWafRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._opValue = undefined;
      this._subKey = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._opValue = value.opValue;
      this._subKey = value.subKey;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // op_value - computed: false, optional: false, required: true
  private _opValue?: string; 
  public get opValue() {
    return this.getStringAttribute('op_value');
  }
  public set opValue(value: string) {
    this._opValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opValueInput() {
    return this._opValue;
  }

  // sub_key - computed: false, optional: true, required: false
  private _subKey?: string; 
  public get subKey() {
    return this.getStringAttribute('sub_key');
  }
  public set subKey(value: string) {
    this._subKey = value;
  }
  public resetSubKey() {
    this._subKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subKeyInput() {
    return this._subKey;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DcdnWafRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : DcdnWafRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): DcdnWafRuleConditionsOutputReference {
    return new DcdnWafRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DcdnWafRuleRateLimitStatus {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#code DcdnWafRule#code}
  */
  readonly code?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#count DcdnWafRule#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#ratio DcdnWafRule#ratio}
  */
  readonly ratio?: number;
}

export function dcdnWafRuleRateLimitStatusToTerraform(struct?: DcdnWafRuleRateLimitStatusOutputReference | DcdnWafRuleRateLimitStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.stringToTerraform(struct!.code),
    count: cdktf.numberToTerraform(struct!.count),
    ratio: cdktf.numberToTerraform(struct!.ratio),
  }
}


export function dcdnWafRuleRateLimitStatusToHclTerraform(struct?: DcdnWafRuleRateLimitStatusOutputReference | DcdnWafRuleRateLimitStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.stringToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio: {
      value: cdktf.numberToHclTerraform(struct!.ratio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnWafRuleRateLimitStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnWafRuleRateLimitStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._ratio !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio = this._ratio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnWafRuleRateLimitStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._code = undefined;
      this._count = undefined;
      this._ratio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._code = value.code;
      this._count = value.count;
      this._ratio = value.ratio;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // ratio - computed: false, optional: true, required: false
  private _ratio?: number; 
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }
  public set ratio(value: number) {
    this._ratio = value;
  }
  public resetRatio() {
    this._ratio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratioInput() {
    return this._ratio;
  }
}
export interface DcdnWafRuleRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#interval DcdnWafRule#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#sub_key DcdnWafRule#sub_key}
  */
  readonly subKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#target DcdnWafRule#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#threshold DcdnWafRule#threshold}
  */
  readonly threshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#ttl DcdnWafRule#ttl}
  */
  readonly ttl?: number;
  /**
  * status block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#status DcdnWafRule#status}
  */
  readonly status?: DcdnWafRuleRateLimitStatus;
}

export function dcdnWafRuleRateLimitToTerraform(struct?: DcdnWafRuleRateLimitOutputReference | DcdnWafRuleRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    sub_key: cdktf.stringToTerraform(struct!.subKey),
    target: cdktf.stringToTerraform(struct!.target),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    status: dcdnWafRuleRateLimitStatusToTerraform(struct!.status),
  }
}


export function dcdnWafRuleRateLimitToHclTerraform(struct?: DcdnWafRuleRateLimitOutputReference | DcdnWafRuleRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sub_key: {
      value: cdktf.stringToHclTerraform(struct!.subKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: dcdnWafRuleRateLimitStatusToHclTerraform(struct!.status),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnWafRuleRateLimitStatusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnWafRuleRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnWafRuleRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._subKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.subKey = this._subKey;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._status?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnWafRuleRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._subKey = undefined;
      this._target = undefined;
      this._threshold = undefined;
      this._ttl = undefined;
      this._status.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._subKey = value.subKey;
      this._target = value.target;
      this._threshold = value.threshold;
      this._ttl = value.ttl;
      this._status.internalValue = value.status;
    }
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

  // sub_key - computed: false, optional: true, required: false
  private _subKey?: string; 
  public get subKey() {
    return this.getStringAttribute('sub_key');
  }
  public set subKey(value: string) {
    this._subKey = value;
  }
  public resetSubKey() {
    this._subKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subKeyInput() {
    return this._subKey;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
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

  // status - computed: false, optional: true, required: false
  private _status = new DcdnWafRuleRateLimitStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }
  public putStatus(value: DcdnWafRuleRateLimitStatus) {
    this._status.internalValue = value;
  }
  public resetStatus() {
    this._status.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status.internalValue;
  }
}
export interface DcdnWafRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#create DcdnWafRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#delete DcdnWafRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#update DcdnWafRule#update}
  */
  readonly update?: string;
}

export function dcdnWafRuleTimeoutsToTerraform(struct?: DcdnWafRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dcdnWafRuleTimeoutsToHclTerraform(struct?: DcdnWafRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnWafRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DcdnWafRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnWafRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule alicloud_dcdn_waf_rule}
*/
export class DcdnWafRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dcdn_waf_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdnWafRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdnWafRule to import
  * @param importFromId The id of the existing DcdnWafRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdnWafRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dcdn_waf_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/dcdn_waf_rule alicloud_dcdn_waf_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdnWafRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DcdnWafRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dcdn_waf_rule',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._ccStatus = config.ccStatus;
    this._cnRegionList = config.cnRegionList;
    this._effect = config.effect;
    this._id = config.id;
    this._otherRegionList = config.otherRegionList;
    this._policyId = config.policyId;
    this._regularRules = config.regularRules;
    this._regularTypes = config.regularTypes;
    this._remoteAddr = config.remoteAddr;
    this._ruleName = config.ruleName;
    this._scenes = config.scenes;
    this._status = config.status;
    this._wafGroupIds = config.wafGroupIds;
    this._conditions.internalValue = config.conditions;
    this._rateLimit.internalValue = config.rateLimit;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // cc_status - computed: true, optional: true, required: false
  private _ccStatus?: string; 
  public get ccStatus() {
    return this.getStringAttribute('cc_status');
  }
  public set ccStatus(value: string) {
    this._ccStatus = value;
  }
  public resetCcStatus() {
    this._ccStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccStatusInput() {
    return this._ccStatus;
  }

  // cn_region_list - computed: false, optional: true, required: false
  private _cnRegionList?: string; 
  public get cnRegionList() {
    return this.getStringAttribute('cn_region_list');
  }
  public set cnRegionList(value: string) {
    this._cnRegionList = value;
  }
  public resetCnRegionList() {
    this._cnRegionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnRegionListInput() {
    return this._cnRegionList;
  }

  // defense_scene - computed: true, optional: false, required: false
  public get defenseScene() {
    return this.getStringAttribute('defense_scene');
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // gmt_modified - computed: true, optional: false, required: false
  public get gmtModified() {
    return this.getStringAttribute('gmt_modified');
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

  // other_region_list - computed: false, optional: true, required: false
  private _otherRegionList?: string; 
  public get otherRegionList() {
    return this.getStringAttribute('other_region_list');
  }
  public set otherRegionList(value: string) {
    this._otherRegionList = value;
  }
  public resetOtherRegionList() {
    this._otherRegionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherRegionListInput() {
    return this._otherRegionList;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // regular_rules - computed: false, optional: true, required: false
  private _regularRules?: string[]; 
  public get regularRules() {
    return this.getListAttribute('regular_rules');
  }
  public set regularRules(value: string[]) {
    this._regularRules = value;
  }
  public resetRegularRules() {
    this._regularRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularRulesInput() {
    return this._regularRules;
  }

  // regular_types - computed: false, optional: true, required: false
  private _regularTypes?: string[]; 
  public get regularTypes() {
    return this.getListAttribute('regular_types');
  }
  public set regularTypes(value: string[]) {
    this._regularTypes = value;
  }
  public resetRegularTypes() {
    this._regularTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularTypesInput() {
    return this._regularTypes;
  }

  // remote_addr - computed: false, optional: true, required: false
  private _remoteAddr?: string[]; 
  public get remoteAddr() {
    return this.getListAttribute('remote_addr');
  }
  public set remoteAddr(value: string[]) {
    this._remoteAddr = value;
  }
  public resetRemoteAddr() {
    this._remoteAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAddrInput() {
    return this._remoteAddr;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // scenes - computed: false, optional: true, required: false
  private _scenes?: string[]; 
  public get scenes() {
    return this.getListAttribute('scenes');
  }
  public set scenes(value: string[]) {
    this._scenes = value;
  }
  public resetScenes() {
    this._scenes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scenesInput() {
    return this._scenes;
  }

  // status - computed: true, optional: true, required: false
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

  // waf_group_ids - computed: false, optional: true, required: false
  private _wafGroupIds?: string; 
  public get wafGroupIds() {
    return this.getStringAttribute('waf_group_ids');
  }
  public set wafGroupIds(value: string) {
    this._wafGroupIds = value;
  }
  public resetWafGroupIds() {
    this._wafGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafGroupIdsInput() {
    return this._wafGroupIds;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new DcdnWafRuleConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: DcdnWafRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new DcdnWafRuleRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: DcdnWafRuleRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DcdnWafRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DcdnWafRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      cc_status: cdktf.stringToTerraform(this._ccStatus),
      cn_region_list: cdktf.stringToTerraform(this._cnRegionList),
      effect: cdktf.stringToTerraform(this._effect),
      id: cdktf.stringToTerraform(this._id),
      other_region_list: cdktf.stringToTerraform(this._otherRegionList),
      policy_id: cdktf.stringToTerraform(this._policyId),
      regular_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regularRules),
      regular_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regularTypes),
      remote_addr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteAddr),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      scenes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scenes),
      status: cdktf.stringToTerraform(this._status),
      waf_group_ids: cdktf.stringToTerraform(this._wafGroupIds),
      conditions: cdktf.listMapper(dcdnWafRuleConditionsToTerraform, true)(this._conditions.internalValue),
      rate_limit: dcdnWafRuleRateLimitToTerraform(this._rateLimit.internalValue),
      timeouts: dcdnWafRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc_status: {
        value: cdktf.stringToHclTerraform(this._ccStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cn_region_list: {
        value: cdktf.stringToHclTerraform(this._cnRegionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effect: {
        value: cdktf.stringToHclTerraform(this._effect),
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
      other_region_list: {
        value: cdktf.stringToHclTerraform(this._otherRegionList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regular_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regularRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      regular_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regularTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_addr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteAddr),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scenes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scenes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waf_group_ids: {
        value: cdktf.stringToHclTerraform(this._wafGroupIds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(dcdnWafRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcdnWafRuleConditionsList",
      },
      rate_limit: {
        value: dcdnWafRuleRateLimitToHclTerraform(this._rateLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdnWafRuleRateLimitList",
      },
      timeouts: {
        value: dcdnWafRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DcdnWafRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
