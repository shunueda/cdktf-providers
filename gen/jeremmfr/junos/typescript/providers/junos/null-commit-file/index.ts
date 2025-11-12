// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NullCommitFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of lines append to lines in the loaded file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file#append_lines NullCommitFile#append_lines}
  */
  readonly appendLines?: string[];
  /**
  * Truncate file after successful commit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file#clear_file_after_commit NullCommitFile#clear_file_after_commit}
  */
  readonly clearFileAfterCommit?: boolean | cdktf.IResolvable;
  /**
  * The path of the file to load.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file#filename NullCommitFile#filename}
  */
  readonly filename: string;
  /**
  * Any value that, when changed, will force the resource to be replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file#triggers NullCommitFile#triggers}
  */
  readonly triggers?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file junos_null_commit_file}
*/
export class NullCommitFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_null_commit_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NullCommitFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NullCommitFile to import
  * @param importFromId The id of the existing NullCommitFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NullCommitFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_null_commit_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/null_commit_file junos_null_commit_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NullCommitFileConfig
  */
  public constructor(scope: Construct, id: string, config: NullCommitFileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_null_commit_file',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appendLines = config.appendLines;
    this._clearFileAfterCommit = config.clearFileAfterCommit;
    this._filename = config.filename;
    this._triggers = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // append_lines - computed: false, optional: true, required: false
  private _appendLines?: string[]; 
  public get appendLines() {
    return this.getListAttribute('append_lines');
  }
  public set appendLines(value: string[]) {
    this._appendLines = value;
  }
  public resetAppendLines() {
    this._appendLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendLinesInput() {
    return this._appendLines;
  }

  // clear_file_after_commit - computed: false, optional: true, required: false
  private _clearFileAfterCommit?: boolean | cdktf.IResolvable; 
  public get clearFileAfterCommit() {
    return this.getBooleanAttribute('clear_file_after_commit');
  }
  public set clearFileAfterCommit(value: boolean | cdktf.IResolvable) {
    this._clearFileAfterCommit = value;
  }
  public resetClearFileAfterCommit() {
    this._clearFileAfterCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearFileAfterCommitInput() {
    return this._clearFileAfterCommit;
  }

  // filename - computed: false, optional: false, required: true
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: { [key: string]: any }; 
  public get triggers() {
    return this.getAnyMapAttribute('triggers');
  }
  public set triggers(value: { [key: string]: any }) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      append_lines: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appendLines),
      clear_file_after_commit: cdktf.booleanToTerraform(this._clearFileAfterCommit),
      filename: cdktf.stringToTerraform(this._filename),
      triggers: cdktf.hashMapper(cdktf.anyToTerraform)(this._triggers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      append_lines: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appendLines),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clear_file_after_commit: {
        value: cdktf.booleanToHclTerraform(this._clearFileAfterCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filename: {
        value: cdktf.stringToHclTerraform(this._filename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      triggers: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._triggers),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
