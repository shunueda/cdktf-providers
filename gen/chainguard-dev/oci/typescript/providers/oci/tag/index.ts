// https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Image ref by digest to apply the tag to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag#digest_ref Tag#digest_ref}
  */
  readonly digestRef: string;
  /**
  * Tag to apply to the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag#tag Tag#tag}
  */
  readonly tag: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag oci_tag}
*/
export class Tag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tag to import
  * @param importFromId The id of the existing Tag that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/oci/0.0.25/docs/resources/tag oci_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagConfig
  */
  public constructor(scope: Construct, id: string, config: TagConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tag',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '0.0.25',
        providerVersionConstraint: '0.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._digestRef = config.digestRef;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest_ref - computed: false, optional: false, required: true
  private _digestRef?: string; 
  public get digestRef() {
    return this.getStringAttribute('digest_ref');
  }
  public set digestRef(value: string) {
    this._digestRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestRefInput() {
    return this._digestRef;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tagged_ref - computed: true, optional: false, required: false
  public get taggedRef() {
    return this.getStringAttribute('tagged_ref');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest_ref: cdktf.stringToTerraform(this._digestRef),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest_ref: {
        value: cdktf.stringToHclTerraform(this._digestRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
