// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FmupdateServeroverridestatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus#id FmupdateServeroverridestatus#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus#mode FmupdateServeroverridestatus#mode}
  */
  readonly mode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus fortianalyzer_fmupdate_serveroverridestatus}
*/
export class FmupdateServeroverridestatus extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_fmupdate_serveroverridestatus";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FmupdateServeroverridestatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FmupdateServeroverridestatus to import
  * @param importFromId The id of the existing FmupdateServeroverridestatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FmupdateServeroverridestatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_fmupdate_serveroverridestatus", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.2/docs/resources/fmupdate_serveroverridestatus fortianalyzer_fmupdate_serveroverridestatus} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FmupdateServeroverridestatusConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FmupdateServeroverridestatusConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_fmupdate_serveroverridestatus',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
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
    this._mode = config.mode;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
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
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
