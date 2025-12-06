// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsqueryFileCategoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, FIM will include file access for this file category. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#access_monitoring OsqueryFileCategory#access_monitoring}
  */
  readonly accessMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Description of the Osquery file category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#description OsqueryFileCategory#description}
  */
  readonly description?: string;
  /**
  * Set of paths to exclude from the Osquery file category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#exclude_paths OsqueryFileCategory#exclude_paths}
  */
  readonly excludePaths?: string[];
  /**
  * Set of paths to include in the Osquery file category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#file_paths OsqueryFileCategory#file_paths}
  */
  readonly filePaths?: string[];
  /**
  * Set of queries returning paths to monitor as path columns in the results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#file_paths_queries OsqueryFileCategory#file_paths_queries}
  */
  readonly filePathsQueries?: string[];
  /**
  * Name of the Osquery file category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#name OsqueryFileCategory#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category zentral_osquery_file_category}
*/
export class OsqueryFileCategory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_file_category";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsqueryFileCategory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsqueryFileCategory to import
  * @param importFromId The id of the existing OsqueryFileCategory that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsqueryFileCategory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_file_category", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_file_category zentral_osquery_file_category} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsqueryFileCategoryConfig
  */
  public constructor(scope: Construct, id: string, config: OsqueryFileCategoryConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_file_category',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessMonitoring = config.accessMonitoring;
    this._description = config.description;
    this._excludePaths = config.excludePaths;
    this._filePaths = config.filePaths;
    this._filePathsQueries = config.filePathsQueries;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_monitoring - computed: true, optional: true, required: false
  private _accessMonitoring?: boolean | cdktf.IResolvable; 
  public get accessMonitoring() {
    return this.getBooleanAttribute('access_monitoring');
  }
  public set accessMonitoring(value: boolean | cdktf.IResolvable) {
    this._accessMonitoring = value;
  }
  public resetAccessMonitoring() {
    this._accessMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessMonitoringInput() {
    return this._accessMonitoring;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // exclude_paths - computed: true, optional: true, required: false
  private _excludePaths?: string[]; 
  public get excludePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_paths'));
  }
  public set excludePaths(value: string[]) {
    this._excludePaths = value;
  }
  public resetExcludePaths() {
    this._excludePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePathsInput() {
    return this._excludePaths;
  }

  // file_paths - computed: true, optional: true, required: false
  private _filePaths?: string[]; 
  public get filePaths() {
    return cdktf.Fn.tolist(this.getListAttribute('file_paths'));
  }
  public set filePaths(value: string[]) {
    this._filePaths = value;
  }
  public resetFilePaths() {
    this._filePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsInput() {
    return this._filePaths;
  }

  // file_paths_queries - computed: true, optional: true, required: false
  private _filePathsQueries?: string[]; 
  public get filePathsQueries() {
    return cdktf.Fn.tolist(this.getListAttribute('file_paths_queries'));
  }
  public set filePathsQueries(value: string[]) {
    this._filePathsQueries = value;
  }
  public resetFilePathsQueries() {
    this._filePathsQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filePathsQueriesInput() {
    return this._filePathsQueries;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_monitoring: cdktf.booleanToTerraform(this._accessMonitoring),
      description: cdktf.stringToTerraform(this._description),
      exclude_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludePaths),
      file_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filePaths),
      file_paths_queries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filePathsQueries),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_monitoring: {
        value: cdktf.booleanToHclTerraform(this._accessMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exclude_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludePaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filePaths),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      file_paths_queries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filePathsQueries),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
