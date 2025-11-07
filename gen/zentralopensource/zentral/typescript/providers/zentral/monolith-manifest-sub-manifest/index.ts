// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithManifestSubManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest#manifest_id MonolithManifestSubManifest#manifest_id}
  */
  readonly manifestId: number;
  /**
  * ID of the sub manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest#sub_manifest_id MonolithManifestSubManifest#sub_manifest_id}
  */
  readonly subManifestId: number;
  /**
  * The `ID`s of the tags used to scope the sub manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest#tag_ids MonolithManifestSubManifest#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest zentral_monolith_manifest_sub_manifest}
*/
export class MonolithManifestSubManifest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_manifest_sub_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithManifestSubManifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithManifestSubManifest to import
  * @param importFromId The id of the existing MonolithManifestSubManifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithManifestSubManifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_manifest_sub_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_sub_manifest zentral_monolith_manifest_sub_manifest} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithManifestSubManifestConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithManifestSubManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_manifest_sub_manifest',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._manifestId = config.manifestId;
    this._subManifestId = config.subManifestId;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // manifest_id - computed: false, optional: false, required: true
  private _manifestId?: number; 
  public get manifestId() {
    return this.getNumberAttribute('manifest_id');
  }
  public set manifestId(value: number) {
    this._manifestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestIdInput() {
    return this._manifestId;
  }

  // sub_manifest_id - computed: false, optional: false, required: true
  private _subManifestId?: number; 
  public get subManifestId() {
    return this.getNumberAttribute('sub_manifest_id');
  }
  public set subManifestId(value: number) {
    this._subManifestId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subManifestIdInput() {
    return this._subManifestId;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      manifest_id: cdktf.numberToTerraform(this._manifestId),
      sub_manifest_id: cdktf.numberToTerraform(this._subManifestId),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      manifest_id: {
        value: cdktf.numberToHclTerraform(this._manifestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sub_manifest_id: {
        value: cdktf.numberToHclTerraform(this._subManifestId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
