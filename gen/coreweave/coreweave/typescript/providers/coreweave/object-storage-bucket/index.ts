// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectStorageBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the bucket, must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket#name ObjectStorageBucket#name}
  */
  readonly name: string;
  /**
  * Map of tags to assign to the bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket#tags ObjectStorageBucket#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Availability Zone in which the bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket#zone ObjectStorageBucket#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket coreweave_object_storage_bucket}
*/
export class ObjectStorageBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_object_storage_bucket";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectStorageBucket resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectStorageBucket to import
  * @param importFromId The id of the existing ObjectStorageBucket that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectStorageBucket to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_object_storage_bucket", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/object_storage_bucket coreweave_object_storage_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectStorageBucketConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectStorageBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_object_storage_bucket',
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
    this._name = config.name;
    this._tags = config.tags;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
