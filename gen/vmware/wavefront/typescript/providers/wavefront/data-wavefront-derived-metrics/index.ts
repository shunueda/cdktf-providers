// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontDerivedMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics#id DataWavefrontDerivedMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics#limit DataWavefrontDerivedMetrics#limit}
  */
  readonly limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics#offset DataWavefrontDerivedMetrics#offset}
  */
  readonly offset?: number;
}
export interface DataWavefrontDerivedMetricsDerivedMetrics {
}

export function dataWavefrontDerivedMetricsDerivedMetricsToTerraform(struct?: DataWavefrontDerivedMetricsDerivedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataWavefrontDerivedMetricsDerivedMetricsToHclTerraform(struct?: DataWavefrontDerivedMetricsDerivedMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataWavefrontDerivedMetricsDerivedMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataWavefrontDerivedMetricsDerivedMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataWavefrontDerivedMetricsDerivedMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_information - computed: true, optional: false, required: false
  public get additionalInformation() {
    return this.getStringAttribute('additional_information');
  }

  // create_user_id - computed: true, optional: false, required: false
  public get createUserId() {
    return this.getStringAttribute('create_user_id');
  }

  // created_epoch_millis - computed: true, optional: false, required: false
  public get createdEpochMillis() {
    return this.getNumberAttribute('created_epoch_millis');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // hosts_used - computed: true, optional: false, required: false
  public get hostsUsed() {
    return this.getListAttribute('hosts_used');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_trash - computed: true, optional: false, required: false
  public get inTrash() {
    return this.getBooleanAttribute('in_trash');
  }

  // include_obsolete_metrics - computed: true, optional: false, required: false
  public get includeObsoleteMetrics() {
    return this.getBooleanAttribute('include_obsolete_metrics');
  }

  // last_error_message - computed: true, optional: false, required: false
  public get lastErrorMessage() {
    return this.getStringAttribute('last_error_message');
  }

  // last_failed_time - computed: true, optional: false, required: false
  public get lastFailedTime() {
    return this.getNumberAttribute('last_failed_time');
  }

  // last_processed_millis - computed: true, optional: false, required: false
  public get lastProcessedMillis() {
    return this.getNumberAttribute('last_processed_millis');
  }

  // last_query_time - computed: true, optional: false, required: false
  public get lastQueryTime() {
    return this.getNumberAttribute('last_query_time');
  }

  // metrics_used - computed: true, optional: false, required: false
  public get metricsUsed() {
    return this.getListAttribute('metrics_used');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // points_scanned_at_last_query - computed: true, optional: false, required: false
  public get pointsScannedAtLastQuery() {
    return this.getNumberAttribute('points_scanned_at_last_query');
  }

  // process_rate_minutes - computed: true, optional: false, required: false
  public get processRateMinutes() {
    return this.getNumberAttribute('process_rate_minutes');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_failing - computed: true, optional: false, required: false
  public get queryFailing() {
    return this.getBooleanAttribute('query_failing');
  }

  // query_qb_enabled - computed: true, optional: false, required: false
  public get queryQbEnabled() {
    return this.getBooleanAttribute('query_qb_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getListAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // update_user_id - computed: true, optional: false, required: false
  public get updateUserId() {
    return this.getStringAttribute('update_user_id');
  }

  // updated_epoch_millis - computed: true, optional: false, required: false
  public get updatedEpochMillis() {
    return this.getNumberAttribute('updated_epoch_millis');
  }
}

export class DataWavefrontDerivedMetricsDerivedMetricsList extends cdktf.ComplexList {

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
  public get(index: number): DataWavefrontDerivedMetricsDerivedMetricsOutputReference {
    return new DataWavefrontDerivedMetricsDerivedMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics wavefront_derived_metrics}
*/
export class DataWavefrontDerivedMetrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_derived_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontDerivedMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontDerivedMetrics to import
  * @param importFromId The id of the existing DataWavefrontDerivedMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontDerivedMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_derived_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metrics wavefront_derived_metrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontDerivedMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontDerivedMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'wavefront_derived_metrics',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0'
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
    this._limit = config.limit;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // derived_metrics - computed: true, optional: false, required: false
  private _derivedMetrics = new DataWavefrontDerivedMetricsDerivedMetricsList(this, "derived_metrics", false);
  public get derivedMetrics() {
    return this._derivedMetrics;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      offset: cdktf.numberToTerraform(this._offset),
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
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
