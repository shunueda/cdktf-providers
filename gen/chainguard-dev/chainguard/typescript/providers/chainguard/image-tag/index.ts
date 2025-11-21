// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of bundles associated with this repo (valid ones: `application|base|byol|ai|ai-gpu|featured|fips`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag#bundles ImageTag#bundles}
  */
  readonly bundles?: string[];
  /**
  * The name of this tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag#name ImageTag#name}
  */
  readonly name: string;
  /**
  * The repo that owns the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag#repo_id ImageTag#repo_id}
  */
  readonly repoId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag chainguard_image_tag}
*/
export class ImageTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_image_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageTag to import
  * @param importFromId The id of the existing ImageTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_image_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/image_tag chainguard_image_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageTagConfig
  */
  public constructor(scope: Construct, id: string, config: ImageTagConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_image_tag',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.41',
        providerVersionConstraint: '0.1.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bundles = config.bundles;
    this._name = config.name;
    this._repoId = config.repoId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundles - computed: false, optional: true, required: false
  private _bundles?: string[]; 
  public get bundles() {
    return this.getListAttribute('bundles');
  }
  public set bundles(value: string[]) {
    this._bundles = value;
  }
  public resetBundles() {
    this._bundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // repo_id - computed: false, optional: false, required: true
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bundles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bundles),
      name: cdktf.stringToTerraform(this._name),
      repo_id: cdktf.stringToTerraform(this._repoId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bundles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_id: {
        value: cdktf.stringToHclTerraform(this._repoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
