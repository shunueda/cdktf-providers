// https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataWavefrontDerivedMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metric#id DataWavefrontDerivedMetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metric wavefront_derived_metric}
*/
export class DataWavefrontDerivedMetric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "wavefront_derived_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataWavefrontDerivedMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataWavefrontDerivedMetric to import
  * @param importFromId The id of the existing DataWavefrontDerivedMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataWavefrontDerivedMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "wavefront_derived_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/wavefront/5.1.0/docs/data-sources/derived_metric wavefront_derived_metric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataWavefrontDerivedMetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataWavefrontDerivedMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'wavefront_derived_metric',
      terraformGeneratorMetadata: {
        providerName: 'wavefront',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
