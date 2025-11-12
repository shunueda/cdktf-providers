// https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualTagConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The earliest month VirtualTagConfig should be backfilled to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#backfill_until VirtualTagConfig#backfill_until}
  */
  readonly backfillUntil: string;
  /**
  * The key of the VirtualTagConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#key VirtualTagConfig#key}
  */
  readonly key: string;
  /**
  * Whether the VirtualTagConfig can override a provider-supplied tag on a matching Cost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#overridable VirtualTagConfig#overridable}
  */
  readonly overridable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#values VirtualTagConfig#values}
  */
  readonly values?: VirtualTagConfigValues[] | cdktf.IResolvable;
}
export interface VirtualTagConfigValuesCostMetricAggregation {
  /**
  * The tag to aggregate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#tag VirtualTagConfig#tag}
  */
  readonly tag?: string;
}

export function virtualTagConfigValuesCostMetricAggregationToTerraform(struct?: VirtualTagConfigValuesCostMetricAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function virtualTagConfigValuesCostMetricAggregationToHclTerraform(struct?: VirtualTagConfigValuesCostMetricAggregation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VirtualTagConfigValuesCostMetricAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualTagConfigValuesCostMetricAggregation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualTagConfigValuesCostMetricAggregation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tag = value.tag;
    }
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
export interface VirtualTagConfigValuesCostMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#aggregation VirtualTagConfig#aggregation}
  */
  readonly aggregation?: VirtualTagConfigValuesCostMetricAggregation;
  /**
  * The filter VQL for the cost metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#filter VirtualTagConfig#filter}
  */
  readonly filter?: string;
}

export function virtualTagConfigValuesCostMetricToTerraform(struct?: VirtualTagConfigValuesCostMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: virtualTagConfigValuesCostMetricAggregationToTerraform(struct!.aggregation),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}


export function virtualTagConfigValuesCostMetricToHclTerraform(struct?: VirtualTagConfigValuesCostMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation: {
      value: virtualTagConfigValuesCostMetricAggregationToHclTerraform(struct!.aggregation),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualTagConfigValuesCostMetricAggregation",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualTagConfigValuesCostMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualTagConfigValuesCostMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualTagConfigValuesCostMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregation.internalValue = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregation.internalValue = value.aggregation;
      this._filter = value.filter;
    }
  }

  // aggregation - computed: true, optional: true, required: false
  private _aggregation = new VirtualTagConfigValuesCostMetricAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: VirtualTagConfigValuesCostMetricAggregation) {
    this._aggregation.internalValue = value;
  }
  public resetAggregation() {
    this._aggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }

  // filter - computed: true, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }
}
export interface VirtualTagConfigValues {
  /**
  * The token of the associated BusinessMetric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#business_metric_token VirtualTagConfig#business_metric_token}
  */
  readonly businessMetricToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#cost_metric VirtualTagConfig#cost_metric}
  */
  readonly costMetric?: VirtualTagConfigValuesCostMetric;
  /**
  * The filter VQL for the Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#filter VirtualTagConfig#filter}
  */
  readonly filter: string;
  /**
  * The name of the Value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#name VirtualTagConfig#name}
  */
  readonly name?: string;
}

export function virtualTagConfigValuesToTerraform(struct?: VirtualTagConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_metric_token: cdktf.stringToTerraform(struct!.businessMetricToken),
    cost_metric: virtualTagConfigValuesCostMetricToTerraform(struct!.costMetric),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualTagConfigValuesToHclTerraform(struct?: VirtualTagConfigValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_metric_token: {
      value: cdktf.stringToHclTerraform(struct!.businessMetricToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost_metric: {
      value: virtualTagConfigValuesCostMetricToHclTerraform(struct!.costMetric),
      isBlock: true,
      type: "struct",
      storageClassType: "VirtualTagConfigValuesCostMetric",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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

export class VirtualTagConfigValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualTagConfigValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessMetricToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessMetricToken = this._businessMetricToken;
    }
    if (this._costMetric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.costMetric = this._costMetric?.internalValue;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualTagConfigValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessMetricToken = undefined;
      this._costMetric.internalValue = undefined;
      this._filter = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessMetricToken = value.businessMetricToken;
      this._costMetric.internalValue = value.costMetric;
      this._filter = value.filter;
      this._name = value.name;
    }
  }

  // business_metric_token - computed: true, optional: true, required: false
  private _businessMetricToken?: string; 
  public get businessMetricToken() {
    return this.getStringAttribute('business_metric_token');
  }
  public set businessMetricToken(value: string) {
    this._businessMetricToken = value;
  }
  public resetBusinessMetricToken() {
    this._businessMetricToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessMetricTokenInput() {
    return this._businessMetricToken;
  }

  // cost_metric - computed: true, optional: true, required: false
  private _costMetric = new VirtualTagConfigValuesCostMetricOutputReference(this, "cost_metric");
  public get costMetric() {
    return this._costMetric;
  }
  public putCostMetric(value: VirtualTagConfigValuesCostMetric) {
    this._costMetric.internalValue = value;
  }
  public resetCostMetric() {
    this._costMetric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costMetricInput() {
    return this._costMetric.internalValue;
  }

  // filter - computed: true, optional: false, required: true
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

export class VirtualTagConfigValuesList extends cdktf.ComplexList {
  public internalValue? : VirtualTagConfigValues[] | cdktf.IResolvable

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
  public get(index: number): VirtualTagConfigValuesOutputReference {
    return new VirtualTagConfigValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config vantage_virtual_tag_config}
*/
export class VirtualTagConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vantage_virtual_tag_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualTagConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualTagConfig to import
  * @param importFromId The id of the existing VirtualTagConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualTagConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vantage_virtual_tag_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vantage-sh/vantage/0.1.68/docs/resources/virtual_tag_config vantage_virtual_tag_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualTagConfigConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualTagConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vantage_virtual_tag_config',
      terraformGeneratorMetadata: {
        providerName: 'vantage',
        providerVersion: '0.1.68',
        providerVersionConstraint: '0.1.68'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backfillUntil = config.backfillUntil;
    this._key = config.key;
    this._overridable = config.overridable;
    this._values.internalValue = config.values;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backfill_until - computed: false, optional: false, required: true
  private _backfillUntil?: string; 
  public get backfillUntil() {
    return this.getStringAttribute('backfill_until');
  }
  public set backfillUntil(value: string) {
    this._backfillUntil = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillUntilInput() {
    return this._backfillUntil;
  }

  // created_by_token - computed: true, optional: false, required: false
  public get createdByToken() {
    return this.getStringAttribute('created_by_token');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // overridable - computed: false, optional: false, required: true
  private _overridable?: boolean | cdktf.IResolvable; 
  public get overridable() {
    return this.getBooleanAttribute('overridable');
  }
  public set overridable(value: boolean | cdktf.IResolvable) {
    this._overridable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overridableInput() {
    return this._overridable;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // values - computed: true, optional: true, required: false
  private _values = new VirtualTagConfigValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: VirtualTagConfigValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backfill_until: cdktf.stringToTerraform(this._backfillUntil),
      key: cdktf.stringToTerraform(this._key),
      overridable: cdktf.booleanToTerraform(this._overridable),
      values: cdktf.listMapper(virtualTagConfigValuesToTerraform, false)(this._values.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backfill_until: {
        value: cdktf.stringToHclTerraform(this._backfillUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overridable: {
        value: cdktf.booleanToHclTerraform(this._overridable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      values: {
        value: cdktf.listMapperHcl(virtualTagConfigValuesToHclTerraform, false)(this._values.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualTagConfigValuesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
