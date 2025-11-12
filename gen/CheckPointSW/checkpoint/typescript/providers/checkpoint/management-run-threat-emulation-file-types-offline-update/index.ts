// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementRunThreatEmulationFileTypesOfflineUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * File path for offline update of Threat Emulation file types, the file path should be on the management machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update#file_path ManagementRunThreatEmulationFileTypesOfflineUpdate#file_path}
  */
  readonly filePath: string;
  /**
  * The contents of a file containing the Threat Emulation file types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update#file_raw_data ManagementRunThreatEmulationFileTypesOfflineUpdate#file_raw_data}
  */
  readonly fileRawData: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update#id ManagementRunThreatEmulationFileTypesOfflineUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update checkpoint_management_run_threat_emulation_file_types_offline_update}
*/
export class ManagementRunThreatEmulationFileTypesOfflineUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_run_threat_emulation_file_types_offline_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementRunThreatEmulationFileTypesOfflineUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementRunThreatEmulationFileTypesOfflineUpdate to import
  * @param importFromId The id of the existing ManagementRunThreatEmulationFileTypesOfflineUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementRunThreatEmulationFileTypesOfflineUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_run_threat_emulation_file_types_offline_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_run_threat_emulation_file_types_offline_update checkpoint_management_run_threat_emulation_file_types_offline_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementRunThreatEmulationFileTypesOfflineUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementRunThreatEmulationFileTypesOfflineUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_run_threat_emulation_file_types_offline_update',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filePath = config.filePath;
    this._fileRawData = config.fileRawData;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_path - computed: false, optional: false, required: true
  private _filePath?: string; 
  public get filePath() {
    return this.getStringAttribute('file_path');
  }
  public set filePath(value: string) {
    this._filePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathInput() {
    return this._filePath;
  }

  // file_raw_data - computed: false, optional: false, required: true
  private _fileRawData?: string; 
  public get fileRawData() {
    return this.getStringAttribute('file_raw_data');
  }
  public set fileRawData(value: string) {
    this._fileRawData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRawDataInput() {
    return this._fileRawData;
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
      file_path: cdktf.stringToTerraform(this._filePath),
      file_raw_data: cdktf.stringToTerraform(this._fileRawData),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_path: {
        value: cdktf.stringToHclTerraform(this._filePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_raw_data: {
        value: cdktf.stringToHclTerraform(this._fileRawData),
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
