// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskAnomalyRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#enabled DiskAnomalyRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#host_group_id DiskAnomalyRules#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#id DiskAnomalyRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `LOW_DISK_SPACE`, `LOW_INODES`, `READ_TIME_EXCEEDING`, `WRITE_TIME_EXCEEDING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#metric DiskAnomalyRules#metric}
  */
  readonly metric: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#name DiskAnomalyRules#name}
  */
  readonly name: string;
  /**
  * Only apply to hosts that have the following tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#tag_filters DiskAnomalyRules#tag_filters}
  */
  readonly tagFilters?: string[];
  /**
  * Alert if higher than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#threshold_milliseconds DiskAnomalyRules#threshold_milliseconds}
  */
  readonly thresholdMilliseconds?: number;
  /**
  * Alert if lower than
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#threshold_percent DiskAnomalyRules#threshold_percent}
  */
  readonly thresholdPercent?: number;
  /**
  * disk_name_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#disk_name_filter DiskAnomalyRules#disk_name_filter}
  */
  readonly diskNameFilter: DiskAnomalyRulesDiskNameFilter;
  /**
  * sample_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#sample_limit DiskAnomalyRules#sample_limit}
  */
  readonly sampleLimit: DiskAnomalyRulesSampleLimit;
}
export interface DiskAnomalyRulesDiskNameFilter {
  /**
  * Possible Values: `CONTAINS`, `DOES_NOT_CONTAIN`, `DOES_NOT_EQUAL`, `DOES_NOT_START_WITH`, `EQUALS`, `STARTS_WITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#operator DiskAnomalyRules#operator}
  */
  readonly operator: string;
  /**
  * Matching text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#value DiskAnomalyRules#value}
  */
  readonly value?: string;
}

