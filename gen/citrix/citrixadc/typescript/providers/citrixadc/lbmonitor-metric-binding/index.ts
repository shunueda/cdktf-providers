// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbmonitorMetricBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#id LbmonitorMetricBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#metric LbmonitorMetricBinding#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#metricthreshold LbmonitorMetricBinding#metricthreshold}
  */
  readonly metricthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#metricweight LbmonitorMetricBinding#metricweight}
  */
  readonly metricweight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#monitorname LbmonitorMetricBinding#monitorname}
  */
  readonly monitorname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding citrixadc_lbmonitor_metric_binding}
*/
export class LbmonitorMetricBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbmonitor_metric_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbmonitorMetricBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbmonitorMetricBinding to import
  * @param importFromId The id of the existing LbmonitorMetricBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbmonitorMetricBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbmonitor_metric_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmonitor_metric_binding citrixadc_lbmonitor_metric_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbmonitorMetricBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LbmonitorMetricBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbmonitor_metric_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._metric = config.metric;
    this._metricthreshold = config.metricthreshold;
    this._metricweight = config.metricweight;
    this._monitorname = config.monitorname;
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

  // metricthreshold - computed: false, optional: true, required: false
  private _metricthreshold?: number; 
  public get metricthreshold() {
    return this.getNumberAttribute('metricthreshold');
  }
  public set metricthreshold(value: number) {
    this._metricthreshold = value;
  }
  public resetMetricthreshold() {
    this._metricthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricthresholdInput() {
    return this._metricthreshold;
  }

  // metricweight - computed: true, optional: true, required: false
  private _metricweight?: number; 
  public get metricweight() {
    return this.getNumberAttribute('metricweight');
  }
  public set metricweight(value: number) {
    this._metricweight = value;
  }
  public resetMetricweight() {
    this._metricweight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricweightInput() {
    return this._metricweight;
  }

  // monitorname - computed: false, optional: false, required: true
  private _monitorname?: string; 
  public get monitorname() {
    return this.getStringAttribute('monitorname');
  }
  public set monitorname(value: string) {
    this._monitorname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitornameInput() {
    return this._monitorname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      metricthreshold: cdktf.numberToTerraform(this._metricthreshold),
      metricweight: cdktf.numberToTerraform(this._metricweight),
      monitorname: cdktf.stringToTerraform(this._monitorname),
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
      metric: {
        value: cdktf.stringToHclTerraform(this._metric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metricthreshold: {
        value: cdktf.numberToHclTerraform(this._metricthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metricweight: {
        value: cdktf.numberToHclTerraform(this._metricweight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitorname: {
        value: cdktf.stringToHclTerraform(this._monitorname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
