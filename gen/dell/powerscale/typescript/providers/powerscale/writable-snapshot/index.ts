// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WritableSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The destination path for the writable snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot#dst_path WritableSnapshot#dst_path}
  */
  readonly dstPath: string;
  /**
  * The ID of the source snapshot for the writable snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot#snap_id WritableSnapshot#snap_id}
  */
  readonly snapId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot powerscale_writable_snapshot}
*/
export class WritableSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_writable_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WritableSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WritableSnapshot to import
  * @param importFromId The id of the existing WritableSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WritableSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_writable_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/writable_snapshot powerscale_writable_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WritableSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: WritableSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_writable_snapshot',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstPath = config.dstPath;
    this._snapId = config.snapId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_path - computed: false, optional: false, required: true
  private _dstPath?: string; 
  public get dstPath() {
    return this.getStringAttribute('dst_path');
  }
  public set dstPath(value: string) {
    this._dstPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPathInput() {
    return this._dstPath;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // snap_id - computed: false, optional: false, required: true
  private _snapId?: string; 
  public get snapId() {
    return this.getStringAttribute('snap_id');
  }
  public set snapId(value: string) {
    this._snapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snapIdInput() {
    return this._snapId;
  }

  // snap_name - computed: true, optional: false, required: false
  public get snapName() {
    return this.getStringAttribute('snap_name');
  }

  // src_path - computed: true, optional: false, required: false
  public get srcPath() {
    return this.getStringAttribute('src_path');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_path: cdktf.stringToTerraform(this._dstPath),
      snap_id: cdktf.stringToTerraform(this._snapId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_path: {
        value: cdktf.stringToHclTerraform(this._dstPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snap_id: {
        value: cdktf.stringToHclTerraform(this._snapId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
