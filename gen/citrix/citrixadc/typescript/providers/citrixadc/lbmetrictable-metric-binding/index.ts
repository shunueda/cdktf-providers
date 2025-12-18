// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbmetrictableMetricBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding#id LbmetrictableMetricBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding#metric LbmetrictableMetricBinding#metric}
  */
  readonly metric: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding#metrictable LbmetrictableMetricBinding#metrictable}
  */
  readonly metrictable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding#snmpoid LbmetrictableMetricBinding#snmpoid}
  */
  readonly snmpoid: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding citrixadc_lbmetrictable_metric_binding}
*/
export class LbmetrictableMetricBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lbmetrictable_metric_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbmetrictableMetricBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbmetrictableMetricBinding to import
  * @param importFromId The id of the existing LbmetrictableMetricBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbmetrictableMetricBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lbmetrictable_metric_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lbmetrictable_metric_binding citrixadc_lbmetrictable_metric_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbmetrictableMetricBindingConfig
  */
  public constructor(scope: Construct, id: string, config: LbmetrictableMetricBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lbmetrictable_metric_binding',
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
    this._metrictable = config.metrictable;
    this._snmpoid = config.snmpoid;
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

  // metrictable - computed: false, optional: false, required: true
  private _metrictable?: string; 
  public get metrictable() {
    return this.getStringAttribute('metrictable');
  }
  public set metrictable(value: string) {
    this._metrictable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metrictableInput() {
    return this._metrictable;
  }

  // snmpoid - computed: false, optional: false, required: true
  private _snmpoid?: string; 
  public get snmpoid() {
    return this.getStringAttribute('snmpoid');
  }
  public set snmpoid(value: string) {
    this._snmpoid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpoidInput() {
    return this._snmpoid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metric: cdktf.stringToTerraform(this._metric),
      metrictable: cdktf.stringToTerraform(this._metrictable),
      snmpoid: cdktf.stringToTerraform(this._snmpoid),
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
      metrictable: {
        value: cdktf.stringToHclTerraform(this._metrictable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmpoid: {
        value: cdktf.stringToHclTerraform(this._snmpoid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
