// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignTemplatesToTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag Id to be associated with the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag#tag_id AssignTemplatesToTag#tag_id}
  */
  readonly tagId: string;
  /**
  * Template Ids List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag#template_ids AssignTemplatesToTag#template_ids}
  */
  readonly templateIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag catalystcenter_assign_templates_to_tag}
*/
export class AssignTemplatesToTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_assign_templates_to_tag";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignTemplatesToTag resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignTemplatesToTag to import
  * @param importFromId The id of the existing AssignTemplatesToTag that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignTemplatesToTag to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_assign_templates_to_tag", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.3/docs/resources/assign_templates_to_tag catalystcenter_assign_templates_to_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignTemplatesToTagConfig
  */
  public constructor(scope: Construct, id: string, config: AssignTemplatesToTagConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_assign_templates_to_tag',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.3',
        providerVersionConstraint: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._tagId = config.tagId;
    this._templateIds = config.templateIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag_id - computed: false, optional: false, required: true
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // template_ids - computed: false, optional: true, required: false
  private _templateIds?: string[]; 
  public get templateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('template_ids'));
  }
  public set templateIds(value: string[]) {
    this._templateIds = value;
  }
  public resetTemplateIds() {
    this._templateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdsInput() {
    return this._templateIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      tag_id: cdktf.stringToTerraform(this._tagId),
      template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      tag_id: {
        value: cdktf.stringToHclTerraform(this._tagId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
