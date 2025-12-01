// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudmonitorserviceMetricalarmruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#contact_groups CloudmonitorserviceMetricalarmrule#contact_groups}
  */
  readonly contactGroups: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#dimensions CloudmonitorserviceMetricalarmrule#dimensions}
  */
  readonly dimensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#effective_interval CloudmonitorserviceMetricalarmrule#effective_interval}
  */
  readonly effectiveInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#enabled CloudmonitorserviceMetricalarmrule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#id CloudmonitorserviceMetricalarmrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#metric CloudmonitorserviceMetricalarmrule#metric}
  */
  readonly metric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#metric_name CloudmonitorserviceMetricalarmrule#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#name CloudmonitorserviceMetricalarmrule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#namespace CloudmonitorserviceMetricalarmrule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#period CloudmonitorserviceMetricalarmrule#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#project CloudmonitorserviceMetricalarmrule#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#resources CloudmonitorserviceMetricalarmrule#resources}
  */
  readonly resources?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#rule_name CloudmonitorserviceMetricalarmrule#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#silence_time CloudmonitorserviceMetricalarmrule#silence_time}
  */
  readonly silenceTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#webhook CloudmonitorserviceMetricalarmrule#webhook}
  */
  readonly webhook?: string;
  /**
  * escalations_critical block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#escalations_critical CloudmonitorserviceMetricalarmrule#escalations_critical}
  */
  readonly escalationsCritical?: CloudmonitorserviceMetricalarmruleEscalationsCritical;
  /**
  * escalations_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#escalations_info CloudmonitorserviceMetricalarmrule#escalations_info}
  */
  readonly escalationsInfo?: CloudmonitorserviceMetricalarmruleEscalationsInfo;
  /**
  * escalations_warn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#escalations_warn CloudmonitorserviceMetricalarmrule#escalations_warn}
  */
  readonly escalationsWarn?: CloudmonitorserviceMetricalarmruleEscalationsWarn;
}
export interface CloudmonitorserviceMetricalarmruleEscalationsCritical {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#comparison_operator CloudmonitorserviceMetricalarmrule#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#statistics CloudmonitorserviceMetricalarmrule#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#threshold CloudmonitorserviceMetricalarmrule#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#times CloudmonitorserviceMetricalarmrule#times}
  */
  readonly times?: number;
}

export function cloudmonitorserviceMetricalarmruleEscalationsCriticalToTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsCriticalOutputReference | CloudmonitorserviceMetricalarmruleEscalationsCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.numberToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricalarmruleEscalationsCriticalToHclTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsCriticalOutputReference | CloudmonitorserviceMetricalarmruleEscalationsCritical): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.numberToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricalarmruleEscalationsCriticalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricalarmruleEscalationsCritical | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricalarmruleEscalationsCritical | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface CloudmonitorserviceMetricalarmruleEscalationsInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#comparison_operator CloudmonitorserviceMetricalarmrule#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#statistics CloudmonitorserviceMetricalarmrule#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#threshold CloudmonitorserviceMetricalarmrule#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#times CloudmonitorserviceMetricalarmrule#times}
  */
  readonly times?: number;
}

export function cloudmonitorserviceMetricalarmruleEscalationsInfoToTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsInfoOutputReference | CloudmonitorserviceMetricalarmruleEscalationsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.numberToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricalarmruleEscalationsInfoToHclTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsInfoOutputReference | CloudmonitorserviceMetricalarmruleEscalationsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.numberToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricalarmruleEscalationsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricalarmruleEscalationsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricalarmruleEscalationsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}
export interface CloudmonitorserviceMetricalarmruleEscalationsWarn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#comparison_operator CloudmonitorserviceMetricalarmrule#comparison_operator}
  */
  readonly comparisonOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#statistics CloudmonitorserviceMetricalarmrule#statistics}
  */
  readonly statistics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#threshold CloudmonitorserviceMetricalarmrule#threshold}
  */
  readonly threshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#times CloudmonitorserviceMetricalarmrule#times}
  */
  readonly times?: number;
}

export function cloudmonitorserviceMetricalarmruleEscalationsWarnToTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsWarnOutputReference | CloudmonitorserviceMetricalarmruleEscalationsWarn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    statistics: cdktf.stringToTerraform(struct!.statistics),
    threshold: cdktf.stringToTerraform(struct!.threshold),
    times: cdktf.numberToTerraform(struct!.times),
  }
}


