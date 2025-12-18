// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCoreConsoleHistoryDataConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data#console_history_id DataOciCoreConsoleHistoryData#console_history_id}
  */
  readonly consoleHistoryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data#id DataOciCoreConsoleHistoryData#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data#length DataOciCoreConsoleHistoryData#length}
  */
  readonly length?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data#offset DataOciCoreConsoleHistoryData#offset}
  */
  readonly offset?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data oci_core_console_history_data}
*/
export class DataOciCoreConsoleHistoryData extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_console_history_data";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCoreConsoleHistoryData resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCoreConsoleHistoryData to import
  * @param importFromId The id of the existing DataOciCoreConsoleHistoryData that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCoreConsoleHistoryData to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_console_history_data", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/core_console_history_data oci_core_console_history_data} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCoreConsoleHistoryDataConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCoreConsoleHistoryDataConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_console_history_data',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consoleHistoryId = config.consoleHistoryId;
    this._id = config.id;
    this._length = config.length;
    this._offset = config.offset;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // console_history_id - computed: false, optional: false, required: true
  private _consoleHistoryId?: string; 
  public get consoleHistoryId() {
    return this.getStringAttribute('console_history_id');
  }
  public set consoleHistoryId(value: string) {
    this._consoleHistoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleHistoryIdInput() {
    return this._consoleHistoryId;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
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

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      console_history_id: cdktf.stringToTerraform(this._consoleHistoryId),
      id: cdktf.stringToTerraform(this._id),
      length: cdktf.numberToTerraform(this._length),
      offset: cdktf.numberToTerraform(this._offset),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      console_history_id: {
        value: cdktf.stringToHclTerraform(this._consoleHistoryId),
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
      length: {
        value: cdktf.numberToHclTerraform(this._length),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
