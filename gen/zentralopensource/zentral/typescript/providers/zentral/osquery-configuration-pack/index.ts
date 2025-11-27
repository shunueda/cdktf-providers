// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsqueryConfigurationPackConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack#configuration_id OsqueryConfigurationPack#configuration_id}
  */
  readonly configurationId: number;
  /**
  * The `ID`s of the tags used to put the pack out of scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack#excluded_tag_ids OsqueryConfigurationPack#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * ID of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack#pack_id OsqueryConfigurationPack#pack_id}
  */
  readonly packId: number;
  /**
  * The `ID`s of the tags used to scope the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack#tag_ids OsqueryConfigurationPack#tag_ids}
  */
  readonly tagIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack zentral_osquery_configuration_pack}
*/
export class OsqueryConfigurationPack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_configuration_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsqueryConfigurationPack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsqueryConfigurationPack to import
  * @param importFromId The id of the existing OsqueryConfigurationPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsqueryConfigurationPack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_configuration_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/osquery_configuration_pack zentral_osquery_configuration_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsqueryConfigurationPackConfig
  */
  public constructor(scope: Construct, id: string, config: OsqueryConfigurationPackConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_configuration_pack',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configurationId = config.configurationId;
    this._excludedTagIds = config.excludedTagIds;
    this._packId = config.packId;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: number; 
  public get configurationId() {
    return this.getNumberAttribute('configuration_id');
  }
  public set configurationId(value: number) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // excluded_tag_ids - computed: true, optional: true, required: false
  private _excludedTagIds?: number[]; 
  public get excludedTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_tag_ids')));
  }
  public set excludedTagIds(value: number[]) {
    this._excludedTagIds = value;
  }
  public resetExcludedTagIds() {
    this._excludedTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagIdsInput() {
    return this._excludedTagIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // pack_id - computed: false, optional: false, required: true
  private _packId?: number; 
  public get packId() {
    return this.getNumberAttribute('pack_id');
  }
  public set packId(value: number) {
    this._packId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packIdInput() {
    return this._packId;
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
      configuration_id: cdktf.numberToTerraform(this._configurationId),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      pack_id: cdktf.numberToTerraform(this._packId),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration_id: {
        value: cdktf.numberToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      excluded_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      pack_id: {
        value: cdktf.numberToHclTerraform(this._packId),
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
