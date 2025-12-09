// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEdgecenterStorageS3BucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket#id DataEdgecenterStorageS3Bucket#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name of storage bucket resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket#name DataEdgecenterStorageS3Bucket#name}
  */
  readonly name: string;
  /**
  * An id of existing storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket#storage_id DataEdgecenterStorageS3Bucket#storage_id}
  */
  readonly storageId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket edgecenter_storage_s3_bucket}
*/
export class DataEdgecenterStorageS3Bucket extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_storage_s3_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEdgecenterStorageS3Bucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEdgecenterStorageS3Bucket to import
  * @param importFromId The id of the existing DataEdgecenterStorageS3Bucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEdgecenterStorageS3Bucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_storage_s3_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.6/docs/data-sources/storage_s3_bucket edgecenter_storage_s3_bucket} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEdgecenterStorageS3BucketConfig
  */
  public constructor(scope: Construct, id: string, config: DataEdgecenterStorageS3BucketConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_storage_s3_bucket',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.6',
        providerVersionConstraint: '0.10.6'
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
    this._name = config.name;
    this._storageId = config.storageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_id - computed: false, optional: false, required: true
  private _storageId?: number; 
  public get storageId() {
    return this.getNumberAttribute('storage_id');
  }
  public set storageId(value: number) {
    this._storageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_id: cdktf.numberToTerraform(this._storageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      storage_id: {
        value: cdktf.numberToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
