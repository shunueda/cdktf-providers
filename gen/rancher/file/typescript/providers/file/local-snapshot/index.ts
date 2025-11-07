// https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the provider should compress the contents and snapshot or not. Defaults to 'false'. When set to 'true' the provider will compress the contents and snapshot attributes using the gzip compression algorithm. Changing this attribute forces recreate, compressing snapshots which are already saved in state isn't supported. Warning! To prevent memory errors the provider generates temporary files to facilitate encoding and compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot#compress LocalSnapshot#compress}
  */
  readonly compress?: boolean | cdktf.IResolvable;
  /**
  * Path of the file to save. Changing this forces recreate, moving the file isn't supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot#directory LocalSnapshot#directory}
  */
  readonly directory?: string;
  /**
  * Name of the file to save. Changing this forces recreate, moving the file isn't supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot#name LocalSnapshot#name}
  */
  readonly name: string;
  /**
  * When this argument changes the snapshot will be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot#update_trigger LocalSnapshot#update_trigger}
  */
  readonly updateTrigger: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot file_local_snapshot}
*/
export class LocalSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "file_local_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalSnapshot to import
  * @param importFromId The id of the existing LocalSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "file_local_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/resources/local_snapshot file_local_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: LocalSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'file_local_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'file',
        providerVersion: '2.2.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compress = config.compress;
    this._directory = config.directory;
    this._name = config.name;
    this._updateTrigger = config.updateTrigger;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compress - computed: true, optional: true, required: false
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // directory - computed: true, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // snapshot - computed: true, optional: false, required: false
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }

  // update_trigger - computed: false, optional: false, required: true
  private _updateTrigger?: string; 
  public get updateTrigger() {
    return this.getStringAttribute('update_trigger');
  }
  public set updateTrigger(value: string) {
    this._updateTrigger = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTriggerInput() {
    return this._updateTrigger;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compress: cdktf.booleanToTerraform(this._compress),
      directory: cdktf.stringToTerraform(this._directory),
      name: cdktf.stringToTerraform(this._name),
      update_trigger: cdktf.stringToTerraform(this._updateTrigger),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compress: {
        value: cdktf.booleanToHclTerraform(this._compress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_trigger: {
        value: cdktf.stringToHclTerraform(this._updateTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
