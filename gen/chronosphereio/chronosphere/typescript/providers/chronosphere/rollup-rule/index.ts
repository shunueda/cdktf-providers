// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RollupRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#aggregation RollupRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#bucket_id RollupRule#bucket_id}
  */
  readonly bucketId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#drop_raw RollupRule#drop_raw}
  */
  readonly dropRaw?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#exclude_by RollupRule#exclude_by}
  */
  readonly excludeBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#filter RollupRule#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#group_by RollupRule#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#id RollupRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#interval RollupRule#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#metric_type RollupRule#metric_type}
  */
  readonly metricType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#metric_type_tag RollupRule#metric_type_tag}
  */
  readonly metricTypeTag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#mode RollupRule#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#name RollupRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#new_metric RollupRule#new_metric}
  */
  readonly newMetric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#permissive RollupRule#permissive}
  */
  readonly permissive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#slug RollupRule#slug}
  */
  readonly slug: string;
  /**
  * graphite_label_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#graphite_label_policy RollupRule#graphite_label_policy}
  */
  readonly graphiteLabelPolicy?: RollupRuleGraphiteLabelPolicy;
  /**
  * storage_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#storage_policies RollupRule#storage_policies}
  */
  readonly storagePolicies?: RollupRuleStoragePolicies;
}
export interface RollupRuleGraphiteLabelPolicyReplace {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#name RollupRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#new_value RollupRule#new_value}
  */
  readonly newValue: string;
}

export function rollupRuleGraphiteLabelPolicyReplaceToTerraform(struct?: RollupRuleGraphiteLabelPolicyReplace | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    new_value: cdktf.stringToTerraform(struct!.newValue),
  }
}


