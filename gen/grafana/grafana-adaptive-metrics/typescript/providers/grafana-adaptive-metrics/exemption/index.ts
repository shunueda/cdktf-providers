// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExemptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, the recommendations service will exempt this metric from consideration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#disable_recommendations Exemption#disable_recommendations}
  */
  readonly disableRecommendations?: boolean | cdktf.IResolvable;
  /**
  * The array of labels to keep; labels not in this array will be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#keep_labels Exemption#keep_labels}
  */
  readonly keepLabels?: string[];
  /**
  * The name of the metric to be aggregated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#metric Exemption#metric}
  */
  readonly metric: string;
  /**
  * An optional string detailing the reason(s) for this exemption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#reason Exemption#reason}
  */
  readonly reason?: string;
  /**
  * The id of the segment to create an exemption for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#segment Exemption#segment}
  */
  readonly segment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption grafana-adaptive-metrics_exemption}
*/
export class Exemption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics_exemption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Exemption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Exemption to import
  * @param importFromId The id of the existing Exemption that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Exemption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics_exemption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.3/docs/resources/exemption grafana-adaptive-metrics_exemption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExemptionConfig
  */
  public constructor(scope: Construct, id: string, config: ExemptionConfig) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics_exemption',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.3',
        providerVersionConstraint: '0.3.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableRecommendations = config.disableRecommendations;
    this._keepLabels = config.keepLabels;
    this._metric = config.metric;
    this._reason = config.reason;
    this._segment = config.segment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // disable_recommendations - computed: true, optional: true, required: false
  private _disableRecommendations?: boolean | cdktf.IResolvable; 
  public get disableRecommendations() {
    return this.getBooleanAttribute('disable_recommendations');
  }
  public set disableRecommendations(value: boolean | cdktf.IResolvable) {
    this._disableRecommendations = value;
  }
  public resetDisableRecommendations() {
    this._disableRecommendations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRecommendationsInput() {
    return this._disableRecommendations;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_labels - computed: true, optional: true, required: false
  private _keepLabels?: string[]; 
  public get keepLabels() {
    return this.getListAttribute('keep_labels');
  }
  public set keepLabels(value: string[]) {
    this._keepLabels = value;
  }
  public resetKeepLabels() {
    this._keepLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepLabelsInput() {
    return this._keepLabels;
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

  // reason - computed: true, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_recommendations: cdktf.booleanToTerraform(this._disableRecommendations),
      keep_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keepLabels),
      metric: cdktf.stringToTerraform(this._metric),
      reason: cdktf.stringToTerraform(this._reason),
      segment: cdktf.stringToTerraform(this._segment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_recommendations: {
        value: cdktf.booleanToHclTerraform(this._disableRecommendations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keepLabels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment: {
        value: cdktf.stringToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
