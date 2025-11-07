// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateMultilayerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer#id FmupdateMultilayer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer#webspam_rating FmupdateMultilayer#webspam_rating}
  */
  readonly webspamRating?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer fortianalyzer_fmupdate_multilayer}
*/
export class FmupdateMultilayer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_multilayer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateMultilayer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateMultilayer to import
  * @param importFromId The id of the existing FmupdateMultilayer that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateMultilayer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_multilayer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/fmupdate_multilayer fortianalyzer_fmupdate_multilayer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateMultilayerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateMultilayerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_multilayer',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
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
    this._webspamRating = config.webspamRating;
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

  // webspam_rating - computed: true, optional: true, required: false
  private _webspamRating?: string; 
  public get webspamRating() {
    return this.getStringAttribute('webspam_rating');
  }
  public set webspamRating(value: string) {
    this._webspamRating = value;
  }
  public resetWebspamRating() {
    this._webspamRating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webspamRatingInput() {
    return this._webspamRating;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      webspam_rating: cdktf.stringToTerraform(this._webspamRating),
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
      webspam_rating: {
        value: cdktf.stringToHclTerraform(this._webspamRating),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
