// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SloChartConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart#id SloChart#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the attached SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart#slo_id SloChart#slo_id}
  */
  readonly sloId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart signalfx_slo_chart}
*/
export class SloChart extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_slo_chart";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SloChart resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SloChart to import
  * @param importFromId The id of the existing SloChart that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SloChart to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_slo_chart", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.1/docs/resources/slo_chart signalfx_slo_chart} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SloChartConfig
  */
  public constructor(scope: Construct, id: string, config: SloChartConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_slo_chart',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.1',
        providerVersionConstraint: '9.23.1'
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
    this._sloId = config.sloId;
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

  // slo_id - computed: false, optional: false, required: true
  private _sloId?: string; 
  public get sloId() {
    return this.getStringAttribute('slo_id');
  }
  public set sloId(value: string) {
    this._sloId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdInput() {
    return this._sloId;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      slo_id: cdktf.stringToTerraform(this._sloId),
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
      slo_id: {
        value: cdktf.stringToHclTerraform(this._sloId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
