// https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConsumptionConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#id ConsumptionConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#partition ConsumptionConfig#partition}
  */
  readonly partition?: ConsumptionConfigPartition[] | cdktf.IResolvable;
}
export interface ConsumptionConfigPartitionFilterConditionLogFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#query ConsumptionConfig#query}
  */
  readonly query: string;
}

export function consumptionConfigPartitionFilterConditionLogFilterToTerraform(struct?: ConsumptionConfigPartitionFilterConditionLogFilterOutputReference | ConsumptionConfigPartitionFilterConditionLogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
  }
}


export function consumptionConfigPartitionFilterConditionLogFilterToHclTerraform(struct?: ConsumptionConfigPartitionFilterConditionLogFilterOutputReference | ConsumptionConfigPartitionFilterConditionLogFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionConfigPartitionFilterConditionLogFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ConsumptionConfigPartitionFilterConditionLogFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionConfigPartitionFilterConditionLogFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }
}
export interface ConsumptionConfigPartitionFilterCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#dataset_id ConsumptionConfig#dataset_id}
  */
  readonly datasetId?: string;
  /**
  * log_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#log_filter ConsumptionConfig#log_filter}
  */
  readonly logFilter?: ConsumptionConfigPartitionFilterConditionLogFilter;
}

export function consumptionConfigPartitionFilterConditionToTerraform(struct?: ConsumptionConfigPartitionFilterCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    log_filter: consumptionConfigPartitionFilterConditionLogFilterToTerraform(struct!.logFilter),
  }
}


export function consumptionConfigPartitionFilterConditionToHclTerraform(struct?: ConsumptionConfigPartitionFilterCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_filter: {
      value: consumptionConfigPartitionFilterConditionLogFilterToHclTerraform(struct!.logFilter),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionConfigPartitionFilterConditionLogFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionConfigPartitionFilterConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionConfigPartitionFilterCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._logFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFilter = this._logFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionConfigPartitionFilterCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetId = undefined;
      this._logFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetId = value.datasetId;
      this._logFilter.internalValue = value.logFilter;
    }
  }

  // dataset_id - computed: false, optional: true, required: false
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  public resetDatasetId() {
    this._datasetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // log_filter - computed: false, optional: true, required: false
  private _logFilter = new ConsumptionConfigPartitionFilterConditionLogFilterOutputReference(this, "log_filter");
  public get logFilter() {
    return this._logFilter;
  }
  public putLogFilter(value: ConsumptionConfigPartitionFilterConditionLogFilter) {
    this._logFilter.internalValue = value;
  }
  public resetLogFilter() {
    this._logFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFilterInput() {
    return this._logFilter.internalValue;
  }
}

export class ConsumptionConfigPartitionFilterConditionList extends cdktf.ComplexList {
  public internalValue? : ConsumptionConfigPartitionFilterCondition[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionConfigPartitionFilterConditionOutputReference {
    return new ConsumptionConfigPartitionFilterConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionConfigPartitionFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#operator ConsumptionConfig#operator}
  */
  readonly operator?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#condition ConsumptionConfig#condition}
  */
  readonly condition?: ConsumptionConfigPartitionFilterCondition[] | cdktf.IResolvable;
}

export function consumptionConfigPartitionFilterToTerraform(struct?: ConsumptionConfigPartitionFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    condition: cdktf.listMapper(consumptionConfigPartitionFilterConditionToTerraform, true)(struct!.condition),
  }
}


export function consumptionConfigPartitionFilterToHclTerraform(struct?: ConsumptionConfigPartitionFilter | cdktf.IResolvable): any {
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
    condition: {
      value: cdktf.listMapperHcl(consumptionConfigPartitionFilterConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionConfigPartitionFilterConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionConfigPartitionFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionConfigPartitionFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionConfigPartitionFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._condition.internalValue = value.condition;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ConsumptionConfigPartitionFilterConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ConsumptionConfigPartitionFilterCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class ConsumptionConfigPartitionFilterList extends cdktf.ComplexList {
  public internalValue? : ConsumptionConfigPartitionFilter[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionConfigPartitionFilterOutputReference {
    return new ConsumptionConfigPartitionFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConsumptionConfigPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#name ConsumptionConfig#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#slug ConsumptionConfig#slug}
  */
  readonly slug?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#filter ConsumptionConfig#filter}
  */
  readonly filter?: ConsumptionConfigPartitionFilter[] | cdktf.IResolvable;
  /**
  * partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#partition ConsumptionConfig#partition}
  */
  readonly partition?: ConsumptionConfigPartition[] | cdktf.IResolvable;
}

export function consumptionConfigPartitionToTerraform(struct?: ConsumptionConfigPartition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    slug: cdktf.stringToTerraform(struct!.slug),
    filter: cdktf.listMapper(consumptionConfigPartitionFilterToTerraform, true)(struct!.filter),
    partition: cdktf.listMapper(consumptionConfigPartitionToTerraform, true)(struct!.partition),
  }
}


export function consumptionConfigPartitionToHclTerraform(struct?: ConsumptionConfigPartition | cdktf.IResolvable): any {
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
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.listMapperHcl(consumptionConfigPartitionFilterToHclTerraform, true)(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionConfigPartitionFilterList",
    },
    partition: {
      value: cdktf.listMapperHcl(consumptionConfigPartitionToHclTerraform, true)(struct!.partition),
      isBlock: true,
      type: "list",
      storageClassType: "ConsumptionConfigPartitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConsumptionConfigPartitionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ConsumptionConfigPartition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    if (this._partition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConsumptionConfigPartition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._slug = undefined;
      this._filter.internalValue = undefined;
      this._partition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._slug = value.slug;
      this._filter.internalValue = value.filter;
      this._partition.internalValue = value.partition;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new ConsumptionConfigPartitionFilterList(this, "filter", false);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ConsumptionConfigPartitionFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // partition - computed: false, optional: true, required: false
  private _partition = new ConsumptionConfigPartitionList(this, "partition", false);
  public get partition() {
    return this._partition;
  }
  public putPartition(value: ConsumptionConfigPartition[] | cdktf.IResolvable) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }
}

export class ConsumptionConfigPartitionList extends cdktf.ComplexList {
  public internalValue? : ConsumptionConfigPartition[] | cdktf.IResolvable

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
  public get(index: number): ConsumptionConfigPartitionOutputReference {
    return new ConsumptionConfigPartitionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config chronosphere_consumption_config}
*/
export class ConsumptionConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chronosphere_consumption_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConsumptionConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConsumptionConfig to import
  * @param importFromId The id of the existing ConsumptionConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConsumptionConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chronosphere_consumption_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chronosphereio/chronosphere/1.18.0/docs/resources/consumption_config chronosphere_consumption_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConsumptionConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ConsumptionConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'chronosphere_consumption_config',
      terraformGeneratorMetadata: {
        providerName: 'chronosphere',
        providerVersion: '1.18.0',
        providerVersionConstraint: '1.18.0'
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
    this._partition.internalValue = config.partition;
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

  // partition - computed: false, optional: true, required: false
  private _partition = new ConsumptionConfigPartitionList(this, "partition", false);
  public get partition() {
    return this._partition;
  }
  public putPartition(value: ConsumptionConfigPartition[] | cdktf.IResolvable) {
    this._partition.internalValue = value;
  }
  public resetPartition() {
    this._partition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      partition: cdktf.listMapper(consumptionConfigPartitionToTerraform, true)(this._partition.internalValue),
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
      partition: {
        value: cdktf.listMapperHcl(consumptionConfigPartitionToHclTerraform, true)(this._partition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConsumptionConfigPartitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
