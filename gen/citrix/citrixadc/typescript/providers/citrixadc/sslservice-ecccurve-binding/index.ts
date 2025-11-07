// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslserviceEcccurveBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding#ecccurvename SslserviceEcccurveBinding#ecccurvename}
  */
  readonly ecccurvename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding#id SslserviceEcccurveBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding#servicename SslserviceEcccurveBinding#servicename}
  */
  readonly servicename?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding citrixadc_sslservice_ecccurve_binding}
*/
export class SslserviceEcccurveBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslservice_ecccurve_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslserviceEcccurveBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslserviceEcccurveBinding to import
  * @param importFromId The id of the existing SslserviceEcccurveBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslserviceEcccurveBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslservice_ecccurve_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslservice_ecccurve_binding citrixadc_sslservice_ecccurve_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslserviceEcccurveBindingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslserviceEcccurveBindingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslservice_ecccurve_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
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
    this._servicename = config.servicename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecccurvename - computed: true, optional: true, required: false
  private _ecccurvename?: string; 
  public get ecccurvename() {
    return this.getStringAttribute('ecccurvename');
  }
  public set ecccurvename(value: string) {
    this._ecccurvename = value;
  }
  public resetEcccurvename() {
    this._ecccurvename = undefined;
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

  // servicename - computed: true, optional: true, required: false
  private _servicename?: string; 
  public get servicename() {
    return this.getStringAttribute('servicename');
  }
  public set servicename(value: string) {
    this._servicename = value;
  }
  public resetServicename() {
    this._servicename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicenameInput() {
    return this._servicename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ecccurvename: cdktf.stringToTerraform(this._ecccurvename),
      id: cdktf.stringToTerraform(this._id),
      servicename: cdktf.stringToTerraform(this._servicename),
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
      servicename: {
        value: cdktf.stringToHclTerraform(this._servicename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
