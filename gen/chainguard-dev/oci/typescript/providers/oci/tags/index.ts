// https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Repository for the tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags#repo Tags#repo}
  */
  readonly repo: string;
  /**
  * Map of tag -> digest to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags#tags Tags#tags}
  */
  readonly tags: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags oci_tags}
*/
export class Tags extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tags to import
  * @param importFromId The id of the existing Tags that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tags oci_tags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagsConfig
  */
  public constructor(scope: Construct, id: string, config: TagsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tags',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._repo = config.repo;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repo - computed: false, optional: false, required: true
  private _repo?: string; 
  public get repo() {
    return this.getStringAttribute('repo');
  }
  public set repo(value: string) {
    this._repo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoInput() {
    return this._repo;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      repo: cdktf.stringToTerraform(this._repo),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      repo: {
        value: cdktf.stringToHclTerraform(this._repo),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
