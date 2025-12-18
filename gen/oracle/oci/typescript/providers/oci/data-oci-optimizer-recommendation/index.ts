// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_recommendation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOptimizerRecommendationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_recommendation#recommendation_id DataOciOptimizerRecommendation#recommendation_id}
  */
  readonly recommendationId: string;
}
export interface DataOciOptimizerRecommendationResourceCounts {
}

export function dataOciOptimizerRecommendationResourceCountsToTerraform(struct?: DataOciOptimizerRecommendationResourceCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerRecommendationResourceCountsToHclTerraform(struct?: DataOciOptimizerRecommendationResourceCounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerRecommendationResourceCountsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOptimizerRecommendationResourceCounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerRecommendationResourceCounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOciOptimizerRecommendationResourceCountsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerRecommendationResourceCountsOutputReference {
    return new DataOciOptimizerRecommendationResourceCountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOptimizerRecommendationSupportedLevelsItems {
}

export function dataOciOptimizerRecommendationSupportedLevelsItemsToTerraform(struct?: DataOciOptimizerRecommendationSupportedLevelsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerRecommendationSupportedLevelsItemsToHclTerraform(struct?: DataOciOptimizerRecommendationSupportedLevelsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerRecommendationSupportedLevelsItemsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOptimizerRecommendationSupportedLevelsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerRecommendationSupportedLevelsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciOptimizerRecommendationSupportedLevelsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerRecommendationSupportedLevelsItemsOutputReference {
    return new DataOciOptimizerRecommendationSupportedLevelsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciOptimizerRecommendationSupportedLevels {
}

export function dataOciOptimizerRecommendationSupportedLevelsToTerraform(struct?: DataOciOptimizerRecommendationSupportedLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciOptimizerRecommendationSupportedLevelsToHclTerraform(struct?: DataOciOptimizerRecommendationSupportedLevels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciOptimizerRecommendationSupportedLevelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciOptimizerRecommendationSupportedLevels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciOptimizerRecommendationSupportedLevels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciOptimizerRecommendationSupportedLevelsItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciOptimizerRecommendationSupportedLevelsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciOptimizerRecommendationSupportedLevelsOutputReference {
    return new DataOciOptimizerRecommendationSupportedLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_recommendation oci_optimizer_recommendation}
*/
export class DataOciOptimizerRecommendation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_optimizer_recommendation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOptimizerRecommendation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOptimizerRecommendation to import
  * @param importFromId The id of the existing DataOciOptimizerRecommendation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_recommendation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOptimizerRecommendation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_optimizer_recommendation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/optimizer_recommendation oci_optimizer_recommendation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOptimizerRecommendationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOptimizerRecommendationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_optimizer_recommendation',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._recommendationId = config.recommendationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category_id - computed: true, optional: false, required: false
  public get categoryId() {
    return this.getStringAttribute('category_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // estimated_cost_saving - computed: true, optional: false, required: false
  public get estimatedCostSaving() {
    return this.getNumberAttribute('estimated_cost_saving');
  }

  // extended_metadata - computed: true, optional: false, required: false
  private _extendedMetadata = new cdktf.StringMap(this, "extended_metadata");
  public get extendedMetadata() {
    return this._extendedMetadata;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // importance - computed: true, optional: false, required: false
  public get importance() {
    return this.getStringAttribute('importance');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // recommendation_id - computed: false, optional: false, required: true
  private _recommendationId?: string; 
  public get recommendationId() {
    return this.getStringAttribute('recommendation_id');
  }
  public set recommendationId(value: string) {
    this._recommendationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationIdInput() {
    return this._recommendationId;
  }

  // resource_counts - computed: true, optional: false, required: false
  private _resourceCounts = new DataOciOptimizerRecommendationResourceCountsList(this, "resource_counts", false);
  public get resourceCounts() {
    return this._resourceCounts;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supported_levels - computed: true, optional: false, required: false
  private _supportedLevels = new DataOciOptimizerRecommendationSupportedLevelsList(this, "supported_levels", false);
  public get supportedLevels() {
    return this._supportedLevels;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_status_begin - computed: true, optional: false, required: false
  public get timeStatusBegin() {
    return this.getStringAttribute('time_status_begin');
  }

  // time_status_end - computed: true, optional: false, required: false
  public get timeStatusEnd() {
    return this.getStringAttribute('time_status_end');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      recommendation_id: cdktf.stringToTerraform(this._recommendationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      recommendation_id: {
        value: cdktf.stringToHclTerraform(this._recommendationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