export function rollupRuleGraphiteLabelPolicyReplaceToHclTerraform(struct?: RollupRuleGraphiteLabelPolicyReplace | cdktf.IResolvable): any {
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
    new_value: {
      value: cdktf.stringToHclTerraform(struct!.newValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RollupRuleGraphiteLabelPolicyReplaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RollupRuleGraphiteLabelPolicyReplace | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._newValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RollupRuleGraphiteLabelPolicyReplace | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._newValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._newValue = value.newValue;
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

  // new_value - computed: false, optional: false, required: true
  private _newValue?: string; 
  public get newValue() {
    return this.getStringAttribute('new_value');
  }
  public set newValue(value: string) {
    this._newValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue;
  }
}

export class RollupRuleGraphiteLabelPolicyReplaceList extends cdktf.ComplexList {
  public internalValue? : RollupRuleGraphiteLabelPolicyReplace[] | cdktf.IResolvable

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
  public get(index: number): RollupRuleGraphiteLabelPolicyReplaceOutputReference {
    return new RollupRuleGraphiteLabelPolicyReplaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RollupRuleGraphiteLabelPolicy {
  /**
  * replace block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#replace RollupRule#replace}
  */
  readonly replace?: RollupRuleGraphiteLabelPolicyReplace[] | cdktf.IResolvable;
}

export function rollupRuleGraphiteLabelPolicyToTerraform(struct?: RollupRuleGraphiteLabelPolicyOutputReference | RollupRuleGraphiteLabelPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replace: cdktf.listMapper(rollupRuleGraphiteLabelPolicyReplaceToTerraform, true)(struct!.replace),
  }
}


export function rollupRuleGraphiteLabelPolicyToHclTerraform(struct?: RollupRuleGraphiteLabelPolicyOutputReference | RollupRuleGraphiteLabelPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replace: {
      value: cdktf.listMapperHcl(rollupRuleGraphiteLabelPolicyReplaceToHclTerraform, true)(struct!.replace),
      isBlock: true,
      type: "list",
      storageClassType: "RollupRuleGraphiteLabelPolicyReplaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RollupRuleGraphiteLabelPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RollupRuleGraphiteLabelPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replace?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replace = this._replace?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RollupRuleGraphiteLabelPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replace.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replace.internalValue = value.replace;
    }
  }

  // replace - computed: false, optional: true, required: false
  private _replace = new RollupRuleGraphiteLabelPolicyReplaceList(this, "replace", false);
  public get replace() {
    return this._replace;
  }
  public putReplace(value: RollupRuleGraphiteLabelPolicyReplace[] | cdktf.IResolvable) {
    this._replace.internalValue = value;
  }
  public resetReplace() {
    this._replace.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInput() {
    return this._replace.internalValue;
  }
}
export interface RollupRuleStoragePolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#resolution RollupRule#resolution}
  */
  readonly resolution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#retention RollupRule#retention}
  */
  readonly retention: string;
}

export function rollupRuleStoragePoliciesToTerraform(struct?: RollupRuleStoragePoliciesOutputReference | RollupRuleStoragePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution: cdktf.stringToTerraform(struct!.resolution),
    retention: cdktf.stringToTerraform(struct!.retention),
  }
}


export function rollupRuleStoragePoliciesToHclTerraform(struct?: RollupRuleStoragePoliciesOutputReference | RollupRuleStoragePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RollupRuleStoragePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RollupRuleStoragePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RollupRuleStoragePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resolution = undefined;
      this._retention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resolution = value.resolution;
      this._retention = value.retention;
    }
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // retention - computed: false, optional: false, required: true
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule chronosphere_rollup_rule}
*/
export class RollupRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_rollup_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RollupRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RollupRule to import
  * @param importFromId The id of the existing RollupRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RollupRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_rollup_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.17.0/docs/resources/rollup_rule chronosphere_rollup_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RollupRuleConfig
  */
  public constructor(scope: Construct, id: string, config: RollupRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_rollup_rule',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregation = config.aggregation;
    this._bucketId = config.bucketId;
    this._dropRaw = config.dropRaw;
    this._excludeBy = config.excludeBy;
    this._filter = config.filter;
    this._groupBy = config.groupBy;
    this._id = config.id;
    this._interval = config.interval;
    this._metricType = config.metricType;
    this._metricTypeTag = config.metricTypeTag;
    this._mode = config.mode;
    this._name = config.name;
    this._newMetric = config.newMetric;
    this._permissive = config.permissive;
    this._slug = config.slug;
    this._graphiteLabelPolicy.internalValue = config.graphiteLabelPolicy;
    this._storagePolicies.internalValue = config.storagePolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation - computed: false, optional: true, required: false
  private _aggregation?: string; 
  public get aggregation() {
    return this.getStringAttribute('aggregation');
  }
  public set aggregation(value: string) {
    this._aggregation = value;
  }
  public resetAggregation() {
    this._aggregation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation;
  }

  // bucket_id - computed: false, optional: true, required: false
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  public resetBucketId() {
    this._bucketId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // drop_raw - computed: false, optional: true, required: false
  private _dropRaw?: boolean | cdktf.IResolvable; 
  public get dropRaw() {
    return this.getBooleanAttribute('drop_raw');
  }
  public set dropRaw(value: boolean | cdktf.IResolvable) {
    this._dropRaw = value;
  }
  public resetDropRaw() {
    this._dropRaw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropRawInput() {
    return this._dropRaw;
  }

  // exclude_by - computed: false, optional: true, required: false
  private _excludeBy?: string[]; 
  public get excludeBy() {
    return this.getListAttribute('exclude_by');
  }
  public set excludeBy(value: string[]) {
    this._excludeBy = value;
  }
  public resetExcludeBy() {
    this._excludeBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeByInput() {
    return this._excludeBy;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // group_by - computed: false, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // metric_type_tag - computed: false, optional: true, required: false
  private _metricTypeTag?: boolean | cdktf.IResolvable; 
  public get metricTypeTag() {
    return this.getBooleanAttribute('metric_type_tag');
  }
  public set metricTypeTag(value: boolean | cdktf.IResolvable) {
    this._metricTypeTag = value;
  }
  public resetMetricTypeTag() {
    this._metricTypeTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeTagInput() {
    return this._metricTypeTag;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // new_metric - computed: false, optional: true, required: false
  private _newMetric?: string; 
  public get newMetric() {
    return this.getStringAttribute('new_metric');
  }
  public set newMetric(value: string) {
    this._newMetric = value;
  }
  public resetNewMetric() {
    this._newMetric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMetricInput() {
    return this._newMetric;
  }

  // permissive - computed: false, optional: true, required: false
  private _permissive?: boolean | cdktf.IResolvable; 
  public get permissive() {
    return this.getBooleanAttribute('permissive');
  }
  public set permissive(value: boolean | cdktf.IResolvable) {
    this._permissive = value;
  }
  public resetPermissive() {
    this._permissive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveInput() {
    return this._permissive;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // graphite_label_policy - computed: false, optional: true, required: false
  private _graphiteLabelPolicy = new RollupRuleGraphiteLabelPolicyOutputReference(this, "graphite_label_policy");
  public get graphiteLabelPolicy() {
    return this._graphiteLabelPolicy;
  }
  public putGraphiteLabelPolicy(value: RollupRuleGraphiteLabelPolicy) {
    this._graphiteLabelPolicy.internalValue = value;
  }
  public resetGraphiteLabelPolicy() {
    this._graphiteLabelPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteLabelPolicyInput() {
    return this._graphiteLabelPolicy.internalValue;
  }

  // storage_policies - computed: false, optional: true, required: false
  private _storagePolicies = new RollupRuleStoragePoliciesOutputReference(this, "storage_policies");
  public get storagePolicies() {
    return this._storagePolicies;
  }
  public putStoragePolicies(value: RollupRuleStoragePolicies) {
    this._storagePolicies.internalValue = value;
  }
  public resetStoragePolicies() {
    this._storagePolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoliciesInput() {
    return this._storagePolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregation: cdktf.stringToTerraform(this._aggregation),
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      drop_raw: cdktf.booleanToTerraform(this._dropRaw),
      exclude_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeBy),
      filter: cdktf.stringToTerraform(this._filter),
      group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupBy),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.stringToTerraform(this._interval),
      metric_type: cdktf.stringToTerraform(this._metricType),
      metric_type_tag: cdktf.booleanToTerraform(this._metricTypeTag),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      new_metric: cdktf.stringToTerraform(this._newMetric),
      permissive: cdktf.booleanToTerraform(this._permissive),
      slug: cdktf.stringToTerraform(this._slug),
      graphite_label_policy: rollupRuleGraphiteLabelPolicyToTerraform(this._graphiteLabelPolicy.internalValue),
      storage_policies: rollupRuleStoragePoliciesToTerraform(this._storagePolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation: {
        value: cdktf.stringToHclTerraform(this._aggregation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop_raw: {
        value: cdktf.booleanToHclTerraform(this._dropRaw),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupBy),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_type_tag: {
        value: cdktf.booleanToHclTerraform(this._metricTypeTag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      new_metric: {
        value: cdktf.stringToHclTerraform(this._newMetric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissive: {
        value: cdktf.booleanToHclTerraform(this._permissive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graphite_label_policy: {
        value: rollupRuleGraphiteLabelPolicyToHclTerraform(this._graphiteLabelPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RollupRuleGraphiteLabelPolicyList",
      },
      storage_policies: {
        value: rollupRuleStoragePoliciesToHclTerraform(this._storagePolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RollupRuleStoragePoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
