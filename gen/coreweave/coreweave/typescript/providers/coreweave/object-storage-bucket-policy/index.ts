// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageBucketPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket for which to apply this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy#bucket ObjectStorageBucketPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Text of the policy. Must be valid JSON. The coreweave_object_storage_bucket_policy_document data source may be used, simply reference the `.json` attribute of the data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy#policy ObjectStorageBucketPolicy#policy}
  */
  readonly policy: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy coreweave_object_storage_bucket_policy}
*/
export class ObjectStorageBucketPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_object_storage_bucket_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageBucketPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageBucketPolicy to import
  * @param importFromId The id of the existing ObjectStorageBucketPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageBucketPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_object_storage_bucket_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket_policy coreweave_object_storage_bucket_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageBucketPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageBucketPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_object_storage_bucket_policy',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0'
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
    this._policy = config.policy;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      policy: cdktf.stringToTerraform(this._policy),
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
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
