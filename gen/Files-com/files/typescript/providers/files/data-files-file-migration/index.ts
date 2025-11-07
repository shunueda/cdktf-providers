// https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/file_migration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesFileMigrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * File migration ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/file_migration#id DataFilesFileMigration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/file_migration files_file_migration}
*/
export class DataFilesFileMigration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_file_migration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesFileMigration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesFileMigration to import
  * @param importFromId The id of the existing DataFilesFileMigration that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/file_migration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesFileMigration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_file_migration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.375/docs/data-sources/file_migration files_file_migration} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesFileMigrationConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesFileMigrationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_file_migration',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.375'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dest_path - computed: true, optional: false, required: false
  public get destPath() {
    return this.getStringAttribute('dest_path');
  }

  // files_moved - computed: true, optional: false, required: false
  public get filesMoved() {
    return this.getNumberAttribute('files_moved');
  }

  // files_total - computed: true, optional: false, required: false
  public get filesTotal() {
    return this.getNumberAttribute('files_total');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_url - computed: true, optional: false, required: false
  public get logUrl() {
    return this.getStringAttribute('log_url');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
