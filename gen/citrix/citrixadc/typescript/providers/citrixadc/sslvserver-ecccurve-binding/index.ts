// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslvserverEcccurveBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding#ecccurvename SslvserverEcccurveBinding#ecccurvename}
  */
  readonly ecccurvename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding#id SslvserverEcccurveBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding#vservername SslvserverEcccurveBinding#vservername}
  */
  readonly vservername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding citrixadc_sslvserver_ecccurve_binding}
*/
export class SslvserverEcccurveBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslvserver_ecccurve_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslvserverEcccurveBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslvserverEcccurveBinding to import
  * @param importFromId The id of the existing SslvserverEcccurveBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslvserverEcccurveBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslvserver_ecccurve_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslvserver_ecccurve_binding citrixadc_sslvserver_ecccurve_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslvserverEcccurveBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslvserverEcccurveBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslvserver_ecccurve_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ecccurvename = config.ecccurvename;
    this._id = config.id;
    this._vservername = config.vservername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecccurvename - computed: false, optional: false, required: true
  private _ecccurvename?: string; 
  public get ecccurvename() {
    return this.getStringAttribute('ecccurvename');
  }
  public set ecccurvename(value: string) {
    this._ecccurvename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ecccurvenameInput() {
    return this._ecccurvename;
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

  // vservername - computed: false, optional: false, required: true
  private _vservername?: string; 
  public get vservername() {
    return this.getStringAttribute('vservername');
  }
  public set vservername(value: string) {
    this._vservername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vservernameInput() {
    return this._vservername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ecccurvename: cdktf.stringToTerraform(this._ecccurvename),
      id: cdktf.stringToTerraform(this._id),
      vservername: cdktf.stringToTerraform(this._vservername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecccurvename: {
        value: cdktf.stringToHclTerraform(this._ecccurvename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vservername: {
        value: cdktf.stringToHclTerraform(this._vservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
