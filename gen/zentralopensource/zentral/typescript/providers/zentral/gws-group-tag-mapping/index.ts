// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GwsGroupTagMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * `ID` of the Google Workspace connection for this group tag mapping (UUID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping#connection_id GwsGroupTagMapping#connection_id}
  */
  readonly connectionId: string;
  /**
  * Group email of the Google Workspace group for this group tag mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping#group_email GwsGroupTagMapping#group_email}
  */
  readonly groupEmail: string;
  /**
  * `ID`s of the tags mapped with this group tag mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping#tag_ids GwsGroupTagMapping#tag_ids}
  */
  readonly tagIds: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping zentral_gws_group_tag_mapping}
*/
export class GwsGroupTagMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_gws_group_tag_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GwsGroupTagMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GwsGroupTagMapping to import
  * @param importFromId The id of the existing GwsGroupTagMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GwsGroupTagMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_gws_group_tag_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/gws_group_tag_mapping zentral_gws_group_tag_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GwsGroupTagMappingConfig
  */
  public constructor(scope: Construct, id: string, config: GwsGroupTagMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_gws_group_tag_mapping',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._groupEmail = config.groupEmail;
    this._tagIds = config.tagIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // group_email - computed: false, optional: false, required: true
  private _groupEmail?: string; 
  public get groupEmail() {
    return this.getStringAttribute('group_email');
  }
  public set groupEmail(value: string) {
    this._groupEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupEmailInput() {
    return this._groupEmail;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag_ids - computed: false, optional: false, required: true
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
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
      connection_id: cdktf.stringToTerraform(this._connectionId),
      group_email: cdktf.stringToTerraform(this._groupEmail),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_email: {
        value: cdktf.stringToHclTerraform(this._groupEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