export function diskAnomalyRulesDiskNameFilterToTerraform(struct?: DiskAnomalyRulesDiskNameFilterOutputReference | DiskAnomalyRulesDiskNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function diskAnomalyRulesDiskNameFilterToHclTerraform(struct?: DiskAnomalyRulesDiskNameFilterOutputReference | DiskAnomalyRulesDiskNameFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomalyRulesDiskNameFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomalyRulesDiskNameFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomalyRulesDiskNameFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DiskAnomalyRulesSampleLimit {
  /**
  * .. within the last
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#samples DiskAnomalyRules#samples}
  */
  readonly samples: number;
  /**
  * Minimum number of violating samples
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#violating_samples DiskAnomalyRules#violating_samples}
  */
  readonly violatingSamples: number;
}

export function diskAnomalyRulesSampleLimitToTerraform(struct?: DiskAnomalyRulesSampleLimitOutputReference | DiskAnomalyRulesSampleLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    samples: cdktf.numberToTerraform(struct!.samples),
    violating_samples: cdktf.numberToTerraform(struct!.violatingSamples),
  }
}


export function diskAnomalyRulesSampleLimitToHclTerraform(struct?: DiskAnomalyRulesSampleLimitOutputReference | DiskAnomalyRulesSampleLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    samples: {
      value: cdktf.numberToHclTerraform(struct!.samples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    violating_samples: {
      value: cdktf.numberToHclTerraform(struct!.violatingSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiskAnomalyRulesSampleLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiskAnomalyRulesSampleLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samples !== undefined) {
      hasAnyValues = true;
      internalValueResult.samples = this._samples;
    }
    if (this._violatingSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.violatingSamples = this._violatingSamples;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiskAnomalyRulesSampleLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samples = undefined;
      this._violatingSamples = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samples = value.samples;
      this._violatingSamples = value.violatingSamples;
    }
  }

  // samples - computed: false, optional: false, required: true
  private _samples?: number; 
  public get samples() {
    return this.getNumberAttribute('samples');
  }
  public set samples(value: number) {
    this._samples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplesInput() {
    return this._samples;
  }

  // violating_samples - computed: false, optional: false, required: true
  private _violatingSamples?: number; 
  public get violatingSamples() {
    return this.getNumberAttribute('violating_samples');
  }
  public set violatingSamples(value: number) {
    this._violatingSamples = value;
  }
  // Temporarily expose input value. Use with caution.
  public get violatingSamplesInput() {
    return this._violatingSamples;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules dynatrace_disk_anomaly_rules}
*/
export class DiskAnomalyRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_disk_anomaly_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskAnomalyRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskAnomalyRules to import
  * @param importFromId The id of the existing DiskAnomalyRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskAnomalyRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_disk_anomaly_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/disk_anomaly_rules dynatrace_disk_anomaly_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskAnomalyRulesConfig
  */
  public constructor(scope: Construct, id: string, config: DiskAnomalyRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_disk_anomaly_rules',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
    this._metric = config.metric;
    this._name = config.name;
    this._tagFilters = config.tagFilters;
    this._thresholdMilliseconds = config.thresholdMilliseconds;
    this._thresholdPercent = config.thresholdPercent;
    this._diskNameFilter.internalValue = config.diskNameFilter;
    this._sampleLimit.internalValue = config.sampleLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
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

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
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

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: string[]; 
  public get tagFilters() {
    return cdktf.Fn.tolist(this.getListAttribute('tag_filters'));
  }
  public set tagFilters(value: string[]) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // threshold_milliseconds - computed: false, optional: true, required: false
  private _thresholdMilliseconds?: number; 
  public get thresholdMilliseconds() {
    return this.getNumberAttribute('threshold_milliseconds');
  }
  public set thresholdMilliseconds(value: number) {
    this._thresholdMilliseconds = value;
  }
  public resetThresholdMilliseconds() {
    this._thresholdMilliseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMillisecondsInput() {
    return this._thresholdMilliseconds;
  }

  // threshold_percent - computed: false, optional: true, required: false
  private _thresholdPercent?: number; 
  public get thresholdPercent() {
    return this.getNumberAttribute('threshold_percent');
  }
  public set thresholdPercent(value: number) {
    this._thresholdPercent = value;
  }
  public resetThresholdPercent() {
    this._thresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentInput() {
    return this._thresholdPercent;
  }

  // disk_name_filter - computed: false, optional: false, required: true
  private _diskNameFilter = new DiskAnomalyRulesDiskNameFilterOutputReference(this, "disk_name_filter");
  public get diskNameFilter() {
    return this._diskNameFilter;
  }
  public putDiskNameFilter(value: DiskAnomalyRulesDiskNameFilter) {
    this._diskNameFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameFilterInput() {
    return this._diskNameFilter.internalValue;
  }

  // sample_limit - computed: false, optional: false, required: true
  private _sampleLimit = new DiskAnomalyRulesSampleLimitOutputReference(this, "sample_limit");
  public get sampleLimit() {
    return this._sampleLimit;
  }
  public putSampleLimit(value: DiskAnomalyRulesSampleLimit) {
    this._sampleLimit.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleLimitInput() {
    return this._sampleLimit.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      name: cdktf.stringToTerraform(this._name),
      tag_filters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagFilters),
      threshold_milliseconds: cdktf.numberToTerraform(this._thresholdMilliseconds),
      threshold_percent: cdktf.numberToTerraform(this._thresholdPercent),
      disk_name_filter: diskAnomalyRulesDiskNameFilterToTerraform(this._diskNameFilter.internalValue),
      sample_limit: diskAnomalyRulesSampleLimitToTerraform(this._sampleLimit.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
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
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
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
      tag_filters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagFilters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threshold_milliseconds: {
        value: cdktf.numberToHclTerraform(this._thresholdMilliseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_percent: {
        value: cdktf.numberToHclTerraform(this._thresholdPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_name_filter: {
        value: diskAnomalyRulesDiskNameFilterToHclTerraform(this._diskNameFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskAnomalyRulesDiskNameFilterList",
      },
      sample_limit: {
        value: diskAnomalyRulesSampleLimitToHclTerraform(this._sampleLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiskAnomalyRulesSampleLimitList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
