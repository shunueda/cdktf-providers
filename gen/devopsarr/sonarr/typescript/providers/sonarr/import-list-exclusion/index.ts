// https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImportListExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Series to be excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion#title ImportListExclusion#title}
  */
  readonly title: string;
  /**
  * Series TVDB ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion#tvdb_id ImportListExclusion#tvdb_id}
  */
  readonly tvdbId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion sonarr_import_list_exclusion}
*/
export class ImportListExclusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonarr_import_list_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImportListExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImportListExclusion to import
  * @param importFromId The id of the existing ImportListExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImportListExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonarr_import_list_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/sonarr/3.4.0/docs/resources/import_list_exclusion sonarr_import_list_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImportListExclusionConfig
  */
  public constructor(scope: Construct, id: string, config: ImportListExclusionConfig) {
    super(scope, id, {
      terraformResourceType: 'sonarr_import_list_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'sonarr',
        providerVersion: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._title = config.title;
    this._tvdbId = config.tvdbId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tvdb_id - computed: false, optional: false, required: true
  private _tvdbId?: number; 
  public get tvdbId() {
    return this.getNumberAttribute('tvdb_id');
  }
  public set tvdbId(value: number) {
    this._tvdbId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tvdbIdInput() {
    return this._tvdbId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      title: cdktf.stringToTerraform(this._title),
      tvdb_id: cdktf.numberToTerraform(this._tvdbId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tvdb_id: {
        value: cdktf.numberToHclTerraform(this._tvdbId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
