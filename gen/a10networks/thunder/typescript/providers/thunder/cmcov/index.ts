// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmcovConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dump code coverage data and and generate report}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov#dump Cmcov#dump}
  */
  readonly dump?: number;
  /**
  * Export code coverage report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov#export Cmcov#export}
  */
  readonly export?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov#id Cmcov#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov thunder_cmcov}
*/
export class Cmcov extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cmcov";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cmcov resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cmcov to import
  * @param importFromId The id of the existing Cmcov that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cmcov to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cmcov", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cmcov thunder_cmcov} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmcovConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CmcovConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cmcov',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dump = config.dump;
    this._export = config.export;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dump - computed: false, optional: true, required: false
  private _dump?: number; 
  public get dump() {
    return this.getNumberAttribute('dump');
  }
  public set dump(value: number) {
    this._dump = value;
  }
  public resetDump() {
    this._dump = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpInput() {
    return this._dump;
  }

  // export - computed: false, optional: true, required: false
  private _export?: number; 
  public get export() {
    return this.getNumberAttribute('export');
  }
  public set export(value: number) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
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
      dump: cdktf.numberToTerraform(this._dump),
      export: cdktf.numberToTerraform(this._export),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dump: {
        value: cdktf.numberToHclTerraform(this._dump),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      export: {
        value: cdktf.numberToHclTerraform(this._export),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
