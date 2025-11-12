// https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProtectionGroupBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * Clumio assigned unique identifier of the AWS S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket#bucket_id ProtectionGroupBucket#bucket_id}
  */
  readonly bucketId: string;
  /**
  * Unique identifier of the Protection Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket#protection_group_id ProtectionGroupBucket#protection_group_id}
  */
  readonly protectionGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket clumio_protection_group_bucket}
*/
export class ProtectionGroupBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clumio_protection_group_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProtectionGroupBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProtectionGroupBucket to import
  * @param importFromId The id of the existing ProtectionGroupBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProtectionGroupBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clumio_protection_group_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clumio-code/clumio/0.16.1/docs/resources/protection_group_bucket clumio_protection_group_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProtectionGroupBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ProtectionGroupBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'clumio_protection_group_bucket',
      terraformGeneratorMetadata: {
        providerName: 'clumio',
        providerVersion: '0.16.1',
        providerVersionConstraint: '0.16.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._protectionGroupId = config.protectionGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protection_group_id - computed: false, optional: false, required: true
  private _protectionGroupId?: string; 
  public get protectionGroupId() {
    return this.getStringAttribute('protection_group_id');
  }
  public set protectionGroupId(value: string) {
    this._protectionGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionGroupIdInput() {
    return this._protectionGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      protection_group_id: cdktf.stringToTerraform(this._protectionGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.stringToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection_group_id: {
        value: cdktf.stringToHclTerraform(this._protectionGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
