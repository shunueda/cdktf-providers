// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslprofileEcccurveBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding#ecccurvename SslprofileEcccurveBinding#ecccurvename}
  */
  readonly ecccurvename: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding#id SslprofileEcccurveBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding#name SslprofileEcccurveBinding#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding#remove_existing_ecccurve_binding SslprofileEcccurveBinding#remove_existing_ecccurve_binding}
  */
  readonly removeExistingEcccurveBinding: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding citrixadc_sslprofile_ecccurve_binding}
*/
export class SslprofileEcccurveBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslprofile_ecccurve_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslprofileEcccurveBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslprofileEcccurveBinding to import
  * @param importFromId The id of the existing SslprofileEcccurveBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslprofileEcccurveBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslprofile_ecccurve_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslprofile_ecccurve_binding citrixadc_sslprofile_ecccurve_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslprofileEcccurveBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslprofileEcccurveBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslprofile_ecccurve_binding',
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
    this._name = config.name;
    this._removeExistingEcccurveBinding = config.removeExistingEcccurveBinding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ecccurvename - computed: false, optional: false, required: true
  private _ecccurvename?: string[]; 
  public get ecccurvename() {
    return this.getListAttribute('ecccurvename');
  }
  public set ecccurvename(value: string[]) {
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remove_existing_ecccurve_binding - computed: false, optional: false, required: true
  private _removeExistingEcccurveBinding?: boolean | cdktf.IResolvable; 
  public get removeExistingEcccurveBinding() {
    return this.getBooleanAttribute('remove_existing_ecccurve_binding');
  }
  public set removeExistingEcccurveBinding(value: boolean | cdktf.IResolvable) {
    this._removeExistingEcccurveBinding = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeExistingEcccurveBindingInput() {
    return this._removeExistingEcccurveBinding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ecccurvename: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ecccurvename),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      remove_existing_ecccurve_binding: cdktf.booleanToTerraform(this._removeExistingEcccurveBinding),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ecccurvename: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ecccurvename),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remove_existing_ecccurve_binding: {
        value: cdktf.booleanToHclTerraform(this._removeExistingEcccurveBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
