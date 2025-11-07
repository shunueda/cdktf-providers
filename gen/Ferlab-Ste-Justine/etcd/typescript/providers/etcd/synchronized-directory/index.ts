// https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SynchronizedDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Directory to synchronize with the key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#directory SynchronizedDirectory#directory}
  */
  readonly directory: string;
  /**
  * Permission of generated directories if the directory is the destination and missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#directory_permission SynchronizedDirectory#directory_permission}
  */
  readonly directoryPermission?: string;
  /**
  * Permission of generated files in the case where the directory is the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#files_permission SynchronizedDirectory#files_permission}
  */
  readonly filesPermission?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#id SynchronizedDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key prefix to synchronize with the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#key_prefix SynchronizedDirectory#key_prefix}
  */
  readonly keyPrefix: string;
  /**
  * Defines when the resource should be recreated to trigger a resync. Can be set to once, onchange or always. Note that onchange looks for change during the plan phase only so consider setting it to always if another terraform resource in your script changes the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#recurrence SynchronizedDirectory#recurrence}
  */
  readonly recurrence?: string;
  /**
  * Authoritative source of data during the sync (data will move from the source to the destination). Can be one of: directory, key-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#source SynchronizedDirectory#source}
  */
  readonly source: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory etcd_synchronized_directory}
*/
export class SynchronizedDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "etcd_synchronized_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SynchronizedDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SynchronizedDirectory to import
  * @param importFromId The id of the existing SynchronizedDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SynchronizedDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "etcd_synchronized_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/etcd/0.11.0/docs/resources/synchronized_directory etcd_synchronized_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SynchronizedDirectoryConfig
  */
  public constructor(scope: Construct, id: string, config: SynchronizedDirectoryConfig) {
    super(scope, id, {
      terraformResourceType: 'etcd_synchronized_directory',
      terraformGeneratorMetadata: {
        providerName: 'etcd',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directory = config.directory;
    this._directoryPermission = config.directoryPermission;
    this._filesPermission = config.filesPermission;
    this._id = config.id;
    this._keyPrefix = config.keyPrefix;
    this._recurrence = config.recurrence;
    this._source = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // directory_permission - computed: false, optional: true, required: false
  private _directoryPermission?: string; 
  public get directoryPermission() {
    return this.getStringAttribute('directory_permission');
  }
  public set directoryPermission(value: string) {
    this._directoryPermission = value;
  }
  public resetDirectoryPermission() {
    this._directoryPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryPermissionInput() {
    return this._directoryPermission;
  }

  // files_permission - computed: false, optional: true, required: false
  private _filesPermission?: string; 
  public get filesPermission() {
    return this.getStringAttribute('files_permission');
  }
  public set filesPermission(value: string) {
    this._filesPermission = value;
  }
  public resetFilesPermission() {
    this._filesPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesPermissionInput() {
    return this._filesPermission;
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

  // key_prefix - computed: false, optional: false, required: true
  private _keyPrefix?: string; 
  public get keyPrefix() {
    return this.getStringAttribute('key_prefix');
  }
  public set keyPrefix(value: string) {
    this._keyPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPrefixInput() {
    return this._keyPrefix;
  }

  // recurrence - computed: false, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory: cdktf.stringToTerraform(this._directory),
      directory_permission: cdktf.stringToTerraform(this._directoryPermission),
      files_permission: cdktf.stringToTerraform(this._filesPermission),
      id: cdktf.stringToTerraform(this._id),
      key_prefix: cdktf.stringToTerraform(this._keyPrefix),
      recurrence: cdktf.stringToTerraform(this._recurrence),
      source: cdktf.stringToTerraform(this._source),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_permission: {
        value: cdktf.stringToHclTerraform(this._directoryPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_permission: {
        value: cdktf.stringToHclTerraform(this._filesPermission),
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
      key_prefix: {
        value: cdktf.stringToHclTerraform(this._keyPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence: {
        value: cdktf.stringToHclTerraform(this._recurrence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
