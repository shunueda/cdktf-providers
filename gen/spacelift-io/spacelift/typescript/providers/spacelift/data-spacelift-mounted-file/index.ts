// https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSpaceliftMountedFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the context where the mounted file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#context_id DataSpaceliftMountedFile#context_id}
  */
  readonly contextId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#id DataSpaceliftMountedFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the module where the mounted file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#module_id DataSpaceliftMountedFile#module_id}
  */
  readonly moduleId?: string;
  /**
  * relative path to the mounted file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#relative_path DataSpaceliftMountedFile#relative_path}
  */
  readonly relativePath: string;
  /**
  * ID of the stack where the mounted file is stored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#stack_id DataSpaceliftMountedFile#stack_id}
  */
  readonly stackId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file spacelift_mounted_file}
*/
export class DataSpaceliftMountedFile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spacelift_mounted_file";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSpaceliftMountedFile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSpaceliftMountedFile to import
  * @param importFromId The id of the existing DataSpaceliftMountedFile that should be imported. Refer to the {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSpaceliftMountedFile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spacelift_mounted_file", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spacelift-io/spacelift/1.38.0/docs/data-sources/mounted_file spacelift_mounted_file} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSpaceliftMountedFileConfig
  */
  public constructor(scope: Construct, id: string, config: DataSpaceliftMountedFileConfig) {
    super(scope, id, {
      terraformResourceType: 'spacelift_mounted_file',
      terraformGeneratorMetadata: {
        providerName: 'spacelift',
        providerVersion: '1.38.0',
        providerVersionConstraint: '1.38.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contextId = config.contextId;
    this._id = config.id;
    this._moduleId = config.moduleId;
    this._relativePath = config.relativePath;
    this._stackId = config.stackId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksum - computed: true, optional: false, required: false
  public get checksum() {
    return this.getStringAttribute('checksum');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // context_id - computed: false, optional: true, required: false
  private _contextId?: string; 
  public get contextId() {
    return this.getStringAttribute('context_id');
  }
  public set contextId(value: string) {
    this._contextId = value;
  }
  public resetContextId() {
    this._contextId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextIdInput() {
    return this._contextId;
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

  // module_id - computed: false, optional: true, required: false
  private _moduleId?: string; 
  public get moduleId() {
    return this.getStringAttribute('module_id');
  }
  public set moduleId(value: string) {
    this._moduleId = value;
  }
  public resetModuleId() {
    this._moduleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleIdInput() {
    return this._moduleId;
  }

  // relative_path - computed: false, optional: false, required: true
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }

  // stack_id - computed: false, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // write_only - computed: true, optional: false, required: false
  public get writeOnly() {
    return this.getBooleanAttribute('write_only');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      context_id: cdktf.stringToTerraform(this._contextId),
      id: cdktf.stringToTerraform(this._id),
      module_id: cdktf.stringToTerraform(this._moduleId),
      relative_path: cdktf.stringToTerraform(this._relativePath),
      stack_id: cdktf.stringToTerraform(this._stackId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      context_id: {
        value: cdktf.stringToHclTerraform(this._contextId),
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
      module_id: {
        value: cdktf.stringToHclTerraform(this._moduleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_path: {
        value: cdktf.stringToHclTerraform(this._relativePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