export function cloudmonitorserviceMetricalarmruleEscalationsWarnToHclTerraform(struct?: CloudmonitorserviceMetricalarmruleEscalationsWarnOutputReference | CloudmonitorserviceMetricalarmruleEscalationsWarn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistics: {
      value: cdktf.stringToHclTerraform(struct!.statistics),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.stringToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    times: {
      value: cdktf.numberToHclTerraform(struct!.times),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudmonitorserviceMetricalarmruleEscalationsWarnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudmonitorserviceMetricalarmruleEscalationsWarn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._statistics !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistics = this._statistics;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._times !== undefined) {
      hasAnyValues = true;
      internalValueResult.times = this._times;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudmonitorserviceMetricalarmruleEscalationsWarn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._comparisonOperator = undefined;
      this._statistics = undefined;
      this._threshold = undefined;
      this._times = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._comparisonOperator = value.comparisonOperator;
      this._statistics = value.statistics;
      this._threshold = value.threshold;
      this._times = value.times;
    }
  }

  // comparison_operator - computed: false, optional: true, required: false
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  public resetComparisonOperator() {
    this._comparisonOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics?: string; 
  public get statistics() {
    return this.getStringAttribute('statistics');
  }
  public set statistics(value: string) {
    this._statistics = value;
  }
  public resetStatistics() {
    this._statistics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // times - computed: false, optional: true, required: false
  private _times?: number; 
  public get times() {
    return this.getNumberAttribute('times');
  }
  public set times(value: number) {
    this._times = value;
  }
  public resetTimes() {
    this._times = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timesInput() {
    return this._times;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule alibabacloudstack_cloudmonitorservice_metricalarmrule}
*/
export class CloudmonitorserviceMetricalarmrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_cloudmonitorservice_metricalarmrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudmonitorserviceMetricalarmrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudmonitorserviceMetricalarmrule to import
  * @param importFromId The id of the existing CloudmonitorserviceMetricalarmrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudmonitorserviceMetricalarmrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_cloudmonitorservice_metricalarmrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/cloudmonitorservice_metricalarmrule alibabacloudstack_cloudmonitorservice_metricalarmrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudmonitorserviceMetricalarmruleConfig
  */
  public constructor(scope: Construct, id: string, config: CloudmonitorserviceMetricalarmruleConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_cloudmonitorservice_metricalarmrule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroups = config.contactGroups;
    this._dimensions = config.dimensions;
    this._effectiveInterval = config.effectiveInterval;
    this._enabled = config.enabled;
    this._id = config.id;
    this._metric = config.metric;
    this._metricName = config.metricName;
    this._name = config.name;
    this._namespace = config.namespace;
    this._period = config.period;
    this._project = config.project;
    this._resources = config.resources;
    this._ruleName = config.ruleName;
    this._silenceTime = config.silenceTime;
    this._webhook = config.webhook;
    this._escalationsCritical.internalValue = config.escalationsCritical;
    this._escalationsInfo.internalValue = config.escalationsInfo;
    this._escalationsWarn.internalValue = config.escalationsWarn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_groups - computed: false, optional: false, required: true
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // dimensions - computed: true, optional: true, required: false
  private _dimensions?: { [key: string]: string }; 
  public get dimensions() {
    return this.getStringMapAttribute('dimensions');
  }
  public set dimensions(value: { [key: string]: string }) {
    this._dimensions = value;
  }
  public resetDimensions() {
    this._dimensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // effective_interval - computed: false, optional: true, required: false
  private _effectiveInterval?: string; 
  public get effectiveInterval() {
    return this.getStringAttribute('effective_interval');
  }
  public set effectiveInterval(value: string) {
    this._effectiveInterval = value;
  }
  public resetEffectiveInterval() {
    this._effectiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveIntervalInput() {
    return this._effectiveInterval;
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

  // metric - computed: true, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // metric_name - computed: true, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
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

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // resources - computed: true, optional: true, required: false
  private _resources?: { [key: string]: string }; 
  public get resources() {
    return this.getStringMapAttribute('resources');
  }
  public set resources(value: { [key: string]: string }) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: true, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // silence_time - computed: false, optional: true, required: false
  private _silenceTime?: number; 
  public get silenceTime() {
    return this.getNumberAttribute('silence_time');
  }
  public set silenceTime(value: number) {
    this._silenceTime = value;
  }
  public resetSilenceTime() {
    this._silenceTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get silenceTimeInput() {
    return this._silenceTime;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook?: string; 
  public get webhook() {
    return this.getStringAttribute('webhook');
  }
  public set webhook(value: string) {
    this._webhook = value;
  }
  public resetWebhook() {
    this._webhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook;
  }

  // escalations_critical - computed: false, optional: true, required: false
  private _escalationsCritical = new CloudmonitorserviceMetricalarmruleEscalationsCriticalOutputReference(this, "escalations_critical");
  public get escalationsCritical() {
    return this._escalationsCritical;
  }
  public putEscalationsCritical(value: CloudmonitorserviceMetricalarmruleEscalationsCritical) {
    this._escalationsCritical.internalValue = value;
  }
  public resetEscalationsCritical() {
    this._escalationsCritical.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsCriticalInput() {
    return this._escalationsCritical.internalValue;
  }

  // escalations_info - computed: false, optional: true, required: false
  private _escalationsInfo = new CloudmonitorserviceMetricalarmruleEscalationsInfoOutputReference(this, "escalations_info");
  public get escalationsInfo() {
    return this._escalationsInfo;
  }
  public putEscalationsInfo(value: CloudmonitorserviceMetricalarmruleEscalationsInfo) {
    this._escalationsInfo.internalValue = value;
  }
  public resetEscalationsInfo() {
    this._escalationsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsInfoInput() {
    return this._escalationsInfo.internalValue;
  }

  // escalations_warn - computed: false, optional: true, required: false
  private _escalationsWarn = new CloudmonitorserviceMetricalarmruleEscalationsWarnOutputReference(this, "escalations_warn");
  public get escalationsWarn() {
    return this._escalationsWarn;
  }
  public putEscalationsWarn(value: CloudmonitorserviceMetricalarmruleEscalationsWarn) {
    this._escalationsWarn.internalValue = value;
  }
  public resetEscalationsWarn() {
    this._escalationsWarn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationsWarnInput() {
    return this._escalationsWarn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroups),
      dimensions: cdktf.hashMapper(cdktf.stringToTerraform)(this._dimensions),
      effective_interval: cdktf.stringToTerraform(this._effectiveInterval),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      metric_name: cdktf.stringToTerraform(this._metricName),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      period: cdktf.numberToTerraform(this._period),
      project: cdktf.stringToTerraform(this._project),
      resources: cdktf.hashMapper(cdktf.stringToTerraform)(this._resources),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      silence_time: cdktf.numberToTerraform(this._silenceTime),
      webhook: cdktf.stringToTerraform(this._webhook),
      escalations_critical: cloudmonitorserviceMetricalarmruleEscalationsCriticalToTerraform(this._escalationsCritical.internalValue),
      escalations_info: cloudmonitorserviceMetricalarmruleEscalationsInfoToTerraform(this._escalationsInfo.internalValue),
      escalations_warn: cloudmonitorserviceMetricalarmruleEscalationsWarnToTerraform(this._escalationsWarn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dimensions: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dimensions),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      effective_interval: {
        value: cdktf.stringToHclTerraform(this._effectiveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      period: {
        value: cdktf.numberToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resources: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resources),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      silence_time: {
        value: cdktf.numberToHclTerraform(this._silenceTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      webhook: {
        value: cdktf.stringToHclTerraform(this._webhook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      escalations_critical: {
        value: cloudmonitorserviceMetricalarmruleEscalationsCriticalToHclTerraform(this._escalationsCritical.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudmonitorserviceMetricalarmruleEscalationsCriticalList",
      },
      escalations_info: {
        value: cloudmonitorserviceMetricalarmruleEscalationsInfoToHclTerraform(this._escalationsInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudmonitorserviceMetricalarmruleEscalationsInfoList",
      },
      escalations_warn: {
        value: cloudmonitorserviceMetricalarmruleEscalationsWarnToHclTerraform(this._escalationsWarn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudmonitorserviceMetricalarmruleEscalationsWarnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
