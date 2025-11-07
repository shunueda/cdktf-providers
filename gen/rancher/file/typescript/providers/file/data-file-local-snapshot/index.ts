// https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFileLocalSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * The contents of the snapshot to retrieve. This could be any gzip compressed base64 encoded data. If the data isn't compressed, set the decompress argument to false, or leave it blank. If the decompress argument is false, the data will be the base64 decoded contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot#contents DataFileLocalSnapshot#contents}
  */
  readonly contents: string;
  /**
  * Whether or not to decompress the contents. If left empty, this will default to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot#decompress DataFileLocalSnapshot#decompress}
  */
  readonly decompress?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot file_local_snapshot}
*/
export class DataFileLocalSnapshot extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "file_local_snapshot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFileLocalSnapshot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFileLocalSnapshot to import
  * @param importFromId The id of the existing DataFileLocalSnapshot that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFileLocalSnapshot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "file_local_snapshot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/file/2.2.2/docs/data-sources/local_snapshot file_local_snapshot} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFileLocalSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: DataFileLocalSnapshotConfig) {
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
    this._contents = config.contents;
    this._decompress = config.decompress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contents - computed: false, optional: false, required: true
  private _contents?: string; 
  public get contents() {
    return this.getStringAttribute('contents');
  }
  public set contents(value: string) {
    this._contents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsInput() {
    return this._contents;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
  }

  // decompress - computed: true, optional: true, required: false
  private _decompress?: boolean | cdktf.IResolvable; 
  public get decompress() {
    return this.getBooleanAttribute('decompress');
  }
  public set decompress(value: boolean | cdktf.IResolvable) {
    this._decompress = value;
  }
  public resetDecompress() {
    this._decompress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressInput() {
    return this._decompress;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contents: cdktf.stringToTerraform(this._contents),
      decompress: cdktf.booleanToTerraform(this._decompress),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contents: {
        value: cdktf.stringToHclTerraform(this._contents),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decompress: {
        value: cdktf.booleanToHclTerraform(this._decompress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
