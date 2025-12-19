// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeleteDdosConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify file to be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos#ddos_script DeleteDdos#ddos_script}
  */
  readonly ddosScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos#id DeleteDdos#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos thunder_delete_ddos}
*/
export class DeleteDdos extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_delete_ddos";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeleteDdos resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeleteDdos to import
  * @param importFromId The id of the existing DeleteDdos that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeleteDdos to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_delete_ddos", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_ddos thunder_delete_ddos} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeleteDdosConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeleteDdosConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_delete_ddos',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ddosScript = config.ddosScript;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ddos_script - computed: false, optional: true, required: false
  private _ddosScript?: string; 
  public get ddosScript() {
    return this.getStringAttribute('ddos_script');
  }
  public set ddosScript(value: string) {
    this._ddosScript = value;
  }
  public resetDdosScript() {
    this._ddosScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosScriptInput() {
    return this._ddosScript;
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
      ddos_script: cdktf.stringToTerraform(this._ddosScript),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ddos_script: {
        value: cdktf.stringToHclTerraform(this._ddosScript),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
