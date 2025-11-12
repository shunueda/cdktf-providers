// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HistogramMetricsConfig extends cdktf.TerraformMetaArguments {
  /**
  * When enabled, you can ingest the `le` dimension, representing explicit histogram buckets.\
  *  Enable this if you are using OpenTelemetry histograms or Prometheus histogram metrics.\
  * When disabled, only your histograms' sum and count metrics will be ingested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics#enable_histogram_bucket_ingest HistogramMetrics#enable_histogram_bucket_ingest}
  */
  readonly enableHistogramBucketIngest: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics#id HistogramMetrics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics dynatrace_histogram_metrics}
*/
export class HistogramMetrics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_histogram_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HistogramMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HistogramMetrics to import
  * @param importFromId The id of the existing HistogramMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HistogramMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_histogram_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/histogram_metrics dynatrace_histogram_metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HistogramMetricsConfig
  */
  public constructor(scope: Construct, id: string, config: HistogramMetricsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_histogram_metrics',
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
    this._enableHistogramBucketIngest = config.enableHistogramBucketIngest;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_histogram_bucket_ingest - computed: false, optional: false, required: true
  private _enableHistogramBucketIngest?: boolean | cdktf.IResolvable; 
  public get enableHistogramBucketIngest() {
    return this.getBooleanAttribute('enable_histogram_bucket_ingest');
  }
  public set enableHistogramBucketIngest(value: boolean | cdktf.IResolvable) {
    this._enableHistogramBucketIngest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHistogramBucketIngestInput() {
    return this._enableHistogramBucketIngest;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_histogram_bucket_ingest: cdktf.booleanToTerraform(this._enableHistogramBucketIngest),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_histogram_bucket_ingest: {
        value: cdktf.booleanToHclTerraform(this._enableHistogramBucketIngest),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
