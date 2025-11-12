// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonolithManifestCatalogConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog#catalog_id MonolithManifestCatalog#catalog_id}
  */
  readonly catalogId: number;
  /**
  * ID of the manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog#manifest_id MonolithManifestCatalog#manifest_id}
  */
  readonly manifestId: number;
  /**
  * The `ID`s of the tags used to scope the catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog#tag_ids MonolithManifestCatalog#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog zentral_monolith_manifest_catalog}
*/
export class MonolithManifestCatalog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_monolith_manifest_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonolithManifestCatalog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonolithManifestCatalog to import
  * @param importFromId The id of the existing MonolithManifestCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonolithManifestCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_monolith_manifest_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.64/docs/resources/monolith_manifest_catalog zentral_monolith_manifest_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonolithManifestCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: MonolithManifestCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_monolith_manifest_catalog',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.64',
        providerVersionConstraint: '0.1.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._manifestId = config.manifestId;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: number; 
  public get catalogId() {
    return this.getNumberAttribute('catalog_id');
  }
  public set catalogId(value: number) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

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
      catalog_id: cdktf.numberToTerraform(this._catalogId),
      manifest_id: cdktf.numberToTerraform(this._manifestId),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.numberToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      manifest_id: {
        value: cdktf.numberToHclTerraform(this._manifestId),
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
