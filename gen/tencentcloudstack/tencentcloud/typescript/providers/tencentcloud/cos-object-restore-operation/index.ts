// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosObjectRestoreOperationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#bucket CosObjectRestoreOperation#bucket}
  */
  readonly bucket: string;
  /**
  * Specifies the valid duration of the restored temporary copy in days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#days CosObjectRestoreOperation#days}
  */
  readonly days: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#id CosObjectRestoreOperation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#key CosObjectRestoreOperation#key}
  */
  readonly key: string;
  /**
  * when restoring, Tier can be specified as the supported recovery model.
  * There are three recovery models for recovering archived storage type data, which are:
  * - Expedited: quick retrieval mode, and the recovery task can be completed in 1-5 minutes.
  * - Standard: standard retrieval mode. Recovery task is completed within 3-5 hours.
  * - Bulk: batch retrieval mode, and the recovery task is completed within 5-12 hours.
  * For deep recovery archive storage type data, there are two recovery models, which are:
  * - Standard: standard retrieval mode, recovery time is 12-24 hours.
  * - Bulk: batch retrieval mode, recovery time is 24-48 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#tier CosObjectRestoreOperation#tier}
  */
  readonly tier: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation tencentcloud_cos_object_restore_operation}
*/
export class CosObjectRestoreOperation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cos_object_restore_operation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CosObjectRestoreOperation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CosObjectRestoreOperation to import
  * @param importFromId The id of the existing CosObjectRestoreOperation that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CosObjectRestoreOperation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cos_object_restore_operation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/cos_object_restore_operation tencentcloud_cos_object_restore_operation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosObjectRestoreOperationConfig
  */
  public constructor(scope: Construct, id: string, config: CosObjectRestoreOperationConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cos_object_restore_operation',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._days = config.days;
    this._id = config.id;
    this._key = config.key;
    this._tier = config.tier;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // days - computed: false, optional: false, required: true
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
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

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      days: cdktf.numberToTerraform(this._days),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      tier: cdktf.stringToTerraform(this._tier),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      days: {
        value: cdktf.numberToHclTerraform(this._days),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
