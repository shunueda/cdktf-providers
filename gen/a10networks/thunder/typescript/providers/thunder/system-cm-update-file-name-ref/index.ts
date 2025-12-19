// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCmUpdateFileNameRefAConfig extends cdktf.TerraformMetaArguments {
  /**
  * bind dest name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref#dest_name SystemCmUpdateFileNameRefA#dest_name}
  */
  readonly destName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref#id SystemCmUpdateFileNameRefA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify unique Partition id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref#id1 SystemCmUpdateFileNameRefA#id1}
  */
  readonly id1?: number;
  /**
  * bind source name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref#source_name SystemCmUpdateFileNameRefA#source_name}
  */
  readonly sourceName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref thunder_system_cm_update_file_name_ref}
*/
export class SystemCmUpdateFileNameRefA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_cm_update_file_name_ref";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCmUpdateFileNameRefA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCmUpdateFileNameRefA to import
  * @param importFromId The id of the existing SystemCmUpdateFileNameRefA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCmUpdateFileNameRefA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_cm_update_file_name_ref", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_cm_update_file_name_ref thunder_system_cm_update_file_name_ref} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCmUpdateFileNameRefAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCmUpdateFileNameRefAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_cm_update_file_name_ref',
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
    this._destName = config.destName;
    this._id = config.id;
    this._id1 = config.id1;
    this._sourceName = config.sourceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_name - computed: false, optional: true, required: false
  private _destName?: string; 
  public get destName() {
    return this.getStringAttribute('dest_name');
  }
  public set destName(value: string) {
    this._destName = value;
  }
  public resetDestName() {
    this._destName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destNameInput() {
    return this._destName;
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

  // id1 - computed: false, optional: true, required: false
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  public resetId1() {
    this._id1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // source_name - computed: false, optional: true, required: false
  private _sourceName?: string; 
  public get sourceName() {
    return this.getStringAttribute('source_name');
  }
  public set sourceName(value: string) {
    this._sourceName = value;
  }
  public resetSourceName() {
    this._sourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNameInput() {
    return this._sourceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dest_name: cdktf.stringToTerraform(this._destName),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      source_name: cdktf.stringToTerraform(this._sourceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dest_name: {
        value: cdktf.stringToHclTerraform(this._destName),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_name: {
        value: cdktf.stringToHclTerraform(this._sourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
