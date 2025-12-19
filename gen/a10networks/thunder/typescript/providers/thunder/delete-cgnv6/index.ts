// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeleteCgnv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Specify the port-mapping-file to be deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#filename DeleteCgnv6#filename}
  */
  readonly filename?: string;
  /**
  * Delete fixed-nat port-mapping-file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#fixed_nat DeleteCgnv6#fixed_nat}
  */
  readonly fixedNat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#id DeleteCgnv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * LW-4O6 Binding Table validation log File
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#lw_4o6_binding_table_validation_log DeleteCgnv6#lw_4o6_binding_table_validation_log}
  */
  readonly lw4O6BindingTableValidationLog?: number;
  /**
  * LW-4O6 Binding Table Validation Log File Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#lw_filename DeleteCgnv6#lw_filename}
  */
  readonly lwFilename?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6 thunder_delete_cgnv6}
*/
export class DeleteCgnv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_delete_cgnv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeleteCgnv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeleteCgnv6 to import
  * @param importFromId The id of the existing DeleteCgnv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeleteCgnv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_delete_cgnv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/delete_cgnv6 thunder_delete_cgnv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeleteCgnv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: DeleteCgnv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_delete_cgnv6',
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
    this._filename = config.filename;
    this._fixedNat = config.fixedNat;
    this._id = config.id;
    this._lw4O6BindingTableValidationLog = config.lw4O6BindingTableValidationLog;
    this._lwFilename = config.lwFilename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filename - computed: false, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // fixed_nat - computed: false, optional: true, required: false
  private _fixedNat?: number; 
  public get fixedNat() {
    return this.getNumberAttribute('fixed_nat');
  }
  public set fixedNat(value: number) {
    this._fixedNat = value;
  }
  public resetFixedNat() {
    this._fixedNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInput() {
    return this._fixedNat;
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

  // lw_4o6_binding_table_validation_log - computed: false, optional: true, required: false
  private _lw4O6BindingTableValidationLog?: number; 
  public get lw4O6BindingTableValidationLog() {
    return this.getNumberAttribute('lw_4o6_binding_table_validation_log');
  }
  public set lw4O6BindingTableValidationLog(value: number) {
    this._lw4O6BindingTableValidationLog = value;
  }
  public resetLw4O6BindingTableValidationLog() {
    this._lw4O6BindingTableValidationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lw4O6BindingTableValidationLogInput() {
    return this._lw4O6BindingTableValidationLog;
  }

  // lw_filename - computed: false, optional: true, required: false
  private _lwFilename?: string; 
  public get lwFilename() {
    return this.getStringAttribute('lw_filename');
  }
  public set lwFilename(value: string) {
    this._lwFilename = value;
  }
  public resetLwFilename() {
    this._lwFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lwFilenameInput() {
    return this._lwFilename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filename: cdktf.stringToTerraform(this._filename),
      fixed_nat: cdktf.numberToTerraform(this._fixedNat),
      id: cdktf.stringToTerraform(this._id),
      lw_4o6_binding_table_validation_log: cdktf.numberToTerraform(this._lw4O6BindingTableValidationLog),
      lw_filename: cdktf.stringToTerraform(this._lwFilename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fixed_nat: {
        value: cdktf.numberToHclTerraform(this._fixedNat),
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
      lw_4o6_binding_table_validation_log: {
        value: cdktf.numberToHclTerraform(this._lw4O6BindingTableValidationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lw_filename: {
        value: cdktf.stringToHclTerraform(this._lwFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
